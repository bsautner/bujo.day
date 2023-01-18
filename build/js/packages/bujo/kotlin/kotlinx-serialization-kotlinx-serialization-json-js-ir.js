(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var objectMeta = kotlin_kotlin.$_$.n9;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var classMeta = kotlin_kotlin.$_$.l8;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var toString = kotlin_kotlin.$_$.r9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var charSequenceGet = kotlin_kotlin.$_$.i8;
  var Char = kotlin_kotlin.$_$.nb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var equals = kotlin_kotlin.$_$.n8;
  var Annotation = kotlin_kotlin.$_$.lb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var interfaceMeta = kotlin_kotlin.$_$.u8;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
  var hashCode = kotlin_kotlin.$_$.t8;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var List = kotlin_kotlin.$_$.p4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Map = kotlin_kotlin.$_$.r4;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.s8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.tc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var toInt = kotlin_kotlin.$_$.ab;
  var toLong = kotlin_kotlin.$_$.cb;
  var toDouble = kotlin_kotlin.$_$.ya;
  var toLongOrNull = kotlin_kotlin.$_$.bb;
  var toDoubleOrNull = kotlin_kotlin.$_$.xa;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.w3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var toULongOrNull = kotlin_kotlin.$_$.fb;
  var Companion_getInstance = kotlin_kotlin.$_$.e4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j3;
  var ULong = kotlin_kotlin.$_$.gc;
  var isInterface = kotlin_kotlin.$_$.d9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var lazy_0 = kotlin_kotlin.$_$.uc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var KProperty1 = kotlin_kotlin.$_$.ea;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r8;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var toLong_0 = kotlin_kotlin.$_$.p9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.h3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.e3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.l3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.n3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.f8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.j8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.k8;
  var coerceAtLeast = kotlin_kotlin.$_$.t9;
  var coerceAtMost = kotlin_kotlin.$_$.v9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.s6;
  var arrayIterator = kotlin_kotlin.$_$.d8;
  var ensureNotNull = kotlin_kotlin.$_$.oc;
  var emptyMap = kotlin_kotlin.$_$.q5;
  var getValue = kotlin_kotlin.$_$.x5;
  var copyOf = kotlin_kotlin.$_$.l5;
  var copyOf_0 = kotlin_kotlin.$_$.m5;
  var fillArrayVal = kotlin_kotlin.$_$.p8;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.qb;
  var invoke = kotlin_kotlin.$_$.pc;
  var CoroutineImpl = kotlin_kotlin.$_$.x7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.rb;
  var Unit = kotlin_kotlin.$_$.ic;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i7;
  var SuspendFunction2 = kotlin_kotlin.$_$.z7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var isObject = kotlin_kotlin.$_$.f9;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var plus = kotlin_kotlin.$_$.wc;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.vb;
  var isFinite = kotlin_kotlin.$_$.rc;
  var isFinite_0 = kotlin_kotlin.$_$.qc;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toUInt = kotlin_kotlin.$_$.eb;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.g3;
  var toULong = kotlin_kotlin.$_$.gb;
  var toUByte = kotlin_kotlin.$_$.db;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d3;
  var toUShort = kotlin_kotlin.$_$.hb;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.m3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toString_0 = kotlin_kotlin.$_$.x2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.d4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.c4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.f4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var setOf = kotlin_kotlin.$_$.r6;
  var numberToChar = kotlin_kotlin.$_$.k9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w2;
  var equals_0 = kotlin_kotlin.$_$.ka;
  var toByte = kotlin_kotlin.$_$.o9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.v3;
  var toShort = kotlin_kotlin.$_$.q9;
  var single = kotlin_kotlin.$_$.ua;
  var emptySet = kotlin_kotlin.$_$.r5;
  var plus_0 = kotlin_kotlin.$_$.k6;
  var toList = kotlin_kotlin.$_$.y6;
  var Enum = kotlin_kotlin.$_$.sb;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var last = kotlin_kotlin.$_$.e6;
  var removeLast = kotlin_kotlin.$_$.o6;
  var lastIndexOf$default = kotlin_kotlin.$_$.p;
  var Long = kotlin_kotlin.$_$.xb;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.s2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.a4;
  var charArray = kotlin_kotlin.$_$.h8;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.a2n_1 = configuration;
    this.b2n_1 = serializersModule;
    this.c2n_1 = new DescriptorSchemaCache();
  }
  Json.prototype.d2n = function () {
    return this.a2n_1;
  };
  Json.prototype.b25 = function () {
    return this.b2n_1;
  };
  Json.prototype.z24 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.op();
    }
  };
  Json.prototype.a25 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.h24(), null);
    var result = input.d27(deserializer);
    lexer.r2n();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.u17();
    return new JsonImpl(conf, builder.e2o_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.s2n_1 = json.a2n_1.f2o_1;
    this.t2n_1 = json.a2n_1.k2o_1;
    this.u2n_1 = json.a2n_1.g2o_1;
    this.v2n_1 = json.a2n_1.h2o_1;
    this.w2n_1 = json.a2n_1.i2o_1;
    this.x2n_1 = json.a2n_1.j2o_1;
    this.y2n_1 = json.a2n_1.l2o_1;
    this.z2n_1 = json.a2n_1.m2o_1;
    this.a2o_1 = json.a2n_1.n2o_1;
    this.b2o_1 = json.a2n_1.o2o_1;
    this.c2o_1 = json.a2n_1.p2o_1;
    this.d2o_1 = json.a2n_1.q2o_1;
    this.e2o_1 = json.b25();
  }
  JsonBuilder.prototype.r2o = function () {
    return this.y2n_1;
  };
  JsonBuilder.prototype.u17 = function () {
    if (this.a2o_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.b2o_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.x2n_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.y2n_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.y2n_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.y2n_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.y2n_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.s2n_1, this.u2n_1, this.v2n_1, this.w2n_1, this.x2n_1, this.t2n_1, this.y2n_1, this.z2n_1, this.a2o_1, this.b2o_1, this.c2o_1, this.d2o_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.b25(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.a2n_1.n2o_1, $this.a2n_1.o2o_1);
    $this.b25().f2k(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.f2o_1 = encodeDefaults;
    this.g2o_1 = ignoreUnknownKeys;
    this.h2o_1 = isLenient;
    this.i2o_1 = allowStructuredMapKeys;
    this.j2o_1 = prettyPrint;
    this.k2o_1 = explicitNulls;
    this.l2o_1 = prettyPrintIndent;
    this.m2o_1 = coerceInputValues;
    this.n2o_1 = useArrayPolymorphism;
    this.o2o_1 = classDiscriminator;
    this.p2o_1 = allowSpecialFloatingPointValues;
    this.q2o_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.s2o = function () {
    return this.h2o_1;
  };
  JsonConfiguration.prototype.r2o = function () {
    return this.l2o_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.f2o_1 + ', ignoreUnknownKeys=' + this.g2o_1 + ', isLenient=' + this.h2o_1 + ', ' + ('allowStructuredMapKeys=' + this.i2o_1 + ', prettyPrint=' + this.j2o_1 + ', explicitNulls=' + this.k2o_1 + ', ') + ("prettyPrintIndent='" + this.l2o_1 + "', coerceInputValues=" + this.m2o_1 + ', useArrayPolymorphism=' + this.n2o_1 + ', ') + ("classDiscriminator='" + this.o2o_1 + "', allowSpecialFloatingPointValues=" + this.p2o_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonArray(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.v2o_1 = content;
  }
  JsonArray.prototype.g = function () {
    return this.v2o_1.g();
  };
  JsonArray.prototype.w2o = function (element) {
    return this.v2o_1.l1(element);
  };
  JsonArray.prototype.l1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.w2o(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.x2o = function (elements) {
    return this.v2o_1.m1(elements);
  };
  JsonArray.prototype.m1 = function (elements) {
    return this.x2o(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.v2o_1.h(index);
  };
  JsonArray.prototype.m = function () {
    return this.v2o_1.m();
  };
  JsonArray.prototype.d = function () {
    return this.v2o_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.v2o_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.v2o_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.v2o_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.s();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.t();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.w5(_Char___init__impl__6a9atx(58));
    tmp0_apply.w6(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.y2o_1 = content;
  }
  JsonObject.prototype.r = function () {
    return this.y2o_1.r();
  };
  JsonObject.prototype.j2 = function () {
    return this.y2o_1.j2();
  };
  JsonObject.prototype.g = function () {
    return this.y2o_1.g();
  };
  JsonObject.prototype.k2 = function () {
    return this.y2o_1.k2();
  };
  JsonObject.prototype.z1j = function (key) {
    return this.y2o_1.c2(key);
  };
  JsonObject.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.z1j((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.a1k = function (key) {
    return this.y2o_1.i2(key);
  };
  JsonObject.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.a1k((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.m = function () {
    return this.y2o_1.m();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.y2o_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.y2o_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.y2o_1.r();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.t1q();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.z2o_1 = isString;
    this.a2p_1 = toString(body);
  }
  JsonLiteral.prototype.t1q = function () {
    return this.a2p_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.z2o_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.a2p_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.a2p_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.z2o_1 === other.z2o_1))
      return false;
    if (!(this.a2p_1 === other.a2p_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.z2o_1 | 0;
    result = imul(31, result) + getStringHashCode(this.a2p_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.b2p_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c2p_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.t1q = function () {
    return this.b2p_1;
  };
  JsonNull.prototype.d2p = function () {
    return this.c2p_1.t();
  };
  JsonNull.prototype.g2e = function (typeParamsSerializers) {
    return this.d2p();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.t1q());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.t1q());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.t1q());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.t1q();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.t1q());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.t1q();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.t1q());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.t1q());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.v24('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.v24('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.v24('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.v24('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.v24('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().e2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().f2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().g2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().h2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().i2p_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.j2p_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.h24 = function () {
    return this.j2p_1;
  };
  JsonElementSerializer.prototype.k2p = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.r28(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.r28(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.r28(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.i24 = function (encoder, value) {
    return this.k2p(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.j24 = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.u2o();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.l2p_1 = ListSerializer(JsonElementSerializer_getInstance()).h24();
    this.m2p_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.p25 = function () {
    return this.l2p_1.p25();
  };
  JsonArrayDescriptor.prototype.q25 = function () {
    return this.l2p_1.q25();
  };
  JsonArrayDescriptor.prototype.r25 = function () {
    return this.l2p_1.r25();
  };
  JsonArrayDescriptor.prototype.h25 = function () {
    return this.l2p_1.h25();
  };
  JsonArrayDescriptor.prototype.s25 = function () {
    return this.l2p_1.s25();
  };
  JsonArrayDescriptor.prototype.t25 = function (index) {
    return this.l2p_1.t25(index);
  };
  JsonArrayDescriptor.prototype.u25 = function (index) {
    return this.l2p_1.u25(index);
  };
  JsonArrayDescriptor.prototype.v25 = function (name) {
    return this.l2p_1.v25(name);
  };
  JsonArrayDescriptor.prototype.w25 = function (index) {
    return this.l2p_1.w25(index);
  };
  JsonArrayDescriptor.prototype.x25 = function (index) {
    return this.l2p_1.x25(index);
  };
  JsonArrayDescriptor.prototype.o25 = function () {
    return this.m2p_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.i2p_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.h24 = function () {
    return this.i2p_1;
  };
  JsonArraySerializer.prototype.n2p = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).i24(encoder, value);
  };
  JsonArraySerializer.prototype.i24 = function (encoder, value) {
    return this.n2p(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.j24 = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).j24(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.o2p_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).h24();
    this.p2p_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.p25 = function () {
    return this.o2p_1.p25();
  };
  JsonObjectDescriptor.prototype.q25 = function () {
    return this.o2p_1.q25();
  };
  JsonObjectDescriptor.prototype.r25 = function () {
    return this.o2p_1.r25();
  };
  JsonObjectDescriptor.prototype.h25 = function () {
    return this.o2p_1.h25();
  };
  JsonObjectDescriptor.prototype.s25 = function () {
    return this.o2p_1.s25();
  };
  JsonObjectDescriptor.prototype.t25 = function (index) {
    return this.o2p_1.t25(index);
  };
  JsonObjectDescriptor.prototype.u25 = function (index) {
    return this.o2p_1.u25(index);
  };
  JsonObjectDescriptor.prototype.v25 = function (name) {
    return this.o2p_1.v25(name);
  };
  JsonObjectDescriptor.prototype.w25 = function (index) {
    return this.o2p_1.w25(index);
  };
  JsonObjectDescriptor.prototype.x25 = function (index) {
    return this.o2p_1.x25(index);
  };
  JsonObjectDescriptor.prototype.o25 = function () {
    return this.p2p_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.h2p_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.h24 = function () {
    return this.h2p_1;
  };
  JsonObjectSerializer.prototype.q2p = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).i24(encoder, value);
  };
  JsonObjectSerializer.prototype.i24 = function (encoder, value) {
    return this.q2p(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.j24 = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).j24(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.e2p_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.h24 = function () {
    return this.e2p_1;
  };
  JsonPrimitiveSerializer.prototype.r2p = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.r28(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.r28(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.i24 = function (encoder, value) {
    return this.r2p(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.j24 = function (decoder) {
    var result = asJsonDecoder(decoder).u2o();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.f2p_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.h24 = function () {
    return this.f2p_1;
  };
  JsonNullSerializer.prototype.s2p = function (encoder, value) {
    verify(encoder);
    encoder.w27();
  };
  JsonNullSerializer.prototype.i24 = function (encoder, value) {
    return this.s2p(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.j24 = function (decoder) {
    verify_0(decoder);
    if (decoder.q26()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.r26();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.g2p_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.h24 = function () {
    return this.g2p_1;
  };
  JsonLiteralSerializer.prototype.t2p = function (encoder, value) {
    verify(encoder);
    if (value.z2o_1) {
      return encoder.f28(value.a2p_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.b28(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.a2p_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.g28(serializer_0(Companion_getInstance()).h24());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.b28(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.d28(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.x27(tmp3_safe_receiver);
    }
    encoder.f28(value.a2p_1);
  };
  JsonLiteralSerializer.prototype.i24 = function (encoder, value) {
    return this.t2p(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.j24 = function (decoder) {
    var result = asJsonDecoder(decoder).u2o();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.u2p_1.t();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.u2p_1 = lazy_0($deferred);
  }
  defer$1.prototype.o25 = function () {
    return _get_original__l7ku1m(this).o25();
  };
  defer$1.prototype.s25 = function () {
    return _get_original__l7ku1m(this).s25();
  };
  defer$1.prototype.q25 = function () {
    return _get_original__l7ku1m(this).q25();
  };
  defer$1.prototype.w25 = function (index) {
    return _get_original__l7ku1m(this).w25(index);
  };
  defer$1.prototype.v25 = function (name) {
    return _get_original__l7ku1m(this).v25(name);
  };
  defer$1.prototype.t25 = function (index) {
    return _get_original__l7ku1m(this).t25(index);
  };
  defer$1.prototype.u25 = function (index) {
    return _get_original__l7ku1m(this).u25(index);
  };
  defer$1.prototype.x25 = function (index) {
    return _get_original__l7ku1m(this).x25(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(writer) {
    this.v2p_1 = writer;
    this.w2p_1 = true;
  }
  Composer.prototype.x2p = function () {
    this.w2p_1 = true;
  };
  Composer.prototype.y2p = function () {
    return Unit_getInstance();
  };
  Composer.prototype.z2p = function () {
    this.w2p_1 = false;
  };
  Composer.prototype.a2q = function () {
    return Unit_getInstance();
  };
  Composer.prototype.b2q = function (v) {
    return this.v2p_1.c2q(v);
  };
  Composer.prototype.d2q = function (v) {
    return this.v2p_1.e2q(v);
  };
  Composer.prototype.f2q = function (v) {
    return this.v2p_1.e2q(v.toString());
  };
  Composer.prototype.g2q = function (v) {
    return this.v2p_1.e2q(v.toString());
  };
  Composer.prototype.h2q = function (v) {
    return this.v2p_1.i2q(toLong_0(v));
  };
  Composer.prototype.j2q = function (v) {
    return this.v2p_1.i2q(toLong_0(v));
  };
  Composer.prototype.k2q = function (v) {
    return this.v2p_1.i2q(toLong_0(v));
  };
  Composer.prototype.l2q = function (v) {
    return this.v2p_1.i2q(v);
  };
  Composer.prototype.m2q = function (v) {
    return this.v2p_1.e2q(v.toString());
  };
  Composer.prototype.n2q = function (value) {
    return this.v2p_1.o2q(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.a2n_1.j2o_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.r2q_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.k2q = function (v) {
    if (this.r2q_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.n2q(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.d2q(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.l2q = function (v) {
    if (this.r2q_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.n2q(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.d2q(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.h2q = function (v) {
    if (this.r2q_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.n2q(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.d2q(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.j2q = function (v) {
    if (this.r2q_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.n2q(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.d2q(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.u2q_1 = json;
    this.v2q_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.x2p = function () {
    this.w2p_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.v2q_1;
    tmp0_this.v2q_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.y2p = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.v2q_1;
    tmp0_this.v2q_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.z2p = function () {
    this.w2p_1 = false;
    this.d2q('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.v2q_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.d2q(this.u2q_1.a2n_1.l2o_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.a2q = function () {
    this.b2q(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.x2q_1 = !descriptor.x25(index) ? descriptor.u25(index).h25() : false;
    return $this.x2q_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.w2q_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.x2q_1 = false;
  }
  JsonElementMarker.prototype.u2c = function (index) {
    this.w2q_1.u2c(index);
  };
  JsonElementMarker.prototype.v2c = function () {
    return this.w2q_1.v2c();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.y2q(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.o25() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.s25() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.h25() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.s25(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.v25(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.a2n_1.q2o_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.a2r(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.i2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.q25();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.t25(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.b(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b2r_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.q25());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).c2(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.w25(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.w25(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.a(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.e2r_1, 2);
    $this.c2r_1 = copyOf($this.c2r_1, newSize);
    $this.d2r_1 = copyOf_0($this.d2r_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.c2r_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.d2r_1 = tmp_3;
    this.e2r_1 = -1;
  }
  JsonPath.prototype.f2r = function (sd) {
    var tmp0_this = this;
    tmp0_this.e2r_1 = tmp0_this.e2r_1 + 1 | 0;
    var depth = tmp0_this.e2r_1;
    if (depth === this.c2r_1.length) {
      resize(this);
    }
    this.c2r_1[depth] = sd;
  };
  JsonPath.prototype.g2r = function (index) {
    this.d2r_1[this.e2r_1] = index;
  };
  JsonPath.prototype.h2r = function (key) {
    var tmp;
    if (!(this.d2r_1[this.e2r_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.e2r_1 = tmp0_this.e2r_1 + 1 | 0;
      tmp = tmp0_this.e2r_1 === this.c2r_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.c2r_1[this.e2r_1] = key;
    this.d2r_1[this.e2r_1] = -2;
  };
  JsonPath.prototype.i2r = function () {
    if (this.d2r_1[this.e2r_1] === -2) {
      this.c2r_1[this.e2r_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.j2r = function () {
    var depth = this.e2r_1;
    if (this.d2r_1[depth] === -2) {
      this.d2r_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.e2r_1;
      tmp0_this.e2r_1 = tmp1 - 1 | 0;
    }
    if (!(this.e2r_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.e2r_1;
      tmp2_this.e2r_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.k2r = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.x6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.e2r_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.c2r_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.s25(), LIST_getInstance())) {
            if (!(this.d2r_1[index] === -1)) {
              tmp0_apply.x6('[');
              tmp0_apply.w6(this.d2r_1[index]);
              tmp0_apply.x6(']');
            }
          } else {
            var idx = this.d2r_1[index];
            if (idx >= 0) {
              tmp0_apply.x6('.');
              tmp0_apply.x6(element.w25(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.x6('[');
            tmp0_apply.x6("'");
            tmp0_apply.w6(element);
            tmp0_apply.x6("'");
            tmp0_apply.x6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.k2r();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.r28(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.t2r_1.w2r(get_TC_BEGIN_OBJ());
    if ($this.t2r_1.x2r() === get_TC_COMMA()) {
      $this.t2r_1.y2q('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.t2r_1.y2r()) {
      var key = $this.u2r_1 ? $this.t2r_1.a2s() : $this.t2r_1.z2r();
      $this.t2r_1.w2r(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.b2s();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.a(key, element);
      lastToken = $this.t2r_1.c2s();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.t2r_1.y2q('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.t2r_1.w2r(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.t2r_1.y2q('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function readArray($this) {
    var lastToken = $this.t2r_1.c2s();
    if ($this.t2r_1.x2r() === get_TC_COMMA()) {
      $this.t2r_1.y2q('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.t2r_1.y2r()) {
      var element = $this.b2s();
      result.b(element);
      lastToken = $this.t2r_1.c2s();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.t2r_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.n2n_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.y2q(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.t2r_1.w2r(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.t2r_1.y2q('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.u2r_1 ? true : !isString) {
      tmp = $this.t2r_1.a2s();
    } else {
      tmp = $this.t2r_1.z2r();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.y2s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.d2t = function ($this$$receiver, it, $cont) {
    var tmp = this.e2t($this$$receiver, it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.d2t(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.b2t_1 = this.y2s_1.t2r_1.x2r();
            if (this.b2t_1 === get_TC_STRING()) {
              this.c2t_1 = readValue(this.y2s_1, true);
              this.oh_1 = 2;
              continue $sm;
            } else {
              if (this.b2t_1 === get_TC_OTHER()) {
                this.c2t_1 = readValue(this.y2s_1, false);
                this.oh_1 = 2;
                continue $sm;
              } else {
                if (this.b2t_1 === get_TC_BEGIN_OBJ()) {
                  this.oh_1 = 1;
                  suspendResult = readObject_0(this.z2s_1, this.y2s_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.b2t_1 === get_TC_BEGIN_LIST()) {
                    this.c2t_1 = readArray(this.y2s_1);
                    this.oh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.y2s_1.t2r_1.y2q("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.c2t_1 = suspendResult;
            this.oh_1 = 2;
            continue $sm;
          case 2:
            return this.c2t_1;
          case 3:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 3) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.e2t = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.y2s_1, completion);
    i.z2s_1 = $this$$receiver;
    i.a2t_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.d2t($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2s_1 = _this__u8e3s4;
    this.m2s_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.n2s_1 = this.l2s_1.t2r_1.w2r(get_TC_BEGIN_OBJ());
            if (this.l2s_1.t2r_1.x2r() === get_TC_COMMA()) {
              this.l2s_1.t2r_1.y2q('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.o2s_1 = LinkedHashMap_init_$Create$();
            this.oh_1 = 1;
            continue $sm;
          case 1:
            if (!this.l2s_1.t2r_1.y2r()) {
              this.oh_1 = 4;
              continue $sm;
            }

            this.p2s_1 = this.l2s_1.u2r_1 ? this.l2s_1.t2r_1.a2s() : this.l2s_1.t2r_1.z2r();
            this.l2s_1.t2r_1.w2r(get_TC_COLON());
            ;
            this.oh_1 = 2;
            suspendResult = this.m2s_1.d7(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.o2s_1.a(this.p2s_1, element);
            ;
            this.n2s_1 = this.l2s_1.t2r_1.c2s();
            var tmp0_subject = this.n2s_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.oh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.oh_1 = 4;
                continue $sm;
              } else {
                this.l2s_1.t2r_1.y2q('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.oh_1 = 1;
            continue $sm;
          case 4:
            if (this.n2s_1 === get_TC_BEGIN_OBJ()) {
              this.l2s_1.t2r_1.w2r(get_TC_END_OBJ());
            } else if (this.n2s_1 === get_TC_COMMA()) {
              this.l2s_1.t2r_1.y2q('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.o2s_1);
          case 5:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 5) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.t2r_1 = lexer;
    this.u2r_1 = configuration.h2o_1;
    this.v2r_1 = 0;
  }
  JsonTreeReader.prototype.b2s = function () {
    var token = this.t2r_1.x2r();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.v2r_1 = tmp0_this.v2r_1 + 1 | 0;
      if (tmp0_this.v2r_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.v2r_1 = tmp1_this.v2r_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.t2r_1.y2q(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.p25().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.f2t_1;
    }
    return json.a2n_1.o2o_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.t2o().a2n_1.n2o_1;
    }
    if (tmp) {
      return deserializer.j24(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.h24(), _this__u8e3s4.t2o());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.u2o();
    var tmp1_cast = deserializer.h24();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.o25() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.a1k(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t1q();
    var tmp2_elvis_lhs = deserializer.m24(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.t2o();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.t2o().a2n_1.n2o_1;
    }
    if (tmp) {
      serializer.i24(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.h24(), _this__u8e3s4.t2o());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.h24().s25());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.i24(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.h24()).l1(classDiscriminator)) {
      var baseName = serializer.h24().o25();
      var actualName = actualSerializer.h24().o25();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.s25();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.rd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.g2t_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.rd() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.q25();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.w25(i);
        if (name === $this.h2t_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.g2t_1 = useArrayPolymorphism;
    this.h2t_1 = discriminator;
  }
  PolymorphismValidator.prototype.n2k = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.q2k = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.h24();
    checkKind_0(this, descriptor, actualClass);
    if (!this.g2t_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.r2k = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.s2k = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.z2q_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.i2t = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.z2q_1;
    var value_0 = tmp0_getOrPut.i2(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.a(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.a(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.a2r = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.j2t(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.i2t(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.j2t = function (descriptor, key) {
    var tmp0_safe_receiver = this.z2q_1.i2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.i2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function DiscriminatorHolder(discriminatorToSkip) {
    this.k2t_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.k2t_1 === unknownKey) {
      _this__u8e3s4.k2t_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.s27(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.h2n_1.x2r() === get_TC_COMMA()) {
      $this.h2n_1.y2q('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.j2n_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.j2n_1 === -1)) {
        hasComma = $this.h2n_1.m2t();
      }
    } else {
      $this.h2n_1.l2t(get_COLON());
    }
    var tmp;
    if ($this.h2n_1.y2r()) {
      if (decodingKey) {
        if ($this.j2n_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.h2n_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.n2n_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.y2q(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.h2n_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.n2n_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.y2q(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.j2n_1 = tmp0_this.j2n_1 + 1 | 0;
      tmp = tmp0_this.j2n_1;
    } else {
      if (hasComma) {
        $this.h2n_1.y2q("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.f2n_1;
      var tmp1_tryCoerceValue = descriptor.u25(index);
      var tmp;
      if (!tmp1_tryCoerceValue.h25()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.h2n_1.n2t();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.s25(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.h2n_1.o2t($this.l2n_1.h2o_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.h2n_1.z2r();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.h2n_1.m2t();
    while ($this.h2n_1.y2r()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.h2n_1.l2t(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.f2n_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.l2n_1.m2o_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.h2n_1.m2t();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.m2n_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.u2c(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.h2n_1.y2q('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.m2n_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v2c();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.l2n_1.g2o_1 ? true : trySkip($this.k2n_1, $this, key)) {
      $this.h2n_1.q2t($this.l2n_1.h2o_1);
    } else {
      $this.h2n_1.p2t(key);
    }
    return $this.h2n_1.m2t();
  }
  function decodeListIndex($this) {
    var hasComma = $this.h2n_1.m2t();
    var tmp;
    if ($this.h2n_1.y2r()) {
      if (!($this.j2n_1 === -1) ? !hasComma : false) {
        $this.h2n_1.y2q('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.j2n_1 = tmp0_this.j2n_1 + 1 | 0;
      tmp = tmp0_this.j2n_1;
    } else {
      if (hasComma) {
        $this.h2n_1.y2q('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.l2n_1.h2o_1) {
      tmp = $this.h2n_1.s2t();
    } else {
      tmp = $this.h2n_1.r2t();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.f2n_1 = json;
    this.g2n_1 = mode;
    this.h2n_1 = lexer;
    this.i2n_1 = this.f2n_1.b25();
    this.j2n_1 = -1;
    this.k2n_1 = discriminatorHolder;
    this.l2n_1 = this.f2n_1.a2n_1;
    this.m2n_1 = this.l2n_1.k2o_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.t2o = function () {
    return this.f2n_1;
  };
  StreamingJsonDecoder.prototype.t2t = function () {
    return this.h2n_1;
  };
  StreamingJsonDecoder.prototype.b25 = function () {
    return this.i2n_1;
  };
  StreamingJsonDecoder.prototype.u2o = function () {
    return (new JsonTreeReader(this.f2n_1.a2n_1, this.h2n_1)).b2s();
  };
  StreamingJsonDecoder.prototype.d27 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.f2n_1.a2n_1.n2o_1;
      }
      if (tmp) {
        return deserializer.j24(this);
      }
      var discriminator = classDiscriminator(deserializer.h24(), this.f2n_1);
      var type = this.h2n_1.u2t(discriminator, this.l2n_1.h2o_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.m24(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.k2n_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.j24(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.e25_1, plus($p.message, ' at path: ') + this.h2n_1.o2n_1.k2r(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.e27 = function (descriptor) {
    var newMode = switchMode(this.f2n_1, descriptor);
    this.h2n_1.o2n_1.f2r(descriptor);
    this.h2n_1.l2t(newMode.x2t_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.l4_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.f2n_1, newMode, this.h2n_1, descriptor, this.k2n_1);
        break;
      default:
        var tmp_0;
        if (this.g2n_1.equals(newMode) ? this.f2n_1.a2n_1.k2o_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.f2n_1, newMode, this.h2n_1, descriptor, this.k2n_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.f27 = function (descriptor) {
    if (this.f2n_1.a2n_1.g2o_1 ? descriptor.q25() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.h2n_1.l2t(this.g2n_1.y2t_1);
    this.h2n_1.o2n_1.j2r();
  };
  StreamingJsonDecoder.prototype.q26 = function () {
    var tmp;
    var tmp0_safe_receiver = this.m2n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2q_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.h2n_1.n2t();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.r26 = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.p27 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.g2n_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.h2n_1.o2n_1.i2r();
    }
    var value = AbstractDecoder.prototype.p27.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.h2n_1.o2n_1.h2r(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.s27 = function (descriptor) {
    var tmp0_subject = this.g2n_1;
    var tmp0 = tmp0_subject.l4_1;
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.g2n_1.equals(WriteMode_MAP_getInstance())) {
      this.h2n_1.o2n_1.g2r(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.s26 = function () {
    var tmp;
    if (this.l2n_1.h2o_1) {
      tmp = this.h2n_1.a2u();
    } else {
      tmp = this.h2n_1.z2t();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.t26 = function () {
    var value = this.h2n_1.b2u();
    if (!value.equals(toLong_0(value.fh()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.h2n_1.y2q(tmp, 0, null, 6, null);
    }
    return value.fh();
  };
  StreamingJsonDecoder.prototype.u26 = function () {
    var value = this.h2n_1.b2u();
    if (!value.equals(toLong_0(value.gh()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.h2n_1.y2q(tmp, 0, null, 6, null);
    }
    return value.gh();
  };
  StreamingJsonDecoder.prototype.v26 = function () {
    var value = this.h2n_1.b2u();
    if (!value.equals(toLong_0(value.o6()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.h2n_1.y2q(tmp, 0, null, 6, null);
    }
    return value.o6();
  };
  StreamingJsonDecoder.prototype.w26 = function () {
    return this.h2n_1.b2u();
  };
  StreamingJsonDecoder.prototype.x26 = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.h2n_1;
      var input = tmp0_parseString.a2s();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.y2q(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.f2n_1.a2n_1.p2o_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.h2n_1, result);
  };
  StreamingJsonDecoder.prototype.y26 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.h2n_1;
      var input = tmp0_parseString.a2s();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.y2q(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.f2n_1.a2n_1.p2o_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.h2n_1, result);
  };
  StreamingJsonDecoder.prototype.z26 = function () {
    var string = this.h2n_1.a2s();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.h2n_1.y2q(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.a27 = function () {
    var tmp;
    if (this.l2n_1.h2o_1) {
      tmp = this.h2n_1.s2t();
    } else {
      tmp = this.h2n_1.z2r();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.b27 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.h2n_1, this.f2n_1) : AbstractDecoder.prototype.b27.call(this, descriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.a2s();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.y2q(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.c2u_1 = lexer;
    this.d2u_1 = json.b25();
  }
  JsonDecoderForUnsignedTypes.prototype.b25 = function () {
    return this.d2u_1;
  };
  JsonDecoderForUnsignedTypes.prototype.s27 = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.v26 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.c2u_1;
      var input = tmp0_parseString.a2s();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.y2q(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.w26 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.c2u_1;
      var input = tmp0_parseString.a2s();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.y2q(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.t26 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.c2u_1;
      var input = tmp0_parseString.a2s();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.y2q(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.u26 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.c2u_1;
      var input = tmp0_parseString.a2s();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.y2q(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.l2r_1.z2p();
    $this.f28(ensureNotNull($this.s2r_1));
    $this.l2r_1.b2q(get_COLON());
    $this.l2r_1.a2q();
    $this.f28(descriptor.o25());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.l2r_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.l2r_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.l2r_1.v2p_1, $this.r2r_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.l2r_1 = composer;
    this.m2r_1 = json;
    this.n2r_1 = mode;
    this.o2r_1 = modeReuseCache;
    this.p2r_1 = this.m2r_1.b25();
    this.q2r_1 = this.m2r_1.a2n_1;
    this.r2r_1 = false;
    this.s2r_1 = null;
    var i = this.n2r_1.l4_1;
    if (!(this.o2r_1 == null)) {
      if (!(this.o2r_1[i] === null) ? true : !(this.o2r_1[i] === this)) {
        this.o2r_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.t2o = function () {
    return this.m2r_1;
  };
  StreamingJsonEncoder.prototype.b25 = function () {
    return this.p2r_1;
  };
  StreamingJsonEncoder.prototype.r28 = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t2o().a2n_1.n2o_1;
      }
      if (tmp) {
        serializer.i24(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.h24(), this.t2o());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.h24().s25());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.s2r_1 = baseClassDiscriminator;
      actualSerializer.i24(this, value);
    }
  };
  StreamingJsonEncoder.prototype.e27 = function (descriptor) {
    var newMode = switchMode(this.m2r_1, descriptor);
    if (!equals(new Char(newMode.x2t_1), new Char(get_INVALID()))) {
      this.l2r_1.b2q(newMode.x2t_1);
      this.l2r_1.x2p();
    }
    if (!(this.s2r_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.s2r_1 = null;
    }
    if (this.n2r_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.o2r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.l4_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.l2r_1, this.m2r_1, newMode, this.o2r_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.f27 = function (descriptor) {
    if (!equals(new Char(this.n2r_1.y2t_1), new Char(get_INVALID()))) {
      this.l2r_1.y2p();
      this.l2r_1.z2p();
      this.l2r_1.b2q(this.n2r_1.y2t_1);
    }
  };
  StreamingJsonEncoder.prototype.u27 = function (descriptor, index) {
    var tmp0_subject = this.n2r_1;
    var tmp0 = tmp0_subject.l4_1;
    switch (tmp0) {
      case 1:
        if (!this.l2r_1.w2p_1) {
          this.l2r_1.b2q(get_COMMA());
        }

        this.l2r_1.z2p();
        ;
        break;
      case 2:
        if (!this.l2r_1.w2p_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.l2r_1.b2q(get_COMMA());
            this.l2r_1.z2p();
            tmp_0 = true;
          } else {
            this.l2r_1.b2q(get_COLON());
            this.l2r_1.a2q();
            tmp_0 = false;
          }
          tmp.r2r_1 = tmp_0;
        } else {
          this.r2r_1 = true;
          this.l2r_1.z2p();
        }

        break;
      case 3:
        if (index === 0)
          this.r2r_1 = true;
        if (index === 1) {
          this.l2r_1.b2q(get_COMMA());
          this.l2r_1.a2q();
          this.r2r_1 = false;
        }

        break;
      default:
        if (!this.l2r_1.w2p_1) {
          this.l2r_1.b2q(get_COMMA());
        }

        this.l2r_1.z2p();
        this.f28(descriptor.w25(index));
        this.l2r_1.b2q(get_COLON());
        this.l2r_1.a2q();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.g28 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.m2r_1, this.n2r_1, null) : AbstractEncoder.prototype.g28.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.w27 = function () {
    this.l2r_1.d2q(get_NULL());
  };
  StreamingJsonEncoder.prototype.x27 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.m2q(value);
    }
  };
  StreamingJsonEncoder.prototype.y27 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.h2q(value);
    }
  };
  StreamingJsonEncoder.prototype.z27 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.j2q(value);
    }
  };
  StreamingJsonEncoder.prototype.a28 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.k2q(value);
    }
  };
  StreamingJsonEncoder.prototype.b28 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.l2q(value);
    }
  };
  StreamingJsonEncoder.prototype.c28 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.f2q(value);
    }
    if (!this.q2r_1.p2o_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.l2r_1.v2p_1));
    }
  };
  StreamingJsonEncoder.prototype.d28 = function (value) {
    if (this.r2r_1) {
      this.f28(value.toString());
    } else {
      this.l2r_1.g2q(value);
    }
    if (!this.q2r_1.p2o_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.l2r_1.v2p_1));
    }
  };
  StreamingJsonEncoder.prototype.e28 = function (value) {
    this.f28(toString_0(value));
  };
  StreamingJsonEncoder.prototype.f28 = function (value) {
    return this.l2r_1.n2q(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.r25() ? get_unsignedNumberDescriptors().l1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).h24(), serializer_0(Companion_getInstance()).h24(), serializer_2(Companion_getInstance_2()).h24(), serializer_3(Companion_getInstance_3()).h24()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.w5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.uf(value, lastPos, i);
          _this__u8e3s4.x6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.uf(value, lastPos, value.length);
    } else {
      _this__u8e3s4.x6(value);
    }
    _this__u8e3s4.w5(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.g2i();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.j2u(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.t() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.g2u_1 = json;
    this.h2u_1 = value;
    this.i2u_1 = this.t2o().a2n_1;
  }
  AbstractJsonTreeDecoder.prototype.t2o = function () {
    return this.g2u_1;
  };
  AbstractJsonTreeDecoder.prototype.t = function () {
    return this.h2u_1;
  };
  AbstractJsonTreeDecoder.prototype.b25 = function () {
    return this.t2o().b25();
  };
  AbstractJsonTreeDecoder.prototype.u2o = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.d27 = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.h2i = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.e27 = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.s25();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.t2o();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.o25() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.t2o();
        var keyDescriptor = carrierDescriptor(descriptor.u25(0), tmp0_selectMapMode.b25());
        var keyKind = keyDescriptor.s25();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.t2o();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.o25() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.a2n_1.i2o_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.t2o();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.o25() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.t2o();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.o25() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.f27 = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.q26 = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.k2u = function (tag) {
    var currentElement = this.j2u(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.l2u = function (tag) {
    return !(this.j2u(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.j2i = function (tag) {
    return this.l2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.m2u = function (tag) {
    var value = this.k2u(tag);
    if (!this.t2o().a2n_1.h2o_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.z2o_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.k2i = function (tag) {
    return this.m2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.n2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().e9_1;
        if (result <= ByteCompanionObject_getInstance().f9_1 ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.l2i = function (tag) {
    return this.n2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.o2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().m9_1;
        if (result <= ShortCompanionObject_getInstance().n9_1 ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.m2i = function (tag) {
    return this.o2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.p2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.n2i = function (tag) {
    return this.p2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.q2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.o2i = function (tag) {
    return this.q2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.r2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t2o().a2n_1.p2o_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.p2i = function (tag) {
    return this.r2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.s2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t2o().a2n_1.p2o_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.q2i = function (tag) {
    return this.s2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.t2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.k2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.t1q());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.r2i = function (tag) {
    return this.t2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.u2u = function (tag) {
    var value = this.k2u(tag);
    if (!this.t2o().a2n_1.h2o_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.z2o_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.t1q();
  };
  AbstractJsonTreeDecoder.prototype.s2i = function (tag) {
    return this.u2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.v2u = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.k2u(tag).t1q()), this.t2o()) : NamedValueDecoder.prototype.t2i.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.t2i = function (tag, inlineDescriptor) {
    return this.v2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.t2o();
      var tmp1_tryCoerceValue = descriptor.u25(index);
      var tmp;
      if (!tmp1_tryCoerceValue.h25()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.j2u(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.s25(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.j2u(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.f2v_1 = (!$this.t2o().a2n_1.k2o_1 ? !descriptor.x25(index) : false) ? descriptor.u25(index).h25() : false;
    return $this.f2v_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.b2v_1 = value;
    this.c2v_1 = polyDiscriminator;
    this.d2v_1 = polyDescriptor;
    this.e2v_1 = 0;
    this.f2v_1 = false;
  }
  JsonTreeDecoder.prototype.t = function () {
    return this.b2v_1;
  };
  JsonTreeDecoder.prototype.s27 = function (descriptor) {
    while (this.e2v_1 < descriptor.q25()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.e2v_1;
      tmp0_this.e2v_1 = tmp1 + 1 | 0;
      var name = this.b2i(descriptor, tmp1);
      var index = this.e2v_1 - 1 | 0;
      this.f2v_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.t();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).c2(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.i2u_1.m2o_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.q26 = function () {
    return !this.f2v_1 ? AbstractJsonTreeDecoder.prototype.q26.call(this) : false;
  };
  JsonTreeDecoder.prototype.c2i = function (desc, index) {
    var mainName = desc.w25(index);
    if (!this.i2u_1.q2o_1)
      return mainName;
    if (this.t().j2().l1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.t2o());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.a2r(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.t().j2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.i2(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.j2u = function (tag) {
    return getValue(this.t(), tag);
  };
  JsonTreeDecoder.prototype.e27 = function (descriptor) {
    if (descriptor === this.d2v_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.e27.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.f27 = function (descriptor) {
    var tmp;
    if (this.i2u_1.g2o_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.s25();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.i2u_1.q2o_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.t2o()).j2t(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.t().j2().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.l1(key) ? !(key === this.c2v_1) : false) {
        throw UnknownKeyException(key, this.t().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.l2v_1 = value;
    this.m2v_1 = this.l2v_1.g();
    this.n2v_1 = -1;
  }
  JsonTreeListDecoder.prototype.t = function () {
    return this.l2v_1;
  };
  JsonTreeListDecoder.prototype.c2i = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.j2u = function (tag) {
    return this.l2v_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.s27 = function (descriptor) {
    while (this.n2v_1 < (this.m2v_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.n2v_1;
      tmp0_this.n2v_1 = tmp1 + 1 | 0;
      return this.n2v_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.y2v_1 = value;
    this.z2v_1 = toList(this.y2v_1.j2());
    this.a2w_1 = imul(this.z2v_1.g(), 2);
    this.b2w_1 = -1;
  }
  JsonTreeMapDecoder.prototype.t = function () {
    return this.y2v_1;
  };
  JsonTreeMapDecoder.prototype.c2i = function (desc, index) {
    var i = index / 2 | 0;
    return this.z2v_1.h(i);
  };
  JsonTreeMapDecoder.prototype.s27 = function (descriptor) {
    while (this.b2w_1 < (this.a2w_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.b2w_1;
      tmp0_this.b2w_1 = tmp1 + 1 | 0;
      return this.b2w_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.j2u = function (tag) {
    return (this.b2w_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.y2v_1, tag);
  };
  JsonTreeMapDecoder.prototype.f27 = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.h24())).d27(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.x2t_1 = begin;
    this.y2t_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.s25();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.u25(0), _this__u8e3s4.b25());
          var keyKind = keyDescriptor.s25();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.a2n_1.i2o_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.u25(0), _this__u8e3s4.b25());
    var keyKind = keyDescriptor.s25();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.a2n_1.i2o_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.s25(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.r25()) {
      tmp = carrierDescriptor(_this__u8e3s4.u25(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.c2w(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.c2w(lastPosition, currentPosition);
    var result = $this.q2n_1.toString();
    $this.q2n_1.vf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.p2n_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.p2n_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.d2w(), $this.n2n_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.e2w(currentPosition);
    if (currentPosition === -1) {
      $this.y2q('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.d2w();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.d2w(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.y2q(tmp_0, 0, null, 6, null);
    }
    $this.q2n_1.w5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.n2n_1 = startPos;
      $this.f2w();
      if (($this.n2n_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.y2q('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.n2n_1);
    }
    $this.q2n_1.w5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.y2q(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.e2w(start);
    if (current >= charSequenceLength($this.d2w()) ? true : current === -1) {
      $this.y2q('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.d2w();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.a2s() + "'";
        $this.y2q(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.d2w()) - current | 0) < literalSuffix.length) {
      $this.y2q('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.d2w(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.a2s() + "'";
          $this.y2q(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.n2n_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.n2n_1 = 0;
    this.o2n_1 = new JsonPath();
    this.p2n_1 = null;
    this.q2n_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.f2w = function () {
  };
  AbstractJsonLexer.prototype.g2w = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.r2n = function () {
    var nextToken = this.c2s();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.d2w(), this.n2n_1 - 1 | 0)) + ' instead';
      this.y2q(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.w2r = function (expected) {
    var token = this.c2s();
    if (!(token === expected)) {
      this.h2w(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.l2t = function (expected) {
    this.f2w();
    var source = this.d2w();
    var cpos = this.n2n_1;
    $l$loop_0: while (true) {
      cpos = this.e2w(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.n2n_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.i2w(expected);
    }
    this.n2n_1 = cpos;
    this.i2w(expected);
  };
  AbstractJsonLexer.prototype.i2w = function (expected) {
    var tmp0_this = this;
    tmp0_this.n2n_1 = tmp0_this.n2n_1 - 1 | 0;
    if ((this.n2n_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.a2s() === 'null' : false) {
      this.j2w("Expected string literal but 'null' literal was found", this.n2n_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.h2w(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.h2w = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.n2n_1 === charSequenceLength(this.d2w()) ? true : this.n2n_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.d2w(), this.n2n_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.n2n_1 - 1 | 0;
    this.y2q(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.x2r = function () {
    var source = this.d2w();
    var cpos = this.n2n_1;
    $l$loop_0: while (true) {
      cpos = this.e2w(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.n2n_1 = cpos;
      return charToTokenClass(ch);
    }
    this.n2n_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.n2t = function () {
    var current = this.k2w();
    current = this.e2w(current);
    var len = charSequenceLength(this.d2w()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.d2w(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.d2w(), current + 4 | 0)) === 0 : false)
      return true;
    this.n2n_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.k2w = function () {
    var current = this.n2n_1;
    $l$loop_0: while (true) {
      current = this.e2w(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.d2w(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.n2n_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.o2t = function (isLenient) {
    var token = this.x2r();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.a2s();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.z2r();
    }
    var string = tmp;
    this.p2n_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.l2w = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.d2w();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.z2r = function () {
    if (!(this.p2n_1 == null)) {
      return takePeeked(this);
    }
    return this.r2t();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.e2w(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.y2q('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.c2w(lastPosition, currentPosition);
          currentPosition = this.e2w(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.y2q('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.l2w(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.n2n_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.s2t = function () {
    var result = this.a2s();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.y2q("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.a2s = function () {
    if (!(this.p2n_1 == null)) {
      return takePeeked(this);
    }
    var current = this.k2w();
    if (current >= charSequenceLength(this.d2w()) ? true : current === -1) {
      var tmp = current;
      this.y2q('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.d2w(), current));
    if (token === 1) {
      return this.z2r();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.d2w(), current));
      this.y2q(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.d2w(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.d2w())) {
        usedAppend = true;
        this.c2w(this.n2n_1, current);
        var eof = this.e2w(current);
        if (eof === -1) {
          this.n2n_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.l2w(this.n2n_1, current);
    } else {
      tmp_1 = decodedString(this, this.n2n_1, current);
    }
    var result = tmp_1;
    this.n2n_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.c2w = function (fromIndex, toIndex) {
    this.q2n_1.uf(this.d2w(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.m2w = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.y2q(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.q2t = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.x2r();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.a2s();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.x2r();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.a2s();
        } else {
          this.r2t();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.b(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.n2n_1, 'found ] instead of } at path: ' + this.o2n_1, this.d2w());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.n2n_1, 'found } instead of ] at path: ' + this.o2n_1, this.d2w());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.y2q('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.c2s();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.d2w() + "', currentPosition=" + this.n2n_1 + ')';
  };
  AbstractJsonLexer.prototype.p2t = function (key) {
    var processed = this.l2w(0, this.n2n_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.j2w("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.j2w = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.o2n_1.k2r() + hintMessage, this.d2w());
  };
  AbstractJsonLexer.prototype.y2q = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.n2n_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.j2w(message, position, hint);
  };
  AbstractJsonLexer.prototype.b2u = function () {
    var current = this.k2w();
    current = this.e2w(current);
    if (current >= charSequenceLength(this.d2w()) ? true : current === -1) {
      this.y2q('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.d2w(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.d2w())) {
        this.y2q('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.d2w(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.y2q("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.d2w()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.y2q(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.z5(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.b6(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.b1(new Long(0, 0)) > 0) {
        this.y2q('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.y2q('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.y2q('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.d2w(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.y2q('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.n2n_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.x5();
      } else {
        this.y2q('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.z2t = function () {
    return consumeBoolean(this, this.k2w());
  };
  AbstractJsonLexer.prototype.a2u = function () {
    var current = this.k2w();
    if (current === charSequenceLength(this.d2w())) {
      this.y2q('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.d2w(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.n2n_1 === charSequenceLength(this.d2w())) {
        this.y2q('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.d2w(), this.n2n_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.y2q('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.n2n_1 = tmp0_this.n2n_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().o2w_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().n2w_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.n2w_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.o2w_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.n2w_1 = charArray(117);
    this.o2w_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.t2w_1 = source;
  }
  StringJsonLexer.prototype.d2w = function () {
    return this.t2w_1;
  };
  StringJsonLexer.prototype.e2w = function (position) {
    return position < this.t2w_1.length ? position : -1;
  };
  StringJsonLexer.prototype.c2s = function () {
    var source = this.t2w_1;
    $l$loop: while (!(this.n2n_1 === -1) ? this.n2n_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.n2n_1;
      tmp0_this.n2n_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.m2t = function () {
    var current = this.k2w();
    if (current === this.t2w_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.t2w_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.n2n_1 = tmp0_this.n2n_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.y2r = function () {
    var current = this.n2n_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.t2w_1.length) {
      var c = charSequenceGet(this.t2w_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.n2n_1 = current;
      return this.g2w(c);
    }
    this.n2n_1 = current;
    return false;
  };
  StringJsonLexer.prototype.k2w = function () {
    var current = this.n2n_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.t2w_1.length) {
      var c = charSequenceGet(this.t2w_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.n2n_1 = current;
    return current;
  };
  StringJsonLexer.prototype.l2t = function (expected) {
    if (this.n2n_1 === -1) {
      this.i2w(expected);
    }
    var source = this.t2w_1;
    $l$loop: while (this.n2n_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.n2n_1;
      tmp0_this.n2n_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.i2w(expected);
    }
    this.i2w(expected);
  };
  StringJsonLexer.prototype.r2t = function () {
    this.l2t(get_STRING());
    var current = this.n2n_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.t2w_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.h2w(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.t2w_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.t2w_1, this.n2n_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.n2n_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.t2w_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.u2t = function (keyToMatch, isLenient) {
    var positionSnapshot = this.n2n_1;
    try {
      if (!(this.c2s() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.r2t() : this.s2t();
      if (firstKey === keyToMatch) {
        if (!(this.c2s() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.z2r() : this.s2t();
        return result;
      }
      return null;
    }finally {
      this.n2n_1 = positionSnapshot;
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.c2n_1;
  }
  function JsonToStringWriter() {
    this.e2n_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.i2q = function (value) {
    this.e2n_1.w6(value);
  };
  JsonToStringWriter.prototype.c2q = function (char) {
    this.e2n_1.w5(char);
  };
  JsonToStringWriter.prototype.e2q = function (text) {
    this.e2n_1.x6(text);
  };
  JsonToStringWriter.prototype.o2q = function (text) {
    printQuoted(this.e2n_1, text);
  };
  JsonToStringWriter.prototype.op = function () {
    this.e2n_1.wf();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.e2n_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.h25 = get_isNullable;
  defer$1.prototype.r25 = get_isInline;
  defer$1.prototype.p25 = get_annotations;
  PolymorphismValidator.prototype.p2k = contextual;
  StreamingJsonDecoder.prototype.q27 = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.r27 = decodeSequentially;
  StreamingJsonDecoder.prototype.t27 = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.d27 = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.q27 = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.r27 = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.t27 = decodeCollectionSize;
  StreamingJsonEncoder.prototype.s28 = encodeNotNullMark;
  StreamingJsonEncoder.prototype.t28 = beginCollection;
  AbstractJsonTreeDecoder.prototype.q27 = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.r27 = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.t27 = decodeCollectionSize;
  JsonTreeDecoder.prototype.q27 = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.r27 = decodeSequentially;
  JsonTreeDecoder.prototype.t27 = decodeCollectionSize;
  JsonTreeListDecoder.prototype.q27 = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.r27 = decodeSequentially;
  JsonTreeListDecoder.prototype.t27 = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.q27 = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.r27 = decodeSequentially;
  JsonTreeMapDecoder.prototype.t27 = decodeCollectionSize;
  //endregion
  //region block: init
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
