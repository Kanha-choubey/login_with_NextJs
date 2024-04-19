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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BarChart */ \"(app-pages-browser)/./src/components/BarChart.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"(app-pages-browser)/./src/components/Card.tsx\");\n/* harmony import */ var _components_CreateArtical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CreateArtical */ \"(app-pages-browser)/./src/components/CreateArtical.tsx\");\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/dollar-sign.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layers-3.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users-round.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user-cog.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst carDummyData = [\n    {\n        label: \"Total Revenue\",\n        articles: \"$251,00.55\",\n        discription: \"+35% from last month\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        label: \"Total Articals\",\n        articles: \"+525\",\n        discription: \"Total Articals\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        label: \"Subcriptions\",\n        user: \"310\",\n        discription: \"+25% Subcriptions\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        label: \"Current User Live\",\n        user: \"+100\",\n        discription: \"+19% Current User Live\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n];\nconst createArticleData = [\n    {\n        name: \"Himanshu jain\",\n        email: \"jain@gmail.com\",\n        numberOfArticle: 10\n    },\n    {\n        name: \"Depanshu Tyagi\",\n        email: \"tyagi@gmail.com\",\n        numberOfArticle: 24\n    },\n    {\n        name: \"Ritik sharma\",\n        email: \"sharma@gmail.com\",\n        numberOfArticle: 12\n    },\n    {\n        name: \"Neha Tiwari\",\n        email: \"tiwari@gmail.com\",\n        numberOfArticle: 14\n    },\n    {\n        name: \"Purvaj Patel\",\n        email: \"patel@gmail.com\",\n        numberOfArticle: 12\n    },\n    {\n        name: \"Rituraj Patel\",\n        email: \"Rituraj@gmail.com\",\n        numberOfArticle: 24\n    }\n];\nfunction Dashboard() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center gap-5 w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid w-full grid-cols-1 gap-x-8 gap-  transition-all sm:grid-cols-2 xl:grid-cols-4\",\n                children: carDummyData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        discription: data.discription,\n                        icon: data.icon,\n                        user: data.user,\n                        label: data.label,\n                        articles: data.articles\n                    }, i, false, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid-cols-1 grid gap-4 transition-all lg:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-4 font-semibold\",\n                                children: \"Overview\"\n                            }, void 0, false, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"color-red-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BarChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"flex justify-between gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Recent Articles\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400\",\n                                        children: \"Artical created this month\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            createArticleData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateArtical__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    name: data.name,\n                                    email: data.email,\n                                    numberOfArticle: data.numberOfArticle\n                                }, void 0, false, {\n                                    fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ29CO0FBQ2E7QUFFL0I7QUFFeUI7QUFFeEUsTUFBTVMsZUFBNEI7SUFDaEM7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTVIsaUhBQVVBO0lBQ2xCO0lBQ0E7UUFDRUssT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTVAsaUhBQU9BO0lBQ2Y7SUFDQTtRQUNFSSxPQUFPO1FBQ1BJLE1BQU07UUFDTkYsYUFBYTtRQUNiQyxNQUFNTCxpSEFBVUE7SUFDbEI7SUFDQTtRQUNFRSxPQUFPO1FBQ1BJLE1BQU07UUFDTkYsYUFBYTtRQUNiQyxNQUFNTixpSEFBT0E7SUFDZjtDQUNEO0FBQ0QsTUFBTVEsb0JBQXlDO0lBQzdDO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGlCQUFpQjtJQUNuQjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGlCQUFpQjtJQUNuQjtDQUNEO0FBRWMsU0FBU0M7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakIsNkRBQVNBO2dCQUFDa0IsT0FBTTs7Ozs7OzBCQUNqQiw4REFBQ0M7Z0JBQVFGLFdBQVU7MEJBQ2hCWixhQUFhZSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ3ZCLDhEQUFDekIsd0RBQUlBO3dCQUVIVyxhQUFhYSxLQUFLYixXQUFXO3dCQUM3QkMsTUFBTVksS0FBS1osSUFBSTt3QkFDZkMsTUFBTVcsS0FBS1gsSUFBSTt3QkFDZkosT0FBT2UsS0FBS2YsS0FBSzt3QkFDakJDLFVBQVVjLEtBQUtkLFFBQVE7dUJBTGxCZTs7Ozs7Ozs7OzswQkFTWCw4REFBQ0g7Z0JBQVFGLFdBQVU7O2tDQUNqQiw4REFBQ25CLHlEQUFXQTt3QkFBQ21CLFdBQVk7OzBDQUN2Qiw4REFBQ007Z0NBQUVOLFdBQVU7MENBQW9COzs7Ozs7MENBQ2pDLDhEQUFDTztnQ0FBS1AsV0FBVTswQ0FDZCw0RUFBQ3JCLDREQUFRQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHYiw4REFBQ0UseURBQVdBO3dCQUFDbUIsV0FBVTs7MENBQ3JCLDhEQUFDRTs7a0RBQ0MsOERBQUNJO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFTixXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7OzRCQUV0Q04sa0JBQWtCUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQzVCLDhEQUFDdkIsaUVBQWFBO29DQUNaYSxNQUFNUyxLQUFLVCxJQUFJO29DQUNmQyxPQUFPUSxLQUFLUixLQUFLO29DQUNqQkMsaUJBQWlCTyxLQUFLUCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkQ7S0F2Q3dCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCJAL2FwcC9sb2dpbi9wYWdlXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9CYXJDaGFydFwiO1xuaW1wb3J0IENhcmQsIHsgQ2FyZENvbnRlbnQsIENhcmRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZUFydGljYWwsIHsgY3JlYXRlQXJ0aWNsZURhdGEgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NyZWF0ZUFydGljYWxcIjtcblxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VUaXRsZVwiO1xuXG5pbXBvcnQgeyBEb2xsYXJTaWduLCBMYXllcnMzLCBVc2VyQ29nLCBVc2Vyc1JvdW5kIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBjYXJEdW1teURhdGE6IENhcmRQcm9wc1tdID0gW1xuICB7XG4gICAgbGFiZWw6IFwiVG90YWwgUmV2ZW51ZVwiLFxuICAgIGFydGljbGVzOiBcIiQyNTEsMDAuNTVcIixcbiAgICBkaXNjcmlwdGlvbjogXCIrMzUlIGZyb20gbGFzdCBtb250aFwiLFxuICAgIGljb246IERvbGxhclNpZ24sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJUb3RhbCBBcnRpY2Fsc1wiLFxuICAgIGFydGljbGVzOiBcIis1MjVcIixcbiAgICBkaXNjcmlwdGlvbjogXCJUb3RhbCBBcnRpY2Fsc1wiLFxuICAgIGljb246IExheWVyczMsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJTdWJjcmlwdGlvbnNcIixcbiAgICB1c2VyOiBcIjMxMFwiLFxuICAgIGRpc2NyaXB0aW9uOiBcIisyNSUgU3ViY3JpcHRpb25zXCIsXG4gICAgaWNvbjogVXNlcnNSb3VuZCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkN1cnJlbnQgVXNlciBMaXZlXCIsXG4gICAgdXNlcjogXCIrMTAwXCIsXG4gICAgZGlzY3JpcHRpb246IFwiKzE5JSBDdXJyZW50IFVzZXIgTGl2ZVwiLFxuICAgIGljb246IFVzZXJDb2csXG4gIH0sXG5dO1xuY29uc3QgY3JlYXRlQXJ0aWNsZURhdGE6IGNyZWF0ZUFydGljbGVEYXRhW10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhpbWFuc2h1IGphaW5cIixcbiAgICBlbWFpbDogXCJqYWluQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMTAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRlcGFuc2h1IFR5YWdpXCIsXG4gICAgZW1haWw6IFwidHlhZ2lAZ21haWwuY29tXCIsXG4gICAgbnVtYmVyT2ZBcnRpY2xlOiAyNCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUml0aWsgc2hhcm1hXCIsXG4gICAgZW1haWw6IFwic2hhcm1hQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMTIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5laGEgVGl3YXJpXCIsXG4gICAgZW1haWw6IFwidGl3YXJpQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMTQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlB1cnZhaiBQYXRlbFwiLFxuICAgIGVtYWlsOiBcInBhdGVsQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMTIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJpdHVyYWogUGF0ZWxcIixcbiAgICBlbWFpbDogXCJSaXR1cmFqQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMjQsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC01IHctZnVsbCBcIj5cbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9XCJEYXNoYm9hcmRcIiAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTEgZ2FwLXgtOCBnYXAtICB0cmFuc2l0aW9uLWFsbCBzbTpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtNFwiPlxuICAgICAgICB7Y2FyRHVtbXlEYXRhLm1hcCgoZGF0YSwgaSkgPT4gKFxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBkaXNjcmlwdGlvbj17ZGF0YS5kaXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGljb249e2RhdGEuaWNvbn1cbiAgICAgICAgICAgIHVzZXI9e2RhdGEudXNlcn1cbiAgICAgICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICAgICAgYXJ0aWNsZXM9e2RhdGEuYXJ0aWNsZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkLWNvbHMtMSBncmlkIGdhcC00IHRyYW5zaXRpb24tYWxsIGxnOmdyaWQtY29scy0yXCI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2BiZy13aGl0ZWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCBmb250LXNlbWlib2xkXCI+T3ZlcnZpZXc8L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItcmVkLTQwMFwiPlxuICAgICAgICAgICAgPEJhckNoYXJ0IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPlJlY2VudCBBcnRpY2xlczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMFwiPkFydGljYWwgY3JlYXRlZCB0aGlzIG1vbnRoPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICB7Y3JlYXRlQXJ0aWNsZURhdGEubWFwKChkYXRhLCBpKSA9PiAoXG4gICAgICAgICAgICA8Q3JlYXRlQXJ0aWNhbFxuICAgICAgICAgICAgICBuYW1lPXtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgIGVtYWlsPXtkYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBudW1iZXJPZkFydGljbGU9e2RhdGEubnVtYmVyT2ZBcnRpY2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCYXJDaGFydCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNyZWF0ZUFydGljYWwiLCJQYWdlVGl0bGUiLCJEb2xsYXJTaWduIiwiTGF5ZXJzMyIsIlVzZXJDb2ciLCJVc2Vyc1JvdW5kIiwiY2FyRHVtbXlEYXRhIiwibGFiZWwiLCJhcnRpY2xlcyIsImRpc2NyaXB0aW9uIiwiaWNvbiIsInVzZXIiLCJjcmVhdGVBcnRpY2xlRGF0YSIsIm5hbWUiLCJlbWFpbCIsIm51bWJlck9mQXJ0aWNsZSIsIkRhc2hib2FyZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic2VjdGlvbiIsIm1hcCIsImRhdGEiLCJpIiwicCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});