(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@emotion/css', 'react-dom/client', 'react', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js', './ktor-ktor-client-content-negotiation-js-ir.js', './ktor-ktor-serialization-kotlinx-json-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@emotion/css'), require('react-dom/client'), require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'bujo'.");
    }
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
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'bujo'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'bujo'.");
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
    root.bujo = factory(typeof bujo === 'undefined' ? {} : bujo, this['@emotion/css'], this['react-dom/client'], react, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['ktor-ktor-client-content-negotiation-js-ir'], this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, $module$_emotion_css_2enn37, $module$react_dom_client_y5z5eu, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var css = $module$_emotion_css_2enn37.css;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var useState = $module$react.useState;
  var objectMeta = kotlin_kotlin.$_$.n9;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var Long = kotlin_kotlin.$_$.xb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
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
  var toInt = kotlin_kotlin.$_$.ab;
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
  var arrayOf = kotlin_kotlin.$_$.lc;
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
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.oc;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var KProperty0 = kotlin_kotlin.$_$.da;
  var THROW_ISE = kotlin_kotlin.$_$.cc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.q8;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.g;
  var emptyList = kotlin_kotlin.$_$.p5;
  var useEffectOnce = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.ca;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var SuspendFunction1 = kotlin_kotlin.$_$.y7;
  //endregion
  //region block: pre-declaration
  $postEntryCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $postEntryCOROUTINE$0.prototype.constructor = $postEntryCOROUTINE$0;
  $putEntryCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $putEntryCOROUTINE$1.prototype.constructor = $putEntryCOROUTINE$1;
  $getEntriesCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $getEntriesCOROUTINE$2.prototype.constructor = $getEntriesCOROUTINE$2;
  $deleteEntryCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $deleteEntryCOROUTINE$3.prototype.constructor = $deleteEntryCOROUTINE$3;
  $loadEventCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $loadEventCOROUTINE$4.prototype.constructor = $loadEventCOROUTINE$4;
  $getEventTypesCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $getEventTypesCOROUTINE$5.prototype.constructor = $getEventTypesCOROUTINE$5;
  Welcome$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$slambda.prototype.constructor = Welcome$lambda$lambda$slambda;
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.constructor = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda;
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.prototype.constructor = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1;
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.prototype.constructor = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3;
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.prototype.constructor = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5;
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.constructor = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda;
  //endregion
  function Companion() {
    Companion_instance = this;
    this.l3z_1 = '/entry';
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
    this.m3z_1 = tmp0_serialDesc;
  }
  $serializer.prototype.h24 = function () {
    return this.m3z_1;
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
    var tmp0_desc = this.m3z_1;
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
  $serializer.prototype.n3z = function (encoder, value) {
    var tmp0_desc = this.m3z_1;
    var tmp1_output = encoder.e27(tmp0_desc);
    tmp1_output.l28(tmp0_desc, 0, value.o3z_1);
    tmp1_output.l28(tmp0_desc, 1, value.p3z_1);
    tmp1_output.p28(tmp0_desc, 2, value.q3z_1);
    tmp1_output.q28(tmp0_desc, 3, new ArrayListSerializer(LongSerializer_getInstance()), value.r3z_1);
    tmp1_output.f27(tmp0_desc);
  };
  $serializer.prototype.i24 = function (encoder, value) {
    return this.n3z(encoder, value instanceof Event ? value : THROW_CCE());
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
      throwMissingFieldException(seen1, 15, $serializer_getInstance().m3z_1);
    }
    $this.o3z_1 = id;
    $this.p3z_1 = timestamp;
    $this.q3z_1 = value;
    $this.r3z_1 = eventTypes;
    return $this;
  }
  function Event_init_$Create$(seen1, id, timestamp, value, eventTypes, serializationConstructorMarker) {
    return Event_init_$Init$(seen1, id, timestamp, value, eventTypes, serializationConstructorMarker, Object.create(Event.prototype));
  }
  function Event(id, timestamp, value, eventTypes) {
    Companion_getInstance_2();
    this.o3z_1 = id;
    this.p3z_1 = timestamp;
    this.q3z_1 = value;
    this.r3z_1 = eventTypes;
  }
  Event.prototype.y3x = function () {
    return this.o3z_1;
  };
  Event.prototype.s3z = function () {
    return this.p3z_1;
  };
  Event.prototype.t = function () {
    return this.q3z_1;
  };
  Event.$metadata$ = classMeta('Event', undefined, undefined, {0: $serializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
    this.t3z_1 = '/type';
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
    this.u3z_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.h24 = function () {
    return this.u3z_1;
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
    var tmp0_desc = this.u3z_1;
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
  $serializer_0.prototype.v3z = function (encoder, value) {
    var tmp0_desc = this.u3z_1;
    var tmp1_output = encoder.e27(tmp0_desc);
    tmp1_output.l28(tmp0_desc, 0, value.w3z_1);
    tmp1_output.p28(tmp0_desc, 1, value.x3z_1);
    tmp1_output.h28(tmp0_desc, 2, value.y3z_1);
    tmp1_output.f27(tmp0_desc);
  };
  $serializer_0.prototype.i24 = function (encoder, value) {
    return this.v3z(encoder, value instanceof EventType ? value : THROW_CCE());
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
      throwMissingFieldException(seen1, 7, $serializer_getInstance_0().u3z_1);
    }
    $this.w3z_1 = id;
    $this.x3z_1 = text;
    $this.y3z_1 = selected;
    return $this;
  }
  function EventType_init_$Create$(seen1, id, text, selected, serializationConstructorMarker) {
    return EventType_init_$Init$(seen1, id, text, selected, serializationConstructorMarker, Object.create(EventType.prototype));
  }
  function EventType(id, text, selected) {
    Companion_getInstance_3();
    this.w3z_1 = id;
    this.x3z_1 = text;
    this.y3z_1 = selected;
  }
  EventType.prototype.y3x = function () {
    return this.w3z_1;
  };
  EventType.prototype.z3z = function () {
    return this.x3z_1;
  };
  EventType.prototype.a40 = function (_set____db54di) {
    this.y3z_1 = _set____db54di;
  };
  EventType.prototype.b40 = function () {
    return this.y3z_1;
  };
  EventType.prototype.toString = function () {
    return 'EventType(id=' + toString(this.w3z_1) + ', text=' + this.x3z_1 + ', selected=' + this.y3z_1 + ')';
  };
  EventType.prototype.hashCode = function () {
    var result = this.w3z_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.x3z_1) | 0;
    result = imul(result, 31) + (this.y3z_1 | 0) | 0;
    return result;
  };
  EventType.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EventType))
      return false;
    var tmp0_other_with_cast = other instanceof EventType ? other : THROW_CCE();
    if (!this.w3z_1.equals(tmp0_other_with_cast.w3z_1))
      return false;
    if (!(this.x3z_1 === tmp0_other_with_cast.x3z_1))
      return false;
    if (!(this.y3z_1 === tmp0_other_with_cast.y3z_1))
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
  Util.prototype.c40 = function (timestamp) {
    var instantNow = Companion_getInstance().e3y(timestamp);
    var d = toLocalDateTime(instantNow, Companion_getInstance_0().t3y()).r3y();
    return '' + d.m3y() + '-' + appendZero(this, d.n3y()) + '-' + appendZero(this, d.o3y());
  };
  Util.prototype.d40 = function (input) {
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
  function postEntry(event, $cont) {
    var tmp = new $postEntryCOROUTINE$0(event, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function putEntry(event, $cont) {
    var tmp = new $putEntryCOROUTINE$1(event, $cont);
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
  function loadEvent(id, $cont) {
    var tmp = new $loadEventCOROUTINE$4(id, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function getEventTypes($cont) {
    var tmp = new $getEventTypesCOROUTINE$5($cont);
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
  function $postEntryCOROUTINE$0(event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m40_1 = event;
  }
  $postEntryCOROUTINE$0.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.n40_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.o40_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.o40_1);
            contentType(tmp0_apply, Application_getInstance().j1p_1);
            var tmp0_subject = this.m40_1;
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
                tmp0_apply.k2z_1 = this.m40_1;
                tmp0_apply.i35(null);
              } else {
                tmp0_apply.k2z_1 = this.m40_1;
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

            tmp_2.p40_1 = tmp0_apply;
            this.p40_1.i2z_1 = Companion_getInstance_1().g1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.p40_1, this.n40_1)).l3p(this);
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
  $postEntryCOROUTINE$0.$metadata$ = classMeta('$postEntryCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $putEntryCOROUTINE$1(event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y40_1 = event;
  }
  $putEntryCOROUTINE$1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            tmp_0.z40_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.a41_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.a41_1);
            contentType(tmp0_apply, Application_getInstance().j1p_1);
            var tmp0_subject = this.y40_1;
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
                tmp0_apply.k2z_1 = this.y40_1;
                tmp0_apply.i35(null);
              } else {
                tmp0_apply.k2z_1 = this.y40_1;
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

            tmp_2.b41_1 = tmp0_apply;
            this.b41_1.i2z_1 = Companion_getInstance_1().h1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.b41_1, this.z40_1)).l3p(this);
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
  $putEntryCOROUTINE$1.$metadata$ = classMeta('$putEntryCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
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
            tmp_0.k41_1 = get_jsonClient();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, '/events');
            ;
            tmp_1.l41_1 = tmp0_apply;
            this.l41_1.i2z_1 = Companion_getInstance_1().f1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.l41_1, this.k41_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m41_1 = suspendResult;
            this.oh_1 = 2;
            var tmp_2 = this.m41_1.p32();
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
    this.v41_1 = id;
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
            tmp_0.w41_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.x41_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.x41_1);
            parameter(tmp0_apply, 'id', this.v41_1);
            ;
            tmp_2.y41_1 = tmp0_apply;
            this.y41_1.i2z_1 = Companion_getInstance_1().j1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.y41_1, this.w41_1)).l3p(this);
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
  function $loadEventCOROUTINE$4(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h42_1 = id;
  }
  $loadEventCOROUTINE$4.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            var tmp_0 = this;
            tmp_0.i42_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_2();
            tmp_1.j42_1 = '/entry';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.j42_1);
            parameter(tmp0_apply, 'id', this.h42_1);
            ;
            tmp_2.k42_1 = tmp0_apply;
            this.k42_1.i2z_1 = Companion_getInstance_1().f1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.k42_1, this.i42_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l42_1 = suspendResult;
            this.oh_1 = 2;
            var tmp_3 = this.l42_1.p32();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(Event);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(Event), arrayOf([]), false);
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
            var event = suspendResult instanceof Event ? suspendResult : THROW_CCE();
            WIP_getInstance().y42_1 = event.o3z_1;
            WIP_getInstance().a43_1.ka();
            WIP_getInstance().a43_1.l(event.r3z_1);
            ;
            return event;
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
  $loadEventCOROUTINE$4.$metadata$ = classMeta('$loadEventCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $getEventTypesCOROUTINE$5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
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
            tmp_0.u42_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_3();
            tmp_1.v42_1 = '/type';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.v42_1);
            ;
            tmp_2.w42_1 = tmp0_apply;
            this.w42_1.i2z_1 = Companion_getInstance_1().f1v_1;
            this.oh_1 = 1;
            suspendResult = (new HttpStatement(this.w42_1, this.u42_1)).l3p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x42_1 = suspendResult;
            this.oh_1 = 2;
            var tmp_3 = this.x42_1.p32();
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
              list.b(new EventType(element.w3z_1, element.x3z_1, WIP_getInstance().a43_1.l1(element.w3z_1)));
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
  var properties_initialized_ApiClient_kt_hvyiqd;
  function init_properties_ApiClient_kt_yp1dip() {
    if (properties_initialized_ApiClient_kt_hvyiqd) {
    } else {
      properties_initialized_ApiClient_kt_hvyiqd = true;
      jsonClient = HttpClient(jsonClient$lambda);
    }
  }
  function get_buttonComponent() {
    init_properties_ButtonComponent_kt_hmmtm1();
    return buttonComponent;
  }
  var buttonComponent;
  function buttonComponent$lambda($this$FC, props) {
    init_properties_ButtonComponent_kt_hmmtm1();
    var clickHandler = buttonComponent$lambda$lambda(props);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.button' call
    var tmp0__get_button__p7sxb3 = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'button';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, buttonComponent$lambda$lambda_0(props, clickHandler));
    return Unit_getInstance();
  }
  function buttonComponent$lambda$lambda($props) {
    return function (it) {
      $props.onSubmit();
      return Unit_getInstance();
    };
  }
  function buttonComponent$lambda$lambda_0($props, $clickHandler) {
    return function ($this$invoke) {
      $this$invoke.z3y($props.text);
      var tmp0_css = $this$invoke;
      var tmp$ret$3;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'buttonComponent.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.alignContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', baseline: 'baseline', normal: 'normal'}/*union*/).end;
      tmp$ret$1 = tmp0_apply;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = css(tmp$ret$2);
      tmp0_css.className = tmp$ret$3;
      $this$invoke.onClick = $clickHandler;
      return Unit_getInstance();
    };
  }
  var properties_initialized_ButtonComponent_kt_99gb7p;
  function init_properties_ButtonComponent_kt_hmmtm1() {
    if (properties_initialized_ButtonComponent_kt_99gb7p) {
    } else {
      properties_initialized_ButtonComponent_kt_99gb7p = true;
      buttonComponent = FC(buttonComponent$lambda);
    }
  }
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    var tmp = get_Welcome();
    var welcome = create(tmp, main$lambda);
    createRoot(container).render(welcome);
  }
  function main$lambda($this$create) {
    $this$create.name = 'Kotlin/JS2';
    return Unit_getInstance();
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
      println((new Util()).d40(it.target.value));
      $props.onChange((new Util()).d40(it.target.value));
      return Unit_getInstance();
    };
  }
  function dateComponent$lambda$lambda_0($props, $changeHandler) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).date;
      $this$invoke.value = (new Util()).c40($props.timestamp);
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
  function get_deleteEntryButtonComponent() {
    init_properties_DeleteEntryButtonComponent_kt_pw3klm();
    return deleteEntryButtonComponent;
  }
  var deleteEntryButtonComponent;
  function deleteEntryButtonComponent$lambda($this$FC, props) {
    init_properties_DeleteEntryButtonComponent_kt_pw3klm();
    var entryId$delegate = useState(props.id);
    var clickHandler = deleteEntryButtonComponent$lambda$lambda(props, entryId$delegate);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.button' call
    var tmp0__get_button__p7sxb3 = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'button';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.a3z(tmp, deleteEntryButtonComponent$lambda$lambda_0(clickHandler));
    return Unit_getInstance();
  }
  function invoke$lambda($entryId$delegate) {
    init_properties_DeleteEntryButtonComponent_kt_pw3klm();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('entryId', KProperty0, false, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryId$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function deleteEntryButtonComponent$lambda$lambda($props, $entryId$delegate) {
    return function (it) {
      println('click id ' + toString(invoke$lambda($entryId$delegate)));
      $props.onSubmit($props.id);
      return Unit_getInstance();
    };
  }
  function deleteEntryButtonComponent$lambda$lambda_0($clickHandler) {
    return function ($this$invoke) {
      $this$invoke.z3y('X');
      var tmp0_css = $this$invoke;
      var tmp$ret$3;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'deleteEntryButtonComponent.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.alignContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', baseline: 'baseline', normal: 'normal'}/*union*/).end;
      tmp$ret$1 = tmp0_apply;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = css(tmp$ret$2);
      tmp0_css.className = tmp$ret$3;
      $this$invoke.onClick = $clickHandler;
      return Unit_getInstance();
    };
  }
  var properties_initialized_DeleteEntryButtonComponent_kt_cldr16;
  function init_properties_DeleteEntryButtonComponent_kt_pw3klm() {
    if (properties_initialized_DeleteEntryButtonComponent_kt_cldr16) {
    } else {
      properties_initialized_DeleteEntryButtonComponent_kt_cldr16 = true;
      deleteEntryButtonComponent = FC(deleteEntryButtonComponent$lambda);
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
      $this$invoke.rows = 20;
      $this$invoke.cols = 50;
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
  function get_selectableButtonComponent() {
    init_properties_SelectableButtonComponent_kt_mo60in();
    return selectableButtonComponent;
  }
  var selectableButtonComponent;
  function selectableButtonComponent$lambda($this$FC, props) {
    init_properties_SelectableButtonComponent_kt_mo60in();
    var clickHandler = selectableButtonComponent$lambda$lambda(props);
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
    $this$FC.a3z(tmp, selectableButtonComponent$lambda$lambda_0(props, clickHandler));
    return Unit_getInstance();
  }
  function selectableButtonComponent$lambda$lambda($props) {
    return function (it) {
      $props.onSubmit();
      return Unit_getInstance();
    };
  }
  function selectableButtonComponent$lambda$lambda$lambda($props, $clickHandler) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).checkbox;
      $this$invoke.id = $props.text;
      $this$invoke.onChange = $clickHandler;
      $this$invoke.checked = $props.selected;
      return Unit_getInstance();
    };
  }
  function selectableButtonComponent$lambda$lambda_0($props, $clickHandler) {
    return function ($this$invoke) {
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
      $this$invoke.a3z(tmp, selectableButtonComponent$lambda$lambda$lambda($props, $clickHandler));
      $this$invoke.z3y($props.text);
      return Unit_getInstance();
    };
  }
  var properties_initialized_SelectableButtonComponent_kt_jbvuyj;
  function init_properties_SelectableButtonComponent_kt_mo60in() {
    if (properties_initialized_SelectableButtonComponent_kt_jbvuyj) {
    } else {
      properties_initialized_SelectableButtonComponent_kt_jbvuyj = true;
      selectableButtonComponent = FC(selectableButtonComponent$lambda);
    }
  }
  function WIP() {
    WIP_instance = this;
    this.y42_1 = new Long(0, 0);
    this.z42_1 = '';
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.a43_1 = tmp$ret$0;
    this.b43_1 = getTimeMillis();
  }
  WIP.prototype.c43 = function (_set____db54di) {
    this.y42_1 = _set____db54di;
  };
  WIP.prototype.y3x = function () {
    return this.y42_1;
  };
  WIP.prototype.d43 = function (_set____db54di) {
    this.z42_1 = _set____db54di;
  };
  WIP.prototype.z3z = function () {
    return this.z42_1;
  };
  WIP.prototype.e43 = function () {
    return this.a43_1;
  };
  WIP.prototype.f43 = function (_set____db54di) {
    this.b43_1 = _set____db54di;
  };
  WIP.prototype.u1c = function () {
    this.b43_1 = getTimeMillis();
    this.y42_1 = new Long(0, 0);
    this.z42_1 = '';
    this.a43_1.ka();
  };
  WIP.$metadata$ = objectMeta('WIP');
  var WIP_instance;
  function WIP_getInstance() {
    if (WIP_instance == null)
      new WIP();
    return WIP_instance;
  }
  function get_mainScope() {
    init_properties_Welcome_kt_w2afe6();
    return mainScope;
  }
  var mainScope;
  function get_Welcome() {
    init_properties_Welcome_kt_w2afe6();
    return Welcome;
  }
  var Welcome;
  function Welcome$lambda($this$FC, _anonymous_parameter_0__qggqh8) {
    init_properties_Welcome_kt_w2afe6();
    var entryText$delegate = useState(WIP_getInstance().z42_1);
    var entryId$delegate = useState(WIP_getInstance().y42_1);
    var entryTimestamp$delegate = useState(WIP_getInstance().b43_1);
    var entries$delegate = useState(emptyList());
    var types$delegate = useState(emptyList());
    useEffectOnce(Welcome$lambda$lambda(entryTimestamp$delegate, entries$delegate, types$delegate));
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
    $this$FC.a3z(tmp, Welcome$lambda$lambda_0(types$delegate, entryText$delegate));
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
    $this$FC.a3z(tmp_0, Welcome$lambda$lambda_1(entryTimestamp$delegate, entryId$delegate, entryText$delegate, entries$delegate, types$delegate));
    var tmp$ret$11;
    // Inline function 'react.dom.html.ReactHTML.hr' call
    var tmp2__get_hr__vmdz0b = ReactHTML_getInstance();
    var tmp$ret$10;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'hr';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    $this$FC.a3z(tmp_1, Welcome$lambda$lambda_2);
    var tmp$ret$15;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp3__get_div__fkdzdv = ReactHTML_getInstance();
    var tmp$ret$14;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = 'div';
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    tmp$ret$15 = tmp$ret$14;
    var tmp_2 = tmp$ret$15;
    $this$FC.a3z(tmp_2, Welcome$lambda$lambda_3);
    var tmp$ret$19;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp4__get_div__pqv61q = ReactHTML_getInstance();
    var tmp$ret$18;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$17;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$16;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$16 = 'div';
    tmp$ret$17 = tmp$ret$16;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    var tmp_3 = tmp$ret$19;
    $this$FC.a3z(tmp_3, Welcome$lambda$lambda_4(entries$delegate, entryText$delegate, entryId$delegate, types$delegate, entryTimestamp$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda_0($entryText$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('entryText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryText$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_1($entryText$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('entryText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryText$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_2($entryId$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('entryId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryId$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_3($entryId$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('entryId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryId$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_4($entryTimestamp$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('entryTimestamp', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryTimestamp$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_5($entryTimestamp$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('entryTimestamp', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entryTimestamp$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_6($entries$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('entries', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entries$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_7($entries$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('entries', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $entries$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_8($types$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('types', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $types$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_9($types$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('types', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $types$delegate;
    return tmp$ret$0[1](value);
  }
  function Welcome$lambda$lambda$slambda($entryTimestamp$delegate, $entries$delegate, $types$delegate, resultContinuation) {
    this.o43_1 = $entryTimestamp$delegate;
    this.p43_1 = $entries$delegate;
    this.q43_1 = $types$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  Welcome$lambda$lambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            invoke$lambda_5(this.o43_1, getTimeMillis());
            println(invoke$lambda_4(this.o43_1));
            this.oh_1 = 1;
            suspendResult = getEntries(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s43_1 = suspendResult;
            invoke$lambda_7(this.p43_1, this.s43_1);
            this.oh_1 = 2;
            suspendResult = getEventTypes(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_9(this.q43_1, ARGUMENT);
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
  Welcome$lambda$lambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$slambda(this.o43_1, this.p43_1, this.q43_1, completion);
    i.r43_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$slambda.$metadata$ = classMeta('Welcome$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$slambda_0($entryTimestamp$delegate, $entries$delegate, $types$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$slambda($entryTimestamp$delegate, $entries$delegate, $types$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda($entryTimestamp$delegate, $entries$delegate, $types$delegate) {
    return function ($this$useEffectOnce) {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, Welcome$lambda$lambda$slambda_0($entryTimestamp$delegate, $entries$delegate, $types$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda($element, $types$delegate, resultContinuation) {
    this.b44_1 = $element;
    this.c44_1 = $types$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.b44_1.y3z_1 = !this.b44_1.y3z_1;
            println(this.b44_1.y3z_1);
            if (this.b44_1.y3z_1) {
              WIP_getInstance().a43_1.b(this.b44_1.w3z_1);
            } else {
              WIP_getInstance().a43_1.ia(this.b44_1.w3z_1);
            }

            this.oh_1 = 1;
            suspendResult = getEventTypes(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_9(this.c44_1, ARGUMENT);
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
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda(this.b44_1, this.c44_1, completion);
    i.d44_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda.$metadata$ = classMeta('Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_0($element, $types$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda($element, $types$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda($element, $types$delegate) {
    return function () {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_0($element, $types$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda($element, $types$delegate) {
    return function ($this$invoke) {
      $this$invoke.text = $element.x3z_1;
      $this$invoke.selected = $element.y3z_1;
      $this$invoke.onSubmit = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda($element, $types$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda($element, $types$delegate) {
    return function ($this$invoke) {
      var tmp = get_selectableButtonComponent();
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda$lambda($element, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda($element, $types$delegate) {
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
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda($element, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda($types$delegate) {
    return function ($this$invoke) {
      var tmp0_forEach = invoke$lambda_8($types$delegate);
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'Welcome.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
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
        $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda(element, $types$delegate));
      }
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda_0($entryText$delegate) {
    return function (it) {
      invoke$lambda_1($entryText$delegate, it);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda_0($entryText$delegate) {
    return function ($this$invoke) {
      $this$invoke.onChange = Welcome$lambda$lambda$lambda$lambda_0($entryText$delegate);
      $this$invoke.text = invoke$lambda_0($entryText$delegate);
      WIP_getInstance().z42_1 = $this$invoke.text;
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_0($types$delegate, $entryText$delegate) {
    return function ($this$invoke) {
      var tmp0_css = $this$invoke;
      var tmp$ret$6;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$5;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Welcome.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '5px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.padding = tmp$ret$3;
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      tmp0_apply.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      tmp$ret$4 = tmp0_apply;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = css(tmp$ret$5);
      tmp0_css.className = tmp$ret$6;
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.table' call
      var tmp1__get_table__pm8xdu = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'table';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp = tmp$ret$10;
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda($types$delegate));
      var tmp_0 = get_inputComponent();
      $this$invoke.a3z(tmp_0, Welcome$lambda$lambda$lambda_0($entryText$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($entryTimestamp$delegate) {
    return function (it) {
      WIP_getInstance().b43_1 = it;
      invoke$lambda_5($entryTimestamp$delegate, it);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_0($entryTimestamp$delegate) {
    return function ($this$invoke) {
      $this$invoke.timestamp = invoke$lambda_4($entryTimestamp$delegate);
      $this$invoke.onChange = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($entryTimestamp$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda_0($entryTimestamp$delegate) {
    return function ($this$invoke) {
      var tmp = get_dateComponent();
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_0($entryTimestamp$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1($entryId$delegate, $entryText$delegate, $entries$delegate, resultContinuation) {
    this.m44_1 = $entryId$delegate;
    this.n44_1 = $entryText$delegate;
    this.o44_1 = $entries$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.q44_1 = new Event(invoke$lambda_2(this.m44_1), WIP_getInstance().b43_1, invoke$lambda_0(this.n44_1), WIP_getInstance().a43_1);
            var tmp_0 = this;
            tmp_0.r44_1 = WIP_getInstance().a43_1;
            var tmp0_iterator = this.r44_1.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              println('Got Type ' + toString(element));
            }

            if (invoke$lambda_2(this.m44_1).equals(new Long(0, 0))) {
              this.oh_1 = 2;
              suspendResult = postEntry(this.q44_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oh_1 = 1;
              suspendResult = putEntry(this.q44_1, this);
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
            invoke$lambda_1(this.n44_1, '');
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
            var ARGUMENT = suspendResult;
            invoke$lambda_7(this.o44_1, ARGUMENT);
            return Unit_getInstance();
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
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.prototype.z1a = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1(this.m44_1, this.n44_1, this.o44_1, completion);
    i.p44_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1.$metadata$ = classMeta('Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_2($entryId$delegate, $entryText$delegate, $entries$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_1($entryId$delegate, $entryText$delegate, $entries$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($entryId$delegate, $entryText$delegate, $entries$delegate) {
    return function () {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_2($entryId$delegate, $entryText$delegate, $entries$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_1($entryId$delegate, $entryText$delegate, $entries$delegate) {
    return function ($this$invoke) {
      $this$invoke.text = 'Save';
      $this$invoke.onSubmit = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($entryId$delegate, $entryText$delegate, $entries$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda_1($entryId$delegate, $entryText$delegate, $entries$delegate) {
    return function ($this$invoke) {
      var tmp = get_buttonComponent();
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_1($entryId$delegate, $entryText$delegate, $entries$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate, resultContinuation) {
    this.a45_1 = $entryId$delegate;
    this.b45_1 = $entryText$delegate;
    this.c45_1 = $entryTimestamp$delegate;
    this.d45_1 = $types$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            invoke$lambda_3(this.a45_1, new Long(0, 0));
            invoke$lambda_1(this.b45_1, '');
            invoke$lambda_5(this.c45_1, getTimeMillis());
            WIP_getInstance().u1c();
            this.oh_1 = 1;
            suspendResult = getEventTypes(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_9(this.d45_1, ARGUMENT);
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
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.prototype.z1a = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3(this.a45_1, this.b45_1, this.c45_1, this.d45_1, completion);
    i.e45_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3.$metadata$ = classMeta('Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_4($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_3($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate) {
    return function () {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_4($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_2($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate) {
    return function ($this$invoke) {
      $this$invoke.text = 'New';
      $this$invoke.onSubmit = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda_2($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate) {
    return function ($this$invoke) {
      var tmp = get_buttonComponent();
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_2($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda_1($entryTimestamp$delegate, $entryId$delegate, $entryText$delegate, $entries$delegate, $types$delegate) {
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
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda_0($entryTimestamp$delegate));
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
      $this$invoke.a3z(tmp_0, Welcome$lambda$lambda$lambda$lambda$lambda_1($entryId$delegate, $entryText$delegate, $entries$delegate));
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
      $this$invoke.a3z(tmp_1, Welcome$lambda$lambda$lambda$lambda$lambda_2($entryId$delegate, $entryText$delegate, $entryTimestamp$delegate, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda_1($entryTimestamp$delegate, $entryId$delegate, $entryText$delegate, $entries$delegate, $types$delegate) {
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
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda_1($entryTimestamp$delegate, $entryId$delegate, $entryText$delegate, $entries$delegate, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_1($entryTimestamp$delegate, $entryId$delegate, $entryText$delegate, $entries$delegate, $types$delegate) {
    return function ($this$invoke) {
      var tmp0_css = $this$invoke;
      var tmp$ret$6;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$5;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Welcome.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '5px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.padding = tmp$ret$3;
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).end;
      tmp0_apply.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      tmp$ret$4 = tmp0_apply;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = css(tmp$ret$5);
      tmp0_css.className = tmp$ret$6;
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.table' call
      var tmp1__get_table__pm8xdu = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'table';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp = tmp$ret$10;
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda_1($entryTimestamp$delegate, $entryId$delegate, $entryText$delegate, $entries$delegate, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_2($this$invoke) {
    init_properties_Welcome_kt_w2afe6();
    return Unit_getInstance();
  }
  function Welcome$lambda$lambda_3($this$invoke) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.h2' call
    var tmp0__get_h2__p4e2yh = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'h2';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function Welcome$lambda$lambda$lambda_2($this$invoke) {
    init_properties_Welcome_kt_w2afe6();
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
    $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function Welcome$lambda$lambda$lambda$lambda_2($this$invoke) {
    init_properties_Welcome_kt_w2afe6();
    $this$invoke.z3y('Entries');
    return Unit_getInstance();
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5($it, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, resultContinuation) {
    this.n45_1 = $it;
    this.o45_1 = $entries$delegate;
    this.p45_1 = $entryText$delegate;
    this.q45_1 = $entryId$delegate;
    this.r45_1 = $types$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.oh_1 = 1;
            suspendResult = deleteEntry(this.n45_1, this);
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
            this.t45_1 = suspendResult;
            invoke$lambda_7(this.o45_1, this.t45_1);
            if (WIP_getInstance().y42_1.equals(this.n45_1)) {
              WIP_getInstance().u1c();
              invoke$lambda_1(this.p45_1, WIP_getInstance().z42_1);
              invoke$lambda_3(this.q45_1, WIP_getInstance().y42_1);
              this.oh_1 = 3;
              suspendResult = getEventTypes(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oh_1 = 4;
              continue $sm;
            }

            break;
          case 3:
            var ARGUMENT = suspendResult;
            invoke$lambda_9(this.r45_1, ARGUMENT);
            this.oh_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.prototype.z1a = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5(this.n45_1, this.o45_1, this.p45_1, this.q45_1, this.r45_1, completion);
    i.s45_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5.$metadata$ = classMeta('Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_6($it, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_5($it, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate) {
    return function (it) {
      println('callback ' + toString(it));
      var tmp = get_mainScope();
      launch$default(tmp, null, null, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda$slambda_6(it, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_3($element, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate) {
    return function ($this$invoke) {
      $this$invoke.id = $element.o3z_1;
      $this$invoke.onSubmit = Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda_3($element, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate) {
    return function ($this$invoke) {
      var tmp = get_deleteEntryButtonComponent();
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_3($element, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda_4($element) {
    return function ($this$invoke) {
      var d = new Date($element.p3z_1);
      $this$invoke.z3y(d.toDateString());
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_4($element) {
    return function ($this$invoke) {
      $this$invoke.z3y($element.q3z_1);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate, resultContinuation) {
    this.c46_1 = $element;
    this.d46_1 = $entryText$delegate;
    this.e46_1 = $entryId$delegate;
    this.f46_1 = $entryTimestamp$delegate;
    this.g46_1 = $types$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            WIP_getInstance().z42_1 = this.c46_1.q3z_1;
            WIP_getInstance().y42_1 = this.c46_1.o3z_1;
            WIP_getInstance().b43_1 = this.c46_1.p3z_1;
            invoke$lambda_1(this.d46_1, this.c46_1.q3z_1);
            invoke$lambda_3(this.e46_1, this.c46_1.o3z_1);
            invoke$lambda_5(this.f46_1, this.c46_1.p3z_1);
            this.oh_1 = 1;
            suspendResult = loadEvent(this.c46_1.o3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.oh_1 = 2;
            suspendResult = getEventTypes(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_9(this.g46_1, ARGUMENT);
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
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda(this.c46_1, this.d46_1, this.e46_1, this.f46_1, this.g46_1, completion);
    i.h46_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda.$metadata$ = classMeta('Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda_0($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_5($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate) {
    return function (it) {
      var tmp = get_mainScope();
      launch$default(tmp, null, null, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$slambda_0($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate, null), 3, null);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda_5($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate) {
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
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_4($element));
      $this$invoke.onClick = Welcome$lambda$lambda$lambda$lambda$lambda$lambda_5($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$lambda_3($element, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, $entryTimestamp$delegate) {
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
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda$lambda_3($element, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate));
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
      $this$invoke.a3z(tmp_0, Welcome$lambda$lambda$lambda$lambda$lambda_4($element));
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
      $this$invoke.a3z(tmp_1, Welcome$lambda$lambda$lambda$lambda$lambda_5($element, $entryText$delegate, $entryId$delegate, $entryTimestamp$delegate, $types$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda_3($entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, $entryTimestamp$delegate) {
    return function ($this$invoke) {
      var tmp0_forEach = invoke$lambda_6($entries$delegate);
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'Welcome.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
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
        $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda$lambda_3(element, $entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, $entryTimestamp$delegate));
      }
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_4($entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, $entryTimestamp$delegate) {
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
      $this$invoke.a3z(tmp, Welcome$lambda$lambda$lambda_3($entries$delegate, $entryText$delegate, $entryId$delegate, $types$delegate, $entryTimestamp$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Welcome_kt_8zgob6;
  function init_properties_Welcome_kt_w2afe6() {
    if (properties_initialized_Welcome_kt_8zgob6) {
    } else {
      properties_initialized_Welcome_kt_8zgob6 = true;
      mainScope = MainScope();
      Welcome = FC(Welcome$lambda);
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
