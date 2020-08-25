webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "/mnt/c/Users/rtorr/documents/github/portfolio/components/header.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    large: {
      width: theme.spacing(24),
      height: theme.spacing(24)
    },
    link: {
      '&:hover': {
        textDecorationColor: 'white'
      },
      '& .MuiTypography-root': {
        color: 'white',
        fontWeight: 700,
        fontSize: 24,
        fontVariant: 'small-caps'
      }
    },
    header: {
      fontWeight: 700
    },
    subheader: {
      fontSize: 28,
      fontWeight: 400,
      textTransform: 'uppercase',
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["red"][500]
    },
    linkList: {
      '& > *': {
        content: 'Yo'
      }
    }
  };
});
function Header() {
  _s();

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bgcolor: "#2196f3",
    height: 196,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 1,
    justify: "flex-end",
    className: classes.linkList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#about",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, "About"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#skills",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, "Skills"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#experience",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, "Experience"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#contact",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: -14,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Richard Torres",
    src: "me.jpg",
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Richard ", __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 53
    }
  }, "Torres")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    align: "center",
    className: classes.subheader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "Software Engineer")))));
}

_s(Header, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxhcmdlIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwibGluayIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImZvbnRWYXJpYW50IiwiaGVhZGVyIiwic3ViaGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsInJlZCIsImxpbmtMaXN0IiwiY29udGVudCIsIkhlYWRlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkLENBREQ7QUFFTkMsWUFBTSxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkO0FBRkYsS0FEaUM7QUFLeENFLFFBQUksRUFBRTtBQUNMLGlCQUFXO0FBQ1ZDLDJCQUFtQixFQUFFO0FBRFgsT0FETjtBQUlMLCtCQUF5QjtBQUN4QkMsYUFBSyxFQUFFLE9BRGlCO0FBRXhCQyxrQkFBVSxFQUFFLEdBRlk7QUFHeEJDLGdCQUFRLEVBQUUsRUFIYztBQUl4QkMsbUJBQVcsRUFBRTtBQUpXO0FBSnBCLEtBTGtDO0FBZ0J4Q0MsVUFBTSxFQUFFO0FBQ1BILGdCQUFVLEVBQUU7QUFETCxLQWhCZ0M7QUFtQnhDSSxhQUFTLEVBQUU7QUFDVkgsY0FBUSxFQUFFLEVBREE7QUFFVkQsZ0JBQVUsRUFBRSxHQUZGO0FBR1ZLLG1CQUFhLEVBQUUsV0FITDtBQUlWTixXQUFLLEVBQUVPLDREQUFHLENBQUMsR0FBRDtBQUpBLEtBbkI2QjtBQXlCeENDLFlBQVEsRUFBRTtBQUNULGVBQVM7QUFD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O0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOEM7QUFBTSxhQUFTLEVBQUVpQixPQUFPLENBQUNQLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBOUMsQ0FERCxFQUVDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLGFBQVMsRUFBRU8sT0FBTyxDQUFDTixTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZELENBRkQsQ0FERCxDQXpCRCxDQUREO0FBcUNBOztHQXhDdUJLLE07VUFDUG5CLFM7OztLQURPbUIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NmFiNmZjOWMxZmVlZmVjNjg2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0QXZhdGFyLFxuXHRCb3gsXG5cdEdyaWQsXG5cdExpbmssXG5cdG1ha2VTdHlsZXMsXG5cdFR5cG9ncmFwaHlcblx0fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0bGFyZ2U6IHtcblx0XHR3aWR0aDogdGhlbWUuc3BhY2luZygyNCksXG5cdFx0aGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDI0KVxuXHR9LFxuXHRsaW5rOiB7XG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnd2hpdGUnXG5cdFx0fSxcblx0XHQnJiAuTXVpVHlwb2dyYXBoeS1yb290Jzoge1xuXHRcdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0XHRmb250U2l6ZTogMjQsXG5cdFx0XHRmb250VmFyaWFudDogJ3NtYWxsLWNhcHMnXG5cdFx0fVxuXHR9LFxuXHRoZWFkZXI6IHtcblx0XHRmb250V2VpZ2h0OiA3MDBcblx0fSxcblx0c3ViaGVhZGVyOiB7XG5cdFx0Zm9udFNpemU6IDI4LFxuXHRcdGZvbnRXZWlnaHQ6IDQwMCxcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcblx0XHRjb2xvcjogcmVkWzUwMF1cblx0fSxcblx0bGlua0xpc3Q6IHtcblx0XHQnJiA+IConOiB7XG5cdFx0XHRjb250ZW50OiAnWW8nXG5cdFx0fVxuXHR9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEJveCBiZ2NvbG9yPVwiIzIxOTZmM1wiIGhlaWdodD17MTk2fSBwPXsyfT5cblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGp1c3RpZnk9XCJmbGV4LWVuZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rTGlzdH0+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjYWJvdXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkFib3V0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNza2lsbHNcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlNraWxsczwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjZXhwZXJpZW5jZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+RXhwZXJpZW5jZTwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+Q29udGFjdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvQm94PlxuXHRcdFx0PEJveCBtdD17LTE0fSBwPXsyfT5cblx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJSaWNoYXJkIFRvcnJlc1wiIHNyYz1cIm1lLmpwZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz5cblx0XHRcdFx0XHQ8Qm94IHB5PXsyfT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGd1dHRlckJvdHRvbT5SaWNoYXJkIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlRvcnJlczwvc3Bhbj48L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJoZWFkZXJ9PlNvZnR3YXJlIEVuZ2luZWVyPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQm94PlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9