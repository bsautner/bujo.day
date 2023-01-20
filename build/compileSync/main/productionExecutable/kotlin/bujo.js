(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js', './ktor-ktor-client-content-negotiation-js-ir.js', './ktor-ktor-serialization-kotlinx-json-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'bujo'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'bujo'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'ktor-ktor-client-content-negotiation-js-ir' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlin-wrappers-kotlin-react-core-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-core-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'bujo'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'bujo'.");
    }
    root.bujo = factory(typeof bujo === 'undefined' ? {} : bujo, this['react-dom/client'], react, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['ktor-ktor-client-content-negotiation-js-ir'], this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var useState = $module$react.useState;
  var objectMeta = kotlin_kotlin.$_$.n9;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var Long = kotlin_kotlin.$_$.wb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.ac;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var classMeta = kotlin_kotlin.$_$.l8;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var toString = kotlin_kotlin.$_$.r9;
  var getStringHashCode = kotlin_kotlin.$_$.s8;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var charArrayOf = kotlin_kotlin.$_$.g8;
  var split$default = kotlin_kotlin.$_$.r;
  var toInt = kotlin_kotlin.$_$.za;
  var LocalDateTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var println = kotlin_kotlin.$_$.b8;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.x7;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.e;
  var url = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.kc;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i7;
  var List = kotlin_kotlin.$_$.p4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var isInterface = kotlin_kotlin.$_$.d9;
  var parameter = kotlin_io_ktor_ktor_client_core.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x3;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.nc;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var emptyList = kotlin_kotlin.$_$.p5;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.g;
  var useEffectOnce = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.ca;
  var THROW_ISE = kotlin_kotlin.$_$.bc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.q8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.y7;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var isBlank = kotlin_kotlin.$_$.la;
  var charSequenceLength = kotlin_kotlin.$_$.j8;
  //endregion
  //region block: pre-declaration
  $postEventCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $postEventCOROUTINE$0.prototype.constructor = $postEventCOROUTINE$0;
  $putEventCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $putEventCOROUTINE$1.prototype.constructor = $putEventCOROUTINE$1;
  $getEntriesCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $getEntriesCOROUTINE$2.prototype.constructor = $getEntriesCOROUTINE$2;
  $deleteEntryCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $deleteEntryCOROUTINE$3.prototype.constructor = $deleteEntryCOROUTINE$3;
  $getEventTypesCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $getEventTypesCOROUTINE$5.prototype.constructor = $getEventTypesCOROUTINE$5;
  $addTypeCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $addTypeCOROUTINE$6.prototype.constructor = $addTypeCOROUTINE$6;
  $deleteTypesCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $deleteTypesCOROUTINE$7.prototype.constructor = $deleteTypesCOROUTINE$7;
  home$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$slambda.prototype.constructor = home$lambda$lambda$slambda;
  home$lambda$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda.prototype.constructor = home$lambda$lambda$lambda$slambda;
  home$lambda$lambda$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda$slambda.prototype.constructor = home$lambda$lambda$lambda$slambda$slambda;
  home$lambda$lambda$lambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda_1.prototype.constructor = home$lambda$lambda$lambda$slambda_1;
  home$lambda$lambda$lambda$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda_3.prototype.constructor = home$lambda$lambda$lambda$slambda_3;
  home$lambda$lambda$lambda$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda_5.prototype.constructor = home$lambda$lambda$lambda$slambda_5;
  home$lambda$lambda$lambda$slambda_7.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda_7.prototype.constructor = home$lambda$lambda$lambda$slambda_7;
  home$lambda$lambda$lambda$slambda_9.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda_9.prototype.constructor = home$lambda$lambda$lambda$slambda_9;
  home$lambda$lambda$lambda$slambda_11.prototype = Object.create(CoroutineImpl.prototype);
  home$lambda$lambda$lambda$slambda_11.prototype.constructor = home$lambda$lambda$lambda$slambda_11;
  //endregion
  function Companion() {
    Companion_instance = this;
    this.t3z_1 = '/entry';
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event', this, 4);
    tmp0_serialDesc.w2d('id', false);
    tmp0_serialDesc.w2d('timestamp', false);
    tmp0_serialDesc.w2d('value', false);
    tmp0_serialDesc.w2d('eventTypes', false);
    this.u3z_1 = tmp0_serialDesc;
  }
  $serializer.prototype.h24 = function () {
    return this.u3z_1;
  };
  $serializer.prototype.y2d = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [LongSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), new ArrayListSerializer(LongSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.j24 = function (decoder) {
    var tmp0_desc = this.u3z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.e27(tmp0_desc);
    if (tmp8_input.r27()) {
      tmp4_local0 = tmp8_input.k27(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.k27(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.o27(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.p27(tmp0_desc, 3, new ArrayListSerializer(LongSerializer_getInstance()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.s27(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.k27(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.k27(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.o27(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.p27(tmp0_desc, 3, new ArrayListSerializer(LongSerializer_getInstance()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.f27(tmp0_desc);
    return Event_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  $serializer.prototype.v3z = function (encoder, value) {
    var tmp0_desc = this.u3z_1;
    var tmp1_output = encoder.e27(tmp0_desc);
    tmp1_output.l28(tmp0_desc, 0, value.w3z_1);
    tmp1_output.l28(tmp0_desc, 1, value.x3z_1);
    tmp1_output.p28(tmp0_desc, 2, value.y3z_1);
    tmp1_output.q28(tmp0_desc, 3, new ArrayListSerializer(LongSerializer_getInstance()), value.z3z_1);
    tmp1_output.f27(tmp0_desc);
  };
  $serializer.prototype.i24 = function (encoder, value) {
    return this.v3z(encoder, value instanceof Event ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Event_init_$Init$(seen1, id, timestamp, value, eventTypes, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance().u3z_1);
    }
    $this.w3z_1 = id;
    $this.x3z_1 = timestamp;
    $this.y3z_1 = value;
    $this.z3z_1 = eventTypes;
    return $this;
  }
  function Event_init_$Create$(seen1, id, timestamp, value, eventTypes, serializationConstructorMarker) {
    return Event_init_$Init$(seen1, id, timestamp, value, eventTypes, serializationConstructorMarker, Object.create(Event.prototype));
  }
  function Event(id, timestamp, value, eventTypes) {
    Companion_getInstance_2();
    this.w3z_1 = id;
    this.x3z_1 = timestamp;
    this.y3z_1 = value;
    this.z3z_1 = eventTypes;
  }
  Event.prototype.y3x = function () {
    return this.w3z_1;
  };
  Event.prototype.a40 = function () {
    return this.x3z_1;
  };
  Event.prototype.t = function () {
    return this.y3z_1;
  };
  Event.prototype.b40 = function () {
    return this.z3z_1;
  };
  Event.$metadata$ = classMeta('Event', undefined, undefined, {0: $serializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
    this.c40_1 = '/type';
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('EventType', this, 3);
    tmp0_serialDesc.w2d('id', false);
    tmp0_serialDesc.w2d('text', false);
    tmp0_serialDesc.w2d('selected', false);
    this.d40_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.h24 = function () {
    return this.d40_1;
  };
  $serializer_0.prototype.y2d = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [LongSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.j24 = function (decoder) {
    var tmp0_desc = this.d40_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.e27(tmp0_desc);
    if (tmp7_input.r27()) {
      tmp4_local0 = tmp7_input.k27(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o27(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.g27(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.s27(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.k27(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o27(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.g27(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.f27(tmp0_desc);
    return EventType_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_0.prototype.e40 = function (encoder, value) {
    var tmp0_desc = this.d40_1;
    var tmp1_output = encoder.e27(tmp0_desc);
    tmp1_output.l28(tmp0_desc, 0, value.f40_1);
    tmp1_output.p28(tmp0_desc, 1, value.g40_1);
    tmp1_output.h28(tmp0_desc, 2, value.h40_1);
    tmp1_output.f27(tmp0_desc);
  };
  $serializer_0.prototype.i24 = function (encoder, value) {
    return this.e40(encoder, value instanceof EventType ? value : THROW_CCE());
  };
  $serializer_0.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function EventType_init_$Init$(seen1, id, text, selected, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_0().d40_1);
    }
    $this.f40_1 = id;
    $this.g40_1 = text;
    $this.h40_1 = selected;
    return $this;
  }
  function EventType_init_$Create$(seen1, id, text, selected, serializationConstructorMarker) {
    return EventType_init_$Init$(seen1, id, text, selected, serializationConstructorMarker, Object.create(EventType.prototype));
  }
  function EventType(id, text, selected) {
    Companion_getInstance_3();
    this.f40_1 = id;
    this.g40_1 = text;
    this.h40_1 = selected;
  }
  EventType.prototype.y3x = function () {
    return this.f40_1;
  };
  EventType.prototype.i40 = function () {
    return this.g40_1;
  };
  EventType.prototype.j40 = function () {
    return this.h40_1;
  };
  EventType.prototype.toString = function () {
    return 'EventType(id=' + toString(this.f40_1) + ', text=' + this.g40_1 + ', selected=' + this.h40_1 + ')';
  };
  EventType.prototype.hashCode = function () {
    var result = this.f40_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.g40_1) | 0;
    result = imul(result, 31) + (this.h40_1 | 0) | 0;
    return result;
  };
  EventType.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EventType))
      return false;
    var tmp0_other_with_cast = other instanceof EventType ? other : THROW_CCE();
    if (!this.f40_1.equals(tmp0_other_with_cast.f40_1))
      return false;
    if (!(this.g40_1 === tmp0_other_with_cast.g40_1))
      return false;
    if (!(this.h40_1 === tmp0_other_with_cast.h40_1))
      return false;
    return true;
  };
  EventType.$metadata$ = classMeta('EventType', undefined, undefined, {0: $serializer_getInstance_0});
  function appendZero($this, s) {
    var tmp;
    if (s.toString().length === 1) {
      tmp = '0' + s;
    } else {
      tmp = '' + s;
    }
    return tmp;
  }
  function Util() {
  }
  Util.prototype.k40 = function (timestamp) {
    var instantNow = Companion_getInstance().e3y(timestamp);
    var d = toLocalDateTime(instantNow, Companion_getInstance_0().t3y()).r3y();
    return '' + d.m3y() + '-' + appendZero(this, d.n3y()) + '-' + appendZero(this, d.o3y());
  };
  Util.prototype.l40 = function (input) {
    var tmp = charArrayOf([_Char___init__impl__6a9atx(45)]);
    var s = split$default(input, tmp, false, 0, 6, null);
    var date = LocalDateTime_init_$Create$(toInt(s.h(0)), toInt(s.h(1)), toInt(s.h(2)), 0, 0, 0, 0);
    println(date.toString());
    return toInstant(date, Companion_getInstance_0().t3y()).j3y();
  };
  Util.$metadata$ = classMeta('Util');
  function get_jsonClient() {
    init_properties_ApiClient_kt_yp1dip();
    return jsonClient;
  }
  var jsonClient;
  function postEvent(event, $cont) {
    var tmp = new $postEventCOROUTINE$0(event, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function putEvent(event, $cont) {
    var tmp = new $putEventCOROUTINE$1(event, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function getEntries($cont) {
    var tmp = new $getEntriesCOROUTINE$2($cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function deleteEntry(id, $cont) {
    var tmp = new $deleteEntryCOROUTINE$3(id, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function getEventTypes(selectedEvent, $cont) {
    var tmp = new $getEventTypesCOROUTINE$5(selectedEvent, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function addType(type, $cont) {
    var tmp = new $addTypeCOROUTINE$6(type, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function deleteTypes(list, $cont) {
    var tmp = new $deleteTypesCOROUTINE$7(list, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function jsonClient$lambda($this$HttpClient) {
    init_properties_ApiClient_kt_yp1dip();
    var tmp = Plugin_getInstance();
    $this$HttpClient.o30(tmp, jsonClient$lambda$lambda);
    return Unit_getInstance();
  }
  function jsonClient$lambda$lambda($this$install) {
    init_properties_ApiClient_kt_yp1dip();
    json$default($this$install, null, null, 3, null);
    return Unit_getInstance();
  }
  function $postEventCOROUTINE$0(event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u40_1 = event;
  }
  $postEventCOROUTINE$0.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.v40_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.w40_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.w40_1);
            contentType(tmp0_apply, Application_getInstance().j1p_1);
            var tmp0_subject = this.u40_1;
            if (tmp0_subject == null) {
              tmp0_apply.k2z_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(Event);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(Event), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.i35(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.k2z_1 = this.u40_1;
                tmp0_apply.i35(null);
              } else {
                tmp0_apply.k2z_1 = this.u40_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(Event);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(Event), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.i35(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.x40_1 = tmp0_apply;
            this.x40_1.i2z_1 = Companion_getInstance_1().g1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.x40_1, this.v40_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $postEventCOROUTINE$0.$metadata$ = classMeta('$postEventCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $putEventCOROUTINE$1(event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g41_1 = event;
  }
  $putEventCOROUTINE$1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.h41_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.i41_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.i41_1);
            contentType(tmp0_apply, Application_getInstance().j1p_1);
            var tmp0_subject = this.g41_1;
            if (tmp0_subject == null) {
              tmp0_apply.k2z_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(Event);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(Event), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.i35(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.k2z_1 = this.g41_1;
                tmp0_apply.i35(null);
              } else {
                tmp0_apply.k2z_1 = this.g41_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(Event);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(Event), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.i35(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.j41_1 = tmp0_apply;
            this.j41_1.i2z_1 = Companion_getInstance_1().h1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.j41_1, this.h41_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $putEventCOROUTINE$1.$metadata$ = classMeta('$putEventCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $getEntriesCOROUTINE$2(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  $getEntriesCOROUTINE$2.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            var tmp_0 = this;
            tmp_0.s41_1 = get_jsonClient();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, '/events');
            ;
            tmp_1.t41_1 = tmp0_apply;
            this.t41_1.i2z_1 = Companion_getInstance_1().f1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.t41_1, this.s41_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u41_1 = suspendResult;
            this.oh_1 = 2;
            var tmp_2 = this.u41_1.p32();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Event), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.s31(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $getEntriesCOROUTINE$2.$metadata$ = classMeta('$getEntriesCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $deleteEntryCOROUTINE$3(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d42_1 = id;
  }
  $deleteEntryCOROUTINE$3.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.e42_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.f42_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.f42_1);
            parameter(tmp0_apply, 'id', this.d42_1);
            ;
            tmp_2.g42_1 = tmp0_apply;
            this.g42_1.i2z_1 = Companion_getInstance_1().j1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.g42_1, this.e42_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $deleteEntryCOROUTINE$3.$metadata$ = classMeta('$deleteEntryCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $getEventTypesCOROUTINE$5(selectedEvent, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p42_1 = selectedEvent;
  }
  $getEventTypesCOROUTINE$5.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            var tmp_0 = this;
            tmp_0.q42_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_3();
            tmp_1.r42_1 = '/type';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.r42_1);
            ;
            tmp_2.s42_1 = tmp0_apply;
            this.s42_1.i2z_1 = Companion_getInstance_1().f1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.s42_1, this.q42_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t42_1 = suspendResult;
            this.oh_1 = 2;
            var tmp_3 = this.t42_1.p32();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(List);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(EventType), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.s31(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var response = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            var list = ArrayList_init_$Create$();
            var tmp0_iterator = response.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              list.b(new EventType(element.f40_1, element.g40_1, this.p42_1.z3z_1.l1(element.f40_1)));
            }

            return list;
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
  $getEventTypesCOROUTINE$5.$metadata$ = classMeta('$getEventTypesCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $addTypeCOROUTINE$6(type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c43_1 = type;
  }
  $addTypeCOROUTINE$6.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.d43_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_3();
            tmp_1.e43_1 = '/type';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.e43_1);
            contentType(tmp0_apply, Application_getInstance().j1p_1);
            var tmp0_subject = this.c43_1;
            if (tmp0_subject == null) {
              tmp0_apply.k2z_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = PrimitiveClasses_getInstance().kf();
              var tmp_5;
              try {
                tmp_5 = createKType(PrimitiveClasses_getInstance().kf(), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.i35(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.k2z_1 = this.c43_1;
                tmp0_apply.i35(null);
              } else {
                tmp0_apply.k2z_1 = this.c43_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = PrimitiveClasses_getInstance().kf();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().kf(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.i35(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.f43_1 = tmp0_apply;
            this.f43_1.i2z_1 = Companion_getInstance_1().g1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.f43_1, this.d43_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $addTypeCOROUTINE$6.$metadata$ = classMeta('$addTypeCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $deleteTypesCOROUTINE$7(list, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o43_1 = list;
  }
  $deleteTypesCOROUTINE$7.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.p43_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_3();
            tmp_1.q43_1 = '/type';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.q43_1);
            contentType(tmp0_apply, Application_getInstance().j1p_1);
            var tmp0_subject = this.o43_1;
            if (tmp0_subject == null) {
              tmp0_apply.k2z_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(List);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Long), arrayOf([]), false))]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.i35(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.k2z_1 = this.o43_1;
                tmp0_apply.i35(null);
              } else {
                tmp0_apply.k2z_1 = this.o43_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(List);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Long), arrayOf([]), false))]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.i35(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.r43_1 = tmp0_apply;
            this.r43_1.i2z_1 = Companion_getInstance_1().j1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.r43_1, this.p43_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $deleteTypesCOROUTINE$7.$metadata$ = classMeta('$deleteTypesCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var properties_initialized_ApiClient_kt_hvyiqd;
  function init_properties_ApiClient_kt_yp1dip() {
    if (properties_initialized_ApiClient_kt_hvyiqd) {
    } else {
      properties_initialized_ApiClient_kt_hvyiqd = true;
      jsonClient = HttpClient(jsonClient$lambda);
    }
  }
  function main() {
    var container = document.getElementById('root');
    var tmp0_safe_receiver = container;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      ensureNotNull(document.body).appendChild(tmp0_safe_receiver);
      var tmp = get_home();
      var home = create(tmp, main$lambda);
      createRoot(tmp0_safe_receiver).render(home);
      tmp$ret$0 = Unit_getInstance();
    }
    var loginContainer = document.getElementById('login');
    var tmp1_safe_receiver = loginContainer;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      ensureNotNull(document.body).appendChild(tmp1_safe_receiver);
      var tmp_0 = get_login();
      var login = create(tmp_0, main$lambda_0);
      createRoot(tmp1_safe_receiver).render(login);
      tmp$ret$1 = Unit_getInstance();
    }
    var registerContainer = document.getElementById('register');
    var tmp2_safe_receiver = registerContainer;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      ensureNotNull(document.body).appendChild(tmp2_safe_receiver);
      var tmp_1 = get_register();
      var register = create(tmp_1, main$lambda_1);
      createRoot(tmp2_safe_receiver).render(register);
      tmp$ret$2 = Unit_getInstance();
    }
  }
  function main$lambda($this$create) {
    return Unit_getInstance();
  }
  function main$lambda_0($this$create) {
    return Unit_getInstance();
  }
  function main$lambda_1($this$create) {
    return Unit_getInstance();
  }
  function get_mainScope() {
    init_properties_Home_kt_ssf8dh();
    return mainScope;
  }
  var mainScope;
  function get_home() {
    init_properties_Home_kt_ssf8dh();
    return home;
  }
  var home;
  function home$lambda($this$FC, it) {
    init_properties_Home_kt_ssf8dh();
    var eventTypes$delegate = useState(emptyList());
    var eventEntries$delegate = useState(emptyList());
    var event$delegate = useState(new Event(new Long(0, 0), getTimeMillis(), '', emptyList()));
    useEffectOnce(home$lambda$lambda(eventEntries$delegate, event$delegate, eventTypes$delegate));
    var tmp = get_navbar();
    $this$FC.a3z(tmp, home$lambda$lambda_0);
    var tmp_0 = get_journalForm();
    $this$FC.a3z(tmp_0, home$lambda$lambda_1(eventTypes$delegate, event$delegate, eventEntries$delegate));
    var tmp_1 = get_entryListComponent();
    $this$FC.a3z(tmp_1, home$lambda$lambda_2(eventEntries$delegate, eventTypes$delegate, event$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda($eventTypes$delegate) {
    init_properties_Home_kt_ssf8dh();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('eventTypes', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $eventTypes$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_0($eventTypes$delegate, value) {
    init_properties_Home_kt_ssf8dh();
    var tmp0_setValue = getLocalDelegateReference('eventTypes', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $eventTypes$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_1($eventEntries$delegate) {
    init_properties_Home_kt_ssf8dh();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('eventEntries', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $eventEntries$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_2($eventEntries$delegate, value) {
    init_properties_Home_kt_ssf8dh();
    var tmp0_setValue = getLocalDelegateReference('eventEntries', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $eventEntries$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_3($event$delegate) {
    init_properties_Home_kt_ssf8dh();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('event', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $event$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_4($event$delegate, value) {
    init_properties_Home_kt_ssf8dh();
    var tmp0_setValue = getLocalDelegateReference('event', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $event$delegate;
    return tmp$ret$0[1](value);
  }
  function home$lambda$lambda$slambda($eventEntries$delegate, $event$delegate, $eventTypes$delegate, resultContinuation) {
    this.a44_1 = $eventEntries$delegate;
    this.b44_1 = $event$delegate;
    this.c44_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = getEntries(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e44_1 = suspendResult;
            invoke$lambda_2(this.a44_1, this.e44_1);
            this.oh_1 = 2;
            suspendResult = getEventTypes(invoke$lambda_3(this.b44_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.c44_1, ARGUMENT);
            return Unit_getInstance();
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
  home$lambda$lambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$slambda(this.a44_1, this.b44_1, this.c44_1, completion);
    i.d44_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$slambda.$metadata$ = classMeta('home$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$slambda_0($eventEntries$delegate, $event$delegate, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$slambda($eventEntries$delegate, $event$delegate, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda($eventEntries$delegate, $event$delegate, $eventTypes$delegate) {
    return function ($this$useEffectOnce) {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$slambda_0($eventEntries$delegate, $event$delegate, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda_0($this$invoke) {
    init_properties_Home_kt_ssf8dh();
    return Unit_getInstance();
  }
  function home$lambda$lambda$lambda$slambda($it, $event$delegate, $eventTypes$delegate, resultContinuation) {
    this.n44_1 = $it;
    this.o44_1 = $event$delegate;
    this.p44_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = addType(this.n44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.oh_1 = 2;
            suspendResult = getEventTypes(invoke$lambda_3(this.o44_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.p44_1, ARGUMENT);
            return Unit_getInstance();
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
  home$lambda$lambda$lambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda(this.n44_1, this.o44_1, this.p44_1, completion);
    i.q44_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_0($it, $event$delegate, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda($it, $event$delegate, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda($event$delegate, $eventTypes$delegate) {
    return function (it) {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$lambda$slambda_0(it, $event$delegate, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda$slambda$slambda($e, $eventTypes$delegate, resultContinuation) {
    this.z44_1 = $e;
    this.a45_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = getEventTypes(this.z44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.a45_1, ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  home$lambda$lambda$lambda$slambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda$slambda(this.z44_1, this.a45_1, completion);
    i.b45_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda$slambda.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda$slambda_0($e, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda$slambda($e, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda$slambda_1($event$delegate, $eventTypes$delegate, resultContinuation) {
    this.k45_1 = $event$delegate;
    this.l45_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda_1.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda_1.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = deleteTypes(invoke$lambda_3(this.k45_1).z3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var e = new Event(invoke$lambda_3(this.k45_1).w3z_1, invoke$lambda_3(this.k45_1).x3z_1, invoke$lambda_3(this.k45_1).y3z_1, emptyList());
            invoke$lambda_4(this.k45_1, e);
            var tmp_0 = get_mainScope();
            launch$default(tmp_0, null, null, home$lambda$lambda$lambda$slambda$slambda_0(e, this.l45_1, null), 3, null);
            ;
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  home$lambda$lambda$lambda$slambda_1.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda_1(this.k45_1, this.l45_1, completion);
    i.m45_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda_1.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_2($event$delegate, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda_1($event$delegate, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda_0($event$delegate, $eventTypes$delegate) {
    return function () {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$lambda$slambda_2($event$delegate, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda$slambda_3($e, $eventTypes$delegate, resultContinuation) {
    this.v45_1 = $e;
    this.w45_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda_3.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda_3.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda_3.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = getEventTypes(this.v45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.w45_1, ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  home$lambda$lambda$lambda$slambda_3.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda_3(this.v45_1, this.w45_1, completion);
    i.x45_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda_3.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_4($e, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda_3($e, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda_1($event$delegate, $eventTypes$delegate) {
    return function (id, checked) {
      println('on check changed ' + toString(id) + ' ' + checked);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var list = tmp$ret$0;
      list.l(invoke$lambda_3($event$delegate).z3z_1);
      var tmp;
      if (checked) {
        list.b(id);
        tmp = Unit_getInstance();
      } else {
        list.ia(id);
        tmp = Unit_getInstance();
      }
      var e = new Event(invoke$lambda_3($event$delegate).w3z_1, invoke$lambda_3($event$delegate).x3z_1, invoke$lambda_3($event$delegate).y3z_1, list);
      invoke$lambda_4($event$delegate, e);
      var tmp_0 = get_mainScope();
      launch$default(tmp_0, null, null, home$lambda$lambda$lambda$slambda_4(e, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda_2($event$delegate) {
    return function (it) {
      invoke$lambda_4($event$delegate, new Event(invoke$lambda_3($event$delegate).w3z_1, invoke$lambda_3($event$delegate).x3z_1, it, invoke$lambda_3($event$delegate).z3z_1));
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda_3($event$delegate) {
    return function (it) {
      invoke$lambda_4($event$delegate, new Event(invoke$lambda_3($event$delegate).w3z_1, it, invoke$lambda_3($event$delegate).y3z_1, invoke$lambda_3($event$delegate).z3z_1));
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda$slambda_5($this_invoke, $eventEntries$delegate, $event$delegate, $eventTypes$delegate, resultContinuation) {
    this.g46_1 = $this_invoke;
    this.h46_1 = $eventEntries$delegate;
    this.i46_1 = $event$delegate;
    this.j46_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda_5.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda_5.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda_5.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 7;
            if (this.g46_1.selectedEvent.w3z_1.equals(new Long(0, 0))) {
              this.oh_1 = 2;
              suspendResult = postEvent(this.g46_1.selectedEvent, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oh_1 = 1;
              suspendResult = putEvent(this.g46_1.selectedEvent, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.oh_1 = 3;
            continue $sm;
          case 2:
            this.oh_1 = 3;
            continue $sm;
          case 3:
            this.oh_1 = 4;
            suspendResult = getEntries(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.l46_1 = suspendResult;
            invoke$lambda_2(this.h46_1, this.l46_1);
            this.oh_1 = 5;
            suspendResult = getEventTypes(invoke$lambda_3(this.i46_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m46_1 = suspendResult;
            invoke$lambda_0(this.j46_1, this.m46_1);
            this.n46_1 = new Event(new Long(0, 0), getTimeMillis(), '', emptyList());
            invoke$lambda_4(this.i46_1, this.n46_1);
            this.oh_1 = 6;
            suspendResult = getEventTypes(this.n46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.j46_1, ARGUMENT);
            return Unit_getInstance();
          case 7:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 7) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  home$lambda$lambda$lambda$slambda_5.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda_5(this.g46_1, this.h46_1, this.i46_1, this.j46_1, completion);
    i.k46_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda_5.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_6($this_invoke, $eventEntries$delegate, $event$delegate, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda_5($this_invoke, $eventEntries$delegate, $event$delegate, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda_4($this_invoke, $eventEntries$delegate, $event$delegate, $eventTypes$delegate) {
    return function () {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$lambda$slambda_6($this_invoke, $eventEntries$delegate, $event$delegate, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda$slambda_7($event$delegate, $eventTypes$delegate, resultContinuation) {
    this.w46_1 = $event$delegate;
    this.x46_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda_7.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda_7.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda_7.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.z46_1 = new Event(new Long(0, 0), getTimeMillis(), '', emptyList());
            invoke$lambda_4(this.w46_1, this.z46_1);
            this.oh_1 = 1;
            suspendResult = getEventTypes(this.z46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.x46_1, ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  home$lambda$lambda$lambda$slambda_7.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda_7(this.w46_1, this.x46_1, completion);
    i.y46_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda_7.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_8($event$delegate, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda_7($event$delegate, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda_5($event$delegate, $eventTypes$delegate) {
    return function () {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$lambda$slambda_8($event$delegate, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda_1($eventTypes$delegate, $event$delegate, $eventEntries$delegate) {
    return function ($this$invoke) {
      $this$invoke.types = invoke$lambda($eventTypes$delegate);
      $this$invoke.selectedEvent = invoke$lambda_3($event$delegate);
      $this$invoke.onTypeAdded = home$lambda$lambda$lambda($event$delegate, $eventTypes$delegate);
      $this$invoke.onTypesDeleted = home$lambda$lambda$lambda_0($event$delegate, $eventTypes$delegate);
      $this$invoke.onCheckChange = home$lambda$lambda$lambda_1($event$delegate, $eventTypes$delegate);
      $this$invoke.onTextChanged = home$lambda$lambda$lambda_2($event$delegate);
      $this$invoke.onTimestampChanged = home$lambda$lambda$lambda_3($event$delegate);
      $this$invoke.onSaveEvent = home$lambda$lambda$lambda_4($this$invoke, $eventEntries$delegate, $event$delegate, $eventTypes$delegate);
      $this$invoke.onNewEventClick = home$lambda$lambda$lambda_5($event$delegate, $eventTypes$delegate);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda$slambda_9($it, $eventEntries$delegate, resultContinuation) {
    this.i47_1 = $it;
    this.j47_1 = $eventEntries$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda_9.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda_9.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda_9.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = deleteEntry(this.i47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.oh_1 = 2;
            suspendResult = getEntries(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.j47_1, ARGUMENT);
            return Unit_getInstance();
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
  home$lambda$lambda$lambda$slambda_9.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda_9(this.i47_1, this.j47_1, completion);
    i.k47_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda_9.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_10($it, $eventEntries$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda_9($it, $eventEntries$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda_6($eventEntries$delegate) {
    return function (it) {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$lambda$slambda_10(it, $eventEntries$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda$lambda$slambda_11($it, $event$delegate, $eventTypes$delegate, resultContinuation) {
    this.t47_1 = $it;
    this.u47_1 = $event$delegate;
    this.v47_1 = $eventTypes$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  home$lambda$lambda$lambda$slambda_11.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  home$lambda$lambda$lambda$slambda_11.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  home$lambda$lambda$lambda$slambda_11.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            invoke$lambda_4(this.u47_1, this.t47_1);
            this.oh_1 = 1;
            suspendResult = getEventTypes(this.t47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.v47_1, ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 2) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  home$lambda$lambda$lambda$slambda_11.prototype.z1a = function ($this$launch, completion) {
    var i = new home$lambda$lambda$lambda$slambda_11(this.t47_1, this.u47_1, this.v47_1, completion);
    i.w47_1 = $this$launch;
    return i;
  };
  home$lambda$lambda$lambda$slambda_11.$metadata$ = classMeta('home$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function home$lambda$lambda$lambda$slambda_12($it, $event$delegate, $eventTypes$delegate, resultContinuation) {
    var i = new home$lambda$lambda$lambda$slambda_11($it, $event$delegate, $eventTypes$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function home$lambda$lambda$lambda_7($event$delegate, $eventTypes$delegate) {
    return function (it) {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, home$lambda$lambda$lambda$slambda_12(it, $event$delegate, $eventTypes$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function home$lambda$lambda_2($eventEntries$delegate, $eventTypes$delegate, $event$delegate) {
    return function ($this$invoke) {
      $this$invoke.onDelete = home$lambda$lambda$lambda_6($eventEntries$delegate);
      $this$invoke.types = invoke$lambda($eventTypes$delegate);
      $this$invoke.events = invoke$lambda_1($eventEntries$delegate);
      $this$invoke.onEventClick = home$lambda$lambda$lambda_7($event$delegate, $eventTypes$delegate);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Home_kt_l2bw1r;
  function init_properties_Home_kt_ssf8dh() {
    if (properties_initialized_Home_kt_l2bw1r) {
    } else {
      properties_initialized_Home_kt_l2bw1r = true;
      mainScope = MainScope();
      home = FC(home$lambda);
    }
  }
  var mainScope_0;
  function get_login() {
    init_properties_Login_kt_1enc6j();
    return login;
  }
  var login;
  function login$lambda($this$FC, it) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.main' call
    var tmp0__get_main__8dznaw = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'main';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, login$lambda$lambda);
    return Unit_getInstance();
  }
  function login$lambda$lambda($this$invoke) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-signin';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.form' call
    var tmp0__get_form__8ae7m5 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'form';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, login$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda($this$invoke) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$invoke.a3z(tmp, login$lambda$lambda$lambda$lambda);
    var tmp$ret$7;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp1__get_div__r5s89x = ReactHTML_getInstance();
    var tmp$ret$6;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'div';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    $this$invoke.a3z(tmp_0, login$lambda$lambda$lambda$lambda_0);
    var tmp$ret$11;
    // Inline function 'react.dom.html.ReactHTML.button' call
    var tmp2__get_button__8ht68t = ReactHTML_getInstance();
    var tmp$ret$10;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'button';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    $this$invoke.a3z(tmp_1, login$lambda$lambda$lambda$lambda_1);
    var tmp$ret$15;
    // Inline function 'react.dom.html.ReactHTML.a' call
    var tmp3__get_a__3ezfar = ReactHTML_getInstance();
    var tmp$ret$14;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = 'a';
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    tmp$ret$15 = tmp$ret$14;
    var tmp_2 = tmp$ret$15;
    $this$invoke.a3z(tmp_2, login$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-floating';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp0__get_input__prnny7 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'input';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, login$lambda$lambda$lambda$lambda$lambda);
    var tmp$ret$10;
    // Inline function 'react.dom.html.ReactHTML.label' call
    var tmp1__get_label__tem1k8 = ReactHTML_getInstance();
    var tmp$ret$9;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = 'label';
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var tmp_0 = tmp$ret$10;
    $this$invoke.a3z(tmp_0, login$lambda$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-control';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.placeholder = 'name@example.com';
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).email;
    $this$invoke.id = 'floatingInput';
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_Login_kt_1enc6j();
    $this$invoke.z3y('Email Address');
    $this$invoke.htmlFor = 'floatingInput';
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-floating';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp0__get_input__prnny7 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'input';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, login$lambda$lambda$lambda$lambda$lambda_1);
    var tmp$ret$10;
    // Inline function 'react.dom.html.ReactHTML.label' call
    var tmp1__get_label__tem1k8 = ReactHTML_getInstance();
    var tmp$ret$9;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = 'label';
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var tmp_0 = tmp$ret$10;
    $this$invoke.a3z(tmp_0, login$lambda$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda$lambda_1($this$invoke) {
    init_properties_Login_kt_1enc6j();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-control';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).password;
    $this$invoke.id = 'floatingPassword';
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda$lambda_2($this$invoke) {
    init_properties_Login_kt_1enc6j();
    $this$invoke.z3y('Password');
    $this$invoke.htmlFor = 'floatingPassword';
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda_1($this$invoke) {
    init_properties_Login_kt_1enc6j();
    $this$invoke.z3y('Login');
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'w-100 btn btn-lg btn-primary';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda$lambda_2($this$invoke) {
    init_properties_Login_kt_1enc6j();
    $this$invoke.z3y('First Time Here? Register!');
    $this$invoke.href = './register';
    return Unit_getInstance();
  }
  var properties_initialized_Login_kt_fsh261;
  function init_properties_Login_kt_1enc6j() {
    if (properties_initialized_Login_kt_fsh261) {
    } else {
      properties_initialized_Login_kt_fsh261 = true;
      mainScope_0 = MainScope();
      login = FC(login$lambda);
    }
  }
  function get_navbar() {
    init_properties_NavBar_kt_52b6vq();
    return navbar;
  }
  var navbar;
  function navbar$lambda($this$FC, it) {
    init_properties_NavBar_kt_52b6vq();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.nav' call
    var tmp0__get_nav__2k8w7c = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'nav';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, navbar$lambda$lambda);
    return Unit_getInstance();
  }
  function navbar$lambda$lambda($this$invoke) {
    init_properties_NavBar_kt_52b6vq();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'navbar navbar-expand-lg bg-body-tertiary';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'div';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, navbar$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function navbar$lambda$lambda$lambda($this$invoke) {
    init_properties_NavBar_kt_52b6vq();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'container-fluid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.a' call
    var tmp0__get_a__f88l3e = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'a';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, navbar$lambda$lambda$lambda$lambda);
    var tmp$ret$10;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp1__get_div__r5s89x = ReactHTML_getInstance();
    var tmp$ret$9;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = 'div';
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var tmp_0 = tmp$ret$10;
    $this$invoke.a3z(tmp_0, navbar$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function navbar$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_NavBar_kt_52b6vq();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'navbar-brand';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.z3y('BUJO!');
    return Unit_getInstance();
  }
  function navbar$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_NavBar_kt_52b6vq();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'collapse navbar-collapse';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.id = 'navbarText';
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.span' call
    var tmp0__get_span__8hjtqf = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'span';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, navbar$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function navbar$lambda$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_NavBar_kt_52b6vq();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'navbar-text ms-auto';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.z3y('logout');
    $this$invoke.onClick = navbar$lambda$lambda$lambda$lambda$lambda$lambda;
    return Unit_getInstance();
  }
  function navbar$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    init_properties_NavBar_kt_52b6vq();
    window.location.href = 'http://0.0.0.0:8080/login';
    return Unit_getInstance();
  }
  var properties_initialized_NavBar_kt_u1sw3y;
  function init_properties_NavBar_kt_52b6vq() {
    if (properties_initialized_NavBar_kt_u1sw3y) {
    } else {
      properties_initialized_NavBar_kt_u1sw3y = true;
      navbar = FC(navbar$lambda);
    }
  }
  var mainScope_1;
  function get_register() {
    init_properties_Register_kt_yqmsx5();
    return register;
  }
  var register;
  function register$lambda($this$FC, it) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.main' call
    var tmp0__get_main__8dznaw = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'main';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, register$lambda$lambda);
    return Unit_getInstance();
  }
  function register$lambda$lambda($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-signin';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.form' call
    var tmp0__get_form__8ae7m5 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'form';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, register$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$invoke.a3z(tmp, register$lambda$lambda$lambda$lambda);
    var tmp$ret$7;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp1__get_div__r5s89x = ReactHTML_getInstance();
    var tmp$ret$6;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'div';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    $this$invoke.a3z(tmp_0, register$lambda$lambda$lambda$lambda_0);
    var tmp$ret$11;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
    var tmp$ret$10;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'div';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    $this$invoke.a3z(tmp_1, register$lambda$lambda$lambda$lambda_1);
    var tmp$ret$15;
    // Inline function 'react.dom.html.ReactHTML.button' call
    var tmp3__get_button__4tapo = ReactHTML_getInstance();
    var tmp$ret$14;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = 'button';
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    tmp$ret$15 = tmp$ret$14;
    var tmp_2 = tmp$ret$15;
    $this$invoke.a3z(tmp_2, register$lambda$lambda$lambda$lambda_2);
    var tmp$ret$19;
    // Inline function 'react.dom.html.ReactHTML.a' call
    var tmp4__get_a__xb3g36 = ReactHTML_getInstance();
    var tmp$ret$18;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$17;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$16;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$16 = 'a';
    tmp$ret$17 = tmp$ret$16;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    var tmp_3 = tmp$ret$19;
    $this$invoke.a3z(tmp_3, register$lambda$lambda$lambda$lambda_3);
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-floating';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp0__get_input__prnny7 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'input';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, register$lambda$lambda$lambda$lambda$lambda);
    var tmp$ret$10;
    // Inline function 'react.dom.html.ReactHTML.label' call
    var tmp1__get_label__tem1k8 = ReactHTML_getInstance();
    var tmp$ret$9;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = 'label';
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var tmp_0 = tmp$ret$10;
    $this$invoke.a3z(tmp_0, register$lambda$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-control';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.placeholder = 'name@example.com';
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).email;
    $this$invoke.id = 'floatingInput';
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    $this$invoke.z3y('Email Address');
    $this$invoke.htmlFor = 'floatingInput';
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-floating';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp0__get_input__prnny7 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'input';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, register$lambda$lambda$lambda$lambda$lambda_1);
    var tmp$ret$10;
    // Inline function 'react.dom.html.ReactHTML.label' call
    var tmp1__get_label__tem1k8 = ReactHTML_getInstance();
    var tmp$ret$9;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = 'label';
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var tmp_0 = tmp$ret$10;
    $this$invoke.a3z(tmp_0, register$lambda$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda$lambda_1($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-control';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).password;
    $this$invoke.id = 'floatingPassword';
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda$lambda_2($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    $this$invoke.z3y('Password');
    $this$invoke.htmlFor = 'floatingPassword';
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda_1($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-floating';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp0__get_input__prnny7 = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = 'input';
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp = tmp$ret$6;
    $this$invoke.a3z(tmp, register$lambda$lambda$lambda$lambda$lambda_3);
    var tmp$ret$10;
    // Inline function 'react.dom.html.ReactHTML.label' call
    var tmp1__get_label__tem1k8 = ReactHTML_getInstance();
    var tmp$ret$9;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = 'label';
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var tmp_0 = tmp$ret$10;
    $this$invoke.a3z(tmp_0, register$lambda$lambda$lambda$lambda$lambda_4);
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda$lambda_3($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'form-control';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).password;
    $this$invoke.id = 'floatingPassword';
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda$lambda_4($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    $this$invoke.z3y('Confirm Password');
    $this$invoke.htmlFor = 'floatingPassword';
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda_2($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    $this$invoke.z3y('Create Account');
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'w-100 btn btn-lg btn-primary';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    return Unit_getInstance();
  }
  function register$lambda$lambda$lambda$lambda_3($this$invoke) {
    init_properties_Register_kt_yqmsx5();
    $this$invoke.z3y('Already Registered? Login!');
    $this$invoke.href = './login';
    return Unit_getInstance();
  }
  var properties_initialized_Register_kt_tm5139;
  function init_properties_Register_kt_yqmsx5() {
    if (properties_initialized_Register_kt_tm5139) {
    } else {
      properties_initialized_Register_kt_tm5139 = true;
      mainScope_1 = MainScope();
      register = FC(register$lambda);
    }
  }
  function get_newButton() {
    init_properties_ButtonComponent_kt_hmmtm1();
    return newButton;
  }
  var newButton;
  function get_saveButtonComponent() {
    init_properties_ButtonComponent_kt_hmmtm1();
    return saveButtonComponent;
  }
  var saveButtonComponent;
  function get_deleteButtonComponent() {
    init_properties_ButtonComponent_kt_hmmtm1();
    return deleteButtonComponent;
  }
  var deleteButtonComponent;
  function newButton$lambda($this$FC, props) {
    init_properties_ButtonComponent_kt_hmmtm1();
    var clickHandler = newButton$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.a' call
    var tmp0__get_a__f88l3e = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'a';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, newButton$lambda$lambda_0(clickHandler));
    return Unit_getInstance();
  }
  function newButton$lambda$lambda($props) {
    return function (it) {
      $props.onSubmit();
      return Unit_getInstance();
    };
  }
  function newButton$lambda$lambda$lambda($clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'fa fa-solid fa-plus fa-lg';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.onClick = $clickHandler;
      return Unit_getInstance();
    };
  }
  function newButton$lambda$lambda_0($clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'btn';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.href = '#';
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.i' call
      var tmp0__get_i__f88laa = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'i';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, newButton$lambda$lambda$lambda($clickHandler));
      return Unit_getInstance();
    };
  }
  function saveButtonComponent$lambda($this$FC, props) {
    init_properties_ButtonComponent_kt_hmmtm1();
    var clickHandler = saveButtonComponent$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.a' call
    var tmp0__get_a__f88l3e = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'a';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, saveButtonComponent$lambda$lambda_0(clickHandler));
    return Unit_getInstance();
  }
  function saveButtonComponent$lambda$lambda($props) {
    return function (it) {
      $props.onSubmit();
      return Unit_getInstance();
    };
  }
  function saveButtonComponent$lambda$lambda$lambda($clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'fa fa-solid fa-save fa-lg';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.onClick = $clickHandler;
      return Unit_getInstance();
    };
  }
  function saveButtonComponent$lambda$lambda_0($clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'btn';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.href = '#';
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.i' call
      var tmp0__get_i__f88laa = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'i';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, saveButtonComponent$lambda$lambda$lambda($clickHandler));
      return Unit_getInstance();
    };
  }
  function deleteButtonComponent$lambda($this$FC, props) {
    init_properties_ButtonComponent_kt_hmmtm1();
    var clickHandler = deleteButtonComponent$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.a' call
    var tmp0__get_a__f88l3e = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'a';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, deleteButtonComponent$lambda$lambda_0(clickHandler));
    return Unit_getInstance();
  }
  function deleteButtonComponent$lambda$lambda($props) {
    return function (it) {
      $props.onDelete($props.id);
      return Unit_getInstance();
    };
  }
  function deleteButtonComponent$lambda$lambda$lambda($clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'fa fa-solid fa-trash fa-lg';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.onClick = $clickHandler;
      return Unit_getInstance();
    };
  }
  function deleteButtonComponent$lambda$lambda_0($clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'btn';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.href = '#';
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.i' call
      var tmp0__get_i__f88laa = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'i';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, deleteButtonComponent$lambda$lambda$lambda($clickHandler));
      return Unit_getInstance();
    };
  }
  var properties_initialized_ButtonComponent_kt_99gb7p;
  function init_properties_ButtonComponent_kt_hmmtm1() {
    if (properties_initialized_ButtonComponent_kt_99gb7p) {
    } else {
      properties_initialized_ButtonComponent_kt_99gb7p = true;
      newButton = FC(newButton$lambda);
      saveButtonComponent = FC(saveButtonComponent$lambda);
      deleteButtonComponent = FC(deleteButtonComponent$lambda);
    }
  }
  function get_eventTypeCheckboxComponent() {
    init_properties_CheckboxComponent_kt_4e87nq();
    return eventTypeCheckboxComponent;
  }
  var eventTypeCheckboxComponent;
  function eventTypeCheckboxComponent$lambda($this$FC, props) {
    init_properties_CheckboxComponent_kt_4e87nq();
    var clickHandler = eventTypeCheckboxComponent$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, eventTypeCheckboxComponent$lambda$lambda_0(props, clickHandler));
    return Unit_getInstance();
  }
  function eventTypeCheckboxComponent$lambda$lambda($props) {
    return function (it) {
      $props.onSubmit();
      return Unit_getInstance();
    };
  }
  function eventTypeCheckboxComponent$lambda$lambda$lambda($props, $clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'form-check-input';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).checkbox;
      $this$invoke.id = $props.text;
      $this$invoke.onChange = $clickHandler;
      $this$invoke.checked = $props.selected;
      return Unit_getInstance();
    };
  }
  function eventTypeCheckboxComponent$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'form-check-label';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.z3y($props.text);
      return Unit_getInstance();
    };
  }
  function eventTypeCheckboxComponent$lambda$lambda_0($props, $clickHandler) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'form-check';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp0__get_input__prnny7 = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'input';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, eventTypeCheckboxComponent$lambda$lambda$lambda($props, $clickHandler));
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp1__get_label__tem1k8 = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'label';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp_0 = tmp$ret$10;
      $this$invoke.a3z(tmp_0, eventTypeCheckboxComponent$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  var properties_initialized_CheckboxComponent_kt_hrb52i;
  function init_properties_CheckboxComponent_kt_4e87nq() {
    if (properties_initialized_CheckboxComponent_kt_hrb52i) {
    } else {
      properties_initialized_CheckboxComponent_kt_hrb52i = true;
      eventTypeCheckboxComponent = FC(eventTypeCheckboxComponent$lambda);
    }
  }
  function get_dateComponent() {
    init_properties_DateEntryComponent_kt_y845vj();
    return dateComponent;
  }
  var dateComponent;
  function dateComponent$lambda($this$FC, props) {
    init_properties_DateEntryComponent_kt_y845vj();
    var changeHandler = dateComponent$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp0__get_input__prnny7 = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'input';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, dateComponent$lambda$lambda_0(props, changeHandler));
    return Unit_getInstance();
  }
  function dateComponent$lambda$lambda($props) {
    return function (it) {
      println((new Util()).l40(it.target.value));
      $props.onTimestampChanged((new Util()).l40(it.target.value));
      return Unit_getInstance();
    };
  }
  function dateComponent$lambda$lambda_0($props, $changeHandler) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).date;
      $this$invoke.value = (new Util()).k40($props.timestamp);
      $this$invoke.onChange = $changeHandler;
      return Unit_getInstance();
    };
  }
  var properties_initialized_DateEntryComponent_kt_maylqz;
  function init_properties_DateEntryComponent_kt_y845vj() {
    if (properties_initialized_DateEntryComponent_kt_maylqz) {
    } else {
      properties_initialized_DateEntryComponent_kt_maylqz = true;
      dateComponent = FC(dateComponent$lambda);
    }
  }
  function get_eventEntryComponent() {
    init_properties_EventEntryComponent_kt_gv49ch();
    return eventEntryComponent;
  }
  var eventEntryComponent;
  function eventEntryComponent$lambda($this$FC, props) {
    init_properties_EventEntryComponent_kt_gv49ch();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, eventEntryComponent$lambda$lambda(props));
    return Unit_getInstance();
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($props) {
    return function (it) {
      $props.onTimestampChanged(it);
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      $this$invoke.timestamp = $props.selectedEvent.x3z_1;
      $this$invoke.onTimestampChanged = eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($props);
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'col-auto';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_dateComponent();
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function () {
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotBlank' call
      var tmp0_isNotBlank = $props.selectedEvent.y3z_1;
      tmp$ret$0 = !isBlank(tmp0_isNotBlank);
      if (tmp$ret$0) {
        tmp = $props.onSaveEvent();
      }
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($props);
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'col-auto';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_saveButtonComponent();
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($props) {
    return function () {
      $props.onNewEventClick();
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($props) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($props);
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda_1($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'col-auto';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_newButton();
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'input-group';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'div';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda($props));
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp1__get_div__r5s89x = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'div';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp_0 = tmp$ret$10;
      $this$invoke.a3z(tmp_0, eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda_0($props));
      var tmp$ret$14;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
      var tmp$ret$13;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = 'div';
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      var tmp_1 = tmp$ret$14;
      $this$invoke.a3z(tmp_1, eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda_1($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'row';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'div';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda$lambda($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda_2($props) {
    return function (it) {
      $props.onTextChanged(it);
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      $this$invoke.onChange = eventEntryComponent$lambda$lambda$lambda$lambda$lambda$lambda_2($props);
      $this$invoke.text = $props.selectedEvent.y3z_1;
      $this$invoke.rows = 20;
      $this$invoke.cols = 50;
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'row';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_inputComponent();
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'col';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'div';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda$lambda($props));
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp1__get_div__r5s89x = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'div';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp_0 = tmp$ret$10;
      $this$invoke.a3z(tmp_0, eventEntryComponent$lambda$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  function eventEntryComponent$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'container';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'div';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, eventEntryComponent$lambda$lambda$lambda($props));
      return Unit_getInstance();
    };
  }
  var properties_initialized_EventEntryComponent_kt_2gw7at;
  function init_properties_EventEntryComponent_kt_gv49ch() {
    if (properties_initialized_EventEntryComponent_kt_2gw7at) {
    } else {
      properties_initialized_EventEntryComponent_kt_2gw7at = true;
      eventEntryComponent = FC(eventEntryComponent$lambda);
    }
  }
  function get_entryListComponent() {
    init_properties_EventTableComponent_kt_f0ctth();
    return entryListComponent;
  }
  var entryListComponent;
  function entryListComponent$lambda($this$FC, props) {
    init_properties_EventTableComponent_kt_f0ctth();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.h4' call
    var tmp0__get_h4__p4e2wr = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'h4';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, entryListComponent$lambda$lambda);
    var tmp$ret$7;
    // Inline function 'react.dom.html.ReactHTML.table' call
    var tmp1__get_table__pm8xdu = ReactHTML_getInstance();
    var tmp$ret$6;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'table';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    $this$FC.a3z(tmp_0, entryListComponent$lambda$lambda_0(props));
    return Unit_getInstance();
  }
  function entryListComponent$lambda$lambda($this$invoke) {
    init_properties_EventTableComponent_kt_f0ctth();
    $this$invoke.z3y('Entries');
    return Unit_getInstance();
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda($element, $props) {
    return function ($this$invoke) {
      $this$invoke.id = $element.w3z_1;
      $this$invoke.onDelete = $props.onDelete;
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda($element, $props) {
    return function ($this$invoke) {
      var tmp = get_deleteButtonComponent();
      $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda($element, $props));
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda_0($element) {
    return function ($this$invoke) {
      var d = new Date($element.x3z_1);
      $this$invoke.z3y(d.toDateString());
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda_0($element) {
    return function ($this$invoke) {
      $this$invoke.z3y($element.y3z_1);
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda_1($props, $element) {
    return function (it) {
      $props.onEventClick($element);
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda_1($element, $props) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'div';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda_0($element));
      $this$invoke.onClick = entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda_1($props, $element);
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($tmp1_let) {
    return function ($this$invoke) {
      var tmp0_safe_receiver = $tmp1_let;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g40_1;
      var e = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      $this$invoke.z3y(e);
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda($tmp1_let) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp0__get_label__ojxecp = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'label';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($tmp1_let));
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda_2($element, $props) {
    return function ($this$invoke) {
      var tmp0_forEach = $element.z3z_1;
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'component.entryListComponent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp$ret$2;
        // Inline function 'kotlin.collections.find' call
        var tmp0_find = $props.types;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var tmp0_iterator_0 = tmp0_find.d();
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            var tmp$ret$0;
            // Inline function 'component.entryListComponent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = element_0.f40_1.equals(element);
            if (tmp$ret$0) {
              tmp$ret$1 = element_0;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        tmp$ret$2 = tmp$ret$1;
        var tmp1_let = tmp$ret$2;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'react.dom.html.ReactHTML.li' call
        var tmp0__get_li__p4dyoc = ReactHTML_getInstance();
        var tmp$ret$5;
        // Inline function 'react.IntrinsicType' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'li';
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        var tmp = tmp$ret$6;
        $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda(tmp1_let));
        tmp$ret$7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda$lambda_2($element, $props) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.ul' call
      var tmp0__get_ul__p4drxi = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'ul';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda$lambda$lambda_2($element, $props));
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda$lambda($element, $props) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp0__get_td__p4dsv3 = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'td';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda$lambda($element, $props));
      var tmp$ret$7;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp1__get_td__sddrnk = ReactHTML_getInstance();
      var tmp$ret$6;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'td';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp_0 = tmp$ret$7;
      $this$invoke.a3z(tmp_0, entryListComponent$lambda$lambda$lambda$lambda$lambda_0($element));
      var tmp$ret$11;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp2__get_td__vmdqg1 = ReactHTML_getInstance();
      var tmp$ret$10;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'td';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      var tmp_1 = tmp$ret$11;
      $this$invoke.a3z(tmp_1, entryListComponent$lambda$lambda$lambda$lambda$lambda_1($element, $props));
      var tmp$ret$15;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp3__get_td__yvdp8i = ReactHTML_getInstance();
      var tmp$ret$14;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$12 = 'td';
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      var tmp_2 = tmp$ret$15;
      $this$invoke.a3z(tmp_2, entryListComponent$lambda$lambda$lambda$lambda$lambda_2($element, $props));
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp0_forEach = $props.events;
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'component.entryListComponent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'react.dom.html.ReactHTML.tr' call
        var tmp0__get_tr__p4dsj1 = ReactHTML_getInstance();
        var tmp$ret$2;
        // Inline function 'react.IntrinsicType' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'tr';
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var tmp = tmp$ret$3;
        $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda$lambda(element, $props));
      }
      return Unit_getInstance();
    };
  }
  function entryListComponent$lambda$lambda_0($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'table table-hover table-bordered';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.tbody' call
      var tmp0__get_tbody__kqsc7f = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'tbody';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, entryListComponent$lambda$lambda$lambda($props));
      return Unit_getInstance();
    };
  }
  var properties_initialized_EventTableComponent_kt_m4rrt;
  function init_properties_EventTableComponent_kt_f0ctth() {
    if (properties_initialized_EventTableComponent_kt_m4rrt) {
    } else {
      properties_initialized_EventTableComponent_kt_m4rrt = true;
      entryListComponent = FC(entryListComponent$lambda);
    }
  }
  function get_eventTypeComponent() {
    init_properties_EventTypeComponent_kt_mdizvz();
    return eventTypeComponent;
  }
  var eventTypeComponent;
  function eventTypeComponent$lambda($this$FC, props) {
    init_properties_EventTypeComponent_kt_mdizvz();
    var newLabelText$delegate = useState('');
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, eventTypeComponent$lambda$lambda(props, newLabelText$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda_5($newLabelText$delegate) {
    init_properties_EventTypeComponent_kt_mdizvz();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('newLabelText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $newLabelText$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_6($newLabelText$delegate, value) {
    init_properties_EventTypeComponent_kt_mdizvz();
    var tmp0_setValue = getLocalDelegateReference('newLabelText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $newLabelText$delegate;
    return tmp$ret$0[1](value);
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda($props, $newLabelText$delegate) {
    return function () {
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp0_isNotEmpty = invoke$lambda_5($newLabelText$delegate);
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
      if (tmp$ret$0) {
        $props.onTypeAdded(invoke$lambda_5($newLabelText$delegate));
        invoke$lambda_6($newLabelText$delegate, '');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda($props, $newLabelText$delegate) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda($props, $newLabelText$delegate);
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function (it) {
      var tmp;
      if (window.confirm('Are you sure you want to delete the checked labels? They will be removed from all entries!')) {
        tmp = $props.onTypesDeleted();
      } else {
        println('nevermind!');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      $this$invoke.onDelete = eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($props);
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda($props, $newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp = get_newButton();
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda($props, $newLabelText$delegate));
      var tmp_0 = get_deleteButtonComponent();
      $this$invoke.a3z(tmp_0, eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda($props, $newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'div';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda($props, $newLabelText$delegate));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($newLabelText$delegate) {
    return function (it) {
      invoke$lambda_6($newLabelText$delegate, it);
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($newLabelText$delegate) {
    return function ($this$invoke) {
      $this$invoke.text = invoke$lambda_5($newLabelText$delegate);
      $this$invoke.rows = 1;
      $this$invoke.cols = 20;
      $this$invoke.onChange = eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($newLabelText$delegate);
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda_1($newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'input-group';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_inputComponent();
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($newLabelText$delegate));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda_0($newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'div';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda_1($newLabelText$delegate));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda_0($newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp0__get_td__p4dsv3 = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'td';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda_0($newLabelText$delegate));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($props, $element) {
    return function () {
      $props.onCheckChange($element.f40_1, !$element.h40_1);
      println($element.h40_1);
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda_2($element, $props) {
    return function ($this$invoke) {
      $this$invoke.text = $element.g40_1;
      $this$invoke.selected = $element.h40_1;
      $this$invoke.onSubmit = eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($props, $element);
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda$lambda_1($props) {
    return function ($this$invoke) {
      var tmp0_forEach = $props.types;
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'component.eventTypeComponent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = get_eventTypeCheckboxComponent();
        $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda$lambda_2(element, $props));
      }
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda$lambda_1($props) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp0__get_td__p4dsv3 = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'td';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda$lambda_1($props));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda$lambda($props, $newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.tr' call
      var tmp0__get_tr__p4dsj1 = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'tr';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda$lambda($props, $newLabelText$delegate));
      var tmp$ret$7;
      // Inline function 'react.dom.html.ReactHTML.tr' call
      var tmp1__get_tr__sddrbi = ReactHTML_getInstance();
      var tmp$ret$6;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'tr';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp_0 = tmp$ret$7;
      $this$invoke.a3z(tmp_0, eventTypeComponent$lambda$lambda$lambda$lambda_0($newLabelText$delegate));
      var tmp$ret$11;
      // Inline function 'react.dom.html.ReactHTML.tr' call
      var tmp2__get_tr__vmdq3z = ReactHTML_getInstance();
      var tmp$ret$10;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'tr';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      var tmp_1 = tmp$ret$11;
      $this$invoke.a3z(tmp_1, eventTypeComponent$lambda$lambda$lambda$lambda_1($props));
      return Unit_getInstance();
    };
  }
  function eventTypeComponent$lambda$lambda($props, $newLabelText$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.table' call
      var tmp0__get_table__krka6b = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'table';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.a3z(tmp, eventTypeComponent$lambda$lambda$lambda($props, $newLabelText$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_EventTypeComponent_kt_agdfrf;
  function init_properties_EventTypeComponent_kt_mdizvz() {
    if (properties_initialized_EventTypeComponent_kt_agdfrf) {
    } else {
      properties_initialized_EventTypeComponent_kt_agdfrf = true;
      eventTypeComponent = FC(eventTypeComponent$lambda);
    }
  }
  function get_inputComponent() {
    init_properties_InputComponent_kt_6hijhj();
    return inputComponent;
  }
  var inputComponent;
  function inputComponent$lambda($this$FC, props) {
    init_properties_InputComponent_kt_6hijhj();
    var changeHandler = inputComponent$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.textarea' call
    var tmp0__get_textarea__5jteeh = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'textarea';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, inputComponent$lambda$lambda_0(props, changeHandler));
    return Unit_getInstance();
  }
  function inputComponent$lambda$lambda($props) {
    return function (it) {
      $props.onChange(it.target.value);
      return Unit_getInstance();
    };
  }
  function inputComponent$lambda$lambda_0($props, $changeHandler) {
    return function ($this$invoke) {
      $this$invoke.rows = $props.rows;
      $this$invoke.cols = $props.cols;
      $this$invoke.value = $props.text;
      $this$invoke.onChange = $changeHandler;
      return Unit_getInstance();
    };
  }
  var properties_initialized_InputComponent_kt_m97mtn;
  function init_properties_InputComponent_kt_6hijhj() {
    if (properties_initialized_InputComponent_kt_m97mtn) {
    } else {
      properties_initialized_InputComponent_kt_m97mtn = true;
      inputComponent = FC(inputComponent$lambda);
    }
  }
  function get_journalForm() {
    init_properties_JournalForm_kt_98uoft();
    return journalForm;
  }
  var journalForm;
  function journalForm$lambda($this$FC, props) {
    init_properties_JournalForm_kt_98uoft();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, journalForm$lambda$lambda(props));
    return Unit_getInstance();
  }
  function journalForm$lambda$lambda$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      $this$invoke.types = $props.types;
      $this$invoke.onTypeAdded = $props.onTypeAdded;
      $this$invoke.onCheckChange = $props.onCheckChange;
      $this$invoke.onTypesDeleted = $props.onTypesDeleted;
      return Unit_getInstance();
    };
  }
  function journalForm$lambda$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'col-2';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_eventTypeComponent();
      $this$invoke.a3z(tmp, journalForm$lambda$lambda$lambda$lambda$lambda($props));
      return Unit_getInstance();
    };
  }
  function journalForm$lambda$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      $this$invoke.onSaveEvent = $props.onSaveEvent;
      $this$invoke.selectedEvent = $props.selectedEvent;
      $this$invoke.onNewEventClick = $props.onNewEventClick;
      $this$invoke.onTimestampChanged = $props.onTimestampChanged;
      $this$invoke.onTextChanged = $props.onTextChanged;
      return Unit_getInstance();
    };
  }
  function journalForm$lambda$lambda$lambda$lambda_0($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'col-10';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp = get_eventEntryComponent();
      $this$invoke.a3z(tmp, journalForm$lambda$lambda$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  function journalForm$lambda$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'row';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'div';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, journalForm$lambda$lambda$lambda$lambda($props));
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp1__get_div__r5s89x = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'div';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp_0 = tmp$ret$10;
      $this$invoke.a3z(tmp_0, journalForm$lambda$lambda$lambda$lambda_0($props));
      return Unit_getInstance();
    };
  }
  function journalForm$lambda$lambda($props) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'container text-left div-padded';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'div';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.a3z(tmp, journalForm$lambda$lambda$lambda($props));
      return Unit_getInstance();
    };
  }
  var properties_initialized_JournalForm_kt_xjlzl7;
  function init_properties_JournalForm_kt_98uoft() {
    if (properties_initialized_JournalForm_kt_xjlzl7) {
    } else {
      properties_initialized_JournalForm_kt_xjlzl7 = true;
      journalForm = FC(journalForm$lambda);
    }
  }
  //region block: post-declaration
  $serializer.prototype.z2d = typeParametersSerializers;
  $serializer_0.prototype.z2d = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=bujo.js.map
