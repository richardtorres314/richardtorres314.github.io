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
        marginRight: '0.6em',
        '&::after': {
          content: "\"\u2022\"",
          position: 'absolute',
          fontSize: '1.5em',
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
      lineNumber: 58,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bgcolor: "#2196f3",
    height: 196,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#about",
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
  }, "About"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#skills",
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
  }, "Skills"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#experience",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 8
    }
  }, "Experience"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#contact",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: -14,
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Richard Torres",
    src: "me.jpg",
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "Richard ", __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 53
    }
  }, "Torres")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    align: "center",
    className: classes.subheader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxhcmdlIiwid2lkdGgiLCJzcGFjaW5nIiwiaGVpZ2h0IiwibGluayIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImZvbnRWYXJpYW50IiwiaGVhZGVyIiwic3ViaGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsInJlZCIsImxpbmtMaXN0IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsImNvbnRlbnQiLCJyaWdodCIsInRvcCIsIkhlYWRlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkLENBREQ7QUFFTkMsWUFBTSxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBYyxFQUFkO0FBRkYsS0FEaUM7QUFLeENFLFFBQUksRUFBRTtBQUNMLGlCQUFXO0FBQ1ZDLDJCQUFtQixFQUFFO0FBRFgsT0FETjtBQUlMLCtCQUF5QjtBQUN4QkMsYUFBSyxFQUFFLE9BRGlCO0FBRXhCQyxrQkFBVSxFQUFFLEdBRlk7QUFHeEJDLGdCQUFRLEVBQUUsRUFIYztBQUl4QkMsbUJBQVcsRUFBRTtBQUpXO0FBSnBCLEtBTGtDO0FBZ0J4Q0MsVUFBTSxFQUFFO0FBQ1BILGdCQUFVLEVBQUU7QUFETCxLQWhCZ0M7QUFtQnhDSSxhQUFTLEVBQUU7QUFDVkgsY0FBUSxFQUFFLEVBREE7QUFFVkQsZ0JBQVUsRUFBRSxHQUZGO0FBR1ZLLG1CQUFhLEVBQUUsV0FITDtBQUlWTixXQUFLLEVBQUVPLDREQUFHLENBQUMsR0FBRDtBQUpB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHdEQUFEO0FBQVEsT0FBRyxFQUFDLGdCQUFaO0FBQTZCLE9BQUcsRUFBQyxRQUFqQztBQUEwQyxhQUFTLEVBQUVpQixPQUFPLENBQUNyQixLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOEM7QUFBTSxhQUFTLEVBQUVxQixPQUFPLENBQUNYLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBOUMsQ0FERCxFQUVDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLGFBQVMsRUFBRVcsT0FBTyxDQUFDVixTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZELENBRkQsQ0FERCxDQXpCRCxDQUREO0FBcUNBOztHQXhDdUJTLE07VUFDUHZCLFM7OztLQURPdUIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZDI5NWFhNGY2NGMwZjI2YTZkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0QXZhdGFyLFxuXHRCb3gsXG5cdEdyaWQsXG5cdExpbmssXG5cdG1ha2VTdHlsZXMsXG5cdFR5cG9ncmFwaHlcblx0fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuaW1wb3J0IHsgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG5cdGxhcmdlOiB7XG5cdFx0d2lkdGg6IHRoZW1lLnNwYWNpbmcoMjQpLFxuXHRcdGhlaWdodDogdGhlbWUuc3BhY2luZygyNClcblx0fSxcblx0bGluazoge1xuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0dGV4dERlY29yYXRpb25Db2xvcjogJ3doaXRlJ1xuXHRcdH0sXG5cdFx0JyYgLk11aVR5cG9ncmFwaHktcm9vdCc6IHtcblx0XHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdFx0Zm9udFdlaWdodDogNzAwLFxuXHRcdFx0Zm9udFNpemU6IDI0LFxuXHRcdFx0Zm9udFZhcmlhbnQ6ICdzbWFsbC1jYXBzJ1xuXHRcdH1cblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0Zm9udFdlaWdodDogNzAwXG5cdH0sXG5cdHN1YmhlYWRlcjoge1xuXHRcdGZvbnRTaXplOiAyOCxcblx0XHRmb250V2VpZ2h0OiA0MDAsXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG5cdFx0Y29sb3I6IHJlZFs1MDBdXG5cdH0sXG5cdGxpbmtMaXN0OiB7XG5cdFx0JyYgLk11aUdyaWQtaXRlbTpub3QoOmxhc3QtY2hpbGQpJzoge1xuXHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHRtYXJnaW5SaWdodDogJzAuNmVtJyxcblx0XHRcdCcmOjphZnRlcic6IHtcblx0XHRcdFx0Y29udGVudDogYFwi4oCiXCJgLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0Zm9udFNpemU6ICcxLjVlbScsXG5cdFx0XHRcdHJpZ2h0OiAnLTAuNWVtJyxcblx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0XHRcdHRvcDogJzFlbSdcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8Qm94IGJnY29sb3I9XCIjMjE5NmYzXCIgaGVpZ2h0PXsxOTZ9IHA9ezJ9PlxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeT1cImZsZXgtZW5kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtMaXN0fT5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNhYm91dFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+QWJvdXQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI3NraWxsc1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+U2tpbGxzPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNleHBlcmllbmNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5FeHBlcmllbmNlPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5Db250YWN0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0PC9Cb3g+XG5cdFx0XHQ8Qm94IG10PXstMTR9IHA9ezJ9PlxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cblx0XHRcdFx0XHQ8QXZhdGFyIGFsdD1cIlJpY2hhcmQgVG9ycmVzXCIgc3JjPVwibWUuanBnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfSAvPlxuXHRcdFx0XHRcdDxCb3ggcHk9ezJ9PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgZ3V0dGVyQm90dG9tPlJpY2hhcmQgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+VG9ycmVzPC9zcGFuPjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YmhlYWRlcn0+U29mdHdhcmUgRW5naW5lZXI8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=