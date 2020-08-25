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
    content: {
      order: 2,
      root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('md'), {
        order: 1
      })
    }
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
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: true,
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    className: classes.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: classes.headerColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 46
    }
  }, "Abo"), "ut Me"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, "Born in the bayous of Brooklyn, NY, I've devoted myself to being a life-long learner. A former STEM teacher, I'm a firm believer in the power of education."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 8
    }
  }, "Working across the stack sparks joy, though I've been known to practice well the dark arts of front-end engineering."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYm94IiwiYm9yZGVyTGVmdCIsInJlZCIsImhlYWRlckNvbG9yIiwiY29sb3IiLCJjb250ZW50Iiwib3JkZXIiLCJyb290IiwiYnJlYWtwb2ludHMiLCJ1cCIsIkFib3V0IiwiY2xhc3NlcyIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsT0FBRyxFQUFFO0FBQ0pDLGdCQUFVLHdCQUFpQkMsNERBQUcsQ0FBQyxHQUFELENBQXBCO0FBRE4sS0FEbUM7QUFJeENDLGVBQVcsRUFBRTtBQUNaQyxXQUFLLEVBQUVGLDREQUFHLENBQUMsR0FBRDtBQURFLEtBSjJCO0FBT3hDRyxXQUFPLEVBQUU7QUFDUkMsV0FBSyxFQUFFLENBREM7QUFFUkMsVUFBSSxFQUFFLDhGQUNKUixLQUFLLENBQUNTLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBREUsRUFDMkI7QUFDN0JILGFBQUssRUFBRTtBQURzQixPQUQzQjtBQUZJO0FBUCtCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBaUJlLFNBQVNJLEtBQVQsR0FBaUI7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBRUEsU0FDQyxNQUFDLHFEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBVyxNQUFFLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsUUFBeEI7QUFBaUMsV0FBTyxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxNQUFiO0FBQWMsYUFBUyxFQUFFYyxPQUFPLENBQUNOLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBVyxhQUFTLEVBQUVNLE9BQU8sQ0FBQ1gsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBWSxnQkFBWSxNQUF4QjtBQUF5QixXQUFPLEVBQUMsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQztBQUFNLGFBQVMsRUFBRVcsT0FBTyxDQUFDUixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRDLFVBREQsRUFFQyxNQUFDLDREQUFEO0FBQVksZ0JBQVksTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FGRCxFQUdDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0SEFIRCxDQURELENBREQsRUFRQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLFNBQUssRUFBRTtBQUFFUyxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQW1DLE9BQUcsRUFBQywrQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBUkQsQ0FERCxDQURELENBREQ7QUFrQkE7O0dBckJ1QkYsSztVQUNQYixTOzs7S0FET2EsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNmYyYzE2YzY2NWY3ZDViNDJlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdEJveCxcblx0Q29udGFpbmVyLFxuXHRHcmlkLFxuXHRtYWtlU3R5bGVzLFxuXHRUeXBvZ3JhcGh5XG5cdH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG5cdGJveDoge1xuXHRcdGJvcmRlckxlZnQ6IGAwLjVlbSBzb2xpZCAke3JlZFs1MDBdfWBcblx0fSxcblx0aGVhZGVyQ29sb3I6IHtcblx0XHRjb2xvcjogcmVkWzUwMF1cblx0fSxcblx0Y29udGVudDoge1xuXHRcdG9yZGVyOiAyLFxuXHRcdHJvb3Q6IHtcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcblx0XHRcdFx0b3JkZXI6IDFcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3ggcD17Mn0gaWQ9XCJhYm91dFwiPlxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbSBtZCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG5cdFx0XHRcdFx0XHQ8Qm94IHA9ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImgyXCI+PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckNvbG9yfT5BYm88L3NwYW4+dXQgTWU8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5Cb3JuIGluIHRoZSBiYXlvdXMgb2YgQnJvb2tseW4sIE5ZLCBJJ3ZlIGRldm90ZWQgbXlzZWxmIHRvIGJlaW5nIGEgbGlmZS1sb25nIGxlYXJuZXIuIEEgZm9ybWVyIFNURU0gdGVhY2hlciwgSSdtIGEgZmlybSBiZWxpZXZlciBpbiB0aGUgcG93ZXIgb2YgZWR1Y2F0aW9uLjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+V29ya2luZyBhY3Jvc3MgdGhlIHN0YWNrIHNwYXJrcyBqb3ksIHRob3VnaCBJJ3ZlIGJlZW4ga25vd24gdG8gcHJhY3RpY2Ugd2VsbCB0aGUgZGFyayBhcnRzIG9mIGZyb250LWVuZCBlbmdpbmVlcmluZy48L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6ICczNjBweCcgfX0gc3JjPVwidW5kcmF3X2NvZGVfdGhpbmtpbmdfMWplaC5zdmdcIiAvPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9