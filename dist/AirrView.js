"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = exports.propTypes = {
    name: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string,
    active: _propTypes2.default.bool,
    refDOM: _propTypes2.default.object,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};
var defaultProps = exports.defaultProps = {
    name: "", //the name of the view. Must be unique among others views in scene. Will be used as identification string
    title: "", //titlebar name. if parent scene navbar is enabled, this title will be showed there
    active: false,
    refDOM: null,
    className: "", //extra classes to use
    style: {}
};

var AirrView = function (_Component) {
    _inherits(AirrView, _Component);

    function AirrView() {
        _classCallCheck(this, AirrView);

        return _possibleConstructorReturn(this, (AirrView.__proto__ || Object.getPrototypeOf(AirrView)).apply(this, arguments));
    }

    _createClass(AirrView, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                title = _props.title,
                active = _props.active,
                refDOM = _props.refDOM,
                className = _props.className,
                style = _props.style,
                rest = _objectWithoutProperties(_props, ["name", "title", "active", "refDOM", "className", "style"]);

            var viewClass = "airr-view" + (className ? " " + className : "");

            active && (viewClass += " active");

            return _react2.default.createElement(
                "div",
                _extends({ className: viewClass, style: style, ref: refDOM }, rest),
                typeof this.props.children === "function" ? this.props.children() : this.props.children
            );
        }
    }]);

    return AirrView;
}(_react.Component);

exports.default = AirrView;


AirrView.propTypes = propTypes;
AirrView.defaultProps = defaultProps;