(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.l8;
  var CoroutineImpl = kotlin_kotlin.$_$.x7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wc;
  var toString = kotlin_kotlin.$_$.r9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var THROW_CCE = kotlin_kotlin.$_$.ac;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.d9;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.k1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.wb;
  var discard = kotlin_io_ktor_ktor_io.$_$.b1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.e;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Map = kotlin_kotlin.$_$.r4;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Set = kotlin_kotlin.$_$.x4;
  var firstOrNull = kotlin_kotlin.$_$.v5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.w3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var isArray = kotlin_kotlin.$_$.v8;
  var List = kotlin_kotlin.$_$.p4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var filterNotNull = kotlin_kotlin.$_$.t5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.s6;
  var Collection = kotlin_kotlin.$_$.i4;
  //endregion
  //region block: pre-declaration
  SerializationNegotiationParameters.prototype = Object.create(SerializationParameters.prototype);
  SerializationNegotiationParameters.prototype.constructor = SerializationNegotiationParameters;
  $serializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $serializeCOROUTINE$0.prototype.constructor = $serializeCOROUTINE$0;
  KotlinxSerializationConverter$serializationBase$1.prototype = Object.create(KotlinxSerializationBase.prototype);
  KotlinxSerializationConverter$serializationBase$1.prototype.constructor = KotlinxSerializationConverter$serializationBase$1;
  $deserializeCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$1.prototype.constructor = $deserializeCOROUTINE$1;
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.b2l_1 = format;
    this.c2l_1 = value;
    this.d2l_1 = typeInfo;
    this.e2l_1 = charset;
    this.f2l_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.g2l = function () {
    return this.b2l_1;
  };
  SerializationNegotiationParameters.prototype.t = function () {
    return this.c2l_1;
  };
  SerializationNegotiationParameters.prototype.h2l = function () {
    return this.d2l_1;
  };
  SerializationNegotiationParameters.prototype.i2l = function () {
    return this.e2l_1;
  };
  SerializationNegotiationParameters.$metadata$ = classMeta('SerializationNegotiationParameters', undefined, undefined, undefined, undefined, SerializationParameters.prototype);
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2l_1 = _this__u8e3s4;
    this.x2l_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.z2l_1 = serializerFromTypeInfo(this.x2l_1.h2l(), this.w2l_1.d2m_1.b25());
            this.x2l_1.n2l_1 = this.z2l_1;
            this.oh_1 = 1;
            suspendResult = this.w2l_1.e2m(this.x2l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y2l_1 = suspendResult;
            this.ph_1 = 5;
            this.oh_1 = 3;
            continue $sm;
          case 2:
            this.ph_1 = 5;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof SerializationException) {
              this.a2m_1 = this.rh_1;
              var tmp_2 = this;
              tmp_2.y2l_1 = null;
              this.oh_1 = 3;
              continue $sm;
            } else {
              throw this.rh_1;
            }

            break;
          case 3:
            this.ph_1 = 5;
            this.b2m_1 = this.y2l_1;
            if (!(this.b2m_1 == null)) {
              return this.b2m_1;
            }

            this.c2m_1 = guessSerializer(this.x2l_1.t(), this.w2l_1.d2m_1.b25());
            this.x2l_1.n2l_1 = this.c2m_1;
            this.oh_1 = 4;
            suspendResult = this.w2l_1.e2m(this.x2l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
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
  $serializeCOROUTINE$0.$metadata$ = classMeta('$serializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationBase(format) {
    this.d2m_1 = format;
  }
  KotlinxSerializationBase.prototype.f2m = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  KotlinxSerializationBase.$metadata$ = classMeta('KotlinxSerializationBase');
  function SerializationParameters(format, value, typeInfo, charset) {
    this.j2l_1 = format;
    this.k2l_1 = value;
    this.l2l_1 = typeInfo;
    this.m2l_1 = charset;
  }
  SerializationParameters.prototype.g2l = function () {
    return this.j2l_1;
  };
  SerializationParameters.prototype.t = function () {
    return this.k2l_1;
  };
  SerializationParameters.prototype.h2l = function () {
    return this.l2l_1;
  };
  SerializationParameters.prototype.i2l = function () {
    return this.m2l_1;
  };
  SerializationParameters.prototype.t2k = function () {
    var tmp = this.n2l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  SerializationParameters.$metadata$ = classMeta('SerializationParameters');
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.y21(contentType, tmp, null, 4, null);
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.z24(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.c25(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.h2m_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.i2m_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.k2m = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).rd() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).rd());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.h2m_1, parameters.t2k(), parameters.g2l(), parameters.t(), parameters.f2l_1, parameters.i2l());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.e2m = function (parameters, $cont) {
    return this.k2m(parameters, $cont);
  };
  KotlinxSerializationConverter$serializationBase$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, KotlinxSerializationBase.prototype);
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t2m_1 = _this__u8e3s4;
    this.u2m_1 = charset;
    this.v2m_1 = typeInfo;
    this.w2m_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 4;
            this.x2m_1 = serializerFromTypeInfo(this.v2m_1, this.t2m_1.i2m_1.b25());
            this.oh_1 = 1;
            suspendResult = this.w2m_1.y19(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.ph_1 = 2;
            var tmp0_subject = this.t2m_1.i2m_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.t2m_1.i2m_1.a25(this.x2m_1, readText$default(contentPacket, this.u2m_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.t2m_1.i2m_1.d25(this.x2m_1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.t2m_1.i2m_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.ph_1 = 4;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.rh_1;
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.rh_1;
            }

            break;
          case 3:
            this.ph_1 = 4;
            return Unit_getInstance();
          case 4:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 4) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $deserializeCOROUTINE$1.$metadata$ = classMeta('$deserializeCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationConverter(format) {
    this.i2m_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.i2m_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.i2m_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.i2m_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.j2m_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.y2m = function (contentType, charset, typeInfo, value, $cont) {
    return this.z2m(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.z21 = function (contentType, charset, typeInfo, value, $cont) {
    return this.y2m(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.z2m = function (contentType, charset, typeInfo, value, $cont) {
    return this.j2m_1.f2m(new SerializationNegotiationParameters(this.i2m_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.a22 = function (contentType, charset, typeInfo, value, $cont) {
    return this.z2m(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.b22 = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  KotlinxSerializationConverter.$metadata$ = classMeta('KotlinxSerializationConverter', [ContentConverter]);
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.l1o_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.be().m() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.f25(typeInfo.j1o_1, null, 2, null);
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.j1o_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
            tmp$ret$1 = tmp$ret$0;
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
              var keySerializer = elementSerializer(value.j2(), module_0);
              var valueSerializer = elementSerializer(value.k2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp_1 = getKClassFromExpression(value);
              var tmp3_elvis_lhs = module_0.f25(tmp_1, null, 2, null);
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.l1o_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ce()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.b(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp1_distinctBy.d();
    while (tmp0_iterator_0.e()) {
      var e = tmp0_iterator_0.f();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.h24().o25();
      var key = tmp$ret$3;
      if (set.b(key)) {
        list.b(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.g() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.d();
      while (tmp0_iterator_1.e()) {
        var item_0 = tmp0_iterator_1.f();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.h24().o25();
        tmp0_mapTo_0.b(tmp$ret$5);
      }
      tmp$ret$6 = tmp0_mapTo_0;
      tmp$ret$7 = tmp$ret$6;
      var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp2_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.h24().h25()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.m();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.d();
      while (tmp0_iterator_2.e()) {
        var element = tmp0_iterator_2.f();
        var tmp$ret$9;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map
