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
      display: 'inline-block',
      '&:hover': {
        borderBottom: '2px solid white'
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
    box: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["red"][500]
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
        marginRight: '0.6em',
        '&::after': {
          content: "\"\u2022\"",
          position: 'absolute',
          fontSize: '1.5em',
          right: '-0.5rem',
          color: 'white',
          top: '0.5rem'
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
      lineNumber: 61,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.box,
    height: 196,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#about",
    className: classes.link,
    underline: "none",
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
  }, "About"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#skills",
    className: classes.link,
    underline: "none",
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
  }, "Skills"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#experience",
    className: classes.link,
    underline: "none",
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
  }, "Experience"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#contact",
    className: classes.link,
    underline: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 8
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: -14,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Richard Torres",
    src: "me.jpg",
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "Richard ", __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 53
    }
  }, "Torres")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    align: "center",
    className: classes.subheader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxhcmdlIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwibGluayIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImZvbnRWYXJpYW50IiwiaGVhZGVyIiwiYm94IiwiYmFja2dyb3VuZENvbG9yIiwicmVkIiwic3ViaGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsImxpbmtMaXN0IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsImNvbnRlbnQiLCJyaWdodCIsInRvcCIsIkhlYWRlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkLENBREQ7QUFFTkMsWUFBTSxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkO0FBRkYsS0FEaUM7QUFLeENFLFFBQUksRUFBRTtBQUNMQyxhQUFPLEVBQUUsY0FESjtBQUVMLGlCQUFXO0FBQ1ZDLG9CQUFZLEVBQUU7QUFESixPQUZOO0FBS0wsK0JBQXlCO0FBQ3hCQyxhQUFLLEVBQUUsT0FEaUI7QUFFeEJDLGtCQUFVLEVBQUUsR0FGWTtBQUd4QkMsZ0JBQVEsRUFBRSxFQUhjO0FBSXhCQyxtQkFBVyxFQUFFO0FBSlc7QUFMcEIsS0FMa0M7QUFpQnhDQyxVQUFNLEVBQUU7QUFDUEgsZ0JBQVUsRUFBRTtBQURMLEtBakJnQztBQW9CeENJLE9BQUcsRUFBRTtBQUNKQyxxQkFBZSxFQUFFQyw0REFBRyxDQUFDLEdBQUQ7QUFEaEIsS0FwQm1DO0FBdUJ4Q0Ms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RCxDQURELENBaEJELENBREQsQ0FERCxFQXlCQyxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQUMsRUFBVjtBQUFjLEtBQUMsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLGNBQVUsRUFBQyxRQUEvQjtBQUF3QyxpQkFBYSxFQUFDLFFBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHdEQUFEO0FBQVEsT0FBRyxFQUFDLGdCQUFaO0FBQTZCLE9BQUcsRUFBQyxRQUFqQztBQUEwQyxhQUFTLEVBQUVvQixPQUFPLENBQUN4QixLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOEM7QUFBTSxhQUFTLEVBQUV3QixPQUFPLENBQUNiLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBOUMsQ0FERCxFQUVDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLGFBQVMsRUFBRWEsT0FBTyxDQUFDVCxTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZELENBRkQsQ0FERCxDQXpCRCxDQUREO0FBcUNBOztHQXhDdUJRLE07VUFDUDFCLFM7OztLQURPMEIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGYyZmMwNjQ2NjU1YmI1YzhjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0QXZhdGFyLFxuXHRCb3gsXG5cdEdyaWQsXG5cdExpbmssXG5cdG1ha2VTdHlsZXMsXG5cdFR5cG9ncmFwaHlcblx0fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBibHVlLCBncmV5LCByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0bGFyZ2U6IHtcblx0XHR3aWR0aDogdGhlbWUuc3BhY2luZygyNCksXG5cdFx0aGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDI0KVxuXHR9LFxuXHRsaW5rOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHRib3JkZXJCb3R0b206ICcycHggc29saWQgd2hpdGUnXG5cdFx0fSxcblx0XHQnJiAuTXVpVHlwb2dyYXBoeS1yb290Jzoge1xuXHRcdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0XHRmb250U2l6ZTogMjQsXG5cdFx0XHRmb250VmFyaWFudDogJ3NtYWxsLWNhcHMnXG5cdFx0fVxuXHR9LFxuXHRoZWFkZXI6IHtcblx0XHRmb250V2VpZ2h0OiA3MDBcblx0fSxcblx0Ym94OiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiByZWRbNTAwXVxuXHR9LFxuXHRzdWJoZWFkZXI6IHtcblx0XHRmb250U2l6ZTogMjgsXG5cdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuXHRcdGNvbG9yOiByZWRbNTAwXVxuXHR9LFxuXHRsaW5rTGlzdDoge1xuXHRcdCcmIC5NdWlHcmlkLWl0ZW06bm90KDpsYXN0LWNoaWxkKSc6IHtcblx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdFx0bWFyZ2luUmlnaHQ6ICcwLjZlbScsXG5cdFx0XHQnJjo6YWZ0ZXInOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IGBcIuKAolwiYCxcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdGZvbnRTaXplOiAnMS41ZW0nLFxuXHRcdFx0XHRyaWdodDogJy0wLjVyZW0nLFxuXHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRcdFx0dG9wOiAnMC41cmVtJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0gaGVpZ2h0PXsxOTZ9IHA9ezJ9PlxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeT1cImZsZXgtZW5kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtMaXN0fT5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNhYm91dFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSB1bmRlcmxpbmU9XCJub25lXCI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkFib3V0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNza2lsbHNcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gdW5kZXJsaW5lPVwibm9uZVwiPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5Ta2lsbHM8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI2V4cGVyaWVuY2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gdW5kZXJsaW5lPVwibm9uZVwiPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5FeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHVuZGVybGluZT1cIm5vbmVcIj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+Q29udGFjdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvQm94PlxuXHRcdFx0PEJveCBtdD17LTE0fSBwPXsyfT5cblx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJSaWNoYXJkIFRvcnJlc1wiIHNyYz1cIm1lLmpwZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz5cblx0XHRcdFx0XHQ8Qm94IHB5PXsyfT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGd1dHRlckJvdHRvbT5SaWNoYXJkIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlRvcnJlczwvc3Bhbj48L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJoZWFkZXJ9PlNvZnR3YXJlIEVuZ2luZWVyPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQm94PlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9