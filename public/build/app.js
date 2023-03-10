"use strict";
(self["webpackChunkbni_react"] = self["webpackChunkbni_react"] || []).push([["app"],{

/***/ "./assets/App.js":
/*!***********************!*\
  !*** ./assets/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./assets/App.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features */ "./assets/features/index.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/utils */ "./assets/components/utils/index.js");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_3__.PrivateRoute, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features__WEBPACK_IMPORTED_MODULE_2__.Home, null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_3__.PrivateRoute, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features__WEBPACK_IMPORTED_MODULE_2__.Login, null))
  })));
}

/***/ }),

/***/ "./assets/components/index.js":
/*!************************************!*\
  !*** ./assets/components/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _page_Header__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "SideBar": () => (/* reexport safe */ _page_SideBar__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _page_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/Header */ "./assets/components/page/Header.js");
/* harmony import */ var _page_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/SideBar */ "./assets/components/page/SideBar.js");



/***/ }),

/***/ "./assets/components/page/Header.js":
/*!******************************************!*\
  !*** ./assets/components/page/Header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);







function Header() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.user.data;
  });
  var association = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.user.data.association;
  });
  function logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("APICOOKIE", {
      sameSite: "strict"
    });
    navigate("/login");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "header__nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUserAlt, null), " Hi " + user.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillGearFill, null), " Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: logout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiLogOut, null), " Logout")));
}

/***/ }),

/***/ "./assets/components/page/SideBar.js":
/*!*******************************************!*\
  !*** ./assets/components/page/SideBar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function SideBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "left_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "left_menu__ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Toggle, {
    variant: "dark",
    className: "left_menu__dropdown"
  }, "Customers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Menu, {
    className: "left_menu__dropdown_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/customers",
    className: "left_menu__dropdown--item"
  }, "Customers liste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/new-customers",
    className: "left_menu__dropdown--item"
  }, "Nouveau membre")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Toggle, {
    variant: "dark",
    className: "left_menu__dropdown"
  }, "Sessions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Menu, {
    className: "left_menu__dropdown_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/sessions",
    className: "left_menu__dropdown--item"
  }, "Sessions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/new-session",
    className: "left_menu__dropdown--item"
  }, "Nouvelle session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/session-places",
    className: "left_menu__dropdown--item"
  }, "Place de sessions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/new-session-place",
    className: "left_menu__dropdown--item"
  }, "Nouvelle place de session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "//session-types",
    className: "left_menu__dropdown--item"
  }, "Types de session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/new-session-type",
    className: "left_menu__dropdown--item"
  }, "Nouveau type de session")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Toggle, {
    variant: "dark",
    className: "left_menu__dropdown"
  }, "Items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Menu, {
    className: "left_menu__dropdown_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/items",
    className: "left_menu__dropdown--item"
  }, "Items liste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/new-item",
    className: "left_menu__dropdown--item"
  }, "Nouveau item")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Toggle, {
    variant: "dark",
    className: "left_menu__dropdown"
  }, "Factures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Menu, {
    className: "left_menu__dropdown_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/bills",
    className: "left_menu__dropdown--item"
  }, "Liste des Factures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: "/generate-bill",
    className: "left_menu__dropdown--item"
  }, "Generer les factures"))))));
}

/***/ }),

/***/ "./assets/components/utils/Alert.js":
/*!******************************************!*\
  !*** ./assets/components/utils/Alert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function Alert() {
  var alert = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.alert;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  //si une alert est lancée, on la desactive après X secondes
  if (alert) {
    setTimeout(function () {
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_2__.setAlert)(null));
    }, 4000);
  }
  if (alert) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "alert alert-" + alert.color
    }, alert.message);
  }
}

/***/ }),

/***/ "./assets/components/utils/DateFormat.js":
/*!***********************************************!*\
  !*** ./assets/components/utils/DateFormat.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFormat": () => (/* binding */ DateFormat)
/* harmony export */ });
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");

function DateFormat(_ref) {
  var date = _ref.date,
    format = _ref.format;
  var dt = date.split("-");
  // Récupération de l'année et du mois
  var year = dt[0];
  var month = dt[1];
  var dateDayandHours = dt[2].split("T");
  var day = dateDayandHours[0];
  var dateHours = dateDayandHours[1].split(":");
  var hours = dateHours[0];
  var min = dateHours[1];
  var dateTime = year + "/" + month + "/" + day + " " + hours + ":" + min + ":00";
  return (0,dateformat__WEBPACK_IMPORTED_MODULE_0__["default"])(dateTime, format);
}

/***/ }),

/***/ "./assets/components/utils/Loading.js":
/*!********************************************!*\
  !*** ./assets/components/utils/Loading.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      minHeight: '100vh'
    },
    className: "d-flex flex-row justify-content-center align-items-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "loading gif",
    src: "https://i.redd.it/ounq1mw5kdxy.gif"
  }));
}

/***/ }),

/***/ "./assets/components/utils/Pagination.js":
/*!***********************************************!*\
  !*** ./assets/components/utils/Pagination.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagintation)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Pagintation(props) {
  var itemPerPage = props.itemPerPage;
  var nbPages = props.elem["hydra:totalItems"] / itemPerPage;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    actualPage = _useState2[0],
    setActualPage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(props.link + "?page=" + actualPage + "&itemsPerPage=" + itemPerPage),
    _useState4 = _slicedToArray(_useState3, 2),
    link = _useState4[0],
    setLink = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    btnNextDisabled = _useState6[0],
    setBtnNextDisabled = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    btnPrevDisabled = _useState8[0],
    setBtnPrevDisabled = _useState8[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useDispatch)();
  var changePage = function changePage(e) {
    //Suppression de "/api" du lien
    var link = e.target.dataset.link.substr(4);
    //Récuperation du numéro de page
    var page = Number(e.target.dataset.page);
    setActualPage(page);
    //mise à jour du lien
    setLink(link);
    dispatch(props.whatToDispatch(link));
  };
  var pagesRender = function pagesRender() {
    var pageNumber = [];
    for (var i = 1; i <= nbPages; i++) {
      var pageActive = "";
      if (actualPage === i) {
        pageActive = "active";
      }
      pageNumber.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
        className: pageActive,
        onClick: changePage,
        "data-page": i,
        "data-link": "/api" + props.link + "?page=" + i + "&itemsPerPage=" + itemPerPage
      }, i)));
    }
    return pageNumber;
  };

  // mettre ceci dans un component update
  //   setBtnPrevDisabled("")
  //   if(actualPage === 1){
  //       setBtnPrevDisabled("disabled")
  //   }
  //   setBtnNextDisabled("")
  //   if(actualPage === nbPages){
  //       setBtnNextDisabled("disabled")
  //   }

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    dispatch(props.whatToDispatch(link));
  }, []);
  if (nbPages <= 1) {
    return;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    onClick: changePage,
    "data-page": actualPage - 1,
    "data-link": props.elem["hydra:view"]["hydra:previous"],
    className: btnPrevDisabled
  }, "Pr\xE9c\xE9dent")), pagesRender(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    onClick: changePage,
    "data-page": actualPage + 1,
    "data-link": props.elem["hydra:view"]["hydra:next"],
    className: btnNextDisabled
  }, "Suivant"))));
}

/***/ }),

/***/ "./assets/components/utils/PrivateRoute.js":
/*!*************************************************!*\
  !*** ./assets/components/utils/PrivateRoute.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrivateRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");



function PrivateRoute(_ref) {
  var children = _ref.children;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();

  // TODO ADD GET USER FROM REDUX

  if (location.pathname === "/login") {
    // instruction si le cookie existe
    if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("APICOOKIE")) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
        replace: true,
        to: "/"
      });
    }
  } else {
    // instruction si le cookie n'existe pas
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("APICOOKIE")) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
        replace: true,
        to: "/login"
      });
    }
  }
  return children;
}

/***/ }),

/***/ "./assets/components/utils/index.js":
/*!******************************************!*\
  !*** ./assets/components/utils/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* reexport safe */ _Alert__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Loading": () => (/* reexport safe */ _Loading__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PrivateRoute": () => (/* reexport safe */ _PrivateRoute__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivateRoute */ "./assets/components/utils/PrivateRoute.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./assets/components/utils/Loading.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert */ "./assets/components/utils/Alert.js");




/***/ }),

/***/ "./assets/components/utils/monthFR.js":
/*!********************************************!*\
  !*** ./assets/components/utils/monthFR.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var monthFR = [[1, "Janvier"], [2, "Février"], [3, "Mars"], [4, "Avril"], [5, "Mai"], [6, "Juin"], [7, "Juillet"], [8, "Aout"], [9, "Septembre"], [10, "Octrobre"], [11, "Novembre"], [12, "Décembre"]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monthFR);

/***/ }),

/***/ "./assets/conf/AppRoutes.js":
/*!**********************************!*\
  !*** ./assets/conf/AppRoutes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _features_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/customer */ "./assets/features/customer/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _features_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/session */ "./assets/features/session/index.js");
/* harmony import */ var _features_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/item */ "./assets/features/item/index.js");
/* harmony import */ var _features_bill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/bill */ "./assets/features/bill/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






function AppRoutes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/customers",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_customer__WEBPACK_IMPORTED_MODULE_0__.CustomerList, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/customer/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_customer__WEBPACK_IMPORTED_MODULE_0__.CustomerDetails, {
      path: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)()
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/new-customers",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_customer__WEBPACK_IMPORTED_MODULE_0__.CustomerNew, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/session-places",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionPlacesList, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/session-place/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionPlaceDetails, {
      path: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)()
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/new-session-place",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionPlaceNew, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/session-types",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionTypesList, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/session-type/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionTypeDetails, {
      path: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)()
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/new-session-type",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionTypeNew, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/sessions",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionsList, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/session/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionDetails, {
      path: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)()
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/new-session",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_session__WEBPACK_IMPORTED_MODULE_1__.SessionNew, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/items",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_item__WEBPACK_IMPORTED_MODULE_2__.ItemList, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/item/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_item__WEBPACK_IMPORTED_MODULE_2__.ItemDetails, {
      path: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)()
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/new-item",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_item__WEBPACK_IMPORTED_MODULE_2__.ItemNew, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/bills",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_bill__WEBPACK_IMPORTED_MODULE_3__.BillList, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/bill/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_bill__WEBPACK_IMPORTED_MODULE_3__.BillDetails, {
      path: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)()
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/generate-bill",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_features_bill__WEBPACK_IMPORTED_MODULE_3__.BillGenerate, null)
  }));
}

/***/ }),

/***/ "./assets/conf/axios/api.bni.js":
/*!**************************************!*\
  !*** ./assets/conf/axios/api.bni.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiBniFile": () => (/* binding */ apiBniFile),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");


var REACT_APP_SERVER_NAME = "http://localhost:3000";

//on parse le cookie pour pouvoir récuperer le token ou le userId
function getToken() {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("APICOOKIE")) {
    var cookie = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("APICOOKIE"));
    return cookie.token;
  }
}
var apiBni = axios__WEBPACK_IMPORTED_MODULE_0__.create({
  baseURL: REACT_APP_SERVER_NAME + "/api",
  headers: {
    "Content-Type": "application/ld+json",
    Authorization: "Bearer " + getToken()
  }
});
var apiBniFile = axios__WEBPACK_IMPORTED_MODULE_0__.create({
  baseURL: REACT_APP_SERVER_NAME + "/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer " + getToken()
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiBni);

/***/ }),

/***/ "./assets/features/bill/BillDetails.js":
/*!*********************************************!*\
  !*** ./assets/features/bill/BillDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillDetails)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var _template_BillLeftColumn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./template/BillLeftColumn */ "./assets/features/bill/template/BillLeftColumn.js");
/* harmony import */ var _template_BillDetailsFacturation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./template/BillDetailsFacturation */ "./assets/features/bill/template/BillDetailsFacturation.js");
/* harmony import */ var _template_BillInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./template/BillInfo */ "./assets/features/bill/template/BillInfo.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var BillDetails = /*#__PURE__*/function (_Component) {
  _inherits(BillDetails, _Component);
  var _super = _createSuper(BillDetails);
  function BillDetails(props) {
    var _this;
    _classCallCheck(this, BillDetails);
    _this = _super.call(this, props);
    _this.state = {
      bill: null,
      errorMessage: null,
      loaded: true
    };
    return _this;
  }
  _createClass(BillDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //Récupère le id en découpant la route
      var path = this.props.path['*'];
      var id = path.split("/")[1];

      //Requete pour récuperer id
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__["default"].get("/bills/" + id, {}).then(function (response) {
        if (response.status === 200) {
          var bill = response.data;
          _this2.setState({
            bill: bill,
            loaded: false
          });
        }
      })
      //si customer pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        alert("Une erreur est survenue !" + err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loaded || !this.state.bill) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_18__.Loading, null);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_template_BillLeftColumn__WEBPACK_IMPORTED_MODULE_19__["default"], {
        customer: this.state.bill.customer
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_template_BillDetailsFacturation__WEBPACK_IMPORTED_MODULE_20__["default"], {
        bill: this.state.bill
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_template_BillInfo__WEBPACK_IMPORTED_MODULE_21__["default"], {
        bill: this.state.bill
      }));
    }
  }]);
  return BillDetails;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);


/***/ }),

/***/ "./assets/features/bill/BillGenerate.js":
/*!**********************************************!*\
  !*** ./assets/features/bill/BillGenerate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillGenerate)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_utils_monthFR__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/utils/monthFR */ "./assets/components/utils/monthFR.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
























function BillGenerate() {
  var dateYear = new Date().getUTCFullYear();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    itemsOptions = _useState2[0],
    setItemsOptions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(new Date().getUTCMonth()),
    _useState4 = _slicedToArray(_useState3, 1),
    month = _useState4[0];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(dateYear),
    _useState6 = _slicedToArray(_useState5, 1),
    year = _useState6[0];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(dateYear + 1),
    _useState8 = _slicedToArray(_useState7, 1),
    yearPlus = _useState8[0];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(dateYear - 1),
    _useState10 = _slicedToArray(_useState9, 1),
    yearMinus = _useState10[0];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useDispatch)();

  //creation de la requete
  var submit = function submit(values, actions) {
    var newItems = [];
    //suppresion du $ devant les items
    values.itemList.map(function (i) {
      var item = i.split("$");
      return newItems.push(Number(item[1])); //Ajoute l'item formaté en nombre au tableau
    });
    //création d'un nouveau tableau avec les données correct pour API
    var newValues = {
      billing_month: values.billing_month + "-" + values.billing_year,
      itemList: newItems,
      from_at: values.from_at
    };
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_16__["default"].post("/bills/generator", newValues, {}).then(function (response) {
      if (response.status === 201) {
        dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_19__.setAlert)({
          color: "success",
          message: "Les factures on bien étées crées"
        }));
        actions.isSubmitting = false;
        actions.resetForm();
      }
    })
    //si erreur on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      console.log("Error", err);
      actions.isSubmitting = false;
    });
  };

  //création de notre requete API pour le chargement des items
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    //récupération des items
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_16__["default"].get("/items", {}).then(function (response) {
      if (response.status === 200) {
        var options = response.data["hydra:member"].map(function (item) {
          return {
            value: item.id,
            name: item.name
          };
        });
        setItemsOptions(options);
        setLoading(false);
      }
    })
    //si sessionType pas valide on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_19__.setAlert)({
        color: "danger",
        message: "Une erreur est survenue !"
      }));
    });
  }, []);

  //validation des données
  var itemSchema = yup__WEBPACK_IMPORTED_MODULE_17__.object().shape({
    billing_month: yup__WEBPACK_IMPORTED_MODULE_17__.string().required(),
    billing_year: yup__WEBPACK_IMPORTED_MODULE_17__.string().required(),
    itemList: yup__WEBPACK_IMPORTED_MODULE_17__.array().min(0),
    from_at: yup__WEBPACK_IMPORTED_MODULE_17__.string().matches(/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/, "Format dd.mm.yyyy").required("Date Requise")
  });
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_22__.Loading, null);
  }
  //on affiche le formulaire
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react__WEBPACK_IMPORTED_MODULE_20___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "container-fluid p-5 d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(formik__WEBPACK_IMPORTED_MODULE_15__.Formik, {
    onSubmit: submit,
    initialValues: {
      billing_month: month + 1,
      billing_year: year,
      itemList: [],
      from_at: ""
    },
    validationSchema: itemSchema
  }, function (_ref) {
    var values = _ref.values,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      errors = _ref.errors,
      touched = _ref.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "bg-white border p-5 d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", null, "Mois de factureation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(formik__WEBPACK_IMPORTED_MODULE_15__.Field, {
      as: "select",
      name: "billing_month",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.billing_month
    }, _components_utils_monthFR__WEBPACK_IMPORTED_MODULE_21__["default"].map(function (m) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
        value: m[0],
        key: m[0] + m[1]
      }, m[1]);
    })), errors.billing_month && touched.billing_month && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "text-danger"
    }, errors.billing_month), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(formik__WEBPACK_IMPORTED_MODULE_15__.Field, {
      as: "select",
      name: "billing_year",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.billing_year
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
      value: yearMinus
    }, yearMinus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
      value: year
    }, year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
      value: yearPlus
    }, yearPlus)), errors.billing_month && touched.billing_month && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "text-danger"
    }, errors.billing_month)), itemsOptions.map(function (i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "form-check form-switch",
        key: i.value
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(formik__WEBPACK_IMPORTED_MODULE_15__.Field, {
        type: "checkbox",
        name: "itemList",
        value: "$" + i.value,
        id: i.value + i.name,
        className: "form-check-input",
        onChange: handleChange,
        onBlur: handleBlur
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        className: "form-check-label",
        htmlFor: i.value + i.name
      }, i.name));
    }), errors.itemList && touched.itemList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "text-danger"
    }, errors.itemList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", null, "Date d'\xE9mission de la facture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(formik__WEBPACK_IMPORTED_MODULE_15__.Field, {
      name: "from_at",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.from_at
    }), errors.from_at && touched.from_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "text-danger"
    }, errors.from_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Envoyer"));
  })));
}

/***/ }),

/***/ "./assets/features/bill/BillList.js":
/*!******************************************!*\
  !*** ./assets/features/bill/BillList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_utils_Pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../components/utils/Pagination */ "./assets/components/utils/Pagination.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










//création de la requete
var fetchBills = function fetchBills(link) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_28__["default"].get(link).then(function (response) {
              if (response.status === 200) {
                console.log(response);
                dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_29__.setBill)(response));
              }
            })
            //si item pas valide on update le state pour mettre un message d'erreur
            ["catch"](function (err) {
              dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_29__.setAlert)({
                color: "danger",
                message: "Une erreur est survenue !"
              }));
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
function BillList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    itemPerPage = _useState2[0],
    setItemPerPage = _useState2[1];
  var link = "/bills";
  var bills = (0,react_redux__WEBPACK_IMPORTED_MODULE_26__.useSelector)(function (state) {
    return state.bills.data;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_26__.useDispatch)();

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    dispatch(fetchBills(link + "?page=1&itemsPerPage=" + itemPerPage));
  }, []);
  if (bills) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement((react__WEBPACK_IMPORTED_MODULE_27___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("table", {
      className: "app_table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("th", null, "Montant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("th", null, "Client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("tbody", null, bills["hydra:member"].map(function (bill) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(BillListUnit, {
        bill: bill,
        key: bill.id
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_components_utils_Pagination__WEBPACK_IMPORTED_MODULE_31__["default"], {
      link: link,
      itemPerPage: itemPerPage,
      whatToDispatch: fetchBills,
      elem: bills
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_30__.Loading, null);
  }
}
function BillListUnit(props) {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_26__.useSelector)(function (state) {
    return state.user.data;
  });
  var dateDay = new Date();
  var billingDate = new Date(props.bill.to_at);

  //Définition du type de badge en fonction du statut de la facture
  var badgeStyle = "app_badge--info";
  var badgeText = "En attente";
  if (dateDay > new Date(billingDate)) {
    badgeStyle = "app_badge--danger";
    badgeText = "Expirée";
  }
  if (props.bill.amount === props.bill.billStatut.balance) {
    badgeStyle = "app_badge--success";
    badgeText = "Payé";
  }

  //Nom à afficher (company - fistname lastname) ou (fistname lastname)
  var displayName = props.bill.customer.firstname + " " + props.bill.customer.lastname;
  if (props.bill.customer.company) {
    displayName = props.bill.customer.company + " - " + displayName;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("tr", {
    key: props.bill.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("th", null, props.bill.billNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    className: badgeStyle
  }, badgeText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("td", null, user.association.bankInformation.currency + " " + props.bill.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("td", null, displayName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.NavLink, {
    to: "/bill/" + props.bill.id,
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_33__.FaEye, null))));
}

/***/ }),

/***/ "./assets/features/bill/index.js":
/*!***************************************!*\
  !*** ./assets/features/bill/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillDetails": () => (/* reexport safe */ _BillDetails__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "BillGenerate": () => (/* reexport safe */ _BillGenerate__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "BillList": () => (/* reexport safe */ _BillList__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _BillList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BillList */ "./assets/features/bill/BillList.js");
/* harmony import */ var _BillDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillDetails */ "./assets/features/bill/BillDetails.js");
/* harmony import */ var _BillGenerate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BillGenerate */ "./assets/features/bill/BillGenerate.js");




/***/ }),

/***/ "./assets/features/bill/template/BillDetailsFacturation.js":
/*!*****************************************************************!*\
  !*** ./assets/features/bill/template/BillDetailsFacturation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillDetailsFacturation)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function BillDetailsFacturation(_ref) {
  var bill = _ref.bill;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    customerSessions = _useState2[0],
    setCustomerSessions = _useState2[1];
  //récuperation de l'utilisateur courrant
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(function (state) {
    return state.user.data;
  });
  var date = bill.billingMonth.split("-");
  date = new Date(date[1], date[0] - 1);
  var firstDay = (0,dateformat__WEBPACK_IMPORTED_MODULE_16__["default"])(new Date(date.getFullYear(), date.getMonth(), 1), "dd.mm.yyyy");
  var lastDay = (0,dateformat__WEBPACK_IMPORTED_MODULE_16__["default"])(new Date(date.getFullYear(), date.getMonth() + 1, 0), "dd.mm.yyyy");
  var link = "customer_sessions?page=1&itemsPerPage=100&customer.id=" + bill.customer.id + "&session.day_at%5Bbefore%5D=" + lastDay + "&session.day_at%5Bafter%5D=" + firstDay;

  //Définition du type de badge en fonction du statut de la facture
  var badgeStyle = "app_badge--info";
  var badgeText = "En attente";
  if (new Date() > new Date(bill.to_at)) {
    badgeStyle = "app_badge--danger";
    badgeText = "Expirée";
  }
  if (bill.amount === bill.billStatut.balance) {
    badgeStyle = "app_badge--success";
    badgeText = "Payé";
  }

  //création de notre requete API pour les CustomerSessions avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__["default"].get(link).then(function (response) {
      if (response.status === 200) {
        setCustomerSessions(response.data);
      }
    })
    //si item pas valide on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      console.log("Une erreur esr survenue !" + err);
    });
  }, []);

  //si chargement des usersession on met un loading
  if (!customerSessions) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "column column--lg_5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Loading, null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "column column--lg_5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h3", null, "D\xE9tail facturation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", {
    colSpan: "3"
  }, "Sessions")), customerSessions["hydra:member"].map(function (cs) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", {
      key: cs.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, cs.session.session_type.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, (0,dateformat__WEBPACK_IMPORTED_MODULE_16__["default"])(cs.session.day_at, "dd.mm.yyyy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, user.association.bankInformation.currency, " ", cs.session.session_type.price_of));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(ItemList, {
    items: bill.items,
    currency: user.association.bankInformation.currency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", {
    colSpan: "2"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", null, user.association.bankInformation.currency, " ", bill.amount)))));
}
function ItemList(_ref2) {
  var items = _ref2.items,
    currency = _ref2.currency;
  if (items != null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", {
      colSpan: "3"
    }, "Liste des Items")), items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", {
        key: item.id + item.name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", {
        colSpan: "2"
      }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, currency, " ", item.price_of));
    }));
  }
}

/***/ }),

