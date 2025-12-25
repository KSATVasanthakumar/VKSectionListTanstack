"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _env = require("@env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUsers = function getUsers() {
  var response, data;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(_env.BASE_PUBLIC_URL);
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_env.BASE_PUBLIC_URL, "/todos")));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.data);

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getUsers = getUsers;
//# sourceMappingURL=api.dev.js.map
