(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var objectMeta = kotlin_kotlin.$_$.i9;
  var classMeta = kotlin_kotlin.$_$.h8;
  var toString = kotlin_kotlin.$_$.sc;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.vi_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.wi_1);
    }
  }
  function update(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.wi_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.wi_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = objectMeta('None', undefined, undefined, undefined, undefined, atomicfu$TraceBase.prototype);
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.$metadata$ = classMeta('TraceBase');
  function AtomicRef(value) {
    this.vi_1 = value;
  }
  AtomicRef.prototype.xi = function (_set____db54di) {
    this.vi_1 = _set____db54di;
  };
  AtomicRef.prototype.yi = function () {
    return this.vi_1;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.vi_1 === expect))
      return false;
    this.vi_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.vi_1;
    this.vi_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.vi_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.yi,
    set: AtomicRef.prototype.xi
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.zi_1 = value;
  }
  AtomicBoolean.prototype.aj = function (_set____db54di) {
    this.zi_1 = _set____db54di;
  };
  AtomicBoolean.prototype.yi = function () {
    return this.zi_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.zi_1 === expect))
      return false;
    this.zi_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.zi_1;
    this.zi_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.zi_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.yi,
    set: AtomicBoolean.prototype.aj
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.wi_1 = value;
  }
  AtomicInt.prototype.bj = function (_set____db54di) {
    this.wi_1 = _set____db54di;
  };
  AtomicInt.prototype.yi = function () {
    return this.wi_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.wi_1 === expect))
      return false;
    this.wi_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.wi_1;
    this.wi_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.wi_1;
    tmp0_this.wi_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.wi_1;
    tmp0_this.wi_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.wi_1;
    var tmp0_this = this;
    tmp0_this.wi_1 = tmp0_this.wi_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.wi_1 = tmp0_this.wi_1 + delta | 0;
    return this.wi_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.wi_1 = tmp0_this.wi_1 + 1 | 0;
    return tmp0_this.wi_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.wi_1 = tmp0_this.wi_1 - 1 | 0;
    return tmp0_this.wi_1;
  };
  AtomicInt.prototype.cj = function (delta) {
    this.atomicfu$getAndAdd(delta);
  };
  AtomicInt.prototype.dj = function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  };
  AtomicInt.prototype.toString = function () {
    return this.wi_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.yi,
    set: AtomicInt.prototype.bj
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.ej_1 = value;
  }
  AtomicLong.prototype.fj = function (_set____db54di) {
    this.ej_1 = _set____db54di;
  };
  AtomicLong.prototype.yi = function () {
    return this.ej_1;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this.ej_1.equals(expect))
      return false;
    this.ej_1 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.ej_1;
    this.ej_1 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.ej_1;
    tmp0_this.ej_1 = tmp1.ah();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.ej_1;
    tmp0_this.ej_1 = tmp1.bh();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.ej_1;
    var tmp0_this = this;
    tmp0_this.ej_1 = tmp0_this.ej_1.a6(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.ej_1 = tmp0_this.ej_1.a6(delta);
    return this.ej_1;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.ej_1 = tmp0_this.ej_1.ah();
    return tmp0_this.ej_1;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.ej_1 = tmp0_this.ej_1.bh();
    return tmp0_this.ej_1;
  };
  AtomicLong.prototype.toString = function () {
    return this.ej_1.toString();
  };
  AtomicLong.$metadata$ = classMeta('AtomicLong');
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype.yi,
    set: AtomicLong.prototype.fj
  });
  function atomic$long$1(initial) {
    return atomic_2(initial, None_getInstance());
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_2(initial, trace) {
    return new AtomicLong(initial);
  }
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.$metadata$ = classMeta('ReentrantLock');
  function synchronized(lock, block) {
    init_properties_Synchronized_kt_vep4ze();
    return block();
  }
  var properties_initialized_Synchronized_kt_8bwsba;
  function init_properties_Synchronized_kt_vep4ze() {
    if (properties_initialized_Synchronized_kt_8bwsba) {
    } else {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$long$1;
  _.$_$.c = atomic$ref$1;
  _.$_$.d = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map
