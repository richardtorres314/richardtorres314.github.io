webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about.tsx":
/*!******************************!*\
  !*** ./components/about.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/mnt/c/Users/rtorr/documents/github/portfolio/components/about.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    box: {
      background: "linear-gradient(45deg, ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][500], " 50%, ").concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][200], " 50%)"),
      color: 'white'
    },
    header: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["yellow"][500]
    }
  };
});
function About() {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    className: classes.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h2",
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 57
    }
  }, "Abo"), "ut Me"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, "Born in the bayous of Brooklyn, NY, I've devoted myself to being a life-long learner."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, __jsx("img", {
    style: {
      maxWidth: '360px'
    },
    src: "undraw_code_thinking_1jeh.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })))));
}

_s(About, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = About;

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYm94IiwiYmFja2dyb3VuZCIsImdyZWVuIiwiY29sb3IiLCJoZWFkZXIiLCJ5ZWxsb3ciLCJBYm91dCIsImNsYXNzZXMiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLE9BQUcsRUFBRTtBQUNKQyxnQkFBVSxtQ0FBNEJDLDhEQUFLLENBQUMsR0FBRCxDQUFqQyxtQkFBK0NBLDhEQUFLLENBQUMsR0FBRCxDQUFwRCxVQUROO0FBRUpDLFdBQUssRUFBRTtBQUZILEtBRG1DO0FBS3hDQyxVQUFNLEVBQUU7QUFDUEQsV0FBSyxFQUFFRSwrREFBTSxDQUFDLEdBQUQ7QUFETjtBQUxnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVVlLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRUEsU0FDQyxNQUFDLHFEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBVyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1AsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBWSxnQkFBWSxNQUF4QjtBQUF5QixXQUFPLEVBQUMsSUFBakM7QUFBc0MsTUFBRSxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUQ7QUFBTSxhQUFTLEVBQUVPLE9BQU8sQ0FBQ0gsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFqRCxVQURELEVBRUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZGQUZELENBREQsQ0FERCxFQU9DLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssU0FBSyxFQUFFO0FBQUVJLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBbUMsT0FBRyxFQUFDLCtCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FQRCxDQURELENBREQsQ0FERDtBQWlCQTs7R0FwQnVCRixLO1VBQ1BULFM7OztLQURPUyxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjNDZiZjU3OGRmNzA3OGQ4ZTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0Ymx1ZSxcblx0Z3JlZW4sXG5cdHJlZCxcblx0eWVsbG93XG5cdH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcbmltcG9ydCB7XG5cdEJveCxcblx0Q29udGFpbmVyLFxuXHRHcmlkLFxuXHRtYWtlU3R5bGVzLFxuXHRUeXBvZ3JhcGh5XG5cdH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0Ym94OiB7XG5cdFx0YmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHtncmVlbls1MDBdfSA1MCUsICR7Z3JlZW5bMjAwXX0gNTAlKWAsXG5cdFx0Y29sb3I6ICd3aGl0ZSdcblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0Y29sb3I6IHllbGxvd1s1MDBdXG5cdH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3ggcD17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxCb3ggcD17Mn0+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDJcIiBpZD1cImFib3V0XCI+PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+QWJvPC9zcGFuPnV0IE1lPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5Cb3JuIGluIHRoZSBiYXlvdXMgb2YgQnJvb2tseW4sIE5ZLCBJJ3ZlIGRldm90ZWQgbXlzZWxmIHRvIGJlaW5nIGEgbGlmZS1sb25nIGxlYXJuZXIuPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7IG1heFdpZHRoOiAnMzYwcHgnIH19IHNyYz1cInVuZHJhd19jb2RlX3RoaW5raW5nXzFqZWguc3ZnXCIgLz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==