/***/ "./assets/features/bill/template/BillInfo.js":
/*!***************************************************!*\
  !*** ./assets/features/bill/template/BillInfo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillInfo)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/utils/DateFormat */ "./assets/components/utils/DateFormat.js");




function BillInfo(props) {
  var bill = props.bill;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.user.data;
  });

  //Définition du type de badge en fonction du statut de la facture
  var badgeStyle = "app_badge--info";
  var badgeText = "En attente";
  if (new Date() > new Date(props.bill.to_at)) {
    badgeStyle = "app_badge--danger";
    badgeText = "Expirée";
  }
  if (props.bill.amount === props.bill.billStatut.balance) {
    badgeStyle = "app_badge--success";
    badgeText = "Payé";
  }

  //definition du montant deja payé
  var balance = "--";
  if (bill.billStatut.balance) {
    balance = user.association.bankInformation.currency + " " + bill.billStatut.balance;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column column--lg_3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Info Facture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__title"
  }, "Facture :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__description"
  }, props.bill.billNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__title"
  }, "Status facture :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: badgeStyle
  }, badgeText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__title"
  }, "Montant total:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__description"
  }, user.association.bankInformation.currency, " ", bill.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__title"
  }, "D\xE9j\xE0 pay\xE9 :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__description"
  }, balance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__title"
  }, "Date facturation :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_3__.DateFormat, {
    date: bill.from_at,
    format: "dd.mm.yyyy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__title"
  }, "Payable jusque au :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "column__description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_3__.DateFormat, {
    date: bill.to_at,
    format: "dd.mm.yyyy"
  })));
}

/***/ }),

/***/ "./assets/features/bill/template/BillLeftColumn.js":
/*!*********************************************************!*\
  !*** ./assets/features/bill/template/BillLeftColumn.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillLeftColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BillLeftColumn(props) {
  var customer = props.customer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column column--lg_3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "D\xE9tails client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Entreprise :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Nom :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.lastname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Pr\xE9nom :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Adresse :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description mb-0"
  }, customer.street + " " + customer.street_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.zip_code + " " + customer.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Email :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.email));
}

/***/ }),

/***/ "./assets/features/customer/CustomerDetails.js":
/*!*****************************************************!*\
  !*** ./assets/features/customer/CustomerDetails.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerDetails)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var _template_CustomerLeftColumn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./template/CustomerLeftColumn */ "./assets/features/customer/template/CustomerLeftColumn.js");
/* harmony import */ var _template_CustomerBillsList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./template/CustomerBillsList */ "./assets/features/customer/template/CustomerBillsList.js");
/* harmony import */ var _template_CustomerInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./template/CustomerInfo */ "./assets/features/customer/template/CustomerInfo.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







// TODO REFAIRE LE COMPONENT
var CustomerDetails = /*#__PURE__*/function (_Component) {
  _inherits(CustomerDetails, _Component);
  var _super = _createSuper(CustomerDetails);
  function CustomerDetails(props) {
    var _this;
    _classCallCheck(this, CustomerDetails);
    _this = _super.call(this, props);
    _this.state = {
      customer: null,
      bills: null,
      loaded: true
    };
    return _this;
  }

  // TODO MOVE THIS CODE TO THE SLICE
  _createClass(CustomerDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //Récupère le id en découpant la route
      var path = this.props.path["*"];
      var id = path.split("/")[1];

      //Requete pour récuperer id
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__["default"].get("/customers/" + id, {}).then(function (response) {
        if (response.status === 200) {
          var customer = response.data;
          _this2.setState({
            customer: customer
          });
        }
      })
      //si customer pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        console.log(err);
      });
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__["default"].get("/bills?customer.id=" + id, {}).then(function (response) {
        if (response.status === 200) {
          var bills = response.data;
          _this2.setState({
            bills: bills,
            loaded: false
          });
        }
      })
      //si customer pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loaded || this.state.customer === null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_18__.Loading, null);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_template_CustomerInfo__WEBPACK_IMPORTED_MODULE_21__["default"], {
        customer: this.state.customer
      }));
    }
  }]);
  return CustomerDetails;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);


/***/ }),

/***/ "./assets/features/customer/CustomerList.js":
/*!**************************************************!*\
  !*** ./assets/features/customer/CustomerList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var _components_utils_Pagination__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../components/utils/Pagination */ "./assets/components/utils/Pagination.js");
/* harmony import */ var _components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../components/utils/DateFormat */ "./assets/components/utils/DateFormat.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












//création de la requete

// TODO ADD TO REDUX SLICE
var fetchCustomers = function fetchCustomers(link) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_30__["default"].get(link).then(function (response) {
              if (response.status === 200) {
                dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_31__.setCustomers)(response));
              }
            })
            //si item pas valide on update le state pour mettre un message d'erreur
            ["catch"](function (err) {
              dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_31__.setAlert)({
                color: "danger",
                message: "Une erreur est survenue !"
              }));
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
function CustomerList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    itemPerPage = _useState2[0],
    setItemPerPage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    addFilter = _useState4[0],
    setAddFilter = _useState4[1];
  var link = "/customers";
  var customers = (0,react_redux__WEBPACK_IMPORTED_MODULE_28__.useSelector)(function (state) {
    return state.customers.data;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_28__.useDispatch)();

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    dispatch(fetchCustomers(link + "?page=1&itemsPerPage=" + itemPerPage + addFilter));
  }, []);
  if (customers) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(ButtonsTris, {
      link: link,
      itemPerPage: itemPerPage,
      setAddFilter: setAddFilter
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("table", {
      className: "app_table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null, "nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null, "Ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null, "Date entr\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null, "Date sortie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("tbody", null, customers["hydra:member"].map(function (customer, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(CustomerListUnit, {
        customer: customer,
        key: customer.id
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_components_utils_Pagination__WEBPACK_IMPORTED_MODULE_34__["default"], {
      link: link,
      itemPerPage: itemPerPage,
      whatToDispatch: fetchCustomers,
      elem: customers
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_32__.Loading, null);
  }
}

// TODO MOVE TO AN IDEPEDANT COMPONENT
function CustomerListUnit(props) {
  var dateDay = new Date();
  var membreDone = new Date(props.customer.membership.membership_done_at);
  var trStyle = "app_table__tr--green";
  if (dateDay > membreDone) {
    trStyle = "app_table__tr--red";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("tr", {
    className: trStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("th", {
    scope: "row"
  }, props.customer.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("td", null, props.customer.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("td", null, props.customer.lastname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("td", null, props.customer.zip_code + " " + props.customer.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_35__.DateFormat, {
    date: props.customer.membership.membership_at,
    format: "dd.mm.yyyy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_35__.DateFormat, {
    date: props.customer.membership.membership_done_at,
    format: "dd.mm.yyyy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__.NavLink, {
    to: "/customer/" + props.customer.id,
    className: "nav-link",
    key: props.customer.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_37__.FaEye, null))));
}

// TODO MOVE TO AN COMPONENT
function ButtonsTris(_ref2) {
  var setAddFilter = _ref2.setAddFilter,
    link = _ref2.link,
    itemPerPage = _ref2.itemPerPage;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_28__.useDispatch)();
  var addFilter = function addFilter(e) {
    var filter = e.target.dataset.filter;
    setAddFilter("&membership.is_active=true");
    dispatch(fetchCustomers(link + "?page=1&itemsPerPage=" + itemPerPage + filter));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex justify-content-center mt-4 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    className: "btn btn-outline-success",
    onClick: addFilter,
    "data-filter": "&membership.is_active=true"
  }, "Membre actif"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    className: "btn btn-outline-danger",
    onClick: addFilter,
    "data-filter": "&membership.is_active=false"
  }, "Membre inactif"))
  // &membership.is_active=false
  ;
}

/***/ }),

/***/ "./assets/features/customer/CustomerNew.js":
/*!*************************************************!*\
  !*** ./assets/features/customer/CustomerNew.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerNew)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





// TODO FUNCTION COMPONENT
var CustomerNew = /*#__PURE__*/function (_Component) {
  _inherits(CustomerNew, _Component);
  var _super = _createSuper(CustomerNew);
  function CustomerNew(props) {
    var _this;
    _classCallCheck(this, CustomerNew);
    _this = _super.call(this, props);
    //fonction envoi de la vcard
    _defineProperty(_assertThisInitialized(_this), "submitFile", function (values, actions) {
      var formdata = new FormData();
      var file = document.querySelector("#vcardfile");
      formdata.append("file", file.files[0]);

      // TODO MOVE TO REDUX
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__.apiBniFile.post("/vcard/parser", formdata).then(function (response) {
        if (response.status === 200) {
          var data = response.data.data;
          actions.isSubmitting = false;
          actions.resetForm();
          document.getElementById("newCustomerForm").style.cssText = "display:flex !important";
          document.getElementById("fileForm").style.cssText = "display:none !important";
          //update du state pour mettre à jour les chants formulaire
          _this.setState({
            company: data.company,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            street: data.street,
            city: data.city,
            zipCode: data.zipCode,
            phone: data.phone
          });
        }
      })
      //Erreur
      ["catch"](function (err) {
        actions.isSubmitting = false;
      });
    });
    ///////////////////////////////////////////////
    //fonction enregistrement d'un nouveau customer
    _defineProperty(_assertThisInitialized(_this), "submit", function (values, actions) {
      //creation de la requete
      // TODO MOVE TO REDUX
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__["default"].post("/customers", values, {}).then(function (response) {
        if (response.status === 201) {
          // actions.resetForm();
        }
      })
      //si erreur
      ["catch"](function (err) {
        actions.isSubmitting = false;
      });
    });
    // TODO MOVE TO AN UTILS FILE
    //validation des données
    _defineProperty(_assertThisInitialized(_this), "customerSchema", yup__WEBPACK_IMPORTED_MODULE_19__.object().shape({
      firstname: yup__WEBPACK_IMPORTED_MODULE_19__.string().min(3, "Prénom trop court").required("Veuillez indiquer un prénom"),
      lastname: yup__WEBPACK_IMPORTED_MODULE_19__.string().min(3, "Nom trop court").required("Veuillez indiquer un nom"),
      street: yup__WEBPACK_IMPORTED_MODULE_19__.string().min(3, "Nom de rue trop court").required("Veuillez indiquer un nom de rue"),
      streetNumber: yup__WEBPACK_IMPORTED_MODULE_19__.string().min(1, "Veuillez indiquer un numéro de rue"),
      zipCode: yup__WEBPACK_IMPORTED_MODULE_19__.number().min(1000, "Le code zip doit être de min 4 chiffres").max(9999, "Le code zip doit être de max 4 chiffre").required("Veuillez indiquer un code postal"),
      city: yup__WEBPACK_IMPORTED_MODULE_19__.string().min(3, "Nom de ville trop court").required("Veuillez indiquer une ville"),
      company: yup__WEBPACK_IMPORTED_MODULE_19__.string().min(3, "Nom entreprise trop court").required("Veuillez indiquer une entreprise"),
      email: yup__WEBPACK_IMPORTED_MODULE_19__.string().email(3, "Email non valide").required("Veuillez indiquer un email"),
      memberShip_at: yup__WEBPACK_IMPORTED_MODULE_19__.string().matches(/^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d$/, "Format dd.mm.yyyy")
    }));
    _this.state = {
      company: "",
      firstname: "",
      lastname: "",
      email: "",
      street: "",
      city: "",
      zipCode: "",
      phone: ""
    };
    return _this;
  }

  //cache element popur les fichier vcard
  _createClass(CustomerNew, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById("fileForm").style.cssText = "display:none !important";
    }

    //si ouverture Vcard on cache le formulaire utilisateur et on affiche le formulaire pour chargement de la Vcard
  }, {
    key: "openVcard",
    value: function openVcard() {
      document.getElementById("newCustomerForm").style.cssText = "display:none !important";
      document.getElementById("fileForm").style.cssText = "display:flex";
    }
  }, {
    key: "closeVcard",
    value: function closeVcard() {
      document.getElementById("fileForm").style.cssText = "display:none !important";
      document.getElementById("newCustomerForm").style.cssText = "display:flex";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      //Affichage du formulaire
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
        className: "form form--lg_8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Formik, {
        onSubmit: this.submit,
        initialValues: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          street: this.state.street,
          streetNumber: "",
          zipCode: this.state.zipCode,
          city: this.state.city,
          company: this.state.company,
          email: this.state.email,
          memberShip_at: ""
        },
        enableReinitialize: true //permet de mettre à jour le formulaire avec le state
        ,
        validationSchema: this.customerSchema
      }, function (_ref) {
        var values = _ref.values,
          handleBlur = _ref.handleBlur,
          handleChange = _ref.handleChange,
          handleSubmit = _ref.handleSubmit,
          isSubmitting = _ref.isSubmitting,
          errors = _ref.errors,
          touched = _ref.touched;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("form", {
          onSubmit: handleSubmit,
          className: "form__row",
          id: "newCustomerForm"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-6"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "firstname",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.firstname
        }), errors.firstname && touched.firstname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.firstname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-6"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "lastname",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.lastname
        }), errors.lastname && touched.lastname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.lastname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-8"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Rue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "street",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.street
        }), errors.street && touched.street && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.street)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Num\xE9ro de rue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "streetNumber",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.streetNumber
        }), errors.streetNumber && touched.streetNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.streetNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Code postal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          type: "number",
          name: "zipCode",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.zipCode
        }), errors.zipCode && touched.zipCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.zipCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-8"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "city",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.city
        }), errors.city && touched.city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Entreprise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "company",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.company
        }), errors.company && touched.company && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-8"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "email",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.email
        }), errors.email && touched.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Membre depuis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "memberShip_at",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.memberShip_at
        }), errors.memberShip_at && touched.memberShip_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.memberShip_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
          type: "submit",
          className: "button",
          disabled: isSubmitting
        }, "Enregistrer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
          type: "button",
          className: "button",
          disabled: isSubmitting,
          onClick: _this2.openVcard
        }, "Vcard"));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Formik, {
        onSubmit: this.submitFile,
        initialValues: {
          file: ""
        },
        validate: this.validate
      }, function (_ref2) {
        var values = _ref2.values,
          handleBlur = _ref2.handleBlur,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          isSubmitting = _ref2.isSubmitting,
          errors = _ref2.errors,
          touched = _ref2.touched;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("form", {
          onSubmit: handleSubmit,
          className: "form__row",
          id: "fileForm"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form__column--lg-10"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
          type: "file",
          name: "file",
          id: "vcardfile",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.file,
          required: true
        }), errors.file && touched.file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.file)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
          type: "submit",
          className: "button",
          disabled: isSubmitting
        }, "Charger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
          type: "button",
          className: "button button--red",
          disabled: isSubmitting,
          value: "Annuler",
          onClick: _this2.closeVcard
        }));
      }));
    }
  }]);
  return CustomerNew;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);


/***/ }),

/***/ "./assets/features/customer/index.js":
/*!*******************************************!*\
  !*** ./assets/features/customer/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetails": () => (/* reexport safe */ _CustomerDetails__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "CustomerList": () => (/* reexport safe */ _CustomerList__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CustomerNew": () => (/* reexport safe */ _CustomerNew__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _CustomerList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerList */ "./assets/features/customer/CustomerList.js");
/* harmony import */ var _CustomerDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerDetails */ "./assets/features/customer/CustomerDetails.js");
/* harmony import */ var _CustomerNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerNew */ "./assets/features/customer/CustomerNew.js");




/***/ }),

/***/ "./assets/features/customer/template/CustomerBillsList.js":
/*!****************************************************************!*\
  !*** ./assets/features/customer/template/CustomerBillsList.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerBillsList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function CustomerBillsList(props) {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(function (state) {
    return state.user.data;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(props.bills),
    _useState2 = _slicedToArray(_useState, 1),
    bills = _useState2[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "column column--lg_5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h3", null, "Factures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tbody", null, bills["hydra:member"].map(function (bill) {
    //Définition du type de badge en fonction du statut de la facture
    var badgeStyle = "app_badge--info";
    var badgeText = "En attente";
    if (new Date() > new Date(bill.to_at)) {
      badgeStyle = "app_badge--danger";
      badgeText = "Expirée";
    }
    if (bill.amount === bill.billStatut.balance) {
      badgeStyle = "app_badge--success";
      badgeText = "Payé";
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", {
      key: bill.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.NavLink, {
      to: "/bill/" + bill.id,
      className: "nav-link"
    }, bill.billNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, user.association.bankInformation.currency, " ", bill.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, (0,dateformat__WEBPACK_IMPORTED_MODULE_16__["default"])(bill.to_at, "dd.mm.yyyy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: badgeStyle
    }, badgeText)));
  }))));
}

/***/ }),

/***/ "./assets/features/customer/template/CustomerInfo.js":
/*!***********************************************************!*\
  !*** ./assets/features/customer/template/CustomerInfo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerInfo)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/utils/DateFormat */ "./assets/components/utils/DateFormat.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function CustomerInfo(_ref) {
  var customer = _ref.customer;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.user.data;
  });
  var customerActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "app_badge app_badge--success"
  }, "Membre actif");
  if (!customer.membership.is_active) {
    customerActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "app_badge app_badge--danger"
    }, "Membre inactif");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm customer_search_bar"
  }, "Rechercher\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSearch, null), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm column_center__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, customer.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    className: "img--rounded",
    src: "http://localhost:3000" + "/img/bggrey.jpg",
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm column_bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, "N\xB0", customer.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, customer.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, customer.lastname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm column_bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, customer.street, " ", customer.street_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, customer.zip_code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, customer.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm column_bottom"
  }, customerActive, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, "Date d'entr\xE9e :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, "Date de sortie :")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm column_bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_1__.DateFormat, {
    date: customer.membership.membership_at,
    format: "dd.mm.yyyy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_1__.DateFormat, {
    date: customer.membership.membership_done_at,
    format: "dd.mm.yyyy"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "customer_row__column--sm customer_buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "customer_buttons--success"
  }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "customer_buttons--danger"
  }, "Supprimer"))));
}

/***/ }),

/***/ "./assets/features/customer/template/CustomerLeftColumn.js":
/*!*****************************************************************!*\
  !*** ./assets/features/customer/template/CustomerLeftColumn.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerLeftColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function CustomerLeftColumn(props) {
  var customer = props.customer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column column--lg_3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Nom du client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "customer N\xB0 :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Entreprise :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Nom :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.lastname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Pr\xE9nom :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Adresse :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description mb-0"
  }, customer.street + " " + customer.street_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.zip_code + " " + customer.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__title"
  }, "Email :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "column__description"
  }, customer.email));
}

/***/ }),

/***/ "./assets/features/home/Home.js":
/*!**************************************!*\
  !*** ./assets/features/home/Home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components */ "./assets/components/index.js");
/* harmony import */ var _conf_AppRoutes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../conf/AppRoutes */ "./assets/conf/AppRoutes.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function Home() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_25__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_25__.useSelector)(function (state) {
    return state.user;
  });

  // TODO A SUPPRIMER APRES AVOIR CHANGER LE PRIVATE ROUTE
  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    dispatch(FetchUser());
  }, []);

  //TODO AJOUTER SUR REDUX
  //fonction de chargement de l'utilisateur
  var FetchUser = function FetchUser() {
    var cookie = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_28__["default"].get("APICOOKIE"));
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_26__["default"].get("/users/" + cookie.data.userid).then(function (response) {
                if (response.status === 200) {
                  dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_27__.setUser)(response));
                }
              })
              //si item pas valide on update le state pour mettre un message d'erreur
              ["catch"](function (err) {
                dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_27__.setAlert)({
                  color: "danger",
                  message: "Une erreur est survenue !"
                }));
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  };

  //si l'utilisateur n'est pas encore charger on affiche le loading
  if (user.data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("header", {
      className: "header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components__WEBPACK_IMPORTED_MODULE_23__.Header, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "app_container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components__WEBPACK_IMPORTED_MODULE_23__.SideBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("main", {
      className: "col-md-9 ms-sm-auto col-lg-10 px-md-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_22__.Alert, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "row justify-content-md-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_conf_AppRoutes__WEBPACK_IMPORTED_MODULE_24__["default"], null))))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_22__.Loading, null);
  }
}

/***/ }),

/***/ "./assets/features/index.js":
/*!**********************************!*\
  !*** ./assets/features/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _home_Home__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Login": () => (/* reexport safe */ _login_Login__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _login_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/Login */ "./assets/features/login/Login.js");
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/Home */ "./assets/features/home/Home.js");



/***/ }),

/***/ "./assets/features/item/ItemDetails.js":
/*!*********************************************!*\
  !*** ./assets/features/item/ItemDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





// TODO Aficcher un loading //<Loading />
// TODO Destructor js
// TODO "" items details
// TODO Tableau

function ItemDetails(props) {
  var _items$items, _items$items2;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({
      items: null,
      loaded: true,
      errorMessage: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    var path = props.path["*"];
    var id = path.split("/")[1];
    //Requete pour récuperer id
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_13__["default"].get("/items/" + id, {}).then(function (response) {
      setItems({
        items: response.data,
        loaded: false
      });
    })

    //si item pas valide on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      setItems({
        errorMessage: err.message
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, items === null || items === void 0 ? void 0 : (_items$items = items.items) === null || _items$items === void 0 ? void 0 : _items$items.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, items === null || items === void 0 ? void 0 : (_items$items2 = items.items) === null || _items$items2 === void 0 ? void 0 : _items$items2.price_of), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.NavLink, {
    to: "/items"
  }, "Back"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemDetails);

/***/ }),

/***/ "./assets/features/item/ItemList.js":
/*!******************************************!*\
  !*** ./assets/features/item/ItemList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemList),
/* harmony export */   "fetchItems": () => (/* binding */ fetchItems)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








//création de la requete
var fetchItems = function fetchItems() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_24__["default"].get("/items?page=1&itemsPerPage=30").then(function (response) {
              if (response.status === 200) {
                dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_25__.setItem)(response));
              }
            })
            //si item pas valide on update le state pour mettre un message d'erreur
            ["catch"](function (err) {
              dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_25__.setAlert)({
                color: "danger",
                message: "Une erreur est survenue !"
              }));
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};
function ItemList() {
  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useSelector)(function (state) {
    return state.items.data;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useDispatch)();

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    dispatch(fetchItems());
  }, []);
  if (items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement((react__WEBPACK_IMPORTED_MODULE_23___default().Fragment), null, items["hydra:member"].map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
        to: "/item/" + item.id,
        className: "nav-link",
        key: item.id
      }, item.id + " - " + item.name);
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_26__.Loading, null);
  }
}

/***/ }),

