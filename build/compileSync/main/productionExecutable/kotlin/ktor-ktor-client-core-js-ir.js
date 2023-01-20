(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-events-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-websockets-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-events-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-events-js-ir' was not found. Please, check whether 'ktor-ktor-events-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    root['ktor-ktor-client-core-js-ir'] = factory(typeof this['ktor-ktor-client-core-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-events-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-websockets-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var CoroutineImpl = kotlin_kotlin.$_$.x7;
  var THROW_CCE = kotlin_kotlin.$_$.ac;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.h;
  var isObject = kotlin_kotlin.$_$.f9;
  var toString = kotlin_kotlin.$_$.r9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i7;
  var classMeta = kotlin_kotlin.$_$.l8;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.n;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.y;
  var isInterface = kotlin_kotlin.$_$.d9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.nc;
  var SuspendFunction2 = kotlin_kotlin.$_$.z7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.n9;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.k;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.n8;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wc;
  var IllegalStateException = kotlin_kotlin.$_$.vb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var captureStack = kotlin_kotlin.$_$.f8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ic;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.m2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.v;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var trimMargin$default = kotlin_kotlin.$_$.u;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.g1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Long = kotlin_kotlin.$_$.wb;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.c2;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.i1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.uc;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var writer = kotlin_io_ktor_ktor_io.$_$.k1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.n;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.o;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.m;
  var SuspendFunction1 = kotlin_kotlin.$_$.y7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x3;
  var arrayOf = kotlin_kotlin.$_$.kc;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var emptySet = kotlin_kotlin.$_$.r5;
  var interfaceMeta = kotlin_kotlin.$_$.u8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.w;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.c;
  var lazy = kotlin_kotlin.$_$.tc;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.da;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r8;
  var setOf = kotlin_kotlin.$_$.q6;
  var Key = kotlin_kotlin.$_$.v7;
  var get = kotlin_kotlin.$_$.s7;
  var fold = kotlin_kotlin.$_$.r7;
  var minusKey = kotlin_kotlin.$_$.t7;
  var plus = kotlin_kotlin.$_$.w7;
  var Element = kotlin_kotlin.$_$.u7;
  var setOf_0 = kotlin_kotlin.$_$.r6;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.i;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.b1;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.q;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var toLong = kotlin_kotlin.$_$.p9;
  var toLong_0 = kotlin_kotlin.$_$.bb;
  var contentType = kotlin_io_ktor_ktor_http.$_$.c1;
  var isByteArray = kotlin_kotlin.$_$.x8;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a4;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CancellationException = kotlin_kotlin.$_$.h7;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.j1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.v;
  var getKClass = kotlin_kotlin.$_$.e;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.k;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.z;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.x;
  var Unit = kotlin_kotlin.$_$.hc;
  var toString_0 = kotlin_kotlin.$_$.xc;
  var toInt = kotlin_kotlin.$_$.za;
  var reversed = kotlin_kotlin.$_$.p6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var charset = kotlin_io_ktor_ktor_http.$_$.a1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.l1;
  var Comparator = kotlin_kotlin.$_$.ob;
  var compareValues = kotlin_kotlin.$_$.g7;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var toList = kotlin_kotlin.$_$.x6;
  var sortedWith = kotlin_kotlin.$_$.u6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.j8;
  var roundToInt = kotlin_kotlin.$_$.s9;
  var firstOrNull = kotlin_kotlin.$_$.u5;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.z;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.y;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.j1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.f1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.x;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var get_lastIndex = kotlin_kotlin.$_$.b6;
  var downTo = kotlin_kotlin.$_$.x9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.g1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var IOException = kotlin_io_ktor_ktor_io.$_$.e1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.m;
  var HttpMessage = kotlin_io_ktor_ktor_http.$_$.u;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.d;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.i1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.u;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var HttpMessageBuilder = kotlin_io_ktor_ktor_http.$_$.t;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.j;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.t8;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.h;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var intercepted = kotlin_kotlin.$_$.k7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var extendThrowable = kotlin_kotlin.$_$.o8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.b4;
  var createFailure = kotlin_kotlin.$_$.mc;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.y2;
  var toTypedArray = kotlin_kotlin.$_$.e7;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.c1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.h;
  //endregion
  //region block: pre-declaration
  HttpClient$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda.prototype.constructor = HttpClient$slambda;
  HttpClient$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda_1.prototype.constructor = HttpClient$slambda_1;
  $executeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$0.prototype.constructor = $executeCOROUTINE$0;
  $bodyNullableCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $bodyNullableCOROUTINE$1.prototype.constructor = $bodyNullableCOROUTINE$1;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  NoTransformationFoundException.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFoundException.prototype.constructor = NoTransformationFoundException;
  SavedHttpCall.prototype = Object.create(HttpClientCall.prototype);
  SavedHttpCall.prototype.constructor = SavedHttpCall;
  function get_coroutineContext() {
    return this.p32().nj();
  }
  SavedHttpResponse.prototype = Object.create(HttpResponse.prototype);
  SavedHttpResponse.prototype.constructor = SavedHttpResponse;
  $saveCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $saveCOROUTINE$3.prototype.constructor = $saveCOROUTINE$3;
  UnsupportedContentTypeException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentTypeException.prototype.constructor = UnsupportedContentTypeException;
  ObservableContent$content$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ObservableContent$content$slambda.prototype.constructor = ObservableContent$content$slambda;
  ObservableContent.prototype = Object.create(ReadChannelContent.prototype);
  ObservableContent.prototype.constructor = ObservableContent;
  HttpClientEngine$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$install$slambda.prototype.constructor = HttpClientEngine$install$slambda;
  HttpClientEngine$executeWithinCallContext$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$executeWithinCallContext$slambda.prototype.constructor = HttpClientEngine$executeWithinCallContext$slambda;
  $executeWithinCallContextCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $executeWithinCallContextCOROUTINE$4.prototype.constructor = $executeWithinCallContextCOROUTINE$4;
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().a30_1;
    client.j2x_1.w1n(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  ClientEngineClosedException.prototype = Object.create(IllegalStateException.prototype);
  ClientEngineClosedException.prototype.constructor = ClientEngineClosedException;
  BodyProgress$handle$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda.prototype.constructor = BodyProgress$handle$slambda;
  BodyProgress$handle$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda_1.prototype.constructor = BodyProgress$handle$slambda_1;
  ResponseException.prototype = Object.create(IllegalStateException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  RedirectResponseException.prototype = Object.create(ResponseException.prototype);
  RedirectResponseException.prototype.constructor = RedirectResponseException;
  ClientRequestException.prototype = Object.create(ResponseException.prototype);
  ClientRequestException.prototype.constructor = ClientRequestException;
  ServerResponseException.prototype = Object.create(ResponseException.prototype);
  ServerResponseException.prototype.constructor = ServerResponseException;
  addDefaultResponseValidation$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  addDefaultResponseValidation$lambda$slambda.prototype.constructor = addDefaultResponseValidation$lambda$slambda;
  defaultTransformers$1$content$1.prototype = Object.create(ByteArrayContent.prototype);
  defaultTransformers$1$content$1.prototype.constructor = defaultTransformers$1$content$1;
  defaultTransformers$1$content$2.prototype = Object.create(ReadChannelContent.prototype);
  defaultTransformers$1$content$2.prototype.constructor = defaultTransformers$1$content$2;
  defaultTransformers$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda.prototype.constructor = defaultTransformers$slambda;
  defaultTransformers$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda$slambda.prototype.constructor = defaultTransformers$slambda$slambda;
  defaultTransformers$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda_1.prototype.constructor = defaultTransformers$slambda_1;
  HttpCallValidator$Companion$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda.prototype.constructor = HttpCallValidator$Companion$install$slambda;
  HttpCallValidator$Companion$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_1.prototype.constructor = HttpCallValidator$Companion$install$slambda_1;
  HttpCallValidator$Companion$install$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_3.prototype.constructor = HttpCallValidator$Companion$install$slambda_3;
  $validateResponseCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $validateResponseCOROUTINE$5.prototype.constructor = $validateResponseCOROUTINE$5;
  $processExceptionCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $processExceptionCOROUTINE$6.prototype.constructor = $processExceptionCOROUTINE$6;
  HttpPlainText$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda.prototype.constructor = HttpPlainText$Plugin$install$slambda;
  HttpPlainText$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda_1.prototype.constructor = HttpPlainText$Plugin$install$slambda_1;
  HttpRedirect$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRedirect$Plugin$install$slambda.prototype.constructor = HttpRedirect$Plugin$install$slambda;
  $handleCallCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $handleCallCOROUTINE$7.prototype.constructor = $handleCallCOROUTINE$7;
  HttpRequestLifecycle$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRequestLifecycle$Plugin$install$slambda.prototype.constructor = HttpRequestLifecycle$Plugin$install$slambda;
  HttpSend$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpSend$Plugin$install$slambda.prototype.constructor = HttpSend$Plugin$install$slambda;
  $executeCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$8.prototype.constructor = $executeCOROUTINE$8;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  HttpTimeout$Plugin$install$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda$slambda;
  HttpTimeout$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda;
  HttpRequestTimeoutException.prototype = Object.create(IOException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  DelegatedResponse.prototype = Object.create(HttpResponse.prototype);
  DelegatedResponse.prototype.constructor = DelegatedResponse;
  WebSocketException.prototype = Object.create(IllegalStateException.prototype);
  WebSocketException.prototype.constructor = WebSocketException;
  ClientUpgradeContent.prototype = Object.create(NoContent.prototype);
  ClientUpgradeContent.prototype.constructor = ClientUpgradeContent;
  HttpRequestPipeline.prototype = Object.create(Pipeline.prototype);
  HttpRequestPipeline.prototype.constructor = HttpRequestPipeline;
  HttpSendPipeline.prototype = Object.create(Pipeline.prototype);
  HttpSendPipeline.prototype.constructor = HttpSendPipeline;
  DefaultHttpResponse.prototype = Object.create(HttpResponse.prototype);
  DefaultHttpResponse.prototype.constructor = DefaultHttpResponse;
  $bodyAsTextCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $bodyAsTextCOROUTINE$18.prototype.constructor = $bodyAsTextCOROUTINE$18;
  HttpResponsePipeline.prototype = Object.create(Pipeline.prototype);
  HttpResponsePipeline.prototype.constructor = HttpResponsePipeline;
  HttpReceivePipeline.prototype = Object.create(Pipeline.prototype);
  HttpReceivePipeline.prototype.constructor = HttpReceivePipeline;
  HttpStatement$execute$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpStatement$execute$slambda.prototype.constructor = HttpStatement$execute$slambda;
  $executeCOROUTINE$19.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$19.prototype.constructor = $executeCOROUTINE$19;
  $executeUnsafeCOROUTINE$20.prototype = Object.create(CoroutineImpl.prototype);
  $executeUnsafeCOROUTINE$20.prototype.constructor = $executeUnsafeCOROUTINE$20;
  $cleanupCOROUTINE$21.prototype = Object.create(CoroutineImpl.prototype);
  $cleanupCOROUTINE$21.prototype.constructor = $cleanupCOROUTINE$21;
  observable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  observable$slambda.prototype.constructor = observable$slambda;
  EmptyContent.prototype = Object.create(NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  $executeCOROUTINE$22.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$22.prototype.constructor = $executeCOROUTINE$22;
  $executeWebSocketRequestCOROUTINE$23.prototype = Object.create(CoroutineImpl.prototype);
  $executeWebSocketRequestCOROUTINE$23.prototype.constructor = $executeWebSocketRequestCOROUTINE$23;
  JsClientEngine.prototype = Object.create(HttpClientEngineBase.prototype);
  JsClientEngine.prototype.constructor = JsClientEngine;
  JsError.prototype = Object.create(Error.prototype);
  JsError.prototype.constructor = JsError;
  toRaw$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toRaw$slambda.prototype.constructor = toRaw$slambda;
  $toRawCOROUTINE$24.prototype = Object.create(CoroutineImpl.prototype);
  $toRawCOROUTINE$24.prototype.constructor = $toRawCOROUTINE$24;
  channelFromStream$slambda.prototype = Object.create(CoroutineImpl.prototype);
  channelFromStream$slambda.prototype.constructor = channelFromStream$slambda;
  readBodyNode$slambda.prototype = Object.create(CoroutineImpl.prototype);
  readBodyNode$slambda.prototype.constructor = readBodyNode$slambda;
  JsWebSocketSession$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsWebSocketSession$slambda.prototype.constructor = JsWebSocketSession$slambda;
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.d2x_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel$default(this$0.b2x_1, null, 1, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.x2x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.b2y = function ($this$intercept, call, $cont) {
    var tmp = this.c2y($this$intercept, call, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpClient$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            var tmp_0 = this.z2x_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.z2x_1) + '(' + getKClassFromExpression(this.z2x_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.oh_1 = 1;
            suspendResult = this.x2x_1.k2x_1.r1n(Unit_getInstance(), this.z2x_1.i2y(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a2y_1 = suspendResult;
            this.z2x_1.j2y(this.a2y_1);
            this.oh_1 = 2;
            suspendResult = this.y2x_1.w1m(this.z2x_1, this);
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
  HttpClient$slambda.prototype.c2y = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.x2x_1, completion);
    i.y2x_1 = $this$intercept;
    i.z2x_1 = call;
    return i;
  };
  HttpClient$slambda.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.b2y($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.s2y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.v2y = function ($this$intercept, it, $cont) {
    var tmp = this.w2y($this$intercept, it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpClient$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v2y(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = this.t2y_1.x1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ph_1 = 3;
            this.oh_1 = 4;
            continue $sm;
          case 2:
            this.ph_1 = 3;
            var tmp_0 = this.rh_1;
            if (tmp_0 instanceof Error) {
              var cause = this.rh_1;
              this.s2y_1.n2x_1.a2x(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.t2y_1.s1n_1.i2y(), cause));
              throw cause;
            } else {
              throw this.rh_1;
            }

            break;
          case 3:
            throw this.rh_1;
          case 4:
            this.ph_1 = 3;
            return Unit_getInstance();
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
  HttpClient$slambda_1.prototype.w2y = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.s2y_1, completion);
    i.t2y_1 = $this$intercept;
    i.u2y_1 = it;
    return i;
  };
  HttpClient$slambda_1.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.v2y($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2z_1 = _this__u8e3s4;
    this.g2z_1 = builder;
  }
  $executeCOROUTINE$0.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.f2z_1.n2x_1.a2x(get_HttpRequestCreated(), this.g2z_1);
            this.oh_1 = 1;
            suspendResult = this.f2z_1.h2x_1.r1n(this.g2z_1, this.g2z_1.k2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  $executeCOROUTINE$0.$metadata$ = classMeta('$executeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClient(engine, userConfig) {
    this.b2x_1 = engine;
    this.c2x_1 = userConfig;
    this.d2x_1 = false;
    this.e2x_1 = atomic$boolean$1(false);
    this.f2x_1 = Job(this.b2x_1.nj().y3(Key_getInstance()));
    this.g2x_1 = this.b2x_1.nj().f4(this.f2x_1);
    this.h2x_1 = new HttpRequestPipeline(this.c2x_1.u2z_1);
    this.i2x_1 = new HttpResponsePipeline(this.c2x_1.u2z_1);
    this.j2x_1 = new HttpSendPipeline(this.c2x_1.u2z_1);
    this.k2x_1 = new HttpReceivePipeline(this.c2x_1.u2z_1);
    this.l2x_1 = Attributes(true);
    this.m2x_1 = this.b2x_1.v2z();
    this.n2x_1 = new Events();
    this.o2x_1 = new HttpClientConfig();
    if (this.d2x_1) {
      this.f2x_1.ok(HttpClient$lambda(this));
    }
    this.b2x_1.w2z(this);
    var tmp = Phases_getInstance_0().b30_1;
    this.j2x_1.w1n(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.c2x_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = Plugin_getInstance_2();
    this.o2x_1.c30(tmp_0, null, 2, null);
    var tmp_1 = Plugin_getInstance();
    this.o2x_1.c30(tmp_1, null, 2, null);
    if (tmp0_with.s2z_1) {
      this.o2x_1.d30('DefaultTransformers', HttpClient$lambda_0);
    }
    var tmp_2 = Plugin_getInstance_3();
    this.o2x_1.c30(tmp_2, null, 2, null);
    var tmp_3 = Companion_getInstance_9();
    this.o2x_1.c30(tmp_3, null, 2, null);
    if (tmp0_with.r2z_1) {
      var tmp_4 = Plugin_getInstance_1();
      this.o2x_1.c30(tmp_4, null, 2, null);
    }
    var tmp0_this = this;
    tmp0_this.o2x_1.e30(tmp0_with);
    if (tmp0_with.s2z_1) {
      var tmp_5 = Plugin_getInstance_0();
      this.o2x_1.c30(tmp_5, null, 2, null);
    }
    addDefaultResponseValidation(this.o2x_1);
    this.o2x_1.w2z(this);
    tmp$ret$0 = Unit_getInstance();
    var tmp_6 = Phases_getInstance_1().f30_1;
    this.i2x_1.w1n(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.nj = function () {
    return this.g2x_1;
  };
  HttpClient.prototype.k30 = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpClient.prototype.t10 = function () {
    var success = this.e2x_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.l2x_1.g1j(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = installedFeatures.m1j();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.g1j(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.t10();
      }
    }
    this.f2x_1.hp();
    if (this.d2x_1) {
      this.b2x_1.t10();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.b2x_1 + ']';
  };
  HttpClient.$metadata$ = classMeta('HttpClient', [CoroutineScope, Closeable]);
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var engine = engineFactory.l30(config.q2z_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.g2x_1.y3(Key_getInstance()));
    tmp.ok(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.t10();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.l2x_1.l1j(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.o2x_1.o2z_1.i2($plugin.s()));
      var pluginData = $plugin.m30(config);
      $plugin.n30(pluginData, scope);
      attributes.j1j($plugin.s(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.n2z_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.o2z_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.p2z_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.q2z_1 = HttpClientConfig$engineConfig$lambda;
    this.r2z_1 = true;
    this.s2z_1 = true;
    this.t2z_1 = false;
    this.u2z_1 = PlatformUtils_getInstance().r1o_1;
  }
  HttpClientConfig.prototype.o30 = function (plugin, configure) {
    var previousConfigBlock = this.o2z_1.i2(plugin.s());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.o2z_1;
    var tmp1_set = plugin.s();
    tmp0_set.a(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.n2z_1.c2(plugin.s()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.n2z_1;
    var tmp3_set = plugin.s();
    tmp2_set.a(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.c30 = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda;
    }
    return this.o30(plugin, configure);
  };
  HttpClientConfig.prototype.d30 = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.p2z_1;
    tmp0_set.a(key, block);
  };
  HttpClientConfig.prototype.w2z = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.n2z_1.k2();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
      tmp$ret$0 = client;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.p2z_1.k2();
    var tmp0_iterator_0 = tmp1_forEach.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
      tmp$ret$1 = client;
    }
  };
  HttpClientConfig.prototype.e30 = function (other) {
    this.r2z_1 = other.r2z_1;
    this.s2z_1 = other.s2z_1;
    this.t2z_1 = other.t2z_1;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.n2z_1;
    var tmp1_plusAssign = other.n2z_1;
    tmp0_plusAssign.b3(tmp1_plusAssign);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.o2z_1;
    var tmp3_plusAssign = other.o2z_1;
    tmp2_plusAssign.b3(tmp3_plusAssign);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp2_this.p2z_1;
    var tmp5_plusAssign = other.p2z_1;
    tmp4_plusAssign.b3(tmp5_plusAssign);
  };
  HttpClientConfig.$metadata$ = classMeta('HttpClientConfig');
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.f2y_1 = new DefaultHttpRequest($this, requestData);
    $this.g2y_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.t30_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.w30().j1j(Companion_getInstance_7().x30_1, responseData.t30_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.x30_1 = new AttributeKey('CustomResponse');
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g31_1 = _this__u8e3s4;
    this.h31_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 10;
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.oh_1 = 2;
            continue $sm;
          case 2:
            this.ph_1 = 9;
            this.ph_1 = 8;
            if (instanceOf(this.g31_1.i2y(), this.h31_1.j1o_1)) {
              this.i31_1 = this.g31_1.i2y();
              this.ph_1 = 10;
              this.oh_1 = 7;
              continue $sm;
            } else {
              this.oh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.g31_1.n31() ? !this.g31_1.e2y_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.g31_1);
            }

            this.j31_1 = this.g31_1.w30().h1j(Companion_getInstance_7().x30_1);
            if (this.j31_1 == null) {
              this.oh_1 = 4;
              suspendResult = this.g31_1.o31(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.k31_1 = this.j31_1;
              this.oh_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.k31_1 = suspendResult;
            this.oh_1 = 5;
            continue $sm;
          case 5:
            this.l31_1 = this.k31_1;
            this.m31_1 = new HttpResponseContainer(this.h31_1, this.l31_1);
            this.oh_1 = 6;
            suspendResult = this.g31_1.d2y_1.i2x_1.r1n(this.g31_1, this.m31_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.q31_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.h31_1.j1o_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.h31_1.j1o_1;
              throw new NoTransformationFoundException(this.g31_1.i2y(), from, to);
            }

            this.i31_1 = result;
            this.ph_1 = 10;
            this.oh_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.i31_1;
            complete(this.g31_1.i2y());
            ;
            return tmp_2;
          case 8:
            this.ph_1 = 9;
            var tmp_3 = this.rh_1;
            if (tmp_3 instanceof Error) {
              var cause = this.rh_1;
              var tmp_4 = this;
              cancel(this.g31_1.i2y(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.rh_1;
            }

            break;
          case 9:
            this.ph_1 = 10;
            var t = this.rh_1;
            complete(this.g31_1.i2y());
            ;
            throw t;
          case 10:
            throw this.rh_1;
          case 11:
            complete(this.g31_1.i2y());
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ph_1 === 10) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $bodyNullableCOROUTINE$1.$metadata$ = classMeta('$bodyNullableCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.d2y_1 = client;
    this.e2y_1 = atomic$boolean$1(false);
    this.h2y_1 = false;
  }
  HttpClientCall.prototype.nj = function () {
    return this.i2y().nj();
  };
  HttpClientCall.prototype.w30 = function () {
    return this.r31().w30();
  };
  HttpClientCall.prototype.r31 = function () {
    var tmp = this.f2y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.i2y = function () {
    var tmp = this.g2y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.n31 = function () {
    return this.h2y_1;
  };
  HttpClientCall.prototype.o31 = function ($cont) {
    return this.i2y().t1q();
  };
  HttpClientCall.prototype.s31 = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.r31().t31() + ', ' + this.i2y().u31() + ']';
  };
  HttpClientCall.prototype.j2y = function (response) {
    this.g2y_1 = response;
  };
  HttpClientCall.$metadata$ = classMeta('HttpClientCall', [CoroutineScope]);
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.v31_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.j1 = function () {
    return this.v31_1;
  };
  DoubleReceiveException.$metadata$ = classMeta('DoubleReceiveException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function NoTransformationFoundException$message$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var key = _name_for_destructuring_parameter_0__wldtmu.h3();
    var value = _name_for_destructuring_parameter_0__wldtmu.i3();
    return key + ': ' + value + '\n';
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).t31();
    var tmp_1 = response.u31();
    var tmp_2 = flattenEntries(response.e1v());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda, 31, null) + '\n    ';
    tmp.w31_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.j1 = function () {
    return this.w31_1;
  };
  NoTransformationFoundException.$metadata$ = classMeta('NoTransformationFoundException', undefined, undefined, undefined, undefined, UnsupportedOperationException.prototype);
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.l32_1 = responseBody;
    this.f2y_1 = new SavedHttpRequest(this, request);
    this.g2y_1 = new SavedHttpResponse(this, this.l32_1, response);
    this.m32_1 = true;
  }
  SavedHttpCall.prototype.o31 = function ($cont) {
    return ByteReadChannel_0(this.l32_1);
  };
  SavedHttpCall.prototype.n31 = function () {
    return this.m32_1;
  };
  SavedHttpCall.$metadata$ = classMeta('SavedHttpCall', undefined, undefined, undefined, undefined, HttpClientCall.prototype);
  function SavedHttpRequest(call, origin) {
    this.n32_1 = call;
    this.o32_1 = origin;
  }
  SavedHttpRequest.prototype.p32 = function () {
    return this.n32_1;
  };
  SavedHttpRequest.prototype.w30 = function () {
    return this.o32_1.w30();
  };
  SavedHttpRequest.prototype.nj = function () {
    return this.o32_1.nj();
  };
  SavedHttpRequest.prototype.e1v = function () {
    return this.o32_1.e1v();
  };
  SavedHttpRequest.prototype.q32 = function () {
    return this.o32_1.q32();
  };
  SavedHttpRequest.prototype.t31 = function () {
    return this.o32_1.t31();
  };
  SavedHttpRequest.$metadata$ = classMeta('SavedHttpRequest', [HttpRequest_0]);
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.r32_1 = call;
    var tmp = this;
    tmp.s32_1 = Job$default(null, 1, null);
    this.t32_1 = origin.u31();
    this.u32_1 = origin.a33();
    this.v32_1 = origin.b33();
    this.w32_1 = origin.c33();
    this.x32_1 = origin.e1v();
    this.y32_1 = origin.nj().f4(this.s32_1);
    this.z32_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.p32 = function () {
    return this.r32_1;
  };
  SavedHttpResponse.prototype.u31 = function () {
    return this.t32_1;
  };
  SavedHttpResponse.prototype.a33 = function () {
    return this.u32_1;
  };
  SavedHttpResponse.prototype.b33 = function () {
    return this.v32_1;
  };
  SavedHttpResponse.prototype.c33 = function () {
    return this.w32_1;
  };
  SavedHttpResponse.prototype.e1v = function () {
    return this.x32_1;
  };
  SavedHttpResponse.prototype.nj = function () {
    return this.y32_1;
  };
  SavedHttpResponse.prototype.t1q = function () {
    return this.z32_1;
  };
  SavedHttpResponse.$metadata$ = classMeta('SavedHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f32_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$3.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            var tmp_0 = this.f32_1.i2y().t1q();
            suspendResult = tmp_0.y19(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.f32_1.d2y_1, this.f32_1.r31(), this.f32_1.i2y(), responseBody);
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
  $saveCOROUTINE$3.$metadata$ = classMeta('$saveCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  UnsupportedContentTypeException.$metadata$ = classMeta('UnsupportedContentTypeException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.l33_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.n33 = function ($this$writer, $cont) {
    var tmp = this.o33($this$writer, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  ObservableContent$content$slambda.prototype.yh = function (p1, $cont) {
    return this.n33((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = this.l33_1.r20(this.m33_1.nv(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  ObservableContent$content$slambda.prototype.o33 = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.l33_1, completion);
    i.m33_1 = $this$writer;
    return i;
  };
  ObservableContent$content$slambda.$metadata$ = classMeta('ObservableContent$content$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.n33($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.q33_1 = callContext;
    this.r33_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.m20());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().v1b();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.p20();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.q33_1, true, ObservableContent$content$slambda_0(delegate, null)).nv();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.s33_1 = tmp_0;
    this.t33_1 = delegate;
  }
  ObservableContent.prototype.k20 = function () {
    return this.t33_1.k20();
  };
  ObservableContent.prototype.l20 = function () {
    return this.t33_1.l20();
  };
  ObservableContent.prototype.e1v = function () {
    return this.t33_1.e1v();
  };
  ObservableContent.prototype.p20 = function () {
    return observable(this.s33_1, this.q33_1, this.l20(), this.r33_1);
  };
  ObservableContent.$metadata$ = classMeta('ObservableContent', undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.n2x_1.a2x(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.nj().y3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oj();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.m34_1.d();
    while (tmp0_iterator.e()) {
      var requestedExtension = tmp0_iterator.f();
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.n34().l1(requestedExtension);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        tmp$ret$0 = "Engine doesn't support " + requestedExtension;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.w34_1 = $client;
    this.x34_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.b2y = function ($this$intercept, content, $cont) {
    var tmp = this.c2y($this$intercept, content, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpClientEngine$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.a35_1 = new HttpRequestBuilder();
            this.a35_1.h35(this.y34_1.s1n_1);
            ;
            var tmp0_subject = this.z34_1;
            if (tmp0_subject == null) {
              this.a35_1.k2z_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = PrimitiveClasses_getInstance().af();
              var tmp_4;
              try {
                tmp_4 = createKType(PrimitiveClasses_getInstance().af(), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              this.a35_1.i35(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.a35_1.k2z_1 = this.z34_1;
                this.a35_1.i35(null);
              } else {
                this.a35_1.k2z_1 = this.z34_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = PrimitiveClasses_getInstance().af();
                var tmp_8;
                try {
                  tmp_8 = createKType(PrimitiveClasses_getInstance().af(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                this.a35_1.i35(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_0.b35_1 = this.a35_1;
            this.w34_1.n2x_1.a2x(get_HttpRequestIsReadyForSending(), this.b35_1);
            var tmp_10 = this;
            var tmp_11 = this;
            tmp_11.c35_1 = this.b35_1.u17();
            this.c35_1.l34_1.j1j(get_CLIENT_CONFIG(), this.w34_1.o2x_1);
            ;
            tmp_10.d35_1 = this.c35_1;
            validateHeaders(this.d35_1);
            checkExtensions(this.x34_1, this.d35_1);
            this.oh_1 = 1;
            suspendResult = executeWithinCallContext(this.x34_1, this.d35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e35_1 = suspendResult;
            this.f35_1 = HttpClientCall_init_$Create$(this.w34_1, this.d35_1, this.e35_1);
            this.g35_1 = this.f35_1.i2y();
            this.w34_1.n2x_1.a2x(get_HttpResponseReceived(), this.g35_1);
            var tmp_12 = get_job(this.g35_1.nj());
            tmp_12.ok(HttpClientEngine$install$slambda$lambda(this.w34_1, this.g35_1));
            ;
            this.oh_1 = 2;
            suspendResult = this.y34_1.w1m(this.f35_1, this);
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
  HttpClientEngine$install$slambda.prototype.c2y = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.w34_1, this.x34_1, completion);
    i.y34_1 = $this$intercept;
    i.z34_1 = content;
    return i;
  };
  HttpClientEngine$install$slambda.$metadata$ = classMeta('HttpClientEngine$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.b2y($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.r35_1 = this$0;
    this.s35_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.u35 = function ($this$async, $cont) {
    var tmp = this.z1a($this$async, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.yh = function (p1, $cont) {
    return this.u35((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            if (_get_closed__iwkfs1(this.r35_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.oh_1 = 1;
            suspendResult = this.r35_1.v35(this.s35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.z1a = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.r35_1, this.s35_1, completion);
    i.t35_1 = $this$async;
    return i;
  };
  HttpClientEngine$executeWithinCallContext$slambda.$metadata$ = classMeta('HttpClientEngine$executeWithinCallContext$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.u35($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c34_1 = _this__u8e3s4;
    this.d34_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$4.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = createCallContext(this.c34_1, this.d34_1.k34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e34_1 = suspendResult;
            this.f34_1 = this.e34_1.f4(new KtorCallContextElement(this.e34_1));
            this.oh_1 = 2;
            suspendResult = async$default(this.c34_1, this.f34_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.c34_1, this.d34_1, null), 2, null).cm(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  $executeWithinCallContextCOROUTINE$4.$metadata$ = classMeta('$executeWithinCallContextCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientEngine() {
  }
  HttpClientEngine.$metadata$ = interfaceMeta('HttpClientEngine', [CoroutineScope, Closeable]);
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.i34_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = requestHeaders.w1k();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      tmp$ret$0 = HttpHeaders_getInstance().u1u_1.l1(element);
      if (tmp$ret$0) {
        tmp0_filterTo.b(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !unsafeRequestHeaders.m();
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.nj().f4(callJob).f4(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.u3();
      var tmp0_elvis_lhs = tmp$ret$0.y3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.qk(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.ok(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function HttpClientEngineFactory() {
  }
  HttpClientEngineFactory.$metadata$ = interfaceMeta('HttpClientEngineFactory');
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.tk(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.sm();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.w35_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.k1 = function () {
    return this.w35_1;
  };
  ClientEngineClosedException.$metadata$ = classMeta('ClientEngineClosedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.k1();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).f4(this$0.x35()).f4(new CoroutineName(this$0.y35_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.x35());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.y35_1 = engineName;
    this.z35_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.a36_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.nj = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = coroutineContext$factory();
    tmp$ret$0 = this.a36_1.t();
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.t10 = function () {
    if (!this.z35_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.nj().y3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.hp();
    requestJob.ok(HttpClientEngineBase$close$lambda(this));
  };
  HttpClientEngineBase.$metadata$ = classMeta('HttpClientEngineBase', [HttpClientEngine]);
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher) {
        _this__u8e3s4.t10();
      } else {
        if (isInterface(tmp0_subject, Closeable)) {
          _this__u8e3s4.t10();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.nj();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = interfaceMeta('HttpClientEngineCapability');
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.b36_1 = 4;
    this.c36_1 = false;
    this.d36_1 = null;
  }
  HttpClientEngineConfig.$metadata$ = classMeta('HttpClientEngineConfig');
  function get_KTOR_DEFAULT_USER_AGENT() {
    init_properties_Utils_kt_jyhfj1();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    init_properties_Utils_kt_jyhfj1();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion', [Key]);
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_8();
    this.e36_1 = callContext;
  }
  KtorCallContextElement.prototype.s = function () {
    return Companion_getInstance_8();
  };
  KtorCallContextElement.$metadata$ = classMeta('KtorCallContextElement', [Element]);
  function callContext($cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.u3();
    return ensureNotNull(tmp$ret$0.y3(Companion_getInstance_8())).e36_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    init_properties_Utils_kt_jyhfj1();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.y1k(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.a1k(HttpHeaders_getInstance().x1t_1) == null ? content.e1v().a1k(HttpHeaders_getInstance().x1t_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().x1t_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.k20();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.e1v().a1k(HttpHeaders_getInstance().r1r_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.a1k(HttpHeaders_getInstance().r1r_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.l20();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.e1v().a1k(HttpHeaders_getInstance().o1r_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.a1k(HttpHeaders_getInstance().o1r_1) : tmp5_elvis_lhs;
    var tmp6_safe_receiver = type;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = block(HttpHeaders_getInstance().r1r_1, tmp6_safe_receiver);
    }
    var tmp7_safe_receiver = length;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = block(HttpHeaders_getInstance().o1r_1, tmp7_safe_receiver);
    }
  }
  function needUserAgent() {
    init_properties_Utils_kt_jyhfj1();
    return !PlatformUtils_getInstance().n1o_1;
  }
  function attachToUserJob$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.tk(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function attachToUserJob$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.sm();
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.g1l($requestHeaders);
      $this$buildHeaders.g1l($content.e1v());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().o1r_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().r1r_1 === key) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (get_DATE_HEADERS().l1(key)) {
        var tmp0_iterator = values.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_getInstance();
      } else {
        tmp_1 = $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function init_properties_Utils_kt_jyhfj1() {
    if (properties_initialized_Utils_kt_xvi83j) {
    } else {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'Ktor client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().u1r_1, HttpHeaders_getInstance().a1s_1, HttpHeaders_getInstance().m1s_1, HttpHeaders_getInstance().h1s_1, HttpHeaders_getInstance().l1s_1]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.h2x_1.t1n(Phases_getInstance().i36_1, observableContentPhase);
    scope.h2x_1.w1n(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().m36_1;
    scope.k2x_1.w1n(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.n36_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.s = function () {
    return this.n36_1;
  };
  Plugin.prototype.o36 = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.m30 = function (block) {
    return this.o36(block);
  };
  Plugin.prototype.p36 = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.n30 = function (plugin, scope) {
    return this.p36(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.b2y = function ($this$intercept, content, $cont) {
    var tmp = this.c2y($this$intercept, content, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  BodyProgress$handle$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.y36_1.s1n_1.m2z_1.h1j(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.a37_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.z36_1;
            tmp_2.b37_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.y36_1.s1n_1.l2z_1, this.a37_1);
            this.oh_1 = 1;
            suspendResult = this.y36_1.w1m(this.b37_1, this);
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
  BodyProgress$handle$slambda.prototype.c2y = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.y36_1 = $this$intercept;
    i.z36_1 = content;
    return i;
  };
  BodyProgress$handle$slambda.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.b2y($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.o37 = function ($this$intercept, response, $cont) {
    var tmp = this.p37($this$intercept, response, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  BodyProgress$handle$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o37(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.l37_1.p32().r31().w30().h1j(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.m37_1 = tmp_1;
            this.n37_1 = withObservableDownload(this.l37_1, this.m37_1);
            this.oh_1 = 1;
            suspendResult = this.k37_1.w1m(this.n37_1, this);
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
  BodyProgress$handle$slambda_1.prototype.p37 = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.k37_1 = $this$intercept;
    i.l37_1 = response;
    return i;
  };
  BodyProgress$handle$slambda_1.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.o37($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  BodyProgress.$metadata$ = classMeta('BodyProgress');
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.t1q(), _this__u8e3s4.nj(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.r37_1 = 'Unhandled redirect: ' + response.p32().r31().q32().n1v_1 + ' ' + response.p32().r31().t31() + '. ' + ('Status: ' + response.u31() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.j1 = function () {
    return this.r37_1;
  };
  RedirectResponseException.$metadata$ = classMeta('RedirectResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.t37_1 = 'Client request(' + response.p32().r31().q32().n1v_1 + ' ' + response.p32().r31().t31() + ') ' + ('invalid: ' + response.u31() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.j1 = function () {
    return this.t37_1;
  };
  ClientRequestException.$metadata$ = classMeta('ClientRequestException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.v37_1 = 'Server error(' + response.p32().r31().q32().n1v_1 + ' ' + response.p32().r31().t31() + ': ' + ('' + response.u31() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.j1 = function () {
    return this.v37_1;
  };
  ServerResponseException.$metadata$ = classMeta('ServerResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.w37_1 = response;
    captureStack(this, ResponseException);
  }
  ResponseException.$metadata$ = classMeta('ResponseException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.n38 = function (response, $cont) {
    var tmp = this.o38(response, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.yh = function (p1, $cont) {
    return this.n38(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.g38_1 = this.f38_1.p32().w30().g1j(get_ExpectSuccessAttributeKey());
            if (!this.g38_1) {
              return Unit_getInstance();
            }

            this.h38_1 = this.f38_1.u31().y1x_1;
            this.i38_1 = this.f38_1.p32();
            if (this.h38_1 < 300 ? true : this.i38_1.w30().i1j(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.oh_1 = 1;
            suspendResult = save(this.i38_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j38_1 = suspendResult;
            this.j38_1.w30().j1j(get_ValidateMark(), Unit_getInstance());
            ;
            this.k38_1 = this.j38_1;
            this.l38_1 = this.k38_1.i2y();
            this.ph_1 = 3;
            this.oh_1 = 2;
            suspendResult = bodyAsText$default(this.l38_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m38_1 = suspendResult;
            this.ph_1 = 5;
            this.oh_1 = 4;
            continue $sm;
          case 3:
            this.ph_1 = 5;
            var tmp_0 = this.rh_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.rh_1;
              var tmp_1 = this;
              tmp_1.m38_1 = '<body failed decoding>';
              this.oh_1 = 4;
              continue $sm;
            } else {
              throw this.rh_1;
            }

            break;
          case 4:
            this.ph_1 = 5;
            var exceptionResponseText = this.m38_1;
            var tmp0_subject = this.h38_1;
            if (300 <= tmp0_subject ? tmp0_subject <= 399 : false)
              throw new RedirectResponseException(this.l38_1, exceptionResponseText);
            else if (400 <= tmp0_subject ? tmp0_subject <= 499 : false)
              throw new ClientRequestException(this.l38_1, exceptionResponseText);
            else if (500 <= tmp0_subject ? tmp0_subject <= 599 : false)
              throw new ServerResponseException(this.l38_1, exceptionResponseText);
            else
              throw new ResponseException(this.l38_1, exceptionResponseText);
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
  addDefaultResponseValidation$lambda$slambda.prototype.o38 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.f38_1 = response;
    return i;
  };
  addDefaultResponseValidation$lambda$slambda.$metadata$ = classMeta('addDefaultResponseValidation$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.n38(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.r38_1 = $this_addDefaultResponseValidation.t2z_1;
      $this$HttpResponseValidator.s38(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
    }
  }
  function defaultTransformers(_this__u8e3s4) {
    var tmp = Phases_getInstance().i36_1;
    _this__u8e3s4.h2x_1.w1n(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().g30_1;
    _this__u8e3s4.i2x_1.w1n(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.w38_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.u38_1 = tmp0_elvis_lhs == null ? Application_getInstance().m1p_1 : tmp0_elvis_lhs;
    this.v38_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.k20 = function () {
    return this.u38_1;
  };
  defaultTransformers$1$content$1.prototype.l20 = function () {
    return this.v38_1;
  };
  defaultTransformers$1$content$1.prototype.m20 = function () {
    return this.w38_1;
  };
  defaultTransformers$1$content$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ByteArrayContent.prototype);
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.a39_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.s1n_1.j2z_1.a1k(HttpHeaders_getInstance().o1r_1);
    tmp.y38_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.z38_1 = tmp0_elvis_lhs == null ? Application_getInstance().m1p_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.l20 = function () {
    return this.y38_1;
  };
  defaultTransformers$1$content$2.prototype.k20 = function () {
    return this.z38_1;
  };
  defaultTransformers$1$content$2.prototype.p20 = function () {
    return this.a39_1;
  };
  defaultTransformers$1$content$2.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.b2y = function ($this$intercept, body, $cont) {
    var tmp = this.c2y($this$intercept, body, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  defaultTransformers$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            if (this.j39_1.s1n_1.j2z_1.a1k(HttpHeaders_getInstance().z1q_1) == null) {
              this.j39_1.s1n_1.j2z_1.f1l(HttpHeaders_getInstance().z1q_1, '*/*');
            }

            this.l39_1 = contentType(this.j39_1.s1n_1);
            var tmp_0 = this;
            var tmp0_subject = this.k39_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.l39_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().d1q_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.k39_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.l39_1, this.k39_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.j39_1, this.l39_1, this.k39_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.k39_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.l39_1, this.j39_1.s1n_1, this.k39_1);
                  }
                }
              }
            }

            tmp_0.m39_1 = tmp_1;
            var tmp2_safe_receiver = this.m39_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.k20()) == null)) {
              this.j39_1.s1n_1.j2z_1.h1l(HttpHeaders_getInstance().r1r_1);
              this.oh_1 = 1;
              suspendResult = this.j39_1.w1m(this.m39_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.oh_1 = 2;
            continue $sm;
          case 2:
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
  defaultTransformers$slambda.prototype.c2y = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.j39_1 = $this$intercept;
    i.k39_1 = body;
    return i;
  };
  defaultTransformers$slambda.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.b2y($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.v39_1 = $body;
    this.w39_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.n33 = function ($this$writer, $cont) {
    var tmp = this.o33($this$writer, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  defaultTransformers$slambda$slambda.prototype.yh = function (p1, $cont) {
    return this.n33((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.ph_1 = 4;
            this.ph_1 = 3;
            this.oh_1 = 2;
            var tmp_0 = this.x39_1.nv();
            Companion_getInstance_0();
            suspendResult = copyTo(this.v39_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.y39_1 = Unit_getInstance();
            this.ph_1 = 5;
            this.oh_1 = 6;
            continue $sm;
          case 3:
            this.ph_1 = 4;
            var tmp_2 = this.rh_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.rh_1;
              var tmp_3 = this;
              cancel_0(this.w39_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.rh_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.rh_1;
                var tmp_5 = this;
                cancel(this.w39_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.rh_1;
              }
            }

            break;
          case 4:
            this.ph_1 = 5;
            var t = this.rh_1;
            complete(this.w39_1);
            ;
            throw t;
          case 5:
            throw this.rh_1;
          case 6:
            complete(this.w39_1);
            ;
            return Unit_getInstance();
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
  defaultTransformers$slambda$slambda.prototype.o33 = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.v39_1, this.w39_1, completion);
    i.x39_1 = $this$writer;
    return i;
  };
  defaultTransformers$slambda$slambda.$metadata$ = classMeta('defaultTransformers$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.n33($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.hp();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.v2y = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.w2y($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  defaultTransformers$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v2y(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 11;
            this.j3a_1 = this.i3a_1.h3();
            this.k3a_1 = this.i3a_1.i3();
            var tmp_0 = this.k3a_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.l3a_1 = this.h3a_1.s1n_1.i2y();
            this.m3a_1 = this.j3a_1.j1o_1;
            if (this.m3a_1.equals(getKClass(Unit))) {
              cancel_1(this.k3a_1);
              this.oh_1 = 9;
              suspendResult = this.h3a_1.w1m(new HttpResponseContainer(this.j3a_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.m3a_1.equals(PrimitiveClasses_getInstance().gf())) {
                this.oh_1 = 7;
                suspendResult = this.k3a_1.y19(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.m3a_1.equals(getKClass(ByteReadPacket)) ? true : this.m3a_1.equals(getKClass(Input))) {
                  this.oh_1 = 5;
                  suspendResult = this.k3a_1.y19(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.m3a_1.equals(PrimitiveClasses_getInstance().of())) {
                    this.oh_1 = 3;
                    suspendResult = toByteArray(this.k3a_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.m3a_1.equals(getKClass(ByteReadChannel))) {
                      this.n3a_1 = Job(this.l3a_1.nj().y3(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this;
                      var tmp_3 = this.l3a_1.nj();
                      tmp_2.o3a_1 = writer$default(this.h3a_1, tmp_3, false, defaultTransformers$slambda$slambda_0(this.k3a_1, this.l3a_1, null), 2, null);
                      this.o3a_1.ok(defaultTransformers$slambda$lambda(this.n3a_1));
                      tmp_1.p3a_1 = this.o3a_1.nv();
                      this.oh_1 = 2;
                      suspendResult = this.h3a_1.w1m(new HttpResponseContainer(this.j3a_1, this.p3a_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.m3a_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.k3a_1);
                        this.oh_1 = 1;
                        suspendResult = this.h3a_1.w1m(new HttpResponseContainer(this.j3a_1, this.l3a_1.u31()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.oh_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            ;
            this.oh_1 = 10;
            continue $sm;
          case 2:
            ;
            this.oh_1 = 10;
            continue $sm;
          case 3:
            this.q3a_1 = suspendResult;
            this.r3a_1 = contentLength(this.l3a_1);
            this.s3a_1 = this.l3a_1.e1v().a1k(HttpHeaders_getInstance().m1r_1);
            if ((this.s3a_1 == null ? !(this.r3a_1 == null) : false) ? this.r3a_1.b1(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.q3a_1.length === this.r3a_1.o6();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.r3a_1) + ', actual ' + this.q3a_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.oh_1 = 4;
            suspendResult = this.h3a_1.w1m(new HttpResponseContainer(this.j3a_1, this.q3a_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            this.oh_1 = 10;
            continue $sm;
          case 5:
            this.t3a_1 = suspendResult;
            this.u3a_1 = new HttpResponseContainer(this.j3a_1, this.t3a_1);
            this.oh_1 = 6;
            suspendResult = this.h3a_1.w1m(this.u3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            ;
            this.oh_1 = 10;
            continue $sm;
          case 7:
            this.v3a_1 = suspendResult;
            var tmp_4 = this;
            tmp_4.w3a_1 = this.v3a_1.u1e(0, 0, 3, null);
            this.x3a_1 = toInt(this.w3a_1);
            this.y3a_1 = new HttpResponseContainer(this.j3a_1, this.x3a_1);
            this.oh_1 = 8;
            suspendResult = this.h3a_1.w1m(this.y3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            this.oh_1 = 10;
            continue $sm;
          case 9:
            ;
            this.oh_1 = 10;
            continue $sm;
          case 10:
            return Unit_getInstance();
          case 11:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 11) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.w2y = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.h3a_1 = $this$intercept;
    i.i3a_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  defaultTransformers$slambda_1.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.v2y($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.b3b_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.k3b_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.b2y = function ($this$intercept, it, $cont) {
    var tmp = this.c2y($this$intercept, it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpCallValidator$Companion$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.ph_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.l3b_1.s1n_1.m2z_1.l1j(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.k3b_1));
            ;
            this.oh_1 = 1;
            suspendResult = this.l3b_1.w1m(this.m3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ph_1 = 5;
            this.oh_1 = 2;
            continue $sm;
          case 2:
            this.ph_1 = 5;
            return Unit_getInstance();
          case 3:
            this.ph_1 = 5;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof Error) {
              this.n3b_1 = this.rh_1;
              this.o3b_1 = unwrapCancellationException(this.n3b_1);
              this.oh_1 = 4;
              suspendResult = processException(this.k3b_1, this.o3b_1, HttpRequest(this.l3b_1.s1n_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.rh_1;
            }

            break;
          case 4:
            throw this.o3b_1;
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
  HttpCallValidator$Companion$install$slambda.prototype.c2y = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.k3b_1, completion);
    i.l3b_1 = $this$intercept;
    i.m3b_1 = it;
    return i;
  };
  HttpCallValidator$Companion$install$slambda.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.b2y($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.x3b_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.v2y = function ($this$intercept, container, $cont) {
    var tmp = this.w2y($this$intercept, container, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v2y(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 5;
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = this.y3b_1.w1m(this.z3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ph_1 = 5;
            this.oh_1 = 2;
            continue $sm;
          case 2:
            this.ph_1 = 5;
            return Unit_getInstance();
          case 3:
            this.ph_1 = 5;
            var tmp_0 = this.rh_1;
            if (tmp_0 instanceof Error) {
              this.a3c_1 = this.rh_1;
              this.b3c_1 = unwrapCancellationException(this.a3c_1);
              this.oh_1 = 4;
              suspendResult = processException(this.x3b_1, this.b3c_1, this.y3b_1.s1n_1.r31(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.rh_1;
            }

            break;
          case 4:
            throw this.b3c_1;
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
  HttpCallValidator$Companion$install$slambda_1.prototype.w2y = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.x3b_1, completion);
    i.y3b_1 = $this$intercept;
    i.z3b_1 = container;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_1.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.v2y($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.k3c_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.o3c = function ($this$intercept, request, $cont) {
    var tmp = this.p3c($this$intercept, request, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.l7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.o3c(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = this.l3c_1.k30(this.m3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n3c_1 = suspendResult;
            this.oh_1 = 2;
            suspendResult = validateResponse(this.k3c_1, this.n3c_1.i2y(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.n3c_1;
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
  HttpCallValidator$Companion$install$slambda_3.prototype.p3c = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.k3c_1, completion);
    i.l3c_1 = $this$intercept;
    i.m3c_1 = request;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_3.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.o3c($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.p38_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.q38_1 = tmp$ret$1;
    this.r38_1 = true;
  }
  Config.prototype.s38 = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.p38_1;
    tmp0_plusAssign.b(block);
  };
  Config.$metadata$ = classMeta('Config');
  function Companion_1() {
    Companion_instance_1 = this;
    this.s3d_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.s = function () {
    return this.s3d_1;
  };
  Companion_1.prototype.t3d = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.p38_1), reversed(config.q38_1), config.r38_1);
  };
  Companion_1.prototype.m30 = function (block) {
    return this.t3d(block);
  };
  Companion_1.prototype.u3d = function (plugin_0, scope) {
    var tmp = Phases_getInstance().f36_1;
    scope.h2x_1.w1n(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.i2x_1.v1n(Phases_getInstance_1().f30_1, BeforeReceive);
    scope.i2x_1.w1n(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.x3d(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.n30 = function (plugin, scope) {
    return this.u3d(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  Companion_1.$metadata$ = objectMeta('Companion', [HttpClientPlugin]);
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3c_1 = _this__u8e3s4;
    this.z3c_1 = response;
  }
  $validateResponseCOROUTINE$5.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 4;
            var tmp_0 = this;
            tmp_0.a3d_1 = this.y3c_1.z3a_1;
            this.b3d_1 = this.a3d_1.d();
            this.oh_1 = 1;
            continue $sm;
          case 1:
            if (!this.b3d_1.e()) {
              this.oh_1 = 3;
              continue $sm;
            }

            this.c3d_1 = this.b3d_1.f();
            this.oh_1 = 2;
            suspendResult = this.c3d_1(this.z3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.oh_1 = 1;
            continue $sm;
          case 3:
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
  $validateResponseCOROUTINE$5.$metadata$ = classMeta('$validateResponseCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3d_1 = _this__u8e3s4;
    this.m3d_1 = cause;
    this.n3d_1 = request;
  }
  $processExceptionCOROUTINE$6.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 6;
            var tmp_0 = this;
            tmp_0.o3d_1 = this.l3d_1.a3b_1;
            this.p3d_1 = this.o3d_1.d();
            this.oh_1 = 1;
            continue $sm;
          case 1:
            if (!this.p3d_1.e()) {
              this.oh_1 = 5;
              continue $sm;
            }

            this.q3d_1 = this.p3d_1.f();
            this.r3d_1 = this.q3d_1;
            var tmp_1 = this.r3d_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.oh_1 = 3;
              suspendResult = this.q3d_1.z3d_1(this.m3d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.r3d_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.oh_1 = 2;
                suspendResult = this.q3d_1.y3d_1(this.m3d_1, this.n3d_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.oh_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.oh_1 = 4;
            continue $sm;
          case 3:
            this.oh_1 = 4;
            continue $sm;
          case 4:
            this.oh_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 6) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $processExceptionCOROUTINE$6.$metadata$ = classMeta('$processExceptionCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.z3a_1 = responseValidators;
    this.a3b_1 = callExceptionHandlers;
    this.b3b_1 = expectSuccess;
  }
  HttpCallValidator.$metadata$ = classMeta('HttpCallValidator');
  function HandlerWrapper() {
  }
  HandlerWrapper.$metadata$ = interfaceMeta('HandlerWrapper');
  function ExceptionHandlerWrapper() {
  }
  ExceptionHandlerWrapper.$metadata$ = classMeta('ExceptionHandlerWrapper', [HandlerWrapper]);
  function RequestExceptionHandlerWrapper() {
  }
  RequestExceptionHandlerWrapper.$metadata$ = classMeta('RequestExceptionHandlerWrapper', [HandlerWrapper]);
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.o30(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.e3e_1 = $builder;
    this.a3e_1 = $builder.i2z_1;
    this.b3e_1 = $builder.h2z_1.u17();
    this.c3e_1 = $builder.m2z_1;
    this.d3e_1 = $builder.j2z_1.u17();
  }
  HttpRequest$1.prototype.p32 = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.q32 = function () {
    return this.a3e_1;
  };
  HttpRequest$1.prototype.t31 = function () {
    return this.b3e_1;
  };
  HttpRequest$1.prototype.w30 = function () {
    return this.c3e_1;
  };
  HttpRequest$1.prototype.e1v = function () {
    return this.d3e_1;
  };
  HttpRequest$1.$metadata$ = classMeta(undefined, [HttpRequest_0]);
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.s() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  HttpClientPlugin.$metadata$ = interfaceMeta('HttpClientPlugin');
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.l2x_1.h1j(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1j(plugin.s());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.n3e_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.b2y = function ($this$intercept, content, $cont) {
    var tmp = this.c2y($this$intercept, content, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpPlainText$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.n3e_1.u3e(this.o3e_1.s1n_1);
            var tmp_0 = this.p3e_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.q3e_1 = contentType(this.o3e_1.s1n_1);
            if (!(this.q3e_1 == null) ? !(this.q3e_1.n1q_1 === Text_getInstance().d1q_1.n1q_1) : false) {
              return Unit_getInstance();
            }

            this.oh_1 = 1;
            suspendResult = this.o3e_1.w1m(wrapContent(this.n3e_1, this.p3e_1, this.q3e_1), this);
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
  HttpPlainText$Plugin$install$slambda.prototype.c2y = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.n3e_1, completion);
    i.o3e_1 = $this$intercept;
    i.p3e_1 = content;
    return i;
  };
  HttpPlainText$Plugin$install$slambda.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.b2y($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.d3f_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.v2y = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.w2y($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v2y(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.g3f_1 = this.f3f_1.h3();
            this.h3f_1 = this.f3f_1.i3();
            var tmp_0;
            if (!this.g3f_1.j1o_1.equals(PrimitiveClasses_getInstance().kf())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.h3f_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.oh_1 = 1;
            suspendResult = this.h3f_1.y19(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i3f_1 = suspendResult;
            this.j3f_1 = this.d3f_1.k3f(this.e3f_1.s1n_1, this.i3f_1);
            this.oh_1 = 2;
            suspendResult = this.e3f_1.w1m(new HttpResponseContainer(this.g3f_1, this.j3f_1), this);
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
  HttpPlainText$Plugin$install$slambda_1.prototype.w2y = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.d3f_1, completion);
    i.e3f_1 = $this$intercept;
    i.f3f_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  HttpPlainText$Plugin$install$slambda_1.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.v2y($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.l3f_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.m3f_1 = tmp$ret$1;
    this.n3f_1 = null;
    this.o3f_1 = Charsets_getInstance().d1f_1;
  }
  Config_0.$metadata$ = classMeta('Config');
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.p3f_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.s = function () {
    return this.p3f_1;
  };
  Plugin_0.prototype.t3d = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.l3f_1, config.m3f_1, config.n3f_1, config.o3f_1);
  };
  Plugin_0.prototype.m30 = function (block) {
    return this.t3d(block);
  };
  Plugin_0.prototype.q3f = function (plugin, scope) {
    var tmp = Phases_getInstance().i36_1;
    scope.h2x_1.w1n(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().h30_1;
    scope.i2x_1.w1n(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.n30 = function (plugin, scope) {
    return this.q3f(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  Plugin_0.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().d1q_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.s3e_1 : tmp2_elvis_lhs;
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.r3f_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.p = function (a, b) {
    return this.r3f_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.p(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function HttpPlainText$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = b.g3_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.g3_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText$lambda_0(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = get_name(a);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = get_name(b);
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.r3e_1 = responseCharsetFallback;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = toList(charsetQuality);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      tmp$ret$2 = !charsetQuality.c2(element);
      if (tmp$ret$2) {
        tmp0_filterTo.b(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_sortedBy = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$12;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$7) {
        tmp0_apply.x6(',');
      }
      tmp0_apply.x6(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.d();
    while (tmp0_iterator_1.e()) {
      var element_1 = tmp0_iterator_1.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.h3();
      var quality = element_1.i3();
      var tmp$ret$8;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$8) {
        tmp0_apply.x6(',');
      }
      // Inline function 'kotlin.check' call
      var containsArg = quality;
      var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$9;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$9 = 'Check failed.';
        var message = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp$ret$10;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = 100 * quality;
      tmp$ret$10 = roundToInt(tmp1_roundToInt);
      var truncatedQuality = tmp$ret$10 / 100.0;
      tmp0_apply.x6(get_name(charset) + ';q=' + truncatedQuality);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
    if (tmp$ret$11) {
      tmp0_apply.x6(get_name(this.r3e_1));
    }
    tmp$ret$12 = tmp0_apply;
    tmp$ret$13 = tmp$ret$12.toString();
    tmp_1.t3e_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f3_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.s3e_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().d1f_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.k3f = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.i2y());
    var actualCharset = tmp0_elvis_lhs == null ? this.r3e_1 : tmp0_elvis_lhs;
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.u3e = function (context) {
    if (!(context.j2z_1.a1k(HttpHeaders_getInstance().a1r_1) == null))
      return Unit_getInstance();
    context.j2z_1.d1l(HttpHeaders_getInstance().a1r_1, this.t3e_1);
  };
  HttpPlainText.$metadata$ = classMeta('HttpPlainText');
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.u3g_1 = $plugin;
    this.v3g_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.o3c = function ($this$intercept, context, $cont) {
    var tmp = this.p3c($this$intercept, context, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpRedirect$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.o3c(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            this.oh_1 = 1;
            suspendResult = this.w3g_1.k30(this.x3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y3g_1 = suspendResult;
            if (this.u3g_1.z3g_1 ? !get_ALLOWED_FOR_REDIRECT().l1(this.y3g_1.r31().q32()) : false) {
              return this.y3g_1;
            }

            this.oh_1 = 2;
            suspendResult = handleCall(this.w3g_1, Plugin_getInstance_1(), this.x3g_1, this.y3g_1, this.u3g_1.a3h_1, this.v3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  HttpRedirect$Plugin$install$slambda.prototype.p3c = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.u3g_1, this.v3g_1, completion);
    i.w3g_1 = $this$intercept;
    i.x3g_1 = context;
    return i;
  };
  HttpRedirect$Plugin$install$slambda.$metadata$ = classMeta('HttpRedirect$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.o3c($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3g_1 = _this__u8e3s4;
    this.b3g_1 = _this__u8e3s4_0;
    this.c3g_1 = context;
    this.d3g_1 = origin;
    this.e3g_1 = allowHttpsDowngrade;
    this.f3g_1 = client;
  }
  $handleCallCOROUTINE$7.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            if (!isRedirect(this.d3g_1.i2y().u31()))
              return this.d3g_1;
            this.g3g_1 = this.d3g_1;
            this.h3g_1 = this.c3g_1;
            this.i3g_1 = this.d3g_1.r31().t31().w1y_1;
            this.j3g_1 = get_authority(this.d3g_1.r31().t31());
            this.oh_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.oh_1 = 4;
              continue $sm;
            }

            this.f3g_1.n2x_1.a2x(this.a3g_1.c3h_1, this.g3g_1.i2y());
            this.k3g_1 = this.g3g_1.i2y().e1v().a1k(HttpHeaders_getInstance().n1s_1);
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.l3g_1 = new HttpRequestBuilder();
            this.l3g_1.h35(this.h3g_1);
            ;
            this.l3g_1.h2z_1.t1y_1.ka();
            var tmp0_safe_receiver = this.k3g_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(this.l3g_1.h2z_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.e3g_1 ? isSecure(this.i3g_1) : false) ? !isSecure(this.l3g_1.h2z_1.k1y_1) : false) {
              return this.g3g_1;
            }

            if (!(this.j3g_1 === get_authority_0(this.l3g_1.h2z_1))) {
              this.l3g_1.j2z_1.h1l(HttpHeaders_getInstance().i1r_1);
            }

            tmp_0.h3g_1 = this.l3g_1;
            this.oh_1 = 2;
            suspendResult = this.b3g_1.k30(this.h3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g3g_1 = suspendResult;
            if (!isRedirect(this.g3g_1.i2y().u31()))
              return this.g3g_1;
            this.oh_1 = 1;
            continue $sm;
          case 3:
            throw this.rh_1;
          case 4:
            return Unit_getInstance();
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
  $handleCallCOROUTINE$7.$metadata$ = classMeta('$handleCallCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_1() {
    this.d3h_1 = true;
    this.e3h_1 = false;
  }
  Config_1.$metadata$ = classMeta('Config');
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.b3h_1 = new AttributeKey('HttpRedirect');
    this.c3h_1 = new EventDefinition();
  }
  Plugin_1.prototype.s = function () {
    return this.b3h_1;
  };
  Plugin_1.prototype.t3d = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpRedirect(config.d3h_1, config.e3h_1);
  };
  Plugin_1.prototype.m30 = function (block) {
    return this.t3d(block);
  };
  Plugin_1.prototype.f3h = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.x3d(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.n30 = function (plugin, scope) {
    return this.f3h(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  Plugin_1.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.z3g_1 = checkHttpMethod;
    this.a3h_1 = allowHttpsDowngrade;
  }
  HttpRedirect.$metadata$ = classMeta('HttpRedirect');
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.y1x_1;
    return ((((tmp0_subject === Companion_getInstance_1().i1w_1.y1x_1 ? true : tmp0_subject === Companion_getInstance_1().j1w_1.y1x_1) ? true : tmp0_subject === Companion_getInstance_1().o1w_1.y1x_1) ? true : tmp0_subject === Companion_getInstance_1().p1w_1.y1x_1) ? true : tmp0_subject === Companion_getInstance_1().k1w_1.y1x_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().f1v_1, Companion_getInstance_2().k1v_1]);
    }
  }
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.o3h_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.b2y = function ($this$intercept, it, $cont) {
    var tmp = this.c2y($this$intercept, it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 6;
            this.r3h_1 = Job(this.p3h_1.s1n_1.l2z_1);
            attachToClientEngineJob(this.r3h_1, ensureNotNull(this.o3h_1.g2x_1.y3(Key_getInstance())));
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.ph_1 = 4;
            this.ph_1 = 3;
            this.p3h_1.s1n_1.l2z_1 = this.r3h_1;
            this.oh_1 = 2;
            suspendResult = this.p3h_1.x1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.s3h_1 = Unit_getInstance();
            this.ph_1 = 6;
            this.oh_1 = 5;
            continue $sm;
          case 3:
            this.ph_1 = 4;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.rh_1;
              var tmp_2 = this;
              this.r3h_1.uo(cause);
              throw cause;
            } else {
              throw this.rh_1;
            }

            break;
          case 4:
            this.ph_1 = 6;
            var t = this.rh_1;
            this.r3h_1.hp();
            ;
            throw t;
          case 5:
            this.r3h_1.hp();
            ;
            return Unit_getInstance();
          case 6:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 6) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.c2y = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.o3h_1, completion);
    i.p3h_1 = $this$intercept;
    i.q3h_1 = it;
    return i;
  };
  HttpRequestLifecycle$Plugin$install$slambda.$metadata$ = classMeta('HttpRequestLifecycle$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.b2y($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.t3h_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.s = function () {
    return this.t3h_1;
  };
  Plugin_2.prototype.o36 = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.m30 = function (block) {
    return this.o36(block);
  };
  Plugin_2.prototype.u3h = function (plugin, scope) {
    var tmp = Phases_getInstance().f36_1;
    scope.h2x_1.w1n(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.n30 = function (plugin, scope) {
    return this.u3h(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  Plugin_2.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  HttpRequestLifecycle.$metadata$ = classMeta('HttpRequestLifecycle');
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.ok(attachToClientEngineJob$lambda(requestJob));
    requestJob.ok(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        $requestJob.hp();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.sm();
      return Unit_getInstance();
    };
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.d3i_1 = $plugin;
    this.e3i_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.b2y = function ($this$intercept, content, $cont) {
    var tmp = this.c2y($this$intercept, content, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpSend$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 3;
            var tmp_0 = this.g3i_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.g3i_1) + ', with Content-Type: ' + contentType(this.f3i_1.s1n_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp_2 = this;
            tmp_2.h3i_1 = this.f3i_1.s1n_1;
            var tmp_3 = this;
            tmp_3.i3i_1 = this.g3i_1;
            var tmp0_subject = this.i3i_1;
            if (tmp0_subject == null) {
              this.h3i_1.k2z_1 = NullBody_getInstance();
              var tmp_4 = JsType_getInstance();
              var tmp_5 = getKClass(OutgoingContent);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_7;
                if ($p instanceof Error) {
                  tmp_7 = null;
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              this.h3i_1.i35(typeInfoImpl(tmp_4, tmp_5, tmp_6));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.h3i_1.k2z_1 = this.i3i_1;
                this.h3i_1.i35(null);
              } else {
                this.h3i_1.k2z_1 = this.i3i_1;
                var tmp_8 = JsType_getInstance();
                var tmp_9 = getKClass(OutgoingContent);
                var tmp_10;
                try {
                  tmp_10 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_11;
                  if ($p instanceof Error) {
                    tmp_11 = null;
                  } else {
                    throw $p;
                  }
                  tmp_10 = tmp_11;
                }
                this.h3i_1.i35(typeInfoImpl(tmp_8, tmp_9, tmp_10));
              }
            }

            this.j3i_1 = new DefaultSender(this.d3i_1.v3d_1, this.e3i_1);
            this.k3i_1 = this.j3i_1;
            var tmp_12 = this;
            tmp_12.l3i_1 = downTo(get_lastIndex(this.d3i_1.w3d_1), 0);
            var progression = this.l3i_1;
            var inductionVariable = progression.c1_1;
            var last = progression.d1_1;
            var step = progression.e1_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.d3i_1.w3d_1.h(element);
                this.k3i_1 = new InterceptedSender(interceptor, this.k3i_1);
              }
               while (!(element === last));
            this.oh_1 = 1;
            suspendResult = this.k3i_1.k30(this.f3i_1.s1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m3i_1 = suspendResult;
            this.oh_1 = 2;
            suspendResult = this.f3i_1.w1m(this.m3i_1, this);
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
  HttpSend$Plugin$install$slambda.prototype.c2y = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.d3i_1, this.e3i_1, completion);
    i.f3i_1 = $this$intercept;
    i.g3i_1 = content;
    return i;
  };
  HttpSend$Plugin$install$slambda.$metadata$ = classMeta('HttpSend$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.b2y($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3i_1 = _this__u8e3s4;
    this.w3i_1 = requestBuilder;
  }
  $executeCOROUTINE$8.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp0_safe_receiver = this.v3i_1.a3j_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.v3i_1.z3i_1 >= this.v3i_1.x3i_1) {
              throw new SendCountExceedException('Max send count ' + this.v3i_1.x3i_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.v3i_1;
            var tmp2 = tmp1_this.z3i_1;
            tmp1_this.z3i_1 = tmp2 + 1 | 0;
            ;
            this.oh_1 = 1;
            suspendResult = this.v3i_1.y3i_1.j2x_1.r1n(this.w3i_1, this.w3i_1.k2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.v3i_1.a3j_1 = call;
            return call;
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
  $executeCOROUTINE$8.$metadata$ = classMeta('$executeCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_2() {
    this.b3j_1 = 20;
  }
  Config_2.$metadata$ = classMeta('Config');
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.c3j_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.s = function () {
    return this.c3j_1;
  };
  Plugin_3.prototype.t3d = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpSend(config.b3j_1);
  };
  Plugin_3.prototype.m30 = function (block) {
    return this.t3d(block);
  };
  Plugin_3.prototype.d3j = function (plugin, scope) {
    var tmp = Phases_getInstance().j36_1;
    scope.h2x_1.w1n(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.n30 = function (plugin, scope) {
    return this.d3j(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  Plugin_3.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.e3j_1 = interceptor;
    this.f3j_1 = nextSender;
  }
  InterceptedSender.prototype.k30 = function (requestBuilder, $cont) {
    return this.e3j_1(this.f3j_1, requestBuilder, $cont);
  };
  InterceptedSender.$metadata$ = classMeta('InterceptedSender', [Sender]);
  function DefaultSender(maxSendCount, client) {
    this.x3i_1 = maxSendCount;
    this.y3i_1 = client;
    this.z3i_1 = 0;
    this.a3j_1 = null;
  }
  DefaultSender.prototype.k30 = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  DefaultSender.$metadata$ = classMeta('DefaultSender', [Sender]);
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.v3d_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.w3d_1 = tmp$ret$0;
  }
  HttpSend.prototype.x3d = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.w3d_1;
    tmp0_plusAssign.b(block);
  };
  HttpSend.$metadata$ = classMeta('HttpSend');
  function Sender() {
  }
  Sender.$metadata$ = interfaceMeta('Sender');
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  SendCountExceedException.$metadata$ = classMeta('SendCountExceedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.j3j(requestTimeoutMillis);
    $this.k3j(connectTimeoutMillis);
    $this.l3j(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value == null ? true : value.b1(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.m3j_1 = new AttributeKey('TimeoutConfiguration');
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation) {
    this.v3j_1 = $requestTimeout;
    this.w3j_1 = $context;
    this.x3j_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = delay(this.v3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.w3j_1);
            cancel_2(this.x3j_1, ensureNotNull(cause.message), cause);
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.v3j_1, this.w3j_1, this.x3j_1, completion);
    i.y3j_1 = $this$launch;
    return i;
  };
  HttpTimeout$Plugin$install$slambda$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $context, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.uk(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.h3k_1 = $plugin;
    this.i3k_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.b2y = function ($this$intercept, it, $cont) {
    var tmp = this.c2y($this$intercept, it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpTimeout$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2y(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        if (tmp === 0) {
          this.ph_1 = 1;
          var isWebSocket = isWebsocket(this.j3k_1.s1n_1.h2z_1.k1y_1);
          var tmp_0;
          if (isWebSocket) {
            tmp_0 = true;
          } else {
            var tmp_1 = this.j3k_1.s1n_1.k2z_1;
            tmp_0 = tmp_1 instanceof ClientUpgradeContent;
          }
          if (tmp_0)
            return Unit_getInstance();
          var configuration = this.j3k_1.s1n_1.l3k(Plugin_getInstance_4());
          if (configuration == null ? hasNotNullTimeouts(this.h3k_1) : false) {
            configuration = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
            this.j3k_1.s1n_1.m3k(Plugin_getInstance_4(), configuration);
          }
          var tmp0_safe_receiver = configuration;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$0;
            l$ret$1: do {
              var context = this.j3k_1.s1n_1;
              var tmp0_elvis_lhs = tmp0_safe_receiver.n3k();
              tmp0_safe_receiver.k3j(tmp0_elvis_lhs == null ? this.h3k_1.p3k_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.r3k();
              tmp0_safe_receiver.l3j(tmp1_elvis_lhs == null ? this.h3k_1.q3k_1 : tmp1_elvis_lhs);
              var tmp2_elvis_lhs = tmp0_safe_receiver.s3k();
              tmp0_safe_receiver.j3j(tmp2_elvis_lhs == null ? this.h3k_1.o3k_1 : tmp2_elvis_lhs);
              var tmp3_elvis_lhs = tmp0_safe_receiver.s3k();
              var requestTimeout = tmp3_elvis_lhs == null ? this.h3k_1.o3k_1 : tmp3_elvis_lhs;
              var tmp_2;
              if (requestTimeout == null) {
                tmp_2 = true;
              } else {
                Plugin_getInstance_4();
                tmp_2 = equals(requestTimeout, new Long(-1, 2147483647));
              }
              if (tmp_2) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var executionContext = context.l2z_1;
              var killer = launch$default(this.i3k_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, context, executionContext, null), 3, null);
              var tmp_3 = context.l2z_1;
              tmp_3.ok(HttpTimeout$Plugin$install$slambda$lambda(killer));
            }
             while (false);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.rh_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda.prototype.c2y = function ($this$intercept, it, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.h3k_1, this.i3k_1, completion);
    i.j3k_1 = $this$intercept;
    i.k3k_1 = it;
    return i;
  };
  HttpTimeout$Plugin$install$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.b2y($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.j3j = function (value) {
    this.g3j_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.s3k = function () {
    return this.g3j_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.k3j = function (value) {
    this.h3j_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.n3k = function () {
    return this.h3j_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.l3j = function (value) {
    this.i3j_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.r3k = function () {
    return this.i3j_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.u17 = function () {
    return new HttpTimeout(this.s3k(), this.n3k(), this.r3k());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this.g3j_1, other.g3j_1))
      return false;
    if (!equals(this.h3j_1, other.h3j_1))
      return false;
    if (!equals(this.i3j_1, other.i3j_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.g3j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.h3j_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.i3j_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.g3j_1 = new Long(0, 0);
    this.h3j_1 = new Long(0, 0);
    this.i3j_1 = new Long(0, 0);
  }
  HttpTimeoutCapabilityConfiguration.$metadata$ = classMeta('HttpTimeoutCapabilityConfiguration');
  function hasNotNullTimeouts($this) {
    return (!($this.o3k_1 == null) ? true : !($this.p3k_1 == null)) ? true : !($this.q3k_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.t3k_1 = new AttributeKey('TimeoutPlugin');
    this.u3k_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.s = function () {
    return this.t3k_1;
  };
  Plugin_4.prototype.v3k = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.u17();
  };
  Plugin_4.prototype.m30 = function (block) {
    return this.v3k(block);
  };
  Plugin_4.prototype.w3k = function (plugin, scope) {
    var tmp = Phases_getInstance().f36_1;
    scope.h2x_1.w1n(tmp, HttpTimeout$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_4.prototype.n30 = function (plugin, scope) {
    return this.w3k(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  Plugin_4.$metadata$ = objectMeta('Plugin', [HttpClientPlugin, HttpClientEngineCapability]);
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.o3k_1 = requestTimeoutMillis;
    this.p3k_1 = connectTimeoutMillis;
    this.q3k_1 = socketTimeoutMillis;
  }
  HttpTimeout.$metadata$ = classMeta('HttpTimeout');
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.h2z_1.z1z();
    var tmp0_safe_receiver = request.l3k(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s3k());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  HttpRequestTimeoutException.$metadata$ = classMeta('HttpRequestTimeoutException', undefined, undefined, undefined, undefined, IOException.prototype);
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.p32(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.x3k_1 = call;
    this.y3k_1 = content;
    this.z3k_1 = origin;
    this.a3l_1 = this.z3k_1.nj();
  }
  DelegatedResponse.prototype.p32 = function () {
    return this.x3k_1;
  };
  DelegatedResponse.prototype.t1q = function () {
    return this.y3k_1;
  };
  DelegatedResponse.prototype.nj = function () {
    return this.a3l_1;
  };
  DelegatedResponse.prototype.u31 = function () {
    return this.z3k_1.u31();
  };
  DelegatedResponse.prototype.a33 = function () {
    return this.z3k_1.a33();
  };
  DelegatedResponse.prototype.b33 = function () {
    return this.z3k_1.b33();
  };
  DelegatedResponse.prototype.c33 = function () {
    return this.z3k_1.c33();
  };
  DelegatedResponse.prototype.e1v = function () {
    return this.z3k_1.e1v();
  };
  DelegatedResponse.$metadata$ = classMeta('DelegatedResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  WebSocketCapability.$metadata$ = objectMeta('WebSocketCapability', [HttpClientEngineCapability]);
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  WebSocketException.$metadata$ = classMeta('WebSocketException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ClientUpgradeContent() {
  }
  ClientUpgradeContent.$metadata$ = classMeta('ClientUpgradeContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  function DefaultHttpRequest(call, data) {
    this.b3l_1 = call;
    this.c3l_1 = data.h34_1;
    this.d3l_1 = data.g34_1;
    this.e3l_1 = data.j34_1;
    this.f3l_1 = data.i34_1;
    this.g3l_1 = data.l34_1;
  }
  DefaultHttpRequest.prototype.p32 = function () {
    return this.b3l_1;
  };
  DefaultHttpRequest.prototype.nj = function () {
    return this.p32().nj();
  };
  DefaultHttpRequest.prototype.q32 = function () {
    return this.c3l_1;
  };
  DefaultHttpRequest.prototype.t31 = function () {
    return this.d3l_1;
  };
  DefaultHttpRequest.prototype.e1v = function () {
    return this.f3l_1;
  };
  DefaultHttpRequest.prototype.w30 = function () {
    return this.g3l_1;
  };
  DefaultHttpRequest.$metadata$ = classMeta('DefaultHttpRequest', [HttpRequest_0]);
  function HttpRequest_0() {
  }
  HttpRequest_0.$metadata$ = interfaceMeta('HttpRequest', [HttpMessage, CoroutineScope]);
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    return tmp$ret$0;
  }
  function HttpRequestBuilder() {
    Companion_getInstance_11();
    var tmp = this;
    tmp.h2z_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.i2z_1 = Companion_getInstance_2().f1v_1;
    var tmp_0 = this;
    tmp_0.j2z_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.k2z_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.l2z_1 = SupervisorJob$default(null, 1, null);
    this.m2z_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.e1v = function () {
    return this.j2z_1;
  };
  HttpRequestBuilder.prototype.i35 = function (value) {
    if (!(value == null)) {
      this.m2z_1.j1j(get_BodyTypeAttributeKey(), value);
    } else {
      this.m2z_1.k1j(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.h3l = function () {
    return this.m2z_1.h1j(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.u17 = function () {
    var tmp = this.h2z_1.u17();
    var tmp_0 = this.i2z_1;
    var tmp_1 = this.j2z_1.u17();
    var tmp_2 = this.k2z_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.k2z_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.l2z_1, this.m2z_1);
  };
  HttpRequestBuilder.prototype.h35 = function (builder) {
    this.l2z_1 = builder.l2z_1;
    return this.i3l(builder);
  };
  HttpRequestBuilder.prototype.i3l = function (builder) {
    this.i2z_1 = builder.i2z_1;
    this.k2z_1 = builder.k2z_1;
    this.i35(builder.h3l());
    takeFrom_0(this.h2z_1, builder.h2z_1);
    this.h2z_1.r1y_1 = this.h2z_1.r1y_1;
    appendAll(this.j2z_1, builder.j2z_1);
    putAll(this.m2z_1, builder.m2z_1);
    return this;
  };
  HttpRequestBuilder.prototype.m3k = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.m2z_1.l1j(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.a(key, capability);
  };
  HttpRequestBuilder.prototype.l3k = function (key) {
    var tmp0_safe_receiver = this.m2z_1.h1j(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  HttpRequestBuilder.$metadata$ = classMeta('HttpRequestBuilder', [HttpMessageBuilder]);
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.g34_1 = url;
    this.h34_1 = method;
    this.i34_1 = headers;
    this.j34_1 = body;
    this.k34_1 = executionContext;
    this.l34_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.l34_1.h1j(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    tmp.m34_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.g34_1 + ', method=' + this.h34_1 + ')';
  };
  HttpRequestData.$metadata$ = classMeta('HttpRequestData');
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.p30_1 = statusCode;
    this.q30_1 = requestTime;
    this.r30_1 = headers;
    this.s30_1 = version;
    this.t30_1 = body;
    this.u30_1 = callContext;
    var tmp = this;
    tmp.v30_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.p30_1 + ')';
  };
  HttpResponseData.$metadata$ = classMeta('HttpResponseData');
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.h2z_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.j34_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.f36_1 = new PipelinePhase('Before');
    this.g36_1 = new PipelinePhase('State');
    this.h36_1 = new PipelinePhase('Transform');
    this.i36_1 = new PipelinePhase('Render');
    this.j36_1 = new PipelinePhase('Send');
  }
  Phases.$metadata$ = objectMeta('Phases');
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().f36_1, Phases_getInstance().g36_1, Phases_getInstance().h36_1, Phases_getInstance().i36_1, Phases_getInstance().j36_1]);
    this.q3l_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.q1n = function () {
    return this.q3l_1;
  };
  HttpRequestPipeline.$metadata$ = classMeta('HttpRequestPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_0() {
    Phases_instance_0 = this;
    this.x2z_1 = new PipelinePhase('Before');
    this.y2z_1 = new PipelinePhase('State');
    this.z2z_1 = new PipelinePhase('Monitoring');
    this.a30_1 = new PipelinePhase('Engine');
    this.b30_1 = new PipelinePhase('Receive');
  }
  Phases_0.$metadata$ = objectMeta('Phases');
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().x2z_1, Phases_getInstance_0().y2z_1, Phases_getInstance_0().z2z_1, Phases_getInstance_0().a30_1, Phases_getInstance_0().b30_1]);
    this.y3l_1 = developmentMode;
  }
  HttpSendPipeline.prototype.q1n = function () {
    return this.y3l_1;
  };
  HttpSendPipeline.$metadata$ = classMeta('HttpSendPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function parameter(_this__u8e3s4, key, value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.h2z_1.t1y_1.f1l(key, toString(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.e1v().f1l(HttpHeaders_getInstance().z1q_1, contentType.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.z3l_1 = call;
    this.a3m_1 = responseData.u30_1;
    this.b3m_1 = responseData.p30_1;
    this.c3m_1 = responseData.s30_1;
    this.d3m_1 = responseData.q30_1;
    this.e3m_1 = responseData.v30_1;
    var tmp = this;
    var tmp_0 = responseData.t30_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.f3m_1 = tmp0_elvis_lhs == null ? Companion_getInstance().v1b() : tmp0_elvis_lhs;
    this.g3m_1 = responseData.r30_1;
  }
  DefaultHttpResponse.prototype.p32 = function () {
    return this.z3l_1;
  };
  DefaultHttpResponse.prototype.nj = function () {
    return this.a3m_1;
  };
  DefaultHttpResponse.prototype.u31 = function () {
    return this.b3m_1;
  };
  DefaultHttpResponse.prototype.a33 = function () {
    return this.c3m_1;
  };
  DefaultHttpResponse.prototype.b33 = function () {
    return this.d3m_1;
  };
  DefaultHttpResponse.prototype.c33 = function () {
    return this.e3m_1;
  };
  DefaultHttpResponse.prototype.t1q = function () {
    return this.f3m_1;
  };
  DefaultHttpResponse.prototype.e1v = function () {
    return this.g3m_1;
  };
  DefaultHttpResponse.$metadata$ = classMeta('DefaultHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).t31() + ', ' + this.u31() + ']';
  };
  HttpResponse.$metadata$ = classMeta('HttpResponse', [HttpMessage, CoroutineScope]);
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.p32().r31();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.nj().y3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.hp();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$18(_this__u8e3s4, fallbackCharset, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().d1f_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$18(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p3m_1 = _this__u8e3s4;
    this.q3m_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$18.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.p3m_1);
            tmp_0.r3m_1 = tmp0_elvis_lhs == null ? this.q3m_1 : tmp0_elvis_lhs;
            this.s3m_1 = this.r3m_1.h1f();
            this.oh_1 = 1;
            var tmp_1 = this.p3m_1.p32();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.s31(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.s3m_1, input, 0, 2, null);
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
  $bodyAsTextCOROUTINE$18.$metadata$ = classMeta('$bodyAsTextCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Phases_1() {
    Phases_instance_1 = this;
    this.f30_1 = new PipelinePhase('Receive');
    this.g30_1 = new PipelinePhase('Parse');
    this.h30_1 = new PipelinePhase('Transform');
    this.i30_1 = new PipelinePhase('State');
    this.j30_1 = new PipelinePhase('After');
  }
  Phases_1.$metadata$ = objectMeta('Phases');
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().f30_1, Phases_getInstance_1().g30_1, Phases_getInstance_1().h30_1, Phases_getInstance_1().i30_1, Phases_getInstance_1().j30_1]);
    this.a3n_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.q1n = function () {
    return this.a3n_1;
  };
  HttpResponsePipeline.$metadata$ = classMeta('HttpResponsePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_2() {
    Phases_instance_2 = this;
    this.k36_1 = new PipelinePhase('Before');
    this.l36_1 = new PipelinePhase('State');
    this.m36_1 = new PipelinePhase('After');
  }
  Phases_2.$metadata$ = objectMeta('Phases');
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().k36_1, Phases_getInstance_2().l36_1, Phases_getInstance_2().m36_1]);
    this.i3n_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.q1n = function () {
    return this.i3n_1;
  };
  HttpReceivePipeline.$metadata$ = classMeta('HttpReceivePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function HttpResponseContainer(expectedType, response) {
    this.p31_1 = expectedType;
    this.q31_1 = response;
  }
  HttpResponseContainer.prototype.h3 = function () {
    return this.p31_1;
  };
  HttpResponseContainer.prototype.i3 = function () {
    return this.q31_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.p31_1 + ', response=' + toString(this.q31_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.p31_1.hashCode();
    result = imul(result, 31) + hashCode(this.q31_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.p31_1.equals(tmp0_other_with_cast.p31_1))
      return false;
    if (!equals(this.q31_1, tmp0_other_with_cast.q31_1))
      return false;
    return true;
  };
  HttpResponseContainer.$metadata$ = classMeta('HttpResponseContainer');
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.j3n_1.m2z_1.h1j(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.b(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0_requireNotNull = pluginOrNull($this.k3n_1, element_0);
          // Inline function 'kotlin.contracts.contract' call
          if (tmp0_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            var message = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            tmp$ret$3 = tmp0_requireNotNull;
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.u3n = function (it, $cont) {
    var tmp = this.o38(it, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpStatement$execute$slambda.prototype.yh = function (p1, $cont) {
    return this.u3n(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = save(this.t3n_1.p32(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.i2y();
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
  HttpStatement$execute$slambda.prototype.o38 = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.t3n_1 = it;
    return i;
  };
  HttpStatement$execute$slambda.$metadata$ = classMeta('HttpStatement$execute$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.u3n(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$19(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d3o_1 = _this__u8e3s4;
    this.e3o_1 = block;
  }
  $executeCOROUTINE$19.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 13;
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.ph_1 = 12;
            this.oh_1 = 2;
            suspendResult = this.d3o_1.k3o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g3o_1 = suspendResult;
            this.oh_1 = 3;
            continue $sm;
          case 3:
            this.oh_1 = 4;
            continue $sm;
          case 4:
            this.ph_1 = 10;
            this.oh_1 = 5;
            suspendResult = this.e3o_1(this.g3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.h3o_1 = suspendResult;
            this.oh_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.i3o_1 = this.h3o_1;
            this.oh_1 = 7;
            suspendResult = this.d3o_1.l3o(this.g3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.i3o_1;
          case 8:
            this.oh_1 = 9;
            suspendResult = this.d3o_1.l3o(this.g3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.f3o_1 = Unit_getInstance();
            this.ph_1 = 13;
            this.oh_1 = 15;
            continue $sm;
          case 10:
            this.ph_1 = 12;
            this.j3o_1 = this.rh_1;
            this.oh_1 = 11;
            suspendResult = this.d3o_1.l3o(this.g3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.j3o_1;
          case 12:
            this.ph_1 = 13;
            var tmp_2 = this.rh_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.rh_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.rh_1;
            }

            break;
          case 13:
            throw this.rh_1;
          case 14:
            this.ph_1 = 13;
            if (false) {
              this.oh_1 = 1;
              continue $sm;
            }

            this.oh_1 = 15;
            continue $sm;
          case 15:
            return this.f3o_1;
        }
      } catch ($p) {
        if (this.ph_1 === 13) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$19.$metadata$ = classMeta('$executeCOROUTINE$19', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeUnsafeCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u3o_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$20.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 4;
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.ph_1 = 3;
            this.w3o_1 = (new HttpRequestBuilder()).h35(this.u3o_1.j3n_1);
            this.oh_1 = 2;
            suspendResult = this.u3o_1.k3n_1.k30(this.w3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.i2y();
          case 3:
            this.ph_1 = 4;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.rh_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.rh_1;
            }

            break;
          case 4:
            throw this.rh_1;
          case 5:
            this.ph_1 = 4;
            if (false) {
              this.oh_1 = 1;
              continue $sm;
            }

            this.oh_1 = 6;
            continue $sm;
          case 6:
            return this.v3o_1;
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
  $executeUnsafeCOROUTINE$20.$metadata$ = classMeta('$executeUnsafeCOROUTINE$20', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $cleanupCOROUTINE$21(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3p_1 = _this__u8e3s4;
    this.g3p_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$21.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.g3p_1.nj().y3(Key_getInstance()));
            tmp_0.h3p_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.h3p_1.hp();
            ;
            this.ph_1 = 1;
            cancel_1(this.g3p_1.t1q());
            ;
            this.ph_1 = 4;
            this.oh_1 = 2;
            continue $sm;
          case 1:
            this.ph_1 = 4;
            var tmp_2 = this.rh_1;
            if (tmp_2 instanceof Error) {
              this.i3p_1 = this.rh_1;
              this.oh_1 = 2;
              continue $sm;
            } else {
              throw this.rh_1;
            }

            break;
          case 2:
            this.ph_1 = 4;
            this.oh_1 = 3;
            suspendResult = this.h3p_1.ip(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
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
  $cleanupCOROUTINE$21.$metadata$ = classMeta('$cleanupCOROUTINE$21', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpStatement(builder, client) {
    this.j3n_1 = builder;
    this.k3n_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.j3p = function () {
    return this.k3n_1;
  };
  HttpStatement.prototype.k3p = function (block, $cont) {
    var tmp = new $executeCOROUTINE$19(this, block, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpStatement.prototype.l3p = function ($cont) {
    return this.k3p(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.k3o = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$20(this, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpStatement.prototype.l3o = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$21(this, _this__u8e3s4, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.j3n_1.h2z_1.z1z() + ']';
  };
  HttpStatement.$metadata$ = classMeta('HttpStatement');
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).nv();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.u3p_1 = $contentLength;
    this.v3p_1 = $this_observable;
    this.w3p_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.n33 = function ($this$writer, $cont) {
    var tmp = this.o33($this$writer, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  observable$slambda.prototype.yh = function (p1, $cont) {
    return this.n33((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 15;
            this.oh_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.z3p_1 = get_ByteArrayPool();
            this.a3q_1 = this.z3p_1.e1b();
            this.oh_1 = 2;
            continue $sm;
          case 2:
            this.oh_1 = 3;
            continue $sm;
          case 3:
            this.ph_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.u3p_1;
            tmp_1.c3q_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.d3q_1 = new Long(0, 0);
            this.oh_1 = 4;
            continue $sm;
          case 4:
            if (!!this.v3p_1.s14()) {
              this.oh_1 = 8;
              continue $sm;
            }

            this.oh_1 = 5;
            suspendResult = readAvailable(this.v3p_1, this.a3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.e3q_1 = suspendResult;
            this.oh_1 = 6;
            suspendResult = this.x3p_1.nv().w19(this.a3q_1, 0, this.e3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.f3q_1 = this.d3q_1;
            tmp_2.d3q_1 = this.f3q_1.a6(toLong(this.e3q_1));
            this.oh_1 = 7;
            suspendResult = this.w3p_1(this.d3q_1, this.c3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.oh_1 = 4;
            continue $sm;
          case 8:
            this.g3q_1 = this.v3p_1.a14();
            this.x3p_1.nv().uw(this.g3q_1);
            ;
            if (this.g3q_1 == null ? this.d3q_1.equals(new Long(0, 0)) : false) {
              this.oh_1 = 9;
              suspendResult = this.w3p_1(this.d3q_1, this.c3q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oh_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.oh_1 = 10;
            continue $sm;
          case 10:
            this.b3q_1 = Unit_getInstance();
            this.ph_1 = 15;
            this.oh_1 = 11;
            var tmp_4 = this;
            continue $sm;
          case 11:
            var tmp_5 = this;
            this.z3p_1.o1d(this.a3q_1);
            tmp_5.y3p_1 = Unit_getInstance();
            this.oh_1 = 13;
            continue $sm;
          case 12:
            this.z3p_1.o1d(this.a3q_1);
            ;
            if (false) {
              this.oh_1 = 1;
              continue $sm;
            }

            this.oh_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.ph_1 = 15;
            var t = this.rh_1;
            this.z3p_1.o1d(this.a3q_1);
            ;
            throw t;
          case 15:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 15) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.o33 = function ($this$writer, completion) {
    var i = new observable$slambda(this.u3p_1, this.v3p_1, this.w3p_1, completion);
    i.x3p_1 = $this$writer;
    return i;
  };
  observable$slambda.$metadata$ = classMeta('observable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.n33($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.h3q_1 = response;
    this.i3q_1 = cause;
  }
  HttpResponseReceiveFail.$metadata$ = classMeta('HttpResponseReceiveFail');
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.k3q_1 = new Long(0, 0);
  }
  EmptyContent.prototype.l20 = function () {
    return this.k3q_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  EmptyContent.$metadata$ = objectMeta('EmptyContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.u17();
  }
  function HttpClient_1(block) {
    return HttpClient_0(JsClient(), block);
  }
  function JsClient() {
    return Js_getInstance();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.l3q = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.l30 = function (block) {
    return this.l3q(block);
  };
  Js.$metadata$ = objectMeta('Js', [HttpClientEngineFactory]);
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().o1o_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.y1k(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$23($this, request, callContext, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  JsClientEngine$createWebSocket$headers_capturingHack$1.$metadata$ = classMeta();
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$22(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i3r_1 = _this__u8e3s4;
    this.j3r_1 = data;
  }
  $executeCOROUTINE$22.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 6;
            this.oh_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3r_1 = suspendResult;
            this.l3r_1 = this.j3r_1.l34_1.g1j(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.j3r_1)) {
              this.oh_1 = 5;
              suspendResult = executeWebSocketRequest(this.i3r_1, this.j3r_1, this.k3r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.m3r_1 = GMTDate$default(null, 1, null);
            this.oh_1 = 3;
            suspendResult = toRaw(this.j3r_1, this.l3r_1, this.k3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n3r_1 = suspendResult;
            this.oh_1 = 4;
            suspendResult = commonFetch(this.j3r_1.g34_1.toString(), this.n3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().p1v_1;
            var body = readBody(CoroutineScope_0(this.k3r_1), rawResponse);
            return new HttpResponseData(status, this.m3r_1, headers, version, body, this.k3r_1);
          case 5:
            return suspendResult;
          case 6:
            throw this.rh_1;
        }
      } catch ($p) {
        if (this.ph_1 === 6) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$22.$metadata$ = classMeta('$executeCOROUTINE$22', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeWebSocketRequestCOROUTINE$23(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u3q_1 = _this__u8e3s4;
    this.v3q_1 = request;
    this.w3q_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$23.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 4;
            var tmp_0 = this;
            tmp_0.x3q_1 = GMTDate$default(null, 1, null);
            this.y3q_1 = this.v3q_1.g34_1.toString();
            this.z3q_1 = createWebSocket(this.u3q_1, this.y3q_1, this.v3q_1.i34_1);
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = awaitConnection(this.z3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ph_1 = 4;
            this.oh_1 = 3;
            continue $sm;
          case 2:
            this.ph_1 = 4;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.rh_1;
              cancel_3(this.w3q_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.y3q_1, cause));
              throw cause;
            } else {
              throw this.rh_1;
            }

            break;
          case 3:
            this.ph_1 = 4;
            var session = new JsWebSocketSession(this.w3q_1, this.z3q_1);
            return new HttpResponseData(Companion_getInstance_1().z1v_1, this.x3q_1, Companion_getInstance_4().w1q_1, Companion_getInstance_3().p1v_1, session, this.w3q_1);
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
  $executeWebSocketRequestCOROUTINE$23.$metadata$ = classMeta('$executeWebSocketRequestCOROUTINE$23', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.r3r_1 = config;
    this.s3r_1 = Dispatchers_getInstance().up_1;
    this.t3r_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    var tmp0_check = this.r3r_1.d36_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      tmp$ret$0 = 'Proxy unsupported in Js engine.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  JsClientEngine.prototype.v2z = function () {
    return this.r3r_1;
  };
  JsClientEngine.prototype.x35 = function () {
    return this.s3r_1;
  };
  JsClientEngine.prototype.n34 = function () {
    return this.t3r_1;
  };
  JsClientEngine.prototype.v35 = function (data, $cont) {
    var tmp = new $executeCOROUTINE$22(this, data, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  JsClientEngine.$metadata$ = classMeta('JsClientEngine', undefined, undefined, undefined, undefined, HttpClientEngineBase.prototype);
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yn();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.hm()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.nm(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.ho();
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp0_apply.x6(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.u3r_1 = origin;
    captureStack(this, JsError);
  }
  JsError.$metadata$ = classMeta('JsError', undefined, undefined, undefined, undefined, Error.prototype);
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.f1l(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this_mapToKtor;
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.v3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = new WebSocketException(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_5();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.v3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$24(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  }
  function buildObject(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.r3s_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.n33 = function ($this$writer, $cont) {
    var tmp = this.o33($this$writer, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  toRaw$slambda.prototype.yh = function (p1, $cont) {
    return this.n33((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 2;
            this.oh_1 = 1;
            suspendResult = this.r3s_1.r20(this.s3s_1.nv(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  toRaw$slambda.prototype.o33 = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.r3s_1, completion);
    i.s3s_1 = $this$writer;
    return i;
  };
  toRaw$slambda.$metadata$ = classMeta('toRaw$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.n33($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.h34_1.n1v_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.r2z_1) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp0__get_FOLLOW__lsxog0 = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'follow';
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        // Inline function 'org.w3c.fetch.MANUAL' call
        var tmp1__get_MANUAL__wgvzkm = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp0_unsafeCast_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_unsafeCast_0;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        tmp$ret$6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$24(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d3s_1 = _this__u8e3s4;
    this.e3s_1 = clientConfig;
    this.f3s_1 = callContext;
  }
  $toRawCOROUTINE$24.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 4;
            this.g3s_1 = {};
            mergeHeaders(this.d3s_1.i34_1, this.d3s_1.j34_1, toRaw$lambda(this.g3s_1));
            this.h3s_1 = this.d3s_1.j34_1;
            var tmp_0 = this.h3s_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.i3s_1 = this.h3s_1.m20();
              this.oh_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.h3s_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.oh_1 = 2;
                var tmp_2 = this.h3s_1.p20();
                suspendResult = tmp_2.y19(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.h3s_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.oh_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.f3s_1, false, toRaw$slambda_0(this.h3s_1, null), 2, null).nv();
                  suspendResult = tmp_5.y19(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.i3s_1 = null;
                  this.oh_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.i3s_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.oh_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.i3s_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.oh_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.i3s_1;
            return buildObject(toRaw$lambda_0(this.d3s_1, this.g3s_1, this.e3s_1, bodyBytes));
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
  $toRawCOROUTINE$24.$metadata$ = classMeta('$toRawCOROUTINE$24', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().v1b();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).nv();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yn();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    tmp$ret$0 = cancellable.ho();
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.b3t_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.n33 = function ($this$writer, $cont) {
    var tmp = this.o33($this$writer, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  channelFromStream$slambda.prototype.yh = function (p1, $cont) {
    return this.n33((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 6;
            this.d3t_1 = this.b3t_1.getReader();
            this.oh_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.oh_1 = 8;
              continue $sm;
            }

            this.ph_1 = 5;
            this.oh_1 = 2;
            suspendResult = readChunk(this.d3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e3t_1 = suspendResult;
            if (this.e3t_1 == null) {
              this.ph_1 = 6;
              this.oh_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.f3t_1 = this.e3t_1;
              this.oh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.g3t_1 = this.f3t_1;
            this.oh_1 = 4;
            suspendResult = writeFully(this.c3t_1.nv(), asByteArray(this.g3t_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ph_1 = 6;
            this.oh_1 = 7;
            continue $sm;
          case 5:
            this.ph_1 = 6;
            var tmp_1 = this.rh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.rh_1;
              this.d3t_1.cancel(cause);
              throw cause;
            } else {
              throw this.rh_1;
            }

            break;
          case 6:
            throw this.rh_1;
          case 7:
            this.ph_1 = 6;
            this.oh_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ph_1 === 6) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  channelFromStream$slambda.prototype.o33 = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.b3t_1, completion);
    i.c3t_1 = $this$writer;
    return i;
  };
  channelFromStream$slambda.$metadata$ = classMeta('channelFromStream$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.n33($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $cancellable.v3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      $cancellable.v3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yn();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.nm(commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().n1o_1) {
      tmp = fetch(input, init);
    } else {
      tmp = jsRequireNodeFetch()(input, init);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    tmp$ret$0 = cancellable.ho();
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().n1o_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().n1o_1) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.v3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      $cancellable.v3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).nv();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.cx(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.uw(cause);
      return $this_writer.nv().uw(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.dx(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.p3t_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.n33 = function ($this$writer, $cont) {
    var tmp = this.o33($this$writer, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  readBodyNode$slambda.prototype.yh = function (p1, $cont) {
    return this.n33((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.p3t_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.r3t_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.s3t_1 = Channel$default(1, null, null, 6, null);
            this.r3t_1.on('data', readBodyNode$slambda$lambda(this.s3t_1, this.r3t_1));
            this.r3t_1.on('error', readBodyNode$slambda$lambda_0(this.s3t_1, this.q3t_1));
            this.r3t_1.on('end', readBodyNode$slambda$lambda_1(this.s3t_1));
            this.ph_1 = 5;
            this.t3t_1 = this.s3t_1.d();
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.oh_1 = 2;
            suspendResult = this.t3t_1.pv(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.oh_1 = 4;
              continue $sm;
            }

            this.u3t_1 = this.t3t_1.f();
            this.oh_1 = 3;
            suspendResult = writeFully(this.q3t_1.nv(), this.u3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r3t_1.resume();
            this.oh_1 = 1;
            continue $sm;
          case 4:
            this.ph_1 = 6;
            this.oh_1 = 7;
            continue $sm;
          case 5:
            this.ph_1 = 6;
            var tmp_3 = this.rh_1;
            if (tmp_3 instanceof Error) {
              var cause = this.rh_1;
              this.r3t_1.destroy(cause);
              throw cause;
            } else {
              throw this.rh_1;
            }

            break;
          case 6:
            throw this.rh_1;
          case 7:
            this.ph_1 = 6;
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ph_1 === 6) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  readBodyNode$slambda.prototype.o33 = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.p3t_1, completion);
    i.q3t_1 = $this$writer;
    return i;
  };
  readBodyNode$slambda.$metadata$ = classMeta('readBodyNode$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.n33($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_6().d21(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0;
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = new Int8Array(data);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.x3t_1.uo(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.y3t_1.cx(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.x3t_1.uo(cause);
      this$0.y3t_1.uw(cause);
      this$0.z3t_1.uk(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.x3t_1.to(reason);
      this$0.y3t_1.cx(Close_init_$Create$(reason));
      this$0.y3t_1.dx(null, 1, null);
      this$0.z3t_1.uk(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.l3u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.y1a = function ($this$launch, $cont) {
    var tmp = this.z1a($this$launch, $cont);
    tmp.qh_1 = Unit_getInstance();
    tmp.rh_1 = null;
    return tmp.xh();
  };
  JsWebSocketSession$slambda.prototype.yh = function (p1, $cont) {
    return this.y1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.xh = function () {
    var suspendResult = this.qh_1;
    $sm: do
      try {
        var tmp = this.oh_1;
        switch (tmp) {
          case 0:
            this.ph_1 = 10;
            var tmp_0 = this;
            tmp_0.n3u_1 = this.l3u_1.z3t_1;
            this.oh_1 = 1;
            continue $sm;
          case 1:
            this.p3u_1 = null;
            this.oh_1 = 2;
            continue $sm;
          case 2:
            this.oh_1 = 3;
            continue $sm;
          case 3:
            this.ph_1 = 9;
            this.ph_1 = 8;
            this.r3u_1 = this.n3u_1.d();
            this.oh_1 = 4;
            continue $sm;
          case 4:
            this.oh_1 = 5;
            suspendResult = this.r3u_1.pv(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.oh_1 = 6;
              continue $sm;
            }

            var e = this.r3u_1.f();
            var tmp0_subject = e.r21_1;
            var tmp0 = tmp0_subject.l4_1;
            switch (tmp0) {
              case 0:
                var text = e.s21_1;
                this.l3u_1.w3t_1.send(String$default(text, 0, 0, null, 14, null));
                ;
                break;
              case 1:
                var tmp_1 = e.s21_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.l3u_1.w3t_1.send(frameData);
                ;
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.s21_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.u17();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.op();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.u1e(0, 0, 3, null);
                this.l3u_1.x3t_1.to(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.l3u_1)) {
                  this.l3u_1.w3t_1.close();
                } else {
                  this.l3u_1.w3t_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.oh_1 = 4;
            continue $sm;
          case 6:
            this.q3u_1 = Unit_getInstance();
            this.ph_1 = 10;
            this.oh_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            cancelConsumed(this.n3u_1, this.p3u_1);
            tmp_3.o3u_1 = Unit_getInstance();
            this.oh_1 = 12;
            continue $sm;
          case 8:
            this.ph_1 = 9;
            var tmp_4 = this.rh_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.rh_1;
              var tmp_5 = this;
              this.p3u_1 = e_0;
              throw e_0;
            } else {
              throw this.rh_1;
            }

            break;
          case 9:
            this.ph_1 = 10;
            var t = this.rh_1;
            cancelConsumed(this.n3u_1, this.p3u_1);
            ;
            throw t;
          case 10:
            throw this.rh_1;
          case 11:
            cancelConsumed(this.n3u_1, this.p3u_1);
            ;
            if (false) {
              this.oh_1 = 1;
              continue $sm;
            }

            this.oh_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ph_1 === 10) {
          throw $p;
        } else {
          this.oh_1 = this.ph_1;
          this.rh_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.z1a = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.l3u_1, completion);
    i.m3u_1 = $this$launch;
    return i;
  };
  JsWebSocketSession$slambda.$metadata$ = classMeta('JsWebSocketSession$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.y1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.w3t_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.w3t_1.close(Codes_INTERNAL_ERROR_getInstance().a21_1, 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.v3t_1 = coroutineContext;
    this.w3t_1 = websocket;
    var tmp = this;
    tmp.x3t_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.y3t_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.z3t_1 = Channel$default(2147483647, null, null, 6, null);
    this.a3u_1 = this.y3t_1;
    this.b3u_1 = this.z3t_1;
    this.c3u_1 = this.x3t_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    var tmp0__get_ARRAYBUFFER__ua4cvm = null;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'arraybuffer';
    var tmp0_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    this.w3t_1.binaryType = tmp$ret$2;
    this.w3t_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.w3t_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.w3t_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.v3t_1.y3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ok(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.nj = function () {
    return this.v3t_1;
  };
  JsWebSocketSession.$metadata$ = classMeta('JsWebSocketSession', [DefaultWebSocketSession]);
  function unwrapCancellationException(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.n34 = get_supportedCapabilities;
  HttpClientEngineBase.prototype.w2z = install;
  KtorCallContextElement.prototype.y3 = get;
  KtorCallContextElement.prototype.e4 = fold;
  KtorCallContextElement.prototype.d4 = minusKey;
  KtorCallContextElement.prototype.f4 = plus;
  HttpRequest$1.prototype.nj = get_coroutineContext;
  JsClientEngine.prototype.w2z = install;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Phases_getInstance;
  _.$_$.b = Phases_getInstance_1;
  _.$_$.c = EmptyContent_getInstance;
  _.$_$.d = HttpClientPlugin;
  _.$_$.e = HttpRequestBuilder;
  _.$_$.f = accept;
  _.$_$.g = parameter;
  _.$_$.h = url;
  _.$_$.i = HttpResponseContainer;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map
