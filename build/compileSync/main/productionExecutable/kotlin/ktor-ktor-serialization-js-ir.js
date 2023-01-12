(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    root['ktor-ktor-serialization-js-ir'] = factory(typeof this['ktor-ktor-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var captureStack = kotlin_kotlin.$_$.b8;
  var Exception = kotlin_kotlin.$_$.ob;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var classMeta = kotlin_kotlin.$_$.h8;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var interfaceMeta = kotlin_kotlin.$_$.q8;
  var ensureNotNull = kotlin_kotlin.$_$.ic;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.h1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.t7;
  var THROW_CCE = kotlin_kotlin.$_$.vb;
  var isInterface = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e7;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isObject = kotlin_kotlin.$_$.b9;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.u7;
  //endregion
  //region block: pre-declaration
  ContentConvertException.prototype = Object.create(Exception.prototype);
  ContentConvertException.prototype.constructor = ContentConvertException;
  JsonConvertException.prototype = Object.create(ContentConvertException.prototype);
  JsonConvertException.prototype.constructor = JsonConvertException;
  function register$default(contentType, converter, configuration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      configuration = Configuration$register$lambda;
    }
    var tmp;
    if ($handler == null) {
      this.w21(contentType, converter, configuration);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(contentType, converter, configuration);
    }
    return tmp;
  }
  function serialize(contentType, charset, typeInfo, value, $cont) {
    return this.z21(contentType, charset, typeInfo, value, $cont);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $cont) {
    return this.y21(contentType, charset, typeInfo, ensureNotNull(value), $cont);
  }
  deserialize$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$o$collect$slambda.prototype.constructor = deserialize$o$collect$slambda;
  $collectCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$1.prototype.constructor = $collectCOROUTINE$1;
  deserialize$slambda.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$slambda.prototype.constructor = deserialize$slambda;
  $deserializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$0.prototype.constructor = $deserializeCOROUTINE$0;
  //endregion
  function ContentConvertException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    ContentConvertException.call($this, message, cause);
    return $this;
  }
  function ContentConvertException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = ContentConvertException_init_$Init$(message, cause, $mask0, $marker, Object.create(ContentConvertException.prototype));
    captureStack(tmp, ContentConvertException_init_$Create$);
    return tmp;
  }
  function ContentConvertException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  ContentConvertException.$metadata$ = classMeta('ContentConvertException', undefined, undefined, undefined, undefined, Exception.prototype);
  function JsonConvertException(message, cause) {
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  JsonConvertException.$metadata$ = classMeta('JsonConvertException', undefined, undefined, undefined, undefined, ContentConvertException.prototype);
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  Configuration.$metadata$ = interfaceMeta('Configuration');
  function ContentConverter() {
  }
  ContentConverter.$metadata$ = interfaceMeta('ContentConverter');
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $cont) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $cont);
    tmp.ph_1 = Unit_getInstance();
    tmp.qh_1 = null;
    return tmp.wh();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharset$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().c1f_1;
    return suitableCharset(_this__u8e3s4, defaultCharset);
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.z1j(HttpHeaders_getInstance().z1q_1)).d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      var charset = tmp1_loop_parameter.h3();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().k1i(charset))
        return Companion_getInstance().j1i(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.o22_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.gz = function (value, $cont) {
    return this.o22_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.x22_1 = $collector;
    this.y22_1 = $charset;
    this.z22_1 = $typeInfo;
    this.a23_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$o$collect$slambda.prototype.d23 = function (value, $cont) {
    var tmp = this.e23(value, $cont);
    tmp.ph_1 = Unit_getInstance();
    tmp.qh_1 = null;
    return tmp.wh();
  };
  deserialize$o$collect$slambda.prototype.xh = function (p1, $cont) {
    return this.d23((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$o$collect$slambda.prototype.wh = function () {
    var suspendResult = this.ph_1;
    $sm: do
      try {
        var tmp = this.nh_1;
        switch (tmp) {
          case 0:
            this.oh_1 = 3;
            this.nh_1 = 1;
            suspendResult = this.b23_1.a22(this.y22_1, this.z22_1, this.a23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c23_1 = suspendResult;
            this.nh_1 = 2;
            suspendResult = this.x22_1.gz(this.c23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.qh_1;
        }
      } catch ($p) {
        if (this.oh_1 === 3) {
          throw $p;
        } else {
          this.nh_1 = this.oh_1;
          this.qh_1 = $p;
        }
      }
     while (true);
  };
  deserialize$o$collect$slambda.prototype.e23 = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.x22_1, this.y22_1, this.z22_1, this.a23_1, completion);
    i.b23_1 = value;
    return i;
  };
  deserialize$o$collect$slambda.$metadata$ = classMeta('deserialize$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $cont) {
      return i.d23(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n23_1 = _this__u8e3s4;
    this.o23_1 = collector;
  }
  $collectCOROUTINE$1.prototype.wh = function () {
    var suspendResult = this.ph_1;
    $sm: do
      try {
        var tmp = this.nh_1;
        switch (tmp) {
          case 0:
            this.oh_1 = 2;
            this.nh_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.o23_1, this.n23_1.q23_1, this.n23_1.r23_1, this.n23_1.s23_1, null);
            suspendResult = this.n23_1.p23_1.hz(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.qh_1;
        }
      } catch ($p) {
        if (this.oh_1 === 2) {
          throw $p;
        } else {
          this.nh_1 = this.oh_1;
          this.qh_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$1.$metadata$ = classMeta('$collectCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.p23_1 = $tmp0_map;
    this.q23_1 = $charset;
    this.r23_1 = $typeInfo;
    this.s23_1 = $body;
  }
  _no_name_provided__qut3iv.prototype.t23 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp.ph_1 = Unit_getInstance();
    tmp.qh_1 = null;
    return tmp.wh();
  };
  _no_name_provided__qut3iv.prototype.hz = function (collector, $cont) {
    return this.t23(collector, $cont);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function deserialize$slambda($body, resultContinuation) {
    this.c24_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$slambda.prototype.e24 = function (it, $cont) {
    var tmp = this.f24(it, $cont);
    tmp.ph_1 = Unit_getInstance();
    tmp.qh_1 = null;
    return tmp.wh();
  };
  deserialize$slambda.prototype.xh = function (p1, $cont) {
    return this.e24((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$slambda.prototype.wh = function () {
    var suspendResult = this.ph_1;
    $sm: do
      try {
        var tmp = this.nh_1;
        if (tmp === 0) {
          this.oh_1 = 1;
          return !(this.d24_1 == null) ? true : this.c24_1.r14();
        } else if (tmp === 1) {
          throw this.qh_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  deserialize$slambda.prototype.f24 = function (it, completion) {
    var i = new deserialize$slambda(this.c24_1, completion);
    i.d24_1 = it;
    return i;
  };
  deserialize$slambda.$metadata$ = classMeta('deserialize$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $cont) {
      return i.e24(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j22_1 = _this__u8e3s4;
    this.k22_1 = body;
    this.l22_1 = typeInfo;
    this.m22_1 = charset;
  }
  $deserializeCOROUTINE$0.prototype.wh = function () {
    var suspendResult = this.ph_1;
    $sm: do
      try {
        var tmp = this.nh_1;
        switch (tmp) {
          case 0:
            this.oh_1 = 2;
            this.nh_1 = 1;
            var tmp_0 = this;
            tmp_0.n22_1 = asFlow(this.j22_1);
            var tmp_1 = new _no_name_provided__qut3iv(this.n22_1, this.m22_1, this.l22_1, this.k22_1);
            suspendResult = firstOrNull(tmp_1, deserialize$slambda_0(this.k22_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_2;
            if (!(result == null)) {
              tmp_2 = result;
            } else {
              if (!this.k22_1.r14()) {
                tmp_2 = this.k22_1;
              } else {
                var tmp0_safe_receiver = this.l22_1.k1o_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zd()) === true) {
                  tmp_2 = NullBody_getInstance();
                } else {
                  var tmp_3 = 'No suitable converter found for ' + this.l22_1;
                  throw ContentConvertException_init_$Create$(tmp_3, null, 2, null);
                }
              }
            }

            return tmp_2;
          case 2:
            throw this.qh_1;
        }
      } catch ($p) {
        if (this.oh_1 === 2) {
          throw $p;
        } else {
          this.nh_1 = this.oh_1;
          this.qh_1 = $p;
        }
      }
     while (true);
  };
  $deserializeCOROUTINE$0.$metadata$ = classMeta('$deserializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = suitableCharset$default;
  _.$_$.d = Configuration;
  _.$_$.e = ContentConverter;
  _.$_$.f = JsonConvertException;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-js-ir.js.map
