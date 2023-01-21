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
  var objectMeta = kotlin_kotlin.$_$.o9;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var classMeta = kotlin_kotlin.$_$.m8;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var toString = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var charSequenceGet = kotlin_kotlin.$_$.j8;
  var Char = kotlin_kotlin.$_$.nb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var equals = kotlin_kotlin.$_$.o8;
  var Annotation = kotlin_kotlin.$_$.lb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var interfaceMeta = kotlin_kotlin.$_$.v8;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
  var hashCode = kotlin_kotlin.$_$.u8;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var List = kotlin_kotlin.$_$.p4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Map = kotlin_kotlin.$_$.r4;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.t8;
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
  var isInterface = kotlin_kotlin.$_$.e9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var lazy_0 = kotlin_kotlin.$_$.uc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var KProperty1 = kotlin_kotlin.$_$.ea;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s8;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var toLong_0 = kotlin_kotlin.$_$.q9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.h3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.e3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.l3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.n3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.g8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.k8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.l8;
  var coerceAtLeast = kotlin_kotlin.$_$.u9;
  var coerceAtMost = kotlin_kotlin.$_$.w9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.t6;
  var arrayIterator = kotlin_kotlin.$_$.e8;
  var ensureNotNull = kotlin_kotlin.$_$.oc;
  var emptyMap = kotlin_kotlin.$_$.r5;
  var getValue = kotlin_kotlin.$_$.y5;
  var copyOf = kotlin_kotlin.$_$.m5;
  var copyOf_0 = kotlin_kotlin.$_$.n5;
  var fillArrayVal = kotlin_kotlin.$_$.q8;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.qb;
  var invoke = kotlin_kotlin.$_$.pc;
  var CoroutineImpl = kotlin_kotlin.$_$.y7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.rb;
  var Unit = kotlin_kotlin.$_$.ic;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.j7;
  var SuspendFunction2 = kotlin_kotlin.$_$.a8;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var isObject = kotlin_kotlin.$_$.g9;
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
  var setOf = kotlin_kotlin.$_$.s6;
  var numberToChar = kotlin_kotlin.$_$.l9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w2;
  var equals_0 = kotlin_kotlin.$_$.ka;
  var toByte = kotlin_kotlin.$_$.p9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.v3;
  var toShort = kotlin_kotlin.$_$.r9;
  var single = kotlin_kotlin.$_$.ua;
  var emptySet = kotlin_kotlin.$_$.s5;
  var plus_0 = kotlin_kotlin.$_$.l6;
  var toList = kotlin_kotlin.$_$.z6;
  var Enum = kotlin_kotlin.$_$.sb;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var last = kotlin_kotlin.$_$.f6;
  var removeLast = kotlin_kotlin.$_$.p6;
  var lastIndexOf$default = kotlin_kotlin.$_$.p;
  var Long = kotlin_kotlin.$_$.xb;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.s2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.a4;
  var charArray = kotlin_kotlin.$_$.i8;
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
    this.l2n_1 = configuration;
    this.m2n_1 = serializersModule;
    this.n2n_1 = new DescriptorSchemaCache();
  }
  Json.prototype.o2n = function () {
    return this.l2n_1;
  };
  Json.prototype.m25 = function () {
    return this.m2n_1;
  };
  Json.prototype.k25 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.pp();
    }
  };
  Json.prototype.l25 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.s24(), null);
    var result = input.o27(deserializer);
    lexer.c2o();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.t2();
    return new JsonImpl(conf, builder.p2o_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.d2o_1 = json.l2n_1.q2o_1;
    this.e2o_1 = json.l2n_1.v2o_1;
    this.f2o_1 = json.l2n_1.r2o_1;
    this.g2o_1 = json.l2n_1.s2o_1;
    this.h2o_1 = json.l2n_1.t2o_1;
    this.i2o_1 = json.l2n_1.u2o_1;
    this.j2o_1 = json.l2n_1.w2o_1;
    this.k2o_1 = json.l2n_1.x2o_1;
    this.l2o_1 = json.l2n_1.y2o_1;
    this.m2o_1 = json.l2n_1.z2o_1;
    this.n2o_1 = json.l2n_1.a2p_1;
    this.o2o_1 = json.l2n_1.b2p_1;
    this.p2o_1 = json.m25();
  }
  JsonBuilder.prototype.c2p = function () {
    return this.j2o_1;
  };
  JsonBuilder.prototype.t2 = function () {
    if (this.l2o_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.m2o_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.i2o_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.j2o_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.j2o_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.j2o_1;
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
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.j2o_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.d2o_1, this.f2o_1, this.g2o_1, this.h2o_1, this.i2o_1, this.e2o_1, this.j2o_1, this.k2o_1, this.l2o_1, this.m2o_1, this.n2o_1, this.o2o_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.m25(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.l2n_1.y2o_1, $this.l2n_1.z2o_1);
    $this.m25().q2k(collector);
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
    this.q2o_1 = encodeDefaults;
    this.r2o_1 = ignoreUnknownKeys;
    this.s2o_1 = isLenient;
    this.t2o_1 = allowStructuredMapKeys;
    this.u2o_1 = prettyPrint;
    this.v2o_1 = explicitNulls;
    this.w2o_1 = prettyPrintIndent;
    this.x2o_1 = coerceInputValues;
    this.y2o_1 = useArrayPolymorphism;
    this.z2o_1 = classDiscriminator;
    this.a2p_1 = allowSpecialFloatingPointValues;
    this.b2p_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.d2p = function () {
    return this.s2o_1;
  };
  JsonConfiguration.prototype.c2p = function () {
    return this.w2o_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.q2o_1 + ', ignoreUnknownKeys=' + this.r2o_1 + ', isLenient=' + this.s2o_1 + ', ' + ('allowStructuredMapKeys=' + this.t2o_1 + ', prettyPrint=' + this.u2o_1 + ', explicitNulls=' + this.v2o_1 + ', ') + ("prettyPrintIndent='" + this.w2o_1 + "', coerceInputValues=" + this.x2o_1 + ', useArrayPolymorphism=' + this.y2o_1 + ', ') + ("classDiscriminator='" + this.z2o_1 + "', allowSpecialFloatingPointValues=" + this.a2p_1 + ')');
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
    this.g2p_1 = content;
  }
  JsonArray.prototype.g = function () {
    return this.g2p_1.g();
  };
  JsonArray.prototype.h2p = function (element) {
    return this.g2p_1.l1(element);
  };
  JsonArray.prototype.l1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.h2p(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.i2p = function (elements) {
    return this.g2p_1.m1(elements);
  };
  JsonArray.prototype.m1 = function (elements) {
    return this.i2p(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.g2p_1.h(index);
  };
  JsonArray.prototype.m = function () {
    return this.g2p_1.m();
  };
  JsonArray.prototype.d = function () {
    return this.g2p_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.g2p_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.g2p_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.g2p_1, ',', '[', ']', 0, null, null, 56, null);
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
    tmp0_apply.x5(_Char___init__impl__6a9atx(58));
    tmp0_apply.x6(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.j2p_1 = content;
  }
  JsonObject.prototype.r = function () {
    return this.j2p_1.r();
  };
  JsonObject.prototype.j2 = function () {
    return this.j2p_1.j2();
  };
  JsonObject.prototype.g = function () {
    return this.j2p_1.g();
  };
  JsonObject.prototype.k2 = function () {
    return this.j2p_1.k2();
  };
  JsonObject.prototype.z1j = function (key) {
    return this.j2p_1.c2(key);
  };
  JsonObject.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.z1j((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.a1k = function (key) {
    return this.j2p_1.i2(key);
  };
  JsonObject.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.a1k((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.m = function () {
    return this.j2p_1.m();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.j2p_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.j2p_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.j2p_1.r();
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
    return this.w1q();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.k2p_1 = isString;
    this.l2p_1 = toString(body);
  }
  JsonLiteral.prototype.w1q = function () {
    return this.l2p_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.k2p_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.l2p_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.l2p_1;
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
    if (!(this.k2p_1 === other.k2p_1))
      return false;
    if (!(this.l2p_1 === other.l2p_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.k2p_1 | 0;
    result = imul(31, result) + getStringHashCode(this.l2p_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.m2p_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.n2p_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.w1q = function () {
    return this.m2p_1;
  };
  JsonNull.prototype.o2p = function () {
    return this.n2p_1.t();
  };
  JsonNull.prototype.r2e = function (typeParamsSerializers) {
    return this.o2p();
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
    return toBooleanStrictOrNull(_this__u8e3s4.w1q());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.w1q());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.w1q());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.w1q();
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
    return toDouble(_this__u8e3s4.w1q());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.w1q();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.w1q());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.w1q());
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
    $this$buildSerialDescriptor.g25('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.g25('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.g25('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.g25('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.g25('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().p2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().q2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().r2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().s2p_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().t2p_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.u2p_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.s24 = function () {
    return this.u2p_1;
  };
  JsonElementSerializer.prototype.v2p = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.c29(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.c29(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.c29(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.t24 = function (encoder, value) {
    return this.v2p(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.u24 = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.f2p();
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
    this.w2p_1 = ListSerializer(JsonElementSerializer_getInstance()).s24();
    this.x2p_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.a26 = function () {
    return this.w2p_1.a26();
  };
  JsonArrayDescriptor.prototype.b26 = function () {
    return this.w2p_1.b26();
  };
  JsonArrayDescriptor.prototype.c26 = function () {
    return this.w2p_1.c26();
  };
  JsonArrayDescriptor.prototype.s25 = function () {
    return this.w2p_1.s25();
  };
  JsonArrayDescriptor.prototype.d26 = function () {
    return this.w2p_1.d26();
  };
  JsonArrayDescriptor.prototype.e26 = function (index) {
    return this.w2p_1.e26(index);
  };
  JsonArrayDescriptor.prototype.f26 = function (index) {
    return this.w2p_1.f26(index);
  };
  JsonArrayDescriptor.prototype.g26 = function (name) {
    return this.w2p_1.g26(name);
  };
  JsonArrayDescriptor.prototype.h26 = function (index) {
    return this.w2p_1.h26(index);
  };
  JsonArrayDescriptor.prototype.i26 = function (index) {
    return this.w2p_1.i26(index);
  };
  JsonArrayDescriptor.prototype.z25 = function () {
    return this.x2p_1;
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
    this.t2p_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.s24 = function () {
    return this.t2p_1;
  };
  JsonArraySerializer.prototype.y2p = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).t24(encoder, value);
  };
  JsonArraySerializer.prototype.t24 = function (encoder, value) {
    return this.y2p(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.u24 = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).u24(decoder));
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
    this.z2p_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).s24();
    this.a2q_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.a26 = function () {
    return this.z2p_1.a26();
  };
  JsonObjectDescriptor.prototype.b26 = function () {
    return this.z2p_1.b26();
  };
  JsonObjectDescriptor.prototype.c26 = function () {
    return this.z2p_1.c26();
  };
  JsonObjectDescriptor.prototype.s25 = function () {
    return this.z2p_1.s25();
  };
  JsonObjectDescriptor.prototype.d26 = function () {
    return this.z2p_1.d26();
  };
  JsonObjectDescriptor.prototype.e26 = function (index) {
    return this.z2p_1.e26(index);
  };
  JsonObjectDescriptor.prototype.f26 = function (index) {
    return this.z2p_1.f26(index);
  };
  JsonObjectDescriptor.prototype.g26 = function (name) {
    return this.z2p_1.g26(name);
  };
  JsonObjectDescriptor.prototype.h26 = function (index) {
    return this.z2p_1.h26(index);
  };
  JsonObjectDescriptor.prototype.i26 = function (index) {
    return this.z2p_1.i26(index);
  };
  JsonObjectDescriptor.prototype.z25 = function () {
    return this.a2q_1;
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
    this.s2p_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.s24 = function () {
    return this.s2p_1;
  };
  JsonObjectSerializer.prototype.b2q = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).t24(encoder, value);
  };
  JsonObjectSerializer.prototype.t24 = function (encoder, value) {
    return this.b2q(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.u24 = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).u24(decoder));
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
    tmp.p2p_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.s24 = function () {
    return this.p2p_1;
  };
  JsonPrimitiveSerializer.prototype.c2q = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.c29(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.c29(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.t24 = function (encoder, value) {
    return this.c2q(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.u24 = function (decoder) {
    var result = asJsonDecoder(decoder).f2p();
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
    tmp.q2p_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.s24 = function () {
    return this.q2p_1;
  };
  JsonNullSerializer.prototype.d2q = function (encoder, value) {
    verify(encoder);
    encoder.h28();
  };
  JsonNullSerializer.prototype.t24 = function (encoder, value) {
    return this.d2q(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.u24 = function (decoder) {
    verify_0(decoder);
    if (decoder.b27()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.c27();
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
    this.r2p_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.s24 = function () {
    return this.r2p_1;
  };
  JsonLiteralSerializer.prototype.e2q = function (encoder, value) {
    verify(encoder);
    if (value.k2p_1) {
      return encoder.q28(value.l2p_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.m28(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.l2p_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.r28(serializer_0(Companion_getInstance()).s24());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.m28(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.o28(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.i28(tmp3_safe_receiver);
    }
    encoder.q28(value.l2p_1);
  };
  JsonLiteralSerializer.prototype.t24 = function (encoder, value) {
    return this.e2q(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.u24 = function (decoder) {
    var result = asJsonDecoder(decoder).f2p();
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
    tmp$ret$0 = $this.f2q_1.t();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.f2q_1 = lazy_0($deferred);
  }
  defer$1.prototype.z25 = function () {
    return _get_original__l7ku1m(this).z25();
  };
  defer$1.prototype.d26 = function () {
    return _get_original__l7ku1m(this).d26();
  };
  defer$1.prototype.b26 = function () {
    return _get_original__l7ku1m(this).b26();
  };
  defer$1.prototype.h26 = function (index) {
    return _get_original__l7ku1m(this).h26(index);
  };
  defer$1.prototype.g26 = function (name) {
    return _get_original__l7ku1m(this).g26(name);
  };
  defer$1.prototype.e26 = function (index) {
    return _get_original__l7ku1m(this).e26(index);
  };
  defer$1.prototype.f26 = function (index) {
    return _get_original__l7ku1m(this).f26(index);
  };
  defer$1.prototype.i26 = function (index) {
    return _get_original__l7ku1m(this).i26(index);
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
    this.g2q_1 = writer;
    this.h2q_1 = true;
  }
  Composer.prototype.i2q = function () {
    this.h2q_1 = true;
  };
  Composer.prototype.j2q = function () {
    return Unit_getInstance();
  };
  Composer.prototype.k2q = function () {
    this.h2q_1 = false;
  };
  Composer.prototype.l2q = function () {
    return Unit_getInstance();
  };
  Composer.prototype.m2q = function (v) {
    return this.g2q_1.n2q(v);
  };
  Composer.prototype.o2q = function (v) {
    return this.g2q_1.p2q(v);
  };
  Composer.prototype.q2q = function (v) {
    return this.g2q_1.p2q(v.toString());
  };
  Composer.prototype.r2q = function (v) {
    return this.g2q_1.p2q(v.toString());
  };
  Composer.prototype.s2q = function (v) {
    return this.g2q_1.t2q(toLong_0(v));
  };
  Composer.prototype.u2q = function (v) {
    return this.g2q_1.t2q(toLong_0(v));
  };
  Composer.prototype.v2q = function (v) {
    return this.g2q_1.t2q(toLong_0(v));
  };
  Composer.prototype.w2q = function (v) {
    return this.g2q_1.t2q(v);
  };
  Composer.prototype.x2q = function (v) {
    return this.g2q_1.p2q(v.toString());
  };
  Composer.prototype.y2q = function (value) {
    return this.g2q_1.z2q(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.l2n_1.u2o_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.c2r_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.v2q = function (v) {
    if (this.c2r_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.y2q(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.o2q(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.w2q = function (v) {
    if (this.c2r_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.y2q(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.o2q(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.s2q = function (v) {
    if (this.c2r_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.y2q(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.o2q(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.u2q = function (v) {
    if (this.c2r_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.y2q(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.o2q(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.f2r_1 = json;
    this.g2r_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.i2q = function () {
    this.h2q_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.g2r_1;
    tmp0_this.g2r_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.j2q = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.g2r_1;
    tmp0_this.g2r_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.k2q = function () {
    this.h2q_1 = false;
    this.o2q('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.g2r_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.o2q(this.f2r_1.l2n_1.w2o_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.l2q = function () {
    this.m2q(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.i2r_1 = !descriptor.i26(index) ? descriptor.f26(index).s25() : false;
    return $this.i2r_1;
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
    tmp.h2r_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.i2r_1 = false;
  }
  JsonElementMarker.prototype.f2d = function (index) {
    this.h2r_1.f2d(index);
  };
  JsonElementMarker.prototype.g2d = function () {
    return this.h2r_1.g2d();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.j2r(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.z25() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.d26() + "'.\n") + get_allowStructuredMapKeysHint());
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
    if (!elementDescriptor.s25() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.d26(), ENUM_getInstance())) {
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
    var index = _this__u8e3s4.g26(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.l2n_1.b2p_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.l2r(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
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
    var last = _this__u8e3s4.b26();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.e26(i);
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
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m2r_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.b26());
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
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.h26(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.h26(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
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
    var newSize = imul($this.p2r_1, 2);
    $this.n2r_1 = copyOf($this.n2r_1, newSize);
    $this.o2r_1 = copyOf_0($this.o2r_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.n2r_1 = tmp$ret$0;
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
    tmp_0.o2r_1 = tmp_3;
    this.p2r_1 = -1;
  }
  JsonPath.prototype.q2r = function (sd) {
    var tmp0_this = this;
    tmp0_this.p2r_1 = tmp0_this.p2r_1 + 1 | 0;
    var depth = tmp0_this.p2r_1;
    if (depth === this.n2r_1.length) {
      resize(this);
    }
    this.n2r_1[depth] = sd;
  };
  JsonPath.prototype.r2r = function (index) {
    this.o2r_1[this.p2r_1] = index;
  };
  JsonPath.prototype.s2r = function (key) {
    var tmp;
    if (!(this.o2r_1[this.p2r_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.p2r_1 = tmp0_this.p2r_1 + 1 | 0;
      tmp = tmp0_this.p2r_1 === this.n2r_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.n2r_1[this.p2r_1] = key;
    this.o2r_1[this.p2r_1] = -2;
  };
  JsonPath.prototype.t2r = function () {
    if (this.o2r_1[this.p2r_1] === -2) {
      this.n2r_1[this.p2r_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.u2r = function () {
    var depth = this.p2r_1;
    if (this.o2r_1[depth] === -2) {
      this.o2r_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.p2r_1;
      tmp0_this.p2r_1 = tmp1 - 1 | 0;
    }
    if (!(this.p2r_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.p2r_1;
      tmp2_this.p2r_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.v2r = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.y6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.p2r_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.n2r_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.d26(), LIST_getInstance())) {
            if (!(this.o2r_1[index] === -1)) {
              tmp0_apply.y6('[');
              tmp0_apply.x6(this.o2r_1[index]);
              tmp0_apply.y6(']');
            }
          } else {
            var idx = this.o2r_1[index];
            if (idx >= 0) {
              tmp0_apply.y6('.');
              tmp0_apply.y6(element.h26(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.y6('[');
            tmp0_apply.y6("'");
            tmp0_apply.x6(element);
            tmp0_apply.y6("'");
            tmp0_apply.y6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.v2r();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.c29(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.e2s_1.h2s(get_TC_BEGIN_OBJ());
    if ($this.e2s_1.i2s() === get_TC_COMMA()) {
      $this.e2s_1.j2r('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.e2s_1.j2s()) {
      var key = $this.f2s_1 ? $this.e2s_1.l2s() : $this.e2s_1.k2s();
      $this.e2s_1.h2s(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.m2s();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.a(key, element);
      lastToken = $this.e2s_1.n2s();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.e2s_1.j2r('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.e2s_1.h2s(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.e2s_1.j2r('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.rh_1 = Unit_getInstance();
    tmp.sh_1 = null;
    return tmp.yh();
  }
  function readArray($this) {
    var lastToken = $this.e2s_1.n2s();
    if ($this.e2s_1.i2s() === get_TC_COMMA()) {
      $this.e2s_1.j2r('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.e2s_1.j2s()) {
      var element = $this.m2s();
      result.b(element);
      lastToken = $this.e2s_1.n2s();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.e2s_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.y2n_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.j2r(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.e2s_1.h2s(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.e2s_1.j2r('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.f2s_1 ? true : !isString) {
      tmp = $this.e2s_1.l2s();
    } else {
      tmp = $this.e2s_1.k2s();
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
    this.j2t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.o2t = function ($this$$receiver, it, $cont) {
    var tmp = this.p2t($this$$receiver, it, $cont);
    tmp.rh_1 = Unit_getInstance();
    tmp.sh_1 = null;
    return tmp.yh();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.m7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.o2t(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.yh = function () {
    var suspendResult = this.rh_1;
    $sm: do
      try {
        var tmp = this.ph_1;
        switch (tmp) {
          case 0:
            this.qh_1 = 3;
            this.m2t_1 = this.j2t_1.e2s_1.i2s();
            if (this.m2t_1 === get_TC_STRING()) {
              this.n2t_1 = readValue(this.j2t_1, true);
              this.ph_1 = 2;
              continue $sm;
            } else {
              if (this.m2t_1 === get_TC_OTHER()) {
                this.n2t_1 = readValue(this.j2t_1, false);
                this.ph_1 = 2;
                continue $sm;
              } else {
                if (this.m2t_1 === get_TC_BEGIN_OBJ()) {
                  this.ph_1 = 1;
                  suspendResult = readObject_0(this.k2t_1, this.j2t_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.m2t_1 === get_TC_BEGIN_LIST()) {
                    this.n2t_1 = readArray(this.j2t_1);
                    this.ph_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.j2t_1.e2s_1.j2r("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.n2t_1 = suspendResult;
            this.ph_1 = 2;
            continue $sm;
          case 2:
            return this.n2t_1;
          case 3:
            throw this.sh_1;
        }
      } catch ($p) {
        if (this.qh_1 === 3) {
          throw $p;
        } else {
          this.ph_1 = this.qh_1;
          this.sh_1 = $p;
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.p2t = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.j2t_1, completion);
    i.k2t_1 = $this$$receiver;
    i.l2t_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.o2t($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2s_1 = _this__u8e3s4;
    this.x2s_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.yh = function () {
    var suspendResult = this.rh_1;
    $sm: do
      try {
        var tmp = this.ph_1;
        switch (tmp) {
          case 0:
            this.qh_1 = 5;
            this.y2s_1 = this.w2s_1.e2s_1.h2s(get_TC_BEGIN_OBJ());
            if (this.w2s_1.e2s_1.i2s() === get_TC_COMMA()) {
              this.w2s_1.e2s_1.j2r('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.z2s_1 = LinkedHashMap_init_$Create$();
            this.ph_1 = 1;
            continue $sm;
          case 1:
            if (!this.w2s_1.e2s_1.j2s()) {
              this.ph_1 = 4;
              continue $sm;
            }

            this.a2t_1 = this.w2s_1.f2s_1 ? this.w2s_1.e2s_1.l2s() : this.w2s_1.e2s_1.k2s();
            this.w2s_1.e2s_1.h2s(get_TC_COLON());
            ;
            this.ph_1 = 2;
            suspendResult = this.x2s_1.e7(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.z2s_1.a(this.a2t_1, element);
            ;
            this.y2s_1 = this.w2s_1.e2s_1.n2s();
            var tmp0_subject = this.y2s_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.ph_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.ph_1 = 4;
                continue $sm;
              } else {
                this.w2s_1.e2s_1.j2r('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.ph_1 = 1;
            continue $sm;
          case 4:
            if (this.y2s_1 === get_TC_BEGIN_OBJ()) {
              this.w2s_1.e2s_1.h2s(get_TC_END_OBJ());
            } else if (this.y2s_1 === get_TC_COMMA()) {
              this.w2s_1.e2s_1.j2r('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.z2s_1);
          case 5:
            throw this.sh_1;
        }
      } catch ($p) {
        if (this.qh_1 === 5) {
          throw $p;
        } else {
          this.ph_1 = this.qh_1;
          this.sh_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.e2s_1 = lexer;
    this.f2s_1 = configuration.s2o_1;
    this.g2s_1 = 0;
  }
  JsonTreeReader.prototype.m2s = function () {
    var token = this.e2s_1.i2s();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.g2s_1 = tmp0_this.g2s_1 + 1 | 0;
      if (tmp0_this.g2s_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.g2s_1 = tmp1_this.g2s_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.e2s_1.j2r(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.a26().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.q2t_1;
    }
    return json.l2n_1.z2o_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.e2p().l2n_1.y2o_1;
    }
    if (tmp) {
      return deserializer.u24(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.s24(), _this__u8e3s4.e2p());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.f2p();
    var tmp1_cast = deserializer.s24();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.z25() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.a1k(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w1q();
    var tmp2_elvis_lhs = deserializer.x24(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.e2p();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.e2p().l2n_1.y2o_1;
    }
    if (tmp) {
      serializer.t24(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.s24(), _this__u8e3s4.e2p());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.s24().d26());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.t24(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.s24()).l1(classDiscriminator)) {
      var baseName = serializer.s24().z25();
      var actualName = actualSerializer.s24().z25();
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
    var kind = descriptor.d26();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.r2t_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sd() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.b26();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.h26(i);
        if (name === $this.s2t_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.r2t_1 = useArrayPolymorphism;
    this.s2t_1 = discriminator;
  }
  PolymorphismValidator.prototype.y2k = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.b2l = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.s24();
    checkKind_0(this, descriptor, actualClass);
    if (!this.r2t_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.c2l = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.d2l = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.k2r_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.t2t = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.k2r_1;
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
  DescriptorSchemaCache.prototype.l2r = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.u2t(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.t2t(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.u2t = function (descriptor, key) {
    var tmp0_safe_receiver = this.k2r_1.i2(descriptor);
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
    this.v2t_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.v2t_1 === unknownKey) {
      _this__u8e3s4.v2t_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.d28(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.s2n_1.i2s() === get_TC_COMMA()) {
      $this.s2n_1.j2r('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.u2n_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.u2n_1 === -1)) {
        hasComma = $this.s2n_1.x2t();
      }
    } else {
      $this.s2n_1.w2t(get_COLON());
    }
    var tmp;
    if ($this.s2n_1.j2s()) {
      if (decodingKey) {
        if ($this.u2n_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.s2n_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.y2n_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.j2r(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.s2n_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.y2n_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.j2r(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.u2n_1 = tmp0_this.u2n_1 + 1 | 0;
      tmp = tmp0_this.u2n_1;
    } else {
      if (hasComma) {
        $this.s2n_1.j2r("Expected '}', but had ',' instead", 0, null, 6, null);
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
      var tmp0_tryCoerceValue = $this.q2n_1;
      var tmp1_tryCoerceValue = descriptor.f26(index);
      var tmp;
      if (!tmp1_tryCoerceValue.s25()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.s2n_1.y2t();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.d26(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.s2n_1.z2t($this.w2n_1.s2o_1);
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
          $this.s2n_1.k2s();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.s2n_1.x2t();
    while ($this.s2n_1.j2s()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.s2n_1.w2t(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.q2n_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.w2n_1.x2o_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.s2n_1.x2t();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.x2n_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.f2d(index);
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
      $this.s2n_1.j2r('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.x2n_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g2d();
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
    if ($this.w2n_1.r2o_1 ? true : trySkip($this.v2n_1, $this, key)) {
      $this.s2n_1.b2u($this.w2n_1.s2o_1);
    } else {
      $this.s2n_1.a2u(key);
    }
    return $this.s2n_1.x2t();
  }
  function decodeListIndex($this) {
    var hasComma = $this.s2n_1.x2t();
    var tmp;
    if ($this.s2n_1.j2s()) {
      if (!($this.u2n_1 === -1) ? !hasComma : false) {
        $this.s2n_1.j2r('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.u2n_1 = tmp0_this.u2n_1 + 1 | 0;
      tmp = tmp0_this.u2n_1;
    } else {
      if (hasComma) {
        $this.s2n_1.j2r('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.w2n_1.s2o_1) {
      tmp = $this.s2n_1.d2u();
    } else {
      tmp = $this.s2n_1.c2u();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.q2n_1 = json;
    this.r2n_1 = mode;
    this.s2n_1 = lexer;
    this.t2n_1 = this.q2n_1.m25();
    this.u2n_1 = -1;
    this.v2n_1 = discriminatorHolder;
    this.w2n_1 = this.q2n_1.l2n_1;
    this.x2n_1 = this.w2n_1.v2o_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.e2p = function () {
    return this.q2n_1;
  };
  StreamingJsonDecoder.prototype.e2u = function () {
    return this.s2n_1;
  };
  StreamingJsonDecoder.prototype.m25 = function () {
    return this.t2n_1;
  };
  StreamingJsonDecoder.prototype.f2p = function () {
    return (new JsonTreeReader(this.q2n_1.l2n_1, this.s2n_1)).m2s();
  };
  StreamingJsonDecoder.prototype.o27 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.q2n_1.l2n_1.y2o_1;
      }
      if (tmp) {
        return deserializer.u24(this);
      }
      var discriminator = classDiscriminator(deserializer.s24(), this.q2n_1);
      var type = this.s2n_1.f2u(discriminator, this.w2n_1.s2o_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.x24(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.v2n_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.u24(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.p25_1, plus($p.message, ' at path: ') + this.s2n_1.z2n_1.v2r(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.p27 = function (descriptor) {
    var newMode = switchMode(this.q2n_1, descriptor);
    this.s2n_1.z2n_1.q2r(descriptor);
    this.s2n_1.w2t(newMode.i2u_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.m4_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.q2n_1, newMode, this.s2n_1, descriptor, this.v2n_1);
        break;
      default:
        var tmp_0;
        if (this.r2n_1.equals(newMode) ? this.q2n_1.l2n_1.v2o_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.q2n_1, newMode, this.s2n_1, descriptor, this.v2n_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.q27 = function (descriptor) {
    if (this.q2n_1.l2n_1.r2o_1 ? descriptor.b26() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.s2n_1.w2t(this.r2n_1.j2u_1);
    this.s2n_1.z2n_1.u2r();
  };
  StreamingJsonDecoder.prototype.b27 = function () {
    var tmp;
    var tmp0_safe_receiver = this.x2n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2r_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.s2n_1.y2t();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.c27 = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.a28 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.r2n_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.s2n_1.z2n_1.t2r();
    }
    var value = AbstractDecoder.prototype.a28.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.s2n_1.z2n_1.s2r(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.d28 = function (descriptor) {
    var tmp0_subject = this.r2n_1;
    var tmp0 = tmp0_subject.m4_1;
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
    if (!this.r2n_1.equals(WriteMode_MAP_getInstance())) {
      this.s2n_1.z2n_1.r2r(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.d27 = function () {
    var tmp;
    if (this.w2n_1.s2o_1) {
      tmp = this.s2n_1.l2u();
    } else {
      tmp = this.s2n_1.k2u();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.e27 = function () {
    var value = this.s2n_1.m2u();
    if (!value.equals(toLong_0(value.gh()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.s2n_1.j2r(tmp, 0, null, 6, null);
    }
    return value.gh();
  };
  StreamingJsonDecoder.prototype.f27 = function () {
    var value = this.s2n_1.m2u();
    if (!value.equals(toLong_0(value.hh()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.s2n_1.j2r(tmp, 0, null, 6, null);
    }
    return value.hh();
  };
  StreamingJsonDecoder.prototype.g27 = function () {
    var value = this.s2n_1.m2u();
    if (!value.equals(toLong_0(value.p6()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.s2n_1.j2r(tmp, 0, null, 6, null);
    }
    return value.p6();
  };
  StreamingJsonDecoder.prototype.h27 = function () {
    return this.s2n_1.m2u();
  };
  StreamingJsonDecoder.prototype.i27 = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.s2n_1;
      var input = tmp0_parseString.l2s();
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
          tmp0_parseString.j2r(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.q2n_1.l2n_1.a2p_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.s2n_1, result);
  };
  StreamingJsonDecoder.prototype.j27 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.s2n_1;
      var input = tmp0_parseString.l2s();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.j2r(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.q2n_1.l2n_1.a2p_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.s2n_1, result);
  };
  StreamingJsonDecoder.prototype.k27 = function () {
    var string = this.s2n_1.l2s();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.s2n_1.j2r(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.l27 = function () {
    var tmp;
    if (this.w2n_1.s2o_1) {
      tmp = this.s2n_1.d2u();
    } else {
      tmp = this.s2n_1.k2s();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.m27 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.s2n_1, this.q2n_1) : AbstractDecoder.prototype.m27.call(this, descriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.l2s();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.j2r(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.n2u_1 = lexer;
    this.o2u_1 = json.m25();
  }
  JsonDecoderForUnsignedTypes.prototype.m25 = function () {
    return this.o2u_1;
  };
  JsonDecoderForUnsignedTypes.prototype.d28 = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.g27 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n2u_1;
      var input = tmp0_parseString.l2s();
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
          tmp0_parseString.j2r(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.h27 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n2u_1;
      var input = tmp0_parseString.l2s();
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
          tmp0_parseString.j2r(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.e27 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n2u_1;
      var input = tmp0_parseString.l2s();
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
          tmp0_parseString.j2r(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.f27 = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n2u_1;
      var input = tmp0_parseString.l2s();
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
          tmp0_parseString.j2r(tmp, 0, null, 6, null);
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
    $this.w2r_1.k2q();
    $this.q28(ensureNotNull($this.d2s_1));
    $this.w2r_1.m2q(get_COLON());
    $this.w2r_1.l2q();
    $this.q28(descriptor.z25());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.w2r_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.w2r_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.w2r_1.g2q_1, $this.c2s_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.w2r_1 = composer;
    this.x2r_1 = json;
    this.y2r_1 = mode;
    this.z2r_1 = modeReuseCache;
    this.a2s_1 = this.x2r_1.m25();
    this.b2s_1 = this.x2r_1.l2n_1;
    this.c2s_1 = false;
    this.d2s_1 = null;
    var i = this.y2r_1.m4_1;
    if (!(this.z2r_1 == null)) {
      if (!(this.z2r_1[i] === null) ? true : !(this.z2r_1[i] === this)) {
        this.z2r_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.e2p = function () {
    return this.x2r_1;
  };
  StreamingJsonEncoder.prototype.m25 = function () {
    return this.a2s_1;
  };
  StreamingJsonEncoder.prototype.c29 = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e2p().l2n_1.y2o_1;
      }
      if (tmp) {
        serializer.t24(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.s24(), this.e2p());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.s24().d26());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.d2s_1 = baseClassDiscriminator;
      actualSerializer.t24(this, value);
    }
  };
  StreamingJsonEncoder.prototype.p27 = function (descriptor) {
    var newMode = switchMode(this.x2r_1, descriptor);
    if (!equals(new Char(newMode.i2u_1), new Char(get_INVALID()))) {
      this.w2r_1.m2q(newMode.i2u_1);
      this.w2r_1.i2q();
    }
    if (!(this.d2s_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.d2s_1 = null;
    }
    if (this.y2r_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.z2r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.m4_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.w2r_1, this.x2r_1, newMode, this.z2r_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.q27 = function (descriptor) {
    if (!equals(new Char(this.y2r_1.j2u_1), new Char(get_INVALID()))) {
      this.w2r_1.j2q();
      this.w2r_1.k2q();
      this.w2r_1.m2q(this.y2r_1.j2u_1);
    }
  };
  StreamingJsonEncoder.prototype.f28 = function (descriptor, index) {
    var tmp0_subject = this.y2r_1;
    var tmp0 = tmp0_subject.m4_1;
    switch (tmp0) {
      case 1:
        if (!this.w2r_1.h2q_1) {
          this.w2r_1.m2q(get_COMMA());
        }

        this.w2r_1.k2q();
        ;
        break;
      case 2:
        if (!this.w2r_1.h2q_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.w2r_1.m2q(get_COMMA());
            this.w2r_1.k2q();
            tmp_0 = true;
          } else {
            this.w2r_1.m2q(get_COLON());
            this.w2r_1.l2q();
            tmp_0 = false;
          }
          tmp.c2s_1 = tmp_0;
        } else {
          this.c2s_1 = true;
          this.w2r_1.k2q();
        }

        break;
      case 3:
        if (index === 0)
          this.c2s_1 = true;
        if (index === 1) {
          this.w2r_1.m2q(get_COMMA());
          this.w2r_1.l2q();
          this.c2s_1 = false;
        }

        break;
      default:
        if (!this.w2r_1.h2q_1) {
          this.w2r_1.m2q(get_COMMA());
        }

        this.w2r_1.k2q();
        this.q28(descriptor.h26(index));
        this.w2r_1.m2q(get_COLON());
        this.w2r_1.l2q();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.r28 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.x2r_1, this.y2r_1, null) : AbstractEncoder.prototype.r28.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.h28 = function () {
    this.w2r_1.o2q(get_NULL());
  };
  StreamingJsonEncoder.prototype.i28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.x2q(value);
    }
  };
  StreamingJsonEncoder.prototype.j28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.s2q(value);
    }
  };
  StreamingJsonEncoder.prototype.k28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.u2q(value);
    }
  };
  StreamingJsonEncoder.prototype.l28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.v2q(value);
    }
  };
  StreamingJsonEncoder.prototype.m28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.w2q(value);
    }
  };
  StreamingJsonEncoder.prototype.n28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.q2q(value);
    }
    if (!this.b2s_1.a2p_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.w2r_1.g2q_1));
    }
  };
  StreamingJsonEncoder.prototype.o28 = function (value) {
    if (this.c2s_1) {
      this.q28(value.toString());
    } else {
      this.w2r_1.r2q(value);
    }
    if (!this.b2s_1.a2p_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.w2r_1.g2q_1));
    }
  };
  StreamingJsonEncoder.prototype.p28 = function (value) {
    this.q28(toString_0(value));
  };
  StreamingJsonEncoder.prototype.q28 = function (value) {
    return this.w2r_1.y2q(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.c26() ? get_unsignedNumberDescriptors().l1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).s24(), serializer_0(Companion_getInstance()).s24(), serializer_2(Companion_getInstance_2()).s24(), serializer_3(Companion_getInstance_3()).s24()]);
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
    _this__u8e3s4.x5(get_STRING());
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
          _this__u8e3s4.vf(value, lastPos, i);
          _this__u8e3s4.y6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.vf(value, lastPos, value.length);
    } else {
      _this__u8e3s4.y6(value);
    }
    _this__u8e3s4.x5(get_STRING());
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
    var tmp0_safe_receiver = $this.r2i();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.u2u(tmp0_safe_receiver);
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
    this.r2u_1 = json;
    this.s2u_1 = value;
    this.t2u_1 = this.e2p().l2n_1;
  }
  AbstractJsonTreeDecoder.prototype.e2p = function () {
    return this.r2u_1;
  };
  AbstractJsonTreeDecoder.prototype.t = function () {
    return this.s2u_1;
  };
  AbstractJsonTreeDecoder.prototype.m25 = function () {
    return this.e2p().m25();
  };
  AbstractJsonTreeDecoder.prototype.f2p = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.o27 = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.s2i = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.p27 = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.d26();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.e2p();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.z25() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.e2p();
        var keyDescriptor = carrierDescriptor(descriptor.f26(0), tmp0_selectMapMode.m25());
        var keyKind = keyDescriptor.d26();
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
          var tmp_4 = this.e2p();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.z25() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.l2n_1.t2o_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.e2p();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.z25() + ', but had ' + getKClassFromExpression(currentObject_0));
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
        var tmp_6 = this.e2p();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.z25() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.q27 = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.b27 = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.v2u = function (tag) {
    var currentElement = this.u2u(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.w2u = function (tag) {
    return !(this.u2u(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.u2i = function (tag) {
    return this.w2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.x2u = function (tag) {
    var value = this.v2u(tag);
    if (!this.e2p().l2n_1.s2o_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.k2p_1)
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
  AbstractJsonTreeDecoder.prototype.v2i = function (tag) {
    return this.x2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.y2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().f9_1;
        if (result <= ByteCompanionObject_getInstance().g9_1 ? containsLower <= result : false) {
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
  AbstractJsonTreeDecoder.prototype.w2i = function (tag) {
    return this.y2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.z2u = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().n9_1;
        if (result <= ShortCompanionObject_getInstance().o9_1 ? containsLower <= result : false) {
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
  AbstractJsonTreeDecoder.prototype.x2i = function (tag) {
    return this.z2u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.a2v = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
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
  AbstractJsonTreeDecoder.prototype.y2i = function (tag) {
    return this.a2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.b2v = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
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
  AbstractJsonTreeDecoder.prototype.z2i = function (tag) {
    return this.b2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.c2v = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
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
    var specialFp = this.e2p().l2n_1.a2p_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.a2j = function (tag) {
    return this.c2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d2v = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
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
    var specialFp = this.e2p().l2n_1.a2p_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.b2j = function (tag) {
    return this.d2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e2v = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v2u(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.w1q());
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
  AbstractJsonTreeDecoder.prototype.c2j = function (tag) {
    return this.e2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f2v = function (tag) {
    var value = this.v2u(tag);
    if (!this.e2p().l2n_1.s2o_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.k2p_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.w1q();
  };
  AbstractJsonTreeDecoder.prototype.d2j = function (tag) {
    return this.f2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g2v = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.v2u(tag).w1q()), this.e2p()) : NamedValueDecoder.prototype.e2j.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.e2j = function (tag, inlineDescriptor) {
    return this.g2v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
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
      var tmp0_tryCoerceValue = $this.e2p();
      var tmp1_tryCoerceValue = descriptor.f26(index);
      var tmp;
      if (!tmp1_tryCoerceValue.s25()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.u2u(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.d26(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.u2u(tag);
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
    $this.q2v_1 = (!$this.e2p().l2n_1.v2o_1 ? !descriptor.i26(index) : false) ? descriptor.f26(index).s25() : false;
    return $this.q2v_1;
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
    this.m2v_1 = value;
    this.n2v_1 = polyDiscriminator;
    this.o2v_1 = polyDescriptor;
    this.p2v_1 = 0;
    this.q2v_1 = false;
  }
  JsonTreeDecoder.prototype.t = function () {
    return this.m2v_1;
  };
  JsonTreeDecoder.prototype.d28 = function (descriptor) {
    while (this.p2v_1 < descriptor.b26()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.p2v_1;
      tmp0_this.p2v_1 = tmp1 + 1 | 0;
      var name = this.m2i(descriptor, tmp1);
      var index = this.p2v_1 - 1 | 0;
      this.q2v_1 = false;
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
        tmp = !this.t2u_1.x2o_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
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
  JsonTreeDecoder.prototype.b27 = function () {
    return !this.q2v_1 ? AbstractJsonTreeDecoder.prototype.b27.call(this) : false;
  };
  JsonTreeDecoder.prototype.n2i = function (desc, index) {
    var mainName = desc.h26(index);
    if (!this.t2u_1.b2p_1)
      return mainName;
    if (this.t().j2().l1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.e2p());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.l2r(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
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
  JsonTreeDecoder.prototype.u2u = function (tag) {
    return getValue(this.t(), tag);
  };
  JsonTreeDecoder.prototype.p27 = function (descriptor) {
    if (descriptor === this.o2v_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.p27.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.q27 = function (descriptor) {
    var tmp;
    if (this.t2u_1.r2o_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.d26();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.t2u_1.b2p_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.e2p()).u2t(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.t().j2().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.l1(key) ? !(key === this.n2v_1) : false) {
        throw UnknownKeyException(key, this.t().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.w2v_1 = value;
    this.x2v_1 = this.w2v_1.g();
    this.y2v_1 = -1;
  }
  JsonTreeListDecoder.prototype.t = function () {
    return this.w2v_1;
  };
  JsonTreeListDecoder.prototype.n2i = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.u2u = function (tag) {
    return this.w2v_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.d28 = function (descriptor) {
    while (this.y2v_1 < (this.x2v_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.y2v_1;
      tmp0_this.y2v_1 = tmp1 + 1 | 0;
      return this.y2v_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.j2w_1 = value;
    this.k2w_1 = toList(this.j2w_1.j2());
    this.l2w_1 = imul(this.k2w_1.g(), 2);
    this.m2w_1 = -1;
  }
  JsonTreeMapDecoder.prototype.t = function () {
    return this.j2w_1;
  };
  JsonTreeMapDecoder.prototype.n2i = function (desc, index) {
    var i = index / 2 | 0;
    return this.k2w_1.h(i);
  };
  JsonTreeMapDecoder.prototype.d28 = function (descriptor) {
    while (this.m2w_1 < (this.l2w_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m2w_1;
      tmp0_this.m2w_1 = tmp1 + 1 | 0;
      return this.m2w_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.u2u = function (tag) {
    return (this.m2w_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.j2w_1, tag);
  };
  JsonTreeMapDecoder.prototype.q27 = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.s24())).o27(deserializer);
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
    this.i2u_1 = begin;
    this.j2u_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.d26();
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
          var keyDescriptor = carrierDescriptor(desc.f26(0), _this__u8e3s4.m25());
          var keyKind = keyDescriptor.d26();
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
            if (_this__u8e3s4.l2n_1.t2o_1) {
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
    var keyDescriptor = carrierDescriptor(mapDescriptor.f26(0), _this__u8e3s4.m25());
    var keyKind = keyDescriptor.d26();
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
      if (_this__u8e3s4.l2n_1.t2o_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.d26(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.c26()) {
      tmp = carrierDescriptor(_this__u8e3s4.f26(0), module_0);
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
    $this.n2w(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.n2w(lastPosition, currentPosition);
    var result = $this.b2o_1.toString();
    $this.b2o_1.wf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.a2o_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.a2o_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.o2w(), $this.y2n_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.p2w(currentPosition);
    if (currentPosition === -1) {
      $this.j2r('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.o2w();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.o2w(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.j2r(tmp_0, 0, null, 6, null);
    }
    $this.b2o_1.x5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.y2n_1 = startPos;
      $this.q2w();
      if (($this.y2n_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.j2r('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.y2n_1);
    }
    $this.b2o_1.x5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.j2r(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.p2w(start);
    if (current >= charSequenceLength($this.o2w()) ? true : current === -1) {
      $this.j2r('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.o2w();
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
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.l2s() + "'";
        $this.j2r(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.o2w()) - current | 0) < literalSuffix.length) {
      $this.j2r('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.o2w(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.l2s() + "'";
          $this.j2r(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.y2n_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.y2n_1 = 0;
    this.z2n_1 = new JsonPath();
    this.a2o_1 = null;
    this.b2o_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.q2w = function () {
  };
  AbstractJsonLexer.prototype.r2w = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.c2o = function () {
    var nextToken = this.n2s();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.o2w(), this.y2n_1 - 1 | 0)) + ' instead';
      this.j2r(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.h2s = function (expected) {
    var token = this.n2s();
    if (!(token === expected)) {
      this.s2w(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.w2t = function (expected) {
    this.q2w();
    var source = this.o2w();
    var cpos = this.y2n_1;
    $l$loop_0: while (true) {
      cpos = this.p2w(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.y2n_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.t2w(expected);
    }
    this.y2n_1 = cpos;
    this.t2w(expected);
  };
  AbstractJsonLexer.prototype.t2w = function (expected) {
    var tmp0_this = this;
    tmp0_this.y2n_1 = tmp0_this.y2n_1 - 1 | 0;
    if ((this.y2n_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.l2s() === 'null' : false) {
      this.u2w("Expected string literal but 'null' literal was found", this.y2n_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.s2w(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.s2w = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.y2n_1 === charSequenceLength(this.o2w()) ? true : this.y2n_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.o2w(), this.y2n_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.y2n_1 - 1 | 0;
    this.j2r(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.i2s = function () {
    var source = this.o2w();
    var cpos = this.y2n_1;
    $l$loop_0: while (true) {
      cpos = this.p2w(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.y2n_1 = cpos;
      return charToTokenClass(ch);
    }
    this.y2n_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.y2t = function () {
    var current = this.v2w();
    current = this.p2w(current);
    var len = charSequenceLength(this.o2w()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.o2w(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.o2w(), current + 4 | 0)) === 0 : false)
      return true;
    this.y2n_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.v2w = function () {
    var current = this.y2n_1;
    $l$loop_0: while (true) {
      current = this.p2w(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.o2w(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.y2n_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.z2t = function (isLenient) {
    var token = this.i2s();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.l2s();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.k2s();
    }
    var string = tmp;
    this.a2o_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.w2w = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.o2w();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.k2s = function () {
    if (!(this.a2o_1 == null)) {
      return takePeeked(this);
    }
    return this.c2u();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.p2w(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.j2r('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.n2w(lastPosition, currentPosition);
          currentPosition = this.p2w(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.j2r('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.w2w(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.y2n_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.d2u = function () {
    var result = this.l2s();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.j2r("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.l2s = function () {
    if (!(this.a2o_1 == null)) {
      return takePeeked(this);
    }
    var current = this.v2w();
    if (current >= charSequenceLength(this.o2w()) ? true : current === -1) {
      var tmp = current;
      this.j2r('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.o2w(), current));
    if (token === 1) {
      return this.k2s();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.o2w(), current));
      this.j2r(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.o2w(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.o2w())) {
        usedAppend = true;
        this.n2w(this.y2n_1, current);
        var eof = this.p2w(current);
        if (eof === -1) {
          this.y2n_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.w2w(this.y2n_1, current);
    } else {
      tmp_1 = decodedString(this, this.y2n_1, current);
    }
    var result = tmp_1;
    this.y2n_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.n2w = function (fromIndex, toIndex) {
    this.b2o_1.vf(this.o2w(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.x2w = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.j2r(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.b2u = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.i2s();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.l2s();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.i2s();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.l2s();
        } else {
          this.c2u();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.b(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.y2n_1, 'found ] instead of } at path: ' + this.z2n_1, this.o2w());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.y2n_1, 'found } instead of ] at path: ' + this.z2n_1, this.o2w());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.j2r('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.n2s();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.o2w() + "', currentPosition=" + this.y2n_1 + ')';
  };
  AbstractJsonLexer.prototype.a2u = function (key) {
    var processed = this.w2w(0, this.y2n_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.u2w("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.u2w = function (message, position, hint) {
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
    throw JsonDecodingException_0(position, message + ' at path: ' + this.z2n_1.v2r() + hintMessage, this.o2w());
  };
  AbstractJsonLexer.prototype.j2r = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.y2n_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.u2w(message, position, hint);
  };
  AbstractJsonLexer.prototype.m2u = function () {
    var current = this.v2w();
    current = this.p2w(current);
    if (current >= charSequenceLength(this.o2w()) ? true : current === -1) {
      this.j2r('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.o2w(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.o2w())) {
        this.j2r('EOF', 0, null, 6, null);
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
      var ch = charSequenceGet(this.o2w(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.j2r("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.o2w()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.j2r(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.a6(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.c6(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.b1(new Long(0, 0)) > 0) {
        this.j2r('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.j2r('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.j2r('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.o2w(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.j2r('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.y2n_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.y5();
      } else {
        this.j2r('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.k2u = function () {
    return consumeBoolean(this, this.v2w());
  };
  AbstractJsonLexer.prototype.l2u = function () {
    var current = this.v2w();
    if (current === charSequenceLength(this.o2w())) {
      this.j2r('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.o2w(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.y2n_1 === charSequenceLength(this.o2w())) {
        this.j2r('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.o2w(), this.y2n_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.j2r('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.y2n_1 = tmp0_this.y2n_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().z2w_1;
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
    return c < 117 ? CharMappings_getInstance().y2w_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.y2w_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.z2w_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.y2w_1 = charArray(117);
    this.z2w_1 = new Int8Array(126);
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
    this.e2x_1 = source;
  }
  StringJsonLexer.prototype.o2w = function () {
    return this.e2x_1;
  };
  StringJsonLexer.prototype.p2w = function (position) {
    return position < this.e2x_1.length ? position : -1;
  };
  StringJsonLexer.prototype.n2s = function () {
    var source = this.e2x_1;
    $l$loop: while (!(this.y2n_1 === -1) ? this.y2n_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.y2n_1;
      tmp0_this.y2n_1 = tmp1 + 1 | 0;
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
  StringJsonLexer.prototype.x2t = function () {
    var current = this.v2w();
    if (current === this.e2x_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.e2x_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.y2n_1 = tmp0_this.y2n_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.j2s = function () {
    var current = this.y2n_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.e2x_1.length) {
      var c = charSequenceGet(this.e2x_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.y2n_1 = current;
      return this.r2w(c);
    }
    this.y2n_1 = current;
    return false;
  };
  StringJsonLexer.prototype.v2w = function () {
    var current = this.y2n_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.e2x_1.length) {
      var c = charSequenceGet(this.e2x_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.y2n_1 = current;
    return current;
  };
  StringJsonLexer.prototype.w2t = function (expected) {
    if (this.y2n_1 === -1) {
      this.t2w(expected);
    }
    var source = this.e2x_1;
    $l$loop: while (this.y2n_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.y2n_1;
      tmp0_this.y2n_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.t2w(expected);
    }
    this.t2w(expected);
  };
  StringJsonLexer.prototype.c2u = function () {
    this.w2t(get_STRING());
    var current = this.y2n_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.e2x_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.s2w(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.e2x_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.e2x_1, this.y2n_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.y2n_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.e2x_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.f2u = function (keyToMatch, isLenient) {
    var positionSnapshot = this.y2n_1;
    try {
      if (!(this.n2s() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.c2u() : this.d2u();
      if (firstKey === keyToMatch) {
        if (!(this.n2s() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.k2s() : this.d2u();
        return result;
      }
      return null;
    }finally {
      this.y2n_1 = positionSnapshot;
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.n2n_1;
  }
  function JsonToStringWriter() {
    this.p2n_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.t2q = function (value) {
    this.p2n_1.x6(value);
  };
  JsonToStringWriter.prototype.n2q = function (char) {
    this.p2n_1.x5(char);
  };
  JsonToStringWriter.prototype.p2q = function (text) {
    this.p2n_1.y6(text);
  };
  JsonToStringWriter.prototype.z2q = function (text) {
    printQuoted(this.p2n_1, text);
  };
  JsonToStringWriter.prototype.pp = function () {
    this.p2n_1.xf();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.p2n_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.s25 = get_isNullable;
  defer$1.prototype.c26 = get_isInline;
  defer$1.prototype.a26 = get_annotations;
  PolymorphismValidator.prototype.a2l = contextual;
  StreamingJsonDecoder.prototype.b28 = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.c28 = decodeSequentially;
  StreamingJsonDecoder.prototype.e28 = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.o27 = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.b28 = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.c28 = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.e28 = decodeCollectionSize;
  StreamingJsonEncoder.prototype.d29 = encodeNotNullMark;
  StreamingJsonEncoder.prototype.e29 = beginCollection;
  AbstractJsonTreeDecoder.prototype.b28 = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.c28 = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.e28 = decodeCollectionSize;
  JsonTreeDecoder.prototype.b28 = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.c28 = decodeSequentially;
  JsonTreeDecoder.prototype.e28 = decodeCollectionSize;
  JsonTreeListDecoder.prototype.b28 = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.c28 = decodeSequentially;
  JsonTreeListDecoder.prototype.e28 = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.b28 = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.c28 = decodeSequentially;
  JsonTreeMapDecoder.prototype.e28 = decodeCollectionSize;
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
