(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    root['ktor-ktor-http-js-ir'] = factory(typeof this['ktor-ktor-http-js-ir'] === 'undefined' ? {} : this['ktor-ktor-http-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var encode$default = kotlin_io_ktor_ktor_io.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var prepareReadFirstHead = kotlin_io_ktor_ktor_io.$_$.v;
  var prepareReadNextHead = kotlin_io_ktor_ktor_io.$_$.w;
  var completeReadHead = kotlin_io_ktor_ktor_io.$_$.u;
  var charArray = kotlin_kotlin.$_$.d8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var concatToString = kotlin_kotlin.$_$.ca;
  var charSequenceGet = kotlin_kotlin.$_$.e8;
  var Char = kotlin_kotlin.$_$.hb;
  var equals = kotlin_kotlin.$_$.j8;
  var toString = kotlin_kotlin.$_$.m9;
  var isSurrogate = kotlin_kotlin.$_$.la;
  var encode = kotlin_io_ktor_ktor_io.$_$.s;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.q2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.p2;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var charSequenceLength = kotlin_kotlin.$_$.f8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.g8;
  var toByte = kotlin_kotlin.$_$.j9;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.a1;
  var Exception = kotlin_kotlin.$_$.ob;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.b8;
  var classMeta = kotlin_kotlin.$_$.h8;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.o2;
  var numberToChar = kotlin_kotlin.$_$.g9;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.r2;
  var plus = kotlin_kotlin.$_$.h6;
  var plus_0 = kotlin_kotlin.$_$.i6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var toSet = kotlin_kotlin.$_$.z6;
  var setOf = kotlin_kotlin.$_$.n6;
  var plus_1 = kotlin_kotlin.$_$.g6;
  var listOf = kotlin_kotlin.$_$.c6;
  var interfaceMeta = kotlin_kotlin.$_$.q8;
  var emptyList = kotlin_kotlin.$_$.l5;
  var equals_0 = kotlin_kotlin.$_$.fa;
  var Collection = kotlin_kotlin.$_$.e4;
  var isInterface = kotlin_kotlin.$_$.z8;
  var isBlank = kotlin_kotlin.$_$.ha;
  var last = kotlin_kotlin.$_$.a6;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.vb;
  var isCharSequence = kotlin_kotlin.$_$.v8;
  var trim = kotlin_kotlin.$_$.eb;
  var contains$default = kotlin_kotlin.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.i9;
  var plus_2 = kotlin_kotlin.$_$.j6;
  var getStringHashCode = kotlin_kotlin.$_$.o8;
  var hashCode = kotlin_kotlin.$_$.p8;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var IllegalArgumentException = kotlin_kotlin.$_$.pb;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var get_lastIndex = kotlin_kotlin.$_$.x5;
  var last_0 = kotlin_kotlin.$_$.oa;
  var first = kotlin_kotlin.$_$.ga;
  var get_lastIndex_0 = kotlin_kotlin.$_$.na;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.s;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.p;
  var emptySet = kotlin_kotlin.$_$.n5;
  var get = kotlin_io_ktor_ktor_utils.$_$.o;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.n;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var toDoubleOrNull = kotlin_kotlin.$_$.sa;
  var rangeTo = kotlin_kotlin.$_$.t9;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.nc;
  var to = kotlin_kotlin.$_$.tc;
  var sortedWith = kotlin_kotlin.$_$.q6;
  var Comparator = kotlin_kotlin.$_$.jb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var compareValues = kotlin_kotlin.$_$.c7;
  var asList = kotlin_kotlin.$_$.w4;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.n2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var toLong = kotlin_kotlin.$_$.xa;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var coerceAtLeast = kotlin_kotlin.$_$.o9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var StringValuesBuilder = kotlin_io_ktor_ktor_utils.$_$.q;
  var isWhitespace = kotlin_kotlin.$_$.ma;
  var startsWith$default = kotlin_kotlin.$_$.t;
  var charArrayOf = kotlin_kotlin.$_$.c8;
  var split$default = kotlin_kotlin.$_$.r;
  var toMutableList = kotlin_kotlin.$_$.x6;
  var first_0 = kotlin_kotlin.$_$.s5;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.x;
  var indexOfAny$default = kotlin_kotlin.$_$.m;
  var dropLast = kotlin_kotlin.$_$.k5;
  var IllegalStateException = kotlin_kotlin.$_$.qb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var indexOf$default_0 = kotlin_kotlin.$_$.n;
  var toInt = kotlin_kotlin.$_$.va;
  var listOf_0 = kotlin_kotlin.$_$.b6;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.y;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.v;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith$default_0 = kotlin_kotlin.$_$.s;
  var addAll = kotlin_kotlin.$_$.u4;
  var joinTo$default = kotlin_kotlin.$_$.j;
  var toString_0 = kotlin_kotlin.$_$.sc;
  var lazy_0 = kotlin_kotlin.$_$.oc;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.z9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.n8;
  var toLong_0 = kotlin_kotlin.$_$.k9;
  var encodeToByteArray = kotlin_kotlin.$_$.ea;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.r;
  var take = kotlin_kotlin.$_$.qa;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  //endregion
  //region block: pre-declaration
  URLDecodeException.prototype = Object.create(Exception.prototype);
  URLDecodeException.prototype.constructor = URLDecodeException;
  ContentType.prototype = Object.create(HeaderValueWithParameters.prototype);
  ContentType.prototype.constructor = ContentType;
  BadContentTypeFormatException.prototype = Object.create(Exception.prototype);
  BadContentTypeFormatException.prototype.constructor = BadContentTypeFormatException;
  HeadersBuilder.prototype = Object.create(StringValuesBuilderImpl.prototype);
  HeadersBuilder.prototype.constructor = HeadersBuilder;
  HeadersImpl.prototype = Object.create(StringValuesImpl.prototype);
  HeadersImpl.prototype.constructor = HeadersImpl;
  IllegalHeaderNameException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalHeaderNameException.prototype.constructor = IllegalHeaderNameException;
  IllegalHeaderValueException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalHeaderValueException.prototype.constructor = IllegalHeaderValueException;
  UnsafeHeaderException.prototype = Object.create(IllegalArgumentException.prototype);
  UnsafeHeaderException.prototype.constructor = UnsafeHeaderException;
  ParametersBuilderImpl.prototype = Object.create(StringValuesBuilderImpl.prototype);
  ParametersBuilderImpl.prototype.constructor = ParametersBuilderImpl;
  ParametersImpl.prototype = Object.create(StringValuesImpl.prototype);
  ParametersImpl.prototype.constructor = ParametersImpl;
  URLParserException.prototype = Object.create(IllegalStateException.prototype);
  URLParserException.prototype.constructor = URLParserException;
  ByteArrayContent_0.prototype = Object.create(OutgoingContent.prototype);
  ByteArrayContent_0.prototype.constructor = ByteArrayContent_0;
  ByteArrayContent.prototype = Object.create(ByteArrayContent_0.prototype);
  ByteArrayContent.prototype.constructor = ByteArrayContent;
  NoContent.prototype = Object.create(OutgoingContent.prototype);
  NoContent.prototype.constructor = NoContent;
  ReadChannelContent.prototype = Object.create(OutgoingContent.prototype);
  ReadChannelContent.prototype.constructor = ReadChannelContent;
  WriteChannelContent.prototype = Object.create(OutgoingContent.prototype);
  WriteChannelContent.prototype.constructor = WriteChannelContent;
  ProtocolUpgrade.prototype = Object.create(OutgoingContent.prototype);
  ProtocolUpgrade.prototype.constructor = ProtocolUpgrade;
  TextContent.prototype = Object.create(ByteArrayContent_0.prototype);
  TextContent.prototype.constructor = TextContent;
  //endregion
  function get_URL_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_OAUTH_SYMBOLS() {
    init_properties_Codecs_kt_hjkt7n();
    return OAUTH_SYMBOLS;
  }
  var OAUTH_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLParameter.<anonymous>' call
    var tmp = Charsets_getInstance().c1f_1.f1f();
    var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
    forEach_0(content, encodeURLParameter$lambda(tmp0_apply, spaceToPlus));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodeURLParameter$default(_this__u8e3s4, spaceToPlus, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      spaceToPlus = false;
    return encodeURLParameter(_this__u8e3s4, spaceToPlus);
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function decodeURLPart$default(_this__u8e3s4, start, end, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().c1f_1;
    return decodeURLPart(_this__u8e3s4, start, end, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLQueryComponent.<anonymous>' call
    var tmp = charset.f1f();
    var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, tmp0_apply, encodeFull));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodeURLQueryComponent$default(_this__u8e3s4, encodeFull, spaceToPlus, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      encodeFull = false;
    if (!(($mask0 & 2) === 0))
      spaceToPlus = false;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().c1f_1;
    return encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset);
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function decodeURLQueryComponent$default(_this__u8e3s4, start, end, plusIsSpace, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      plusIsSpace = false;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().c1f_1;
    return decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function forEach_0(_this__u8e3s4, block) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_1: do {
          var tmp$ret$2;
          // Inline function 'io.ktor.http.forEach.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          $l$loop: while (true) {
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.canRead' call
            tmp$ret$1 = tmp0__anonymous__q1qw7t.a16_1 > tmp0__anonymous__q1qw7t.z15_1;
            if (!tmp$ret$1) {
              break $l$loop;
            }
            block(tmp0__anonymous__q1qw7t.r1c());
          }
          tmp$ret$2 = true;
          if (!tmp$ret$2) {
            break $l$loop_1;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_1;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
  }
  function percentEncode(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(37))) ? true : plusIsSpace ? equals(new Char(ch), new Char(_Char___init__impl__6a9atx(43))) : false) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 ? end === _this__u8e3s4.length : false) {
      tmp = toString(_this__u8e3s4);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$1 = tmp$ret$0.substring(start, end);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLPath.<anonymous>' call
    var charset = Charsets_getInstance().c1f_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charSequenceGet(_this__u8e3s4, index);
      if (((!encodeSlash ? equals(new Char(current), new Char(_Char___init__impl__6a9atx(47))) : false) ? true : get_URL_ALPHABET_CHARS().l1(new Char(current))) ? true : get_VALID_PATH_PART().l1(new Char(current))) {
        tmp0_apply.w5(current);
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        continue $l$loop_0;
      }
      if (((equals(new Char(current), new Char(_Char___init__impl__6a9atx(37))) ? (index + 2 | 0) < _this__u8e3s4.length : false) ? get_HEX_ALPHABET().l1(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) : false) ? get_HEX_ALPHABET().l1(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0))) : false) {
        tmp0_apply.w5(current);
        tmp0_apply.w5(charSequenceGet(_this__u8e3s4, index + 1 | 0));
        tmp0_apply.w5(charSequenceGet(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.f1f(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(tmp0_apply));
      index = index + symbolSize | 0;
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function hexDigitToChar(digit) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = digit;
    return (0 <= tmp0_subject ? tmp0_subject <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.rf(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace ? equals(new Char(c), new Char(_Char___init__impl__6a9atx(43))) : false) {
        sb.w5(_Char___init__impl__6a9atx(32));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(37)))) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end ? equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(37))) : false) {
          if ((index + 2 | 0) >= end) {
            var tmp$ret$0;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index;
            var tmp1_substring = charSequenceLength(_this__u8e3s4);
            tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + _this__u8e3s4 + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 ? true : digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + _this__u8e3s4 + ', at ' + index);
          }
          var tmp = bytes;
          var tmp1 = count;
          count = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.x6(String_0(bytes, 0, count, charset));
      } else {
        sb.w5(c);
        var tmp2 = index;
        index = tmp2 + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  URLDecodeException.$metadata$ = classMeta('URLDecodeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function charToHexDigit(c2) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = c2;
    return (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($tmp0_apply, $spaceToPlus) {
    return function (it) {
      var tmp;
      if (get_URL_ALPHABET().l1(it) ? true : get_OAUTH_SYMBOLS().l1(it)) {
        $tmp0_apply.w5(numberToChar(it));
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if ($spaceToPlus) {
          var tmp_1 = it;
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          tmp$ret$0 = 32;
          tmp_0 = tmp_1 === toByte(tmp$ret$0);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          $tmp0_apply.w5(_Char___init__impl__6a9atx(43));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.x6(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $tmp0_apply, $encodeFull) {
    return function (it) {
      var tmp;
      var tmp_0 = it;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 32;
      if (tmp_0 === toByte(tmp$ret$0)) {
        var tmp_1;
        if ($spaceToPlus) {
          $tmp0_apply.w5(_Char___init__impl__6a9atx(43));
          tmp_1 = Unit_getInstance();
        } else {
          $tmp0_apply.x6('%20');
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        if (get_URL_ALPHABET().l1(it) ? true : !$encodeFull ? get_URL_PROTOCOL_PART().l1(it) : false) {
          $tmp0_apply.w5(numberToChar(it));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.x6(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLPath$lambda($tmp0_apply) {
    return function (it) {
      $tmp0_apply.x6(percentEncode(it));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function init_properties_Codecs_kt_hjkt7n() {
    if (properties_initialized_Codecs_kt_hkj9s1) {
    } else {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f().i1_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.http.URL_ALPHABET.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(item);
        tmp$ret$1 = toByte(tmp$ret$0);
        tmp0_mapTo.b(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      URL_ALPHABET = toSet(tmp$ret$3);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      var tmp$ret$3_0;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_0 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      var tmp$ret$2_0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
      var tmp0_iterator_0 = tmp0_map_0.d();
      while (tmp0_iterator_0.e()) {
        var item_0 = tmp0_iterator_0.f().i1_1;
        var tmp$ret$1_0;
        // Inline function 'io.ktor.http.URL_PROTOCOL_PART.<anonymous>' call
        var tmp$ret$0_0;
        // Inline function 'kotlin.code' call
        tmp$ret$0_0 = Char__toInt_impl_vasixd(item_0);
        tmp$ret$1_0 = toByte(tmp$ret$0_0);
        tmp0_mapTo_0.b(tmp$ret$1_0);
      }
      tmp$ret$2_0 = tmp0_mapTo_0;
      tmp$ret$3_0 = tmp$ret$2_0;
      URL_PROTOCOL_PART = tmp$ret$3_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      var tmp$ret$3_1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_1 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      var tmp$ret$2_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_1, 10));
      var tmp0_iterator_1 = tmp0_map_1.d();
      while (tmp0_iterator_1.e()) {
        var item_1 = tmp0_iterator_1.f().i1_1;
        var tmp$ret$1_1;
        // Inline function 'io.ktor.http.OAUTH_SYMBOLS.<anonymous>' call
        var tmp$ret$0_1;
        // Inline function 'kotlin.code' call
        tmp$ret$0_1 = Char__toInt_impl_vasixd(item_1);
        tmp$ret$1_1 = toByte(tmp$ret$0_1);
        tmp0_mapTo_1.b(tmp$ret$1_1);
      }
      tmp$ret$2_1 = tmp0_mapTo_1;
      tmp$ret$3_1 = tmp$ret$2_1;
      OAUTH_SYMBOLS = tmp$ret$3_1;
    }
  }
  function ContentTypeMatcher() {
  }
  ContentTypeMatcher.$metadata$ = interfaceMeta('ContentTypeMatcher');
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, Object.create(ContentType.prototype));
  }
  function ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = emptyList();
    ContentType_init_$Init$(contentType, contentSubtype, parameters, $this);
    return $this;
  }
  function ContentType_init_$Create$_0(contentType, contentSubtype, parameters, $mask0, $marker) {
    return ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, Object.create(ContentType.prototype));
  }
  function hasParameter($this, name, value) {
    var tmp0_subject = $this.v1o_1.g();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = false;
        break;
      case 1:
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        var tmp0_let = $this.v1o_1.h(0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
        tmp$ret$0 = equals_0(tmp0_let.w1o_1, name, true) ? equals_0(tmp0_let.x1o_1, value, true) : false;
        tmp$ret$1 = tmp$ret$0;

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp1_any = $this.v1o_1;
          var tmp_0;
          if (isInterface(tmp1_any, Collection)) {
            tmp_0 = tmp1_any.m();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp1_any.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            var tmp$ret$3;
            // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
            tmp$ret$3 = equals_0(element.w1o_1, name, true) ? equals_0(element.x1o_1, value, true) : false;
            if (tmp$ret$3) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.z1o_1 = ContentType_init_$Create$_0('*', '*', null, 4, null);
  }
  Companion.prototype.a1p = function (value) {
    if (isBlank(value))
      return this.z1o_1;
    var tmp$ret$10;
    // Inline function 'io.ktor.http.Companion.parse' call
    var tmp0_parse = Companion_getInstance_1();
    var headerValue = last(parseHeaderValue(value));
    var tmp$ret$9;
    // Inline function 'io.ktor.http.Companion.parse.<anonymous>' call
    var tmp1__anonymous__uwfjfc = headerValue.b1p_1;
    var tmp2__anonymous__z9zvc9 = headerValue.c1p_1;
    var tmp = _Char___init__impl__6a9atx(47);
    var slash = indexOf$default(tmp1__anonymous__uwfjfc, tmp, 0, false, 6, null);
    if (slash === -1) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim(isCharSequence(tmp1__anonymous__uwfjfc) ? tmp1__anonymous__uwfjfc : THROW_CCE()));
      if (tmp$ret$0 === '*')
        return Companion_getInstance_0().z1o_1;
      throw new BadContentTypeFormatException(value);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1__anonymous__uwfjfc;
    tmp$ret$2 = tmp$ret$1.substring(0, slash);
    var tmp0_trim = tmp$ret$2;
    tmp$ret$3 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    var type = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$4 = charSequenceLength(type) === 0;
    if (tmp$ret$4) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp$ret$7;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$6;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = slash + 1 | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp1__anonymous__uwfjfc;
    tmp$ret$6 = tmp$ret$5.substring(tmp1_substring);
    var tmp2_trim = tmp$ret$6;
    tmp$ret$7 = toString(trim(isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE()));
    var subtype = tmp$ret$7;
    var tmp_0;
    var tmp_1 = _Char___init__impl__6a9atx(32);
    if (contains$default(type, tmp_1, false, 2, null)) {
      tmp_0 = true;
    } else {
      var tmp_2 = _Char___init__impl__6a9atx(32);
      tmp_0 = contains$default(subtype, tmp_2, false, 2, null);
    }
    if (tmp_0) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp_3;
    var tmp$ret$8;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$8 = charSequenceLength(subtype) === 0;
    if (tmp$ret$8) {
      tmp_3 = true;
    } else {
      var tmp_4 = _Char___init__impl__6a9atx(47);
      tmp_3 = contains$default(subtype, tmp_4, false, 2, null);
    }
    if (tmp_3) {
      throw new BadContentTypeFormatException(value);
    }
    tmp$ret$9 = ContentType_init_$Create$(type, subtype, tmp2__anonymous__z9zvc9);
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  Companion.prototype.e1p = function () {
    return this.z1o_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    var tmp = this;
    tmp.f1p_1 = ContentType_init_$Create$_0('application', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.g1p_1 = ContentType_init_$Create$_0('application', 'atom+xml', null, 4, null);
    var tmp_1 = this;
    tmp_1.h1p_1 = ContentType_init_$Create$_0('application', 'cbor', null, 4, null);
    var tmp_2 = this;
    tmp_2.i1p_1 = ContentType_init_$Create$_0('application', 'json', null, 4, null);
    var tmp_3 = this;
    tmp_3.j1p_1 = ContentType_init_$Create$_0('application', 'hal+json', null, 4, null);
    var tmp_4 = this;
    tmp_4.k1p_1 = ContentType_init_$Create$_0('application', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.l1p_1 = ContentType_init_$Create$_0('application', 'octet-stream', null, 4, null);
    var tmp_6 = this;
    tmp_6.m1p_1 = ContentType_init_$Create$_0('application', 'font-woff', null, 4, null);
    var tmp_7 = this;
    tmp_7.n1p_1 = ContentType_init_$Create$_0('application', 'rss+xml', null, 4, null);
    var tmp_8 = this;
    tmp_8.o1p_1 = ContentType_init_$Create$_0('application', 'xml', null, 4, null);
    var tmp_9 = this;
    tmp_9.p1p_1 = ContentType_init_$Create$_0('application', 'xml-dtd', null, 4, null);
    var tmp_10 = this;
    tmp_10.q1p_1 = ContentType_init_$Create$_0('application', 'zip', null, 4, null);
    var tmp_11 = this;
    tmp_11.r1p_1 = ContentType_init_$Create$_0('application', 'gzip', null, 4, null);
    var tmp_12 = this;
    tmp_12.s1p_1 = ContentType_init_$Create$_0('application', 'x-www-form-urlencoded', null, 4, null);
    var tmp_13 = this;
    tmp_13.t1p_1 = ContentType_init_$Create$_0('application', 'pdf', null, 4, null);
    var tmp_14 = this;
    tmp_14.u1p_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', null, 4, null);
    var tmp_15 = this;
    tmp_15.v1p_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document', null, 4, null);
    var tmp_16 = this;
    tmp_16.w1p_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.presentationml.presentation', null, 4, null);
    var tmp_17 = this;
    tmp_17.x1p_1 = ContentType_init_$Create$_0('application', 'protobuf', null, 4, null);
    var tmp_18 = this;
    tmp_18.y1p_1 = ContentType_init_$Create$_0('application', 'wasm', null, 4, null);
    var tmp_19 = this;
    tmp_19.z1p_1 = ContentType_init_$Create$_0('application', 'problem+json', null, 4, null);
    var tmp_20 = this;
    tmp_20.a1q_1 = ContentType_init_$Create$_0('application', 'problem+xml', null, 4, null);
  }
  Application.$metadata$ = objectMeta('Application');
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    var tmp = this;
    tmp.b1q_1 = ContentType_init_$Create$_0('text', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.c1q_1 = ContentType_init_$Create$_0('text', 'plain', null, 4, null);
    var tmp_1 = this;
    tmp_1.d1q_1 = ContentType_init_$Create$_0('text', 'css', null, 4, null);
    var tmp_2 = this;
    tmp_2.e1q_1 = ContentType_init_$Create$_0('text', 'csv', null, 4, null);
    var tmp_3 = this;
    tmp_3.f1q_1 = ContentType_init_$Create$_0('text', 'html', null, 4, null);
    var tmp_4 = this;
    tmp_4.g1q_1 = ContentType_init_$Create$_0('text', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.h1q_1 = ContentType_init_$Create$_0('text', 'vcard', null, 4, null);
    var tmp_6 = this;
    tmp_6.i1q_1 = ContentType_init_$Create$_0('text', 'xml', null, 4, null);
    var tmp_7 = this;
    tmp_7.j1q_1 = ContentType_init_$Create$_0('text', 'event-stream', null, 4, null);
  }
  Text.$metadata$ = objectMeta('Text');
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.m1q_1 = contentType;
    this.n1q_1 = contentSubtype;
  }
  ContentType.prototype.o1q = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.m1q_1, this.n1q_1, this.u1o_1, plus_2(this.v1o_1, HeaderValueParam_init_$Create$(name, value)));
  };
  ContentType.prototype.p1q = function () {
    var tmp;
    if (this.v1o_1.m()) {
      tmp = this;
    } else {
      tmp = ContentType_init_$Create$_0(this.m1q_1, this.n1q_1, null, 4, null);
    }
    return tmp;
  };
  ContentType.prototype.q1q = function (pattern) {
    if (!(pattern.m1q_1 === '*') ? !equals_0(pattern.m1q_1, this.m1q_1, true) : false) {
      return false;
    }
    if (!(pattern.n1q_1 === '*') ? !equals_0(pattern.n1q_1, this.n1q_1, true) : false) {
      return false;
    }
    var tmp0_iterator = pattern.v1o_1.d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      var patternName = tmp1_loop_parameter.h3();
      var patternValue = tmp1_loop_parameter.i3();
      var tmp2_subject = patternName;
      var tmp;
      if (tmp2_subject === '*') {
        var tmp3_subject = patternValue;
        var tmp_0;
        if (tmp3_subject === '*') {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = this.v1o_1;
            var tmp_1;
            if (isInterface(tmp0_any, Collection)) {
              tmp_1 = tmp0_any.m();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator_0 = tmp0_any.d();
            while (tmp0_iterator_0.e()) {
              var element = tmp0_iterator_0.f();
              var tmp$ret$1;
              // Inline function 'io.ktor.http.ContentType.match.<anonymous>' call
              tmp$ret$1 = equals_0(element.x1o_1, patternValue, true);
              if (tmp$ret$1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.r1q(patternName);
        var tmp4_subject = patternValue;
        tmp = tmp4_subject === '*' ? !(value == null) : equals_0(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  ContentType.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.m1q_1, other.m1q_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.n1q_1, other.n1q_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.v1o_1, other.v1o_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContentType.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.m1q_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_lowercase = this.n1q_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_lowercase;
    tmp$ret$3 = tmp$ret$2.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.v1o_1)) | 0;
    return result;
  };
  ContentType.$metadata$ = classMeta('ContentType', undefined, undefined, undefined, undefined, HeaderValueWithParameters.prototype);
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  BadContentTypeFormatException.$metadata$ = classMeta('BadContentTypeFormatException', undefined, undefined, undefined, undefined, Exception.prototype);
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.r1q('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.charset.<anonymous>' call
      var tmp_0;
      try {
        tmp_0 = Companion_getInstance().j1i(tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.o1q('charset', get_name(charset));
  }
  function withCharsetIfNeeded(_this__u8e3s4, charset) {
    var tmp;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = _this__u8e3s4.m1q_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    if (tmp$ret$1 === 'application') {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercase' call
      var tmp1_lowercase = _this__u8e3s4.n1q_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_lowercase;
      tmp$ret$3 = tmp$ret$2.toLowerCase();
      tmp_0 = tmp$ret$3 === 'json';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.o1q('charset', get_name(charset));
    }
    return tmp;
  }
  function get_HeaderFieldValueSeparators() {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.u1q = function (value, init) {
    var headerValue = last(parseHeaderValue(value));
    return init(headerValue.b1p_1, headerValue.c1p_1);
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_1();
    this.u1o_1 = content;
    this.v1o_1 = parameters;
  }
  HeaderValueWithParameters.prototype.s1q = function () {
    return this.u1o_1;
  };
  HeaderValueWithParameters.prototype.t1q = function () {
    return this.v1o_1;
  };
  HeaderValueWithParameters.prototype.r1q = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.v1o_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.v1o_1.h(index);
        if (equals_0(parameter.w1o_1, name, true)) {
          return parameter.x1o_1;
        }
      }
       while (!(index === last));
    return null;
  };
  HeaderValueWithParameters.prototype.toString = function () {
    var tmp;
    if (this.v1o_1.m()) {
      tmp = this.u1o_1;
    } else {
      var tmp_0 = this.u1o_1.length;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp0_sumOf = this.v1o_1;
      var sum = 0;
      var tmp0_iterator = tmp0_sumOf.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp_1 = sum;
        var tmp$ret$0;
        // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
        tmp$ret$0 = (element.w1o_1.length + element.x1o_1.length | 0) + 3 | 0;
        sum = tmp_1 + tmp$ret$0 | 0;
      }
      tmp$ret$1 = sum;
      var size = tmp_0 + tmp$ret$1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = StringBuilder_init_$Create$_0(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
      tmp1_apply.x6(this.u1o_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.v1o_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.v1o_1.h(index);
          tmp1_apply.x6('; ');
          tmp1_apply.x6(element_0.w1o_1);
          tmp1_apply.x6('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var tmp0_escapeIfNeededTo = element_0.x1o_1;
          if (needQuotes$accessor$vynnj(tmp0_escapeIfNeededTo)) {
            tmp1_apply.x6(quote(tmp0_escapeIfNeededTo));
          } else {
            tmp1_apply.x6(tmp0_escapeIfNeededTo);
          }
        }
         while (!(index === last));
      tmp$ret$2 = tmp1_apply;
      tmp = tmp$ret$2.toString();
    }
    return tmp;
  };
  HeaderValueWithParameters.$metadata$ = classMeta('HeaderValueWithParameters');
  function escapeIfNeededTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (needQuotes$accessor$vynnj(_this__u8e3s4)) {
      out.x6(quote(_this__u8e3s4));
    } else {
      out.x6(_this__u8e3s4);
    }
  }
  function needQuotes(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) === 0;
    if (tmp$ret$0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (get_HeaderFieldValueSeparators().l1(new Char(charSequenceGet(_this__u8e3s4, index))))
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function quote(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.quote.<anonymous>' call
    quoteTo(_this__u8e3s4, tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function isQuoted(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!equals(new Char(first(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) ? true : !equals(new Char(last_0(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34)))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var tmp = _Char___init__impl__6a9atx(34);
      var tmp_0 = startIndex;
      var index = indexOf$default(_this__u8e3s4, tmp, tmp_0, false, 4, null);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (equals(new Char(charSequenceGet(_this__u8e3s4, slashIndex)), new Char(_Char___init__impl__6a9atx(92)))) {
        var tmp0 = slashesCount;
        slashesCount = tmp0 + 1 | 0;
        var tmp1 = slashIndex;
        slashIndex = tmp1 - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    out.x6('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, i);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(92)))) {
          out.x6('\\\\');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) {
          out.x6('\\n');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) {
          out.x6('\\r');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
          out.x6('\\t');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(34)))) {
          out.x6('\\"');
        } else {
          out.w5(ch);
        }
      }
       while (inductionVariable < last);
    out.x6('"');
  }
  function needQuotes$accessor$vynnj(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return needQuotes(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function init_properties_HeaderValueWithParameters_kt_2dfzmo() {
    if (properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
    } else {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.v1q_1 = EmptyHeaders_getInstance();
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Headers() {
  }
  Headers.$metadata$ = interfaceMeta('Headers', [StringValues]);
  function HeadersBuilder_init_$Init$(size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    HeadersBuilder.call($this, size);
    return $this;
  }
  function HeadersBuilder_init_$Create$(size, $mask0, $marker) {
    return HeadersBuilder_init_$Init$(size, $mask0, $marker, Object.create(HeadersBuilder.prototype));
  }
  function HeadersBuilder(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  HeadersBuilder.prototype.t17 = function () {
    return new HeadersImpl(this.z1k_1);
  };
  HeadersBuilder.prototype.a1l = function (name) {
    StringValuesBuilderImpl.prototype.a1l.call(this, name);
    HttpHeaders_getInstance().u1u(name);
  };
  HeadersBuilder.prototype.d1l = function (value) {
    StringValuesBuilderImpl.prototype.d1l.call(this, value);
    HttpHeaders_getInstance().v1u(value);
  };
  HeadersBuilder.$metadata$ = classMeta('HeadersBuilder', undefined, undefined, undefined, undefined, StringValuesBuilderImpl.prototype);
  function EmptyHeaders() {
    EmptyHeaders_instance = this;
  }
  EmptyHeaders.prototype.t1k = function () {
    return true;
  };
  EmptyHeaders.prototype.u1k = function (name) {
    return null;
  };
  EmptyHeaders.prototype.v1k = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.w1k = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.toString = function () {
    return 'Headers ' + this.w1k();
  };
  EmptyHeaders.$metadata$ = objectMeta('EmptyHeaders', [Headers]);
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    if (EmptyHeaders_instance == null)
      new EmptyHeaders();
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  HeadersImpl.prototype.toString = function () {
    return 'Headers ' + this.w1k();
  };
  HeadersImpl.$metadata$ = classMeta('HeadersImpl', [Headers], undefined, undefined, undefined, StringValuesImpl.prototype);
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, Object.create(HeaderValueParam.prototype));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.w1o_1 = name;
    this.x1o_1 = value;
    this.y1o_1 = escapeValue;
  }
  HeaderValueParam.prototype.ng = function () {
    return this.w1o_1;
  };
  HeaderValueParam.prototype.t = function () {
    return this.x1o_1;
  };
  HeaderValueParam.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.w1o_1, this.w1o_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.x1o_1, this.x1o_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  HeaderValueParam.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.w1o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_lowercase = this.x1o_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_lowercase;
    tmp$ret$3 = tmp$ret$2.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  HeaderValueParam.prototype.h3 = function () {
    return this.w1o_1;
  };
  HeaderValueParam.prototype.i3 = function () {
    return this.x1o_1;
  };
  HeaderValueParam.prototype.toString = function () {
    return 'HeaderValueParam(name=' + this.w1o_1 + ', value=' + this.x1o_1 + ', escapeValue=' + this.y1o_1 + ')';
  };
  HeaderValueParam.$metadata$ = classMeta('HeaderValueParam');
  function HeaderValue(value, params) {
    this.b1p_1 = value;
    this.c1p_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.c1p_1;
      var tmp0_iterator = tmp0_firstOrNull.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
        tmp$ret$0 = element.w1o_1 === 'q';
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1o_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$2;
      // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
      tmp$ret$2 = rangeTo(0.0, 1.0).g1(tmp2_safe_receiver);
      if (tmp$ret$2) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp$ret$3 = tmp_1;
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.d1p_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  HeaderValue.prototype.w1u = function () {
    return this.d1p_1;
  };
  HeaderValue.prototype.h3 = function () {
    return this.b1p_1;
  };
  HeaderValue.prototype.toString = function () {
    return 'HeaderValue(value=' + this.b1p_1 + ', params=' + this.c1p_1 + ')';
  };
  HeaderValue.prototype.hashCode = function () {
    var result = getStringHashCode(this.b1p_1);
    result = imul(result, 31) + hashCode(this.c1p_1) | 0;
    return result;
  };
  HeaderValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.b1p_1 === tmp0_other_with_cast.b1p_1))
      return false;
    if (!equals(this.c1p_1, tmp0_other_with_cast.c1p_1))
      return false;
    return true;
  };
  HeaderValue.$metadata$ = classMeta('HeaderValue');
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        var tmp_0 = items.t();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.b(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59)))) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.t();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.b(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.m7() ? _this__u8e3s4.t() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0.substring(start, end);
    var tmp0_trim = tmp$ret$1;
    tmp$ret$2 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    return tmp$ret$2;
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(61)))) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.h3();
        var paramValue = tmp1_container.i3();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        var tmp2 = position;
        position = tmp2 + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (equals(new Char(charSequenceGet(value, start)), new Char(_Char___init__impl__6a9atx(34)))) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44))))
        return to(position, subtrim(value, start, position));
      else {
        var tmp1 = position;
        position = tmp1 + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(34))) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(92))) ? position < (get_lastIndex_0(value) - 2 | 0) : false) {
        builder.w5(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.w5(currentChar);
      var tmp0 = position;
      position = tmp0 + 1 | 0;
    }
    var tmp = position;
    var tmp$ret$0;
    // Inline function 'kotlin.text.plus' call
    var tmp0_plus = builder.toString();
    tmp$ret$0 = '"' + tmp0_plus;
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length ? equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(32))) : false) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length ? true : equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(59)));
  }
  function parseAndSortHeader(header) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = parseHeaderValue(header);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = parseAndSortHeader$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    return tmp$ret$1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.x1u_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.p = function (a, b) {
    return this.x1u_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.p(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(name) === 0;
    if (tmp$ret$0) {
      return Unit_getInstance();
    }
    $parameters.t().b(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  }
  function parseHeaderValueItem$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  }
  function parseAndSortHeader$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$0 = b.d1p_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$1 = a.d1p_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.y1q_1 = 'Accept';
    this.z1q_1 = 'Accept-Charset';
    this.a1r_1 = 'Accept-Encoding';
    this.b1r_1 = 'Accept-Language';
    this.c1r_1 = 'Accept-Ranges';
    this.d1r_1 = 'Age';
    this.e1r_1 = 'Allow';
    this.f1r_1 = 'ALPN';
    this.g1r_1 = 'Authentication-Info';
    this.h1r_1 = 'Authorization';
    this.i1r_1 = 'Cache-Control';
    this.j1r_1 = 'Connection';
    this.k1r_1 = 'Content-Disposition';
    this.l1r_1 = 'Content-Encoding';
    this.m1r_1 = 'Content-Language';
    this.n1r_1 = 'Content-Length';
    this.o1r_1 = 'Content-Location';
    this.p1r_1 = 'Content-Range';
    this.q1r_1 = 'Content-Type';
    this.r1r_1 = 'Cookie';
    this.s1r_1 = 'DASL';
    this.t1r_1 = 'Date';
    this.u1r_1 = 'DAV';
    this.v1r_1 = 'Depth';
    this.w1r_1 = 'Destination';
    this.x1r_1 = 'ETag';
    this.y1r_1 = 'Expect';
    this.z1r_1 = 'Expires';
    this.a1s_1 = 'From';
    this.b1s_1 = 'Forwarded';
    this.c1s_1 = 'Host';
    this.d1s_1 = 'HTTP2-Settings';
    this.e1s_1 = 'If';
    this.f1s_1 = 'If-Match';
    this.g1s_1 = 'If-Modified-Since';
    this.h1s_1 = 'If-None-Match';
    this.i1s_1 = 'If-Range';
    this.j1s_1 = 'If-Schedule-Tag-Match';
    this.k1s_1 = 'If-Unmodified-Since';
    this.l1s_1 = 'Last-Modified';
    this.m1s_1 = 'Location';
    this.n1s_1 = 'Lock-Token';
    this.o1s_1 = 'Link';
    this.p1s_1 = 'Max-Forwards';
    this.q1s_1 = 'MIME-Version';
    this.r1s_1 = 'Ordering-Type';
    this.s1s_1 = 'Origin';
    this.t1s_1 = 'Overwrite';
    this.u1s_1 = 'Position';
    this.v1s_1 = 'Pragma';
    this.w1s_1 = 'Prefer';
    this.x1s_1 = 'Preference-Applied';
    this.y1s_1 = 'Proxy-Authenticate';
    this.z1s_1 = 'Proxy-Authentication-Info';
    this.a1t_1 = 'Proxy-Authorization';
    this.b1t_1 = 'Public-Key-Pins';
    this.c1t_1 = 'Public-Key-Pins-Report-Only';
    this.d1t_1 = 'Range';
    this.e1t_1 = 'Referer';
    this.f1t_1 = 'Retry-After';
    this.g1t_1 = 'Schedule-Reply';
    this.h1t_1 = 'Schedule-Tag';
    this.i1t_1 = 'Sec-WebSocket-Accept';
    this.j1t_1 = 'Sec-WebSocket-Extensions';
    this.k1t_1 = 'Sec-WebSocket-Key';
    this.l1t_1 = 'Sec-WebSocket-Protocol';
    this.m1t_1 = 'Sec-WebSocket-Version';
    this.n1t_1 = 'Server';
    this.o1t_1 = 'Set-Cookie';
    this.p1t_1 = 'SLUG';
    this.q1t_1 = 'Strict-Transport-Security';
    this.r1t_1 = 'TE';
    this.s1t_1 = 'Timeout';
    this.t1t_1 = 'Trailer';
    this.u1t_1 = 'Transfer-Encoding';
    this.v1t_1 = 'Upgrade';
    this.w1t_1 = 'User-Agent';
    this.x1t_1 = 'Vary';
    this.y1t_1 = 'Via';
    this.z1t_1 = 'Warning';
    this.a1u_1 = 'WWW-Authenticate';
    this.b1u_1 = 'Access-Control-Allow-Origin';
    this.c1u_1 = 'Access-Control-Allow-Methods';
    this.d1u_1 = 'Access-Control-Allow-Credentials';
    this.e1u_1 = 'Access-Control-Allow-Headers';
    this.f1u_1 = 'Access-Control-Request-Method';
    this.g1u_1 = 'Access-Control-Request-Headers';
    this.h1u_1 = 'Access-Control-Expose-Headers';
    this.i1u_1 = 'Access-Control-Max-Age';
    this.j1u_1 = 'X-Http-Method-Override';
    this.k1u_1 = 'X-Forwarded-Host';
    this.l1u_1 = 'X-Forwarded-Server';
    this.m1u_1 = 'X-Forwarded-Proto';
    this.n1u_1 = 'X-Forwarded-For';
    this.o1u_1 = 'X-Forwarded-Port';
    this.p1u_1 = 'X-Request-ID';
    this.q1u_1 = 'X-Correlation-ID';
    this.r1u_1 = 'X-Total-Count';
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.u1t_1, this.v1t_1];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.s1u_1 = tmp$ret$2;
    this.t1u_1 = asList(this.s1u_1);
  }
  HttpHeaders.prototype.y1u = function () {
    return this.t1u_1;
  };
  HttpHeaders.prototype.u1u = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = name;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderName.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 ? true : isDelimiter(item)) {
        throw new IllegalHeaderNameException(name, tmp0__anonymous__q1qw7t);
      }
    }
  };
  HttpHeaders.prototype.v1u = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = value;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'io.ktor.http.HttpHeaders.checkHeaderValue.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        if (equals(new Char(item), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(item), new Char(_Char___init__impl__6a9atx(9)))) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0) {
          throw new IllegalHeaderValueException(value, tmp0__anonymous__q1qw7t);
        }
      }
    }
  };
  HttpHeaders.$metadata$ = objectMeta('HttpHeaders');
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains$default('"(),/:;<=>?@[\\]{}', ch, false, 2, null);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + new Char(charSequenceGet(headerName, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(headerName, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.z1u_1 = headerName;
    this.a1v_1 = position;
    captureStack(this, IllegalHeaderNameException);
  }
  IllegalHeaderNameException.$metadata$ = classMeta('IllegalHeaderNameException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + new Char(charSequenceGet(headerValue, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(headerValue, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.b1v_1 = headerValue;
    this.c1v_1 = position;
    captureStack(this, IllegalHeaderValueException);
  }
  IllegalHeaderValueException.$metadata$ = classMeta('IllegalHeaderValueException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  UnsafeHeaderException.$metadata$ = classMeta('UnsafeHeaderException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function HttpMessage() {
  }
  HttpMessage.$metadata$ = interfaceMeta('HttpMessage');
  function HttpMessageBuilder() {
  }
  HttpMessageBuilder.$metadata$ = interfaceMeta('HttpMessageBuilder');
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.d1v().z1j(HttpHeaders_getInstance().q1r_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp$ret$0 = Companion_getInstance_0().a1p(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.d1v().z1j(HttpHeaders_getInstance().n1r_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_1(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4, type) {
    return _this__u8e3s4.d1v().c1l(HttpHeaders_getInstance().q1r_1, type.toString());
  }
  function contentType_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.d1v().z1j(HttpHeaders_getInstance().q1r_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp$ret$0 = Companion_getInstance_0().a1p(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e1v_1 = new HttpMethod('GET');
    this.f1v_1 = new HttpMethod('POST');
    this.g1v_1 = new HttpMethod('PUT');
    this.h1v_1 = new HttpMethod('PATCH');
    this.i1v_1 = new HttpMethod('DELETE');
    this.j1v_1 = new HttpMethod('HEAD');
    this.k1v_1 = new HttpMethod('OPTIONS');
    this.l1v_1 = listOf([this.e1v_1, this.f1v_1, this.g1v_1, this.h1v_1, this.i1v_1, this.j1v_1, this.k1v_1]);
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.m1v_1 = value;
  }
  HttpMethod.prototype.toString = function () {
    return 'HttpMethod(value=' + this.m1v_1 + ')';
  };
  HttpMethod.prototype.hashCode = function () {
    return getStringHashCode(this.m1v_1);
  };
  HttpMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.m1v_1 === tmp0_other_with_cast.m1v_1))
      return false;
    return true;
  };
  HttpMethod.$metadata$ = classMeta('HttpMethod');
  function Companion_3() {
    Companion_instance_3 = this;
    this.n1v_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.o1v_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.p1v_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.q1v_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.r1v_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.s1v_1 = name;
    this.t1v_1 = major;
    this.u1v_1 = minor;
  }
  HttpProtocolVersion.prototype.toString = function () {
    return this.s1v_1 + '/' + this.t1v_1 + '.' + this.u1v_1;
  };
  HttpProtocolVersion.prototype.hashCode = function () {
    var result = getStringHashCode(this.s1v_1);
    result = imul(result, 31) + this.t1v_1 | 0;
    result = imul(result, 31) + this.u1v_1 | 0;
    return result;
  };
  HttpProtocolVersion.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.s1v_1 === tmp0_other_with_cast.s1v_1))
      return false;
    if (!(this.t1v_1 === tmp0_other_with_cast.t1v_1))
      return false;
    if (!(this.u1v_1 === tmp0_other_with_cast.u1v_1))
      return false;
    return true;
  };
  HttpProtocolVersion.$metadata$ = classMeta('HttpProtocolVersion');
  function Companion_4() {
    Companion_instance_4 = this;
    this.v1v_1 = new HttpStatusCode(100, 'Continue');
    this.w1v_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.x1v_1 = new HttpStatusCode(102, 'Processing');
    this.y1v_1 = new HttpStatusCode(200, 'OK');
    this.z1v_1 = new HttpStatusCode(201, 'Created');
    this.a1w_1 = new HttpStatusCode(202, 'Accepted');
    this.b1w_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.c1w_1 = new HttpStatusCode(204, 'No Content');
    this.d1w_1 = new HttpStatusCode(205, 'Reset Content');
    this.e1w_1 = new HttpStatusCode(206, 'Partial Content');
    this.f1w_1 = new HttpStatusCode(207, 'Multi-Status');
    this.g1w_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.h1w_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.i1w_1 = new HttpStatusCode(302, 'Found');
    this.j1w_1 = new HttpStatusCode(303, 'See Other');
    this.k1w_1 = new HttpStatusCode(304, 'Not Modified');
    this.l1w_1 = new HttpStatusCode(305, 'Use Proxy');
    this.m1w_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.n1w_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.o1w_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.p1w_1 = new HttpStatusCode(400, 'Bad Request');
    this.q1w_1 = new HttpStatusCode(401, 'Unauthorized');
    this.r1w_1 = new HttpStatusCode(402, 'Payment Required');
    this.s1w_1 = new HttpStatusCode(403, 'Forbidden');
    this.t1w_1 = new HttpStatusCode(404, 'Not Found');
    this.u1w_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.v1w_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.w1w_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.x1w_1 = new HttpStatusCode(408, 'Request Timeout');
    this.y1w_1 = new HttpStatusCode(409, 'Conflict');
    this.z1w_1 = new HttpStatusCode(410, 'Gone');
    this.a1x_1 = new HttpStatusCode(411, 'Length Required');
    this.b1x_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.c1x_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.d1x_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.e1x_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.f1x_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.g1x_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.h1x_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.i1x_1 = new HttpStatusCode(423, 'Locked');
    this.j1x_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.k1x_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.l1x_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.m1x_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.n1x_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.o1x_1 = new HttpStatusCode(501, 'Not Implemented');
    this.p1x_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.q1x_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.r1x_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.s1x_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.t1x_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.u1x_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.v1x_1 = allStatusCodes();
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = this.v1x_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.statusCodesMap.<anonymous>' call
      tmp$ret$0 = element.x1x_1;
      tmp0_associateByTo.a(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.w1x_1 = tmp$ret$2;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.x1x_1 = value;
    this.y1x_1 = description;
  }
  HttpStatusCode.prototype.t = function () {
    return this.x1x_1;
  };
  HttpStatusCode.prototype.toString = function () {
    return '' + this.x1x_1 + ' ' + this.y1x_1;
  };
  HttpStatusCode.prototype.equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.x1x_1 === this.x1x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  HttpStatusCode.prototype.hashCode = function () {
    return this.x1x_1;
  };
  HttpStatusCode.$metadata$ = classMeta('HttpStatusCode');
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().v1v_1, Companion_getInstance_5().w1v_1, Companion_getInstance_5().x1v_1, Companion_getInstance_5().y1v_1, Companion_getInstance_5().z1v_1, Companion_getInstance_5().a1w_1, Companion_getInstance_5().b1w_1, Companion_getInstance_5().c1w_1, Companion_getInstance_5().d1w_1, Companion_getInstance_5().e1w_1, Companion_getInstance_5().f1w_1, Companion_getInstance_5().g1w_1, Companion_getInstance_5().h1w_1, Companion_getInstance_5().i1w_1, Companion_getInstance_5().j1w_1, Companion_getInstance_5().k1w_1, Companion_getInstance_5().l1w_1, Companion_getInstance_5().m1w_1, Companion_getInstance_5().n1w_1, Companion_getInstance_5().o1w_1, Companion_getInstance_5().p1w_1, Companion_getInstance_5().q1w_1, Companion_getInstance_5().r1w_1, Companion_getInstance_5().s1w_1, Companion_getInstance_5().t1w_1, Companion_getInstance_5().u1w_1, Companion_getInstance_5().v1w_1, Companion_getInstance_5().w1w_1, Companion_getInstance_5().x1w_1, Companion_getInstance_5().y1w_1, Companion_getInstance_5().z1w_1, Companion_getInstance_5().a1x_1, Companion_getInstance_5().b1x_1, Companion_getInstance_5().c1x_1, Companion_getInstance_5().d1x_1, Companion_getInstance_5().e1x_1, Companion_getInstance_5().f1x_1, Companion_getInstance_5().g1x_1, Companion_getInstance_5().h1x_1, Companion_getInstance_5().i1x_1, Companion_getInstance_5().j1x_1, Companion_getInstance_5().k1x_1, Companion_getInstance_5().l1x_1, Companion_getInstance_5().m1x_1, Companion_getInstance_5().n1x_1, Companion_getInstance_5().o1x_1, Companion_getInstance_5().p1x_1, Companion_getInstance_5().q1x_1, Companion_getInstance_5().r1x_1, Companion_getInstance_5().s1x_1, Companion_getInstance_5().t1x_1, Companion_getInstance_5().u1x_1]);
  }
  function ParametersBuilder() {
  }
  ParametersBuilder.$metadata$ = interfaceMeta('ParametersBuilder', [StringValuesBuilder]);
  function Companion_5() {
    Companion_instance_5 = this;
    this.z1x_1 = EmptyParameters_getInstance();
  }
  Companion_5.prototype.a1y = function (builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.t17();
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  Parameters.$metadata$ = interfaceMeta('Parameters', [StringValues]);
  function ParametersBuilder_0(size) {
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilder$default(size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    return ParametersBuilder_0(size);
  }
  function EmptyParameters() {
    EmptyParameters_instance = this;
  }
  EmptyParameters.prototype.t1k = function () {
    return true;
  };
  EmptyParameters.prototype.u1k = function (name) {
    return null;
  };
  EmptyParameters.prototype.v1k = function () {
    return emptySet();
  };
  EmptyParameters.prototype.w1k = function () {
    return emptySet();
  };
  EmptyParameters.prototype.m = function () {
    return true;
  };
  EmptyParameters.prototype.toString = function () {
    return 'Parameters ' + this.w1k();
  };
  EmptyParameters.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.m();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptyParameters.$metadata$ = objectMeta('EmptyParameters', [Parameters]);
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    if (EmptyParameters_instance == null)
      new EmptyParameters();
    return EmptyParameters_instance;
  }
  function ParametersBuilderImpl(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  ParametersBuilderImpl.prototype.t17 = function () {
    return new ParametersImpl(this.z1k_1);
  };
  ParametersBuilderImpl.$metadata$ = classMeta('ParametersBuilderImpl', [ParametersBuilder], undefined, undefined, undefined, StringValuesBuilderImpl.prototype);
  function ParametersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  ParametersImpl.prototype.toString = function () {
    return 'Parameters ' + this.w1k();
  };
  ParametersImpl.$metadata$ = classMeta('ParametersImpl', [Parameters], undefined, undefined, undefined, StringValuesImpl.prototype);
  function parseQueryString(query, startIndex, limit, decode) {
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().z1x_1;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.http.Companion.build' call
      var tmp0_build = Companion_getInstance_6();
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.parseQueryString.<anonymous>' call
      parse(tmp0_apply, query, startIndex, limit, decode);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.t17();
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function parseQueryString$default(query, startIndex, limit, decode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      limit = 1000;
    if (!(($mask0 & 8) === 0))
      decode = true;
    return parseQueryString(query, startIndex, limit, decode);
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_getInstance();
        }
        var tmp1_subject = charSequenceGet(query, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(38)))) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          var tmp2 = count;
          count = tmp2 + 1 | 0;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(61)))) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_getInstance();
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent$default(query, spaceNameIndex, spaceEndIndex, false, null, 12, null);
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = query;
          tmp$ret$1 = tmp$ret$0.substring(spaceNameIndex, spaceEndIndex);
          tmp = tmp$ret$1;
        }
        var name = tmp;
        _this__u8e3s4.b1l(name, emptyList());
      }
      return Unit_getInstance();
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent$default(query, spaceNameIndex_0, spaceEqualIndex, false, null, 12, null);
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = query;
        tmp$ret$3 = tmp$ret$2.substring(spaceNameIndex_0, spaceEqualIndex);
        tmp_0 = tmp$ret$3;
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent$default(query, spaceValueIndex, spaceEndIndex_0, true, null, 8, null);
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = query;
        tmp$ret$5 = tmp$ret$4.substring(spaceValueIndex, spaceEndIndex_0);
        tmp_1 = tmp$ret$5;
      }
      var value = tmp_1;
      _this__u8e3s4.e1l(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end ? isWhitespace(charSequenceGet(query, spaceIndex)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start ? isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 - 1 | 0;
    }
    return spaceIndex;
  }
  function URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      protocol = Companion_getInstance_8().d1y_1;
    if (!(($mask0 & 2) === 0))
      host = '';
    if (!(($mask0 & 4) === 0))
      port = 0;
    if (!(($mask0 & 8) === 0))
      user = null;
    if (!(($mask0 & 16) === 0))
      password = null;
    if (!(($mask0 & 32) === 0))
      pathSegments = emptyList();
    if (!(($mask0 & 64) === 0))
      parameters = Companion_getInstance_6().z1x_1;
    if (!(($mask0 & 128) === 0))
      fragment = '';
    if (!(($mask0 & 256) === 0))
      trailingQuery = false;
    URLBuilder.call($this, protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery);
    return $this;
  }
  function URLBuilder_init_$Create$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker) {
    return URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, Object.create(URLBuilder.prototype));
  }
  function applyOrigin($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = $this.k1y_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.j1y_1.t1y_1 === 'file';
    }
    if (tmp)
      return Unit_getInstance();
    $this.k1y_1 = Companion_getInstance_7().l1z_1.w1y_1;
    if ($this.j1y_1.equals(Companion_getInstance_8().d1y_1))
      $this.j1y_1 = Companion_getInstance_7().l1z_1.v1y_1;
    if ($this.l1y_1 === 0)
      $this.l1y_1 = Companion_getInstance_7().l1z_1.x1y_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.l1z_1 = Url(get_origin(this));
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    this.j1y_1 = protocol;
    this.k1y_1 = host;
    this.l1y_1 = port;
    this.m1y_1 = trailingQuery;
    var tmp = this;
    var tmp0_safe_receiver = user;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.n1y_1 = tmp_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_0 = password;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      tmp_2 = encodeURLParameter$default(tmp0_safe_receiver_0, false, 1, null);
    }
    tmp_1.o1y_1 = tmp_2;
    var tmp_3 = this;
    tmp_3.p1y_1 = encodeURLQueryComponent$default(fragment, false, false, null, 7, null);
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var tmp0_iterator = pathSegments.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.encodedPathSegments.<anonymous>' call
      tmp$ret$0 = encodeURLPathPart(item);
      tmp0_mapTo.b(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp_4.q1y_1 = tmp$ret$2;
    this.r1y_1 = encodeParameters(parameters);
    this.s1y_1 = new UrlDecodedParametersBuilder(this.r1y_1);
  }
  URLBuilder.prototype.m1z = function () {
    return this.j1y_1;
  };
  URLBuilder.prototype.n1z = function () {
    return this.k1y_1;
  };
  URLBuilder.prototype.o1z = function () {
    return this.l1y_1;
  };
  URLBuilder.prototype.p1z = function () {
    return this.n1y_1;
  };
  URLBuilder.prototype.q1z = function (value) {
    var tmp = this;
    var tmp0_safe_receiver = value;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.n1y_1 = tmp_0;
  };
  URLBuilder.prototype.r1z = function () {
    var tmp0_safe_receiver = this.n1y_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.s1z = function () {
    return this.o1y_1;
  };
  URLBuilder.prototype.t1z = function () {
    var tmp0_safe_receiver = this.o1y_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.u1z = function () {
    var tmp = this.p1y_1;
    return decodeURLQueryComponent$default(tmp, 0, 0, false, null, 15, null);
  };
  URLBuilder.prototype.v1z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.q1y_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.<get-pathSegments>.<anonymous>' call
      tmp$ret$0 = decodeURLPart$default(item, 0, 0, null, 7, null);
      tmp0_mapTo.b(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  URLBuilder.prototype.w1z = function (value) {
    this.r1y_1 = value;
    this.s1y_1 = new UrlDecodedParametersBuilder(value);
  };
  URLBuilder.prototype.x1z = function () {
    return this.r1y_1;
  };
  URLBuilder.prototype.y1z = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  URLBuilder.prototype.t17 = function () {
    applyOrigin(this);
    return new Url_0(this.j1y_1, this.k1y_1, this.l1y_1, this.v1z(), this.s1y_1.t17(), this.u1z(), this.r1z(), this.t1z(), this.m1y_1, this.y1z());
  };
  URLBuilder.$metadata$ = classMeta('URLBuilder');
  function get_authority(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.x6(get_encodedUserAndPassword(_this__u8e3s4));
    tmp0_apply.x6(_this__u8e3s4.k1y_1);
    if (!(_this__u8e3s4.l1y_1 === 0) ? !(_this__u8e3s4.l1y_1 === _this__u8e3s4.j1y_1.u1y_1) : false) {
      tmp0_apply.x6(':');
      tmp0_apply.x6(_this__u8e3s4.l1y_1.toString());
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function get_DEFAULT_PORT() {
    return DEFAULT_PORT;
  }
  var DEFAULT_PORT;
  function appendTo(_this__u8e3s4, out) {
    out.c(_this__u8e3s4.j1y_1.t1y_1);
    var tmp0_subject = _this__u8e3s4.j1y_1.t1y_1;
    if (tmp0_subject === 'file') {
      appendFile(out, _this__u8e3s4.k1y_1, get_encodedPath(_this__u8e3s4));
      return out;
    } else if (tmp0_subject === 'mailto') {
      appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.k1y_1);
      return out;
    }
    out.c('://');
    out.c(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.r1y_1, _this__u8e3s4.m1y_1);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.p1y_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      out.w5(_Char___init__impl__6a9atx(35));
      out.c(_this__u8e3s4.p1y_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.n1y_1, _this__u8e3s4.o1y_1);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.c('://');
    _this__u8e3s4.c(host);
    var tmp = _Char___init__impl__6a9atx(47);
    if (!startsWith$default(encodedPath, tmp, false, 2, null)) {
      _this__u8e3s4.w5(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    var tmp = _this__u8e3s4;
    var tmp_0;
    if (isBlank(value)) {
      tmp_0 = emptyList();
    } else if (value === '/') {
      tmp_0 = get_ROOT_PATH();
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(47)]);
      tmp_0 = toMutableList(split$default(value, tmp_1, false, 0, 6, null));
    }
    tmp.q1y_1 = tmp_0;
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.q1y_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.c(':');
    _this__u8e3s4.c(encodedUser);
    _this__u8e3s4.c(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.m())
      return '';
    if (_this__u8e3s4.g() === 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = first_0(_this__u8e3s4);
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString$default(_this__u8e3s4, '/', null, null, 0, null, null, 62, null);
  }
  function get_ROOT_PATH() {
    init_properties_URLParser_kt_jyldy();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        throw new URLParserException(urlString, $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(urlString, index);
          tmp$ret$0 = !isWhitespace(tmp0__anonymous__q1qw7t);
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var tmp$ret$2;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp1__anonymous__uwfjfc = charSequenceGet(urlString, index_0);
          tmp$ret$2 = !isWhitespace(tmp1__anonymous__uwfjfc);
          if (tmp$ret$2) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = startIndex;
      var tmp3_substring = startIndex + schemeLength | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = urlString;
      tmp$ret$5 = tmp$ret$4.substring(tmp2_substring, tmp3_substring);
      var scheme = tmp$ret$5;
      _this__u8e3s4.j1y_1 = Companion_getInstance_8().z1z(scheme);
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.j1y_1.t1y_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.j1y_1.t1y_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      var tmp4_require = slashCount === 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp4_require) {
        var tmp$ret$6;
        // Inline function 'kotlin.require.<anonymous>' call
        tmp$ret$6 = 'Failed requirement.';
        var message = tmp$ret$6;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        var tmp$ret$8;
        // Inline function 'kotlin.takeIf' call
        var tmp = toCharArray('@/\\?#');
        var tmp_0 = startIndex;
        var tmp5_takeIf = indexOfAny$default(urlString, tmp, tmp_0, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        var tmp$ret$7;
        // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
        tmp$ret$7 = tmp5_takeIf > 0;
        if (tmp$ret$7) {
          tmp_1 = tmp5_takeIf;
        } else {
          tmp_1 = null;
        }
        tmp$ret$8 = tmp_1;
        var tmp0_elvis_lhs = tmp$ret$8;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex ? equals(new Char(charSequenceGet(urlString, delimiter)), new Char(_Char___init__impl__6a9atx(64))) : false) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_2 = _this__u8e3s4;
            var tmp$ret$10;
            // Inline function 'kotlin.text.substring' call
            var tmp6_substring = startIndex;
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = urlString;
            tmp$ret$10 = tmp$ret$9.substring(tmp6_substring, passwordIndex);
            tmp_2.n1y_1 = tmp$ret$10;
            var tmp_3 = _this__u8e3s4;
            var tmp$ret$12;
            // Inline function 'kotlin.text.substring' call
            var tmp7_substring = passwordIndex + 1 | 0;
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = urlString;
            tmp$ret$12 = tmp$ret$11.substring(tmp7_substring, delimiter);
            tmp_3.o1y_1 = tmp$ret$12;
          } else {
            var tmp_4 = _this__u8e3s4;
            var tmp$ret$14;
            // Inline function 'kotlin.text.substring' call
            var tmp8_substring = startIndex;
            var tmp$ret$13;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$13 = urlString;
            tmp$ret$14 = tmp$ret$13.substring(tmp8_substring, delimiter);
            tmp_4.n1y_1 = tmp$ret$14;
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.q1y_1 = equals(new Char(charSequenceGet(urlString, endIndex - 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_5 = _this__u8e3s4;
    var tmp_6;
    if (slashCount === 0) {
      tmp_6 = dropLast(_this__u8e3s4.q1y_1, 1);
    } else {
      tmp_6 = emptyList();
    }
    tmp_5.q1y_1 = tmp_6;
    var tmp$ret$16;
    // Inline function 'kotlin.takeIf' call
    var tmp_7 = toCharArray('?#');
    var tmp_8 = startIndex;
    var tmp9_takeIf = indexOfAny$default(urlString, tmp_7, tmp_8, false, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_9;
    var tmp$ret$15;
    // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
    tmp$ret$15 = tmp9_takeIf > 0;
    if (tmp$ret$15) {
      tmp_9 = tmp9_takeIf;
    } else {
      tmp_9 = null;
    }
    tmp$ret$16 = tmp_9;
    var tmp1_elvis_lhs = tmp$ret$16;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var tmp$ret$18;
      // Inline function 'kotlin.text.substring' call
      var tmp10_substring = startIndex;
      var tmp$ret$17;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$17 = urlString;
      tmp$ret$18 = tmp$ret$17.substring(tmp10_substring, pathEnd);
      var rawPath = tmp$ret$18;
      var tmp_10;
      var tmp_11;
      if (_this__u8e3s4.q1y_1.g() === 1) {
        var tmp$ret$19;
        // Inline function 'kotlin.text.isEmpty' call
        var tmp11_isEmpty = first_0(_this__u8e3s4.q1y_1);
        tmp$ret$19 = charSequenceLength(tmp11_isEmpty) === 0;
        tmp_11 = tmp$ret$19;
      } else {
        tmp_11 = false;
      }
      if (tmp_11) {
        tmp_10 = emptyList();
      } else {
        tmp_10 = _this__u8e3s4.q1y_1;
      }
      var basePath = tmp_10;
      var tmp_12;
      if (rawPath === '/') {
        tmp_12 = get_ROOT_PATH();
      } else {
        var tmp_13 = charArrayOf([_Char___init__impl__6a9atx(47)]);
        tmp_12 = split$default(rawPath, tmp_13, false, 0, 6, null);
      }
      var rawChunks = tmp_12;
      var tmp2_subject = slashCount;
      var relativePath = plus_0(tmp2_subject === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.q1y_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(63))) : false) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  URLParserException.$metadata$ = classMeta('URLParserException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function findScheme(urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) ? !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false) : false) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(58)))) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if ((equals(new Char(char), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(63)))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(35))))
        return -1;
      if ((((((incorrectSchemePosition === -1 ? !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) : false) ? !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) : false) ? !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(46))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(43))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(45))) : false) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    init_properties_URLParser_kt_jyldy();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex) {
      if (!equals(new Char(charSequenceGet(urlString, startIndex + result | 0)), new Char(char)))
        break $l$loop;
      var tmp0 = result;
      result = tmp0 + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    init_properties_URLParser_kt_jyldy();
    var tmp0_subject = slashCount;
    switch (tmp0_subject) {
      case 2:
        var tmp = _Char___init__impl__6a9atx(47);
        var nextSlash = indexOf$default(urlString, tmp, startIndex, false, 4, null);
        if (nextSlash === -1 ? true : nextSlash === endIndex) {
          var tmp_0 = _this__u8e3s4;
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = urlString;
          tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
          tmp_0.k1y_1 = tmp$ret$1;
          return Unit_getInstance();
        }

        var tmp_1 = _this__u8e3s4;
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = urlString;
        tmp$ret$3 = tmp$ret$2.substring(startIndex, nextSlash);

        tmp_1.k1y_1 = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = urlString;
        tmp$ret$5 = tmp$ret$4.substring(nextSlash, endIndex);

        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        ;
        break;
      case 3:
        _this__u8e3s4.k1y_1 = '';
        var tmp$ret$7;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = urlString;
        tmp$ret$7 = tmp$ret$6.substring(startIndex, endIndex);

        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        ;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var delimiter = indexOf$default_0(urlString, '@', startIndex, false, 4, null);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = urlString;
    tmp$ret$1 = tmp$ret$0.substring(startIndex, delimiter);
    var tmp = tmp$ret$1;
    _this__u8e3s4.q1z(decodeURLPart$default(tmp, 0, 0, null, 7, null));
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = delimiter + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(tmp0_substring, endIndex);
    tmp_0.k1y_1 = tmp$ret$3;
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(91))))
          skip = true;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93))))
          skip = false;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(58))))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = indexOfColonInHostPort(urlString, startIndex, endIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.fillHost.<anonymous>' call
    tmp$ret$0 = tmp0_takeIf > 0;
    if (tmp$ret$0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(startIndex, colonIndex);
    tmp_0.k1y_1 = tmp$ret$3;
    if ((colonIndex + 1 | 0) < endIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = colonIndex + 1 | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = urlString;
      tmp$ret$5 = tmp$ret$4.substring(tmp1_substring, endIndex);
      tmp_1.l1y_1 = toInt(tmp$ret$5);
    } else {
      _this__u8e3s4.l1y_1 = get_DEFAULT_PORT();
    }
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.m1y_1 = true;
      return endIndex;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp = _Char___init__impl__6a9atx(35);
    var tmp_0 = startIndex + 1 | 0;
    var tmp0_takeIf = indexOf$default(urlString, tmp, tmp_0, false, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.parseQuery.<anonymous>' call
    tmp$ret$0 = tmp0_takeIf > 0;
    if (tmp$ret$0) {
      tmp_1 = tmp0_takeIf;
    } else {
      tmp_1 = null;
    }
    tmp$ret$1 = tmp_1;
    var tmp0_elvis_lhs = tmp$ret$1;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = startIndex + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(tmp1_substring, fragmentStart);
    var tmp_2 = tmp$ret$3;
    var rawParameters = parseQueryString$default(tmp_2, 0, 0, false, 6, null);
    rawParameters.x1k(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(35))) : false) {
      var tmp = _this__u8e3s4;
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = startIndex + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = urlString;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, endIndex);
      tmp.p1y_1 = tmp$ret$1;
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.r1y_1.b1l(key, values);
      return Unit_getInstance();
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function init_properties_URLParser_kt_jyldy() {
    if (properties_initialized_URLParser_kt_hd1g6a) {
    } else {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.t1y_1 === 'ws' ? true : _this__u8e3s4.t1y_1 === 'wss';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.d1y_1 = new URLProtocol('http', 80);
    this.e1y_1 = new URLProtocol('https', 443);
    this.f1y_1 = new URLProtocol('ws', 80);
    this.g1y_1 = new URLProtocol('wss', 443);
    this.h1y_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = listOf([this.d1y_1, this.e1y_1, this.f1y_1, this.g1y_1, this.h1y_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.byName.<anonymous>' call
      tmp$ret$0 = element.t1y_1;
      tmp0_associateByTo.a(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.i1y_1 = tmp$ret$2;
  }
  Companion_7.prototype.a20 = function () {
    return this.i1y_1;
  };
  Companion_7.prototype.z1z = function (name) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = toLowerCasePreservingASCIIRules(name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.http.Companion.createOrDefault.<anonymous>' call
    var tmp0_elvis_lhs = Companion_getInstance_8().i1y_1.i2(tmp0_let);
    tmp$ret$0 = tmp0_elvis_lhs == null ? new URLProtocol(tmp0_let, get_DEFAULT_PORT()) : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.t1y_1 = name;
    this.u1y_1 = defaultPort;
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var tmp0_all = this.t1y_1;
      var indexedObject = tmp0_all;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
        tmp$ret$0 = isLowerCase(element);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    var tmp1_require = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
      tmp$ret$2 = 'All characters should be lower case';
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  URLProtocol.prototype.ng = function () {
    return this.t1y_1;
  };
  URLProtocol.prototype.b20 = function () {
    return this.u1y_1;
  };
  URLProtocol.prototype.toString = function () {
    return 'URLProtocol(name=' + this.t1y_1 + ', defaultPort=' + this.u1y_1 + ')';
  };
  URLProtocol.prototype.hashCode = function () {
    var result = getStringHashCode(this.t1y_1);
    result = imul(result, 31) + this.u1y_1 | 0;
    return result;
  };
  URLProtocol.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.t1y_1 === tmp0_other_with_cast.t1y_1))
      return false;
    if (!(this.u1y_1 === tmp0_other_with_cast.u1y_1))
      return false;
    return true;
  };
  URLProtocol.$metadata$ = classMeta('URLProtocol');
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.t1y_1 === 'https' ? true : _this__u8e3s4.t1y_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.j1y_1 = url.j1y_1;
    _this__u8e3s4.k1y_1 = url.k1y_1;
    _this__u8e3s4.l1y_1 = url.l1y_1;
    _this__u8e3s4.q1y_1 = url.q1y_1;
    _this__u8e3s4.n1y_1 = url.n1y_1;
    _this__u8e3s4.o1y_1 = url.o1y_1;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.takeFrom.<anonymous>' call
    appendAll(tmp0_apply, url.r1y_1);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.w1z(tmp$ret$0);
    _this__u8e3s4.p1y_1 = url.p1y_1;
    _this__u8e3s4.m1y_1 = url.m1y_1;
    return _this__u8e3s4;
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).t17();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(encodedPath);
    if (tmp$ret$0) {
      tmp = !startsWith$default_0(encodedPath, '/', false, 2, null);
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.w5(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c(encodedPath);
    if (!encodedQueryParameters.m() ? true : trailingQuery) {
      _this__u8e3s4.c('?');
    }
    var tmp$ret$8;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = encodedQueryParameters.w1k();
    var tmp$ret$7;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$6;
      // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var value = tmp$ret$2;
      var tmp_0;
      if (value.m()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var tmp0_iterator_0 = value.d();
        while (tmp0_iterator_0.e()) {
          var item = tmp0_iterator_0.f();
          var tmp$ret$3;
          // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>.<anonymous>' call
          tmp$ret$3 = to(key, item);
          tmp0_mapTo.b(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo;
        tmp$ret$5 = tmp$ret$4;
        tmp_0 = tmp$ret$5;
      }
      tmp$ret$6 = tmp_0;
      var list = tmp$ret$6;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$7 = tmp0_flatMapTo;
    tmp$ret$8 = tmp$ret$7;
    var tmp_1 = tmp$ret$8;
    joinTo$default(tmp_1, _this__u8e3s4, '&', null, null, 0, null, appendUrlFullPath$lambda, 60, null);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_getInstance();
    }
    _this__u8e3s4.x6(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.w5(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.x6(encodedPassword);
    }
    _this__u8e3s4.x6('@');
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.w1y_1 + ':' + _this__u8e3s4.o1z();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null), urlString);
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.f3_1;
    var tmp;
    if (it.g3_1 == null) {
      tmp = key;
    } else {
      var value = toString_0(it.g3_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Url$encodedPath$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.y1y_1.m()) {
        return '';
      }
      var tmp_0 = _Char___init__impl__6a9atx(47);
      var tmp_1 = this$0.v1y_1.t1y_1.length + 3 | 0;
      var pathStartIndex = indexOf$default(this$0.e1z_1, tmp_0, tmp_1, false, 4, null);
      var tmp_2;
      if (pathStartIndex === -1) {
        return '';
      }
      var tmp$ret$0;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var tmp_3 = tmp$ret$0;
      var pathEndIndex = indexOfAny$default(this$0.e1z_1, tmp_3, pathStartIndex, false, 4, null);
      var tmp_4;
      if (pathEndIndex === -1) {
        var tmp$ret$2;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.e1z_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp0_substring;
        tmp$ret$2 = tmp$ret$1.substring(pathStartIndex);
        return tmp$ret$2;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.e1z_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_substring;
      tmp$ret$4 = tmp$ret$3.substring(pathStartIndex, pathEndIndex);
      return tmp$ret$4;
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(63);
      var queryStart = indexOf$default(this$0.e1z_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (queryStart === 0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.e1z_1, tmp_1, queryStart, false, 4, null);
      var tmp_2;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.e1z_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(queryStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.e1z_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(queryStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(47);
      var tmp_0 = this$0.v1y_1.t1y_1.length + 3 | 0;
      var pathStart = indexOf$default(this$0.e1z_1, tmp, tmp_0, false, 4, null);
      var tmp_1;
      if (pathStart === -1) {
        return '';
      }
      var tmp_2 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.e1z_1, tmp_2, pathStart, false, 4, null);
      var tmp_3;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.e1z_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(pathStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.e1z_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(pathStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.b1z_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.b1z_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var usernameStart = this$0.v1y_1.t1y_1.length + 3 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var tmp_1 = tmp$ret$1;
      var usernameEnd = indexOfAny$default(this$0.e1z_1, tmp_1, usernameStart, false, 4, null);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.e1z_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(usernameStart, usernameEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.c1z_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.c1z_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(58);
      var tmp_2 = this$0.v1y_1.t1y_1.length + 3 | 0;
      var passwordStart = indexOf$default(this$0.e1z_1, tmp_1, tmp_2, false, 4, null) + 1 | 0;
      var tmp_3 = _Char___init__impl__6a9atx(64);
      var passwordEnd = indexOf$default(this$0.e1z_1, tmp_3, 0, false, 6, null);
      var tmp$ret$2;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.e1z_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_substring;
      tmp$ret$2 = tmp$ret$1.substring(passwordStart, passwordEnd);
      return tmp$ret$2;
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(35);
      var fragmentStart = indexOf$default(this$0.e1z_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (fragmentStart === 0) {
        return '';
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = this$0.e1z_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(fragmentStart);
      return tmp$ret$1;
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    Companion_getInstance_9();
    this.v1y_1 = protocol;
    this.w1y_1 = host;
    this.x1y_1 = specifiedPort;
    this.y1y_1 = pathSegments;
    this.z1y_1 = parameters;
    this.a1z_1 = fragment;
    this.b1z_1 = user;
    this.c1z_1 = password;
    this.d1z_1 = trailingQuery;
    this.e1z_1 = urlString;
    // Inline function 'kotlin.require' call
    var tmp;
    var containsArg = this.x1y_1;
    if (0 <= containsArg ? containsArg <= 65535 : false) {
      tmp = true;
    } else {
      tmp = this.x1y_1 === get_DEFAULT_PORT();
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Url.<anonymous>' call
      tmp$ret$0 = 'port must be between 0 and 65535, or ' + get_DEFAULT_PORT() + ' if not set';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_0 = this;
    tmp_0.f1z_1 = lazy_0(Url$encodedPath$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.g1z_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.h1z_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.i1z_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.j1z_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.k1z_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  Url_0.prototype.m1z = function () {
    return this.v1y_1;
  };
  Url_0.prototype.n1z = function () {
    return this.w1y_1;
  };
  Url_0.prototype.c20 = function () {
    return this.x1y_1;
  };
  Url_0.prototype.o1z = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.x1y_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.Url.<get-port>.<anonymous>' call
    tmp$ret$0 = tmp0_takeUnless === get_DEFAULT_PORT();
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? this.v1y_1.u1y_1 : tmp0_elvis_lhs;
  };
  Url_0.prototype.p1z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedUser$factory();
    tmp$ret$0 = this.i1z_1.t();
    return tmp$ret$0;
  };
  Url_0.prototype.s1z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedPassword$factory();
    tmp$ret$0 = this.j1z_1.t();
    return tmp$ret$0;
  };
  Url_0.prototype.toString = function () {
    return this.e1z_1;
  };
  Url_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Url_0)
      other;
    else
      THROW_CCE();
    if (!(this.e1z_1 === other.e1z_1))
      return false;
    return true;
  };
  Url_0.prototype.hashCode = function () {
    return getStringHashCode(this.e1z_1);
  };
  Url_0.$metadata$ = classMeta('Url');
  function get_authority_0(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.x6(get_encodedUserAndPassword_0(_this__u8e3s4));
    if (_this__u8e3s4.x1y_1 === get_DEFAULT_PORT() ? true : _this__u8e3s4.x1y_1 === _this__u8e3s4.v1y_1.u1y_1) {
      tmp0_apply.x6(_this__u8e3s4.w1y_1);
    } else {
      tmp0_apply.x6(get_hostWithPort(_this__u8e3s4));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.p1z(), _this__u8e3s4.s1z());
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.p1z();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.s1z();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.d20_1 = encodedParametersBuilder;
    this.e20_1 = this.d20_1.t1k();
  }
  UrlDecodedParametersBuilder.prototype.t17 = function () {
    return decodeParameters(this.d20_1);
  };
  UrlDecodedParametersBuilder.prototype.t1k = function () {
    return this.e20_1;
  };
  UrlDecodedParametersBuilder.prototype.u1k = function (name) {
    var tmp0_safe_receiver = this.d20_1.u1k(encodeURLParameter$default(name, false, 1, null));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.getAll.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  UrlDecodedParametersBuilder.prototype.v1k = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.d20_1.v1k();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.names.<anonymous>' call
      tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, false, null, 15, null);
      tmp0_mapTo.b(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return toSet(tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.m = function () {
    return this.d20_1.m();
  };
  UrlDecodedParametersBuilder.prototype.w1k = function () {
    return decodeParameters(this.d20_1).w1k();
  };
  UrlDecodedParametersBuilder.prototype.e1l = function (name, value) {
    return this.d20_1.e1l(encodeURLParameter$default(name, false, 1, null), encodeURLParameterValue(value));
  };
  UrlDecodedParametersBuilder.prototype.b1l = function (name, values) {
    var tmp = encodeURLParameter$default(name, false, 1, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.appendAll.<anonymous>' call
      tmp$ret$0 = encodeURLParameterValue(item);
      tmp0_mapTo.b(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return this.d20_1.b1l(tmp, tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.ha = function () {
    return this.d20_1.ha();
  };
  UrlDecodedParametersBuilder.$metadata$ = classMeta('UrlDecodedParametersBuilder', [ParametersBuilder]);
  function encodeParameters(parameters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeParameters.<anonymous>' call
    appendAllEncoded(tmp0_apply, parameters);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function decodeParameters(parameters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.decodeParameters.<anonymous>' call
    appendAllDecoded(tmp0_apply, parameters);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.t17();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.v1k();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.u1k(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter$default(element, false, 1, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.d();
      while (tmp0_iterator_0.e()) {
        var item = tmp0_iterator_0.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = encodeURLParameterValue(item);
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      _this__u8e3s4.b1l(tmp, tmp$ret$2);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.v1k();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.u1k(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent$default(element, 0, 0, false, null, 15, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.d();
      while (tmp0_iterator_0.e()) {
        var item = tmp0_iterator_0.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      _this__u8e3s4.b1l(tmp, tmp$ret$2);
    }
  }
  function ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      contentType = null;
    if (!(($mask0 & 4) === 0))
      status = null;
    ByteArrayContent.call($this, bytes, contentType, status);
    return $this;
  }
  function ByteArrayContent_init_$Create$(bytes, contentType, status, $mask0, $marker) {
    return ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, Object.create(ByteArrayContent.prototype));
  }
  function ByteArrayContent(bytes, contentType, status) {
    ByteArrayContent_0.call(this);
    this.g20_1 = bytes;
    this.h20_1 = contentType;
    this.i20_1 = status;
  }
  ByteArrayContent.prototype.j20 = function () {
    return this.h20_1;
  };
  ByteArrayContent.prototype.k20 = function () {
    return toLong_0(this.g20_1.length);
  };
  ByteArrayContent.prototype.l20 = function () {
    return this.g20_1;
  };
  ByteArrayContent.$metadata$ = classMeta('ByteArrayContent', undefined, undefined, undefined, undefined, ByteArrayContent_0.prototype);
  function NoContent() {
    OutgoingContent.call(this);
  }
  NoContent.$metadata$ = classMeta('NoContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  ReadChannelContent.$metadata$ = classMeta('ReadChannelContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function WriteChannelContent() {
  }
  WriteChannelContent.$metadata$ = classMeta('WriteChannelContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  ByteArrayContent_0.$metadata$ = classMeta('ByteArrayContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ProtocolUpgrade() {
  }
  ProtocolUpgrade.$metadata$ = classMeta('ProtocolUpgrade', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function OutgoingContent() {
    this.m20_1 = null;
  }
  OutgoingContent.prototype.j20 = function () {
    return null;
  };
  OutgoingContent.prototype.k20 = function () {
    return null;
  };
  OutgoingContent.prototype.d1v = function () {
    return Companion_getInstance_2().v1q_1;
  };
  OutgoingContent.$metadata$ = classMeta('OutgoingContent');
  function NullBody() {
    NullBody_instance = this;
  }
  NullBody.$metadata$ = objectMeta('NullBody');
  var NullBody_instance;
  function NullBody_getInstance() {
    if (NullBody_instance == null)
      new NullBody();
    return NullBody_instance;
  }
  function TextContent_init_$Init$(text, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      status = null;
    TextContent.call($this, text, contentType, status);
    return $this;
  }
  function TextContent_init_$Create$(text, contentType, status, $mask0, $marker) {
    return TextContent_init_$Init$(text, contentType, status, $mask0, $marker, Object.create(TextContent.prototype));
  }
  function TextContent(text, contentType, status) {
    ByteArrayContent_0.call(this);
    this.t20_1 = text;
    this.u20_1 = contentType;
    this.v20_1 = status;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = this.t20_1;
      var tmp0_elvis_lhs = charset(this.u20_1);
      var tmp1_toByteArray = tmp0_elvis_lhs == null ? Charsets_getInstance().c1f_1 : tmp0_elvis_lhs;
      if (tmp1_toByteArray.equals(Charsets_getInstance().c1f_1)) {
        tmp$ret$0 = encodeToByteArray(tmp0_toByteArray);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp1_toByteArray.f1f(), tmp0_toByteArray, 0, tmp0_toByteArray.length);
    }
    tmp.w20_1 = tmp$ret$0;
  }
  TextContent.prototype.j20 = function () {
    return this.u20_1;
  };
  TextContent.prototype.k20 = function () {
    return toLong_0(this.w20_1.length);
  };
  TextContent.prototype.l20 = function () {
    return this.w20_1;
  };
  TextContent.prototype.toString = function () {
    return 'TextContent[' + this.u20_1 + '] "' + take(this.t20_1, 30) + '"';
  };
  TextContent.$metadata$ = classMeta('TextContent', undefined, undefined, undefined, undefined, ByteArrayContent_0.prototype);
  function get_origin(_this__u8e3s4) {
    var tmp;
    if (PlatformUtils_getInstance().m1o_1) {
      var tmp_0;
      var tmp_1 = typeof window !== 'undefined';
      if ((!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE()) {
        tmp_0 = window.location.origin;
      } else {
        var tmp_2 = self.location.origin;
        tmp_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = 'http://localhost';
    }
    return tmp;
  }
  //region block: post-declaration
  EmptyHeaders.prototype.z1j = get;
  EmptyHeaders.prototype.x1k = forEach;
  EmptyParameters.prototype.x1k = forEach;
  //endregion
  //region block: init
  DEFAULT_PORT = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ByteArrayContent_init_$Create$;
  _.$_$.b = TextContent_init_$Create$;
  _.$_$.c = HeadersBuilder_init_$Create$;
  _.$_$.d = URLBuilder_init_$Create$;
  _.$_$.e = NullBody_getInstance;
  _.$_$.f = Application_getInstance;
  _.$_$.g = Text_getInstance;
  _.$_$.h = Companion_getInstance_2;
  _.$_$.i = HttpHeaders_getInstance;
  _.$_$.j = Companion_getInstance_3;
  _.$_$.k = Companion_getInstance_4;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = ByteArrayContent_0;
  _.$_$.n = NoContent;
  _.$_$.o = ProtocolUpgrade;
  _.$_$.p = ReadChannelContent;
  _.$_$.q = WriteChannelContent;
  _.$_$.r = OutgoingContent;
  _.$_$.s = ContentTypeMatcher;
  _.$_$.t = HttpMessageBuilder;
  _.$_$.u = HttpMessage;
  _.$_$.v = HttpStatusCode;
  _.$_$.w = UnsafeHeaderException;
  _.$_$.x = get_authority;
  _.$_$.y = get_authority_0;
  _.$_$.z = charset_0;
  _.$_$.a1 = charset;
  _.$_$.b1 = contentLength;
  _.$_$.c1 = contentType;
  _.$_$.d1 = contentType_0;
  _.$_$.e1 = contentType_1;
  _.$_$.f1 = isSecure;
  _.$_$.g1 = isWebsocket;
  _.$_$.h1 = parseAndSortHeader;
  _.$_$.i1 = takeFrom_0;
  _.$_$.j1 = takeFrom;
  _.$_$.k1 = withCharsetIfNeeded;
  _.$_$.l1 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-js-ir.js.map
