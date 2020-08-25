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
      '& .MuiGrid-item:not(:last-child)': {
        position: 'relative',
        marginRight: '1em',
        '&::after': {
          content: "\"\u2022\"",
          position: 'absolute',
          right: '-0.5em',
          color: 'white',
          top: '1em'
        }
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
      lineNumber: 57,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bgcolor: "#2196f3",
    height: 196,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#about",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, "About"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#skills",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 8
    }
  }, "Skills"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#experience",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }
  }, "Experience"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#contact",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: -14,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Richard Torres",
    src: "me.jpg",
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Richard ", __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 53
    }
  }, "Torres")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    align: "center",
    className: classes.subheader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxhcmdlIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwibGluayIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImZvbnRWYXJpYW50IiwiaGVhZGVyIiwic3ViaGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsInJlZCIsImxpbmtMaXN0IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsImNvbnRlbnQiLCJyaWdodCIsInRvcCIsIkhlYWRlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkLENBREQ7QUFFTkMsWUFBTSxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkO0FBRkYsS0FEaUM7QUFLeENFLFFBQUksRUFBRTtBQUNMLGlCQUFXO0FBQ1ZDLDJCQUFtQixFQUFFO0FBRFgsT0FETjtBQUlMLCtCQUF5QjtBQUN4QkMsYUFBSyxFQUFFLE9BRGlCO0FBRXhCQyxrQkFBVSxFQUFFLEdBRlk7QUFHeEJDLGdCQUFRLEVBQUUsRUFIYztBQUl4QkMsbUJBQVcsRUFBRTtBQUpXO0FBSnBCLEtBTGtDO0FBZ0J4Q0MsVUFBTSxFQUFFO0FBQ1BILGdCQUFVLEVBQUU7QUFETCxLQWhCZ0M7QUFtQnhDSSxhQUFTLEVBQUU7QUFDVkgsY0FBUSxFQUFFLEVBREE7QUFFVkQsZ0JBQVUsRUFBRSxHQUZGO0FBR1ZLLG1CQUFhLEVBQUUsV0FITDtBQUlWTixXQUFLLEVBQUVPLDREQUFHLENBQUMsR0FBRDtBQUpB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QSxLQUNDLE1BQUMsd0RBQUQ7QUFBUSxPQUFHLEVBQUMsZ0JBQVo7QUFBNkIsT0FBRyxFQUFDLFFBQWpDO0FBQTBDLGFBQVMsRUFBRWlCLE9BQU8sQ0FBQ3JCLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4QztBQUFNLGFBQVMsRUFBRXFCLE9BQU8sQ0FBQ1gsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE5QyxDQURELEVBRUMsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBd0MsYUFBUyxFQUFFVyxPQUFPLENBQUNWLFNBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkQsQ0FGRCxDQURELENBekJELENBREQ7QUFxQ0E7O0dBeEN1QlMsTTtVQUNQdkIsUzs7O0tBRE91QixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmOTE2NGNkZGQxODIyZWE1NWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRBdmF0YXIsXG5cdEJveCxcblx0R3JpZCxcblx0TGluayxcblx0bWFrZVN0eWxlcyxcblx0VHlwb2dyYXBoeVxuXHR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5pbXBvcnQgeyByZWxhdGl2ZSB9IGZyb20gJ3BhdGgnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0bGFyZ2U6IHtcblx0XHR3aWR0aDogdGhlbWUuc3BhY2luZygyNCksXG5cdFx0aGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDI0KVxuXHR9LFxuXHRsaW5rOiB7XG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnd2hpdGUnXG5cdFx0fSxcblx0XHQnJiAuTXVpVHlwb2dyYXBoeS1yb290Jzoge1xuXHRcdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0XHRmb250U2l6ZTogMjQsXG5cdFx0XHRmb250VmFyaWFudDogJ3NtYWxsLWNhcHMnXG5cdFx0fVxuXHR9LFxuXHRoZWFkZXI6IHtcblx0XHRmb250V2VpZ2h0OiA3MDBcblx0fSxcblx0c3ViaGVhZGVyOiB7XG5cdFx0Zm9udFNpemU6IDI4LFxuXHRcdGZvbnRXZWlnaHQ6IDQwMCxcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcblx0XHRjb2xvcjogcmVkWzUwMF1cblx0fSxcblx0bGlua0xpc3Q6IHtcblx0XHQnJiAuTXVpR3JpZC1pdGVtOm5vdCg6bGFzdC1jaGlsZCknOiB7XG5cdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRcdG1hcmdpblJpZ2h0OiAnMWVtJyxcblx0XHRcdCcmOjphZnRlcic6IHtcblx0XHRcdFx0Y29udGVudDogYFwi4oCiXCJgLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0cmlnaHQ6ICctMC41ZW0nLFxuXHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRcdFx0dG9wOiAnMWVtJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxCb3ggYmdjb2xvcj1cIiMyMTk2ZjNcIiBoZWlnaHQ9ezE5Nn0gcD17Mn0+XG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBqdXN0aWZ5PVwiZmxleC1lbmRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua0xpc3R9PlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI2Fib3V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5BYm91dDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjc2tpbGxzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5Ta2lsbHM8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI2V4cGVyaWVuY2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkV4cGVyaWVuY2U8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkNvbnRhY3Q8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHQ8L0JveD5cblx0XHRcdDxCb3ggbXQ9ey0xNH0gcD17Mn0+XG5cdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuXHRcdFx0XHRcdDxBdmF0YXIgYWx0PVwiUmljaGFyZCBUb3JyZXNcIiBzcmM9XCJtZS5qcGdcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2V9IC8+XG5cdFx0XHRcdFx0PEJveCBweT17Mn0+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBndXR0ZXJCb3R0b20+UmljaGFyZCA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5Ub3JyZXM8L3NwYW4+PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3ViaGVhZGVyfT5Tb2Z0d2FyZSBFbmdpbmVlcjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==