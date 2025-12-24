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
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_env.BASE_PUBLIC_URL, "/users")));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.data);

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getUsers = getUsers;
//# sourceMappingURL=api.dev.js.map
