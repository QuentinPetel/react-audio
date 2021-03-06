'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _update = require('../../shared/update');

var _update2 = _interopRequireDefault(_update);

var _AudioNodeChain = require('./AudioNodeChain');

var _AudioNodeChain2 = _interopRequireDefault(_AudioNodeChain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioSource = function (_Component) {
	_inherits(AudioSource, _Component);

	function AudioSource() {
		_classCallCheck(this, AudioSource);

		var _this = _possibleConstructorReturn(this, (AudioSource.__proto__ || Object.getPrototypeOf(AudioSource)).call(this));

		_this.audioNodeChain = new _AudioNodeChain2.default();
		return _this;
	}

	_createClass(AudioSource, [{
		key: 'getChildContext',
		value: function getChildContext() {
			var audioNodeChain = this.audioNodeChain;

			return { audioNodeChain: audioNodeChain };
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var node = this.node;
			var audioNodeChain = this.audioNodeChain;

			audioNodeChain.setSource(node);
			_update2.default.call(this);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			_update2.default.call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var node = this.node;

			this.audioNodeChain.remove(node);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.props.children
			);
		}
	}]);

	return AudioSource;
}(_react.Component);

exports.default = AudioSource;


AudioSource.childContextTypes = {
	audioNodeChain: _react2.default.PropTypes.any.isRequired
};

AudioSource.contextTypes = {
	audioContext: _react2.default.PropTypes.any.isRequired
};