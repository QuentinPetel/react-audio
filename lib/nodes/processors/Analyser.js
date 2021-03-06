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

var Analyser = function (_AudioNode) {
	_inherits(Analyser, _AudioNode);

	function Analyser() {
		_classCallCheck(this, Analyser);

		return _possibleConstructorReturn(this, (Analyser.__proto__ || Object.getPrototypeOf(Analyser)).apply(this, arguments));
	}

	_createClass(Analyser, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			var audioContext = this.context.audioContext;

			if (audioContext.createAnalyser) {
				var node = this.node = audioContext.createAnalyser();

				this.getFloatFrequencyData = function () {
					if (!_this2.floatFrequencyData) _this2.floatFrequencyData = new Float32Array(node.frequencyBinCount);

					var data = _this2.floatFrequencyData;
					node.getFloatFrequencyData(data);
					return data;
				};

				this.getByteFrequencyData = function () {
					if (!_this2.byteFrequencyData) _this2.byteFrequencyData = new Uint8Array(node.frequencyBinCount);

					var data = _this2.byteFrequencyData;
					node.getByteFrequencyData(data);
					return data;
				};

				this.getFloatTimeDomainData = function () {
					if (!_this2.floatTimeDomainData) _this2.floatTimeDomainData = new Float32Array(node.fftSize);

					var data = _this2.floatTimeDomainData;
					node.getFloatTimeDomainData(data);
					return data;
				};

				this.getByteTimeDomainData = function () {
					if (!_this2.byteTimeDomainData) _this2.byteTimeDomainData = new Uint8Array(node.fftSize);

					var data = _this2.byteTimeDomainData;
					node.getByteTimeDomainData(data);
					return data;
				};
			} else console.error('Analyser not supported in this browser');
		}
	}, {
		key: 'render',
		value: function render() {
			var frequencyBinCount = this.node.frequencyBinCount;


			var props = {
				getFloatFrequencyData: this.getFloatFrequencyData,
				getByteFrequencyData: this.getByteFrequencyData,
				getFloatTimeDomainData: this.getFloatTimeDomainData,
				getByteTimeDomainData: this.getByteTimeDomainData,
				frequencyBinCount: frequencyBinCount
			};

			return React.createElement(
				'div',
				null,
				React.Children.map(this.props.children, function (m) {
					return React.cloneElement(m, props);
				})
			);
		}
	}]);

	return Analyser;
}(_AudioNode3.default);

exports.default = Analyser;


module.exports.defaultProps = {
	fftSize: 2048,
	minDecibels: -100,
	maxDecibels: -30,
	smoothingTimeConstant: 0.8
};