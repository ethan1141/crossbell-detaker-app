"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"(app-client)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Nav */ \"(app-client)/./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"(app-client)/./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var _crossbell_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @crossbell/ui */ \"(app-client)/./node_modules/@crossbell/ui/dist/index.mjs\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata */ \"(app-client)/./metadata.tsx\");\n/* harmony import */ var _interfaces_ILink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces/ILink */ \"(app-client)/./src/components/interfaces/ILink.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-client)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _crossbell_connect_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @crossbell/connect-kit */ \"(app-client)/./node_modules/@crossbell/connect-kit/dist/index.mjs\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _crossbell_connect_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @crossbell/connect-kit */ \"(app-client)/./node_modules/@crossbell/react-account/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction BNavbar(props) {\n    _s();\n    const character = (0,_crossbell_connect_kit__WEBPACK_IMPORTED_MODULE_5__.useAccountCharacter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        expand: \"lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Brand, {\n                    href: \"/\",\n                    children: _metadata__WEBPACK_IMPORTED_MODULE_1__.metadata.name\n                }, void 0, false, {\n                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Toggle, {\n                    \"aria-controls\": \"basic-navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Collapse, {\n                    id: \"basic-navbar-nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"me-auto\",\n                            children: props.links.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                    href: (0,_interfaces_ILink__WEBPACK_IMPORTED_MODULE_2__.generateLink)(e),\n                                    children: e.name\n                                }, e.name.toLowerCase(), false, {\n                                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-3 my-lg-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_crossbell_connect_kit__WEBPACK_IMPORTED_MODULE_9__.ConnectButton, {\n                                children: (status, param)=>/*#__PURE__*/ {\n                                    let { connect , disconnect  } = param;\n                                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        onClick: status.isConnected ? disconnect : connect,\n                                        children: [\n                                            character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_crossbell_ui__WEBPACK_IMPORTED_MODULE_11__.CharacterAvatar, {\n                                                size: \"24px\",\n                                                character: character\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 21\n                                            }, this),\n                                            status.isConnected ? \"Disconnect\" : \"Connect\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/components/Navbar.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(BNavbar, \"kmpx6eVBRwJKpx4ntjrEMdDWUMk=\", false, function() {\n    return [\n        _crossbell_connect_kit__WEBPACK_IMPORTED_MODULE_5__.useAccountCharacter\n    ];\n});\n_c = BNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BNavbar);\nvar _c;\n$RefreshReg$(_c, \"BNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1o7QUFDTTtBQUNJO0FBRU47QUFDZTtBQUM1QjtBQUNpQjtBQUNTO0FBQ2Q7QUFDb0I7QUFDN0QsU0FBU1UsUUFBUUMsS0FBeUIsRUFBRTs7SUFDMUMsTUFBTUMsWUFBWUgsMkVBQW1CQTtJQUVyQyxxQkFDRSw4REFBQ1AsOERBQU1BO1FBQUNXLFFBQU87a0JBQ2IsNEVBQUNiLGlFQUFTQTs7OEJBQ1IsOERBQUNFLG9FQUFZO29CQUFDYSxNQUFLOzhCQUFLWCxvREFBYTs7Ozs7OzhCQUNyQyw4REFBQ0YscUVBQWE7b0JBQUNnQixpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ2hCLHVFQUFlO29CQUFDa0IsSUFBRzs7c0NBQ2xCLDhEQUFDbkIsMkRBQUdBOzRCQUFDb0IsV0FBVTtzQ0FDWlYsTUFBTVcsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2hCLDhEQUFDdkIsZ0VBQVE7b0NBQUNjLE1BQU1WLCtEQUFZQSxDQUFDbUI7OENBQzFCQSxFQUFFUixJQUFJO21DQUQ2QlEsRUFBRVIsSUFBSSxDQUFDUyxXQUFXOzs7Ozs7Ozs7O3NDQUs1RCw4REFBQ0M7NEJBQUlMLFdBQVU7c0NBQ2IsNEVBQUNkLGlFQUFhQTswQ0FDWCxDQUFDb0IsOEJBQ0E7d0NBRFEsRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUU7MkNBQy9CLDhEQUFDckIsd0RBQU1BO3dDQUFDc0IsU0FBU0gsT0FBT0ksV0FBVyxHQUFHRixhQUFhRCxPQUFPOzs0Q0FDdkRoQiwyQkFDQyw4REFBQ1QsMkRBQWVBO2dEQUFDNkIsTUFBSztnREFBT3BCLFdBQVdBOzs7Ozs7NENBRXpDZSxPQUFPSSxXQUFXLEdBQUcsZUFBZSxTQUFTOzs7Ozs7O2dDQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QjtHQWhDU3JCOztRQUNXRCx1RUFBbUJBOzs7S0FEOUJDO0FBa0NULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3g/OWE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJBdmF0YXIgfSBmcm9tIFwiQGNyb3NzYmVsbC91aVwiO1xuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcbmltcG9ydCB7IG1ldGFkYXRhIH0gZnJvbSBcIi4uLy4uL21ldGFkYXRhXCI7XG5pbXBvcnQgeyBJTGluaywgZ2VuZXJhdGVMaW5rIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9JTGlua1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkBjcm9zc2JlbGwvY29ubmVjdC1raXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZUFjY291bnRDaGFyYWN0ZXIgfSBmcm9tIFwiQGNyb3NzYmVsbC9jb25uZWN0LWtpdFwiO1xuZnVuY3Rpb24gQk5hdmJhcihwcm9wczogeyBsaW5rczogSUxpbmtbXSB9KSB7XG4gIGNvbnN0IGNoYXJhY3RlciA9IHVzZUFjY291bnRDaGFyYWN0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj57bWV0YWRhdGEubmFtZX08L05hdmJhci5CcmFuZD5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAge3Byb3BzLmxpbmtzLm1hcCgoZSkgPT4gKFxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj17Z2VuZXJhdGVMaW5rKGUpfSBrZXk9e2UubmFtZS50b0xvd2VyQ2FzZSgpfT5cbiAgICAgICAgICAgICAgICB7ZS5uYW1lfVxuICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIG15LWxnLTBcIj5cbiAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uPlxuICAgICAgICAgICAgICB7KHN0YXR1cywgeyBjb25uZWN0LCBkaXNjb25uZWN0IH0pID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N0YXR1cy5pc0Nvbm5lY3RlZCA/IGRpc2Nvbm5lY3QgOiBjb25uZWN0fT5cbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyQXZhdGFyIHNpemU9XCIyNHB4XCIgY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3N0YXR1cy5pc0Nvbm5lY3RlZCA/IFwiRGlzY29ubmVjdFwiIDogXCJDb25uZWN0XCJ9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Nvbm5lY3RCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJOYXZiYXI7XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwiQ2hhcmFjdGVyQXZhdGFyIiwibWV0YWRhdGEiLCJnZW5lcmF0ZUxpbmsiLCJMaW5rIiwiQ29ubmVjdEJ1dHRvbiIsIkJ1dHRvbiIsInVzZUFjY291bnRDaGFyYWN0ZXIiLCJCTmF2YmFyIiwicHJvcHMiLCJjaGFyYWN0ZXIiLCJleHBhbmQiLCJCcmFuZCIsImhyZWYiLCJuYW1lIiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJjbGFzc05hbWUiLCJsaW5rcyIsIm1hcCIsImUiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsInN0YXR1cyIsImNvbm5lY3QiLCJkaXNjb25uZWN0Iiwib25DbGljayIsImlzQ29ubmVjdGVkIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Navbar.tsx\n"));

/***/ })

});