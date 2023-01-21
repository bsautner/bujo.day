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
  var captureStack = kotlin_kotlin.$_$.g8;
  var Exception = kotlin_kotlin.$_$.ub;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u1;
  var classMeta = kotlin_kotlin.$_$.m8;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var interfaceMeta = kotlin_kotlin.$_$.v8;
  var ensureNotNull = kotlin_kotlin.$_$.oc;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.j;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.l1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.y7;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
  var isInterface = kotlin_kotlin.$_$.e9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.j7;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isObject = kotlin_kotlin.$_$.g9;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var SuspendFunction1 = kotlin_kotlin.$_$.z7;
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
      this.i22(contentType, converter, configuration);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(contentType, converter, configuration);
    }
    return tmp;
  }
  function serialize(contentType, charset, typeInfo, value, $cont) {
    return this.l22(contentType, charset, typeInfo, value, $cont);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $cont) {
    return this.k22(contentType, charset, typeInfo, ensureNotNull(value), $cont);
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
    tmp.rh_1 = Unit_getInstance();
    tmp.sh_1 = null;
    return tmp.yh();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharset$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().d1f_1;
    return suitableCharset(_this__u8e3s4, defaultCharset);
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.a1k(HttpHeaders_getInstance().d1r_1)).d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      var charset = tmp1_loop_parameter.i3();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().l1i(charset))
        return Companion_getInstance().k1i(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.a23_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.iz = function (value, $cont) {
    return this.a23_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.j23_1 = $collector;
    this.k23_1 = $charset;
    this.l23_1 = $typeInfo;
    this.m23_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$o$collect$slambda.prototype.p23 = function (value, $cont) {
    var tmp = this.q23(value, $cont);
    tmp.rh_1 = Unit_getInstance();
    tmp.sh_1 = null;
    return tmp.yh();
  };
  deserialize$o$collect$slambda.prototype.zh = function (p1, $cont) {
    return this.p23((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$o$collect$slambda.prototype.yh = function () {
    var suspendResult = this.rh_1;
    $sm: do
      try {
        var tmp = this.ph_1;
        switch (tmp) {
          case 0:
            this.qh_1 = 3;
            this.ph_1 = 1;
            suspendResult = this.n23_1.m22(this.k23_1, this.l23_1, this.m23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o23_1 = suspendResult;
            this.ph_1 = 2;
            suspendResult = this.j23_1.iz(this.o23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
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
  deserialize$o$collect$slambda.prototype.q23 = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.j23_1, this.k23_1, this.l23_1, this.m23_1, completion);
    i.n23_1 = value;
    return i;
  };
  deserialize$o$collect$slambda.$metadata$ = classMeta('deserialize$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $cont) {
      return i.p23(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z23_1 = _this__u8e3s4;
    this.a24_1 = collector;
  }
  $collectCOROUTINE$1.prototype.yh = function () {
    var suspendResult = this.rh_1;
    $sm: do
      try {
        var tmp = this.ph_1;
        switch (tmp) {
          case 0:
            this.qh_1 = 2;
            this.ph_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.a24_1, this.z23_1.c24_1, this.z23_1.d24_1, this.z23_1.e24_1, null);
            suspendResult = this.z23_1.b24_1.jz(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.sh_1;
        }
      } catch ($p) {
        if (this.qh_1 === 2) {
          throw $p;
        } else {
          this.ph_1 = this.qh_1;
          this.sh_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$1.$metadata$ = classMeta('$collectCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.b24_1 = $tmp0_map;
    this.c24_1 = $charset;
    this.d24_1 = $typeInfo;
    this.e24_1 = $body;
  }
  _no_name_provided__qut3iv.prototype.f24 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp.rh_1 = Unit_getInstance();
    tmp.sh_1 = null;
    return tmp.yh();
  };
  _no_name_provided__qut3iv.prototype.jz = function (collector, $cont) {
    return this.f24(collector, $cont);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function deserialize$slambda($body, resultContinuation) {
    this.o24_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$slambda.prototype.q24 = function (it, $cont) {
    var tmp = this.r24(it, $cont);
    tmp.rh_1 = Unit_getInstance();
    tmp.sh_1 = null;
    return tmp.yh();
  };
  deserialize$slambda.prototype.zh = function (p1, $cont) {
    return this.q24((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$slambda.prototype.yh = function () {
    var suspendResult = this.rh_1;
    $sm: do
      try {
        var tmp = this.ph_1;
        if (tmp === 0) {
          this.qh_1 = 1;
          return !(this.p24_1 == null) ? true : this.o24_1.t14();
        } else if (tmp === 1) {
          throw this.sh_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  deserialize$slambda.prototype.r24 = function (it, completion) {
    var i = new deserialize$slambda(this.o24_1, completion);
    i.p24_1 = it;
    return i;
  };
  deserialize$slambda.$metadata$ = classMeta('deserialize$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $cont) {
      return i.q24(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v22_1 = _this__u8e3s4;
    this.w22_1 = body;
    this.x22_1 = typeInfo;
    this.y22_1 = charset;
  }
  $deserializeCOROUTINE$0.prototype.yh = function () {
    var suspendResult = this.rh_1;
    $sm: do
      try {
        var tmp = this.ph_1;
        switch (tmp) {
          case 0:
            this.qh_1 = 2;
            this.ph_1 = 1;
            var tmp_0 = this;
            tmp_0.z22_1 = asFlow(this.v22_1);
            var tmp_1 = new _no_name_provided__qut3iv(this.z22_1, this.y22_1, this.x22_1, this.w22_1);
            suspendResult = firstOrNull(tmp_1, deserialize$slambda_0(this.w22_1, null), this);
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
              if (!this.w22_1.t14()) {
                tmp_2 = this.w22_1;
              } else {
                var tmp0_safe_receiver = this.x22_1.o1o_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.de()) === true) {
                  tmp_2 = NullBody_getInstance();
                } else {
                  var tmp_3 = 'No suitable converter found for ' + this.x22_1;
                  throw ContentConvertException_init_$Create$(tmp_3, null, 2, null);
                }
              }
            }

            return tmp_2;
          case 2:
            throw this.sh_1;
        }
      } catch ($p) {
        if (this.qh_1 === 2) {
          throw $p;
        } else {
          this.ph_1 = this.qh_1;
          this.sh_1 = $p;
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
