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
      '& .MuiGrid-item': {
        position: 'relative'
      },
      '& .MuiGrid-item:not(:last-child)::after': {
        content: "\"\u2022\"",
        position: 'absolute',
        right: '-0.5em',
        color: 'white',
        top: '1em'
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
      lineNumber: 56,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bgcolor: "#2196f3",
    height: 196,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#about",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "About"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#skills",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, "Skills"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#experience",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 8
    }
  }, "Experience"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#contact",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: -14,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Richard Torres",
    src: "me.jpg",
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "Richard ", __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 53
    }
  }, "Torres")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    align: "center",
    className: classes.subheader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxhcmdlIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwibGluayIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImZvbnRWYXJpYW50IiwiaGVhZGVyIiwic3ViaGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsInJlZCIsImxpbmtMaXN0IiwicG9zaXRpb24iLCJjb250ZW50IiwicmlnaHQiLCJ0b3AiLCJIZWFkZXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsU0FBSyxFQUFFO0FBQ05DLFdBQUssRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsRUFBZCxDQUREO0FBRU5DLFlBQU0sRUFBRUosS0FBSyxDQUFDRyxPQUFOLENBQWMsRUFBZDtBQUZGLEtBRGlDO0FBS3hDRSxRQUFJLEVBQUU7QUFDTCxpQkFBVztBQUNWQywyQkFBbUIsRUFBRTtBQURYLE9BRE47QUFJTCwrQkFBeUI7QUFDeEJDLGFBQUssRUFBRSxPQURpQjtBQUV4QkMsa0JBQVUsRUFBRSxHQUZZO0FBR3hCQyxnQkFBUSxFQUFFLEVBSGM7QUFJeEJDLG1CQUFXLEVBQUU7QUFKVztBQUpwQixLQUxrQztBQWdCeENDLFVBQU0sRUFBRTtBQUNQSCxnQkFBVSxFQUFFO0FBREwsS0FoQmdDO0FBbUJ4Q0ksYUFBUyxFQUFFO0FBQ1ZILGNBQVEsRUFBRSxFQURBO0FBRVZELGdCQUFVLEVBQUUsR0FGRjtBQUdWSyxtQkFBYSxFQUFFLFdBSEw7QUFJVk4sV0FBSyxFQUFFTyw0REFBRyxDQUFDLEdBQUQ7QUFKQSxLQW5CNkI7QUF5QnhD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QyxnQkFBWjtBQUE2QixPQUFHLEVBQUMsUUFBakM7QUFBMEMsYUFBUyxFQUFFZ0IsT0FBTyxDQUFDcEIsS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQThDO0FBQU0sYUFBUyxFQUFFb0IsT0FBTyxDQUFDVixNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQTlDLENBREQsRUFFQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUF3QyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1QsU0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRCxDQUZELENBREQsQ0F6QkQsQ0FERDtBQXFDQTs7R0F4Q3VCUSxNO1VBQ1B0QixTOzs7S0FET3NCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTk3YjU5YzQyOTIyNWZjNGNjYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdEF2YXRhcixcblx0Qm94LFxuXHRHcmlkLFxuXHRMaW5rLFxuXHRtYWtlU3R5bGVzLFxuXHRUeXBvZ3JhcGh5XG5cdH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcbmltcG9ydCB7IHJlbGF0aXZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuXHRsYXJnZToge1xuXHRcdHdpZHRoOiB0aGVtZS5zcGFjaW5nKDI0KSxcblx0XHRoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMjQpXG5cdH0sXG5cdGxpbms6IHtcblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uQ29sb3I6ICd3aGl0ZSdcblx0XHR9LFxuXHRcdCcmIC5NdWlUeXBvZ3JhcGh5LXJvb3QnOiB7XG5cdFx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHRcdGZvbnRTaXplOiAyNCxcblx0XHRcdGZvbnRWYXJpYW50OiAnc21hbGwtY2Fwcydcblx0XHR9XG5cdH0sXG5cdGhlYWRlcjoge1xuXHRcdGZvbnRXZWlnaHQ6IDcwMFxuXHR9LFxuXHRzdWJoZWFkZXI6IHtcblx0XHRmb250U2l6ZTogMjgsXG5cdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuXHRcdGNvbG9yOiByZWRbNTAwXVxuXHR9LFxuXHRsaW5rTGlzdDoge1xuXHRcdCcmIC5NdWlHcmlkLWl0ZW0nOiB7XG5cdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuXHRcdH0sXG5cdFx0JyYgLk11aUdyaWQtaXRlbTpub3QoOmxhc3QtY2hpbGQpOjphZnRlcic6IHtcblx0XHRcdGNvbnRlbnQ6IGBcIuKAolwiYCxcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0cmlnaHQ6ICctMC41ZW0nLFxuXHRcdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0XHR0b3A6ICcxZW0nXG5cdFx0fVxuXHR9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEJveCBiZ2NvbG9yPVwiIzIxOTZmM1wiIGhlaWdodD17MTk2fSBwPXsyfT5cblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGp1c3RpZnk9XCJmbGV4LWVuZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rTGlzdH0+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjYWJvdXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkFib3V0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNza2lsbHNcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlNraWxsczwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjZXhwZXJpZW5jZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+RXhwZXJpZW5jZTwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+Q29udGFjdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvQm94PlxuXHRcdFx0PEJveCBtdD17LTE0fSBwPXsyfT5cblx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJSaWNoYXJkIFRvcnJlc1wiIHNyYz1cIm1lLmpwZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz5cblx0XHRcdFx0XHQ8Qm94IHB5PXsyfT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGd1dHRlckJvdHRvbT5SaWNoYXJkIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlRvcnJlczwvc3Bhbj48L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJoZWFkZXJ9PlNvZnR3YXJlIEVuZ2luZWVyPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQm94PlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9