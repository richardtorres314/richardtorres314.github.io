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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "/mnt/c/Users/rtorr/documents/github/portfolio/components/about.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    box: {
      background: "linear-gradient(45deg, ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["green"][500], " 50%, ").concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["green"][200], " 50%)"),
      color: 'white'
    },
    header: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["blue"][500]
    }
  };
});
function About() {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 2,
    className: classes.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h2",
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 57
    }
  }, "Abo"), "ut Me"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, "Born in the bayous of Brooklyn, NY, I've devoted myself to being a life-long learner."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYm94IiwiYmFja2dyb3VuZCIsImdyZWVuIiwiY29sb3IiLCJoZWFkZXIiLCJibHVlIiwiQWJvdXQiLCJjbGFzc2VzIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxPQUFHLEVBQUU7QUFDSkMsZ0JBQVUsbUNBQTRCQyw4REFBSyxDQUFDLEdBQUQsQ0FBakMsbUJBQStDQSw4REFBSyxDQUFDLEdBQUQsQ0FBcEQsVUFETjtBQUVKQyxXQUFLLEVBQUU7QUFGSCxLQURtQztBQUt4Q0MsVUFBTSxFQUFFO0FBQ1BELFdBQUssRUFBRUUsNkRBQUksQ0FBQyxHQUFEO0FBREo7QUFMZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFVZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUVBLFNBQ0MsTUFBQyxxREFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQVcsYUFBUyxFQUFFVSxPQUFPLENBQUNQLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQVksZ0JBQVksTUFBeEI7QUFBeUIsV0FBTyxFQUFDLElBQWpDO0FBQXNDLE1BQUUsRUFBQyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlEO0FBQU0sYUFBUyxFQUFFTyxPQUFPLENBQUNILE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBakQsVUFERCxFQUVDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RkFGRCxDQURELENBREQsRUFPQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLFNBQUssRUFBRTtBQUFFSSxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQW1DLE9BQUcsRUFBQywrQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBUEQsQ0FERCxDQURELENBREQ7QUFpQkE7O0dBcEJ1QkYsSztVQUNQVCxTOzs7S0FET1MsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MDNiOWI0ZDM2MzkwYWQ3YTRkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdEF2YXRhcixcblx0Qm94LFxuXHRDYXJkLFxuXHRDYXJkQ29udGVudCxcblx0Q2FyZEhlYWRlcixcblx0Q29udGFpbmVyLFxuXHRHcmlkLFxuXHRtYWtlU3R5bGVzLFxuXHRQYXBlcixcblx0VHlwb2dyYXBoeVxuXHR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG5cdGJsdWUsXG5cdGdyZWVuLFxuXHRncmV5LFxuXHRyZWRcblx0fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0Ym94OiB7XG5cdFx0YmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHtncmVlbls1MDBdfSA1MCUsICR7Z3JlZW5bMjAwXX0gNTAlKWAsXG5cdFx0Y29sb3I6ICd3aGl0ZSdcblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0Y29sb3I6IGJsdWVbNTAwXVxuXHR9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Qm94IHA9ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8Qm94IHA9ezJ9PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImgyXCIgaWQ9XCJhYm91dFwiPjxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PkFibzwvc3Bhbj51dCBNZTwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+Qm9ybiBpbiB0aGUgYmF5b3VzIG9mIEJyb29rbHluLCBOWSwgSSd2ZSBkZXZvdGVkIG15c2VsZiB0byBiZWluZyBhIGxpZmUtbG9uZyBsZWFybmVyLjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyBtYXhXaWR0aDogJzM2MHB4JyB9fSBzcmM9XCJ1bmRyYXdfY29kZV90aGlua2luZ18xamVoLnN2Z1wiIC8+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=