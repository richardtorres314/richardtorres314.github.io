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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");


var _jsxFileName = "/mnt/c/Users/rtorr/documents/github/portfolio/components/about.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    box: {
      borderLeft: "0.5em solid ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["red"][500])
    },
    headerColor: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["red"][500]
    },
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      order: 2
    }, theme.breakpoints.down('md'), {
      order: 1
    })
  };
});
function About() {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: true,
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    className: classes.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: classes.headerColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 46
    }
  }, "Abo"), "ut Me"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, "Born in the bayous of Brooklyn, NY, I've devoted myself to being a life-long learner. A former STEM teacher, I'm a firm believer in the power of education."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, "Working across the stack sparks joy, though I've been known to practice well the dark arts of front-end engineering."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYm94IiwiYm9yZGVyTGVmdCIsInJlZCIsImhlYWRlckNvbG9yIiwiY29sb3IiLCJjb250ZW50Iiwib3JkZXIiLCJicmVha3BvaW50cyIsImRvd24iLCJBYm91dCIsImNsYXNzZXMiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLE9BQUcsRUFBRTtBQUNKQyxnQkFBVSx3QkFBaUJDLDREQUFHLENBQUMsR0FBRCxDQUFwQjtBQUROLEtBRG1DO0FBSXhDQyxlQUFXLEVBQUU7QUFDWkMsV0FBSyxFQUFFRiw0REFBRyxDQUFDLEdBQUQ7QUFERSxLQUoyQjtBQU94Q0csV0FBTyxFQUFFO0FBQ1JDLFdBQUssRUFBRTtBQURELE9BRUxQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGSyxFQUUwQjtBQUMvQkYsV0FBSyxFQUFFO0FBRHdCLEtBRjFCO0FBUGlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBZWUsU0FBU0csS0FBVCxHQUFpQjtBQUFBOztBQUMvQixNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxTQUNDLE1BQUMscURBQUQ7QUFBSyxLQUFDLEVBQUUsQ0FBUjtBQUFXLE1BQUUsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFpQyxXQUFPLEVBQUUsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLE1BQWI7QUFBYyxhQUFTLEVBQUVhLE9BQU8sQ0FBQ0wsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBSyxLQUFDLEVBQUUsQ0FBUjtBQUFXLGFBQVMsRUFBRUssT0FBTyxDQUFDVixHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFZLGdCQUFZLE1BQXhCO0FBQXlCLFdBQU8sRUFBQyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDO0FBQU0sYUFBUyxFQUFFVSxPQUFPLENBQUNQLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdEMsVUFERCxFQUVDLE1BQUMsNERBQUQ7QUFBWSxnQkFBWSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1LQUZELEVBR0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRIQUhELENBREQsQ0FERCxFQVFDLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssU0FBSyxFQUFFO0FBQUVRLGNBQVEsRUFBRTtBQUFaLEtBQVo7QUFBbUMsT0FBRyxFQUFDLCtCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FSRCxDQURELENBREQsQ0FERDtBQWtCQTs7R0FyQnVCRixLO1VBQ1BaLFM7OztLQURPWSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmNDQ4ZmFiNmFiNjk0OWFhYjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0Qm94LFxuXHRDb250YWluZXIsXG5cdEdyaWQsXG5cdG1ha2VTdHlsZXMsXG5cdFR5cG9ncmFwaHlcblx0fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0Ym94OiB7XG5cdFx0Ym9yZGVyTGVmdDogYDAuNWVtIHNvbGlkICR7cmVkWzUwMF19YFxuXHR9LFxuXHRoZWFkZXJDb2xvcjoge1xuXHRcdGNvbG9yOiByZWRbNTAwXVxuXHR9LFxuXHRjb250ZW50OiB7XG5cdFx0b3JkZXI6IDIsXG5cdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG5cdFx0XHRvcmRlcjogMVxuXHRcdH1cblx0fVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwPXsyfSBpZD1cImFib3V0XCI+XG5cdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtIG1kIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cblx0XHRcdFx0XHRcdDxCb3ggcD17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDJcIj48c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQ29sb3J9PkFibzwvc3Bhbj51dCBNZTwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPkJvcm4gaW4gdGhlIGJheW91cyBvZiBCcm9va2x5biwgTlksIEkndmUgZGV2b3RlZCBteXNlbGYgdG8gYmVpbmcgYSBsaWZlLWxvbmcgbGVhcm5lci4gQSBmb3JtZXIgU1RFTSB0ZWFjaGVyLCBJJ20gYSBmaXJtIGJlbGlldmVyIGluIHRoZSBwb3dlciBvZiBlZHVjYXRpb24uPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5Xb3JraW5nIGFjcm9zcyB0aGUgc3RhY2sgc3BhcmtzIGpveSwgdGhvdWdoIEkndmUgYmVlbiBrbm93biB0byBwcmFjdGljZSB3ZWxsIHRoZSBkYXJrIGFydHMgb2YgZnJvbnQtZW5kIGVuZ2luZWVyaW5nLjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyBtYXhXaWR0aDogJzM2MHB4JyB9fSBzcmM9XCJ1bmRyYXdfY29kZV90aGlua2luZ18xamVoLnN2Z1wiIC8+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=