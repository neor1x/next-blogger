'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _withMUI = require('../shared/withMUI');

var _withMUI2 = _interopRequireDefault(_withMUI);

var _Card = require('material-ui/Card');

require('isomorphic-fetch');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = require('next/dist/lib/link.js');

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
            return fetch(process.env.BLOGGER_URL + '/' + id + '?key=' + process.env.API_KEY);

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