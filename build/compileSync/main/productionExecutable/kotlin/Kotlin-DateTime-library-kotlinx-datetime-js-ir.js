(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['@js-joda/core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.g8;
  var IllegalArgumentException = kotlin_kotlin.$_$.vb;
  var classMeta = kotlin_kotlin.$_$.m8;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.j2;
  var RuntimeException = kotlin_kotlin.$_$.ac;
  var Long = kotlin_kotlin.$_$.xb;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.bc;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var objectMeta = kotlin_kotlin.$_$.o9;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var charSequenceLength = kotlin_kotlin.$_$.k8;
  var charSequenceGet = kotlin_kotlin.$_$.j8;
  var Char = kotlin_kotlin.$_$.nb;
  var equals = kotlin_kotlin.$_$.o8;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var toLong = kotlin_kotlin.$_$.q9;
  var ArithmeticException = kotlin_kotlin.$_$.mb;
  var numberToLong = kotlin_kotlin.$_$.n9;
  var numberToInt = kotlin_kotlin.$_$.m9;
  var Comparable = kotlin_kotlin.$_$.ob;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toString = kotlin_kotlin.$_$.s9;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.p1;
  //endregion
  //region block: pre-declaration
  DateTimeFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  DateTimeFormatException.prototype.constructor = DateTimeFormatException;
  DateTimeArithmeticException.prototype = Object.create(RuntimeException.prototype);
  DateTimeArithmeticException.prototype.constructor = DateTimeArithmeticException;
  IllegalTimeZoneException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalTimeZoneException.prototype.constructor = IllegalTimeZoneException;
  FixedOffsetTimeZone.prototype = Object.create(TimeZone.prototype);
  FixedOffsetTimeZone.prototype.constructor = FixedOffsetTimeZone;
  //endregion
  function DateTimeFormatException_init_$Init$(cause, $this) {
    IllegalArgumentException_init_$Init$(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$(cause) {
    var tmp = DateTimeFormatException_init_$Init$(cause, Object.create(DateTimeFormatException.prototype));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  DateTimeFormatException.$metadata$ = classMeta('DateTimeFormatException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function DateTimeArithmeticException_init_$Init$(cause, $this) {
    RuntimeException_init_$Init$(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$(cause, Object.create(DateTimeArithmeticException.prototype));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  DateTimeArithmeticException.$metadata$ = classMeta('DateTimeArithmeticException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function IllegalTimeZoneException_init_$Init$(cause, $this) {
    IllegalArgumentException_init_$Init$(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$(cause, Object.create(IllegalTimeZoneException.prototype));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  IllegalTimeZoneException.$metadata$ = classMeta('IllegalTimeZoneException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function get_MILLIS_PER_ONE() {
    return MILLIS_PER_ONE;
  }
  var MILLIS_PER_ONE;
  function get_NANOS_PER_ONE() {
    return NANOS_PER_ONE;
  }
  var NANOS_PER_ONE;
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.i3y_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  InstantIso8601Serializer.prototype.s24 = function () {
    return this.i3y_1;
  };
  InstantIso8601Serializer.prototype.u24 = function (decoder) {
    return Companion_getInstance().e1p(decoder.l27());
  };
  InstantIso8601Serializer.prototype.n3y = function (encoder, value) {
    encoder.q28(value.toString());
  };
  InstantIso8601Serializer.prototype.t24 = function (encoder, value) {
    return this.n3y(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  InstantIso8601Serializer.$metadata$ = objectMeta('InstantIso8601Serializer', [KSerializer]);
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.o3y_1 = PrimitiveSerialDescriptor('LocalDate', STRING_getInstance());
  }
  LocalDateIso8601Serializer.prototype.s24 = function () {
    return this.o3y_1;
  };
  LocalDateIso8601Serializer.prototype.u24 = function (decoder) {
    return Companion_getInstance_0().e1p(decoder.l27());
  };
  LocalDateIso8601Serializer.prototype.r3y = function (encoder, value) {
    encoder.q28(value.toString());
  };
  LocalDateIso8601Serializer.prototype.t24 = function (encoder, value) {
    return this.r3y(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  LocalDateIso8601Serializer.$metadata$ = objectMeta('LocalDateIso8601Serializer', [KSerializer]);
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.s3y_1 = PrimitiveSerialDescriptor('LocalDateTime', STRING_getInstance());
  }
  LocalDateTimeIso8601Serializer.prototype.s24 = function () {
    return this.s3y_1;
  };
  LocalDateTimeIso8601Serializer.prototype.u24 = function (decoder) {
    return Companion_getInstance_1().e1p(decoder.l27());
  };
  LocalDateTimeIso8601Serializer.prototype.v3y = function (encoder, value) {
    encoder.q28(value.toString());
  };
  LocalDateTimeIso8601Serializer.prototype.t24 = function (encoder, value) {
    return this.v3y(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  LocalDateTimeIso8601Serializer.$metadata$ = objectMeta('LocalDateTimeIso8601Serializer', [KSerializer]);
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.w3y_1 = PrimitiveSerialDescriptor('TimeZone', STRING_getInstance());
  }
  TimeZoneSerializer.prototype.s24 = function () {
    return this.w3y_1;
  };
  TimeZoneSerializer.prototype.u24 = function (decoder) {
    return Companion_getInstance_2().y3y(decoder.l27());
  };
  TimeZoneSerializer.prototype.z3y = function (encoder, value) {
    encoder.q28(value.b3z());
  };
  TimeZoneSerializer.prototype.t24 = function (encoder, value) {
    return this.z3y(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  TimeZoneSerializer.$metadata$ = objectMeta('TimeZoneSerializer', [KSerializer]);
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.c3z_1 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', STRING_getInstance());
  }
  FixedOffsetTimeZoneSerializer.prototype.s24 = function () {
    return this.c3z_1;
  };
  FixedOffsetTimeZoneSerializer.prototype.u24 = function (decoder) {
    var zone = Companion_getInstance_2().y3y(decoder.l27());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  FixedOffsetTimeZoneSerializer.prototype.d3z = function (encoder, value) {
    encoder.q28(value.b3z());
  };
  FixedOffsetTimeZoneSerializer.prototype.t24 = function (encoder, value) {
    return this.d3z(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  FixedOffsetTimeZoneSerializer.$metadata$ = objectMeta('FixedOffsetTimeZoneSerializer', [KSerializer]);
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.e3z_1 = PrimitiveSerialDescriptor('UtcOffset', STRING_getInstance());
  }
  UtcOffsetSerializer.prototype.s24 = function () {
    return this.e3z_1;
  };
  UtcOffsetSerializer.prototype.u24 = function (decoder) {
    return Companion_getInstance_4().e1p(decoder.l27());
  };
  UtcOffsetSerializer.prototype.g3z = function (encoder, value) {
    encoder.q28(value.toString());
  };
  UtcOffsetSerializer.prototype.t24 = function (encoder, value) {
    return this.g3z(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  UtcOffsetSerializer.$metadata$ = objectMeta('UtcOffsetSerializer', [KSerializer]);
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var tmp = _Char___init__impl__6a9atx(84);
    var time = indexOf$default(isoString, tmp, 0, true, 2, null);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(isoString, index);
          tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(45)));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var tmp_0 = _Char___init__impl__6a9atx(58);
    var separator = indexOf$default(isoString, tmp_0, offset, false, 4, null);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion() {
    Companion_instance = this;
    this.j3y_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.k3y_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.l3y_1 = new Instant_0(Instant.MIN);
    this.m3y_1 = new Instant_0(Instant.MAX);
  }
  Companion.prototype.h3z = function (epochMilliseconds) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_MILLIS_PER_ONE();
      tmp$ret$0 = epochMilliseconds.z5(toLong(tmp0_div));
      var tmp_0 = tmp$ret$0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_MILLIS_PER_ONE();
      tmp$ret$1 = epochMilliseconds.w6(toLong(tmp1_rem));
      var tmp2_times = tmp$ret$1;
      var tmp3_times = get_NANOS_PER_MILLI();
      tmp$ret$2 = tmp2_times.a6(toLong(tmp3_times));
      tmp = this.i3z(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        if (!isJodaDateTimeException($p))
          throw $p;
        tmp_1 = epochMilliseconds.b1(new Long(0, 0)) > 0 ? this.m3y_1 : this.l3y_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  Companion.prototype.e1p = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeParseException($p))
          throw DateTimeFormatException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion.prototype.i3z = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.floorDiv' call
      var tmp0_floorDiv = toLong(get_NANOS_PER_ONE());
      var q = nanosecondAdjustment.z5(tmp0_floorDiv);
      if (nanosecondAdjustment.u6(tmp0_floorDiv).b1(new Long(0, 0)) < 0 ? !q.a6(tmp0_floorDiv).equals(nanosecondAdjustment) : false) {
        var tmp0 = q;
        q = tmp0.n7();
      }
      tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.mod' call
      var tmp1_mod = toLong(get_NANOS_PER_ONE());
      var r = nanosecondAdjustment.w6(tmp1_mod);
      tmp$ret$1 = r.b6(tmp1_mod.p7(r.u6(tmp1_mod).p7(r.o7(r.y5())).o6(63)));
      var nos = tmp$ret$1.p6();
      tmp = new Instant_0(Instant.ofEpochSecond(secs, nos));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp_1;
        if (!isJodaDateTimeException($p)) {
          tmp_1 = !($p instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw $p;
        tmp_0 = epochSeconds.b1(new Long(0, 0)) > 0 ? this.m3y_1 : this.l3y_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.j3z_1 = value;
  }
  Instant_0.prototype.k3z = function () {
    return numberToLong(this.j3z_1.epochSecond());
  };
  Instant_0.prototype.l3z = function () {
    return numberToInt(this.j3z_1.nano());
  };
  Instant_0.prototype.m3z = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.k3z();
    var tmp1_times = get_MILLIS_PER_ONE();
    tmp$ret$0 = tmp0_times.a6(toLong(tmp1_times));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = this.l3z() / get_NANOS_PER_MILLI() | 0;
    tmp$ret$1 = tmp2_plus.b6(toLong(tmp3_plus));
    return tmp$ret$1;
  };
  Instant_0.prototype.n3z = function (other) {
    return numberToInt(this.j3z_1.compareTo(other.j3z_1));
  };
  Instant_0.prototype.c7 = function (other) {
    return this.n3z(other instanceof Instant_0 ? other : THROW_CCE());
  };
  Instant_0.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.j3z_1, other.j3z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Instant_0.prototype.hashCode = function () {
    return numberToInt(this.j3z_1.hashCode());
  };
  Instant_0.prototype.toString = function () {
    return this.j3z_1.toString();
  };
  Instant_0.$metadata$ = classMeta('Instant', [Comparable], undefined, {0: InstantIso8601Serializer_getInstance});
  function isJodaDateTimeException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeParseException';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p3y_1 = new LocalDate_0(LocalDate.MIN);
    this.q3y_1 = new LocalDate_0(LocalDate.MAX);
  }
  Companion_0.prototype.e1p = function (isoString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDate.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDate_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeParseException($p))
          throw DateTimeFormatException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LocalDate_0(value) {
    Companion_getInstance_0();
    this.o3z_1 = value;
  }
  LocalDate_0.prototype.p3z = function () {
    return numberToInt(this.o3z_1.year());
  };
  LocalDate_0.prototype.q3z = function () {
    return numberToInt(this.o3z_1.monthValue());
  };
  LocalDate_0.prototype.r3z = function () {
    return numberToInt(this.o3z_1.dayOfMonth());
  };
  LocalDate_0.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = equals(this.o3z_1, other.o3z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  LocalDate_0.prototype.hashCode = function () {
    return numberToInt(this.o3z_1.hashCode());
  };
  LocalDate_0.prototype.toString = function () {
    return this.o3z_1.toString();
  };
  LocalDate_0.prototype.s3z = function (other) {
    return numberToInt(this.o3z_1.compareTo(other.o3z_1));
  };
  LocalDate_0.prototype.c7 = function (other) {
    return this.s3z(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  LocalDate_0.$metadata$ = classMeta('LocalDate', [Comparable], undefined, {0: LocalDateIso8601Serializer_getInstance});
  function LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    var tmp;
    try {
      tmp = LocalDateTime.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeException($p))
          throw IllegalArgumentException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    LocalDateTime_0.call($this, tmp);
    return $this;
  }
  function LocalDateTime_init_$Create$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, Object.create(LocalDateTime_0.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.t3y_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.u3y_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  Companion_1.prototype.e1p = function (isoString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDateTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDateTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeParseException($p))
          throw DateTimeFormatException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_1();
    this.t3z_1 = value;
  }
  LocalDateTime_0.prototype.u3z = function () {
    return new LocalDate_0(this.t3z_1.toLocalDate());
  };
  LocalDateTime_0.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = equals(this.t3z_1, other.t3z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  LocalDateTime_0.prototype.hashCode = function () {
    return numberToInt(this.t3z_1.hashCode());
  };
  LocalDateTime_0.prototype.toString = function () {
    return this.t3z_1.toString();
  };
  LocalDateTime_0.prototype.v3z = function (other) {
    return numberToInt(this.t3z_1.compareTo(other.t3z_1));
  };
  LocalDateTime_0.prototype.c7 = function (other) {
    return this.v3z(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  LocalDateTime_0.$metadata$ = classMeta('LocalDateTime', [Comparable], undefined, {0: LocalDateTimeIso8601Serializer_getInstance});
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDateTime.ofInstant(_this__u8e3s4.j3z_1, timeZone.a3z_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new LocalDateTime_0(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeException($p))
          throw DateTimeArithmeticException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.x3y_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  Companion_2.prototype.w3z = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  Companion_2.prototype.y3y = function (zoneId) {
    var tmp;
    try {
      tmp = ofZone(this, ZoneId.of(zoneId));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeException($p))
          throw IllegalTimeZoneException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_2();
    this.a3z_1 = zoneId;
  }
  TimeZone.prototype.b3z = function () {
    return this.a3z_1.id();
  };
  TimeZone.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = equals(this.a3z_1, other.a3z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  TimeZone.prototype.hashCode = function () {
    return numberToInt(this.a3z_1.hashCode());
  };
  TimeZone.prototype.toString = function () {
    return this.a3z_1.toString();
  };
  TimeZone.$metadata$ = classMeta('TimeZone', undefined, undefined, {0: TimeZoneSerializer_getInstance});
  function toInstant(_this__u8e3s4, timeZone) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.t3z_1.atZone(timeZone.a3z_1).toInstant();
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = new Instant_0(tmp0_let);
    return tmp$ret$0;
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.x3z_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, Object.create(FixedOffsetTimeZone.prototype));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    Companion_getInstance_3();
    TimeZone.call(this, zoneId);
    this.z3z_1 = offset;
  }
  FixedOffsetTimeZone.$metadata$ = classMeta('FixedOffsetTimeZone', undefined, undefined, {0: FixedOffsetTimeZoneSerializer_getInstance}, undefined, TimeZone.prototype);
  function Companion_4() {
    Companion_instance_4 = this;
    this.f3z_1 = new UtcOffset(ZoneOffset.UTC);
  }
  Companion_4.prototype.e1p = function (offsetString) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = ZoneOffset.of(offsetString);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = new UtcOffset(tmp0_let);
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeException($p))
          throw DateTimeFormatException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_4();
    this.x3z_1 = zoneOffset;
  }
  UtcOffset.prototype.hashCode = function () {
    return numberToInt(this.x3z_1.hashCode());
  };
  UtcOffset.prototype.equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = equals(this.x3z_1, other.x3z_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  UtcOffset.prototype.toString = function () {
    return this.x3z_1.toString();
  };
  UtcOffset.$metadata$ = classMeta('UtcOffset', undefined, undefined, {0: UtcOffsetSerializer_getInstance});
  function safeAdd(a, b) {
    var sum = a.b6(b);
    if (a.u6(sum).b1(new Long(0, 0)) < 0 ? a.u6(b).b1(new Long(0, 0)) >= 0 : false) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + toString(a) + ' + ' + toString(b));
    }
    return sum;
  }
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalDateTime_init_$Create$;
  _.$_$.b = Companion_getInstance;
  _.$_$.c = Companion_getInstance_2;
  _.$_$.d = toInstant;
  _.$_$.e = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
