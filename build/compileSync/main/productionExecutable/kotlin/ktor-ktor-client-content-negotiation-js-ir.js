(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-serialization-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-serialization-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.l8;
  var ContentTypeMatcher = kotlin_io_ktor_ktor_http.$_$.s;
  var CoroutineImpl = kotlin_kotlin.$_$.x7;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.h;
  var isObject = kotlin_kotlin.$_$.f9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i7;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.i;
  var contentType = kotlin_io_ktor_ktor_http.$_$.e1;
  var suitableCharset$default = kotlin_io_ktor_ktor_serialization.$_$.c;
  var plus = kotlin_kotlin.$_$.k6;
  var toMutableSet = kotlin_kotlin.$_$.c7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.d;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.n9;
  var toString = kotlin_kotlin.$_$.r9;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.f;
  var Collection = kotlin_kotlin.$_$.i4;
  var isInterface = kotlin_kotlin.$_$.d9;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Unit = kotlin_kotlin.$_$.ic;
  var charset = kotlin_io_ktor_ktor_http.$_$.a1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.oc;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.n8;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.h1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.ub;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.f8;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x3;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.v;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.r6;
  var SuspendFunction2 = kotlin_kotlin.$_$.z7;
  var endsWith$default = kotlin_kotlin.$_$.l;
  var startsWith$default = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  //endregion
  //region block: pre-declaration
  ContentNegotiation$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ContentNegotiation$Plugin$install$slambda.prototype.constructor = ContentNegotiation$Plugin$install$slambda;
  ContentNegotiation$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  ContentNegotiation$Plugin$install$slambda_1.prototype.constructor = ContentNegotiation$Plugin$install$slambda_1;
  $convertRequestCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $convertRequestCOROUTINE$0.prototype.constructor = $convertRequestCOROUTINE$0;
  ContentConverterException.prototype = Object.create(Exception.prototype);
  ContentConverterException.prototype.constructor = ContentConverterException;
  //endregion
  function get_DefaultCommonIgnoredTypes() {
    init_properties_ContentNegotiation_kt_d83xzi();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.s3u_1 = converter;
    this.t3u_1 = contentTypeToSend;
    this.u3u_1 = contentTypeMatcher;
  }
  ConverterRegistration.prototype.v3u = function () {
    return this.s3u_1;
  };
  ConverterRegistration.prototype.w3u = function () {
    return this.u3u_1;
  };
  ConverterRegistration.$metadata$ = classMeta('ConverterRegistration');
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.x3u_1 = $pattern;
  }
  ContentNegotiation$Config$defaultMatcher$1.prototype.u1o = function (contentType) {
    return contentType.r1q(this.x3u_1);
  };
  ContentNegotiation$Config$defaultMatcher$1.$metadata$ = classMeta(undefined, [ContentTypeMatcher]);
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.g3v_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda.prototype.b2y = function ($this$intercept, it, $cont) {
    var tmp = this.c2y($this$intercept, it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  ContentNegotiation$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = this.g3v_1.n3v(this.h3v_1.s1n_1, this.h3v_1.v1m(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j3v_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.j3v_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.j3v_1;
            }

            tmp_0.k3v_1 = tmp_1;
            this.oh_1 = 2;
            suspendResult = this.h3v_1.w1m(this.k3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  ContentNegotiation$Plugin$install$slambda.prototype.c2y = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.g3v_1, completion);
    i.h3v_1 = $this$intercept;
    i.i3v_1 = it;
    return i;
  };
  ContentNegotiation$Plugin$install$slambda.$metadata$ = classMeta('ContentNegotiation$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.b2y($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.w3v_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda_1.prototype.v2y = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.w2y($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v2y(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.z3v_1 = this.y3v_1.h3();
            this.a3w_1 = this.y3v_1.i3();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.x3v_1.s1n_1.i2y());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.b3w_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.x3v_1.s1n_1.r31().e1v();
            tmp_2.c3w_1 = suitableCharset$default(tmp_3, null, 1, null);
            this.oh_1 = 1;
            suspendResult = this.w3v_1.g3w(this.z3v_1, this.a3w_1, this.b3w_1, this.c3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d3w_1 = suspendResult;
            var tmp_4 = this;
            var tmp_5;
            if (this.d3w_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_5 = this.d3w_1;
            }

            tmp_4.e3w_1 = tmp_5;
            this.f3w_1 = new HttpResponseContainer(this.z3v_1, this.e3w_1);
            this.oh_1 = 2;
            suspendResult = this.x3v_1.w1m(this.f3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  ContentNegotiation$Plugin$install$slambda_1.prototype.w2y = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.w3v_1, completion);
    i.x3v_1 = $this$intercept;
    i.y3v_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  ContentNegotiation$Plugin$install$slambda_1.$metadata$ = classMeta('ContentNegotiation$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.v2y($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.h3w_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.i3w_1 = tmp$ret$0;
  }
  Config.prototype.x21 = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().j1p_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.j3w(contentType, converter, matcher, configuration);
  };
  Config.prototype.j3w = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    tmp$ret$0 = converter;
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.i3w_1.b(registration);
  };
  Config.$metadata$ = classMeta('Config', [Configuration]);
  function Plugin() {
    Plugin_instance = this;
    this.k3w_1 = new AttributeKey('ContentNegotiation');
  }
  Plugin.prototype.s = function () {
    return this.k3w_1;
  };
  Plugin.prototype.l3w = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new ContentNegotiation(config.i3w_1, config.h3w_1);
  };
  Plugin.prototype.m30 = function (block) {
    return this.l3w(block);
  };
  Plugin.prototype.m3w = function (plugin, scope) {
    var tmp = Phases_getInstance().h36_1;
    scope.h2x_1.w1n(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().h30_1;
    scope.i2x_1.w1n(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  Plugin.prototype.n30 = function (plugin, scope) {
    return this.m3w(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.s3u_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3w_1 = _this__u8e3s4;
    this.w3w_1 = request;
    this.x3w_1 = body;
  }
  $convertRequestCOROUTINE$0.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 7;
            var tmp_0 = this;
            tmp_0.y3w_1 = this.v3w_1.l3v_1;
            var tmp0_iterator = this.y3w_1.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              accept(this.w3w_1, element.t3u_1);
            }

            var tmp_1;
            var tmp_2 = this.x3w_1;
            if (tmp_2 instanceof OutgoingContent) {
              tmp_1 = true;
            } else {
              l$ret$1: do {
                var tmp1_any = this.v3w_1.m3v_1;
                var tmp_3;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_3 = tmp1_any.m();
                } else {
                  tmp_3 = false;
                }
                if (tmp_3) {
                  this.z3w_1 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.d();
                while (tmp0_iterator_0.e()) {
                  var element_0 = tmp0_iterator_0.f();
                  if (element_0.sd(this.x3w_1)) {
                    this.z3w_1 = true;
                    break l$ret$1;
                  }
                }
                this.z3w_1 = false;
              }
               while (false);
              tmp_1 = this.z3w_1;
            }

            if (tmp_1)
              return null;
            var tmp_4 = this;
            var tmp0_elvis_lhs = contentType_0(this.w3w_1);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }

            tmp_4.a3x_1 = tmp_5;
            var tmp_6 = this.x3w_1;
            if (tmp_6 instanceof Unit) {
              this.w3w_1.j2z_1.h1l(HttpHeaders_getInstance().r1r_1);
              return EmptyContent_getInstance();
            }

            var tmp_7 = this;
            var tmp2_filter = this.v3w_1.l3v_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp2_filter.d();
            while (tmp0_iterator_1.e()) {
              var element_1 = tmp0_iterator_1.f();
              if (element_1.u3u_1.u1o(this.a3x_1)) {
                tmp0_filterTo.b(element_1);
              }
            }

            var tmp3_takeIf = tmp0_filterTo;
            var tmp_8;
            if (!tmp3_takeIf.m()) {
              tmp_8 = tmp3_takeIf;
            } else {
              tmp_8 = null;
            }

            var tmp1_elvis_lhs = tmp_8;
            var tmp_9;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_9 = tmp1_elvis_lhs;
            }

            tmp_7.b3x_1 = tmp_9;
            if (this.w3w_1.h3l() == null)
              return null;
            this.w3w_1.j2z_1.h1l(HttpHeaders_getInstance().r1r_1);
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.d3x_1 = this.b3x_1.d();
            this.oh_1 = 2;
            continue $sm;
          case 2:
            if (!this.d3x_1.e()) {
              this.oh_1 = 5;
              continue $sm;
            }

            this.e3x_1 = this.d3x_1.f();
            this.oh_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.a3x_1);
            var tmp_10 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().d1f_1 : tmp0_elvis_lhs_0;
            var tmp_11 = ensureNotNull(this.w3w_1.h3l());
            var tmp_12;
            if (!equals(this.x3w_1, NullBody_getInstance())) {
              tmp_12 = this.x3w_1;
            } else {
              tmp_12 = null;
            }

            suspendResult = this.e3x_1.s3u_1.a22(this.a3x_1, tmp_10, tmp_11, tmp_12, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              this.c3x_1 = result;
              this.oh_1 = 6;
              continue $sm;
            } else {
              this.oh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.oh_1 = 2;
            continue $sm;
          case 5:
            this.c3x_1 = null;
            if (false) {
              this.oh_1 = 1;
              continue $sm;
            }

            this.oh_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.c3x_1;
            var tmp_13;
            if (tmp2_elvis_lhs == null) {
              var tmp_14 = "Can't convert " + toString(this.x3w_1) + ' with contentType ' + this.a3x_1 + ' using converters ';
              throw new ContentConverterException(tmp_14 + joinToString$default(this.b3x_1, null, null, null, 0, null, ContentNegotiation$convertRequest$lambda, 31, null));
            } else {
              tmp_13 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_13;
            return serializedContent;
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
  $convertRequestCOROUTINE$0.$metadata$ = classMeta('$convertRequestCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.l3v_1 = registrations;
    this.m3v_1 = ignoredTypes;
  }
  ContentNegotiation.prototype.n3v = function (request, body, $cont) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  ContentNegotiation.prototype.g3w = function (info, body, responseContentType, charset, $cont) {
    if (!isInterface(body, ByteReadChannel))
      return null;
    if (this.m3v_1.l1(info.j1o_1))
      return null;
    var tmp$ret$8;
    // Inline function 'kotlin.takeIf' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.l3v_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
      tmp$ret$0 = element.u3u_1.u1o(responseContentType);
      if (tmp$ret$0) {
        tmp0_filterTo.b(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_map = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.d();
    while (tmp0_iterator_0.e()) {
      var item = tmp0_iterator_0.f();
      var tmp$ret$3;
      // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
      tmp$ret$3 = item.s3u_1;
      tmp0_mapTo.b(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp2_takeIf = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$7;
    // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$6 = !tmp2_takeIf.m();
    tmp$ret$7 = tmp$ret$6;
    if (tmp$ret$7) {
      tmp = tmp2_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$8 = tmp;
    var tmp0_elvis_lhs = tmp$ret$8;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var suitableConverters = tmp_0;
    return deserialize(suitableConverters, body, info, charset, $cont);
  };
  ContentNegotiation.$metadata$ = classMeta('ContentNegotiation');
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  ContentConverterException.$metadata$ = classMeta('ContentConverterException', undefined, undefined, undefined, undefined, Exception.prototype);
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function init_properties_ContentNegotiation_kt_d83xzi() {
    if (properties_initialized_ContentNegotiation_kt_1ayduy) {
    } else {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().of(), PrimitiveClasses_getInstance().kf(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.u1o = function (contentType) {
    if (contentType.r1q(Application_getInstance().j1p_1)) {
      return true;
    }
    var value = contentType.q1q().toString();
    var tmp;
    if (startsWith$default(value, 'application/', false, 2, null)) {
      tmp = endsWith$default(value, '+json', false, 2, null);
    } else {
      tmp = false;
    }
    return tmp;
  };
  JsonContentTypeMatcher.$metadata$ = objectMeta('JsonContentTypeMatcher', [ContentTypeMatcher]);
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    init_properties_DefaultIgnoredTypesJs_kt_b6fzr7();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function init_properties_DefaultIgnoredTypesJs_kt_b6fzr7() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  //region block: post-declaration
  Config.prototype.y21 = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map
