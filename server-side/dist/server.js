module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(1);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _app = __webpack_require__(5);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(11);

	var _template2 = _interopRequireDefault(_template);

	var _request = __webpack_require__(12);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('/getCompoenets', function (req, response) {
	    var isMobile = false;
	    var initialState = { isMobile: isMobile };
	    //MAke api call and pass it as props

	    _request2.default.get('http://google.com', function (err, res, body) {
	        if (err) console.log(err);
	        initialState = {
	            isMobile: isMobile,
	            externalSite: res.statusCode
	        };
	        console.log(res);
	        var appString = (0, _server.renderToString)(_react2.default.createElement(_app2.default, initialState));
	        response.send((0, _template2.default)({
	            body: appString,
	            title: 'Hello World from the server',
	            initialState: (0, _stringify2.default)(initialState)
	        }));
	    });
	});

	server.listen(8080);
	console.log('listening');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(6);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(9);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(10);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppComponent = function (_Component) {
	  (0, _inherits3.default)(AppComponent, _Component);

	  function AppComponent() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, AppComponent);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppComponent.__proto__ || (0, _getPrototypeOf2.default)(AppComponent)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function handleClick() {
	      alert("clicked");
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(AppComponent, [{
	    key: "render",
	    value: function render() {
	      var isMobile = this.props.isMobile;

	      console.log("props" + this.props);
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { onClick: this.handleClick },
	          " Click Me "
	        ),
	        _react2.default.createElement(
	          "h1",
	          null,
	          "hello world ",
	          isMobile ? 'mobile' : 'desktop',
	          " "
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          this.props.externalSite
	        )
	      );
	    }
	  }]);
	  return AppComponent;
	}(_react.Component);

	exports.default = AppComponent;


	AppComponent.propTypes = {
	  isMobile: _react.PropTypes.bool.isRequired
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/assets/index.css\" />\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("request");

/***/ })
/******/ ]);