'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _AudioNode2 = require('./shared/AudioNode');

var _AudioNode3 = _interopRequireDefault(_AudioNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConvolverNode = function (_AudioNode) {
	_inherits(ConvolverNode, _AudioNode);

	function ConvolverNode() {
		_classCallCheck(this, ConvolverNode);

		var _this = _possibleConstructorReturn(this, (ConvolverNode.__proto__ || Object.getPrototypeOf(ConvolverNode)).call(this));

		throw new Error('UnsupportedOperation');
		return _this;
	}

	return ConvolverNode;
}(_AudioNode3.default);

exports.default = ConvolverNode;