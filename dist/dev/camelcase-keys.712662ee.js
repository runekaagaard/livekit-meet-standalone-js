(() => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("6ANSA", function(module, exports) {

$parcel$export(module.exports, "default", () => $4ccccbe1281fba63$export$2e2bcd8739ae039);

var $gPcBX = parcelRequire("gPcBX");

var $94tJb = parcelRequire("94tJb");

var $8bF5h = parcelRequire("8bF5h");
const $4ccccbe1281fba63$var$has = (array, key)=>array.some((element)=>{
        if (typeof element === 'string') return element === key;
        element.lastIndex = 0;
        return element.test(key);
    });
const $4ccccbe1281fba63$var$cache = new (0, $8bF5h.default)({
    maxSize: 100000
});
// Reproduces behavior from `map-obj`.
const $4ccccbe1281fba63$var$isObject = (value)=>typeof value === 'object' && value !== null && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
const $4ccccbe1281fba63$var$transform = (input, options = {})=>{
    if (!$4ccccbe1281fba63$var$isObject(input)) return input;
    const { exclude: exclude, pascalCase: pascalCase = false, stopPaths: stopPaths, deep: deep = false, preserveConsecutiveUppercase: preserveConsecutiveUppercase = false } = options;
    const stopPathsSet = new Set(stopPaths);
    const makeMapper = (parentPath)=>(key, value)=>{
            if (deep && $4ccccbe1281fba63$var$isObject(value)) {
                const path = parentPath === undefined ? key : `${parentPath}.${key}`;
                if (!stopPathsSet.has(path)) value = (0, $gPcBX.default)(value, makeMapper(path));
            }
            if (!(exclude && $4ccccbe1281fba63$var$has(exclude, key))) {
                const cacheKey = pascalCase ? `${key}_` : key;
                if ($4ccccbe1281fba63$var$cache.has(cacheKey)) key = $4ccccbe1281fba63$var$cache.get(cacheKey);
                else {
                    const returnValue = (0, $94tJb.default)(key, {
                        pascalCase: pascalCase,
                        locale: false,
                        preserveConsecutiveUppercase: preserveConsecutiveUppercase
                    });
                    if (key.length < 100) $4ccccbe1281fba63$var$cache.set(cacheKey, returnValue);
                    key = returnValue;
                }
            }
            return [
                key,
                value
            ];
        };
    return (0, $gPcBX.default)(input, makeMapper(undefined));
};
function $4ccccbe1281fba63$export$2e2bcd8739ae039(input, options) {
    if (Array.isArray(input)) return Object.keys(input).map((key)=>$4ccccbe1281fba63$var$transform(input[key], options));
    return $4ccccbe1281fba63$var$transform(input, options);
}

});
parcelRegister("gPcBX", function(module, exports) {

$parcel$export(module.exports, "default", () => $c3fb31139fcb7aed$export$2e2bcd8739ae039);
const $c3fb31139fcb7aed$var$isObject = (value)=>typeof value === 'object' && value !== null;
// Customized for this use-case
const $c3fb31139fcb7aed$var$isObjectCustom = (value)=>$c3fb31139fcb7aed$var$isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
const $c3fb31139fcb7aed$export$1907644b6cb89d54 = Symbol('mapObjectSkip');
const $c3fb31139fcb7aed$var$_mapObject = (object, mapper, options, isSeen = new WeakMap())=>{
    options = {
        deep: false,
        target: {},
        ...options
    };
    if (isSeen.has(object)) return isSeen.get(object);
    isSeen.set(object, options.target);
    const { target: target } = options;
    delete options.target;
    const mapArray = (array)=>array.map((element)=>$c3fb31139fcb7aed$var$isObjectCustom(element) ? $c3fb31139fcb7aed$var$_mapObject(element, mapper, options, isSeen) : element);
    if (Array.isArray(object)) return mapArray(object);
    for (const [key, value] of Object.entries(object)){
        const mapResult = mapper(key, value, object);
        if (mapResult === $c3fb31139fcb7aed$export$1907644b6cb89d54) continue;
        let [newKey, newValue, { shouldRecurse: shouldRecurse = true } = {}] = mapResult;
        // Drop `__proto__` keys.
        if (newKey === '__proto__') continue;
        if (options.deep && shouldRecurse && $c3fb31139fcb7aed$var$isObjectCustom(newValue)) newValue = Array.isArray(newValue) ? mapArray(newValue) : $c3fb31139fcb7aed$var$_mapObject(newValue, mapper, options, isSeen);
        target[newKey] = newValue;
    }
    return target;
};
function $c3fb31139fcb7aed$export$2e2bcd8739ae039(object, mapper, options) {
    if (!$c3fb31139fcb7aed$var$isObject(object)) throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
    return $c3fb31139fcb7aed$var$_mapObject(object, mapper, options);
}

});

parcelRegister("94tJb", function(module, exports) {

$parcel$export(module.exports, "default", () => $69ab8c183b87f39d$export$2e2bcd8739ae039);
const $69ab8c183b87f39d$var$UPPERCASE = /[\p{Lu}]/u;
const $69ab8c183b87f39d$var$LOWERCASE = /[\p{Ll}]/u;
const $69ab8c183b87f39d$var$LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const $69ab8c183b87f39d$var$IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const $69ab8c183b87f39d$var$SEPARATORS = /[_.\- ]+/;
const $69ab8c183b87f39d$var$LEADING_SEPARATORS = new RegExp('^' + $69ab8c183b87f39d$var$SEPARATORS.source);
const $69ab8c183b87f39d$var$SEPARATORS_AND_IDENTIFIER = new RegExp($69ab8c183b87f39d$var$SEPARATORS.source + $69ab8c183b87f39d$var$IDENTIFIER.source, 'gu');
const $69ab8c183b87f39d$var$NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + $69ab8c183b87f39d$var$IDENTIFIER.source, 'gu');
const $69ab8c183b87f39d$var$preserveCamelCase = (string, toLowerCase, toUpperCase, preserveConsecutiveUppercase)=>{
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;
    let isLastLastCharPreserved = false;
    for(let index = 0; index < string.length; index++){
        const character = string[index];
        isLastLastCharPreserved = index > 2 ? string[index - 3] === '-' : true;
        if (isLastCharLower && $69ab8c183b87f39d$var$UPPERCASE.test(character)) {
            string = string.slice(0, index) + '-' + string.slice(index);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            index++;
        } else if (isLastCharUpper && isLastLastCharUpper && $69ab8c183b87f39d$var$LOWERCASE.test(character) && (!isLastLastCharPreserved || preserveConsecutiveUppercase)) {
            string = string.slice(0, index - 1) + '-' + string.slice(index - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        } else {
            isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
    }
    return string;
};
const $69ab8c183b87f39d$var$preserveConsecutiveUppercase = (input, toLowerCase)=>{
    $69ab8c183b87f39d$var$LEADING_CAPITAL.lastIndex = 0;
    return input.replaceAll($69ab8c183b87f39d$var$LEADING_CAPITAL, (match)=>toLowerCase(match));
};
const $69ab8c183b87f39d$var$postProcess = (input, toUpperCase)=>{
    $69ab8c183b87f39d$var$SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
    $69ab8c183b87f39d$var$NUMBERS_AND_IDENTIFIER.lastIndex = 0;
    return input.replaceAll($69ab8c183b87f39d$var$NUMBERS_AND_IDENTIFIER, (match, pattern, offset)=>[
            '_',
            '-'
        ].includes(input.charAt(offset + match.length)) ? match : toUpperCase(match)).replaceAll($69ab8c183b87f39d$var$SEPARATORS_AND_IDENTIFIER, (_, identifier)=>toUpperCase(identifier));
};
function $69ab8c183b87f39d$export$2e2bcd8739ae039(input, options) {
    if (!(typeof input === 'string' || Array.isArray(input))) throw new TypeError('Expected the input to be `string | string[]`');
    options = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...options
    };
    if (Array.isArray(input)) input = input.map((x)=>x.trim()).filter((x)=>x.length).join('-');
    else input = input.trim();
    if (input.length === 0) return '';
    const toLowerCase = options.locale === false ? (string)=>string.toLowerCase() : (string)=>string.toLocaleLowerCase(options.locale);
    const toUpperCase = options.locale === false ? (string)=>string.toUpperCase() : (string)=>string.toLocaleUpperCase(options.locale);
    if (input.length === 1) {
        if ($69ab8c183b87f39d$var$SEPARATORS.test(input)) return '';
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
    }
    const hasUpperCase = input !== toLowerCase(input);
    if (hasUpperCase) input = $69ab8c183b87f39d$var$preserveCamelCase(input, toLowerCase, toUpperCase, options.preserveConsecutiveUppercase);
    input = input.replace($69ab8c183b87f39d$var$LEADING_SEPARATORS, '');
    input = options.preserveConsecutiveUppercase ? $69ab8c183b87f39d$var$preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
    if (options.pascalCase) input = toUpperCase(input.charAt(0)) + input.slice(1);
    return $69ab8c183b87f39d$var$postProcess(input, toUpperCase);
}

});

parcelRegister("8bF5h", function(module, exports) {

$parcel$export(module.exports, "default", () => $5f5f384a44e62a2b$export$2e2bcd8739ae039);
class $5f5f384a44e62a2b$export$2e2bcd8739ae039 extends Map {
    constructor(options = {}){
        super();
        if (!(options.maxSize && options.maxSize > 0)) throw new TypeError('`maxSize` must be a number greater than 0');
        if (typeof options.maxAge === 'number' && options.maxAge === 0) throw new TypeError('`maxAge` must be a number greater than 0');
        // TODO: Use private class fields when ESLint supports them.
        this.maxSize = options.maxSize;
        this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
        this.onEviction = options.onEviction;
        this.cache = new Map();
        this.oldCache = new Map();
        this._size = 0;
    }
    // TODO: Use private class methods when targeting Node.js 16.
    _emitEvictions(cache) {
        if (typeof this.onEviction !== 'function') return;
        for (const [key, item] of cache)this.onEviction(key, item.value);
    }
    _deleteIfExpired(key, item) {
        if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
            if (typeof this.onEviction === 'function') this.onEviction(key, item.value);
            return this.delete(key);
        }
        return false;
    }
    _getOrDeleteIfExpired(key, item) {
        const deleted = this._deleteIfExpired(key, item);
        if (deleted === false) return item.value;
    }
    _getItemValue(key, item) {
        return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
    }
    _peek(key, cache) {
        const item = cache.get(key);
        return this._getItemValue(key, item);
    }
    _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
            this._size = 0;
            this._emitEvictions(this.oldCache);
            this.oldCache = this.cache;
            this.cache = new Map();
        }
    }
    _moveToRecent(key, item) {
        this.oldCache.delete(key);
        this._set(key, item);
    }
    *_entriesAscending() {
        for (const item of this.oldCache){
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) yield item;
            }
        }
        for (const item of this.cache){
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) yield item;
        }
    }
    get(key) {
        if (this.cache.has(key)) {
            const item = this.cache.get(key);
            return this._getItemValue(key, item);
        }
        if (this.oldCache.has(key)) {
            const item = this.oldCache.get(key);
            if (this._deleteIfExpired(key, item) === false) {
                this._moveToRecent(key, item);
                return item.value;
            }
        }
    }
    set(key, value, { maxAge: maxAge = this.maxAge } = {}) {
        const expiry = typeof maxAge === 'number' && maxAge !== Number.POSITIVE_INFINITY ? Date.now() + maxAge : undefined;
        if (this.cache.has(key)) this.cache.set(key, {
            value: value,
            expiry: expiry
        });
        else this._set(key, {
            value: value,
            expiry: expiry
        });
        return this;
    }
    has(key) {
        if (this.cache.has(key)) return !this._deleteIfExpired(key, this.cache.get(key));
        if (this.oldCache.has(key)) return !this._deleteIfExpired(key, this.oldCache.get(key));
        return false;
    }
    peek(key) {
        if (this.cache.has(key)) return this._peek(key, this.cache);
        if (this.oldCache.has(key)) return this._peek(key, this.oldCache);
    }
    delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) this._size--;
        return this.oldCache.delete(key) || deleted;
    }
    clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
    }
    resize(newSize) {
        if (!(newSize && newSize > 0)) throw new TypeError('`maxSize` must be a number greater than 0');
        const items = [
            ...this._entriesAscending()
        ];
        const removeCount = items.length - newSize;
        if (removeCount < 0) {
            this.cache = new Map(items);
            this.oldCache = new Map();
            this._size = items.length;
        } else {
            if (removeCount > 0) this._emitEvictions(items.slice(0, removeCount));
            this.oldCache = new Map(items.slice(removeCount));
            this.cache = new Map();
            this._size = 0;
        }
        this.maxSize = newSize;
    }
    *keys() {
        for (const [key] of this)yield key;
    }
    *values() {
        for (const [, value] of this)yield value;
    }
    *[Symbol.iterator]() {
        for (const item of this.cache){
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) yield [
                key,
                value.value
            ];
        }
        for (const item of this.oldCache){
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) yield [
                    key,
                    value.value
                ];
            }
        }
    }
    *entriesDescending() {
        let items = [
            ...this.cache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) yield [
                key,
                value.value
            ];
        }
        items = [
            ...this.oldCache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) yield [
                    key,
                    value.value
                ];
            }
        }
    }
    *entriesAscending() {
        for (const [key, value] of this._entriesAscending())yield [
            key,
            value.value
        ];
    }
    get size() {
        if (!this._size) return this.oldCache.size;
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys())if (!this.cache.has(key)) oldCacheSize++;
        return Math.min(this._size + oldCacheSize, this.maxSize);
    }
    entries() {
        return this.entriesAscending();
    }
    forEach(callbackFunction, thisArgument = this) {
        for (const [key, value] of this.entriesAscending())callbackFunction.call(thisArgument, value, key, this);
    }
    get [Symbol.toStringTag]() {
        return JSON.stringify([
            ...this.entriesAscending()
        ]);
    }
}

});


})();
