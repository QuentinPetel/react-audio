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

var DynamicsCompressor = function (_AudioNode) {
	_inherits(DynamicsCompressor, _AudioNode);

	function DynamicsCompressor() {
		_classCallCheck(this, DynamicsCompressor);

		return _possibleConstructorReturn(this, (DynamicsCompressor.__proto__ || Object.getPrototypeOf(DynamicsCompressor)).apply(this, arguments));
	}

	_createClass(DynamicsCompressor, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var audioContext = this.context.audioContext;

			if (audioContext.createDynamicsCompressor) this.node = audioContext.createDynamicsCompressor();else console.error('DynamicsCompressor not supported in this browser');
		}
	}]);

	return DynamicsCompressor;
}(_AudioNode3.default);

exports.default = DynamicsCompressor;


module.exports.defaultProps = {
	threshold: -24,
	knee: 30,
	ratio: 12,
	reduction: 0,
	attack: 0.003,
	release: 0.25
};