/***/ "./assets/features/item/ItemNew.js":
/*!*****************************************!*\
  !*** ./assets/features/item/ItemNew.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemNew)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);












function ItemNew() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();

  //creation de la requete
  var submit = function submit(values, actions) {
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_7__["default"].post("/items", values, {}).then(function (response) {
      if (response.status === 201) {
        actions.isSubmitting = false;
        actions.resetForm();
        dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_10__.addItem)(response));
        dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_10__.setAlert)({
          color: "success",
          message: "Item ajouté."
        }));
      }
    })
    //si erreur on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      actions.isSubmitting = false;
    });
  };

  //validation des données
  var itemSchema = yup__WEBPACK_IMPORTED_MODULE_8__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_8__.string().min(3, "Prénom trop court").required("Veuillez indiquer un prénom"),
    priceOf: yup__WEBPACK_IMPORTED_MODULE_8__.string().matches(/^\d+(.\d{1,2})?$/, "Format invalide")
  });

  //on affiche le formulaire
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement((react__WEBPACK_IMPORTED_MODULE_11___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
    className: "container-fluid p-5 d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
    onSubmit: submit,
    initialValues: {
      name: "",
      priceOf: ""
    },
    validationSchema: itemSchema
  }, function (_ref) {
    var values = _ref.values,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      errors = _ref.errors,
      touched = _ref.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "bg-white border p-5 d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("label", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
      name: "name",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.name
    }), errors.name && touched.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "text-danger"
    }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("label", null, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
      name: "priceOf",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.priceOf
    }), errors.priceOf && touched.priceOf && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "text-danger"
    }, errors.priceOf)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
      name: "description",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.priceOf
    }), errors.description && touched.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
      className: "text-danger"
    }, errors.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Envoyer"));
  })));
}

/***/ }),

/***/ "./assets/features/item/index.js":
/*!***************************************!*\
  !*** ./assets/features/item/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetails": () => (/* reexport safe */ _ItemDetails__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ItemList": () => (/* reexport safe */ _ItemList__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ItemNew": () => (/* reexport safe */ _ItemNew__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemList */ "./assets/features/item/ItemList.js");
/* harmony import */ var _ItemDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDetails */ "./assets/features/item/ItemDetails.js");
/* harmony import */ var _ItemNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemNew */ "./assets/features/item/ItemNew.js");




/***/ }),

/***/ "./assets/features/login/Login.js":
/*!****************************************!*\
  !*** ./assets/features/login/Login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login),
/* harmony export */   "fetchUser": () => (/* binding */ fetchUser)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Login(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useDispatch)();

  //validation du login
  var submit = function submit(values, actions) {
    //on passe setLoaded à true pour afficher le chargement en attendant la réponse
    setLoaded(true);
    //creation de la requete
    axios__WEBPACK_IMPORTED_MODULE_15__.post("http://localhost:3000" + "/api/login", values, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      if (response.status === 200) {
        //si le login est bon on fait un reload ce qui nous redirigera vers la page d'accueil et évite un bug de cookie
        // création du cookie //inclus le token et les datas
        var cookiesData = JSON.stringify(response.data);
        js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].set("APICOOKIE", cookiesData, {
          sameSite: "strict",
          expires: new Date(new Date().getTime() + 5 * 60 * 1000)
        }); //5minutes
        window.location.reload();
      }
    })
    //si login pas valide on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      console.error("error", err);
      setLoaded(false);
      actions.isSubmitting = false;
      actions.resetForm();
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_19__.setAlert)({
        color: "danger",
        message: "Mauvais login ou mot de passe !" + err
      }));
    });
  };

  //validation des données
  var validate = function validate(values) {
    var errors = {};
    if (!values.username && values.username.length < 3) {
      errors.username = "Nom trop court";
    }
    if (!values.password) {
      errors.password = "Veuillez inserer un mot de passe";
    }
    return errors;
  };

  //Affichage du formulaire
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, loaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_17__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "container-fluid p-5 d-flex flex-column justify-content-center align-items-center"
  }, alert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_17__.Alert, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(formik__WEBPACK_IMPORTED_MODULE_14__.Formik, {
    onSubmit: submit,
    initialValues: {
      username: "",
      password: ""
    },
    validate: validate
  }, function (_ref) {
    var values = _ref.values,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      errors = _ref.errors,
      touched = _ref.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "bg-white border p-5 d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "input-group-text",
      id: "btnGroupAddon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_20__.FaUser, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
      type: "text",
      name: "username",
      placeholder: "Username",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.username
    }), errors.username && touched.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "text-danger"
    }, errors.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "input-group-text",
      id: "btnGroupAddon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_20__.FaLock, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
      type: "password",
      name: "password",
      placeholder: "Password",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.password
    }), errors.password && touched.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "text-danger"
    }, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Login"));
  })));
}

//création de la requete pour récuperer user
var fetchUser = function fetchUser(data) {
  axios__WEBPACK_IMPORTED_MODULE_15__.get(REACT_APP_SERVER_NAME + "/api/users/" + data.data.userid + "?jwt=" + data.token);
};

/***/ }),

/***/ "./assets/features/session/index.js":
/*!******************************************!*\
  !*** ./assets/features/session/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetails": () => (/* reexport safe */ _session_SessionDetails__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "SessionNew": () => (/* reexport safe */ _session_SessionNew__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "SessionPlaceDetails": () => (/* reexport safe */ _session_place_SessionPlaceDetails__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "SessionPlaceNew": () => (/* reexport safe */ _session_place_SessionPlaceNew__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "SessionPlacesList": () => (/* reexport safe */ _session_place_SessionPlacesList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SessionTypeDetails": () => (/* reexport safe */ _session_type_SessionTypeDetails__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SessionTypeNew": () => (/* reexport safe */ _session_type_SessionTypeNew__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "SessionTypesList": () => (/* reexport safe */ _session_type_SessionTypesList__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "SessionsList": () => (/* reexport safe */ _session_SessionsList__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _session_place_SessionPlaceNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-place/SessionPlaceNew */ "./assets/features/session/session-place/SessionPlaceNew.js");
/* harmony import */ var _session_place_SessionPlacesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-place/SessionPlacesList */ "./assets/features/session/session-place/SessionPlacesList.js");
/* harmony import */ var _session_place_SessionPlaceDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-place/SessionPlaceDetails */ "./assets/features/session/session-place/SessionPlaceDetails.js");
/* harmony import */ var _session_type_SessionTypeNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-type/SessionTypeNew */ "./assets/features/session/session-type/SessionTypeNew.js");
/* harmony import */ var _session_type_SessionTypesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-type/SessionTypesList */ "./assets/features/session/session-type/SessionTypesList.js");
/* harmony import */ var _session_type_SessionTypeDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-type/SessionTypeDetails */ "./assets/features/session/session-type/SessionTypeDetails.js");
/* harmony import */ var _session_SessionNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session/SessionNew */ "./assets/features/session/session/SessionNew.js");
/* harmony import */ var _session_SessionsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session/SessionsList */ "./assets/features/session/session/SessionsList.js");
/* harmony import */ var _session_SessionDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./session/SessionDetails */ "./assets/features/session/session/SessionDetails.js");










/***/ }),

/***/ "./assets/features/session/session-place/SessionPlaceDetails.js":
/*!**********************************************************************!*\
  !*** ./assets/features/session/session-place/SessionPlaceDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionPlaceDetails)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SessionPlaceDetails = /*#__PURE__*/function (_Component) {
  _inherits(SessionPlaceDetails, _Component);
  var _super = _createSuper(SessionPlaceDetails);
  function SessionPlaceDetails(props) {
    var _this;
    _classCallCheck(this, SessionPlaceDetails);
    _this = _super.call(this, props);
    _this.state = {
      sessionPlace: null,
      errorMessage: null,
      loaded: true
    };
    return _this;
  }
  _createClass(SessionPlaceDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //Récupère le id en découpant la route
      var path = this.props.path["*"];
      var id = path.split("/")[1];

      //Requete pour récuperer id
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__["default"].get("/session_places/" + id, {}).then(function (response) {
        if (response.status === 200) {
          var sessionPlace = response.data;
          _this2.setState({
            sessionPlace: sessionPlace,
            loaded: false
          });
        }
      })
      //si sessionPlace pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        _this2.setState({
          errorMessage: err.message,
          loaded: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_18__.Alert, {
        message: this.state.errorMessage,
        color: "danger"
      }), this.state.loaded || this.state.sessionPlace === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_18__.Loading, null) : this.state.sessionPlace.zip_code + " - " + this.state.sessionPlace.city);
    }
  }]);
  return SessionPlaceDetails;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);


/***/ }),

/***/ "./assets/features/session/session-place/SessionPlaceNew.js":
/*!******************************************************************!*\
  !*** ./assets/features/session/session-place/SessionPlaceNew.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionPlaceNew)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var SessionPlaceNew = /*#__PURE__*/function (_Component) {
  _inherits(SessionPlaceNew, _Component);
  var _super = _createSuper(SessionPlaceNew);
  function SessionPlaceNew(props) {
    var _this;
    _classCallCheck(this, SessionPlaceNew);
    _this = _super.call(this, props);
    //validation du formulaire
    _defineProperty(_assertThisInitialized(_this), "submit", function (values, actions) {
      _this.setState({
        message: null,
        loaded: true
      });

      //creation de la requete
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__["default"].post("/session_places", values, {}).then(function (response) {
        if (response.status === 201) {
          _this.setState({
            message: "Place de session crée avec succès",
            messageColor: "success",
            loaded: false
          });
          // actions.resetForm();
        }
      })
      //si erreur on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        _this.setState({
          message: err.response.data.message,
          messageColor: "danger",
          loaded: false
        });
        actions.isSubmitting = false;
      });
    });
    //validation des données
    _defineProperty(_assertThisInitialized(_this), "SessionPlaceSchema", yup__WEBPACK_IMPORTED_MODULE_20__.object().shape({
      street: yup__WEBPACK_IMPORTED_MODULE_20__.string().min(3, 'Nom de rue trop court').required('Veuillez indiquer un nom de rue'),
      streetNumber: yup__WEBPACK_IMPORTED_MODULE_20__.string().min(1, 'Veuillez indiquer un numéro de rue'),
      zipCode: yup__WEBPACK_IMPORTED_MODULE_20__.number().min(1000, 'Le code zip doit être de min 4 chiffres').max(9999, 'Le code zip doit être de max 4 chiffre').required('Veuillez indiquer un code postal'),
      city: yup__WEBPACK_IMPORTED_MODULE_20__.string().min(3, 'Nom de ville trop court').required('Veuillez indiquer une ville')
    }));
    _this.state = {
      message: null,
      messageColor: null,
      loaded: false
    };
    return _this;
  }
  _createClass(SessionPlaceNew, [{
    key: "render",
    value: function render() {
      //on affiche le formulaire
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, this.state.loaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
        className: "container-fluid p-5 d-flex flex-column justify-content-center align-items-center"
      }, this.state.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Alert, {
        message: this.state.message,
        color: this.state.messageColor
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Formik, {
        onSubmit: this.submit,
        initialValues: {
          street: "",
          streetNumber: "",
          zipCode: "",
          city: ""
        },
        validationSchema: this.SessionPlaceSchema
      }, function (_ref) {
        var values = _ref.values,
          handleBlur = _ref.handleBlur,
          handleChange = _ref.handleChange,
          handleSubmit = _ref.handleSubmit,
          isSubmitting = _ref.isSubmitting,
          errors = _ref.errors,
          touched = _ref.touched;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("form", {
          onSubmit: handleSubmit,
          className: "bg-white border p-5 d-flex flex-column"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Rue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "street",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.street
        }), errors.street && touched.street && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.street)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Num\xE9ro de rue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "streetNumber",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.streetNumber
        }), errors.streetNumber && touched.streetNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.streetNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Code postal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          type: "number",
          name: "zipCode",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.zipCode
        }), errors.zipCode && touched.zipCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.zipCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, "Ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(formik__WEBPACK_IMPORTED_MODULE_17__.Field, {
          name: "city",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.city
        }), errors.city && touched.city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
          className: "text-danger"
        }, errors.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting
        }, "Envoyer"));
      })));
    }
  }]);
  return SessionPlaceNew;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);


/***/ }),

/***/ "./assets/features/session/session-place/SessionPlacesList.js":
/*!********************************************************************!*\
  !*** ./assets/features/session/session-place/SessionPlacesList.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionPlacesList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








// TODO MOVE TO REDUX
//création de la requete
var fetchSessionPlaces = function fetchSessionPlaces() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_24__["default"].get("/session_places?page=1&itemsPerPage=30").then(function (response) {
              if (response.status === 200) {
                dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_25__.setSessionPlaces)(response));
              }
            })
            //si item pas valide on update le state pour mettre un message d'erreur
            ["catch"](function (err) {
              dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_25__.setAlert)({
                color: "danger",
                message: "Une erreur est survenue !"
              }));
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
function SessionPlacesList() {
  var sessionPlaces = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useSelector)(function (state) {
    return state.sessionPlaces.data;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useDispatch)();

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    dispatch(fetchSessionPlaces());
  }, []);
  if (sessionPlaces) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement((react__WEBPACK_IMPORTED_MODULE_23___default().Fragment), null, sessionPlaces["hydra:member"].map(function (sessionPlace, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
        to: "/session-place/" + sessionPlace.id,
        className: "nav-link",
        key: sessionPlace.id
      }, sessionPlace.zip_code + " " + sessionPlace.city);
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_26__.Loading, null);
  }
}

/***/ }),

/***/ "./assets/features/session/session-type/SessionTypeDetails.js":
/*!********************************************************************!*\
  !*** ./assets/features/session/session-type/SessionTypeDetails.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessiontypeDetails)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SessiontypeDetails = /*#__PURE__*/function (_Component) {
  _inherits(SessiontypeDetails, _Component);
  var _super = _createSuper(SessiontypeDetails);
  function SessiontypeDetails(props) {
    var _this;
    _classCallCheck(this, SessiontypeDetails);
    _this = _super.call(this, props);
    _this.state = {
      sessionType: null,
      errorMessage: null,
      loaded: true
    };
    return _this;
  }
  _createClass(SessiontypeDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //Récupère le id en découpant la route
      var path = this.props.path["*"];
      var id = path.split("/")[1];

      //Requete pour récuperer id
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__["default"].get("/session_types/" + id, {}).then(function (response) {
        if (response.status === 200) {
          var sessionType = response.data;
          _this2.setState({
            sessionType: sessionType,
            loaded: false
          });
        }
      })
      //si sessionType pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        _this2.setState({
          errorMessage: err.message,
          loaded: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Alert, {
        message: this.state.errorMessage,
        color: "danger"
      }), this.state.loaded || this.state.sessionType === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Loading, null) : this.state.sessionType.name + " - " + this.state.sessionType.description);
    }
  }]);
  return SessiontypeDetails;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);


/***/ }),

/***/ "./assets/features/session/session-type/SessionTypeNew.js":
/*!****************************************************************!*\
  !*** ./assets/features/session/session-type/SessionTypeNew.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessiontypeNew)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var SessiontypeNew = /*#__PURE__*/function (_Component) {
  _inherits(SessiontypeNew, _Component);
  var _super = _createSuper(SessiontypeNew);
  function SessiontypeNew(props) {
    var _this;
    _classCallCheck(this, SessiontypeNew);
    _this = _super.call(this, props);
    //validation du formulaire
    _defineProperty(_assertThisInitialized(_this), "submit", function (values, actions) {
      _this.setState({
        message: null,
        loaded: true
      });

      //creation de la requete
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_20__["default"].post("/session_types", values, {}).then(function (response) {
        if (response.status === 201) {
          _this.setState({
            message: "Type de session crée avec succès",
            messageColor: "success",
            loaded: false
          });
          // actions.resetForm();
        }
      })
      //si erreur on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        _this.setState({
          message: err.response.data.message,
          messageColor: "danger",
          loaded: false
        });
        actions.isSubmitting = false;
      });
    });
    //validation des données
    _defineProperty(_assertThisInitialized(_this), "SessionTypeSchema", yup__WEBPACK_IMPORTED_MODULE_22__.object().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_22__.string().min(3, "Nom trop court").required("Veuillez indiquer un nom"),
      description: yup__WEBPACK_IMPORTED_MODULE_22__.string().min(10, "Veuillez indiquer une description, min 10 caractères").required("Veuillez indiquer une description"),
      priceOf: yup__WEBPACK_IMPORTED_MODULE_22__.number().positive("Le prix n'est pas positif").required("Veuillez indiquer un prix"),
      sessionPlace_id: yup__WEBPACK_IMPORTED_MODULE_22__.number().min(1)
    }));
    _this.state = {
      message: null,
      messageColor: null,
      loaded: true,
      sessionPlaceListOption: []
    };
    return _this;
  }
  _createClass(SessiontypeNew, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //récupération des sessionPlaces
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_20__["default"].get("/session_places", {}).then(function (response) {
        if (response.status === 200) {
          var options = response.data["hydra:member"].map(function (sessionPlace) {
            return {
              value: sessionPlace.id,
              name: sessionPlace.zip_code + " " + sessionPlace.city + " - " + sessionPlace.street + " " + sessionPlace.street_number
            };
          });
          _this2.setState({
            sessionPlaceListOption: options,
            loaded: false
          });
        }
      })
      //si sessionPlace pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        _this2.setState({
          message: err.message,
          loaded: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      //on affiche le formulaire
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, this.state.loaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_21__.Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
        className: "container-fluid p-5 d-flex flex-column justify-content-center align-items-center"
      }, this.state.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_21__.Alert, {
        message: this.state.message,
        color: this.state.messageColor
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(formik__WEBPACK_IMPORTED_MODULE_19__.Formik, {
        onSubmit: this.submit,
        initialValues: {
          name: "",
          description: "",
          priceOf: "",
          sessionPlace_id: ""
        },
        validationSchema: this.SessionTypeSchema
      }, function (_ref) {
        var values = _ref.values,
          handleBlur = _ref.handleBlur,
          handleChange = _ref.handleChange,
          handleSubmit = _ref.handleSubmit,
          isSubmitting = _ref.isSubmitting,
          errors = _ref.errors,
          touched = _ref.touched;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
          onSubmit: handleSubmit,
          className: "bg-white border p-5 d-flex flex-column"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(formik__WEBPACK_IMPORTED_MODULE_19__.Field, {
          name: "name",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.name
        }), errors.name && touched.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "text-danger"
        }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(formik__WEBPACK_IMPORTED_MODULE_19__.Field, {
          name: "description",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.description
        }), errors.description && touched.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "text-danger"
        }, errors.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", null, "Prix de la session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(formik__WEBPACK_IMPORTED_MODULE_19__.Field, {
          name: "priceOf",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.priceOf
        }), errors.priceOf && touched.priceOf && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "text-danger"
        }, errors.priceOf)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", null, "Place de session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(formik__WEBPACK_IMPORTED_MODULE_19__.Field, {
          as: "select",
          name: "sessionPlace_id",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
          key: "0",
          value: "0"
        }, "Veuillez selectionner"), _this3.state.sessionPlaceListOption.map(function (s) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
            key: s.value,
            value: s.value
          }, s.name);
        })), errors.sessionPlace_id && touched.sessionPlace_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
          className: "text-danger"
        }, errors.sessionPlace_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
          type: "submit",
          className: "btn btn-primary",
          disabled: isSubmitting
        }, "Envoyer"));
      })));
    }
  }]);
  return SessiontypeNew;
}(react__WEBPACK_IMPORTED_MODULE_18__.Component);


/***/ }),

/***/ "./assets/features/session/session-type/SessionTypesList.js":
/*!******************************************************************!*\
  !*** ./assets/features/session/session-type/SessionTypesList.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionPlacesList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








//création de la requete
var fetchSessionTypes = function fetchSessionTypes() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_24__["default"].get("/session_types?page=1&itemsPerPage=30").then(function (response) {
              if (response.status === 200) {
                dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_25__.setSessionTypes)(response));
              }
            })
            //si item pas valide on update le state pour mettre un message d'erreur
            ["catch"](function (err) {
              dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_25__.setAlert)({
                color: "danger",
                message: "Une erreur est survenue !" + err
              }));
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
function SessionPlacesList() {
  var sessionTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useSelector)(function (state) {
    return state.sessionTypes.data;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useDispatch)();

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    dispatch(fetchSessionTypes());
  }, []);
  if (sessionTypes) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement((react__WEBPACK_IMPORTED_MODULE_23___default().Fragment), null, sessionTypes["hydra:member"].map(function (sessionType, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
        to: "/session-type/" + sessionType.id,
        className: "nav-link",
        key: sessionType.id
      }, sessionType.name);
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_26__.Loading, null);
  }
}

/***/ }),

/***/ "./assets/features/session/session/SessionDetails.js":
/*!***********************************************************!*\
  !*** ./assets/features/session/session/SessionDetails.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessiontypeDetails)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SessiontypeDetails = /*#__PURE__*/function (_Component) {
  _inherits(SessiontypeDetails, _Component);
  var _super = _createSuper(SessiontypeDetails);
  function SessiontypeDetails(props) {
    var _this;
    _classCallCheck(this, SessiontypeDetails);
    _this = _super.call(this, props);
    _this.state = {
      session: null,
      errorMessage: null,
      loaded: true
    };
    return _this;
  }
  _createClass(SessiontypeDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //Récupère le id en découpant la route
      var path = this.props.path["*"];
      var id = path.split("/")[1];

      //Requete pour récuperer id
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_18__["default"].get("/sessions/" + id, {}).then(function (response) {
        if (response.status === 200) {
          var session = response.data;
          _this2.setState({
            session: session,
            loaded: false
          });
        }
      })
      //si session pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        _this2.setState({
          errorMessage: err.message,
          loaded: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Alert, {
        message: this.state.errorMessage,
        color: "danger"
      }), this.state.loaded || this.state.session === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_19__.Loading, null) : this.state.session.session_type.name + " " + (0,dateformat__WEBPACK_IMPORTED_MODULE_20__["default"])(this.state.session.day_at, "dd mmm yyyy HH:MM:ss"));
    }
  }]);
  return SessiontypeDetails;
}(react__WEBPACK_IMPORTED_MODULE_17__.Component);


/***/ }),

/***/ "./assets/features/session/session/SessionNew.js":
/*!*******************************************************!*\
  !*** ./assets/features/session/session/SessionNew.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessiontypeNew)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../redux */ "./assets/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function SessiontypeNew() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    stOptions = _useState2[0],
    setStOptions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useDispatch)();

  //validation du formulaire
  var submit = function submit(values, actions) {
    //creation de la requete
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_15__["default"].post("/sessions", values, {}).then(function (response) {
      if (response.status === 201) {
        dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_18__.setAlert)({
          color: "success",
          message: "La session à bien étée ajoutée !"
        }));
        actions.resetForm();
      }
    })
    //si erreur on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_18__.setAlert)({
        color: "danger",
        message: "Une erreur est survenue !"
      }));
      actions.resetForm();
    });
    actions.isSubmitting = false;
  };

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    //récupération des sessionTypes
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_15__["default"].get("/session_types", {}).then(function (response) {
      if (response.status === 200) {
        var options = response.data["hydra:member"].map(function (sessionType) {
          return {
            value: sessionType.id,
            name: sessionType.name
          };
        });
        setStOptions(options);
      }
    })
    //si sessionType pas valide on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_18__.setAlert)({
        color: "danger",
        message: "Une erreur est survenue !"
      }));
    });
  }, []);

  //validation des données
  var SessionSchema = yup__WEBPACK_IMPORTED_MODULE_16__.object().shape({
    dayAt: yup__WEBPACK_IMPORTED_MODULE_16__.string().matches(/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d[\s](0[0-9]|1[0-9]|2[0-4]):(0[0-9]|[12345][0-9])$/, "Format dd.mm.yyyy hh:mm").required("Date Requise"),
    toDone: yup__WEBPACK_IMPORTED_MODULE_16__.number().min(0).max(1),
    sessionType_id: yup__WEBPACK_IMPORTED_MODULE_16__.number().min(1)
  });

  //on affiche le formulaire
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(formik__WEBPACK_IMPORTED_MODULE_14__.Formik, {
    onSubmit: submit,
    initialValues: {
      dayAt: searchParams.get("date"),
      toDone: 1,
      sessionType_id: ""
    },
    validationSchema: SessionSchema
  }, function (_ref) {
    var values = _ref.values,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      errors = _ref.errors,
      touched = _ref.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "bg-white border p-5 d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", null, "Jour et heure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(formik__WEBPACK_IMPORTED_MODULE_14__.Field, {
      name: "dayAt",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.dayAt
    }), errors.dayAt && touched.dayAt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "text-danger"
    }, errors.dayAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", null, "A lieu ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(formik__WEBPACK_IMPORTED_MODULE_14__.Field, {
      as: "select",
      name: "toDone",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.toDone
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("option", {
      value: 1
    }, "Oui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("option", {
      value: 0
    }, "Non")), errors.toDone && touched.toDone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "text-danger"
    }, errors.toDone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", null, "Type de session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(formik__WEBPACK_IMPORTED_MODULE_14__.Field, {
      as: "select",
      name: "sessionType_id",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("option", {
      key: "0",
      value: "0"
    }, "Veuillez selectionner"), stOptions.map(function (s) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("option", {
        key: s.value,
        value: s.value
      }, s.name);
    })), errors.sessionPlace_id && touched.sessionPlace_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "text-danger"
    }, errors.sessionPlace_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Envoyer"));
  }));
}

