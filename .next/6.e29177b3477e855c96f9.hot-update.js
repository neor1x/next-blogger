webpackHotUpdate(6,{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(425);

var _header2 = _interopRequireDefault(_header);

var _withMUI = __webpack_require__(450);

var _withMUI2 = _interopRequireDefault(_withMUI);

var _Card = __webpack_require__(488);

__webpack_require__(486);

var _RaisedButton = __webpack_require__(499);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = __webpack_require__(501);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alex.belyeu/Documents/_Personal/Programming/ssr-egghead/pages/post.js?entry',
    _this = undefined;

var Post = function Post(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Card.Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Card.CardHeader, { title: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_Card.CardText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_link2.default, { href: '/', as: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_RaisedButton2.default, { fullWidth: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Go back to blog'))))));
};

Post.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var id = _ref2.query.id;
    var response, data, title, content;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://www.googleapis.com/blogger/v3/blogs/2399953/posts" + '/' + id + '?key=' + "AIzaSyBJi6bNcYsGQo8HyF8CxzjjyUrsRX_kwKc");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            title = data.title;
            content = data.content;
            return _context.abrupt('return', { title: title, content: content });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = (0, _withMUI2.default)(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwid2l0aE1VSSIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRleHQiLCJSYWlzZWRCdXR0b24iLCJMaW5rIiwiUG9zdCIsInRpdGxlIiwiY29udGVudCIsIl9faHRtbCIsImdldEluaXRpYWxQcm9wcyIsImlkIiwicXVlcnkiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJCTE9HR0VSX1VSTCIsIkFQSV9LRVkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTSxBQUFZOztBQUMzQjs7QUFDQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxPQUFPLFNBQVAsQUFBTyxXQUFBO01BQUEsQUFBRyxhQUFILEFBQUc7TUFBSCxBQUFVLGVBQVYsQUFBVTt5QkFDckIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsa0NBQVcsT0FBWixBQUFtQjtnQkFBbkI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsNENBQ08seUJBQXlCLEVBQUUsUUFBaEMsQUFBOEIsQUFBVTtnQkFBeEM7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsS0FBSSxJQUFmLEFBQWtCO2dCQUFsQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyx3Q0FBYSxXQUFkO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FUQyxBQUNYLEFBRUUsQUFFRSxBQUVFLEFBQ0UsQUFDRTtBQVRaOztBQWlCQSxLQUFBLEFBQUssOEJBQUw7dUZBQXVCLHdCQUFBO1FBQUEsQUFBa0IsV0FBbEIsQUFBUyxNQUFULEFBQWtCOytCQUFsQjtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNFLE1BQ2xCLFFBQUEsQUFBUSxJQURVLEFBQ04sb0JBRE0sQUFDUyxlQUFVLFFBQUEsQUFBUSxJQUY3QixBQUNFLEFBQytCOztlQURoRDtBQURlLGdDQUFBOzRCQUFBO21CQUlGLFNBSkUsQUFJRixBQUFTOztlQUF0QjtBQUplLDRCQUtmO0FBTGUsb0JBS1AsS0FMTyxBQUtGLEFBQ2I7QUFOZSxzQkFNTCxLQU5LLEFBTUE7NkNBQ2QsRUFBRSxPQUFGLE9BQVMsU0FQSyxBQU9kOztlQVBjO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBdkI7O3VCQUFBOzZCQUFBO0FBQUE7QUFVQTs7a0JBQWUsdUJBQWYsQUFBZSxBQUFRIiwiZmlsZSI6InBvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXguYmVseWV1L0RvY3VtZW50cy9fUGVyc29uYWwvUHJvZ3JhbW1pbmcvc3NyLWVnZ2hlYWQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/alex.belyeu/Documents/_Personal/Programming/ssr-egghead/pages/post.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alex.belyeu/Documents/_Personal/Programming/ssr-egghead/pages/post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lMjkxNzdiMzQ3N2U4NTVjOTZmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz8wMWIzNjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHdpdGhNVUkgZnJvbSAnLi4vc2hhcmVkL3dpdGhNVUknO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRleHQgfSBmcm9tICdtYXRlcmlhbC11aS9DYXJkJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQb3N0ID0gKHsgdGl0bGUsIGNvbnRlbnQgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkZXIgLz5cbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDxDYXJkVGV4dD5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0gLz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz1cIi9ibG9nXCI+XG4gICAgICAgICAgPFJhaXNlZEJ1dHRvbiBmdWxsV2lkdGg+XG4gICAgICAgICAgICA8YT5HbyBiYWNrIHRvIGJsb2c8L2E+XG4gICAgICAgICAgPC9SYWlzZWRCdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQ2FyZFRleHQ+XG4gICAgPC9DYXJkPlxuICA8L2Rpdj5cbik7XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cHJvY2Vzcy5lbnYuQkxPR0dFUl9VUkx9LyR7aWR9P2tleT0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCB0aXRsZSA9IGRhdGEudGl0bGU7XG4gIGNvbnN0IGNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gIHJldHVybiB7IHRpdGxlLCBjb250ZW50IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTVVJKFBvc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcG9zdC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQUNBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=