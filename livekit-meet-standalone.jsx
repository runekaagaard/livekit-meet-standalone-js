import React from 'react'
import { createRoot } from 'react-dom/client'
import { LiveKitRoom, VideoConference, PreJoin } from '@livekit/components-react'
import { Room, ExternalE2EEKeyProvider } from 'livekit-client'
import '@livekit/components-styles'
import 'alertifyjs/build/css/alertify.css'
import alertify from 'alertifyjs'

const validateE2EEOptions = (e2eeOptions) => {
  if (!e2eeOptions) {
    throw new Error('E2EE options are required')
  }
  if (!!e2eeOptions.disabled) {
    return
  }
  if (!e2eeOptions.workerUrl) {
    throw new Error('E2EE worker URL is required')
  }
  if (!e2eeOptions.key) {
    throw new Error('E2EE key is required')
  }
}

const getRoom = (options = {}, e2eeOptions) => {
  validateE2EEOptions(e2eeOptions)

  if (e2eeOptions.disabled !== true) {
    const keyProvider = new ExternalE2EEKeyProvider()
    keyProvider.setKey(e2eeOptions.key)

    const room = new Room({
      ...options,
      e2ee: {
        keyProvider,
        worker: new Worker(e2eeOptions.workerUrl)
      }
    })

    room.setE2EEEnabled(true)
    return room
  } else {
    return new Room(options)
  }
}

const LivekitRoomComponent = ({livekitRoomOptions = {}, e2eeOptions}) => (
  <LiveKitRoom 
    room={getRoom(livekitRoomOptions, e2eeOptions)}
    connectOptions={{ autoSubscribe: true }}
    onError={(error) => {
      console.error('Room error:', error)
      alertify.error(`Room error: ${error.message}`)
    }}
    {...livekitRoomOptions}
  >
    <VideoConference />
  </LiveKitRoom>
)

const PreJoinComponent = ({preJoinOptions = {}}) => (
  <PreJoin 
    onError={(error) => {
      console.error('PreJoin error:', error)
      alertify.error(`Failed to join: ${error.message}`)
    }}
    {...preJoinOptions} 
  /> 
)

const getRoot = (elementId) => {
  const container = document.getElementById(elementId)
  if (!container) {
    console.error(`No div with id "${elementId}" found`)
    alertify.error(`UI container not found: ${elementId}`)
    return null
  }
  return createRoot(container)
}

function leave(returnUrl) {
  if (window.livekituiLeaving) return
  window.livekituiLeaving = true
  if (returnUrl) {
    window.location.href = returnUrl
  } else {
    window.location.href = window.location.href
  }
}

// User-facing functions
function preJoin(token, serverUrl, name, returnUrl, e2eeOptions) {
  try {
    validateE2EEOptions(e2eeOptions)
  } catch (error) {
    alertify.error(error.message)
    return
  }

  document.body.classList.add('livekitui-prejoin')
  const root = getRoot('livekitui-ui')
  if (!root) return
  
  root.render(
    <PreJoinComponent
      preJoinOptions={{
        'data-lk-theme': 'default',
        video: true,
        audio: true,
        persistUserChoices: true,
        defaults: {
          username: "set-by-token-is-here-for-validation-hidden-via-css"
        },
        token,
        serverUrl,
        name,
        onSubmit: (preJoinChoices) => {
          document.body.classList.remove('livekitui-prejoin')
          room(token, serverUrl, name, preJoinChoices, returnUrl, e2eeOptions)
        }
      }}
    />
  )
}

function room(token, serverUrl, name, preJoinChoices, returnUrl, e2eeOptions) {
  window.returnUrl = returnUrl
  
  try {
    validateE2EEOptions(e2eeOptions)
  } catch (error) {
    alertify.error(error.message)
    return
  }

  document.body.classList.add('livekitui-room')
  const root = getRoot('livekitui-ui')
  if (!root) return
  
  root.render(
    <LivekitRoomComponent 
      livekitRoomOptions={{                                                                             
        'data-lk-theme': 'default',
        token,
        serverUrl,
        name,
        connect: true,
        audio: preJoinChoices?.audioEnabled,
        video: preJoinChoices?.videoEnabled,
        onError: (error) => {
          if (error.message === "Client initiated disconnect") return
          console.error(error)
          alertify.error(error.message)
        },
        onDisconnected: () => {
          leave(returnUrl)
        },
      }}
      e2eeOptions={e2eeOptions}
    />
  )
}

document.addEventListener('click', e => {
  if (e.target.matches('.lk-disconnect-button')) {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    leave(window.returnUrl)
  }
})

// Expose functions to window.livekit
window.livekit = { preJoin, room }
