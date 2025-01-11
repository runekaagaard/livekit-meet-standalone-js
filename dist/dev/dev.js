(() => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("3sXGE", function(module, exports) {

$parcel$export(module.exports, "register", () => $28624930cedb737c$export$6503ec6e8aabbaf, (v) => $28624930cedb737c$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $28624930cedb737c$export$f7ad0328861e2f03, (v) => $28624930cedb737c$export$f7ad0328861e2f03 = v);
var $28624930cedb737c$export$6503ec6e8aabbaf;
var $28624930cedb737c$export$f7ad0328861e2f03;
"use strict";
var $28624930cedb737c$var$mapping = new Map();
function $28624930cedb737c$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$28624930cedb737c$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $28624930cedb737c$var$resolve(id) {
    var resolved = $28624930cedb737c$var$mapping.get(id);
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$28624930cedb737c$export$6503ec6e8aabbaf = $28624930cedb737c$var$register;
$28624930cedb737c$export$f7ad0328861e2f03 = $28624930cedb737c$var$resolve;

});

parcelRegister("2S9Tk", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $21784c1f4714052f$export$bdfd709ae4826697, (v) => $21784c1f4714052f$export$bdfd709ae4826697 = v);
var $21784c1f4714052f$export$bdfd709ae4826697;
var $21784c1f4714052f$export$c9e73fbda7da57b6;
var $21784c1f4714052f$export$5a759dc7a1cfb72a;
"use strict";
var $21784c1f4714052f$var$bundleURL = {};
function $21784c1f4714052f$var$getBundleURLCached(id) {
    var value = $21784c1f4714052f$var$bundleURL[id];
    if (!value) {
        value = $21784c1f4714052f$var$getBundleURL();
        $21784c1f4714052f$var$bundleURL[id] = value;
    }
    return value;
}
function $21784c1f4714052f$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $21784c1f4714052f$var$getBaseURL(matches[2]);
    }
    return '/';
}
function $21784c1f4714052f$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $21784c1f4714052f$var$getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
$21784c1f4714052f$export$bdfd709ae4826697 = $21784c1f4714052f$var$getBundleURLCached;
$21784c1f4714052f$export$c9e73fbda7da57b6 = $21784c1f4714052f$var$getBaseURL;
$21784c1f4714052f$export$5a759dc7a1cfb72a = $21784c1f4714052f$var$getOrigin;

});

parcelRegister("gBNVf", function(module, exports) {
// shim for using process in browser
var $c176d395fa3c7997$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $c176d395fa3c7997$var$cachedSetTimeout;
var $c176d395fa3c7997$var$cachedClearTimeout;
function $c176d395fa3c7997$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $c176d395fa3c7997$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $c176d395fa3c7997$var$cachedSetTimeout = setTimeout;
        else $c176d395fa3c7997$var$cachedSetTimeout = $c176d395fa3c7997$var$defaultSetTimout;
    } catch (e) {
        $c176d395fa3c7997$var$cachedSetTimeout = $c176d395fa3c7997$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $c176d395fa3c7997$var$cachedClearTimeout = clearTimeout;
        else $c176d395fa3c7997$var$cachedClearTimeout = $c176d395fa3c7997$var$defaultClearTimeout;
    } catch (e) {
        $c176d395fa3c7997$var$cachedClearTimeout = $c176d395fa3c7997$var$defaultClearTimeout;
    }
})();
function $c176d395fa3c7997$var$runTimeout(fun) {
    if ($c176d395fa3c7997$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($c176d395fa3c7997$var$cachedSetTimeout === $c176d395fa3c7997$var$defaultSetTimout || !$c176d395fa3c7997$var$cachedSetTimeout) && setTimeout) {
        $c176d395fa3c7997$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $c176d395fa3c7997$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $c176d395fa3c7997$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $c176d395fa3c7997$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $c176d395fa3c7997$var$runClearTimeout(marker) {
    if ($c176d395fa3c7997$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($c176d395fa3c7997$var$cachedClearTimeout === $c176d395fa3c7997$var$defaultClearTimeout || !$c176d395fa3c7997$var$cachedClearTimeout) && clearTimeout) {
        $c176d395fa3c7997$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $c176d395fa3c7997$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $c176d395fa3c7997$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $c176d395fa3c7997$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $c176d395fa3c7997$var$queue = [];
var $c176d395fa3c7997$var$draining = false;
var $c176d395fa3c7997$var$currentQueue;
var $c176d395fa3c7997$var$queueIndex = -1;
function $c176d395fa3c7997$var$cleanUpNextTick() {
    if (!$c176d395fa3c7997$var$draining || !$c176d395fa3c7997$var$currentQueue) return;
    $c176d395fa3c7997$var$draining = false;
    if ($c176d395fa3c7997$var$currentQueue.length) $c176d395fa3c7997$var$queue = $c176d395fa3c7997$var$currentQueue.concat($c176d395fa3c7997$var$queue);
    else $c176d395fa3c7997$var$queueIndex = -1;
    if ($c176d395fa3c7997$var$queue.length) $c176d395fa3c7997$var$drainQueue();
}
function $c176d395fa3c7997$var$drainQueue() {
    if ($c176d395fa3c7997$var$draining) return;
    var timeout = $c176d395fa3c7997$var$runTimeout($c176d395fa3c7997$var$cleanUpNextTick);
    $c176d395fa3c7997$var$draining = true;
    var len = $c176d395fa3c7997$var$queue.length;
    while(len){
        $c176d395fa3c7997$var$currentQueue = $c176d395fa3c7997$var$queue;
        $c176d395fa3c7997$var$queue = [];
        while(++$c176d395fa3c7997$var$queueIndex < len)if ($c176d395fa3c7997$var$currentQueue) $c176d395fa3c7997$var$currentQueue[$c176d395fa3c7997$var$queueIndex].run();
        $c176d395fa3c7997$var$queueIndex = -1;
        len = $c176d395fa3c7997$var$queue.length;
    }
    $c176d395fa3c7997$var$currentQueue = null;
    $c176d395fa3c7997$var$draining = false;
    $c176d395fa3c7997$var$runClearTimeout(timeout);
}
$c176d395fa3c7997$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $c176d395fa3c7997$var$queue.push(new $c176d395fa3c7997$var$Item(fun, args));
    if ($c176d395fa3c7997$var$queue.length === 1 && !$c176d395fa3c7997$var$draining) $c176d395fa3c7997$var$runTimeout($c176d395fa3c7997$var$drainQueue);
};
// v8 likes predictible objects
function $c176d395fa3c7997$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$c176d395fa3c7997$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$c176d395fa3c7997$var$process.title = 'browser';
$c176d395fa3c7997$var$process.browser = true;
$c176d395fa3c7997$var$process.env = {};
$c176d395fa3c7997$var$process.argv = [];
$c176d395fa3c7997$var$process.version = ''; // empty string to avoid regexp issues
$c176d395fa3c7997$var$process.versions = {};
function $c176d395fa3c7997$var$noop() {}
$c176d395fa3c7997$var$process.on = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.addListener = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.once = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.off = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.removeListener = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.removeAllListeners = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.emit = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.prependListener = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.prependOnceListener = $c176d395fa3c7997$var$noop;
$c176d395fa3c7997$var$process.listeners = function(name) {
    return [];
};
$c176d395fa3c7997$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$c176d395fa3c7997$var$process.cwd = function() {
    return '/';
};
$c176d395fa3c7997$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$c176d395fa3c7997$var$process.umask = function() {
    return 0;
};

});

parcelRegister("1NDXH", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.GeneratedCodeInfo_Annotation_Semantic = module.exports.GeneratedCodeInfo_Annotation = module.exports.GeneratedCodeInfo = module.exports.SourceCodeInfo_Location = module.exports.SourceCodeInfo = module.exports.FeatureSetDefaults_FeatureSetEditionDefault = module.exports.FeatureSetDefaults = module.exports.FeatureSet_JsonFormat = module.exports.FeatureSet_MessageEncoding = module.exports.FeatureSet_Utf8Validation = module.exports.FeatureSet_RepeatedFieldEncoding = module.exports.FeatureSet_EnumType = module.exports.FeatureSet_FieldPresence = module.exports.FeatureSet = module.exports.UninterpretedOption_NamePart = module.exports.UninterpretedOption = module.exports.MethodOptions_IdempotencyLevel = module.exports.MethodOptions = module.exports.ServiceOptions = module.exports.EnumValueOptions = module.exports.EnumOptions = module.exports.OneofOptions = module.exports.FieldOptions_FeatureSupport = module.exports.FieldOptions_EditionDefault = module.exports.FieldOptions_OptionTargetType = module.exports.FieldOptions_OptionRetention = module.exports.FieldOptions_JSType = module.exports.FieldOptions_CType = module.exports.FieldOptions = module.exports.MessageOptions = module.exports.FileOptions_OptimizeMode = module.exports.FileOptions = module.exports.MethodDescriptorProto = module.exports.ServiceDescriptorProto = module.exports.EnumValueDescriptorProto = module.exports.EnumDescriptorProto_EnumReservedRange = module.exports.EnumDescriptorProto = module.exports.OneofDescriptorProto = module.exports.FieldDescriptorProto_Label = module.exports.FieldDescriptorProto_Type = module.exports.FieldDescriptorProto = module.exports.ExtensionRangeOptions_Declaration = module.exports.ExtensionRangeOptions_VerificationState = module.exports.ExtensionRangeOptions = module.exports.DescriptorProto_ReservedRange = module.exports.DescriptorProto_ExtensionRange = module.exports.DescriptorProto = module.exports.FileDescriptorProto = module.exports.FileDescriptorSet = module.exports.Edition = void 0;

var $fGM1a = parcelRequire("fGM1a");

var $cI13w = parcelRequire("cI13w");
/**
 * The full set of known editions.
 *
 * @generated from enum google.protobuf.Edition
 */ var $14f95da50e71417d$var$Edition;
(function(Edition) {
    /**
     * A placeholder for an unknown edition value.
     *
     * @generated from enum value: EDITION_UNKNOWN = 0;
     */ Edition[Edition["EDITION_UNKNOWN"] = 0] = "EDITION_UNKNOWN";
    /**
     * A placeholder edition for specifying default behaviors *before* a feature
     * was first introduced.  This is effectively an "infinite past".
     *
     * @generated from enum value: EDITION_LEGACY = 900;
     */ Edition[Edition["EDITION_LEGACY"] = 900] = "EDITION_LEGACY";
    /**
     * Legacy syntax "editions".  These pre-date editions, but behave much like
     * distinct editions.  These can't be used to specify the edition of proto
     * files, but feature definitions must supply proto2/proto3 defaults for
     * backwards compatibility.
     *
     * @generated from enum value: EDITION_PROTO2 = 998;
     */ Edition[Edition["EDITION_PROTO2"] = 998] = "EDITION_PROTO2";
    /**
     * @generated from enum value: EDITION_PROTO3 = 999;
     */ Edition[Edition["EDITION_PROTO3"] = 999] = "EDITION_PROTO3";
    /**
     * Editions that have been released.  The specific values are arbitrary and
     * should not be depended on, but they will always be time-ordered for easy
     * comparison.
     *
     * @generated from enum value: EDITION_2023 = 1000;
     */ Edition[Edition["EDITION_2023"] = 1000] = "EDITION_2023";
    /**
     * @generated from enum value: EDITION_2024 = 1001;
     */ Edition[Edition["EDITION_2024"] = 1001] = "EDITION_2024";
    /**
     * Placeholder editions for testing feature resolution.  These should not be
     * used or relyed on outside of tests.
     *
     * @generated from enum value: EDITION_1_TEST_ONLY = 1;
     */ Edition[Edition["EDITION_1_TEST_ONLY"] = 1] = "EDITION_1_TEST_ONLY";
    /**
     * @generated from enum value: EDITION_2_TEST_ONLY = 2;
     */ Edition[Edition["EDITION_2_TEST_ONLY"] = 2] = "EDITION_2_TEST_ONLY";
    /**
     * @generated from enum value: EDITION_99997_TEST_ONLY = 99997;
     */ Edition[Edition["EDITION_99997_TEST_ONLY"] = 99997] = "EDITION_99997_TEST_ONLY";
    /**
     * @generated from enum value: EDITION_99998_TEST_ONLY = 99998;
     */ Edition[Edition["EDITION_99998_TEST_ONLY"] = 99998] = "EDITION_99998_TEST_ONLY";
    /**
     * @generated from enum value: EDITION_99999_TEST_ONLY = 99999;
     */ Edition[Edition["EDITION_99999_TEST_ONLY"] = 99999] = "EDITION_99999_TEST_ONLY";
    /**
     * Placeholder for specifying unbounded edition support.  This should only
     * ever be used by plugins that can expect to never require any changes to
     * support a new edition.
     *
     * @generated from enum value: EDITION_MAX = 2147483647;
     */ Edition[Edition["EDITION_MAX"] = 2147483647] = "EDITION_MAX";
})($14f95da50e71417d$var$Edition || (module.exports.Edition = $14f95da50e71417d$var$Edition = {}));
// Retrieve enum metadata with: proto2.getEnumType(Edition)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$Edition, "google.protobuf.Edition", [
    {
        no: 0,
        name: "EDITION_UNKNOWN"
    },
    {
        no: 900,
        name: "EDITION_LEGACY"
    },
    {
        no: 998,
        name: "EDITION_PROTO2"
    },
    {
        no: 999,
        name: "EDITION_PROTO3"
    },
    {
        no: 1000,
        name: "EDITION_2023"
    },
    {
        no: 1001,
        name: "EDITION_2024"
    },
    {
        no: 1,
        name: "EDITION_1_TEST_ONLY"
    },
    {
        no: 2,
        name: "EDITION_2_TEST_ONLY"
    },
    {
        no: 99997,
        name: "EDITION_99997_TEST_ONLY"
    },
    {
        no: 99998,
        name: "EDITION_99998_TEST_ONLY"
    },
    {
        no: 99999,
        name: "EDITION_99999_TEST_ONLY"
    },
    {
        no: 2147483647,
        name: "EDITION_MAX"
    }
]);
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 *
 * @generated from message google.protobuf.FileDescriptorSet
 */ class $14f95da50e71417d$var$FileDescriptorSet extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.FileDescriptorProto file = 1;
         */ this.file = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FileDescriptorSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FileDescriptorSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FileDescriptorSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FileDescriptorSet, a, b);
    }
}
module.exports.FileDescriptorSet = $14f95da50e71417d$var$FileDescriptorSet;
$14f95da50e71417d$var$FileDescriptorSet.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FileDescriptorSet.typeName = "google.protobuf.FileDescriptorSet";
$14f95da50e71417d$var$FileDescriptorSet.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: $14f95da50e71417d$var$FileDescriptorProto,
            repeated: true
        }
    ]);
/**
 * Describes a complete .proto file.
 *
 * @generated from message google.protobuf.FileDescriptorProto
 */ class $14f95da50e71417d$var$FileDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Names of files imported by this file.
         *
         * @generated from field: repeated string dependency = 3;
         */ this.dependency = [];
        /**
         * Indexes of the public imported files in the dependency list above.
         *
         * @generated from field: repeated int32 public_dependency = 10;
         */ this.publicDependency = [];
        /**
         * Indexes of the weak imported files in the dependency list.
         * For Google-internal migration only. Do not use.
         *
         * @generated from field: repeated int32 weak_dependency = 11;
         */ this.weakDependency = [];
        /**
         * All top-level definitions in this file.
         *
         * @generated from field: repeated google.protobuf.DescriptorProto message_type = 4;
         */ this.messageType = [];
        /**
         * @generated from field: repeated google.protobuf.EnumDescriptorProto enum_type = 5;
         */ this.enumType = [];
        /**
         * @generated from field: repeated google.protobuf.ServiceDescriptorProto service = 6;
         */ this.service = [];
        /**
         * @generated from field: repeated google.protobuf.FieldDescriptorProto extension = 7;
         */ this.extension = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FileDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FileDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FileDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FileDescriptorProto, a, b);
    }
}
module.exports.FileDescriptorProto = $14f95da50e71417d$var$FileDescriptorProto;
$14f95da50e71417d$var$FileDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FileDescriptorProto.typeName = "google.protobuf.FileDescriptorProto";
$14f95da50e71417d$var$FileDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "package",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 3,
            name: "dependency",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        },
        {
            no: 10,
            name: "public_dependency",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            repeated: true
        },
        {
            no: 11,
            name: "weak_dependency",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            repeated: true
        },
        {
            no: 4,
            name: "message_type",
            kind: "message",
            T: $14f95da50e71417d$var$DescriptorProto,
            repeated: true
        },
        {
            no: 5,
            name: "enum_type",
            kind: "message",
            T: $14f95da50e71417d$var$EnumDescriptorProto,
            repeated: true
        },
        {
            no: 6,
            name: "service",
            kind: "message",
            T: $14f95da50e71417d$var$ServiceDescriptorProto,
            repeated: true
        },
        {
            no: 7,
            name: "extension",
            kind: "message",
            T: $14f95da50e71417d$var$FieldDescriptorProto,
            repeated: true
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$FileOptions,
            opt: true
        },
        {
            no: 9,
            name: "source_code_info",
            kind: "message",
            T: $14f95da50e71417d$var$SourceCodeInfo,
            opt: true
        },
        {
            no: 12,
            name: "syntax",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 14,
            name: "edition",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        }
    ]);
/**
 * Describes a message type.
 *
 * @generated from message google.protobuf.DescriptorProto
 */ class $14f95da50e71417d$var$DescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.FieldDescriptorProto field = 2;
         */ this.field = [];
        /**
         * @generated from field: repeated google.protobuf.FieldDescriptorProto extension = 6;
         */ this.extension = [];
        /**
         * @generated from field: repeated google.protobuf.DescriptorProto nested_type = 3;
         */ this.nestedType = [];
        /**
         * @generated from field: repeated google.protobuf.EnumDescriptorProto enum_type = 4;
         */ this.enumType = [];
        /**
         * @generated from field: repeated google.protobuf.DescriptorProto.ExtensionRange extension_range = 5;
         */ this.extensionRange = [];
        /**
         * @generated from field: repeated google.protobuf.OneofDescriptorProto oneof_decl = 8;
         */ this.oneofDecl = [];
        /**
         * @generated from field: repeated google.protobuf.DescriptorProto.ReservedRange reserved_range = 9;
         */ this.reservedRange = [];
        /**
         * Reserved field names, which may not be used by fields in the same message.
         * A given name may only be reserved once.
         *
         * @generated from field: repeated string reserved_name = 10;
         */ this.reservedName = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$DescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$DescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$DescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$DescriptorProto, a, b);
    }
}
module.exports.DescriptorProto = $14f95da50e71417d$var$DescriptorProto;
$14f95da50e71417d$var$DescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$DescriptorProto.typeName = "google.protobuf.DescriptorProto";
$14f95da50e71417d$var$DescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "field",
            kind: "message",
            T: $14f95da50e71417d$var$FieldDescriptorProto,
            repeated: true
        },
        {
            no: 6,
            name: "extension",
            kind: "message",
            T: $14f95da50e71417d$var$FieldDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "nested_type",
            kind: "message",
            T: $14f95da50e71417d$var$DescriptorProto,
            repeated: true
        },
        {
            no: 4,
            name: "enum_type",
            kind: "message",
            T: $14f95da50e71417d$var$EnumDescriptorProto,
            repeated: true
        },
        {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: $14f95da50e71417d$var$DescriptorProto_ExtensionRange,
            repeated: true
        },
        {
            no: 8,
            name: "oneof_decl",
            kind: "message",
            T: $14f95da50e71417d$var$OneofDescriptorProto,
            repeated: true
        },
        {
            no: 7,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$MessageOptions,
            opt: true
        },
        {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: $14f95da50e71417d$var$DescriptorProto_ReservedRange,
            repeated: true
        },
        {
            no: 10,
            name: "reserved_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.DescriptorProto.ExtensionRange
 */ class $14f95da50e71417d$var$DescriptorProto_ExtensionRange extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$DescriptorProto_ExtensionRange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$DescriptorProto_ExtensionRange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$DescriptorProto_ExtensionRange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$DescriptorProto_ExtensionRange, a, b);
    }
}
module.exports.DescriptorProto_ExtensionRange = $14f95da50e71417d$var$DescriptorProto_ExtensionRange;
$14f95da50e71417d$var$DescriptorProto_ExtensionRange.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$DescriptorProto_ExtensionRange.typeName = "google.protobuf.DescriptorProto.ExtensionRange";
$14f95da50e71417d$var$DescriptorProto_ExtensionRange.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$ExtensionRangeOptions,
            opt: true
        }
    ]);
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 *
 * @generated from message google.protobuf.DescriptorProto.ReservedRange
 */ class $14f95da50e71417d$var$DescriptorProto_ReservedRange extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$DescriptorProto_ReservedRange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$DescriptorProto_ReservedRange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$DescriptorProto_ReservedRange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$DescriptorProto_ReservedRange, a, b);
    }
}
module.exports.DescriptorProto_ReservedRange = $14f95da50e71417d$var$DescriptorProto_ReservedRange;
$14f95da50e71417d$var$DescriptorProto_ReservedRange.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$DescriptorProto_ReservedRange.typeName = "google.protobuf.DescriptorProto.ReservedRange";
$14f95da50e71417d$var$DescriptorProto_ReservedRange.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        }
    ]);
/**
 * @generated from message google.protobuf.ExtensionRangeOptions
 */ class $14f95da50e71417d$var$ExtensionRangeOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        /**
         * For external users: DO NOT USE. We are in the process of open sourcing
         * extension declaration and executing internal cleanups before it can be
         * used externally.
         *
         * @generated from field: repeated google.protobuf.ExtensionRangeOptions.Declaration declaration = 2;
         */ this.declaration = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$ExtensionRangeOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$ExtensionRangeOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$ExtensionRangeOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$ExtensionRangeOptions, a, b);
    }
}
module.exports.ExtensionRangeOptions = $14f95da50e71417d$var$ExtensionRangeOptions;
$14f95da50e71417d$var$ExtensionRangeOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$ExtensionRangeOptions.typeName = "google.protobuf.ExtensionRangeOptions";
$14f95da50e71417d$var$ExtensionRangeOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        },
        {
            no: 2,
            name: "declaration",
            kind: "message",
            T: $14f95da50e71417d$var$ExtensionRangeOptions_Declaration,
            repeated: true
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 3,
            name: "verification",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$ExtensionRangeOptions_VerificationState),
            opt: true,
            default: $14f95da50e71417d$var$ExtensionRangeOptions_VerificationState.UNVERIFIED
        }
    ]);
/**
 * The verification state of the extension range.
 *
 * @generated from enum google.protobuf.ExtensionRangeOptions.VerificationState
 */ var $14f95da50e71417d$var$ExtensionRangeOptions_VerificationState;
(function(ExtensionRangeOptions_VerificationState) {
    /**
     * All the extensions of the range must be declared.
     *
     * @generated from enum value: DECLARATION = 0;
     */ ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["DECLARATION"] = 0] = "DECLARATION";
    /**
     * @generated from enum value: UNVERIFIED = 1;
     */ ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNVERIFIED"] = 1] = "UNVERIFIED";
})($14f95da50e71417d$var$ExtensionRangeOptions_VerificationState || (module.exports.ExtensionRangeOptions_VerificationState = $14f95da50e71417d$var$ExtensionRangeOptions_VerificationState = {}));
// Retrieve enum metadata with: proto2.getEnumType(ExtensionRangeOptions_VerificationState)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$ExtensionRangeOptions_VerificationState, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    {
        no: 0,
        name: "DECLARATION"
    },
    {
        no: 1,
        name: "UNVERIFIED"
    }
]);
/**
 * @generated from message google.protobuf.ExtensionRangeOptions.Declaration
 */ class $14f95da50e71417d$var$ExtensionRangeOptions_Declaration extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$ExtensionRangeOptions_Declaration().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$ExtensionRangeOptions_Declaration().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$ExtensionRangeOptions_Declaration().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$ExtensionRangeOptions_Declaration, a, b);
    }
}
module.exports.ExtensionRangeOptions_Declaration = $14f95da50e71417d$var$ExtensionRangeOptions_Declaration;
$14f95da50e71417d$var$ExtensionRangeOptions_Declaration.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$ExtensionRangeOptions_Declaration.typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
$14f95da50e71417d$var$ExtensionRangeOptions_Declaration.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 2,
            name: "full_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 5,
            name: "reserved",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 6,
            name: "repeated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        }
    ]);
/**
 * Describes a field within a message.
 *
 * @generated from message google.protobuf.FieldDescriptorProto
 */ class $14f95da50e71417d$var$FieldDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FieldDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FieldDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FieldDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FieldDescriptorProto, a, b);
    }
}
module.exports.FieldDescriptorProto = $14f95da50e71417d$var$FieldDescriptorProto;
$14f95da50e71417d$var$FieldDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FieldDescriptorProto.typeName = "google.protobuf.FieldDescriptorProto";
$14f95da50e71417d$var$FieldDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 4,
            name: "label",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FieldDescriptorProto_Label),
            opt: true
        },
        {
            no: 5,
            name: "type",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FieldDescriptorProto_Type),
            opt: true
        },
        {
            no: 6,
            name: "type_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "extendee",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 7,
            name: "default_value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 9,
            name: "oneof_index",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 10,
            name: "json_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 8,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$FieldOptions,
            opt: true
        },
        {
            no: 17,
            name: "proto3_optional",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        }
    ]);
/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Type
 */ var $14f95da50e71417d$var$FieldDescriptorProto_Type;
(function(FieldDescriptorProto_Type) {
    /**
     * 0 is reserved for errors.
     * Order is weird for historical reasons.
     *
     * @generated from enum value: TYPE_DOUBLE = 1;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["DOUBLE"] = 1] = "DOUBLE";
    /**
     * @generated from enum value: TYPE_FLOAT = 2;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["FLOAT"] = 2] = "FLOAT";
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     *
     * @generated from enum value: TYPE_INT64 = 3;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["INT64"] = 3] = "INT64";
    /**
     * @generated from enum value: TYPE_UINT64 = 4;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["UINT64"] = 4] = "UINT64";
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     *
     * @generated from enum value: TYPE_INT32 = 5;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["INT32"] = 5] = "INT32";
    /**
     * @generated from enum value: TYPE_FIXED64 = 6;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["FIXED64"] = 6] = "FIXED64";
    /**
     * @generated from enum value: TYPE_FIXED32 = 7;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["FIXED32"] = 7] = "FIXED32";
    /**
     * @generated from enum value: TYPE_BOOL = 8;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["BOOL"] = 8] = "BOOL";
    /**
     * @generated from enum value: TYPE_STRING = 9;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["STRING"] = 9] = "STRING";
    /**
     * Tag-delimited aggregate.
     * Group type is deprecated and not supported after google.protobuf. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.  In Editions, the group wire format
     * can be enabled via the `message_encoding` feature.
     *
     * @generated from enum value: TYPE_GROUP = 10;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["GROUP"] = 10] = "GROUP";
    /**
     * Length-delimited aggregate.
     *
     * @generated from enum value: TYPE_MESSAGE = 11;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["MESSAGE"] = 11] = "MESSAGE";
    /**
     * New in version 2.
     *
     * @generated from enum value: TYPE_BYTES = 12;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["BYTES"] = 12] = "BYTES";
    /**
     * @generated from enum value: TYPE_UINT32 = 13;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["UINT32"] = 13] = "UINT32";
    /**
     * @generated from enum value: TYPE_ENUM = 14;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["ENUM"] = 14] = "ENUM";
    /**
     * @generated from enum value: TYPE_SFIXED32 = 15;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["SFIXED32"] = 15] = "SFIXED32";
    /**
     * @generated from enum value: TYPE_SFIXED64 = 16;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["SFIXED64"] = 16] = "SFIXED64";
    /**
     * Uses ZigZag encoding.
     *
     * @generated from enum value: TYPE_SINT32 = 17;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["SINT32"] = 17] = "SINT32";
    /**
     * Uses ZigZag encoding.
     *
     * @generated from enum value: TYPE_SINT64 = 18;
     */ FieldDescriptorProto_Type[FieldDescriptorProto_Type["SINT64"] = 18] = "SINT64";
})($14f95da50e71417d$var$FieldDescriptorProto_Type || (module.exports.FieldDescriptorProto_Type = $14f95da50e71417d$var$FieldDescriptorProto_Type = {}));
// Retrieve enum metadata with: proto2.getEnumType(FieldDescriptorProto_Type)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FieldDescriptorProto_Type, "google.protobuf.FieldDescriptorProto.Type", [
    {
        no: 1,
        name: "TYPE_DOUBLE"
    },
    {
        no: 2,
        name: "TYPE_FLOAT"
    },
    {
        no: 3,
        name: "TYPE_INT64"
    },
    {
        no: 4,
        name: "TYPE_UINT64"
    },
    {
        no: 5,
        name: "TYPE_INT32"
    },
    {
        no: 6,
        name: "TYPE_FIXED64"
    },
    {
        no: 7,
        name: "TYPE_FIXED32"
    },
    {
        no: 8,
        name: "TYPE_BOOL"
    },
    {
        no: 9,
        name: "TYPE_STRING"
    },
    {
        no: 10,
        name: "TYPE_GROUP"
    },
    {
        no: 11,
        name: "TYPE_MESSAGE"
    },
    {
        no: 12,
        name: "TYPE_BYTES"
    },
    {
        no: 13,
        name: "TYPE_UINT32"
    },
    {
        no: 14,
        name: "TYPE_ENUM"
    },
    {
        no: 15,
        name: "TYPE_SFIXED32"
    },
    {
        no: 16,
        name: "TYPE_SFIXED64"
    },
    {
        no: 17,
        name: "TYPE_SINT32"
    },
    {
        no: 18,
        name: "TYPE_SINT64"
    }
]);
/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Label
 */ var $14f95da50e71417d$var$FieldDescriptorProto_Label;
(function(FieldDescriptorProto_Label) {
    /**
     * 0 is reserved for errors
     *
     * @generated from enum value: LABEL_OPTIONAL = 1;
     */ FieldDescriptorProto_Label[FieldDescriptorProto_Label["OPTIONAL"] = 1] = "OPTIONAL";
    /**
     * @generated from enum value: LABEL_REPEATED = 3;
     */ FieldDescriptorProto_Label[FieldDescriptorProto_Label["REPEATED"] = 3] = "REPEATED";
    /**
     * The required label is only allowed in google.protobuf.  In proto3 and Editions
     * it's explicitly prohibited.  In Editions, the `field_presence` feature
     * can be used to get this behavior.
     *
     * @generated from enum value: LABEL_REQUIRED = 2;
     */ FieldDescriptorProto_Label[FieldDescriptorProto_Label["REQUIRED"] = 2] = "REQUIRED";
})($14f95da50e71417d$var$FieldDescriptorProto_Label || (module.exports.FieldDescriptorProto_Label = $14f95da50e71417d$var$FieldDescriptorProto_Label = {}));
// Retrieve enum metadata with: proto2.getEnumType(FieldDescriptorProto_Label)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FieldDescriptorProto_Label, "google.protobuf.FieldDescriptorProto.Label", [
    {
        no: 1,
        name: "LABEL_OPTIONAL"
    },
    {
        no: 3,
        name: "LABEL_REPEATED"
    },
    {
        no: 2,
        name: "LABEL_REQUIRED"
    }
]);
/**
 * Describes a oneof.
 *
 * @generated from message google.protobuf.OneofDescriptorProto
 */ class $14f95da50e71417d$var$OneofDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$OneofDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$OneofDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$OneofDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$OneofDescriptorProto, a, b);
    }
}
module.exports.OneofDescriptorProto = $14f95da50e71417d$var$OneofDescriptorProto;
$14f95da50e71417d$var$OneofDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$OneofDescriptorProto.typeName = "google.protobuf.OneofDescriptorProto";
$14f95da50e71417d$var$OneofDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$OneofOptions,
            opt: true
        }
    ]);
/**
 * Describes an enum type.
 *
 * @generated from message google.protobuf.EnumDescriptorProto
 */ class $14f95da50e71417d$var$EnumDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.EnumValueDescriptorProto value = 2;
         */ this.value = [];
        /**
         * Range of reserved numeric values. Reserved numeric values may not be used
         * by enum values in the same enum declaration. Reserved ranges may not
         * overlap.
         *
         * @generated from field: repeated google.protobuf.EnumDescriptorProto.EnumReservedRange reserved_range = 4;
         */ this.reservedRange = [];
        /**
         * Reserved enum value names, which may not be reused. A given name may only
         * be reserved once.
         *
         * @generated from field: repeated string reserved_name = 5;
         */ this.reservedName = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$EnumDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$EnumDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$EnumDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$EnumDescriptorProto, a, b);
    }
}
module.exports.EnumDescriptorProto = $14f95da50e71417d$var$EnumDescriptorProto;
$14f95da50e71417d$var$EnumDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$EnumDescriptorProto.typeName = "google.protobuf.EnumDescriptorProto";
$14f95da50e71417d$var$EnumDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: $14f95da50e71417d$var$EnumValueDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$EnumOptions,
            opt: true
        },
        {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: $14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange,
            repeated: true
        },
        {
            no: 5,
            name: "reserved_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        }
    ]);
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 *
 * @generated from message google.protobuf.EnumDescriptorProto.EnumReservedRange
 */ class $14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange, a, b);
    }
}
module.exports.EnumDescriptorProto_EnumReservedRange = $14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange;
$14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange";
$14f95da50e71417d$var$EnumDescriptorProto_EnumReservedRange.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        }
    ]);
/**
 * Describes a value within an enum.
 *
 * @generated from message google.protobuf.EnumValueDescriptorProto
 */ class $14f95da50e71417d$var$EnumValueDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$EnumValueDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$EnumValueDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$EnumValueDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$EnumValueDescriptorProto, a, b);
    }
}
module.exports.EnumValueDescriptorProto = $14f95da50e71417d$var$EnumValueDescriptorProto;
$14f95da50e71417d$var$EnumValueDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$EnumValueDescriptorProto.typeName = "google.protobuf.EnumValueDescriptorProto";
$14f95da50e71417d$var$EnumValueDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$EnumValueOptions,
            opt: true
        }
    ]);
/**
 * Describes a service.
 *
 * @generated from message google.protobuf.ServiceDescriptorProto
 */ class $14f95da50e71417d$var$ServiceDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.MethodDescriptorProto method = 2;
         */ this.method = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$ServiceDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$ServiceDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$ServiceDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$ServiceDescriptorProto, a, b);
    }
}
module.exports.ServiceDescriptorProto = $14f95da50e71417d$var$ServiceDescriptorProto;
$14f95da50e71417d$var$ServiceDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$ServiceDescriptorProto.typeName = "google.protobuf.ServiceDescriptorProto";
$14f95da50e71417d$var$ServiceDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "method",
            kind: "message",
            T: $14f95da50e71417d$var$MethodDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$ServiceOptions,
            opt: true
        }
    ]);
/**
 * Describes a method of a service.
 *
 * @generated from message google.protobuf.MethodDescriptorProto
 */ class $14f95da50e71417d$var$MethodDescriptorProto extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$MethodDescriptorProto().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$MethodDescriptorProto().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$MethodDescriptorProto().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$MethodDescriptorProto, a, b);
    }
}
module.exports.MethodDescriptorProto = $14f95da50e71417d$var$MethodDescriptorProto;
$14f95da50e71417d$var$MethodDescriptorProto.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$MethodDescriptorProto.typeName = "google.protobuf.MethodDescriptorProto";
$14f95da50e71417d$var$MethodDescriptorProto.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "input_type",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 3,
            name: "output_type",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: $14f95da50e71417d$var$MethodOptions,
            opt: true
        },
        {
            no: 5,
            name: "client_streaming",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 6,
            name: "server_streaming",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        }
    ]);
/**
 * @generated from message google.protobuf.FileOptions
 */ class $14f95da50e71417d$var$FileOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here.
         * See the documentation for the "Options" section above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FileOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FileOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FileOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FileOptions, a, b);
    }
}
module.exports.FileOptions = $14f95da50e71417d$var$FileOptions;
$14f95da50e71417d$var$FileOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FileOptions.typeName = "google.protobuf.FileOptions";
$14f95da50e71417d$var$FileOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "java_package",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 8,
            name: "java_outer_classname",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 10,
            name: "java_multiple_files",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 20,
            name: "java_generate_equals_and_hash",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 27,
            name: "java_string_check_utf8",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 9,
            name: "optimize_for",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FileOptions_OptimizeMode),
            opt: true,
            default: $14f95da50e71417d$var$FileOptions_OptimizeMode.SPEED
        },
        {
            no: 11,
            name: "go_package",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 16,
            name: "cc_generic_services",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 17,
            name: "java_generic_services",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 18,
            name: "py_generic_services",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 23,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 31,
            name: "cc_enable_arenas",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: true
        },
        {
            no: 36,
            name: "objc_class_prefix",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 37,
            name: "csharp_namespace",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 39,
            name: "swift_prefix",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 40,
            name: "php_class_prefix",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 41,
            name: "php_namespace",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 44,
            name: "php_metadata_namespace",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 45,
            name: "ruby_package",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 50,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * Generated classes can be optimized for speed or code size.
 *
 * @generated from enum google.protobuf.FileOptions.OptimizeMode
 */ var $14f95da50e71417d$var$FileOptions_OptimizeMode;
(function(FileOptions_OptimizeMode) {
    /**
     * Generate complete code for parsing, serialization,
     *
     * @generated from enum value: SPEED = 1;
     */ FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /**
     * etc.
     *
     * Use ReflectionOps to implement these methods.
     *
     * @generated from enum value: CODE_SIZE = 2;
     */ FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /**
     * Generate code using MessageLite and the lite runtime.
     *
     * @generated from enum value: LITE_RUNTIME = 3;
     */ FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
})($14f95da50e71417d$var$FileOptions_OptimizeMode || (module.exports.FileOptions_OptimizeMode = $14f95da50e71417d$var$FileOptions_OptimizeMode = {}));
// Retrieve enum metadata with: proto2.getEnumType(FileOptions_OptimizeMode)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FileOptions_OptimizeMode, "google.protobuf.FileOptions.OptimizeMode", [
    {
        no: 1,
        name: "SPEED"
    },
    {
        no: 2,
        name: "CODE_SIZE"
    },
    {
        no: 3,
        name: "LITE_RUNTIME"
    }
]);
/**
 * @generated from message google.protobuf.MessageOptions
 */ class $14f95da50e71417d$var$MessageOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$MessageOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$MessageOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$MessageOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$MessageOptions, a, b);
    }
}
module.exports.MessageOptions = $14f95da50e71417d$var$MessageOptions;
$14f95da50e71417d$var$MessageOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$MessageOptions.typeName = "google.protobuf.MessageOptions";
$14f95da50e71417d$var$MessageOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "message_set_wire_format",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 2,
            name: "no_standard_descriptor_accessor",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 7,
            name: "map_entry",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 11,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 12,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.FieldOptions
 */ class $14f95da50e71417d$var$FieldOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.FieldOptions.OptionTargetType targets = 19;
         */ this.targets = [];
        /**
         * @generated from field: repeated google.protobuf.FieldOptions.EditionDefault edition_defaults = 20;
         */ this.editionDefaults = [];
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FieldOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FieldOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FieldOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FieldOptions, a, b);
    }
}
module.exports.FieldOptions = $14f95da50e71417d$var$FieldOptions;
$14f95da50e71417d$var$FieldOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FieldOptions.typeName = "google.protobuf.FieldOptions";
$14f95da50e71417d$var$FieldOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FieldOptions_CType),
            opt: true,
            default: $14f95da50e71417d$var$FieldOptions_CType.STRING
        },
        {
            no: 2,
            name: "packed",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 6,
            name: "jstype",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FieldOptions_JSType),
            opt: true,
            default: $14f95da50e71417d$var$FieldOptions_JSType.JS_NORMAL
        },
        {
            no: 5,
            name: "lazy",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 15,
            name: "unverified_lazy",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 10,
            name: "weak",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 16,
            name: "debug_redact",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 17,
            name: "retention",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FieldOptions_OptionRetention),
            opt: true
        },
        {
            no: 19,
            name: "targets",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FieldOptions_OptionTargetType),
            repeated: true
        },
        {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: $14f95da50e71417d$var$FieldOptions_EditionDefault,
            repeated: true
        },
        {
            no: 21,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 22,
            name: "feature_support",
            kind: "message",
            T: $14f95da50e71417d$var$FieldOptions_FeatureSupport,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * @generated from enum google.protobuf.FieldOptions.CType
 */ var $14f95da50e71417d$var$FieldOptions_CType;
(function(FieldOptions_CType) {
    /**
     * Default mode.
     *
     * @generated from enum value: STRING = 0;
     */ FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    /**
     * The option [ctype=CORD] may be applied to a non-repeated field of type
     * "bytes". It indicates that in C++, the data should be stored in a Cord
     * instead of a string.  For very large strings, this may reduce memory
     * fragmentation. It may also allow better performance when parsing from a
     * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
     * alias the original buffer.
     *
     * @generated from enum value: CORD = 1;
     */ FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    /**
     * @generated from enum value: STRING_PIECE = 2;
     */ FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
})($14f95da50e71417d$var$FieldOptions_CType || (module.exports.FieldOptions_CType = $14f95da50e71417d$var$FieldOptions_CType = {}));
// Retrieve enum metadata with: proto2.getEnumType(FieldOptions_CType)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FieldOptions_CType, "google.protobuf.FieldOptions.CType", [
    {
        no: 0,
        name: "STRING"
    },
    {
        no: 1,
        name: "CORD"
    },
    {
        no: 2,
        name: "STRING_PIECE"
    }
]);
/**
 * @generated from enum google.protobuf.FieldOptions.JSType
 */ var $14f95da50e71417d$var$FieldOptions_JSType;
(function(FieldOptions_JSType) {
    /**
     * Use the default type.
     *
     * @generated from enum value: JS_NORMAL = 0;
     */ FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /**
     * Use JavaScript strings.
     *
     * @generated from enum value: JS_STRING = 1;
     */ FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /**
     * Use JavaScript numbers.
     *
     * @generated from enum value: JS_NUMBER = 2;
     */ FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
})($14f95da50e71417d$var$FieldOptions_JSType || (module.exports.FieldOptions_JSType = $14f95da50e71417d$var$FieldOptions_JSType = {}));
// Retrieve enum metadata with: proto2.getEnumType(FieldOptions_JSType)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FieldOptions_JSType, "google.protobuf.FieldOptions.JSType", [
    {
        no: 0,
        name: "JS_NORMAL"
    },
    {
        no: 1,
        name: "JS_STRING"
    },
    {
        no: 2,
        name: "JS_NUMBER"
    }
]);
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionRetention
 */ var $14f95da50e71417d$var$FieldOptions_OptionRetention;
(function(FieldOptions_OptionRetention) {
    /**
     * @generated from enum value: RETENTION_UNKNOWN = 0;
     */ FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    /**
     * @generated from enum value: RETENTION_RUNTIME = 1;
     */ FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    /**
     * @generated from enum value: RETENTION_SOURCE = 2;
     */ FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
})($14f95da50e71417d$var$FieldOptions_OptionRetention || (module.exports.FieldOptions_OptionRetention = $14f95da50e71417d$var$FieldOptions_OptionRetention = {}));
// Retrieve enum metadata with: proto2.getEnumType(FieldOptions_OptionRetention)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FieldOptions_OptionRetention, "google.protobuf.FieldOptions.OptionRetention", [
    {
        no: 0,
        name: "RETENTION_UNKNOWN"
    },
    {
        no: 1,
        name: "RETENTION_RUNTIME"
    },
    {
        no: 2,
        name: "RETENTION_SOURCE"
    }
]);
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionTargetType
 */ var $14f95da50e71417d$var$FieldOptions_OptionTargetType;
(function(FieldOptions_OptionTargetType) {
    /**
     * @generated from enum value: TARGET_TYPE_UNKNOWN = 0;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    /**
     * @generated from enum value: TARGET_TYPE_FILE = 1;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    /**
     * @generated from enum value: TARGET_TYPE_EXTENSION_RANGE = 2;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    /**
     * @generated from enum value: TARGET_TYPE_MESSAGE = 3;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    /**
     * @generated from enum value: TARGET_TYPE_FIELD = 4;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    /**
     * @generated from enum value: TARGET_TYPE_ONEOF = 5;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    /**
     * @generated from enum value: TARGET_TYPE_ENUM = 6;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    /**
     * @generated from enum value: TARGET_TYPE_ENUM_ENTRY = 7;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    /**
     * @generated from enum value: TARGET_TYPE_SERVICE = 8;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    /**
     * @generated from enum value: TARGET_TYPE_METHOD = 9;
     */ FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
})($14f95da50e71417d$var$FieldOptions_OptionTargetType || (module.exports.FieldOptions_OptionTargetType = $14f95da50e71417d$var$FieldOptions_OptionTargetType = {}));
// Retrieve enum metadata with: proto2.getEnumType(FieldOptions_OptionTargetType)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FieldOptions_OptionTargetType, "google.protobuf.FieldOptions.OptionTargetType", [
    {
        no: 0,
        name: "TARGET_TYPE_UNKNOWN"
    },
    {
        no: 1,
        name: "TARGET_TYPE_FILE"
    },
    {
        no: 2,
        name: "TARGET_TYPE_EXTENSION_RANGE"
    },
    {
        no: 3,
        name: "TARGET_TYPE_MESSAGE"
    },
    {
        no: 4,
        name: "TARGET_TYPE_FIELD"
    },
    {
        no: 5,
        name: "TARGET_TYPE_ONEOF"
    },
    {
        no: 6,
        name: "TARGET_TYPE_ENUM"
    },
    {
        no: 7,
        name: "TARGET_TYPE_ENUM_ENTRY"
    },
    {
        no: 8,
        name: "TARGET_TYPE_SERVICE"
    },
    {
        no: 9,
        name: "TARGET_TYPE_METHOD"
    }
]);
/**
 * @generated from message google.protobuf.FieldOptions.EditionDefault
 */ class $14f95da50e71417d$var$FieldOptions_EditionDefault extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FieldOptions_EditionDefault().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FieldOptions_EditionDefault().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FieldOptions_EditionDefault().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FieldOptions_EditionDefault, a, b);
    }
}
module.exports.FieldOptions_EditionDefault = $14f95da50e71417d$var$FieldOptions_EditionDefault;
$14f95da50e71417d$var$FieldOptions_EditionDefault.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FieldOptions_EditionDefault.typeName = "google.protobuf.FieldOptions.EditionDefault";
$14f95da50e71417d$var$FieldOptions_EditionDefault.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        }
    ]);
/**
 * Information about the support window of a feature.
 *
 * @generated from message google.protobuf.FieldOptions.FeatureSupport
 */ class $14f95da50e71417d$var$FieldOptions_FeatureSupport extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FieldOptions_FeatureSupport().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FieldOptions_FeatureSupport().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FieldOptions_FeatureSupport().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FieldOptions_FeatureSupport, a, b);
    }
}
module.exports.FieldOptions_FeatureSupport = $14f95da50e71417d$var$FieldOptions_FeatureSupport;
$14f95da50e71417d$var$FieldOptions_FeatureSupport.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FieldOptions_FeatureSupport.typeName = "google.protobuf.FieldOptions.FeatureSupport";
$14f95da50e71417d$var$FieldOptions_FeatureSupport.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        },
        {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        },
        {
            no: 3,
            name: "deprecation_warning",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 4,
            name: "edition_removed",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        }
    ]);
/**
 * @generated from message google.protobuf.OneofOptions
 */ class $14f95da50e71417d$var$OneofOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$OneofOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$OneofOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$OneofOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$OneofOptions, a, b);
    }
}
module.exports.OneofOptions = $14f95da50e71417d$var$OneofOptions;
$14f95da50e71417d$var$OneofOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$OneofOptions.typeName = "google.protobuf.OneofOptions";
$14f95da50e71417d$var$OneofOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.EnumOptions
 */ class $14f95da50e71417d$var$EnumOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$EnumOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$EnumOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$EnumOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$EnumOptions, a, b);
    }
}
module.exports.EnumOptions = $14f95da50e71417d$var$EnumOptions;
$14f95da50e71417d$var$EnumOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$EnumOptions.typeName = "google.protobuf.EnumOptions";
$14f95da50e71417d$var$EnumOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "allow_alias",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 6,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true
        },
        {
            no: 7,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.EnumValueOptions
 */ class $14f95da50e71417d$var$EnumValueOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$EnumValueOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$EnumValueOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$EnumValueOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$EnumValueOptions, a, b);
    }
}
module.exports.EnumValueOptions = $14f95da50e71417d$var$EnumValueOptions;
$14f95da50e71417d$var$EnumValueOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$EnumValueOptions.typeName = "google.protobuf.EnumValueOptions";
$14f95da50e71417d$var$EnumValueOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 2,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 3,
            name: "debug_redact",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 4,
            name: "feature_support",
            kind: "message",
            T: $14f95da50e71417d$var$FieldOptions_FeatureSupport,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.ServiceOptions
 */ class $14f95da50e71417d$var$ServiceOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$ServiceOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$ServiceOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$ServiceOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$ServiceOptions, a, b);
    }
}
module.exports.ServiceOptions = $14f95da50e71417d$var$ServiceOptions;
$14f95da50e71417d$var$ServiceOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$ServiceOptions.typeName = "google.protobuf.ServiceOptions";
$14f95da50e71417d$var$ServiceOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 34,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.MethodOptions
 */ class $14f95da50e71417d$var$MethodOptions extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The parser stores options it doesn't recognize here. See above.
         *
         * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
         */ this.uninterpretedOption = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$MethodOptions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$MethodOptions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$MethodOptions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$MethodOptions, a, b);
    }
}
module.exports.MethodOptions = $14f95da50e71417d$var$MethodOptions;
$14f95da50e71417d$var$MethodOptions.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$MethodOptions.typeName = "google.protobuf.MethodOptions";
$14f95da50e71417d$var$MethodOptions.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            opt: true,
            default: false
        },
        {
            no: 34,
            name: "idempotency_level",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$MethodOptions_IdempotencyLevel),
            opt: true,
            default: $14f95da50e71417d$var$MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN
        },
        {
            no: 35,
            name: "features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption,
            repeated: true
        }
    ]);
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 *
 * @generated from enum google.protobuf.MethodOptions.IdempotencyLevel
 */ var $14f95da50e71417d$var$MethodOptions_IdempotencyLevel;
(function(MethodOptions_IdempotencyLevel) {
    /**
     * @generated from enum value: IDEMPOTENCY_UNKNOWN = 0;
     */ MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /**
     * implies idempotent
     *
     * @generated from enum value: NO_SIDE_EFFECTS = 1;
     */ MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /**
     * idempotent, but may have side effects
     *
     * @generated from enum value: IDEMPOTENT = 2;
     */ MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
})($14f95da50e71417d$var$MethodOptions_IdempotencyLevel || (module.exports.MethodOptions_IdempotencyLevel = $14f95da50e71417d$var$MethodOptions_IdempotencyLevel = {}));
// Retrieve enum metadata with: proto2.getEnumType(MethodOptions_IdempotencyLevel)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$MethodOptions_IdempotencyLevel, "google.protobuf.MethodOptions.IdempotencyLevel", [
    {
        no: 0,
        name: "IDEMPOTENCY_UNKNOWN"
    },
    {
        no: 1,
        name: "NO_SIDE_EFFECTS"
    },
    {
        no: 2,
        name: "IDEMPOTENT"
    }
]);
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 *
 * @generated from message google.protobuf.UninterpretedOption
 */ class $14f95da50e71417d$var$UninterpretedOption extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.UninterpretedOption.NamePart name = 2;
         */ this.name = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$UninterpretedOption().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$UninterpretedOption().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$UninterpretedOption().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$UninterpretedOption, a, b);
    }
}
module.exports.UninterpretedOption = $14f95da50e71417d$var$UninterpretedOption;
$14f95da50e71417d$var$UninterpretedOption.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$UninterpretedOption.typeName = "google.protobuf.UninterpretedOption";
$14f95da50e71417d$var$UninterpretedOption.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 2,
            name: "name",
            kind: "message",
            T: $14f95da50e71417d$var$UninterpretedOption_NamePart,
            repeated: true
        },
        {
            no: 3,
            name: "identifier_value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 4,
            name: "positive_int_value",
            kind: "scalar",
            T: 4 /* ScalarType.UINT64 */ ,
            opt: true
        },
        {
            no: 5,
            name: "negative_int_value",
            kind: "scalar",
            T: 3 /* ScalarType.INT64 */ ,
            opt: true
        },
        {
            no: 6,
            name: "double_value",
            kind: "scalar",
            T: 1 /* ScalarType.DOUBLE */ ,
            opt: true
        },
        {
            no: 7,
            name: "string_value",
            kind: "scalar",
            T: 12 /* ScalarType.BYTES */ ,
            opt: true
        },
        {
            no: 8,
            name: "aggregate_value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        }
    ]);
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 *
 * @generated from message google.protobuf.UninterpretedOption.NamePart
 */ class $14f95da50e71417d$var$UninterpretedOption_NamePart extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$UninterpretedOption_NamePart().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$UninterpretedOption_NamePart().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$UninterpretedOption_NamePart().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$UninterpretedOption_NamePart, a, b);
    }
}
module.exports.UninterpretedOption_NamePart = $14f95da50e71417d$var$UninterpretedOption_NamePart;
$14f95da50e71417d$var$UninterpretedOption_NamePart.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$UninterpretedOption_NamePart.typeName = "google.protobuf.UninterpretedOption.NamePart";
$14f95da50e71417d$var$UninterpretedOption_NamePart.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name_part",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            req: true
        },
        {
            no: 2,
            name: "is_extension",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            req: true
        }
    ]);
/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 *
 * @generated from message google.protobuf.FeatureSet
 */ class $14f95da50e71417d$var$FeatureSet extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FeatureSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FeatureSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FeatureSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FeatureSet, a, b);
    }
}
module.exports.FeatureSet = $14f95da50e71417d$var$FeatureSet;
$14f95da50e71417d$var$FeatureSet.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FeatureSet.typeName = "google.protobuf.FeatureSet";
$14f95da50e71417d$var$FeatureSet.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FeatureSet_FieldPresence),
            opt: true
        },
        {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FeatureSet_EnumType),
            opt: true
        },
        {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FeatureSet_RepeatedFieldEncoding),
            opt: true
        },
        {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FeatureSet_Utf8Validation),
            opt: true
        },
        {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FeatureSet_MessageEncoding),
            opt: true
        },
        {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$FeatureSet_JsonFormat),
            opt: true
        }
    ]);
/**
 * @generated from enum google.protobuf.FeatureSet.FieldPresence
 */ var $14f95da50e71417d$var$FeatureSet_FieldPresence;
(function(FeatureSet_FieldPresence) {
    /**
     * @generated from enum value: FIELD_PRESENCE_UNKNOWN = 0;
     */ FeatureSet_FieldPresence[FeatureSet_FieldPresence["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    /**
     * @generated from enum value: EXPLICIT = 1;
     */ FeatureSet_FieldPresence[FeatureSet_FieldPresence["EXPLICIT"] = 1] = "EXPLICIT";
    /**
     * @generated from enum value: IMPLICIT = 2;
     */ FeatureSet_FieldPresence[FeatureSet_FieldPresence["IMPLICIT"] = 2] = "IMPLICIT";
    /**
     * @generated from enum value: LEGACY_REQUIRED = 3;
     */ FeatureSet_FieldPresence[FeatureSet_FieldPresence["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
})($14f95da50e71417d$var$FeatureSet_FieldPresence || (module.exports.FeatureSet_FieldPresence = $14f95da50e71417d$var$FeatureSet_FieldPresence = {}));
// Retrieve enum metadata with: proto2.getEnumType(FeatureSet_FieldPresence)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FeatureSet_FieldPresence, "google.protobuf.FeatureSet.FieldPresence", [
    {
        no: 0,
        name: "FIELD_PRESENCE_UNKNOWN"
    },
    {
        no: 1,
        name: "EXPLICIT"
    },
    {
        no: 2,
        name: "IMPLICIT"
    },
    {
        no: 3,
        name: "LEGACY_REQUIRED"
    }
]);
/**
 * @generated from enum google.protobuf.FeatureSet.EnumType
 */ var $14f95da50e71417d$var$FeatureSet_EnumType;
(function(FeatureSet_EnumType) {
    /**
     * @generated from enum value: ENUM_TYPE_UNKNOWN = 0;
     */ FeatureSet_EnumType[FeatureSet_EnumType["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    /**
     * @generated from enum value: OPEN = 1;
     */ FeatureSet_EnumType[FeatureSet_EnumType["OPEN"] = 1] = "OPEN";
    /**
     * @generated from enum value: CLOSED = 2;
     */ FeatureSet_EnumType[FeatureSet_EnumType["CLOSED"] = 2] = "CLOSED";
})($14f95da50e71417d$var$FeatureSet_EnumType || (module.exports.FeatureSet_EnumType = $14f95da50e71417d$var$FeatureSet_EnumType = {}));
// Retrieve enum metadata with: proto2.getEnumType(FeatureSet_EnumType)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FeatureSet_EnumType, "google.protobuf.FeatureSet.EnumType", [
    {
        no: 0,
        name: "ENUM_TYPE_UNKNOWN"
    },
    {
        no: 1,
        name: "OPEN"
    },
    {
        no: 2,
        name: "CLOSED"
    }
]);
/**
 * @generated from enum google.protobuf.FeatureSet.RepeatedFieldEncoding
 */ var $14f95da50e71417d$var$FeatureSet_RepeatedFieldEncoding;
(function(FeatureSet_RepeatedFieldEncoding) {
    /**
     * @generated from enum value: REPEATED_FIELD_ENCODING_UNKNOWN = 0;
     */ FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    /**
     * @generated from enum value: PACKED = 1;
     */ FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["PACKED"] = 1] = "PACKED";
    /**
     * @generated from enum value: EXPANDED = 2;
     */ FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["EXPANDED"] = 2] = "EXPANDED";
})($14f95da50e71417d$var$FeatureSet_RepeatedFieldEncoding || (module.exports.FeatureSet_RepeatedFieldEncoding = $14f95da50e71417d$var$FeatureSet_RepeatedFieldEncoding = {}));
// Retrieve enum metadata with: proto2.getEnumType(FeatureSet_RepeatedFieldEncoding)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FeatureSet_RepeatedFieldEncoding, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
    {
        no: 0,
        name: "REPEATED_FIELD_ENCODING_UNKNOWN"
    },
    {
        no: 1,
        name: "PACKED"
    },
    {
        no: 2,
        name: "EXPANDED"
    }
]);
/**
 * @generated from enum google.protobuf.FeatureSet.Utf8Validation
 */ var $14f95da50e71417d$var$FeatureSet_Utf8Validation;
(function(FeatureSet_Utf8Validation) {
    /**
     * @generated from enum value: UTF8_VALIDATION_UNKNOWN = 0;
     */ FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["UTF8_VALIDATION_UNKNOWN"] = 0] = "UTF8_VALIDATION_UNKNOWN";
    /**
     * @generated from enum value: VERIFY = 2;
     */ FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["VERIFY"] = 2] = "VERIFY";
    /**
     * @generated from enum value: NONE = 3;
     */ FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["NONE"] = 3] = "NONE";
})($14f95da50e71417d$var$FeatureSet_Utf8Validation || (module.exports.FeatureSet_Utf8Validation = $14f95da50e71417d$var$FeatureSet_Utf8Validation = {}));
// Retrieve enum metadata with: proto2.getEnumType(FeatureSet_Utf8Validation)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FeatureSet_Utf8Validation, "google.protobuf.FeatureSet.Utf8Validation", [
    {
        no: 0,
        name: "UTF8_VALIDATION_UNKNOWN"
    },
    {
        no: 2,
        name: "VERIFY"
    },
    {
        no: 3,
        name: "NONE"
    }
]);
/**
 * @generated from enum google.protobuf.FeatureSet.MessageEncoding
 */ var $14f95da50e71417d$var$FeatureSet_MessageEncoding;
(function(FeatureSet_MessageEncoding) {
    /**
     * @generated from enum value: MESSAGE_ENCODING_UNKNOWN = 0;
     */ FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    /**
     * @generated from enum value: LENGTH_PREFIXED = 1;
     */ FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    /**
     * @generated from enum value: DELIMITED = 2;
     */ FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["DELIMITED"] = 2] = "DELIMITED";
})($14f95da50e71417d$var$FeatureSet_MessageEncoding || (module.exports.FeatureSet_MessageEncoding = $14f95da50e71417d$var$FeatureSet_MessageEncoding = {}));
// Retrieve enum metadata with: proto2.getEnumType(FeatureSet_MessageEncoding)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FeatureSet_MessageEncoding, "google.protobuf.FeatureSet.MessageEncoding", [
    {
        no: 0,
        name: "MESSAGE_ENCODING_UNKNOWN"
    },
    {
        no: 1,
        name: "LENGTH_PREFIXED"
    },
    {
        no: 2,
        name: "DELIMITED"
    }
]);
/**
 * @generated from enum google.protobuf.FeatureSet.JsonFormat
 */ var $14f95da50e71417d$var$FeatureSet_JsonFormat;
(function(FeatureSet_JsonFormat) {
    /**
     * @generated from enum value: JSON_FORMAT_UNKNOWN = 0;
     */ FeatureSet_JsonFormat[FeatureSet_JsonFormat["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    /**
     * @generated from enum value: ALLOW = 1;
     */ FeatureSet_JsonFormat[FeatureSet_JsonFormat["ALLOW"] = 1] = "ALLOW";
    /**
     * @generated from enum value: LEGACY_BEST_EFFORT = 2;
     */ FeatureSet_JsonFormat[FeatureSet_JsonFormat["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
})($14f95da50e71417d$var$FeatureSet_JsonFormat || (module.exports.FeatureSet_JsonFormat = $14f95da50e71417d$var$FeatureSet_JsonFormat = {}));
// Retrieve enum metadata with: proto2.getEnumType(FeatureSet_JsonFormat)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$FeatureSet_JsonFormat, "google.protobuf.FeatureSet.JsonFormat", [
    {
        no: 0,
        name: "JSON_FORMAT_UNKNOWN"
    },
    {
        no: 1,
        name: "ALLOW"
    },
    {
        no: 2,
        name: "LEGACY_BEST_EFFORT"
    }
]);
/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 *
 * @generated from message google.protobuf.FeatureSetDefaults
 */ class $14f95da50e71417d$var$FeatureSetDefaults extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault defaults = 1;
         */ this.defaults = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FeatureSetDefaults().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FeatureSetDefaults().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FeatureSetDefaults().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FeatureSetDefaults, a, b);
    }
}
module.exports.FeatureSetDefaults = $14f95da50e71417d$var$FeatureSetDefaults;
$14f95da50e71417d$var$FeatureSetDefaults.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FeatureSetDefaults.typeName = "google.protobuf.FeatureSetDefaults";
$14f95da50e71417d$var$FeatureSetDefaults.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "defaults",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault,
            repeated: true
        },
        {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        },
        {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        }
    ]);
/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 *
 * @generated from message google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
 */ class $14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault, a, b);
    }
}
module.exports.FeatureSetDefaults_FeatureSetEditionDefault = $14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault;
$14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
$14f95da50e71417d$var$FeatureSetDefaults_FeatureSetEditionDefault.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 3,
            name: "edition",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$Edition),
            opt: true
        },
        {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        },
        {
            no: 5,
            name: "fixed_features",
            kind: "message",
            T: $14f95da50e71417d$var$FeatureSet,
            opt: true
        }
    ]);
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 *
 * @generated from message google.protobuf.SourceCodeInfo
 */ class $14f95da50e71417d$var$SourceCodeInfo extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * A Location identifies a piece of source code in a .proto file which
         * corresponds to a particular definition.  This information is intended
         * to be useful to IDEs, code indexers, documentation generators, and similar
         * tools.
         *
         * For example, say we have a file like:
         *   message Foo {
         *     optional string foo = 1;
         *   }
         * Let's look at just the field definition:
         *   optional string foo = 1;
         *   ^       ^^     ^^  ^  ^^^
         *   a       bc     de  f  ghi
         * We have the following locations:
         *   span   path               represents
         *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
         *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
         *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
         *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
         *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
         *
         * Notes:
         * - A location may refer to a repeated field itself (i.e. not to any
         *   particular index within it).  This is used whenever a set of elements are
         *   logically enclosed in a single code segment.  For example, an entire
         *   extend block (possibly containing multiple extension definitions) will
         *   have an outer location whose path refers to the "extensions" repeated
         *   field without an index.
         * - Multiple locations may have the same path.  This happens when a single
         *   logical declaration is spread out across multiple places.  The most
         *   obvious example is the "extend" block again -- there may be multiple
         *   extend blocks in the same scope, each of which will have the same path.
         * - A location's span is not always a subset of its parent's span.  For
         *   example, the "extendee" of an extension declaration appears at the
         *   beginning of the "extend" block and is shared by all extensions within
         *   the block.
         * - Just because a location's span is a subset of some other location's span
         *   does not mean that it is a descendant.  For example, a "group" defines
         *   both a type and a field in a single declaration.  Thus, the locations
         *   corresponding to the type and field and their components will overlap.
         * - Code which tries to interpret locations should probably be designed to
         *   ignore those that it doesn't understand, as more types of locations could
         *   be recorded in the future.
         *
         * @generated from field: repeated google.protobuf.SourceCodeInfo.Location location = 1;
         */ this.location = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$SourceCodeInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$SourceCodeInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$SourceCodeInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$SourceCodeInfo, a, b);
    }
}
module.exports.SourceCodeInfo = $14f95da50e71417d$var$SourceCodeInfo;
$14f95da50e71417d$var$SourceCodeInfo.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$SourceCodeInfo.typeName = "google.protobuf.SourceCodeInfo";
$14f95da50e71417d$var$SourceCodeInfo.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "location",
            kind: "message",
            T: $14f95da50e71417d$var$SourceCodeInfo_Location,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.SourceCodeInfo.Location
 */ class $14f95da50e71417d$var$SourceCodeInfo_Location extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Identifies which part of the FileDescriptorProto was defined at this
         * location.
         *
         * Each element is a field number or an index.  They form a path from
         * the root FileDescriptorProto to the place where the definition appears.
         * For example, this path:
         *   [ 4, 3, 2, 7, 1 ]
         * refers to:
         *   file.message_type(3)  // 4, 3
         *       .field(7)         // 2, 7
         *       .name()           // 1
         * This is because FileDescriptorProto.message_type has field number 4:
         *   repeated DescriptorProto message_type = 4;
         * and DescriptorProto.field has field number 2:
         *   repeated FieldDescriptorProto field = 2;
         * and FieldDescriptorProto.name has field number 1:
         *   optional string name = 1;
         *
         * Thus, the above path gives the location of a field name.  If we removed
         * the last element:
         *   [ 4, 3, 2, 7 ]
         * this path refers to the whole field declaration (from the beginning
         * of the label to the terminating semicolon).
         *
         * @generated from field: repeated int32 path = 1 [packed = true];
         */ this.path = [];
        /**
         * Always has exactly three or four elements: start line, start column,
         * end line (optional, otherwise assumed same as start line), end column.
         * These are packed into a single field for efficiency.  Note that line
         * and column numbers are zero-based -- typically you will want to add
         * 1 to each before displaying to a user.
         *
         * @generated from field: repeated int32 span = 2 [packed = true];
         */ this.span = [];
        /**
         * @generated from field: repeated string leading_detached_comments = 6;
         */ this.leadingDetachedComments = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$SourceCodeInfo_Location().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$SourceCodeInfo_Location().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$SourceCodeInfo_Location().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$SourceCodeInfo_Location, a, b);
    }
}
module.exports.SourceCodeInfo_Location = $14f95da50e71417d$var$SourceCodeInfo_Location;
$14f95da50e71417d$var$SourceCodeInfo_Location.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$SourceCodeInfo_Location.typeName = "google.protobuf.SourceCodeInfo.Location";
$14f95da50e71417d$var$SourceCodeInfo_Location.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            repeated: true,
            packed: true
        },
        {
            no: 2,
            name: "span",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            repeated: true,
            packed: true
        },
        {
            no: 3,
            name: "leading_comments",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 4,
            name: "trailing_comments",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 6,
            name: "leading_detached_comments",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        }
    ]);
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 *
 * @generated from message google.protobuf.GeneratedCodeInfo
 */ class $14f95da50e71417d$var$GeneratedCodeInfo extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * An Annotation connects some span of text in generated code to an element
         * of its generating .proto file.
         *
         * @generated from field: repeated google.protobuf.GeneratedCodeInfo.Annotation annotation = 1;
         */ this.annotation = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$GeneratedCodeInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$GeneratedCodeInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$GeneratedCodeInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$GeneratedCodeInfo, a, b);
    }
}
module.exports.GeneratedCodeInfo = $14f95da50e71417d$var$GeneratedCodeInfo;
$14f95da50e71417d$var$GeneratedCodeInfo.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$GeneratedCodeInfo.typeName = "google.protobuf.GeneratedCodeInfo";
$14f95da50e71417d$var$GeneratedCodeInfo.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "annotation",
            kind: "message",
            T: $14f95da50e71417d$var$GeneratedCodeInfo_Annotation,
            repeated: true
        }
    ]);
/**
 * @generated from message google.protobuf.GeneratedCodeInfo.Annotation
 */ class $14f95da50e71417d$var$GeneratedCodeInfo_Annotation extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Identifies the element in the original source .proto file. This field
         * is formatted the same as SourceCodeInfo.Location.path.
         *
         * @generated from field: repeated int32 path = 1 [packed = true];
         */ this.path = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $14f95da50e71417d$var$GeneratedCodeInfo_Annotation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $14f95da50e71417d$var$GeneratedCodeInfo_Annotation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $14f95da50e71417d$var$GeneratedCodeInfo_Annotation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($14f95da50e71417d$var$GeneratedCodeInfo_Annotation, a, b);
    }
}
module.exports.GeneratedCodeInfo_Annotation = $14f95da50e71417d$var$GeneratedCodeInfo_Annotation;
$14f95da50e71417d$var$GeneratedCodeInfo_Annotation.runtime = $fGM1a.proto2;
$14f95da50e71417d$var$GeneratedCodeInfo_Annotation.typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
$14f95da50e71417d$var$GeneratedCodeInfo_Annotation.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            repeated: true,
            packed: true
        },
        {
            no: 2,
            name: "source_file",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 3,
            name: "begin",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 4,
            name: "end",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 5,
            name: "semantic",
            kind: "enum",
            T: $fGM1a.proto2.getEnumType($14f95da50e71417d$var$GeneratedCodeInfo_Annotation_Semantic),
            opt: true
        }
    ]);
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 *
 * @generated from enum google.protobuf.GeneratedCodeInfo.Annotation.Semantic
 */ var $14f95da50e71417d$var$GeneratedCodeInfo_Annotation_Semantic;
(function(GeneratedCodeInfo_Annotation_Semantic) {
    /**
     * There is no effect or the effect is indescribable.
     *
     * @generated from enum value: NONE = 0;
     */ GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["NONE"] = 0] = "NONE";
    /**
     * The element is set or otherwise mutated.
     *
     * @generated from enum value: SET = 1;
     */ GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["SET"] = 1] = "SET";
    /**
     * An alias to the element is returned.
     *
     * @generated from enum value: ALIAS = 2;
     */ GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["ALIAS"] = 2] = "ALIAS";
})($14f95da50e71417d$var$GeneratedCodeInfo_Annotation_Semantic || (module.exports.GeneratedCodeInfo_Annotation_Semantic = $14f95da50e71417d$var$GeneratedCodeInfo_Annotation_Semantic = {}));
// Retrieve enum metadata with: proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic)
$fGM1a.proto2.util.setEnumType($14f95da50e71417d$var$GeneratedCodeInfo_Annotation_Semantic, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
    {
        no: 0,
        name: "NONE"
    },
    {
        no: 1,
        name: "SET"
    },
    {
        no: 2,
        name: "ALIAS"
    }
]);

});
parcelRegister("fGM1a", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.proto2 = void 0;

var $5Jf2T = parcelRequire("5Jf2T");

var $gyUZo = parcelRequire("gyUZo");

var $8bRRT = parcelRequire("8bRRT");
/**
 * Provides functionality for messages defined with the proto2 syntax.
 */ module.exports.proto2 = (0, $5Jf2T.makeProtoRuntime)("proto2", (fields)=>{
    return new $gyUZo.InternalFieldList(fields, (source)=>(0, $8bRRT.normalizeFieldInfos)(source, false));
}, // TODO merge with proto3 and initExtensionField, also see initPartial, equals, clone
(target)=>{
    for (const member of target.getType().fields.byMember()){
        const name = member.localName, t = target;
        if (member.repeated) {
            t[name] = [];
            continue;
        }
        switch(member.kind){
            case "oneof":
                t[name] = {
                    case: undefined
                };
                break;
            case "map":
                t[name] = {};
                break;
            case "scalar":
            case "enum":
            case "message":
                break;
        }
    }
});

});
parcelRegister("5Jf2T", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.makeProtoRuntime = void 0;

var $1nE68 = parcelRequire("1nE68");

var $cxLSg = parcelRequire("cxLSg");

var $a4E7o = parcelRequire("a4E7o");

var $38R4O = parcelRequire("38R4O");

var $5JKE4 = parcelRequire("5JKE4");

var $hF4tN = parcelRequire("hF4tN");
function $42bcd375cd53a487$var$makeProtoRuntime(syntax, newFieldList, initFields) {
    return {
        syntax: syntax,
        json: (0, $38R4O.makeJsonFormat)(),
        bin: (0, $5JKE4.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, $hF4tN.makeUtilCommon)()), {
            newFieldList: newFieldList,
            initFields: initFields
        }),
        makeMessageType (typeName, fields, opt) {
            return (0, $cxLSg.makeMessageType)(this, typeName, fields, opt);
        },
        makeEnum: $1nE68.makeEnum,
        makeEnumType: $1nE68.makeEnumType,
        getEnumType: $1nE68.getEnumType,
        makeExtension (typeName, extendee, field) {
            return (0, $a4E7o.makeExtension)(this, typeName, extendee, field);
        }
    };
}
module.exports.makeProtoRuntime = $42bcd375cd53a487$var$makeProtoRuntime;

});
parcelRegister("1nE68", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.makeEnum = module.exports.makeEnumType = module.exports.setEnumType = module.exports.getEnumType = void 0;

var $7UhPF = parcelRequire("7UhPF");
const $10170b0c3d02aa40$var$enumTypeSymbol = Symbol("@bufbuild/protobuf/enum-type");
/**
 * Get reflection information from a generated enum.
 * If this function is called on something other than a generated
 * enum, it raises an error.
 */ function $10170b0c3d02aa40$var$getEnumType(enumObject) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-explicit-any
    const t = enumObject[$10170b0c3d02aa40$var$enumTypeSymbol];
    (0, $7UhPF.assert)(t, "missing enum type on enum object");
    return t; // eslint-disable-line @typescript-eslint/no-unsafe-return
}
module.exports.getEnumType = $10170b0c3d02aa40$var$getEnumType;
/**
 * Sets reflection information on a generated enum.
 */ function $10170b0c3d02aa40$var$setEnumType(enumObject, typeName, values, opt) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    enumObject[$10170b0c3d02aa40$var$enumTypeSymbol] = $10170b0c3d02aa40$var$makeEnumType(typeName, values.map((v)=>({
            no: v.no,
            name: v.name,
            localName: enumObject[v.no]
        })), opt);
}
module.exports.setEnumType = $10170b0c3d02aa40$var$setEnumType;
/**
 * Create a new EnumType with the given values.
 */ function $10170b0c3d02aa40$var$makeEnumType(typeName, values, // eslint-disable-next-line @typescript-eslint/no-unused-vars
_opt) {
    const names = Object.create(null);
    const numbers = Object.create(null);
    const normalValues = [];
    for (const value of values){
        // We do not surface options at this time
        // const value: EnumValueInfo = {...v, options: v.options ?? emptyReadonlyObject};
        const n = $10170b0c3d02aa40$var$normalizeEnumValue(value);
        normalValues.push(n);
        names[value.name] = n;
        numbers[value.no] = n;
    }
    return {
        typeName: typeName,
        values: normalValues,
        // We do not surface options at this time
        // options: opt?.options ?? Object.create(null),
        findName (name) {
            return names[name];
        },
        findNumber (no) {
            return numbers[no];
        }
    };
}
module.exports.makeEnumType = $10170b0c3d02aa40$var$makeEnumType;
/**
 * Create a new enum object with the given values.
 * Sets reflection information.
 */ function $10170b0c3d02aa40$var$makeEnum(typeName, values, opt) {
    const enumObject = {};
    for (const value of values){
        const n = $10170b0c3d02aa40$var$normalizeEnumValue(value);
        enumObject[n.localName] = n.no;
        enumObject[n.no] = n.localName;
    }
    $10170b0c3d02aa40$var$setEnumType(enumObject, typeName, values, opt);
    return enumObject;
}
module.exports.makeEnum = $10170b0c3d02aa40$var$makeEnum;
function $10170b0c3d02aa40$var$normalizeEnumValue(value) {
    if ("localName" in value) return value;
    return Object.assign(Object.assign({}, value), {
        localName: value.name
    });
}

});
parcelRegister("7UhPF", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.assertFloat32 = module.exports.assertUInt32 = module.exports.assertInt32 = module.exports.assert = void 0;
/**
 * Assert that condition is truthy or throw error (with message)
 */ function $5c1b987a94579abf$var$assert(condition, msg) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions -- we want the implicit conversion to boolean
    if (!condition) throw new Error(msg);
}
module.exports.assert = $5c1b987a94579abf$var$assert;
const $5c1b987a94579abf$var$FLOAT32_MAX = 3.4028234663852886e38, $5c1b987a94579abf$var$FLOAT32_MIN = -340282346638528860000000000000000000000, $5c1b987a94579abf$var$UINT32_MAX = 0xffffffff, $5c1b987a94579abf$var$INT32_MAX = 0x7fffffff, $5c1b987a94579abf$var$INT32_MIN = -2147483648;
/**
 * Assert a valid signed protobuf 32-bit integer.
 */ function $5c1b987a94579abf$var$assertInt32(arg) {
    if (typeof arg !== "number") throw new Error("invalid int 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > $5c1b987a94579abf$var$INT32_MAX || arg < $5c1b987a94579abf$var$INT32_MIN) throw new Error("invalid int 32: " + arg); // eslint-disable-line @typescript-eslint/restrict-plus-operands -- we want the implicit conversion to string
}
module.exports.assertInt32 = $5c1b987a94579abf$var$assertInt32;
/**
 * Assert a valid unsigned protobuf 32-bit integer.
 */ function $5c1b987a94579abf$var$assertUInt32(arg) {
    if (typeof arg !== "number") throw new Error("invalid uint 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > $5c1b987a94579abf$var$UINT32_MAX || arg < 0) throw new Error("invalid uint 32: " + arg); // eslint-disable-line @typescript-eslint/restrict-plus-operands -- we want the implicit conversion to string
}
module.exports.assertUInt32 = $5c1b987a94579abf$var$assertUInt32;
/**
 * Assert a valid protobuf float value.
 */ function $5c1b987a94579abf$var$assertFloat32(arg) {
    if (typeof arg !== "number") throw new Error("invalid float 32: " + typeof arg);
    if (!Number.isFinite(arg)) return;
    if (arg > $5c1b987a94579abf$var$FLOAT32_MAX || arg < $5c1b987a94579abf$var$FLOAT32_MIN) throw new Error("invalid float 32: " + arg); // eslint-disable-line @typescript-eslint/restrict-plus-operands -- we want the implicit conversion to string
}
module.exports.assertFloat32 = $5c1b987a94579abf$var$assertFloat32;

});


parcelRegister("cxLSg", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.makeMessageType = void 0;

var $cI13w = parcelRequire("cI13w");
/**
 * Create a new message type using the given runtime.
 */ function $921db3e70b72c4b0$var$makeMessageType(runtime, typeName, fields, opt) {
    var _a;
    const localName = (_a = opt === null || opt === void 0 ? void 0 : opt.localName) !== null && _a !== void 0 ? _a : typeName.substring(typeName.lastIndexOf(".") + 1);
    const type = {
        [localName]: function(data) {
            runtime.util.initFields(this);
            runtime.util.initPartial(data, this);
        }
    }[localName];
    Object.setPrototypeOf(type.prototype, new $cI13w.Message());
    Object.assign(type, {
        runtime: runtime,
        typeName: typeName,
        fields: runtime.util.newFieldList(fields),
        fromBinary (bytes, options) {
            return new type().fromBinary(bytes, options);
        },
        fromJson (jsonValue, options) {
            return new type().fromJson(jsonValue, options);
        },
        fromJsonString (jsonString, options) {
            return new type().fromJsonString(jsonString, options);
        },
        equals (a, b) {
            return runtime.util.equals(type, a, b);
        }
    });
    return type;
}
module.exports.makeMessageType = $921db3e70b72c4b0$var$makeMessageType;

});
parcelRegister("cI13w", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Message = void 0;
/**
 * Message is the base class of every message, generated, or created at
 * runtime.
 *
 * It is _not_ safe to extend this class. If you want to create a message at
 * run time, use proto3.makeMessageType().
 */ class $940a69c0d66c2d8d$var$Message {
    /**
     * Compare with a message of the same type.
     * Note that this function disregards extensions and unknown fields.
     */ equals(other) {
        return this.getType().runtime.util.equals(this.getType(), this, other);
    }
    /**
     * Create a deep copy.
     */ clone() {
        return this.getType().runtime.util.clone(this);
    }
    /**
     * Parse from binary data, merging fields.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */ fromBinary(bytes, options) {
        const type = this.getType(), format = type.runtime.bin, opt = format.makeReadOptions(options);
        format.readMessage(this, opt.readerFactory(bytes), bytes.byteLength, opt);
        return this;
    }
    /**
     * Parse a message from a JSON value.
     */ fromJson(jsonValue, options) {
        const type = this.getType(), format = type.runtime.json, opt = format.makeReadOptions(options);
        format.readMessage(type, jsonValue, opt, this);
        return this;
    }
    /**
     * Parse a message from a JSON string.
     */ fromJsonString(jsonString, options) {
        let json;
        try {
            json = JSON.parse(jsonString);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(json, options);
    }
    /**
     * Serialize the message to binary data.
     */ toBinary(options) {
        const type = this.getType(), bin = type.runtime.bin, opt = bin.makeWriteOptions(options), writer = opt.writerFactory();
        bin.writeMessage(this, writer, opt);
        return writer.finish();
    }
    /**
     * Serialize the message to a JSON value, a JavaScript value that can be
     * passed to JSON.stringify().
     */ toJson(options) {
        const type = this.getType(), json = type.runtime.json, opt = json.makeWriteOptions(options);
        return json.writeMessage(this, opt);
    }
    /**
     * Serialize the message to a JSON string.
     */ toJsonString(options) {
        var _a;
        const value = this.toJson(options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Override for serialization behavior. This will be invoked when calling
     * JSON.stringify on this message (i.e. JSON.stringify(msg)).
     *
     * Note that this will not serialize google.protobuf.Any with a packed
     * message because the protobuf JSON format specifies that it needs to be
     * unpacked, and this is only possible with a type registry to look up the
     * message type.  As a result, attempting to serialize a message with this
     * type will throw an Error.
     *
     * This method is protected because you should not need to invoke it
     * directly -- instead use JSON.stringify or toJsonString for
     * stringified JSON.  Alternatively, if actual JSON is desired, you should
     * use toJson.
     */ toJSON() {
        return this.toJson({
            emitDefaultValues: true
        });
    }
    /**
     * Retrieve the MessageType of this message - a singleton that represents
     * the protobuf message declaration and provides metadata for reflection-
     * based operations.
     */ getType() {
        // Any class that extends Message _must_ provide a complete static
        // implementation of MessageType.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
        return Object.getPrototypeOf(this).constructor;
    }
}
module.exports.Message = $940a69c0d66c2d8d$var$Message;

});


parcelRegister("a4E7o", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.filterUnknownFields = module.exports.createExtensionContainer = module.exports.makeExtension = void 0;

var $40ouL = parcelRequire("40ouL");
/**
 * Create a new extension using the given runtime.
 */ function $755965c5bd6a1c05$var$makeExtension(runtime, typeName, extendee, field) {
    let fi;
    return {
        typeName: typeName,
        extendee: extendee,
        get field () {
            if (!fi) {
                const i = typeof field == "function" ? field() : field;
                i.name = typeName.split(".").pop();
                i.jsonName = `[${typeName}]`;
                fi = runtime.util.newFieldList([
                    i
                ]).list()[0];
            }
            return fi;
        },
        runtime: runtime
    };
}
module.exports.makeExtension = $755965c5bd6a1c05$var$makeExtension;
/**
 * Create a container that allows us to read extension fields into it with the
 * same logic as regular fields.
 */ function $755965c5bd6a1c05$var$createExtensionContainer(extension) {
    const localName = extension.field.localName;
    const container = Object.create(null);
    container[localName] = $755965c5bd6a1c05$var$initExtensionField(extension);
    return [
        container,
        ()=>container[localName]
    ];
}
module.exports.createExtensionContainer = $755965c5bd6a1c05$var$createExtensionContainer;
function $755965c5bd6a1c05$var$initExtensionField(ext) {
    const field = ext.field;
    if (field.repeated) return [];
    if (field.default !== undefined) return field.default;
    switch(field.kind){
        case "enum":
            return field.T.values[0].no;
        case "scalar":
            return (0, $40ouL.scalarZeroValue)(field.T, field.L);
        case "message":
            // eslint-disable-next-line no-case-declarations
            const T = field.T, value = new T();
            return T.fieldWrapper ? T.fieldWrapper.unwrapField(value) : value;
        case "map":
            throw "map fields are not allowed to be extensions";
    }
}
/**
 * Helper to filter unknown fields, optimized based on field type.
 */ function $755965c5bd6a1c05$var$filterUnknownFields(unknownFields, field) {
    if (!field.repeated && (field.kind == "enum" || field.kind == "scalar")) {
        // singular scalar fields do not merge, we pick the last
        for(let i = unknownFields.length - 1; i >= 0; --i){
            if (unknownFields[i].no == field.no) return [
                unknownFields[i]
            ];
        }
        return [];
    }
    return unknownFields.filter((uf)=>uf.no === field.no);
}
module.exports.filterUnknownFields = $755965c5bd6a1c05$var$filterUnknownFields;

});
parcelRegister("40ouL", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isScalarZeroValue = module.exports.scalarZeroValue = module.exports.scalarEquals = void 0;

var $69KOh = parcelRequire("69KOh");

var $7RwvC = parcelRequire("7RwvC");
/**
 * Returns true if both scalar values are equal.
 */ function $2eaa29bde2403e2f$var$scalarEquals(type, a, b) {
    if (a === b) // This correctly matches equal values except BYTES and (possibly) 64-bit integers.
    return true;
    // Special case BYTES - we need to compare each byte individually
    if (type == $7RwvC.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) return false;
        if (a.length !== b.length) return false;
        for(let i = 0; i < a.length; i++){
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    // Special case 64-bit integers - we support number, string and bigint representation.
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch(type){
        case $7RwvC.ScalarType.UINT64:
        case $7RwvC.ScalarType.FIXED64:
        case $7RwvC.ScalarType.INT64:
        case $7RwvC.ScalarType.SFIXED64:
        case $7RwvC.ScalarType.SINT64:
            // Loose comparison will match between 0n, 0 and "0".
            return a == b;
    }
    // Anything that hasn't been caught by strict comparison or special cased
    // BYTES and 64-bit integers is not equal.
    return false;
}
module.exports.scalarEquals = $2eaa29bde2403e2f$var$scalarEquals;
/**
 * Returns the zero value for the given scalar type.
 */ function $2eaa29bde2403e2f$var$scalarZeroValue(type, longType) {
    switch(type){
        case $7RwvC.ScalarType.BOOL:
            return false;
        case $7RwvC.ScalarType.UINT64:
        case $7RwvC.ScalarType.FIXED64:
        case $7RwvC.ScalarType.INT64:
        case $7RwvC.ScalarType.SFIXED64:
        case $7RwvC.ScalarType.SINT64:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- acceptable since it's covered by tests
            return longType == 0 ? $69KOh.protoInt64.zero : "0";
        case $7RwvC.ScalarType.DOUBLE:
        case $7RwvC.ScalarType.FLOAT:
            return 0.0;
        case $7RwvC.ScalarType.BYTES:
            return new Uint8Array(0);
        case $7RwvC.ScalarType.STRING:
            return "";
        default:
            // Handles INT32, UINT32, SINT32, FIXED32, SFIXED32.
            // We do not use individual cases to save a few bytes code size.
            return 0;
    }
}
module.exports.scalarZeroValue = $2eaa29bde2403e2f$var$scalarZeroValue;
/**
 * Returns true for a zero-value. For example, an integer has the zero-value `0`,
 * a boolean is `false`, a string is `""`, and bytes is an empty Uint8Array.
 *
 * In proto3, zero-values are not written to the wire, unless the field is
 * optional or repeated.
 */ function $2eaa29bde2403e2f$var$isScalarZeroValue(type, value) {
    switch(type){
        case $7RwvC.ScalarType.BOOL:
            return value === false;
        case $7RwvC.ScalarType.STRING:
            return value === "";
        case $7RwvC.ScalarType.BYTES:
            return value instanceof Uint8Array && !value.byteLength;
        default:
            return value == 0; // Loose comparison matches 0n, 0 and "0"
    }
}
module.exports.isScalarZeroValue = $2eaa29bde2403e2f$var$isScalarZeroValue;

});
parcelRegister("69KOh", function(module, exports) {

var $gBNVf = parcelRequire("gBNVf");
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.protoInt64 = void 0;

var $7UhPF = parcelRequire("7UhPF");

var $kSQTc = parcelRequire("kSQTc");
function $47b7e4d51bfd6da5$var$makeInt64Support() {
    const dv = new DataView(new ArrayBuffer(8));
    // note that Safari 14 implements BigInt, but not the DataView methods
    const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof $gBNVf != "object" || typeof $gBNVf.env != "object" || true);
    if (ok) {
        const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: true,
            parse (value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > MAX || bi < MIN) throw new Error(`int64 invalid: ${value}`);
                return bi;
            },
            uParse (value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > UMAX || bi < UMIN) throw new Error(`uint64 invalid: ${value}`);
                return bi;
            },
            enc (value) {
                dv.setBigInt64(0, this.parse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            uEnc (value) {
                dv.setBigInt64(0, this.uParse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            dec (lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigInt64(0, true);
            },
            uDec (lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigUint64(0, true);
            }
        };
    }
    const assertInt64String = (value)=>(0, $7UhPF.assert)(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
    const assertUInt64String = (value)=>(0, $7UhPF.assert)(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
    return {
        zero: "0",
        supported: false,
        parse (value) {
            if (typeof value != "string") value = value.toString();
            assertInt64String(value);
            return value;
        },
        uParse (value) {
            if (typeof value != "string") value = value.toString();
            assertUInt64String(value);
            return value;
        },
        enc (value) {
            if (typeof value != "string") value = value.toString();
            assertInt64String(value);
            return (0, $kSQTc.int64FromString)(value);
        },
        uEnc (value) {
            if (typeof value != "string") value = value.toString();
            assertUInt64String(value);
            return (0, $kSQTc.int64FromString)(value);
        },
        dec (lo, hi) {
            return (0, $kSQTc.int64ToString)(lo, hi);
        },
        uDec (lo, hi) {
            return (0, $kSQTc.uInt64ToString)(lo, hi);
        }
    };
}
module.exports.protoInt64 = $47b7e4d51bfd6da5$var$makeInt64Support();

});
parcelRegister("kSQTc", function(module, exports) {
"use strict";
// Copyright 2008 Google Inc.  All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Code generated by the Protocol Buffer compiler is owned by the owner
// of the input file used when generating it.  This code is not
// standalone and requires a support library to be linked with it.  This
// support library is itself covered by the above license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.varint32read = module.exports.varint32write = module.exports.uInt64ToString = module.exports.int64ToString = module.exports.int64FromString = module.exports.varint64write = module.exports.varint64read = void 0;
/* eslint-disable prefer-const,@typescript-eslint/restrict-plus-operands */ /**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [1]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */ function $f341e087d0a88dfe$var$varint64read() {
    let lowBits = 0;
    let highBits = 0;
    for(let shift = 0; shift < 28; shift += 7){
        let b = this.buf[this.pos++];
        lowBits |= (b & 0x7f) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    let middleByte = this.buf[this.pos++];
    // last four bits of the first 32 bit number
    lowBits |= (middleByte & 0x0f) << 28;
    // 3 upper bits are part of the next 32 bit number
    highBits = (middleByte & 0x70) >> 4;
    if ((middleByte & 0x80) == 0) {
        this.assertBounds();
        return [
            lowBits,
            highBits
        ];
    }
    for(let shift = 3; shift <= 31; shift += 7){
        let b = this.buf[this.pos++];
        highBits |= (b & 0x7f) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    throw new Error("invalid varint");
}
module.exports.varint64read = $f341e087d0a88dfe$var$varint64read;
/**
 * Write a 64 bit varint, given as two JS numbers, to the given bytes array.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
 */ function $f341e087d0a88dfe$var$varint64write(lo, hi, bytes) {
    for(let i = 0; i < 28; i = i + 7){
        const shift = lo >>> i;
        const hasNext = !(shift >>> 7 == 0 && hi == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
        bytes.push(byte);
        if (!hasNext) return;
    }
    const splitBits = lo >>> 28 & 0x0f | (hi & 0x07) << 4;
    const hasMoreBits = !(hi >> 3 == 0);
    bytes.push((hasMoreBits ? splitBits | 0x80 : splitBits) & 0xff);
    if (!hasMoreBits) return;
    for(let i = 3; i < 31; i = i + 7){
        const shift = hi >>> i;
        const hasNext = !(shift >>> 7 == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
        bytes.push(byte);
        if (!hasNext) return;
    }
    bytes.push(hi >>> 31 & 0x01);
}
module.exports.varint64write = $f341e087d0a88dfe$var$varint64write;
// constants for binary math
const $f341e087d0a88dfe$var$TWO_PWR_32_DBL = 0x100000000;
/**
 * Parse decimal string of 64 bit integer value as two JS numbers.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */ function $f341e087d0a88dfe$var$int64FromString(dec) {
    // Check for minus sign.
    const minus = dec[0] === "-";
    if (minus) dec = dec.slice(1);
    // Work 6 decimal digits at a time, acting like we're converting base 1e6
    // digits to binary. This is safe to do with floating point math because
    // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        // Note: Number('') is 0.
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        // Carry bits from lowBits to
        if (lowBits >= $f341e087d0a88dfe$var$TWO_PWR_32_DBL) {
            highBits = highBits + (lowBits / $f341e087d0a88dfe$var$TWO_PWR_32_DBL | 0);
            lowBits = lowBits % $f341e087d0a88dfe$var$TWO_PWR_32_DBL;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return minus ? $f341e087d0a88dfe$var$negate(lowBits, highBits) : $f341e087d0a88dfe$var$newBits(lowBits, highBits);
}
module.exports.int64FromString = $f341e087d0a88dfe$var$int64FromString;
/**
 * Losslessly converts a 64-bit signed integer in 32:32 split representation
 * into a decimal string.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */ function $f341e087d0a88dfe$var$int64ToString(lo, hi) {
    let bits = $f341e087d0a88dfe$var$newBits(lo, hi);
    // If we're treating the input as a signed value and the high bit is set, do
    // a manual two's complement conversion before the decimal conversion.
    const negative = bits.hi & 0x80000000;
    if (negative) bits = $f341e087d0a88dfe$var$negate(bits.lo, bits.hi);
    const result = $f341e087d0a88dfe$var$uInt64ToString(bits.lo, bits.hi);
    return negative ? "-" + result : result;
}
module.exports.int64ToString = $f341e087d0a88dfe$var$int64ToString;
/**
 * Losslessly converts a 64-bit unsigned integer in 32:32 split representation
 * into a decimal string.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */ function $f341e087d0a88dfe$var$uInt64ToString(lo, hi) {
    ({ lo: lo, hi: hi } = $f341e087d0a88dfe$var$toUnsigned(lo, hi));
    // Skip the expensive conversion if the number is small enough to use the
    // built-in conversions.
    // Number.MAX_SAFE_INTEGER = 0x001FFFFF FFFFFFFF, thus any number with
    // highBits <= 0x1FFFFF can be safely expressed with a double and retain
    // integer precision.
    // Proven by: Number.isSafeInteger(0x1FFFFF * 2**32 + 0xFFFFFFFF) == true.
    if (hi <= 0x1FFFFF) return String($f341e087d0a88dfe$var$TWO_PWR_32_DBL * hi + lo);
    // What this code is doing is essentially converting the input number from
    // base-2 to base-1e7, which allows us to represent the 64-bit range with
    // only 3 (very large) digits. Those digits are then trivial to convert to
    // a base-10 string.
    // The magic numbers used here are -
    // 2^24 = 16777216 = (1,6777216) in base-1e7.
    // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.
    // Split 32:32 representation into 16:24:24 representation so our
    // intermediate digits don't overflow.
    const low = lo & 0xFFFFFF;
    const mid = (lo >>> 24 | hi << 8) & 0xFFFFFF;
    const high = hi >> 16 & 0xFFFF;
    // Assemble our three base-1e7 digits, ignoring carries. The maximum
    // value in a digit at this step is representable as a 48-bit integer, which
    // can be stored in a 64-bit floating point number.
    let digitA = low + mid * 6777216 + high * 6710656;
    let digitB = mid + high * 8147497;
    let digitC = high * 2;
    // Apply carries from A to B and from B to C.
    const base = 10000000;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    // If digitC is 0, then we should have returned in the trivial code path
    // at the top for non-safe integers. Given this, we can assume both digitB
    // and digitA need leading zeros.
    return digitC.toString() + $f341e087d0a88dfe$var$decimalFrom1e7WithLeadingZeros(digitB) + $f341e087d0a88dfe$var$decimalFrom1e7WithLeadingZeros(digitA);
}
module.exports.uInt64ToString = $f341e087d0a88dfe$var$uInt64ToString;
function $f341e087d0a88dfe$var$toUnsigned(lo, hi) {
    return {
        lo: lo >>> 0,
        hi: hi >>> 0
    };
}
function $f341e087d0a88dfe$var$newBits(lo, hi) {
    return {
        lo: lo | 0,
        hi: hi | 0
    };
}
/**
 * Returns two's compliment negation of input.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
 */ function $f341e087d0a88dfe$var$negate(lowBits, highBits) {
    highBits = ~highBits;
    if (lowBits) lowBits = ~lowBits + 1;
    else // If lowBits is 0, then bitwise-not is 0xFFFFFFFF,
    // adding 1 to that, results in 0x100000000, which leaves
    // the low bits 0x0 and simply adds one to the high bits.
    highBits += 1;
    return $f341e087d0a88dfe$var$newBits(lowBits, highBits);
}
/**
 * Returns decimal representation of digit1e7 with leading zeros.
 */ const $f341e087d0a88dfe$var$decimalFrom1e7WithLeadingZeros = (digit1e7)=>{
    const partial = String(digit1e7);
    return "0000000".slice(partial.length) + partial;
};
/**
 * Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
 */ function $f341e087d0a88dfe$var$varint32write(value, bytes) {
    if (value >= 0) {
        // write value as varint 32
        while(value > 0x7f){
            bytes.push(value & 0x7f | 0x80);
            value = value >>> 7;
        }
        bytes.push(value);
    } else {
        for(let i = 0; i < 9; i++){
            bytes.push(value & 127 | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
module.exports.varint32write = $f341e087d0a88dfe$var$varint32write;
/**
 * Read an unsigned 32 bit varint.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
 */ function $f341e087d0a88dfe$var$varint32read() {
    let b = this.buf[this.pos++];
    let result = b & 0x7f;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 7;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 14;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 21;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    // Extract only last 4 bits
    b = this.buf[this.pos++];
    result |= (b & 0x0f) << 28;
    for(let readBytes = 5; (b & 0x80) !== 0 && readBytes < 10; readBytes++)b = this.buf[this.pos++];
    if ((b & 0x80) != 0) throw new Error("invalid varint");
    this.assertBounds();
    // Result can have 32 bits, convert it to unsigned
    return result >>> 0;
}
module.exports.varint32read = $f341e087d0a88dfe$var$varint32read;

});


parcelRegister("7RwvC", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.LongType = module.exports.ScalarType = void 0;
/**
 * Scalar value types. This is a subset of field types declared by protobuf
 * enum google.protobuf.FieldDescriptorProto.Type The types GROUP and MESSAGE
 * are omitted, but the numerical values are identical.
 */ var $5b96b33bf78f9d0e$var$ScalarType;
(function(ScalarType) {
    // 0 is reserved for errors.
    // Order is weird for historical reasons.
    ScalarType[ScalarType["DOUBLE"] = 1] = "DOUBLE";
    ScalarType[ScalarType["FLOAT"] = 2] = "FLOAT";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
    // negative values are likely.
    ScalarType[ScalarType["INT64"] = 3] = "INT64";
    ScalarType[ScalarType["UINT64"] = 4] = "UINT64";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
    // negative values are likely.
    ScalarType[ScalarType["INT32"] = 5] = "INT32";
    ScalarType[ScalarType["FIXED64"] = 6] = "FIXED64";
    ScalarType[ScalarType["FIXED32"] = 7] = "FIXED32";
    ScalarType[ScalarType["BOOL"] = 8] = "BOOL";
    ScalarType[ScalarType["STRING"] = 9] = "STRING";
    // Tag-delimited aggregate.
    // Group type is deprecated and not supported in proto3. However, Proto3
    // implementations should still be able to parse the group wire format and
    // treat group fields as unknown fields.
    // TYPE_GROUP = 10,
    // TYPE_MESSAGE = 11,  // Length-delimited aggregate.
    // New in version 2.
    ScalarType[ScalarType["BYTES"] = 12] = "BYTES";
    ScalarType[ScalarType["UINT32"] = 13] = "UINT32";
    // TYPE_ENUM = 14,
    ScalarType[ScalarType["SFIXED32"] = 15] = "SFIXED32";
    ScalarType[ScalarType["SFIXED64"] = 16] = "SFIXED64";
    ScalarType[ScalarType["SINT32"] = 17] = "SINT32";
    ScalarType[ScalarType["SINT64"] = 18] = "SINT64";
})($5b96b33bf78f9d0e$var$ScalarType || (module.exports.ScalarType = $5b96b33bf78f9d0e$var$ScalarType = {}));
/**
 * JavaScript representation of fields with 64 bit integral types (int64, uint64,
 * sint64, fixed64, sfixed64).
 *
 * This is a subset of google.protobuf.FieldOptions.JSType, which defines JS_NORMAL,
 * JS_STRING, and JS_NUMBER. Protobuf-ES uses BigInt by default, but will use
 * String if `[jstype = JS_STRING]` is specified.
 *
 * ```protobuf
 * uint64 field_a = 1; // BigInt
 * uint64 field_b = 2 [jstype = JS_NORMAL]; // BigInt
 * uint64 field_b = 2 [jstype = JS_NUMBER]; // BigInt
 * uint64 field_b = 2 [jstype = JS_STRING]; // String
 * ```
 */ var $5b96b33bf78f9d0e$var$LongType;
(function(LongType) {
    /**
     * Use JavaScript BigInt.
     */ LongType[LongType["BIGINT"] = 0] = "BIGINT";
    /**
     * Use JavaScript String.
     *
     * Field option `[jstype = JS_STRING]`.
     */ LongType[LongType["STRING"] = 1] = "STRING";
})($5b96b33bf78f9d0e$var$LongType || (module.exports.LongType = $5b96b33bf78f9d0e$var$LongType = {}));

});



parcelRegister("38R4O", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.makeJsonFormat = void 0;

var $7UhPF = parcelRequire("7UhPF");

var $69KOh = parcelRequire("69KOh");

var $6l6X4 = parcelRequire("6l6X4");

var $a4E7o = parcelRequire("a4E7o");

var $c7rw1 = parcelRequire("c7rw1");

var $7QM6s = parcelRequire("7QM6s");

var $fH27Q = parcelRequire("fH27Q");

var $40ouL = parcelRequire("40ouL");

var $40ouL = parcelRequire("40ouL");

var $7RwvC = parcelRequire("7RwvC");

var $jzsFs = parcelRequire("jzsFs");
/* eslint-disable no-case-declarations,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call */ // Default options for parsing JSON.
const $249b4a57dfa06539$var$jsonReadDefaults = {
    ignoreUnknownFields: false
};
// Default options for serializing to JSON.
const $249b4a57dfa06539$var$jsonWriteDefaults = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0
};
function $249b4a57dfa06539$var$makeReadOptions(options) {
    return options ? Object.assign(Object.assign({}, $249b4a57dfa06539$var$jsonReadDefaults), options) : $249b4a57dfa06539$var$jsonReadDefaults;
}
function $249b4a57dfa06539$var$makeWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, $249b4a57dfa06539$var$jsonWriteDefaults), options) : $249b4a57dfa06539$var$jsonWriteDefaults;
}
const $249b4a57dfa06539$var$tokenNull = Symbol();
const $249b4a57dfa06539$var$tokenIgnoredUnknownEnum = Symbol();
function $249b4a57dfa06539$var$makeJsonFormat() {
    return {
        makeReadOptions: $249b4a57dfa06539$var$makeReadOptions,
        makeWriteOptions: $249b4a57dfa06539$var$makeWriteOptions,
        readMessage (type, json, options, message) {
            if (json == null || Array.isArray(json) || typeof json != "object") throw new Error(`cannot decode message ${type.typeName} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(json)}`);
            message = message !== null && message !== void 0 ? message : new type();
            const oneofSeen = new Map();
            const registry = options.typeRegistry;
            for (const [jsonKey, jsonValue] of Object.entries(json)){
                const field = type.fields.findJsonName(jsonKey);
                if (field) {
                    if (field.oneof) {
                        if (jsonValue === null && field.kind == "scalar") continue;
                        const seen = oneofSeen.get(field.oneof);
                        if (seen !== undefined) throw new Error(`cannot decode message ${type.typeName} from JSON: multiple keys for oneof "${field.oneof.name}" present: "${seen}", "${jsonKey}"`);
                        oneofSeen.set(field.oneof, jsonKey);
                    }
                    $249b4a57dfa06539$var$readField(message, jsonValue, field, options, type);
                } else {
                    let found = false;
                    if ((registry === null || registry === void 0 ? void 0 : registry.findExtension) && jsonKey.startsWith("[") && jsonKey.endsWith("]")) {
                        const ext = registry.findExtension(jsonKey.substring(1, jsonKey.length - 1));
                        if (ext && ext.extendee.typeName == type.typeName) {
                            found = true;
                            const [container, get] = (0, $a4E7o.createExtensionContainer)(ext);
                            $249b4a57dfa06539$var$readField(container, jsonValue, ext.field, options, ext);
                            // We pass on the options as BinaryReadOptions/BinaryWriteOptions,
                            // so that users can bring their own binary reader and writer factories
                            // if necessary.
                            (0, $c7rw1.setExtension)(message, ext, get(), options);
                        }
                    }
                    if (!found && !options.ignoreUnknownFields) throw new Error(`cannot decode message ${type.typeName} from JSON: key "${jsonKey}" is unknown`);
                }
            }
            return message;
        },
        writeMessage (message, options) {
            const type = message.getType();
            const json = {};
            let field;
            try {
                for (field of type.fields.byNumber()){
                    if (!(0, $7QM6s.isFieldSet)(field, message)) {
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        if (field.req) throw `required field not set`;
                        if (!options.emitDefaultValues) continue;
                        if (!$249b4a57dfa06539$var$canEmitFieldDefaultValue(field)) continue;
                    }
                    const value = field.oneof ? message[field.oneof.localName].value : message[field.localName];
                    const jsonValue = $249b4a57dfa06539$var$writeField(field, value, options);
                    if (jsonValue !== undefined) json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
                }
                const registry = options.typeRegistry;
                if (registry === null || registry === void 0 ? void 0 : registry.findExtensionFor) for (const uf of type.runtime.bin.listUnknownFields(message)){
                    const ext = registry.findExtensionFor(type.typeName, uf.no);
                    if (ext && (0, $c7rw1.hasExtension)(message, ext)) {
                        // We pass on the options as BinaryReadOptions, so that users can bring their own
                        // binary reader factory if necessary.
                        const value = (0, $c7rw1.getExtension)(message, ext, options);
                        const jsonValue = $249b4a57dfa06539$var$writeField(ext.field, value, options);
                        if (jsonValue !== undefined) json[ext.field.jsonName] = jsonValue;
                    }
                }
            } catch (e) {
                const m = field ? `cannot encode field ${type.typeName}.${field.name} to JSON` : `cannot encode message ${type.typeName} to JSON`;
                const r = e instanceof Error ? e.message : String(e);
                throw new Error(m + (r.length > 0 ? `: ${r}` : ""));
            }
            return json;
        },
        readScalar (type, json, longType) {
            // The signature of our internal function has changed. For backwards-
            // compatibility, we support the old form that is part of the public API
            // through the interface JsonFormat.
            return $249b4a57dfa06539$var$readScalar(type, json, longType !== null && longType !== void 0 ? longType : $7RwvC.LongType.BIGINT, true);
        },
        writeScalar (type, value, emitDefaultValues) {
            // The signature of our internal function has changed. For backwards-
            // compatibility, we support the old form that is part of the public API
            // through the interface JsonFormat.
            if (value === undefined) return undefined;
            if (emitDefaultValues || (0, $40ouL.isScalarZeroValue)(type, value)) return $249b4a57dfa06539$var$writeScalar(type, value);
            return undefined;
        },
        debug: $249b4a57dfa06539$var$debugJsonValue
    };
}
module.exports.makeJsonFormat = $249b4a57dfa06539$var$makeJsonFormat;
function $249b4a57dfa06539$var$debugJsonValue(json) {
    if (json === null) return "null";
    switch(typeof json){
        case "object":
            return Array.isArray(json) ? "array" : "object";
        case "string":
            return json.length > 100 ? "string" : `"${json.split('"').join('\\"')}"`;
        default:
            return String(json);
    }
}
// Read a JSON value for a field.
// The "parentType" argument is only used to provide context in errors.
function $249b4a57dfa06539$var$readField(target, jsonValue, field, options, parentType) {
    let localName = field.localName;
    if (field.repeated) {
        (0, $7UhPF.assert)(field.kind != "map");
        if (jsonValue === null) return;
        if (!Array.isArray(jsonValue)) throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonValue)}`);
        const targetArray = target[localName];
        for (const jsonItem of jsonValue){
            if (jsonItem === null) throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonItem)}`);
            switch(field.kind){
                case "message":
                    targetArray.push(field.T.fromJson(jsonItem, options));
                    break;
                case "enum":
                    const enumValue = $249b4a57dfa06539$var$readEnum(field.T, jsonItem, options.ignoreUnknownFields, true);
                    if (enumValue !== $249b4a57dfa06539$var$tokenIgnoredUnknownEnum) targetArray.push(enumValue);
                    break;
                case "scalar":
                    try {
                        targetArray.push($249b4a57dfa06539$var$readScalar(field.T, jsonItem, field.L, true));
                    } catch (e) {
                        let m = `cannot decode field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonItem)}`;
                        if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
                        throw new Error(m);
                    }
                    break;
            }
        }
    } else if (field.kind == "map") {
        if (jsonValue === null) return;
        if (typeof jsonValue != "object" || Array.isArray(jsonValue)) throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonValue)}`);
        const targetMap = target[localName];
        for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)){
            if (jsonMapValue === null) throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: map value null`);
            let key;
            try {
                key = $249b4a57dfa06539$var$readMapKey(field.K, jsonMapKey);
            } catch (e) {
                let m = `cannot decode map key for field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonValue)}`;
                if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
                throw new Error(m);
            }
            switch(field.V.kind){
                case "message":
                    targetMap[key] = field.V.T.fromJson(jsonMapValue, options);
                    break;
                case "enum":
                    const enumValue = $249b4a57dfa06539$var$readEnum(field.V.T, jsonMapValue, options.ignoreUnknownFields, true);
                    if (enumValue !== $249b4a57dfa06539$var$tokenIgnoredUnknownEnum) targetMap[key] = enumValue;
                    break;
                case "scalar":
                    try {
                        targetMap[key] = $249b4a57dfa06539$var$readScalar(field.V.T, jsonMapValue, $7RwvC.LongType.BIGINT, true);
                    } catch (e) {
                        let m = `cannot decode map value for field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonValue)}`;
                        if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
                        throw new Error(m);
                    }
                    break;
            }
        }
    } else {
        if (field.oneof) {
            target = target[field.oneof.localName] = {
                case: localName
            };
            localName = "value";
        }
        switch(field.kind){
            case "message":
                const messageType = field.T;
                if (jsonValue === null && messageType.typeName != "google.protobuf.Value") return;
                let currentValue = target[localName];
                if ((0, $jzsFs.isMessage)(currentValue)) currentValue.fromJson(jsonValue, options);
                else {
                    target[localName] = currentValue = messageType.fromJson(jsonValue, options);
                    if (messageType.fieldWrapper && !field.oneof) target[localName] = messageType.fieldWrapper.unwrapField(currentValue);
                }
                break;
            case "enum":
                const enumValue = $249b4a57dfa06539$var$readEnum(field.T, jsonValue, options.ignoreUnknownFields, false);
                switch(enumValue){
                    case $249b4a57dfa06539$var$tokenNull:
                        (0, $7QM6s.clearField)(field, target);
                        break;
                    case $249b4a57dfa06539$var$tokenIgnoredUnknownEnum:
                        break;
                    default:
                        target[localName] = enumValue;
                        break;
                }
                break;
            case "scalar":
                try {
                    const scalarValue = $249b4a57dfa06539$var$readScalar(field.T, jsonValue, field.L, false);
                    switch(scalarValue){
                        case $249b4a57dfa06539$var$tokenNull:
                            (0, $7QM6s.clearField)(field, target);
                            break;
                        default:
                            target[localName] = scalarValue;
                            break;
                    }
                } catch (e) {
                    let m = `cannot decode field ${parentType.typeName}.${field.name} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(jsonValue)}`;
                    if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
                    throw new Error(m);
                }
                break;
        }
    }
}
function $249b4a57dfa06539$var$readMapKey(type, json) {
    if (type === $7RwvC.ScalarType.BOOL) // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch(json){
        case "true":
            json = true;
            break;
        case "false":
            json = false;
            break;
    }
    return $249b4a57dfa06539$var$readScalar(type, json, $7RwvC.LongType.BIGINT, true).toString();
}
function $249b4a57dfa06539$var$readScalar(type, json, longType, nullAsZeroValue) {
    if (json === null) {
        if (nullAsZeroValue) return (0, $40ouL.scalarZeroValue)(type, longType);
        return $249b4a57dfa06539$var$tokenNull;
    }
    // every valid case in the switch below returns, and every fall
    // through is regarded as a failure.
    switch(type){
        // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
        // Either numbers or strings are accepted. Exponent notation is also accepted.
        case $7RwvC.ScalarType.DOUBLE:
        case $7RwvC.ScalarType.FLOAT:
            if (json === "NaN") return Number.NaN;
            if (json === "Infinity") return Number.POSITIVE_INFINITY;
            if (json === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (json === "") break;
            if (typeof json == "string" && json.trim().length !== json.length) break;
            if (typeof json != "string" && typeof json != "number") break;
            const float = Number(json);
            if (Number.isNaN(float)) break;
            if (!Number.isFinite(float)) break;
            if (type == $7RwvC.ScalarType.FLOAT) (0, $7UhPF.assertFloat32)(float);
            return float;
        // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
        case $7RwvC.ScalarType.INT32:
        case $7RwvC.ScalarType.FIXED32:
        case $7RwvC.ScalarType.SFIXED32:
        case $7RwvC.ScalarType.SINT32:
        case $7RwvC.ScalarType.UINT32:
            let int32;
            if (typeof json == "number") int32 = json;
            else if (typeof json == "string" && json.length > 0) {
                if (json.trim().length === json.length) int32 = Number(json);
            }
            if (int32 === undefined) break;
            if (type == $7RwvC.ScalarType.UINT32 || type == $7RwvC.ScalarType.FIXED32) (0, $7UhPF.assertUInt32)(int32);
            else (0, $7UhPF.assertInt32)(int32);
            return int32;
        // int64, fixed64, uint64: JSON value will be a decimal string. Either numbers or strings are accepted.
        case $7RwvC.ScalarType.INT64:
        case $7RwvC.ScalarType.SFIXED64:
        case $7RwvC.ScalarType.SINT64:
            if (typeof json != "number" && typeof json != "string") break;
            const long = $69KOh.protoInt64.parse(json);
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return longType ? long.toString() : long;
        case $7RwvC.ScalarType.FIXED64:
        case $7RwvC.ScalarType.UINT64:
            if (typeof json != "number" && typeof json != "string") break;
            const uLong = $69KOh.protoInt64.uParse(json);
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return longType ? uLong.toString() : uLong;
        // bool:
        case $7RwvC.ScalarType.BOOL:
            if (typeof json !== "boolean") break;
            return json;
        // string:
        case $7RwvC.ScalarType.STRING:
            if (typeof json !== "string") break;
            // A string must always contain UTF-8 encoded or 7-bit ASCII.
            // We validate with encodeURIComponent, which appears to be the fastest widely available option.
            try {
                encodeURIComponent(json);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return json;
        // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
        // Either standard or URL-safe base64 encoding with/without paddings are accepted.
        case $7RwvC.ScalarType.BYTES:
            if (json === "") return new Uint8Array(0);
            if (typeof json !== "string") break;
            return $6l6X4.protoBase64.dec(json);
    }
    throw new Error();
}
function $249b4a57dfa06539$var$readEnum(type, json, ignoreUnknownFields, nullAsZeroValue) {
    if (json === null) {
        if (type.typeName == "google.protobuf.NullValue") return 0; // google.protobuf.NullValue.NULL_VALUE = 0
        return nullAsZeroValue ? type.values[0].no : $249b4a57dfa06539$var$tokenNull;
    }
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch(typeof json){
        case "number":
            if (Number.isInteger(json)) return json;
            break;
        case "string":
            const value = type.findName(json);
            if (value !== undefined) return value.no;
            if (ignoreUnknownFields) return $249b4a57dfa06539$var$tokenIgnoredUnknownEnum;
            break;
    }
    throw new Error(`cannot decode enum ${type.typeName} from JSON: ${$249b4a57dfa06539$var$debugJsonValue(json)}`);
}
// Decide whether an unset field should be emitted with JSON write option `emitDefaultValues`
function $249b4a57dfa06539$var$canEmitFieldDefaultValue(field) {
    if (field.repeated || field.kind == "map") // maps are {}, repeated fields are []
    return true;
    if (field.oneof) // oneof fields are never emitted
    return false;
    if (field.kind == "message") // singular message field are allowed to emit JSON null, but we do not
    return false;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (field.opt || field.req) // the field uses explicit presence, so we cannot emit a zero value
    return false;
    return true;
}
function $249b4a57dfa06539$var$writeField(field, value, options) {
    if (field.kind == "map") {
        (0, $7UhPF.assert)(typeof value == "object" && value != null);
        const jsonObj = {};
        const entries = Object.entries(value);
        switch(field.V.kind){
            case "scalar":
                for (const [entryKey, entryValue] of entries)jsonObj[entryKey.toString()] = $249b4a57dfa06539$var$writeScalar(field.V.T, entryValue); // JSON standard allows only (double quoted) string as property key
                break;
            case "message":
                for (const [entryKey, entryValue] of entries)// JSON standard allows only (double quoted) string as property key
                jsonObj[entryKey.toString()] = entryValue.toJson(options);
                break;
            case "enum":
                const enumType = field.V.T;
                for (const [entryKey, entryValue] of entries)// JSON standard allows only (double quoted) string as property key
                jsonObj[entryKey.toString()] = $249b4a57dfa06539$var$writeEnum(enumType, entryValue, options.enumAsInteger);
                break;
        }
        return options.emitDefaultValues || entries.length > 0 ? jsonObj : undefined;
    }
    if (field.repeated) {
        (0, $7UhPF.assert)(Array.isArray(value));
        const jsonArr = [];
        switch(field.kind){
            case "scalar":
                for(let i = 0; i < value.length; i++)jsonArr.push($249b4a57dfa06539$var$writeScalar(field.T, value[i]));
                break;
            case "enum":
                for(let i = 0; i < value.length; i++)jsonArr.push($249b4a57dfa06539$var$writeEnum(field.T, value[i], options.enumAsInteger));
                break;
            case "message":
                for(let i = 0; i < value.length; i++)jsonArr.push(value[i].toJson(options));
                break;
        }
        return options.emitDefaultValues || jsonArr.length > 0 ? jsonArr : undefined;
    }
    switch(field.kind){
        case "scalar":
            return $249b4a57dfa06539$var$writeScalar(field.T, value);
        case "enum":
            return $249b4a57dfa06539$var$writeEnum(field.T, value, options.enumAsInteger);
        case "message":
            return (0, $fH27Q.wrapField)(field.T, value).toJson(options);
    }
}
function $249b4a57dfa06539$var$writeEnum(type, value, enumAsInteger) {
    var _a;
    (0, $7UhPF.assert)(typeof value == "number");
    if (type.typeName == "google.protobuf.NullValue") return null;
    if (enumAsInteger) return value;
    const val = type.findNumber(value);
    return (_a = val === null || val === void 0 ? void 0 : val.name) !== null && _a !== void 0 ? _a : value; // if we don't know the enum value, just return the number
}
function $249b4a57dfa06539$var$writeScalar(type, value) {
    switch(type){
        // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
        case $7RwvC.ScalarType.INT32:
        case $7RwvC.ScalarType.SFIXED32:
        case $7RwvC.ScalarType.SINT32:
        case $7RwvC.ScalarType.FIXED32:
        case $7RwvC.ScalarType.UINT32:
            (0, $7UhPF.assert)(typeof value == "number");
            return value;
        // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
        // Either numbers or strings are accepted. Exponent notation is also accepted.
        case $7RwvC.ScalarType.FLOAT:
        // assertFloat32(value);
        case $7RwvC.ScalarType.DOUBLE:
            (0, $7UhPF.assert)(typeof value == "number");
            if (Number.isNaN(value)) return "NaN";
            if (value === Number.POSITIVE_INFINITY) return "Infinity";
            if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
            return value;
        // string:
        case $7RwvC.ScalarType.STRING:
            (0, $7UhPF.assert)(typeof value == "string");
            return value;
        // bool:
        case $7RwvC.ScalarType.BOOL:
            (0, $7UhPF.assert)(typeof value == "boolean");
            return value;
        // JSON value will be a decimal string. Either numbers or strings are accepted.
        case $7RwvC.ScalarType.UINT64:
        case $7RwvC.ScalarType.FIXED64:
        case $7RwvC.ScalarType.INT64:
        case $7RwvC.ScalarType.SFIXED64:
        case $7RwvC.ScalarType.SINT64:
            (0, $7UhPF.assert)(typeof value == "bigint" || typeof value == "string" || typeof value == "number");
            return value.toString();
        // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
        // Either standard or URL-safe base64 encoding with/without paddings are accepted.
        case $7RwvC.ScalarType.BYTES:
            (0, $7UhPF.assert)(value instanceof Uint8Array);
            return $6l6X4.protoBase64.enc(value);
    }
}

});
parcelRegister("6l6X4", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.protoBase64 = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unnecessary-condition, prefer-const */ // lookup table from base64 character to byte
let $49da18bacb341889$var$encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
// lookup table from base64 character *code* to byte because lookup by number is fast
let $49da18bacb341889$var$decTable = [];
for(let i = 0; i < $49da18bacb341889$var$encTable.length; i++)$49da18bacb341889$var$decTable[$49da18bacb341889$var$encTable[i].charCodeAt(0)] = i;
// support base64url variants
$49da18bacb341889$var$decTable["-".charCodeAt(0)] = $49da18bacb341889$var$encTable.indexOf("+");
$49da18bacb341889$var$decTable["_".charCodeAt(0)] = $49da18bacb341889$var$encTable.indexOf("/");
module.exports.protoBase64 = {
    /**
     * Decodes a base64 string to a byte array.
     *
     * - ignores white-space, including line breaks and tabs
     * - allows inner padding (can decode concatenated base64 strings)
     * - does not require padding
     * - understands base64url encoding:
     *   "-" instead of "+",
     *   "_" instead of "/",
     *   no padding
     */ dec (base64Str) {
        // estimate byte size, not accounting for inner padding and whitespace
        let es = base64Str.length * 3 / 4;
        if (base64Str[base64Str.length - 2] == "=") es -= 2;
        else if (base64Str[base64Str.length - 1] == "=") es -= 1;
        let bytes = new Uint8Array(es), bytePos = 0, groupPos = 0, b, p = 0; // previous byte
        for(let i = 0; i < base64Str.length; i++){
            b = $49da18bacb341889$var$decTable[base64Str.charCodeAt(i)];
            if (b === undefined) switch(base64Str[i]){
                // @ts-ignore TS7029: Fallthrough case in switch
                case "=":
                    groupPos = 0; // reset state when padding found
                // @ts-ignore TS7029: Fallthrough case in switch
                case "\n":
                case "\r":
                case "\t":
                case " ":
                    continue; // skip white-space, and padding
                default:
                    throw Error("invalid base64 string.");
            }
            switch(groupPos){
                case 0:
                    p = b;
                    groupPos = 1;
                    break;
                case 1:
                    bytes[bytePos++] = p << 2 | (b & 48) >> 4;
                    p = b;
                    groupPos = 2;
                    break;
                case 2:
                    bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
                    p = b;
                    groupPos = 3;
                    break;
                case 3:
                    bytes[bytePos++] = (p & 3) << 6 | b;
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos == 1) throw Error("invalid base64 string.");
        return bytes.subarray(0, bytePos);
    },
    /**
     * Encode a byte array to a base64 string.
     */ enc (bytes) {
        let base64 = "", groupPos = 0, b, p = 0; // carry over from previous byte
        for(let i = 0; i < bytes.length; i++){
            b = bytes[i];
            switch(groupPos){
                case 0:
                    base64 += $49da18bacb341889$var$encTable[b >> 2];
                    p = (b & 3) << 4;
                    groupPos = 1;
                    break;
                case 1:
                    base64 += $49da18bacb341889$var$encTable[p | b >> 4];
                    p = (b & 15) << 2;
                    groupPos = 2;
                    break;
                case 2:
                    base64 += $49da18bacb341889$var$encTable[p | b >> 6];
                    base64 += $49da18bacb341889$var$encTable[b & 63];
                    groupPos = 0;
                    break;
            }
        }
        // add output padding
        if (groupPos) {
            base64 += $49da18bacb341889$var$encTable[p];
            base64 += "=";
            if (groupPos == 1) base64 += "=";
        }
        return base64;
    }
};

});

parcelRegister("c7rw1", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.hasExtension = module.exports.clearExtension = module.exports.setExtension = module.exports.getExtension = void 0;

var $7UhPF = parcelRequire("7UhPF");

var $a4E7o = parcelRequire("a4E7o");
/**
 * Retrieve an extension value from a message.
 *
 * The function never returns undefined. Use hasExtension() to check whether an
 * extension is set. If the extension is not set, this function returns the
 * default value (if one was specified in the protobuf source), or the zero value
 * (for example `0` for numeric types, `[]` for repeated extension fields, and
 * an empty message instance for message fields).
 *
 * Extensions are stored as unknown fields on a message. To mutate an extension
 * value, make sure to store the new value with setExtension() after mutating.
 *
 * If the extension does not extend the given message, an error is raised.
 */ function $8d2b7b77ebb2d349$var$getExtension(message, extension, options) {
    $8d2b7b77ebb2d349$var$assertExtendee(extension, message);
    const opt = extension.runtime.bin.makeReadOptions(options);
    const ufs = (0, $a4E7o.filterUnknownFields)(message.getType().runtime.bin.listUnknownFields(message), extension.field);
    const [container, get] = (0, $a4E7o.createExtensionContainer)(extension);
    for (const uf of ufs)extension.runtime.bin.readField(container, opt.readerFactory(uf.data), extension.field, uf.wireType, opt);
    return get();
}
module.exports.getExtension = $8d2b7b77ebb2d349$var$getExtension;
/**
 * Set an extension value on a message. If the message already has a value for
 * this extension, the value is replaced.
 *
 * If the extension does not extend the given message, an error is raised.
 */ function $8d2b7b77ebb2d349$var$setExtension(message, extension, value, options) {
    $8d2b7b77ebb2d349$var$assertExtendee(extension, message);
    const readOpt = extension.runtime.bin.makeReadOptions(options);
    const writeOpt = extension.runtime.bin.makeWriteOptions(options);
    if ($8d2b7b77ebb2d349$var$hasExtension(message, extension)) {
        const ufs = message.getType().runtime.bin.listUnknownFields(message).filter((uf)=>uf.no != extension.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs)message.getType().runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
    }
    const writer = writeOpt.writerFactory();
    let f = extension.field;
    // Implicit presence does not apply to extensions, see https://github.com/protocolbuffers/protobuf/issues/8234
    // We patch the field info to use explicit presence:
    if (!f.opt && !f.repeated && (f.kind == "enum" || f.kind == "scalar")) f = Object.assign(Object.assign({}, extension.field), {
        opt: true
    });
    extension.runtime.bin.writeField(f, value, writer, writeOpt);
    const reader = readOpt.readerFactory(writer.finish());
    while(reader.pos < reader.len){
        const [no, wireType] = reader.tag();
        const data = reader.skip(wireType, no);
        message.getType().runtime.bin.onUnknownField(message, no, wireType, data);
    }
}
module.exports.setExtension = $8d2b7b77ebb2d349$var$setExtension;
/**
 * Remove an extension value from a message.
 *
 * If the extension does not extend the given message, an error is raised.
 */ function $8d2b7b77ebb2d349$var$clearExtension(message, extension) {
    $8d2b7b77ebb2d349$var$assertExtendee(extension, message);
    if ($8d2b7b77ebb2d349$var$hasExtension(message, extension)) {
        const bin = message.getType().runtime.bin;
        const ufs = bin.listUnknownFields(message).filter((uf)=>uf.no != extension.field.no);
        bin.discardUnknownFields(message);
        for (const uf of ufs)bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
    }
}
module.exports.clearExtension = $8d2b7b77ebb2d349$var$clearExtension;
/**
 * Check whether an extension is set on a message.
 */ function $8d2b7b77ebb2d349$var$hasExtension(message, extension) {
    const messageType = message.getType();
    return extension.extendee.typeName === messageType.typeName && !!messageType.runtime.bin.listUnknownFields(message).find((uf)=>uf.no == extension.field.no);
}
module.exports.hasExtension = $8d2b7b77ebb2d349$var$hasExtension;
function $8d2b7b77ebb2d349$var$assertExtendee(extension, message) {
    (0, $7UhPF.assert)(extension.extendee.typeName == message.getType().typeName, `extension ${extension.typeName} can only be applied to message ${extension.extendee.typeName}`);
}

});

parcelRegister("7QM6s", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.clearField = module.exports.isFieldSet = void 0;

var $40ouL = parcelRequire("40ouL");
/**
 * Returns true if the field is set.
 */ function $5b72b40330af589e$var$isFieldSet(field, target) {
    const localName = field.localName;
    if (field.repeated) return target[localName].length > 0;
    if (field.oneof) return target[field.oneof.localName].case === localName; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
    switch(field.kind){
        case "enum":
        case "scalar":
            if (field.opt || field.req) // explicit presence
            return target[localName] !== undefined;
            // implicit presence
            if (field.kind == "enum") return target[localName] !== field.T.values[0].no;
            return !(0, $40ouL.isScalarZeroValue)(field.T, target[localName]);
        case "message":
            return target[localName] !== undefined;
        case "map":
            return Object.keys(target[localName]).length > 0; // eslint-disable-line @typescript-eslint/no-unsafe-argument
    }
}
module.exports.isFieldSet = $5b72b40330af589e$var$isFieldSet;
/**
 * Resets the field, so that isFieldSet() will return false.
 */ function $5b72b40330af589e$var$clearField(field, target) {
    const localName = field.localName;
    const implicitPresence = !field.opt && !field.req;
    if (field.repeated) target[localName] = [];
    else if (field.oneof) target[field.oneof.localName] = {
        case: undefined
    };
    else switch(field.kind){
        case "map":
            target[localName] = {};
            break;
        case "enum":
            target[localName] = implicitPresence ? field.T.values[0].no : undefined;
            break;
        case "scalar":
            target[localName] = implicitPresence ? (0, $40ouL.scalarZeroValue)(field.T, field.L) : undefined;
            break;
        case "message":
            target[localName] = undefined;
            break;
    }
}
module.exports.clearField = $5b72b40330af589e$var$clearField;

});

parcelRegister("fH27Q", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getUnwrappedFieldType = module.exports.wrapField = void 0;

var $7RwvC = parcelRequire("7RwvC");

var $jzsFs = parcelRequire("jzsFs");
/**
 * Wrap a primitive message field value in its corresponding wrapper
 * message. This function is idempotent.
 */ function $b6cc85444609372d$var$wrapField(type, value) {
    if ((0, $jzsFs.isMessage)(value) || !type.fieldWrapper) return value;
    return type.fieldWrapper.wrapField(value);
}
module.exports.wrapField = $b6cc85444609372d$var$wrapField;
/**
 * If the given field uses one of the well-known wrapper types, return
 * the primitive type it wraps.
 */ function $b6cc85444609372d$var$getUnwrappedFieldType(field) {
    if (field.fieldKind !== "message") return undefined;
    if (field.repeated) return undefined;
    if (field.oneof != undefined) return undefined;
    return $b6cc85444609372d$var$wktWrapperToScalarType[field.message.typeName];
}
module.exports.getUnwrappedFieldType = $b6cc85444609372d$var$getUnwrappedFieldType;
const $b6cc85444609372d$var$wktWrapperToScalarType = {
    "google.protobuf.DoubleValue": $7RwvC.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": $7RwvC.ScalarType.FLOAT,
    "google.protobuf.Int64Value": $7RwvC.ScalarType.INT64,
    "google.protobuf.UInt64Value": $7RwvC.ScalarType.UINT64,
    "google.protobuf.Int32Value": $7RwvC.ScalarType.INT32,
    "google.protobuf.UInt32Value": $7RwvC.ScalarType.UINT32,
    "google.protobuf.BoolValue": $7RwvC.ScalarType.BOOL,
    "google.protobuf.StringValue": $7RwvC.ScalarType.STRING,
    "google.protobuf.BytesValue": $7RwvC.ScalarType.BYTES
};

});
parcelRegister("jzsFs", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isMessage = void 0;

var $cI13w = parcelRequire("cI13w");
/**
 * Check whether the given object is any subtype of Message or is a specific
 * Message by passing the type.
 *
 * Just like `instanceof`, `isMessage` narrows the type. The advantage of
 * `isMessage` is that it compares identity by the message type name, not by
 * class identity. This makes it robust against the dual package hazard and
 * similar situations, where the same message is duplicated.
 *
 * This function is _mostly_ equivalent to the `instanceof` operator. For
 * example, `isMessage(foo, MyMessage)` is the same as `foo instanceof MyMessage`,
 * and `isMessage(foo)` is the same as `foo instanceof Message`. In most cases,
 * `isMessage` should be preferred over `instanceof`.
 *
 * However, due to the fact that `isMessage` does not use class identity, there
 * are subtle differences between this function and `instanceof`. Notably,
 * calling `isMessage` on an explicit type of Message will return false.
 */ function $e3f786013ee76664$var$isMessage(arg, type) {
    if (arg === null || typeof arg != "object") return false;
    if (!Object.getOwnPropertyNames($cI13w.Message.prototype).every((m)=>m in arg && typeof arg[m] == "function")) return false;
    const actualType = arg.getType();
    if (actualType === null || typeof actualType != "function" || !("typeName" in actualType) || typeof actualType.typeName != "string") return false;
    return type === undefined ? true : actualType.typeName == type.typeName;
}
module.exports.isMessage = $e3f786013ee76664$var$isMessage;

});



parcelRegister("5JKE4", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.writeMapEntry = module.exports.makeBinaryFormat = void 0;

var $5Q9Y2 = parcelRequire("5Q9Y2");

var $fH27Q = parcelRequire("fH27Q");

var $40ouL = parcelRequire("40ouL");

var $7UhPF = parcelRequire("7UhPF");

var $7QM6s = parcelRequire("7QM6s");

var $7RwvC = parcelRequire("7RwvC");

var $jzsFs = parcelRequire("jzsFs");
/* eslint-disable prefer-const,no-case-declarations,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */ const $42d55686a27424f7$var$unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
// Default options for parsing binary data.
const $42d55686a27424f7$var$readDefaults = {
    readUnknownFields: true,
    readerFactory: (bytes)=>new $5Q9Y2.BinaryReader(bytes)
};
// Default options for serializing binary data.
const $42d55686a27424f7$var$writeDefaults = {
    writeUnknownFields: true,
    writerFactory: ()=>new $5Q9Y2.BinaryWriter()
};
function $42d55686a27424f7$var$makeReadOptions(options) {
    return options ? Object.assign(Object.assign({}, $42d55686a27424f7$var$readDefaults), options) : $42d55686a27424f7$var$readDefaults;
}
function $42d55686a27424f7$var$makeWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, $42d55686a27424f7$var$writeDefaults), options) : $42d55686a27424f7$var$writeDefaults;
}
function $42d55686a27424f7$var$makeBinaryFormat() {
    return {
        makeReadOptions: $42d55686a27424f7$var$makeReadOptions,
        makeWriteOptions: $42d55686a27424f7$var$makeWriteOptions,
        listUnknownFields (message) {
            var _a;
            return (_a = message[$42d55686a27424f7$var$unknownFieldsSymbol]) !== null && _a !== void 0 ? _a : [];
        },
        discardUnknownFields (message) {
            delete message[$42d55686a27424f7$var$unknownFieldsSymbol];
        },
        writeUnknownFields (message, writer) {
            const m = message;
            const c = m[$42d55686a27424f7$var$unknownFieldsSymbol];
            if (c) for (const f of c)writer.tag(f.no, f.wireType).raw(f.data);
        },
        onUnknownField (message, no, wireType, data) {
            const m = message;
            if (!Array.isArray(m[$42d55686a27424f7$var$unknownFieldsSymbol])) m[$42d55686a27424f7$var$unknownFieldsSymbol] = [];
            m[$42d55686a27424f7$var$unknownFieldsSymbol].push({
                no: no,
                wireType: wireType,
                data: data
            });
        },
        readMessage (message, reader, lengthOrEndTagFieldNo, options, delimitedMessageEncoding) {
            const type = message.getType();
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            const end = delimitedMessageEncoding ? reader.len : reader.pos + lengthOrEndTagFieldNo;
            let fieldNo, wireType;
            while(reader.pos < end){
                [fieldNo, wireType] = reader.tag();
                if (delimitedMessageEncoding === true && wireType == $5Q9Y2.WireType.EndGroup) break;
                const field = type.fields.find(fieldNo);
                if (!field) {
                    const data = reader.skip(wireType, fieldNo);
                    if (options.readUnknownFields) this.onUnknownField(message, fieldNo, wireType, data);
                    continue;
                }
                $42d55686a27424f7$var$readField(message, reader, field, wireType, options);
            }
            if (delimitedMessageEncoding && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
            (wireType != $5Q9Y2.WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) throw new Error(`invalid end group tag`);
        },
        readField: $42d55686a27424f7$var$readField,
        writeMessage (message, writer, options) {
            const type = message.getType();
            for (const field of type.fields.byNumber()){
                if (!(0, $7QM6s.isFieldSet)(field, message)) {
                    if (field.req) throw new Error(`cannot encode field ${type.typeName}.${field.name} to binary: required field not set`);
                    continue;
                }
                const value = field.oneof ? message[field.oneof.localName].value : message[field.localName];
                $42d55686a27424f7$var$writeField(field, value, writer, options);
            }
            if (options.writeUnknownFields) this.writeUnknownFields(message, writer);
            return writer;
        },
        writeField (field, value, writer, options) {
            // The behavior of our internal function has changed, it does no longer
            // accept `undefined` values for singular scalar and map.
            // For backwards-compatibility, we support the old form that is part of
            // the public API through the interface BinaryFormat.
            if (value === undefined) return undefined;
            $42d55686a27424f7$var$writeField(field, value, writer, options);
        }
    };
}
module.exports.makeBinaryFormat = $42d55686a27424f7$var$makeBinaryFormat;
function $42d55686a27424f7$var$readField(target, reader, field, wireType, options) {
    let { repeated: repeated, localName: localName } = field;
    if (field.oneof) {
        target = target[field.oneof.localName];
        if (target.case != localName) delete target.value;
        target.case = localName;
        localName = "value";
    }
    switch(field.kind){
        case "scalar":
        case "enum":
            const scalarType = field.kind == "enum" ? $7RwvC.ScalarType.INT32 : field.T;
            let read = $42d55686a27424f7$var$readScalar;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- acceptable since it's covered by tests
            if (field.kind == "scalar" && field.L > 0) read = $42d55686a27424f7$var$readScalarLTString;
            if (repeated) {
                let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                const isPacked = wireType == $5Q9Y2.WireType.LengthDelimited && scalarType != $7RwvC.ScalarType.STRING && scalarType != $7RwvC.ScalarType.BYTES;
                if (isPacked) {
                    let e = reader.uint32() + reader.pos;
                    while(reader.pos < e)arr.push(read(reader, scalarType));
                } else arr.push(read(reader, scalarType));
            } else target[localName] = read(reader, scalarType);
            break;
        case "message":
            const messageType = field.T;
            if (repeated) // safe to assume presence of array, oneof cannot contain repeated values
            target[localName].push($42d55686a27424f7$var$readMessageField(reader, new messageType(), options, field));
            else if ((0, $jzsFs.isMessage)(target[localName])) $42d55686a27424f7$var$readMessageField(reader, target[localName], options, field);
            else {
                target[localName] = $42d55686a27424f7$var$readMessageField(reader, new messageType(), options, field);
                if (messageType.fieldWrapper && !field.oneof && !field.repeated) target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
            }
            break;
        case "map":
            let [mapKey, mapVal] = $42d55686a27424f7$var$readMapEntry(field, reader, options);
            // safe to assume presence of map object, oneof cannot contain repeated values
            target[localName][mapKey] = mapVal;
            break;
    }
}
// Read a message, avoiding MessageType.fromBinary() to re-use the
// BinaryReadOptions and the IBinaryReader.
function $42d55686a27424f7$var$readMessageField(reader, message, options, field) {
    const format = message.getType().runtime.bin;
    const delimited = field === null || field === void 0 ? void 0 : field.delimited;
    format.readMessage(message, reader, delimited ? field.no : reader.uint32(), options, delimited);
    return message;
}
// Read a map field, expecting key field = 1, value field = 2
function $42d55686a27424f7$var$readMapEntry(field, reader, options) {
    const length = reader.uint32(), end = reader.pos + length;
    let key, val;
    while(reader.pos < end){
        const [fieldNo] = reader.tag();
        switch(fieldNo){
            case 1:
                key = $42d55686a27424f7$var$readScalar(reader, field.K);
                break;
            case 2:
                switch(field.V.kind){
                    case "scalar":
                        val = $42d55686a27424f7$var$readScalar(reader, field.V.T);
                        break;
                    case "enum":
                        val = reader.int32();
                        break;
                    case "message":
                        val = $42d55686a27424f7$var$readMessageField(reader, new field.V.T(), options, undefined);
                        break;
                }
                break;
        }
    }
    if (key === undefined) key = (0, $40ouL.scalarZeroValue)(field.K, $7RwvC.LongType.BIGINT);
    if (typeof key != "string" && typeof key != "number") key = key.toString();
    if (val === undefined) switch(field.V.kind){
        case "scalar":
            val = (0, $40ouL.scalarZeroValue)(field.V.T, $7RwvC.LongType.BIGINT);
            break;
        case "enum":
            val = field.V.T.values[0].no;
            break;
        case "message":
            val = new field.V.T();
            break;
    }
    return [
        key,
        val
    ];
}
// Read a scalar value, but return 64 bit integral types (int64, uint64,
// sint64, fixed64, sfixed64) as string instead of bigint.
function $42d55686a27424f7$var$readScalarLTString(reader, type) {
    const v = $42d55686a27424f7$var$readScalar(reader, type);
    return typeof v == "bigint" ? v.toString() : v;
}
// Does not use scalarTypeInfo() for better performance.
function $42d55686a27424f7$var$readScalar(reader, type) {
    switch(type){
        case $7RwvC.ScalarType.STRING:
            return reader.string();
        case $7RwvC.ScalarType.BOOL:
            return reader.bool();
        case $7RwvC.ScalarType.DOUBLE:
            return reader.double();
        case $7RwvC.ScalarType.FLOAT:
            return reader.float();
        case $7RwvC.ScalarType.INT32:
            return reader.int32();
        case $7RwvC.ScalarType.INT64:
            return reader.int64();
        case $7RwvC.ScalarType.UINT64:
            return reader.uint64();
        case $7RwvC.ScalarType.FIXED64:
            return reader.fixed64();
        case $7RwvC.ScalarType.BYTES:
            return reader.bytes();
        case $7RwvC.ScalarType.FIXED32:
            return reader.fixed32();
        case $7RwvC.ScalarType.SFIXED32:
            return reader.sfixed32();
        case $7RwvC.ScalarType.SFIXED64:
            return reader.sfixed64();
        case $7RwvC.ScalarType.SINT64:
            return reader.sint64();
        case $7RwvC.ScalarType.UINT32:
            return reader.uint32();
        case $7RwvC.ScalarType.SINT32:
            return reader.sint32();
    }
}
function $42d55686a27424f7$var$writeField(field, value, writer, options) {
    (0, $7UhPF.assert)(value !== undefined);
    const repeated = field.repeated;
    switch(field.kind){
        case "scalar":
        case "enum":
            let scalarType = field.kind == "enum" ? $7RwvC.ScalarType.INT32 : field.T;
            if (repeated) {
                (0, $7UhPF.assert)(Array.isArray(value));
                if (field.packed) $42d55686a27424f7$var$writePacked(writer, scalarType, field.no, value);
                else for (const item of value)$42d55686a27424f7$var$writeScalar(writer, scalarType, field.no, item);
            } else $42d55686a27424f7$var$writeScalar(writer, scalarType, field.no, value);
            break;
        case "message":
            if (repeated) {
                (0, $7UhPF.assert)(Array.isArray(value));
                for (const item of value)$42d55686a27424f7$var$writeMessageField(writer, options, field, item);
            } else $42d55686a27424f7$var$writeMessageField(writer, options, field, value);
            break;
        case "map":
            (0, $7UhPF.assert)(typeof value == "object" && value != null);
            for (const [key, val] of Object.entries(value))$42d55686a27424f7$var$writeMapEntry(writer, options, field, key, val);
            break;
    }
}
function $42d55686a27424f7$var$writeMapEntry(writer, options, field, key, value) {
    writer.tag(field.no, $5Q9Y2.WireType.LengthDelimited);
    writer.fork();
    // javascript only allows number or string for object properties
    // we convert from our representation to the protobuf type
    let keyValue = key;
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- we deliberately handle just the special cases for map keys
    switch(field.K){
        case $7RwvC.ScalarType.INT32:
        case $7RwvC.ScalarType.FIXED32:
        case $7RwvC.ScalarType.UINT32:
        case $7RwvC.ScalarType.SFIXED32:
        case $7RwvC.ScalarType.SINT32:
            keyValue = Number.parseInt(key);
            break;
        case $7RwvC.ScalarType.BOOL:
            (0, $7UhPF.assert)(key == "true" || key == "false");
            keyValue = key == "true";
            break;
    }
    // write key, expecting key field number = 1
    $42d55686a27424f7$var$writeScalar(writer, field.K, 1, keyValue);
    // write value, expecting value field number = 2
    switch(field.V.kind){
        case "scalar":
            $42d55686a27424f7$var$writeScalar(writer, field.V.T, 2, value);
            break;
        case "enum":
            $42d55686a27424f7$var$writeScalar(writer, $7RwvC.ScalarType.INT32, 2, value);
            break;
        case "message":
            (0, $7UhPF.assert)(value !== undefined);
            writer.tag(2, $5Q9Y2.WireType.LengthDelimited).bytes(value.toBinary(options));
            break;
    }
    writer.join();
}
module.exports.writeMapEntry = $42d55686a27424f7$var$writeMapEntry;
// Value must not be undefined
function $42d55686a27424f7$var$writeMessageField(writer, options, field, value) {
    const message = (0, $fH27Q.wrapField)(field.T, value);
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (field.delimited) writer.tag(field.no, $5Q9Y2.WireType.StartGroup).raw(message.toBinary(options)).tag(field.no, $5Q9Y2.WireType.EndGroup);
    else writer.tag(field.no, $5Q9Y2.WireType.LengthDelimited).bytes(message.toBinary(options));
}
function $42d55686a27424f7$var$writeScalar(writer, type, fieldNo, value) {
    (0, $7UhPF.assert)(value !== undefined);
    let [wireType, method] = $42d55686a27424f7$var$scalarTypeInfo(type);
    writer.tag(fieldNo, wireType)[method](value);
}
function $42d55686a27424f7$var$writePacked(writer, type, fieldNo, value) {
    if (!value.length) return;
    writer.tag(fieldNo, $5Q9Y2.WireType.LengthDelimited).fork();
    let [, method] = $42d55686a27424f7$var$scalarTypeInfo(type);
    for(let i = 0; i < value.length; i++)writer[method](value[i]);
    writer.join();
}
/**
 * Get information for writing a scalar value.
 *
 * Returns tuple:
 * [0]: appropriate WireType
 * [1]: name of the appropriate method of IBinaryWriter
 * [2]: whether the given value is a default value for proto3 semantics
 *
 * If argument `value` is omitted, [2] is always false.
 */ // TODO replace call-sites writeScalar() and writePacked(), then remove
function $42d55686a27424f7$var$scalarTypeInfo(type) {
    let wireType = $5Q9Y2.WireType.Varint;
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- INT32, UINT32, SINT32 are covered by the defaults
    switch(type){
        case $7RwvC.ScalarType.BYTES:
        case $7RwvC.ScalarType.STRING:
            wireType = $5Q9Y2.WireType.LengthDelimited;
            break;
        case $7RwvC.ScalarType.DOUBLE:
        case $7RwvC.ScalarType.FIXED64:
        case $7RwvC.ScalarType.SFIXED64:
            wireType = $5Q9Y2.WireType.Bit64;
            break;
        case $7RwvC.ScalarType.FIXED32:
        case $7RwvC.ScalarType.SFIXED32:
        case $7RwvC.ScalarType.FLOAT:
            wireType = $5Q9Y2.WireType.Bit32;
            break;
    }
    const method = $7RwvC.ScalarType[type].toLowerCase();
    return [
        wireType,
        method
    ];
}

});
parcelRegister("5Q9Y2", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.BinaryReader = module.exports.BinaryWriter = module.exports.WireType = void 0;

var $kSQTc = parcelRequire("kSQTc");

var $7UhPF = parcelRequire("7UhPF");

var $69KOh = parcelRequire("69KOh");
/* eslint-disable prefer-const,no-case-declarations,@typescript-eslint/restrict-plus-operands */ /**
 * Protobuf binary format wire types.
 *
 * A wire type provides just enough information to find the length of the
 * following value.
 *
 * See https://developers.google.com/protocol-buffers/docs/encoding#structure
 */ var $44098a6568692418$var$WireType;
(function(WireType) {
    /**
     * Used for int32, int64, uint32, uint64, sint32, sint64, bool, enum
     */ WireType[WireType["Varint"] = 0] = "Varint";
    /**
     * Used for fixed64, sfixed64, double.
     * Always 8 bytes with little-endian byte order.
     */ WireType[WireType["Bit64"] = 1] = "Bit64";
    /**
     * Used for string, bytes, embedded messages, packed repeated fields
     *
     * Only repeated numeric types (types which use the varint, 32-bit,
     * or 64-bit wire types) can be packed. In proto3, such fields are
     * packed by default.
     */ WireType[WireType["LengthDelimited"] = 2] = "LengthDelimited";
    /**
     * Start of a tag-delimited aggregate, such as a proto2 group, or a message
     * in editions with message_encoding = DELIMITED.
     */ WireType[WireType["StartGroup"] = 3] = "StartGroup";
    /**
     * End of a tag-delimited aggregate.
     */ WireType[WireType["EndGroup"] = 4] = "EndGroup";
    /**
     * Used for fixed32, sfixed32, float.
     * Always 4 bytes with little-endian byte order.
     */ WireType[WireType["Bit32"] = 5] = "Bit32";
})($44098a6568692418$var$WireType || (module.exports.WireType = $44098a6568692418$var$WireType = {}));
class $44098a6568692418$var$BinaryWriter {
    constructor(textEncoder){
        /**
         * Previous fork states.
         */ this.stack = [];
        this.textEncoder = textEncoder !== null && textEncoder !== void 0 ? textEncoder : new TextEncoder();
        this.chunks = [];
        this.buf = [];
    }
    /**
     * Return all bytes written and reset this writer.
     */ finish() {
        this.chunks.push(new Uint8Array(this.buf)); // flush the buffer
        let len = 0;
        for(let i = 0; i < this.chunks.length; i++)len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for(let i = 0; i < this.chunks.length; i++){
            bytes.set(this.chunks[i], offset);
            offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
    }
    /**
     * Start a new fork for length-delimited data like a message
     * or a packed repeated field.
     *
     * Must be joined later with `join()`.
     */ fork() {
        this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        });
        this.chunks = [];
        this.buf = [];
        return this;
    }
    /**
     * Join the last fork. Write its length and bytes, then
     * return to the previous state.
     */ join() {
        // get chunk of fork
        let chunk = this.finish();
        // restore previous state
        let prev = this.stack.pop();
        if (!prev) throw new Error("invalid state, fork stack empty");
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        // write length of chunk as varint
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    /**
     * Writes a tag (field number and wire type).
     *
     * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
     *
     * Generated code should compute the tag ahead of time and call `uint32()`.
     */ tag(fieldNo, type) {
        return this.uint32((fieldNo << 3 | type) >>> 0);
    }
    /**
     * Write a chunk of raw bytes.
     */ raw(chunk) {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf));
            this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
    }
    /**
     * Write a `uint32` value, an unsigned 32 bit varint.
     */ uint32(value) {
        (0, $7UhPF.assertUInt32)(value);
        // write value as varint 32, inlined for speed
        while(value > 0x7f){
            this.buf.push(value & 0x7f | 0x80);
            value = value >>> 7;
        }
        this.buf.push(value);
        return this;
    }
    /**
     * Write a `int32` value, a signed 32 bit varint.
     */ int32(value) {
        (0, $7UhPF.assertInt32)(value);
        (0, $kSQTc.varint32write)(value, this.buf);
        return this;
    }
    /**
     * Write a `bool` value, a variant.
     */ bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
    }
    /**
     * Write a `bytes` value, length-delimited arbitrary data.
     */ bytes(value) {
        this.uint32(value.byteLength); // write length of chunk as varint
        return this.raw(value);
    }
    /**
     * Write a `string` value, length-delimited data converted to UTF-8 text.
     */ string(value) {
        let chunk = this.textEncoder.encode(value);
        this.uint32(chunk.byteLength); // write length of chunk as varint
        return this.raw(chunk);
    }
    /**
     * Write a `float` value, 32-bit floating point number.
     */ float(value) {
        (0, $7UhPF.assertFloat32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `double` value, a 64-bit floating point number.
     */ double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
     */ fixed32(value) {
        (0, $7UhPF.assertUInt32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
     */ sfixed32(value) {
        (0, $7UhPF.assertInt32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
     */ sint32(value) {
        (0, $7UhPF.assertInt32)(value);
        // zigzag encode
        value = (value << 1 ^ value >> 31) >>> 0;
        (0, $kSQTc.varint32write)(value, this.buf);
        return this;
    }
    /**
     * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
     */ sfixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = $69KOh.protoInt64.enc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
     */ fixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = $69KOh.protoInt64.uEnc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `int64` value, a signed 64-bit varint.
     */ int64(value) {
        let tc = $69KOh.protoInt64.enc(value);
        (0, $kSQTc.varint64write)(tc.lo, tc.hi, this.buf);
        return this;
    }
    /**
     * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
     */ sint64(value) {
        let tc = $69KOh.protoInt64.enc(value), // zigzag encode
        sign = tc.hi >> 31, lo = tc.lo << 1 ^ sign, hi = (tc.hi << 1 | tc.lo >>> 31) ^ sign;
        (0, $kSQTc.varint64write)(lo, hi, this.buf);
        return this;
    }
    /**
     * Write a `uint64` value, an unsigned 64-bit varint.
     */ uint64(value) {
        let tc = $69KOh.protoInt64.uEnc(value);
        (0, $kSQTc.varint64write)(tc.lo, tc.hi, this.buf);
        return this;
    }
}
module.exports.BinaryWriter = $44098a6568692418$var$BinaryWriter;
class $44098a6568692418$var$BinaryReader {
    constructor(buf, textDecoder){
        this.varint64 = $kSQTc.varint64read; // dirty cast for `this`
        /**
         * Read a `uint32` field, an unsigned 32 bit varint.
         */ this.uint32 = $kSQTc.varint32read; // dirty cast for `this` and access to protected `buf`
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder();
    }
    /**
     * Reads a tag - field number and wire type.
     */ tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5) throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [
            fieldNo,
            wireType
        ];
    }
    /**
     * Skip one element and return the skipped data.
     *
     * When skipping StartGroup, provide the tags field number to check for
     * matching field number in the EndGroup tag.
     */ skip(wireType, fieldNo) {
        let start = this.pos;
        switch(wireType){
            case $44098a6568692418$var$WireType.Varint:
                while(this.buf[this.pos++] & 0x80);
                break;
            // eslint-disable-next-line
            // @ts-ignore TS7029: Fallthrough case in switch
            case $44098a6568692418$var$WireType.Bit64:
                this.pos += 4;
            // eslint-disable-next-line
            // @ts-ignore TS7029: Fallthrough case in switch
            case $44098a6568692418$var$WireType.Bit32:
                this.pos += 4;
                break;
            case $44098a6568692418$var$WireType.LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case $44098a6568692418$var$WireType.StartGroup:
                for(;;){
                    const [fn, wt] = this.tag();
                    if (wt === $44098a6568692418$var$WireType.EndGroup) {
                        if (fieldNo !== undefined && fn !== fieldNo) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(wt, fn);
                }
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    /**
     * Throws error if position in byte array is out of range.
     */ assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    /**
     * Read a `int32` field, a signed 32 bit varint.
     */ int32() {
        return this.uint32() | 0;
    }
    /**
     * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
     */ sint32() {
        let zze = this.uint32();
        // decode zigzag
        return zze >>> 1 ^ -(zze & 1);
    }
    /**
     * Read a `int64` field, a signed 64-bit varint.
     */ int64() {
        return $69KOh.protoInt64.dec(...this.varint64());
    }
    /**
     * Read a `uint64` field, an unsigned 64-bit varint.
     */ uint64() {
        return $69KOh.protoInt64.uDec(...this.varint64());
    }
    /**
     * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
     */ sint64() {
        let [lo, hi] = this.varint64();
        // decode zig zag
        let s = -(lo & 1);
        lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
        hi = hi >>> 1 ^ s;
        return $69KOh.protoInt64.dec(lo, hi);
    }
    /**
     * Read a `bool` field, a variant.
     */ bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
    }
    /**
     * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
     */ fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
     */ sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
     */ fixed64() {
        return $69KOh.protoInt64.uDec(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
     */ sfixed64() {
        return $69KOh.protoInt64.dec(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `float` field, 32-bit floating point number.
     */ float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `double` field, a 64-bit floating point number.
     */ double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    /**
     * Read a `bytes` field, length-delimited arbitrary data.
     */ bytes() {
        let len = this.uint32(), start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    /**
     * Read a `string` field, length-delimited data converted to UTF-8 text.
     */ string() {
        return this.textDecoder.decode(this.bytes());
    }
}
module.exports.BinaryReader = $44098a6568692418$var$BinaryReader;

});


parcelRegister("hF4tN", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.makeUtilCommon = void 0;

var $1nE68 = parcelRequire("1nE68");

var $40ouL = parcelRequire("40ouL");

var $7RwvC = parcelRequire("7RwvC");

var $jzsFs = parcelRequire("jzsFs");
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-argument,no-case-declarations */ function $cdb9bd8e8be33c8d$var$makeUtilCommon() {
    return {
        setEnumType: $1nE68.setEnumType,
        initPartial (source, target) {
            if (source === undefined) return;
            const type = target.getType();
            for (const member of type.fields.byMember()){
                const localName = member.localName, t = target, s = source;
                if (s[localName] == null) continue;
                switch(member.kind){
                    case "oneof":
                        const sk = s[localName].case;
                        if (sk === undefined) continue;
                        const sourceField = member.findField(sk);
                        let val = s[localName].value;
                        if (sourceField && sourceField.kind == "message" && !(0, $jzsFs.isMessage)(val, sourceField.T)) val = new sourceField.T(val);
                        else if (sourceField && sourceField.kind === "scalar" && sourceField.T === $7RwvC.ScalarType.BYTES) val = $cdb9bd8e8be33c8d$var$toU8Arr(val);
                        t[localName] = {
                            case: sk,
                            value: val
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let copy = s[localName];
                        if (member.T === $7RwvC.ScalarType.BYTES) copy = member.repeated ? copy.map($cdb9bd8e8be33c8d$var$toU8Arr) : $cdb9bd8e8be33c8d$var$toU8Arr(copy);
                        t[localName] = copy;
                        break;
                    case "map":
                        switch(member.V.kind){
                            case "scalar":
                            case "enum":
                                if (member.V.T === $7RwvC.ScalarType.BYTES) for (const [k, v] of Object.entries(s[localName]))t[localName][k] = $cdb9bd8e8be33c8d$var$toU8Arr(v);
                                else Object.assign(t[localName], s[localName]);
                                break;
                            case "message":
                                const messageType = member.V.T;
                                for (const k of Object.keys(s[localName])){
                                    let val = s[localName][k];
                                    if (!messageType.fieldWrapper) // We only take partial input for messages that are not a wrapper type.
                                    // For those messages, we recursively normalize the partial input.
                                    val = new messageType(val);
                                    t[localName][k] = val;
                                }
                                break;
                        }
                        break;
                    case "message":
                        const mt = member.T;
                        if (member.repeated) t[localName] = s[localName].map((val)=>(0, $jzsFs.isMessage)(val, mt) ? val : new mt(val));
                        else {
                            const val = s[localName];
                            if (mt.fieldWrapper) {
                                if (// We can't use BytesValue.typeName as that will create a circular import
                                mt.typeName === "google.protobuf.BytesValue") t[localName] = $cdb9bd8e8be33c8d$var$toU8Arr(val);
                                else t[localName] = val;
                            } else t[localName] = (0, $jzsFs.isMessage)(val, mt) ? val : new mt(val);
                        }
                        break;
                }
            }
        },
        // TODO use isFieldSet() here to support future field presence
        equals (type, a, b) {
            if (a === b) return true;
            if (!a || !b) return false;
            return type.fields.byMember().every((m)=>{
                const va = a[m.localName];
                const vb = b[m.localName];
                if (m.repeated) {
                    if (va.length !== vb.length) return false;
                    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- repeated fields are never "map"
                    switch(m.kind){
                        case "message":
                            return va.every((a, i)=>m.T.equals(a, vb[i]));
                        case "scalar":
                            return va.every((a, i)=>(0, $40ouL.scalarEquals)(m.T, a, vb[i]));
                        case "enum":
                            return va.every((a, i)=>(0, $40ouL.scalarEquals)($7RwvC.ScalarType.INT32, a, vb[i]));
                    }
                    throw new Error(`repeated cannot contain ${m.kind}`);
                }
                switch(m.kind){
                    case "message":
                        return m.T.equals(va, vb);
                    case "enum":
                        return (0, $40ouL.scalarEquals)($7RwvC.ScalarType.INT32, va, vb);
                    case "scalar":
                        return (0, $40ouL.scalarEquals)(m.T, va, vb);
                    case "oneof":
                        if (va.case !== vb.case) return false;
                        const s = m.findField(va.case);
                        if (s === undefined) return true;
                        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- oneof fields are never "map"
                        switch(s.kind){
                            case "message":
                                return s.T.equals(va.value, vb.value);
                            case "enum":
                                return (0, $40ouL.scalarEquals)($7RwvC.ScalarType.INT32, va.value, vb.value);
                            case "scalar":
                                return (0, $40ouL.scalarEquals)(s.T, va.value, vb.value);
                        }
                        throw new Error(`oneof cannot contain ${s.kind}`);
                    case "map":
                        const keys = Object.keys(va).concat(Object.keys(vb));
                        switch(m.V.kind){
                            case "message":
                                const messageType = m.V.T;
                                return keys.every((k)=>messageType.equals(va[k], vb[k]));
                            case "enum":
                                return keys.every((k)=>(0, $40ouL.scalarEquals)($7RwvC.ScalarType.INT32, va[k], vb[k]));
                            case "scalar":
                                const scalarType = m.V.T;
                                return keys.every((k)=>(0, $40ouL.scalarEquals)(scalarType, va[k], vb[k]));
                        }
                        break;
                }
            });
        },
        // TODO use isFieldSet() here to support future field presence
        clone (message) {
            const type = message.getType(), target = new type(), any = target;
            for (const member of type.fields.byMember()){
                const source = message[member.localName];
                let copy;
                if (member.repeated) copy = source.map($cdb9bd8e8be33c8d$var$cloneSingularField);
                else if (member.kind == "map") {
                    copy = any[member.localName];
                    for (const [key, v] of Object.entries(source))copy[key] = $cdb9bd8e8be33c8d$var$cloneSingularField(v);
                } else if (member.kind == "oneof") {
                    const f = member.findField(source.case);
                    copy = f ? {
                        case: source.case,
                        value: $cdb9bd8e8be33c8d$var$cloneSingularField(source.value)
                    } : {
                        case: undefined
                    };
                } else copy = $cdb9bd8e8be33c8d$var$cloneSingularField(source);
                any[member.localName] = copy;
            }
            for (const uf of type.runtime.bin.listUnknownFields(message))type.runtime.bin.onUnknownField(any, uf.no, uf.wireType, uf.data);
            return target;
        }
    };
}
module.exports.makeUtilCommon = $cdb9bd8e8be33c8d$var$makeUtilCommon;
// clone a single field value - i.e. the element type of repeated fields, the value type of maps
function $cdb9bd8e8be33c8d$var$cloneSingularField(value) {
    if (value === undefined) return value;
    if ((0, $jzsFs.isMessage)(value)) return value.clone();
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}
// converts any ArrayLike<number> to Uint8Array if necessary.
function $cdb9bd8e8be33c8d$var$toU8Arr(input) {
    return input instanceof Uint8Array ? input : new Uint8Array(input);
}

});


parcelRegister("gyUZo", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.InternalFieldList = void 0;
class $c0ec072b1645735a$var$InternalFieldList {
    constructor(fields, normalizer){
        this._fields = fields;
        this._normalizer = normalizer;
    }
    findJsonName(jsonName) {
        if (!this.jsonNames) {
            const t = {};
            for (const f of this.list())t[f.jsonName] = t[f.name] = f;
            this.jsonNames = t;
        }
        return this.jsonNames[jsonName];
    }
    find(fieldNo) {
        if (!this.numbers) {
            const t = {};
            for (const f of this.list())t[f.no] = f;
            this.numbers = t;
        }
        return this.numbers[fieldNo];
    }
    list() {
        if (!this.all) this.all = this._normalizer(this._fields);
        return this.all;
    }
    byNumber() {
        if (!this.numbersAsc) this.numbersAsc = this.list().concat().sort((a, b)=>a.no - b.no);
        return this.numbersAsc;
    }
    byMember() {
        if (!this.members) {
            this.members = [];
            const a = this.members;
            let o;
            for (const f of this.list()){
                if (f.oneof) {
                    if (f.oneof !== o) {
                        o = f.oneof;
                        a.push(o);
                    }
                } else a.push(f);
            }
        }
        return this.members;
    }
}
module.exports.InternalFieldList = $c0ec072b1645735a$var$InternalFieldList;

});

parcelRegister("8bRRT", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.normalizeFieldInfos = void 0;

var $ab6q3 = parcelRequire("ab6q3");

var $l1i7B = parcelRequire("l1i7B");

var $7RwvC = parcelRequire("7RwvC");
/**
 * Convert a collection of field info to an array of normalized FieldInfo.
 *
 * The argument `packedByDefault` specifies whether fields that do not specify
 * `packed` should be packed (proto3) or unpacked (proto2).
 */ function $5f6922e7c4b57f4e$var$normalizeFieldInfos(fieldInfos, packedByDefault) {
    var _a, _b, _c, _d, _e, _f;
    const r = [];
    let o;
    for (const field of typeof fieldInfos == "function" ? fieldInfos() : fieldInfos){
        const f = field;
        f.localName = (0, $l1i7B.localFieldName)(field.name, field.oneof !== undefined);
        f.jsonName = (_a = field.jsonName) !== null && _a !== void 0 ? _a : (0, $l1i7B.fieldJsonName)(field.name);
        f.repeated = (_b = field.repeated) !== null && _b !== void 0 ? _b : false;
        if (field.kind == "scalar") f.L = (_c = field.L) !== null && _c !== void 0 ? _c : $7RwvC.LongType.BIGINT;
        f.delimited = (_d = field.delimited) !== null && _d !== void 0 ? _d : false;
        f.req = (_e = field.req) !== null && _e !== void 0 ? _e : false;
        f.opt = (_f = field.opt) !== null && _f !== void 0 ? _f : false;
        if (field.packed === undefined) {
            if (packedByDefault) f.packed = field.kind == "enum" || field.kind == "scalar" && field.T != $7RwvC.ScalarType.BYTES && field.T != $7RwvC.ScalarType.STRING;
            else f.packed = false;
        }
        // We do not surface options at this time
        // f.options = field.options ?? emptyReadonlyObject;
        if (field.oneof !== undefined) {
            const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
            if (!o || o.name != ooname) o = new $ab6q3.InternalOneofInfo(ooname);
            f.oneof = o;
            o.addField(f);
        }
        r.push(f);
    }
    return r;
}
module.exports.normalizeFieldInfos = $5f6922e7c4b57f4e$var$normalizeFieldInfos;

});
parcelRegister("ab6q3", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.InternalOneofInfo = void 0;

var $l1i7B = parcelRequire("l1i7B");

var $7UhPF = parcelRequire("7UhPF");
class $768fe92e9dde78b9$var$InternalOneofInfo {
    constructor(name){
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.req = false;
        this.default = undefined;
        this.fields = [];
        this.name = name;
        this.localName = (0, $l1i7B.localOneofName)(name);
    }
    addField(field) {
        (0, $7UhPF.assert)(field.oneof === this, `field ${field.name} not one of ${this.name}`);
        this.fields.push(field);
    }
    findField(localName) {
        if (!this._lookup) {
            this._lookup = Object.create(null);
            for(let i = 0; i < this.fields.length; i++)this._lookup[this.fields[i].localName] = this.fields[i];
        }
        return this._lookup[localName];
    }
}
module.exports.InternalOneofInfo = $768fe92e9dde78b9$var$InternalOneofInfo;

});
parcelRegister("l1i7B", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.safeIdentifier = module.exports.safeObjectProperty = module.exports.findEnumSharedPrefix = module.exports.fieldJsonName = module.exports.localOneofName = module.exports.localFieldName = module.exports.localName = void 0;
/**
 * Returns the name of a protobuf element in generated code.
 *
 * Field names - including oneofs - are converted to lowerCamelCase. For
 * messages, enumerations and services, the package name is stripped from
 * the type name. For nested messages and enumerations, the names are joined
 * with an underscore. For methods, the first character is made lowercase.
 */ function $f4d7bf90e26ee575$var$localName(desc) {
    switch(desc.kind){
        case "field":
            return $f4d7bf90e26ee575$var$localFieldName(desc.name, desc.oneof !== undefined);
        case "oneof":
            return $f4d7bf90e26ee575$var$localOneofName(desc.name);
        case "enum":
        case "message":
        case "service":
        case "extension":
            {
                const pkg = desc.file.proto.package;
                const offset = pkg === undefined ? 0 : pkg.length + 1;
                const name = desc.typeName.substring(offset).replace(/\./g, "_");
                // For services, we only care about safe identifiers, not safe object properties,
                // but we have shipped v1 with a bug that respected object properties, and we
                // do not want to introduce a breaking change, so we continue to escape for
                // safe object properties.
                // See https://github.com/bufbuild/protobuf-es/pull/391
                return (0, module.exports.safeObjectProperty)((0, module.exports.safeIdentifier)(name));
            }
        case "enum_value":
            {
                let name = desc.name;
                const sharedPrefix = desc.parent.sharedPrefix;
                if (sharedPrefix !== undefined) name = name.substring(sharedPrefix.length);
                return (0, module.exports.safeObjectProperty)(name);
            }
        case "rpc":
            {
                let name = desc.name;
                if (name.length == 0) return name;
                name = name[0].toLowerCase() + name.substring(1);
                return (0, module.exports.safeObjectProperty)(name);
            }
    }
}
module.exports.localName = $f4d7bf90e26ee575$var$localName;
/**
 * Returns the name of a field in generated code.
 */ function $f4d7bf90e26ee575$var$localFieldName(protoName, inOneof) {
    const name = $f4d7bf90e26ee575$var$protoCamelCase(protoName);
    if (inOneof) // oneof member names are not properties, but values of the `case` property.
    return name;
    return (0, module.exports.safeObjectProperty)($f4d7bf90e26ee575$var$safeMessageProperty(name));
}
module.exports.localFieldName = $f4d7bf90e26ee575$var$localFieldName;
/**
 * Returns the name of a oneof group in generated code.
 */ function $f4d7bf90e26ee575$var$localOneofName(protoName) {
    return $f4d7bf90e26ee575$var$localFieldName(protoName, false);
}
module.exports.localOneofName = $f4d7bf90e26ee575$var$localOneofName;
/**
 * Returns the JSON name for a protobuf field, exactly like protoc does.
 */ module.exports.fieldJsonName = $f4d7bf90e26ee575$var$protoCamelCase;
/**
 * Finds a prefix shared by enum values, for example `MY_ENUM_` for
 * `enum MyEnum {MY_ENUM_A=0; MY_ENUM_B=1;}`.
 */ function $f4d7bf90e26ee575$var$findEnumSharedPrefix(enumName, valueNames) {
    const prefix = $f4d7bf90e26ee575$var$camelToSnakeCase(enumName) + "_";
    for (const name of valueNames){
        if (!name.toLowerCase().startsWith(prefix)) return undefined;
        const shortName = name.substring(prefix.length);
        if (shortName.length == 0) return undefined;
        if (/^\d/.test(shortName)) // identifiers must not start with numbers
        return undefined;
    }
    return prefix;
}
module.exports.findEnumSharedPrefix = $f4d7bf90e26ee575$var$findEnumSharedPrefix;
/**
 * Converts lowerCamelCase or UpperCamelCase into lower_snake_case.
 * This is used to find shared prefixes in an enum.
 */ function $f4d7bf90e26ee575$var$camelToSnakeCase(camel) {
    return (camel.substring(0, 1) + camel.substring(1).replace(/[A-Z]/g, (c)=>"_" + c)).toLowerCase();
}
/**
 * Converts snake_case to protoCamelCase according to the convention
 * used by protoc to convert a field name to a JSON name.
 */ function $f4d7bf90e26ee575$var$protoCamelCase(snakeCase) {
    let capNext = false;
    const b = [];
    for(let i = 0; i < snakeCase.length; i++){
        let c = snakeCase.charAt(i);
        switch(c){
            case "_":
                capNext = true;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                b.push(c);
                capNext = false;
                break;
            default:
                if (capNext) {
                    capNext = false;
                    c = c.toUpperCase();
                }
                b.push(c);
                break;
        }
    }
    return b.join("");
}
/**
 * Names that cannot be used for identifiers, such as class names,
 * but _can_ be used for object properties.
 */ const $f4d7bf90e26ee575$var$reservedIdentifiers = new Set([
    // ECMAScript 2015 keywords
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    // ECMAScript 2015 future reserved keywords
    "enum",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    // Class name cannot be 'Object' when targeting ES5 with module CommonJS
    "Object",
    // TypeScript keywords that cannot be used for types (as opposed to variables)
    "bigint",
    "number",
    "boolean",
    "string",
    "object",
    // Identifiers reserved for the runtime, so we can generate legible code
    "globalThis",
    "Uint8Array",
    "Partial"
]);
/**
 * Names that cannot be used for object properties because they are reserved
 * by built-in JavaScript properties.
 */ const $f4d7bf90e26ee575$var$reservedObjectProperties = new Set([
    // names reserved by JavaScript
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]);
/**
 * Names that cannot be used for object properties because they are reserved
 * by the runtime.
 */ const $f4d7bf90e26ee575$var$reservedMessageProperties = new Set([
    // names reserved by the runtime
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    // names reserved by the runtime for the future
    "toObject"
]);
const $f4d7bf90e26ee575$var$fallback = (name)=>`${name}$`;
/**
 * Will wrap names that are Object prototype properties or names reserved
 * for `Message`s.
 */ const $f4d7bf90e26ee575$var$safeMessageProperty = (name)=>{
    if ($f4d7bf90e26ee575$var$reservedMessageProperties.has(name)) return $f4d7bf90e26ee575$var$fallback(name);
    return name;
};
/**
 * Names that cannot be used for object properties because they are reserved
 * by built-in JavaScript properties.
 */ const $f4d7bf90e26ee575$var$safeObjectProperty = (name)=>{
    if ($f4d7bf90e26ee575$var$reservedObjectProperties.has(name)) return $f4d7bf90e26ee575$var$fallback(name);
    return name;
};
module.exports.safeObjectProperty = $f4d7bf90e26ee575$var$safeObjectProperty;
/**
 * Names that can be used for identifiers or class properties
 */ const $f4d7bf90e26ee575$var$safeIdentifier = (name)=>{
    if ($f4d7bf90e26ee575$var$reservedIdentifiers.has(name)) return $f4d7bf90e26ee575$var$fallback(name);
    return name;
};
module.exports.safeIdentifier = $f4d7bf90e26ee575$var$safeIdentifier;

});





parcelRegister("4GeSW", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Timestamp = void 0;

var $cI13w = parcelRequire("cI13w");

var $69KOh = parcelRequire("69KOh");

var $lfD5g = parcelRequire("lfD5g");
/**
 * A Timestamp represents a point in time independent of any time zone or local
 * calendar, encoded as a count of seconds and fractions of seconds at
 * nanosecond resolution. The count is relative to an epoch at UTC midnight on
 * January 1, 1970, in the proleptic Gregorian calendar which extends the
 * Gregorian calendar backwards to year one.
 *
 * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
 * second table is needed for interpretation, using a [24-hour linear
 * smear](https://developers.google.com/time/smear).
 *
 * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
 * restricting to that range, we ensure that we can convert to and from [RFC
 * 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
 *
 * # Examples
 *
 * Example 1: Compute Timestamp from POSIX `time()`.
 *
 *     Timestamp timestamp;
 *     timestamp.set_seconds(time(NULL));
 *     timestamp.set_nanos(0);
 *
 * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
 *
 *     struct timeval tv;
 *     gettimeofday(&tv, NULL);
 *
 *     Timestamp timestamp;
 *     timestamp.set_seconds(tv.tv_sec);
 *     timestamp.set_nanos(tv.tv_usec * 1000);
 *
 * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
 *
 *     FILETIME ft;
 *     GetSystemTimeAsFileTime(&ft);
 *     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
 *
 *     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
 *     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
 *     Timestamp timestamp;
 *     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
 *     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
 *
 * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
 *
 *     long millis = System.currentTimeMillis();
 *
 *     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
 *         .setNanos((int) ((millis % 1000) * 1000000)).build();
 *
 * Example 5: Compute Timestamp from Java `Instant.now()`.
 *
 *     Instant now = Instant.now();
 *
 *     Timestamp timestamp =
 *         Timestamp.newBuilder().setSeconds(now.getEpochSecond())
 *             .setNanos(now.getNano()).build();
 *
 * Example 6: Compute Timestamp from current time in Python.
 *
 *     timestamp = Timestamp()
 *     timestamp.GetCurrentTime()
 *
 * # JSON Mapping
 *
 * In JSON format, the Timestamp type is encoded as a string in the
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the
 * format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"
 * where {year} is always expressed using four digits while {month}, {day},
 * {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional
 * seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),
 * are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone
 * is required. A proto3 JSON serializer should always use UTC (as indicated by
 * "Z") when printing the Timestamp type and a proto3 JSON parser should be
 * able to accept both UTC and other timezones (as indicated by an offset).
 *
 * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past
 * 01:30 UTC on January 15, 2017.
 *
 * In JavaScript, one can convert a Date object to this format using the
 * standard
 * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
 * method. In Python, a standard `datetime.datetime` object can be converted
 * to this format using
 * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with
 * the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use
 * the Joda Time's [`ISODateTimeFormat.dateTime()`](
 * http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()
 * ) to obtain a formatter capable of generating timestamps in this format.
 *
 *
 * @generated from message google.protobuf.Timestamp
 */ class $3686a18c4c4468fb$var$Timestamp extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Represents seconds of UTC time since Unix epoch
         * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         * 9999-12-31T23:59:59Z inclusive.
         *
         * @generated from field: int64 seconds = 1;
         */ this.seconds = $69KOh.protoInt64.zero;
        /**
         * Non-negative fractions of a second at nanosecond resolution. Negative
         * second values with fractions must still have non-negative nanos values
         * that count forward in time. Must be from 0 to 999,999,999
         * inclusive.
         *
         * @generated from field: int32 nanos = 2;
         */ this.nanos = 0;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    fromJson(json, options) {
        if (typeof json !== "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${$lfD5g.proto3.json.debug(json)}`);
        const matches = json.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!matches) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
        const ms = Date.parse(matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + ":" + matches[6] + (matches[8] ? matches[8] : "Z"));
        if (Number.isNaN(ms)) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
        if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z")) throw new Error(`cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
        this.seconds = $69KOh.protoInt64.parse(ms / 1000);
        this.nanos = 0;
        if (matches[7]) this.nanos = parseInt("1" + matches[7] + "0".repeat(9 - matches[7].length)) - 1000000000;
        return this;
    }
    toJson(options) {
        const ms = Number(this.seconds) * 1000;
        if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z")) throw new Error(`cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
        if (this.nanos < 0) throw new Error(`cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative`);
        let z = "Z";
        if (this.nanos > 0) {
            const nanosStr = (this.nanos + 1000000000).toString().substring(1);
            if (nanosStr.substring(3) === "000000") z = "." + nanosStr.substring(0, 3) + "Z";
            else if (nanosStr.substring(6) === "000") z = "." + nanosStr.substring(0, 6) + "Z";
            else z = "." + nanosStr + "Z";
        }
        return new Date(ms).toISOString().replace(".000Z", z);
    }
    toDate() {
        return new Date(Number(this.seconds) * 1000 + Math.ceil(this.nanos / 1000000));
    }
    static now() {
        return $3686a18c4c4468fb$var$Timestamp.fromDate(new Date());
    }
    static fromDate(date) {
        const ms = date.getTime();
        return new $3686a18c4c4468fb$var$Timestamp({
            seconds: $69KOh.protoInt64.parse(Math.floor(ms / 1000)),
            nanos: ms % 1000 * 1000000
        });
    }
    static fromBinary(bytes, options) {
        return new $3686a18c4c4468fb$var$Timestamp().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $3686a18c4c4468fb$var$Timestamp().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $3686a18c4c4468fb$var$Timestamp().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($3686a18c4c4468fb$var$Timestamp, a, b);
    }
}
module.exports.Timestamp = $3686a18c4c4468fb$var$Timestamp;
$3686a18c4c4468fb$var$Timestamp.runtime = $lfD5g.proto3;
$3686a18c4c4468fb$var$Timestamp.typeName = "google.protobuf.Timestamp";
$3686a18c4c4468fb$var$Timestamp.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "seconds",
            kind: "scalar",
            T: 3 /* ScalarType.INT64 */ 
        },
        {
            no: 2,
            name: "nanos",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ 
        }
    ]);

});
parcelRegister("lfD5g", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.proto3 = void 0;

var $5Jf2T = parcelRequire("5Jf2T");

var $gyUZo = parcelRequire("gyUZo");

var $40ouL = parcelRequire("40ouL");

var $8bRRT = parcelRequire("8bRRT");
/**
 * Provides functionality for messages defined with the proto3 syntax.
 */ module.exports.proto3 = (0, $5Jf2T.makeProtoRuntime)("proto3", (fields)=>{
    return new $gyUZo.InternalFieldList(fields, (source)=>(0, $8bRRT.normalizeFieldInfos)(source, true));
}, // TODO merge with proto2 and initExtensionField, also see initPartial, equals, clone
(target)=>{
    for (const member of target.getType().fields.byMember()){
        if (member.opt) continue;
        const name = member.localName, t = target;
        if (member.repeated) {
            t[name] = [];
            continue;
        }
        switch(member.kind){
            case "oneof":
                t[name] = {
                    case: undefined
                };
                break;
            case "enum":
                t[name] = 0;
                break;
            case "map":
                t[name] = {};
                break;
            case "scalar":
                t[name] = (0, $40ouL.scalarZeroValue)(member.T, member.L);
                break;
            case "message":
                break;
        }
    }
});

});


parcelRegister("bzaRE", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Duration = void 0;

var $cI13w = parcelRequire("cI13w");

var $69KOh = parcelRequire("69KOh");

var $lfD5g = parcelRequire("lfD5g");
/**
 * A Duration represents a signed, fixed-length span of time represented
 * as a count of seconds and fractions of seconds at nanosecond
 * resolution. It is independent of any calendar and concepts like "day"
 * or "month". It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted
 * from a Timestamp. Range is approximately +-10,000 years.
 *
 * # Examples
 *
 * Example 1: Compute Duration from two Timestamps in pseudo code.
 *
 *     Timestamp start = ...;
 *     Timestamp end = ...;
 *     Duration duration = ...;
 *
 *     duration.seconds = end.seconds - start.seconds;
 *     duration.nanos = end.nanos - start.nanos;
 *
 *     if (duration.seconds < 0 && duration.nanos > 0) {
 *       duration.seconds += 1;
 *       duration.nanos -= 1000000000;
 *     } else if (duration.seconds > 0 && duration.nanos < 0) {
 *       duration.seconds -= 1;
 *       duration.nanos += 1000000000;
 *     }
 *
 * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 *
 *     Timestamp start = ...;
 *     Duration duration = ...;
 *     Timestamp end = ...;
 *
 *     end.seconds = start.seconds + duration.seconds;
 *     end.nanos = start.nanos + duration.nanos;
 *
 *     if (end.nanos < 0) {
 *       end.seconds -= 1;
 *       end.nanos += 1000000000;
 *     } else if (end.nanos >= 1000000000) {
 *       end.seconds += 1;
 *       end.nanos -= 1000000000;
 *     }
 *
 * Example 3: Compute Duration from datetime.timedelta in Python.
 *
 *     td = datetime.timedelta(days=3, minutes=10)
 *     duration = Duration()
 *     duration.FromTimedelta(td)
 *
 * # JSON Mapping
 *
 * In JSON format, the Duration type is encoded as a string rather than an
 * object, where the string ends in the suffix "s" (indicating seconds) and
 * is preceded by the number of seconds, with nanoseconds expressed as
 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 * be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 * microsecond should be expressed in JSON format as "3.000001s".
 *
 *
 * @generated from message google.protobuf.Duration
 */ class $86bb64057429de60$var$Duration extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Signed seconds of the span of time. Must be from -315,576,000,000
         * to +315,576,000,000 inclusive. Note: these bounds are computed from:
         * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
         *
         * @generated from field: int64 seconds = 1;
         */ this.seconds = $69KOh.protoInt64.zero;
        /**
         * Signed fractions of a second at nanosecond resolution of the span
         * of time. Durations less than one second are represented with a 0
         * `seconds` field and a positive or negative `nanos` field. For durations
         * of one second or more, a non-zero value for the `nanos` field must be
         * of the same sign as the `seconds` field. Must be from -999,999,999
         * to +999,999,999 inclusive.
         *
         * @generated from field: int32 nanos = 2;
         */ this.nanos = 0;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    fromJson(json, options) {
        if (typeof json !== "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${$lfD5g.proto3.json.debug(json)}`);
        const match = json.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (match === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${$lfD5g.proto3.json.debug(json)}`);
        const longSeconds = Number(match[1]);
        if (longSeconds > 315576000000 || longSeconds < -315576000000) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${$lfD5g.proto3.json.debug(json)}`);
        this.seconds = $69KOh.protoInt64.parse(longSeconds);
        if (typeof match[2] == "string") {
            const nanosStr = match[2] + "0".repeat(9 - match[2].length);
            this.nanos = parseInt(nanosStr);
            if (longSeconds < 0 || Object.is(longSeconds, -0)) this.nanos = -this.nanos;
        }
        return this;
    }
    toJson(options) {
        if (Number(this.seconds) > 315576000000 || Number(this.seconds) < -315576000000) throw new Error(`cannot encode google.protobuf.Duration to JSON: value out of range`);
        let text = this.seconds.toString();
        if (this.nanos !== 0) {
            let nanosStr = Math.abs(this.nanos).toString();
            nanosStr = "0".repeat(9 - nanosStr.length) + nanosStr;
            if (nanosStr.substring(3) === "000000") nanosStr = nanosStr.substring(0, 3);
            else if (nanosStr.substring(6) === "000") nanosStr = nanosStr.substring(0, 6);
            text += "." + nanosStr;
            if (this.nanos < 0 && Number(this.seconds) == 0) text = "-" + text;
        }
        return text + "s";
    }
    static fromBinary(bytes, options) {
        return new $86bb64057429de60$var$Duration().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $86bb64057429de60$var$Duration().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $86bb64057429de60$var$Duration().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($86bb64057429de60$var$Duration, a, b);
    }
}
module.exports.Duration = $86bb64057429de60$var$Duration;
$86bb64057429de60$var$Duration.runtime = $lfD5g.proto3;
$86bb64057429de60$var$Duration.typeName = "google.protobuf.Duration";
$86bb64057429de60$var$Duration.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "seconds",
            kind: "scalar",
            T: 3 /* ScalarType.INT64 */ 
        },
        {
            no: 2,
            name: "nanos",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ 
        }
    ]);

});

parcelRegister("3FFyr", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Any = void 0;

var $cI13w = parcelRequire("cI13w");

var $lfD5g = parcelRequire("lfD5g");
/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *     // or ...
 *     if (any.isSameTypeAs(Foo.getDefaultInstance())) {
 *       foo = any.unpack(Foo.getDefaultInstance());
 *     }
 *
 *  Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 *  Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 *
 *
 * @generated from message google.protobuf.Any
 */ class $2ac56f4e02060a4b$var$Any extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * A URL/resource name that uniquely identifies the type of the serialized
         * protocol buffer message. This string must contain at least
         * one "/" character. The last segment of the URL's path must represent
         * the fully qualified name of the type (as in
         * `path/google.protobuf.Duration`). The name should be in a canonical form
         * (e.g., leading "." is not accepted).
         *
         * In practice, teams usually precompile into the binary all types that they
         * expect it to use in the context of Any. However, for URLs which use the
         * scheme `http`, `https`, or no scheme, one can optionally set up a type
         * server that maps type URLs to message definitions as follows:
         *
         * * If no scheme is provided, `https` is assumed.
         * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
         *   value in binary format, or produce an error.
         * * Applications are allowed to cache lookup results based on the
         *   URL, or have them precompiled into a binary to avoid any
         *   lookup. Therefore, binary compatibility needs to be preserved
         *   on changes to types. (Use versioned type names to manage
         *   breaking changes.)
         *
         * Note: this functionality is not currently available in the official
         * protobuf release, and it is not used for type URLs beginning with
         * type.googleapis.com. As of May 2023, there are no widely used type server
         * implementations and no plans to implement one.
         *
         * Schemes other than `http`, `https` (or the empty scheme) might be
         * used with implementation specific semantics.
         *
         *
         * @generated from field: string type_url = 1;
         */ this.typeUrl = "";
        /**
         * Must be a valid serialized protocol buffer of the above specified type.
         *
         * @generated from field: bytes value = 2;
         */ this.value = new Uint8Array(0);
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        var _a;
        if (this.typeUrl === "") return {};
        const typeName = this.typeUrlToName(this.typeUrl);
        const messageType = (_a = options === null || options === void 0 ? void 0 : options.typeRegistry) === null || _a === void 0 ? void 0 : _a.findMessage(typeName);
        if (!messageType) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        const message = messageType.fromBinary(this.value);
        let json = message.toJson(options);
        if (typeName.startsWith("google.protobuf.") || json === null || Array.isArray(json) || typeof json !== "object") json = {
            value: json
        };
        json["@type"] = this.typeUrl;
        return json;
    }
    fromJson(json, options) {
        var _a;
        if (json === null || Array.isArray(json) || typeof json != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${json === null ? "null" : Array.isArray(json) ? "array" : typeof json}`);
        if (Object.keys(json).length == 0) return this;
        const typeUrl = json["@type"];
        if (typeof typeUrl != "string" || typeUrl == "") throw new Error(`cannot decode message google.protobuf.Any from JSON: "@type" is empty`);
        const typeName = this.typeUrlToName(typeUrl), messageType = (_a = options === null || options === void 0 ? void 0 : options.typeRegistry) === null || _a === void 0 ? void 0 : _a.findMessage(typeName);
        if (!messageType) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${typeUrl} is not in the type registry`);
        let message;
        if (typeName.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(json, "value")) message = messageType.fromJson(json["value"], options);
        else {
            const copy = Object.assign({}, json);
            delete copy["@type"];
            message = messageType.fromJson(copy, options);
        }
        this.packFrom(message);
        return this;
    }
    packFrom(message) {
        this.value = message.toBinary();
        this.typeUrl = this.typeNameToUrl(message.getType().typeName);
    }
    unpackTo(target) {
        if (!this.is(target.getType())) return false;
        target.fromBinary(this.value);
        return true;
    }
    unpack(registry) {
        if (this.typeUrl === "") return undefined;
        const messageType = registry.findMessage(this.typeUrlToName(this.typeUrl));
        if (!messageType) return undefined;
        return messageType.fromBinary(this.value);
    }
    is(type) {
        if (this.typeUrl === '') return false;
        const name = this.typeUrlToName(this.typeUrl);
        let typeName = '';
        if (typeof type === 'string') typeName = type;
        else typeName = type.typeName;
        return name === typeName;
    }
    typeNameToUrl(name) {
        return `type.googleapis.com/${name}`;
    }
    typeUrlToName(url) {
        if (!url.length) throw new Error(`invalid type url: ${url}`);
        const slash = url.lastIndexOf("/");
        const name = slash >= 0 ? url.substring(slash + 1) : url;
        if (!name.length) throw new Error(`invalid type url: ${url}`);
        return name;
    }
    static pack(message) {
        const any = new $2ac56f4e02060a4b$var$Any();
        any.packFrom(message);
        return any;
    }
    static fromBinary(bytes, options) {
        return new $2ac56f4e02060a4b$var$Any().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $2ac56f4e02060a4b$var$Any().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $2ac56f4e02060a4b$var$Any().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($2ac56f4e02060a4b$var$Any, a, b);
    }
}
module.exports.Any = $2ac56f4e02060a4b$var$Any;
$2ac56f4e02060a4b$var$Any.runtime = $lfD5g.proto3;
$2ac56f4e02060a4b$var$Any.typeName = "google.protobuf.Any";
$2ac56f4e02060a4b$var$Any.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "type_url",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12 /* ScalarType.BYTES */ 
        }
    ]);

});

parcelRegister("IpFbO", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Empty = void 0;

var $cI13w = parcelRequire("cI13w");

var $lfD5g = parcelRequire("lfD5g");
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 *
 * @generated from message google.protobuf.Empty
 */ class $08580461ae1f5137$var$Empty extends $cI13w.Message {
    constructor(data){
        super();
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $08580461ae1f5137$var$Empty().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $08580461ae1f5137$var$Empty().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $08580461ae1f5137$var$Empty().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($08580461ae1f5137$var$Empty, a, b);
    }
}
module.exports.Empty = $08580461ae1f5137$var$Empty;
$08580461ae1f5137$var$Empty.runtime = $lfD5g.proto3;
$08580461ae1f5137$var$Empty.typeName = "google.protobuf.Empty";
$08580461ae1f5137$var$Empty.fields = $lfD5g.proto3.util.newFieldList(()=>[]);

});

parcelRegister("24JC6", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.FieldMask = void 0;

var $cI13w = parcelRequire("cI13w");

var $lfD5g = parcelRequire("lfD5g");
/**
 * `FieldMask` represents a set of symbolic field paths, for example:
 *
 *     paths: "f.a"
 *     paths: "f.b.d"
 *
 * Here `f` represents a field in some root message, `a` and `b`
 * fields in the message found in `f`, and `d` a field found in the
 * message in `f.b`.
 *
 * Field masks are used to specify a subset of fields that should be
 * returned by a get operation or modified by an update operation.
 * Field masks also have a custom JSON encoding (see below).
 *
 * # Field Masks in Projections
 *
 * When used in the context of a projection, a response message or
 * sub-message is filtered by the API to only contain those fields as
 * specified in the mask. For example, if the mask in the previous
 * example is applied to a response message as follows:
 *
 *     f {
 *       a : 22
 *       b {
 *         d : 1
 *         x : 2
 *       }
 *       y : 13
 *     }
 *     z: 8
 *
 * The result will not contain specific values for fields x,y and z
 * (their value will be set to the default, and omitted in proto text
 * output):
 *
 *
 *     f {
 *       a : 22
 *       b {
 *         d : 1
 *       }
 *     }
 *
 * A repeated field is not allowed except at the last position of a
 * paths string.
 *
 * If a FieldMask object is not present in a get operation, the
 * operation applies to all fields (as if a FieldMask of all fields
 * had been specified).
 *
 * Note that a field mask does not necessarily apply to the
 * top-level response message. In case of a REST get operation, the
 * field mask applies directly to the response, but in case of a REST
 * list operation, the mask instead applies to each individual message
 * in the returned resource list. In case of a REST custom method,
 * other definitions may be used. Where the mask applies will be
 * clearly documented together with its declaration in the API.  In
 * any case, the effect on the returned resource/resources is required
 * behavior for APIs.
 *
 * # Field Masks in Update Operations
 *
 * A field mask in update operations specifies which fields of the
 * targeted resource are going to be updated. The API is required
 * to only change the values of the fields as specified in the mask
 * and leave the others untouched. If a resource is passed in to
 * describe the updated values, the API ignores the values of all
 * fields not covered by the mask.
 *
 * If a repeated field is specified for an update operation, new values will
 * be appended to the existing repeated field in the target resource. Note that
 * a repeated field is only allowed in the last position of a `paths` string.
 *
 * If a sub-message is specified in the last position of the field mask for an
 * update operation, then new value will be merged into the existing sub-message
 * in the target resource.
 *
 * For example, given the target message:
 *
 *     f {
 *       b {
 *         d: 1
 *         x: 2
 *       }
 *       c: [1]
 *     }
 *
 * And an update message:
 *
 *     f {
 *       b {
 *         d: 10
 *       }
 *       c: [2]
 *     }
 *
 * then if the field mask is:
 *
 *  paths: ["f.b", "f.c"]
 *
 * then the result will be:
 *
 *     f {
 *       b {
 *         d: 10
 *         x: 2
 *       }
 *       c: [1, 2]
 *     }
 *
 * An implementation may provide options to override this default behavior for
 * repeated and message fields.
 *
 * In order to reset a field's value to the default, the field must
 * be in the mask and set to the default value in the provided resource.
 * Hence, in order to reset all fields of a resource, provide a default
 * instance of the resource and set all fields in the mask, or do
 * not provide a mask as described below.
 *
 * If a field mask is not present on update, the operation applies to
 * all fields (as if a field mask of all fields has been specified).
 * Note that in the presence of schema evolution, this may mean that
 * fields the client does not know and has therefore not filled into
 * the request will be reset to their default. If this is unwanted
 * behavior, a specific service may require a client to always specify
 * a field mask, producing an error if not.
 *
 * As with get operations, the location of the resource which
 * describes the updated values in the request message depends on the
 * operation kind. In any case, the effect of the field mask is
 * required to be honored by the API.
 *
 * ## Considerations for HTTP REST
 *
 * The HTTP kind of an update operation which uses a field mask must
 * be set to PATCH instead of PUT in order to satisfy HTTP semantics
 * (PUT must only be used for full updates).
 *
 * # JSON Encoding of Field Masks
 *
 * In JSON, a field mask is encoded as a single string where paths are
 * separated by a comma. Fields name in each path are converted
 * to/from lower-camel naming conventions.
 *
 * As an example, consider the following message declarations:
 *
 *     message Profile {
 *       User user = 1;
 *       Photo photo = 2;
 *     }
 *     message User {
 *       string display_name = 1;
 *       string address = 2;
 *     }
 *
 * In proto a field mask for `Profile` may look as such:
 *
 *     mask {
 *       paths: "user.display_name"
 *       paths: "photo"
 *     }
 *
 * In JSON, the same mask is represented as below:
 *
 *     {
 *       mask: "user.displayName,photo"
 *     }
 *
 * # Field Masks and Oneof Fields
 *
 * Field masks treat fields in oneofs just as regular fields. Consider the
 * following message:
 *
 *     message SampleMessage {
 *       oneof test_oneof {
 *         string name = 4;
 *         SubMessage sub_message = 9;
 *       }
 *     }
 *
 * The field mask can be:
 *
 *     mask {
 *       paths: "name"
 *     }
 *
 * Or:
 *
 *     mask {
 *       paths: "sub_message"
 *     }
 *
 * Note that oneof type names ("test_oneof" in this case) cannot be used in
 * paths.
 *
 * ## Field Mask Verification
 *
 * The implementation of any API method which has a FieldMask type field in the
 * request should verify the included field paths, and return an
 * `INVALID_ARGUMENT` error if any path is unmappable.
 *
 * @generated from message google.protobuf.FieldMask
 */ class $182f56623d087e01$var$FieldMask extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The set of field mask paths.
         *
         * @generated from field: repeated string paths = 1;
         */ this.paths = [];
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        // Converts snake_case to protoCamelCase according to the convention
        // used by protoc to convert a field name to a JSON name.
        function protoCamelCase(snakeCase) {
            let capNext = false;
            const b = [];
            for(let i = 0; i < snakeCase.length; i++){
                let c = snakeCase.charAt(i);
                switch(c){
                    case '_':
                        capNext = true;
                        break;
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        b.push(c);
                        capNext = false;
                        break;
                    default:
                        if (capNext) {
                            capNext = false;
                            c = c.toUpperCase();
                        }
                        b.push(c);
                        break;
                }
            }
            return b.join('');
        }
        return this.paths.map((p)=>{
            if (p.match(/_[0-9]?_/g) || p.match(/[A-Z]/g)) throw new Error("cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name \"" + p + "\" is irreversible");
            return protoCamelCase(p);
        }).join(",");
    }
    fromJson(json, options) {
        if (typeof json !== "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + $lfD5g.proto3.json.debug(json));
        if (json === "") return this;
        function camelToSnake(str) {
            if (str.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const sc = str.replace(/[A-Z]/g, (letter)=>"_" + letter.toLowerCase());
            return sc[0] === "_" ? sc.substring(1) : sc;
        }
        this.paths = json.split(",").map(camelToSnake);
        return this;
    }
    static fromBinary(bytes, options) {
        return new $182f56623d087e01$var$FieldMask().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $182f56623d087e01$var$FieldMask().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $182f56623d087e01$var$FieldMask().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($182f56623d087e01$var$FieldMask, a, b);
    }
}
module.exports.FieldMask = $182f56623d087e01$var$FieldMask;
$182f56623d087e01$var$FieldMask.runtime = $lfD5g.proto3;
$182f56623d087e01$var$FieldMask.typeName = "google.protobuf.FieldMask";
$182f56623d087e01$var$FieldMask.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        }
    ]);

});

parcelRegister("fS6Va", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ListValue = module.exports.Value = module.exports.Struct = module.exports.NullValue = void 0;

var $lfD5g = parcelRequire("lfD5g");

var $cI13w = parcelRequire("cI13w");
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 *
 * @generated from enum google.protobuf.NullValue
 */ var $b8e1448b11c6be1e$var$NullValue;
(function(NullValue) {
    /**
     * Null value.
     *
     * @generated from enum value: NULL_VALUE = 0;
     */ NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
})($b8e1448b11c6be1e$var$NullValue || (module.exports.NullValue = $b8e1448b11c6be1e$var$NullValue = {}));
// Retrieve enum metadata with: proto3.getEnumType(NullValue)
$lfD5g.proto3.util.setEnumType($b8e1448b11c6be1e$var$NullValue, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 *
 * @generated from message google.protobuf.Struct
 */ class $b8e1448b11c6be1e$var$Struct extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Unordered map of dynamically typed values.
         *
         * @generated from field: map<string, google.protobuf.Value> fields = 1;
         */ this.fields = {};
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        const json = {};
        for (const [k, v] of Object.entries(this.fields))json[k] = v.toJson(options);
        return json;
    }
    fromJson(json, options) {
        if (typeof json != "object" || json == null || Array.isArray(json)) throw new Error("cannot decode google.protobuf.Struct from JSON " + $lfD5g.proto3.json.debug(json));
        for (const [k, v] of Object.entries(json))this.fields[k] = $b8e1448b11c6be1e$var$Value.fromJson(v);
        return this;
    }
    static fromBinary(bytes, options) {
        return new $b8e1448b11c6be1e$var$Struct().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $b8e1448b11c6be1e$var$Struct().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $b8e1448b11c6be1e$var$Struct().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($b8e1448b11c6be1e$var$Struct, a, b);
    }
}
module.exports.Struct = $b8e1448b11c6be1e$var$Struct;
$b8e1448b11c6be1e$var$Struct.runtime = $lfD5g.proto3;
$b8e1448b11c6be1e$var$Struct.typeName = "google.protobuf.Struct";
$b8e1448b11c6be1e$var$Struct.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9 /* ScalarType.STRING */ ,
            V: {
                kind: "message",
                T: $b8e1448b11c6be1e$var$Value
            }
        }
    ]);
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 *
 * @generated from message google.protobuf.Value
 */ class $b8e1448b11c6be1e$var$Value extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The kind of value.
         *
         * @generated from oneof google.protobuf.Value.kind
         */ this.kind = {
            case: undefined
        };
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        switch(this.kind.case){
            case "nullValue":
                return null;
            case "numberValue":
                if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                return this.kind.value;
            case "boolValue":
                return this.kind.value;
            case "stringValue":
                return this.kind.value;
            case "structValue":
            case "listValue":
                return this.kind.value.toJson(Object.assign(Object.assign({}, options), {
                    emitDefaultValues: true
                }));
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(json, options) {
        switch(typeof json){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: json
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: json
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: json
                };
                break;
            case "object":
                if (json === null) this.kind = {
                    case: "nullValue",
                    value: $b8e1448b11c6be1e$var$NullValue.NULL_VALUE
                };
                else if (Array.isArray(json)) this.kind = {
                    case: "listValue",
                    value: $b8e1448b11c6be1e$var$ListValue.fromJson(json)
                };
                else this.kind = {
                    case: "structValue",
                    value: $b8e1448b11c6be1e$var$Struct.fromJson(json)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + $lfD5g.proto3.json.debug(json));
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $b8e1448b11c6be1e$var$Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $b8e1448b11c6be1e$var$Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $b8e1448b11c6be1e$var$Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($b8e1448b11c6be1e$var$Value, a, b);
    }
}
module.exports.Value = $b8e1448b11c6be1e$var$Value;
$b8e1448b11c6be1e$var$Value.runtime = $lfD5g.proto3;
$b8e1448b11c6be1e$var$Value.typeName = "google.protobuf.Value";
$b8e1448b11c6be1e$var$Value.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($b8e1448b11c6be1e$var$NullValue),
            oneof: "kind"
        },
        {
            no: 2,
            name: "number_value",
            kind: "scalar",
            T: 1 /* ScalarType.DOUBLE */ ,
            oneof: "kind"
        },
        {
            no: 3,
            name: "string_value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            oneof: "kind"
        },
        {
            no: 4,
            name: "bool_value",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ ,
            oneof: "kind"
        },
        {
            no: 5,
            name: "struct_value",
            kind: "message",
            T: $b8e1448b11c6be1e$var$Struct,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: $b8e1448b11c6be1e$var$ListValue,
            oneof: "kind"
        }
    ]);
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 *
 * @generated from message google.protobuf.ListValue
 */ class $b8e1448b11c6be1e$var$ListValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Repeated field of dynamically typed values.
         *
         * @generated from field: repeated google.protobuf.Value values = 1;
         */ this.values = [];
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return this.values.map((v)=>v.toJson());
    }
    fromJson(json, options) {
        if (!Array.isArray(json)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + $lfD5g.proto3.json.debug(json));
        for (let e of json)this.values.push($b8e1448b11c6be1e$var$Value.fromJson(e));
        return this;
    }
    static fromBinary(bytes, options) {
        return new $b8e1448b11c6be1e$var$ListValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $b8e1448b11c6be1e$var$ListValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $b8e1448b11c6be1e$var$ListValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($b8e1448b11c6be1e$var$ListValue, a, b);
    }
}
module.exports.ListValue = $b8e1448b11c6be1e$var$ListValue;
$b8e1448b11c6be1e$var$ListValue.runtime = $lfD5g.proto3;
$b8e1448b11c6be1e$var$ListValue.typeName = "google.protobuf.ListValue";
$b8e1448b11c6be1e$var$ListValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: $b8e1448b11c6be1e$var$Value,
            repeated: true
        }
    ]);

});

parcelRegister("ar4YL", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.BytesValue = module.exports.StringValue = module.exports.BoolValue = module.exports.UInt32Value = module.exports.Int32Value = module.exports.UInt64Value = module.exports.Int64Value = module.exports.FloatValue = module.exports.DoubleValue = void 0;

var $cI13w = parcelRequire("cI13w");

var $lfD5g = parcelRequire("lfD5g");

var $7RwvC = parcelRequire("7RwvC");

var $69KOh = parcelRequire("69KOh");
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 *
 * @generated from message google.protobuf.DoubleValue
 */ class $799049b86272ef77$var$DoubleValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The double value.
         *
         * @generated from field: double value = 1;
         */ this.value = 0;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.DOUBLE, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.DOUBLE, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.DoubleValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$DoubleValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$DoubleValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$DoubleValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$DoubleValue, a, b);
    }
}
module.exports.DoubleValue = $799049b86272ef77$var$DoubleValue;
$799049b86272ef77$var$DoubleValue.runtime = $lfD5g.proto3;
$799049b86272ef77$var$DoubleValue.typeName = "google.protobuf.DoubleValue";
$799049b86272ef77$var$DoubleValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1 /* ScalarType.DOUBLE */ 
        }
    ]);
$799049b86272ef77$var$DoubleValue.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$DoubleValue({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 *
 * @generated from message google.protobuf.FloatValue
 */ class $799049b86272ef77$var$FloatValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The float value.
         *
         * @generated from field: float value = 1;
         */ this.value = 0;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.FLOAT, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.FLOAT, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.FloatValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$FloatValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$FloatValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$FloatValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$FloatValue, a, b);
    }
}
module.exports.FloatValue = $799049b86272ef77$var$FloatValue;
$799049b86272ef77$var$FloatValue.runtime = $lfD5g.proto3;
$799049b86272ef77$var$FloatValue.typeName = "google.protobuf.FloatValue";
$799049b86272ef77$var$FloatValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2 /* ScalarType.FLOAT */ 
        }
    ]);
$799049b86272ef77$var$FloatValue.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$FloatValue({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 *
 * @generated from message google.protobuf.Int64Value
 */ class $799049b86272ef77$var$Int64Value extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The int64 value.
         *
         * @generated from field: int64 value = 1;
         */ this.value = $69KOh.protoInt64.zero;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.INT64, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.INT64, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.Int64Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$Int64Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$Int64Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$Int64Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$Int64Value, a, b);
    }
}
module.exports.Int64Value = $799049b86272ef77$var$Int64Value;
$799049b86272ef77$var$Int64Value.runtime = $lfD5g.proto3;
$799049b86272ef77$var$Int64Value.typeName = "google.protobuf.Int64Value";
$799049b86272ef77$var$Int64Value.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3 /* ScalarType.INT64 */ 
        }
    ]);
$799049b86272ef77$var$Int64Value.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$Int64Value({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 *
 * @generated from message google.protobuf.UInt64Value
 */ class $799049b86272ef77$var$UInt64Value extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The uint64 value.
         *
         * @generated from field: uint64 value = 1;
         */ this.value = $69KOh.protoInt64.zero;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.UINT64, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.UINT64, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.UInt64Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$UInt64Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$UInt64Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$UInt64Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$UInt64Value, a, b);
    }
}
module.exports.UInt64Value = $799049b86272ef77$var$UInt64Value;
$799049b86272ef77$var$UInt64Value.runtime = $lfD5g.proto3;
$799049b86272ef77$var$UInt64Value.typeName = "google.protobuf.UInt64Value";
$799049b86272ef77$var$UInt64Value.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4 /* ScalarType.UINT64 */ 
        }
    ]);
$799049b86272ef77$var$UInt64Value.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$UInt64Value({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 *
 * @generated from message google.protobuf.Int32Value
 */ class $799049b86272ef77$var$Int32Value extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The int32 value.
         *
         * @generated from field: int32 value = 1;
         */ this.value = 0;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.INT32, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.INT32, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.Int32Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$Int32Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$Int32Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$Int32Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$Int32Value, a, b);
    }
}
module.exports.Int32Value = $799049b86272ef77$var$Int32Value;
$799049b86272ef77$var$Int32Value.runtime = $lfD5g.proto3;
$799049b86272ef77$var$Int32Value.typeName = "google.protobuf.Int32Value";
$799049b86272ef77$var$Int32Value.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ 
        }
    ]);
$799049b86272ef77$var$Int32Value.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$Int32Value({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 *
 * @generated from message google.protobuf.UInt32Value
 */ class $799049b86272ef77$var$UInt32Value extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The uint32 value.
         *
         * @generated from field: uint32 value = 1;
         */ this.value = 0;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.UINT32, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.UINT32, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.UInt32Value from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$UInt32Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$UInt32Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$UInt32Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$UInt32Value, a, b);
    }
}
module.exports.UInt32Value = $799049b86272ef77$var$UInt32Value;
$799049b86272ef77$var$UInt32Value.runtime = $lfD5g.proto3;
$799049b86272ef77$var$UInt32Value.typeName = "google.protobuf.UInt32Value";
$799049b86272ef77$var$UInt32Value.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13 /* ScalarType.UINT32 */ 
        }
    ]);
$799049b86272ef77$var$UInt32Value.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$UInt32Value({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 *
 * @generated from message google.protobuf.BoolValue
 */ class $799049b86272ef77$var$BoolValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The bool value.
         *
         * @generated from field: bool value = 1;
         */ this.value = false;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.BOOL, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.BOOL, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.BoolValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$BoolValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$BoolValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$BoolValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$BoolValue, a, b);
    }
}
module.exports.BoolValue = $799049b86272ef77$var$BoolValue;
$799049b86272ef77$var$BoolValue.runtime = $lfD5g.proto3;
$799049b86272ef77$var$BoolValue.typeName = "google.protobuf.BoolValue";
$799049b86272ef77$var$BoolValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ 
        }
    ]);
$799049b86272ef77$var$BoolValue.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$BoolValue({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 *
 * @generated from message google.protobuf.StringValue
 */ class $799049b86272ef77$var$StringValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The string value.
         *
         * @generated from field: string value = 1;
         */ this.value = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.STRING, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.STRING, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.StringValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$StringValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$StringValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$StringValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$StringValue, a, b);
    }
}
module.exports.StringValue = $799049b86272ef77$var$StringValue;
$799049b86272ef77$var$StringValue.runtime = $lfD5g.proto3;
$799049b86272ef77$var$StringValue.typeName = "google.protobuf.StringValue";
$799049b86272ef77$var$StringValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        }
    ]);
$799049b86272ef77$var$StringValue.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$StringValue({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 *
 * @generated from message google.protobuf.BytesValue
 */ class $799049b86272ef77$var$BytesValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The bytes value.
         *
         * @generated from field: bytes value = 1;
         */ this.value = new Uint8Array(0);
        $lfD5g.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return $lfD5g.proto3.json.writeScalar($7RwvC.ScalarType.BYTES, this.value, true);
    }
    fromJson(json, options) {
        try {
            this.value = $lfD5g.proto3.json.readScalar($7RwvC.ScalarType.BYTES, json);
        } catch (e) {
            let m = `cannot decode message google.protobuf.BytesValue from JSON"`;
            if (e instanceof Error && e.message.length > 0) m += `: ${e.message}`;
            throw new Error(m);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new $799049b86272ef77$var$BytesValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $799049b86272ef77$var$BytesValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $799049b86272ef77$var$BytesValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($799049b86272ef77$var$BytesValue, a, b);
    }
}
module.exports.BytesValue = $799049b86272ef77$var$BytesValue;
$799049b86272ef77$var$BytesValue.runtime = $lfD5g.proto3;
$799049b86272ef77$var$BytesValue.typeName = "google.protobuf.BytesValue";
$799049b86272ef77$var$BytesValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12 /* ScalarType.BYTES */ 
        }
    ]);
$799049b86272ef77$var$BytesValue.fieldWrapper = {
    wrapField (value) {
        return new $799049b86272ef77$var$BytesValue({
            value: value
        });
    },
    unwrapField (value) {
        return value.value;
    }
};

});

parcelRegister("qitgr", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CodeGeneratorResponse_File = module.exports.CodeGeneratorResponse_Feature = module.exports.CodeGeneratorResponse = module.exports.CodeGeneratorRequest = module.exports.Version = void 0;

var $cI13w = parcelRequire("cI13w");

var $fGM1a = parcelRequire("fGM1a");

var $1NDXH = parcelRequire("1NDXH");
/**
 * The version number of protocol compiler.
 *
 * @generated from message google.protobuf.compiler.Version
 */ class $04f0c1c75b192bb7$var$Version extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $04f0c1c75b192bb7$var$Version().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $04f0c1c75b192bb7$var$Version().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $04f0c1c75b192bb7$var$Version().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($04f0c1c75b192bb7$var$Version, a, b);
    }
}
module.exports.Version = $04f0c1c75b192bb7$var$Version;
$04f0c1c75b192bb7$var$Version.runtime = $fGM1a.proto2;
$04f0c1c75b192bb7$var$Version.typeName = "google.protobuf.compiler.Version";
$04f0c1c75b192bb7$var$Version.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "major",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 2,
            name: "minor",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 4,
            name: "suffix",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        }
    ]);
/**
 * An encoded CodeGeneratorRequest is written to the plugin's stdin.
 *
 * @generated from message google.protobuf.compiler.CodeGeneratorRequest
 */ class $04f0c1c75b192bb7$var$CodeGeneratorRequest extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The .proto files that were explicitly listed on the command-line.  The
         * code generator should generate code only for these files.  Each file's
         * descriptor will be included in proto_file, below.
         *
         * @generated from field: repeated string file_to_generate = 1;
         */ this.fileToGenerate = [];
        /**
         * FileDescriptorProtos for all files in files_to_generate and everything
         * they import.  The files will appear in topological order, so each file
         * appears before any file that imports it.
         *
         * Note: the files listed in files_to_generate will include runtime-retention
         * options only, but all other files will include source-retention options.
         * The source_file_descriptors field below is available in case you need
         * source-retention options for files_to_generate.
         *
         * protoc guarantees that all proto_files will be written after
         * the fields above, even though this is not technically guaranteed by the
         * protobuf wire format.  This theoretically could allow a plugin to stream
         * in the FileDescriptorProtos and handle them one by one rather than read
         * the entire set into memory at once.  However, as of this writing, this
         * is not similarly optimized on protoc's end -- it will store all fields in
         * memory at once before sending them to the plugin.
         *
         * Type names of fields and extensions in the FileDescriptorProto are always
         * fully qualified.
         *
         * @generated from field: repeated google.protobuf.FileDescriptorProto proto_file = 15;
         */ this.protoFile = [];
        /**
         * File descriptors with all options, including source-retention options.
         * These descriptors are only provided for the files listed in
         * files_to_generate.
         *
         * @generated from field: repeated google.protobuf.FileDescriptorProto source_file_descriptors = 17;
         */ this.sourceFileDescriptors = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($04f0c1c75b192bb7$var$CodeGeneratorRequest, a, b);
    }
}
module.exports.CodeGeneratorRequest = $04f0c1c75b192bb7$var$CodeGeneratorRequest;
$04f0c1c75b192bb7$var$CodeGeneratorRequest.runtime = $fGM1a.proto2;
$04f0c1c75b192bb7$var$CodeGeneratorRequest.typeName = "google.protobuf.compiler.CodeGeneratorRequest";
$04f0c1c75b192bb7$var$CodeGeneratorRequest.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_to_generate",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        },
        {
            no: 2,
            name: "parameter",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 15,
            name: "proto_file",
            kind: "message",
            T: $1NDXH.FileDescriptorProto,
            repeated: true
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: $1NDXH.FileDescriptorProto,
            repeated: true
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: $04f0c1c75b192bb7$var$Version,
            opt: true
        }
    ]);
/**
 * The plugin writes an encoded CodeGeneratorResponse to stdout.
 *
 * @generated from message google.protobuf.compiler.CodeGeneratorResponse
 */ class $04f0c1c75b192bb7$var$CodeGeneratorResponse extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * @generated from field: repeated google.protobuf.compiler.CodeGeneratorResponse.File file = 15;
         */ this.file = [];
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($04f0c1c75b192bb7$var$CodeGeneratorResponse, a, b);
    }
}
module.exports.CodeGeneratorResponse = $04f0c1c75b192bb7$var$CodeGeneratorResponse;
$04f0c1c75b192bb7$var$CodeGeneratorResponse.runtime = $fGM1a.proto2;
$04f0c1c75b192bb7$var$CodeGeneratorResponse.typeName = "google.protobuf.compiler.CodeGeneratorResponse";
$04f0c1c75b192bb7$var$CodeGeneratorResponse.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "supported_features",
            kind: "scalar",
            T: 4 /* ScalarType.UINT64 */ ,
            opt: true
        },
        {
            no: 3,
            name: "minimum_edition",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 4,
            name: "maximum_edition",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ ,
            opt: true
        },
        {
            no: 15,
            name: "file",
            kind: "message",
            T: $04f0c1c75b192bb7$var$CodeGeneratorResponse_File,
            repeated: true
        }
    ]);
/**
 * Sync with code_generator.h.
 *
 * @generated from enum google.protobuf.compiler.CodeGeneratorResponse.Feature
 */ var $04f0c1c75b192bb7$var$CodeGeneratorResponse_Feature;
(function(CodeGeneratorResponse_Feature) {
    /**
     * @generated from enum value: FEATURE_NONE = 0;
     */ CodeGeneratorResponse_Feature[CodeGeneratorResponse_Feature["NONE"] = 0] = "NONE";
    /**
     * @generated from enum value: FEATURE_PROTO3_OPTIONAL = 1;
     */ CodeGeneratorResponse_Feature[CodeGeneratorResponse_Feature["PROTO3_OPTIONAL"] = 1] = "PROTO3_OPTIONAL";
    /**
     * @generated from enum value: FEATURE_SUPPORTS_EDITIONS = 2;
     */ CodeGeneratorResponse_Feature[CodeGeneratorResponse_Feature["SUPPORTS_EDITIONS"] = 2] = "SUPPORTS_EDITIONS";
})($04f0c1c75b192bb7$var$CodeGeneratorResponse_Feature || (module.exports.CodeGeneratorResponse_Feature = $04f0c1c75b192bb7$var$CodeGeneratorResponse_Feature = {}));
// Retrieve enum metadata with: proto2.getEnumType(CodeGeneratorResponse_Feature)
$fGM1a.proto2.util.setEnumType($04f0c1c75b192bb7$var$CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
    {
        no: 0,
        name: "FEATURE_NONE"
    },
    {
        no: 1,
        name: "FEATURE_PROTO3_OPTIONAL"
    },
    {
        no: 2,
        name: "FEATURE_SUPPORTS_EDITIONS"
    }
]);
/**
 * Represents a single generated file.
 *
 * @generated from message google.protobuf.compiler.CodeGeneratorResponse.File
 */ class $04f0c1c75b192bb7$var$CodeGeneratorResponse_File extends $cI13w.Message {
    constructor(data){
        super();
        $fGM1a.proto2.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorResponse_File().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorResponse_File().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $04f0c1c75b192bb7$var$CodeGeneratorResponse_File().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $fGM1a.proto2.util.equals($04f0c1c75b192bb7$var$CodeGeneratorResponse_File, a, b);
    }
}
module.exports.CodeGeneratorResponse_File = $04f0c1c75b192bb7$var$CodeGeneratorResponse_File;
$04f0c1c75b192bb7$var$CodeGeneratorResponse_File.runtime = $fGM1a.proto2;
$04f0c1c75b192bb7$var$CodeGeneratorResponse_File.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
$04f0c1c75b192bb7$var$CodeGeneratorResponse_File.fields = $fGM1a.proto2.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 2,
            name: "insertion_point",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 15,
            name: "content",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            opt: true
        },
        {
            no: 16,
            name: "generated_code_info",
            kind: "message",
            T: $1NDXH.GeneratedCodeInfo,
            opt: true
        }
    ]);

});

parcelRegister("iY5Jm", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Mixin = module.exports.Method = module.exports.Api = void 0;

var $cI13w = parcelRequire("cI13w");

var $cYT6Y = parcelRequire("cYT6Y");

var $87TC0 = parcelRequire("87TC0");

var $lfD5g = parcelRequire("lfD5g");
/**
 * Api is a light-weight descriptor for an API Interface.
 *
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 *
 * @generated from message google.protobuf.Api
 */ class $dcf24698ab153977$var$Api extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The fully qualified name of this interface, including package name
         * followed by the interface's simple name.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        /**
         * The methods of this interface, in unspecified order.
         *
         * @generated from field: repeated google.protobuf.Method methods = 2;
         */ this.methods = [];
        /**
         * Any metadata attached to the interface.
         *
         * @generated from field: repeated google.protobuf.Option options = 3;
         */ this.options = [];
        /**
         * A version string for this interface. If specified, must have the form
         * `major-version.minor-version`, as in `1.10`. If the minor version is
         * omitted, it defaults to zero. If the entire version field is empty, the
         * major version is derived from the package name, as outlined below. If the
         * field is not empty, the version in the package name will be verified to be
         * consistent with what is provided here.
         *
         * The versioning schema uses [semantic
         * versioning](http://semver.org) where the major version number
         * indicates a breaking change and the minor version an additive,
         * non-breaking change. Both version numbers are signals to users
         * what to expect from different versions, and should be carefully
         * chosen based on the product plan.
         *
         * The major version is also reflected in the package name of the
         * interface, which must end in `v<major-version>`, as in
         * `google.feature.v1`. For major versions 0 and 1, the suffix can
         * be omitted. Zero major versions must only be used for
         * experimental, non-GA interfaces.
         *
         *
         * @generated from field: string version = 4;
         */ this.version = "";
        /**
         * Included interfaces. See [Mixin][].
         *
         * @generated from field: repeated google.protobuf.Mixin mixins = 6;
         */ this.mixins = [];
        /**
         * The source syntax of the service.
         *
         * @generated from field: google.protobuf.Syntax syntax = 7;
         */ this.syntax = $cYT6Y.Syntax.PROTO2;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $dcf24698ab153977$var$Api().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $dcf24698ab153977$var$Api().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $dcf24698ab153977$var$Api().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($dcf24698ab153977$var$Api, a, b);
    }
}
module.exports.Api = $dcf24698ab153977$var$Api;
$dcf24698ab153977$var$Api.runtime = $lfD5g.proto3;
$dcf24698ab153977$var$Api.typeName = "google.protobuf.Api";
$dcf24698ab153977$var$Api.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "methods",
            kind: "message",
            T: $dcf24698ab153977$var$Method,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $cYT6Y.Option,
            repeated: true
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: $87TC0.SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: $dcf24698ab153977$var$Mixin,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($cYT6Y.Syntax)
        }
    ]);
/**
 * Method represents a method of an API interface.
 *
 * @generated from message google.protobuf.Method
 */ class $dcf24698ab153977$var$Method extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The simple name of this method.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        /**
         * A URL of the input message type.
         *
         * @generated from field: string request_type_url = 2;
         */ this.requestTypeUrl = "";
        /**
         * If true, the request is streamed.
         *
         * @generated from field: bool request_streaming = 3;
         */ this.requestStreaming = false;
        /**
         * The URL of the output message type.
         *
         * @generated from field: string response_type_url = 4;
         */ this.responseTypeUrl = "";
        /**
         * If true, the response is streamed.
         *
         * @generated from field: bool response_streaming = 5;
         */ this.responseStreaming = false;
        /**
         * Any metadata attached to the method.
         *
         * @generated from field: repeated google.protobuf.Option options = 6;
         */ this.options = [];
        /**
         * The source syntax of this method.
         *
         * @generated from field: google.protobuf.Syntax syntax = 7;
         */ this.syntax = $cYT6Y.Syntax.PROTO2;
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $dcf24698ab153977$var$Method().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $dcf24698ab153977$var$Method().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $dcf24698ab153977$var$Method().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($dcf24698ab153977$var$Method, a, b);
    }
}
module.exports.Method = $dcf24698ab153977$var$Method;
$dcf24698ab153977$var$Method.runtime = $lfD5g.proto3;
$dcf24698ab153977$var$Method.typeName = "google.protobuf.Method";
$dcf24698ab153977$var$Method.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "request_type_url",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 3,
            name: "request_streaming",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ 
        },
        {
            no: 4,
            name: "response_type_url",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 5,
            name: "response_streaming",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ 
        },
        {
            no: 6,
            name: "options",
            kind: "message",
            T: $cYT6Y.Option,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($cYT6Y.Syntax)
        }
    ]);
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 *
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 *
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 *
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 *
 * Example of a simple mixin:
 *
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 *
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 *
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 *
 * Example of a mixin configuration:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 *
 * Note how the version in the path pattern changed from `v1` to `v2`.
 *
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 *
 * This implies the following inherited HTTP annotation:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 *
 * @generated from message google.protobuf.Mixin
 */ class $dcf24698ab153977$var$Mixin extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The fully qualified name of the interface which is included.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        /**
         * If non-empty specifies a path under which inherited HTTP paths
         * are rooted.
         *
         * @generated from field: string root = 2;
         */ this.root = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $dcf24698ab153977$var$Mixin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $dcf24698ab153977$var$Mixin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $dcf24698ab153977$var$Mixin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($dcf24698ab153977$var$Mixin, a, b);
    }
}
module.exports.Mixin = $dcf24698ab153977$var$Mixin;
$dcf24698ab153977$var$Mixin.runtime = $lfD5g.proto3;
$dcf24698ab153977$var$Mixin.typeName = "google.protobuf.Mixin";
$dcf24698ab153977$var$Mixin.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "root",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        }
    ]);

});
parcelRegister("cYT6Y", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Option = module.exports.EnumValue = module.exports.Enum = module.exports.Field_Cardinality = module.exports.Field_Kind = module.exports.Field = module.exports.Type = module.exports.Syntax = void 0;

var $lfD5g = parcelRequire("lfD5g");

var $cI13w = parcelRequire("cI13w");

var $87TC0 = parcelRequire("87TC0");

var $3FFyr = parcelRequire("3FFyr");
/**
 * The syntax in which a protocol buffer element is defined.
 *
 * @generated from enum google.protobuf.Syntax
 */ var $9735d6a46381bfe8$var$Syntax;
(function(Syntax) {
    /**
     * Syntax `proto2`.
     *
     * @generated from enum value: SYNTAX_PROTO2 = 0;
     */ Syntax[Syntax["PROTO2"] = 0] = "PROTO2";
    /**
     * Syntax `proto3`.
     *
     * @generated from enum value: SYNTAX_PROTO3 = 1;
     */ Syntax[Syntax["PROTO3"] = 1] = "PROTO3";
    /**
     * Syntax `editions`.
     *
     * @generated from enum value: SYNTAX_EDITIONS = 2;
     */ Syntax[Syntax["EDITIONS"] = 2] = "EDITIONS";
})($9735d6a46381bfe8$var$Syntax || (module.exports.Syntax = $9735d6a46381bfe8$var$Syntax = {}));
// Retrieve enum metadata with: proto3.getEnumType(Syntax)
$lfD5g.proto3.util.setEnumType($9735d6a46381bfe8$var$Syntax, "google.protobuf.Syntax", [
    {
        no: 0,
        name: "SYNTAX_PROTO2"
    },
    {
        no: 1,
        name: "SYNTAX_PROTO3"
    },
    {
        no: 2,
        name: "SYNTAX_EDITIONS"
    }
]);
/**
 * A protocol buffer message type.
 *
 * @generated from message google.protobuf.Type
 */ class $9735d6a46381bfe8$var$Type extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The fully qualified message name.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        /**
         * The list of fields.
         *
         * @generated from field: repeated google.protobuf.Field fields = 2;
         */ this.fields = [];
        /**
         * The list of types appearing in `oneof` definitions in this type.
         *
         * @generated from field: repeated string oneofs = 3;
         */ this.oneofs = [];
        /**
         * The protocol buffer options.
         *
         * @generated from field: repeated google.protobuf.Option options = 4;
         */ this.options = [];
        /**
         * The source syntax.
         *
         * @generated from field: google.protobuf.Syntax syntax = 6;
         */ this.syntax = $9735d6a46381bfe8$var$Syntax.PROTO2;
        /**
         * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
         *
         * @generated from field: string edition = 7;
         */ this.edition = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $9735d6a46381bfe8$var$Type().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $9735d6a46381bfe8$var$Type().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $9735d6a46381bfe8$var$Type().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($9735d6a46381bfe8$var$Type, a, b);
    }
}
module.exports.Type = $9735d6a46381bfe8$var$Type;
$9735d6a46381bfe8$var$Type.runtime = $lfD5g.proto3;
$9735d6a46381bfe8$var$Type.typeName = "google.protobuf.Type";
$9735d6a46381bfe8$var$Type.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "fields",
            kind: "message",
            T: $9735d6a46381bfe8$var$Field,
            repeated: true
        },
        {
            no: 3,
            name: "oneofs",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ ,
            repeated: true
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: $9735d6a46381bfe8$var$Option,
            repeated: true
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: $87TC0.SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($9735d6a46381bfe8$var$Syntax)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        }
    ]);
/**
 * A single field of a message type.
 *
 * @generated from message google.protobuf.Field
 */ class $9735d6a46381bfe8$var$Field extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The field type.
         *
         * @generated from field: google.protobuf.Field.Kind kind = 1;
         */ this.kind = $9735d6a46381bfe8$var$Field_Kind.TYPE_UNKNOWN;
        /**
         * The field cardinality.
         *
         * @generated from field: google.protobuf.Field.Cardinality cardinality = 2;
         */ this.cardinality = $9735d6a46381bfe8$var$Field_Cardinality.UNKNOWN;
        /**
         * The field number.
         *
         * @generated from field: int32 number = 3;
         */ this.number = 0;
        /**
         * The field name.
         *
         * @generated from field: string name = 4;
         */ this.name = "";
        /**
         * The field type URL, without the scheme, for message or enumeration
         * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
         *
         * @generated from field: string type_url = 6;
         */ this.typeUrl = "";
        /**
         * The index of the field type in `Type.oneofs`, for message or enumeration
         * types. The first type has index 1; zero means the type is not in the list.
         *
         * @generated from field: int32 oneof_index = 7;
         */ this.oneofIndex = 0;
        /**
         * Whether to use alternative packed wire representation.
         *
         * @generated from field: bool packed = 8;
         */ this.packed = false;
        /**
         * The protocol buffer options.
         *
         * @generated from field: repeated google.protobuf.Option options = 9;
         */ this.options = [];
        /**
         * The field JSON name.
         *
         * @generated from field: string json_name = 10;
         */ this.jsonName = "";
        /**
         * The string value of the default value of this field. Proto2 syntax only.
         *
         * @generated from field: string default_value = 11;
         */ this.defaultValue = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $9735d6a46381bfe8$var$Field().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $9735d6a46381bfe8$var$Field().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $9735d6a46381bfe8$var$Field().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($9735d6a46381bfe8$var$Field, a, b);
    }
}
module.exports.Field = $9735d6a46381bfe8$var$Field;
$9735d6a46381bfe8$var$Field.runtime = $lfD5g.proto3;
$9735d6a46381bfe8$var$Field.typeName = "google.protobuf.Field";
$9735d6a46381bfe8$var$Field.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($9735d6a46381bfe8$var$Field_Kind)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($9735d6a46381bfe8$var$Field_Cardinality)
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ 
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 6,
            name: "type_url",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 7,
            name: "oneof_index",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ 
        },
        {
            no: 8,
            name: "packed",
            kind: "scalar",
            T: 8 /* ScalarType.BOOL */ 
        },
        {
            no: 9,
            name: "options",
            kind: "message",
            T: $9735d6a46381bfe8$var$Option,
            repeated: true
        },
        {
            no: 10,
            name: "json_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 11,
            name: "default_value",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        }
    ]);
/**
 * Basic field types.
 *
 * @generated from enum google.protobuf.Field.Kind
 */ var $9735d6a46381bfe8$var$Field_Kind;
(function(Field_Kind) {
    /**
     * Field type unknown.
     *
     * @generated from enum value: TYPE_UNKNOWN = 0;
     */ Field_Kind[Field_Kind["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
    /**
     * Field type double.
     *
     * @generated from enum value: TYPE_DOUBLE = 1;
     */ Field_Kind[Field_Kind["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    /**
     * Field type float.
     *
     * @generated from enum value: TYPE_FLOAT = 2;
     */ Field_Kind[Field_Kind["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * Field type int64.
     *
     * @generated from enum value: TYPE_INT64 = 3;
     */ Field_Kind[Field_Kind["TYPE_INT64"] = 3] = "TYPE_INT64";
    /**
     * Field type uint64.
     *
     * @generated from enum value: TYPE_UINT64 = 4;
     */ Field_Kind[Field_Kind["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * Field type int32.
     *
     * @generated from enum value: TYPE_INT32 = 5;
     */ Field_Kind[Field_Kind["TYPE_INT32"] = 5] = "TYPE_INT32";
    /**
     * Field type fixed64.
     *
     * @generated from enum value: TYPE_FIXED64 = 6;
     */ Field_Kind[Field_Kind["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    /**
     * Field type fixed32.
     *
     * @generated from enum value: TYPE_FIXED32 = 7;
     */ Field_Kind[Field_Kind["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    /**
     * Field type bool.
     *
     * @generated from enum value: TYPE_BOOL = 8;
     */ Field_Kind[Field_Kind["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    /**
     * Field type string.
     *
     * @generated from enum value: TYPE_STRING = 9;
     */ Field_Kind[Field_Kind["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * Field type group. Proto2 syntax only, and deprecated.
     *
     * @generated from enum value: TYPE_GROUP = 10;
     */ Field_Kind[Field_Kind["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /**
     * Field type message.
     *
     * @generated from enum value: TYPE_MESSAGE = 11;
     */ Field_Kind[Field_Kind["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /**
     * Field type bytes.
     *
     * @generated from enum value: TYPE_BYTES = 12;
     */ Field_Kind[Field_Kind["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    /**
     * Field type uint32.
     *
     * @generated from enum value: TYPE_UINT32 = 13;
     */ Field_Kind[Field_Kind["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    /**
     * Field type enum.
     *
     * @generated from enum value: TYPE_ENUM = 14;
     */ Field_Kind[Field_Kind["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    /**
     * Field type sfixed32.
     *
     * @generated from enum value: TYPE_SFIXED32 = 15;
     */ Field_Kind[Field_Kind["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    /**
     * Field type sfixed64.
     *
     * @generated from enum value: TYPE_SFIXED64 = 16;
     */ Field_Kind[Field_Kind["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /**
     * Field type sint32.
     *
     * @generated from enum value: TYPE_SINT32 = 17;
     */ Field_Kind[Field_Kind["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /**
     * Field type sint64.
     *
     * @generated from enum value: TYPE_SINT64 = 18;
     */ Field_Kind[Field_Kind["TYPE_SINT64"] = 18] = "TYPE_SINT64";
})($9735d6a46381bfe8$var$Field_Kind || (module.exports.Field_Kind = $9735d6a46381bfe8$var$Field_Kind = {}));
// Retrieve enum metadata with: proto3.getEnumType(Field_Kind)
$lfD5g.proto3.util.setEnumType($9735d6a46381bfe8$var$Field_Kind, "google.protobuf.Field.Kind", [
    {
        no: 0,
        name: "TYPE_UNKNOWN"
    },
    {
        no: 1,
        name: "TYPE_DOUBLE"
    },
    {
        no: 2,
        name: "TYPE_FLOAT"
    },
    {
        no: 3,
        name: "TYPE_INT64"
    },
    {
        no: 4,
        name: "TYPE_UINT64"
    },
    {
        no: 5,
        name: "TYPE_INT32"
    },
    {
        no: 6,
        name: "TYPE_FIXED64"
    },
    {
        no: 7,
        name: "TYPE_FIXED32"
    },
    {
        no: 8,
        name: "TYPE_BOOL"
    },
    {
        no: 9,
        name: "TYPE_STRING"
    },
    {
        no: 10,
        name: "TYPE_GROUP"
    },
    {
        no: 11,
        name: "TYPE_MESSAGE"
    },
    {
        no: 12,
        name: "TYPE_BYTES"
    },
    {
        no: 13,
        name: "TYPE_UINT32"
    },
    {
        no: 14,
        name: "TYPE_ENUM"
    },
    {
        no: 15,
        name: "TYPE_SFIXED32"
    },
    {
        no: 16,
        name: "TYPE_SFIXED64"
    },
    {
        no: 17,
        name: "TYPE_SINT32"
    },
    {
        no: 18,
        name: "TYPE_SINT64"
    }
]);
/**
 * Whether a field is optional, required, or repeated.
 *
 * @generated from enum google.protobuf.Field.Cardinality
 */ var $9735d6a46381bfe8$var$Field_Cardinality;
(function(Field_Cardinality) {
    /**
     * For fields with unknown cardinality.
     *
     * @generated from enum value: CARDINALITY_UNKNOWN = 0;
     */ Field_Cardinality[Field_Cardinality["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * For optional fields.
     *
     * @generated from enum value: CARDINALITY_OPTIONAL = 1;
     */ Field_Cardinality[Field_Cardinality["OPTIONAL"] = 1] = "OPTIONAL";
    /**
     * For required fields. Proto2 syntax only.
     *
     * @generated from enum value: CARDINALITY_REQUIRED = 2;
     */ Field_Cardinality[Field_Cardinality["REQUIRED"] = 2] = "REQUIRED";
    /**
     * For repeated fields.
     *
     * @generated from enum value: CARDINALITY_REPEATED = 3;
     */ Field_Cardinality[Field_Cardinality["REPEATED"] = 3] = "REPEATED";
})($9735d6a46381bfe8$var$Field_Cardinality || (module.exports.Field_Cardinality = $9735d6a46381bfe8$var$Field_Cardinality = {}));
// Retrieve enum metadata with: proto3.getEnumType(Field_Cardinality)
$lfD5g.proto3.util.setEnumType($9735d6a46381bfe8$var$Field_Cardinality, "google.protobuf.Field.Cardinality", [
    {
        no: 0,
        name: "CARDINALITY_UNKNOWN"
    },
    {
        no: 1,
        name: "CARDINALITY_OPTIONAL"
    },
    {
        no: 2,
        name: "CARDINALITY_REQUIRED"
    },
    {
        no: 3,
        name: "CARDINALITY_REPEATED"
    }
]);
/**
 * Enum type definition.
 *
 * @generated from message google.protobuf.Enum
 */ class $9735d6a46381bfe8$var$Enum extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Enum type name.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        /**
         * Enum value definitions.
         *
         * @generated from field: repeated google.protobuf.EnumValue enumvalue = 2;
         */ this.enumvalue = [];
        /**
         * Protocol buffer options.
         *
         * @generated from field: repeated google.protobuf.Option options = 3;
         */ this.options = [];
        /**
         * The source syntax.
         *
         * @generated from field: google.protobuf.Syntax syntax = 5;
         */ this.syntax = $9735d6a46381bfe8$var$Syntax.PROTO2;
        /**
         * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
         *
         * @generated from field: string edition = 6;
         */ this.edition = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $9735d6a46381bfe8$var$Enum().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $9735d6a46381bfe8$var$Enum().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $9735d6a46381bfe8$var$Enum().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($9735d6a46381bfe8$var$Enum, a, b);
    }
}
module.exports.Enum = $9735d6a46381bfe8$var$Enum;
$9735d6a46381bfe8$var$Enum.runtime = $lfD5g.proto3;
$9735d6a46381bfe8$var$Enum.typeName = "google.protobuf.Enum";
$9735d6a46381bfe8$var$Enum.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "enumvalue",
            kind: "message",
            T: $9735d6a46381bfe8$var$EnumValue,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $9735d6a46381bfe8$var$Option,
            repeated: true
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: $87TC0.SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: $lfD5g.proto3.getEnumType($9735d6a46381bfe8$var$Syntax)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        }
    ]);
/**
 * Enum value definition.
 *
 * @generated from message google.protobuf.EnumValue
 */ class $9735d6a46381bfe8$var$EnumValue extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * Enum value name.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        /**
         * Enum value number.
         *
         * @generated from field: int32 number = 2;
         */ this.number = 0;
        /**
         * Protocol buffer options.
         *
         * @generated from field: repeated google.protobuf.Option options = 3;
         */ this.options = [];
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $9735d6a46381bfe8$var$EnumValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $9735d6a46381bfe8$var$EnumValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $9735d6a46381bfe8$var$EnumValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($9735d6a46381bfe8$var$EnumValue, a, b);
    }
}
module.exports.EnumValue = $9735d6a46381bfe8$var$EnumValue;
$9735d6a46381bfe8$var$EnumValue.runtime = $lfD5g.proto3;
$9735d6a46381bfe8$var$EnumValue.typeName = "google.protobuf.EnumValue";
$9735d6a46381bfe8$var$EnumValue.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5 /* ScalarType.INT32 */ 
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: $9735d6a46381bfe8$var$Option,
            repeated: true
        }
    ]);
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 *
 * @generated from message google.protobuf.Option
 */ class $9735d6a46381bfe8$var$Option extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The option's name. For protobuf built-in options (options defined in
         * descriptor.proto), this is the short name. For example, `"map_entry"`.
         * For custom options, it should be the fully-qualified name. For example,
         * `"google.api.http"`.
         *
         * @generated from field: string name = 1;
         */ this.name = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $9735d6a46381bfe8$var$Option().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $9735d6a46381bfe8$var$Option().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $9735d6a46381bfe8$var$Option().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($9735d6a46381bfe8$var$Option, a, b);
    }
}
module.exports.Option = $9735d6a46381bfe8$var$Option;
$9735d6a46381bfe8$var$Option.runtime = $lfD5g.proto3;
$9735d6a46381bfe8$var$Option.typeName = "google.protobuf.Option";
$9735d6a46381bfe8$var$Option.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: $3FFyr.Any
        }
    ]);

});
parcelRegister("87TC0", function(module, exports) {
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.SourceContext = void 0;

var $cI13w = parcelRequire("cI13w");

var $lfD5g = parcelRequire("lfD5g");
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 *
 * @generated from message google.protobuf.SourceContext
 */ class $5eaa1d93703791af$var$SourceContext extends $cI13w.Message {
    constructor(data){
        super();
        /**
         * The path-qualified name of the .proto file that contained the associated
         * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
         *
         * @generated from field: string file_name = 1;
         */ this.fileName = "";
        $lfD5g.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new $5eaa1d93703791af$var$SourceContext().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $5eaa1d93703791af$var$SourceContext().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $5eaa1d93703791af$var$SourceContext().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return $lfD5g.proto3.util.equals($5eaa1d93703791af$var$SourceContext, a, b);
    }
}
module.exports.SourceContext = $5eaa1d93703791af$var$SourceContext;
$5eaa1d93703791af$var$SourceContext.runtime = $lfD5g.proto3;
$5eaa1d93703791af$var$SourceContext.typeName = "google.protobuf.SourceContext";
$5eaa1d93703791af$var$SourceContext.fields = $lfD5g.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9 /* ScalarType.STRING */ 
        }
    ]);

});



parcelRegister("icUOE", function(module, exports) {


module.exports = (parcelRequire("e4dUR"))((parcelRequire("3sXGE")).resolve("8XkWS")).then(()=>parcelRequire('6ANSA'));

});
parcelRegister("e4dUR", function(module, exports) {
"use strict";

var $bOO7c = parcelRequire("bOO7c");
module.exports = $bOO7c(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

});
parcelRegister("bOO7c", function(module, exports) {
"use strict";
var $89ab3d0ed4d6ca0e$var$cachedBundles = {};
var $89ab3d0ed4d6ca0e$var$cachedPreloads = {};
var $89ab3d0ed4d6ca0e$var$cachedPrefetches = {};
function $89ab3d0ed4d6ca0e$var$getCache(type) {
    switch(type){
        case 'preload':
            return $89ab3d0ed4d6ca0e$var$cachedPreloads;
        case 'prefetch':
            return $89ab3d0ed4d6ca0e$var$cachedPrefetches;
        default:
            return $89ab3d0ed4d6ca0e$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $89ab3d0ed4d6ca0e$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});



parcelRegister("jgT9c", function(module, exports) {


module.exports = (parcelRequire("e4dUR"))((parcelRequire("3sXGE")).resolve("k5eyv")).then(()=>parcelRequire('LPJWl'));

});

var $133e7834168f8f6e$exports = {};


(parcelRequire("3sXGE")).register((parcelRequire("2S9Tk")).getBundleURL('b4YD5'), JSON.parse("[\"b4YD5\",\"dev.js\",\"8XkWS\",\"camelcase-keys.712662ee.js\",\"k5eyv\",\"crypto-browserify.35a83a24.js\"]"));

var $f5dd5d32ad1dfbf2$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $f5dd5d32ad1dfbf2$var$__createBinding = $f5dd5d32ad1dfbf2$exports && $f5dd5d32ad1dfbf2$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $f5dd5d32ad1dfbf2$var$__exportStar = $f5dd5d32ad1dfbf2$exports && $f5dd5d32ad1dfbf2$exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $f5dd5d32ad1dfbf2$var$__createBinding(exports1, m, p);
};
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "__esModule", {
    value: true
});
$f5dd5d32ad1dfbf2$exports.toPlainMessage = $f5dd5d32ad1dfbf2$exports.createRegistryFromDescriptors = $f5dd5d32ad1dfbf2$exports.createRegistry = $f5dd5d32ad1dfbf2$exports.createDescriptorSet = $f5dd5d32ad1dfbf2$exports.BinaryReader = $f5dd5d32ad1dfbf2$exports.BinaryWriter = $f5dd5d32ad1dfbf2$exports.WireType = $f5dd5d32ad1dfbf2$exports.MethodIdempotency = $f5dd5d32ad1dfbf2$exports.MethodKind = $f5dd5d32ad1dfbf2$exports.clearExtension = $f5dd5d32ad1dfbf2$exports.hasExtension = $f5dd5d32ad1dfbf2$exports.setExtension = $f5dd5d32ad1dfbf2$exports.getExtension = $f5dd5d32ad1dfbf2$exports.ScalarType = $f5dd5d32ad1dfbf2$exports.LongType = $f5dd5d32ad1dfbf2$exports.isMessage = $f5dd5d32ad1dfbf2$exports.Message = $f5dd5d32ad1dfbf2$exports.codegenInfo = $f5dd5d32ad1dfbf2$exports.protoDelimited = $f5dd5d32ad1dfbf2$exports.protoBase64 = $f5dd5d32ad1dfbf2$exports.protoInt64 = $f5dd5d32ad1dfbf2$exports.protoDouble = $f5dd5d32ad1dfbf2$exports.proto2 = $f5dd5d32ad1dfbf2$exports.proto3 = void 0;

var $lfD5g = parcelRequire("lfD5g");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "proto3", {
    enumerable: true,
    get: function() {
        return $lfD5g.proto3;
    }
});

var $fGM1a = parcelRequire("fGM1a");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "proto2", {
    enumerable: true,
    get: function() {
        return $fGM1a.proto2;
    }
});
var $efbe89b5f84019ee$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($efbe89b5f84019ee$exports, "__esModule", {
    value: true
});
$efbe89b5f84019ee$exports.protoDouble = void 0;
// Export global Number constants. This is done so that we can safely use
// these global constants when generating code and be assured we're using
// the correct values. We cannot rely on globalThis since we support ES2017
// and globalThis was introduced in ES2020. We also don't want to explicitly
// generate code using, for example, Number.NaN, since this could clash with
// a message name of Number. Instead we can export them here since this will
// be in a different scope as the generated code and we are guaranteed to use
// the intended global values.
$efbe89b5f84019ee$exports.protoDouble = {
    NaN: Number.NaN,
    POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
    NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY
};


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "protoDouble", {
    enumerable: true,
    get: function() {
        return $efbe89b5f84019ee$exports.protoDouble;
    }
});

var $69KOh = parcelRequire("69KOh");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "protoInt64", {
    enumerable: true,
    get: function() {
        return $69KOh.protoInt64;
    }
});

var $6l6X4 = parcelRequire("6l6X4");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "protoBase64", {
    enumerable: true,
    get: function() {
        return $6l6X4.protoBase64;
    }
});
var $c0863b92fa428eb4$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $c0863b92fa428eb4$var$__asyncValues = $c0863b92fa428eb4$exports && $c0863b92fa428eb4$exports.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var $c0863b92fa428eb4$var$__await = $c0863b92fa428eb4$exports && $c0863b92fa428eb4$exports.__await || function(v) {
    return this instanceof $c0863b92fa428eb4$var$__await ? (this.v = v, this) : new $c0863b92fa428eb4$var$__await(v);
};
var $c0863b92fa428eb4$var$__asyncGenerator = $c0863b92fa428eb4$exports && $c0863b92fa428eb4$exports.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $c0863b92fa428eb4$var$__await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
Object.defineProperty($c0863b92fa428eb4$exports, "__esModule", {
    value: true
});
$c0863b92fa428eb4$exports.protoDelimited = void 0;

var $5Q9Y2 = parcelRequire("5Q9Y2");
/**
 * protoDelimited provides functions to serialize and parse size-delimited
 * messages.
 *
 * A size-delimited message is a varint size in bytes, followed by exactly
 * that many bytes of a message serialized with the binary format.
 *
 * This size-delimited format is compatible with other implementations.
 * For details, see https://github.com/protocolbuffers/protobuf/issues/10229
 */ $c0863b92fa428eb4$exports.protoDelimited = {
    /**
     * Serialize a message, prefixing it with its size.
     */ enc (message, options) {
        const opt = message.getType().runtime.bin.makeWriteOptions(options);
        return opt.writerFactory().bytes(message.toBinary(opt)).finish();
    },
    /**
     * Parse a size-delimited message, ignoring extra bytes.
     */ dec (type, bytes, options) {
        const opt = type.runtime.bin.makeReadOptions(options);
        return type.fromBinary(opt.readerFactory(bytes).bytes(), opt);
    },
    /**
     * Parse a stream of size-delimited messages.
     */ decStream (type, iterable) {
        return $c0863b92fa428eb4$var$__asyncGenerator(this, arguments, function* decStream_1() {
            var _a, e_1, _b, _c;
            // append chunk to buffer, returning updated buffer
            function append(buffer, chunk) {
                const n = new Uint8Array(buffer.byteLength + chunk.byteLength);
                n.set(buffer);
                n.set(chunk, buffer.length);
                return n;
            }
            let buffer = new Uint8Array(0);
            try {
                for(var _d = true, iterable_1 = $c0863b92fa428eb4$var$__asyncValues(iterable), iterable_1_1; iterable_1_1 = yield $c0863b92fa428eb4$var$__await(iterable_1.next()), _a = iterable_1_1.done, !_a; _d = true){
                    _c = iterable_1_1.value;
                    _d = false;
                    const chunk = _c;
                    buffer = append(buffer, chunk);
                    for(;;){
                        const size = $c0863b92fa428eb4$exports.protoDelimited.peekSize(buffer);
                        if (size.eof) break;
                        if (size.offset + size.size > buffer.byteLength) break;
                        yield yield $c0863b92fa428eb4$var$__await($c0863b92fa428eb4$exports.protoDelimited.dec(type, buffer));
                        buffer = buffer.subarray(size.offset + size.size);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_1.return)) yield $c0863b92fa428eb4$var$__await(_b.call(iterable_1));
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (buffer.byteLength > 0) throw new Error("incomplete data");
        });
    },
    /**
     * Decodes the size from the given size-delimited message, which may be
     * incomplete.
     *
     * Returns an object with the following properties:
     * - size: The size of the delimited message in bytes
     * - offset: The offset in the given byte array where the message starts
     * - eof: true
     *
     * If the size-delimited data does not include all bytes of the varint size,
     * the following object is returned:
     * - size: null
     * - offset: null
     * - eof: false
     *
     * This function can be used to implement parsing of size-delimited messages
     * from a stream.
     */ peekSize (data) {
        const sizeEof = {
            eof: true,
            size: null,
            offset: null
        };
        for(let i = 0; i < 10; i++){
            if (i > data.byteLength) return sizeEof;
            if ((data[i] & 0x80) == 0) {
                const reader = new $5Q9Y2.BinaryReader(data);
                let size;
                try {
                    size = reader.uint32();
                } catch (e) {
                    if (e instanceof RangeError) return sizeEof;
                    throw e;
                }
                return {
                    eof: false,
                    size: size,
                    offset: reader.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "protoDelimited", {
    enumerable: true,
    get: function() {
        return $c0863b92fa428eb4$exports.protoDelimited;
    }
});
var $2927ac78ff890e5c$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($2927ac78ff890e5c$exports, "__esModule", {
    value: true
});
$2927ac78ff890e5c$exports.codegenInfo = void 0;

var $l1i7B = parcelRequire("l1i7B");

var $fH27Q = parcelRequire("fH27Q");

var $40ouL = parcelRequire("40ouL");
var $c1dce67616c7b763$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($c1dce67616c7b763$exports, "__esModule", {
    value: true
});
$c1dce67616c7b763$exports.reifyWkt = void 0;

var $7RwvC = parcelRequire("7RwvC");
/**
 * @deprecated please use reifyWkt from @bufbuild/protoplugin/ecmascript instead
 *
 * Reifies a given DescMessage into a more concrete object representing its
 * respective well-known type.  The returned object will contain properties
 * representing the WKT's defined fields.
 *
 * Useful during code generation when immediate access to a particular field
 * is needed without having to search the object's typename and DescField list.
 *
 * Returns undefined if the WKT cannot be completely constructed via the
 * DescMessage.
 */ function $c1dce67616c7b763$var$reifyWkt(message) {
    switch(message.typeName){
        case "google.protobuf.Any":
            {
                const typeUrl = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.STRING);
                const value = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.BYTES);
                if (typeUrl && value) return {
                    typeName: message.typeName,
                    typeUrl: typeUrl,
                    value: value
                };
                break;
            }
        case "google.protobuf.Timestamp":
            {
                const seconds = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.INT64);
                const nanos = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.INT32);
                if (seconds && nanos) return {
                    typeName: message.typeName,
                    seconds: seconds,
                    nanos: nanos
                };
                break;
            }
        case "google.protobuf.Duration":
            {
                const seconds = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.INT64);
                const nanos = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.INT32);
                if (seconds && nanos) return {
                    typeName: message.typeName,
                    seconds: seconds,
                    nanos: nanos
                };
                break;
            }
        case "google.protobuf.Struct":
            {
                const fields = message.fields.find((f)=>f.number == 1 && !f.repeated);
                if ((fields === null || fields === void 0 ? void 0 : fields.fieldKind) !== "map" || fields.mapValue.kind !== "message" || fields.mapValue.message.typeName !== "google.protobuf.Value") break;
                return {
                    typeName: message.typeName,
                    fields: fields
                };
            }
        case "google.protobuf.Value":
            {
                const kind = message.oneofs.find((o)=>o.name === "kind");
                const nullValue = message.fields.find((f)=>f.number == 1 && f.oneof === kind);
                if ((nullValue === null || nullValue === void 0 ? void 0 : nullValue.fieldKind) !== "enum" || nullValue.enum.typeName !== "google.protobuf.NullValue") return undefined;
                const numberValue = message.fields.find((f)=>f.number == 2 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.DOUBLE && f.oneof === kind);
                const stringValue = message.fields.find((f)=>f.number == 3 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.STRING && f.oneof === kind);
                const boolValue = message.fields.find((f)=>f.number == 4 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.BOOL && f.oneof === kind);
                const structValue = message.fields.find((f)=>f.number == 5 && f.oneof === kind);
                if ((structValue === null || structValue === void 0 ? void 0 : structValue.fieldKind) !== "message" || structValue.message.typeName !== "google.protobuf.Struct") return undefined;
                const listValue = message.fields.find((f)=>f.number == 6 && f.oneof === kind);
                if ((listValue === null || listValue === void 0 ? void 0 : listValue.fieldKind) !== "message" || listValue.message.typeName !== "google.protobuf.ListValue") return undefined;
                if (kind && numberValue && stringValue && boolValue) return {
                    typeName: message.typeName,
                    kind: kind,
                    nullValue: nullValue,
                    numberValue: numberValue,
                    stringValue: stringValue,
                    boolValue: boolValue,
                    structValue: structValue,
                    listValue: listValue
                };
                break;
            }
        case "google.protobuf.ListValue":
            {
                const values = message.fields.find((f)=>f.number == 1 && f.repeated);
                if ((values === null || values === void 0 ? void 0 : values.fieldKind) != "message" || values.message.typeName !== "google.protobuf.Value") break;
                return {
                    typeName: message.typeName,
                    values: values
                };
            }
        case "google.protobuf.FieldMask":
            {
                const paths = message.fields.find((f)=>f.number == 1 && f.fieldKind == "scalar" && f.scalar === $7RwvC.ScalarType.STRING && f.repeated);
                if (paths) return {
                    typeName: message.typeName,
                    paths: paths
                };
                break;
            }
        case "google.protobuf.DoubleValue":
        case "google.protobuf.FloatValue":
        case "google.protobuf.Int64Value":
        case "google.protobuf.UInt64Value":
        case "google.protobuf.Int32Value":
        case "google.protobuf.UInt32Value":
        case "google.protobuf.BoolValue":
        case "google.protobuf.StringValue":
        case "google.protobuf.BytesValue":
            {
                const value = message.fields.find((f)=>f.number == 1 && f.name == "value");
                if (!value) break;
                if (value.fieldKind !== "scalar") break;
                return {
                    typeName: message.typeName,
                    value: value
                };
            }
    }
    return undefined;
}
$c1dce67616c7b763$exports.reifyWkt = $c1dce67616c7b763$var$reifyWkt;


const $2927ac78ff890e5c$var$packageName = "@bufbuild/protobuf";
$2927ac78ff890e5c$exports.codegenInfo = {
    packageName: "@bufbuild/protobuf",
    localName: $l1i7B.localName,
    reifyWkt: $c1dce67616c7b763$exports.reifyWkt,
    getUnwrappedFieldType: $fH27Q.getUnwrappedFieldType,
    scalarDefaultValue: $40ouL.scalarZeroValue,
    scalarZeroValue: $40ouL.scalarZeroValue,
    safeIdentifier: $l1i7B.safeIdentifier,
    safeObjectProperty: $l1i7B.safeObjectProperty,
    // prettier-ignore
    symbols: {
        proto2: {
            typeOnly: false,
            privateImportPath: "./proto2.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        proto3: {
            typeOnly: false,
            privateImportPath: "./proto3.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        Message: {
            typeOnly: false,
            privateImportPath: "./message.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        PartialMessage: {
            typeOnly: true,
            privateImportPath: "./message.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        PlainMessage: {
            typeOnly: true,
            privateImportPath: "./message.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        FieldList: {
            typeOnly: true,
            privateImportPath: "./field-list.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        MessageType: {
            typeOnly: true,
            privateImportPath: "./message-type.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        Extension: {
            typeOnly: true,
            privateImportPath: "./extension.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        BinaryReadOptions: {
            typeOnly: true,
            privateImportPath: "./binary-format.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        BinaryWriteOptions: {
            typeOnly: true,
            privateImportPath: "./binary-format.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        JsonReadOptions: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        JsonWriteOptions: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        JsonValue: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        JsonObject: {
            typeOnly: true,
            privateImportPath: "./json-format.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        protoDouble: {
            typeOnly: false,
            privateImportPath: "./proto-double.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        protoInt64: {
            typeOnly: false,
            privateImportPath: "./proto-int64.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        ScalarType: {
            typeOnly: false,
            privateImportPath: "./scalar.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        LongType: {
            typeOnly: false,
            privateImportPath: "./scalar.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        MethodKind: {
            typeOnly: false,
            privateImportPath: "./service-type.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        MethodIdempotency: {
            typeOnly: false,
            privateImportPath: "./service-type.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        },
        IMessageTypeRegistry: {
            typeOnly: true,
            privateImportPath: "./type-registry.js",
            publicImportPath: $2927ac78ff890e5c$var$packageName
        }
    },
    wktSourceFiles: [
        "google/protobuf/compiler/plugin.proto",
        "google/protobuf/any.proto",
        "google/protobuf/api.proto",
        "google/protobuf/descriptor.proto",
        "google/protobuf/duration.proto",
        "google/protobuf/empty.proto",
        "google/protobuf/field_mask.proto",
        "google/protobuf/source_context.proto",
        "google/protobuf/struct.proto",
        "google/protobuf/timestamp.proto",
        "google/protobuf/type.proto",
        "google/protobuf/wrappers.proto"
    ]
};


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "codegenInfo", {
    enumerable: true,
    get: function() {
        return $2927ac78ff890e5c$exports.codegenInfo;
    }
});

var $cI13w = parcelRequire("cI13w");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "Message", {
    enumerable: true,
    get: function() {
        return $cI13w.Message;
    }
});

var $jzsFs = parcelRequire("jzsFs");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "isMessage", {
    enumerable: true,
    get: function() {
        return $jzsFs.isMessage;
    }
});

var $7RwvC = parcelRequire("7RwvC");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "LongType", {
    enumerable: true,
    get: function() {
        return $7RwvC.LongType;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "ScalarType", {
    enumerable: true,
    get: function() {
        return $7RwvC.ScalarType;
    }
});

var $c7rw1 = parcelRequire("c7rw1");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "getExtension", {
    enumerable: true,
    get: function() {
        return $c7rw1.getExtension;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "setExtension", {
    enumerable: true,
    get: function() {
        return $c7rw1.setExtension;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "hasExtension", {
    enumerable: true,
    get: function() {
        return $c7rw1.hasExtension;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "clearExtension", {
    enumerable: true,
    get: function() {
        return $c7rw1.clearExtension;
    }
});
var $8e95767370c23bb6$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($8e95767370c23bb6$exports, "__esModule", {
    value: true
});
$8e95767370c23bb6$exports.MethodIdempotency = $8e95767370c23bb6$exports.MethodKind = void 0;
/**
 * MethodKind represents the four method types that can be declared in
 * protobuf with the `stream` keyword:
 *
 * 1. Unary:           rpc (Input) returns (Output)
 * 2. ServerStreaming: rpc (Input) returns (stream Output)
 * 3. ClientStreaming: rpc (stream Input) returns (Output)
 * 4. BiDiStreaming:   rpc (stream Input) returns (stream Output)
 */ var $8e95767370c23bb6$var$MethodKind;
(function(MethodKind) {
    MethodKind[MethodKind["Unary"] = 0] = "Unary";
    MethodKind[MethodKind["ServerStreaming"] = 1] = "ServerStreaming";
    MethodKind[MethodKind["ClientStreaming"] = 2] = "ClientStreaming";
    MethodKind[MethodKind["BiDiStreaming"] = 3] = "BiDiStreaming";
})($8e95767370c23bb6$var$MethodKind || ($8e95767370c23bb6$exports.MethodKind = $8e95767370c23bb6$var$MethodKind = {}));
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or just
 * idempotent, or neither? HTTP based RPC implementation may choose GET verb
 * for safe methods, and PUT verb for idempotent methods instead of the
 * default POST.
 *
 * This enum matches the protobuf enum google.protobuf.MethodOptions.IdempotencyLevel,
 * defined in the well-known type google/protobuf/descriptor.proto, but
 * drops UNKNOWN.
 */ var $8e95767370c23bb6$var$MethodIdempotency;
(function(MethodIdempotency) {
    /**
     * Idempotent, no side effects.
     */ MethodIdempotency[MethodIdempotency["NoSideEffects"] = 1] = "NoSideEffects";
    /**
     * Idempotent, but may have side effects.
     */ MethodIdempotency[MethodIdempotency["Idempotent"] = 2] = "Idempotent";
})($8e95767370c23bb6$var$MethodIdempotency || ($8e95767370c23bb6$exports.MethodIdempotency = $8e95767370c23bb6$var$MethodIdempotency = {}));


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "MethodKind", {
    enumerable: true,
    get: function() {
        return $8e95767370c23bb6$exports.MethodKind;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "MethodIdempotency", {
    enumerable: true,
    get: function() {
        return $8e95767370c23bb6$exports.MethodIdempotency;
    }
});

var $5Q9Y2 = parcelRequire("5Q9Y2");
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "WireType", {
    enumerable: true,
    get: function() {
        return $5Q9Y2.WireType;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "BinaryWriter", {
    enumerable: true,
    get: function() {
        return $5Q9Y2.BinaryWriter;
    }
});
Object.defineProperty($f5dd5d32ad1dfbf2$exports, "BinaryReader", {
    enumerable: true,
    get: function() {
        return $5Q9Y2.BinaryReader;
    }
});
var $e76902458ced2cda$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($e76902458ced2cda$exports, "__esModule", {
    value: true
});
$e76902458ced2cda$exports.createDescriptorSet = void 0;

var $1NDXH = parcelRequire("1NDXH");

var $7UhPF = parcelRequire("7UhPF");


var $l1i7B = parcelRequire("l1i7B");
var $6141b88185bcf264$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($6141b88185bcf264$exports, "__esModule", {
    value: true
});
$6141b88185bcf264$exports.parseTextFormatScalarValue = $6141b88185bcf264$exports.parseTextFormatEnumValue = void 0;

var $7UhPF = parcelRequire("7UhPF");

var $69KOh = parcelRequire("69KOh");

var $7RwvC = parcelRequire("7RwvC");
function $6141b88185bcf264$var$parseTextFormatEnumValue(descEnum, value) {
    const enumValue = descEnum.values.find((v)=>v.name === value);
    (0, $7UhPF.assert)(enumValue, `cannot parse ${descEnum.name} default value: ${value}`);
    return enumValue.number;
}
$6141b88185bcf264$exports.parseTextFormatEnumValue = $6141b88185bcf264$var$parseTextFormatEnumValue;
function $6141b88185bcf264$var$parseTextFormatScalarValue(type, value) {
    switch(type){
        case $7RwvC.ScalarType.STRING:
            return value;
        case $7RwvC.ScalarType.BYTES:
            {
                const u = $6141b88185bcf264$var$unescapeBytesDefaultValue(value);
                if (u === false) throw new Error(`cannot parse ${$7RwvC.ScalarType[type]} default value: ${value}`);
                return u;
            }
        case $7RwvC.ScalarType.INT64:
        case $7RwvC.ScalarType.SFIXED64:
        case $7RwvC.ScalarType.SINT64:
            return $69KOh.protoInt64.parse(value);
        case $7RwvC.ScalarType.UINT64:
        case $7RwvC.ScalarType.FIXED64:
            return $69KOh.protoInt64.uParse(value);
        case $7RwvC.ScalarType.DOUBLE:
        case $7RwvC.ScalarType.FLOAT:
            switch(value){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(value);
            }
        case $7RwvC.ScalarType.BOOL:
            return value === "true";
        case $7RwvC.ScalarType.INT32:
        case $7RwvC.ScalarType.UINT32:
        case $7RwvC.ScalarType.SINT32:
        case $7RwvC.ScalarType.FIXED32:
        case $7RwvC.ScalarType.SFIXED32:
            return parseInt(value, 10);
    }
}
$6141b88185bcf264$exports.parseTextFormatScalarValue = $6141b88185bcf264$var$parseTextFormatScalarValue;
/**
 * Parses a text-encoded default value (proto2) of a BYTES field.
 */ function $6141b88185bcf264$var$unescapeBytesDefaultValue(str) {
    const b = [];
    const input = {
        tail: str,
        c: "",
        next () {
            if (this.tail.length == 0) return false;
            this.c = this.tail[0];
            this.tail = this.tail.substring(1);
            return true;
        },
        take (n) {
            if (this.tail.length >= n) {
                const r = this.tail.substring(0, n);
                this.tail = this.tail.substring(n);
                return r;
            }
            return false;
        }
    };
    while(input.next())switch(input.c){
        case "\\":
            if (input.next()) switch(input.c){
                case "\\":
                    b.push(input.c.charCodeAt(0));
                    break;
                case "b":
                    b.push(0x08);
                    break;
                case "f":
                    b.push(0x0c);
                    break;
                case "n":
                    b.push(0x0a);
                    break;
                case "r":
                    b.push(0x0d);
                    break;
                case "t":
                    b.push(0x09);
                    break;
                case "v":
                    b.push(0x0b);
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                    {
                        const s = input.c;
                        const t = input.take(2);
                        if (t === false) return false;
                        const n = parseInt(s + t, 8);
                        if (isNaN(n)) return false;
                        b.push(n);
                        break;
                    }
                case "x":
                    {
                        const s = input.c;
                        const t = input.take(2);
                        if (t === false) return false;
                        const n = parseInt(s + t, 16);
                        if (isNaN(n)) return false;
                        b.push(n);
                        break;
                    }
                case "u":
                    {
                        const s = input.c;
                        const t = input.take(4);
                        if (t === false) return false;
                        const n = parseInt(s + t, 16);
                        if (isNaN(n)) return false;
                        const chunk = new Uint8Array(4);
                        const view = new DataView(chunk.buffer);
                        view.setInt32(0, n, true);
                        b.push(chunk[0], chunk[1], chunk[2], chunk[3]);
                        break;
                    }
                case "U":
                    {
                        const s = input.c;
                        const t = input.take(8);
                        if (t === false) return false;
                        const tc = $69KOh.protoInt64.uEnc(s + t);
                        const chunk = new Uint8Array(8);
                        const view = new DataView(chunk.buffer);
                        view.setInt32(0, tc.lo, true);
                        view.setInt32(4, tc.hi, true);
                        b.push(chunk[0], chunk[1], chunk[2], chunk[3], chunk[4], chunk[5], chunk[6], chunk[7]);
                        break;
                    }
            }
            break;
        default:
            b.push(input.c.charCodeAt(0));
    }
    return new Uint8Array(b);
}


var $f1ea3fe18ba8db26$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($f1ea3fe18ba8db26$exports, "__esModule", {
    value: true
});
$f1ea3fe18ba8db26$exports.createFeatureResolver = void 0;

var $1NDXH = parcelRequire("1NDXH");

var $6l6X4 = parcelRequire("6l6X4");
/**
 * Return the edition feature defaults supported by @bufbuild/protobuf.
 */ function $f1ea3fe18ba8db26$var$getFeatureSetDefaults(options) {
    return $1NDXH.FeatureSetDefaults.fromBinary($6l6X4.protoBase64.dec(/*upstream-inject-feature-defaults-start*/ "ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH" /*upstream-inject-feature-defaults-end*/ ), options);
}
/**
 * Create an edition feature resolver with the given feature set defaults, or
 * the feature set defaults supported by @bufbuild/protobuf.
 */ function $f1ea3fe18ba8db26$var$createFeatureResolver(edition, compiledFeatureSetDefaults, serializationOptions) {
    var _a;
    const fds = compiledFeatureSetDefaults !== null && compiledFeatureSetDefaults !== void 0 ? compiledFeatureSetDefaults : $f1ea3fe18ba8db26$var$getFeatureSetDefaults(serializationOptions);
    const min = fds.minimumEdition;
    const max = fds.maximumEdition;
    if (min === undefined || max === undefined || fds.defaults.some((d)=>d.edition === undefined)) throw new Error("Invalid FeatureSetDefaults");
    if (edition < min) throw new Error(`Edition ${$1NDXH.Edition[edition]} is earlier than the minimum supported edition ${$1NDXH.Edition[min]}`);
    if (max < edition) throw new Error(`Edition ${$1NDXH.Edition[edition]} is later than the maximum supported edition ${$1NDXH.Edition[max]}`);
    let highestMatch = undefined;
    for (const c of fds.defaults){
        const e = (_a = c.edition) !== null && _a !== void 0 ? _a : 0;
        if (e > edition) continue;
        if (highestMatch !== undefined && highestMatch.e > e) continue;
        let f;
        if (c.fixedFeatures && c.overridableFeatures) {
            f = c.fixedFeatures;
            f.fromBinary(c.overridableFeatures.toBinary());
        } else if (c.fixedFeatures) f = c.fixedFeatures;
        else if (c.overridableFeatures) f = c.overridableFeatures;
        else f = new $1NDXH.FeatureSet();
        highestMatch = {
            e: e,
            f: f
        };
    }
    if (highestMatch === undefined) throw new Error(`No valid default found for edition ${$1NDXH.Edition[edition]}`);
    const featureSetBin = highestMatch.f.toBinary(serializationOptions);
    return (...rest)=>{
        const f = $1NDXH.FeatureSet.fromBinary(featureSetBin, serializationOptions);
        for (const c of rest)if (c !== undefined) f.fromBinary(c.toBinary(serializationOptions), serializationOptions);
        if (!$f1ea3fe18ba8db26$var$validateMergedFeatures(f)) throw new Error(`Invalid FeatureSet for edition ${$1NDXH.Edition[edition]}`);
        return f;
    };
}
$f1ea3fe18ba8db26$exports.createFeatureResolver = $f1ea3fe18ba8db26$var$createFeatureResolver;
// When protoc generates google.protobuf.FeatureSetDefaults, it ensures that
// fields are not repeated or required, do not use oneof, and have a default
// value.
//
// When features for an element are resolved, features of the element and its
// parents are merged into the default FeatureSet for the edition. Because unset
// fields in the FeatureSet of an element do not unset the default FeatureSet
// values, a resolved FeatureSet is guaranteed to have all fields set. This is
// also the case for extensions to FeatureSet that a user might provide, and for
// features from the future.
//
// We cannot exhaustively validate correctness of FeatureSetDefaults at runtime
// without knowing the schema: If no value for a feature is provided, we do not
// know that it exists at all.
//
// As a sanity check, we validate that all fields known to our version of
// FeatureSet are set.
function $f1ea3fe18ba8db26$var$validateMergedFeatures(featureSet) {
    for (const fi of $1NDXH.FeatureSet.fields.list()){
        const v = featureSet[fi.localName];
        if (v === undefined) return false;
        if (fi.kind == "enum" && v === 0) return false;
    }
    return true;
}



var $7RwvC = parcelRequire("7RwvC");

var $jzsFs = parcelRequire("jzsFs");
/**
 * Create a DescriptorSet, a convenient interface for working with a set of
 * google.protobuf.FileDescriptorProto.
 *
 * Note that files must be given in topological order, so each file appears
 * before any file that imports it. Protocol buffer compilers always produce
 * files in topological order.
 */ function $e76902458ced2cda$var$createDescriptorSet(input, options) {
    var _a;
    const cart = {
        files: [],
        enums: new Map(),
        messages: new Map(),
        services: new Map(),
        extensions: new Map(),
        mapEntries: new Map()
    };
    const fileDescriptors = (0, $jzsFs.isMessage)(input, $1NDXH.FileDescriptorSet) ? input.file : input instanceof Uint8Array ? $1NDXH.FileDescriptorSet.fromBinary(input).file : input;
    const resolverByEdition = new Map();
    for (const proto of fileDescriptors){
        const edition = (_a = proto.edition) !== null && _a !== void 0 ? _a : $e76902458ced2cda$var$parseFileSyntax(proto.syntax, proto.edition).edition;
        let resolveFeatures = resolverByEdition.get(edition);
        if (resolveFeatures === undefined) {
            resolveFeatures = (0, $f1ea3fe18ba8db26$exports.createFeatureResolver)(edition, options === null || options === void 0 ? void 0 : options.featureSetDefaults, options === null || options === void 0 ? void 0 : options.serializationOptions);
            resolverByEdition.set(edition, resolveFeatures);
        }
        $e76902458ced2cda$var$addFile(proto, cart, resolveFeatures);
    }
    return cart;
}
$e76902458ced2cda$exports.createDescriptorSet = $e76902458ced2cda$var$createDescriptorSet;
/**
 * Create a descriptor for a file.
 */ function $e76902458ced2cda$var$addFile(proto, cart, resolveFeatures) {
    var _a, _b;
    (0, $7UhPF.assert)(proto.name, `invalid FileDescriptorProto: missing name`);
    const file = Object.assign(Object.assign({
        kind: "file",
        proto: proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false
    }, $e76902458ced2cda$var$parseFileSyntax(proto.syntax, proto.edition)), {
        name: proto.name.replace(/\.proto/, ""),
        dependencies: $e76902458ced2cda$var$findFileDependencies(proto, cart),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString () {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- we asserted above
            return `file ${this.proto.name}`;
        },
        getSyntaxComments () {
            return $e76902458ced2cda$var$findComments(this.proto.sourceCodeInfo, [
                $e76902458ced2cda$var$FieldNumber.FileDescriptorProto_Syntax
            ]);
        },
        getPackageComments () {
            return $e76902458ced2cda$var$findComments(this.proto.sourceCodeInfo, [
                $e76902458ced2cda$var$FieldNumber.FileDescriptorProto_Package
            ]);
        },
        getFeatures () {
            var _a;
            return resolveFeatures((_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        }
    });
    cart.mapEntries.clear(); // map entries are local to the file, we can safely discard
    for (const enumProto of proto.enumType)$e76902458ced2cda$var$addEnum(enumProto, file, undefined, cart, resolveFeatures);
    for (const messageProto of proto.messageType)$e76902458ced2cda$var$addMessage(messageProto, file, undefined, cart, resolveFeatures);
    for (const serviceProto of proto.service)$e76902458ced2cda$var$addService(serviceProto, file, cart, resolveFeatures);
    $e76902458ced2cda$var$addExtensions(file, cart, resolveFeatures);
    for (const mapEntry of cart.mapEntries.values())$e76902458ced2cda$var$addFields(mapEntry, cart, resolveFeatures);
    for (const message of file.messages){
        $e76902458ced2cda$var$addFields(message, cart, resolveFeatures);
        $e76902458ced2cda$var$addExtensions(message, cart, resolveFeatures);
    }
    cart.mapEntries.clear(); // map entries are local to the file, we can safely discard
    cart.files.push(file);
}
/**
 * Create descriptors for extensions, and add them to the message / file,
 * and to our cart.
 * Recurses into nested types.
 */ function $e76902458ced2cda$var$addExtensions(desc, cart, resolveFeatures) {
    switch(desc.kind){
        case "file":
            for (const proto of desc.proto.extension){
                const ext = $e76902458ced2cda$var$newExtension(proto, desc, undefined, cart, resolveFeatures);
                desc.extensions.push(ext);
                cart.extensions.set(ext.typeName, ext);
            }
            break;
        case "message":
            for (const proto of desc.proto.extension){
                const ext = $e76902458ced2cda$var$newExtension(proto, desc.file, desc, cart, resolveFeatures);
                desc.nestedExtensions.push(ext);
                cart.extensions.set(ext.typeName, ext);
            }
            for (const message of desc.nestedMessages)$e76902458ced2cda$var$addExtensions(message, cart, resolveFeatures);
            break;
    }
}
/**
 * Create descriptors for fields and oneof groups, and add them to the message.
 * Recurses into nested types.
 */ function $e76902458ced2cda$var$addFields(message, cart, resolveFeatures) {
    const allOneofs = message.proto.oneofDecl.map((proto)=>$e76902458ced2cda$var$newOneof(proto, message, resolveFeatures));
    const oneofsSeen = new Set();
    for (const proto of message.proto.field){
        const oneof = $e76902458ced2cda$var$findOneof(proto, allOneofs);
        const field = $e76902458ced2cda$var$newField(proto, message.file, message, oneof, cart, resolveFeatures);
        message.fields.push(field);
        if (oneof === undefined) message.members.push(field);
        else {
            oneof.fields.push(field);
            if (!oneofsSeen.has(oneof)) {
                oneofsSeen.add(oneof);
                message.members.push(oneof);
            }
        }
    }
    for (const oneof of allOneofs.filter((o)=>oneofsSeen.has(o)))message.oneofs.push(oneof);
    for (const child of message.nestedMessages)$e76902458ced2cda$var$addFields(child, cart, resolveFeatures);
}
/**
 * Create a descriptor for an enumeration, and add it our cart and to the
 * parent type, if any.
 */ function $e76902458ced2cda$var$addEnum(proto, file, parent, cart, resolveFeatures) {
    var _a, _b, _c;
    (0, $7UhPF.assert)(proto.name, `invalid EnumDescriptorProto: missing name`);
    const desc = {
        kind: "enum",
        proto: proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        file: file,
        parent: parent,
        name: proto.name,
        typeName: $e76902458ced2cda$var$makeTypeName(proto, parent, file),
        values: [],
        sharedPrefix: (0, $l1i7B.findEnumSharedPrefix)(proto.name, proto.value.map((v)=>{
            var _a;
            return (_a = v.name) !== null && _a !== void 0 ? _a : "";
        })),
        toString () {
            return `enum ${this.typeName}`;
        },
        getComments () {
            const path = this.parent ? [
                ...this.parent.getComments().sourcePath,
                $e76902458ced2cda$var$FieldNumber.DescriptorProto_EnumType,
                this.parent.proto.enumType.indexOf(this.proto)
            ] : [
                $e76902458ced2cda$var$FieldNumber.FileDescriptorProto_EnumType,
                this.file.proto.enumType.indexOf(this.proto)
            ];
            return $e76902458ced2cda$var$findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a, _b;
            return resolveFeatures((_a = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _a !== void 0 ? _a : file.getFeatures(), (_b = proto.options) === null || _b === void 0 ? void 0 : _b.features);
        }
    };
    cart.enums.set(desc.typeName, desc);
    proto.value.forEach((proto)=>{
        var _a, _b;
        (0, $7UhPF.assert)(proto.name, `invalid EnumValueDescriptorProto: missing name`);
        (0, $7UhPF.assert)(proto.number !== undefined, `invalid EnumValueDescriptorProto: missing number`);
        desc.values.push({
            kind: "enum_value",
            proto: proto,
            deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
            parent: desc,
            name: proto.name,
            number: proto.number,
            toString () {
                return `enum value ${desc.typeName}.${this.name}`;
            },
            declarationString () {
                var _a;
                let str = `${this.name} = ${this.number}`;
                if (((_a = this.proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) === true) str += " [deprecated = true]";
                return str;
            },
            getComments () {
                const path = [
                    ...this.parent.getComments().sourcePath,
                    $e76902458ced2cda$var$FieldNumber.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto)
                ];
                return $e76902458ced2cda$var$findComments(file.proto.sourceCodeInfo, path);
            },
            getFeatures () {
                var _a;
                return resolveFeatures(desc.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
            }
        });
    });
    ((_c = parent === null || parent === void 0 ? void 0 : parent.nestedEnums) !== null && _c !== void 0 ? _c : file.enums).push(desc);
}
/**
 * Create a descriptor for a message, including nested types, and add it to our
 * cart. Note that this does not create descriptors fields.
 */ function $e76902458ced2cda$var$addMessage(proto, file, parent, cart, resolveFeatures) {
    var _a, _b, _c, _d;
    (0, $7UhPF.assert)(proto.name, `invalid DescriptorProto: missing name`);
    const desc = {
        kind: "message",
        proto: proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        file: file,
        parent: parent,
        name: proto.name,
        typeName: $e76902458ced2cda$var$makeTypeName(proto, parent, file),
        fields: [],
        oneofs: [],
        members: [],
        nestedEnums: [],
        nestedMessages: [],
        nestedExtensions: [],
        toString () {
            return `message ${this.typeName}`;
        },
        getComments () {
            const path = this.parent ? [
                ...this.parent.getComments().sourcePath,
                $e76902458ced2cda$var$FieldNumber.DescriptorProto_NestedType,
                this.parent.proto.nestedType.indexOf(this.proto)
            ] : [
                $e76902458ced2cda$var$FieldNumber.FileDescriptorProto_MessageType,
                this.file.proto.messageType.indexOf(this.proto)
            ];
            return $e76902458ced2cda$var$findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a, _b;
            return resolveFeatures((_a = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _a !== void 0 ? _a : file.getFeatures(), (_b = proto.options) === null || _b === void 0 ? void 0 : _b.features);
        }
    };
    if (((_c = proto.options) === null || _c === void 0 ? void 0 : _c.mapEntry) === true) cart.mapEntries.set(desc.typeName, desc);
    else {
        ((_d = parent === null || parent === void 0 ? void 0 : parent.nestedMessages) !== null && _d !== void 0 ? _d : file.messages).push(desc);
        cart.messages.set(desc.typeName, desc);
    }
    for (const enumProto of proto.enumType)$e76902458ced2cda$var$addEnum(enumProto, file, desc, cart, resolveFeatures);
    for (const messageProto of proto.nestedType)$e76902458ced2cda$var$addMessage(messageProto, file, desc, cart, resolveFeatures);
}
/**
 * Create a descriptor for a service, including methods, and add it to our
 * cart.
 */ function $e76902458ced2cda$var$addService(proto, file, cart, resolveFeatures) {
    var _a, _b;
    (0, $7UhPF.assert)(proto.name, `invalid ServiceDescriptorProto: missing name`);
    const desc = {
        kind: "service",
        proto: proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        file: file,
        name: proto.name,
        typeName: $e76902458ced2cda$var$makeTypeName(proto, undefined, file),
        methods: [],
        toString () {
            return `service ${this.typeName}`;
        },
        getComments () {
            const path = [
                $e76902458ced2cda$var$FieldNumber.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto)
            ];
            return $e76902458ced2cda$var$findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a;
            return resolveFeatures(file.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        }
    };
    file.services.push(desc);
    cart.services.set(desc.typeName, desc);
    for (const methodProto of proto.method)desc.methods.push($e76902458ced2cda$var$newMethod(methodProto, desc, cart, resolveFeatures));
}
/**
 * Create a descriptor for a method.
 */ function $e76902458ced2cda$var$newMethod(proto, parent, cart, resolveFeatures) {
    var _a, _b, _c;
    (0, $7UhPF.assert)(proto.name, `invalid MethodDescriptorProto: missing name`);
    (0, $7UhPF.assert)(proto.inputType, `invalid MethodDescriptorProto: missing input_type`);
    (0, $7UhPF.assert)(proto.outputType, `invalid MethodDescriptorProto: missing output_type`);
    let methodKind;
    if (proto.clientStreaming === true && proto.serverStreaming === true) methodKind = $8e95767370c23bb6$exports.MethodKind.BiDiStreaming;
    else if (proto.clientStreaming === true) methodKind = $8e95767370c23bb6$exports.MethodKind.ClientStreaming;
    else if (proto.serverStreaming === true) methodKind = $8e95767370c23bb6$exports.MethodKind.ServerStreaming;
    else methodKind = $8e95767370c23bb6$exports.MethodKind.Unary;
    let idempotency;
    switch((_a = proto.options) === null || _a === void 0 ? void 0 : _a.idempotencyLevel){
        case $1NDXH.MethodOptions_IdempotencyLevel.IDEMPOTENT:
            idempotency = $8e95767370c23bb6$exports.MethodIdempotency.Idempotent;
            break;
        case $1NDXH.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            idempotency = $8e95767370c23bb6$exports.MethodIdempotency.NoSideEffects;
            break;
        case $1NDXH.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case undefined:
            idempotency = undefined;
            break;
    }
    const input = cart.messages.get($e76902458ced2cda$var$trimLeadingDot(proto.inputType));
    const output = cart.messages.get($e76902458ced2cda$var$trimLeadingDot(proto.outputType));
    (0, $7UhPF.assert)(input, `invalid MethodDescriptorProto: input_type ${proto.inputType} not found`);
    (0, $7UhPF.assert)(output, `invalid MethodDescriptorProto: output_type ${proto.inputType} not found`);
    const name = proto.name;
    return {
        kind: "rpc",
        proto: proto,
        deprecated: (_c = (_b = proto.options) === null || _b === void 0 ? void 0 : _b.deprecated) !== null && _c !== void 0 ? _c : false,
        parent: parent,
        name: name,
        methodKind: methodKind,
        input: input,
        output: output,
        idempotency: idempotency,
        toString () {
            return `rpc ${parent.typeName}.${name}`;
        },
        getComments () {
            const path = [
                ...this.parent.getComments().sourcePath,
                $e76902458ced2cda$var$FieldNumber.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto)
            ];
            return $e76902458ced2cda$var$findComments(parent.file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a;
            return resolveFeatures(parent.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        }
    };
}
/**
 * Create a descriptor for a oneof group.
 */ function $e76902458ced2cda$var$newOneof(proto, parent, resolveFeatures) {
    (0, $7UhPF.assert)(proto.name, `invalid OneofDescriptorProto: missing name`);
    return {
        kind: "oneof",
        proto: proto,
        deprecated: false,
        parent: parent,
        fields: [],
        name: proto.name,
        toString () {
            return `oneof ${parent.typeName}.${this.name}`;
        },
        getComments () {
            const path = [
                ...this.parent.getComments().sourcePath,
                $e76902458ced2cda$var$FieldNumber.DescriptorProto_OneofDecl,
                this.parent.proto.oneofDecl.indexOf(this.proto)
            ];
            return $e76902458ced2cda$var$findComments(parent.file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a;
            return resolveFeatures(parent.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        }
    };
}
/**
 * Create a descriptor for a field.
 */ function $e76902458ced2cda$var$newField(proto, file, parent, oneof, cart, resolveFeatures) {
    var _a, _b, _c;
    (0, $7UhPF.assert)(proto.name, `invalid FieldDescriptorProto: missing name`);
    (0, $7UhPF.assert)(proto.number, `invalid FieldDescriptorProto: missing number`);
    (0, $7UhPF.assert)(proto.type, `invalid FieldDescriptorProto: missing type`);
    const common = {
        proto: proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        name: proto.name,
        number: proto.number,
        parent: parent,
        oneof: oneof,
        optional: $e76902458ced2cda$var$isOptionalField(proto, file.syntax),
        packedByDefault: $e76902458ced2cda$var$isPackedFieldByDefault(proto, resolveFeatures),
        packed: $e76902458ced2cda$var$isPackedField(file, parent, proto, resolveFeatures),
        jsonName: proto.jsonName === (0, $l1i7B.fieldJsonName)(proto.name) ? undefined : proto.jsonName,
        scalar: undefined,
        longType: undefined,
        message: undefined,
        enum: undefined,
        mapKey: undefined,
        mapValue: undefined,
        declarationString: $e76902458ced2cda$var$declarationString,
        // toString, getComments, getFeatures are overridden in newExtension
        toString () {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments () {
            const path = [
                ...this.parent.getComments().sourcePath,
                $e76902458ced2cda$var$FieldNumber.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto)
            ];
            return $e76902458ced2cda$var$findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a;
            return resolveFeatures(parent.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        }
    };
    const repeated = proto.label === $1NDXH.FieldDescriptorProto_Label.REPEATED;
    switch(proto.type){
        case $1NDXH.FieldDescriptorProto_Type.MESSAGE:
        case $1NDXH.FieldDescriptorProto_Type.GROUP:
            {
                (0, $7UhPF.assert)(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
                const mapEntry = cart.mapEntries.get($e76902458ced2cda$var$trimLeadingDot(proto.typeName));
                if (mapEntry !== undefined) {
                    (0, $7UhPF.assert)(repeated, `invalid FieldDescriptorProto: expected map entry to be repeated`);
                    return Object.assign(Object.assign(Object.assign({}, common), {
                        kind: "field",
                        fieldKind: "map",
                        repeated: false
                    }), $e76902458ced2cda$var$getMapFieldTypes(mapEntry));
                }
                const message = cart.messages.get($e76902458ced2cda$var$trimLeadingDot(proto.typeName));
                (0, $7UhPF.assert)(message !== undefined, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
                return Object.assign(Object.assign({}, common), {
                    kind: "field",
                    fieldKind: "message",
                    repeated: repeated,
                    message: message
                });
            }
        case $1NDXH.FieldDescriptorProto_Type.ENUM:
            {
                (0, $7UhPF.assert)(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
                const e = cart.enums.get($e76902458ced2cda$var$trimLeadingDot(proto.typeName));
                (0, $7UhPF.assert)(e !== undefined, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
                return Object.assign(Object.assign({}, common), {
                    kind: "field",
                    fieldKind: "enum",
                    getDefaultValue: $e76902458ced2cda$var$getDefaultValue,
                    repeated: repeated,
                    enum: e
                });
            }
        default:
            {
                const scalar = $e76902458ced2cda$var$fieldTypeToScalarType[proto.type];
                (0, $7UhPF.assert)(scalar, `invalid FieldDescriptorProto: unknown type ${proto.type}`);
                return Object.assign(Object.assign({}, common), {
                    kind: "field",
                    fieldKind: "scalar",
                    getDefaultValue: $e76902458ced2cda$var$getDefaultValue,
                    repeated: repeated,
                    scalar: scalar,
                    longType: ((_c = proto.options) === null || _c === void 0 ? void 0 : _c.jstype) == $1NDXH.FieldOptions_JSType.JS_STRING ? $7RwvC.LongType.STRING : $7RwvC.LongType.BIGINT
                });
            }
    }
}
/**
 * Create a descriptor for an extension field.
 */ function $e76902458ced2cda$var$newExtension(proto, file, parent, cart, resolveFeatures) {
    (0, $7UhPF.assert)(proto.extendee, `invalid FieldDescriptorProto: missing extendee`);
    const field = $e76902458ced2cda$var$newField(proto, file, null, undefined, cart, resolveFeatures);
    const extendee = cart.messages.get($e76902458ced2cda$var$trimLeadingDot(proto.extendee));
    (0, $7UhPF.assert)(extendee, `invalid FieldDescriptorProto: extendee ${proto.extendee} not found`);
    return Object.assign(Object.assign({}, field), {
        kind: "extension",
        typeName: $e76902458ced2cda$var$makeTypeName(proto, parent, file),
        parent: parent,
        file: file,
        extendee: extendee,
        // Must override toString, getComments, getFeatures from newField, because we
        // call newField with parent undefined.
        toString () {
            return `extension ${this.typeName}`;
        },
        getComments () {
            const path = this.parent ? [
                ...this.parent.getComments().sourcePath,
                $e76902458ced2cda$var$FieldNumber.DescriptorProto_Extension,
                this.parent.proto.extension.indexOf(proto)
            ] : [
                $e76902458ced2cda$var$FieldNumber.FileDescriptorProto_Extension,
                this.file.proto.extension.indexOf(proto)
            ];
            return $e76902458ced2cda$var$findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures () {
            var _a;
            return resolveFeatures((parent !== null && parent !== void 0 ? parent : file).getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        }
    });
}
/**
 * Parse the "syntax" and "edition" fields, stripping test editions.
 */ function $e76902458ced2cda$var$parseFileSyntax(syntax, edition) {
    let e;
    let s;
    switch(syntax){
        case undefined:
        case "proto2":
            s = "proto2";
            e = $1NDXH.Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3";
            e = $1NDXH.Edition.EDITION_PROTO3;
            break;
        case "editions":
            s = "editions";
            switch(edition){
                case undefined:
                case $1NDXH.Edition.EDITION_1_TEST_ONLY:
                case $1NDXH.Edition.EDITION_2_TEST_ONLY:
                case $1NDXH.Edition.EDITION_99997_TEST_ONLY:
                case $1NDXH.Edition.EDITION_99998_TEST_ONLY:
                case $1NDXH.Edition.EDITION_99999_TEST_ONLY:
                case $1NDXH.Edition.EDITION_UNKNOWN:
                    e = $1NDXH.Edition.EDITION_UNKNOWN;
                    break;
                default:
                    e = edition;
                    break;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${syntax}`);
    }
    if (syntax === "editions" && edition === $1NDXH.Edition.EDITION_UNKNOWN) throw new Error(`invalid FileDescriptorProto: syntax ${syntax} cannot have edition ${String(edition)}`);
    return {
        syntax: s,
        edition: e
    };
}
/**
 * Resolve dependencies of FileDescriptorProto to DescFile.
 */ function $e76902458ced2cda$var$findFileDependencies(proto, cart) {
    return proto.dependency.map((wantName)=>{
        const dep = cart.files.find((f)=>f.proto.name === wantName);
        (0, $7UhPF.assert)(dep);
        return dep;
    });
}
/**
 * Create a fully qualified name for a protobuf type or extension field.
 *
 * The fully qualified name for messages, enumerations, and services is
 * constructed by concatenating the package name (if present), parent
 * message names (for nested types), and the type name. We omit the leading
 * dot added by protobuf compilers. Examples:
 * - mypackage.MyMessage
 * - mypackage.MyMessage.NestedMessage
 *
 * The fully qualified name for extension fields is constructed by
 * concatenating the package name (if present), parent message names (for
 * extensions declared within a message), and the field name. Examples:
 * - mypackage.extfield
 * - mypackage.MyMessage.extfield
 */ function $e76902458ced2cda$var$makeTypeName(proto, parent, file) {
    (0, $7UhPF.assert)(proto.name, `invalid ${proto.getType().typeName}: missing name`);
    let typeName;
    if (parent) typeName = `${parent.typeName}.${proto.name}`;
    else if (file.proto.package !== undefined) typeName = `${file.proto.package}.${proto.name}`;
    else typeName = `${proto.name}`;
    return typeName;
}
/**
 * Remove the leading dot from a fully qualified type name.
 */ function $e76902458ced2cda$var$trimLeadingDot(typeName) {
    return typeName.startsWith(".") ? typeName.substring(1) : typeName;
}
function $e76902458ced2cda$var$getMapFieldTypes(mapEntry) {
    var _a, _b;
    (0, $7UhPF.assert)((_a = mapEntry.proto.options) === null || _a === void 0 ? void 0 : _a.mapEntry, `invalid DescriptorProto: expected ${mapEntry.toString()} to be a map entry`);
    (0, $7UhPF.assert)(mapEntry.fields.length === 2, `invalid DescriptorProto: map entry ${mapEntry.toString()} has ${mapEntry.fields.length} fields`);
    const keyField = mapEntry.fields.find((f)=>f.proto.number === 1);
    (0, $7UhPF.assert)(keyField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing key field`);
    const mapKey = keyField.scalar;
    (0, $7UhPF.assert)(mapKey !== undefined && mapKey !== $7RwvC.ScalarType.BYTES && mapKey !== $7RwvC.ScalarType.FLOAT && mapKey !== $7RwvC.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${mapEntry.toString()} has unexpected key type ${(_b = keyField.proto.type) !== null && _b !== void 0 ? _b : -1}`);
    const valueField = mapEntry.fields.find((f)=>f.proto.number === 2);
    (0, $7UhPF.assert)(valueField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing value field`);
    switch(valueField.fieldKind){
        case "scalar":
            return {
                mapKey: mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), {
                    kind: "scalar"
                })
            };
        case "message":
            return {
                mapKey: mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), {
                    kind: "message"
                })
            };
        case "enum":
            return {
                mapKey: mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), {
                    kind: "enum"
                })
            };
        default:
            throw new Error("invalid DescriptorProto: unsupported map entry value field");
    }
}
/**
 * Did the user put the field in a oneof group?
 * This handles proto3 optionals.
 */ function $e76902458ced2cda$var$findOneof(proto, allOneofs) {
    var _a;
    const oneofIndex = proto.oneofIndex;
    if (oneofIndex === undefined) return undefined;
    let oneof;
    if (proto.proto3Optional !== true) {
        oneof = allOneofs[oneofIndex];
        (0, $7UhPF.assert)(oneof, `invalid FieldDescriptorProto: oneof #${oneofIndex} for field #${(_a = proto.number) !== null && _a !== void 0 ? _a : -1} not found`);
    }
    return oneof;
}
/**
 * Did the user use the `optional` keyword?
 * This handles proto3 optionals.
 */ function $e76902458ced2cda$var$isOptionalField(proto, syntax) {
    switch(syntax){
        case "proto2":
            return proto.oneofIndex === undefined && proto.label === $1NDXH.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
            return proto.proto3Optional === true;
        case "editions":
            return false;
    }
}
/**
 * Is this field packed by default? Only valid for repeated enum fields, and
 * for repeated scalar fields except BYTES and STRING.
 *
 * In proto3 syntax, fields are packed by default. In proto2 syntax, fields
 * are unpacked by default. With editions, the default is whatever the edition
 * specifies as a default. In edition 2023, fields are packed by default.
 */ function $e76902458ced2cda$var$isPackedFieldByDefault(proto, resolveFeatures) {
    const { repeatedFieldEncoding: repeatedFieldEncoding } = resolveFeatures();
    if (repeatedFieldEncoding != $1NDXH.FeatureSet_RepeatedFieldEncoding.PACKED) return false;
    // From the proto3 language guide:
    // > In proto3, repeated fields of scalar numeric types are packed by default.
    // This information is incomplete - according to the conformance tests, BOOL
    // and ENUM are packed by default as well. This means only STRING and BYTES
    // are not packed by default, which makes sense because they are length-delimited.
    switch(proto.type){
        case $1NDXH.FieldDescriptorProto_Type.STRING:
        case $1NDXH.FieldDescriptorProto_Type.BYTES:
        case $1NDXH.FieldDescriptorProto_Type.GROUP:
        case $1NDXH.FieldDescriptorProto_Type.MESSAGE:
            return false;
        default:
            return true;
    }
}
/**
 * Pack this repeated field?
 *
 * Respects field type, proto2/proto3 defaults and the `packed` option, or
 * edition defaults and the edition features.repeated_field_encoding options.
 */ function $e76902458ced2cda$var$isPackedField(file, parent, proto, resolveFeatures) {
    var _a, _b, _c, _d, _e, _f;
    switch(proto.type){
        case $1NDXH.FieldDescriptorProto_Type.STRING:
        case $1NDXH.FieldDescriptorProto_Type.BYTES:
        case $1NDXH.FieldDescriptorProto_Type.GROUP:
        case $1NDXH.FieldDescriptorProto_Type.MESSAGE:
            // length-delimited types cannot be packed
            return false;
        default:
            switch(file.edition){
                case $1NDXH.Edition.EDITION_PROTO2:
                    return (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.packed) !== null && _b !== void 0 ? _b : false;
                case $1NDXH.Edition.EDITION_PROTO3:
                    return (_d = (_c = proto.options) === null || _c === void 0 ? void 0 : _c.packed) !== null && _d !== void 0 ? _d : true;
                default:
                    {
                        const { repeatedFieldEncoding: repeatedFieldEncoding } = resolveFeatures((_e = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _e !== void 0 ? _e : file.getFeatures(), (_f = proto.options) === null || _f === void 0 ? void 0 : _f.features);
                        return repeatedFieldEncoding == $1NDXH.FeatureSet_RepeatedFieldEncoding.PACKED;
                    }
            }
    }
}
/**
 * Map from a compiler-generated field type to our ScalarType, which is a
 * subset of field types declared by protobuf enum google.protobuf.FieldDescriptorProto.
 */ const $e76902458ced2cda$var$fieldTypeToScalarType = {
    [$1NDXH.FieldDescriptorProto_Type.DOUBLE]: $7RwvC.ScalarType.DOUBLE,
    [$1NDXH.FieldDescriptorProto_Type.FLOAT]: $7RwvC.ScalarType.FLOAT,
    [$1NDXH.FieldDescriptorProto_Type.INT64]: $7RwvC.ScalarType.INT64,
    [$1NDXH.FieldDescriptorProto_Type.UINT64]: $7RwvC.ScalarType.UINT64,
    [$1NDXH.FieldDescriptorProto_Type.INT32]: $7RwvC.ScalarType.INT32,
    [$1NDXH.FieldDescriptorProto_Type.FIXED64]: $7RwvC.ScalarType.FIXED64,
    [$1NDXH.FieldDescriptorProto_Type.FIXED32]: $7RwvC.ScalarType.FIXED32,
    [$1NDXH.FieldDescriptorProto_Type.BOOL]: $7RwvC.ScalarType.BOOL,
    [$1NDXH.FieldDescriptorProto_Type.STRING]: $7RwvC.ScalarType.STRING,
    [$1NDXH.FieldDescriptorProto_Type.GROUP]: undefined,
    [$1NDXH.FieldDescriptorProto_Type.MESSAGE]: undefined,
    [$1NDXH.FieldDescriptorProto_Type.BYTES]: $7RwvC.ScalarType.BYTES,
    [$1NDXH.FieldDescriptorProto_Type.UINT32]: $7RwvC.ScalarType.UINT32,
    [$1NDXH.FieldDescriptorProto_Type.ENUM]: undefined,
    [$1NDXH.FieldDescriptorProto_Type.SFIXED32]: $7RwvC.ScalarType.SFIXED32,
    [$1NDXH.FieldDescriptorProto_Type.SFIXED64]: $7RwvC.ScalarType.SFIXED64,
    [$1NDXH.FieldDescriptorProto_Type.SINT32]: $7RwvC.ScalarType.SINT32,
    [$1NDXH.FieldDescriptorProto_Type.SINT64]: $7RwvC.ScalarType.SINT64
};
/**
 * Find comments.
 */ function $e76902458ced2cda$var$findComments(sourceCodeInfo, sourcePath) {
    if (!sourceCodeInfo) return {
        leadingDetached: [],
        sourcePath: sourcePath
    };
    for (const location of sourceCodeInfo.location){
        if (location.path.length !== sourcePath.length) continue;
        if (location.path.some((value, index)=>sourcePath[index] !== value)) continue;
        return {
            leadingDetached: location.leadingDetachedComments,
            leading: location.leadingComments,
            trailing: location.trailingComments,
            sourcePath: sourcePath
        };
    }
    return {
        leadingDetached: [],
        sourcePath: sourcePath
    };
}
/**
 * The following field numbers are used to find comments in
 * google.protobuf.SourceCodeInfo.
 */ var $e76902458ced2cda$var$FieldNumber;
(function(FieldNumber) {
    FieldNumber[FieldNumber["FileDescriptorProto_Package"] = 2] = "FileDescriptorProto_Package";
    FieldNumber[FieldNumber["FileDescriptorProto_MessageType"] = 4] = "FileDescriptorProto_MessageType";
    FieldNumber[FieldNumber["FileDescriptorProto_EnumType"] = 5] = "FileDescriptorProto_EnumType";
    FieldNumber[FieldNumber["FileDescriptorProto_Service"] = 6] = "FileDescriptorProto_Service";
    FieldNumber[FieldNumber["FileDescriptorProto_Extension"] = 7] = "FileDescriptorProto_Extension";
    FieldNumber[FieldNumber["FileDescriptorProto_Syntax"] = 12] = "FileDescriptorProto_Syntax";
    FieldNumber[FieldNumber["DescriptorProto_Field"] = 2] = "DescriptorProto_Field";
    FieldNumber[FieldNumber["DescriptorProto_NestedType"] = 3] = "DescriptorProto_NestedType";
    FieldNumber[FieldNumber["DescriptorProto_EnumType"] = 4] = "DescriptorProto_EnumType";
    FieldNumber[FieldNumber["DescriptorProto_Extension"] = 6] = "DescriptorProto_Extension";
    FieldNumber[FieldNumber["DescriptorProto_OneofDecl"] = 8] = "DescriptorProto_OneofDecl";
    FieldNumber[FieldNumber["EnumDescriptorProto_Value"] = 2] = "EnumDescriptorProto_Value";
    FieldNumber[FieldNumber["ServiceDescriptorProto_Method"] = 2] = "ServiceDescriptorProto_Method";
})($e76902458ced2cda$var$FieldNumber || ($e76902458ced2cda$var$FieldNumber = {}));
/**
 * Return a string that matches the definition of a field in the protobuf
 * source. Does not take custom options into account.
 */ function $e76902458ced2cda$var$declarationString() {
    var _a, _b, _c;
    const parts = [];
    if (this.repeated) parts.push("repeated");
    if (this.optional) parts.push("optional");
    const file = this.kind === "extension" ? this.file : this.parent.file;
    if (file.syntax == "proto2" && this.proto.label === $1NDXH.FieldDescriptorProto_Label.REQUIRED) parts.push("required");
    let type;
    switch(this.fieldKind){
        case "scalar":
            type = $7RwvC.ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            type = this.enum.typeName;
            break;
        case "message":
            type = this.message.typeName;
            break;
        case "map":
            {
                const k = $7RwvC.ScalarType[this.mapKey].toLowerCase();
                let v;
                switch(this.mapValue.kind){
                    case "scalar":
                        v = $7RwvC.ScalarType[this.mapValue.scalar].toLowerCase();
                        break;
                    case "enum":
                        v = this.mapValue.enum.typeName;
                        break;
                    case "message":
                        v = this.mapValue.message.typeName;
                        break;
                }
                type = `map<${k}, ${v}>`;
                break;
            }
    }
    parts.push(`${type} ${this.name} = ${this.number}`);
    const options = [];
    if (((_a = this.proto.options) === null || _a === void 0 ? void 0 : _a.packed) !== undefined) options.push(`packed = ${this.proto.options.packed.toString()}`);
    let defaultValue = this.proto.defaultValue;
    if (defaultValue !== undefined) {
        if (this.proto.type == $1NDXH.FieldDescriptorProto_Type.BYTES || this.proto.type == $1NDXH.FieldDescriptorProto_Type.STRING) defaultValue = '"' + defaultValue.replace('"', '\\"') + '"';
        options.push(`default = ${defaultValue}`);
    }
    if (this.jsonName !== undefined) options.push(`json_name = "${this.jsonName}"`);
    if (((_b = this.proto.options) === null || _b === void 0 ? void 0 : _b.jstype) !== undefined) options.push(`jstype = ${$1NDXH.FieldOptions_JSType[this.proto.options.jstype]}`);
    if (((_c = this.proto.options) === null || _c === void 0 ? void 0 : _c.deprecated) === true) options.push(`deprecated = true`);
    if (options.length > 0) parts.push("[" + options.join(", ") + "]");
    return parts.join(" ");
}
/**
 * Parses a text-encoded default value (proto2) of a scalar or enum field.
 */ function $e76902458ced2cda$var$getDefaultValue() {
    const d = this.proto.defaultValue;
    if (d === undefined) return undefined;
    switch(this.fieldKind){
        case "enum":
            return (0, $6141b88185bcf264$exports.parseTextFormatEnumValue)(this.enum, d);
        case "scalar":
            return (0, $6141b88185bcf264$exports.parseTextFormatScalarValue)(this.scalar, d);
        default:
            return undefined;
    }
}


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "createDescriptorSet", {
    enumerable: true,
    get: function() {
        return $e76902458ced2cda$exports.createDescriptorSet;
    }
});
var $fa60517e5ce75903$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($fa60517e5ce75903$exports, "__esModule", {
    value: true
});
$fa60517e5ce75903$exports.createRegistry = void 0;
/**
 * Create a new registry from the given types.
 */ function $fa60517e5ce75903$var$createRegistry(...types) {
    const messages = {};
    const enums = {};
    const services = {};
    const extensionsByName = new Map();
    const extensionsByExtendee = new Map();
    const registry = {
        findMessage (typeName) {
            return messages[typeName];
        },
        findEnum (typeName) {
            return enums[typeName];
        },
        findService (typeName) {
            return services[typeName];
        },
        findExtensionFor (typeName, no) {
            var _a, _b;
            return (_b = (_a = extensionsByExtendee.get(typeName)) === null || _a === void 0 ? void 0 : _a.get(no)) !== null && _b !== void 0 ? _b : undefined;
        },
        findExtension (typeName) {
            var _a;
            return (_a = extensionsByName.get(typeName)) !== null && _a !== void 0 ? _a : undefined;
        }
    };
    function addType(type) {
        var _a;
        if ("fields" in type) {
            if (!registry.findMessage(type.typeName)) {
                messages[type.typeName] = type;
                type.fields.list().forEach(addField);
            }
        } else if ("methods" in type) {
            if (!registry.findService(type.typeName)) {
                services[type.typeName] = type;
                for (const method of Object.values(type.methods)){
                    addType(method.I);
                    addType(method.O);
                }
            }
        } else if ("extendee" in type) {
            if (!extensionsByName.has(type.typeName)) {
                extensionsByName.set(type.typeName, type);
                const extendeeName = type.extendee.typeName;
                if (!extensionsByExtendee.has(extendeeName)) extensionsByExtendee.set(extendeeName, new Map());
                (_a = extensionsByExtendee.get(extendeeName)) === null || _a === void 0 || _a.set(type.field.no, type);
                addType(type.extendee);
                addField(type.field);
            }
        } else enums[type.typeName] = type;
    }
    function addField(field) {
        if (field.kind == "message") addType(field.T);
        else if (field.kind == "map" && field.V.kind == "message") addType(field.V.T);
        else if (field.kind == "enum") addType(field.T);
    }
    for (const type of types)addType(type);
    return registry;
}
$fa60517e5ce75903$exports.createRegistry = $fa60517e5ce75903$var$createRegistry;


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "createRegistry", {
    enumerable: true,
    get: function() {
        return $fa60517e5ce75903$exports.createRegistry;
    }
});
var $5f6b3ac98e2900fc$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($5f6b3ac98e2900fc$exports, "__esModule", {
    value: true
});
$5f6b3ac98e2900fc$exports.createRegistryFromDescriptors = void 0;

var $7UhPF = parcelRequire("7UhPF");

var $lfD5g = parcelRequire("lfD5g");

var $fGM1a = parcelRequire("fGM1a");

var $l1i7B = parcelRequire("l1i7B");

var $4GeSW = parcelRequire("4GeSW");

var $bzaRE = parcelRequire("bzaRE");

var $3FFyr = parcelRequire("3FFyr");

var $IpFbO = parcelRequire("IpFbO");

var $24JC6 = parcelRequire("24JC6");

var $fS6Va = parcelRequire("fS6Va");

var $1nE68 = parcelRequire("1nE68");

var $ar4YL = parcelRequire("ar4YL");

var $1NDXH = parcelRequire("1NDXH");


var $jzsFs = parcelRequire("jzsFs");
// well-known message types with specialized JSON representation
const $5f6b3ac98e2900fc$var$wkMessages = [
    $3FFyr.Any,
    $bzaRE.Duration,
    $IpFbO.Empty,
    $24JC6.FieldMask,
    $fS6Va.Struct,
    $fS6Va.Value,
    $fS6Va.ListValue,
    $4GeSW.Timestamp,
    $bzaRE.Duration,
    $ar4YL.DoubleValue,
    $ar4YL.FloatValue,
    $ar4YL.Int64Value,
    $ar4YL.Int32Value,
    $ar4YL.UInt32Value,
    $ar4YL.UInt64Value,
    $ar4YL.BoolValue,
    $ar4YL.StringValue,
    $ar4YL.BytesValue
];
// well-known enum types with specialized JSON representation
const $5f6b3ac98e2900fc$var$wkEnums = [
    (0, $1nE68.getEnumType)($fS6Va.NullValue)
];
/**
 * Create a registry from a set of descriptors. The types returned by this
 * registry behave exactly like types from generated code.
 *
 * This function accepts google.protobuf.FileDescriptorSet in serialized or
 * deserialized form. Alternatively, it also accepts a DescriptorSet (see
 * createDescriptorSet()).
 *
 * By default, all well-known types with a specialized JSON representation
 * are replaced with their generated counterpart in this package.
 */ function $5f6b3ac98e2900fc$var$createRegistryFromDescriptors(input, replaceWkt = true) {
    const set = input instanceof Uint8Array || (0, $jzsFs.isMessage)(input, $1NDXH.FileDescriptorSet) ? (0, $e76902458ced2cda$exports.createDescriptorSet)(input) : input;
    const enums = new Map();
    const messages = new Map();
    const extensions = new Map();
    const extensionsByExtendee = new Map();
    const services = {};
    if (replaceWkt) {
        for (const mt of $5f6b3ac98e2900fc$var$wkMessages)messages.set(mt.typeName, mt);
        for (const et of $5f6b3ac98e2900fc$var$wkEnums)enums.set(et.typeName, et);
    }
    return {
        /**
         * May raise an error on invalid descriptors.
         */ findEnum (typeName) {
            const existing = enums.get(typeName);
            if (existing) return existing;
            const desc = set.enums.get(typeName);
            if (!desc) return undefined;
            const runtime = desc.file.syntax == "proto3" ? $lfD5g.proto3 : $fGM1a.proto2;
            const type = runtime.makeEnumType(typeName, desc.values.map((u)=>({
                    no: u.number,
                    name: u.name,
                    localName: (0, $l1i7B.localName)(u)
                })), {});
            enums.set(typeName, type);
            return type;
        },
        /**
         * May raise an error on invalid descriptors.
         */ findMessage (typeName) {
            const existing = messages.get(typeName);
            if (existing) return existing;
            const desc = set.messages.get(typeName);
            if (!desc) return undefined;
            const runtime = desc.file.syntax == "proto3" ? $lfD5g.proto3 : $fGM1a.proto2;
            const fields = [];
            const type = runtime.makeMessageType(typeName, ()=>fields, {
                localName: (0, $l1i7B.localName)(desc)
            });
            messages.set(typeName, type);
            for (const field of desc.fields)fields.push($5f6b3ac98e2900fc$var$makeFieldInfo(field, this));
            return type;
        },
        /**
         * May raise an error on invalid descriptors.
         */ findService (typeName) {
            const existing = services[typeName];
            if (existing) return existing;
            const desc = set.services.get(typeName);
            if (!desc) return undefined;
            const methods = {};
            for (const method of desc.methods){
                const I = $5f6b3ac98e2900fc$var$resolve(method.input, this, method);
                const O = $5f6b3ac98e2900fc$var$resolve(method.output, this, method);
                methods[(0, $l1i7B.localName)(method)] = {
                    name: method.name,
                    I: I,
                    O: O,
                    kind: method.methodKind,
                    idempotency: method.idempotency
                };
            }
            return services[typeName] = {
                typeName: desc.typeName,
                methods: methods
            };
        },
        /**
         * May raise an error on invalid descriptors.
         */ findExtensionFor (typeName, no) {
            var _a;
            if (!set.messages.has(typeName)) return undefined;
            let extensionsByNo = extensionsByExtendee.get(typeName);
            if (!extensionsByNo) {
                // maintain a lookup for extension desc by number
                extensionsByNo = new Map();
                extensionsByExtendee.set(typeName, extensionsByNo);
                for (const desc of set.extensions.values())if (desc.extendee.typeName == typeName) extensionsByNo.set(desc.number, desc);
            }
            const desc = (_a = extensionsByExtendee.get(typeName)) === null || _a === void 0 ? void 0 : _a.get(no);
            return desc ? this.findExtension(desc.typeName) : undefined;
        },
        /**
         * May raise an error on invalid descriptors.
         */ findExtension (typeName) {
            const existing = extensions.get(typeName);
            if (existing) return existing;
            const desc = set.extensions.get(typeName);
            if (!desc) return undefined;
            const extendee = $5f6b3ac98e2900fc$var$resolve(desc.extendee, this, desc);
            const runtime = desc.file.syntax == "proto3" ? $lfD5g.proto3 : $fGM1a.proto2;
            const ext = runtime.makeExtension(typeName, extendee, $5f6b3ac98e2900fc$var$makeFieldInfo(desc, this));
            extensions.set(typeName, ext);
            return ext;
        }
    };
}
$5f6b3ac98e2900fc$exports.createRegistryFromDescriptors = $5f6b3ac98e2900fc$var$createRegistryFromDescriptors;
function $5f6b3ac98e2900fc$var$makeFieldInfo(desc, registry) {
    var _a;
    const f = {
        kind: desc.fieldKind,
        no: desc.number,
        name: desc.name,
        jsonName: desc.jsonName,
        delimited: desc.proto.type == $1NDXH.FieldDescriptorProto_Type.GROUP,
        repeated: desc.repeated,
        packed: desc.packed,
        oneof: (_a = desc.oneof) === null || _a === void 0 ? void 0 : _a.name,
        opt: desc.optional,
        req: desc.proto.label === $1NDXH.FieldDescriptorProto_Label.REQUIRED
    };
    switch(desc.fieldKind){
        case "map":
            {
                (0, $7UhPF.assert)(desc.kind == "field"); // maps are not allowed for extensions
                let T;
                switch(desc.mapValue.kind){
                    case "scalar":
                        T = desc.mapValue.scalar;
                        break;
                    case "enum":
                        T = $5f6b3ac98e2900fc$var$resolve(desc.mapValue.enum, registry, desc);
                        break;
                    case "message":
                        T = $5f6b3ac98e2900fc$var$resolve(desc.mapValue.message, registry, desc);
                        break;
                }
                f.K = desc.mapKey;
                f.V = {
                    kind: desc.mapValue.kind,
                    T: T
                };
                break;
            }
        case "message":
            f.T = $5f6b3ac98e2900fc$var$resolve(desc.message, registry, desc);
            break;
        case "enum":
            f.T = $5f6b3ac98e2900fc$var$resolve(desc.enum, registry, desc);
            f.default = desc.getDefaultValue();
            break;
        case "scalar":
            f.L = desc.longType;
            f.T = desc.scalar;
            f.default = desc.getDefaultValue();
            break;
    }
    return f;
}
function $5f6b3ac98e2900fc$var$resolve(desc, registry, context) {
    const type = desc.kind == "message" ? registry.findMessage(desc.typeName) : registry.findEnum(desc.typeName);
    (0, $7UhPF.assert)(type, `${desc.toString()}" for ${context.toString()} not found`);
    return type;
}


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "createRegistryFromDescriptors", {
    enumerable: true,
    get: function() {
        return $5f6b3ac98e2900fc$exports.createRegistryFromDescriptors;
    }
});
var $9734e5d62e01af30$exports = {};
"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty($9734e5d62e01af30$exports, "__esModule", {
    value: true
});
$9734e5d62e01af30$exports.toPlainMessage = void 0;

var $jzsFs = parcelRequire("jzsFs");
/**
 * toPlainMessage returns a new object by stripping
 * all methods from a message, leaving only fields and
 * oneof groups. It is recursive, meaning it applies this
 * same logic to all nested message fields as well.
 *
 * If the argument is already a plain message, it is
 * returned as-is.
 */ function $9734e5d62e01af30$var$toPlainMessage(message) {
    if (!(0, $jzsFs.isMessage)(message)) return message;
    const type = message.getType();
    const target = {};
    for (const member of type.fields.byMember()){
        const source = message[member.localName];
        let copy;
        if (member.repeated) copy = source.map((e)=>$9734e5d62e01af30$var$toPlainValue(e));
        else if (member.kind == "map") {
            copy = {};
            for (const [key, v] of Object.entries(source))copy[key] = $9734e5d62e01af30$var$toPlainValue(v);
        } else if (member.kind == "oneof") {
            const f = member.findField(source.case);
            copy = f ? {
                case: source.case,
                value: $9734e5d62e01af30$var$toPlainValue(source.value)
            } : {
                case: undefined
            };
        } else copy = $9734e5d62e01af30$var$toPlainValue(source);
        target[member.localName] = copy;
    }
    return target;
}
$9734e5d62e01af30$exports.toPlainMessage = $9734e5d62e01af30$var$toPlainMessage;
function $9734e5d62e01af30$var$toPlainValue(value) {
    if (value === undefined) return value;
    if ((0, $jzsFs.isMessage)(value)) return $9734e5d62e01af30$var$toPlainMessage(value);
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}


Object.defineProperty($f5dd5d32ad1dfbf2$exports, "toPlainMessage", {
    enumerable: true,
    get: function() {
        return $9734e5d62e01af30$exports.toPlainMessage;
    }
});

// ideally, we would export these types with sub-path exports:
$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("qitgr")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("iY5Jm")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("3FFyr")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("1NDXH")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("bzaRE")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("IpFbO")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("24JC6")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("87TC0")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("fS6Va")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("4GeSW")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("cYT6Y")), $f5dd5d32ad1dfbf2$exports);

$f5dd5d32ad1dfbf2$var$__exportStar((parcelRequire("ar4YL")), $f5dd5d32ad1dfbf2$exports);


const $61b2884ab967cfb2$export$d2dff97f035be373 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.MetricLabel", [
    {
        no: 0,
        name: "AGENTS_LLM_TTFT"
    },
    {
        no: 1,
        name: "AGENTS_STT_TTFT"
    },
    {
        no: 2,
        name: "AGENTS_TTS_TTFB"
    },
    {
        no: 3,
        name: "CLIENT_VIDEO_SUBSCRIBER_FREEZE_COUNT"
    },
    {
        no: 4,
        name: "CLIENT_VIDEO_SUBSCRIBER_TOTAL_FREEZE_DURATION"
    },
    {
        no: 5,
        name: "CLIENT_VIDEO_SUBSCRIBER_PAUSE_COUNT"
    },
    {
        no: 6,
        name: "CLIENT_VIDEO_SUBSCRIBER_TOTAL_PAUSES_DURATION"
    },
    {
        no: 7,
        name: "CLIENT_AUDIO_SUBSCRIBER_CONCEALED_SAMPLES"
    },
    {
        no: 8,
        name: "CLIENT_AUDIO_SUBSCRIBER_SILENT_CONCEALED_SAMPLES"
    },
    {
        no: 9,
        name: "CLIENT_AUDIO_SUBSCRIBER_CONCEALMENT_EVENTS"
    },
    {
        no: 10,
        name: "CLIENT_AUDIO_SUBSCRIBER_INTERRUPTION_COUNT"
    },
    {
        no: 11,
        name: "CLIENT_AUDIO_SUBSCRIBER_TOTAL_INTERRUPTION_DURATION"
    },
    {
        no: 12,
        name: "CLIENT_SUBSCRIBER_JITTER_BUFFER_DELAY"
    },
    {
        no: 13,
        name: "CLIENT_SUBSCRIBER_JITTER_BUFFER_EMITTED_COUNT"
    },
    {
        no: 14,
        name: "CLIENT_VIDEO_PUBLISHER_QUALITY_LIMITATION_DURATION_BANDWIDTH"
    },
    {
        no: 15,
        name: "CLIENT_VIDEO_PUBLISHER_QUALITY_LIMITATION_DURATION_CPU"
    },
    {
        no: 16,
        name: "CLIENT_VIDEO_PUBLISHER_QUALITY_LIMITATION_DURATION_OTHER"
    },
    {
        no: 17,
        name: "PUBLISHER_RTT"
    },
    {
        no: 18,
        name: "SERVER_MESH_RTT"
    },
    {
        no: 19,
        name: "SUBSCRIBER_RTT"
    },
    {
        no: 4096,
        name: "METRIC_LABEL_PREDEFINED_MAX_VALUE"
    }
]);
const $61b2884ab967cfb2$export$1717900db9d6e9fd = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.MetricsBatch", ()=>[
        {
            no: 1,
            name: "timestamp_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "normalized_timestamp",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 3,
            name: "str_data",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "time_series",
            kind: "message",
            T: $61b2884ab967cfb2$export$b6e903585978f4bf,
            repeated: true
        },
        {
            no: 5,
            name: "events",
            kind: "message",
            T: $61b2884ab967cfb2$export$2cba57b7e2e7f9df,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$b6e903585978f4bf = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TimeSeriesMetric", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "participant_identity",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "track_sid",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "samples",
            kind: "message",
            T: $61b2884ab967cfb2$export$49ea0accdf72e388,
            repeated: true
        },
        {
            no: 5,
            name: "rid",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$49ea0accdf72e388 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.MetricSample", ()=>[
        {
            no: 1,
            name: "timestamp_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "normalized_timestamp",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 3,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]);
const $61b2884ab967cfb2$export$2cba57b7e2e7f9df = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.EventMetric", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "participant_identity",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "track_sid",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "start_timestamp_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "end_timestamp_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 6,
            name: "normalized_start_timestamp",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 7,
            name: "normalized_end_timestamp",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp),
            opt: true
        },
        {
            no: 8,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "rid",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$d626aa474c998238 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.AudioCodec", [
    {
        no: 0,
        name: "DEFAULT_AC"
    },
    {
        no: 1,
        name: "OPUS"
    },
    {
        no: 2,
        name: "AAC"
    }
]);
const $61b2884ab967cfb2$export$f9f1f6ac19dea951 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.VideoCodec", [
    {
        no: 0,
        name: "DEFAULT_VC"
    },
    {
        no: 1,
        name: "H264_BASELINE"
    },
    {
        no: 2,
        name: "H264_MAIN"
    },
    {
        no: 3,
        name: "H264_HIGH"
    },
    {
        no: 4,
        name: "VP8"
    }
]);
const $61b2884ab967cfb2$export$ee7ddabbbabdf56b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ImageCodec", [
    {
        no: 0,
        name: "IC_DEFAULT"
    },
    {
        no: 1,
        name: "IC_JPEG"
    }
]);
const $61b2884ab967cfb2$export$c2fc6e4ded3e0219 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.TrackType", [
    {
        no: 0,
        name: "AUDIO"
    },
    {
        no: 1,
        name: "VIDEO"
    },
    {
        no: 2,
        name: "DATA"
    }
]);
const $61b2884ab967cfb2$export$cbf5c0994e5bc5f2 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.TrackSource", [
    {
        no: 0,
        name: "UNKNOWN"
    },
    {
        no: 1,
        name: "CAMERA"
    },
    {
        no: 2,
        name: "MICROPHONE"
    },
    {
        no: 3,
        name: "SCREEN_SHARE"
    },
    {
        no: 4,
        name: "SCREEN_SHARE_AUDIO"
    }
]);
const $61b2884ab967cfb2$export$a8f593954e806155 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.VideoQuality", [
    {
        no: 0,
        name: "LOW"
    },
    {
        no: 1,
        name: "MEDIUM"
    },
    {
        no: 2,
        name: "HIGH"
    },
    {
        no: 3,
        name: "OFF"
    }
]);
const $61b2884ab967cfb2$export$16148de7856f4643 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ConnectionQuality", [
    {
        no: 0,
        name: "POOR"
    },
    {
        no: 1,
        name: "GOOD"
    },
    {
        no: 2,
        name: "EXCELLENT"
    },
    {
        no: 3,
        name: "LOST"
    }
]);
const $61b2884ab967cfb2$export$bd657c4381cd6fa6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ClientConfigSetting", [
    {
        no: 0,
        name: "UNSET"
    },
    {
        no: 1,
        name: "DISABLED"
    },
    {
        no: 2,
        name: "ENABLED"
    }
]);
const $61b2884ab967cfb2$export$258d16488300d83f = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.DisconnectReason", [
    {
        no: 0,
        name: "UNKNOWN_REASON"
    },
    {
        no: 1,
        name: "CLIENT_INITIATED"
    },
    {
        no: 2,
        name: "DUPLICATE_IDENTITY"
    },
    {
        no: 3,
        name: "SERVER_SHUTDOWN"
    },
    {
        no: 4,
        name: "PARTICIPANT_REMOVED"
    },
    {
        no: 5,
        name: "ROOM_DELETED"
    },
    {
        no: 6,
        name: "STATE_MISMATCH"
    },
    {
        no: 7,
        name: "JOIN_FAILURE"
    },
    {
        no: 8,
        name: "MIGRATION"
    },
    {
        no: 9,
        name: "SIGNAL_CLOSE"
    },
    {
        no: 10,
        name: "ROOM_CLOSED"
    },
    {
        no: 11,
        name: "USER_UNAVAILABLE"
    },
    {
        no: 12,
        name: "USER_REJECTED"
    },
    {
        no: 13,
        name: "SIP_TRUNK_FAILURE"
    }
]);
const $61b2884ab967cfb2$export$593f6cd25d85d031 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ReconnectReason", [
    {
        no: 0,
        name: "RR_UNKNOWN"
    },
    {
        no: 1,
        name: "RR_SIGNAL_DISCONNECTED"
    },
    {
        no: 2,
        name: "RR_PUBLISHER_FAILED"
    },
    {
        no: 3,
        name: "RR_SUBSCRIBER_FAILED"
    },
    {
        no: 4,
        name: "RR_SWITCH_CANDIDATE"
    }
]);
const $61b2884ab967cfb2$export$7882d1e2e5429abf = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SubscriptionError", [
    {
        no: 0,
        name: "SE_UNKNOWN"
    },
    {
        no: 1,
        name: "SE_CODEC_UNSUPPORTED"
    },
    {
        no: 2,
        name: "SE_TRACK_NOTFOUND"
    }
]);
const $61b2884ab967cfb2$export$666d8416d84ce835 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.AudioTrackFeature", [
    {
        no: 0,
        name: "TF_STEREO"
    },
    {
        no: 1,
        name: "TF_NO_DTX"
    },
    {
        no: 2,
        name: "TF_AUTO_GAIN_CONTROL"
    },
    {
        no: 3,
        name: "TF_ECHO_CANCELLATION"
    },
    {
        no: 4,
        name: "TF_NOISE_SUPPRESSION"
    },
    {
        no: 5,
        name: "TF_ENHANCED_NOISE_CANCELLATION"
    }
]);
const $61b2884ab967cfb2$export$525628e68e798fb4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Room", ()=>[
        {
            no: 1,
            name: "sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "empty_timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 14,
            name: "departure_timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "max_participants",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "creation_time",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "turn_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "enabled_codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$a111e9ced3f1d2d0,
            repeated: true
        },
        {
            no: 8,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "num_participants",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "num_publishers",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "active_recording",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "version",
            kind: "message",
            T: $61b2884ab967cfb2$export$d6a50d6fd9dfe859
        }
    ]);
const $61b2884ab967cfb2$export$a111e9ced3f1d2d0 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Codec", ()=>[
        {
            no: 1,
            name: "mime",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fmtp_line",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$698fcb6837f3a80b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.PlayoutDelay", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "min",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "max",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$b214b7afef2b0eed = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ParticipantPermission", ()=>[
        {
            no: 1,
            name: "can_subscribe",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "can_publish",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "can_publish_data",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "can_publish_sources",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$cbf5c0994e5bc5f2),
            repeated: true
        },
        {
            no: 7,
            name: "hidden",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "recorder",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "can_update_metadata",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "agent",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "can_subscribe_metrics",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$c21db75dbd2864bf = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ParticipantInfo", ()=>[
        {
            no: 1,
            name: "sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$27901dfbf6b45f0)
        },
        {
            no: 4,
            name: "tracks",
            kind: "message",
            T: $61b2884ab967cfb2$export$7872447382cf3226,
            repeated: true
        },
        {
            no: 5,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "joined_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "version",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "permission",
            kind: "message",
            T: $61b2884ab967cfb2$export$b214b7afef2b0eed
        },
        {
            no: 12,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "is_publisher",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "kind",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$36bced626a313369)
        },
        {
            no: 15,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 16,
            name: "disconnect_reason",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$258d16488300d83f)
        }
    ]);
const $61b2884ab967cfb2$export$27901dfbf6b45f0 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ParticipantInfo.State", [
    {
        no: 0,
        name: "JOINING"
    },
    {
        no: 1,
        name: "JOINED"
    },
    {
        no: 2,
        name: "ACTIVE"
    },
    {
        no: 3,
        name: "DISCONNECTED"
    }
]);
const $61b2884ab967cfb2$export$36bced626a313369 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ParticipantInfo.Kind", [
    {
        no: 0,
        name: "STANDARD"
    },
    {
        no: 1,
        name: "INGRESS"
    },
    {
        no: 2,
        name: "EGRESS"
    },
    {
        no: 3,
        name: "SIP"
    },
    {
        no: 4,
        name: "AGENT"
    }
]);
const $61b2884ab967cfb2$export$d60a27d0da10cee5 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Encryption", []);
const $61b2884ab967cfb2$export$1efc488791285f20 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.Encryption.Type", [
    {
        no: 0,
        name: "NONE"
    },
    {
        no: 1,
        name: "GCM"
    },
    {
        no: 2,
        name: "CUSTOM"
    }
]);
const $61b2884ab967cfb2$export$99e8a0f19df63b47 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SimulcastCodecInfo", ()=>[
        {
            no: 1,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "layers",
            kind: "message",
            T: $61b2884ab967cfb2$export$db95ebe82dfe7c3c,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$7872447382cf3226 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackInfo", ()=>[
        {
            no: 1,
            name: "sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c2fc6e4ded3e0219)
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "muted",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "width",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "height",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "simulcast",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "disable_dtx",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "source",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$cbf5c0994e5bc5f2)
        },
        {
            no: 10,
            name: "layers",
            kind: "message",
            T: $61b2884ab967cfb2$export$db95ebe82dfe7c3c,
            repeated: true
        },
        {
            no: 11,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "mid",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$99e8a0f19df63b47,
            repeated: true
        },
        {
            no: 14,
            name: "stereo",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "disable_red",
            kind: "scalar",
            T: 8
        },
        {
            no: 16,
            name: "encryption",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$1efc488791285f20)
        },
        {
            no: 17,
            name: "stream",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "version",
            kind: "message",
            T: $61b2884ab967cfb2$export$d6a50d6fd9dfe859
        },
        {
            no: 19,
            name: "audio_features",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$666d8416d84ce835),
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$db95ebe82dfe7c3c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.VideoLayer", ()=>[
        {
            no: 1,
            name: "quality",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$a8f593954e806155)
        },
        {
            no: 2,
            name: "width",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "height",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "bitrate",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "ssrc",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$112727d965ff94ab = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataPacket", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$629a0ea4ceb9e4a6)
        },
        {
            no: 4,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "destination_identities",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "user",
            kind: "message",
            T: $61b2884ab967cfb2$export$3961cbb89493307a,
            oneof: "value"
        },
        {
            no: 3,
            name: "speaker",
            kind: "message",
            T: $61b2884ab967cfb2$export$27e6aa66e2d57927,
            oneof: "value"
        },
        {
            no: 6,
            name: "sip_dtmf",
            kind: "message",
            T: $61b2884ab967cfb2$export$70ce57966c3a2cde,
            oneof: "value"
        },
        {
            no: 7,
            name: "transcription",
            kind: "message",
            T: $61b2884ab967cfb2$export$3408cfc06da08df4,
            oneof: "value"
        },
        {
            no: 8,
            name: "metrics",
            kind: "message",
            T: $61b2884ab967cfb2$export$1717900db9d6e9fd,
            oneof: "value"
        },
        {
            no: 9,
            name: "chat_message",
            kind: "message",
            T: $61b2884ab967cfb2$export$423c13fd52bec8ad,
            oneof: "value"
        },
        {
            no: 10,
            name: "rpc_request",
            kind: "message",
            T: $61b2884ab967cfb2$export$847af2bc60702ca7,
            oneof: "value"
        },
        {
            no: 11,
            name: "rpc_ack",
            kind: "message",
            T: $61b2884ab967cfb2$export$939a4c9ed5745c1d,
            oneof: "value"
        },
        {
            no: 12,
            name: "rpc_response",
            kind: "message",
            T: $61b2884ab967cfb2$export$d4ce1c0118069cf6,
            oneof: "value"
        },
        {
            no: 13,
            name: "stream_header",
            kind: "message",
            T: $61b2884ab967cfb2$export$f722e6ed725e9fd6,
            oneof: "value"
        },
        {
            no: 14,
            name: "stream_chunk",
            kind: "message",
            T: $61b2884ab967cfb2$export$2b869309cf19b5ee,
            oneof: "value"
        }
    ]);
const $61b2884ab967cfb2$export$629a0ea4ceb9e4a6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.DataPacket.Kind", [
    {
        no: 0,
        name: "RELIABLE"
    },
    {
        no: 1,
        name: "LOSSY"
    }
]);
const $61b2884ab967cfb2$export$27e6aa66e2d57927 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ActiveSpeakerUpdate", ()=>[
        {
            no: 1,
            name: "speakers",
            kind: "message",
            T: $61b2884ab967cfb2$export$100d91ab53f85ff4,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$100d91ab53f85ff4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SpeakerInfo", ()=>[
        {
            no: 1,
            name: "sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "level",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "active",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$3961cbb89493307a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UserPacket", ()=>[
        {
            no: 1,
            name: "participant_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "payload",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "destination_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "destination_identities",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "topic",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "start_time",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 10,
            name: "end_time",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const $61b2884ab967cfb2$export$70ce57966c3a2cde = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SipDTMF", ()=>[
        {
            no: 3,
            name: "code",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "digit",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$3408cfc06da08df4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Transcription", ()=>[
        {
            no: 2,
            name: "transcribed_participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "track_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "segments",
            kind: "message",
            T: $61b2884ab967cfb2$export$c4d8b296a032a57,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$c4d8b296a032a57 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TranscriptionSegment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_time",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "end_time",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "final",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "language",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$423c13fd52bec8ad = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ChatMessage", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "edit_timestamp",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "deleted",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "generated",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$847af2bc60702ca7 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RpcRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "payload",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "response_timeout_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "version",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$939a4c9ed5745c1d = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RpcAck", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$d4ce1c0118069cf6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RpcResponse", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "payload",
            kind: "scalar",
            T: 9,
            oneof: "value"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: $61b2884ab967cfb2$export$5460eff990f31920,
            oneof: "value"
        }
    ]);
const $61b2884ab967cfb2$export$5460eff990f31920 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RpcError", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$c2bc2384f026e3b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ParticipantTracks", ()=>[
        {
            no: 1,
            name: "participant_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "track_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$4a9790277f4f801c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ServerInfo", ()=>[
        {
            no: 1,
            name: "edition",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$8d5360fbcb1047f1)
        },
        {
            no: 2,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "protocol",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "debug_info",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "agent_protocol",
            kind: "scalar",
            T: 5
        }
    ]);
const $61b2884ab967cfb2$export$8d5360fbcb1047f1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ServerInfo.Edition", [
    {
        no: 0,
        name: "Standard"
    },
    {
        no: 1,
        name: "Cloud"
    }
]);
const $61b2884ab967cfb2$export$62a054c396228590 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ClientInfo", ()=>[
        {
            no: 1,
            name: "sdk",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$d16f8de67cb7910a)
        },
        {
            no: 2,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "protocol",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "os",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "os_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "device_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "browser",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "browser_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "address",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "network",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "other_sdks",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$d16f8de67cb7910a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ClientInfo.SDK", [
    {
        no: 0,
        name: "UNKNOWN"
    },
    {
        no: 1,
        name: "JS"
    },
    {
        no: 2,
        name: "SWIFT"
    },
    {
        no: 3,
        name: "ANDROID"
    },
    {
        no: 4,
        name: "FLUTTER"
    },
    {
        no: 5,
        name: "GO"
    },
    {
        no: 6,
        name: "UNITY"
    },
    {
        no: 7,
        name: "REACT_NATIVE"
    },
    {
        no: 8,
        name: "RUST"
    },
    {
        no: 9,
        name: "PYTHON"
    },
    {
        no: 10,
        name: "CPP"
    },
    {
        no: 11,
        name: "UNITY_WEB"
    },
    {
        no: 12,
        name: "NODE"
    }
]);
const $61b2884ab967cfb2$export$3ba8275ddc2e153c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ClientConfiguration", ()=>[
        {
            no: 1,
            name: "video",
            kind: "message",
            T: $61b2884ab967cfb2$export$f09dbb9d4eab4a87
        },
        {
            no: 2,
            name: "screen",
            kind: "message",
            T: $61b2884ab967cfb2$export$f09dbb9d4eab4a87
        },
        {
            no: 3,
            name: "resume_connection",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$bd657c4381cd6fa6)
        },
        {
            no: 4,
            name: "disabled_codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$c2409db6dc1d63e6
        },
        {
            no: 5,
            name: "force_relay",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$bd657c4381cd6fa6)
        }
    ]);
const $61b2884ab967cfb2$export$f09dbb9d4eab4a87 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.VideoConfiguration", ()=>[
        {
            no: 1,
            name: "hardware_encoder",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$bd657c4381cd6fa6)
        }
    ]);
const $61b2884ab967cfb2$export$c2409db6dc1d63e6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DisabledCodecs", ()=>[
        {
            no: 1,
            name: "codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$a111e9ced3f1d2d0,
            repeated: true
        },
        {
            no: 2,
            name: "publish",
            kind: "message",
            T: $61b2884ab967cfb2$export$a111e9ced3f1d2d0,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5b0ebdf6c20bf40 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RTPDrift", ()=>[
        {
            no: 1,
            name: "start_time",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 2,
            name: "end_time",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 3,
            name: "duration",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "start_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "end_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "rtp_clock_ticks",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "drift_samples",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "drift_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "clock_rate",
            kind: "scalar",
            T: 1
        }
    ]);
const $61b2884ab967cfb2$export$4df35798a702bb71 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RTPStats", ()=>[
        {
            no: 1,
            name: "start_time",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 2,
            name: "end_time",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 3,
            name: "duration",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "packets",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "packet_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 39,
            name: "header_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "bitrate",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "packets_lost",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "packet_loss_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 10,
            name: "packet_loss_percentage",
            kind: "scalar",
            T: 2
        },
        {
            no: 11,
            name: "packets_duplicate",
            kind: "scalar",
            T: 13
        },
        {
            no: 12,
            name: "packet_duplicate_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 13,
            name: "bytes_duplicate",
            kind: "scalar",
            T: 4
        },
        {
            no: 40,
            name: "header_bytes_duplicate",
            kind: "scalar",
            T: 4
        },
        {
            no: 14,
            name: "bitrate_duplicate",
            kind: "scalar",
            T: 1
        },
        {
            no: 15,
            name: "packets_padding",
            kind: "scalar",
            T: 13
        },
        {
            no: 16,
            name: "packet_padding_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 17,
            name: "bytes_padding",
            kind: "scalar",
            T: 4
        },
        {
            no: 41,
            name: "header_bytes_padding",
            kind: "scalar",
            T: 4
        },
        {
            no: 18,
            name: "bitrate_padding",
            kind: "scalar",
            T: 1
        },
        {
            no: 19,
            name: "packets_out_of_order",
            kind: "scalar",
            T: 13
        },
        {
            no: 20,
            name: "frames",
            kind: "scalar",
            T: 13
        },
        {
            no: 21,
            name: "frame_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 22,
            name: "jitter_current",
            kind: "scalar",
            T: 1
        },
        {
            no: 23,
            name: "jitter_max",
            kind: "scalar",
            T: 1
        },
        {
            no: 24,
            name: "gap_histogram",
            kind: "map",
            K: 5,
            V: {
                kind: "scalar",
                T: 13
            }
        },
        {
            no: 25,
            name: "nacks",
            kind: "scalar",
            T: 13
        },
        {
            no: 37,
            name: "nack_acks",
            kind: "scalar",
            T: 13
        },
        {
            no: 26,
            name: "nack_misses",
            kind: "scalar",
            T: 13
        },
        {
            no: 38,
            name: "nack_repeated",
            kind: "scalar",
            T: 13
        },
        {
            no: 27,
            name: "plis",
            kind: "scalar",
            T: 13
        },
        {
            no: 28,
            name: "last_pli",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 29,
            name: "firs",
            kind: "scalar",
            T: 13
        },
        {
            no: 30,
            name: "last_fir",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 31,
            name: "rtt_current",
            kind: "scalar",
            T: 13
        },
        {
            no: 32,
            name: "rtt_max",
            kind: "scalar",
            T: 13
        },
        {
            no: 33,
            name: "key_frames",
            kind: "scalar",
            T: 13
        },
        {
            no: 34,
            name: "last_key_frame",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 35,
            name: "layer_lock_plis",
            kind: "scalar",
            T: 13
        },
        {
            no: 36,
            name: "last_layer_lock_pli",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Timestamp)
        },
        {
            no: 44,
            name: "packet_drift",
            kind: "message",
            T: $61b2884ab967cfb2$export$5b0ebdf6c20bf40
        },
        {
            no: 45,
            name: "ntp_report_drift",
            kind: "message",
            T: $61b2884ab967cfb2$export$5b0ebdf6c20bf40
        },
        {
            no: 46,
            name: "rebased_report_drift",
            kind: "message",
            T: $61b2884ab967cfb2$export$5b0ebdf6c20bf40
        },
        {
            no: 47,
            name: "received_report_drift",
            kind: "message",
            T: $61b2884ab967cfb2$export$5b0ebdf6c20bf40
        }
    ]);
const $61b2884ab967cfb2$export$f2ff5eefed8fdf85 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RTCPSenderReportState", ()=>[
        {
            no: 1,
            name: "rtp_timestamp",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "rtp_timestamp_ext",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "ntp_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "at",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "at_adjusted",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "packets",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "octets",
            kind: "scalar",
            T: 4
        }
    ]);
const $61b2884ab967cfb2$export$7a2769e1f4023f3a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RTPForwarderState", ()=>[
        {
            no: 1,
            name: "started",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reference_layer_spatial",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "pre_start_time",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "ext_first_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "dummy_start_timestamp_offset",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "rtp_munger",
            kind: "message",
            T: $61b2884ab967cfb2$export$5938466411fa03eb
        },
        {
            no: 7,
            name: "vp8_munger",
            kind: "message",
            T: $61b2884ab967cfb2$export$34136d0a82165bf8,
            oneof: "codec_munger"
        },
        {
            no: 8,
            name: "sender_report_state",
            kind: "message",
            T: $61b2884ab967cfb2$export$f2ff5eefed8fdf85,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5938466411fa03eb = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RTPMungerState", ()=>[
        {
            no: 1,
            name: "ext_last_sequence_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "ext_second_last_sequence_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "ext_last_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "ext_second_last_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "last_marker",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "second_last_marker",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$34136d0a82165bf8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.VP8MungerState", ()=>[
        {
            no: 1,
            name: "ext_last_picture_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "picture_id_used",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "last_tl0_pic_idx",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "tl0_pic_idx_used",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "tid_used",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "last_key_idx",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "key_idx_used",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$d6a50d6fd9dfe859 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TimedVersion", ()=>[
        {
            no: 1,
            name: "unix_micro",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "ticks",
            kind: "scalar",
            T: 5
        }
    ]);
const $61b2884ab967cfb2$export$521135ae501c2f0e = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataStream", []);
const $61b2884ab967cfb2$export$5cbf1cc9d6e1351b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.DataStream.OperationType", [
    {
        no: 0,
        name: "CREATE"
    },
    {
        no: 1,
        name: "UPDATE"
    },
    {
        no: 2,
        name: "DELETE"
    },
    {
        no: 3,
        name: "REACTION"
    }
]);
const $61b2884ab967cfb2$export$83f739615e87e71a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataStream.TextHeader", ()=>[
        {
            no: 1,
            name: "operation_type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$5cbf1cc9d6e1351b)
        },
        {
            no: 2,
            name: "version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "reply_to_stream_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "attached_stream_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "generated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "DataStream_TextHeader"
});
const $61b2884ab967cfb2$export$c60aa1fdb6e6e492 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataStream.FileHeader", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DataStream_FileHeader"
});
const $61b2884ab967cfb2$export$f722e6ed725e9fd6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataStream.Header", ()=>[
        {
            no: 1,
            name: "stream_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "topic",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "total_length",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 7,
            name: "encryption_type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$1efc488791285f20)
        },
        {
            no: 8,
            name: "extensions",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "text_header",
            kind: "message",
            T: $61b2884ab967cfb2$export$83f739615e87e71a,
            oneof: "content_header"
        },
        {
            no: 10,
            name: "file_header",
            kind: "message",
            T: $61b2884ab967cfb2$export$c60aa1fdb6e6e492,
            oneof: "content_header"
        }
    ], {
    localName: "DataStream_Header"
});
const $61b2884ab967cfb2$export$2b869309cf19b5ee = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataStream.Chunk", ()=>[
        {
            no: 1,
            name: "stream_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk_index",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "complete",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "version",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "iv",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ], {
    localName: "DataStream_Chunk"
});
const $61b2884ab967cfb2$export$608283ae8fe7f3eb = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.JobType", [
    {
        no: 0,
        name: "JT_ROOM"
    },
    {
        no: 1,
        name: "JT_PUBLISHER"
    }
]);
const $61b2884ab967cfb2$export$f44b31b408c0abf1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.WorkerStatus", [
    {
        no: 0,
        name: "WS_AVAILABLE"
    },
    {
        no: 1,
        name: "WS_FULL"
    }
]);
const $61b2884ab967cfb2$export$132cc870506ec32 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.JobStatus", [
    {
        no: 0,
        name: "JS_PENDING"
    },
    {
        no: 1,
        name: "JS_RUNNING"
    },
    {
        no: 2,
        name: "JS_SUCCESS"
    },
    {
        no: 3,
        name: "JS_FAILED"
    }
]);
const $61b2884ab967cfb2$export$7b04c00d7c69b169 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Job", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "dispatch_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$608283ae8fe7f3eb)
        },
        {
            no: 3,
            name: "room",
            kind: "message",
            T: $61b2884ab967cfb2$export$525628e68e798fb4
        },
        {
            no: 4,
            name: "participant",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf,
            opt: true
        },
        {
            no: 5,
            name: "namespace",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "agent_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "state",
            kind: "message",
            T: $61b2884ab967cfb2$export$d30a7cb66801c974
        }
    ]);
const $61b2884ab967cfb2$export$d30a7cb66801c974 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.JobState", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$132cc870506ec32)
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "ended_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$1ccd81d742fbf58c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.WorkerMessage", ()=>[
        {
            no: 1,
            name: "register",
            kind: "message",
            T: $61b2884ab967cfb2$export$6dafc7961f749b20,
            oneof: "message"
        },
        {
            no: 2,
            name: "availability",
            kind: "message",
            T: $61b2884ab967cfb2$export$d616c2432f8916c3,
            oneof: "message"
        },
        {
            no: 3,
            name: "update_worker",
            kind: "message",
            T: $61b2884ab967cfb2$export$b570ddad83c36ab1,
            oneof: "message"
        },
        {
            no: 4,
            name: "update_job",
            kind: "message",
            T: $61b2884ab967cfb2$export$f50a6830b28b5dfc,
            oneof: "message"
        },
        {
            no: 5,
            name: "ping",
            kind: "message",
            T: $61b2884ab967cfb2$export$c9cc72dd2c6488e2,
            oneof: "message"
        },
        {
            no: 6,
            name: "simulate_job",
            kind: "message",
            T: $61b2884ab967cfb2$export$9ddfcf478dd84a53,
            oneof: "message"
        },
        {
            no: 7,
            name: "migrate_job",
            kind: "message",
            T: $61b2884ab967cfb2$export$b6b1c229a3c38d9d,
            oneof: "message"
        }
    ]);
const $61b2884ab967cfb2$export$9d45857805e3a130 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ServerMessage", ()=>[
        {
            no: 1,
            name: "register",
            kind: "message",
            T: $61b2884ab967cfb2$export$c59eda67baab3936,
            oneof: "message"
        },
        {
            no: 2,
            name: "availability",
            kind: "message",
            T: $61b2884ab967cfb2$export$7942194838e667df,
            oneof: "message"
        },
        {
            no: 3,
            name: "assignment",
            kind: "message",
            T: $61b2884ab967cfb2$export$450cffe6adf3497f,
            oneof: "message"
        },
        {
            no: 5,
            name: "termination",
            kind: "message",
            T: $61b2884ab967cfb2$export$b80f31a1f20ab57c,
            oneof: "message"
        },
        {
            no: 4,
            name: "pong",
            kind: "message",
            T: $61b2884ab967cfb2$export$b65fb0bb740caf15,
            oneof: "message"
        }
    ]);
const $61b2884ab967cfb2$export$9ddfcf478dd84a53 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SimulateJobRequest", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$608283ae8fe7f3eb)
        },
        {
            no: 2,
            name: "room",
            kind: "message",
            T: $61b2884ab967cfb2$export$525628e68e798fb4
        },
        {
            no: 3,
            name: "participant",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf
        }
    ]);
const $61b2884ab967cfb2$export$c9cc72dd2c6488e2 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.WorkerPing", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$b65fb0bb740caf15 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.WorkerPong", ()=>[
        {
            no: 1,
            name: "last_timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$6dafc7961f749b20 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RegisterWorkerRequest", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$608283ae8fe7f3eb)
        },
        {
            no: 8,
            name: "agent_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "ping_interval",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "namespace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "allowed_permissions",
            kind: "message",
            T: $61b2884ab967cfb2$export$b214b7afef2b0eed
        }
    ]);
const $61b2884ab967cfb2$export$c59eda67baab3936 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RegisterWorkerResponse", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "server_info",
            kind: "message",
            T: $61b2884ab967cfb2$export$4a9790277f4f801c
        }
    ]);
const $61b2884ab967cfb2$export$b6b1c229a3c38d9d = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.MigrateJobRequest", ()=>[
        {
            no: 2,
            name: "job_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$7942194838e667df = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AvailabilityRequest", ()=>[
        {
            no: 1,
            name: "job",
            kind: "message",
            T: $61b2884ab967cfb2$export$7b04c00d7c69b169
        },
        {
            no: 2,
            name: "resuming",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$d616c2432f8916c3 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AvailabilityResponse", ()=>[
        {
            no: 1,
            name: "job_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "supports_resume",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "participant_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "participant_metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "participant_attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const $61b2884ab967cfb2$export$f50a6830b28b5dfc = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateJobStatus", ()=>[
        {
            no: 1,
            name: "job_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$132cc870506ec32)
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$b570ddad83c36ab1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateWorkerStatus", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$f44b31b408c0abf1),
            opt: true
        },
        {
            no: 3,
            name: "load",
            kind: "scalar",
            T: 2
        },
        {
            no: 4,
            name: "job_count",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$450cffe6adf3497f = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.JobAssignment", ()=>[
        {
            no: 1,
            name: "job",
            kind: "message",
            T: $61b2884ab967cfb2$export$7b04c00d7c69b169
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "token",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$b80f31a1f20ab57c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.JobTermination", ()=>[
        {
            no: 1,
            name: "job_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$23d61c93c3c3b75f = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateAgentDispatchRequest", ()=>[
        {
            no: 1,
            name: "agent_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "metadata",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$a2ed5fb7b7efeced = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomAgentDispatch", ()=>[
        {
            no: 1,
            name: "agent_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "metadata",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$541f37be6aac4ba1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DeleteAgentDispatchRequest", ()=>[
        {
            no: 1,
            name: "dispatch_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "room",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$c93b0455f0999823 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListAgentDispatchRequest", ()=>[
        {
            no: 1,
            name: "dispatch_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "room",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$da15edbf6d1044e5 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListAgentDispatchResponse", ()=>[
        {
            no: 1,
            name: "agent_dispatches",
            kind: "message",
            T: $61b2884ab967cfb2$export$65d25d04e3f11312,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$65d25d04e3f11312 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AgentDispatch", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "state",
            kind: "message",
            T: $61b2884ab967cfb2$export$dd6ad7c6f9c8a396
        }
    ]);
const $61b2884ab967cfb2$export$dd6ad7c6f9c8a396 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AgentDispatchState", ()=>[
        {
            no: 1,
            name: "jobs",
            kind: "message",
            T: $61b2884ab967cfb2$export$7b04c00d7c69b169,
            repeated: true
        },
        {
            no: 2,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "deleted_at",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$74cdb5dd96d0b875 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.EncodedFileType", [
    {
        no: 0,
        name: "DEFAULT_FILETYPE"
    },
    {
        no: 1,
        name: "MP4"
    },
    {
        no: 2,
        name: "OGG"
    }
]);
const $61b2884ab967cfb2$export$43be155fe0c6df92 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SegmentedFileProtocol", [
    {
        no: 0,
        name: "DEFAULT_SEGMENTED_FILE_PROTOCOL"
    },
    {
        no: 1,
        name: "HLS_PROTOCOL"
    }
]);
const $61b2884ab967cfb2$export$6441bc32f000ca7c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SegmentedFileSuffix", [
    {
        no: 0,
        name: "INDEX"
    },
    {
        no: 1,
        name: "TIMESTAMP"
    }
]);
const $61b2884ab967cfb2$export$1604feea7fc8f1ba = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.ImageFileSuffix", [
    {
        no: 0,
        name: "IMAGE_SUFFIX_INDEX"
    },
    {
        no: 1,
        name: "IMAGE_SUFFIX_TIMESTAMP"
    }
]);
const $61b2884ab967cfb2$export$f877dc4fddfb70ae = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.StreamProtocol", [
    {
        no: 0,
        name: "DEFAULT_PROTOCOL"
    },
    {
        no: 1,
        name: "RTMP"
    },
    {
        no: 2,
        name: "SRT"
    }
]);
const $61b2884ab967cfb2$export$c0c3f2286304cbd9 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.EncodingOptionsPreset", [
    {
        no: 0,
        name: "H264_720P_30"
    },
    {
        no: 1,
        name: "H264_720P_60"
    },
    {
        no: 2,
        name: "H264_1080P_30"
    },
    {
        no: 3,
        name: "H264_1080P_60"
    },
    {
        no: 4,
        name: "PORTRAIT_H264_720P_30"
    },
    {
        no: 5,
        name: "PORTRAIT_H264_720P_60"
    },
    {
        no: 6,
        name: "PORTRAIT_H264_1080P_30"
    },
    {
        no: 7,
        name: "PORTRAIT_H264_1080P_60"
    }
]);
const $61b2884ab967cfb2$export$20ec7b4b54fd6656 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.EgressStatus", [
    {
        no: 0,
        name: "EGRESS_STARTING"
    },
    {
        no: 1,
        name: "EGRESS_ACTIVE"
    },
    {
        no: 2,
        name: "EGRESS_ENDING"
    },
    {
        no: 3,
        name: "EGRESS_COMPLETE"
    },
    {
        no: 4,
        name: "EGRESS_FAILED"
    },
    {
        no: 5,
        name: "EGRESS_ABORTED"
    },
    {
        no: 6,
        name: "EGRESS_LIMIT_REACHED"
    }
]);
const $61b2884ab967cfb2$export$847f4610ddcdcc39 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.EgressSourceType", [
    {
        no: 0,
        name: "EGRESS_SOURCE_TYPE_WEB",
        localName: "WEB"
    },
    {
        no: 1,
        name: "EGRESS_SOURCE_TYPE_SDK",
        localName: "SDK"
    }
]);
const $61b2884ab967cfb2$export$246ecbc99f8e588b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomCompositeEgressRequest", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "layout",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "audio_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "video_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "custom_base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "file",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            oneof: "output"
        },
        {
            no: 7,
            name: "stream",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            oneof: "output"
        },
        {
            no: 10,
            name: "segments",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            oneof: "output"
        },
        {
            no: 8,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c0c3f2286304cbd9),
            oneof: "options"
        },
        {
            no: 9,
            name: "advanced",
            kind: "message",
            T: $61b2884ab967cfb2$export$21538191038bccdc,
            oneof: "options"
        },
        {
            no: 11,
            name: "file_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            repeated: true
        },
        {
            no: 12,
            name: "stream_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            repeated: true
        },
        {
            no: 13,
            name: "segment_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            repeated: true
        },
        {
            no: 14,
            name: "image_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$2cb1041e6e049622,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$315faafa94b3d284 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.WebEgressRequest", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "audio_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "video_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "await_start_signal",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "file",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            oneof: "output"
        },
        {
            no: 5,
            name: "stream",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            oneof: "output"
        },
        {
            no: 6,
            name: "segments",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            oneof: "output"
        },
        {
            no: 7,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c0c3f2286304cbd9),
            oneof: "options"
        },
        {
            no: 8,
            name: "advanced",
            kind: "message",
            T: $61b2884ab967cfb2$export$21538191038bccdc,
            oneof: "options"
        },
        {
            no: 9,
            name: "file_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            repeated: true
        },
        {
            no: 10,
            name: "stream_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            repeated: true
        },
        {
            no: 11,
            name: "segment_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            repeated: true
        },
        {
            no: 13,
            name: "image_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$2cb1041e6e049622,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$df4ce648af696991 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ParticipantEgressRequest", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "screen_share",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c0c3f2286304cbd9),
            oneof: "options"
        },
        {
            no: 5,
            name: "advanced",
            kind: "message",
            T: $61b2884ab967cfb2$export$21538191038bccdc,
            oneof: "options"
        },
        {
            no: 6,
            name: "file_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            repeated: true
        },
        {
            no: 7,
            name: "stream_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            repeated: true
        },
        {
            no: 8,
            name: "segment_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            repeated: true
        },
        {
            no: 9,
            name: "image_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$2cb1041e6e049622,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$9cd20a9017807414 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackCompositeEgressRequest", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "audio_track_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "video_track_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "file",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            oneof: "output"
        },
        {
            no: 5,
            name: "stream",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            oneof: "output"
        },
        {
            no: 8,
            name: "segments",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            oneof: "output"
        },
        {
            no: 6,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c0c3f2286304cbd9),
            oneof: "options"
        },
        {
            no: 7,
            name: "advanced",
            kind: "message",
            T: $61b2884ab967cfb2$export$21538191038bccdc,
            oneof: "options"
        },
        {
            no: 11,
            name: "file_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            repeated: true
        },
        {
            no: 12,
            name: "stream_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ff45fb0b9bb5745,
            repeated: true
        },
        {
            no: 13,
            name: "segment_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            repeated: true
        },
        {
            no: 14,
            name: "image_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$2cb1041e6e049622,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$abade7d6c0af35bb = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackEgressRequest", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "track_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file",
            kind: "message",
            T: $61b2884ab967cfb2$export$55635c1ee8004c6e,
            oneof: "output"
        },
        {
            no: 4,
            name: "websocket_url",
            kind: "scalar",
            T: 9,
            oneof: "output"
        }
    ]);
const $61b2884ab967cfb2$export$4ed550085e6eb0ee = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.EncodedFileOutput", ()=>[
        {
            no: 1,
            name: "file_type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$74cdb5dd96d0b875)
        },
        {
            no: 2,
            name: "filepath",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "disable_manifest",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "s3",
            kind: "message",
            T: $61b2884ab967cfb2$export$1e96928291841abf,
            oneof: "output"
        },
        {
            no: 4,
            name: "gcp",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf9208b76385b9e3,
            oneof: "output"
        },
        {
            no: 5,
            name: "azure",
            kind: "message",
            T: $61b2884ab967cfb2$export$cfac0babe4526224,
            oneof: "output"
        },
        {
            no: 7,
            name: "aliOSS",
            kind: "message",
            T: $61b2884ab967cfb2$export$475d2fc3932f5b87,
            oneof: "output"
        }
    ]);
const $61b2884ab967cfb2$export$f43e9edee7962cc = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SegmentedFileOutput", ()=>[
        {
            no: 1,
            name: "protocol",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$43be155fe0c6df92)
        },
        {
            no: 2,
            name: "filename_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "playlist_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "live_playlist_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "segment_duration",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "filename_suffix",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$6441bc32f000ca7c)
        },
        {
            no: 8,
            name: "disable_manifest",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "s3",
            kind: "message",
            T: $61b2884ab967cfb2$export$1e96928291841abf,
            oneof: "output"
        },
        {
            no: 6,
            name: "gcp",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf9208b76385b9e3,
            oneof: "output"
        },
        {
            no: 7,
            name: "azure",
            kind: "message",
            T: $61b2884ab967cfb2$export$cfac0babe4526224,
            oneof: "output"
        },
        {
            no: 9,
            name: "aliOSS",
            kind: "message",
            T: $61b2884ab967cfb2$export$475d2fc3932f5b87,
            oneof: "output"
        }
    ]);
const $61b2884ab967cfb2$export$55635c1ee8004c6e = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DirectFileOutput", ()=>[
        {
            no: 1,
            name: "filepath",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "disable_manifest",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "s3",
            kind: "message",
            T: $61b2884ab967cfb2$export$1e96928291841abf,
            oneof: "output"
        },
        {
            no: 3,
            name: "gcp",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf9208b76385b9e3,
            oneof: "output"
        },
        {
            no: 4,
            name: "azure",
            kind: "message",
            T: $61b2884ab967cfb2$export$cfac0babe4526224,
            oneof: "output"
        },
        {
            no: 6,
            name: "aliOSS",
            kind: "message",
            T: $61b2884ab967cfb2$export$475d2fc3932f5b87,
            oneof: "output"
        }
    ]);
const $61b2884ab967cfb2$export$2cb1041e6e049622 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ImageOutput", ()=>[
        {
            no: 1,
            name: "capture_interval",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "height",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "filename_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "filename_suffix",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$1604feea7fc8f1ba)
        },
        {
            no: 6,
            name: "image_codec",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$ee7ddabbbabdf56b)
        },
        {
            no: 7,
            name: "disable_manifest",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "s3",
            kind: "message",
            T: $61b2884ab967cfb2$export$1e96928291841abf,
            oneof: "output"
        },
        {
            no: 9,
            name: "gcp",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf9208b76385b9e3,
            oneof: "output"
        },
        {
            no: 10,
            name: "azure",
            kind: "message",
            T: $61b2884ab967cfb2$export$cfac0babe4526224,
            oneof: "output"
        },
        {
            no: 11,
            name: "aliOSS",
            kind: "message",
            T: $61b2884ab967cfb2$export$475d2fc3932f5b87,
            oneof: "output"
        }
    ]);
const $61b2884ab967cfb2$export$1e96928291841abf = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.S3Upload", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "session_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "endpoint",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "bucket",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "force_path_style",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "tagging",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "content_disposition",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "proxy",
            kind: "message",
            T: $61b2884ab967cfb2$export$7920f8362473c544
        }
    ]);
const $61b2884ab967cfb2$export$cf9208b76385b9e3 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.GCPUpload", ()=>[
        {
            no: 1,
            name: "credentials",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bucket",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "proxy",
            kind: "message",
            T: $61b2884ab967cfb2$export$7920f8362473c544
        }
    ]);
const $61b2884ab967cfb2$export$cfac0babe4526224 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AzureBlobUpload", ()=>[
        {
            no: 1,
            name: "account_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "account_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "container_name",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$475d2fc3932f5b87 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AliOSSUpload", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "endpoint",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "bucket",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$7920f8362473c544 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ProxyConfig", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "password",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$3ff45fb0b9bb5745 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.StreamOutput", ()=>[
        {
            no: 1,
            name: "protocol",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$f877dc4fddfb70ae)
        },
        {
            no: 2,
            name: "urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$21538191038bccdc = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.EncodingOptions", ()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "depth",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "framerate",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "audio_codec",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$d626aa474c998238)
        },
        {
            no: 6,
            name: "audio_bitrate",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "audio_quality",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "audio_frequency",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "video_codec",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$f9f1f6ac19dea951)
        },
        {
            no: 9,
            name: "video_bitrate",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "video_quality",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "key_frame_interval",
            kind: "scalar",
            T: 1
        }
    ]);
const $61b2884ab967cfb2$export$2d497e9f144595bb = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateLayoutRequest", ()=>[
        {
            no: 1,
            name: "egress_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "layout",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$f80580ded392d16d = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateStreamRequest", ()=>[
        {
            no: 1,
            name: "egress_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "add_output_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "remove_output_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5ac9e6a3f06d64a4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListEgressRequest", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "egress_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "active",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$93e604365793a616 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListEgressResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: $61b2884ab967cfb2$export$f048c27fbab07545,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$15fafcca58ae0285 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.StopEgressRequest", ()=>[
        {
            no: 1,
            name: "egress_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$f048c27fbab07545 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.EgressInfo", ()=>[
        {
            no: 1,
            name: "egress_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "room_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 26,
            name: "source_type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$847f4610ddcdcc39)
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$20ec7b4b54fd6656)
        },
        {
            no: 10,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 11,
            name: "ended_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 18,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 21,
            name: "details",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "error_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "room_composite",
            kind: "message",
            T: $61b2884ab967cfb2$export$246ecbc99f8e588b,
            oneof: "request"
        },
        {
            no: 14,
            name: "web",
            kind: "message",
            T: $61b2884ab967cfb2$export$315faafa94b3d284,
            oneof: "request"
        },
        {
            no: 19,
            name: "participant",
            kind: "message",
            T: $61b2884ab967cfb2$export$df4ce648af696991,
            oneof: "request"
        },
        {
            no: 5,
            name: "track_composite",
            kind: "message",
            T: $61b2884ab967cfb2$export$9cd20a9017807414,
            oneof: "request"
        },
        {
            no: 6,
            name: "track",
            kind: "message",
            T: $61b2884ab967cfb2$export$abade7d6c0af35bb,
            oneof: "request"
        },
        {
            no: 7,
            name: "stream",
            kind: "message",
            T: $61b2884ab967cfb2$export$44db3c381b5aaf4c,
            oneof: "result"
        },
        {
            no: 8,
            name: "file",
            kind: "message",
            T: $61b2884ab967cfb2$export$ed1691d2cf171468,
            oneof: "result"
        },
        {
            no: 12,
            name: "segments",
            kind: "message",
            T: $61b2884ab967cfb2$export$8ec49a1bb588d107,
            oneof: "result"
        },
        {
            no: 15,
            name: "stream_results",
            kind: "message",
            T: $61b2884ab967cfb2$export$2271b658dd3c0705,
            repeated: true
        },
        {
            no: 16,
            name: "file_results",
            kind: "message",
            T: $61b2884ab967cfb2$export$ed1691d2cf171468,
            repeated: true
        },
        {
            no: 17,
            name: "segment_results",
            kind: "message",
            T: $61b2884ab967cfb2$export$8ec49a1bb588d107,
            repeated: true
        },
        {
            no: 20,
            name: "image_results",
            kind: "message",
            T: $61b2884ab967cfb2$export$97b58f8aada1ac5a,
            repeated: true
        },
        {
            no: 23,
            name: "manifest_location",
            kind: "scalar",
            T: 9
        },
        {
            no: 25,
            name: "backup_storage_used",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$44db3c381b5aaf4c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.StreamInfoList", ()=>[
        {
            no: 1,
            name: "info",
            kind: "message",
            T: $61b2884ab967cfb2$export$2271b658dd3c0705,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$2271b658dd3c0705 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.StreamInfo", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "ended_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "duration",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$5dce74b914b7e793)
        },
        {
            no: 6,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$5dce74b914b7e793 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.StreamInfo.Status", [
    {
        no: 0,
        name: "ACTIVE"
    },
    {
        no: 1,
        name: "FINISHED"
    },
    {
        no: 2,
        name: "FAILED"
    }
]);
const $61b2884ab967cfb2$export$ed1691d2cf171468 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.FileInfo", ()=>[
        {
            no: 1,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "ended_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "duration",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "size",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "location",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$8ec49a1bb588d107 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SegmentsInfo", ()=>[
        {
            no: 1,
            name: "playlist_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "live_playlist_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "size",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "playlist_location",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "live_playlist_location",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "segment_count",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "ended_at",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$97b58f8aada1ac5a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ImagesInfo", ()=>[
        {
            no: 4,
            name: "filename_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 1,
            name: "image_count",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "ended_at",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$9c204f70ac554243 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AutoParticipantEgress", ()=>[
        {
            no: 1,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c0c3f2286304cbd9),
            oneof: "options"
        },
        {
            no: 2,
            name: "advanced",
            kind: "message",
            T: $61b2884ab967cfb2$export$21538191038bccdc,
            oneof: "options"
        },
        {
            no: 3,
            name: "file_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$4ed550085e6eb0ee,
            repeated: true
        },
        {
            no: 4,
            name: "segment_outputs",
            kind: "message",
            T: $61b2884ab967cfb2$export$f43e9edee7962cc,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$e309b78640f15743 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AutoTrackEgress", ()=>[
        {
            no: 1,
            name: "filepath",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "disable_manifest",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "s3",
            kind: "message",
            T: $61b2884ab967cfb2$export$1e96928291841abf,
            oneof: "output"
        },
        {
            no: 3,
            name: "gcp",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf9208b76385b9e3,
            oneof: "output"
        },
        {
            no: 4,
            name: "azure",
            kind: "message",
            T: $61b2884ab967cfb2$export$cfac0babe4526224,
            oneof: "output"
        },
        {
            no: 6,
            name: "aliOSS",
            kind: "message",
            T: $61b2884ab967cfb2$export$475d2fc3932f5b87,
            oneof: "output"
        }
    ]);
const $61b2884ab967cfb2$export$70b5c4a3b5322d1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.IngressInput", [
    {
        no: 0,
        name: "RTMP_INPUT"
    },
    {
        no: 1,
        name: "WHIP_INPUT"
    },
    {
        no: 2,
        name: "URL_INPUT"
    }
]);
const $61b2884ab967cfb2$export$8a806f193252926b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.IngressAudioEncodingPreset", [
    {
        no: 0,
        name: "OPUS_STEREO_96KBPS"
    },
    {
        no: 1,
        name: "OPUS_MONO_64KBS"
    }
]);
const $61b2884ab967cfb2$export$db60bfd3380e2db8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.IngressVideoEncodingPreset", [
    {
        no: 0,
        name: "H264_720P_30FPS_3_LAYERS"
    },
    {
        no: 1,
        name: "H264_1080P_30FPS_3_LAYERS"
    },
    {
        no: 2,
        name: "H264_540P_25FPS_2_LAYERS"
    },
    {
        no: 3,
        name: "H264_720P_30FPS_1_LAYER"
    },
    {
        no: 4,
        name: "H264_1080P_30FPS_1_LAYER"
    },
    {
        no: 5,
        name: "H264_720P_30FPS_3_LAYERS_HIGH_MOTION"
    },
    {
        no: 6,
        name: "H264_1080P_30FPS_3_LAYERS_HIGH_MOTION"
    },
    {
        no: 7,
        name: "H264_540P_25FPS_2_LAYERS_HIGH_MOTION"
    },
    {
        no: 8,
        name: "H264_720P_30FPS_1_LAYER_HIGH_MOTION"
    },
    {
        no: 9,
        name: "H264_1080P_30FPS_1_LAYER_HIGH_MOTION"
    }
]);
const $61b2884ab967cfb2$export$d12a1bfce75c7286 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateIngressRequest", ()=>[
        {
            no: 1,
            name: "input_type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$70b5c4a3b5322d1)
        },
        {
            no: 9,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "participant_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "participant_metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "bypass_transcoding",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "enable_transcoding",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "audio",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf1b4dffdc3684e3
        },
        {
            no: 7,
            name: "video",
            kind: "message",
            T: $61b2884ab967cfb2$export$a588b955d7bcc484
        }
    ]);
const $61b2884ab967cfb2$export$cf1b4dffdc3684e3 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.IngressAudioOptions", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$cbf5c0994e5bc5f2)
        },
        {
            no: 3,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$8a806f193252926b),
            oneof: "encoding_options"
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: $61b2884ab967cfb2$export$301cecfa1c982bef,
            oneof: "encoding_options"
        }
    ]);
const $61b2884ab967cfb2$export$a588b955d7bcc484 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.IngressVideoOptions", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$cbf5c0994e5bc5f2)
        },
        {
            no: 3,
            name: "preset",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$db60bfd3380e2db8),
            oneof: "encoding_options"
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: $61b2884ab967cfb2$export$a2200e3836493812,
            oneof: "encoding_options"
        }
    ]);
const $61b2884ab967cfb2$export$301cecfa1c982bef = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.IngressAudioEncodingOptions", ()=>[
        {
            no: 1,
            name: "audio_codec",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$d626aa474c998238)
        },
        {
            no: 2,
            name: "bitrate",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "disable_dtx",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "channels",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$a2200e3836493812 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.IngressVideoEncodingOptions", ()=>[
        {
            no: 1,
            name: "video_codec",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$f9f1f6ac19dea951)
        },
        {
            no: 2,
            name: "frame_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "layers",
            kind: "message",
            T: $61b2884ab967cfb2$export$db95ebe82dfe7c3c,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5674ac8ebaa0976b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.IngressInfo", ()=>[
        {
            no: 1,
            name: "ingress_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stream_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "input_type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$70b5c4a3b5322d1)
        },
        {
            no: 13,
            name: "bypass_transcoding",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "enable_transcoding",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "audio",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf1b4dffdc3684e3
        },
        {
            no: 7,
            name: "video",
            kind: "message",
            T: $61b2884ab967cfb2$export$a588b955d7bcc484
        },
        {
            no: 8,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "participant_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "participant_metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "reusable",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "state",
            kind: "message",
            T: $61b2884ab967cfb2$export$3a3579f28ae4f0bf
        }
    ]);
const $61b2884ab967cfb2$export$3a3579f28ae4f0bf = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.IngressState", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$5ab02d50bd827eb6)
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "video",
            kind: "message",
            T: $61b2884ab967cfb2$export$7f60bf3a6b2c79d1
        },
        {
            no: 4,
            name: "audio",
            kind: "message",
            T: $61b2884ab967cfb2$export$bfcd694facf58d7c
        },
        {
            no: 5,
            name: "room_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "ended_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "resource_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "tracks",
            kind: "message",
            T: $61b2884ab967cfb2$export$7872447382cf3226,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5ab02d50bd827eb6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.IngressState.Status", [
    {
        no: 0,
        name: "ENDPOINT_INACTIVE"
    },
    {
        no: 1,
        name: "ENDPOINT_BUFFERING"
    },
    {
        no: 2,
        name: "ENDPOINT_PUBLISHING"
    },
    {
        no: 3,
        name: "ENDPOINT_ERROR"
    },
    {
        no: 4,
        name: "ENDPOINT_COMPLETE"
    }
]);
const $61b2884ab967cfb2$export$7f60bf3a6b2c79d1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.InputVideoState", ()=>[
        {
            no: 1,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "average_bitrate",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "width",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "height",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "framerate",
            kind: "scalar",
            T: 1
        }
    ]);
const $61b2884ab967cfb2$export$bfcd694facf58d7c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.InputAudioState", ()=>[
        {
            no: 1,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "average_bitrate",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "channels",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "sample_rate",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$dd709c674b055b3b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateIngressRequest", ()=>[
        {
            no: 1,
            name: "ingress_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "participant_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "participant_metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "bypass_transcoding",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "enable_transcoding",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "audio",
            kind: "message",
            T: $61b2884ab967cfb2$export$cf1b4dffdc3684e3
        },
        {
            no: 7,
            name: "video",
            kind: "message",
            T: $61b2884ab967cfb2$export$a588b955d7bcc484
        }
    ]);
const $61b2884ab967cfb2$export$edf18179d03e7ae1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListIngressRequest", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ingress_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$629e58d25d0ef00 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListIngressResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: $61b2884ab967cfb2$export$5674ac8ebaa0976b,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$8356c2a87de1a8a3 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DeleteIngressRequest", ()=>[
        {
            no: 1,
            name: "ingress_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$a60a29f8aeb8a7d2 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateRoomRequest", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "room_preset",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "empty_timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "departure_timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "max_participants",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "egress",
            kind: "message",
            T: $61b2884ab967cfb2$export$ed718998c51d2b98
        },
        {
            no: 7,
            name: "min_playout_delay",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "max_playout_delay",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "sync_streams",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "replay_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "agents",
            kind: "message",
            T: $61b2884ab967cfb2$export$a2ed5fb7b7efeced,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$ed718998c51d2b98 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomEgress", ()=>[
        {
            no: 1,
            name: "room",
            kind: "message",
            T: $61b2884ab967cfb2$export$246ecbc99f8e588b
        },
        {
            no: 3,
            name: "participant",
            kind: "message",
            T: $61b2884ab967cfb2$export$9c204f70ac554243
        },
        {
            no: 2,
            name: "tracks",
            kind: "message",
            T: $61b2884ab967cfb2$export$e309b78640f15743
        }
    ]);
const $61b2884ab967cfb2$export$80d542dbff59dc3f = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomAgent", ()=>[
        {
            no: 1,
            name: "dispatches",
            kind: "message",
            T: $61b2884ab967cfb2$export$a2ed5fb7b7efeced,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$e554e3c84e0ba5ce = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListRoomsRequest", ()=>[
        {
            no: 1,
            name: "names",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$3b15bc6ecf8fc7d1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListRoomsResponse", ()=>[
        {
            no: 1,
            name: "rooms",
            kind: "message",
            T: $61b2884ab967cfb2$export$525628e68e798fb4,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$afa8f43fff04b9dd = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DeleteRoomRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$1dfeeca262f6b7c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DeleteRoomResponse", []);
const $61b2884ab967cfb2$export$89a91e2a3a1dbc06 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListParticipantsRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$a51135d3a9158479 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListParticipantsResponse", ()=>[
        {
            no: 1,
            name: "participants",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5f08bc7f07d9eb16 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomParticipantIdentity", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identity",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$7be8fde14be726 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RemoveParticipantResponse", []);
const $61b2884ab967cfb2$export$1c4befe24a814bff = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.MuteRoomTrackRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "muted",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$b98dae56dfe6bb6c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.MuteRoomTrackResponse", ()=>[
        {
            no: 1,
            name: "track",
            kind: "message",
            T: $61b2884ab967cfb2$export$7872447382cf3226
        }
    ]);
const $61b2884ab967cfb2$export$894f49bf2e62980 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateParticipantRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "permission",
            kind: "message",
            T: $61b2884ab967cfb2$export$b214b7afef2b0eed
        },
        {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const $61b2884ab967cfb2$export$1c24f2f432c4e799 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateSubscriptionsRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "track_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "subscribe",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "participant_tracks",
            kind: "message",
            T: $61b2884ab967cfb2$export$c2bc2384f026e3b,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$46c120b6ed404a99 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateSubscriptionsResponse", []);
const $61b2884ab967cfb2$export$b07333342802d3db = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SendDataRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$629a0ea4ceb9e4a6)
        },
        {
            no: 4,
            name: "destination_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "destination_identities",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "topic",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const $61b2884ab967cfb2$export$5eb7abb508a7ea4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SendDataResponse", []);
const $61b2884ab967cfb2$export$2b7ec129b0bb2843 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateRoomMetadataRequest", ()=>[
        {
            no: 1,
            name: "room",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "metadata",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$cd2994f6322b7077 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomConfiguration", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "empty_timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "departure_timeout",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "max_participants",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "egress",
            kind: "message",
            T: $61b2884ab967cfb2$export$ed718998c51d2b98
        },
        {
            no: 7,
            name: "min_playout_delay",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "max_playout_delay",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "sync_streams",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "agents",
            kind: "message",
            T: $61b2884ab967cfb2$export$a2ed5fb7b7efeced,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$9ccb3886e85151c2 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SignalTarget", [
    {
        no: 0,
        name: "PUBLISHER"
    },
    {
        no: 1,
        name: "SUBSCRIBER"
    }
]);
const $61b2884ab967cfb2$export$1e30ae929d5b80ef = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.StreamState", [
    {
        no: 0,
        name: "ACTIVE"
    },
    {
        no: 1,
        name: "PAUSED"
    }
]);
const $61b2884ab967cfb2$export$86b8261e3b267cd2 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.CandidateProtocol", [
    {
        no: 0,
        name: "UDP"
    },
    {
        no: 1,
        name: "TCP"
    },
    {
        no: 2,
        name: "TLS"
    }
]);
const $61b2884ab967cfb2$export$3a18d15e5137ccc0 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SignalRequest", ()=>[
        {
            no: 1,
            name: "offer",
            kind: "message",
            T: $61b2884ab967cfb2$export$21d3ef27df7c392e,
            oneof: "message"
        },
        {
            no: 2,
            name: "answer",
            kind: "message",
            T: $61b2884ab967cfb2$export$21d3ef27df7c392e,
            oneof: "message"
        },
        {
            no: 3,
            name: "trickle",
            kind: "message",
            T: $61b2884ab967cfb2$export$6d5af36c13595df7,
            oneof: "message"
        },
        {
            no: 4,
            name: "add_track",
            kind: "message",
            T: $61b2884ab967cfb2$export$e71784a759946ea4,
            oneof: "message"
        },
        {
            no: 5,
            name: "mute",
            kind: "message",
            T: $61b2884ab967cfb2$export$a901d0e17da37631,
            oneof: "message"
        },
        {
            no: 6,
            name: "subscription",
            kind: "message",
            T: $61b2884ab967cfb2$export$24bb788cc31ebf3b,
            oneof: "message"
        },
        {
            no: 7,
            name: "track_setting",
            kind: "message",
            T: $61b2884ab967cfb2$export$11046ca92284c8bd,
            oneof: "message"
        },
        {
            no: 8,
            name: "leave",
            kind: "message",
            T: $61b2884ab967cfb2$export$6ba128663b55c940,
            oneof: "message"
        },
        {
            no: 10,
            name: "update_layers",
            kind: "message",
            T: $61b2884ab967cfb2$export$7c141c45ed8da89d,
            oneof: "message"
        },
        {
            no: 11,
            name: "subscription_permission",
            kind: "message",
            T: $61b2884ab967cfb2$export$158e7416aa787976,
            oneof: "message"
        },
        {
            no: 12,
            name: "sync_state",
            kind: "message",
            T: $61b2884ab967cfb2$export$8c8eabe8748e941e,
            oneof: "message"
        },
        {
            no: 13,
            name: "simulate",
            kind: "message",
            T: $61b2884ab967cfb2$export$71e44c0780abfbd6,
            oneof: "message"
        },
        {
            no: 14,
            name: "ping",
            kind: "scalar",
            T: 3,
            oneof: "message"
        },
        {
            no: 15,
            name: "update_metadata",
            kind: "message",
            T: $61b2884ab967cfb2$export$cd7ef6ff57dffa1a,
            oneof: "message"
        },
        {
            no: 16,
            name: "ping_req",
            kind: "message",
            T: $61b2884ab967cfb2$export$a88c495dfbdf4bad,
            oneof: "message"
        },
        {
            no: 17,
            name: "update_audio_track",
            kind: "message",
            T: $61b2884ab967cfb2$export$698d4520326ec2e5,
            oneof: "message"
        },
        {
            no: 18,
            name: "update_video_track",
            kind: "message",
            T: $61b2884ab967cfb2$export$6b14356350328202,
            oneof: "message"
        }
    ]);
const $61b2884ab967cfb2$export$fce6e5e2c496feb8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SignalResponse", ()=>[
        {
            no: 1,
            name: "join",
            kind: "message",
            T: $61b2884ab967cfb2$export$b92af232e7963647,
            oneof: "message"
        },
        {
            no: 2,
            name: "answer",
            kind: "message",
            T: $61b2884ab967cfb2$export$21d3ef27df7c392e,
            oneof: "message"
        },
        {
            no: 3,
            name: "offer",
            kind: "message",
            T: $61b2884ab967cfb2$export$21d3ef27df7c392e,
            oneof: "message"
        },
        {
            no: 4,
            name: "trickle",
            kind: "message",
            T: $61b2884ab967cfb2$export$6d5af36c13595df7,
            oneof: "message"
        },
        {
            no: 5,
            name: "update",
            kind: "message",
            T: $61b2884ab967cfb2$export$43ccc9c3e2b95626,
            oneof: "message"
        },
        {
            no: 6,
            name: "track_published",
            kind: "message",
            T: $61b2884ab967cfb2$export$ce2d0455a4ee7ebc,
            oneof: "message"
        },
        {
            no: 8,
            name: "leave",
            kind: "message",
            T: $61b2884ab967cfb2$export$6ba128663b55c940,
            oneof: "message"
        },
        {
            no: 9,
            name: "mute",
            kind: "message",
            T: $61b2884ab967cfb2$export$a901d0e17da37631,
            oneof: "message"
        },
        {
            no: 10,
            name: "speakers_changed",
            kind: "message",
            T: $61b2884ab967cfb2$export$6f959c02ffaa8d50,
            oneof: "message"
        },
        {
            no: 11,
            name: "room_update",
            kind: "message",
            T: $61b2884ab967cfb2$export$fbe738ecd2fa437e,
            oneof: "message"
        },
        {
            no: 12,
            name: "connection_quality",
            kind: "message",
            T: $61b2884ab967cfb2$export$7b4a9374b9a09724,
            oneof: "message"
        },
        {
            no: 13,
            name: "stream_state_update",
            kind: "message",
            T: $61b2884ab967cfb2$export$a58de09142f9a90,
            oneof: "message"
        },
        {
            no: 14,
            name: "subscribed_quality_update",
            kind: "message",
            T: $61b2884ab967cfb2$export$841379e2cfa0c8f3,
            oneof: "message"
        },
        {
            no: 15,
            name: "subscription_permission_update",
            kind: "message",
            T: $61b2884ab967cfb2$export$f93a629eb9188f52,
            oneof: "message"
        },
        {
            no: 16,
            name: "refresh_token",
            kind: "scalar",
            T: 9,
            oneof: "message"
        },
        {
            no: 17,
            name: "track_unpublished",
            kind: "message",
            T: $61b2884ab967cfb2$export$74ac104e276e5542,
            oneof: "message"
        },
        {
            no: 18,
            name: "pong",
            kind: "scalar",
            T: 3,
            oneof: "message"
        },
        {
            no: 19,
            name: "reconnect",
            kind: "message",
            T: $61b2884ab967cfb2$export$1c29f5d48992634b,
            oneof: "message"
        },
        {
            no: 20,
            name: "pong_resp",
            kind: "message",
            T: $61b2884ab967cfb2$export$6bdda1a2a95a6601,
            oneof: "message"
        },
        {
            no: 21,
            name: "subscription_response",
            kind: "message",
            T: $61b2884ab967cfb2$export$10f018921dd04b3a,
            oneof: "message"
        },
        {
            no: 22,
            name: "request_response",
            kind: "message",
            T: $61b2884ab967cfb2$export$e8d64659da2f91aa,
            oneof: "message"
        },
        {
            no: 23,
            name: "track_subscribed",
            kind: "message",
            T: $61b2884ab967cfb2$export$39e4d10273f67db,
            oneof: "message"
        }
    ]);
const $61b2884ab967cfb2$export$bd5ea3cad30b0432 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SimulcastCodec", ()=>[
        {
            no: 1,
            name: "codec",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cid",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$e71784a759946ea4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.AddTrackRequest", ()=>[
        {
            no: 1,
            name: "cid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$c2fc6e4ded3e0219)
        },
        {
            no: 4,
            name: "width",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "height",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "muted",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "disable_dtx",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "source",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$cbf5c0994e5bc5f2)
        },
        {
            no: 9,
            name: "layers",
            kind: "message",
            T: $61b2884ab967cfb2$export$db95ebe82dfe7c3c,
            repeated: true
        },
        {
            no: 10,
            name: "simulcast_codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$bd5ea3cad30b0432,
            repeated: true
        },
        {
            no: 11,
            name: "sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "stereo",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "disable_red",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "encryption",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$1efc488791285f20)
        },
        {
            no: 15,
            name: "stream",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$6d5af36c13595df7 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrickleRequest", ()=>[
        {
            no: 1,
            name: "candidateInit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$9ccb3886e85151c2)
        },
        {
            no: 3,
            name: "final",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$a901d0e17da37631 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.MuteTrackRequest", ()=>[
        {
            no: 1,
            name: "sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "muted",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$b92af232e7963647 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.JoinResponse", ()=>[
        {
            no: 1,
            name: "room",
            kind: "message",
            T: $61b2884ab967cfb2$export$525628e68e798fb4
        },
        {
            no: 2,
            name: "participant",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf
        },
        {
            no: 3,
            name: "other_participants",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf,
            repeated: true
        },
        {
            no: 4,
            name: "server_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "ice_servers",
            kind: "message",
            T: $61b2884ab967cfb2$export$39ff8d67c67715b6,
            repeated: true
        },
        {
            no: 6,
            name: "subscriber_primary",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "alternative_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "client_configuration",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ba8275ddc2e153c
        },
        {
            no: 9,
            name: "server_region",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "ping_timeout",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "ping_interval",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "server_info",
            kind: "message",
            T: $61b2884ab967cfb2$export$4a9790277f4f801c
        },
        {
            no: 13,
            name: "sif_trailer",
            kind: "scalar",
            T: 12
        },
        {
            no: 14,
            name: "enabled_publish_codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$a111e9ced3f1d2d0,
            repeated: true
        },
        {
            no: 15,
            name: "fast_publish",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$1c29f5d48992634b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ReconnectResponse", ()=>[
        {
            no: 1,
            name: "ice_servers",
            kind: "message",
            T: $61b2884ab967cfb2$export$39ff8d67c67715b6,
            repeated: true
        },
        {
            no: 2,
            name: "client_configuration",
            kind: "message",
            T: $61b2884ab967cfb2$export$3ba8275ddc2e153c
        }
    ]);
const $61b2884ab967cfb2$export$ce2d0455a4ee7ebc = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackPublishedResponse", ()=>[
        {
            no: 1,
            name: "cid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "track",
            kind: "message",
            T: $61b2884ab967cfb2$export$7872447382cf3226
        }
    ]);
const $61b2884ab967cfb2$export$74ac104e276e5542 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackUnpublishedResponse", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$21d3ef27df7c392e = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SessionDescription", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sdp",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$43ccc9c3e2b95626 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ParticipantUpdate", ()=>[
        {
            no: 1,
            name: "participants",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$24bb788cc31ebf3b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateSubscription", ()=>[
        {
            no: 1,
            name: "track_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "subscribe",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "participant_tracks",
            kind: "message",
            T: $61b2884ab967cfb2$export$c2bc2384f026e3b,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$11046ca92284c8bd = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateTrackSettings", ()=>[
        {
            no: 1,
            name: "track_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "disabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "quality",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$a8f593954e806155)
        },
        {
            no: 5,
            name: "width",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "height",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "fps",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "priority",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$698d4520326ec2e5 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateLocalAudioTrack", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "features",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$666d8416d84ce835),
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$6b14356350328202 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateLocalVideoTrack", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "width",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "height",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$6ba128663b55c940 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.LeaveRequest", ()=>[
        {
            no: 1,
            name: "can_reconnect",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reason",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$258d16488300d83f)
        },
        {
            no: 3,
            name: "action",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$12044459e0995243)
        },
        {
            no: 4,
            name: "regions",
            kind: "message",
            T: $61b2884ab967cfb2$export$d54c57b87973aef4
        }
    ]);
const $61b2884ab967cfb2$export$12044459e0995243 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.LeaveRequest.Action", [
    {
        no: 0,
        name: "DISCONNECT"
    },
    {
        no: 1,
        name: "RESUME"
    },
    {
        no: 2,
        name: "RECONNECT"
    }
]);
const $61b2884ab967cfb2$export$7c141c45ed8da89d = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateVideoLayers", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "layers",
            kind: "message",
            T: $61b2884ab967cfb2$export$db95ebe82dfe7c3c,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$cd7ef6ff57dffa1a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.UpdateParticipantMetadata", ()=>[
        {
            no: 1,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "request_id",
            kind: "scalar",
            T: 13
        }
    ]);
const $61b2884ab967cfb2$export$39ff8d67c67715b6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ICEServer", ()=>[
        {
            no: 1,
            name: "urls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "credential",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$6f959c02ffaa8d50 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SpeakersChanged", ()=>[
        {
            no: 1,
            name: "speakers",
            kind: "message",
            T: $61b2884ab967cfb2$export$100d91ab53f85ff4,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$fbe738ecd2fa437e = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RoomUpdate", ()=>[
        {
            no: 1,
            name: "room",
            kind: "message",
            T: $61b2884ab967cfb2$export$525628e68e798fb4
        }
    ]);
const $61b2884ab967cfb2$export$de6119551dec84ce = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ConnectionQualityInfo", ()=>[
        {
            no: 1,
            name: "participant_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "quality",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$16148de7856f4643)
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const $61b2884ab967cfb2$export$7b4a9374b9a09724 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ConnectionQualityUpdate", ()=>[
        {
            no: 1,
            name: "updates",
            kind: "message",
            T: $61b2884ab967cfb2$export$de6119551dec84ce,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$6a527f83a387b719 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.StreamStateInfo", ()=>[
        {
            no: 1,
            name: "participant_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "state",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$1e30ae929d5b80ef)
        }
    ]);
const $61b2884ab967cfb2$export$a58de09142f9a90 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.StreamStateUpdate", ()=>[
        {
            no: 1,
            name: "stream_states",
            kind: "message",
            T: $61b2884ab967cfb2$export$6a527f83a387b719,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$d97e5e6bddb6d0e9 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SubscribedQuality", ()=>[
        {
            no: 1,
            name: "quality",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$a8f593954e806155)
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$e9a3a3e30a446a8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SubscribedCodec", ()=>[
        {
            no: 1,
            name: "codec",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "qualities",
            kind: "message",
            T: $61b2884ab967cfb2$export$d97e5e6bddb6d0e9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$841379e2cfa0c8f3 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SubscribedQualityUpdate", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subscribed_qualities",
            kind: "message",
            T: $61b2884ab967cfb2$export$d97e5e6bddb6d0e9,
            repeated: true
        },
        {
            no: 3,
            name: "subscribed_codecs",
            kind: "message",
            T: $61b2884ab967cfb2$export$e9a3a3e30a446a8,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$22ac8b5f285642d6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackPermission", ()=>[
        {
            no: 1,
            name: "participant_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "all_tracks",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "track_sids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$158e7416aa787976 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SubscriptionPermission", ()=>[
        {
            no: 1,
            name: "all_participants",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "track_permissions",
            kind: "message",
            T: $61b2884ab967cfb2$export$22ac8b5f285642d6,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$f93a629eb9188f52 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SubscriptionPermissionUpdate", ()=>[
        {
            no: 1,
            name: "participant_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allowed",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$8c8eabe8748e941e = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SyncState", ()=>[
        {
            no: 1,
            name: "answer",
            kind: "message",
            T: $61b2884ab967cfb2$export$21d3ef27df7c392e
        },
        {
            no: 2,
            name: "subscription",
            kind: "message",
            T: $61b2884ab967cfb2$export$24bb788cc31ebf3b
        },
        {
            no: 3,
            name: "publish_tracks",
            kind: "message",
            T: $61b2884ab967cfb2$export$ce2d0455a4ee7ebc,
            repeated: true
        },
        {
            no: 4,
            name: "data_channels",
            kind: "message",
            T: $61b2884ab967cfb2$export$7ad7d9538ab542fe,
            repeated: true
        },
        {
            no: 5,
            name: "offer",
            kind: "message",
            T: $61b2884ab967cfb2$export$21d3ef27df7c392e
        },
        {
            no: 6,
            name: "track_sids_disabled",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$7ad7d9538ab542fe = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DataChannelInfo", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "target",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$9ccb3886e85151c2)
        }
    ]);
const $61b2884ab967cfb2$export$71e44c0780abfbd6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SimulateScenario", ()=>[
        {
            no: 1,
            name: "speaker_update",
            kind: "scalar",
            T: 5,
            oneof: "scenario"
        },
        {
            no: 2,
            name: "node_failure",
            kind: "scalar",
            T: 8,
            oneof: "scenario"
        },
        {
            no: 3,
            name: "migration",
            kind: "scalar",
            T: 8,
            oneof: "scenario"
        },
        {
            no: 4,
            name: "server_leave",
            kind: "scalar",
            T: 8,
            oneof: "scenario"
        },
        {
            no: 5,
            name: "switch_candidate_protocol",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$86b8261e3b267cd2),
            oneof: "scenario"
        },
        {
            no: 6,
            name: "subscriber_bandwidth",
            kind: "scalar",
            T: 3,
            oneof: "scenario"
        },
        {
            no: 7,
            name: "disconnect_signal_on_resume",
            kind: "scalar",
            T: 8,
            oneof: "scenario"
        },
        {
            no: 8,
            name: "disconnect_signal_on_resume_no_messages",
            kind: "scalar",
            T: 8,
            oneof: "scenario"
        },
        {
            no: 9,
            name: "leave_request_full_reconnect",
            kind: "scalar",
            T: 8,
            oneof: "scenario"
        }
    ]);
const $61b2884ab967cfb2$export$a88c495dfbdf4bad = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Ping", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "rtt",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$6bdda1a2a95a6601 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.Pong", ()=>[
        {
            no: 1,
            name: "last_ping_timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$d54c57b87973aef4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RegionSettings", ()=>[
        {
            no: 1,
            name: "regions",
            kind: "message",
            T: $61b2884ab967cfb2$export$2d50da3d4e28a964,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$2d50da3d4e28a964 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RegionInfo", ()=>[
        {
            no: 1,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "distance",
            kind: "scalar",
            T: 3
        }
    ]);
const $61b2884ab967cfb2$export$10f018921dd04b3a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SubscriptionResponse", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "err",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$7882d1e2e5429abf)
        }
    ]);
const $61b2884ab967cfb2$export$e8d64659da2f91aa = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.RequestResponse", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "reason",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$37bf5abd0643c7be)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$37bf5abd0643c7be = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.RequestResponse.Reason", [
    {
        no: 0,
        name: "OK"
    },
    {
        no: 1,
        name: "NOT_FOUND"
    },
    {
        no: 2,
        name: "NOT_ALLOWED"
    },
    {
        no: 3,
        name: "LIMIT_EXCEEDED"
    }
]);
const $61b2884ab967cfb2$export$39e4d10273f67db = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TrackSubscribed", ()=>[
        {
            no: 1,
            name: "track_sid",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$65b7d05ef33678e1 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SIPTransport", [
    {
        no: 0,
        name: "SIP_TRANSPORT_AUTO"
    },
    {
        no: 1,
        name: "SIP_TRANSPORT_UDP"
    },
    {
        no: 2,
        name: "SIP_TRANSPORT_TCP"
    },
    {
        no: 3,
        name: "SIP_TRANSPORT_TLS"
    }
]);
const $61b2884ab967cfb2$export$9b8879bf3d2413f5 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SIPHeaderOptions", [
    {
        no: 0,
        name: "SIP_NO_HEADERS"
    },
    {
        no: 1,
        name: "SIP_X_HEADERS"
    },
    {
        no: 2,
        name: "SIP_ALL_HEADERS"
    }
]);
const $61b2884ab967cfb2$export$a43ac2dd6f717ced = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SIPCallStatus", [
    {
        no: 0,
        name: "SCS_CALL_INCOMING"
    },
    {
        no: 1,
        name: "SCS_PARTICIPANT_JOINED"
    },
    {
        no: 2,
        name: "SCS_ACTIVE"
    },
    {
        no: 3,
        name: "SCS_DISCONNECTED"
    },
    {
        no: 4,
        name: "SCS_ERROR"
    }
]);
const $61b2884ab967cfb2$export$e2e8f5f3b80f4f5 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SIPFeature", [
    {
        no: 0,
        name: "NONE"
    },
    {
        no: 1,
        name: "KRISP_ENABLED"
    }
]);
const $61b2884ab967cfb2$export$4b69a88733933eff = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateSIPTrunkRequest", ()=>[
        {
            no: 1,
            name: "inbound_addresses",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "outbound_address",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "outbound_number",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "inbound_numbers_regex",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 9,
            name: "inbound_numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "inbound_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "inbound_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "outbound_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "outbound_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "metadata",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$b329bc51714a3ca6 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPTrunkInfo", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "kind",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$66db06dee8f54948)
        },
        {
            no: 2,
            name: "inbound_addresses",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "outbound_address",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "outbound_number",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "transport",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$65b7d05ef33678e1)
        },
        {
            no: 5,
            name: "inbound_numbers_regex",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "inbound_numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "inbound_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "inbound_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "outbound_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "outbound_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "metadata",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$66db06dee8f54948 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeEnum("livekit.SIPTrunkInfo.TrunkKind", [
    {
        no: 0,
        name: "TRUNK_LEGACY"
    },
    {
        no: 1,
        name: "TRUNK_INBOUND"
    },
    {
        no: 2,
        name: "TRUNK_OUTBOUND"
    }
]);
const $61b2884ab967cfb2$export$aa3359104cf4dc09 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateSIPInboundTrunkRequest", ()=>[
        {
            no: 1,
            name: "trunk",
            kind: "message",
            T: $61b2884ab967cfb2$export$6fd6c8cbad93f89e
        }
    ]);
const $61b2884ab967cfb2$export$6fd6c8cbad93f89e = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPInboundTrunkInfo", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "allowed_addresses",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "allowed_numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "auth_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "auth_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 10,
            name: "headers_to_attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 14,
            name: "attributes_to_headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 15,
            name: "include_headers",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$9b8879bf3d2413f5)
        },
        {
            no: 11,
            name: "ringing_timeout",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Duration)
        },
        {
            no: 12,
            name: "max_call_duration",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Duration)
        },
        {
            no: 13,
            name: "krisp_enabled",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$8cf3da13d6d7162b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateSIPOutboundTrunkRequest", ()=>[
        {
            no: 1,
            name: "trunk",
            kind: "message",
            T: $61b2884ab967cfb2$export$a6099ce2dff7b8ef
        }
    ]);
const $61b2884ab967cfb2$export$a6099ce2dff7b8ef = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPOutboundTrunkInfo", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "address",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "transport",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$65b7d05ef33678e1)
        },
        {
            no: 6,
            name: "numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "auth_username",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "auth_password",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 10,
            name: "headers_to_attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 11,
            name: "attributes_to_headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 12,
            name: "include_headers",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$9b8879bf3d2413f5)
        }
    ]);
const $61b2884ab967cfb2$export$fb43f88cb191b930 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.GetSIPInboundTrunkRequest", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$2fa8e90b9df16775 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.GetSIPInboundTrunkResponse", ()=>[
        {
            no: 1,
            name: "trunk",
            kind: "message",
            T: $61b2884ab967cfb2$export$6fd6c8cbad93f89e
        }
    ]);
const $61b2884ab967cfb2$export$e9cf3a09b09ecf7c = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.GetSIPOutboundTrunkRequest", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$f03f52f55564e335 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.GetSIPOutboundTrunkResponse", ()=>[
        {
            no: 1,
            name: "trunk",
            kind: "message",
            T: $61b2884ab967cfb2$export$a6099ce2dff7b8ef
        }
    ]);
const $61b2884ab967cfb2$export$78e9dbe2ba6abf37 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPTrunkRequest", []);
const $61b2884ab967cfb2$export$9e46482adca3a615 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPTrunkResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: $61b2884ab967cfb2$export$b329bc51714a3ca6,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$ab2a2b329b6800b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPInboundTrunkRequest", ()=>[
        {
            no: 1,
            name: "trunk_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$88fe64fd0f7db58b = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPInboundTrunkResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: $61b2884ab967cfb2$export$6fd6c8cbad93f89e,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$4089eef80a0a85c4 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPOutboundTrunkRequest", ()=>[
        {
            no: 1,
            name: "trunk_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$709e160a6c9dfdce = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPOutboundTrunkResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: $61b2884ab967cfb2$export$a6099ce2dff7b8ef,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$7d22cd396d88af12 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DeleteSIPTrunkRequest", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$56de8e9d817e6192 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPDispatchRuleDirect", ()=>[
        {
            no: 1,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pin",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$8454de0782bee34d = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPDispatchRuleIndividual", ()=>[
        {
            no: 1,
            name: "room_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pin",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$26e39f230f42b8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPDispatchRuleCallee", ()=>[
        {
            no: 1,
            name: "room_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pin",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "randomize",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$e462b76df16f84d8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPDispatchRule", ()=>[
        {
            no: 1,
            name: "dispatch_rule_direct",
            kind: "message",
            T: $61b2884ab967cfb2$export$56de8e9d817e6192,
            oneof: "rule"
        },
        {
            no: 2,
            name: "dispatch_rule_individual",
            kind: "message",
            T: $61b2884ab967cfb2$export$8454de0782bee34d,
            oneof: "rule"
        },
        {
            no: 3,
            name: "dispatch_rule_callee",
            kind: "message",
            T: $61b2884ab967cfb2$export$26e39f230f42b8,
            oneof: "rule"
        }
    ]);
const $61b2884ab967cfb2$export$e0372a098096ab24 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateSIPDispatchRuleRequest", ()=>[
        {
            no: 1,
            name: "rule",
            kind: "message",
            T: $61b2884ab967cfb2$export$e462b76df16f84d8
        },
        {
            no: 2,
            name: "trunk_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "hide_phone_number",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "inbound_numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "room_preset",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "room_config",
            kind: "message",
            T: $61b2884ab967cfb2$export$cd2994f6322b7077
        }
    ]);
const $61b2884ab967cfb2$export$dbe540358fff9ea8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPDispatchRuleInfo", ()=>[
        {
            no: 1,
            name: "sip_dispatch_rule_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rule",
            kind: "message",
            T: $61b2884ab967cfb2$export$e462b76df16f84d8
        },
        {
            no: 3,
            name: "trunk_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "hide_phone_number",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "inbound_numbers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "room_preset",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "room_config",
            kind: "message",
            T: $61b2884ab967cfb2$export$cd2994f6322b7077
        }
    ]);
const $61b2884ab967cfb2$export$1ad02cbba0e29950 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPDispatchRuleRequest", ()=>[
        {
            no: 1,
            name: "dispatch_rule_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "trunk_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$5ea7775ad0a9491a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.ListSIPDispatchRuleResponse", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: $61b2884ab967cfb2$export$dbe540358fff9ea8,
            repeated: true
        }
    ]);
const $61b2884ab967cfb2$export$46ce5d3e5e8648a = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.DeleteSIPDispatchRuleRequest", ()=>[
        {
            no: 1,
            name: "sip_dispatch_rule_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$365b55c99a8af576 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.CreateSIPParticipantRequest", ()=>[
        {
            no: 1,
            name: "sip_trunk_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sip_call_to",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "sip_number",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "participant_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "participant_metadata",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "participant_attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 5,
            name: "dtmf",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "play_ringtone",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "play_dialtone",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "hide_phone_number",
            kind: "scalar",
            T: 8
        },
        {
            no: 16,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 17,
            name: "include_headers",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$9b8879bf3d2413f5)
        },
        {
            no: 11,
            name: "ringing_timeout",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Duration)
        },
        {
            no: 12,
            name: "max_call_duration",
            kind: "message",
            T: (0, $f5dd5d32ad1dfbf2$exports.Duration)
        },
        {
            no: 14,
            name: "enable_krisp",
            kind: "scalar",
            T: 8
        }
    ]);
const $61b2884ab967cfb2$export$70b9ed824821efa8 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPParticipantInfo", ()=>[
        {
            no: 1,
            name: "participant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "sip_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$764264e55008882d = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.TransferSIPParticipantRequest", ()=>[
        {
            no: 1,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "transfer_to",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "play_dialtone",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const $61b2884ab967cfb2$export$c9f1b7852ace1639 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPCallInfo", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "trunk_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "room_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "room_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "participant_identity",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "from_uri",
            kind: "message",
            T: $61b2884ab967cfb2$export$6f58084cac271eef
        },
        {
            no: 7,
            name: "to_uri",
            kind: "message",
            T: $61b2884ab967cfb2$export$6f58084cac271eef
        },
        {
            no: 14,
            name: "enabled_features",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$e2e8f5f3b80f4f5),
            repeated: true
        },
        {
            no: 8,
            name: "call_status",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$a43ac2dd6f717ced)
        },
        {
            no: 9,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "started_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 11,
            name: "ended_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 12,
            name: "disconnect_reason",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$258d16488300d83f)
        },
        {
            no: 13,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const $61b2884ab967cfb2$export$6f58084cac271eef = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.SIPUri", ()=>[
        {
            no: 1,
            name: "user",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "host",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "ip",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "port",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "transport",
            kind: "enum",
            T: (0, $f5dd5d32ad1dfbf2$exports.proto3).getEnumType($61b2884ab967cfb2$export$65b7d05ef33678e1)
        }
    ]);
const $61b2884ab967cfb2$export$13fe0c3c877b57b3 = /* @__PURE__ */ (0, $f5dd5d32ad1dfbf2$exports.proto3).makeMessageType("livekit.WebhookEvent", ()=>[
        {
            no: 1,
            name: "event",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "room",
            kind: "message",
            T: $61b2884ab967cfb2$export$525628e68e798fb4
        },
        {
            no: 3,
            name: "participant",
            kind: "message",
            T: $61b2884ab967cfb2$export$c21db75dbd2864bf
        },
        {
            no: 9,
            name: "egress_info",
            kind: "message",
            T: $61b2884ab967cfb2$export$f048c27fbab07545
        },
        {
            no: 10,
            name: "ingress_info",
            kind: "message",
            T: $61b2884ab967cfb2$export$5674ac8ebaa0976b
        },
        {
            no: 8,
            name: "track",
            kind: "message",
            T: $61b2884ab967cfb2$export$7872447382cf3226
        },
        {
            no: 6,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 11,
            name: "num_dropped",
            kind: "scalar",
            T: 5
        }
    ]);
const $61b2884ab967cfb2$export$83d89fbfd8236492 = "1.30.0";


var $d832aafff58d471a$export$2e2bcd8739ae039 = crypto;
const $d832aafff58d471a$export$600b5603bbac4c6 = (key)=>key instanceof CryptoKey;


const $fa304f156d4bbeda$var$digest = async (algorithm, data)=>{
    const subtleDigest = `SHA-${algorithm.slice(-3)}`;
    return new Uint8Array(await (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.digest(subtleDigest, data));
};
var $fa304f156d4bbeda$export$2e2bcd8739ae039 = $fa304f156d4bbeda$var$digest;


const $72719cc2185840ef$export$5486af06137bf21a = new TextEncoder();
const $72719cc2185840ef$export$124c96e6ce37090b = new TextDecoder();
const $72719cc2185840ef$var$MAX_INT32 = 2 ** 32;
function $72719cc2185840ef$export$ee1b3e54f0441b22(...buffers) {
    const size = buffers.reduce((acc, { length: length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function $72719cc2185840ef$export$256d3ca12372f112(alg, p2sInput) {
    return $72719cc2185840ef$export$ee1b3e54f0441b22($72719cc2185840ef$export$5486af06137bf21a.encode(alg), new Uint8Array([
        0
    ]), p2sInput);
}
function $72719cc2185840ef$var$writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= $72719cc2185840ef$var$MAX_INT32) throw new RangeError(`value must be >= 0 and <= ${$72719cc2185840ef$var$MAX_INT32 - 1}. Received ${value}`);
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function $72719cc2185840ef$export$e7b531e00a18fdd7(value) {
    const high = Math.floor(value / $72719cc2185840ef$var$MAX_INT32);
    const low = value % $72719cc2185840ef$var$MAX_INT32;
    const buf = new Uint8Array(8);
    $72719cc2185840ef$var$writeUInt32BE(buf, high, 0);
    $72719cc2185840ef$var$writeUInt32BE(buf, low, 4);
    return buf;
}
function $72719cc2185840ef$export$74c16dba6c885532(value) {
    const buf = new Uint8Array(4);
    $72719cc2185840ef$var$writeUInt32BE(buf, value);
    return buf;
}
function $72719cc2185840ef$export$c1498c4a3718d967(input) {
    return $72719cc2185840ef$export$ee1b3e54f0441b22($72719cc2185840ef$export$74c16dba6c885532(input.length), input);
}
async function $72719cc2185840ef$export$67163693c21af44f(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for(let iter = 0; iter < iterations; iter++){
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set($72719cc2185840ef$export$74c16dba6c885532(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, $fa304f156d4bbeda$export$2e2bcd8739ae039)('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}


const $5a74bc38e7f2096d$export$8fb536984ec8b4d7 = (input)=>{
    let unencoded = input;
    if (typeof unencoded === 'string') unencoded = (0, $72719cc2185840ef$export$5486af06137bf21a).encode(unencoded);
    const CHUNK_SIZE = 0x8000;
    const arr = [];
    for(let i = 0; i < unencoded.length; i += CHUNK_SIZE)arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
    return btoa(arr.join(''));
};
const $5a74bc38e7f2096d$export$c564cdbbe6da493 = (input)=>{
    return $5a74bc38e7f2096d$export$8fb536984ec8b4d7(input).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};
const $5a74bc38e7f2096d$export$94fdf11bafc8de6b = (encoded)=>{
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
    return bytes;
};
const $5a74bc38e7f2096d$export$2f872c0f2117be69 = (input)=>{
    let encoded = input;
    if (encoded instanceof Uint8Array) encoded = (0, $72719cc2185840ef$export$124c96e6ce37090b).decode(encoded);
    encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    try {
        return $5a74bc38e7f2096d$export$94fdf11bafc8de6b(encoded);
    } catch  {
        throw new TypeError('The input to be decoded is not correctly encoded.');
    }
};


class $4f60f5f59999b78c$export$f754d6850d76bf87 extends Error {
    constructor(message, options){
        super(message, options);
        this.code = 'ERR_JOSE_GENERIC';
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
$4f60f5f59999b78c$export$f754d6850d76bf87.code = 'ERR_JOSE_GENERIC';
class $4f60f5f59999b78c$export$f1e14efb908196e9 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim: claim,
                reason: reason,
                payload: payload
            }
        });
        this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
$4f60f5f59999b78c$export$f1e14efb908196e9.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
class $4f60f5f59999b78c$export$4b386bf852b7863d extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim: claim,
                reason: reason,
                payload: payload
            }
        });
        this.code = 'ERR_JWT_EXPIRED';
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
$4f60f5f59999b78c$export$4b386bf852b7863d.code = 'ERR_JWT_EXPIRED';
class $4f60f5f59999b78c$export$d51fd7fedeccc338 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
}
$4f60f5f59999b78c$export$d51fd7fedeccc338.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
class $4f60f5f59999b78c$export$19ddbcbf2016ab28 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JOSE_NOT_SUPPORTED';
    }
}
$4f60f5f59999b78c$export$19ddbcbf2016ab28.code = 'ERR_JOSE_NOT_SUPPORTED';
class $4f60f5f59999b78c$export$1a57512ad9773b2a extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message = 'decryption operation failed', options){
        super(message, options);
        this.code = 'ERR_JWE_DECRYPTION_FAILED';
    }
}
$4f60f5f59999b78c$export$1a57512ad9773b2a.code = 'ERR_JWE_DECRYPTION_FAILED';
class $4f60f5f59999b78c$export$19f281f2275f6a15 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWE_INVALID';
    }
}
$4f60f5f59999b78c$export$19f281f2275f6a15.code = 'ERR_JWE_INVALID';
class $4f60f5f59999b78c$export$e838de724af3d116 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWS_INVALID';
    }
}
$4f60f5f59999b78c$export$e838de724af3d116.code = 'ERR_JWS_INVALID';
class $4f60f5f59999b78c$export$936b39ada0bbfceb extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWT_INVALID';
    }
}
$4f60f5f59999b78c$export$936b39ada0bbfceb.code = 'ERR_JWT_INVALID';
class $4f60f5f59999b78c$export$b3992e0f88fb07e3 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWK_INVALID';
    }
}
$4f60f5f59999b78c$export$b3992e0f88fb07e3.code = 'ERR_JWK_INVALID';
class $4f60f5f59999b78c$export$9b22c2a1e2403b8e extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWKS_INVALID';
    }
}
$4f60f5f59999b78c$export$9b22c2a1e2403b8e.code = 'ERR_JWKS_INVALID';
class $4f60f5f59999b78c$export$3d5ed1a538bed04e extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message = 'no applicable key found in the JSON Web Key Set', options){
        super(message, options);
        this.code = 'ERR_JWKS_NO_MATCHING_KEY';
    }
}
$4f60f5f59999b78c$export$3d5ed1a538bed04e.code = 'ERR_JWKS_NO_MATCHING_KEY';
class $4f60f5f59999b78c$export$dc036de401a5c284 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options){
        super(message, options);
        this.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    }
}
Symbol.asyncIterator;
$4f60f5f59999b78c$export$dc036de401a5c284.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
class $4f60f5f59999b78c$export$3f30acebf25c04e6 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message = 'request timed out', options){
        super(message, options);
        this.code = 'ERR_JWKS_TIMEOUT';
    }
}
$4f60f5f59999b78c$export$3f30acebf25c04e6.code = 'ERR_JWKS_TIMEOUT';
class $4f60f5f59999b78c$export$c67a0218e7c50378 extends $4f60f5f59999b78c$export$f754d6850d76bf87 {
    constructor(message = 'signature verification failed', options){
        super(message, options);
        this.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    }
}
$4f60f5f59999b78c$export$c67a0218e7c50378.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';


function $1bff2d8cc064cb4e$export$2e2bcd8739ae039(alg, algorithm) {
    const hash = `SHA-${alg.slice(-3)}`;
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            return {
                hash: hash,
                name: 'HMAC'
            };
        case 'PS256':
        case 'PS384':
        case 'PS512':
            return {
                hash: hash,
                name: 'RSA-PSS',
                saltLength: alg.slice(-3) >> 3
            };
        case 'RS256':
        case 'RS384':
        case 'RS512':
            return {
                hash: hash,
                name: 'RSASSA-PKCS1-v1_5'
            };
        case 'ES256':
        case 'ES384':
        case 'ES512':
            return {
                hash: hash,
                name: 'ECDSA',
                namedCurve: algorithm.namedCurve
            };
        case 'EdDSA':
            return {
                name: algorithm.name
            };
        default:
            throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}



var $e94b0962cada3fb0$export$2e2bcd8739ae039 = (alg, key)=>{
    if (alg.startsWith('RS') || alg.startsWith('PS')) {
        const { modulusLength: modulusLength } = key.algorithm;
        if (typeof modulusLength !== 'number' || modulusLength < 2048) throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
};



function $e139507f2ac23fe5$var$unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function $e139507f2ac23fe5$var$isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function $e139507f2ac23fe5$var$getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function $e139507f2ac23fe5$var$getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function $e139507f2ac23fe5$var$checkUsage(key, usages) {
    if (usages.length && !usages.some((expected)=>key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        } else if (usages.length === 2) msg += `one of ${usages[0]} or ${usages[1]}.`;
        else msg += `${usages[0]}.`;
        throw new TypeError(msg);
    }
}
function $e139507f2ac23fe5$export$39a36029eee6729(key, alg, ...usages) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'HMAC')) throw $e139507f2ac23fe5$var$unusable('HMAC');
                const expected = parseInt(alg.slice(2), 10);
                const actual = $e139507f2ac23fe5$var$getHashLength(key.algorithm.hash);
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw $e139507f2ac23fe5$var$unusable('RSASSA-PKCS1-v1_5');
                const expected = parseInt(alg.slice(2), 10);
                const actual = $e139507f2ac23fe5$var$getHashLength(key.algorithm.hash);
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'RSA-PSS')) throw $e139507f2ac23fe5$var$unusable('RSA-PSS');
                const expected = parseInt(alg.slice(2), 10);
                const actual = $e139507f2ac23fe5$var$getHashLength(key.algorithm.hash);
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'EdDSA':
            if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') throw $e139507f2ac23fe5$var$unusable('Ed25519 or Ed448');
            break;
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'ECDSA')) throw $e139507f2ac23fe5$var$unusable('ECDSA');
                const expected = $e139507f2ac23fe5$var$getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    $e139507f2ac23fe5$var$checkUsage(key, usages);
}
function $e139507f2ac23fe5$export$41a67f89f6678b35(key, alg, ...usages) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'AES-GCM')) throw $e139507f2ac23fe5$var$unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'AES-KW')) throw $e139507f2ac23fe5$var$unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            switch(key.algorithm.name){
                case 'ECDH':
                case 'X25519':
                case 'X448':
                    break;
                default:
                    throw $e139507f2ac23fe5$var$unusable('ECDH, X25519, or X448');
            }
            break;
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'PBKDF2')) throw $e139507f2ac23fe5$var$unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!$e139507f2ac23fe5$var$isAlgorithm(key.algorithm, 'RSA-OAEP')) throw $e139507f2ac23fe5$var$unusable('RSA-OAEP');
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = $e139507f2ac23fe5$var$getHashLength(key.algorithm.hash);
                if (actual !== expected) throw $e139507f2ac23fe5$var$unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    $e139507f2ac23fe5$var$checkUsage(key, usages);
}


function $f9a474a49f5eff2c$var$message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) msg += `one of type ${types[0]} or ${types[1]}.`;
    else msg += `of type ${types[0]}.`;
    if (actual == null) msg += ` Received ${actual}`;
    else if (typeof actual === 'function' && actual.name) msg += ` Received function ${actual.name}`;
    else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) msg += ` Received an instance of ${actual.constructor.name}`;
    }
    return msg;
}
var $f9a474a49f5eff2c$export$2e2bcd8739ae039 = (actual, ...types)=>{
    return $f9a474a49f5eff2c$var$message('Key must be ', actual, ...types);
};
function $f9a474a49f5eff2c$export$e94f758d09bc1828(alg, actual, ...types) {
    return $f9a474a49f5eff2c$var$message(`Key for the ${alg} algorithm must be `, actual, ...types);
}



var $2bb79f73c9931826$export$2e2bcd8739ae039 = (key)=>{
    if ((0, $d832aafff58d471a$export$600b5603bbac4c6)(key)) return true;
    return key?.[Symbol.toStringTag] === 'KeyObject';
};
const $2bb79f73c9931826$export$b14ad400b1d09e0f = [
    'CryptoKey'
];


function $604ba8949ffd010b$var$isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function $604ba8949ffd010b$export$2e2bcd8739ae039(input) {
    if (!$604ba8949ffd010b$var$isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') return false;
    if (Object.getPrototypeOf(input) === null) return true;
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(input) === proto;
}


function $62638628d7e17a70$export$9a44c2ef7e3b3dad(key) {
    return (0, $604ba8949ffd010b$export$2e2bcd8739ae039)(key) && typeof key.kty === 'string';
}
function $62638628d7e17a70$export$431699a4f17ba0e(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function $62638628d7e17a70$export$b786616db1cddf3(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function $62638628d7e17a70$export$f8ecf533504bc7ad(key) {
    return $62638628d7e17a70$export$9a44c2ef7e3b3dad(key) && key.kty === 'oct' && typeof key.k === 'string';
}





function $b90ab4baa9d04685$var$subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch(jwk.kty){
        case 'RSA':
            switch(jwk.alg){
                case 'PS256':
                case 'PS384':
                case 'PS512':
                    algorithm = {
                        name: 'RSA-PSS',
                        hash: `SHA-${jwk.alg.slice(-3)}`
                    };
                    keyUsages = jwk.d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    break;
                case 'RS256':
                case 'RS384':
                case 'RS512':
                    algorithm = {
                        name: 'RSASSA-PKCS1-v1_5',
                        hash: `SHA-${jwk.alg.slice(-3)}`
                    };
                    keyUsages = jwk.d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    break;
                case 'RSA-OAEP':
                case 'RSA-OAEP-256':
                case 'RSA-OAEP-384':
                case 'RSA-OAEP-512':
                    algorithm = {
                        name: 'RSA-OAEP',
                        hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
                    };
                    keyUsages = jwk.d ? [
                        'decrypt',
                        'unwrapKey'
                    ] : [
                        'encrypt',
                        'wrapKey'
                    ];
                    break;
                default:
                    throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
        case 'EC':
            switch(jwk.alg){
                case 'ES256':
                    algorithm = {
                        name: 'ECDSA',
                        namedCurve: 'P-256'
                    };
                    keyUsages = jwk.d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    break;
                case 'ES384':
                    algorithm = {
                        name: 'ECDSA',
                        namedCurve: 'P-384'
                    };
                    keyUsages = jwk.d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    break;
                case 'ES512':
                    algorithm = {
                        name: 'ECDSA',
                        namedCurve: 'P-521'
                    };
                    keyUsages = jwk.d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    break;
                case 'ECDH-ES':
                case 'ECDH-ES+A128KW':
                case 'ECDH-ES+A192KW':
                case 'ECDH-ES+A256KW':
                    algorithm = {
                        name: 'ECDH',
                        namedCurve: jwk.crv
                    };
                    keyUsages = jwk.d ? [
                        'deriveBits'
                    ] : [];
                    break;
                default:
                    throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
        case 'OKP':
            switch(jwk.alg){
                case 'EdDSA':
                    algorithm = {
                        name: jwk.crv
                    };
                    keyUsages = jwk.d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    break;
                case 'ECDH-ES':
                case 'ECDH-ES+A128KW':
                case 'ECDH-ES+A192KW':
                case 'ECDH-ES+A256KW':
                    algorithm = {
                        name: jwk.crv
                    };
                    keyUsages = jwk.d ? [
                        'deriveBits'
                    ] : [];
                    break;
                default:
                    throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
        default:
            throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm: algorithm,
        keyUsages: keyUsages
    };
}
const $b90ab4baa9d04685$var$parse = async (jwk)=>{
    if (!jwk.alg) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    const { algorithm: algorithm, keyUsages: keyUsages } = $b90ab4baa9d04685$var$subtleMapping(jwk);
    const rest = [
        algorithm,
        jwk.ext ?? false,
        jwk.key_ops ?? keyUsages
    ];
    const keyData = {
        ...jwk
    };
    delete keyData.alg;
    delete keyData.use;
    return (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.importKey('jwk', keyData, ...rest);
};
var $b90ab4baa9d04685$export$2e2bcd8739ae039 = $b90ab4baa9d04685$var$parse;


const $be14fdc2252b8dc0$var$exportKeyValue = (k)=>(0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(k);
let $be14fdc2252b8dc0$var$privCache;
let $be14fdc2252b8dc0$var$pubCache;
const $be14fdc2252b8dc0$var$isKeyObject = (key)=>{
    return key?.[Symbol.toStringTag] === 'KeyObject';
};
const $be14fdc2252b8dc0$var$importAndCache = async (cache, key, jwk, alg, freeze = false)=>{
    let cached = cache.get(key);
    if (cached?.[alg]) return cached[alg];
    const cryptoKey = await (0, $b90ab4baa9d04685$export$2e2bcd8739ae039)({
        ...jwk,
        alg: alg
    });
    if (freeze) Object.freeze(key);
    if (!cached) cache.set(key, {
        [alg]: cryptoKey
    });
    else cached[alg] = cryptoKey;
    return cryptoKey;
};
const $be14fdc2252b8dc0$var$normalizePublicKey = (key, alg)=>{
    if ($be14fdc2252b8dc0$var$isKeyObject(key)) {
        let jwk = key.export({
            format: 'jwk'
        });
        delete jwk.d;
        delete jwk.dp;
        delete jwk.dq;
        delete jwk.p;
        delete jwk.q;
        delete jwk.qi;
        if (jwk.k) return $be14fdc2252b8dc0$var$exportKeyValue(jwk.k);
        $be14fdc2252b8dc0$var$pubCache || ($be14fdc2252b8dc0$var$pubCache = new WeakMap());
        return $be14fdc2252b8dc0$var$importAndCache($be14fdc2252b8dc0$var$pubCache, key, jwk, alg);
    }
    if ((0, $62638628d7e17a70$export$9a44c2ef7e3b3dad)(key)) {
        if (key.k) return (0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(key.k);
        $be14fdc2252b8dc0$var$pubCache || ($be14fdc2252b8dc0$var$pubCache = new WeakMap());
        const cryptoKey = $be14fdc2252b8dc0$var$importAndCache($be14fdc2252b8dc0$var$pubCache, key, key, alg, true);
        return cryptoKey;
    }
    return key;
};
const $be14fdc2252b8dc0$var$normalizePrivateKey = (key, alg)=>{
    if ($be14fdc2252b8dc0$var$isKeyObject(key)) {
        let jwk = key.export({
            format: 'jwk'
        });
        if (jwk.k) return $be14fdc2252b8dc0$var$exportKeyValue(jwk.k);
        $be14fdc2252b8dc0$var$privCache || ($be14fdc2252b8dc0$var$privCache = new WeakMap());
        return $be14fdc2252b8dc0$var$importAndCache($be14fdc2252b8dc0$var$privCache, key, jwk, alg);
    }
    if ((0, $62638628d7e17a70$export$9a44c2ef7e3b3dad)(key)) {
        if (key.k) return (0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(key.k);
        $be14fdc2252b8dc0$var$privCache || ($be14fdc2252b8dc0$var$privCache = new WeakMap());
        const cryptoKey = $be14fdc2252b8dc0$var$importAndCache($be14fdc2252b8dc0$var$privCache, key, key, alg, true);
        return cryptoKey;
    }
    return key;
};
var $be14fdc2252b8dc0$export$2e2bcd8739ae039 = {
    normalizePublicKey: $be14fdc2252b8dc0$var$normalizePublicKey,
    normalizePrivateKey: $be14fdc2252b8dc0$var$normalizePrivateKey
};


async function $745b0f640f4078aa$export$2e2bcd8739ae039(alg, key, usage) {
    if (usage === 'sign') key = await (0, $be14fdc2252b8dc0$export$2e2bcd8739ae039).normalizePrivateKey(key, alg);
    if (usage === 'verify') key = await (0, $be14fdc2252b8dc0$export$2e2bcd8739ae039).normalizePublicKey(key, alg);
    if ((0, $d832aafff58d471a$export$600b5603bbac4c6)(key)) {
        (0, $e139507f2ac23fe5$export$39a36029eee6729)(key, alg, usage);
        return key;
    }
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) throw new TypeError((0, $f9a474a49f5eff2c$export$2e2bcd8739ae039)(key, ...(0, $2bb79f73c9931826$export$b14ad400b1d09e0f)));
        return (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.importKey('raw', key, {
            hash: `SHA-${alg.slice(-3)}`,
            name: 'HMAC'
        }, false, [
            usage
        ]);
    }
    throw new TypeError((0, $f9a474a49f5eff2c$export$2e2bcd8739ae039)(key, ...(0, $2bb79f73c9931826$export$b14ad400b1d09e0f), 'Uint8Array', 'JSON Web Key'));
}


const $e45411d628811a47$var$verify = async (alg, key, signature, data)=>{
    const cryptoKey = await (0, $745b0f640f4078aa$export$2e2bcd8739ae039)(alg, key, 'verify');
    (0, $e94b0962cada3fb0$export$2e2bcd8739ae039)(alg, cryptoKey);
    const algorithm = (0, $1bff2d8cc064cb4e$export$2e2bcd8739ae039)(alg, cryptoKey.algorithm);
    try {
        return await (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.verify(algorithm, cryptoKey, signature, data);
    } catch  {
        return false;
    }
};
var $e45411d628811a47$export$2e2bcd8739ae039 = $e45411d628811a47$var$verify;




const $1bff3ec457d1fdd0$var$isDisjoint = (...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) return true;
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) return false;
            acc.add(parameter);
        }
    }
    return true;
};
var $1bff3ec457d1fdd0$export$2e2bcd8739ae039 = $1bff3ec457d1fdd0$var$isDisjoint;






const $8b8528e4ef080ff7$var$tag = (key)=>key?.[Symbol.toStringTag];
const $8b8528e4ef080ff7$var$jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined && key.use !== 'sig') throw new TypeError('Invalid key for this operation, when present its use must be sig');
    if (key.key_ops !== undefined && key.key_ops.includes?.(usage) !== true) throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    if (key.alg !== undefined && key.alg !== alg) throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    return true;
};
const $8b8528e4ef080ff7$var$symmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (key instanceof Uint8Array) return;
    if (allowJwk && $62638628d7e17a70$export$9a44c2ef7e3b3dad(key)) {
        if ($62638628d7e17a70$export$f8ecf533504bc7ad(key) && $8b8528e4ef080ff7$var$jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, $2bb79f73c9931826$export$2e2bcd8739ae039)(key)) throw new TypeError((0, $f9a474a49f5eff2c$export$e94f758d09bc1828)(alg, key, ...(0, $2bb79f73c9931826$export$b14ad400b1d09e0f), 'Uint8Array', allowJwk ? 'JSON Web Key' : null));
    if (key.type !== 'secret') throw new TypeError(`${$8b8528e4ef080ff7$var$tag(key)} instances for symmetric algorithms must be of type "secret"`);
};
const $8b8528e4ef080ff7$var$asymmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (allowJwk && $62638628d7e17a70$export$9a44c2ef7e3b3dad(key)) switch(usage){
        case 'sign':
            if ($62638628d7e17a70$export$431699a4f17ba0e(key) && $8b8528e4ef080ff7$var$jwkMatchesOp(alg, key, usage)) return;
            throw new TypeError(`JSON Web Key for this operation be a private JWK`);
        case 'verify':
            if ($62638628d7e17a70$export$b786616db1cddf3(key) && $8b8528e4ef080ff7$var$jwkMatchesOp(alg, key, usage)) return;
            throw new TypeError(`JSON Web Key for this operation be a public JWK`);
    }
    if (!(0, $2bb79f73c9931826$export$2e2bcd8739ae039)(key)) throw new TypeError((0, $f9a474a49f5eff2c$export$e94f758d09bc1828)(alg, key, ...(0, $2bb79f73c9931826$export$b14ad400b1d09e0f), allowJwk ? 'JSON Web Key' : null));
    if (key.type === 'secret') throw new TypeError(`${$8b8528e4ef080ff7$var$tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    if (usage === 'sign' && key.type === 'public') throw new TypeError(`${$8b8528e4ef080ff7$var$tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    if (usage === 'decrypt' && key.type === 'public') throw new TypeError(`${$8b8528e4ef080ff7$var$tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    if (key.algorithm && usage === 'verify' && key.type === 'private') throw new TypeError(`${$8b8528e4ef080ff7$var$tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') throw new TypeError(`${$8b8528e4ef080ff7$var$tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
};
function $8b8528e4ef080ff7$var$checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) $8b8528e4ef080ff7$var$symmetricTypeCheck(alg, key, usage, allowJwk);
    else $8b8528e4ef080ff7$var$asymmetricTypeCheck(alg, key, usage, allowJwk);
}
var $8b8528e4ef080ff7$export$2e2bcd8739ae039 = $8b8528e4ef080ff7$var$checkKeyType.bind(undefined, false);
const $8b8528e4ef080ff7$export$d7fd0dd52697ff18 = $8b8528e4ef080ff7$var$checkKeyType.bind(undefined, true);



function $9c08b7e1905da009$var$validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    if (!protectedHeader || protectedHeader.crit === undefined) return new Set();
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    let recognized;
    if (recognizedOption !== undefined) recognized = new Map([
        ...Object.entries(recognizedOption),
        ...recognizedDefault.entries()
    ]);
    else recognized = recognizedDefault;
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)(`Extension Header Parameter "${parameter}" is not recognized`);
        if (joseHeader[parameter] === undefined) throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
    return new Set(protectedHeader.crit);
}
var $9c08b7e1905da009$export$2e2bcd8739ae039 = $9c08b7e1905da009$var$validateCrit;


const $6125217ab65dcd67$var$validateAlgorithms = (option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) throw new TypeError(`"${option}" option must be an array of strings`);
    if (!algorithms) return undefined;
    return new Set(algorithms);
};
var $6125217ab65dcd67$export$2e2bcd8739ae039 = $6125217ab65dcd67$var$validateAlgorithms;







var $7bbccb61e051c51d$export$2e2bcd8739ae039 = (b64, descriptor)=>{
    const newlined = (b64.match(/.{1,64}/g) || []).join('\n');
    return `-----BEGIN ${descriptor}-----\n${newlined}\n-----END ${descriptor}-----`;
};




const $a77f6a95d6c56c4b$var$genericExport = async (keyType, keyFormat, key)=>{
    if (!(0, $d832aafff58d471a$export$600b5603bbac4c6)(key)) throw new TypeError((0, $f9a474a49f5eff2c$export$2e2bcd8739ae039)(key, ...(0, $2bb79f73c9931826$export$b14ad400b1d09e0f)));
    if (!key.extractable) throw new TypeError('CryptoKey is not extractable');
    if (key.type !== keyType) throw new TypeError(`key is not a ${keyType} key`);
    return (0, $7bbccb61e051c51d$export$2e2bcd8739ae039)((0, $5a74bc38e7f2096d$export$8fb536984ec8b4d7)(new Uint8Array(await (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
};
const $a77f6a95d6c56c4b$export$cfba7e924fe414ca = (key)=>{
    return $a77f6a95d6c56c4b$var$genericExport('public', 'spki', key);
};
const $a77f6a95d6c56c4b$export$cac76a78a90b914d = (key)=>{
    return $a77f6a95d6c56c4b$var$genericExport('private', 'pkcs8', key);
};
const $a77f6a95d6c56c4b$var$findOid = (keyData, oid, from = 0)=>{
    if (from === 0) {
        oid.unshift(oid.length);
        oid.unshift(0x06);
    }
    const i = keyData.indexOf(oid[0], from);
    if (i === -1) return false;
    const sub = keyData.subarray(i, i + oid.length);
    if (sub.length !== oid.length) return false;
    return sub.every((value, index)=>value === oid[index]) || $a77f6a95d6c56c4b$var$findOid(keyData, oid, i + 1);
};
const $a77f6a95d6c56c4b$var$getNamedCurve = (keyData)=>{
    switch(true){
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2a,
            0x86,
            0x48,
            0xce,
            0x3d,
            0x03,
            0x01,
            0x07
        ]):
            return 'P-256';
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2b,
            0x81,
            0x04,
            0x00,
            0x22
        ]):
            return 'P-384';
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2b,
            0x81,
            0x04,
            0x00,
            0x23
        ]):
            return 'P-521';
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2b,
            0x65,
            0x6e
        ]):
            return 'X25519';
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2b,
            0x65,
            0x6f
        ]):
            return 'X448';
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2b,
            0x65,
            0x70
        ]):
            return 'Ed25519';
        case $a77f6a95d6c56c4b$var$findOid(keyData, [
            0x2b,
            0x65,
            0x71
        ]):
            return 'Ed448';
        default:
            throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Invalid or unsupported EC Key Curve or OKP Key Sub Type');
    }
};
const $a77f6a95d6c56c4b$var$genericImport = async (replace, keyFormat, pem, alg, options)=>{
    let algorithm;
    let keyUsages;
    const keyData = new Uint8Array(atob(pem.replace(replace, '')).split('').map((c)=>c.charCodeAt(0)));
    const isPublic = keyFormat === 'spki';
    switch(alg){
        case 'PS256':
        case 'PS384':
        case 'PS512':
            algorithm = {
                name: 'RSA-PSS',
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            algorithm = {
                name: 'RSASSA-PKCS1-v1_5',
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            algorithm = {
                name: 'RSA-OAEP',
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
            };
            keyUsages = isPublic ? [
                'encrypt',
                'wrapKey'
            ] : [
                'decrypt',
                'unwrapKey'
            ];
            break;
        case 'ES256':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-256'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ES384':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-384'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ES512':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-521'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            {
                const namedCurve = $a77f6a95d6c56c4b$var$getNamedCurve(keyData);
                algorithm = namedCurve.startsWith('P-') ? {
                    name: 'ECDH',
                    namedCurve: namedCurve
                } : {
                    name: namedCurve
                };
                keyUsages = isPublic ? [] : [
                    'deriveBits'
                ];
                break;
            }
        case 'EdDSA':
            algorithm = {
                name: $a77f6a95d6c56c4b$var$getNamedCurve(keyData)
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        default:
            throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Invalid or unsupported "alg" (Algorithm) value');
    }
    return (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.importKey(keyFormat, keyData, algorithm, options?.extractable ?? false, keyUsages);
};
const $a77f6a95d6c56c4b$export$224b0a6339c7267f = (pem, alg, options)=>{
    return $a77f6a95d6c56c4b$var$genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, 'pkcs8', pem, alg, options);
};
const $a77f6a95d6c56c4b$export$f9a3505cdaa1fb3e = (pem, alg, options)=>{
    return $a77f6a95d6c56c4b$var$genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, 'spki', pem, alg, options);
};
function $a77f6a95d6c56c4b$var$getElement(seq) {
    const result = [];
    let next = 0;
    while(next < seq.length){
        const nextPart = $a77f6a95d6c56c4b$var$parseElement(seq.subarray(next));
        result.push(nextPart);
        next += nextPart.byteLength;
    }
    return result;
}
function $a77f6a95d6c56c4b$var$parseElement(bytes) {
    let position = 0;
    let tag = bytes[0] & 0x1f;
    position++;
    if (tag === 0x1f) {
        tag = 0;
        while(bytes[position] >= 0x80){
            tag = tag * 128 + bytes[position] - 0x80;
            position++;
        }
        tag = tag * 128 + bytes[position] - 0x80;
        position++;
    }
    let length = 0;
    if (bytes[position] < 0x80) {
        length = bytes[position];
        position++;
    } else if (length === 0x80) {
        length = 0;
        while(bytes[position + length] !== 0 || bytes[position + length + 1] !== 0){
            if (length > bytes.byteLength) throw new TypeError('invalid indefinite form length');
            length++;
        }
        const byteLength = position + length + 2;
        return {
            byteLength: byteLength,
            contents: bytes.subarray(position, position + length),
            raw: bytes.subarray(0, byteLength)
        };
    } else {
        const numberOfDigits = bytes[position] & 0x7f;
        position++;
        length = 0;
        for(let i = 0; i < numberOfDigits; i++){
            length = length * 256 + bytes[position];
            position++;
        }
    }
    const byteLength = position + length;
    return {
        byteLength: byteLength,
        contents: bytes.subarray(position, byteLength),
        raw: bytes.subarray(0, byteLength)
    };
}
function $a77f6a95d6c56c4b$var$spkiFromX509(buf) {
    const tbsCertificate = $a77f6a95d6c56c4b$var$getElement($a77f6a95d6c56c4b$var$getElement($a77f6a95d6c56c4b$var$parseElement(buf).contents)[0].contents);
    return (0, $5a74bc38e7f2096d$export$8fb536984ec8b4d7)(tbsCertificate[tbsCertificate[0].raw[0] === 0xa0 ? 6 : 5].raw);
}
function $a77f6a95d6c56c4b$var$getSPKI(x509) {
    const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, '');
    const raw = (0, $5a74bc38e7f2096d$export$94fdf11bafc8de6b)(pem);
    return (0, $7bbccb61e051c51d$export$2e2bcd8739ae039)($a77f6a95d6c56c4b$var$spkiFromX509(raw), 'PUBLIC KEY');
}
const $a77f6a95d6c56c4b$export$ed788b6a8533858f = (pem, alg, options)=>{
    let spki;
    try {
        spki = $a77f6a95d6c56c4b$var$getSPKI(pem);
    } catch (cause) {
        throw new TypeError('Failed to parse the X.509 certificate', {
            cause: cause
        });
    }
    return $a77f6a95d6c56c4b$export$f9a3505cdaa1fb3e(spki, alg, options);
};





async function $9a27f46f9e4f465e$export$7cdfc961c11d0266(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) throw new TypeError('"spki" must be SPKI formatted string');
    return (0, $a77f6a95d6c56c4b$export$f9a3505cdaa1fb3e)(spki, alg, options);
}
async function $9a27f46f9e4f465e$export$948757ecbbf4a918(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) throw new TypeError('"x509" must be X.509 formatted string');
    return (0, $a77f6a95d6c56c4b$export$ed788b6a8533858f)(x509, alg, options);
}
async function $9a27f46f9e4f465e$export$17f5e7f6d2848df5(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    return (0, $a77f6a95d6c56c4b$export$224b0a6339c7267f)(pkcs8, alg, options);
}
async function $9a27f46f9e4f465e$export$2b70d37b4d0b888b(jwk, alg) {
    if (!(0, $604ba8949ffd010b$export$2e2bcd8739ae039)(jwk)) throw new TypeError('JWK must be an object');
    alg || (alg = jwk.alg);
    switch(jwk.kty){
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) throw new TypeError('missing "k" (Key Value) Parameter value');
            return (0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(jwk.k);
        case 'RSA':
            if (jwk.oth !== undefined) throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
        case 'EC':
        case 'OKP':
            return (0, $b90ab4baa9d04685$export$2e2bcd8739ae039)({
                ...jwk,
                alg: alg
            });
        default:
            throw new (0, $4f60f5f59999b78c$export$19ddbcbf2016ab28)('Unsupported "kty" (Key Type) Parameter value');
    }
}


async function $30a1196be63bd463$export$b2614975507c40c9(jws, key, options) {
    if (!(0, $604ba8949ffd010b$export$2e2bcd8739ae039)(jws)) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('Flattened JWS must be an object');
    if (jws.protected === undefined && jws.header === undefined) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('Flattened JWS must have either of the "protected" or "header" members');
    if (jws.protected !== undefined && typeof jws.protected !== 'string') throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Protected Header incorrect type');
    if (jws.payload === undefined) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Payload missing');
    if (typeof jws.signature !== 'string') throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Signature missing or incorrect type');
    if (jws.header !== undefined && !(0, $604ba8949ffd010b$export$2e2bcd8739ae039)(jws.header)) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Unprotected Header incorrect type');
    let parsedProt = {};
    if (jws.protected) try {
        const protectedHeader = (0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(jws.protected);
        parsedProt = JSON.parse((0, $72719cc2185840ef$export$124c96e6ce37090b).decode(protectedHeader));
    } catch  {
        throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Protected Header is invalid');
    }
    if (!(0, $1bff3ec457d1fdd0$export$2e2bcd8739ae039)(parsedProt, jws.header)) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = (0, $9c08b7e1905da009$export$2e2bcd8739ae039)((0, $4f60f5f59999b78c$export$e838de724af3d116), new Map([
        [
            'b64',
            true
        ]
    ]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
    const { alg: alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    const algorithms = options && (0, $6125217ab65dcd67$export$2e2bcd8739ae039)('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) throw new (0, $4f60f5f59999b78c$export$d51fd7fedeccc338)('"alg" (Algorithm) Header Parameter value not allowed');
    if (b64) {
        if (typeof jws.payload !== 'string') throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Payload must be a string');
    } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Payload must be a string or an Uint8Array instance');
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
        (0, $8b8528e4ef080ff7$export$d7fd0dd52697ff18)(alg, key, 'verify');
        if ((0, $62638628d7e17a70$export$9a44c2ef7e3b3dad)(key)) key = await (0, $9a27f46f9e4f465e$export$2b70d37b4d0b888b)(key, alg);
    } else (0, $8b8528e4ef080ff7$export$d7fd0dd52697ff18)(alg, key, 'verify');
    const data = (0, $72719cc2185840ef$export$ee1b3e54f0441b22)((0, $72719cc2185840ef$export$5486af06137bf21a).encode(jws.protected ?? ''), (0, $72719cc2185840ef$export$5486af06137bf21a).encode('.'), typeof jws.payload === 'string' ? (0, $72719cc2185840ef$export$5486af06137bf21a).encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = (0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(jws.signature);
    } catch  {
        throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('Failed to base64url decode the signature');
    }
    const verified = await (0, $e45411d628811a47$export$2e2bcd8739ae039)(alg, key, signature, data);
    if (!verified) throw new (0, $4f60f5f59999b78c$export$c67a0218e7c50378)();
    let payload;
    if (b64) try {
        payload = (0, $5a74bc38e7f2096d$export$2f872c0f2117be69)(jws.payload);
    } catch  {
        throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('Failed to base64url decode the payload');
    }
    else if (typeof jws.payload === 'string') payload = (0, $72719cc2185840ef$export$5486af06137bf21a).encode(jws.payload);
    else payload = jws.payload;
    const result = {
        payload: payload
    };
    if (jws.protected !== undefined) result.protectedHeader = parsedProt;
    if (jws.header !== undefined) result.unprotectedHeader = jws.header;
    if (resolvedKey) return {
        ...result,
        key: key
    };
    return result;
}




async function $456b5fbe47498c54$export$996150e72a8992e(jws, key, options) {
    if (jws instanceof Uint8Array) jws = (0, $72719cc2185840ef$export$124c96e6ce37090b).decode(jws);
    if (typeof jws !== 'string') throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('Compact JWS must be a string or Uint8Array');
    const { 0: protectedHeader, 1: payload, 2: signature, length: length } = jws.split('.');
    if (length !== 3) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('Invalid Compact JWS');
    const verified = await (0, $30a1196be63bd463$export$b2614975507c40c9)({
        payload: payload,
        protected: protectedHeader,
        signature: signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') return {
        ...result,
        key: verified.key
    };
    return result;
}




var $8b616cfc16d1feab$export$2e2bcd8739ae039 = (date)=>Math.floor(date.getTime() / 1000);


const $cf42a9a4c779693f$var$minute = 60;
const $cf42a9a4c779693f$var$hour = $cf42a9a4c779693f$var$minute * 60;
const $cf42a9a4c779693f$var$day = $cf42a9a4c779693f$var$hour * 24;
const $cf42a9a4c779693f$var$week = $cf42a9a4c779693f$var$day * 7;
const $cf42a9a4c779693f$var$year = $cf42a9a4c779693f$var$day * 365.25;
const $cf42a9a4c779693f$var$REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var $cf42a9a4c779693f$export$2e2bcd8739ae039 = (str)=>{
    const matched = $cf42a9a4c779693f$var$REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) throw new TypeError('Invalid time period format');
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * $cf42a9a4c779693f$var$minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * $cf42a9a4c779693f$var$hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * $cf42a9a4c779693f$var$day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * $cf42a9a4c779693f$var$week);
            break;
        default:
            numericDate = Math.round(value * $cf42a9a4c779693f$var$year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') return -numericDate;
    return numericDate;
};



const $2484d46b68fc82d6$var$normalizeTyp = (value)=>value.toLowerCase().replace(/^application\//, '');
const $2484d46b68fc82d6$var$checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') return audOption.includes(audPayload);
    if (Array.isArray(audPayload)) return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    return false;
};
var $2484d46b68fc82d6$export$2e2bcd8739ae039 = (protectedHeader, encodedPayload, options = {})=>{
    let payload;
    try {
        payload = JSON.parse((0, $72719cc2185840ef$export$124c96e6ce37090b).decode(encodedPayload));
    } catch  {}
    if (!(0, $604ba8949ffd010b$export$2e2bcd8739ae039)(payload)) throw new (0, $4f60f5f59999b78c$export$936b39ada0bbfceb)('JWT Claims Set must be a top-level JSON object');
    const { typ: typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || $2484d46b68fc82d6$var$normalizeTyp(protectedHeader.typ) !== $2484d46b68fc82d6$var$normalizeTyp(typ))) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    const { requiredClaims: requiredClaims = [], issuer: issuer, subject: subject, audience: audience, maxTokenAge: maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push('iat');
    if (audience !== undefined) presenceCheck.push('aud');
    if (subject !== undefined) presenceCheck.push('sub');
    if (issuer !== undefined) presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)(`missing required "${claim}" claim`, payload, claim, 'missing');
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    if (subject && payload.sub !== subject) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    if (audience && !$2484d46b68fc82d6$var$checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = (0, $cf42a9a4c779693f$export$2e2bcd8739ae039)(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate: currentDate } = options;
    const now = (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('"iat" claim must be a number', payload, 'iat', 'invalid');
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        if (payload.nbf > now + tolerance) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('"exp" claim must be a number', payload, 'exp', 'invalid');
        if (payload.exp <= now - tolerance) throw new (0, $4f60f5f59999b78c$export$4b386bf852b7863d)('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : (0, $cf42a9a4c779693f$export$2e2bcd8739ae039)(maxTokenAge);
        if (age - tolerance > max) throw new (0, $4f60f5f59999b78c$export$4b386bf852b7863d)('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        if (age < 0 - tolerance) throw new (0, $4f60f5f59999b78c$export$f1e14efb908196e9)('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
    }
    return payload;
};



async function $a507192f39bc195f$export$c878fd0f8381da51(jwt, key, options) {
    const verified = await (0, $456b5fbe47498c54$export$996150e72a8992e)(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) throw new (0, $4f60f5f59999b78c$export$936b39ada0bbfceb)('JWTs MUST NOT use unencoded payload');
    const payload = (0, $2484d46b68fc82d6$export$2e2bcd8739ae039)(verified.protectedHeader, verified.payload, options);
    const result = {
        payload: payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') return {
        ...result,
        key: verified.key
    };
    return result;
}






const $69bb06f5ca78a0de$var$sign = async (alg, key, data)=>{
    const cryptoKey = await (0, $745b0f640f4078aa$export$2e2bcd8739ae039)(alg, key, 'sign');
    (0, $e94b0962cada3fb0$export$2e2bcd8739ae039)(alg, cryptoKey);
    const signature = await (0, $d832aafff58d471a$export$2e2bcd8739ae039).subtle.sign((0, $1bff2d8cc064cb4e$export$2e2bcd8739ae039)(alg, cryptoKey.algorithm), cryptoKey, data);
    return new Uint8Array(signature);
};
var $69bb06f5ca78a0de$export$2e2bcd8739ae039 = $69bb06f5ca78a0de$var$sign;







class $7dc8d6a4e523fd16$export$9a8af5200da5ddb1 {
    constructor(payload){
        if (!(payload instanceof Uint8Array)) throw new TypeError('payload must be an instance of Uint8Array');
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) throw new TypeError('setProtectedHeader can only be called once');
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) throw new TypeError('setUnprotectedHeader can only be called once');
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        if (!(0, $1bff3ec457d1fdd0$export$2e2bcd8739ae039)(this._protectedHeader, this._unprotectedHeader)) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        const extensions = (0, $9c08b7e1905da009$export$2e2bcd8739ae039)((0, $4f60f5f59999b78c$export$e838de724af3d116), new Map([
            [
                'b64',
                true
            ]
        ]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
        const { alg: alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) throw new (0, $4f60f5f59999b78c$export$e838de724af3d116)('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        (0, $8b8528e4ef080ff7$export$d7fd0dd52697ff18)(alg, key, 'sign');
        let payload = this._payload;
        if (b64) payload = (0, $72719cc2185840ef$export$5486af06137bf21a).encode((0, $5a74bc38e7f2096d$export$c564cdbbe6da493)(payload));
        let protectedHeader;
        if (this._protectedHeader) protectedHeader = (0, $72719cc2185840ef$export$5486af06137bf21a).encode((0, $5a74bc38e7f2096d$export$c564cdbbe6da493)(JSON.stringify(this._protectedHeader)));
        else protectedHeader = (0, $72719cc2185840ef$export$5486af06137bf21a).encode('');
        const data = (0, $72719cc2185840ef$export$ee1b3e54f0441b22)(protectedHeader, (0, $72719cc2185840ef$export$5486af06137bf21a).encode('.'), payload);
        const signature = await (0, $69bb06f5ca78a0de$export$2e2bcd8739ae039)(alg, key, data);
        const jws = {
            signature: (0, $5a74bc38e7f2096d$export$c564cdbbe6da493)(signature),
            payload: ''
        };
        if (b64) jws.payload = (0, $72719cc2185840ef$export$124c96e6ce37090b).decode(payload);
        if (this._unprotectedHeader) jws.header = this._unprotectedHeader;
        if (this._protectedHeader) jws.protected = (0, $72719cc2185840ef$export$124c96e6ce37090b).decode(protectedHeader);
        return jws;
    }
}


class $750684c635ba9e3b$export$b6738d8e70498d17 {
    constructor(payload){
        this._flattened = new (0, $7dc8d6a4e523fd16$export$9a8af5200da5ddb1)(payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) throw new TypeError('use the flattened module for creating JWS with b64: false');
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}







function $c23f2a73be1fe0cf$var$validateInput(label, input) {
    if (!Number.isFinite(input)) throw new TypeError(`Invalid ${label} input`);
    return input;
}
class $c23f2a73be1fe0cf$export$2ef1b74b7c7e6eb3 {
    constructor(payload = {}){
        if (!(0, $604ba8949ffd010b$export$2e2bcd8739ae039)(payload)) throw new TypeError('JWT Claims Set MUST be an object');
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = {
            ...this._payload,
            iss: issuer
        };
        return this;
    }
    setSubject(subject) {
        this._payload = {
            ...this._payload,
            sub: subject
        };
        return this;
    }
    setAudience(audience) {
        this._payload = {
            ...this._payload,
            aud: audience
        };
        return this;
    }
    setJti(jwtId) {
        this._payload = {
            ...this._payload,
            jti: jwtId
        };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') this._payload = {
            ...this._payload,
            nbf: $c23f2a73be1fe0cf$var$validateInput('setNotBefore', input)
        };
        else if (input instanceof Date) this._payload = {
            ...this._payload,
            nbf: $c23f2a73be1fe0cf$var$validateInput('setNotBefore', (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(input))
        };
        else this._payload = {
            ...this._payload,
            nbf: (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(new Date()) + (0, $cf42a9a4c779693f$export$2e2bcd8739ae039)(input)
        };
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') this._payload = {
            ...this._payload,
            exp: $c23f2a73be1fe0cf$var$validateInput('setExpirationTime', input)
        };
        else if (input instanceof Date) this._payload = {
            ...this._payload,
            exp: $c23f2a73be1fe0cf$var$validateInput('setExpirationTime', (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(input))
        };
        else this._payload = {
            ...this._payload,
            exp: (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(new Date()) + (0, $cf42a9a4c779693f$export$2e2bcd8739ae039)(input)
        };
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') this._payload = {
            ...this._payload,
            iat: (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(new Date())
        };
        else if (input instanceof Date) this._payload = {
            ...this._payload,
            iat: $c23f2a73be1fe0cf$var$validateInput('setIssuedAt', (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(input))
        };
        else if (typeof input === 'string') this._payload = {
            ...this._payload,
            iat: $c23f2a73be1fe0cf$var$validateInput('setIssuedAt', (0, $8b616cfc16d1feab$export$2e2bcd8739ae039)(new Date()) + (0, $cf42a9a4c779693f$export$2e2bcd8739ae039)(input))
        };
        else this._payload = {
            ...this._payload,
            iat: $c23f2a73be1fe0cf$var$validateInput('setIssuedAt', input)
        };
        return this;
    }
}


class $affd66443207182b$export$88d4e5d23fbe6c84 extends (0, $c23f2a73be1fe0cf$export$2ef1b74b7c7e6eb3) {
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new (0, $750684c635ba9e3b$export$b6738d8e70498d17)((0, $72719cc2185840ef$export$5486af06137bf21a).encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false) throw new (0, $4f60f5f59999b78c$export$936b39ada0bbfceb)('JWTs MUST NOT use unencoded payload');
        return sig.sign(key, options);
    }
}



function $4788934dfad93d9f$export$7b3901381b0dd393(source) {
    switch(source){
        case (0, $61b2884ab967cfb2$export$cbf5c0994e5bc5f2).CAMERA:
            return "camera";
        case (0, $61b2884ab967cfb2$export$cbf5c0994e5bc5f2).MICROPHONE:
            return "microphone";
        case (0, $61b2884ab967cfb2$export$cbf5c0994e5bc5f2).SCREEN_SHARE:
            return "screen_share";
        case (0, $61b2884ab967cfb2$export$cbf5c0994e5bc5f2).SCREEN_SHARE_AUDIO:
            return "screen_share_audio";
        default:
            throw new TypeError(`Cannot convert TrackSource ${source} to string`);
    }
}
function $4788934dfad93d9f$export$4fb97b1a8357c2c9(grant) {
    var _a;
    const claim = {
        ...grant
    };
    if (Array.isArray((_a = claim.video) == null ? void 0 : _a.canPublishSources)) claim.video.canPublishSources = claim.video.canPublishSources.map($4788934dfad93d9f$export$7b3901381b0dd393);
    return claim;
}


const $af9e2758d6ff1754$var$defaultTTL = `6h`;
class $af9e2758d6ff1754$export$efefb22f2d92cc21 {
    /**
   * Creates a new AccessToken
   * @param apiKey - API Key, can be set in env LIVEKIT_API_KEY
   * @param apiSecret - Secret, can be set in env LIVEKIT_API_SECRET
   */ constructor(apiKey, apiSecret, options){
        if (!apiKey) apiKey = undefined;
        if (!apiSecret) apiSecret = undefined;
        if (!apiKey || !apiSecret) throw Error("api-key and api-secret must be set");
        else if (typeof document !== "undefined") console.error("You should not include your API secret in your web client bundle.\n\nYour web client should request a token from your backend server which should then use the API secret to generate a token. See https://docs.livekit.io/client/connect/");
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.grants = {};
        this.identity = options == null ? void 0 : options.identity;
        this.ttl = (options == null ? void 0 : options.ttl) || $af9e2758d6ff1754$var$defaultTTL;
        if (typeof this.ttl === "number") this.ttl = `${this.ttl}s`;
        if (options == null ? void 0 : options.metadata) this.metadata = options.metadata;
        if (options == null ? void 0 : options.attributes) this.attributes = options.attributes;
        if (options == null ? void 0 : options.name) this.name = options.name;
    }
    /**
   * Adds a video grant to this token.
   * @param grant -
   */ addGrant(grant) {
        this.grants.video = {
            ...this.grants.video ?? {},
            ...grant
        };
    }
    /**
   * Adds a SIP grant to this token.
   * @param grant -
   */ addSIPGrant(grant) {
        this.grants.sip = {
            ...this.grants.sip ?? {},
            ...grant
        };
    }
    get name() {
        return this.grants.name;
    }
    set name(name) {
        this.grants.name = name;
    }
    get metadata() {
        return this.grants.metadata;
    }
    /**
   * Set metadata to be passed to the Participant, used only when joining the room
   */ set metadata(md) {
        this.grants.metadata = md;
    }
    get attributes() {
        return this.grants.attributes;
    }
    set attributes(attrs) {
        this.grants.attributes = attrs;
    }
    get kind() {
        return this.grants.kind;
    }
    set kind(kind) {
        this.grants.kind = kind;
    }
    get sha256() {
        return this.grants.sha256;
    }
    set sha256(sha) {
        this.grants.sha256 = sha;
    }
    get roomPreset() {
        return this.grants.roomPreset;
    }
    set roomPreset(preset) {
        this.grants.roomPreset = preset;
    }
    get roomConfig() {
        return this.grants.roomConfig;
    }
    set roomConfig(config) {
        this.grants.roomConfig = config;
    }
    /**
   * @returns JWT encoded token
   */ async toJwt() {
        var _a;
        const secret = new TextEncoder().encode(this.apiSecret);
        const jwt = new $affd66443207182b$export$88d4e5d23fbe6c84((0, $4788934dfad93d9f$export$4fb97b1a8357c2c9)(this.grants)).setProtectedHeader({
            alg: "HS256"
        }).setIssuer(this.apiKey).setExpirationTime(this.ttl).setNotBefore(0);
        if (this.identity) jwt.setSubject(this.identity);
        else if ((_a = this.grants.video) == null ? void 0 : _a.roomJoin) throw Error("identity is required for join but not set");
        return jwt.sign(secret);
    }
}
class $af9e2758d6ff1754$export$36ebb6733b084dcd {
    constructor(apiKey, apiSecret){
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    async verify(token) {
        const secret = new TextEncoder().encode(this.apiSecret);
        const { payload: payload } = await $a507192f39bc195f$export$c878fd0f8381da51(token, secret, {
            issuer: this.apiKey
        });
        if (!payload) throw Error("invalid token");
        return payload;
    }
}




class $68d3efc49746ce4a$export$aef86a42901be09d {
    /**
   * @param apiKey - API Key.
   * @param secret - API Secret.
   * @param ttl - token TTL
   */ constructor(apiKey, secret, ttl){
        this.apiKey = apiKey;
        this.secret = secret;
        this.ttl = ttl || "10m";
    }
    async authHeader(grant, sip) {
        const at = new (0, $af9e2758d6ff1754$export$efefb22f2d92cc21)(this.apiKey, this.secret, {
            ttl: this.ttl
        });
        if (grant) at.addGrant(grant);
        if (sip) at.addSIPGrant(sip);
        return {
            Authorization: `Bearer ${await at.toJwt()}`
        };
    }
}


const $185512b549b984e9$var$defaultPrefix = "/twirp";
const $185512b549b984e9$export$ec79cd304ba8a289 = "livekit";

class $185512b549b984e9$export$3b016b062ead7c35 {
    constructor(host, pkg, prefix){
        if (host.startsWith("ws")) host = host.replace("ws", "http");
        this.host = host;
        this.pkg = pkg;
        this.prefix = prefix || $185512b549b984e9$var$defaultPrefix;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(service, method, data, headers) {
        const path = `${this.prefix}/${this.pkg}.${service}/${method}`;
        const url = new URL(path, this.host);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                ...headers
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        const parsedResp = await response.json();
        const camelcaseKeys = await (parcelRequire("icUOE")).then((mod)=>mod.default);
        return camelcaseKeys(parsedResp, {
            deep: true
        });
    }
}


const $73a72391be075b77$var$svc = "AgentDispatchService";
class $73a72391be075b77$export$92d452e84584b7a2 extends (0, $68d3efc49746ce4a$export$aef86a42901be09d) {
    /**
   * @param host - hostname including protocol. i.e. 'https://<project>.livekit.cloud'
   * @param apiKey - API Key, can be set in env var LIVEKIT_API_KEY
   * @param secret - API Secret, can be set in env var LIVEKIT_API_SECRET
   */ constructor(host, apiKey, secret){
        super(apiKey, secret);
        this.rpc = new (0, $185512b549b984e9$export$3b016b062ead7c35)(host, (0, $185512b549b984e9$export$ec79cd304ba8a289));
    }
    /**
   * Create an explicit dispatch for an agent to join a room. To use explicit
   * dispatch, your agent must be registered with an `agentName`.
   * @param roomName - name of the room to dispatch to
   * @param agentName - name of the agent to dispatch
   * @param options - optional metadata to send along with the dispatch
   * @returns the dispatch that was created
   */ async createDispatch(roomName, agentName, options) {
        const req = new (0, $61b2884ab967cfb2$export$23d61c93c3c3b75f)({
            room: roomName,
            agentName: agentName,
            metadata: options == null ? void 0 : options.metadata
        }).toJson();
        const data = await this.rpc.request($73a72391be075b77$var$svc, "CreateDispatch", req, await this.authHeader({
            roomAdmin: true,
            room: roomName
        }));
        return (0, $61b2884ab967cfb2$export$65d25d04e3f11312).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * Delete an explicit dispatch for an agent in a room.
   * @param dispatchId - id of the dispatch to delete
   * @param roomName - name of the room the dispatch is for
   */ async deleteDispatch(dispatchId, roomName) {
        const req = new (0, $61b2884ab967cfb2$export$541f37be6aac4ba1)({
            dispatchId: dispatchId,
            room: roomName
        }).toJson();
        await this.rpc.request($73a72391be075b77$var$svc, "DeleteDispatch", req, await this.authHeader({
            roomAdmin: true,
            room: roomName
        }));
    }
    /**
   * Get an Agent dispatch by ID
   * @param dispatchId - id of the dispatch to get
   * @param roomName - name of the room the dispatch is for
   * @returns the dispatch that was found, or undefined if not found
   */ async getDispatch(dispatchId, roomName) {
        const req = new (0, $61b2884ab967cfb2$export$c93b0455f0999823)({
            dispatchId: dispatchId,
            room: roomName
        }).toJson();
        const data = await this.rpc.request($73a72391be075b77$var$svc, "ListDispatch", req, await this.authHeader({
            roomAdmin: true,
            room: roomName
        }));
        const res = (0, $61b2884ab967cfb2$export$da15edbf6d1044e5).fromJson(data, {
            ignoreUnknownFields: true
        });
        if (res.agentDispatches.length === 0) return void 0;
        return res.agentDispatches[0];
    }
    /**
   * List all agent dispatches for a room
   * @param roomName - name of the room to list dispatches for
   * @returns the list of dispatches
   */ async listDispatch(roomName) {
        const req = new (0, $61b2884ab967cfb2$export$c93b0455f0999823)({
            room: roomName
        }).toJson();
        const data = await this.rpc.request($73a72391be075b77$var$svc, "ListDispatch", req, await this.authHeader({
            roomAdmin: true,
            room: roomName
        }));
        const res = (0, $61b2884ab967cfb2$export$da15edbf6d1044e5).fromJson(data, {
            ignoreUnknownFields: true
        });
        return res.agentDispatches;
    }
}





const $277e3c7a47f1a69c$var$svc = "Egress";
class $277e3c7a47f1a69c$export$8637f038c8d1c746 extends (0, $68d3efc49746ce4a$export$aef86a42901be09d) {
    /**
   * @param host - hostname including protocol. i.e. 'https://<project>.livekit.cloud'
   * @param apiKey - API Key, can be set in env var LIVEKIT_API_KEY
   * @param secret - API Secret, can be set in env var LIVEKIT_API_SECRET
   */ constructor(host, apiKey, secret){
        super(apiKey, secret);
        this.rpc = new (0, $185512b549b984e9$export$3b016b062ead7c35)(host, (0, $185512b549b984e9$export$ec79cd304ba8a289));
    }
    async startRoomCompositeEgress(roomName, output, optsOrLayout, options, audioOnly, videoOnly, customBaseUrl) {
        let layout;
        if (optsOrLayout !== void 0) {
            if (typeof optsOrLayout === "string") layout = optsOrLayout;
            else {
                const opts = optsOrLayout;
                layout = opts.layout;
                options = opts.encodingOptions;
                audioOnly = opts.audioOnly;
                videoOnly = opts.videoOnly;
                customBaseUrl = opts.customBaseUrl;
            }
        }
        layout ??= "";
        audioOnly ??= false;
        videoOnly ??= false;
        customBaseUrl ??= "";
        const { output: legacyOutput, options: egressOptions, fileOutputs: fileOutputs, streamOutputs: streamOutputs, segmentOutputs: segmentOutputs, imageOutputs: imageOutputs } = this.getOutputParams(output, options);
        const req = new (0, $61b2884ab967cfb2$export$246ecbc99f8e588b)({
            roomName: roomName,
            layout: layout,
            audioOnly: audioOnly,
            videoOnly: videoOnly,
            customBaseUrl: customBaseUrl,
            output: legacyOutput,
            options: egressOptions,
            fileOutputs: fileOutputs,
            streamOutputs: streamOutputs,
            segmentOutputs: segmentOutputs,
            imageOutputs: imageOutputs
        }).toJson();
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "StartRoomCompositeEgress", req, await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param url - url
   * @param output - file or stream output
   * @param opts - WebOptions
   */ async startWebEgress(url, output, opts) {
        const audioOnly = (opts == null ? void 0 : opts.audioOnly) || false;
        const videoOnly = (opts == null ? void 0 : opts.videoOnly) || false;
        const awaitStartSignal = (opts == null ? void 0 : opts.awaitStartSignal) || false;
        const { output: legacyOutput, options: options, fileOutputs: fileOutputs, streamOutputs: streamOutputs, segmentOutputs: segmentOutputs, imageOutputs: imageOutputs } = this.getOutputParams(output, opts == null ? void 0 : opts.encodingOptions);
        const req = new (0, $61b2884ab967cfb2$export$315faafa94b3d284)({
            url: url,
            audioOnly: audioOnly,
            videoOnly: videoOnly,
            awaitStartSignal: awaitStartSignal,
            output: legacyOutput,
            options: options,
            fileOutputs: fileOutputs,
            streamOutputs: streamOutputs,
            segmentOutputs: segmentOutputs,
            imageOutputs: imageOutputs
        }).toJson();
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "StartWebEgress", req, await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * Export a participant's audio and video tracks,
   *
   * @param roomName - room name
   * @param output - one or more outputs
   * @param opts - ParticipantEgressOptions
   */ async startParticipantEgress(roomName, identity, output, opts) {
        const { options: options, fileOutputs: fileOutputs, streamOutputs: streamOutputs, segmentOutputs: segmentOutputs, imageOutputs: imageOutputs } = this.getOutputParams(output, opts == null ? void 0 : opts.encodingOptions);
        const req = new (0, $61b2884ab967cfb2$export$df4ce648af696991)({
            roomName: roomName,
            identity: identity,
            screenShare: (opts == null ? void 0 : opts.screenShare) ?? false,
            options: options,
            fileOutputs: fileOutputs,
            streamOutputs: streamOutputs,
            segmentOutputs: segmentOutputs,
            imageOutputs: imageOutputs
        }).toJson();
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "StartParticipantEgress", req, await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    async startTrackCompositeEgress(roomName, output, optsOrAudioTrackId, videoTrackId, options) {
        let audioTrackId;
        if (optsOrAudioTrackId !== void 0) {
            if (typeof optsOrAudioTrackId === "string") audioTrackId = optsOrAudioTrackId;
            else {
                const opts = optsOrAudioTrackId;
                audioTrackId = opts.audioTrackId;
                videoTrackId = opts.videoTrackId;
                options = opts.encodingOptions;
            }
        }
        audioTrackId ??= "";
        videoTrackId ??= "";
        const { output: legacyOutput, options: egressOptions, fileOutputs: fileOutputs, streamOutputs: streamOutputs, segmentOutputs: segmentOutputs, imageOutputs: imageOutputs } = this.getOutputParams(output, options);
        const req = new (0, $61b2884ab967cfb2$export$9cd20a9017807414)({
            roomName: roomName,
            audioTrackId: audioTrackId,
            videoTrackId: videoTrackId,
            output: legacyOutput,
            options: egressOptions,
            fileOutputs: fileOutputs,
            streamOutputs: streamOutputs,
            segmentOutputs: segmentOutputs,
            imageOutputs: imageOutputs
        }).toJson();
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "StartTrackCompositeEgress", req, await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isEncodedOutputs(output) {
        return output.file !== void 0 || output.stream !== void 0 || output.segments !== void 0 || output.images !== void 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isEncodedFileOutput(output) {
        return output.filepath !== void 0 || output.fileType !== void 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isSegmentedFileOutput(output) {
        return output.filenamePrefix !== void 0 || output.playlistName !== void 0 || output.filenameSuffix !== void 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isStreamOutput(output) {
        return output.protocol !== void 0 || output.urls !== void 0;
    }
    getOutputParams(output, opts) {
        let file;
        let fileOutputs;
        let stream;
        let streamOutputs;
        let segments;
        let segmentOutputs;
        let imageOutputs;
        if (this.isEncodedOutputs(output)) {
            if (output.file !== void 0) fileOutputs = [
                output.file
            ];
            if (output.stream !== void 0) streamOutputs = [
                output.stream
            ];
            if (output.segments !== void 0) segmentOutputs = [
                output.segments
            ];
            if (output.images !== void 0) imageOutputs = [
                output.images
            ];
        } else if (this.isEncodedFileOutput(output)) {
            file = output;
            fileOutputs = [
                file
            ];
        } else if (this.isSegmentedFileOutput(output)) {
            segments = output;
            segmentOutputs = [
                segments
            ];
        } else if (this.isStreamOutput(output)) {
            stream = output;
            streamOutputs = [
                stream
            ];
        }
        let legacyOutput;
        if (file) legacyOutput = {
            case: "file",
            value: file
        };
        else if (stream) legacyOutput = {
            case: "stream",
            value: stream
        };
        else if (segments) legacyOutput = {
            case: "segments",
            value: segments
        };
        let egressOptions;
        if (opts) {
            if (typeof opts === "number") egressOptions = {
                case: "preset",
                value: opts
            };
            else egressOptions = {
                case: "advanced",
                value: opts
            };
        }
        return {
            output: legacyOutput,
            options: egressOptions,
            fileOutputs: fileOutputs,
            streamOutputs: streamOutputs,
            segmentOutputs: segmentOutputs,
            imageOutputs: imageOutputs
        };
    }
    /**
   * @param roomName - room name
   * @param output - file or websocket output
   * @param trackId - track Id
   */ async startTrackEgress(roomName, output, trackId) {
        let legacyOutput;
        if (typeof output === "string") legacyOutput = {
            case: "websocketUrl",
            value: output
        };
        else legacyOutput = {
            case: "file",
            value: output
        };
        const req = new (0, $61b2884ab967cfb2$export$abade7d6c0af35bb)({
            roomName: roomName,
            trackId: trackId,
            output: legacyOutput
        }).toJson();
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "StartTrackEgress", req, await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param egressId -
   * @param layout -
   */ async updateLayout(egressId, layout) {
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "UpdateLayout", new (0, $61b2884ab967cfb2$export$2d497e9f144595bb)({
            egressId: egressId,
            layout: layout
        }).toJson(), await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param egressId -
   * @param addOutputUrls -
   * @param removeOutputUrls -
   */ async updateStream(egressId, addOutputUrls, removeOutputUrls) {
        addOutputUrls ??= [];
        removeOutputUrls ??= [];
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "UpdateStream", new (0, $61b2884ab967cfb2$export$f80580ded392d16d)({
            egressId: egressId,
            addOutputUrls: addOutputUrls,
            removeOutputUrls: removeOutputUrls
        }).toJson(), await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param roomName - list egress for one room only
   */ async listEgress(options) {
        let req = {};
        if (typeof options === "string") req.roomName = options;
        else if (options !== void 0) req = options;
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "ListEgress", new (0, $61b2884ab967cfb2$export$5ac9e6a3f06d64a4)(req).toJson(), await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$93e604365793a616).fromJson(data, {
            ignoreUnknownFields: true
        }).items ?? [];
    }
    /**
   * @param egressId -
   */ async stopEgress(egressId) {
        const data = await this.rpc.request($277e3c7a47f1a69c$var$svc, "StopEgress", new (0, $61b2884ab967cfb2$export$15fafcca58ae0285)({
            egressId: egressId
        }).toJson(), await this.authHeader({
            roomRecord: true
        }));
        return (0, $61b2884ab967cfb2$export$f048c27fbab07545).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
}






const $0c5a58cf2c7982a3$var$svc = "Ingress";
class $0c5a58cf2c7982a3$export$f5bc646a00cbce17 extends (0, $68d3efc49746ce4a$export$aef86a42901be09d) {
    /**
   * @param host - hostname including protocol. i.e. 'https://<project>.livekit.cloud'
   * @param apiKey - API Key, can be set in env var LIVEKIT_API_KEY
   * @param secret - API Secret, can be set in env var LIVEKIT_API_SECRET
   */ constructor(host, apiKey, secret){
        super(apiKey, secret);
        this.rpc = new (0, $185512b549b984e9$export$3b016b062ead7c35)(host, (0, $185512b549b984e9$export$ec79cd304ba8a289));
    }
    /**
   * @param inputType - protocol for the ingress
   * @param opts - CreateIngressOptions
   */ async createIngress(inputType, opts) {
        let name = "";
        let participantName = "";
        let participantIdentity = "";
        let bypassTranscoding = false;
        let url = "";
        if (opts == null) throw new Error("options dictionary is required");
        const roomName = opts.roomName;
        const enableTranscoding = opts.enableTranscoding;
        const audio = opts.audio;
        const video = opts.video;
        const participantMetadata = opts.participantMetadata;
        name = opts.name || "";
        participantName = opts.participantName || "";
        participantIdentity = opts.participantIdentity || "";
        bypassTranscoding = opts.bypassTranscoding || false;
        url = opts.url || "";
        if (typeof roomName == "undefined") throw new Error("required roomName option not provided");
        if (participantIdentity == "") throw new Error("required participantIdentity option not provided");
        const req = new (0, $61b2884ab967cfb2$export$d12a1bfce75c7286)({
            inputType: inputType,
            name: name,
            roomName: roomName,
            participantIdentity: participantIdentity,
            participantMetadata: participantMetadata,
            participantName: participantName,
            bypassTranscoding: bypassTranscoding,
            enableTranscoding: enableTranscoding,
            url: url,
            audio: audio,
            video: video
        }).toJson();
        const data = await this.rpc.request($0c5a58cf2c7982a3$var$svc, "CreateIngress", req, await this.authHeader({
            ingressAdmin: true
        }));
        return (0, $61b2884ab967cfb2$export$5674ac8ebaa0976b).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param ingressId - ID of the ingress to update
   * @param opts - UpdateIngressOptions
   */ async updateIngress(ingressId, opts) {
        const name = opts.name || "";
        const roomName = opts.roomName || "";
        const participantName = opts.participantName || "";
        const participantIdentity = opts.participantIdentity || "";
        const { participantMetadata: participantMetadata } = opts;
        const { audio: audio, video: video, bypassTranscoding: bypassTranscoding, enableTranscoding: enableTranscoding } = opts;
        const req = new (0, $61b2884ab967cfb2$export$dd709c674b055b3b)({
            ingressId: ingressId,
            name: name,
            roomName: roomName,
            participantIdentity: participantIdentity,
            participantName: participantName,
            participantMetadata: participantMetadata,
            bypassTranscoding: bypassTranscoding,
            enableTranscoding: enableTranscoding,
            audio: audio,
            video: video
        }).toJson();
        const data = await this.rpc.request($0c5a58cf2c7982a3$var$svc, "UpdateIngress", req, await this.authHeader({
            ingressAdmin: true
        }));
        return (0, $61b2884ab967cfb2$export$5674ac8ebaa0976b).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param arg - list room name or options
   */ async listIngress(arg) {
        let req = {};
        if (typeof arg === "string") req.roomName = arg;
        else if (arg) req = arg;
        const data = await this.rpc.request($0c5a58cf2c7982a3$var$svc, "ListIngress", new (0, $61b2884ab967cfb2$export$edf18179d03e7ae1)(req).toJson(), await this.authHeader({
            ingressAdmin: true
        }));
        return (0, $61b2884ab967cfb2$export$629e58d25d0ef00).fromJson(data, {
            ignoreUnknownFields: true
        }).items ?? [];
    }
    /**
   * @param ingressId - ingress to delete
   */ async deleteIngress(ingressId) {
        const data = await this.rpc.request($0c5a58cf2c7982a3$var$svc, "DeleteIngress", new (0, $61b2884ab967cfb2$export$8356c2a87de1a8a3)({
            ingressId: ingressId
        }).toJson(), await this.authHeader({
            ingressAdmin: true
        }));
        return (0, $61b2884ab967cfb2$export$5674ac8ebaa0976b).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
}





const $5cae5c5ef6782f8c$var$svc = "RoomService";
class $5cae5c5ef6782f8c$export$8f0ae1ef6acfc0d7 extends (0, $68d3efc49746ce4a$export$aef86a42901be09d) {
    /**
   *
   * @param host - hostname including protocol. i.e. 'https://<project>.livekit.cloud'
   * @param apiKey - API Key, can be set in env var LIVEKIT_API_KEY
   * @param secret - API Secret, can be set in env var LIVEKIT_API_SECRET
   */ constructor(host, apiKey, secret){
        super(apiKey, secret);
        this.rpc = new (0, $185512b549b984e9$export$3b016b062ead7c35)(host, (0, $185512b549b984e9$export$ec79cd304ba8a289));
    }
    /**
   * Creates a new room. Explicit room creation is not required, since rooms will
   * be automatically created when the first participant joins. This method can be
   * used to customize room settings.
   * @param options -
   */ async createRoom(options) {
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "CreateRoom", new (0, $61b2884ab967cfb2$export$a60a29f8aeb8a7d2)(options).toJson(), await this.authHeader({
            roomCreate: true
        }));
        return (0, $61b2884ab967cfb2$export$525628e68e798fb4).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * List active rooms
   * @param names - when undefined or empty, list all rooms.
   *                otherwise returns rooms with matching names
   * @returns
   */ async listRooms(names) {
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "ListRooms", new (0, $61b2884ab967cfb2$export$e554e3c84e0ba5ce)({
            names: names ?? []
        }).toJson(), await this.authHeader({
            roomList: true
        }));
        const res = (0, $61b2884ab967cfb2$export$3b15bc6ecf8fc7d1).fromJson(data, {
            ignoreUnknownFields: true
        });
        return res.rooms ?? [];
    }
    async deleteRoom(room) {
        await this.rpc.request($5cae5c5ef6782f8c$var$svc, "DeleteRoom", new (0, $61b2884ab967cfb2$export$afa8f43fff04b9dd)({
            room: room
        }).toJson(), await this.authHeader({
            roomCreate: true
        }));
    }
    /**
   * Update metadata of a room
   * @param room - name of the room
   * @param metadata - the new metadata for the room
   */ async updateRoomMetadata(room, metadata) {
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "UpdateRoomMetadata", new (0, $61b2884ab967cfb2$export$2b7ec129b0bb2843)({
            room: room,
            metadata: metadata
        }).toJson(), await this.authHeader({
            roomAdmin: true,
            room: room
        }));
        return (0, $61b2884ab967cfb2$export$525628e68e798fb4).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * List participants in a room
   * @param room - name of the room
   */ async listParticipants(room) {
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "ListParticipants", new (0, $61b2884ab967cfb2$export$89a91e2a3a1dbc06)({
            room: room
        }).toJson(), await this.authHeader({
            roomAdmin: true,
            room: room
        }));
        const res = (0, $61b2884ab967cfb2$export$a51135d3a9158479).fromJson(data, {
            ignoreUnknownFields: true
        });
        return res.participants ?? [];
    }
    /**
   * Get information on a specific participant, including the tracks that participant
   * has published
   * @param room - name of the room
   * @param identity - identity of the participant to return
   */ async getParticipant(room, identity) {
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "GetParticipant", new (0, $61b2884ab967cfb2$export$5f08bc7f07d9eb16)({
            room: room,
            identity: identity
        }).toJson(), await this.authHeader({
            roomAdmin: true,
            room: room
        }));
        return (0, $61b2884ab967cfb2$export$c21db75dbd2864bf).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * Removes a participant in the room. This will disconnect the participant
   * and will emit a Disconnected event for that participant.
   * Even after being removed, the participant can still re-join the room.
   * @param room -
   * @param identity -
   */ async removeParticipant(room, identity) {
        await this.rpc.request($5cae5c5ef6782f8c$var$svc, "RemoveParticipant", new (0, $61b2884ab967cfb2$export$5f08bc7f07d9eb16)({
            room: room,
            identity: identity
        }).toJson(), await this.authHeader({
            roomAdmin: true,
            room: room
        }));
    }
    /**
   * Mutes a track that the participant has published.
   * @param room -
   * @param identity -
   * @param trackSid - sid of the track to be muted
   * @param muted - true to mute, false to unmute
   */ async mutePublishedTrack(room, identity, trackSid, muted) {
        const req = new (0, $61b2884ab967cfb2$export$1c4befe24a814bff)({
            room: room,
            identity: identity,
            trackSid: trackSid,
            muted: muted
        }).toJson();
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "MutePublishedTrack", req, await this.authHeader({
            roomAdmin: true,
            room: room
        }));
        const res = (0, $61b2884ab967cfb2$export$b98dae56dfe6bb6c).fromJson(data, {
            ignoreUnknownFields: true
        });
        return res.track;
    }
    async updateParticipant(room, identity, metadataOrOptions, maybePermission, maybeName) {
        const hasOptions = typeof metadataOrOptions === "object";
        const metadata = hasOptions ? metadataOrOptions == null ? void 0 : metadataOrOptions.metadata : metadataOrOptions;
        const permission = hasOptions ? metadataOrOptions.permission : maybePermission;
        const name = hasOptions ? metadataOrOptions.name : maybeName;
        const attributes = hasOptions ? metadataOrOptions.attributes : {};
        const req = new (0, $61b2884ab967cfb2$export$894f49bf2e62980)({
            room: room,
            identity: identity,
            attributes: attributes,
            metadata: metadata,
            name: name
        });
        if (permission) req.permission = new (0, $61b2884ab967cfb2$export$b214b7afef2b0eed)(permission);
        const data = await this.rpc.request($5cae5c5ef6782f8c$var$svc, "UpdateParticipant", req.toJson(), await this.authHeader({
            roomAdmin: true,
            room: room
        }));
        return (0, $61b2884ab967cfb2$export$c21db75dbd2864bf).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * Updates a participant's subscription to tracks
   * @param room -
   * @param identity -
   * @param trackSids -
   * @param subscribe - true to subscribe, false to unsubscribe
   */ async updateSubscriptions(room, identity, trackSids, subscribe) {
        const req = new (0, $61b2884ab967cfb2$export$1c24f2f432c4e799)({
            room: room,
            identity: identity,
            trackSids: trackSids,
            subscribe: subscribe,
            participantTracks: []
        }).toJson();
        await this.rpc.request($5cae5c5ef6782f8c$var$svc, "UpdateSubscriptions", req, await this.authHeader({
            roomAdmin: true,
            room: room
        }));
    }
    async sendData(room, data, kind, options = {}) {
        const destinationSids = Array.isArray(options) ? options : options.destinationSids;
        const topic = Array.isArray(options) ? void 0 : options.topic;
        const req = new (0, $61b2884ab967cfb2$export$b07333342802d3db)({
            room: room,
            data: data,
            kind: kind,
            destinationSids: destinationSids ?? [],
            topic: topic
        });
        if (!Array.isArray(options) && options.destinationIdentities) req.destinationIdentities = options.destinationIdentities;
        await this.rpc.request($5cae5c5ef6782f8c$var$svc, "SendData", req.toJson(), await this.authHeader({
            roomAdmin: true,
            room: room
        }));
    }
}






const $1f147aaf396d7c7b$var$svc = "SIP";
class $1f147aaf396d7c7b$export$b21bc3f6c0b75a7d extends (0, $68d3efc49746ce4a$export$aef86a42901be09d) {
    /**
   * @param host - hostname including protocol. i.e. 'https://<project>.livekit.cloud'
   * @param apiKey - API Key, can be set in env var LIVEKIT_API_KEY
   * @param secret - API Secret, can be set in env var LIVEKIT_API_SECRET
   */ constructor(host, apiKey, secret){
        super(apiKey, secret);
        this.rpc = new (0, $185512b549b984e9$export$3b016b062ead7c35)(host, (0, $185512b549b984e9$export$ec79cd304ba8a289));
    }
    /**
   * @param number - phone number of the trunk
   * @param opts - CreateSipTrunkOptions
   * @deprecated use `createSipInboundTrunk` or `createSipOutboundTrunk`
   */ async createSipTrunk(number, opts) {
        let inboundAddresses;
        let inboundNumbers;
        let inboundUsername = "";
        let inboundPassword = "";
        let outboundAddress = "";
        let outboundUsername = "";
        let outboundPassword = "";
        let name = "";
        let metadata = "";
        if (opts !== void 0) {
            inboundAddresses = opts.inbound_addresses;
            inboundNumbers = opts.inbound_numbers;
            inboundUsername = opts.inbound_username || "";
            inboundPassword = opts.inbound_password || "";
            outboundAddress = opts.outbound_address || "";
            outboundUsername = opts.outbound_username || "";
            outboundPassword = opts.outbound_password || "";
            name = opts.name || "";
            metadata = opts.metadata || "";
        }
        const req = new (0, $61b2884ab967cfb2$export$4b69a88733933eff)({
            name: name,
            metadata: metadata,
            inboundAddresses: inboundAddresses,
            inboundNumbers: inboundNumbers,
            inboundUsername: inboundUsername,
            inboundPassword: inboundPassword,
            outboundNumber: number,
            outboundAddress: outboundAddress,
            outboundUsername: outboundUsername,
            outboundPassword: outboundPassword
        }).toJson();
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "CreateSIPTrunk", req, await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$b329bc51714a3ca6).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param name - human-readable name of the trunk
   * @param numbers - phone numbers of the trunk
   * @param opts - CreateSipTrunkOptions
   */ async createSipInboundTrunk(name, numbers, opts) {
        if (opts === void 0) opts = {};
        const req = new (0, $61b2884ab967cfb2$export$aa3359104cf4dc09)({
            trunk: new (0, $61b2884ab967cfb2$export$6fd6c8cbad93f89e)({
                name: name,
                numbers: numbers,
                metadata: opts == null ? void 0 : opts.metadata,
                allowedAddresses: opts.allowedAddresses ?? opts.allowed_addresses,
                allowedNumbers: opts.allowedNumbers ?? opts.allowed_numbers,
                authUsername: opts.authUsername ?? opts.auth_username,
                authPassword: opts.authPassword ?? opts.auth_password,
                headers: opts.headers,
                headersToAttributes: opts.headersToAttributes,
                includeHeaders: opts.includeHeaders,
                krispEnabled: opts.krispEnabled
            })
        }).toJson();
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "CreateSIPInboundTrunk", req, await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$6fd6c8cbad93f89e).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param name - human-readable name of the trunk
   * @param address - hostname and port of the SIP server to dial
   * @param numbers - phone numbers of the trunk
   * @param opts - CreateSipTrunkOptions
   */ async createSipOutboundTrunk(name, address, numbers, opts) {
        if (opts === void 0) opts = {
            transport: (0, $61b2884ab967cfb2$export$65b7d05ef33678e1).SIP_TRANSPORT_AUTO
        };
        const req = new (0, $61b2884ab967cfb2$export$8cf3da13d6d7162b)({
            trunk: new (0, $61b2884ab967cfb2$export$a6099ce2dff7b8ef)({
                name: name,
                address: address,
                numbers: numbers,
                metadata: opts.metadata,
                transport: opts.transport,
                authUsername: opts.authUsername ?? opts.auth_username,
                authPassword: opts.authPassword ?? opts.auth_password,
                headers: opts.headers,
                headersToAttributes: opts.headersToAttributes,
                includeHeaders: opts.includeHeaders
            })
        }).toJson();
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "CreateSIPOutboundTrunk", req, await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$a6099ce2dff7b8ef).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @deprecated use `listSipInboundTrunk` or `listSipOutboundTrunk`
   */ async listSipTrunk() {
        const req = {};
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "ListSIPTrunk", new (0, $61b2884ab967cfb2$export$78e9dbe2ba6abf37)(req).toJson(), await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$9e46482adca3a615).fromJson(data, {
            ignoreUnknownFields: true
        }).items ?? [];
    }
    async listSipInboundTrunk() {
        const req = {};
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "ListSIPInboundTrunk", new (0, $61b2884ab967cfb2$export$ab2a2b329b6800b)(req).toJson(), await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$88fe64fd0f7db58b).fromJson(data, {
            ignoreUnknownFields: true
        }).items ?? [];
    }
    async listSipOutboundTrunk() {
        const req = {};
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "ListSIPOutboundTrunk", new (0, $61b2884ab967cfb2$export$4089eef80a0a85c4)(req).toJson(), await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$709e160a6c9dfdce).fromJson(data, {
            ignoreUnknownFields: true
        }).items ?? [];
    }
    /**
   * @param sipTrunkId - sip trunk to delete
   */ async deleteSipTrunk(sipTrunkId) {
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "DeleteSIPTrunk", new (0, $61b2884ab967cfb2$export$7d22cd396d88af12)({
            sipTrunkId: sipTrunkId
        }).toJson(), await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$b329bc51714a3ca6).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param rule - sip dispatch rule
   * @param opts - CreateSipDispatchRuleOptions
   */ async createSipDispatchRule(rule, opts) {
        if (opts === void 0) opts = {};
        let ruleProto = void 0;
        if (rule.type == "direct") ruleProto = new (0, $61b2884ab967cfb2$export$e462b76df16f84d8)({
            rule: {
                case: "dispatchRuleDirect",
                value: new (0, $61b2884ab967cfb2$export$56de8e9d817e6192)({
                    roomName: rule.roomName,
                    pin: rule.pin || ""
                })
            }
        });
        else if (rule.type == "individual") ruleProto = new (0, $61b2884ab967cfb2$export$e462b76df16f84d8)({
            rule: {
                case: "dispatchRuleIndividual",
                value: new (0, $61b2884ab967cfb2$export$8454de0782bee34d)({
                    roomPrefix: rule.roomPrefix,
                    pin: rule.pin || ""
                })
            }
        });
        const req = new (0, $61b2884ab967cfb2$export$e0372a098096ab24)({
            rule: ruleProto,
            trunkIds: opts.trunkIds,
            hidePhoneNumber: opts.hidePhoneNumber,
            name: opts.name,
            metadata: opts.metadata,
            attributes: opts.attributes,
            roomPreset: opts.roomPreset,
            roomConfig: opts.roomConfig
        }).toJson();
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "CreateSIPDispatchRule", req, await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$dbe540358fff9ea8).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    async listSipDispatchRule() {
        const req = {};
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "ListSIPDispatchRule", new (0, $61b2884ab967cfb2$export$1ad02cbba0e29950)(req).toJson(), await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$5ea7775ad0a9491a).fromJson(data, {
            ignoreUnknownFields: true
        }).items ?? [];
    }
    /**
   * @param sipDispatchRuleId - sip trunk to delete
   */ async deleteSipDispatchRule(sipDispatchRuleId) {
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "DeleteSIPDispatchRule", new (0, $61b2884ab967cfb2$export$46ce5d3e5e8648a)({
            sipDispatchRuleId: sipDispatchRuleId
        }).toJson(), await this.authHeader({}, {
            admin: true
        }));
        return (0, $61b2884ab967cfb2$export$dbe540358fff9ea8).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param sipTrunkId - sip trunk to use for the call
   * @param number - number to dial
   * @param roomName - room to attach the call to
   * @param opts - CreateSipParticipantOptions
   */ async createSipParticipant(sipTrunkId, number, roomName, opts) {
        if (opts === void 0) opts = {};
        const req = new (0, $61b2884ab967cfb2$export$365b55c99a8af576)({
            sipTrunkId: sipTrunkId,
            sipCallTo: number,
            roomName: roomName,
            participantIdentity: opts.participantIdentity || "sip-participant",
            participantName: opts.participantName,
            participantMetadata: opts.participantMetadata,
            dtmf: opts.dtmf,
            playDialtone: opts.playDialtone ?? opts.playRingtone,
            headers: opts.headers,
            hidePhoneNumber: opts.hidePhoneNumber,
            includeHeaders: opts.includeHeaders,
            ringingTimeout: opts.ringingTimeout ? new (0, $f5dd5d32ad1dfbf2$exports.Duration)({
                seconds: BigInt(opts.ringingTimeout)
            }) : void 0,
            maxCallDuration: opts.maxCallDuration ? new (0, $f5dd5d32ad1dfbf2$exports.Duration)({
                seconds: BigInt(opts.maxCallDuration)
            }) : void 0,
            enableKrisp: opts.enableKrisp
        }).toJson();
        const data = await this.rpc.request($1f147aaf396d7c7b$var$svc, "CreateSIPParticipant", req, await this.authHeader({}, {
            call: true
        }));
        return (0, $61b2884ab967cfb2$export$70b9ed824821efa8).fromJson(data, {
            ignoreUnknownFields: true
        });
    }
    /**
   * @param roomName - room the SIP participant to transfer is connectd to
   * @param participantIdentity - identity of the SIP participant to transfer
   * @param transferTo - SIP URL to transfer the participant to
   */ async transferSipParticipant(roomName, participantIdentity, transferTo, opts) {
        if (opts === void 0) opts = {};
        const req = new (0, $61b2884ab967cfb2$export$764264e55008882d)({
            participantIdentity: participantIdentity,
            roomName: roomName,
            transferTo: transferTo,
            playDialtone: opts.playDialtone,
            headers: opts.headers
        }).toJson();
        await this.rpc.request($1f147aaf396d7c7b$var$svc, "TransferSIPParticipant", req, await this.authHeader({
            roomAdmin: true,
            room: roomName
        }, {
            call: true
        }));
    }
}





async function $84f30f4f070ec666$export$4dc2d9f0820a4918(data) {
    var _a;
    if ((_a = globalThis.crypto) == null ? void 0 : _a.subtle) {
        const encoder = new TextEncoder();
        return crypto.subtle.digest("SHA-256", encoder.encode(data));
    } else {
        const nodeCrypto = await (parcelRequire("jgT9c"));
        return nodeCrypto.createHash("sha256").update(data).digest();
    }
}


const $367ad1ffa787fb06$export$8a4929ab51148415 = "Authorize";
class $367ad1ffa787fb06$export$13fe0c3c877b57b3 extends (0, $61b2884ab967cfb2$export$13fe0c3c877b57b3) {
    constructor(){
        super(...arguments);
        this.event = "";
    }
    static fromBinary(bytes, options) {
        return new $367ad1ffa787fb06$export$13fe0c3c877b57b3().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new $367ad1ffa787fb06$export$13fe0c3c877b57b3().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new $367ad1ffa787fb06$export$13fe0c3c877b57b3().fromJsonString(jsonString, options);
    }
}
class $367ad1ffa787fb06$export$4b65c2c390f6f9fe {
    constructor(apiKey, apiSecret){
        this.verifier = new (0, $af9e2758d6ff1754$export$36ebb6733b084dcd)(apiKey, apiSecret);
    }
    /**
   * @param body - string of the posted body
   * @param authHeader - `Authorization` header from the request
   * @param skipAuth - true to skip auth validation
   * @returns
   */ async receive(body, authHeader, skipAuth = false) {
        if (!skipAuth) {
            if (!authHeader) throw new Error("authorization header is empty");
            const claims = await this.verifier.verify(authHeader);
            const hash = await (0, $84f30f4f070ec666$export$4dc2d9f0820a4918)(body);
            const hashDecoded = btoa(Array.from(new Uint8Array(hash)).map((v)=>String.fromCharCode(v)).join(""));
            if (claims.sha256 !== hashDecoded) throw new Error("sha256 checksum of body does not match");
        }
        return $367ad1ffa787fb06$export$13fe0c3c877b57b3.fromJson(JSON.parse(body), {
            ignoreUnknownFields: true
        });
    }
}




function $4750beafa018a43c$export$1305e32154f0d14d() {
    return Math.random().toString(36).substring(2, 10);
}
async function $4750beafa018a43c$export$257b2d10b709d8ef() {
    if (!window.LIVEKIT_API_KEY || !window.LIVEKIT_API_SECRET) {
        console.error('Please set LIVEKIT_API_KEY and LIVEKIT_API_SECRET');
        return null;
    }
    // Create a new access token
    const at = new (0, $af9e2758d6ff1754$export$efefb22f2d92cc21)(window.LIVEKIT_API_KEY, window.LIVEKIT_API_SECRET, {
        identity: $4750beafa018a43c$export$1305e32154f0d14d(),
        name: $4750beafa018a43c$export$1305e32154f0d14d()
    });
    // Grant permissions
    at.addGrant({
        room: 'my-first-room',
        roomJoin: true,
        canPublish: true,
        canSubscribe: true
    });
    // Generate the token
    return at.toJwt();
}
// Expose to window object
if (typeof window !== 'undefined') window.getToken = $4750beafa018a43c$export$257b2d10b709d8ef;
var $4750beafa018a43c$export$2e2bcd8739ae039 = {
    getToken: $4750beafa018a43c$export$257b2d10b709d8ef,
    generateRandomName: $4750beafa018a43c$export$1305e32154f0d14d
};

})();
