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

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BarChart */ \"(app-pages-browser)/./src/components/BarChart.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"(app-pages-browser)/./src/components/Card.tsx\");\n/* harmony import */ var _components_CreateArtical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CreateArtical */ \"(app-pages-browser)/./src/components/CreateArtical.tsx\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ \"(app-pages-browser)/./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/dollar-sign.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layers-3.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users-round.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user-cog.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst carDummyData = [\n    {\n        label: \"Total Revenue\",\n        articles: \"$251,00.55\",\n        discription: \"+35% from last month\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        label: \"Total Articals\",\n        articles: \"+525\",\n        discription: \"Total Articals\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        label: \"Subcriptions\",\n        user: \"310\",\n        discription: \"+25% Subcriptions\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        label: \"Current User Live\",\n        user: \"+100\",\n        discription: \"+19% Current User Live\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }\n];\nconst createArticleData = [\n    {\n        name: \"Himanshu jain\",\n        email: \"jain@gmail.com\",\n        numberOfArticle: 10\n    },\n    {\n        name: \"Depanshu Tyagi\",\n        email: \"tyagi@gmail.com\",\n        numberOfArticle: 24\n    },\n    {\n        name: \"Ritik sharma\",\n        email: \"sharma@gmail.com\",\n        numberOfArticle: 12\n    },\n    {\n        name: \"Neha Tiwari\",\n        email: \"tiwari@gmail.com\",\n        numberOfArticle: 14\n    },\n    {\n        name: \"Purvaj Patel\",\n        email: \"patel@gmail.com\",\n        numberOfArticle: 12\n    },\n    {\n        name: \"Rituraj Patel\",\n        email: \"Rituraj@gmail.com\",\n        numberOfArticle: 24\n    }\n];\nfunction Dashboard() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_4___default().init({\n            duration: 1000\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center gap-5 w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"text-3xl font\",\n                title: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid w-full grid-cols-1 gap-x-8 gap-5   transition-all sm:grid-cols-2 xl:grid-cols-4\",\n                children: carDummyData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        \"data-aos\": \"flip-up\",\n                        discription: data.discription,\n                        icon: data.icon,\n                        user: data.user,\n                        label: data.label,\n                        articles: data.articles\n                    }, i, false, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid-cols-1 grid gap-4 transition-all lg:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-4 font-semibold\",\n                                children: \"Overview\"\n                            }, void 0, false, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"color-red-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BarChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"flex justify-between gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Recent Articles\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400\",\n                                        children: \"Artical created this month\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            createArticleData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateArtical__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    name: data.name,\n                                    email: data.email,\n                                    numberOfArticle: data.numberOfArticle\n                                }, void 0, false, {\n                                    fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDb0I7QUFDYTtBQUN4RDtBQUV5QjtBQUV5QjtBQUN0QztBQUVsQyxNQUFNVyxlQUE0QjtJQUNoQztRQUNFQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxNQUFNVCxpSEFBVUE7SUFDbEI7SUFDQTtRQUNFTSxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxNQUFNUixpSEFBT0E7SUFDZjtJQUNBO1FBQ0VLLE9BQU87UUFDUEksTUFBTTtRQUNORixhQUFhO1FBQ2JDLE1BQU1OLGlIQUFVQTtJQUNsQjtJQUNBO1FBQ0VHLE9BQU87UUFDUEksTUFBTTtRQUNORixhQUFhO1FBQ2JDLE1BQU1QLGtIQUFPQTtJQUNmO0NBQ0Q7QUFDRCxNQUFNUyxvQkFBeUM7SUFDN0M7UUFDRUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGlCQUFpQjtJQUNuQjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGlCQUFpQjtJQUNuQjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0NBQ0Q7QUFFYyxTQUFTQzs7SUFDdEJYLGdEQUFTQSxDQUFDO1FBQ1JOLCtDQUFRLENBQUM7WUFDUG1CLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEIsNkRBQVNBO2dCQUFDb0IsV0FBVTtnQkFBZ0JDLE9BQU07Ozs7OzswQkFDM0MsOERBQUNDO2dCQUFRRixXQUFVOzBCQUNoQmQsYUFBYWlCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDdkIsOERBQUM3Qix3REFBSUE7d0JBQ0g4QixZQUFTO3dCQUVUakIsYUFBYWUsS0FBS2YsV0FBVzt3QkFDN0JDLE1BQU1jLEtBQUtkLElBQUk7d0JBQ2ZDLE1BQU1hLEtBQUtiLElBQUk7d0JBQ2ZKLE9BQU9pQixLQUFLakIsS0FBSzt3QkFDakJDLFVBQVVnQixLQUFLaEIsUUFBUTt1QkFMbEJpQjs7Ozs7Ozs7OzswQkFTWCw4REFBQ0g7Z0JBQVFGLFdBQVU7O2tDQUNqQiw4REFBQ3ZCLHlEQUFXQTt3QkFBQ3VCLFdBQVk7OzBDQUN2Qiw4REFBQ087Z0NBQUVQLFdBQVU7MENBQW9COzs7Ozs7MENBQ2pDLDhEQUFDUTtnQ0FBS1IsV0FBVTswQ0FDZCw0RUFBQ3pCLDREQUFRQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHYiw4REFBQ0UseURBQVdBO3dCQUFDdUIsV0FBVTs7MENBQ3JCLDhEQUFDRTs7a0RBQ0MsOERBQUNLO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFUCxXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7OzRCQUV0Q1Isa0JBQWtCVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQzVCLDhEQUFDM0IsaUVBQWFBO29DQUNaZSxNQUFNVyxLQUFLWCxJQUFJO29DQUNmQyxPQUFPVSxLQUFLVixLQUFLO29DQUNqQkMsaUJBQWlCUyxLQUFLVCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkQ7R0E3Q3dCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCJAL2FwcC9sb2dpbi9wYWdlXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9CYXJDaGFydFwiO1xuaW1wb3J0IENhcmQsIHsgQ2FyZENvbnRlbnQsIENhcmRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZUFydGljYWwsIHsgY3JlYXRlQXJ0aWNsZURhdGEgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NyZWF0ZUFydGljYWxcIjtcbmltcG9ydCBBb3MgZnJvbSBcImFvc1wiO1xuXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZVRpdGxlXCI7XG5cbmltcG9ydCB7IERvbGxhclNpZ24sIExheWVyczMsIFVzZXJDb2csIFVzZXJzUm91bmQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2FyRHVtbXlEYXRhOiBDYXJkUHJvcHNbXSA9IFtcbiAge1xuICAgIGxhYmVsOiBcIlRvdGFsIFJldmVudWVcIixcbiAgICBhcnRpY2xlczogXCIkMjUxLDAwLjU1XCIsXG4gICAgZGlzY3JpcHRpb246IFwiKzM1JSBmcm9tIGxhc3QgbW9udGhcIixcbiAgICBpY29uOiBEb2xsYXJTaWduLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiVG90YWwgQXJ0aWNhbHNcIixcbiAgICBhcnRpY2xlczogXCIrNTI1XCIsXG4gICAgZGlzY3JpcHRpb246IFwiVG90YWwgQXJ0aWNhbHNcIixcbiAgICBpY29uOiBMYXllcnMzLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiU3ViY3JpcHRpb25zXCIsXG4gICAgdXNlcjogXCIzMTBcIixcbiAgICBkaXNjcmlwdGlvbjogXCIrMjUlIFN1YmNyaXB0aW9uc1wiLFxuICAgIGljb246IFVzZXJzUm91bmQsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJDdXJyZW50IFVzZXIgTGl2ZVwiLFxuICAgIHVzZXI6IFwiKzEwMFwiLFxuICAgIGRpc2NyaXB0aW9uOiBcIisxOSUgQ3VycmVudCBVc2VyIExpdmVcIixcbiAgICBpY29uOiBVc2VyQ29nLFxuICB9LFxuXTtcbmNvbnN0IGNyZWF0ZUFydGljbGVEYXRhOiBjcmVhdGVBcnRpY2xlRGF0YVtdID0gW1xuICB7XG4gICAgbmFtZTogXCJIaW1hbnNodSBqYWluXCIsXG4gICAgZW1haWw6IFwiamFpbkBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDEwLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXBhbnNodSBUeWFnaVwiLFxuICAgIGVtYWlsOiBcInR5YWdpQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMjQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJpdGlrIHNoYXJtYVwiLFxuICAgIGVtYWlsOiBcInNoYXJtYUBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDEyLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOZWhhIFRpd2FyaVwiLFxuICAgIGVtYWlsOiBcInRpd2FyaUBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDE0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQdXJ2YWogUGF0ZWxcIixcbiAgICBlbWFpbDogXCJwYXRlbEBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDEyLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSaXR1cmFqIFBhdGVsXCIsXG4gICAgZW1haWw6IFwiUml0dXJhakBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDI0LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFvcy5pbml0KHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZ2FwLTUgdy1mdWxsIFwiPlxuICAgICAgPFBhZ2VUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250XCIgdGl0bGU9XCJEYXNoYm9hcmRcIiAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTEgZ2FwLXgtOCBnYXAtNSAgIHRyYW5zaXRpb24tYWxsIHNtOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy00XCI+XG4gICAgICAgIHtjYXJEdW1teURhdGEubWFwKChkYXRhLCBpKSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmxpcC11cFwiXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBkaXNjcmlwdGlvbj17ZGF0YS5kaXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGljb249e2RhdGEuaWNvbn1cbiAgICAgICAgICAgIHVzZXI9e2RhdGEudXNlcn1cbiAgICAgICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICAgICAgYXJ0aWNsZXM9e2RhdGEuYXJ0aWNsZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkLWNvbHMtMSBncmlkIGdhcC00IHRyYW5zaXRpb24tYWxsIGxnOmdyaWQtY29scy0yXCI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2BiZy13aGl0ZWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCBmb250LXNlbWlib2xkXCI+T3ZlcnZpZXc8L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItcmVkLTQwMFwiPlxuICAgICAgICAgICAgPEJhckNoYXJ0IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPlJlY2VudCBBcnRpY2xlczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMFwiPkFydGljYWwgY3JlYXRlZCB0aGlzIG1vbnRoPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICB7Y3JlYXRlQXJ0aWNsZURhdGEubWFwKChkYXRhLCBpKSA9PiAoXG4gICAgICAgICAgICA8Q3JlYXRlQXJ0aWNhbFxuICAgICAgICAgICAgICBuYW1lPXtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgIGVtYWlsPXtkYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBudW1iZXJPZkFydGljbGU9e2RhdGEubnVtYmVyT2ZBcnRpY2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCYXJDaGFydCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNyZWF0ZUFydGljYWwiLCJBb3MiLCJQYWdlVGl0bGUiLCJEb2xsYXJTaWduIiwiTGF5ZXJzMyIsIlVzZXJDb2ciLCJVc2Vyc1JvdW5kIiwidXNlRWZmZWN0IiwiY2FyRHVtbXlEYXRhIiwibGFiZWwiLCJhcnRpY2xlcyIsImRpc2NyaXB0aW9uIiwiaWNvbiIsInVzZXIiLCJjcmVhdGVBcnRpY2xlRGF0YSIsIm5hbWUiLCJlbWFpbCIsIm51bWJlck9mQXJ0aWNsZSIsIkRhc2hib2FyZCIsImluaXQiLCJkdXJhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic2VjdGlvbiIsIm1hcCIsImRhdGEiLCJpIiwiZGF0YS1hb3MiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});