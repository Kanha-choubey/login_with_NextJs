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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BarChart */ \"(app-pages-browser)/./src/components/BarChart.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"(app-pages-browser)/./src/components/Card.tsx\");\n/* harmony import */ var _components_CreateArtical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CreateArtical */ \"(app-pages-browser)/./src/components/CreateArtical.tsx\");\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/dollar-sign.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layers-3.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users-round.js\");\n/* harmony import */ var _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=DollarSign,Layers3,UserCog,UsersRound!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user-cog.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst carDummyData = [\n    {\n        label: \"Total Revenue\",\n        articles: \"$251,00.55\",\n        discription: \"+35% from last month\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        label: \"Total Articals\",\n        articles: \"+525\",\n        discription: \"Total Articals\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        label: \"Subcriptions\",\n        user: \"310\",\n        discription: \"+25% Subcriptions\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        label: \"Current User Live\",\n        user: \"+100\",\n        discription: \"+19% Current User Live\",\n        icon: _barrel_optimize_names_DollarSign_Layers3_UserCog_UsersRound_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n];\nconst createArticleData = [\n    {\n        name: \"Himanshu jain\",\n        email: \"jain@gmail.com\",\n        numberOfArticle: 10\n    },\n    {\n        name: \"Depanshu Tyagi\",\n        email: \"tyagi@gmail.com\",\n        numberOfArticle: 24\n    },\n    {\n        name: \"Ritik sharma\",\n        email: \"sharma@gmail.com\"\n    },\n    {\n        name: \"Neha Tiwari\",\n        email: \"tiwari@gmail.com\",\n        numberOfArticle: 14\n    },\n    {\n        name: \"Purvaj Patel\",\n        email: \"patel@gmail.com\",\n        numberOfArticle: 12\n    },\n    {\n        name: \"Rituraj Patel\",\n        email: \"Rituraj@gmail.com\",\n        numberOfArticle: 24\n    }\n];\nfunction Dashboard() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:w-screen-xl justify-center gap-5  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid w-full grid-cols-1 gap-x-8 gap-4  transition-all sm:grid-cols-2 xl:grid-cols-4\",\n                children: carDummyData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        discription: data.discription,\n                        icon: data.icon,\n                        user: data.user,\n                        label: data.label,\n                        articles: data.articles\n                    }, i, false, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid-cols-1 grid gap-4 transition-all lg:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-4 font-semibold\",\n                                children: \"Overview\"\n                            }, void 0, false, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BarChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"flex justify-between gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Recent Articles\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400\",\n                                        children: \"Artical created this month\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            createArticleData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateArtical__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    name: data.name,\n                                    email: data.email,\n                                    numberOfArticle: data.numberOfArticle\n                                }, void 0, false, {\n                                    fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kanha/Desktop/nextJS'/src/app/dashboard/page.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ29CO0FBQ2E7QUFFL0I7QUFFeUI7QUFFeEUsTUFBTVMsZUFBNEI7SUFDaEM7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTVIsaUhBQVVBO0lBQ2xCO0lBQ0E7UUFDRUssT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTVAsaUhBQU9BO0lBQ2Y7SUFDQTtRQUNFSSxPQUFPO1FBQ1BJLE1BQU07UUFDTkYsYUFBYTtRQUNiQyxNQUFNTCxpSEFBVUE7SUFDbEI7SUFDQTtRQUNFRSxPQUFPO1FBQ1BJLE1BQU07UUFDTkYsYUFBYTtRQUNiQyxNQUFNTixpSEFBT0E7SUFDZjtDQUNEO0FBQ0QsTUFBTVEsb0JBQXlDO0lBQzdDO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxpQkFBaUI7SUFDbkI7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGlCQUFpQjtJQUNuQjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxpQkFBaUI7SUFDbkI7Q0FDRDtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pCLDZEQUFTQTtnQkFBQ2tCLE9BQU07Ozs7OzswQkFDakIsOERBQUNDO2dCQUFRRixXQUFVOzBCQUNoQlosYUFBYWUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLGtCQUN2Qiw4REFBQ3pCLHdEQUFJQTt3QkFFSFcsYUFBYWEsS0FBS2IsV0FBVzt3QkFDN0JDLE1BQU1ZLEtBQUtaLElBQUk7d0JBQ2ZDLE1BQU1XLEtBQUtYLElBQUk7d0JBQ2ZKLE9BQU9lLEtBQUtmLEtBQUs7d0JBQ2pCQyxVQUFVYyxLQUFLZCxRQUFRO3VCQUxsQmU7Ozs7Ozs7Ozs7MEJBU1gsOERBQUNIO2dCQUFRRixXQUFVOztrQ0FDakIsOERBQUNuQix5REFBV0E7OzBDQUNWLDhEQUFDeUI7Z0NBQUVOLFdBQVU7MENBQW9COzs7Ozs7MENBQ2pDLDhEQUFDckIsNERBQVFBOzs7Ozs7Ozs7OztrQ0FFWCw4REFBQ0UseURBQVdBO3dCQUFDbUIsV0FBVTs7MENBQ3JCLDhEQUFDRTs7a0RBQ0MsOERBQUNJO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFTixXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7OzRCQUV0Q04sa0JBQWtCUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQzVCLDhEQUFDdkIsaUVBQWFBO29DQUNaYSxNQUFNUyxLQUFLVCxJQUFJO29DQUNmQyxPQUFPUSxLQUFLUixLQUFLO29DQUNqQkMsaUJBQWlCTyxLQUFLUCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkQ7S0FyQ3dCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCJAL2FwcC9sb2dpbi9wYWdlXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9CYXJDaGFydFwiO1xuaW1wb3J0IENhcmQsIHsgQ2FyZENvbnRlbnQsIENhcmRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZUFydGljYWwsIHsgY3JlYXRlQXJ0aWNsZURhdGEgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NyZWF0ZUFydGljYWxcIjtcblxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VUaXRsZVwiO1xuXG5pbXBvcnQgeyBEb2xsYXJTaWduLCBMYXllcnMzLCBVc2VyQ29nLCBVc2Vyc1JvdW5kIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBjYXJEdW1teURhdGE6IENhcmRQcm9wc1tdID0gW1xuICB7XG4gICAgbGFiZWw6IFwiVG90YWwgUmV2ZW51ZVwiLFxuICAgIGFydGljbGVzOiBcIiQyNTEsMDAuNTVcIixcbiAgICBkaXNjcmlwdGlvbjogXCIrMzUlIGZyb20gbGFzdCBtb250aFwiLFxuICAgIGljb246IERvbGxhclNpZ24sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJUb3RhbCBBcnRpY2Fsc1wiLFxuICAgIGFydGljbGVzOiBcIis1MjVcIixcbiAgICBkaXNjcmlwdGlvbjogXCJUb3RhbCBBcnRpY2Fsc1wiLFxuICAgIGljb246IExheWVyczMsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJTdWJjcmlwdGlvbnNcIixcbiAgICB1c2VyOiBcIjMxMFwiLFxuICAgIGRpc2NyaXB0aW9uOiBcIisyNSUgU3ViY3JpcHRpb25zXCIsXG4gICAgaWNvbjogVXNlcnNSb3VuZCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkN1cnJlbnQgVXNlciBMaXZlXCIsXG4gICAgdXNlcjogXCIrMTAwXCIsXG4gICAgZGlzY3JpcHRpb246IFwiKzE5JSBDdXJyZW50IFVzZXIgTGl2ZVwiLFxuICAgIGljb246IFVzZXJDb2csXG4gIH0sXG5dO1xuY29uc3QgY3JlYXRlQXJ0aWNsZURhdGE6IGNyZWF0ZUFydGljbGVEYXRhW10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhpbWFuc2h1IGphaW5cIixcbiAgICBlbWFpbDogXCJqYWluQGdtYWlsLmNvbVwiLFxuICAgIG51bWJlck9mQXJ0aWNsZTogMTAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRlcGFuc2h1IFR5YWdpXCIsXG4gICAgZW1haWw6IFwidHlhZ2lAZ21haWwuY29tXCIsXG4gICAgbnVtYmVyT2ZBcnRpY2xlOiAyNCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUml0aWsgc2hhcm1hXCIsXG4gICAgZW1haWw6IFwic2hhcm1hQGdtYWlsLmNvbVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOZWhhIFRpd2FyaVwiLFxuICAgIGVtYWlsOiBcInRpd2FyaUBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDE0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQdXJ2YWogUGF0ZWxcIixcbiAgICBlbWFpbDogXCJwYXRlbEBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDEyLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSaXR1cmFqIFBhdGVsXCIsXG4gICAgZW1haWw6IFwiUml0dXJhakBnbWFpbC5jb21cIixcbiAgICBudW1iZXJPZkFydGljbGU6IDI0LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDp3LXNjcmVlbi14bCBqdXN0aWZ5LWNlbnRlciBnYXAtNSAgXCI+XG4gICAgICA8UGFnZVRpdGxlIHRpdGxlPVwiRGFzaGJvYXJkXCIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGdyaWQtY29scy0xIGdhcC14LTggZ2FwLTQgIHRyYW5zaXRpb24tYWxsIHNtOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy00XCI+XG4gICAgICAgIHtjYXJEdW1teURhdGEubWFwKChkYXRhLCBpKSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGRpc2NyaXB0aW9uPXtkYXRhLmRpc2NyaXB0aW9ufVxuICAgICAgICAgICAgaWNvbj17ZGF0YS5pY29ufVxuICAgICAgICAgICAgdXNlcj17ZGF0YS51c2VyfVxuICAgICAgICAgICAgbGFiZWw9e2RhdGEubGFiZWx9XG4gICAgICAgICAgICBhcnRpY2xlcz17ZGF0YS5hcnRpY2xlc31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQtY29scy0xIGdyaWQgZ2FwLTQgdHJhbnNpdGlvbi1hbGwgbGc6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCBmb250LXNlbWlib2xkXCI+T3ZlcnZpZXc8L3A+XG4gICAgICAgICAgPEJhckNoYXJ0IC8+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHA+UmVjZW50IEFydGljbGVzPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+QXJ0aWNhbCBjcmVhdGVkIHRoaXMgbW9udGg8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIHtjcmVhdGVBcnRpY2xlRGF0YS5tYXAoKGRhdGEsIGkpID0+IChcbiAgICAgICAgICAgIDxDcmVhdGVBcnRpY2FsXG4gICAgICAgICAgICAgIG5hbWU9e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgZW1haWw9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG51bWJlck9mQXJ0aWNsZT17ZGF0YS5udW1iZXJPZkFydGljbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJhckNoYXJ0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ3JlYXRlQXJ0aWNhbCIsIlBhZ2VUaXRsZSIsIkRvbGxhclNpZ24iLCJMYXllcnMzIiwiVXNlckNvZyIsIlVzZXJzUm91bmQiLCJjYXJEdW1teURhdGEiLCJsYWJlbCIsImFydGljbGVzIiwiZGlzY3JpcHRpb24iLCJpY29uIiwidXNlciIsImNyZWF0ZUFydGljbGVEYXRhIiwibmFtZSIsImVtYWlsIiwibnVtYmVyT2ZBcnRpY2xlIiwiRGFzaGJvYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzZWN0aW9uIiwibWFwIiwiZGF0YSIsImkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});