/***/ }),

/***/ "./assets/features/session/session/SessionsList.js":
/*!*********************************************************!*\
  !*** ./assets/features/session/session/SessionsList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionsList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../redux */ "./assets/redux.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/utils */ "./assets/components/utils/index.js");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fullcalendar/core/locales/fr */ "./node_modules/@fullcalendar/core/locales/fr.js");
/* harmony import */ var _components_utils_DateFormat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/utils/DateFormat */ "./assets/components/utils/DateFormat.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // a plugin!
 // needed for dayClick



var handleDateClick = function handleDateClick(arg) {
  // bind with an arrow function
  var date = arg.dateStr.split("-");
  date = date[2] + "." + date[1] + "." + date[0];
  if (window.confirm("Ajouter une session le " + date + " ?") === true) {
    window.location.assign("/new-session?date=" + date + " " + "17:30:00");
  }
};
function SessionsList() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];

  //création de notre requete API avec useEffect
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_15__["default"].get("/sessions").then(function (response) {
      if (response.status === 200) {
        var array = [];
        response.data["hydra:member"].map(function (session) {
          array.push({
            title: session.session_type.name,
            date: session.day_at,
            url: "/session/" + session.id,
            display: "list-item"
          });
          array.push({
            title: "hello",
            date: session.day_at,
            display: "background",
            backgroundColor: "pink"
          });
        });
        setList(array);
      }
    })
    //si item pas valide on update le state pour mettre un message d'erreur
    ["catch"](function (err) {
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_16__.setAlert)({
        color: "danger",
        message: "Une erreur est survenue !" + err
      }));
    });
  }, []);
  if (list.length !== 0) {
    console.log(list);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
      locale: _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_21__["default"],
      firstDay: "1",
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_19__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_20__["default"]],
      initialView: "dayGridMonth",
      events: list,
      dateClick: handleDateClick,
      eventBackgroundColor: "#CC0000",
      eventColor: "#378006",
      aspectRatio: "2.5"
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_17__.Loading, null);
  }
}

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./assets/index.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./assets/App.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/app.css */ "./assets/css/app.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux */ "./assets/redux.js");




/* import style from "./assets/css/style.scss" */



var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
  store: _redux__WEBPACK_IMPORTED_MODULE_6__.store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./assets/redux.js":
/*!*************************!*\
  !*** ./assets/redux.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "setAlert": () => (/* binding */ setAlert),
/* harmony export */   "setBill": () => (/* binding */ setBill),
/* harmony export */   "setCustomers": () => (/* binding */ setCustomers),
/* harmony export */   "setItem": () => (/* binding */ setItem),
/* harmony export */   "setSessionPlaces": () => (/* binding */ setSessionPlaces),
/* harmony export */   "setSessionTypes": () => (/* binding */ setSessionTypes),
/* harmony export */   "setSessions": () => (/* binding */ setSessions),
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);


















function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _require = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),
  createSlice = _require.createSlice,
  configureStore = _require.configureStore;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// alerts
/////////////////////////////////////////////////////////////////////////////////////////////////////
var alertSlice = createSlice({
  name: "alert",
  initialState: null,
  reducers: {
    setAlert: function setAlert(state, action) {
      //{ type: "alert/addAlert", payload:{ "color":"danger", "message":"Erreur 404"}}
      return _objectSpread({}, action.payload);
    }
  }
});

//petites fonction qui permettent de préciser uniquement le payload
var setAlert = alertSlice.actions.setAlert;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// customers
/////////////////////////////////////////////////////////////////////////////////////////////////////

var customersSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {
    setCustomers: function setCustomers(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var setCustomers = customersSlice.actions.setCustomers;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// items
/////////////////////////////////////////////////////////////////////////////////////////////////////

var itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    setItem: function setItem(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var _itemsSlice$actions = itemsSlice.actions,
  setItem = _itemsSlice$actions.setItem,
  addItem = _itemsSlice$actions.addItem;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// sessions
/////////////////////////////////////////////////////////////////////////////////////////////////////

var sessionsSlice = createSlice({
  name: "sessions",
  initialState: [],
  reducers: {
    setSessions: function setSessions(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var setSessions = sessionsSlice.actions.setSessions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// sessions Place
/////////////////////////////////////////////////////////////////////////////////////////////////////

var sessionPlacesSlice = createSlice({
  name: "session_places",
  initialState: [],
  reducers: {
    setSessionPlaces: function setSessionPlaces(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var setSessionPlaces = sessionPlacesSlice.actions.setSessionPlaces;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// sessions Type
/////////////////////////////////////////////////////////////////////////////////////////////////////

var sessionsTypeSlice = createSlice({
  name: "sessions_type",
  initialState: [],
  reducers: {
    setSessionTypes: function setSessionTypes(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var setSessionTypes = sessionsTypeSlice.actions.setSessionTypes;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// User
/////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO AJOUTER LOADING, fetch user

var UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: function setUser(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var setUser = UserSlice.actions.setUser;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Bill
/////////////////////////////////////////////////////////////////////////////////////////////////////

var BillSlice = createSlice({
  name: "bill",
  initialState: [],
  reducers: {
    setBill: function setBill(state, action) {
      return _objectSpread({}, action.payload);
    }
  }
});
var setBill = BillSlice.actions.setBill;
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Create store
/////////////////////////////////////////////////////////////////////////////////////////////////////

var store = configureStore({
  reducer: {
    customers: customersSlice.reducer,
    items: itemsSlice.reducer,
    alert: alertSlice.reducer,
    sessions: sessionsSlice.reducer,
    sessionPlaces: sessionPlacesSlice.reducer,
    sessionTypes: sessionsTypeSlice.reducer,
    user: UserSlice.reducer,
    bills: BillSlice.reducer
  },
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

/***/ }),

/***/ "./assets/App.css":
/*!************************!*\
  !*** ./assets/App.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/index.css":
/*!**************************!*\
  !*** ./assets/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fullcalendar_core_locales_fr_js-node_modules_fullcalendar_daygrid_main_j-14fd70"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvQXBwLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2UvSGVhZGVyLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2UvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9BbGVydC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3V0aWxzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvbW9udGhGUi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29uZi9BcHBSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbmYvYXhpb3MvYXBpLmJuaS5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC9CaWxsRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC9CaWxsR2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvQmlsbExpc3QuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvdGVtcGxhdGUvQmlsbERldGFpbHNGYWN0dXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC90ZW1wbGF0ZS9CaWxsSW5mby5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC90ZW1wbGF0ZS9CaWxsTGVmdENvbHVtbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvQ3VzdG9tZXJEZXRhaWxzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9jdXN0b21lci9DdXN0b21lckxpc3QuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL0N1c3RvbWVyTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvdGVtcGxhdGUvQ3VzdG9tZXJCaWxsc0xpc3QuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL3RlbXBsYXRlL0N1c3RvbWVySW5mby5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvdGVtcGxhdGUvQ3VzdG9tZXJMZWZ0Q29sdW1uLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL0l0ZW1EZXRhaWxzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL0l0ZW1MaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL0l0ZW1OZXcuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2l0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tcGxhY2UvU2Vzc2lvblBsYWNlRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZU5ldy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZXNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL3Nlc3Npb24vc2Vzc2lvbi10eXBlL1Nlc3Npb25UeXBlTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZXNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24vU2Vzc2lvbkRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL3Nlc3Npb24vc2Vzc2lvbi9TZXNzaW9uTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24vU2Vzc2lvbnNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2Nzcy9hcHAuY3NzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9pbmRleC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMb2dpbiwgSG9tZSB9IGZyb20gXCIuL2ZlYXR1cmVzXCI7XG5pbXBvcnQgeyBQcml2YXRlUm91dGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIipcIlxuICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZT5cbiAgICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9sb2dpblwiXG4gICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlPlxuICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvUm91dGVzPlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL3BhZ2UvSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lkZUJhciB9IGZyb20gJy4vcGFnZS9TaWRlQmFyJztcbiIsImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBGYVVzZXJBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEJzRmlsbEdlYXJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBGaUxvZ091dCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcbiAgY29uc3QgYXNzb2NpYXRpb24gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuZGF0YS5hc3NvY2lhdGlvbik7XG5cbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIGNvb2tpZXMucmVtb3ZlKFwiQVBJQ09PS0lFXCIsIHsgc2FtZVNpdGU6IFwic3RyaWN0XCIgfSk7XG4gICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogICAgICAgPGEgaHJlZj17UkVBQ1RfQVBQX1NFUlZFUl9GUk9OVF9OQU1FfSBjbGFzc05hbWU9XCJoZWFkZXJfX2ltYWdlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e1JFQUNUX0FQUF9TRVJWRVJfTkFNRSArIFwiL2ltZy9sb2dvcy9cIiArIGFzc29jaWF0aW9uLmxvZ29JbWd9XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIC8+XG4gICAgICA8L2E+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdlwiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIDxGYVVzZXJBbHQgLz5cbiAgICAgICAgICB7XCIgSGkgXCIgKyB1c2VyLmZpcnN0bmFtZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPEJzRmlsbEdlYXJGaWxsIC8+IEFkbWluXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+XG4gICAgICAgICAgPEZpTG9nT3V0IC8+IExvZ291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93blwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImxlZnRfbWVudVwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fdWxcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgQ3VzdG9tZXJzXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2N1c3RvbWVyc1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBDdXN0b21lcnMgbGlzdGVcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL25ldy1jdXN0b21lcnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTm91dmVhdSBtZW1icmVcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgU2Vzc2lvbnNcbiAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuXG4gICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duX21lbnVcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2Vzc2lvbnNcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgU2Vzc2lvbnNcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9uZXctc2Vzc2lvblwiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBOb3V2ZWxsZSBzZXNzaW9uXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9zZXNzaW9uLXBsYWNlc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQbGFjZSBkZSBzZXNzaW9uc1xuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbmV3LXNlc3Npb24tcGxhY2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTm91dmVsbGUgcGxhY2UgZGUgc2Vzc2lvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvL3Nlc3Npb24tdHlwZXNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVHlwZXMgZGUgc2Vzc2lvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbmV3LXNlc3Npb24tdHlwZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOb3V2ZWF1IHR5cGUgZGUgc2Vzc2lvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93blwiPlxuICAgICAgICAgICAgICBJdGVtc1xuICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG5cbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25fbWVudVwiPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9pdGVtc1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBJdGVtcyBsaXN0ZVxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL25ldy1pdGVtXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiPlxuICAgICAgICAgICAgICAgIE5vdXZlYXUgaXRlbVxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93blwiPlxuICAgICAgICAgICAgICBGYWN0dXJlc1xuICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG5cbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25fbWVudVwiPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9iaWxsc1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBMaXN0ZSBkZXMgRmFjdHVyZXNcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL2dlbmVyYXRlLWJpbGxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2VuZXJlciBsZXMgZmFjdHVyZXNcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCgpIHtcbiAgY29uc3QgYWxlcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsZXJ0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vc2kgdW5lIGFsZXJ0IGVzdCBsYW5jw6llLCBvbiBsYSBkZXNhY3RpdmUgYXByw6hzIFggc2Vjb25kZXNcbiAgaWYgKGFsZXJ0KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRBbGVydChudWxsKSk7XG4gICAgfSwgNDAwMCk7XG4gIH1cblxuICBpZiAoYWxlcnQpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiYWxlcnQgYWxlcnQtXCIgKyBhbGVydC5jb2xvcn0+e2FsZXJ0Lm1lc3NhZ2V9PC9kaXY+O1xuICB9XG59XG4iLCJpbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZUZvcm1hdCh7ZGF0ZSwgZm9ybWF0fSl7XG5cbiAgICBsZXQgZHQgPSBkYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZSBsJ2FubsOpZSBldCBkdSBtb2lzXG4gICAgICAgIGxldCB5ZWFyID0gZHRbMF07XG4gICAgICAgIGxldCBtb250aCA9IGR0WzFdO1xuICAgIGxldCBkYXRlRGF5YW5kSG91cnMgPSBkdFsyXS5zcGxpdChcIlRcIik7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlRGF5YW5kSG91cnNbMF07XG4gICAgbGV0IGRhdGVIb3VycyA9IGRhdGVEYXlhbmRIb3Vyc1sxXS5zcGxpdChcIjpcIik7XG4gICAgICAgIGxldCBob3VycyA9IGRhdGVIb3Vyc1swXTtcbiAgICAgICAgbGV0IG1pbiA9IGRhdGVIb3Vyc1sxXTtcblxuICAgIGxldCBkYXRlVGltZSA9IHllYXIrXCIvXCIrbW9udGgrXCIvXCIrZGF5K1wiIFwiK2hvdXJzK1wiOlwiK21pbitcIjowMFwiXG4gICAgcmV0dXJuKGRhdGVGb3JtYXQoZGF0ZVRpbWUsIGZvcm1hdCkpICAgIFxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXsgeyBtaW5IZWlnaHQ6ICcxMDB2aCd9IH0gY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG4gICAgICA8aW1nIGFsdD1cImxvYWRpbmcgZ2lmXCIgc3JjPVwiaHR0cHM6Ly9pLnJlZGQuaXQvb3VucTFtdzVrZHh5LmdpZlwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2ludGF0aW9uKHByb3BzKSB7XG4gIGNvbnN0IGl0ZW1QZXJQYWdlID0gcHJvcHMuaXRlbVBlclBhZ2U7XG4gIGNvbnN0IG5iUGFnZXMgPSBwcm9wcy5lbGVtW1wiaHlkcmE6dG90YWxJdGVtc1wiXSAvIGl0ZW1QZXJQYWdlO1xuXG4gIGNvbnN0IFthY3R1YWxQYWdlLCBzZXRBY3R1YWxQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcbiAgICBwcm9wcy5saW5rICsgXCI/cGFnZT1cIiArIGFjdHVhbFBhZ2UgKyBcIiZpdGVtc1BlclBhZ2U9XCIgKyBpdGVtUGVyUGFnZVxuICApO1xuICBjb25zdCBbYnRuTmV4dERpc2FibGVkLCBzZXRCdG5OZXh0RGlzYWJsZWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2J0blByZXZEaXNhYmxlZCwgc2V0QnRuUHJldkRpc2FibGVkXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAoZSkgPT4ge1xuICAgIC8vU3VwcHJlc3Npb24gZGUgXCIvYXBpXCIgZHUgbGllblxuICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldC5kYXRhc2V0Lmxpbmsuc3Vic3RyKDQpO1xuICAgIC8vUsOpY3VwZXJhdGlvbiBkdSBudW3DqXJvIGRlIHBhZ2VcbiAgICBjb25zdCBwYWdlID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucGFnZSk7XG4gICAgc2V0QWN0dWFsUGFnZShwYWdlKTtcbiAgICAvL21pc2Ugw6Agam91ciBkdSBsaWVuXG4gICAgc2V0TGluayhsaW5rKTtcbiAgICBkaXNwYXRjaChwcm9wcy53aGF0VG9EaXNwYXRjaChsaW5rKSk7XG4gIH07XG5cbiAgY29uc3QgcGFnZXNSZW5kZXIgPSAoKSA9PiB7XG4gICAgbGV0IHBhZ2VOdW1iZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuYlBhZ2VzOyBpKyspIHtcbiAgICAgIGxldCBwYWdlQWN0aXZlID0gXCJcIjtcbiAgICAgIGlmIChhY3R1YWxQYWdlID09PSBpKSB7XG4gICAgICAgIHBhZ2VBY3RpdmUgPSBcImFjdGl2ZVwiO1xuICAgICAgfVxuXG4gICAgICBwYWdlTnVtYmVyLnB1c2goXG4gICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZUFjdGl2ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZVBhZ2V9XG4gICAgICAgICAgICBkYXRhLXBhZ2U9e2l9XG4gICAgICAgICAgICBkYXRhLWxpbms9e1xuICAgICAgICAgICAgICBcIi9hcGlcIiArXG4gICAgICAgICAgICAgIHByb3BzLmxpbmsgK1xuICAgICAgICAgICAgICBcIj9wYWdlPVwiICtcbiAgICAgICAgICAgICAgaSArXG4gICAgICAgICAgICAgIFwiJml0ZW1zUGVyUGFnZT1cIiArXG4gICAgICAgICAgICAgIGl0ZW1QZXJQYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZU51bWJlcjtcbiAgfTtcblxuICAvLyBtZXR0cmUgY2VjaSBkYW5zIHVuIGNvbXBvbmVudCB1cGRhdGVcbiAgLy8gICBzZXRCdG5QcmV2RGlzYWJsZWQoXCJcIilcbiAgLy8gICBpZihhY3R1YWxQYWdlID09PSAxKXtcbiAgLy8gICAgICAgc2V0QnRuUHJldkRpc2FibGVkKFwiZGlzYWJsZWRcIilcbiAgLy8gICB9XG4gIC8vICAgc2V0QnRuTmV4dERpc2FibGVkKFwiXCIpXG4gIC8vICAgaWYoYWN0dWFsUGFnZSA9PT0gbmJQYWdlcyl7XG4gIC8vICAgICAgIHNldEJ0bk5leHREaXNhYmxlZChcImRpc2FibGVkXCIpXG4gIC8vICAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2gocHJvcHMud2hhdFRvRGlzcGF0Y2gobGluaykpO1xuICB9LCBbXSk7XG5cbiAgaWYgKG5iUGFnZXMgPD0gMSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGFnZX1cbiAgICAgICAgICAgIGRhdGEtcGFnZT17YWN0dWFsUGFnZSAtIDF9XG4gICAgICAgICAgICBkYXRhLWxpbms9e3Byb3BzLmVsZW1bXCJoeWRyYTp2aWV3XCJdW1wiaHlkcmE6cHJldmlvdXNcIl19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2J0blByZXZEaXNhYmxlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcsOpY8OpZGVudFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7cGFnZXNSZW5kZXIoKX1cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZVBhZ2V9XG4gICAgICAgICAgICBkYXRhLXBhZ2U9e2FjdHVhbFBhZ2UgKyAxfVxuICAgICAgICAgICAgZGF0YS1saW5rPXtwcm9wcy5lbGVtW1wiaHlkcmE6dmlld1wiXVtcImh5ZHJhOm5leHRcIl19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2J0bk5leHREaXNhYmxlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWl2YW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgLy8gVE9ETyBBREQgR0VUIFVTRVIgRlJPTSBSRURVWFxuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbG9naW5cIikge1xuICAgIC8vIGluc3RydWN0aW9uIHNpIGxlIGNvb2tpZSBleGlzdGVcbiAgICBpZiAoY29va2llcy5nZXQoXCJBUElDT09LSUVcIikpIHtcbiAgICAgIHJldHVybiA8TmF2aWdhdGUgcmVwbGFjZSB0bz1cIi9cIiAvPjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW5zdHJ1Y3Rpb24gc2kgbGUgY29va2llIG4nZXhpc3RlIHBhc1xuICAgIGlmICghY29va2llcy5nZXQoXCJBUElDT09LSUVcIikpIHtcbiAgICAgIHJldHVybiA8TmF2aWdhdGUgcmVwbGFjZSB0bz1cIi9sb2dpblwiIC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJpdmF0ZVJvdXRlIH0gZnJvbSAnLi9Qcml2YXRlUm91dGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nIH0gZnJvbSAnLi9Mb2FkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL0FsZXJ0JzsiLCJjb25zdCBtb250aEZSID0gW1xuICBbMSwgXCJKYW52aWVyXCJdLFxuICBbMiwgXCJGw6l2cmllclwiXSxcbiAgWzMsIFwiTWFyc1wiXSxcbiAgWzQsIFwiQXZyaWxcIl0sXG4gIFs1LCBcIk1haVwiXSxcbiAgWzYsIFwiSnVpblwiXSxcbiAgWzcsIFwiSnVpbGxldFwiXSxcbiAgWzgsIFwiQW91dFwiXSxcbiAgWzksIFwiU2VwdGVtYnJlXCJdLFxuICBbMTAsIFwiT2N0cm9icmVcIl0sXG4gIFsxMSwgXCJOb3ZlbWJyZVwiXSxcbiAgWzEyLCBcIkTDqWNlbWJyZVwiXSxcbl07XG5leHBvcnQgZGVmYXVsdCBtb250aEZSO1xuIiwiaW1wb3J0IHtcbiAgQ3VzdG9tZXJMaXN0LFxuICBDdXN0b21lckRldGFpbHMsXG4gIEN1c3RvbWVyTmV3LFxufSBmcm9tIFwiLi4vZmVhdHVyZXMvY3VzdG9tZXJcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBTZXNzaW9uUGxhY2VEZXRhaWxzLFxuICBTZXNzaW9uUGxhY2VzTGlzdCxcbiAgU2Vzc2lvblBsYWNlTmV3LFxuICBTZXNzaW9uVHlwZU5ldyxcbiAgU2Vzc2lvblR5cGVzTGlzdCxcbiAgU2Vzc2lvblR5cGVEZXRhaWxzLFxuICBTZXNzaW9uTmV3LFxuICBTZXNzaW9uc0xpc3QsXG4gIFNlc3Npb25EZXRhaWxzLFxufSBmcm9tIFwiLi4vZmVhdHVyZXMvc2Vzc2lvblwiO1xuaW1wb3J0IHsgSXRlbUxpc3QsIEl0ZW1OZXcsIEl0ZW1EZXRhaWxzIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2l0ZW1cIjtcbmltcG9ydCB7IEJpbGxMaXN0LCBCaWxsRGV0YWlscywgQmlsbEdlbmVyYXRlIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2JpbGxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwUm91dGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICB7LyogZMOpZmluaSB0b3V0ZXMgbGVzIHJvdXRlcyBkZSBsJ2FwcCAqL31cbiAgICAgIHsvKiBDdXN0b21lcnMgKi99XG4gICAgICA8Um91dGUgcGF0aD1cIi9jdXN0b21lcnNcIiBlbGVtZW50PXs8Q3VzdG9tZXJMaXN0IC8+fSAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvY3VzdG9tZXIvOmlkXCJcbiAgICAgICAgZWxlbWVudD17PEN1c3RvbWVyRGV0YWlscyBwYXRoPXt1c2VQYXJhbXMoKX0gLz59XG4gICAgICAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3LWN1c3RvbWVyc1wiIGVsZW1lbnQ9ezxDdXN0b21lck5ldyAvPn0gLz5cbiAgICAgIHsvKiBTZXNzaW9uIFBsYWNlICovfVxuICAgICAgPFJvdXRlIHBhdGg9XCIvc2Vzc2lvbi1wbGFjZXNcIiBlbGVtZW50PXs8U2Vzc2lvblBsYWNlc0xpc3QgLz59IC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD1cIi9zZXNzaW9uLXBsYWNlLzppZFwiXG4gICAgICAgIGVsZW1lbnQ9ezxTZXNzaW9uUGxhY2VEZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn1cbiAgICAgIC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9uZXctc2Vzc2lvbi1wbGFjZVwiIGVsZW1lbnQ9ezxTZXNzaW9uUGxhY2VOZXcgLz59IC8+XG4gICAgICB7LyogU2Vzc2lvbiBUeXBlICovfVxuICAgICAgPFJvdXRlIHBhdGg9XCIvc2Vzc2lvbi10eXBlc1wiIGVsZW1lbnQ9ezxTZXNzaW9uVHlwZXNMaXN0IC8+fSAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvc2Vzc2lvbi10eXBlLzppZFwiXG4gICAgICAgIGVsZW1lbnQ9ezxTZXNzaW9uVHlwZURldGFpbHMgcGF0aD17dXNlUGFyYW1zKCl9IC8+fVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL25ldy1zZXNzaW9uLXR5cGVcIiBlbGVtZW50PXs8U2Vzc2lvblR5cGVOZXcgLz59IC8+XG4gICAgICB7LyogU2Vzc2lvbiAqL31cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3Nlc3Npb25zXCIgZWxlbWVudD17PFNlc3Npb25zTGlzdCAvPn0gLz5cbiAgICAgIDxSb3V0ZVxuICAgICAgICBwYXRoPVwiL3Nlc3Npb24vOmlkXCJcbiAgICAgICAgZWxlbWVudD17PFNlc3Npb25EZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn1cbiAgICAgIC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9uZXctc2Vzc2lvblwiIGVsZW1lbnQ9ezxTZXNzaW9uTmV3IC8+fSAvPlxuICAgICAgey8qIEl0ZW1zICovfVxuICAgICAgPFJvdXRlIHBhdGg9XCIvaXRlbXNcIiBlbGVtZW50PXs8SXRlbUxpc3QgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9pdGVtLzppZFwiIGVsZW1lbnQ9ezxJdGVtRGV0YWlscyBwYXRoPXt1c2VQYXJhbXMoKX0gLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9uZXctaXRlbVwiIGVsZW1lbnQ9ezxJdGVtTmV3IC8+fSAvPlxuICAgICAgey8qIGJpbGxzICovfVxuICAgICAgPFJvdXRlIHBhdGg9XCIvYmlsbHNcIiBlbGVtZW50PXs8QmlsbExpc3QgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9iaWxsLzppZFwiIGVsZW1lbnQ9ezxCaWxsRGV0YWlscyBwYXRoPXt1c2VQYXJhbXMoKX0gLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9nZW5lcmF0ZS1iaWxsXCIgZWxlbWVudD17PEJpbGxHZW5lcmF0ZSAvPn0gLz5cbiAgICA8L1JvdXRlcz5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCBSRUFDVF9BUFBfU0VSVkVSX05BTUUgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0VSVkVSX05BTUU7XG5cbi8vb24gcGFyc2UgbGUgY29va2llIHBvdXIgcG91dm9pciByw6ljdXBlcmVyIGxlIHRva2VuIG91IGxlIHVzZXJJZFxuZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XG4gIGlmIChjb29raWVzLmdldChcIkFQSUNPT0tJRVwiKSkge1xuICAgIGNvbnN0IGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llcy5nZXQoXCJBUElDT09LSUVcIikpO1xuICAgIHJldHVybiBjb29raWUudG9rZW47XG4gIH1cbn1cblxuY29uc3QgYXBpQm5pID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogUkVBQ1RfQVBQX1NFUlZFUl9OQU1FICsgXCIvYXBpXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGdldFRva2VuKCksXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGFwaUJuaUZpbGUgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBSRUFDVF9BUFBfU0VSVkVSX05BTUUgKyBcIi9hcGlcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgZ2V0VG9rZW4oKSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcGlCbmk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCBCaWxsTGVmdENvbHVtbiBmcm9tIFwiLi90ZW1wbGF0ZS9CaWxsTGVmdENvbHVtblwiO1xuaW1wb3J0IEJpbGxEZXRhaWxzRmFjdHVyYXRpb24gZnJvbSBcIi4vdGVtcGxhdGUvQmlsbERldGFpbHNGYWN0dXJhdGlvblwiO1xuaW1wb3J0IEJpbGxJbmZvIGZyb20gXCIuL3RlbXBsYXRlL0JpbGxJbmZvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbGxEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBiaWxsOiBudWxsLCBlcnJvck1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9Sw6ljdXDDqHJlIGxlIGlkIGVuIGTDqWNvdXBhbnQgbGEgcm91dGVcbiAgICBsZXQgcGF0aCA9IHRoaXMucHJvcHMucGF0aFsnKiddO1xuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XG5cbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL2JpbGxzL1wiK2lkLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBiaWxsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmlsbDogYmlsbCwgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgY3VzdG9tZXIgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIrZXJyKVxuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYodGhpcy5zdGF0ZS5sb2FkZWQgfHwgIXRoaXMuc3RhdGUuYmlsbCl7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAgPEJpbGxMZWZ0Q29sdW1uIGN1c3RvbWVyPXt0aGlzLnN0YXRlLmJpbGwuY3VzdG9tZXJ9IC8+XG4gICAgICAgICAgPEJpbGxEZXRhaWxzRmFjdHVyYXRpb24gYmlsbD17dGhpcy5zdGF0ZS5iaWxsfSAvPlxuICAgICAgICAgIDxCaWxsSW5mbyBiaWxsPXt0aGlzLnN0YXRlLmJpbGx9IC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGb3JtaWssIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEFsZXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9udGhGUiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9tb250aEZSXCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlsbEdlbmVyYXRlKCkge1xuICBsZXQgZGF0ZVllYXIgPSBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgY29uc3QgW2l0ZW1zT3B0aW9ucywgc2V0SXRlbXNPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW21vbnRoXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkuZ2V0VVRDTW9udGgoKSk7XG4gIGNvbnN0IFt5ZWFyXSA9IHVzZVN0YXRlKGRhdGVZZWFyKTtcbiAgY29uc3QgW3llYXJQbHVzXSA9IHVzZVN0YXRlKGRhdGVZZWFyICsgMSk7XG4gIGNvbnN0IFt5ZWFyTWludXNdID0gdXNlU3RhdGUoZGF0ZVllYXIgLSAxKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vY3JlYXRpb24gZGUgbGEgcmVxdWV0ZVxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgY29uc3QgbmV3SXRlbXMgPSBbXTtcbiAgICAvL3N1cHByZXNpb24gZHUgJCBkZXZhbnQgbGVzIGl0ZW1zXG4gICAgdmFsdWVzLml0ZW1MaXN0Lm1hcCgoaSkgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSBpLnNwbGl0KFwiJFwiKTtcbiAgICAgIHJldHVybiBuZXdJdGVtcy5wdXNoKE51bWJlcihpdGVtWzFdKSk7IC8vQWpvdXRlIGwnaXRlbSBmb3JtYXTDqSBlbiBub21icmUgYXUgdGFibGVhdVxuICAgIH0pO1xuICAgIC8vY3LDqWF0aW9uIGQndW4gbm91dmVhdSB0YWJsZWF1IGF2ZWMgbGVzIGRvbm7DqWVzIGNvcnJlY3QgcG91ciBBUElcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB7XG4gICAgICBiaWxsaW5nX21vbnRoOiB2YWx1ZXMuYmlsbGluZ19tb250aCArIFwiLVwiICsgdmFsdWVzLmJpbGxpbmdfeWVhcixcbiAgICAgIGl0ZW1MaXN0OiBuZXdJdGVtcyxcbiAgICAgIGZyb21fYXQ6IHZhbHVlcy5mcm9tX2F0LFxuICAgIH07XG5cbiAgICBhcGlCbmlcbiAgICAgIC5wb3N0KFwiL2JpbGxzL2dlbmVyYXRvclwiLCBuZXdWYWx1ZXMsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgc2V0QWxlcnQoe1xuICAgICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGVzIGZhY3R1cmVzIG9uIGJpZW4gw6l0w6llcyBjcsOpZXNcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGVycmV1ciBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnIpO1xuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgcG91ciBsZSBjaGFyZ2VtZW50IGRlcyBpdGVtc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vcsOpY3Vww6lyYXRpb24gZGVzIGl0ZW1zXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL2l0ZW1zXCIsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBzZXRJdGVtc09wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIHNlc3Npb25UeXBlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcbiAgY29uc3QgaXRlbVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgYmlsbGluZ19tb250aDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgYmlsbGluZ195ZWFyOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICBpdGVtTGlzdDogWXVwLmFycmF5KCkubWluKDApLFxuICAgIGZyb21fYXQ6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pLigwWzEtOV18MVswMTJdKS4oMTl8MjApXFxkXFxkJC8sXG4gICAgICAgIFwiRm9ybWF0IGRkLm1tLnl5eXlcIlxuICAgICAgKVxuICAgICAgLnJlcXVpcmVkKFwiRGF0ZSBSZXF1aXNlXCIpLFxuICB9KTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuICAvL29uIGFmZmljaGUgbGUgZm9ybXVsYWlyZVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxGb3JtaWtcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0fVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgIGJpbGxpbmdfbW9udGg6IG1vbnRoICsgMSxcbiAgICAgICAgICAgIGJpbGxpbmdfeWVhcjogeWVhcixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBbXSxcbiAgICAgICAgICAgIGZyb21fYXQ6IFwiXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtpdGVtU2NoZW1hfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7XG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgcC01IGQtZmxleCBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Nb2lzIGRlIGZhY3R1cmVhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19tb250aFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYmlsbGluZ19tb250aH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bW9udGhGUi5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXttWzBdfSBrZXk9e21bMF0gKyBtWzFdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttWzFdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmJpbGxpbmdfbW9udGggJiYgdG91Y2hlZC5iaWxsaW5nX21vbnRoICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmJpbGxpbmdfbW9udGh9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfeWVhclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYmlsbGluZ195ZWFyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3llYXJNaW51c30+e3llYXJNaW51c308L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3llYXJ9Pnt5ZWFyfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17eWVhclBsdXN9Pnt5ZWFyUGx1c308L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuYmlsbGluZ19tb250aCAmJiB0b3VjaGVkLmJpbGxpbmdfbW9udGggJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuYmlsbGluZ19tb250aH08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7aXRlbXNPcHRpb25zLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIiBrZXk9e2kudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1wiJFwiICsgaS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpZD17aS52YWx1ZSArIGkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17aS52YWx1ZSArIGkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAge2Vycm9ycy5pdGVtTGlzdCAmJiB0b3VjaGVkLml0ZW1MaXN0ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5pdGVtTGlzdH08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBkJ8OpbWlzc2lvbiBkZSBsYSBmYWN0dXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tX2F0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5mcm9tX2F0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5mcm9tX2F0ICYmIHRvdWNoZWQuZnJvbV9hdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5mcm9tX2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW52b3llclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRCaWxsIH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCB7IEZhRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgUGFnaW50YXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvUGFnaW5hdGlvblwiO1xuXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlXG5jb25zdCBmZXRjaEJpbGxzID0gKGxpbmspID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGFwaUJuaVxuICAgICAgLmdldChsaW5rKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICBkaXNwYXRjaChzZXRCaWxsKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlsbExpc3QoKSB7XG4gIGNvbnN0IFtpdGVtUGVyUGFnZSwgc2V0SXRlbVBlclBhZ2VdID0gdXNlU3RhdGUoMTApO1xuICBjb25zdCBsaW5rID0gXCIvYmlsbHNcIjtcbiAgY29uc3QgYmlsbHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmJpbGxzLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEJpbGxzKGxpbmsgKyBcIj9wYWdlPTEmaXRlbXNQZXJQYWdlPVwiICsgaXRlbVBlclBhZ2UpKTtcbiAgfSwgW10pO1xuXG4gIGlmIChiaWxscykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYXBwX3RhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+TW9udGFudDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5DbGllbnQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7YmlsbHNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChiaWxsKSA9PiAoXG4gICAgICAgICAgICAgIDxCaWxsTGlzdFVuaXQgYmlsbD17YmlsbH0ga2V5PXtiaWxsLmlkfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPFBhZ2ludGF0aW9uXG4gICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICBpdGVtUGVyUGFnZT17aXRlbVBlclBhZ2V9XG4gICAgICAgICAgd2hhdFRvRGlzcGF0Y2g9e2ZldGNoQmlsbHN9XG4gICAgICAgICAgZWxlbT17YmlsbHN9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxufVxuXG5mdW5jdGlvbiBCaWxsTGlzdFVuaXQocHJvcHMpIHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcbiAgY29uc3QgZGF0ZURheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGJpbGxpbmdEYXRlID0gbmV3IERhdGUocHJvcHMuYmlsbC50b19hdCk7XG5cbiAgLy9Ew6lmaW5pdGlvbiBkdSB0eXBlIGRlIGJhZGdlIGVuIGZvbmN0aW9uIGR1IHN0YXR1dCBkZSBsYSBmYWN0dXJlXG4gIGxldCBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWluZm9cIjtcbiAgbGV0IGJhZGdlVGV4dCA9IFwiRW4gYXR0ZW50ZVwiO1xuICBpZiAoZGF0ZURheSA+IG5ldyBEYXRlKGJpbGxpbmdEYXRlKSkge1xuICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tZGFuZ2VyXCI7XG4gICAgYmFkZ2VUZXh0ID0gXCJFeHBpcsOpZVwiO1xuICB9XG4gIGlmIChwcm9wcy5iaWxsLmFtb3VudCA9PT0gcHJvcHMuYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2UpIHtcbiAgICBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLXN1Y2Nlc3NcIjtcbiAgICBiYWRnZVRleHQgPSBcIlBhecOpXCI7XG4gIH1cblxuICAvL05vbSDDoCBhZmZpY2hlciAoY29tcGFueSAtIGZpc3RuYW1lIGxhc3RuYW1lKSBvdSAoZmlzdG5hbWUgbGFzdG5hbWUpXG4gIGxldCBkaXNwbGF5TmFtZSA9XG4gICAgcHJvcHMuYmlsbC5jdXN0b21lci5maXJzdG5hbWUgKyBcIiBcIiArIHByb3BzLmJpbGwuY3VzdG9tZXIubGFzdG5hbWU7XG4gIGlmIChwcm9wcy5iaWxsLmN1c3RvbWVyLmNvbXBhbnkpIHtcbiAgICBkaXNwbGF5TmFtZSA9IHByb3BzLmJpbGwuY3VzdG9tZXIuY29tcGFueSArIFwiIC0gXCIgKyBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRyIGtleT17cHJvcHMuYmlsbC5pZH0+XG4gICAgICA8dGg+e3Byb3BzLmJpbGwuYmlsbE51bWJlcn08L3RoPlxuICAgICAgPHRkPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2JhZGdlU3R5bGV9PntiYWRnZVRleHR9PC9zcGFuPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5ICsgXCIgXCIgKyBwcm9wcy5iaWxsLmFtb3VudH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+e2Rpc3BsYXlOYW1lfTwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxOYXZMaW5rIHRvPXtcIi9iaWxsL1wiICsgcHJvcHMuYmlsbC5pZH0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICA8RmFFeWUgLz5cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCaWxsTGlzdCB9IGZyb20gJy4vQmlsbExpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCaWxsRGV0YWlscyB9IGZyb20gJy4vQmlsbERldGFpbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCaWxsR2VuZXJhdGUgfSBmcm9tICcuL0JpbGxHZW5lcmF0ZSc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpbGxEZXRhaWxzRmFjdHVyYXRpb24oeyBiaWxsIH0pIHtcbiAgY29uc3QgW2N1c3RvbWVyU2Vzc2lvbnMsIHNldEN1c3RvbWVyU2Vzc2lvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vcsOpY3VwZXJhdGlvbiBkZSBsJ3V0aWxpc2F0ZXVyIGNvdXJyYW50XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuZGF0YSk7XG5cbiAgbGV0IGRhdGUgPSBiaWxsLmJpbGxpbmdNb250aC5zcGxpdChcIi1cIik7XG5cbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGVbMV0sIGRhdGVbMF0gLSAxKTtcbiAgbGV0IGZpcnN0RGF5ID0gZGF0ZUZvcm1hdChcbiAgICBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSksXG4gICAgXCJkZC5tbS55eXl5XCJcbiAgKTtcbiAgbGV0IGxhc3REYXkgPSBkYXRlRm9ybWF0KFxuICAgIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCksXG4gICAgXCJkZC5tbS55eXl5XCJcbiAgKTtcblxuICBjb25zdCBsaW5rID1cbiAgICBcImN1c3RvbWVyX3Nlc3Npb25zP3BhZ2U9MSZpdGVtc1BlclBhZ2U9MTAwJmN1c3RvbWVyLmlkPVwiICtcbiAgICBiaWxsLmN1c3RvbWVyLmlkICtcbiAgICBcIiZzZXNzaW9uLmRheV9hdCU1QmJlZm9yZSU1RD1cIiArXG4gICAgbGFzdERheSArXG4gICAgXCImc2Vzc2lvbi5kYXlfYXQlNUJhZnRlciU1RD1cIiArXG4gICAgZmlyc3REYXk7XG5cbiAgLy9Ew6lmaW5pdGlvbiBkdSB0eXBlIGRlIGJhZGdlIGVuIGZvbmN0aW9uIGR1IHN0YXR1dCBkZSBsYSBmYWN0dXJlXG4gIGxldCBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWluZm9cIjtcbiAgbGV0IGJhZGdlVGV4dCA9IFwiRW4gYXR0ZW50ZVwiO1xuICBpZiAobmV3IERhdGUoKSA+IG5ldyBEYXRlKGJpbGwudG9fYXQpKSB7XG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1kYW5nZXJcIjtcbiAgICBiYWRnZVRleHQgPSBcIkV4cGlyw6llXCI7XG4gIH1cbiAgaWYgKGJpbGwuYW1vdW50ID09PSBiaWxsLmJpbGxTdGF0dXQuYmFsYW5jZSkge1xuICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tc3VjY2Vzc1wiO1xuICAgIGJhZGdlVGV4dCA9IFwiUGF5w6lcIjtcbiAgfVxuXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIHBvdXIgbGVzIEN1c3RvbWVyU2Vzc2lvbnMgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQobGluaylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBzZXRDdXN0b21lclNlc3Npb25zKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVW5lIGVycmV1ciBlc3Igc3VydmVudWUgIVwiICsgZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy9zaSBjaGFyZ2VtZW50IGRlcyB1c2Vyc2Vzc2lvbiBvbiBtZXQgdW4gbG9hZGluZ1xuICBpZiAoIWN1c3RvbWVyU2Vzc2lvbnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1uLS1sZ181XCI+XG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1uLS1sZ181XCI+XG4gICAgICA8aDM+RMOpdGFpbCBmYWN0dXJhdGlvbjwvaDM+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPlNlc3Npb25zPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtjdXN0b21lclNlc3Npb25zW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoY3MpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2NzLmlkfT5cbiAgICAgICAgICAgICAgPHRkPntjcy5zZXNzaW9uLnNlc3Npb25fdHlwZS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57ZGF0ZUZvcm1hdChjcy5zZXNzaW9uLmRheV9hdCwgXCJkZC5tbS55eXl5XCIpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7dXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3l9e1wiIFwifVxuICAgICAgICAgICAgICAgIHtjcy5zZXNzaW9uLnNlc3Npb25fdHlwZS5wcmljZV9vZn1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge1xuICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgIGl0ZW1zPXtiaWxsLml0ZW1zfVxuICAgICAgICAgICAgICBjdXJyZW5jeT17dXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3l9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5Ub3RhbDwvdGg+XG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIHt1c2VyLmFzc29jaWF0aW9uLmJhbmtJbmZvcm1hdGlvbi5jdXJyZW5jeX0ge2JpbGwuYW1vdW50fVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbUxpc3QoeyBpdGVtcywgY3VycmVuY3kgfSkge1xuICBpZiAoaXRlbXMgIT0gbnVsbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+TGlzdGUgZGVzIEl0ZW1zPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWQgKyBpdGVtLm5hbWV9PlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCI+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICB7Y3VycmVuY3l9IHtpdGVtLnByaWNlX29mfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHMvRGF0ZUZvcm1hdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsSW5mbyhwcm9wcykge1xuICBjb25zdCBiaWxsID0gcHJvcHMuYmlsbDtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcblxuICAvL0TDqWZpbml0aW9uIGR1IHR5cGUgZGUgYmFkZ2UgZW4gZm9uY3Rpb24gZHUgc3RhdHV0IGRlIGxhIGZhY3R1cmVcbiAgbGV0IGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0taW5mb1wiO1xuICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XG4gIGlmIChuZXcgRGF0ZSgpID4gbmV3IERhdGUocHJvcHMuYmlsbC50b19hdCkpIHtcbiAgICBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWRhbmdlclwiO1xuICAgIGJhZGdlVGV4dCA9IFwiRXhwaXLDqWVcIjtcbiAgfVxuICBpZiAocHJvcHMuYmlsbC5hbW91bnQgPT09IHByb3BzLmJpbGwuYmlsbFN0YXR1dC5iYWxhbmNlKSB7XG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1zdWNjZXNzXCI7XG4gICAgYmFkZ2VUZXh0ID0gXCJQYXnDqVwiO1xuICB9XG5cbiAgLy9kZWZpbml0aW9uIGR1IG1vbnRhbnQgZGVqYSBwYXnDqVxuICBsZXQgYmFsYW5jZSA9IFwiLS1cIjtcbiAgaWYgKGJpbGwuYmlsbFN0YXR1dC5iYWxhbmNlKSB7XG4gICAgYmFsYW5jZSA9XG4gICAgICB1c2VyLmFzc29jaWF0aW9uLmJhbmtJbmZvcm1hdGlvbi5jdXJyZW5jeSArIFwiIFwiICsgYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfM1wiPlxuICAgICAgPGgzPkluZm8gRmFjdHVyZTwvaDM+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5GYWN0dXJlIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e3Byb3BzLmJpbGwuYmlsbE51bWJlcn08L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5TdGF0dXMgZmFjdHVyZSA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2JhZGdlU3R5bGV9PntiYWRnZVRleHR9PC9zcGFuPlxuICAgICAgPC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+TW9udGFudCB0b3RhbDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt1c2VyLmFzc29jaWF0aW9uLmJhbmtJbmZvcm1hdGlvbi5jdXJyZW5jeX0ge2JpbGwuYW1vdW50fVxuICAgICAgPC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+RMOpasOgIHBhecOpIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2JhbGFuY2V9PC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+RGF0ZSBmYWN0dXJhdGlvbiA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPlxuICAgICAgICA8RGF0ZUZvcm1hdCBkYXRlPXtiaWxsLmZyb21fYXR9IGZvcm1hdD1cImRkLm1tLnl5eXlcIiAvPlxuICAgICAgPC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+UGF5YWJsZSBqdXNxdWUgYXUgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPERhdGVGb3JtYXQgZGF0ZT17YmlsbC50b19hdH0gZm9ybWF0PVwiZGQubW0ueXl5eVwiIC8+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpbGxMZWZ0Q29sdW1uKHByb3BzKSB7XG4gIGNvbnN0IGN1c3RvbWVyID0gcHJvcHMuY3VzdG9tZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW4tLWxnXzNcIj5cbiAgICAgIDxoMz5Ew6l0YWlscyBjbGllbnQ8L2gzPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+RW50cmVwcmlzZSA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5jb21wYW55fTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPk5vbSA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5sYXN0bmFtZX08L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5QcsOpbm9tIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmZpcnN0bmFtZX08L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5BZHJlc3NlIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uIG1iLTBcIj5cbiAgICAgICAge2N1c3RvbWVyLnN0cmVldCArIFwiIFwiICsgY3VzdG9tZXIuc3RyZWV0X251bWJlcn1cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAge2N1c3RvbWVyLnppcF9jb2RlICsgXCIgXCIgKyBjdXN0b21lci5jaXR5fVxuICAgICAgPC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+RW1haWwgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIuZW1haWx9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCBDdXN0b21lckxlZnRDb2x1bW4gZnJvbSBcIi4vdGVtcGxhdGUvQ3VzdG9tZXJMZWZ0Q29sdW1uXCI7XG5pbXBvcnQgQ3VzdG9tZXJCaWxsc0xpc3QgZnJvbSBcIi4vdGVtcGxhdGUvQ3VzdG9tZXJCaWxsc0xpc3RcIjtcbmltcG9ydCBDdXN0b21lckluZm8gZnJvbSBcIi4vdGVtcGxhdGUvQ3VzdG9tZXJJbmZvXCI7XG5cbi8vIFRPRE8gUkVGQUlSRSBMRSBDT01QT05FTlRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGN1c3RvbWVyOiBudWxsLCBiaWxsczogbnVsbCwgbG9hZGVkOiB0cnVlIH07XG4gIH1cblxuICAvLyBUT0RPIE1PVkUgVEhJUyBDT0RFIFRPIFRIRSBTTElDRVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL1LDqWN1cMOocmUgbGUgaWQgZW4gZMOpY291cGFudCBsYSByb3V0ZVxuICAgIGxldCBwYXRoID0gdGhpcy5wcm9wcy5wYXRoW1wiKlwiXTtcbiAgICBjb25zdCBpZCA9IHBhdGguc3BsaXQoXCIvXCIpWzFdO1xuXG4gICAgLy9SZXF1ZXRlIHBvdXIgcsOpY3VwZXJlciBpZFxuICAgIGFwaUJuaVxuICAgICAgLmdldChcIi9jdXN0b21lcnMvXCIgKyBpZCwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21lcjogY3VzdG9tZXIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGN1c3RvbWVyIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcblxuICAgIGFwaUJuaVxuICAgICAgLmdldChcIi9iaWxscz9jdXN0b21lci5pZD1cIiArIGlkLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBiaWxscyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJpbGxzOiBiaWxscywgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgY3VzdG9tZXIgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRlZCB8fCB0aGlzLnN0YXRlLmN1c3RvbWVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxDdXN0b21lckluZm8gY3VzdG9tZXI9e3RoaXMuc3RhdGUuY3VzdG9tZXJ9IC8+XG4gICAgICAgIHsvKiA8Q3VzdG9tZXJMZWZ0Q29sdW1uIGN1c3RvbWVyPXt0aGlzLnN0YXRlLmN1c3RvbWVyfSAvPlxuICAgICAgICAgIDxDdXN0b21lckJpbGxzTGlzdCBiaWxscz17dGhpcy5zdGF0ZS5iaWxsc30gLz4gKi99XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBzZXRBbGVydCwgc2V0Q3VzdG9tZXJzIH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCB7IEZhRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xuaW1wb3J0IFBhZ2ludGF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vY3LDqWF0aW9uIGRlIGxhIHJlcXVldGVcblxuLy8gVE9ETyBBREQgVE8gUkVEVVggU0xJQ0VcbmNvbnN0IGZldGNoQ3VzdG9tZXJzID0gKGxpbmspID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGFwaUJuaVxuICAgICAgLmdldChsaW5rKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGRpc3BhdGNoKHNldEN1c3RvbWVycyhyZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyTGlzdCgpIHtcbiAgY29uc3QgW2l0ZW1QZXJQYWdlLCBzZXRJdGVtUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFthZGRGaWx0ZXIsIHNldEFkZEZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbGluayA9IFwiL2N1c3RvbWVyc1wiO1xuICBjb25zdCBjdXN0b21lcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1c3RvbWVycy5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaEN1c3RvbWVycyhsaW5rICsgXCI/cGFnZT0xJml0ZW1zUGVyUGFnZT1cIiArIGl0ZW1QZXJQYWdlICsgYWRkRmlsdGVyKVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoY3VzdG9tZXJzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxCdXR0b25zVHJpc1xuICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgaXRlbVBlclBhZ2U9e2l0ZW1QZXJQYWdlfVxuICAgICAgICAgIHNldEFkZEZpbHRlcj17c2V0QWRkRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYXBwX3RhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgPHRoPm5vbTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5WaWxsZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EYXRlIGVudHLDqWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGF0ZSBzb3J0aWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Y3VzdG9tZXJzW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoY3VzdG9tZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDdXN0b21lckxpc3RVbml0IGN1c3RvbWVyPXtjdXN0b21lcn0ga2V5PXtjdXN0b21lci5pZH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxQYWdpbnRhdGlvblxuICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgaXRlbVBlclBhZ2U9e2l0ZW1QZXJQYWdlfVxuICAgICAgICAgIHdoYXRUb0Rpc3BhdGNoPXtmZXRjaEN1c3RvbWVyc31cbiAgICAgICAgICBlbGVtPXtjdXN0b21lcnN9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxufVxuXG4vLyBUT0RPIE1PVkUgVE8gQU4gSURFUEVEQU5UIENPTVBPTkVOVFxuZnVuY3Rpb24gQ3VzdG9tZXJMaXN0VW5pdChwcm9wcykge1xuICBjb25zdCBkYXRlRGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbWVtYnJlRG9uZSA9IG5ldyBEYXRlKHByb3BzLmN1c3RvbWVyLm1lbWJlcnNoaXAubWVtYmVyc2hpcF9kb25lX2F0KTtcblxuICBsZXQgdHJTdHlsZSA9IFwiYXBwX3RhYmxlX190ci0tZ3JlZW5cIjtcbiAgaWYgKGRhdGVEYXkgPiBtZW1icmVEb25lKSB7XG4gICAgdHJTdHlsZSA9IFwiYXBwX3RhYmxlX190ci0tcmVkXCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0ciBjbGFzc05hbWU9e3RyU3R5bGV9PlxuICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3Byb3BzLmN1c3RvbWVyLmlkfTwvdGg+XG4gICAgICA8dGQ+e3Byb3BzLmN1c3RvbWVyLmZpcnN0bmFtZX08L3RkPlxuICAgICAgPHRkPntwcm9wcy5jdXN0b21lci5sYXN0bmFtZX08L3RkPlxuICAgICAgPHRkPntwcm9wcy5jdXN0b21lci56aXBfY29kZSArIFwiIFwiICsgcHJvcHMuY3VzdG9tZXIuY2l0eX08L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8RGF0ZUZvcm1hdFxuICAgICAgICAgIGRhdGU9e3Byb3BzLmN1c3RvbWVyLm1lbWJlcnNoaXAubWVtYmVyc2hpcF9hdH1cbiAgICAgICAgICBmb3JtYXQ9XCJkZC5tbS55eXl5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxEYXRlRm9ybWF0XG4gICAgICAgICAgZGF0ZT17cHJvcHMuY3VzdG9tZXIubWVtYmVyc2hpcC5tZW1iZXJzaGlwX2RvbmVfYXR9XG4gICAgICAgICAgZm9ybWF0PVwiZGQubW0ueXl5eVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIHRvPXtcIi9jdXN0b21lci9cIiArIHByb3BzLmN1c3RvbWVyLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICBrZXk9e3Byb3BzLmN1c3RvbWVyLmlkfVxuICAgICAgICA+XG4gICAgICAgICAgPEZhRXllIC8+XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn1cblxuLy8gVE9ETyBNT1ZFIFRPIEFOIENPTVBPTkVOVFxuZnVuY3Rpb24gQnV0dG9uc1RyaXMoeyBzZXRBZGRGaWx0ZXIsIGxpbmssIGl0ZW1QZXJQYWdlIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGFkZEZpbHRlciA9IChlKSA9PiB7XG4gICAgbGV0IGZpbHRlciA9IGUudGFyZ2V0LmRhdGFzZXQuZmlsdGVyO1xuICAgIHNldEFkZEZpbHRlcihcIiZtZW1iZXJzaGlwLmlzX2FjdGl2ZT10cnVlXCIpO1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hDdXN0b21lcnMobGluayArIFwiP3BhZ2U9MSZpdGVtc1BlclBhZ2U9XCIgKyBpdGVtUGVyUGFnZSArIGZpbHRlcilcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00IG1iLTRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIlxuICAgICAgICBvbkNsaWNrPXthZGRGaWx0ZXJ9XG4gICAgICAgIGRhdGEtZmlsdGVyPVwiJm1lbWJlcnNoaXAuaXNfYWN0aXZlPXRydWVcIlxuICAgICAgPlxuICAgICAgICBNZW1icmUgYWN0aWZcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCJcbiAgICAgICAgb25DbGljaz17YWRkRmlsdGVyfVxuICAgICAgICBkYXRhLWZpbHRlcj1cIiZtZW1iZXJzaGlwLmlzX2FjdGl2ZT1mYWxzZVwiXG4gICAgICA+XG4gICAgICAgIE1lbWJyZSBpbmFjdGlmXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICAvLyAmbWVtYmVyc2hpcC5pc19hY3RpdmU9ZmFsc2VcbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgYXBpQm5pLCB7IGFwaUJuaUZpbGUgfSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuXG4vLyBUT0RPIEZVTkNUSU9OIENPTVBPTkVOVFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXJOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcGFueTogXCJcIixcbiAgICAgIGZpcnN0bmFtZTogXCJcIixcbiAgICAgIGxhc3RuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBzdHJlZXQ6IFwiXCIsXG4gICAgICBjaXR5OiBcIlwiLFxuICAgICAgemlwQ29kZTogXCJcIixcbiAgICAgIHBob25lOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICAvL2NhY2hlIGVsZW1lbnQgcG9wdXIgbGVzIGZpY2hpZXIgdmNhcmRcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwiZGlzcGxheTpub25lICFpbXBvcnRhbnRcIjtcbiAgfVxuXG4gIC8vc2kgb3V2ZXJ0dXJlIFZjYXJkIG9uIGNhY2hlIGxlIGZvcm11bGFpcmUgdXRpbGlzYXRldXIgZXQgb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlIHBvdXIgY2hhcmdlbWVudCBkZSBsYSBWY2FyZFxuICBvcGVuVmNhcmQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDdXN0b21lckZvcm1cIikuc3R5bGUuY3NzVGV4dCA9XG4gICAgICBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXhcIjtcbiAgfVxuXG4gIGNsb3NlVmNhcmQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwiZGlzcGxheTpub25lICFpbXBvcnRhbnRcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0N1c3RvbWVyRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXhcIjtcbiAgfVxuXG4gIC8vZm9uY3Rpb24gZW52b2kgZGUgbGEgdmNhcmRcbiAgc3VibWl0RmlsZSA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGxldCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2Y2FyZGZpbGVcIik7XG4gICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlLmZpbGVzWzBdKTtcblxuICAgIC8vIFRPRE8gTU9WRSBUTyBSRURVWFxuICAgIGFwaUJuaUZpbGVcbiAgICAgIC5wb3N0KFwiL3ZjYXJkL3BhcnNlclwiLCBmb3JtZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0N1c3RvbWVyRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICAgIFwiZGlzcGxheTpmbGV4ICFpbXBvcnRhbnRcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVGb3JtXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgXCJkaXNwbGF5Om5vbmUgIWltcG9ydGFudFwiO1xuICAgICAgICAgIC8vdXBkYXRlIGR1IHN0YXRlIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGVzIGNoYW50cyBmb3JtdWxhaXJlXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb21wYW55OiBkYXRhLmNvbXBhbnksXG4gICAgICAgICAgICBmaXJzdG5hbWU6IGRhdGEuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IGRhdGEubGFzdG5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgICAgIHN0cmVldDogZGF0YS5zdHJlZXQsXG4gICAgICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgICAgICB6aXBDb2RlOiBkYXRhLnppcENvZGUsXG4gICAgICAgICAgICBwaG9uZTogZGF0YS5waG9uZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vRXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy9mb25jdGlvbiBlbnJlZ2lzdHJlbWVudCBkJ3VuIG5vdXZlYXUgY3VzdG9tZXJcbiAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgIC8vY3JlYXRpb24gZGUgbGEgcmVxdWV0ZVxuICAgIC8vIFRPRE8gTU9WRSBUTyBSRURVWFxuICAgIGFwaUJuaVxuICAgICAgLnBvc3QoXCIvY3VzdG9tZXJzXCIsIHZhbHVlcywge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgLy8gYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gVE9ETyBNT1ZFIFRPIEFOIFVUSUxTIEZJTEVcbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBjdXN0b21lclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZmlyc3RuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMywgXCJQcsOpbm9tIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIHByw6lub21cIiksXG4gICAgbGFzdG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigzLCBcIk5vbSB0cm9wIGNvdXJ0XCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBub21cIiksXG4gICAgc3RyZWV0OiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMywgXCJOb20gZGUgcnVlIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIG5vbSBkZSBydWVcIiksXG4gICAgc3RyZWV0TnVtYmVyOiBZdXAuc3RyaW5nKCkubWluKDEsIFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gbnVtw6lybyBkZSBydWVcIiksXG4gICAgemlwQ29kZTogWXVwLm51bWJlcigpXG4gICAgICAubWluKDEwMDAsIFwiTGUgY29kZSB6aXAgZG9pdCDDqnRyZSBkZSBtaW4gNCBjaGlmZnJlc1wiKVxuICAgICAgLm1heCg5OTk5LCBcIkxlIGNvZGUgemlwIGRvaXQgw6p0cmUgZGUgbWF4IDQgY2hpZmZyZVwiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gY29kZSBwb3N0YWxcIiksXG4gICAgY2l0eTogWXVwLnN0cmluZygpXG4gICAgICAubWluKDMsIFwiTm9tIGRlIHZpbGxlIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuZSB2aWxsZVwiKSxcbiAgICBjb21wYW55OiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMywgXCJOb20gZW50cmVwcmlzZSB0cm9wIGNvdXJ0XCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1bmUgZW50cmVwcmlzZVwiKSxcbiAgICBlbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAuZW1haWwoMywgXCJFbWFpbCBub24gdmFsaWRlXCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBlbWFpbFwiKSxcbiAgICBtZW1iZXJTaGlwX2F0OiBZdXAuc3RyaW5nKCkubWF0Y2hlcyhcbiAgICAgIC9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pWy5dKDBbMS05XXwxWzAxMl0pWy5dKDE5fDIwKVxcZFxcZCQvLFxuICAgICAgXCJGb3JtYXQgZGQubW0ueXl5eVwiXG4gICAgKSxcbiAgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vQWZmaWNoYWdlIGR1IGZvcm11bGFpcmVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtIGZvcm0tLWxnXzhcIj5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICBmaXJzdG5hbWU6IHRoaXMuc3RhdGUuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IHRoaXMuc3RhdGUubGFzdG5hbWUsXG4gICAgICAgICAgICBzdHJlZXQ6IHRoaXMuc3RhdGUuc3RyZWV0LFxuICAgICAgICAgICAgc3RyZWV0TnVtYmVyOiBcIlwiLFxuICAgICAgICAgICAgemlwQ29kZTogdGhpcy5zdGF0ZS56aXBDb2RlLFxuICAgICAgICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxuICAgICAgICAgICAgY29tcGFueTogdGhpcy5zdGF0ZS5jb21wYW55LFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICBtZW1iZXJTaGlwX2F0OiBcIlwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplIC8vcGVybWV0IGRlIG1ldHRyZSDDoCBqb3VyIGxlIGZvcm11bGFpcmUgYXZlYyBsZSBzdGF0ZVxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3RoaXMuY3VzdG9tZXJTY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICB7KHtcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX3Jvd1wiXG4gICAgICAgICAgICAgIGlkPVwibmV3Q3VzdG9tZXJGb3JtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UHLDqW5vbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5maXJzdG5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmZpcnN0bmFtZSAmJiB0b3VjaGVkLmZpcnN0bmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5maXJzdG5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy02XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5vbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxhc3RuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5sYXN0bmFtZSAmJiB0b3VjaGVkLmxhc3RuYW1lICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmxhc3RuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctOFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0cmVldFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RyZWV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5zdHJlZXQgJiYgdG91Y2hlZC5zdHJlZXQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuc3RyZWV0fTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OdW3DqXJvIGRlIHJ1ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0TnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHJlZXROdW1iZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnN0cmVldE51bWJlciAmJiB0b3VjaGVkLnN0cmVldE51bWJlciAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zdHJlZXROdW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvZGUgcG9zdGFsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInppcENvZGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnppcENvZGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnppcENvZGUgJiYgdG91Y2hlZC56aXBDb2RlICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnppcENvZGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy04XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlZpbGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jaXR5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5jaXR5ICYmIHRvdWNoZWQuY2l0eSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5jaXR5fTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RW50cmVwcmlzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29tcGFueX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuY29tcGFueSAmJiB0b3VjaGVkLmNvbXBhbnkgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuY29tcGFueX08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWVtYnJlIGRlcHVpczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVtYmVyU2hpcF9hdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubWVtYmVyU2hpcF9hdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMubWVtYmVyU2hpcF9hdCAmJiB0b3VjaGVkLm1lbWJlclNoaXBfYXQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMubWVtYmVyU2hpcF9hdH08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgRW5yZWdpc3RyZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuVmNhcmR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWY2FyZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cblxuICAgICAgICB7LyogYWZmaWNoYWdlIGZ1IGZvcm11bGFpcmUgcG91ciBmaWNoaWVyIFZjYXJkICovfVxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0RmlsZX1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGZpbGU6IFwiXCIgfX1cbiAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoe1xuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybV9fcm93XCIgaWQ9XCJmaWxlRm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctMTBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwidmNhcmRmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5maWxlfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZmlsZSAmJiB0b3VjaGVkLmZpbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZmlsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgQ2hhcmdlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tcmVkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQW5udWxlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZVZjYXJkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21lckxpc3QgfSBmcm9tICcuL0N1c3RvbWVyTGlzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbWVyRGV0YWlscyB9IGZyb20gJy4vQ3VzdG9tZXJEZXRhaWxzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tZXJOZXcgfSBmcm9tICcuL0N1c3RvbWVyTmV3JzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gXCJkYXRlZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyQmlsbHNMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuZGF0YSk7XG5cbiAgY29uc3QgW2JpbGxzXSA9IHVzZVN0YXRlKHByb3BzLmJpbGxzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfNVwiPlxuICAgICAgPGgzPkZhY3R1cmVzPC9oMz5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2JpbGxzW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoYmlsbCkgPT4ge1xuICAgICAgICAgICAgLy9Ew6lmaW5pdGlvbiBkdSB0eXBlIGRlIGJhZGdlIGVuIGZvbmN0aW9uIGR1IHN0YXR1dCBkZSBsYSBmYWN0dXJlXG4gICAgICAgICAgICBsZXQgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1pbmZvXCI7XG4gICAgICAgICAgICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKSA+IG5ldyBEYXRlKGJpbGwudG9fYXQpKSB7XG4gICAgICAgICAgICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tZGFuZ2VyXCI7XG4gICAgICAgICAgICAgIGJhZGdlVGV4dCA9IFwiRXhwaXLDqWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiaWxsLmFtb3VudCA9PT0gYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2UpIHtcbiAgICAgICAgICAgICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1zdWNjZXNzXCI7XG4gICAgICAgICAgICAgIGJhZGdlVGV4dCA9IFwiUGF5w6lcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17YmlsbC5pZH0+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e1wiL2JpbGwvXCIgKyBiaWxsLmlkfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICB7YmlsbC5iaWxsTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5fSB7YmlsbC5hbW91bnR9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGVGb3JtYXQoYmlsbC50b19hdCwgXCJkZC5tbS55eXl5XCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtiYWRnZVN0eWxlfT57YmFkZ2VUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzL0RhdGVGb3JtYXRcIjtcbmltcG9ydCB7IEZhU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVySW5mbyh7IGN1c3RvbWVyIH0pIHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcblxuICBsZXQgY3VzdG9tZXJBY3RpdmUgPSAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwX2JhZGdlIGFwcF9iYWRnZS0tc3VjY2Vzc1wiPk1lbWJyZSBhY3RpZjwvc3Bhbj5cbiAgKTtcbiAgaWYgKCFjdXN0b21lci5tZW1iZXJzaGlwLmlzX2FjdGl2ZSkge1xuICAgIGN1c3RvbWVyQWN0aXZlID0gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwX2JhZGdlIGFwcF9iYWRnZS0tZGFuZ2VyXCI+TWVtYnJlIGluYWN0aWY8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGN1c3RvbWVyX3NlYXJjaF9iYXJcIj5cbiAgICAgICAgICBSZWNoZXJjaGVyJm5ic3A7XG4gICAgICAgICAgPEZhU2VhcmNoIC8+XG4gICAgICAgICAgJm5ic3A7PGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dfX2NvbHVtbi0tc20gY29sdW1uX2NlbnRlcl9fcm93XCI+XG4gICAgICAgICAgPHA+e2N1c3RvbWVyLmNvbXBhbnl9PC9wPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy0tcm91bmRlZFwiXG4gICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9TRVJWRVJfTkFNRSArIFwiL2ltZy9iZ2dyZXkuanBnXCJ9XG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjb2x1bW5fYm90dG9tXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+TsKwe2N1c3RvbWVyLmlkfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y3VzdG9tZXIuZmlyc3RuYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y3VzdG9tZXIubGFzdG5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjb2x1bW5fYm90dG9tXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICB7Y3VzdG9tZXIuc3RyZWV0fSB7Y3VzdG9tZXIuc3RyZWV0X251bWJlcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2N1c3RvbWVyLnppcF9jb2RlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y3VzdG9tZXIuY2l0eX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cbiAgICAgICAgICB7Y3VzdG9tZXJBY3RpdmV9XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+RGF0ZSBkJ2VudHLDqWUgOjwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5EYXRlIGRlIHNvcnRpZSA6PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjb2x1bW5fYm90dG9tXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8RGF0ZUZvcm1hdFxuICAgICAgICAgICAgICBkYXRlPXtjdXN0b21lci5tZW1iZXJzaGlwLm1lbWJlcnNoaXBfYXR9XG4gICAgICAgICAgICAgIGZvcm1hdD1cImRkLm1tLnl5eXlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8RGF0ZUZvcm1hdFxuICAgICAgICAgICAgICBkYXRlPXtjdXN0b21lci5tZW1iZXJzaGlwLm1lbWJlcnNoaXBfZG9uZV9hdH1cbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQubW0ueXl5eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dfX2NvbHVtbi0tc20gY3VzdG9tZXJfYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tZXJfYnV0dG9ucy0tc3VjY2Vzc1wiPk1vZGlmaWVyPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b21lcl9idXR0b25zLS1kYW5nZXJcIj5TdXBwcmltZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJMZWZ0Q29sdW1uKHByb3BzKSB7XG4gIGNvbnN0IGN1c3RvbWVyID0gcHJvcHMuY3VzdG9tZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW4tLWxnXzNcIj5cbiAgICAgIDxoMz5Ob20gZHUgY2xpZW50PC9oMz5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPmN1c3RvbWVyIE7CsCA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5pZH08L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5FbnRyZXByaXNlIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmNvbXBhbnl9PC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+Tm9tIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmxhc3RuYW1lfTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPlByw6lub20gOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIuZmlyc3RuYW1lfTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkFkcmVzc2UgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb24gbWItMFwiPlxuICAgICAgICB7Y3VzdG9tZXIuc3RyZWV0ICsgXCIgXCIgKyBjdXN0b21lci5zdHJlZXRfbnVtYmVyfVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPlxuICAgICAgICB7Y3VzdG9tZXIuemlwX2NvZGUgKyBcIiBcIiArIGN1c3RvbWVyLmNpdHl9XG4gICAgICA8L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5FbWFpbCA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5lbWFpbH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIFNpZGVCYXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IEFwcFJvdXRlcyBmcm9tIFwiLi4vLi4vY29uZi9BcHBSb3V0ZXNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBzZXRBbGVydCwgc2V0VXNlciB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIC8vIFRPRE8gQSBTVVBQUklNRVIgQVBSRVMgQVZPSVIgQ0hBTkdFUiBMRSBQUklWQVRFIFJPVVRFXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goRmV0Y2hVc2VyKCkpO1xuICB9LCBbXSk7XG5cbiAgLy9UT0RPIEFKT1VURVIgU1VSIFJFRFVYXG4gIC8vZm9uY3Rpb24gZGUgY2hhcmdlbWVudCBkZSBsJ3V0aWxpc2F0ZXVyXG4gIGNvbnN0IEZldGNoVXNlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb29raWUgPSBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwiQVBJQ09PS0lFXCIpKTtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgICBhd2FpdCBhcGlCbmlcbiAgICAgICAgLmdldChcIi91c2Vycy9cIiArIGNvb2tpZS5kYXRhLnVzZXJpZClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHJlc3BvbnNlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIC8vc2kgbCd1dGlsaXNhdGV1ciBuJ2VzdCBwYXMgZW5jb3JlIGNoYXJnZXIgb24gYWZmaWNoZSBsZSBsb2FkaW5nXG4gIGlmICh1c2VyLmRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbC1tZC05IG1zLXNtLWF1dG8gY29sLWxnLTEwIHB4LW1kLTRcIj5cbiAgICAgICAgICAgICAgey8qIGFmZmljaGFnZSBkZXMgYWxlcnRzICovfVxuICAgICAgICAgICAgICA8QWxlcnQgLz5cbiAgICAgICAgICAgICAgey8qIEFmZmljaGFnZSBkZXMgbGllbnMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8QXBwUm91dGVzIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luIH0gZnJvbSAnLi9sb2dpbi9Mb2dpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWUgfSBmcm9tICcuL2hvbWUvSG9tZSc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8vIFRPRE8gQWZpY2NoZXIgdW4gbG9hZGluZyAvLzxMb2FkaW5nIC8+XG4vLyBUT0RPIERlc3RydWN0b3IganNcbi8vIFRPRE8gXCJcIiBpdGVtcyBkZXRhaWxzXG4vLyBUT0RPIFRhYmxlYXVcblxuZnVuY3Rpb24gSXRlbURldGFpbHMocHJvcHMpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZSh7XG4gICAgaXRlbXM6IG51bGwsXG4gICAgbG9hZGVkOiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcGF0aCA9IHByb3BzLnBhdGhbXCIqXCJdO1xuICAgIGxldCBpZCA9IHBhdGguc3BsaXQoXCIvXCIpWzFdO1xuICAgIC8vUmVxdWV0ZSBwb3VyIHLDqWN1cGVyZXIgaWRcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvaXRlbXMvXCIgKyBpZCwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0SXRlbXMoeyBpdGVtczogcmVzcG9uc2UuZGF0YSwgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgIH0pXG5cbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRJdGVtcyh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57aXRlbXM/Lml0ZW1zPy5uYW1lfTwvaDE+XG4gICAgICA8aDE+e2l0ZW1zPy5pdGVtcz8ucHJpY2Vfb2Z9PC9oMT5cbiAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KGl0ZW1zLCBudWxsLCAyKX08L3ByZT4qL31cbiAgICAgIDxOYXZMaW5rIHRvPXtcIi9pdGVtc1wifT5CYWNrPC9OYXZMaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtRGV0YWlscztcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRJdGVtIH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcblxuLy9jcsOpYXRpb24gZGUgbGEgcmVxdWV0ZVxuZXhwb3J0IGNvbnN0IGZldGNoSXRlbXMgPSAoKSA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgYXdhaXQgYXBpQm5pXG4gICAgICAuZ2V0KFwiL2l0ZW1zP3BhZ2U9MSZpdGVtc1BlclBhZ2U9MzBcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBkaXNwYXRjaChzZXRJdGVtKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbUxpc3QoKSB7XG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pdGVtcy5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hJdGVtcygpKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpdGVtcykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7aXRlbXNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxOYXZMaW5rIHRvPXtcIi9pdGVtL1wiICsgaXRlbS5pZH0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0uaWQgKyBcIiAtIFwiICsgaXRlbS5uYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRJdGVtLCBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtTmV3KCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICBhcGlCbmlcbiAgICAgIC5wb3N0KFwiL2l0ZW1zXCIsIHZhbHVlcywge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEl0ZW0ocmVzcG9uc2UpKTtcbiAgICAgICAgICBkaXNwYXRjaChzZXRBbGVydCh7IGNvbG9yOiBcInN1Y2Nlc3NcIiwgbWVzc2FnZTogXCJJdGVtIGFqb3V0w6kuXCIgfSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBlcnJldXIgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfTtcblxuICAvL3ZhbGlkYXRpb24gZGVzIGRvbm7DqWVzXG4gIGNvbnN0IGl0ZW1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigzLCBcIlByw6lub20gdHJvcCBjb3VydFwiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gcHLDqW5vbVwiKSxcbiAgICBwcmljZU9mOiBZdXAuc3RyaW5nKCkubWF0Y2hlcygvXlxcZCsoLlxcZHsxLDJ9KT8kLywgXCJGb3JtYXQgaW52YWxpZGVcIiksXG4gIH0pO1xuXG4gIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtNSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBuYW1lOiBcIlwiLCBwcmljZU9mOiBcIlwiIH19XG4gICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17aXRlbVNjaGVtYX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoe1xuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHAtNSBkLWZsZXggZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJpeDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VPZlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJpY2VPZn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMucHJpY2VPZiAmJiB0b3VjaGVkLnByaWNlT2YgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMucHJpY2VPZn08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJpY2VPZn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVudm95ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSXRlbUxpc3QgfSBmcm9tIFwiLi9JdGVtTGlzdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJdGVtRGV0YWlscyB9IGZyb20gXCIuL0l0ZW1EZXRhaWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEl0ZW1OZXcgfSBmcm9tIFwiLi9JdGVtTmV3XCI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEFsZXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgeyBGYVVzZXIsIEZhTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vdmFsaWRhdGlvbiBkdSBsb2dpblxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgLy9vbiBwYXNzZSBzZXRMb2FkZWQgw6AgdHJ1ZSBwb3VyIGFmZmljaGVyIGxlIGNoYXJnZW1lbnQgZW4gYXR0ZW5kYW50IGxhIHLDqXBvbnNlXG4gICAgc2V0TG9hZGVkKHRydWUpO1xuICAgIC8vY3JlYXRpb24gZGUgbGEgcmVxdWV0ZVxuICAgIGF4aW9zXG4gICAgICAucG9zdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0VSVkVSX05BTUUgKyBcIi9hcGkvbG9naW5cIiwgdmFsdWVzLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgLy9zaSBsZSBsb2dpbiBlc3QgYm9uIG9uIGZhaXQgdW4gcmVsb2FkIGNlIHF1aSBub3VzIHJlZGlyaWdlcmEgdmVycyBsYSBwYWdlIGQnYWNjdWVpbCBldCDDqXZpdGUgdW4gYnVnIGRlIGNvb2tpZVxuICAgICAgICAgIC8vIGNyw6lhdGlvbiBkdSBjb29raWUgLy9pbmNsdXMgbGUgdG9rZW4gZXQgbGVzIGRhdGFzXG4gICAgICAgICAgY29uc3QgY29va2llc0RhdGEgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBjb29raWVzLnNldChcIkFQSUNPT0tJRVwiLCBjb29raWVzRGF0YSwge1xuICAgICAgICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDUgKiA2MCAqIDEwMDApLFxuICAgICAgICAgIH0pOyAvLzVtaW51dGVzXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBsb2dpbiBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoe1xuICAgICAgICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIk1hdXZhaXMgbG9naW4gb3UgbW90IGRlIHBhc3NlICFcIiArIGVycixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcbiAgICBsZXQgZXJyb3JzID0ge307XG4gICAgaWYgKCF2YWx1ZXMudXNlcm5hbWUgJiYgdmFsdWVzLnVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiTm9tIHRyb3AgY291cnRcIjtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiVmV1aWxsZXogaW5zZXJlciB1biBtb3QgZGUgcGFzc2VcIjtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICAvL0FmZmljaGFnZSBkdSBmb3JtdWxhaXJlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkZWQgPyAoXG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgey8qIGFmZmljaGFnZSBkZSBsJ2FsZXJ0ICovfVxuICAgICAgICAgIHthbGVydCA/IDxBbGVydCAvPiA6IG51bGx9XG4gICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHAtNSBkLWZsZXggZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJidG5Hcm91cEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYVVzZXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy51c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJidG5Hcm91cEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYUxvY2sgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMucGFzc3dvcmR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlIHBvdXIgcsOpY3VwZXJlciB1c2VyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyID0gKGRhdGEpID0+IHtcbiAgYXhpb3MuZ2V0KFxuICAgIFJFQUNUX0FQUF9TRVJWRVJfTkFNRSArXG4gICAgICBcIi9hcGkvdXNlcnMvXCIgK1xuICAgICAgZGF0YS5kYXRhLnVzZXJpZCArXG4gICAgICBcIj9qd3Q9XCIgK1xuICAgICAgZGF0YS50b2tlblxuICApO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvblBsYWNlTmV3IH0gZnJvbSAnLi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZU5ldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25QbGFjZXNMaXN0IH0gZnJvbSAnLi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZXNMaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvblBsYWNlRGV0YWlscyB9IGZyb20gJy4vc2Vzc2lvbi1wbGFjZS9TZXNzaW9uUGxhY2VEZXRhaWxzJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uVHlwZU5ldyB9IGZyb20gJy4vc2Vzc2lvbi10eXBlL1Nlc3Npb25UeXBlTmV3JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvblR5cGVzTGlzdCB9IGZyb20gJy4vc2Vzc2lvbi10eXBlL1Nlc3Npb25UeXBlc0xpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uVHlwZURldGFpbHMgfSBmcm9tICcuL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZURldGFpbHMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25OZXcgfSBmcm9tICcuL3Nlc3Npb24vU2Vzc2lvbk5ldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25zTGlzdCB9IGZyb20gJy4vc2Vzc2lvbi9TZXNzaW9uc0xpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uRGV0YWlscyB9IGZyb20gJy4vc2Vzc2lvbi9TZXNzaW9uRGV0YWlscyc7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25QbGFjZURldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzZXNzaW9uUGxhY2U6IG51bGwsIGVycm9yTWVzc2FnZTogbnVsbCwgbG9hZGVkOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL1LDqWN1cMOocmUgbGUgaWQgZW4gZMOpY291cGFudCBsYSByb3V0ZVxuICAgIGxldCBwYXRoID0gdGhpcy5wcm9wcy5wYXRoW1wiKlwiXTtcbiAgICBjb25zdCBpZCA9IHBhdGguc3BsaXQoXCIvXCIpWzFdO1xuXG4gICAgLy9SZXF1ZXRlIHBvdXIgcsOpY3VwZXJlciBpZFxuICAgIGFwaUJuaVxuICAgICAgLmdldChcIi9zZXNzaW9uX3BsYWNlcy9cIiArIGlkLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBzZXNzaW9uUGxhY2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXNzaW9uUGxhY2U6IHNlc3Npb25QbGFjZSwgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgc2Vzc2lvblBsYWNlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLCBsb2FkZWQ6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IGNvbG9yPVwiZGFuZ2VyXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkIHx8IHRoaXMuc3RhdGUuc2Vzc2lvblBsYWNlID09PSBudWxsID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZXNzaW9uUGxhY2UuemlwX2NvZGUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblBsYWNlLmNpdHlcbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25QbGFjZU5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG1lc3NhZ2U6IG51bGwsIG1lc3NhZ2VDb2xvcjpudWxsLCBsb2FkZWQ6IGZhbHNlfTtcbiAgfVxuXG4gIC8vdmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXG4gIHN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCwgbG9hZGVkOiB0cnVlIH0pO1xuXG4gICAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXG4gICAgYXBpQm5pXG4gICAgICAucG9zdChcIi9zZXNzaW9uX3BsYWNlc1wiLCB2YWx1ZXMsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGFjZSBkZSBzZXNzaW9uIGNyw6llIGF2ZWMgc3VjY8Ooc1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBlcnJldXIgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogXCJkYW5nZXJcIixcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBTZXNzaW9uUGxhY2VTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIHN0cmVldDogWXVwLnN0cmluZygpLm1pbigzLCAnTm9tIGRlIHJ1ZSB0cm9wIGNvdXJ0JykucmVxdWlyZWQoJ1ZldWlsbGV6IGluZGlxdWVyIHVuIG5vbSBkZSBydWUnKSxcbiAgICBzdHJlZXROdW1iZXI6IFl1cC5zdHJpbmcoKS5taW4oMSwgJ1ZldWlsbGV6IGluZGlxdWVyIHVuIG51bcOpcm8gZGUgcnVlJyksXG4gICAgemlwQ29kZTogWXVwLm51bWJlcigpLm1pbigxMDAwLCAnTGUgY29kZSB6aXAgZG9pdCDDqnRyZSBkZSBtaW4gNCBjaGlmZnJlcycpLm1heCg5OTk5LCAnTGUgY29kZSB6aXAgZG9pdCDDqnRyZSBkZSBtYXggNCBjaGlmZnJlJykucmVxdWlyZWQoJ1ZldWlsbGV6IGluZGlxdWVyIHVuIGNvZGUgcG9zdGFsJyksXG4gICAgY2l0eTogWXVwLnN0cmluZygpLm1pbigzLCAnTm9tIGRlIHZpbGxlIHRyb3AgY291cnQnKS5yZXF1aXJlZCgnVmV1aWxsZXogaW5kaXF1ZXIgdW5lIHZpbGxlJyksXG59KTtcblxuICByZW5kZXIoKSB7XG4gICAgLy9vbiBhZmZpY2hlIGxlIGZvcm11bGFpcmVcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC01IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgey8qIGFmZmljaGFnZSBkdSBtZXNzYWdlIGQnZXJyZXVyICovfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxBbGVydCBtZXNzYWdlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IGNvbG9yPXt0aGlzLnN0YXRlLm1lc3NhZ2VDb2xvcn0gLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0fVxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHN0cmVldDogXCJcIiwgc3RyZWV0TnVtYmVyOiBcIlwiLCB6aXBDb2RlOiBcIlwiLCBjaXR5OiBcIlwiIH19XG4gICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWEgPSB7IHRoaXMuU2Vzc2lvblBsYWNlU2NoZW1hIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBwLTUgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJ1ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHJlZXR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuc3RyZWV0ICYmIHRvdWNoZWQuc3RyZWV0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zdHJlZXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OdW3DqXJvIGRlIHJ1ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHJlZXROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuc3RyZWV0TnVtYmVyICYmIHRvdWNoZWQuc3RyZWV0TnVtYmVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zdHJlZXROdW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvZGUgcG9zdGFsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInppcENvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy56aXBDb2RlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnppcENvZGUgJiYgdG91Y2hlZC56aXBDb2RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy56aXBDb2RlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WaWxsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jaXR5ICYmIHRvdWNoZWQuY2l0eSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuY2l0eX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRW52b3llclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBzZXRBbGVydCwgc2V0U2Vzc2lvblBsYWNlcyB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbi8vIFRPRE8gTU9WRSBUTyBSRURVWFxuLy9jcsOpYXRpb24gZGUgbGEgcmVxdWV0ZVxuY29uc3QgZmV0Y2hTZXNzaW9uUGxhY2VzID0gKCkgPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgYXBpQm5pXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fcGxhY2VzP3BhZ2U9MSZpdGVtc1BlclBhZ2U9MzBcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBkaXNwYXRjaChzZXRTZXNzaW9uUGxhY2VzKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvblBsYWNlc0xpc3QoKSB7XG4gIGNvbnN0IHNlc3Npb25QbGFjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb25QbGFjZXMuZGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2Vzc2lvblBsYWNlcygpKTtcbiAgfSwgW10pO1xuXG4gIGlmIChzZXNzaW9uUGxhY2VzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtzZXNzaW9uUGxhY2VzW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoc2Vzc2lvblBsYWNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz17XCIvc2Vzc2lvbi1wbGFjZS9cIiArIHNlc3Npb25QbGFjZS5pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgIGtleT17c2Vzc2lvblBsYWNlLmlkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZXNzaW9uUGxhY2UuemlwX2NvZGUgKyBcIiBcIiArIHNlc3Npb25QbGFjZS5jaXR5fVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb250eXBlRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNlc3Npb25UeXBlOiBudWxsLCBlcnJvck1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9Sw6ljdXDDqHJlIGxlIGlkIGVuIGTDqWNvdXBhbnQgbGEgcm91dGVcbiAgICBsZXQgcGF0aCA9IHRoaXMucHJvcHMucGF0aFtcIipcIl07XG4gICAgY29uc3QgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcblxuICAgIC8vUmVxdWV0ZSBwb3VyIHLDqWN1cGVyZXIgaWRcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbl90eXBlcy9cIiArIGlkLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBzZXNzaW9uVHlwZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlc3Npb25UeXBlOiBzZXNzaW9uVHlwZSwgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgc2Vzc2lvblR5cGUgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgey8qIGFmZmljaGFnZSBkdSBtZXNzYWdlIGQnZXJyZXVyICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxBbGVydCBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gY29sb3I9XCJkYW5nZXJcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgfHwgdGhpcy5zdGF0ZS5zZXNzaW9uVHlwZSA9PT0gbnVsbCA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblR5cGUubmFtZSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZXNzaW9uVHlwZS5kZXNjcmlwdGlvblxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbnR5cGVOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgIG1lc3NhZ2VDb2xvcjogbnVsbCxcbiAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgIHNlc3Npb25QbGFjZUxpc3RPcHRpb246IFtdLFxuICAgIH07XG4gIH1cblxuICAvL3ZhbGlkYXRpb24gZHUgZm9ybXVsYWlyZVxuICBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9KTtcblxuICAgIC8vY3JlYXRpb24gZGUgbGEgcmVxdWV0ZVxuICAgIGFwaUJuaVxuICAgICAgLnBvc3QoXCIvc2Vzc2lvbl90eXBlc1wiLCB2YWx1ZXMsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJUeXBlIGRlIHNlc3Npb24gY3LDqWUgYXZlYyBzdWNjw6hzXCIsXG4gICAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgbG9hZGVkOmZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIG1lc3NhZ2VDb2xvcjogXCJkYW5nZXJcIixcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vcsOpY3Vww6lyYXRpb24gZGVzIHNlc3Npb25QbGFjZXNcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbl9wbGFjZXNcIiwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChzZXNzaW9uUGxhY2UpID0+ICh7XG4gICAgICAgICAgICB2YWx1ZTogc2Vzc2lvblBsYWNlLmlkLFxuICAgICAgICAgICAgbmFtZTogc2Vzc2lvblBsYWNlLnppcF9jb2RlK1wiIFwiK3Nlc3Npb25QbGFjZS5jaXR5K1wiIC0gXCIrc2Vzc2lvblBsYWNlLnN0cmVldCtcIiBcIitzZXNzaW9uUGxhY2Uuc3RyZWV0X251bWJlclxuICAgICAgICAgIH1cbiAgICAgICAgICApKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Vzc2lvblBsYWNlTGlzdE9wdGlvbjogb3B0aW9ucywgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgc2Vzc2lvblBsYWNlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSwgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBTZXNzaW9uVHlwZVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAubWluKDMsIFwiTm9tIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIG5vbVwiKSxcbiAgICBkZXNjcmlwdGlvbjogWXVwLnN0cmluZygpXG4gICAgICAubWluKDEwLCBcIlZldWlsbGV6IGluZGlxdWVyIHVuZSBkZXNjcmlwdGlvbiwgbWluIDEwIGNhcmFjdMOocmVzXCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1bmUgZGVzY3JpcHRpb25cIiksXG4gICAgcHJpY2VPZjogWXVwLm51bWJlcigpXG4gICAgICAucG9zaXRpdmUoXCJMZSBwcml4IG4nZXN0IHBhcyBwb3NpdGlmXCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBwcml4XCIpLFxuICAgIHNlc3Npb25QbGFjZV9pZDogWXVwLm51bWJlcigpLm1pbigxKVxuICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgLy9vbiBhZmZpY2hlIGxlIGZvcm11bGFpcmVcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC01IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgey8qIGFmZmljaGFnZSBkdSBtZXNzYWdlIGQnZXJyZXVyICovfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgICAgICAgICAgICBjb2xvcj17dGhpcy5zdGF0ZS5tZXNzYWdlQ29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgcHJpY2VPZjogXCJcIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uUGxhY2VfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3RoaXMuU2Vzc2lvblR5cGVTY2hlbWF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoe1xuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgcC01IGQtZmxleCBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob208L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5kZXNjcmlwdGlvbiAmJiB0b3VjaGVkLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcml4IGRlIGxhIHNlc3Npb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VPZlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlT2Z9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJpY2VPZiAmJiB0b3VjaGVkLnByaWNlT2YgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnByaWNlT2Z9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGxhY2UgZGUgc2Vzc2lvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2Vzc2lvblBsYWNlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCIwXCIgdmFsdWU9XCIwXCI+VmV1aWxsZXogc2VsZWN0aW9ubmVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2Vzc2lvblBsYWNlTGlzdE9wdGlvbi5tYXAoKHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17cy52YWx1ZX0gdmFsdWU9e3MudmFsdWV9PntzLm5hbWV9PC9vcHRpb24+O1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnNlc3Npb25QbGFjZV9pZCAmJiB0b3VjaGVkLnNlc3Npb25QbGFjZV9pZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zZXNzaW9uUGxhY2VfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEVudm95ZXJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgc2V0QWxlcnQsIHNldFNlc3Npb25UeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbi8vY3LDqWF0aW9uIGRlIGxhIHJlcXVldGVcbmNvbnN0IGZldGNoU2Vzc2lvblR5cGVzID0gKCkgPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgYXBpQm5pXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fdHlwZXM/cGFnZT0xJml0ZW1zUGVyUGFnZT0zMFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGRpc3BhdGNoKHNldFNlc3Npb25UeXBlcyhyZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHtcbiAgICAgICAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgKyBlcnIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvblBsYWNlc0xpc3QoKSB7XG4gIGNvbnN0IHNlc3Npb25UeXBlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvblR5cGVzLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNlc3Npb25UeXBlcygpKTtcbiAgfSwgW10pO1xuXG4gIGlmIChzZXNzaW9uVHlwZXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3Nlc3Npb25UeXBlc1tcImh5ZHJhOm1lbWJlclwiXS5tYXAoKHNlc3Npb25UeXBlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz17XCIvc2Vzc2lvbi10eXBlL1wiICsgc2Vzc2lvblR5cGUuaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICBrZXk9e3Nlc3Npb25UeXBlLmlkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZXNzaW9uVHlwZS5uYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9udHlwZURldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzZXNzaW9uOiBudWxsLCBlcnJvck1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9Sw6ljdXDDqHJlIGxlIGlkIGVuIGTDqWNvdXBhbnQgbGEgcm91dGVcbiAgICBsZXQgcGF0aCA9IHRoaXMucHJvcHMucGF0aFtcIipcIl07XG4gICAgY29uc3QgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcblxuICAgIC8vUmVxdWV0ZSBwb3VyIHLDqWN1cGVyZXIgaWRcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbnMvXCIgKyBpZCwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlc3Npb246IHNlc3Npb24sIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIHNlc3Npb24gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgey8qIGFmZmljaGFnZSBkdSBtZXNzYWdlIGQnZXJyZXVyICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxBbGVydCBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gY29sb3I9XCJkYW5nZXJcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgfHwgdGhpcy5zdGF0ZS5zZXNzaW9uID09PSBudWxsID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZXNzaW9uLnNlc3Npb25fdHlwZS5uYW1lICtcbiAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgZGF0ZUZvcm1hdCh0aGlzLnN0YXRlLnNlc3Npb24uZGF5X2F0LCBcImRkIG1tbSB5eXl5IEhIOk1NOnNzXCIpXG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbnR5cGVOZXcoKSB7XG4gIGNvbnN0IFtzdE9wdGlvbnMsIHNldFN0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCk7XG4gIGxldCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vdmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcbiAgICBhcGlCbmlcbiAgICAgIC5wb3N0KFwiL3Nlc3Npb25zXCIsIHZhbHVlcywge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBzZXRBbGVydCh7XG4gICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJMYSBzZXNzaW9uIMOgIGJpZW4gw6l0w6llIGFqb3V0w6llICFcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBlcnJldXIgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXG4gICAgICAgICk7XG4gICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XG4gICAgICB9KTtcbiAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICB9O1xuXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9yw6ljdXDDqXJhdGlvbiBkZXMgc2Vzc2lvblR5cGVzXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fdHlwZXNcIiwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChzZXNzaW9uVHlwZSkgPT4gKHtcbiAgICAgICAgICAgIHZhbHVlOiBzZXNzaW9uVHlwZS5pZCxcbiAgICAgICAgICAgIG5hbWU6IHNlc3Npb25UeXBlLm5hbWUsXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHNldFN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgc2Vzc2lvblR5cGUgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBjb25zdCBTZXNzaW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBkYXlBdDogWXVwLnN0cmluZygpXG4gICAgICAubWF0Y2hlcyhcbiAgICAgICAgL14oMFsxLTldfFsxMl1bMC05XXwzWzAxXSkuKDBbMS05XXwxWzAxMl0pLigxOXwyMClcXGRcXGRbXFxzXSgwWzAtOV18MVswLTldfDJbMC00XSk6KDBbMC05XXxbMTIzNDVdWzAtOV0pJC8sXG4gICAgICAgIFwiRm9ybWF0IGRkLm1tLnl5eXkgaGg6bW1cIlxuICAgICAgKVxuICAgICAgLnJlcXVpcmVkKFwiRGF0ZSBSZXF1aXNlXCIpLFxuICAgIHRvRG9uZTogWXVwLm51bWJlcigpLm1pbigwKS5tYXgoMSksXG4gICAgc2Vzc2lvblR5cGVfaWQ6IFl1cC5udW1iZXIoKS5taW4oMSksXG4gIH0pO1xuXG4gIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIGRheUF0OiBzZWFyY2hQYXJhbXMuZ2V0KFwiZGF0ZVwiKSxcbiAgICAgICAgICB0b0RvbmU6IDEsXG4gICAgICAgICAgc2Vzc2lvblR5cGVfaWQ6IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1Nlc3Npb25TY2hlbWF9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgcC01IGQtZmxleCBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5Kb3VyIGV0IGhldXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImRheUF0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGF5QXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZGF5QXQgJiYgdG91Y2hlZC5kYXlBdCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZGF5QXR9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+QSBsaWV1ID88L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRvRG9uZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRvRG9uZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezF9Pk91aTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezB9Pk5vbjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICB7ZXJyb3JzLnRvRG9uZSAmJiB0b3VjaGVkLnRvRG9uZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMudG9Eb25lfTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPlR5cGUgZGUgc2Vzc2lvbjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2Vzc2lvblR5cGVfaWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIjBcIiB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgIFZldWlsbGV6IHNlbGVjdGlvbm5lclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHtzdE9wdGlvbnMubWFwKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cy52YWx1ZX0gdmFsdWU9e3MudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAge2Vycm9ycy5zZXNzaW9uUGxhY2VfaWQgJiYgdG91Y2hlZC5zZXNzaW9uUGxhY2VfaWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnNlc3Npb25QbGFjZV9pZH08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW52b3llclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgRnVsbENhbGVuZGFyIGZyb20gXCJAZnVsbGNhbGVuZGFyL3JlYWN0XCI7XG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCI7IC8vIGEgcGx1Z2luIVxuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCI7IC8vIG5lZWRlZCBmb3IgZGF5Q2xpY2tcbmltcG9ydCBmckxvY2FsZSBmcm9tIFwiQGZ1bGxjYWxlbmRhci9jb3JlL2xvY2FsZXMvZnJcIjtcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGhhbmRsZURhdGVDbGljayA9IChhcmcpID0+IHtcbiAgLy8gYmluZCB3aXRoIGFuIGFycm93IGZ1bmN0aW9uXG4gIGxldCBkYXRlID0gYXJnLmRhdGVTdHIuc3BsaXQoXCItXCIpO1xuICBkYXRlID0gZGF0ZVsyXSArIFwiLlwiICsgZGF0ZVsxXSArIFwiLlwiICsgZGF0ZVswXTtcbiAgaWYgKHdpbmRvdy5jb25maXJtKFwiQWpvdXRlciB1bmUgc2Vzc2lvbiBsZSBcIiArIGRhdGUgKyBcIiA/XCIpID09PSB0cnVlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIi9uZXctc2Vzc2lvbj9kYXRlPVwiICsgZGF0ZSArIFwiIFwiICsgXCIxNzozMDowMFwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbnNMaXN0KCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaUJuaVxuICAgICAgLmdldChcIi9zZXNzaW9uc1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICAgIHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHNlc3Npb24uc2Vzc2lvbl90eXBlLm5hbWUsXG4gICAgICAgICAgICAgIGRhdGU6IHNlc3Npb24uZGF5X2F0LFxuICAgICAgICAgICAgICB1cmw6IFwiL3Nlc3Npb24vXCIgKyBzZXNzaW9uLmlkLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiaGVsbG9cIixcbiAgICAgICAgICAgICAgZGF0ZTogc2Vzc2lvbi5kYXlfYXQsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicGlua1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0TGlzdChhcnJheSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoe1xuICAgICAgICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiArIGVycixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAobGlzdC5sZW5ndGggIT09IDApIHtcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEZ1bGxDYWxlbmRhclxuICAgICAgICAgIGxvY2FsZT17ZnJMb2NhbGV9XG4gICAgICAgICAgZmlyc3REYXk9XCIxXCJcbiAgICAgICAgICBwbHVnaW5zPXtbZGF5R3JpZFBsdWdpbiwgaW50ZXJhY3Rpb25QbHVnaW5dfVxuICAgICAgICAgIGluaXRpYWxWaWV3PVwiZGF5R3JpZE1vbnRoXCJcbiAgICAgICAgICBldmVudHM9e2xpc3R9XG4gICAgICAgICAgZGF0ZUNsaWNrPXtoYW5kbGVEYXRlQ2xpY2t9XG4gICAgICAgICAgZXZlbnRCYWNrZ3JvdW5kQ29sb3I9XCIjQ0MwMDAwXCJcbiAgICAgICAgICBldmVudENvbG9yPVwiIzM3ODAwNlwiXG4gICAgICAgICAgYXNwZWN0UmF0aW89XCIyLjVcIlxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG4vKiBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vYXNzZXRzL2Nzcy9zdHlsZS5zY3NzXCIgKi9cbmltcG9ydCBcIi4vY3NzL2FwcC5jc3NcIjtcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vcmVkdXhcIjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbnJvb3QucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIDwvUHJvdmlkZXI+XG4pO1xuIiwiY29uc3QgeyBjcmVhdGVTbGljZSwgY29uZmlndXJlU3RvcmUgfSA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gYWxlcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgYWxlcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhbGVydFwiLFxuICBpbml0aWFsU3RhdGU6IG51bGwsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0QWxlcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAvL3sgdHlwZTogXCJhbGVydC9hZGRBbGVydFwiLCBwYXlsb2FkOnsgXCJjb2xvclwiOlwiZGFuZ2VyXCIsIFwibWVzc2FnZVwiOlwiRXJyZXVyIDQwNFwifX1cbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vL3BldGl0ZXMgZm9uY3Rpb24gcXVpIHBlcm1ldHRlbnQgZGUgcHLDqWNpc2VyIHVuaXF1ZW1lbnQgbGUgcGF5bG9hZFxuZXhwb3J0IGNvbnN0IHsgc2V0QWxlcnQgfSA9IGFsZXJ0U2xpY2UuYWN0aW9ucztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGN1c3RvbWVyc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgY3VzdG9tZXJzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY3VzdG9tZXJzXCIsXG4gIGluaXRpYWxTdGF0ZTogW10sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Q3VzdG9tZXJzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEN1c3RvbWVycyB9ID0gY3VzdG9tZXJzU2xpY2UuYWN0aW9ucztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGl0ZW1zXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBpdGVtc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcIml0ZW1zXCIsXG4gIGluaXRpYWxTdGF0ZTogW10sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0SXRlbTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRJdGVtLCBhZGRJdGVtIH0gPSBpdGVtc1NsaWNlLmFjdGlvbnM7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBzZXNzaW9uc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc2Vzc2lvbnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJzZXNzaW9uc1wiLFxuICBpbml0aWFsU3RhdGU6IFtdLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFNlc3Npb25zOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFNlc3Npb25zIH0gPSBzZXNzaW9uc1NsaWNlLmFjdGlvbnM7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBzZXNzaW9ucyBQbGFjZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc2Vzc2lvblBsYWNlc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInNlc3Npb25fcGxhY2VzXCIsXG4gIGluaXRpYWxTdGF0ZTogW10sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0U2Vzc2lvblBsYWNlczogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRTZXNzaW9uUGxhY2VzIH0gPSBzZXNzaW9uUGxhY2VzU2xpY2UuYWN0aW9ucztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHNlc3Npb25zIFR5cGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IHNlc3Npb25zVHlwZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInNlc3Npb25zX3R5cGVcIixcbiAgaW5pdGlhbFN0YXRlOiBbXSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRTZXNzaW9uVHlwZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0U2Vzc2lvblR5cGVzIH0gPSBzZXNzaW9uc1R5cGVTbGljZS5hY3Rpb25zO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVXNlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy9UT0RPIEFKT1VURVIgTE9BRElORywgZmV0Y2ggdXNlclxuY29uc3QgVXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlOiBbXSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFVzZXIgfSA9IFVzZXJTbGljZS5hY3Rpb25zO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQmlsbFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgQmlsbFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImJpbGxcIixcbiAgaW5pdGlhbFN0YXRlOiBbXSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRCaWxsOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEJpbGwgfSA9IEJpbGxTbGljZS5hY3Rpb25zO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENyZWF0ZSBzdG9yZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgY3VzdG9tZXJzOiBjdXN0b21lcnNTbGljZS5yZWR1Y2VyLFxuICAgIGl0ZW1zOiBpdGVtc1NsaWNlLnJlZHVjZXIsXG4gICAgYWxlcnQ6IGFsZXJ0U2xpY2UucmVkdWNlcixcbiAgICBzZXNzaW9uczogc2Vzc2lvbnNTbGljZS5yZWR1Y2VyLFxuICAgIHNlc3Npb25QbGFjZXM6IHNlc3Npb25QbGFjZXNTbGljZS5yZWR1Y2VyLFxuICAgIHNlc3Npb25UeXBlczogc2Vzc2lvbnNUeXBlU2xpY2UucmVkdWNlcixcbiAgICB1c2VyOiBVc2VyU2xpY2UucmVkdWNlcixcbiAgICBiaWxsczogQmlsbFNsaWNlLnJlZHVjZXIsXG4gIH0sXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazogZmFsc2UsXG4gICAgfSksXG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxvZ2luIiwiSG9tZSIsIlByaXZhdGVSb3V0ZSIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJwYXRoIiwiZWxlbWVudCIsImRlZmF1bHQiLCJIZWFkZXIiLCJTaWRlQmFyIiwidXNlTmF2aWdhdGUiLCJjb29raWVzIiwidXNlU2VsZWN0b3IiLCJGYVVzZXJBbHQiLCJCc0ZpbGxHZWFyRmlsbCIsIkZpTG9nT3V0IiwibmF2aWdhdGUiLCJ1c2VyIiwic3RhdGUiLCJkYXRhIiwiYXNzb2NpYXRpb24iLCJsb2dvdXQiLCJyZW1vdmUiLCJzYW1lU2l0ZSIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiZmlyc3RuYW1lIiwib25DbGljayIsIk5hdkxpbmsiLCJEcm9wZG93biIsIlRvZ2dsZSIsInZhcmlhbnQiLCJNZW51IiwidG8iLCJ1c2VEaXNwYXRjaCIsInNldEFsZXJ0IiwiQWxlcnQiLCJhbGVydCIsImRpc3BhdGNoIiwic2V0VGltZW91dCIsImNvbG9yIiwibWVzc2FnZSIsImRhdGVGb3JtYXQiLCJEYXRlRm9ybWF0IiwiX3JlZiIsImRhdGUiLCJmb3JtYXQiLCJkdCIsInNwbGl0IiwieWVhciIsIm1vbnRoIiwiZGF0ZURheWFuZEhvdXJzIiwiZGF5IiwiZGF0ZUhvdXJzIiwiaG91cnMiLCJtaW4iLCJkYXRlVGltZSIsIkxvYWRpbmciLCJzdHlsZSIsIm1pbkhlaWdodCIsImFsdCIsInNyYyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFnaW50YXRpb24iLCJwcm9wcyIsIml0ZW1QZXJQYWdlIiwibmJQYWdlcyIsImVsZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhY3R1YWxQYWdlIiwic2V0QWN0dWFsUGFnZSIsIl91c2VTdGF0ZTMiLCJsaW5rIiwiX3VzZVN0YXRlNCIsInNldExpbmsiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJ0bk5leHREaXNhYmxlZCIsInNldEJ0bk5leHREaXNhYmxlZCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYnRuUHJldkRpc2FibGVkIiwic2V0QnRuUHJldkRpc2FibGVkIiwiY2hhbmdlUGFnZSIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic3Vic3RyIiwicGFnZSIsIk51bWJlciIsIndoYXRUb0Rpc3BhdGNoIiwicGFnZXNSZW5kZXIiLCJwYWdlTnVtYmVyIiwiaSIsInBhZ2VBY3RpdmUiLCJwdXNoIiwia2V5IiwiTmF2aWdhdGUiLCJ1c2VMb2NhdGlvbiIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdldCIsInJlcGxhY2UiLCJtb250aEZSIiwiQ3VzdG9tZXJMaXN0IiwiQ3VzdG9tZXJEZXRhaWxzIiwiQ3VzdG9tZXJOZXciLCJ1c2VQYXJhbXMiLCJTZXNzaW9uUGxhY2VEZXRhaWxzIiwiU2Vzc2lvblBsYWNlc0xpc3QiLCJTZXNzaW9uUGxhY2VOZXciLCJTZXNzaW9uVHlwZU5ldyIsIlNlc3Npb25UeXBlc0xpc3QiLCJTZXNzaW9uVHlwZURldGFpbHMiLCJTZXNzaW9uTmV3IiwiU2Vzc2lvbnNMaXN0IiwiU2Vzc2lvbkRldGFpbHMiLCJJdGVtTGlzdCIsIkl0ZW1OZXciLCJJdGVtRGV0YWlscyIsIkJpbGxMaXN0IiwiQmlsbERldGFpbHMiLCJCaWxsR2VuZXJhdGUiLCJBcHBSb3V0ZXMiLCJheGlvcyIsIlJFQUNUX0FQUF9TRVJWRVJfTkFNRSIsInByb2Nlc3MiLCJlbnYiLCJnZXRUb2tlbiIsImNvb2tpZSIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiYXBpQm5pIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBpQm5pRmlsZSIsIkJpbGxMZWZ0Q29sdW1uIiwiQmlsbERldGFpbHNGYWN0dXJhdGlvbiIsIkJpbGxJbmZvIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsImJpbGwiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWQiLCJfY3JlYXRlQ2xhc3MiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImVyciIsInJlbmRlciIsImN1c3RvbWVyIiwiRm9ybWlrIiwiRmllbGQiLCJZdXAiLCJkYXRlWWVhciIsIkRhdGUiLCJnZXRVVENGdWxsWWVhciIsIml0ZW1zT3B0aW9ucyIsInNldEl0ZW1zT3B0aW9ucyIsImdldFVUQ01vbnRoIiwieWVhclBsdXMiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJ5ZWFyTWludXMiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdWJtaXQiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwibmV3SXRlbXMiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJuZXdWYWx1ZXMiLCJiaWxsaW5nX21vbnRoIiwiYmlsbGluZ195ZWFyIiwiZnJvbV9hdCIsInBvc3QiLCJpc1N1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm5hbWUiLCJpdGVtU2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImFycmF5IiwibWF0Y2hlcyIsIm9uU3VibWl0IiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJoYW5kbGVCbHVyIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwidG91Y2hlZCIsImFzIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJtIiwidHlwZSIsImh0bWxGb3IiLCJkaXNhYmxlZCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5Iiwic2V0QmlsbCIsIkZhRXllIiwiZmV0Y2hCaWxscyIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX3giLCJzZXRJdGVtUGVyUGFnZSIsImJpbGxzIiwiQmlsbExpc3RVbml0IiwiZGF0ZURheSIsImJpbGxpbmdEYXRlIiwidG9fYXQiLCJiYWRnZVN0eWxlIiwiYmFkZ2VUZXh0IiwiYW1vdW50IiwiYmlsbFN0YXR1dCIsImJhbGFuY2UiLCJsYXN0bmFtZSIsImNvbXBhbnkiLCJiaWxsTnVtYmVyIiwiYmFua0luZm9ybWF0aW9uIiwiY3VycmVuY3kiLCJjdXN0b21lclNlc3Npb25zIiwic2V0Q3VzdG9tZXJTZXNzaW9ucyIsImJpbGxpbmdNb250aCIsImZpcnN0RGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImxhc3REYXkiLCJjb2xTcGFuIiwiY3MiLCJzZXNzaW9uIiwic2Vzc2lvbl90eXBlIiwiZGF5X2F0IiwicHJpY2Vfb2YiLCJpdGVtcyIsIl9yZWYyIiwic3RyZWV0Iiwic3RyZWV0X251bWJlciIsInppcF9jb2RlIiwiY2l0eSIsImVtYWlsIiwiQ3VzdG9tZXJMZWZ0Q29sdW1uIiwiQ3VzdG9tZXJCaWxsc0xpc3QiLCJDdXN0b21lckluZm8iLCJzZXRDdXN0b21lcnMiLCJmZXRjaEN1c3RvbWVycyIsImFkZEZpbHRlciIsInNldEFkZEZpbHRlciIsImN1c3RvbWVycyIsIkJ1dHRvbnNUcmlzIiwiaW5kZXgiLCJDdXN0b21lckxpc3RVbml0IiwibWVtYnJlRG9uZSIsIm1lbWJlcnNoaXAiLCJtZW1iZXJzaGlwX2RvbmVfYXQiLCJ0clN0eWxlIiwic2NvcGUiLCJtZW1iZXJzaGlwX2F0IiwiZmlsdGVyIiwiX2RlZmluZVByb3BlcnR5IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJmaWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kIiwiZmlsZXMiLCJnZXRFbGVtZW50QnlJZCIsImNzc1RleHQiLCJ6aXBDb2RlIiwicGhvbmUiLCJzdHJlZXROdW1iZXIiLCJudW1iZXIiLCJtYXgiLCJtZW1iZXJTaGlwX2F0Iiwib3BlblZjYXJkIiwiY2xvc2VWY2FyZCIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsImN1c3RvbWVyU2NoZW1hIiwic3VibWl0RmlsZSIsInZhbGlkYXRlIiwiRmFTZWFyY2giLCJjdXN0b21lckFjdGl2ZSIsImlzX2FjdGl2ZSIsInNldFVzZXIiLCJDb29raWVzIiwiRmV0Y2hVc2VyIiwidXNlcmlkIiwiX2l0ZW1zJGl0ZW1zIiwiX2l0ZW1zJGl0ZW1zMiIsInNldEl0ZW1zIiwic2V0SXRlbSIsImZldGNoSXRlbXMiLCJnZXRTdGF0ZSIsIl94MiIsImFkZEl0ZW0iLCJwcmljZU9mIiwiZGVzY3JpcHRpb24iLCJGYVVzZXIiLCJGYUxvY2siLCJzZXRMb2FkZWQiLCJjb29raWVzRGF0YSIsInN0cmluZ2lmeSIsInNldCIsImV4cGlyZXMiLCJnZXRUaW1lIiwid2luZG93IiwicmVsb2FkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBsYWNlaG9sZGVyIiwiZmV0Y2hVc2VyIiwic2Vzc2lvblBsYWNlIiwibWVzc2FnZUNvbG9yIiwiU2Vzc2lvblBsYWNlU2NoZW1hIiwic2V0U2Vzc2lvblBsYWNlcyIsImZldGNoU2Vzc2lvblBsYWNlcyIsInNlc3Npb25QbGFjZXMiLCJTZXNzaW9udHlwZURldGFpbHMiLCJzZXNzaW9uVHlwZSIsIlNlc3Npb250eXBlTmV3IiwicG9zaXRpdmUiLCJzZXNzaW9uUGxhY2VfaWQiLCJzZXNzaW9uUGxhY2VMaXN0T3B0aW9uIiwiX3RoaXMzIiwiU2Vzc2lvblR5cGVTY2hlbWEiLCJzIiwic2V0U2Vzc2lvblR5cGVzIiwiZmV0Y2hTZXNzaW9uVHlwZXMiLCJzZXNzaW9uVHlwZXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJzdE9wdGlvbnMiLCJzZXRTdE9wdGlvbnMiLCJzZXREYXRlIiwiX3VzZVNlYXJjaFBhcmFtcyIsIl91c2VTZWFyY2hQYXJhbXMyIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwiU2Vzc2lvblNjaGVtYSIsImRheUF0IiwidG9Eb25lIiwic2Vzc2lvblR5cGVfaWQiLCJGdWxsQ2FsZW5kYXIiLCJkYXlHcmlkUGx1Z2luIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJmckxvY2FsZSIsImhhbmRsZURhdGVDbGljayIsImRhdGVTdHIiLCJjb25maXJtIiwiYXNzaWduIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInVybCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2NhbGUiLCJwbHVnaW5zIiwiaW5pdGlhbFZpZXciLCJldmVudHMiLCJkYXRlQ2xpY2siLCJldmVudEJhY2tncm91bmRDb2xvciIsImV2ZW50Q29sb3IiLCJhc3BlY3RSYXRpbyIsIlJlYWN0RE9NIiwiUHJvdmlkZXIiLCJzdG9yZSIsInJvb3QiLCJjcmVhdGVSb290IiwiU3RyaWN0TW9kZSIsIl9yZXF1aXJlIiwicmVxdWlyZSIsImNyZWF0ZVNsaWNlIiwiY29uZmlndXJlU3RvcmUiLCJhbGVydFNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsImN1c3RvbWVyc1NsaWNlIiwiaXRlbXNTbGljZSIsIl9pdGVtc1NsaWNlJGFjdGlvbnMiLCJzZXNzaW9uc1NsaWNlIiwic2V0U2Vzc2lvbnMiLCJzZXNzaW9uUGxhY2VzU2xpY2UiLCJzZXNzaW9uc1R5cGVTbGljZSIsIlVzZXJTbGljZSIsIkJpbGxTbGljZSIsInJlZHVjZXIiLCJzZXNzaW9ucyIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==