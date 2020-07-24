'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _withMUI = require('../shared/withMUI');

var _withMUI2 = _interopRequireDefault(_withMUI);

require('isomorphic-fetch');

var _Card = require('material-ui/Card');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alex.belyeu/Documents/_Personal/Programming/ssr-egghead/pages/index.js?entry',
    _this = undefined;

var Index = function Index(_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement('div', {
    className: 'jsx-506946288',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '506946288',
    css: '.post-link.jsx-506946288{text-decoration:none;color:#fff;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBR2dDLHFCQUNWLFdBQ0ksZUFDakIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXguYmVseWV1L0RvY3VtZW50cy9fUGVyc29uYWwvUHJvZ3JhbW1pbmcvc3NyLWVnZ2hlYWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB3aXRoTXVpIGZyb20gJy4uL3NoYXJlZC93aXRoTVVJJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkVGV4dCB9IGZyb20gJ21hdGVyaWFsLXVpL0NhcmQnO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSW5kZXggPSAoeyBwb3N0cyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5wb3N0LWxpbmsge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0+XG4gICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICA8Q2FyZFRleHQ+XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9wb3N0P2lkPSR7cG9zdC5pZH1gfSBhcz17YC9ibG9nLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gZnVsbFdpZHRoPXt0cnVlfSBwcmltYXJ5PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb3N0LWxpbmtcIj5DbGljayB0byB2aWV3IHBvc3QhPC9hPlxuICAgICAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgPC9DYXJkPlxuICAgICkpfVxuICA8L2Rpdj5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtwcm9jZXNzLmVudi5CTE9HR0VSX1VSTH0/a2V5PSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6IGRhdGEuaXRlbXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNdWkoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), posts.map(function (post) {
    return _react2.default.createElement(_Card.Card, { key: post.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement(_Card.CardHeader, { title: post.title, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }), _react2.default.createElement(_Card.CardText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/post?id=' + post.id, as: '/blog/' + post.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, _react2.default.createElement(_RaisedButton2.default, { fullWidth: true, primary: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-506946288' + ' ' + 'post-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, 'Click to view post!')))));
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var response, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(process.env.BLOGGER_URL + '?key=' + process.env.API_KEY);

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', {
            posts: data.items
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

exports.default = (0, _withMUI2.default)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIndpdGhNdWkiLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRUZXh0IiwiUmFpc2VkQnV0dG9uIiwiTGluayIsIkluZGV4IiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkJMT0dHRVJfVVJMIiwiQVBJX0tFWSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEI7O0FBQ0EsQUFBUyxBQUFNLEFBQVk7O0FBQzNCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFFBQVEsU0FBUixBQUFRLFlBQUE7TUFBQSxBQUFHLGFBQUgsQUFBRzt5QkFDZixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxHQUFBO2FBQUE7U0FBQSxBQVVFO0FBVkYsc0JBVUUsQUFBQzs7Z0JBQUQ7a0JBVkYsQUFVRSxBQUNDO0FBREQ7QUFBQSxZQUNDLEFBQU0sSUFBSSxnQkFBQTsyQkFDVCxBQUFDLDRCQUFLLEtBQUssS0FBWCxBQUFnQjtrQkFBaEI7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyxrQ0FBVyxPQUFPLEtBQW5CLEFBQXdCO2tCQUF4QjtvQkFERixBQUNFLEFBQ0E7QUFEQTt3QkFDQSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxvQkFBa0IsS0FBakMsQUFBc0MsSUFBTSxlQUFhLEtBQXpELEFBQThEO2tCQUE5RDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsQUFBQyx3Q0FBYSxXQUFkLEFBQXlCLE1BQU0sU0FBL0I7a0JBQUE7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7eUNBQUEsQUFBYTs7a0JBQWI7b0JBQUE7QUFBQTtBQUFBLE9BTkMsQUFDVCxBQUVFLEFBQ0UsQUFDRSxBQUNFO0FBbEJBLEFBQ1osQUFXRztBQVpMOztBQTJCQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO2dCQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDQyxNQUNsQixRQUFBLEFBQVEsSUFEVSxBQUNOLHdCQUFtQixRQUFBLEFBQVEsSUFGdEIsQUFDQyxBQUN5Qjs7YUFEMUM7QUFEZ0IsOEJBQUE7MEJBQUE7aUJBSUgsU0FKRyxBQUlILEFBQVM7O2FBQXRCO0FBSmdCLDBCQUFBOzttQkFNYixLQU5hLEFBS2YsQUFDTztBQURQLEFBQ0w7O2FBTm9CO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4QixBQVVBOztrQkFBZSx1QkFBZixBQUFlLEFBQVEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXguYmVseWV1L0RvY3VtZW50cy9fUGVyc29uYWwvUHJvZ3JhbW1pbmcvc3NyLWVnZ2hlYWQifQ==