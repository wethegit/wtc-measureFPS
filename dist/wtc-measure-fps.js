"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A singleton class that provides Framerate information for a website. When running, this will produce a 
 * number of useful internal properties.
 * 
 * - current
 *   The current framerate
 * - low
 *   The lowest overall framerate
 * - averageOverall
 *   The average overall framerate
 * - average60
 *   The average framerate in the last 60 frames (ideally this is a second)
 * 
 * ## Usage
 * ```
 * let fps = utilities.getFPSMeasure();
 * console.log(fps.current); // 60
 * ```
 * 
 * When using this class, it is often fortiuitous to cycle it down and back up after a big FPS dip:
 * ```
 * fps.stop();
 * fps.start();
 * ```
 * 
 * @private
 * @class MeasureFPS
 */
var MeasureFPS =
/*#__PURE__*/
function () {
  function MeasureFPS() {
    _classCallCheck(this, MeasureFPS);

    this.start();
  }

  _createClass(MeasureFPS, [{
    key: "start",
    value: function start() {
      if (this.running === true) return;
      this.elapsedTime = 0;
      this.lastTime = 0;
      this.current = 0;
      this.low = 60;
      this.averageOverall = 60;
      this.average60 = 60;
      this.ticks = 0;
      this.running = true;
      requestAnimationFrame(this.run.bind(this));
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "run",
    value: function run(now) {
      var tick60;
      this.elapsedTime = (now - (this.lastTime || now)) / 1000;
      this.lastTime = now;
      this.ticks += 1;
      this.current = 1 / this.elapsedTime;

      if (this.current < this.low) {
        this.low = this.current;
      }

      if (!isNaN(parseInt(this.current))) {
        this.averageOverall = (this.ticks * this.averageOverall + this.current) / (this.ticks + 1);

        if (this.ticks % 60 === 0) {
          this.average60 = 60;
        }

        tick60 = this.ticks % 60 + 1;
        this.average60 = (tick60 * this.average60 + this.current) / (tick60 + 1);
      }

      if (this.running === true) {
        requestAnimationFrame(this.run.bind(this));
      }
    }
  }]);

  return MeasureFPS;
}();

var measureFPSInstance = null;

getFPSMeasure = function getFPSMeasure() {
  if (measureFPSInstance === null) measureFPSInstance = new MeasureFPS();
  return measureFPSInstance;
};

var _default = getFPSMeasure;
exports["default"] = _default;