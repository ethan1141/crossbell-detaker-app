"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata */ \"(app-client)/./metadata.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction IndexPage() {\n    _s();\n    const [addUser, setAddUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [job, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [freelancers, setFreelancers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [userCount, setUserCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        md: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Detasker\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: _metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.slogan\n                            }, void 0, false, {\n                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Welcome to Detasker - the innovative online marketplace connecting people with professional services. Our platform uses cutting-edge technology to make task management easy and hassle-free. With Detasker, you can post a job, browse listings, and hire with confidence.\"\n                }, void 0, false, {\n                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            md: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Users: \",\n                                    userCount != -1 ? userCount : \"Loading...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            md: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Jobs: \",\n                                    job != -1 ? job : \"Loading...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            md: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Freelancers: \",\n                                    freelancers != -1 ? freelancers : \"Loading...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ethanrussell/Projects/web3/crossbell-app/src/app/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(IndexPage, \"YHeFWwbbLa6GcXQEH64WLcxLTKQ=\");\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBSWM7QUFDWjtBQUUzQixTQUFTTSxZQUFZOztJQUNsQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQVUsS0FBSztJQUNyRCxNQUFNLENBQUNRLEtBQUtDLFFBQVEsR0FBR1QsK0NBQVFBLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUMsQ0FBQztJQUM1QyxxQkFDRSw4REFBQ2M7a0JBQ0MsNEVBQUNaLHVEQUFTQTs7OEJBQ1IsOERBQUNDLHVEQUFHQTs4QkFDRiw0RUFBQ0YsdURBQUdBO3dCQUFDYyxFQUFFOzswQ0FDTCw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUliLHNEQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHeEIsOERBQUNlOzhCQUFFOzs7Ozs7OEJBT0gsOERBQUNoQix1REFBR0E7O3NDQUNGLDhEQUFDRix1REFBR0E7NEJBQUNjLEVBQUU7c0NBQ0wsNEVBQUNLOztvQ0FBRztvQ0FBUVIsYUFBYSxDQUFDLElBQUlBLFlBQVksWUFBWTs7Ozs7Ozs7Ozs7O3NDQUV4RCw4REFBQ1gsdURBQUdBOzRCQUFDYyxFQUFFO3NDQUNMLDRFQUFDSzs7b0NBQUc7b0NBQU9aLE9BQU8sQ0FBQyxJQUFJQSxNQUFNLFlBQVk7Ozs7Ozs7Ozs7OztzQ0FFM0MsOERBQUNQLHVEQUFHQTs0QkFBQ2MsRUFBRTtzQ0FDTCw0RUFBQ0s7O29DQUFHO29DQUNZVixlQUFlLENBQUMsSUFBSUEsY0FBYyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEMUUsQ0FBQztHQXBGdUJMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IG1ldGFkYXRhIH0gZnJvbSBcIi4uLy4uL21ldGFkYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcbiAgY29uc3QgW2FkZFVzZXIsIHNldEFkZFVzZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbam9iLCBzZXRKb2JzXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2ZyZWVsYW5jZXJzLCBzZXRGcmVlbGFuY2Vyc10gPSB1c2VTdGF0ZSgtMSk7XG4gIGNvbnN0IFt1c2VyQ291bnQsIHNldFVzZXJDb3VudF0gPSB1c2VTdGF0ZSgtMSk7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbWQ+XG4gICAgICAgICAgICA8aDE+RGV0YXNrZXI8L2gxPlxuICAgICAgICAgICAgPGg1PnttZXRhZGF0YS5zbG9nYW59PC9oNT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlbGNvbWUgdG8gRGV0YXNrZXIgLSB0aGUgaW5ub3ZhdGl2ZSBvbmxpbmUgbWFya2V0cGxhY2UgY29ubmVjdGluZ1xuICAgICAgICAgIHBlb3BsZSB3aXRoIHByb2Zlc3Npb25hbCBzZXJ2aWNlcy4gT3VyIHBsYXRmb3JtIHVzZXMgY3V0dGluZy1lZGdlXG4gICAgICAgICAgdGVjaG5vbG9neSB0byBtYWtlIHRhc2sgbWFuYWdlbWVudCBlYXN5IGFuZCBoYXNzbGUtZnJlZS4gV2l0aFxuICAgICAgICAgIERldGFza2VyLCB5b3UgY2FuIHBvc3QgYSBqb2IsIGJyb3dzZSBsaXN0aW5ncywgYW5kIGhpcmUgd2l0aFxuICAgICAgICAgIGNvbmZpZGVuY2UuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1kPlxuICAgICAgICAgICAgPGgyPlVzZXJzOiB7dXNlckNvdW50ICE9IC0xID8gdXNlckNvdW50IDogXCJMb2FkaW5nLi4uXCJ9PC9oMj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIG1kPlxuICAgICAgICAgICAgPGgyPkpvYnM6IHtqb2IgIT0gLTEgPyBqb2IgOiBcIkxvYWRpbmcuLi5cIn08L2gyPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEZyZWVsYW5jZXJzOiB7ZnJlZWxhbmNlcnMgIT0gLTEgPyBmcmVlbGFuY2VycyA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICB7aXNEaXNjb25uZWN0ZWQgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPllvdSBhcmUgZGlzY29ubmVjdGVkPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogcHJvZmlsZS5pZC50b051bWJlcigpID09PSAwID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgc2hvdz17YWRkVXNlcn1cbiAgICAgICAgICAgICAgY29uZmlnPXt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JlYXRlIGEgbmV3IHVzZXJcIixcbiAgICAgICAgICAgICAgICBiZWZvcmU6IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDcmVhdGVQcm9maWxlIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgdXNlclwiLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGRldGFza2VyIVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiMHg4MWU3MEFBRjc0NzVBYWJBNkQ5MTllM0E4ODliNkQ5NEM3OTJjOEEzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOZXdQcm9maWxlKCkgYXMgdW5rbm93biBhcyBEZXRhc2tlci5OZXdQcm9maWxlU3RydWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FzTGltaXQ6IDI1MDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRBZGRVc2VyKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFkZFVzZXIodHJ1ZSl9PkNyZWF0ZSBhIHVzZXI8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICBXZWxjb21lIGJhY2ssIHtwcm9maWxlLm5hbWUgIT09IFwiXCIgPyBwcm9maWxlLm5hbWUgOiBcIihubyBuYW1lKVwifVxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sIiwiQ29udGFpbmVyIiwiUm93IiwibWV0YWRhdGEiLCJJbmRleFBhZ2UiLCJhZGRVc2VyIiwic2V0QWRkVXNlciIsImpvYiIsInNldEpvYnMiLCJmcmVlbGFuY2VycyIsInNldEZyZWVsYW5jZXJzIiwidXNlckNvdW50Iiwic2V0VXNlckNvdW50IiwibWFpbiIsIm1kIiwiaDEiLCJoNSIsInNsb2dhbiIsInAiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});