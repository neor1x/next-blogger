'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alex.belyeu/Documents/_Personal/Programming/ssr-egghead/shared/withMUI.js';


var withMaterialUI = function withMaterialUI(ComposedComponent) {
  var HOC = function (_Component) {
    (0, _inherits3.default)(HOC, _Component);

    function HOC() {
      (0, _classCallCheck3.default)(this, HOC);

      return (0, _possibleConstructorReturn3.default)(this, (HOC.__proto__ || (0, _getPrototypeOf2.default)(HOC)).apply(this, arguments));
    }

    (0, _createClass3.default)(HOC, [{
      key: 'render',
      value: function render() {
        var userAgent = this.props.userAgent;

        var Lato = 'lato, sans-serif';
        var muiTheme = (0, _getMuiTheme2.default)({
          fontFamily: Lato,
          palette: {
            primary1Color: _theme.PRIMARY_COLOR,
            primary2Color: _theme.PRIMARY_COLOR_TWO,
            primary3Color: _theme.PRIMARY_COLOR_THREE,
            accent1Color: _theme.ACCENT_COLOR_ONE,
            accent2Color: _theme.ACCENT_COLOR_TWO,
            accent3Color: _theme.ACCENT_COLOR_THREE
          },
          appBar: {
            height: 50
          }
        }, {
          userAgent: userAgent
        });
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement(_head2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement('title', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, 'Bloggers'), _react2.default.createElement('meta', {
          name: 'viewport',
          content: 'initial-scale=1.0, width=device-width',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), _react2.default.createElement('link', {
          href: 'http://fonts.googleapis.com/css?family=Lato',
          rel: 'stylesheet',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        })), _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }))));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var req, userAgent, subProps;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                  _context.next = 4;
                  return ComposedComponent.getInitialProps(ctx);

                case 4:
                  subProps = _context.sent;
                  return _context.abrupt('return', (0, _extends3.default)({}, subProps, {
                    userAgent: userAgent
                  }));

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return HOC;
  }(_react.Component);

  return HOC;
};

exports.default = withMaterialUI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC93aXRoTVVJLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTXVpVGhlbWVQcm92aWRlciIsImdldE11aVRoZW1lIiwiSGVhZCIsIlBSSU1BUllfQ09MT1IiLCJQUklNQVJZX0NPTE9SX1RXTyIsIlBSSU1BUllfQ09MT1JfVEhSRUUiLCJBQ0NFTlRfQ09MT1JfT05FIiwiQUNDRU5UX0NPTE9SX1RXTyIsIkFDQ0VOVF9DT0xPUl9USFJFRSIsIndpdGhNYXRlcmlhbFVJIiwiSE9DIiwidXNlckFnZW50IiwicHJvcHMiLCJMYXRvIiwibXVpVGhlbWUiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInByaW1hcnkxQ29sb3IiLCJwcmltYXJ5MkNvbG9yIiwicHJpbWFyeTNDb2xvciIsImFjY2VudDFDb2xvciIsImFjY2VudDJDb2xvciIsImFjY2VudDNDb2xvciIsImFwcEJhciIsImhlaWdodCIsImN0eCIsInJlcSIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInN1YlByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNLOzs7Ozs7O0FBRVAsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsa0NBQXFCO01BQUEsQUFDcEMsNEJBRG9DO2lDQUFBOzttQkFBQTswQ0FBQTs7OEhBQUE7QUFBQTs7O1dBQUE7K0JBWS9CO1lBQUEsQUFDQyxZQUFjLEtBRGYsQUFDb0IsTUFEcEIsQUFDQyxBQUNSOztZQUFNLE9BQU4sQUFBYSxBQUNiO1lBQU07c0JBQ0osQUFDYyxBQUNaOztBQUFTLEFBQ1EsQUFDZjtBQUZPLEFBRVEsQUFDZjtBQUhPLEFBR1EsQUFDZjtBQUpPLEFBSU8sQUFDZDtBQUxPLEFBS08sQUFDZDtBQVJKLEFBRVcsQUFNTyxBQUVoQjtBQVJTLEFBQ1A7O29CQUpXLEFBQ2YsQUFVVSxBQUNFO0FBREYsQUFDTjtBQVhKLEFBQ0UsU0FGYTtxQkFBakIsQUFBaUIsQUFlZixBQUlGO0FBSkUsQUFDRTsrQkFJRixjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURGLEFBQ0UsQUFDQTtnQkFBQSxBQUNPLEFBQ0w7bUJBRkYsQUFFVTs7c0JBRlY7d0JBRkYsQUFFRSxBQUlBO0FBSkE7QUFDRTtnQkFHRixBQUNPLEFBQ0w7ZUFGRixBQUVNOztzQkFGTjt3QkFQSixBQUNFLEFBTUUsQUFLRjtBQUxFO0FBQ0UsNkJBSUosQUFBQyw0Q0FBaUIsVUFBbEIsQUFBNEI7c0JBQTVCO3dCQUFBLEFBQ0U7QUFERjt5Q0FDRSxBQUFDLDhDQUFzQixLQUF2QixBQUE0Qjs7c0JBQTVCO3dCQWROLEFBQ0UsQUFZRSxBQUNFLEFBSVA7QUFKTztBQUFBO0FBaERnQztBQUFBO1dBQUE7eUJBQUE7NkdBQUEsQUFFWCxLQUZXOzhCQUFBO3dFQUFBO3NCQUFBOytDQUFBO3FCQUc5QjtBQUg4Qix3QkFBQSxBQUd0QixJQUhzQixBQUc5QixBQUNGO0FBSmdDLDhCQUlwQixNQUFNLElBQUEsQUFBSSxRQUFWLEFBQU0sQUFBWSxnQkFBZ0IsVUFKZCxBQUl3QjtrQ0FKeEI7eUJBS2Ysa0JBQUEsQUFBa0IsZ0JBTEgsQUFLZixBQUFrQzs7cUJBQW5EO0FBTGdDLHNDQUFBOzhFQUFBLEFBT2pDOytCQVBpQztBQVFwQzs7cUJBUm9DO3FCQUFBO2tDQUFBOztBQUFBO3NCQUFBO0FBQUE7O3FDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUFBQTtBQUFBOztXQUFBO0FBQUEsQUFDeEIsQUFxRGxCOztTQUFBLEFBQU8sQUFDUjtBQXZERCxBQXlEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3aXRoTVVJLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4LmJlbHlldS9Eb2N1bWVudHMvX1BlcnNvbmFsL1Byb2dyYW1taW5nL3Nzci1lZ2doZWFkIn0=