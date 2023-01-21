(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.v8;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.w3;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var emptyList = kotlin_kotlin.$_$.q5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.tc;
  var classMeta = kotlin_kotlin.$_$.m8;
  var KProperty1 = kotlin_kotlin.$_$.ea;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.g8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.a2;
  var IllegalArgumentException = kotlin_kotlin.$_$.vb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
  var isInterface = kotlin_kotlin.$_$.e9;
  var KClass = kotlin_kotlin.$_$.ca;
  var copyToArray = kotlin_kotlin.$_$.o5;
  var Triple = kotlin_kotlin.$_$.dc;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.zb;
  var Entry = kotlin_kotlin.$_$.q4;
  var LinkedHashMap = kotlin_kotlin.$_$.n4;
  var MutableMap = kotlin_kotlin.$_$.v4;
  var Map = kotlin_kotlin.$_$.r4;
  var HashMap = kotlin_kotlin.$_$.j4;
  var LinkedHashSet = kotlin_kotlin.$_$.o4;
  var MutableSet = kotlin_kotlin.$_$.w4;
  var Set = kotlin_kotlin.$_$.x4;
  var HashSet = kotlin_kotlin.$_$.k4;
  var ArrayList = kotlin_kotlin.$_$.h4;
  var MutableList = kotlin_kotlin.$_$.t4;
  var List = kotlin_kotlin.$_$.p4;
  var Collection = kotlin_kotlin.$_$.i4;
  var equals = kotlin_kotlin.$_$.o8;
  var getStringHashCode = kotlin_kotlin.$_$.t8;
  var Iterator = kotlin_kotlin.$_$.m4;
  var Iterable = kotlin_kotlin.$_$.l4;
  var isBlank = kotlin_kotlin.$_$.ma;
  var toList = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toHashSet = kotlin_kotlin.$_$.x6;
  var toBooleanArray = kotlin_kotlin.$_$.w6;
  var withIndex = kotlin_kotlin.$_$.g7;
  var to = kotlin_kotlin.$_$.zc;
  var toMap = kotlin_kotlin.$_$.b7;
  var lazy_0 = kotlin_kotlin.$_$.uc;
  var contentEquals = kotlin_kotlin.$_$.d5;
  var until = kotlin_kotlin.$_$.ba;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.o9;
  var ensureNotNull = kotlin_kotlin.$_$.oc;
  var Long = kotlin_kotlin.$_$.xb;
  var Char = kotlin_kotlin.$_$.nb;
  var isObject = kotlin_kotlin.$_$.g9;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.p2;
  var Duration = kotlin_kotlin.$_$.kb;
  var Companion_getInstance = kotlin_kotlin.$_$.y3;
  var toIntOrNull = kotlin_kotlin.$_$.za;
  var hashCode = kotlin_kotlin.$_$.u8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var isArray = kotlin_kotlin.$_$.w8;
  var arrayIterator = kotlin_kotlin.$_$.e8;
  var asList = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var step = kotlin_kotlin.$_$.aa;
  var getValue = kotlin_kotlin.$_$.y5;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var longArray = kotlin_kotlin.$_$.k9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a4;
  var get_lastIndex = kotlin_kotlin.$_$.b6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.mc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.b1;
  var KTypeParameter = kotlin_kotlin.$_$.fa;
  var contentHashCode = kotlin_kotlin.$_$.e5;
  var fillArrayVal = kotlin_kotlin.$_$.q8;
  var booleanArray = kotlin_kotlin.$_$.f8;
  var emptyMap = kotlin_kotlin.$_$.r5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.z3;
  var isCharArray = kotlin_kotlin.$_$.z8;
  var charArray = kotlin_kotlin.$_$.i8;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var isDoubleArray = kotlin_kotlin.$_$.b9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.t3;
  var isFloatArray = kotlin_kotlin.$_$.c9;
  var isLongArray = kotlin_kotlin.$_$.f9;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.u3;
  var isIntArray = kotlin_kotlin.$_$.d9;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.v3;
  var isShortArray = kotlin_kotlin.$_$.h9;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var isByteArray = kotlin_kotlin.$_$.y8;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var isBooleanArray = kotlin_kotlin.$_$.x8;
  var coerceAtLeast = kotlin_kotlin.$_$.u9;
  var copyOf = kotlin_kotlin.$_$.i5;
  var copyOf_0 = kotlin_kotlin.$_$.k5;
  var copyOf_1 = kotlin_kotlin.$_$.l5;
  var copyOf_2 = kotlin_kotlin.$_$.g5;
  var copyOf_3 = kotlin_kotlin.$_$.n5;
  var copyOf_4 = kotlin_kotlin.$_$.f5;
  var copyOf_5 = kotlin_kotlin.$_$.j5;
  var copyOf_6 = kotlin_kotlin.$_$.h5;
  var Unit = kotlin_kotlin.$_$.ic;
  var trimIndent = kotlin_kotlin.$_$.ib;
  var equals_0 = kotlin_kotlin.$_$.ka;
  var charSequenceLength = kotlin_kotlin.$_$.k8;
  var charSequenceGet = kotlin_kotlin.$_$.j8;
  var toString_0 = kotlin_kotlin.$_$.x2;
  var titlecase = kotlin_kotlin.$_$.wa;
  var isLowerCase = kotlin_kotlin.$_$.pa;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x3;
  var mapOf = kotlin_kotlin.$_$.j6;
  var lastOrNull = kotlin_kotlin.$_$.e6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.c6;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.g3;
  var UInt = kotlin_kotlin.$_$.fc;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j3;
  var ULong = kotlin_kotlin.$_$.gc;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d3;
  var UByte = kotlin_kotlin.$_$.ec;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.m3;
  var UShort = kotlin_kotlin.$_$.hc;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.l3;
  var Annotation = kotlin_kotlin.$_$.lb;
  var get_indices = kotlin_kotlin.$_$.a6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var get_indices_0 = kotlin_kotlin.$_$.z5;
  var get_js = kotlin_kotlin.$_$.j9;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  function decodeSerializableValue(deserializer) {
    return deserializer.u24(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.a28(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.p27(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.t24(this, value);
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.y2k(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.v24(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.w24());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.x24(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.w24());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).s24();
      $this$buildSerialDescriptor.g25('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.h25_1.sd() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.g25('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.a25_1 = this$0.i25_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.h25_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.h25_1 = baseClass;
    this.i25_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.j25_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.w24 = function () {
    return this.h25_1;
  };
  PolymorphicSerializer.prototype.s24 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.j25_1.t();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.h25_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.s24();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = interfaceMeta('BinaryFormat', [SerialFormat]);
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.g() === 1 ? "Field '" + missingFields.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.p25_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializerOrNull(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function serializer(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.de();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.ce();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.u5_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.b(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.m()) {
      var tmp0_elvis_lhs = serializerOrNull_0(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.q25(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        tmp0_mapTo.b(serializer_0(_this__u8e3s4, item));
      }
      tmp$ret$0 = tmp0_mapTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.d();
      while (tmp0_iterator_0.e()) {
        var item_0 = tmp0_iterator_0.f();
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.builtinSerializer.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$2 = tmp_0;
        tmp0_mapTo_0.b(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo_0;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.h(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.h(0), serializers.h(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.h(0), serializers.h(1), serializers.h(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp_2 = typeArguments.h(0).be();
        var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.h(0));
        tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        return tmp$ret$5;
      }
      var tmp$ret$6;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$6 = copyToArray(serializers);
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull_0(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.r25(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.s24().s25()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.q25(tmp0_safe_receiver, null, 2, null);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.s24();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.x25_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.t25_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.w25_1 = original;
    this.x25_1 = kClass;
    this.y25_1 = this.w25_1.z25() + '<' + this.x25_1.sd() + '>';
  }
  ContextDescriptor.prototype.a26 = function () {
    return this.w25_1.a26();
  };
  ContextDescriptor.prototype.b26 = function () {
    return this.w25_1.b26();
  };
  ContextDescriptor.prototype.c26 = function () {
    return this.w25_1.c26();
  };
  ContextDescriptor.prototype.s25 = function () {
    return this.w25_1.s25();
  };
  ContextDescriptor.prototype.d26 = function () {
    return this.w25_1.d26();
  };
  ContextDescriptor.prototype.e26 = function (index) {
    return this.w25_1.e26(index);
  };
  ContextDescriptor.prototype.f26 = function (index) {
    return this.w25_1.f26(index);
  };
  ContextDescriptor.prototype.g26 = function (name) {
    return this.w25_1.g26(name);
  };
  ContextDescriptor.prototype.h26 = function (index) {
    return this.w25_1.h26(index);
  };
  ContextDescriptor.prototype.i26 = function (index) {
    return this.w25_1.i26(index);
  };
  ContextDescriptor.prototype.z25 = function () {
    return this.y25_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.w25_1, another.w25_1) ? another.x25_1.equals(this.x25_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.x25_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.y25_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.x25_1 + ', original: ' + this.w25_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.k26_1 = $this_elementDescriptors;
    this.j26_1 = $this_elementDescriptors.b26();
  }
  elementDescriptors$1$1.prototype.e = function () {
    return this.j26_1 > 0;
  };
  elementDescriptors$1$1.prototype.f = function () {
    var tmp = this.k26_1.b26();
    var tmp0_this = this;
    var tmp1 = tmp0_this.j26_1;
    tmp0_this.j26_1 = tmp1 - 1 | 0;
    return this.k26_1.f26(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.l26_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.d = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.l26_1);
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.b25_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.y24_1 = serialName;
    this.z24_1 = false;
    this.a25_1 = emptyList();
    this.b25_1 = ArrayList_init_$Create$_0();
    this.c25_1 = HashSet_init_$Create$();
    this.d25_1 = ArrayList_init_$Create$_0();
    this.e25_1 = ArrayList_init_$Create$_0();
    this.f25_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.m26 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.c25_1.b(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.b25_1;
    tmp1_plusAssign.b(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.d25_1;
    tmp2_plusAssign.b(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.e25_1;
    tmp3_plusAssign.b(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.f25_1;
    tmp4_plusAssign.b(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.g25 = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.m26(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.y26_1.t();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.x26_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.h26(it) + ': ' + this$0.f26(it).z25();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.n26_1 = serialName;
    this.o26_1 = kind;
    this.p26_1 = elementsCount;
    this.q26_1 = builder.a25_1;
    this.r26_1 = toHashSet(builder.b25_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.b25_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.s26_1 = tmp$ret$0;
    this.t26_1 = compactArray(builder.d25_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.e25_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.u26_1 = tmp$ret$1;
    this.v26_1 = toBooleanArray(builder.f25_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.s26_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.v2_1, item.u2_1);
      tmp0_mapTo.b(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.w26_1 = toMap(tmp$ret$4);
    this.x26_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.y26_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.z25 = function () {
    return this.n26_1;
  };
  SerialDescriptorImpl.prototype.d26 = function () {
    return this.o26_1;
  };
  SerialDescriptorImpl.prototype.b26 = function () {
    return this.p26_1;
  };
  SerialDescriptorImpl.prototype.a26 = function () {
    return this.q26_1;
  };
  SerialDescriptorImpl.prototype.z26 = function () {
    return this.r26_1;
  };
  SerialDescriptorImpl.prototype.h26 = function (index) {
    return getChecked(this.s26_1, index);
  };
  SerialDescriptorImpl.prototype.g26 = function (name) {
    var tmp0_elvis_lhs = this.w26_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.e26 = function (index) {
    return getChecked(this.u26_1, index);
  };
  SerialDescriptorImpl.prototype.f26 = function (index) {
    return getChecked(this.t26_1, index);
  };
  SerialDescriptorImpl.prototype.i26 = function (index) {
    return getChecked_0(this.v26_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z25() === other.z25())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.x26_1, tmp0__anonymous__q1qw7t.x26_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.b26() === other.b26())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.b26();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.f26(index).z25() === other.f26(index).z25())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.f26(index).d26(), other.f26(index).d26())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.p26_1);
    var tmp_0 = this.n26_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.b25_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).sd());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.a27 = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.b27 = function () {
    return true;
  };
  AbstractDecoder.prototype.c27 = function () {
    return null;
  };
  AbstractDecoder.prototype.d27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.e27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.f27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.g27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.h27 = function () {
    var tmp = this.a27();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.i27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.j27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.k27 = function () {
    var tmp = this.a27();
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.l27 = function () {
    var tmp = this.a27();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.m27 = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.n27 = function (deserializer, previousValue) {
    return this.o27(deserializer);
  };
  AbstractDecoder.prototype.p27 = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.q27 = function (descriptor) {
  };
  AbstractDecoder.prototype.r27 = function (descriptor, index) {
    return this.d27();
  };
  AbstractDecoder.prototype.s27 = function (descriptor, index) {
    return this.e27();
  };
  AbstractDecoder.prototype.t27 = function (descriptor, index) {
    return this.f27();
  };
  AbstractDecoder.prototype.u27 = function (descriptor, index) {
    return this.g27();
  };
  AbstractDecoder.prototype.v27 = function (descriptor, index) {
    return this.h27();
  };
  AbstractDecoder.prototype.w27 = function (descriptor, index) {
    return this.i27();
  };
  AbstractDecoder.prototype.x27 = function (descriptor, index) {
    return this.j27();
  };
  AbstractDecoder.prototype.y27 = function (descriptor, index) {
    return this.k27();
  };
  AbstractDecoder.prototype.z27 = function (descriptor, index) {
    return this.l27();
  };
  AbstractDecoder.prototype.a28 = function (descriptor, index, deserializer, previousValue) {
    return this.n27(deserializer, previousValue);
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.p27 = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.q27 = function (descriptor) {
  };
  AbstractEncoder.prototype.f28 = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.g28 = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.h28 = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.i28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.j28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.k28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.l28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.m28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.n28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.o28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.p28 = function (value) {
    return this.g28(new Char(value));
  };
  AbstractEncoder.prototype.q28 = function (value) {
    return this.g28(value);
  };
  AbstractEncoder.prototype.r28 = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.s28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.i28(value);
    }
  };
  AbstractEncoder.prototype.t28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.j28(value);
    }
  };
  AbstractEncoder.prototype.u28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.k28(value);
    }
  };
  AbstractEncoder.prototype.v28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.l28(value);
    }
  };
  AbstractEncoder.prototype.w28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.m28(value);
    }
  };
  AbstractEncoder.prototype.x28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.n28(value);
    }
  };
  AbstractEncoder.prototype.y28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.o28(value);
    }
  };
  AbstractEncoder.prototype.z28 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.p28(value);
    }
  };
  AbstractEncoder.prototype.a29 = function (descriptor, index, value) {
    if (this.f28(descriptor, index)) {
      this.q28(value);
    }
  };
  AbstractEncoder.prototype.b29 = function (descriptor, index, serializer, value) {
    if (this.f28(descriptor, index)) {
      this.c29(serializer, value);
    }
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.f29_1 = -1;
    this.g29_1 = -3;
  }
  Companion.prototype.h29 = function () {
    return this.f29_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.p27(descriptor);
    var result = block(composite);
    composite.q27(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.e29(descriptor, collectionSize);
    block(composite);
    composite.q27(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.p27(descriptor);
    block(composite);
    composite.q27(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.z27($this.s24(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.s24();
    return compositeDecoder.b28(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.t24 = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.s24();
    var composite = encoder.p27(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.a29(this.s24(), 0, actualSerializer.s24().z25());
    var tmp = this.s24();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.b29(tmp, 1, tmp$ret$0, value);
    composite.q27(tmp0_encodeStructure);
  };
  AbstractPolymorphicSerializer.prototype.u24 = function (decoder) {
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.s24();
    var composite = decoder.p27(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.c28()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.d28(this.s24());
        Companion_getInstance_2();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.z27(this.s24(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  var tmp$ret$1;
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                  var message = tmp$ret$1;
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              var tmp = this.s24();
              value = composite.b28(tmp, index, serializer, null, 8, null);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp_0 = tmp$ret$4;
      tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.q27(tmp0_decodeStructure);
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.x24 = function (decoder, klassName) {
    return decoder.m25().i29(this.w24(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.v24 = function (encoder, value) {
    return encoder.m25().j29(this.w24(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.sd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.sd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.k29_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.s24 = function () {
    return this.k29_1;
  };
  DurationSerializer.prototype.l29 = function (encoder, value) {
    encoder.q28(Duration__toIsoString_impl_9h6wsm(value));
  };
  DurationSerializer.prototype.t24 = function (encoder, value) {
    return this.l29(encoder, value instanceof Duration ? value.v6_1 : THROW_CCE());
  };
  DurationSerializer.prototype.m29 = function (decoder) {
    return Companion_getInstance().t6(decoder.l27());
  };
  DurationSerializer.prototype.u24 = function (decoder) {
    return new Duration(this.m29(decoder));
  };
  DurationSerializer.$metadata$ = objectMeta('DurationSerializer', [KSerializer]);
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.p29_1 = primitive.z25() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.z25 = function () {
    return this.p29_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.z25 = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.q29_1 = elementDescriptor;
    this.r29_1 = 1;
  }
  ListLikeDescriptor.prototype.d26 = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.b26 = function () {
    return this.r29_1;
  };
  ListLikeDescriptor.prototype.h26 = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.g26 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.i26 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.z25() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.e26 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.z25() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.f26 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.z25() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q29_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.q29_1, other.q29_1) ? this.z25() === other.z25() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.q29_1), 31) + getStringHashCode(this.z25()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.z25() + '(' + this.q29_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.u29_1 = serialName;
    this.v29_1 = keyDescriptor;
    this.w29_1 = valueDescriptor;
    this.x29_1 = 2;
  }
  MapLikeDescriptor.prototype.z25 = function () {
    return this.u29_1;
  };
  MapLikeDescriptor.prototype.d26 = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.b26 = function () {
    return this.x29_1;
  };
  MapLikeDescriptor.prototype.h26 = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.g26 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.i26 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.z25() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.e26 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.z25() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.f26 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.z25() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.v29_1;
        break;
      case 1:
        tmp = this.w29_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.z25() === other.z25()))
      return false;
    if (!equals(this.v29_1, other.v29_1))
      return false;
    if (!equals(this.w29_1, other.w29_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.z25());
    result = imul(31, result) + hashCode(this.v29_1) | 0;
    result = imul(31, result) + hashCode(this.w29_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.z25() + '(' + this.v29_1 + ', ' + this.w29_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.z25 = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.z25 = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.z25 = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.f2a_1 = new PrimitiveArrayDescriptor(primitiveSerializer.s24());
  }
  PrimitiveArraySerializer.prototype.s24 = function () {
    return this.f2a_1;
  };
  PrimitiveArraySerializer.prototype.g2a = function (_this__u8e3s4) {
    return _this__u8e3s4.h2a();
  };
  PrimitiveArraySerializer.prototype.i2a = function (_this__u8e3s4) {
    return _this__u8e3s4.t2();
  };
  PrimitiveArraySerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return _this__u8e3s4.nb(size);
  };
  PrimitiveArraySerializer.prototype.k2a = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.l2a = function (_this__u8e3s4) {
    return this.k2a((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.m2a = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.n2a = function () {
    return this.p2a(this.o2a());
  };
  PrimitiveArraySerializer.prototype.t2a = function (encoder, value) {
    var size = this.u2a(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.f2a_1;
    var composite = encoder.e29(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.s2a(composite, value, size);
    composite.q27(tmp0_encodeCollection);
  };
  PrimitiveArraySerializer.prototype.t24 = function (encoder, value) {
    return this.t2a(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.v2a = function (encoder, value) {
    return this.t2a(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.u24 = function (decoder) {
    return this.w2a(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.z2a = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.h2a() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.nb(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.x2a_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.v2a = function (encoder, value) {
    var size = this.u2a(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.s24();
    var composite = encoder.e29(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.l2a(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.b29(this.s24(), index, this.x2a_1, iterator.f());
      }
       while (inductionVariable < size);
    composite.q27(tmp0_encodeCollection);
  };
  CollectionLikeSerializer.prototype.t24 = function (encoder, value) {
    return this.v2a(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.y2a = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.q2a(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.q2a = function (decoder, index, builder, checkIndex) {
    var tmp = this.s24();
    this.m2a(builder, index, decoder.b28(tmp, index, this.x2a_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.e28($this.s24());
    $this.j2a(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.w2a = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.p2a(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.n2a() : tmp1_elvis_lhs;
    var startIndex = this.g2a(builder);
    var compositeDecoder = decoder.p27(this.s24());
    if (compositeDecoder.c28()) {
      this.y2a(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.d28(this.s24());
        Companion_getInstance_2();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.r2a(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.q27(this.s24());
    return this.i2a(builder);
  };
  AbstractCollectionSerializer.prototype.u24 = function (decoder) {
    return this.w2a(decoder, null);
  };
  AbstractCollectionSerializer.prototype.r2a = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.q2a(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.b2b = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  CollectionSerializer.prototype.u2a = function (_this__u8e3s4) {
    return this.b2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.c2b = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.l2a = function (_this__u8e3s4) {
    return this.c2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.e2b_1 = kClass;
    this.f2b_1 = new ArrayClassDesc(eSerializer.s24());
  }
  ReferenceArraySerializer.prototype.s24 = function () {
    return this.f2b_1;
  };
  ReferenceArraySerializer.prototype.g2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.u2a = function (_this__u8e3s4) {
    return this.g2b((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.h2b = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.l2a = function (_this__u8e3s4) {
    return this.h2b((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.n2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.i2b = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ReferenceArraySerializer.prototype.g2a = function (_this__u8e3s4) {
    return this.i2b(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.j2b = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.e2b_1);
  };
  ReferenceArraySerializer.prototype.i2a = function (_this__u8e3s4) {
    return this.j2b(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.k2b = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.p2a = function (_this__u8e3s4) {
    return this.k2b((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.l2b = function (_this__u8e3s4, size) {
    return _this__u8e3s4.nb(size);
  };
  ReferenceArraySerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return this.l2b(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.m2b = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.ua(index, element);
  };
  ReferenceArraySerializer.prototype.m2a = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.m2b(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.n2b_1 = keySerializer;
    this.o2b_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.p2b = function () {
    return this.n2b_1;
  };
  MapLikeSerializer.prototype.q2b = function () {
    return this.o2b_1;
  };
  MapLikeSerializer.prototype.y2a = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
    var step_0 = progression.e1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.q2a(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.q2a = function (decoder, index, builder, checkIndex) {
    var tmp = this.s24();
    var key = decoder.b28(tmp, index, this.n2b_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.d28(this.s24());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.c2(key)) {
      var tmp_3 = this.o2b_1.s24().d26();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.a28(this.s24(), vIndex, this.o2b_1, getValue(builder, key));
    } else {
      var tmp_4 = this.s24();
      tmp_1 = decoder.b28(tmp_4, vIndex, this.o2b_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.a(key, value);
  };
  MapLikeSerializer.prototype.v2a = function (encoder, value) {
    var size = this.u2a(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.s24();
    var composite = encoder.e29(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.l2a(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var v = tmp$ret$2;
      var tmp = this.s24();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.b29(tmp, tmp0, this.n2b_1, k);
      var tmp_0 = this.s24();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.b29(tmp_0, tmp1, this.o2b_1, v);
    }
    composite.q27(tmp0_encodeCollection);
  };
  MapLikeSerializer.prototype.t24 = function (encoder, value) {
    return this.v2a(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.t2b_1 = new HashMapClassDesc(kSerializer.s24(), vSerializer.s24());
  }
  HashMapSerializer.prototype.s24 = function () {
    return this.t2b_1;
  };
  HashMapSerializer.prototype.u2b = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashMapSerializer.prototype.u2a = function (_this__u8e3s4) {
    return this.u2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.v2b = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.r().d();
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.l2a = function (_this__u8e3s4) {
    return this.v2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.n2a = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.w2b = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  HashMapSerializer.prototype.g2a = function (_this__u8e3s4) {
    return this.w2b(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.x2b = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.i2a = function (_this__u8e3s4) {
    return this.x2b(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.y2b = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.p2a = function (_this__u8e3s4) {
    return this.y2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.z2b = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return this.z2b(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.c2c_1 = new LinkedHashMapClassDesc(kSerializer.s24(), vSerializer.s24());
  }
  LinkedHashMapSerializer.prototype.s24 = function () {
    return this.c2c_1;
  };
  LinkedHashMapSerializer.prototype.u2b = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashMapSerializer.prototype.u2a = function (_this__u8e3s4) {
    return this.u2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.v2b = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.r().d();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.l2a = function (_this__u8e3s4) {
    return this.v2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.n2a = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.d2c = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  LinkedHashMapSerializer.prototype.g2a = function (_this__u8e3s4) {
    return this.d2c(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.e2c = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.i2a = function (_this__u8e3s4) {
    return this.e2c(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.y2b = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.p2a = function (_this__u8e3s4) {
    return this.y2b((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.f2c = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return this.f2c(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.h2c_1 = new ArrayListClassDesc(element.s24());
  }
  ArrayListSerializer.prototype.s24 = function () {
    return this.h2c_1;
  };
  ArrayListSerializer.prototype.n2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.i2c = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ArrayListSerializer.prototype.g2a = function (_this__u8e3s4) {
    return this.i2c(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.j2c = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.i2a = function (_this__u8e3s4) {
    return this.j2c(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.k2c = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.p2a = function (_this__u8e3s4) {
    return this.k2c((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.l2c = function (_this__u8e3s4, size) {
    return _this__u8e3s4.nb(size);
  };
  ArrayListSerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return this.l2c(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.m2c = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.ua(index, element);
  };
  ArrayListSerializer.prototype.m2a = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.m2c(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.o2c_1 = new HashSetClassDesc(eSerializer.s24());
  }
  HashSetSerializer.prototype.s24 = function () {
    return this.o2c_1;
  };
  HashSetSerializer.prototype.n2a = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.p2c = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashSetSerializer.prototype.g2a = function (_this__u8e3s4) {
    return this.p2c(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.q2c = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.i2a = function (_this__u8e3s4) {
    return this.q2c(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.r2c = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.p2a = function (_this__u8e3s4) {
    return this.r2c((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.s2c = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return this.s2c(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.t2c = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  HashSetSerializer.prototype.m2a = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.t2c(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.v2c_1 = new LinkedHashSetClassDesc(eSerializer.s24());
  }
  LinkedHashSetSerializer.prototype.s24 = function () {
    return this.v2c_1;
  };
  LinkedHashSetSerializer.prototype.n2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.w2c = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashSetSerializer.prototype.g2a = function (_this__u8e3s4) {
    return this.w2c(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.x2c = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.i2a = function (_this__u8e3s4) {
    return this.x2c(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.r2c = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.p2a = function (_this__u8e3s4) {
    return this.r2c((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.y2c = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.j2a = function (_this__u8e3s4, size) {
    return this.y2c(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.z2c = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  LinkedHashSetSerializer.prototype.m2a = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.z2c(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.a2d_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).d7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.e2d_1[slot] = $this.e2d_1[slot].o7((new Long(1, 0)).d7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.e2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.e2d_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.fh());
          slotMarks = slotMarks.o7((new Long(1, 0)).d7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.c2d_1($this.b2d_1, index)) {
            $this.e2d_1[slot] = slotMarks;
            return index;
          }
        }
        $this.e2d_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_2();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_3();
    this.b2d_1 = descriptor;
    this.c2d_1 = readIfAbsent;
    var elementsCount = this.b2d_1.b26();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).d7(elementsCount);
      }
      tmp.d2d_1 = tmp_0;
      this.e2d_1 = Companion_getInstance_3().a2d_1;
    } else {
      this.d2d_1 = new Long(0, 0);
      this.e2d_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.f2d = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.d2d_1 = this.d2d_1.o7((new Long(1, 0)).d7(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.g2d = function () {
    var elementsCount = this.b2d_1.b26();
    while (!this.d2d_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.d2d_1.fh());
      this.d2d_1 = this.d2d_1.o7((new Long(1, 0)).d7(index));
      if (this.c2d_1(this.b2d_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_2();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.t2d_1 = true;
  }
  InlineClassDescriptor.prototype.c26 = function () {
    return this.t2d_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z25() === other.z25())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.t2d_1 ? contentEquals(this.g2e(), tmp0__anonymous__q1qw7t.g2e()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.b26() === other.b26())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.b26();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.f26(index).z25() === other.f26(index).z25())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.f26(index).d26(), other.f26(index).d26())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.i2e_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.j2e = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.i2e_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.s24 = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.t24 = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.u24 = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function SerialDescriptorForNullable(original) {
    this.t25_1 = original;
    this.u25_1 = this.t25_1.z25() + '?';
    this.v25_1 = cachedSerialNames(this.t25_1);
  }
  SerialDescriptorForNullable.prototype.a26 = function () {
    return this.t25_1.a26();
  };
  SerialDescriptorForNullable.prototype.b26 = function () {
    return this.t25_1.b26();
  };
  SerialDescriptorForNullable.prototype.c26 = function () {
    return this.t25_1.c26();
  };
  SerialDescriptorForNullable.prototype.d26 = function () {
    return this.t25_1.d26();
  };
  SerialDescriptorForNullable.prototype.e26 = function (index) {
    return this.t25_1.e26(index);
  };
  SerialDescriptorForNullable.prototype.f26 = function (index) {
    return this.t25_1.f26(index);
  };
  SerialDescriptorForNullable.prototype.g26 = function (name) {
    return this.t25_1.g26(name);
  };
  SerialDescriptorForNullable.prototype.h26 = function (index) {
    return this.t25_1.h26(index);
  };
  SerialDescriptorForNullable.prototype.i26 = function (index) {
    return this.t25_1.i26(index);
  };
  SerialDescriptorForNullable.prototype.z25 = function () {
    return this.u25_1;
  };
  SerialDescriptorForNullable.prototype.z26 = function () {
    return this.v25_1;
  };
  SerialDescriptorForNullable.prototype.s25 = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.t25_1, other.t25_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.t25_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.t25_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function NullableSerializer(serializer) {
    this.l2e_1 = serializer;
    this.m2e_1 = new SerialDescriptorForNullable(this.l2e_1.s24());
  }
  NullableSerializer.prototype.s24 = function () {
    return this.m2e_1;
  };
  NullableSerializer.prototype.n2e = function (encoder, value) {
    if (!(value == null)) {
      encoder.d29();
      encoder.c29(this.l2e_1, value);
    } else {
      encoder.h28();
    }
  };
  NullableSerializer.prototype.t24 = function (encoder, value) {
    return this.n2e(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.u24 = function (decoder) {
    return decoder.b27() ? decoder.o27(this.l2e_1) : decoder.c27();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.l2e_1, other.l2e_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.l2e_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.a25_1 = this$0.p2e_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.o2e_1 = objectInstance;
    this.p2e_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q2e_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.s24 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.q2e_1.t();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.t24 = function (encoder, value) {
    encoder.p27(this.s24()).q27(this.s24());
  };
  ObjectSerializer.prototype.u24 = function (decoder) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.s24();
    var composite = decoder.p27(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.d28(this.s24());
      Companion_getInstance_2();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.q27(tmp0_decodeStructure);
    tmp$ret$1 = result;
    return this.o2e_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.s24();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.m();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_hashCode = selector(element);
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$1 = tmp + tmp$ret$0 | 0;
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return tmp$ret$2;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.z26();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.b26());
    var inductionVariable = 0;
    var last = _this__u8e3s4.b26();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.h26(i);
        result.b(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.sd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.be();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.h26(i);
          missingFields.b(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.z25());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.z25());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.z25();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.d26();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.d2e_1.t();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.f2e_1.t();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.y2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.y2d_1[i];
        indices.a(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.v2d_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2e();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.v2d_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2e();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.s24();
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.g2e());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.h26(i) + ': ' + this$0.f26(i).z25();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.u2d_1 = serialName;
    this.v2d_1 = generatedSerializer;
    this.w2d_1 = elementsCount;
    this.x2d_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.w2d_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.y2d_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.w2d_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.z2d_1 = tmp$ret$2;
    this.a2e_1 = null;
    this.b2e_1 = booleanArray(this.w2d_1);
    this.c2e_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.d2e_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.e2e_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.f2e_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.z25 = function () {
    return this.u2d_1;
  };
  PluginGeneratedSerialDescriptor.prototype.b26 = function () {
    return this.w2d_1;
  };
  PluginGeneratedSerialDescriptor.prototype.d26 = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.a26 = function () {
    var tmp0_elvis_lhs = this.a2e_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.z26 = function () {
    return this.c2e_1.j2();
  };
  PluginGeneratedSerialDescriptor.prototype.g2e = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.e2e_1.t();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.h2e = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.x2d_1 = tmp0_this.x2d_1 + 1 | 0;
    this.y2d_1[tmp0_this.x2d_1] = name;
    this.b2e_1[this.x2d_1] = isOptional;
    this.z2d_1[this.x2d_1] = null;
    if (this.x2d_1 === (this.w2d_1 - 1 | 0)) {
      this.c2e_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.f26 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).s24();
  };
  PluginGeneratedSerialDescriptor.prototype.i26 = function (index) {
    return getChecked_0(this.b2e_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.e26 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.z2d_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.h26 = function (index) {
    return getChecked(this.y2d_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.g26 = function (name) {
    var tmp0_elvis_lhs = this.c2e_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z25() === other.z25())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.g2e(), tmp0__anonymous__q1qw7t.g2e());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.b26() === other.b26())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.b26();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.f26(index).z25() === other.f26(index).z25())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.f26(index).d26(), other.f26(index).d26())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.w2d_1);
    var tmp_0 = this.z25() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.g2e();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_1()));
  }
  CharArraySerializer_0.prototype.u2e = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.u2e((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.v2e = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.v2e((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.o2a = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.w2e = function (decoder, index, builder, checkIndex) {
    builder.z2e(decoder.y27(this.f2a_1, index));
  };
  CharArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.w2e(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.a2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.z28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.a2f(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.d2f = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.d2f((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.e2f = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.e2f((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.o2a = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.f2f = function (decoder, index, builder, checkIndex) {
    builder.i2f(decoder.x27(this.f2a_1, index));
  };
  DoubleArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.f2f(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.j2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.y28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.j2f(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.m2f = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.m2f((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.n2f = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.n2f((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.o2a = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.o2f = function (decoder, index, builder, checkIndex) {
    builder.r2f(decoder.w27(this.f2a_1, index));
  };
  FloatArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.o2f(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.s2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.x28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.s2f(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.v2f = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.v2f((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.w2f = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.w2f((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.o2a = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.x2f = function (decoder, index, builder, checkIndex) {
    builder.a2g(decoder.v27(this.f2a_1, index));
  };
  LongArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.x2f(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.b2g = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.w28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.b2g(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.e2g = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.e2g((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.f2g = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.f2g((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.o2a = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.g2g = function (decoder, index, builder, checkIndex) {
    builder.j2g(decoder.u27(this.f2a_1, index));
  };
  IntArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.g2g(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.k2g = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.v28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.k2g(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.n2g = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.n2g((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.o2g = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.o2g((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.o2a = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.p2g = function (decoder, index, builder, checkIndex) {
    builder.s2g(decoder.t27(this.f2a_1, index));
  };
  ShortArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.p2g(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.t2g = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.t2g(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.w2g = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.w2g((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.x2g = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.x2g((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.o2a = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.y2g = function (decoder, index, builder, checkIndex) {
    builder.b2h(decoder.s27(this.f2a_1, index));
  };
  ByteArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.y2g(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.c2h = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.t28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.c2h(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.f2h = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.u2a = function (_this__u8e3s4) {
    return this.f2h((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.g2h = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.p2a = function (_this__u8e3s4) {
    return this.g2h((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.o2a = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.h2h = function (decoder, index, builder, checkIndex) {
    builder.k2h(decoder.r27(this.f2a_1, index));
  };
  BooleanArraySerializer_0.prototype.q2a = function (decoder, index, builder, checkIndex) {
    return this.h2h(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.l2h = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.s28(this.f2a_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.s2a = function (encoder, content, size) {
    return this.l2h(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x2e_1 = bufferWithData;
    this.y2e_1 = bufferWithData.length;
    this.nb(10);
  }
  CharArrayBuilder.prototype.h2a = function () {
    return this.y2e_1;
  };
  CharArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.x2e_1.length < requiredCapacity)
      this.x2e_1 = copyOf(this.x2e_1, coerceAtLeast(requiredCapacity, imul(this.x2e_1.length, 2)));
  };
  CharArrayBuilder.prototype.z2e = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.x2e_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.y2e_1;
    tmp0_this.y2e_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.t2 = function () {
    return copyOf(this.x2e_1, this.y2e_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g2f_1 = bufferWithData;
    this.h2f_1 = bufferWithData.length;
    this.nb(10);
  }
  DoubleArrayBuilder.prototype.h2a = function () {
    return this.h2f_1;
  };
  DoubleArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.g2f_1.length < requiredCapacity)
      this.g2f_1 = copyOf_0(this.g2f_1, coerceAtLeast(requiredCapacity, imul(this.g2f_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.i2f = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.g2f_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.h2f_1;
    tmp0_this.h2f_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.t2 = function () {
    return copyOf_0(this.g2f_1, this.h2f_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2f_1 = bufferWithData;
    this.q2f_1 = bufferWithData.length;
    this.nb(10);
  }
  FloatArrayBuilder.prototype.h2a = function () {
    return this.q2f_1;
  };
  FloatArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.p2f_1.length < requiredCapacity)
      this.p2f_1 = copyOf_1(this.p2f_1, coerceAtLeast(requiredCapacity, imul(this.p2f_1.length, 2)));
  };
  FloatArrayBuilder.prototype.r2f = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.p2f_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.q2f_1;
    tmp0_this.q2f_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.t2 = function () {
    return copyOf_1(this.p2f_1, this.q2f_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y2f_1 = bufferWithData;
    this.z2f_1 = bufferWithData.length;
    this.nb(10);
  }
  LongArrayBuilder.prototype.h2a = function () {
    return this.z2f_1;
  };
  LongArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.y2f_1.length < requiredCapacity)
      this.y2f_1 = copyOf_2(this.y2f_1, coerceAtLeast(requiredCapacity, imul(this.y2f_1.length, 2)));
  };
  LongArrayBuilder.prototype.a2g = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.y2f_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.z2f_1;
    tmp0_this.z2f_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.t2 = function () {
    return copyOf_2(this.y2f_1, this.z2f_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h2g_1 = bufferWithData;
    this.i2g_1 = bufferWithData.length;
    this.nb(10);
  }
  IntArrayBuilder.prototype.h2a = function () {
    return this.i2g_1;
  };
  IntArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.h2g_1.length < requiredCapacity)
      this.h2g_1 = copyOf_3(this.h2g_1, coerceAtLeast(requiredCapacity, imul(this.h2g_1.length, 2)));
  };
  IntArrayBuilder.prototype.j2g = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.h2g_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2g_1;
    tmp0_this.i2g_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.t2 = function () {
    return copyOf_3(this.h2g_1, this.i2g_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q2g_1 = bufferWithData;
    this.r2g_1 = bufferWithData.length;
    this.nb(10);
  }
  ShortArrayBuilder.prototype.h2a = function () {
    return this.r2g_1;
  };
  ShortArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.q2g_1.length < requiredCapacity)
      this.q2g_1 = copyOf_4(this.q2g_1, coerceAtLeast(requiredCapacity, imul(this.q2g_1.length, 2)));
  };
  ShortArrayBuilder.prototype.s2g = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.q2g_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r2g_1;
    tmp0_this.r2g_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.t2 = function () {
    return copyOf_4(this.q2g_1, this.r2g_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z2g_1 = bufferWithData;
    this.a2h_1 = bufferWithData.length;
    this.nb(10);
  }
  ByteArrayBuilder.prototype.h2a = function () {
    return this.a2h_1;
  };
  ByteArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.z2g_1.length < requiredCapacity)
      this.z2g_1 = copyOf_5(this.z2g_1, coerceAtLeast(requiredCapacity, imul(this.z2g_1.length, 2)));
  };
  ByteArrayBuilder.prototype.b2h = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.z2g_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.a2h_1;
    tmp0_this.a2h_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.t2 = function () {
    return copyOf_5(this.z2g_1, this.a2h_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i2h_1 = bufferWithData;
    this.j2h_1 = bufferWithData.length;
    this.nb(10);
  }
  BooleanArrayBuilder.prototype.h2a = function () {
    return this.j2h_1;
  };
  BooleanArrayBuilder.prototype.nb = function (requiredCapacity) {
    if (this.i2h_1.length < requiredCapacity)
      this.i2h_1 = copyOf_6(this.i2h_1, coerceAtLeast(requiredCapacity, imul(this.i2h_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.k2h = function (c) {
    this.z2a(0, 1, null);
    var tmp = this.i2h_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.j2h_1;
    tmp0_this.j2h_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.t2 = function () {
    return copyOf_6(this.i2h_1, this.j2h_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.m2h_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.s24 = function () {
    return this.m2h_1;
  };
  StringSerializer.prototype.n2h = function (encoder, value) {
    return encoder.q28(value);
  };
  StringSerializer.prototype.t24 = function (encoder, value) {
    return this.n2h(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.u24 = function (decoder) {
    return decoder.l27();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.o2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.s24 = function () {
    return this.o2h_1;
  };
  CharSerializer.prototype.p2h = function (encoder, value) {
    return encoder.p28(value);
  };
  CharSerializer.prototype.t24 = function (encoder, value) {
    return this.p2h(encoder, value instanceof Char ? value.i1_1 : THROW_CCE());
  };
  CharSerializer.prototype.q2h = function (decoder) {
    return decoder.k27();
  };
  CharSerializer.prototype.u24 = function (decoder) {
    return new Char(this.q2h(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.r2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.s24 = function () {
    return this.r2h_1;
  };
  DoubleSerializer.prototype.s2h = function (encoder, value) {
    return encoder.o28(value);
  };
  DoubleSerializer.prototype.t24 = function (encoder, value) {
    return this.s2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.u24 = function (decoder) {
    return decoder.j27();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.t2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.s24 = function () {
    return this.t2h_1;
  };
  FloatSerializer.prototype.u2h = function (encoder, value) {
    return encoder.n28(value);
  };
  FloatSerializer.prototype.t24 = function (encoder, value) {
    return this.u2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.u24 = function (decoder) {
    return decoder.i27();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.v2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.s24 = function () {
    return this.v2h_1;
  };
  LongSerializer.prototype.w2h = function (encoder, value) {
    return encoder.m28(value);
  };
  LongSerializer.prototype.t24 = function (encoder, value) {
    return this.w2h(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.u24 = function (decoder) {
    return decoder.h27();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.x2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.s24 = function () {
    return this.x2h_1;
  };
  IntSerializer.prototype.y2h = function (encoder, value) {
    return encoder.l28(value);
  };
  IntSerializer.prototype.t24 = function (encoder, value) {
    return this.y2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.u24 = function (decoder) {
    return decoder.g27();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.z2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.s24 = function () {
    return this.z2h_1;
  };
  ShortSerializer.prototype.a2i = function (encoder, value) {
    return encoder.k28(value);
  };
  ShortSerializer.prototype.t24 = function (encoder, value) {
    return this.a2i(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.u24 = function (decoder) {
    return decoder.f27();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.b2i_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.s24 = function () {
    return this.b2i_1;
  };
  ByteSerializer.prototype.c2i = function (encoder, value) {
    return encoder.j28(value);
  };
  ByteSerializer.prototype.t24 = function (encoder, value) {
    return this.c2i(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.u24 = function (decoder) {
    return decoder.e27();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.d2i_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.s24 = function () {
    return this.d2i_1;
  };
  BooleanSerializer.prototype.e2i = function (encoder, value) {
    return encoder.i28(value);
  };
  BooleanSerializer.prototype.t24 = function (encoder, value) {
    return this.e2i(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.u24 = function (decoder) {
    return decoder.d27();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.f2i_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.s24 = function () {
    return this.f2i_1.s24();
  };
  UnitSerializer.prototype.g2i = function (decoder) {
    this.f2i_1.u24(decoder);
  };
  UnitSerializer.prototype.u24 = function (decoder) {
    this.g2i(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.h2i = function (encoder, value) {
    this.f2i_1.t24(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.t24 = function (encoder, value) {
    return this.h2i(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.i2i_1 = serialName;
    this.j2i_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.z25 = function () {
    return this.i2i_1;
  };
  PrimitiveSerialDescriptor_0.prototype.d26 = function () {
    return this.j2i_1;
  };
  PrimitiveSerialDescriptor_0.prototype.b26 = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.h26 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.g26 = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.i26 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.f26 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.e26 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.i2i_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().j2();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.sd()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().i2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().lf(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().of(), CharArraySerializer()), to(PrimitiveClasses_getInstance().jf(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().uf(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().if(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().tf(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().sf(), LongArraySerializer()), to(PrimitiveClasses_getInstance().hf(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().rf(), IntArraySerializer()), to(PrimitiveClasses_getInstance().gf(), serializer_7(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().qf(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().ff(), serializer_8(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().pf(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().ef(), serializer_9(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().nf(), BooleanArraySerializer()), to(getKClass(Unit), serializer_10(Unit_getInstance())), to(getKClass(Duration), serializer_11(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.m2i = function (_this__u8e3s4, index) {
    return this.o2i(this.n2i(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.o2i = function (nestedName) {
    var tmp0_elvis_lhs = this.r2i();
    return this.s2i(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.n2i = function (desc, index) {
    return desc.h26(index);
  };
  NamedValueDecoder.prototype.s2i = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.f2j(tag);
    var r = block();
    if (!$this.q2i_1) {
      $this.g2j();
    }
    $this.q2i_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.n27($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.p2i_1 = tmp$ret$0;
    this.q2i_1 = false;
  }
  TaggedDecoder.prototype.m25 = function () {
    return EmptySerializersModule_0();
  };
  TaggedDecoder.prototype.t2i = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.u2i = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.v2i = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.w2i = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.x2i = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.y2i = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.z2i = function (tag) {
    var tmp = this.t2i(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.a2j = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.b2j = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.c2j = function (tag) {
    var tmp = this.t2i(tag);
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.d2j = function (tag) {
    var tmp = this.t2i(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.e2j = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.f2j(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.n27 = function (deserializer, previousValue) {
    return this.o27(deserializer);
  };
  TaggedDecoder.prototype.m27 = function (descriptor) {
    return this.e2j(this.g2j(), descriptor);
  };
  TaggedDecoder.prototype.b27 = function () {
    var tmp0_elvis_lhs = this.r2i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.u2i(currentTag);
  };
  TaggedDecoder.prototype.c27 = function () {
    return null;
  };
  TaggedDecoder.prototype.d27 = function () {
    return this.v2i(this.g2j());
  };
  TaggedDecoder.prototype.e27 = function () {
    return this.w2i(this.g2j());
  };
  TaggedDecoder.prototype.f27 = function () {
    return this.x2i(this.g2j());
  };
  TaggedDecoder.prototype.g27 = function () {
    return this.y2i(this.g2j());
  };
  TaggedDecoder.prototype.h27 = function () {
    return this.z2i(this.g2j());
  };
  TaggedDecoder.prototype.i27 = function () {
    return this.a2j(this.g2j());
  };
  TaggedDecoder.prototype.j27 = function () {
    return this.b2j(this.g2j());
  };
  TaggedDecoder.prototype.k27 = function () {
    return this.c2j(this.g2j());
  };
  TaggedDecoder.prototype.l27 = function () {
    return this.d2j(this.g2j());
  };
  TaggedDecoder.prototype.p27 = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.q27 = function (descriptor) {
  };
  TaggedDecoder.prototype.r27 = function (descriptor, index) {
    return this.v2i(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.s27 = function (descriptor, index) {
    return this.w2i(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.t27 = function (descriptor, index) {
    return this.x2i(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.u27 = function (descriptor, index) {
    return this.y2i(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.v27 = function (descriptor, index) {
    return this.z2i(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.w27 = function (descriptor, index) {
    return this.a2j(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.x27 = function (descriptor, index) {
    return this.b2j(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.y27 = function (descriptor, index) {
    return this.c2j(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.z27 = function (descriptor, index) {
    return this.d2j(this.m2i(descriptor, index));
  };
  TaggedDecoder.prototype.a28 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.m2i(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.r2i = function () {
    return lastOrNull(this.p2i_1);
  };
  TaggedDecoder.prototype.f2j = function (name) {
    this.p2i_1.b(name);
  };
  TaggedDecoder.prototype.g2j = function () {
    var r = this.p2i_1.k3(get_lastIndex_0(this.p2i_1));
    this.q2i_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.h2j_1 = key;
    this.i2j_1 = value;
  }
  MapEntry.prototype.s = function () {
    return this.h2j_1;
  };
  MapEntry.prototype.t = function () {
    return this.i2j_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.h2j_1 + ', value=' + this.i2j_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.h2j_1 == null ? 0 : hashCode(this.h2j_1);
    result = imul(result, 31) + (this.i2j_1 == null ? 0 : hashCode(this.i2j_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.h2j_1, tmp0_other_with_cast.h2j_1))
      return false;
    if (!equals(this.i2j_1, tmp0_other_with_cast.i2j_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.s24();
      $this$buildSerialDescriptor.g25('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.s24();
      $this$buildSerialDescriptor.g25('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.l2j_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.s24 = function () {
    return this.l2j_1;
  };
  MapEntrySerializer_0.prototype.m2j = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  MapEntrySerializer_0.prototype.n2j = function (_this__u8e3s4) {
    return this.m2j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.o2j = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  MapEntrySerializer_0.prototype.p2j = function (_this__u8e3s4) {
    return this.o2j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.q2j = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.s24();
      $this$buildClassSerialDescriptor.g25('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.s24();
      $this$buildClassSerialDescriptor.g25('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.w2j_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.s24 = function () {
    return this.w2j_1;
  };
  PairSerializer_0.prototype.x2j = function (_this__u8e3s4) {
    return _this__u8e3s4.g3_1;
  };
  PairSerializer_0.prototype.n2j = function (_this__u8e3s4) {
    return this.x2j(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.y2j = function (_this__u8e3s4) {
    return _this__u8e3s4.h3_1;
  };
  PairSerializer_0.prototype.p2j = function (_this__u8e3s4) {
    return this.y2j(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.q2j = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.b28($this.c2k_1, 0, $this.z2j_1, null, 8, null);
    var b = composite.b28($this.c2k_1, 1, $this.a2k_1, null, 8, null);
    var c = composite.b28($this.c2k_1, 2, $this.b2k_1, null, 8, null);
    composite.q27($this.c2k_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.d28($this.c2k_1);
      Companion_getInstance_2();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.b28($this.c2k_1, 0, $this.z2j_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.b28($this.c2k_1, 1, $this.a2k_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.b28($this.c2k_1, 2, $this.b2k_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.q27($this.c2k_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.z2j_1.s24();
      $this$buildClassSerialDescriptor.g25('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.a2k_1.s24();
      $this$buildClassSerialDescriptor.g25('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.b2k_1.s24();
      $this$buildClassSerialDescriptor.g25('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.z2j_1 = aSerializer;
    this.a2k_1 = bSerializer;
    this.b2k_1 = cSerializer;
    var tmp = this;
    tmp.c2k_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.s24 = function () {
    return this.c2k_1;
  };
  TripleSerializer_0.prototype.d2k = function (encoder, value) {
    var structuredEncoder = encoder.p27(this.c2k_1);
    structuredEncoder.b29(this.c2k_1, 0, this.z2j_1, value.z7_1);
    structuredEncoder.b29(this.c2k_1, 1, this.a2k_1, value.a8_1);
    structuredEncoder.b29(this.c2k_1, 2, this.b2k_1, value.b8_1);
    structuredEncoder.q27(this.c2k_1);
  };
  TripleSerializer_0.prototype.t24 = function (encoder, value) {
    return this.d2k(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.u24 = function (decoder) {
    var composite = decoder.p27(this.c2k_1);
    if (composite.c28()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.r2j_1 = keySerializer;
    this.s2j_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.t2j = function (encoder, value) {
    var structuredEncoder = encoder.p27(this.s24());
    structuredEncoder.b29(this.s24(), 0, this.r2j_1, this.n2j(value));
    structuredEncoder.b29(this.s24(), 1, this.s2j_1, this.p2j(value));
    structuredEncoder.q27(this.s24());
  };
  KeyValueSerializer.prototype.t24 = function (encoder, value) {
    return this.t2j(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.u24 = function (decoder) {
    var composite = decoder.p27(this.s24());
    if (composite.c28()) {
      var tmp = this.s24();
      var key = composite.b28(tmp, 0, this.r2j_1, null, 8, null);
      var tmp_0 = this.s24();
      var value = composite.b28(tmp_0, 1, this.s2j_1, null, 8, null);
      return this.q2j(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.d28(this.s24());
      Companion_getInstance_2();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.s24();
          key_0 = composite.b28(tmp_1, 0, this.r2j_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.s24();
            value_0 = composite.b28(tmp_2, 1, this.s2j_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.q27(this.s24());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.q2j(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.e2k_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.s24 = function () {
    return this.e2k_1;
  };
  UIntSerializer.prototype.f2k = function (encoder, value) {
    var tmp = encoder.r28(this.e2k_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.l28(tmp$ret$0);
  };
  UIntSerializer.prototype.t24 = function (encoder, value) {
    return this.f2k(encoder, value instanceof UInt ? value.m8_1 : THROW_CCE());
  };
  UIntSerializer.prototype.g2k = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.m27(this.e2k_1).g27();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.u24 = function (decoder) {
    return new UInt(this.g2k(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.h2k_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_0()));
  }
  ULongSerializer.prototype.s24 = function () {
    return this.h2k_1;
  };
  ULongSerializer.prototype.i2k = function (encoder, value) {
    var tmp = encoder.r28(this.h2k_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.m28(tmp$ret$0);
  };
  ULongSerializer.prototype.t24 = function (encoder, value) {
    return this.i2k(encoder, value instanceof ULong ? value.s8_1 : THROW_CCE());
  };
  ULongSerializer.prototype.j2k = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.m27(this.h2k_1).h27();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  ULongSerializer.prototype.u24 = function (decoder) {
    return new ULong(this.j2k(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.k2k_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_8(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.s24 = function () {
    return this.k2k_1;
  };
  UByteSerializer.prototype.l2k = function (encoder, value) {
    var tmp = encoder.r28(this.k2k_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.j28(tmp$ret$0);
  };
  UByteSerializer.prototype.t24 = function (encoder, value) {
    return this.l2k(encoder, value instanceof UByte ? value.g8_1 : THROW_CCE());
  };
  UByteSerializer.prototype.m2k = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.m27(this.k2k_1).e27();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  UByteSerializer.prototype.u24 = function (decoder) {
    return new UByte(this.m2k(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.n2k_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.s24 = function () {
    return this.n2k_1;
  };
  UShortSerializer.prototype.o2k = function (encoder, value) {
    var tmp = encoder.r28(this.n2k_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.k28(tmp$ret$0);
  };
  UShortSerializer.prototype.t24 = function (encoder, value) {
    return this.o2k(encoder, value instanceof UShort ? value.y8_1 : THROW_CCE());
  };
  UShortSerializer.prototype.p2k = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.m27(this.n2k_1).f27();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  UShortSerializer.prototype.u24 = function (decoder) {
    return new UShort(this.p2k(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.q25 = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.r25(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.r2k_1 = class2ContextualFactory;
    this.s2k_1 = polyBase2Serializers;
    this.t2k_1 = polyBase2DefaultSerializerProvider;
    this.u2k_1 = polyBase2NamedSerializers;
    this.v2k_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.j29 = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.s2k_1.i2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.t2k_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.i29 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.u2k_1.i2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).i2(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.v2k_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.r25 = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.r2k_1.i2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2k(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.q2k = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.r2k_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.r().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.z2k_1;
        collector.a2l(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.y2k(kclass, serial.x2k_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.s2k_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.r().d();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.s();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.t();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.r().d();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.s();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.t();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.b2l(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.t2k_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.r().d();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.e()) {
      var element_2 = tmp0_iterator_2.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.s();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.t();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.c2l(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.v2k_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.r().d();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.e()) {
      var element_3 = tmp0_iterator_3.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.s();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.t();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.d2l(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless() {
  }
  Argless.prototype.e2l = function () {
    return this.z2k_1;
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments() {
  }
  WithTypeArguments.prototype.f2l = function () {
    return this.x2k_1;
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.g2l_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.g2l_1.equals(tmp0_other_with_cast.g2l_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.g2l_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.g2l_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.td(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().kf());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.r2e(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.sd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.s25 = get_isNullable;
  SerialDescriptorImpl.prototype.c26 = get_isInline;
  AbstractDecoder.prototype.b28 = decodeSerializableElement$default;
  AbstractDecoder.prototype.o27 = decodeSerializableValue;
  AbstractDecoder.prototype.c28 = decodeSequentially;
  AbstractDecoder.prototype.e28 = decodeCollectionSize;
  AbstractEncoder.prototype.d29 = encodeNotNullMark;
  AbstractEncoder.prototype.e29 = beginCollection;
  AbstractEncoder.prototype.c29 = encodeSerializableValue;
  ListLikeDescriptor.prototype.s25 = get_isNullable;
  ListLikeDescriptor.prototype.c26 = get_isInline;
  ListLikeDescriptor.prototype.a26 = get_annotations;
  PrimitiveArrayDescriptor.prototype.s25 = get_isNullable;
  PrimitiveArrayDescriptor.prototype.c26 = get_isInline;
  PrimitiveArrayDescriptor.prototype.a26 = get_annotations;
  ArrayClassDesc.prototype.s25 = get_isNullable;
  ArrayClassDesc.prototype.c26 = get_isInline;
  ArrayClassDesc.prototype.a26 = get_annotations;
  MapLikeDescriptor.prototype.s25 = get_isNullable;
  MapLikeDescriptor.prototype.c26 = get_isInline;
  MapLikeDescriptor.prototype.a26 = get_annotations;
  HashMapClassDesc.prototype.s25 = get_isNullable;
  HashMapClassDesc.prototype.c26 = get_isInline;
  HashMapClassDesc.prototype.a26 = get_annotations;
  LinkedHashMapClassDesc.prototype.s25 = get_isNullable;
  LinkedHashMapClassDesc.prototype.c26 = get_isInline;
  LinkedHashMapClassDesc.prototype.a26 = get_annotations;
  ArrayListClassDesc.prototype.s25 = get_isNullable;
  ArrayListClassDesc.prototype.c26 = get_isInline;
  ArrayListClassDesc.prototype.a26 = get_annotations;
  HashSetClassDesc.prototype.s25 = get_isNullable;
  HashSetClassDesc.prototype.c26 = get_isInline;
  HashSetClassDesc.prototype.a26 = get_annotations;
  LinkedHashSetClassDesc.prototype.s25 = get_isNullable;
  LinkedHashSetClassDesc.prototype.c26 = get_isInline;
  LinkedHashSetClassDesc.prototype.a26 = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.s25 = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.c26 = get_isInline;
  InlineClassDescriptor.prototype.s25 = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.k2e = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.s25 = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.c26 = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.a26 = get_annotations;
  TaggedDecoder.prototype.b28 = decodeSerializableElement$default;
  TaggedDecoder.prototype.o27 = decodeSerializableValue;
  TaggedDecoder.prototype.c28 = decodeSequentially;
  TaggedDecoder.prototype.e28 = decodeCollectionSize;
  NamedValueDecoder.prototype.o27 = decodeSerializableValue;
  NamedValueDecoder.prototype.b28 = decodeSerializableElement$default;
  NamedValueDecoder.prototype.c28 = decodeSequentially;
  NamedValueDecoder.prototype.e28 = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = SerializationException_init_$Create$;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = SEALED_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = Companion_getInstance_2;
  _.$_$.m = BooleanSerializer_getInstance;
  _.$_$.n = LongSerializer_getInstance;
  _.$_$.o = StringSerializer_getInstance;
  _.$_$.p = ListSerializer;
  _.$_$.q = MapSerializer;
  _.$_$.r = SetSerializer;
  _.$_$.s = get_nullable;
  _.$_$.t = serializer_1;
  _.$_$.u = serializer_15;
  _.$_$.v = serializer_12;
  _.$_$.w = serializer_14;
  _.$_$.x = serializer_13;
  _.$_$.y = PolymorphicKind;
  _.$_$.z = PrimitiveKind;
  _.$_$.a1 = PrimitiveSerialDescriptor;
  _.$_$.b1 = get_annotations;
  _.$_$.c1 = get_isInline;
  _.$_$.d1 = get_isNullable;
  _.$_$.e1 = SerialDescriptor;
  _.$_$.f1 = ENUM;
  _.$_$.g1 = getContextualDescriptor;
  _.$_$.h1 = AbstractDecoder;
  _.$_$.i1 = AbstractEncoder;
  _.$_$.j1 = decodeCollectionSize;
  _.$_$.k1 = decodeSequentially;
  _.$_$.l1 = CompositeDecoder;
  _.$_$.m1 = CompositeEncoder;
  _.$_$.n1 = decodeSerializableValue;
  _.$_$.o1 = Decoder;
  _.$_$.p1 = beginCollection;
  _.$_$.q1 = encodeNotNullMark;
  _.$_$.r1 = Encoder;
  _.$_$.s1 = AbstractPolymorphicSerializer;
  _.$_$.t1 = ArrayListSerializer;
  _.$_$.u1 = ElementMarker;
  _.$_$.v1 = typeParametersSerializers;
  _.$_$.w1 = GeneratedSerializer;
  _.$_$.x1 = NamedValueDecoder;
  _.$_$.y1 = PluginGeneratedSerialDescriptor;
  _.$_$.z1 = SerializerFactory;
  _.$_$.a2 = jsonCachedSerialNames;
  _.$_$.b2 = throwMissingFieldException;
  _.$_$.c2 = EmptySerializersModule_0;
  _.$_$.d2 = contextual;
  _.$_$.e2 = SerializersModuleCollector;
  _.$_$.f2 = BinaryFormat;
  _.$_$.g2 = DeserializationStrategy;
  _.$_$.h2 = KSerializer;
  _.$_$.i2 = MissingFieldException;
  _.$_$.j2 = SealedClassSerializer;
  _.$_$.k2 = SerializationException;
  _.$_$.l2 = StringFormat;
  _.$_$.m2 = findPolymorphicSerializer;
  _.$_$.n2 = serializerOrNull;
  _.$_$.o2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
