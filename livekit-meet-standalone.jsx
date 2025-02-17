import React from 'react'
import { createRoot } from 'react-dom/client'
import { LiveKitRoom, VideoConference, PreJoin } from '@livekit/components-react'
import { Room, ExternalE2EEKeyProvider, RoomEvent } from 'livekit-client'

import '@livekit/components-styles'
import 'alertifyjs/build/css/alertify.css'
import alertify from 'alertifyjs'

function setUrlParam(name, value) {
  const url = new URL(window.location.href)
  url.searchParams.set(name, value)
  window.history.replaceState({}, '', url)
}

function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search)
  return params.get(name)
}

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
  var livekitRoom
  if (e2eeOptions.disabled !== true) {
    const keyProvider = new ExternalE2EEKeyProvider()
    keyProvider.setKey(e2eeOptions.key)

    livekitRoom = new Room({
      ...options,
      e2ee: {
        keyProvider,
        worker: new Worker(e2eeOptions.workerUrl)
      }
    })
    livekitRoom.setE2EEEnabled(true)
  } else {
    livekitRoom = new Room(options)
  }

  livekitRoom.on(RoomEvent.TrackMuted, (track) => {
    if (track.kind === 'audio') {
      setUrlParam('audio', 'off');
    } else if (track.kind === 'video') {
      setUrlParam('video', 'off');
    }
  });

  livekitRoom.on(RoomEvent.TrackUnmuted, (track) => {
    if (track.kind === 'audio') {
      setUrlParam('audio', 'on');
    } else if (track.kind === 'video') {
      setUrlParam('video', 'on');
    }
  });
  
  return livekitRoom
}

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
    <PreJoin 
      data-lk-theme="default"
      video={true}
      audio={true}
      persistUserChoices={true}
      defaults={{
        username: "set-by-token-is-here-for-validation-hidden-via-css"
      }}
      token={token}
      serverUrl={serverUrl}
      name={name}
      onError={(error) => {
        console.error('PreJoin error:', error)
        alertify.error(`Failed to join: ${error.message}`)
      }}
      onSubmit={(preJoinChoices) => {
        document.body.classList.remove('livekitui-prejoin')
        room(token, serverUrl, name, preJoinChoices.audioEnabled, preJoinChoices.videoEnabled, returnUrl, e2eeOptions)
      }}
    />
  )
}

function room(token, serverUrl, name, audioEnabled, videoEnabled, returnUrl, e2eeOptions) {
  setUrlParam("joined", "ok")
  setUrlParam("audio", audioEnabled ? "on" : "off")
  setUrlParam("video", videoEnabled ? "on" : "off")
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
    <LiveKitRoom 
      room={getRoom({ token, serverUrl, name }, e2eeOptions)}
      data-lk-theme="default"
      token={token}
      serverUrl={serverUrl}
      name={name}
      connect={true}
      audio={audioEnabled}
      video={videoEnabled}
      connectOptions={{ autoSubscribe: true }}
      onError={(error) => {
        if (error.message === "Client initiated disconnect") return
        console.error(error)
        alertify.error(error.message)
      }}
      onDisconnected={() => {
        leave(returnUrl)
      }}
    >
      <VideoConference />
    </LiveKitRoom>
  )
}

function init(token, serverUrl, name, returnUrl, e2eeOptions) {
  const joined = getUrlParam("joined") === "ok"
  if (joined) {
    const audioEnabled = getUrlParam("audio") === "on"
    const videoEnabled = getUrlParam("video") === "on"
    room(token, serverUrl, name, audioEnabled, videoEnabled, returnUrl, e2eeOptions)
  } else {
    preJoin(token, serverUrl, name, returnUrl, e2eeOptions)
  }
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
window.livekit = { preJoin, room, init }
