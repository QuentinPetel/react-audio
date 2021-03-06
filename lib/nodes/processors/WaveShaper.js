'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AudioNode2 = require('./shared/AudioNode');

var _AudioNode3 = _interopRequireDefault(_AudioNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaveShaper = function (_AudioNode) {
  _inherits(WaveShaper, _AudioNode);

  function WaveShaper() {
    _classCallCheck(this, WaveShaper);

    return _possibleConstructorReturn(this, (WaveShaper.__proto__ || Object.getPrototypeOf(WaveShaper)).apply(this, arguments));
  }

  _createClass(WaveShaper, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var audioContext = this.context.audioContext;

      if (audioContext.createWaveShaper) this.node = audioContext.createWaveShaper();else console.error('WaveShaper not supported in this browser');
    }
  }]);

  return WaveShaper;
}(_AudioNode3.default);

/* eslint-disable */


exports.default = WaveShaper;
var defaultCurve = function (amount) {
  var k = typeof amount === 'number' ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
  for (; i < n_samples; ++i) {
    x = i * 2 / n_samples - 1;
    curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
  }
  return curve;
}(400);
/* eslint-enable */

WaveShaper.defaultProps = {
  curve: defaultCurve,
  oversample: 'none'
};