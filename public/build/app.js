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

    //fonction envoi de la vcard
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
/* harmony export */   "default": () => (/* binding */ ItemDetails)
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



var ItemDetails = /*#__PURE__*/function (_Component) {
  _inherits(ItemDetails, _Component);
  var _super = _createSuper(ItemDetails);
  function ItemDetails() {
    _classCallCheck(this, ItemDetails);
    return _super.apply(this, arguments);
  }
  _createClass(ItemDetails, [{
    key: "useEffect",
    value: function useEffect() {
      var _this = this;
      //Récupère le id en découpant la route
      var path = this.props.path["*"];
      var id = path.split("/")[1];
      console.log(id);

      //Requete pour récuperer id
      _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_17__["default"].get("/items/" + id, {}).then(function (response) {
        if (response.status === 200) {
          var item = response.data;
          console.log("item", item);
          _this.setState({
            item: item,
            loaded: false
          });
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      ["catch"](function (err) {
        console.log(err);
        _this.setState({
          errorMessage: err.message,
          loaded: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        /*       <div>  
          {this.state.errorMessage && (
            <Alert message={this.state.errorMessage} color="danger" />
          )}
          {this.state.loaded || this.state.item === null ? (
            <Loading />
          ) : (
            this.state.item.id + " - " + this.state.item.name
          )}</div> */
        react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h1", null, "item"))
      );
    }
  }]);
  return ItemDetails;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);


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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../conf/axios/api.bni */ "./assets/conf/axios/api.bni.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux */ "./assets/redux.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);










function ItemNew() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  //creation de la requete
  var submit = function submit(values, actions) {
    _conf_axios_api_bni__WEBPACK_IMPORTED_MODULE_5__["default"].post("/items", values, {}).then(function (response) {
      if (response.status === 201) {
        actions.isSubmitting = false;
        actions.resetForm();
        dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_8__.addItem)(response));
        dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_8__.setAlert)({
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
  var itemSchema = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_6__.string().min(3, "Prénom trop court").required("Veuillez indiquer un prénom"),
    priceOf: yup__WEBPACK_IMPORTED_MODULE_6__.string().matches(/^\d+(.\d{1,2})?$/, "Format invalide")
  });

  //on affiche le formulaire
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "container-fluid p-5 d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "bg-white border p-5 d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("label", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
      name: "name",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.name
    }), errors.name && touched.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
      className: "text-danger"
    }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("label", null, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
      name: "priceOf",
      className: "form-control",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.priceOf
    }), errors.priceOf && touched.priceOf && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
      className: "text-danger"
    }, errors.priceOf)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", {
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

  //validation du formulaire
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

  //validation du formulaire
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

    //validation des données
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLEVBQUVtSyxTQUFTLENBQUNDO0VBQ25CLENBQUM7RUFDREUsVUFBVSxFQUFFLG9CQUFDQyxvQkFBb0I7SUFBQSxPQUMvQkEsb0JBQW9CLENBQUM7TUFDbkJDLGlCQUFpQixFQUFFO0lBQ3JCLENBQUMsQ0FBQztFQUFBO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ3RKRjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL0FwcC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy9wYWdlL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy9wYWdlL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvRGF0ZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9Mb2FkaW5nLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3V0aWxzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvUHJpdmF0ZVJvdXRlLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3V0aWxzL21vbnRoRlIuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbmYvQXBwUm91dGVzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb25mL2F4aW9zL2FwaS5ibmkuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvQmlsbERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvQmlsbEdlbmVyYXRlLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9iaWxsL0JpbGxMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9iaWxsL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9iaWxsL3RlbXBsYXRlL0JpbGxEZXRhaWxzRmFjdHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvdGVtcGxhdGUvQmlsbEluZm8uanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvdGVtcGxhdGUvQmlsbExlZnRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL0N1c3RvbWVyRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvQ3VzdG9tZXJMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9jdXN0b21lci9DdXN0b21lck5ldy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL3RlbXBsYXRlL0N1c3RvbWVyQmlsbHNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9jdXN0b21lci90ZW1wbGF0ZS9DdXN0b21lckluZm8uanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL3RlbXBsYXRlL0N1c3RvbWVyTGVmdENvbHVtbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvaXRlbS9JdGVtRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvaXRlbS9JdGVtTGlzdC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvaXRlbS9JdGVtTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9sb2dpbi9Mb2dpbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL3Nlc3Npb24vc2Vzc2lvbi1wbGFjZS9TZXNzaW9uUGxhY2VOZXcuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL3Nlc3Npb24vc2Vzc2lvbi1wbGFjZS9TZXNzaW9uUGxhY2VzTGlzdC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXR5cGUvU2Vzc2lvblR5cGVEZXRhaWxzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZU5ldy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXR5cGUvU2Vzc2lvblR5cGVzTGlzdC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uL1Nlc3Npb25EZXRhaWxzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24vU2Vzc2lvbk5ldy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uL1Nlc3Npb25zTGlzdC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL3JlZHV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9BcHAuY3NzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jc3MvYXBwLmNzcz8wYzEwIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9pbmRleC5jc3M/Mjk5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vQXBwLmNzc1wiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IExvZ2luLCBIb21lIH0gZnJvbSBcIi4vZmVhdHVyZXNcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVJvdXRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um91dGVyPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgcGF0aD1cIipcIlxyXG4gICAgICAgICAgZWxlbWVudD17XHJcbiAgICAgICAgICAgIDxQcml2YXRlUm91dGU+XHJcbiAgICAgICAgICAgICAgPEhvbWUgLz5cclxuICAgICAgICAgICAgPC9Qcml2YXRlUm91dGU+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvbG9naW5cIlxyXG4gICAgICAgICAgZWxlbWVudD17XHJcbiAgICAgICAgICAgIDxQcml2YXRlUm91dGU+XHJcbiAgICAgICAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vcGFnZS9IZWFkZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZGVCYXIgfSBmcm9tICcuL3BhZ2UvU2lkZUJhcic7XHJcbiIsImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBGYVVzZXJBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQnNGaWxsR2VhckZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgRmlMb2dPdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmRhdGEpO1xyXG4gIGNvbnN0IGFzc29jaWF0aW9uID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmRhdGEuYXNzb2NpYXRpb24pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBjb29raWVzLnJlbW92ZShcIkFQSUNPT0tJRVwiLCB7IHNhbWVTaXRlOiBcInN0cmljdFwiIH0pO1xyXG4gICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qICAgICAgIDxhIGhyZWY9e1JFQUNUX0FQUF9TRVJWRVJfRlJPTlRfTkFNRX0gY2xhc3NOYW1lPVwiaGVhZGVyX19pbWFnZVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17UkVBQ1RfQVBQX1NFUlZFUl9OQU1FICsgXCIvaW1nL2xvZ29zL1wiICsgYXNzb2NpYXRpb24ubG9nb0ltZ31cclxuICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cclxuICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgPEZhVXNlckFsdCAvPlxyXG4gICAgICAgICAge1wiIEhpIFwiICsgdXNlci5maXJzdG5hbWV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgIDxCc0ZpbGxHZWFyRmlsbCAvPiBBZG1pblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgIDxGaUxvZ091dCAvPiBMb2dvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93blwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibGVmdF9tZW51XCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX3VsXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgQ3VzdG9tZXJzXHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvY3VzdG9tZXJzXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJzIGxpc3RlXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9uZXctY3VzdG9tZXJzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5vdXZlYXUgbWVtYnJlXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIFNlc3Npb25zXHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2Vzc2lvbnNcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBTZXNzaW9uc1xyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9uZXctc2Vzc2lvblwiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIE5vdXZlbGxlIHNlc3Npb25cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL3Nlc3Npb24tcGxhY2VzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBsYWNlIGRlIHNlc3Npb25zXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9uZXctc2Vzc2lvbi1wbGFjZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBOb3V2ZWxsZSBwbGFjZSBkZSBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi8vc2Vzc2lvbi10eXBlc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUeXBlcyBkZSBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9uZXctc2Vzc2lvbi10eXBlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5vdXZlYXUgdHlwZSBkZSBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIEl0ZW1zXHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvaXRlbXNcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBJdGVtcyBsaXN0ZVxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9uZXctaXRlbVwiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIE5vdXZlYXUgaXRlbVxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxEcm9wZG93bj5cclxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICBGYWN0dXJlc1xyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25fbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2JpbGxzXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgTGlzdGUgZGVzIEZhY3R1cmVzXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9nZW5lcmF0ZS1iaWxsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdlbmVyZXIgbGVzIGZhY3R1cmVzXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCgpIHtcclxuICBjb25zdCBhbGVydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxlcnQpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy9zaSB1bmUgYWxlcnQgZXN0IGxhbmPDqWUsIG9uIGxhIGRlc2FjdGl2ZSBhcHLDqHMgWCBzZWNvbmRlc1xyXG4gIGlmIChhbGVydCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldEFsZXJ0KG51bGwpKTtcclxuICAgIH0sIDQwMDApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFsZXJ0KSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiYWxlcnQgYWxlcnQtXCIgKyBhbGVydC5jb2xvcn0+e2FsZXJ0Lm1lc3NhZ2V9PC9kaXY+O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERhdGVGb3JtYXQoe2RhdGUsIGZvcm1hdH0pe1xyXG5cclxuICAgIGxldCBkdCA9IGRhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgLy8gUsOpY3Vww6lyYXRpb24gZGUgbCdhbm7DqWUgZXQgZHUgbW9pc1xyXG4gICAgICAgIGxldCB5ZWFyID0gZHRbMF07XHJcbiAgICAgICAgbGV0IG1vbnRoID0gZHRbMV07XHJcbiAgICBsZXQgZGF0ZURheWFuZEhvdXJzID0gZHRbMl0uc3BsaXQoXCJUXCIpO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlRGF5YW5kSG91cnNbMF07XHJcbiAgICBsZXQgZGF0ZUhvdXJzID0gZGF0ZURheWFuZEhvdXJzWzFdLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBsZXQgaG91cnMgPSBkYXRlSG91cnNbMF07XHJcbiAgICAgICAgbGV0IG1pbiA9IGRhdGVIb3Vyc1sxXTtcclxuXHJcbiAgICBsZXQgZGF0ZVRpbWUgPSB5ZWFyK1wiL1wiK21vbnRoK1wiL1wiK2RheStcIiBcIitob3VycytcIjpcIittaW4rXCI6MDBcIlxyXG4gICAgcmV0dXJuKGRhdGVGb3JtYXQoZGF0ZVRpbWUsIGZvcm1hdCkpICAgIFxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXsgeyBtaW5IZWlnaHQ6ICcxMDB2aCd9IH0gY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgIDxpbWcgYWx0PVwibG9hZGluZyBnaWZcIiBzcmM9XCJodHRwczovL2kucmVkZC5pdC9vdW5xMW13NWtkeHkuZ2lmXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW50YXRpb24ocHJvcHMpIHtcclxuICBjb25zdCBpdGVtUGVyUGFnZSA9IHByb3BzLml0ZW1QZXJQYWdlO1xyXG4gIGNvbnN0IG5iUGFnZXMgPSBwcm9wcy5lbGVtW1wiaHlkcmE6dG90YWxJdGVtc1wiXSAvIGl0ZW1QZXJQYWdlO1xyXG5cclxuICBjb25zdCBbYWN0dWFsUGFnZSwgc2V0QWN0dWFsUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmxpbmsgKyBcIj9wYWdlPVwiICsgYWN0dWFsUGFnZSArIFwiJml0ZW1zUGVyUGFnZT1cIiArIGl0ZW1QZXJQYWdlXHJcbiAgKTtcclxuICBjb25zdCBbYnRuTmV4dERpc2FibGVkLCBzZXRCdG5OZXh0RGlzYWJsZWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYnRuUHJldkRpc2FibGVkLCBzZXRCdG5QcmV2RGlzYWJsZWRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VQYWdlID0gKGUpID0+IHtcclxuICAgIC8vU3VwcHJlc3Npb24gZGUgXCIvYXBpXCIgZHUgbGllblxyXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmRhdGFzZXQubGluay5zdWJzdHIoNCk7XHJcbiAgICAvL1LDqWN1cGVyYXRpb24gZHUgbnVtw6lybyBkZSBwYWdlXHJcbiAgICBjb25zdCBwYWdlID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucGFnZSk7XHJcbiAgICBzZXRBY3R1YWxQYWdlKHBhZ2UpO1xyXG4gICAgLy9taXNlIMOgIGpvdXIgZHUgbGllblxyXG4gICAgc2V0TGluayhsaW5rKTtcclxuICAgIGRpc3BhdGNoKHByb3BzLndoYXRUb0Rpc3BhdGNoKGxpbmspKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYWdlc1JlbmRlciA9ICgpID0+IHtcclxuICAgIGxldCBwYWdlTnVtYmVyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuYlBhZ2VzOyBpKyspIHtcclxuICAgICAgbGV0IHBhZ2VBY3RpdmUgPSBcIlwiO1xyXG4gICAgICBpZiAoYWN0dWFsUGFnZSA9PT0gaSkge1xyXG4gICAgICAgIHBhZ2VBY3RpdmUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYWdlTnVtYmVyLnB1c2goXHJcbiAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZUFjdGl2ZX1cclxuICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGFnZX1cclxuICAgICAgICAgICAgZGF0YS1wYWdlPXtpfVxyXG4gICAgICAgICAgICBkYXRhLWxpbms9e1xyXG4gICAgICAgICAgICAgIFwiL2FwaVwiICtcclxuICAgICAgICAgICAgICBwcm9wcy5saW5rICtcclxuICAgICAgICAgICAgICBcIj9wYWdlPVwiICtcclxuICAgICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgICBcIiZpdGVtc1BlclBhZ2U9XCIgK1xyXG4gICAgICAgICAgICAgIGl0ZW1QZXJQYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XHJcbiAgfTtcclxuXHJcbiAgLy8gbWV0dHJlIGNlY2kgZGFucyB1biBjb21wb25lbnQgdXBkYXRlXHJcbiAgLy8gICBzZXRCdG5QcmV2RGlzYWJsZWQoXCJcIilcclxuICAvLyAgIGlmKGFjdHVhbFBhZ2UgPT09IDEpe1xyXG4gIC8vICAgICAgIHNldEJ0blByZXZEaXNhYmxlZChcImRpc2FibGVkXCIpXHJcbiAgLy8gICB9XHJcbiAgLy8gICBzZXRCdG5OZXh0RGlzYWJsZWQoXCJcIilcclxuICAvLyAgIGlmKGFjdHVhbFBhZ2UgPT09IG5iUGFnZXMpe1xyXG4gIC8vICAgICAgIHNldEJ0bk5leHREaXNhYmxlZChcImRpc2FibGVkXCIpXHJcbiAgLy8gICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChwcm9wcy53aGF0VG9EaXNwYXRjaChsaW5rKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAobmJQYWdlcyA8PSAxKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGFnZX1cclxuICAgICAgICAgICAgZGF0YS1wYWdlPXthY3R1YWxQYWdlIC0gMX1cclxuICAgICAgICAgICAgZGF0YS1saW5rPXtwcm9wcy5lbGVtW1wiaHlkcmE6dmlld1wiXVtcImh5ZHJhOnByZXZpb3VzXCJdfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2J0blByZXZEaXNhYmxlZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHLDqWPDqWRlbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3BhZ2VzUmVuZGVyKCl9XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICBkYXRhLXBhZ2U9e2FjdHVhbFBhZ2UgKyAxfVxyXG4gICAgICAgICAgICBkYXRhLWxpbms9e3Byb3BzLmVsZW1bXCJoeWRyYTp2aWV3XCJdW1wiaHlkcmE6bmV4dFwiXX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtidG5OZXh0RGlzYWJsZWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1aXZhbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuXHJcbiAgLy8gVE9ETyBBREQgR0VUIFVTRVIgRlJPTSBSRURVWFxyXG5cclxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIpIHtcclxuICAgIC8vIGluc3RydWN0aW9uIHNpIGxlIGNvb2tpZSBleGlzdGVcclxuICAgIGlmIChjb29raWVzLmdldChcIkFQSUNPT0tJRVwiKSkge1xyXG4gICAgICByZXR1cm4gPE5hdmlnYXRlIHJlcGxhY2UgdG89XCIvXCIgLz47XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGluc3RydWN0aW9uIHNpIGxlIGNvb2tpZSBuJ2V4aXN0ZSBwYXNcclxuICAgIGlmICghY29va2llcy5nZXQoXCJBUElDT09LSUVcIikpIHtcclxuICAgICAgcmV0dXJuIDxOYXZpZ2F0ZSByZXBsYWNlIHRvPVwiL2xvZ2luXCIgLz47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcml2YXRlUm91dGUgfSBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gJy4vTG9hZGluZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL0FsZXJ0JzsiLCJjb25zdCBtb250aEZSID0gW1sxLCBcIkphbnZpZXJcIl0sIFsyLFwiRsOpdnJpZXJcIl0sIFszLCBcIk1hcnNcIl0sIFs0LCBcIkF2cmlsXCJdLCBbNSwgXCJNYWlcIl0sIFs2LCBcIkp1aW5cIl0sIFs3LCBcIkp1aWxsZXRcIl0sIFs4LCBcIkFvdXRcIl0sIFs5LCBcIlNlcHRlbWJyZVwiXSwgWzEwLCBcIk9jdHJvYnJlXCJdLCBbMTEsIFwiTm92ZW1icmVcIl0sIFsxMiwgXCJEw6ljZW1icmVcIl1dXHJcbmV4cG9ydCBkZWZhdWx0IG1vbnRoRlJcclxuIiwiaW1wb3J0IHtcclxuICBDdXN0b21lckxpc3QsXHJcbiAgQ3VzdG9tZXJEZXRhaWxzLFxyXG4gIEN1c3RvbWVyTmV3LFxyXG59IGZyb20gXCIuLi9mZWF0dXJlcy9jdXN0b21lclwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gIFNlc3Npb25QbGFjZURldGFpbHMsXHJcbiAgU2Vzc2lvblBsYWNlc0xpc3QsXHJcbiAgU2Vzc2lvblBsYWNlTmV3LFxyXG4gIFNlc3Npb25UeXBlTmV3LFxyXG4gIFNlc3Npb25UeXBlc0xpc3QsXHJcbiAgU2Vzc2lvblR5cGVEZXRhaWxzLFxyXG4gIFNlc3Npb25OZXcsXHJcbiAgU2Vzc2lvbnNMaXN0LFxyXG4gIFNlc3Npb25EZXRhaWxzLFxyXG59IGZyb20gXCIuLi9mZWF0dXJlcy9zZXNzaW9uXCI7XHJcbmltcG9ydCB7IEl0ZW1MaXN0LCBJdGVtTmV3LCBJdGVtRGV0YWlscyB9IGZyb20gXCIuLi9mZWF0dXJlcy9pdGVtXCI7XHJcbmltcG9ydCB7IEJpbGxMaXN0LCBCaWxsRGV0YWlscywgQmlsbEdlbmVyYXRlIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2JpbGxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwUm91dGVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um91dGVzPlxyXG4gICAgICB7LyogZMOpZmluaSB0b3V0ZXMgbGVzIHJvdXRlcyBkZSBsJ2FwcCAqL31cclxuICAgICAgey8qIEN1c3RvbWVycyAqL31cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvY3VzdG9tZXJzXCIgZWxlbWVudD17PEN1c3RvbWVyTGlzdCAvPn0gLz5cclxuICAgICAgPFJvdXRlXHJcbiAgICAgICAgcGF0aD1cIi9jdXN0b21lci86aWRcIlxyXG4gICAgICAgIGVsZW1lbnQ9ezxDdXN0b21lckRldGFpbHMgcGF0aD17dXNlUGFyYW1zKCl9IC8+fVxyXG4gICAgICAvPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9uZXctY3VzdG9tZXJzXCIgZWxlbWVudD17PEN1c3RvbWVyTmV3IC8+fSAvPlxyXG4gICAgICB7LyogU2Vzc2lvbiBQbGFjZSAqL31cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvc2Vzc2lvbi1wbGFjZXNcIiBlbGVtZW50PXs8U2Vzc2lvblBsYWNlc0xpc3QgLz59IC8+XHJcbiAgICAgIDxSb3V0ZVxyXG4gICAgICAgIHBhdGg9XCIvc2Vzc2lvbi1wbGFjZS86aWRcIlxyXG4gICAgICAgIGVsZW1lbnQ9ezxTZXNzaW9uUGxhY2VEZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn1cclxuICAgICAgLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3LXNlc3Npb24tcGxhY2VcIiBlbGVtZW50PXs8U2Vzc2lvblBsYWNlTmV3IC8+fSAvPlxyXG4gICAgICB7LyogU2Vzc2lvbiBUeXBlICovfVxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9zZXNzaW9uLXR5cGVzXCIgZWxlbWVudD17PFNlc3Npb25UeXBlc0xpc3QgLz59IC8+XHJcbiAgICAgIDxSb3V0ZVxyXG4gICAgICAgIHBhdGg9XCIvc2Vzc2lvbi10eXBlLzppZFwiXHJcbiAgICAgICAgZWxlbWVudD17PFNlc3Npb25UeXBlRGV0YWlscyBwYXRoPXt1c2VQYXJhbXMoKX0gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL25ldy1zZXNzaW9uLXR5cGVcIiBlbGVtZW50PXs8U2Vzc2lvblR5cGVOZXcgLz59IC8+XHJcbiAgICAgIHsvKiBTZXNzaW9uICovfVxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9zZXNzaW9uc1wiIGVsZW1lbnQ9ezxTZXNzaW9uc0xpc3QgLz59IC8+XHJcbiAgICAgIDxSb3V0ZVxyXG4gICAgICAgIHBhdGg9XCIvc2Vzc2lvbi86aWRcIlxyXG4gICAgICAgIGVsZW1lbnQ9ezxTZXNzaW9uRGV0YWlscyBwYXRoPXt1c2VQYXJhbXMoKX0gLz59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL25ldy1zZXNzaW9uXCIgZWxlbWVudD17PFNlc3Npb25OZXcgLz59IC8+XHJcbiAgICAgIHsvKiBJdGVtcyAqL31cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvaXRlbXNcIiBlbGVtZW50PXs8SXRlbUxpc3QgLz59IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2l0ZW0vOmlkXCIgZWxlbWVudD17PEl0ZW1EZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3LWl0ZW1cIiBlbGVtZW50PXs8SXRlbU5ldyAvPn0gLz5cclxuICAgICAgey8qIGJpbGxzICovfVxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9iaWxsc1wiIGVsZW1lbnQ9ezxCaWxsTGlzdCAvPn0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvYmlsbC86aWRcIiBlbGVtZW50PXs8QmlsbERldGFpbHMgcGF0aD17dXNlUGFyYW1zKCl9IC8+fSAvPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9nZW5lcmF0ZS1iaWxsXCIgZWxlbWVudD17PEJpbGxHZW5lcmF0ZSAvPn0gLz5cclxuICAgIDwvUm91dGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IFJFQUNUX0FQUF9TRVJWRVJfTkFNRSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TRVJWRVJfTkFNRTtcclxuXHJcbi8vb24gcGFyc2UgbGUgY29va2llIHBvdXIgcG91dm9pciByw6ljdXBlcmVyIGxlIHRva2VuIG91IGxlIHVzZXJJZFxyXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICBpZiAoY29va2llcy5nZXQoXCJBUElDT09LSUVcIikpIHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llcy5nZXQoXCJBUElDT09LSUVcIikpO1xyXG4gICAgcmV0dXJuIGNvb2tpZS50b2tlbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwaUJuaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogUkVBQ1RfQVBQX1NFUlZFUl9OQU1FICsgXCIvYXBpXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbiAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGdldFRva2VuKCksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpQm5pRmlsZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogUkVBQ1RfQVBQX1NFUlZFUl9OQU1FICsgXCIvYXBpXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGdldFRva2VuKCksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlCbmk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuaW1wb3J0IEJpbGxMZWZ0Q29sdW1uIGZyb20gXCIuL3RlbXBsYXRlL0JpbGxMZWZ0Q29sdW1uXCI7XHJcbmltcG9ydCBCaWxsRGV0YWlsc0ZhY3R1cmF0aW9uIGZyb20gXCIuL3RlbXBsYXRlL0JpbGxEZXRhaWxzRmFjdHVyYXRpb25cIjtcclxuaW1wb3J0IEJpbGxJbmZvIGZyb20gXCIuL3RlbXBsYXRlL0JpbGxJbmZvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaWxsRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBiaWxsOiBudWxsLCBlcnJvck1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvL1LDqWN1cMOocmUgbGUgaWQgZW4gZMOpY291cGFudCBsYSByb3V0ZVxyXG4gICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLnBhdGhbJyonXTtcclxuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XHJcblxyXG4gICAgLy9SZXF1ZXRlIHBvdXIgcsOpY3VwZXJlciBpZFxyXG4gICAgYXBpQm5pXHJcbiAgICAgIC5nZXQoXCIvYmlsbHMvXCIraWQsIHt9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IGJpbGwgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJpbGw6IGJpbGwsIGxvYWRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL3NpIGN1c3RvbWVyIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIitlcnIpXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5sb2FkZWQgfHwgIXRoaXMuc3RhdGUuYmlsbCl7XHJcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgIDxCaWxsTGVmdENvbHVtbiBjdXN0b21lcj17dGhpcy5zdGF0ZS5iaWxsLmN1c3RvbWVyfSAvPlxyXG4gICAgICAgICAgPEJpbGxEZXRhaWxzRmFjdHVyYXRpb24gYmlsbD17dGhpcy5zdGF0ZS5iaWxsfSAvPlxyXG4gICAgICAgICAgPEJpbGxJbmZvIGJpbGw9e3RoaXMuc3RhdGUuYmlsbH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtaWssIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0QWxlcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9udGhGUiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9tb250aEZSXCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsR2VuZXJhdGUoKSB7XHJcbiAgbGV0IGRhdGVZZWFyID0gbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpO1xyXG5cclxuICBjb25zdCBbaXRlbXNPcHRpb25zLCBzZXRJdGVtc09wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb250aF0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkpO1xyXG4gIGNvbnN0IFt5ZWFyXSA9IHVzZVN0YXRlKGRhdGVZZWFyKTtcclxuICBjb25zdCBbeWVhclBsdXNdID0gdXNlU3RhdGUoZGF0ZVllYXIgKyAxKTtcclxuICBjb25zdCBbeWVhck1pbnVzXSA9IHVzZVN0YXRlKGRhdGVZZWFyIC0gMSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBbXTtcclxuICAgIC8vc3VwcHJlc2lvbiBkdSAkIGRldmFudCBsZXMgaXRlbXNcclxuICAgIHZhbHVlcy5pdGVtTGlzdC5tYXAoKGkpID0+IHtcclxuICAgICAgbGV0IGl0ZW0gPSBpLnNwbGl0KFwiJFwiKTtcclxuICAgICAgcmV0dXJuIG5ld0l0ZW1zLnB1c2goTnVtYmVyKGl0ZW1bMV0pKTsgLy9Bam91dGUgbCdpdGVtIGZvcm1hdMOpIGVuIG5vbWJyZSBhdSB0YWJsZWF1XHJcbiAgICB9KTtcclxuICAgIC8vY3LDqWF0aW9uIGQndW4gbm91dmVhdSB0YWJsZWF1IGF2ZWMgbGVzIGRvbm7DqWVzIGNvcnJlY3QgcG91ciBBUElcclxuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHtcclxuICAgICAgYmlsbGluZ19tb250aDogdmFsdWVzLmJpbGxpbmdfbW9udGggKyBcIi1cIiArIHZhbHVlcy5iaWxsaW5nX3llYXIsXHJcbiAgICAgIGl0ZW1MaXN0OiBuZXdJdGVtcyxcclxuICAgICAgZnJvbV9hdDogdmFsdWVzLmZyb21fYXQsXHJcbiAgICB9O1xyXG5cclxuICAgIGFwaUJuaVxyXG4gICAgICAucG9zdChcIi9iaWxscy9nZW5lcmF0b3JcIiwgbmV3VmFsdWVzLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgc2V0QWxlcnQoe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxlcyBmYWN0dXJlcyBvbiBiaWVuIMOpdMOpZXMgY3LDqWVzXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL3NpIGVycmV1ciBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKTtcclxuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBwb3VyIGxlIGNoYXJnZW1lbnQgZGVzIGl0ZW1zXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vcsOpY3Vww6lyYXRpb24gZGVzIGl0ZW1zXHJcbiAgICBhcGlCbmlcclxuICAgICAgLmdldChcIi9pdGVtc1wiLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gcmVzcG9uc2UuZGF0YVtcImh5ZHJhOm1lbWJlclwiXS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICBzZXRJdGVtc09wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgc2Vzc2lvblR5cGUgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcclxuICBjb25zdCBpdGVtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIGJpbGxpbmdfbW9udGg6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYmlsbGluZ195ZWFyOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGl0ZW1MaXN0OiBZdXAuYXJyYXkoKS5taW4oMCksXHJcbiAgICBmcm9tX2F0OiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1hdGNoZXMoXHJcbiAgICAgICAgL14oMFsxLTldfFsxMl1bMC05XXwzWzAxXSkuKDBbMS05XXwxWzAxMl0pLigxOXwyMClcXGRcXGQkLyxcclxuICAgICAgICBcIkZvcm1hdCBkZC5tbS55eXl5XCJcclxuICAgICAgKVxyXG4gICAgICAucmVxdWlyZWQoXCJEYXRlIFJlcXVpc2VcIiksXHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG4gIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtNSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0fVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICBiaWxsaW5nX21vbnRoOiBtb250aCArIDEsXHJcbiAgICAgICAgICAgIGJpbGxpbmdfeWVhcjogeWVhcixcclxuICAgICAgICAgICAgaXRlbUxpc3Q6IFtdLFxyXG4gICAgICAgICAgICBmcm9tX2F0OiBcIlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2l0ZW1TY2hlbWF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHAtNSBkLWZsZXggZmxleC1jb2x1bW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9pcyBkZSBmYWN0dXJlYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfbW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYmlsbGluZ19tb250aH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21vbnRoRlIubWFwKChtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21bMF19IGtleT17bVswXSArIG1bMV19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuYmlsbGluZ19tb250aCAmJiB0b3VjaGVkLmJpbGxpbmdfbW9udGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5iaWxsaW5nX21vbnRofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ195ZWFyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmJpbGxpbmdfeWVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17eWVhck1pbnVzfT57eWVhck1pbnVzfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyfT57eWVhcn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17eWVhclBsdXN9Pnt5ZWFyUGx1c308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmJpbGxpbmdfbW9udGggJiYgdG91Y2hlZC5iaWxsaW5nX21vbnRoICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuYmlsbGluZ19tb250aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHtpdGVtc09wdGlvbnMubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIiBrZXk9e2kudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XCIkXCIgKyBpLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2kudmFsdWUgKyBpLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17aS52YWx1ZSArIGkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLml0ZW1MaXN0ICYmIHRvdWNoZWQuaXRlbUxpc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuaXRlbUxpc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBkJ8OpbWlzc2lvbiBkZSBsYSBmYWN0dXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbV9hdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5mcm9tX2F0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZnJvbV9hdCAmJiB0b3VjaGVkLmZyb21fYXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5mcm9tX2F0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVudm95ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHNldEJpbGwgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XHJcbmltcG9ydCB7IEZhRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBQYWdpbnRhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9QYWdpbmF0aW9uXCI7XHJcblxyXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlXHJcbmNvbnN0IGZldGNoQmlsbHMgPSAobGluaykgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF3YWl0IGFwaUJuaVxyXG4gICAgICAuZ2V0KGxpbmspXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0QmlsbChyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpbGxMaXN0KCkge1xyXG4gIGNvbnN0IFtpdGVtUGVyUGFnZSwgc2V0SXRlbVBlclBhZ2VdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IGxpbmsgPSBcIi9iaWxsc1wiO1xyXG4gIGNvbnN0IGJpbGxzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5iaWxscy5kYXRhKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoQmlsbHMobGluayArIFwiP3BhZ2U9MSZpdGVtc1BlclBhZ2U9XCIgKyBpdGVtUGVyUGFnZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGJpbGxzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhcHBfdGFibGVcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TW9udGFudDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkNsaWVudDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7YmlsbHNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChiaWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJpbGxMaXN0VW5pdCBiaWxsPXtiaWxsfSBrZXk9e2JpbGwuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxQYWdpbnRhdGlvblxyXG4gICAgICAgICAgbGluaz17bGlua31cclxuICAgICAgICAgIGl0ZW1QZXJQYWdlPXtpdGVtUGVyUGFnZX1cclxuICAgICAgICAgIHdoYXRUb0Rpc3BhdGNoPXtmZXRjaEJpbGxzfVxyXG4gICAgICAgICAgZWxlbT17YmlsbHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBCaWxsTGlzdFVuaXQocHJvcHMpIHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmRhdGEpO1xyXG4gIGNvbnN0IGRhdGVEYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGJpbGxpbmdEYXRlID0gbmV3IERhdGUocHJvcHMuYmlsbC50b19hdCk7XHJcblxyXG4gIC8vRMOpZmluaXRpb24gZHUgdHlwZSBkZSBiYWRnZSBlbiBmb25jdGlvbiBkdSBzdGF0dXQgZGUgbGEgZmFjdHVyZVxyXG4gIGxldCBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWluZm9cIjtcclxuICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XHJcbiAgaWYgKGRhdGVEYXkgPiBuZXcgRGF0ZShiaWxsaW5nRGF0ZSkpIHtcclxuICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tZGFuZ2VyXCI7XHJcbiAgICBiYWRnZVRleHQgPSBcIkV4cGlyw6llXCI7XHJcbiAgfVxyXG4gIGlmIChwcm9wcy5iaWxsLmFtb3VudCA9PT0gcHJvcHMuYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2UpIHtcclxuICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tc3VjY2Vzc1wiO1xyXG4gICAgYmFkZ2VUZXh0ID0gXCJQYXnDqVwiO1xyXG4gIH1cclxuXHJcbiAgLy9Ob20gw6AgYWZmaWNoZXIgKGNvbXBhbnkgLSBmaXN0bmFtZSBsYXN0bmFtZSkgb3UgKGZpc3RuYW1lIGxhc3RuYW1lKVxyXG4gIGxldCBkaXNwbGF5TmFtZSA9XHJcbiAgICBwcm9wcy5iaWxsLmN1c3RvbWVyLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvcHMuYmlsbC5jdXN0b21lci5sYXN0bmFtZTtcclxuICBpZiAocHJvcHMuYmlsbC5jdXN0b21lci5jb21wYW55KSB7XHJcbiAgICBkaXNwbGF5TmFtZSA9IHByb3BzLmJpbGwuY3VzdG9tZXIuY29tcGFueSArIFwiIC0gXCIgKyBkaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dHIga2V5PXtwcm9wcy5iaWxsLmlkfT5cclxuICAgICAgPHRoPntwcm9wcy5iaWxsLmJpbGxOdW1iZXJ9PC90aD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VTdHlsZX0+e2JhZGdlVGV4dH08L3NwYW4+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICB7dXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3kgKyBcIiBcIiArIHByb3BzLmJpbGwuYW1vdW50fVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+e2Rpc3BsYXlOYW1lfTwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8TmF2TGluayB0bz17XCIvYmlsbC9cIiArIHByb3BzLmJpbGwuaWR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICA8RmFFeWUgLz5cclxuICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCaWxsTGlzdCB9IGZyb20gJy4vQmlsbExpc3QnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJpbGxEZXRhaWxzIH0gZnJvbSAnLi9CaWxsRGV0YWlscyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmlsbEdlbmVyYXRlIH0gZnJvbSAnLi9CaWxsR2VuZXJhdGUnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSBcImRhdGVmb3JtYXRcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IHNldEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4XCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlsbERldGFpbHNGYWN0dXJhdGlvbih7IGJpbGwgfSkge1xyXG4gIGNvbnN0IFtjdXN0b21lclNlc3Npb25zLCBzZXRDdXN0b21lclNlc3Npb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vcsOpY3VwZXJhdGlvbiBkZSBsJ3V0aWxpc2F0ZXVyIGNvdXJyYW50XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcclxuXHJcbiAgbGV0IGRhdGUgPSBiaWxsLmJpbGxpbmdNb250aC5zcGxpdChcIi1cIik7XHJcblxyXG4gIGRhdGUgPSBuZXcgRGF0ZShkYXRlWzFdLCBkYXRlWzBdIC0gMSk7XHJcbiAgbGV0IGZpcnN0RGF5ID0gZGF0ZUZvcm1hdChcclxuICAgIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKSxcclxuICAgIFwiZGQubW0ueXl5eVwiXHJcbiAgKTtcclxuICBsZXQgbGFzdERheSA9IGRhdGVGb3JtYXQoXHJcbiAgICBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLFxyXG4gICAgXCJkZC5tbS55eXl5XCJcclxuICApO1xyXG5cclxuICBjb25zdCBsaW5rID1cclxuICAgIFwiY3VzdG9tZXJfc2Vzc2lvbnM/cGFnZT0xJml0ZW1zUGVyUGFnZT0xMDAmY3VzdG9tZXIuaWQ9XCIgK1xyXG4gICAgYmlsbC5jdXN0b21lci5pZCArXHJcbiAgICBcIiZzZXNzaW9uLmRheV9hdCU1QmJlZm9yZSU1RD1cIiArXHJcbiAgICBsYXN0RGF5ICtcclxuICAgIFwiJnNlc3Npb24uZGF5X2F0JTVCYWZ0ZXIlNUQ9XCIgK1xyXG4gICAgZmlyc3REYXk7XHJcblxyXG4gIC8vRMOpZmluaXRpb24gZHUgdHlwZSBkZSBiYWRnZSBlbiBmb25jdGlvbiBkdSBzdGF0dXQgZGUgbGEgZmFjdHVyZVxyXG4gIGxldCBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWluZm9cIjtcclxuICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XHJcbiAgaWYgKG5ldyBEYXRlKCkgPiBuZXcgRGF0ZShiaWxsLnRvX2F0KSkge1xyXG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1kYW5nZXJcIjtcclxuICAgIGJhZGdlVGV4dCA9IFwiRXhwaXLDqWVcIjtcclxuICB9XHJcbiAgaWYgKGJpbGwuYW1vdW50ID09PSBiaWxsLmJpbGxTdGF0dXQuYmFsYW5jZSkge1xyXG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1zdWNjZXNzXCI7XHJcbiAgICBiYWRnZVRleHQgPSBcIlBhecOpXCI7XHJcbiAgfVxyXG5cclxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBwb3VyIGxlcyBDdXN0b21lclNlc3Npb25zIGF2ZWMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwaUJuaVxyXG4gICAgICAuZ2V0KGxpbmspXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc2V0Q3VzdG9tZXJTZXNzaW9ucyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVbmUgZXJyZXVyIGVzciBzdXJ2ZW51ZSAhXCIgKyBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vc2kgY2hhcmdlbWVudCBkZXMgdXNlcnNlc3Npb24gb24gbWV0IHVuIGxvYWRpbmdcclxuICBpZiAoIWN1c3RvbWVyU2Vzc2lvbnMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfNVwiPlxyXG4gICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfNVwiPlxyXG4gICAgICA8aDM+RMOpdGFpbCBmYWN0dXJhdGlvbjwvaDM+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+U2Vzc2lvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIHtjdXN0b21lclNlc3Npb25zW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoY3MpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Y3MuaWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57Y3Muc2Vzc2lvbi5zZXNzaW9uX3R5cGUubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57ZGF0ZUZvcm1hdChjcy5zZXNzaW9uLmRheV9hdCwgXCJkZC5tbS55eXl5XCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtjcy5zZXNzaW9uLnNlc3Npb25fdHlwZS5wcmljZV9vZn1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIDxJdGVtTGlzdFxyXG4gICAgICAgICAgICAgIGl0ZW1zPXtiaWxsLml0ZW1zfVxyXG4gICAgICAgICAgICAgIGN1cnJlbmN5PXt1c2VyLmFzc29jaWF0aW9uLmJhbmtJbmZvcm1hdGlvbi5jdXJyZW5jeX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5fSB7YmlsbC5hbW91bnR9XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJdGVtTGlzdCh7IGl0ZW1zLCBjdXJyZW5jeSB9KSB7XHJcbiAgaWYgKGl0ZW1zICE9IG51bGwpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+TGlzdGUgZGVzIEl0ZW1zPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWQgKyBpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICB7Y3VycmVuY3l9IHtpdGVtLnByaWNlX29mfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsSW5mbyhwcm9wcykge1xyXG4gIGNvbnN0IGJpbGwgPSBwcm9wcy5iaWxsO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuZGF0YSk7XHJcblxyXG4gIC8vRMOpZmluaXRpb24gZHUgdHlwZSBkZSBiYWRnZSBlbiBmb25jdGlvbiBkdSBzdGF0dXQgZGUgbGEgZmFjdHVyZVxyXG4gIGxldCBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWluZm9cIjtcclxuICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XHJcbiAgaWYgKG5ldyBEYXRlKCkgPiBuZXcgRGF0ZShwcm9wcy5iaWxsLnRvX2F0KSkge1xyXG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1kYW5nZXJcIjtcclxuICAgIGJhZGdlVGV4dCA9IFwiRXhwaXLDqWVcIjtcclxuICB9XHJcbiAgaWYgKHByb3BzLmJpbGwuYW1vdW50ID09PSBwcm9wcy5iaWxsLmJpbGxTdGF0dXQuYmFsYW5jZSkge1xyXG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1zdWNjZXNzXCI7XHJcbiAgICBiYWRnZVRleHQgPSBcIlBhecOpXCI7XHJcbiAgfVxyXG5cclxuICAvL2RlZmluaXRpb24gZHUgbW9udGFudCBkZWphIHBhecOpXHJcbiAgbGV0IGJhbGFuY2UgPSBcIi0tXCI7XHJcbiAgaWYgKGJpbGwuYmlsbFN0YXR1dC5iYWxhbmNlKSB7XHJcbiAgICBiYWxhbmNlID1cclxuICAgICAgdXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3kgKyBcIiBcIiArIGJpbGwuYmlsbFN0YXR1dC5iYWxhbmNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfM1wiPlxyXG4gICAgICA8aDM+SW5mbyBGYWN0dXJlPC9oMz5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5GYWN0dXJlIDo8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57cHJvcHMuYmlsbC5iaWxsTnVtYmVyfTwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5TdGF0dXMgZmFjdHVyZSA6PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtiYWRnZVN0eWxlfT57YmFkZ2VUZXh0fTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPk1vbnRhbnQgdG90YWw6PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5fSB7YmlsbC5hbW91bnR9XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5Ew6lqw6AgcGF5w6kgOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntiYWxhbmNlfTwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5EYXRlIGZhY3R1cmF0aW9uIDo8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8RGF0ZUZvcm1hdCBkYXRlPXtiaWxsLmZyb21fYXR9IGZvcm1hdD1cImRkLm1tLnl5eXlcIiAvPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+UGF5YWJsZSBqdXNxdWUgYXUgOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxEYXRlRm9ybWF0IGRhdGU9e2JpbGwudG9fYXR9IGZvcm1hdD1cImRkLm1tLnl5eXlcIiAvPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpbGxMZWZ0Q29sdW1uKHByb3BzKSB7XHJcbiAgY29uc3QgY3VzdG9tZXIgPSBwcm9wcy5jdXN0b21lcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfM1wiPlxyXG4gICAgICA8aDM+RMOpdGFpbHMgY2xpZW50PC9oMz5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5FbnRyZXByaXNlIDo8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIuY29tcGFueX08L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+Tm9tIDo8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIubGFzdG5hbWV9PC9wPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPlByw6lub20gOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5maXJzdG5hbWV9PC9wPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkFkcmVzc2UgOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvbiBtYi0wXCI+XHJcbiAgICAgICAge2N1c3RvbWVyLnN0cmVldCArIFwiIFwiICsgY3VzdG9tZXIuc3RyZWV0X251bWJlcn1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAge2N1c3RvbWVyLnppcF9jb2RlICsgXCIgXCIgKyBjdXN0b21lci5jaXR5fVxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+RW1haWwgOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5lbWFpbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXJMZWZ0Q29sdW1uIGZyb20gXCIuL3RlbXBsYXRlL0N1c3RvbWVyTGVmdENvbHVtblwiO1xyXG5pbXBvcnQgQ3VzdG9tZXJCaWxsc0xpc3QgZnJvbSBcIi4vdGVtcGxhdGUvQ3VzdG9tZXJCaWxsc0xpc3RcIjtcclxuaW1wb3J0IEN1c3RvbWVySW5mbyBmcm9tIFwiLi90ZW1wbGF0ZS9DdXN0b21lckluZm9cIjtcclxuXHJcbi8vIFRPRE8gUkVGQUlSRSBMRSBDT01QT05FTlRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXJEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgY3VzdG9tZXI6IG51bGwsIGJpbGxzOiBudWxsLCBsb2FkZWQ6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE8gTU9WRSBUSElTIENPREUgVE8gVEhFIFNMSUNFXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvL1LDqWN1cMOocmUgbGUgaWQgZW4gZMOpY291cGFudCBsYSByb3V0ZVxyXG4gICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLnBhdGhbXCIqXCJdO1xyXG4gICAgY29uc3QgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcclxuXHJcbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXHJcbiAgICBhcGlCbmlcclxuICAgICAgLmdldChcIi9jdXN0b21lcnMvXCIgKyBpZCwge30pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgY3VzdG9tZXIgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbWVyOiBjdXN0b21lciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgY3VzdG9tZXIgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGFwaUJuaVxyXG4gICAgICAuZ2V0KFwiL2JpbGxzP2N1c3RvbWVyLmlkPVwiICsgaWQsIHt9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IGJpbGxzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiaWxsczogYmlsbHMsIGxvYWRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL3NpIGN1c3RvbWVyIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRlZCB8fCB0aGlzLnN0YXRlLmN1c3RvbWVyID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxDdXN0b21lckluZm8gY3VzdG9tZXI9e3RoaXMuc3RhdGUuY3VzdG9tZXJ9IC8+XHJcbiAgICAgICAgey8qIDxDdXN0b21lckxlZnRDb2x1bW4gY3VzdG9tZXI9e3RoaXMuc3RhdGUuY3VzdG9tZXJ9IC8+XHJcbiAgICAgICAgICA8Q3VzdG9tZXJCaWxsc0xpc3QgYmlsbHM9e3RoaXMuc3RhdGUuYmlsbHN9IC8+ICovfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgc2V0Q3VzdG9tZXJzIH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5pbXBvcnQgeyBGYUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xyXG5pbXBvcnQgUGFnaW50YXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvRGF0ZUZvcm1hdFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlXHJcblxyXG4vLyBUT0RPIEFERCBUTyBSRURVWCBTTElDRVxyXG5jb25zdCBmZXRjaEN1c3RvbWVycyA9IChsaW5rKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXdhaXQgYXBpQm5pXHJcbiAgICAgIC5nZXQobGluaylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRDdXN0b21lcnMocmVzcG9uc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBzZXRBbGVydCh7IGNvbG9yOiBcImRhbmdlclwiLCBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lckxpc3QoKSB7XHJcbiAgY29uc3QgW2l0ZW1QZXJQYWdlLCBzZXRJdGVtUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgY29uc3QgW2FkZEZpbHRlciwgc2V0QWRkRmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGxpbmsgPSBcIi9jdXN0b21lcnNcIjtcclxuICBjb25zdCBjdXN0b21lcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1c3RvbWVycy5kYXRhKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBmZXRjaEN1c3RvbWVycyhsaW5rICsgXCI/cGFnZT0xJml0ZW1zUGVyUGFnZT1cIiArIGl0ZW1QZXJQYWdlICsgYWRkRmlsdGVyKVxyXG4gICAgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChjdXN0b21lcnMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEJ1dHRvbnNUcmlzXHJcbiAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgaXRlbVBlclBhZ2U9e2l0ZW1QZXJQYWdlfVxyXG4gICAgICAgICAgc2V0QWRkRmlsdGVyPXtzZXRBZGRGaWx0ZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYXBwX3RhYmxlXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlByw6lub208L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5ub208L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5WaWxsZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkRhdGUgZW50csOpZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkRhdGUgc29ydGllPC90aD5cclxuICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtjdXN0b21lcnNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChjdXN0b21lciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Q3VzdG9tZXJMaXN0VW5pdCBjdXN0b21lcj17Y3VzdG9tZXJ9IGtleT17Y3VzdG9tZXIuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxQYWdpbnRhdGlvblxyXG4gICAgICAgICAgbGluaz17bGlua31cclxuICAgICAgICAgIGl0ZW1QZXJQYWdlPXtpdGVtUGVyUGFnZX1cclxuICAgICAgICAgIHdoYXRUb0Rpc3BhdGNoPXtmZXRjaEN1c3RvbWVyc31cclxuICAgICAgICAgIGVsZW09e2N1c3RvbWVyc31cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRPRE8gTU9WRSBUTyBBTiBJREVQRURBTlQgQ09NUE9ORU5UXHJcbmZ1bmN0aW9uIEN1c3RvbWVyTGlzdFVuaXQocHJvcHMpIHtcclxuICBjb25zdCBkYXRlRGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBtZW1icmVEb25lID0gbmV3IERhdGUocHJvcHMuY3VzdG9tZXIubWVtYmVyc2hpcC5tZW1iZXJzaGlwX2RvbmVfYXQpO1xyXG5cclxuICBsZXQgdHJTdHlsZSA9IFwiYXBwX3RhYmxlX190ci0tZ3JlZW5cIjtcclxuICBpZiAoZGF0ZURheSA+IG1lbWJyZURvbmUpIHtcclxuICAgIHRyU3R5bGUgPSBcImFwcF90YWJsZV9fdHItLXJlZFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0ciBjbGFzc05hbWU9e3RyU3R5bGV9PlxyXG4gICAgICA8dGggc2NvcGU9XCJyb3dcIj57cHJvcHMuY3VzdG9tZXIuaWR9PC90aD5cclxuICAgICAgPHRkPntwcm9wcy5jdXN0b21lci5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgPHRkPntwcm9wcy5jdXN0b21lci5sYXN0bmFtZX08L3RkPlxyXG4gICAgICA8dGQ+e3Byb3BzLmN1c3RvbWVyLnppcF9jb2RlICsgXCIgXCIgKyBwcm9wcy5jdXN0b21lci5jaXR5fTwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8RGF0ZUZvcm1hdFxyXG4gICAgICAgICAgZGF0ZT17cHJvcHMuY3VzdG9tZXIubWVtYmVyc2hpcC5tZW1iZXJzaGlwX2F0fVxyXG4gICAgICAgICAgZm9ybWF0PVwiZGQubW0ueXl5eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxEYXRlRm9ybWF0XHJcbiAgICAgICAgICBkYXRlPXtwcm9wcy5jdXN0b21lci5tZW1iZXJzaGlwLm1lbWJlcnNoaXBfZG9uZV9hdH1cclxuICAgICAgICAgIGZvcm1hdD1cImRkLm1tLnl5eXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgdG89e1wiL2N1c3RvbWVyL1wiICsgcHJvcHMuY3VzdG9tZXIuaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICBrZXk9e3Byb3BzLmN1c3RvbWVyLmlkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGYUV5ZSAvPlxyXG4gICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gVE9ETyBNT1ZFIFRPIEFOIENPTVBPTkVOVFxyXG5mdW5jdGlvbiBCdXR0b25zVHJpcyh7IHNldEFkZEZpbHRlciwgbGluaywgaXRlbVBlclBhZ2UgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgYWRkRmlsdGVyID0gKGUpID0+IHtcclxuICAgIGxldCBmaWx0ZXIgPSBlLnRhcmdldC5kYXRhc2V0LmZpbHRlcjtcclxuICAgIHNldEFkZEZpbHRlcihcIiZtZW1iZXJzaGlwLmlzX2FjdGl2ZT10cnVlXCIpO1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGZldGNoQ3VzdG9tZXJzKGxpbmsgKyBcIj9wYWdlPTEmaXRlbXNQZXJQYWdlPVwiICsgaXRlbVBlclBhZ2UgKyBmaWx0ZXIpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQgbWItNFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2FkZEZpbHRlcn1cclxuICAgICAgICBkYXRhLWZpbHRlcj1cIiZtZW1iZXJzaGlwLmlzX2FjdGl2ZT10cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIE1lbWJyZSBhY3RpZlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2FkZEZpbHRlcn1cclxuICAgICAgICBkYXRhLWZpbHRlcj1cIiZtZW1iZXJzaGlwLmlzX2FjdGl2ZT1mYWxzZVwiXHJcbiAgICAgID5cclxuICAgICAgICBNZW1icmUgaW5hY3RpZlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgLy8gJm1lbWJlcnNoaXAuaXNfYWN0aXZlPWZhbHNlXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBhcGlCbmksIHsgYXBpQm5pRmlsZSB9IGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbi8vIFRPRE8gRlVOQ1RJT04gQ09NUE9ORU5UXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY29tcGFueTogXCJcIixcclxuICAgICAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0bmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHN0cmVldDogXCJcIixcclxuICAgICAgY2l0eTogXCJcIixcclxuICAgICAgemlwQ29kZTogXCJcIixcclxuICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9jYWNoZSBlbGVtZW50IHBvcHVyIGxlcyBmaWNoaWVyIHZjYXJkXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVGb3JtXCIpLnN0eWxlLmNzc1RleHQgPVxyXG4gICAgICBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCI7XHJcbiAgfVxyXG5cclxuICAvL3NpIG91dmVydHVyZSBWY2FyZCBvbiBjYWNoZSBsZSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyIGV0IG9uIGFmZmljaGUgbGUgZm9ybXVsYWlyZSBwb3VyIGNoYXJnZW1lbnQgZGUgbGEgVmNhcmRcclxuICBvcGVuVmNhcmQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0N1c3RvbWVyRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID1cclxuICAgICAgXCJkaXNwbGF5Om5vbmUgIWltcG9ydGFudFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXhcIjtcclxuICB9XHJcblxyXG4gIGNsb3NlVmNhcmQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVGb3JtXCIpLnN0eWxlLmNzc1RleHQgPVxyXG4gICAgICBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0N1c3RvbWVyRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXhcIjtcclxuICB9XHJcblxyXG4gIC8vZm9uY3Rpb24gZW52b2kgZGUgbGEgdmNhcmRcclxuICBzdWJtaXRGaWxlID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGxldCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2Y2FyZGZpbGVcIik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUuZmlsZXNbMF0pO1xyXG5cclxuICAgIC8vIFRPRE8gTU9WRSBUTyBSRURVWFxyXG4gICAgYXBpQm5pRmlsZVxyXG4gICAgICAucG9zdChcIi92Y2FyZC9wYXJzZXJcIiwgZm9ybWRhdGEpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDdXN0b21lckZvcm1cIikuc3R5bGUuY3NzVGV4dCA9XHJcbiAgICAgICAgICAgIFwiZGlzcGxheTpmbGV4ICFpbXBvcnRhbnRcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUZvcm1cIikuc3R5bGUuY3NzVGV4dCA9XHJcbiAgICAgICAgICAgIFwiZGlzcGxheTpub25lICFpbXBvcnRhbnRcIjtcclxuICAgICAgICAgIC8vdXBkYXRlIGR1IHN0YXRlIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGVzIGNoYW50cyBmb3JtdWxhaXJlXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29tcGFueTogZGF0YS5jb21wYW55LFxyXG4gICAgICAgICAgICBmaXJzdG5hbWU6IGRhdGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHN0cmVldDogZGF0YS5zdHJlZXQsXHJcbiAgICAgICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcclxuICAgICAgICAgICAgemlwQ29kZTogZGF0YS56aXBDb2RlLFxyXG4gICAgICAgICAgICBwaG9uZTogZGF0YS5waG9uZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9FcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vZm9uY3Rpb24gZW5yZWdpc3RyZW1lbnQgZCd1biBub3V2ZWF1IGN1c3RvbWVyXHJcbiAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXHJcbiAgICAvLyBUT0RPIE1PVkUgVE8gUkVEVVhcclxuICAgIGFwaUJuaVxyXG4gICAgICAucG9zdChcIi9jdXN0b21lcnNcIiwgdmFsdWVzLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAvLyBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9zaSBlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBUT0RPIE1PVkUgVE8gQU4gVVRJTFMgRklMRVxyXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcclxuICBjdXN0b21lclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBmaXJzdG5hbWU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWluKDMsIFwiUHLDqW5vbSB0cm9wIGNvdXJ0XCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIHByw6lub21cIiksXHJcbiAgICBsYXN0bmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAgIC5taW4oMywgXCJOb20gdHJvcCBjb3VydFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBub21cIiksXHJcbiAgICBzdHJlZXQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWluKDMsIFwiTm9tIGRlIHJ1ZSB0cm9wIGNvdXJ0XCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIG5vbSBkZSBydWVcIiksXHJcbiAgICBzdHJlZXROdW1iZXI6IFl1cC5zdHJpbmcoKS5taW4oMSwgXCJWZXVpbGxleiBpbmRpcXVlciB1biBudW3DqXJvIGRlIHJ1ZVwiKSxcclxuICAgIHppcENvZGU6IFl1cC5udW1iZXIoKVxyXG4gICAgICAubWluKDEwMDAsIFwiTGUgY29kZSB6aXAgZG9pdCDDqnRyZSBkZSBtaW4gNCBjaGlmZnJlc1wiKVxyXG4gICAgICAubWF4KDk5OTksIFwiTGUgY29kZSB6aXAgZG9pdCDDqnRyZSBkZSBtYXggNCBjaGlmZnJlXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIGNvZGUgcG9zdGFsXCIpLFxyXG4gICAgY2l0eTogWXVwLnN0cmluZygpXHJcbiAgICAgIC5taW4oMywgXCJOb20gZGUgdmlsbGUgdHJvcCBjb3VydFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1bmUgdmlsbGVcIiksXHJcbiAgICBjb21wYW55OiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1pbigzLCBcIk5vbSBlbnRyZXByaXNlIHRyb3AgY291cnRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW5lIGVudHJlcHJpc2VcIiksXHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAgIC5lbWFpbCgzLCBcIkVtYWlsIG5vbiB2YWxpZGVcIilcclxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gZW1haWxcIiksXHJcbiAgICBtZW1iZXJTaGlwX2F0OiBZdXAuc3RyaW5nKCkubWF0Y2hlcyhcclxuICAgICAgL14oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlbLl0oMFsxLTldfDFbMDEyXSlbLl0oMTl8MjApXFxkXFxkJC8sXHJcbiAgICAgIFwiRm9ybWF0IGRkLm1tLnl5eXlcIlxyXG4gICAgKSxcclxuICB9KTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9BZmZpY2hhZ2UgZHUgZm9ybXVsYWlyZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtIGZvcm0tLWxnXzhcIj5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXR9XHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdGhpcy5zdGF0ZS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLnN0YXRlLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBzdHJlZXQ6IHRoaXMuc3RhdGUuc3RyZWV0LFxyXG4gICAgICAgICAgICBzdHJlZXROdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHppcENvZGU6IHRoaXMuc3RhdGUuemlwQ29kZSxcclxuICAgICAgICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxyXG4gICAgICAgICAgICBjb21wYW55OiB0aGlzLnN0YXRlLmNvbXBhbnksXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICBtZW1iZXJTaGlwX2F0OiBcIlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZSAvL3Blcm1ldCBkZSBtZXR0cmUgw6Agam91ciBsZSBmb3JtdWxhaXJlIGF2ZWMgbGUgc3RhdGVcclxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3RoaXMuY3VzdG9tZXJTY2hlbWF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fcm93XCJcclxuICAgICAgICAgICAgICBpZD1cIm5ld0N1c3RvbWVyRm9ybVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByw6lub208L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZmlyc3RuYW1lICYmIHRvdWNoZWQuZmlyc3RuYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZmlyc3RuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5vbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMubGFzdG5hbWUgJiYgdG91Y2hlZC5sYXN0bmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmxhc3RuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlJ1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0cmVldFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHJlZXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5zdHJlZXQgJiYgdG91Y2hlZC5zdHJlZXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zdHJlZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TnVtw6lybyBkZSBydWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXROdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RyZWV0TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuc3RyZWV0TnVtYmVyICYmIHRvdWNoZWQuc3RyZWV0TnVtYmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuc3RyZWV0TnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvZGUgcG9zdGFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInppcENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuemlwQ29kZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnppcENvZGUgJiYgdG91Y2hlZC56aXBDb2RlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuemlwQ29kZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLThcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5WaWxsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY2l0eX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNpdHkgJiYgdG91Y2hlZC5jaXR5ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuY2l0eX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW50cmVwcmlzZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29tcGFueX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbXBhbnkgJiYgdG91Y2hlZC5jb21wYW55ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuY29tcGFueX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLThcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1lbWJyZSBkZXB1aXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW1iZXJTaGlwX2F0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1lbWJlclNoaXBfYXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5tZW1iZXJTaGlwX2F0ICYmIHRvdWNoZWQubWVtYmVyU2hpcF9hdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLm1lbWJlclNoaXBfYXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxyXG4gICAgICAgICAgICAgICAgRW5yZWdpc3RyZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuVmNhcmR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmNhcmRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuXHJcbiAgICAgICAgey8qIGFmZmljaGFnZSBmdSBmb3JtdWxhaXJlIHBvdXIgZmljaGllciBWY2FyZCAqL31cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGaWxlfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBmaWxlOiBcIlwiIH19XHJcbiAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm1fX3Jvd1wiIGlkPVwiZmlsZUZvcm1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ2Y2FyZGZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlsZX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmZpbGUgJiYgdG91Y2hlZC5maWxlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZmlsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgICBDaGFyZ2VyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLXJlZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJBbm51bGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xvc2VWY2FyZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tZXJMaXN0IH0gZnJvbSAnLi9DdXN0b21lckxpc3QnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbWVyRGV0YWlscyB9IGZyb20gJy4vQ3VzdG9tZXJEZXRhaWxzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21lck5ldyB9IGZyb20gJy4vQ3VzdG9tZXJOZXcnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSBcImRhdGVmb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyQmlsbHNMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcclxuXHJcbiAgY29uc3QgW2JpbGxzXSA9IHVzZVN0YXRlKHByb3BzLmJpbGxzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfNVwiPlxyXG4gICAgICA8aDM+RmFjdHVyZXM8L2gzPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7YmlsbHNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChiaWxsKSA9PiB7XHJcbiAgICAgICAgICAgIC8vRMOpZmluaXRpb24gZHUgdHlwZSBkZSBiYWRnZSBlbiBmb25jdGlvbiBkdSBzdGF0dXQgZGUgbGEgZmFjdHVyZVxyXG4gICAgICAgICAgICBsZXQgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1pbmZvXCI7XHJcbiAgICAgICAgICAgIGxldCBiYWRnZVRleHQgPSBcIkVuIGF0dGVudGVcIjtcclxuICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkgPiBuZXcgRGF0ZShiaWxsLnRvX2F0KSkge1xyXG4gICAgICAgICAgICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgICAgYmFkZ2VUZXh0ID0gXCJFeHBpcsOpZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiaWxsLmFtb3VudCA9PT0gYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICBiYWRnZVRleHQgPSBcIlBhecOpXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YmlsbC5pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtcIi9iaWxsL1wiICsgYmlsbC5pZH0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YmlsbC5iaWxsTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICB7dXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3l9IHtiaWxsLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGVGb3JtYXQoYmlsbC50b19hdCwgXCJkZC5tbS55eXl5XCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VTdHlsZX0+e2JhZGdlVGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHMvRGF0ZUZvcm1hdFwiO1xyXG5pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lckluZm8oeyBjdXN0b21lciB9KSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcclxuXHJcbiAgbGV0IGN1c3RvbWVyQWN0aXZlID0gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwX2JhZGdlIGFwcF9iYWRnZS0tc3VjY2Vzc1wiPk1lbWJyZSBhY3RpZjwvc3Bhbj5cclxuICApO1xyXG4gIGlmICghY3VzdG9tZXIubWVtYmVyc2hpcC5pc19hY3RpdmUpIHtcclxuICAgIGN1c3RvbWVyQWN0aXZlID0gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcHBfYmFkZ2UgYXBwX2JhZGdlLS1kYW5nZXJcIj5NZW1icmUgaW5hY3RpZjwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjdXN0b21lcl9zZWFyY2hfYmFyXCI+XHJcbiAgICAgICAgICBSZWNoZXJjaGVyJm5ic3A7XHJcbiAgICAgICAgICA8RmFTZWFyY2ggLz5cclxuICAgICAgICAgICZuYnNwOzxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjb2x1bW5fY2VudGVyX19yb3dcIj5cclxuICAgICAgICAgIDxwPntjdXN0b21lci5jb21wYW55fTwvcD5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLS1yb3VuZGVkXCJcclxuICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0VSVkVSX05BTUUgKyBcIi9pbWcvYmdncmV5LmpwZ1wifVxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPk7CsHtjdXN0b21lci5pZH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y3VzdG9tZXIuZmlyc3RuYW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjdXN0b21lci5sYXN0bmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICB7Y3VzdG9tZXIuc3RyZWV0fSB7Y3VzdG9tZXIuc3RyZWV0X251bWJlcn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjdXN0b21lci56aXBfY29kZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y3VzdG9tZXIuY2l0eX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cclxuICAgICAgICAgIHtjdXN0b21lckFjdGl2ZX1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkRhdGUgZCdlbnRyw6llIDo8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5EYXRlIGRlIHNvcnRpZSA6PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjb2x1bW5fYm90dG9tXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPERhdGVGb3JtYXRcclxuICAgICAgICAgICAgICBkYXRlPXtjdXN0b21lci5tZW1iZXJzaGlwLm1lbWJlcnNoaXBfYXR9XHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQubW0ueXl5eVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPERhdGVGb3JtYXRcclxuICAgICAgICAgICAgICBkYXRlPXtjdXN0b21lci5tZW1iZXJzaGlwLm1lbWJlcnNoaXBfZG9uZV9hdH1cclxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC5tbS55eXl5XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGN1c3RvbWVyX2J1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tZXJfYnV0dG9ucy0tc3VjY2Vzc1wiPk1vZGlmaWVyPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbWVyX2J1dHRvbnMtLWRhbmdlclwiPlN1cHByaW1lcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJMZWZ0Q29sdW1uKHByb3BzKSB7XHJcbiAgY29uc3QgY3VzdG9tZXIgPSBwcm9wcy5jdXN0b21lcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfM1wiPlxyXG4gICAgICA8aDM+Tm9tIGR1IGNsaWVudDwvaDM+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+Y3VzdG9tZXIgTsKwIDo8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIuaWR9PC9wPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkVudHJlcHJpc2UgOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5jb21wYW55fTwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5Ob20gOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5sYXN0bmFtZX08L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+UHLDqW5vbSA6PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmZpcnN0bmFtZX08L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+QWRyZXNzZSA6PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uIG1iLTBcIj5cclxuICAgICAgICB7Y3VzdG9tZXIuc3RyZWV0ICsgXCIgXCIgKyBjdXN0b21lci5zdHJlZXRfbnVtYmVyfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICB7Y3VzdG9tZXIuemlwX2NvZGUgKyBcIiBcIiArIGN1c3RvbWVyLmNpdHl9XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5FbWFpbCA6PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmVtYWlsfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XHJcbmltcG9ydCB7IEhlYWRlciwgU2lkZUJhciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBBcHBSb3V0ZXMgZnJvbSBcIi4uLy4uL2NvbmYvQXBwUm91dGVzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHNldFVzZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vIFRPRE8gQSBTVVBQUklNRVIgQVBSRVMgQVZPSVIgQ0hBTkdFUiBMRSBQUklWQVRFIFJPVVRFXHJcbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goRmV0Y2hVc2VyKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9UT0RPIEFKT1VURVIgU1VSIFJFRFVYXHJcbiAgLy9mb25jdGlvbiBkZSBjaGFyZ2VtZW50IGRlIGwndXRpbGlzYXRldXJcclxuICBjb25zdCBGZXRjaFVzZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWUgPSBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwiQVBJQ09PS0lFXCIpKTtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgYXdhaXQgYXBpQm5pXHJcbiAgICAgICAgLmdldChcIi91c2Vycy9cIiArIGNvb2tpZS5kYXRhLnVzZXJpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8vc2kgbCd1dGlsaXNhdGV1ciBuJ2VzdCBwYXMgZW5jb3JlIGNoYXJnZXIgb24gYWZmaWNoZSBsZSBsb2FkaW5nXHJcbiAgaWYgKHVzZXIuZGF0YSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29sLW1kLTkgbXMtc20tYXV0byBjb2wtbGctMTAgcHgtbWQtNFwiPlxyXG4gICAgICAgICAgICAgIHsvKiBhZmZpY2hhZ2UgZGVzIGFsZXJ0cyAqL31cclxuICAgICAgICAgICAgICA8QWxlcnQgLz5cclxuICAgICAgICAgICAgICB7LyogQWZmaWNoYWdlIGRlcyBsaWVucyAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXBwUm91dGVzIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbiB9IGZyb20gJy4vbG9naW4vTG9naW4nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvbWUgfSBmcm9tICcuL2hvbWUvSG9tZSc7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbURldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHVzZUVmZmVjdCgpIHtcclxuICAgIC8vUsOpY3Vww6hyZSBsZSBpZCBlbiBkw6ljb3VwYW50IGxhIHJvdXRlXHJcbiAgICBsZXQgcGF0aCA9IHRoaXMucHJvcHMucGF0aFtcIipcIl07XHJcbiAgICBjb25zdCBpZCA9IHBhdGguc3BsaXQoXCIvXCIpWzFdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuXHJcbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXHJcbiAgICBhcGlCbmlcclxuICAgICAgLmdldChcIi9pdGVtcy9cIiArIGlkLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbVwiLCBpdGVtKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtOiBpdGVtLCBsb2FkZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLCBsb2FkZWQ6IGZhbHNlIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8qICAgICAgIDxkaXY+ICBcclxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBjb2xvcj1cImRhbmdlclwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgfHwgdGhpcy5zdGF0ZS5pdGVtID09PSBudWxsID8gKFxyXG4gICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtLmlkICsgXCIgLSBcIiArIHRoaXMuc3RhdGUuaXRlbS5uYW1lXHJcbiAgICAgICAgKX08L2Rpdj4gKi9cclxuICAgICAgPD5cclxuICAgICAgICA8aDE+aXRlbTwvaDE+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRJdGVtIH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5cclxuLy9jcsOpYXRpb24gZGUgbGEgcmVxdWV0ZVxyXG5leHBvcnQgY29uc3QgZmV0Y2hJdGVtcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgYXdhaXQgYXBpQm5pXHJcbiAgICAgIC5nZXQoXCIvaXRlbXM/cGFnZT0xJml0ZW1zUGVyUGFnZT0zMFwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEl0ZW0ocmVzcG9uc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBzZXRBbGVydCh7IGNvbG9yOiBcImRhbmdlclwiLCBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtTGlzdCgpIHtcclxuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXRlbXMuZGF0YSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEl0ZW1zKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGl0ZW1zKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtpdGVtc1tcImh5ZHJhOm1lbWJlclwiXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2TGluayB0bz17XCIvaXRlbS9cIiArIGl0ZW0uaWR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAge2l0ZW0uaWQgKyBcIiAtIFwiICsgaXRlbS5uYW1lfVxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZEl0ZW0sIHNldEFsZXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1OZXcoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICBhcGlCbmlcclxuICAgICAgLnBvc3QoXCIvaXRlbXNcIiwgdmFsdWVzLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGFkZEl0ZW0ocmVzcG9uc2UpKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEFsZXJ0KHsgY29sb3I6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBcIkl0ZW0gYWpvdXTDqS5cIiB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL3NpIGVycmV1ciBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcclxuICBjb25zdCBpdGVtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWluKDMsIFwiUHLDqW5vbSB0cm9wIGNvdXJ0XCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIHByw6lub21cIiksXHJcbiAgICBwcmljZU9mOiBZdXAuc3RyaW5nKCkubWF0Y2hlcygvXlxcZCsoLlxcZHsxLDJ9KT8kLywgXCJGb3JtYXQgaW52YWxpZGVcIiksXHJcbiAgfSk7XHJcblxyXG4gIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtNSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0fVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBuYW1lOiBcIlwiLCBwcmljZU9mOiBcIlwiIH19XHJcbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtpdGVtU2NoZW1hfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBwLTUgZC1mbGV4IGZsZXgtY29sdW1uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5vbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJpeDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlT2ZcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJpY2VPZn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnByaWNlT2YgJiYgdG91Y2hlZC5wcmljZU9mICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMucHJpY2VPZn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFbnZveWVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEl0ZW1MaXN0IH0gZnJvbSBcIi4vSXRlbUxpc3RcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJdGVtRGV0YWlscyB9IGZyb20gXCIuL0l0ZW1EZXRhaWxzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSXRlbU5ldyB9IGZyb20gXCIuL0l0ZW1OZXdcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0ICogYXMgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xyXG5pbXBvcnQgeyBGYVVzZXIsIEZhTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vdmFsaWRhdGlvbiBkdSBsb2dpblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgIC8vb24gcGFzc2Ugc2V0TG9hZGVkIMOgIHRydWUgcG91ciBhZmZpY2hlciBsZSBjaGFyZ2VtZW50IGVuIGF0dGVuZGFudCBsYSByw6lwb25zZVxyXG4gICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0VSVkVSX05BTUUgKyBcIi9hcGkvbG9naW5cIiwgdmFsdWVzLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAvL3NpIGxlIGxvZ2luIGVzdCBib24gb24gZmFpdCB1biByZWxvYWQgY2UgcXVpIG5vdXMgcmVkaXJpZ2VyYSB2ZXJzIGxhIHBhZ2UgZCdhY2N1ZWlsIGV0IMOpdml0ZSB1biBidWcgZGUgY29va2llXHJcbiAgICAgICAgICAvLyBjcsOpYXRpb24gZHUgY29va2llIC8vaW5jbHVzIGxlIHRva2VuIGV0IGxlcyBkYXRhc1xyXG4gICAgICAgICAgY29uc3QgY29va2llc0RhdGEgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIGNvb2tpZXMuc2V0KFwiQVBJQ09PS0lFXCIsIGNvb2tpZXNEYXRhLCB7XHJcbiAgICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxyXG4gICAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDUgKiA2MCAqIDEwMDApLFxyXG4gICAgICAgICAgfSk7IC8vNW1pbnV0ZXNcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgbG9naW4gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgICAgIHNldExvYWRlZChmYWxzZSk7XHJcbiAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcclxuICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgc2V0QWxlcnQoe1xyXG4gICAgICAgICAgICBjb2xvcjogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJNYXV2YWlzIGxvZ2luIG91IG1vdCBkZSBwYXNzZSAhXCIgKyBlcnIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcclxuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgIGlmICghdmFsdWVzLnVzZXJuYW1lICYmIHZhbHVlcy51c2VybmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiTm9tIHRyb3AgY291cnRcIjtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XHJcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiVmV1aWxsZXogaW5zZXJlciB1biBtb3QgZGUgcGFzc2VcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnM7XHJcbiAgfTtcclxuXHJcbiAgLy9BZmZpY2hhZ2UgZHUgZm9ybXVsYWlyZVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9hZGVkID8gKFxyXG4gICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC01IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgey8qIGFmZmljaGFnZSBkZSBsJ2FsZXJ0ICovfVxyXG4gICAgICAgICAge2FsZXJ0ID8gPEFsZXJ0IC8+IDogbnVsbH1cclxuICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cclxuICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHAtNSBkLWZsZXggZmxleC1jb2x1bW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJidG5Hcm91cEFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhVXNlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiYnRuR3JvdXBBZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYUxvY2sgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMucGFzc3dvcmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vY3LDqWF0aW9uIGRlIGxhIHJlcXVldGUgcG91ciByw6ljdXBlcmVyIHVzZXJcclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlciA9IChkYXRhKSA9PiB7XHJcbiAgYXhpb3MuZ2V0KFxyXG4gICAgUkVBQ1RfQVBQX1NFUlZFUl9OQU1FICtcclxuICAgICAgXCIvYXBpL3VzZXJzL1wiICtcclxuICAgICAgZGF0YS5kYXRhLnVzZXJpZCArXHJcbiAgICAgIFwiP2p3dD1cIiArXHJcbiAgICAgIGRhdGEudG9rZW5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25QbGFjZU5ldyB9IGZyb20gJy4vc2Vzc2lvbi1wbGFjZS9TZXNzaW9uUGxhY2VOZXcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25QbGFjZXNMaXN0IH0gZnJvbSAnLi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZXNMaXN0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uUGxhY2VEZXRhaWxzIH0gZnJvbSAnLi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZURldGFpbHMnO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uVHlwZU5ldyB9IGZyb20gJy4vc2Vzc2lvbi10eXBlL1Nlc3Npb25UeXBlTmV3JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uVHlwZXNMaXN0IH0gZnJvbSAnLi9zZXNzaW9uLXR5cGUvU2Vzc2lvblR5cGVzTGlzdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvblR5cGVEZXRhaWxzIH0gZnJvbSAnLi9zZXNzaW9uLXR5cGUvU2Vzc2lvblR5cGVEZXRhaWxzJztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvbk5ldyB9IGZyb20gJy4vc2Vzc2lvbi9TZXNzaW9uTmV3JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uc0xpc3QgfSBmcm9tICcuL3Nlc3Npb24vU2Vzc2lvbnNMaXN0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uRGV0YWlscyB9IGZyb20gJy4vc2Vzc2lvbi9TZXNzaW9uRGV0YWlscyc7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvblBsYWNlRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHNlc3Npb25QbGFjZTogbnVsbCwgZXJyb3JNZXNzYWdlOiBudWxsLCBsb2FkZWQ6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9Sw6ljdXDDqHJlIGxlIGlkIGVuIGTDqWNvdXBhbnQgbGEgcm91dGVcclxuICAgIGxldCBwYXRoID0gdGhpcy5wcm9wcy5wYXRoW1wiKlwiXTtcclxuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XHJcblxyXG4gICAgLy9SZXF1ZXRlIHBvdXIgcsOpY3VwZXJlciBpZFxyXG4gICAgYXBpQm5pXHJcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbl9wbGFjZXMvXCIgKyBpZCwge30pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3Qgc2Vzc2lvblBsYWNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXNzaW9uUGxhY2U6IHNlc3Npb25QbGFjZSwgbG9hZGVkOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgc2Vzc2lvblBsYWNlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSwgbG9hZGVkOiBmYWxzZSB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cclxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBjb2xvcj1cImRhbmdlclwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgfHwgdGhpcy5zdGF0ZS5zZXNzaW9uUGxhY2UgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlc3Npb25QbGFjZS56aXBfY29kZSArXHJcbiAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblBsYWNlLmNpdHlcclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25QbGFjZU5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IG1lc3NhZ2U6IG51bGwsIG1lc3NhZ2VDb2xvcjpudWxsLCBsb2FkZWQ6IGZhbHNlfTtcclxuICB9XHJcblxyXG4gIC8vdmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXHJcbiAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcclxuICAgIGFwaUJuaVxyXG4gICAgICAucG9zdChcIi9zZXNzaW9uX3BsYWNlc1wiLCB2YWx1ZXMsIHt9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsYWNlIGRlIHNlc3Npb24gY3LDqWUgYXZlYyBzdWNjw6hzXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gYWN0aW9ucy5yZXNldEZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL3ZhbGlkYXRpb24gZGVzIGRvbm7DqWVzXHJcbiAgU2Vzc2lvblBsYWNlU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIHN0cmVldDogWXVwLnN0cmluZygpLm1pbigzLCAnTm9tIGRlIHJ1ZSB0cm9wIGNvdXJ0JykucmVxdWlyZWQoJ1ZldWlsbGV6IGluZGlxdWVyIHVuIG5vbSBkZSBydWUnKSxcclxuICAgIHN0cmVldE51bWJlcjogWXVwLnN0cmluZygpLm1pbigxLCAnVmV1aWxsZXogaW5kaXF1ZXIgdW4gbnVtw6lybyBkZSBydWUnKSxcclxuICAgIHppcENvZGU6IFl1cC5udW1iZXIoKS5taW4oMTAwMCwgJ0xlIGNvZGUgemlwIGRvaXQgw6p0cmUgZGUgbWluIDQgY2hpZmZyZXMnKS5tYXgoOTk5OSwgJ0xlIGNvZGUgemlwIGRvaXQgw6p0cmUgZGUgbWF4IDQgY2hpZmZyZScpLnJlcXVpcmVkKCdWZXVpbGxleiBpbmRpcXVlciB1biBjb2RlIHBvc3RhbCcpLFxyXG4gICAgY2l0eTogWXVwLnN0cmluZygpLm1pbigzLCAnTm9tIGRlIHZpbGxlIHRyb3AgY291cnQnKS5yZXF1aXJlZCgnVmV1aWxsZXogaW5kaXF1ZXIgdW5lIHZpbGxlJyksXHJcbn0pO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvL29uIGFmZmljaGUgbGUgZm9ybXVsYWlyZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgPyAoXHJcbiAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUubWVzc2FnZX0gY29sb3I9e3RoaXMuc3RhdGUubWVzc2FnZUNvbG9yfSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHN0cmVldDogXCJcIiwgc3RyZWV0TnVtYmVyOiBcIlwiLCB6aXBDb2RlOiBcIlwiLCBjaXR5OiBcIlwiIH19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYSA9IHsgdGhpcy5TZXNzaW9uUGxhY2VTY2hlbWEgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgcC01IGQtZmxleCBmbGV4LWNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0cmVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RyZWV0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zdHJlZXQgJiYgdG91Y2hlZC5zdHJlZXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuc3RyZWV0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OdW3DqXJvIGRlIHJ1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0TnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHJlZXROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnN0cmVldE51bWJlciAmJiB0b3VjaGVkLnN0cmVldE51bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zdHJlZXROdW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29kZSBwb3N0YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiemlwQ29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuemlwQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuemlwQ29kZSAmJiB0b3VjaGVkLnppcENvZGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuemlwQ29kZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WaWxsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY2l0eSAmJiB0b3VjaGVkLmNpdHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuY2l0eX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudm95ZXJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgc2V0U2Vzc2lvblBsYWNlcyB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuXHJcbi8vIFRPRE8gTU9WRSBUTyBSRURVWFxyXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlXHJcbmNvbnN0IGZldGNoU2Vzc2lvblBsYWNlcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBhd2FpdCBhcGlCbmlcclxuICAgICAgLmdldChcIi9zZXNzaW9uX3BsYWNlcz9wYWdlPTEmaXRlbXNQZXJQYWdlPTMwXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0U2Vzc2lvblBsYWNlcyhyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlc3Npb25QbGFjZXNMaXN0KCkge1xyXG4gIGNvbnN0IHNlc3Npb25QbGFjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb25QbGFjZXMuZGF0YSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFNlc3Npb25QbGFjZXMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoc2Vzc2lvblBsYWNlcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7c2Vzc2lvblBsYWNlc1tcImh5ZHJhOm1lbWJlclwiXS5tYXAoKHNlc3Npb25QbGFjZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIHRvPXtcIi9zZXNzaW9uLXBsYWNlL1wiICsgc2Vzc2lvblBsYWNlLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgIGtleT17c2Vzc2lvblBsYWNlLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2Vzc2lvblBsYWNlLnppcF9jb2RlICsgXCIgXCIgKyBzZXNzaW9uUGxhY2UuY2l0eX1cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb250eXBlRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHNlc3Npb25UeXBlOiBudWxsLCBlcnJvck1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvL1LDqWN1cMOocmUgbGUgaWQgZW4gZMOpY291cGFudCBsYSByb3V0ZVxyXG4gICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLnBhdGhbXCIqXCJdO1xyXG4gICAgY29uc3QgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcclxuXHJcbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXHJcbiAgICBhcGlCbmlcclxuICAgICAgLmdldChcIi9zZXNzaW9uX3R5cGVzL1wiICsgaWQsIHt9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IHNlc3Npb25UeXBlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXNzaW9uVHlwZTogc2Vzc2lvblR5cGUsIGxvYWRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL3NpIHNlc3Npb25UeXBlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSwgbG9hZGVkOiBmYWxzZSB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cclxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBjb2xvcj1cImRhbmdlclwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgfHwgdGhpcy5zdGF0ZS5zZXNzaW9uVHlwZSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblR5cGUubmFtZSArXHJcbiAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblR5cGUuZGVzY3JpcHRpb25cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb250eXBlTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgbWVzc2FnZUNvbG9yOiBudWxsLFxyXG4gICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgIHNlc3Npb25QbGFjZUxpc3RPcHRpb246IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vdmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXHJcbiAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcclxuICAgIGFwaUJuaVxyXG4gICAgICAucG9zdChcIi9zZXNzaW9uX3R5cGVzXCIsIHZhbHVlcywge30pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVHlwZSBkZSBzZXNzaW9uIGNyw6llIGF2ZWMgc3VjY8Ooc1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBsb2FkZWQ6ZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gYWN0aW9ucy5yZXNldEZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgbWVzc2FnZUNvbG9yOiBcImRhbmdlclwiLFxyXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vcsOpY3Vww6lyYXRpb24gZGVzIHNlc3Npb25QbGFjZXNcclxuICAgIGFwaUJuaVxyXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fcGxhY2VzXCIsIHt9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoc2Vzc2lvblBsYWNlKSA9PiAoe1xyXG4gICAgICAgICAgICB2YWx1ZTogc2Vzc2lvblBsYWNlLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBzZXNzaW9uUGxhY2UuemlwX2NvZGUrXCIgXCIrc2Vzc2lvblBsYWNlLmNpdHkrXCIgLSBcIitzZXNzaW9uUGxhY2Uuc3RyZWV0K1wiIFwiK3Nlc3Npb25QbGFjZS5zdHJlZXRfbnVtYmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXNzaW9uUGxhY2VMaXN0T3B0aW9uOiBvcHRpb25zLCBsb2FkZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9zaSBzZXNzaW9uUGxhY2UgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSwgbG9hZGVkOiBmYWxzZSB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3ZhbGlkYXRpb24gZGVzIGRvbm7DqWVzXHJcbiAgU2Vzc2lvblR5cGVTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgbmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAgIC5taW4oMywgXCJOb20gdHJvcCBjb3VydFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBub21cIiksXHJcbiAgICBkZXNjcmlwdGlvbjogWXVwLnN0cmluZygpXHJcbiAgICAgIC5taW4oMTAsIFwiVmV1aWxsZXogaW5kaXF1ZXIgdW5lIGRlc2NyaXB0aW9uLCBtaW4gMTAgY2FyYWN0w6hyZXNcIilcclxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW5lIGRlc2NyaXB0aW9uXCIpLFxyXG4gICAgcHJpY2VPZjogWXVwLm51bWJlcigpXHJcbiAgICAgIC5wb3NpdGl2ZShcIkxlIHByaXggbidlc3QgcGFzIHBvc2l0aWZcIilcclxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gcHJpeFwiKSxcclxuICAgIHNlc3Npb25QbGFjZV9pZDogWXVwLm51bWJlcigpLm1pbigxKVxyXG4gIH0pO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvL29uIGFmZmljaGUgbGUgZm9ybXVsYWlyZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgPyAoXHJcbiAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17dGhpcy5zdGF0ZS5tZXNzYWdlQ29sb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VPZjogXCJcIixcclxuICAgICAgICAgICAgICAgIHNlc3Npb25QbGFjZV9pZDogXCJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3RoaXMuU2Vzc2lvblR5cGVTY2hlbWF9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBwLTUgZC1mbGV4IGZsZXgtY29sdW1uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcml4IGRlIGxhIHNlc3Npb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlT2ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlT2Z9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByaWNlT2YgJiYgdG91Y2hlZC5wcmljZU9mICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnByaWNlT2Z9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QbGFjZSBkZSBzZXNzaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXNzaW9uUGxhY2VfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCIwXCIgdmFsdWU9XCIwXCI+VmV1aWxsZXogc2VsZWN0aW9ubmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZXNzaW9uUGxhY2VMaXN0T3B0aW9uLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e3MudmFsdWV9IHZhbHVlPXtzLnZhbHVlfT57cy5uYW1lfTwvb3B0aW9uPjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zZXNzaW9uUGxhY2VfaWQgJiYgdG91Y2hlZC5zZXNzaW9uUGxhY2VfaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnNlc3Npb25QbGFjZV9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRW52b3llclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XHJcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRTZXNzaW9uVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXhcIjtcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XHJcblxyXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlXHJcbmNvbnN0IGZldGNoU2Vzc2lvblR5cGVzID0gKCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF3YWl0IGFwaUJuaVxyXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fdHlwZXM/cGFnZT0xJml0ZW1zUGVyUGFnZT0zMFwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFNlc3Npb25UeXBlcyhyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIHNldEFsZXJ0KHtcclxuICAgICAgICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiICsgZXJyLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvblBsYWNlc0xpc3QoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvblR5cGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uVHlwZXMuZGF0YSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFNlc3Npb25UeXBlcygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChzZXNzaW9uVHlwZXMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3Nlc3Npb25UeXBlc1tcImh5ZHJhOm1lbWJlclwiXS5tYXAoKHNlc3Npb25UeXBlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgdG89e1wiL3Nlc3Npb24tdHlwZS9cIiArIHNlc3Npb25UeXBlLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgIGtleT17c2Vzc2lvblR5cGUuaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzZXNzaW9uVHlwZS5uYW1lfVxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcclxuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xyXG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbnR5cGVEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2Vzc2lvbjogbnVsbCwgZXJyb3JNZXNzYWdlOiBudWxsLCBsb2FkZWQ6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy9Sw6ljdXDDqHJlIGxlIGlkIGVuIGTDqWNvdXBhbnQgbGEgcm91dGVcclxuICAgIGxldCBwYXRoID0gdGhpcy5wcm9wcy5wYXRoW1wiKlwiXTtcclxuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XHJcblxyXG4gICAgLy9SZXF1ZXRlIHBvdXIgcsOpY3VwZXJlciBpZFxyXG4gICAgYXBpQm5pXHJcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbnMvXCIgKyBpZCwge30pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Vzc2lvbjogc2Vzc2lvbiwgbG9hZGVkOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgc2Vzc2lvbiBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsIGxvYWRlZDogZmFsc2UgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7LyogYWZmaWNoYWdlIGR1IG1lc3NhZ2UgZCdlcnJldXIgKi99XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgIDxBbGVydCBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gY29sb3I9XCJkYW5nZXJcIiAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkIHx8IHRoaXMuc3RhdGUuc2Vzc2lvbiA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvbi5zZXNzaW9uX3R5cGUubmFtZSArXHJcbiAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICBkYXRlRm9ybWF0KHRoaXMuc3RhdGUuc2Vzc2lvbi5kYXlfYXQsIFwiZGQgbW1tIHl5eXkgSEg6TU06c3NcIilcclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbnR5cGVOZXcoKSB7XHJcbiAgY29uc3QgW3N0T3B0aW9ucywgc2V0U3RPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy92YWxpZGF0aW9uIGR1IGZvcm11bGFpcmVcclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcclxuICAgIGFwaUJuaVxyXG4gICAgICAucG9zdChcIi9zZXNzaW9uc1wiLCB2YWx1ZXMsIHt9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBzZXRBbGVydCh7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgc2Vzc2lvbiDDoCBiaWVuIMOpdMOpZSBham91dMOpZSAhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBzZXRBbGVydCh7IGNvbG9yOiBcImRhbmdlclwiLCBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcclxuICAgICAgfSk7XHJcbiAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vcsOpY3Vww6lyYXRpb24gZGVzIHNlc3Npb25UeXBlc1xyXG4gICAgYXBpQm5pXHJcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbl90eXBlc1wiLCB7fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gcmVzcG9uc2UuZGF0YVtcImh5ZHJhOm1lbWJlclwiXS5tYXAoKHNlc3Npb25UeXBlKSA9PiAoe1xyXG4gICAgICAgICAgICB2YWx1ZTogc2Vzc2lvblR5cGUuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHNlc3Npb25UeXBlLm5hbWUsXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICBzZXRTdE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL3NpIHNlc3Npb25UeXBlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL3ZhbGlkYXRpb24gZGVzIGRvbm7DqWVzXHJcbiAgY29uc3QgU2Vzc2lvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBkYXlBdDogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXRjaGVzKFxyXG4gICAgICAgIC9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pLigwWzEtOV18MVswMTJdKS4oMTl8MjApXFxkXFxkW1xcc10oMFswLTldfDFbMC05XXwyWzAtNF0pOigwWzAtOV18WzEyMzQ1XVswLTldKSQvLFxyXG4gICAgICAgIFwiRm9ybWF0IGRkLm1tLnl5eXkgaGg6bW1cIlxyXG4gICAgICApXHJcbiAgICAgIC5yZXF1aXJlZChcIkRhdGUgUmVxdWlzZVwiKSxcclxuICAgIHRvRG9uZTogWXVwLm51bWJlcigpLm1pbigwKS5tYXgoMSksXHJcbiAgICBzZXNzaW9uVHlwZV9pZDogWXVwLm51bWJlcigpLm1pbigxKSxcclxuICB9KTtcclxuXHJcbiAgLy9vbiBhZmZpY2hlIGxlIGZvcm11bGFpcmVcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIG9uU3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgZGF5QXQ6IHNlYXJjaFBhcmFtcy5nZXQoXCJkYXRlXCIpLFxyXG4gICAgICAgICAgdG9Eb25lOiAxLFxyXG4gICAgICAgICAgc2Vzc2lvblR5cGVfaWQ6IFwiXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTZXNzaW9uU2NoZW1hfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7XHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgcC01IGQtZmxleCBmbGV4LWNvbHVtblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Kb3VyIGV0IGhldXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYXlBdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGF5QXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmRheUF0ICYmIHRvdWNoZWQuZGF5QXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZGF5QXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5BIGxpZXUgPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidG9Eb25lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy50b0RvbmV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MX0+T3VpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXswfT5Ob248L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMudG9Eb25lICYmIHRvdWNoZWQudG9Eb25lICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnRvRG9uZX08L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlR5cGUgZGUgc2Vzc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2Vzc2lvblR5cGVfaWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCIwXCIgdmFsdWU9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFZldWlsbGV6IHNlbGVjdGlvbm5lclxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7c3RPcHRpb25zLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzLnZhbHVlfSB2YWx1ZT17cy52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLnNlc3Npb25QbGFjZV9pZCAmJiB0b3VjaGVkLnNlc3Npb25QbGFjZV9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zZXNzaW9uUGxhY2VfaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFbnZveWVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xyXG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tIFwiQGZ1bGxjYWxlbmRhci9yZWFjdFwiO1xyXG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCI7IC8vIGEgcGx1Z2luIVxyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb25cIjsgLy8gbmVlZGVkIGZvciBkYXlDbGlja1xyXG5pbXBvcnQgZnJMb2NhbGUgZnJvbSBcIkBmdWxsY2FsZW5kYXIvY29yZS9sb2NhbGVzL2ZyXCI7XHJcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGhhbmRsZURhdGVDbGljayA9IChhcmcpID0+IHtcclxuICAvLyBiaW5kIHdpdGggYW4gYXJyb3cgZnVuY3Rpb25cclxuICBsZXQgZGF0ZSA9IGFyZy5kYXRlU3RyLnNwbGl0KFwiLVwiKTtcclxuICBkYXRlID0gZGF0ZVsyXSArIFwiLlwiICsgZGF0ZVsxXSArIFwiLlwiICsgZGF0ZVswXTtcclxuICBpZiAod2luZG93LmNvbmZpcm0oXCJBam91dGVyIHVuZSBzZXNzaW9uIGxlIFwiICsgZGF0ZSArIFwiID9cIikgPT09IHRydWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCIvbmV3LXNlc3Npb24/ZGF0ZT1cIiArIGRhdGUgKyBcIiBcIiArIFwiMTc6MzA6MDBcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbnNMaXN0KCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwaUJuaVxyXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25zXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgICByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICB0aXRsZTogc2Vzc2lvbi5zZXNzaW9uX3R5cGUubmFtZSxcclxuICAgICAgICAgICAgICBkYXRlOiBzZXNzaW9uLmRheV9hdCxcclxuICAgICAgICAgICAgICB1cmw6IFwiL3Nlc3Npb24vXCIgKyBzZXNzaW9uLmlkLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwibGlzdC1pdGVtXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgICAgIGRhdGU6IHNlc3Npb24uZGF5X2F0LFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwaW5rXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRMaXN0KGFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBzZXRBbGVydCh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiArIGVycixcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAobGlzdC5sZW5ndGggIT09IDApIHtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8RnVsbENhbGVuZGFyXHJcbiAgICAgICAgICBsb2NhbGU9e2ZyTG9jYWxlfVxyXG4gICAgICAgICAgZmlyc3REYXk9XCIxXCJcclxuICAgICAgICAgIHBsdWdpbnM9e1tkYXlHcmlkUGx1Z2luLCBpbnRlcmFjdGlvblBsdWdpbl19XHJcbiAgICAgICAgICBpbml0aWFsVmlldz1cImRheUdyaWRNb250aFwiXHJcbiAgICAgICAgICBldmVudHM9e2xpc3R9XHJcbiAgICAgICAgICBkYXRlQ2xpY2s9e2hhbmRsZURhdGVDbGlja31cclxuICAgICAgICAgIGV2ZW50QmFja2dyb3VuZENvbG9yPVwiI0NDMDAwMFwiXHJcbiAgICAgICAgICBldmVudENvbG9yPVwiIzM3ODAwNlwiXHJcbiAgICAgICAgICBhc3BlY3RSYXRpbz1cIjIuNVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcbi8qIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9hc3NldHMvY3NzL3N0eWxlLnNjc3NcIiAqL1xyXG5pbXBvcnQgXCIuL2Nzcy9hcHAuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL3JlZHV4XCI7XHJcblxyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG5yb290LnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgPC9Qcm92aWRlcj5cclxuKTtcclxuIiwiY29uc3QgeyBjcmVhdGVTbGljZSwgY29uZmlndXJlU3RvcmUgfSA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gYWxlcnRzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGFsZXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhbGVydFwiLFxyXG4gIGluaXRpYWxTdGF0ZTogbnVsbCxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0QWxlcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIC8veyB0eXBlOiBcImFsZXJ0L2FkZEFsZXJ0XCIsIHBheWxvYWQ6eyBcImNvbG9yXCI6XCJkYW5nZXJcIiwgXCJtZXNzYWdlXCI6XCJFcnJldXIgNDA0XCJ9fVxyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vcGV0aXRlcyBmb25jdGlvbiBxdWkgcGVybWV0dGVudCBkZSBwcsOpY2lzZXIgdW5pcXVlbWVudCBsZSBwYXlsb2FkXHJcbmV4cG9ydCBjb25zdCB7IHNldEFsZXJ0IH0gPSBhbGVydFNsaWNlLmFjdGlvbnM7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBjdXN0b21lcnNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IGN1c3RvbWVyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiY3VzdG9tZXJzXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiBbXSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0Q3VzdG9tZXJzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEN1c3RvbWVycyB9ID0gY3VzdG9tZXJzU2xpY2UuYWN0aW9ucztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGl0ZW1zXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBpdGVtc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiaXRlbXNcIixcclxuICBpbml0aWFsU3RhdGU6IFtdLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRJdGVtOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEl0ZW0sIGFkZEl0ZW0gfSA9IGl0ZW1zU2xpY2UuYWN0aW9ucztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHNlc3Npb25zXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBzZXNzaW9uc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2Vzc2lvbnNcIixcclxuICBpbml0aWFsU3RhdGU6IFtdLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZXNzaW9uczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRTZXNzaW9ucyB9ID0gc2Vzc2lvbnNTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc2Vzc2lvbnMgUGxhY2VcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHNlc3Npb25QbGFjZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInNlc3Npb25fcGxhY2VzXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiBbXSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2Vzc2lvblBsYWNlczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRTZXNzaW9uUGxhY2VzIH0gPSBzZXNzaW9uUGxhY2VzU2xpY2UuYWN0aW9ucztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHNlc3Npb25zIFR5cGVcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHNlc3Npb25zVHlwZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2Vzc2lvbnNfdHlwZVwiLFxyXG4gIGluaXRpYWxTdGF0ZTogW10sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlc3Npb25UeXBlczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRTZXNzaW9uVHlwZXMgfSA9IHNlc3Npb25zVHlwZVNsaWNlLmFjdGlvbnM7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVc2VyXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vL1RPRE8gQUpPVVRFUiBMT0FESU5HLCBmZXRjaCB1c2VyXHJcbmNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IFtdLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVzZXIgfSA9IFVzZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQmlsbFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgQmlsbFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmlsbFwiLFxyXG4gIGluaXRpYWxTdGF0ZTogW10sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEJpbGw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0QmlsbCB9ID0gQmlsbFNsaWNlLmFjdGlvbnM7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIENyZWF0ZSBzdG9yZVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGN1c3RvbWVyczogY3VzdG9tZXJzU2xpY2UucmVkdWNlcixcclxuICAgIGl0ZW1zOiBpdGVtc1NsaWNlLnJlZHVjZXIsXHJcbiAgICBhbGVydDogYWxlcnRTbGljZS5yZWR1Y2VyLFxyXG4gICAgc2Vzc2lvbnM6IHNlc3Npb25zU2xpY2UucmVkdWNlcixcclxuICAgIHNlc3Npb25QbGFjZXM6IHNlc3Npb25QbGFjZXNTbGljZS5yZWR1Y2VyLFxyXG4gICAgc2Vzc2lvblR5cGVzOiBzZXNzaW9uc1R5cGVTbGljZS5yZWR1Y2VyLFxyXG4gICAgdXNlcjogVXNlclNsaWNlLnJlZHVjZXIsXHJcbiAgICBiaWxsczogQmlsbFNsaWNlLnJlZHVjZXIsXHJcbiAgfSxcclxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XHJcbiAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSxcclxuICAgIH0pLFxyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTG9naW4iLCJIb21lIiwiUHJpdmF0ZVJvdXRlIiwiQXBwIiwiZGVmYXVsdCIsIkhlYWRlciIsIlNpZGVCYXIiLCJ1c2VOYXZpZ2F0ZSIsImNvb2tpZXMiLCJ1c2VTZWxlY3RvciIsIkZhVXNlckFsdCIsIkJzRmlsbEdlYXJGaWxsIiwiRmlMb2dPdXQiLCJuYXZpZ2F0ZSIsInVzZXIiLCJzdGF0ZSIsImRhdGEiLCJhc3NvY2lhdGlvbiIsImxvZ291dCIsInJlbW92ZSIsInNhbWVTaXRlIiwiZmlyc3RuYW1lIiwiTmF2TGluayIsIkRyb3Bkb3duIiwidXNlRGlzcGF0Y2giLCJzZXRBbGVydCIsIkFsZXJ0IiwiYWxlcnQiLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiLCJjb2xvciIsIm1lc3NhZ2UiLCJkYXRlRm9ybWF0IiwiRGF0ZUZvcm1hdCIsImRhdGUiLCJmb3JtYXQiLCJkdCIsInNwbGl0IiwieWVhciIsIm1vbnRoIiwiZGF0ZURheWFuZEhvdXJzIiwiZGF5IiwiZGF0ZUhvdXJzIiwiaG91cnMiLCJtaW4iLCJkYXRlVGltZSIsIkxvYWRpbmciLCJtaW5IZWlnaHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2ludGF0aW9uIiwicHJvcHMiLCJpdGVtUGVyUGFnZSIsIm5iUGFnZXMiLCJlbGVtIiwiYWN0dWFsUGFnZSIsInNldEFjdHVhbFBhZ2UiLCJsaW5rIiwic2V0TGluayIsImJ0bk5leHREaXNhYmxlZCIsInNldEJ0bk5leHREaXNhYmxlZCIsImJ0blByZXZEaXNhYmxlZCIsInNldEJ0blByZXZEaXNhYmxlZCIsImNoYW5nZVBhZ2UiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsInN1YnN0ciIsInBhZ2UiLCJOdW1iZXIiLCJ3aGF0VG9EaXNwYXRjaCIsInBhZ2VzUmVuZGVyIiwicGFnZU51bWJlciIsImkiLCJwYWdlQWN0aXZlIiwicHVzaCIsIk5hdmlnYXRlIiwidXNlTG9jYXRpb24iLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJnZXQiLCJtb250aEZSIiwiQ3VzdG9tZXJMaXN0IiwiQ3VzdG9tZXJEZXRhaWxzIiwiQ3VzdG9tZXJOZXciLCJ1c2VQYXJhbXMiLCJTZXNzaW9uUGxhY2VEZXRhaWxzIiwiU2Vzc2lvblBsYWNlc0xpc3QiLCJTZXNzaW9uUGxhY2VOZXciLCJTZXNzaW9uVHlwZU5ldyIsIlNlc3Npb25UeXBlc0xpc3QiLCJTZXNzaW9uVHlwZURldGFpbHMiLCJTZXNzaW9uTmV3IiwiU2Vzc2lvbnNMaXN0IiwiU2Vzc2lvbkRldGFpbHMiLCJJdGVtTGlzdCIsIkl0ZW1OZXciLCJJdGVtRGV0YWlscyIsIkJpbGxMaXN0IiwiQmlsbERldGFpbHMiLCJCaWxsR2VuZXJhdGUiLCJBcHBSb3V0ZXMiLCJheGlvcyIsIlJFQUNUX0FQUF9TRVJWRVJfTkFNRSIsInByb2Nlc3MiLCJlbnYiLCJnZXRUb2tlbiIsImNvb2tpZSIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiYXBpQm5pIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBpQm5pRmlsZSIsIkJpbGxMZWZ0Q29sdW1uIiwiQmlsbERldGFpbHNGYWN0dXJhdGlvbiIsIkJpbGxJbmZvIiwiYmlsbCIsImVycm9yTWVzc2FnZSIsImxvYWRlZCIsInBhdGgiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInNldFN0YXRlIiwiZXJyIiwiY3VzdG9tZXIiLCJGb3JtaWsiLCJGaWVsZCIsIll1cCIsImRhdGVZZWFyIiwiRGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiaXRlbXNPcHRpb25zIiwic2V0SXRlbXNPcHRpb25zIiwiZ2V0VVRDTW9udGgiLCJ5ZWFyUGx1cyIsInllYXJNaW51cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3VibWl0IiwidmFsdWVzIiwiYWN0aW9ucyIsIm5ld0l0ZW1zIiwiaXRlbUxpc3QiLCJtYXAiLCJpdGVtIiwibmV3VmFsdWVzIiwiYmlsbGluZ19tb250aCIsImJpbGxpbmdfeWVhciIsImZyb21fYXQiLCJwb3N0IiwiaXNTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsIm5hbWUiLCJpdGVtU2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImFycmF5IiwibWF0Y2hlcyIsImhhbmRsZUJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwibSIsInNldEJpbGwiLCJGYUV5ZSIsImZldGNoQmlsbHMiLCJzZXRJdGVtUGVyUGFnZSIsImJpbGxzIiwiQmlsbExpc3RVbml0IiwiZGF0ZURheSIsImJpbGxpbmdEYXRlIiwidG9fYXQiLCJiYWRnZVN0eWxlIiwiYmFkZ2VUZXh0IiwiYW1vdW50IiwiYmlsbFN0YXR1dCIsImJhbGFuY2UiLCJkaXNwbGF5TmFtZSIsImxhc3RuYW1lIiwiY29tcGFueSIsImJpbGxOdW1iZXIiLCJiYW5rSW5mb3JtYXRpb24iLCJjdXJyZW5jeSIsImN1c3RvbWVyU2Vzc2lvbnMiLCJzZXRDdXN0b21lclNlc3Npb25zIiwiYmlsbGluZ01vbnRoIiwiZmlyc3REYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwibGFzdERheSIsImNzIiwic2Vzc2lvbiIsInNlc3Npb25fdHlwZSIsImRheV9hdCIsInByaWNlX29mIiwiaXRlbXMiLCJzdHJlZXQiLCJzdHJlZXRfbnVtYmVyIiwiemlwX2NvZGUiLCJjaXR5IiwiZW1haWwiLCJDdXN0b21lckxlZnRDb2x1bW4iLCJDdXN0b21lckJpbGxzTGlzdCIsIkN1c3RvbWVySW5mbyIsInNldEN1c3RvbWVycyIsImZldGNoQ3VzdG9tZXJzIiwiYWRkRmlsdGVyIiwic2V0QWRkRmlsdGVyIiwiY3VzdG9tZXJzIiwiaW5kZXgiLCJDdXN0b21lckxpc3RVbml0IiwibWVtYnJlRG9uZSIsIm1lbWJlcnNoaXAiLCJtZW1iZXJzaGlwX2RvbmVfYXQiLCJ0clN0eWxlIiwibWVtYmVyc2hpcF9hdCIsIkJ1dHRvbnNUcmlzIiwiZmlsdGVyIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImZpbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmQiLCJmaWxlcyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJjc3NUZXh0IiwiemlwQ29kZSIsInBob25lIiwic3RyZWV0TnVtYmVyIiwibnVtYmVyIiwibWF4IiwibWVtYmVyU2hpcF9hdCIsImN1c3RvbWVyU2NoZW1hIiwib3BlblZjYXJkIiwic3VibWl0RmlsZSIsInZhbGlkYXRlIiwiY2xvc2VWY2FyZCIsIkZhU2VhcmNoIiwiY3VzdG9tZXJBY3RpdmUiLCJpc19hY3RpdmUiLCJzZXRVc2VyIiwiQ29va2llcyIsIkZldGNoVXNlciIsInVzZXJpZCIsInNldEl0ZW0iLCJmZXRjaEl0ZW1zIiwiZ2V0U3RhdGUiLCJhZGRJdGVtIiwicHJpY2VPZiIsIkZhVXNlciIsIkZhTG9jayIsInNldExvYWRlZCIsImNvb2tpZXNEYXRhIiwic3RyaW5naWZ5Iiwic2V0IiwiZXhwaXJlcyIsImdldFRpbWUiLCJ3aW5kb3ciLCJyZWxvYWQiLCJlcnJvciIsInVzZXJuYW1lIiwibGVuZ3RoIiwicGFzc3dvcmQiLCJmZXRjaFVzZXIiLCJzZXNzaW9uUGxhY2UiLCJtZXNzYWdlQ29sb3IiLCJTZXNzaW9uUGxhY2VTY2hlbWEiLCJzZXRTZXNzaW9uUGxhY2VzIiwiZmV0Y2hTZXNzaW9uUGxhY2VzIiwic2Vzc2lvblBsYWNlcyIsIlNlc3Npb250eXBlRGV0YWlscyIsInNlc3Npb25UeXBlIiwiZGVzY3JpcHRpb24iLCJTZXNzaW9udHlwZU5ldyIsInBvc2l0aXZlIiwic2Vzc2lvblBsYWNlX2lkIiwic2Vzc2lvblBsYWNlTGlzdE9wdGlvbiIsIlNlc3Npb25UeXBlU2NoZW1hIiwicyIsInNldFNlc3Npb25UeXBlcyIsImZldGNoU2Vzc2lvblR5cGVzIiwic2Vzc2lvblR5cGVzIiwidXNlU2VhcmNoUGFyYW1zIiwic3RPcHRpb25zIiwic2V0U3RPcHRpb25zIiwic2V0RGF0ZSIsInNlYXJjaFBhcmFtcyIsInNldFNlYXJjaFBhcmFtcyIsIlNlc3Npb25TY2hlbWEiLCJkYXlBdCIsInRvRG9uZSIsInNlc3Npb25UeXBlX2lkIiwiRnVsbENhbGVuZGFyIiwiZGF5R3JpZFBsdWdpbiIsImludGVyYWN0aW9uUGx1Z2luIiwiZnJMb2NhbGUiLCJoYW5kbGVEYXRlQ2xpY2siLCJhcmciLCJkYXRlU3RyIiwiY29uZmlybSIsImFzc2lnbiIsImxpc3QiLCJzZXRMaXN0IiwidGl0bGUiLCJ1cmwiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiUmVhY3RET00iLCJQcm92aWRlciIsInN0b3JlIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJyZXF1aXJlIiwiY3JlYXRlU2xpY2UiLCJjb25maWd1cmVTdG9yZSIsImFsZXJ0U2xpY2UiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJjdXN0b21lcnNTbGljZSIsIml0ZW1zU2xpY2UiLCJzZXNzaW9uc1NsaWNlIiwic2V0U2Vzc2lvbnMiLCJzZXNzaW9uUGxhY2VzU2xpY2UiLCJzZXNzaW9uc1R5cGVTbGljZSIsIlVzZXJTbGljZSIsIkJpbGxTbGljZSIsInJlZHVjZXIiLCJzZXNzaW9ucyIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==