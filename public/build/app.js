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
    to: "/session-types",
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





// TODO Aficcher un loading //<Loading /> x
// TODO Destructor js
// TODO "" items details
// TODO Tableau

function ItemDetails(props) {
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
  if (items) {
    var _items$items, _items$items2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_14__.Alert, {
      message: this.state.errorMessage,
      color: "danger"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, items === null || items === void 0 ? void 0 : (_items$items = items.items) === null || _items$items === void 0 ? void 0 : _items$items.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", null, items === null || items === void 0 ? void 0 : (_items$items2 = items.items) === null || _items$items2 === void 0 ? void 0 : _items$items2.price_of), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.NavLink, {
      to: "/items"
    }, "Back"));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_components_utils__WEBPACK_IMPORTED_MODULE_14__.Loading, null);
  }
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
    return;
    /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, "no session");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLE9BQU87SUFDdkJ4TCxLQUFLLEVBQUV1TCxTQUFTLENBQUNDO0VBQ25CLENBQUM7RUFDREUsVUFBVSxFQUFFLFNBQUFBLFdBQUNDLG9CQUFvQjtJQUFBLE9BQy9CQSxvQkFBb0IsQ0FBQztNQUNuQkMsaUJBQWlCLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0VBQUE7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDdEpGOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvQXBwLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2UvSGVhZGVyLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2UvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9BbGVydC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9jb21wb25lbnRzL3V0aWxzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29tcG9uZW50cy91dGlscy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbXBvbmVudHMvdXRpbHMvbW9udGhGUi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvY29uZi9BcHBSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2NvbmYvYXhpb3MvYXBpLmJuaS5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC9CaWxsRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC9CaWxsR2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvQmlsbExpc3QuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2JpbGwvdGVtcGxhdGUvQmlsbERldGFpbHNGYWN0dXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC90ZW1wbGF0ZS9CaWxsSW5mby5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvYmlsbC90ZW1wbGF0ZS9CaWxsTGVmdENvbHVtbi5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvQ3VzdG9tZXJEZXRhaWxzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9jdXN0b21lci9DdXN0b21lckxpc3QuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL0N1c3RvbWVyTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvdGVtcGxhdGUvQ3VzdG9tZXJCaWxsc0xpc3QuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2N1c3RvbWVyL3RlbXBsYXRlL0N1c3RvbWVySW5mby5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvY3VzdG9tZXIvdGVtcGxhdGUvQ3VzdG9tZXJMZWZ0Q29sdW1uLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL0l0ZW1EZXRhaWxzLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL0l0ZW1MaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9pdGVtL0l0ZW1OZXcuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2l0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL2xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL2luZGV4LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tcGxhY2UvU2Vzc2lvblBsYWNlRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZU5ldy5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvZmVhdHVyZXMvc2Vzc2lvbi9zZXNzaW9uLXBsYWNlL1Nlc3Npb25QbGFjZXNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL3Nlc3Npb24vc2Vzc2lvbi10eXBlL1Nlc3Npb25UeXBlTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZXNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24vU2Vzc2lvbkRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2ZlYXR1cmVzL3Nlc3Npb24vc2Vzc2lvbi9TZXNzaW9uTmV3LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9mZWF0dXJlcy9zZXNzaW9uL3Nlc3Npb24vU2Vzc2lvbnNMaXN0LmpzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibmktcmVhY3QvLi9hc3NldHMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vYm5pLXJlYWN0Ly4vYXNzZXRzL2Nzcy9hcHAuY3NzIiwid2VicGFjazovL2JuaS1yZWFjdC8uL2Fzc2V0cy9pbmRleC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMb2dpbiwgSG9tZSB9IGZyb20gXCIuL2ZlYXR1cmVzXCI7XG5pbXBvcnQgeyBQcml2YXRlUm91dGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIipcIlxuICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZT5cbiAgICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9sb2dpblwiXG4gICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlPlxuICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvUm91dGVzPlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL3BhZ2UvSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lkZUJhciB9IGZyb20gJy4vcGFnZS9TaWRlQmFyJztcbiIsImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBGYVVzZXJBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEJzRmlsbEdlYXJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBGaUxvZ091dCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcbiAgY29uc3QgYXNzb2NpYXRpb24gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuZGF0YS5hc3NvY2lhdGlvbik7XG5cbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIGNvb2tpZXMucmVtb3ZlKFwiQVBJQ09PS0lFXCIsIHsgc2FtZVNpdGU6IFwic3RyaWN0XCIgfSk7XG4gICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogICAgICAgPGEgaHJlZj17UkVBQ1RfQVBQX1NFUlZFUl9GUk9OVF9OQU1FfSBjbGFzc05hbWU9XCJoZWFkZXJfX2ltYWdlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e1JFQUNUX0FQUF9TRVJWRVJfTkFNRSArIFwiL2ltZy9sb2dvcy9cIiArIGFzc29jaWF0aW9uLmxvZ29JbWd9XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIC8+XG4gICAgICA8L2E+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdlwiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIDxGYVVzZXJBbHQgLz5cbiAgICAgICAgICB7XCIgSGkgXCIgKyB1c2VyLmZpcnN0bmFtZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPEJzRmlsbEdlYXJGaWxsIC8+IEFkbWluXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+XG4gICAgICAgICAgPEZpTG9nT3V0IC8+IExvZ291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93blwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImxlZnRfbWVudVwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fdWxcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgQ3VzdG9tZXJzXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2N1c3RvbWVyc1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBDdXN0b21lcnMgbGlzdGVcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL25ldy1jdXN0b21lcnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTm91dmVhdSBtZW1icmVcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgU2Vzc2lvbnNcbiAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuXG4gICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duX21lbnVcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2Vzc2lvbnNcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgU2Vzc2lvbnNcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9uZXctc2Vzc2lvblwiIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBOb3V2ZWxsZSBzZXNzaW9uXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9zZXNzaW9uLXBsYWNlc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQbGFjZSBkZSBzZXNzaW9uc1xuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbmV3LXNlc3Npb24tcGxhY2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRfbWVudV9fZHJvcGRvd24tLWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTm91dmVsbGUgcGxhY2UgZGUgc2Vzc2lvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc2Vzc2lvbi10eXBlc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUeXBlcyBkZSBzZXNzaW9uXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9uZXctc2Vzc2lvbi10eXBlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5vdXZlYXUgdHlwZSBkZSBzZXNzaW9uXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxEcm9wZG93bj5cbiAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgICAgIEl0ZW1zXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2l0ZW1zXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiPlxuICAgICAgICAgICAgICAgIEl0ZW1zIGxpc3RlXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbmV3LWl0ZW1cIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duLS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgTm91dmVhdSBpdGVtXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxEcm9wZG93bj5cbiAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJsZWZ0X21lbnVfX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgICAgIEZhY3R1cmVzXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bl9tZW51XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2JpbGxzXCIgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiPlxuICAgICAgICAgICAgICAgIExpc3RlIGRlcyBGYWN0dXJlc1xuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvZ2VuZXJhdGUtYmlsbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdF9tZW51X19kcm9wZG93bi0taXRlbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZW5lcmVyIGxlcyBmYWN0dXJlc1xuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEFsZXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KCkge1xuICBjb25zdCBhbGVydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxlcnQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9zaSB1bmUgYWxlcnQgZXN0IGxhbmPDqWUsIG9uIGxhIGRlc2FjdGl2ZSBhcHLDqHMgWCBzZWNvbmRlc1xuICBpZiAoYWxlcnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldEFsZXJ0KG51bGwpKTtcbiAgICB9LCA0MDAwKTtcbiAgfVxuXG4gIGlmIChhbGVydCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJhbGVydCBhbGVydC1cIiArIGFsZXJ0LmNvbG9yfT57YWxlcnQubWVzc2FnZX08L2Rpdj47XG4gIH1cbn1cbiIsImltcG9ydCBkYXRlRm9ybWF0IGZyb20gXCJkYXRlZm9ybWF0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlRm9ybWF0KHtkYXRlLCBmb3JtYXR9KXtcblxuICAgIGxldCBkdCA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlIGwnYW5uw6llIGV0IGR1IG1vaXNcbiAgICAgICAgbGV0IHllYXIgPSBkdFswXTtcbiAgICAgICAgbGV0IG1vbnRoID0gZHRbMV07XG4gICAgbGV0IGRhdGVEYXlhbmRIb3VycyA9IGR0WzJdLnNwbGl0KFwiVFwiKTtcbiAgICAgICAgbGV0IGRheSA9IGRhdGVEYXlhbmRIb3Vyc1swXTtcbiAgICBsZXQgZGF0ZUhvdXJzID0gZGF0ZURheWFuZEhvdXJzWzFdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0ZUhvdXJzWzBdO1xuICAgICAgICBsZXQgbWluID0gZGF0ZUhvdXJzWzFdO1xuXG4gICAgbGV0IGRhdGVUaW1lID0geWVhcitcIi9cIittb250aCtcIi9cIitkYXkrXCIgXCIraG91cnMrXCI6XCIrbWluK1wiOjAwXCJcbiAgICByZXR1cm4oZGF0ZUZvcm1hdChkYXRlVGltZSwgZm9ybWF0KSkgICAgXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9eyB7IG1pbkhlaWdodDogJzEwMHZoJ30gfSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cbiAgICAgIDxpbWcgYWx0PVwibG9hZGluZyBnaWZcIiBzcmM9XCJodHRwczovL2kucmVkZC5pdC9vdW5xMW13NWtkeHkuZ2lmXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW50YXRpb24ocHJvcHMpIHtcbiAgY29uc3QgaXRlbVBlclBhZ2UgPSBwcm9wcy5pdGVtUGVyUGFnZTtcbiAgY29uc3QgbmJQYWdlcyA9IHByb3BzLmVsZW1bXCJoeWRyYTp0b3RhbEl0ZW1zXCJdIC8gaXRlbVBlclBhZ2U7XG5cbiAgY29uc3QgW2FjdHVhbFBhZ2UsIHNldEFjdHVhbFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzLmxpbmsgKyBcIj9wYWdlPVwiICsgYWN0dWFsUGFnZSArIFwiJml0ZW1zUGVyUGFnZT1cIiArIGl0ZW1QZXJQYWdlXG4gICk7XG4gIGNvbnN0IFtidG5OZXh0RGlzYWJsZWQsIHNldEJ0bk5leHREaXNhYmxlZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYnRuUHJldkRpc2FibGVkLCBzZXRCdG5QcmV2RGlzYWJsZWRdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgY2hhbmdlUGFnZSA9IChlKSA9PiB7XG4gICAgLy9TdXBwcmVzc2lvbiBkZSBcIi9hcGlcIiBkdSBsaWVuXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmRhdGFzZXQubGluay5zdWJzdHIoNCk7XG4gICAgLy9Sw6ljdXBlcmF0aW9uIGR1IG51bcOpcm8gZGUgcGFnZVxuICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5wYWdlKTtcbiAgICBzZXRBY3R1YWxQYWdlKHBhZ2UpO1xuICAgIC8vbWlzZSDDoCBqb3VyIGR1IGxpZW5cbiAgICBzZXRMaW5rKGxpbmspO1xuICAgIGRpc3BhdGNoKHByb3BzLndoYXRUb0Rpc3BhdGNoKGxpbmspKTtcbiAgfTtcblxuICBjb25zdCBwYWdlc1JlbmRlciA9ICgpID0+IHtcbiAgICBsZXQgcGFnZU51bWJlciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5iUGFnZXM7IGkrKykge1xuICAgICAgbGV0IHBhZ2VBY3RpdmUgPSBcIlwiO1xuICAgICAgaWYgKGFjdHVhbFBhZ2UgPT09IGkpIHtcbiAgICAgICAgcGFnZUFjdGl2ZSA9IFwiYWN0aXZlXCI7XG4gICAgICB9XG5cbiAgICAgIHBhZ2VOdW1iZXIucHVzaChcbiAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlQWN0aXZlfVxuICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGFnZX1cbiAgICAgICAgICAgIGRhdGEtcGFnZT17aX1cbiAgICAgICAgICAgIGRhdGEtbGluaz17XG4gICAgICAgICAgICAgIFwiL2FwaVwiICtcbiAgICAgICAgICAgICAgcHJvcHMubGluayArXG4gICAgICAgICAgICAgIFwiP3BhZ2U9XCIgK1xuICAgICAgICAgICAgICBpICtcbiAgICAgICAgICAgICAgXCImaXRlbXNQZXJQYWdlPVwiICtcbiAgICAgICAgICAgICAgaXRlbVBlclBhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICB9O1xuXG4gIC8vIG1ldHRyZSBjZWNpIGRhbnMgdW4gY29tcG9uZW50IHVwZGF0ZVxuICAvLyAgIHNldEJ0blByZXZEaXNhYmxlZChcIlwiKVxuICAvLyAgIGlmKGFjdHVhbFBhZ2UgPT09IDEpe1xuICAvLyAgICAgICBzZXRCdG5QcmV2RGlzYWJsZWQoXCJkaXNhYmxlZFwiKVxuICAvLyAgIH1cbiAgLy8gICBzZXRCdG5OZXh0RGlzYWJsZWQoXCJcIilcbiAgLy8gICBpZihhY3R1YWxQYWdlID09PSBuYlBhZ2VzKXtcbiAgLy8gICAgICAgc2V0QnRuTmV4dERpc2FibGVkKFwiZGlzYWJsZWRcIilcbiAgLy8gICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChwcm9wcy53aGF0VG9EaXNwYXRjaChsaW5rKSk7XG4gIH0sIFtdKTtcblxuICBpZiAobmJQYWdlcyA8PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VQYWdlfVxuICAgICAgICAgICAgZGF0YS1wYWdlPXthY3R1YWxQYWdlIC0gMX1cbiAgICAgICAgICAgIGRhdGEtbGluaz17cHJvcHMuZWxlbVtcImh5ZHJhOnZpZXdcIl1bXCJoeWRyYTpwcmV2aW91c1wiXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuUHJldkRpc2FibGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByw6ljw6lkZW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlc1JlbmRlcigpfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGFnZX1cbiAgICAgICAgICAgIGRhdGEtcGFnZT17YWN0dWFsUGFnZSArIDF9XG4gICAgICAgICAgICBkYXRhLWxpbms9e3Byb3BzLmVsZW1bXCJoeWRyYTp2aWV3XCJdW1wiaHlkcmE6bmV4dFwiXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuTmV4dERpc2FibGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1aXZhbnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcml2YXRlUm91dGUoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICAvLyBUT0RPIEFERCBHRVQgVVNFUiBGUk9NIFJFRFVYXG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9sb2dpblwiKSB7XG4gICAgLy8gaW5zdHJ1Y3Rpb24gc2kgbGUgY29va2llIGV4aXN0ZVxuICAgIGlmIChjb29raWVzLmdldChcIkFQSUNPT0tJRVwiKSkge1xuICAgICAgcmV0dXJuIDxOYXZpZ2F0ZSByZXBsYWNlIHRvPVwiL1wiIC8+O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpbnN0cnVjdGlvbiBzaSBsZSBjb29raWUgbidleGlzdGUgcGFzXG4gICAgaWYgKCFjb29raWVzLmdldChcIkFQSUNPT0tJRVwiKSkge1xuICAgICAgcmV0dXJuIDxOYXZpZ2F0ZSByZXBsYWNlIHRvPVwiL2xvZ2luXCIgLz47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcml2YXRlUm91dGUgfSBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmcgfSBmcm9tICcuL0xvYWRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vQWxlcnQnOyIsImNvbnN0IG1vbnRoRlIgPSBbXG4gIFsxLCBcIkphbnZpZXJcIl0sXG4gIFsyLCBcIkbDqXZyaWVyXCJdLFxuICBbMywgXCJNYXJzXCJdLFxuICBbNCwgXCJBdnJpbFwiXSxcbiAgWzUsIFwiTWFpXCJdLFxuICBbNiwgXCJKdWluXCJdLFxuICBbNywgXCJKdWlsbGV0XCJdLFxuICBbOCwgXCJBb3V0XCJdLFxuICBbOSwgXCJTZXB0ZW1icmVcIl0sXG4gIFsxMCwgXCJPY3Ryb2JyZVwiXSxcbiAgWzExLCBcIk5vdmVtYnJlXCJdLFxuICBbMTIsIFwiRMOpY2VtYnJlXCJdLFxuXTtcbmV4cG9ydCBkZWZhdWx0IG1vbnRoRlI7XG4iLCJpbXBvcnQge1xuICBDdXN0b21lckxpc3QsXG4gIEN1c3RvbWVyRGV0YWlscyxcbiAgQ3VzdG9tZXJOZXcsXG59IGZyb20gXCIuLi9mZWF0dXJlcy9jdXN0b21lclwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7XG4gIFNlc3Npb25QbGFjZURldGFpbHMsXG4gIFNlc3Npb25QbGFjZXNMaXN0LFxuICBTZXNzaW9uUGxhY2VOZXcsXG4gIFNlc3Npb25UeXBlTmV3LFxuICBTZXNzaW9uVHlwZXNMaXN0LFxuICBTZXNzaW9uVHlwZURldGFpbHMsXG4gIFNlc3Npb25OZXcsXG4gIFNlc3Npb25zTGlzdCxcbiAgU2Vzc2lvbkRldGFpbHMsXG59IGZyb20gXCIuLi9mZWF0dXJlcy9zZXNzaW9uXCI7XG5pbXBvcnQgeyBJdGVtTGlzdCwgSXRlbU5ldywgSXRlbURldGFpbHMgfSBmcm9tIFwiLi4vZmVhdHVyZXMvaXRlbVwiO1xuaW1wb3J0IHsgQmlsbExpc3QsIEJpbGxEZXRhaWxzLCBCaWxsR2VuZXJhdGUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvYmlsbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBSb3V0ZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcz5cbiAgICAgIHsvKiBkw6lmaW5pIHRvdXRlcyBsZXMgcm91dGVzIGRlIGwnYXBwICovfVxuICAgICAgey8qIEN1c3RvbWVycyAqL31cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWVyc1wiIGVsZW1lbnQ9ezxDdXN0b21lckxpc3QgLz59IC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD1cIi9jdXN0b21lci86aWRcIlxuICAgICAgICBlbGVtZW50PXs8Q3VzdG9tZXJEZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn1cbiAgICAgIC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9uZXctY3VzdG9tZXJzXCIgZWxlbWVudD17PEN1c3RvbWVyTmV3IC8+fSAvPlxuICAgICAgey8qIFNlc3Npb24gUGxhY2UgKi99XG4gICAgICA8Um91dGUgcGF0aD1cIi9zZXNzaW9uLXBsYWNlc1wiIGVsZW1lbnQ9ezxTZXNzaW9uUGxhY2VzTGlzdCAvPn0gLz5cbiAgICAgIDxSb3V0ZVxuICAgICAgICBwYXRoPVwiL3Nlc3Npb24tcGxhY2UvOmlkXCJcbiAgICAgICAgZWxlbWVudD17PFNlc3Npb25QbGFjZURldGFpbHMgcGF0aD17dXNlUGFyYW1zKCl9IC8+fVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL25ldy1zZXNzaW9uLXBsYWNlXCIgZWxlbWVudD17PFNlc3Npb25QbGFjZU5ldyAvPn0gLz5cbiAgICAgIHsvKiBTZXNzaW9uIFR5cGUgKi99XG4gICAgICA8Um91dGUgcGF0aD1cIi9zZXNzaW9uLXR5cGVzXCIgZWxlbWVudD17PFNlc3Npb25UeXBlc0xpc3QgLz59IC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD1cIi9zZXNzaW9uLXR5cGUvOmlkXCJcbiAgICAgICAgZWxlbWVudD17PFNlc3Npb25UeXBlRGV0YWlscyBwYXRoPXt1c2VQYXJhbXMoKX0gLz59XG4gICAgICAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3LXNlc3Npb24tdHlwZVwiIGVsZW1lbnQ9ezxTZXNzaW9uVHlwZU5ldyAvPn0gLz5cbiAgICAgIHsvKiBTZXNzaW9uICovfVxuICAgICAgPFJvdXRlIHBhdGg9XCIvc2Vzc2lvbnNcIiBlbGVtZW50PXs8U2Vzc2lvbnNMaXN0IC8+fSAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvc2Vzc2lvbi86aWRcIlxuICAgICAgICBlbGVtZW50PXs8U2Vzc2lvbkRldGFpbHMgcGF0aD17dXNlUGFyYW1zKCl9IC8+fVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL25ldy1zZXNzaW9uXCIgZWxlbWVudD17PFNlc3Npb25OZXcgLz59IC8+XG4gICAgICB7LyogSXRlbXMgKi99XG4gICAgICA8Um91dGUgcGF0aD1cIi9pdGVtc1wiIGVsZW1lbnQ9ezxJdGVtTGlzdCAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2l0ZW0vOmlkXCIgZWxlbWVudD17PEl0ZW1EZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL25ldy1pdGVtXCIgZWxlbWVudD17PEl0ZW1OZXcgLz59IC8+XG4gICAgICB7LyogYmlsbHMgKi99XG4gICAgICA8Um91dGUgcGF0aD1cIi9iaWxsc1wiIGVsZW1lbnQ9ezxCaWxsTGlzdCAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2JpbGwvOmlkXCIgZWxlbWVudD17PEJpbGxEZXRhaWxzIHBhdGg9e3VzZVBhcmFtcygpfSAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2dlbmVyYXRlLWJpbGxcIiBlbGVtZW50PXs8QmlsbEdlbmVyYXRlIC8+fSAvPlxuICAgIDwvUm91dGVzPlxuICApO1xufVxuIiwiaW1wb3J0ICogYXMgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IFJFQUNUX0FQUF9TRVJWRVJfTkFNRSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TRVJWRVJfTkFNRTtcblxuLy9vbiBwYXJzZSBsZSBjb29raWUgcG91ciBwb3V2b2lyIHLDqWN1cGVyZXIgbGUgdG9rZW4gb3UgbGUgdXNlcklkXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgaWYgKGNvb2tpZXMuZ2V0KFwiQVBJQ09PS0lFXCIpKSB7XG4gICAgY29uc3QgY29va2llID0gSlNPTi5wYXJzZShjb29raWVzLmdldChcIkFQSUNPT0tJRVwiKSk7XG4gICAgcmV0dXJuIGNvb2tpZS50b2tlbjtcbiAgfVxufVxuXG5jb25zdCBhcGlCbmkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBSRUFDVF9BUFBfU0VSVkVSX05BTUUgKyBcIi9hcGlcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgZ2V0VG9rZW4oKSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXBpQm5pRmlsZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFJFQUNUX0FQUF9TRVJWRVJfTkFNRSArIFwiL2FwaVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBnZXRUb2tlbigpLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUJuaTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IEJpbGxMZWZ0Q29sdW1uIGZyb20gXCIuL3RlbXBsYXRlL0JpbGxMZWZ0Q29sdW1uXCI7XG5pbXBvcnQgQmlsbERldGFpbHNGYWN0dXJhdGlvbiBmcm9tIFwiLi90ZW1wbGF0ZS9CaWxsRGV0YWlsc0ZhY3R1cmF0aW9uXCI7XG5pbXBvcnQgQmlsbEluZm8gZnJvbSBcIi4vdGVtcGxhdGUvQmlsbEluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlsbERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGJpbGw6IG51bGwsIGVycm9yTWVzc2FnZTogbnVsbCwgbG9hZGVkOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL1LDqWN1cMOocmUgbGUgaWQgZW4gZMOpY291cGFudCBsYSByb3V0ZVxuICAgIGxldCBwYXRoID0gdGhpcy5wcm9wcy5wYXRoWycqJ107XG4gICAgY29uc3QgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcblxuICAgIC8vUmVxdWV0ZSBwb3VyIHLDqWN1cGVyZXIgaWRcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvYmlsbHMvXCIraWQsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGJpbGwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiaWxsOiBiaWxsLCBsb2FkZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBjdXN0b21lciBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIitlcnIpXG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZih0aGlzLnN0YXRlLmxvYWRlZCB8fCAhdGhpcy5zdGF0ZS5iaWxsKXtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgICA8QmlsbExlZnRDb2x1bW4gY3VzdG9tZXI9e3RoaXMuc3RhdGUuYmlsbC5jdXN0b21lcn0gLz5cbiAgICAgICAgICA8QmlsbERldGFpbHNGYWN0dXJhdGlvbiBiaWxsPXt0aGlzLnN0YXRlLmJpbGx9IC8+XG4gICAgICAgICAgPEJpbGxJbmZvIGJpbGw9e3RoaXMuc3RhdGUuYmlsbH0gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWxlcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb250aEZSIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL21vbnRoRlJcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsR2VuZXJhdGUoKSB7XG4gIGxldCBkYXRlWWVhciA9IG5ldyBEYXRlKCkuZ2V0VVRDRnVsbFllYXIoKTtcblxuICBjb25zdCBbaXRlbXNPcHRpb25zLCBzZXRJdGVtc09wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbW9udGhdID0gdXNlU3RhdGUobmV3IERhdGUoKS5nZXRVVENNb250aCgpKTtcbiAgY29uc3QgW3llYXJdID0gdXNlU3RhdGUoZGF0ZVllYXIpO1xuICBjb25zdCBbeWVhclBsdXNdID0gdXNlU3RhdGUoZGF0ZVllYXIgKyAxKTtcbiAgY29uc3QgW3llYXJNaW51c10gPSB1c2VTdGF0ZShkYXRlWWVhciAtIDEpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICBjb25zdCBuZXdJdGVtcyA9IFtdO1xuICAgIC8vc3VwcHJlc2lvbiBkdSAkIGRldmFudCBsZXMgaXRlbXNcbiAgICB2YWx1ZXMuaXRlbUxpc3QubWFwKChpKSA9PiB7XG4gICAgICBsZXQgaXRlbSA9IGkuc3BsaXQoXCIkXCIpO1xuICAgICAgcmV0dXJuIG5ld0l0ZW1zLnB1c2goTnVtYmVyKGl0ZW1bMV0pKTsgLy9Bam91dGUgbCdpdGVtIGZvcm1hdMOpIGVuIG5vbWJyZSBhdSB0YWJsZWF1XG4gICAgfSk7XG4gICAgLy9jcsOpYXRpb24gZCd1biBub3V2ZWF1IHRhYmxlYXUgYXZlYyBsZXMgZG9ubsOpZXMgY29ycmVjdCBwb3VyIEFQSVxuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHtcbiAgICAgIGJpbGxpbmdfbW9udGg6IHZhbHVlcy5iaWxsaW5nX21vbnRoICsgXCItXCIgKyB2YWx1ZXMuYmlsbGluZ195ZWFyLFxuICAgICAgaXRlbUxpc3Q6IG5ld0l0ZW1zLFxuICAgICAgZnJvbV9hdDogdmFsdWVzLmZyb21fYXQsXG4gICAgfTtcblxuICAgIGFwaUJuaVxuICAgICAgLnBvc3QoXCIvYmlsbHMvZ2VuZXJhdG9yXCIsIG5ld1ZhbHVlcywge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBzZXRBbGVydCh7XG4gICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJMZXMgZmFjdHVyZXMgb24gYmllbiDDqXTDqWVzIGNyw6llc1wiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycik7XG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfTtcblxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBwb3VyIGxlIGNoYXJnZW1lbnQgZGVzIGl0ZW1zXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9yw6ljdXDDqXJhdGlvbiBkZXMgaXRlbXNcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvaXRlbXNcIiwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWQsXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHNldEl0ZW1zT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgc2Vzc2lvblR5cGUgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBjb25zdCBpdGVtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBiaWxsaW5nX21vbnRoOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICBiaWxsaW5nX3llYXI6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgIGl0ZW1MaXN0OiBZdXAuYXJyYXkoKS5taW4oMCksXG4gICAgZnJvbV9hdDogWXVwLnN0cmluZygpXG4gICAgICAubWF0Y2hlcyhcbiAgICAgICAgL14oMFsxLTldfFsxMl1bMC05XXwzWzAxXSkuKDBbMS05XXwxWzAxMl0pLigxOXwyMClcXGRcXGQkLyxcbiAgICAgICAgXCJGb3JtYXQgZGQubW0ueXl5eVwiXG4gICAgICApXG4gICAgICAucmVxdWlyZWQoXCJEYXRlIFJlcXVpc2VcIiksXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG4gIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtNSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgICAgYmlsbGluZ19tb250aDogbW9udGggKyAxLFxuICAgICAgICAgICAgYmlsbGluZ195ZWFyOiB5ZWFyLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IFtdLFxuICAgICAgICAgICAgZnJvbV9hdDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2l0ZW1TY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICB7KHtcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBwLTUgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk1vaXMgZGUgZmFjdHVyZWF0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX21vbnRoXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5iaWxsaW5nX21vbnRofVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttb250aEZSLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21bMF19IGtleT17bVswXSArIG1bMV19PlxuICAgICAgICAgICAgICAgICAgICAgICAge21bMV19XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuYmlsbGluZ19tb250aCAmJiB0b3VjaGVkLmJpbGxpbmdfbW9udGggJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuYmlsbGluZ19tb250aH08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ195ZWFyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5iaWxsaW5nX3llYXJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17eWVhck1pbnVzfT57eWVhck1pbnVzfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17eWVhcn0+e3llYXJ9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyUGx1c30+e3llYXJQbHVzfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5iaWxsaW5nX21vbnRoICYmIHRvdWNoZWQuYmlsbGluZ19tb250aCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5iaWxsaW5nX21vbnRofTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHtpdGVtc09wdGlvbnMubWFwKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiIGtleT17aS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1MaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XCIkXCIgKyBpLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpLnZhbHVlICsgaS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtpLnZhbHVlICsgaS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2kubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7ZXJyb3JzLml0ZW1MaXN0ICYmIHRvdWNoZWQuaXRlbUxpc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLml0ZW1MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRlIGQnw6ltaXNzaW9uIGRlIGxhIGZhY3R1cmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21fYXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmZyb21fYXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmZyb21fYXQgJiYgdG91Y2hlZC5mcm9tX2F0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmZyb21fYXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnZveWVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgc2V0QWxlcnQsIHNldEJpbGwgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IHsgRmFFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBQYWdpbnRhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9QYWdpbmF0aW9uXCI7XG5cbi8vY3LDqWF0aW9uIGRlIGxhIHJlcXVldGVcbmNvbnN0IGZldGNoQmlsbHMgPSAobGluaykgPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgYXBpQm5pXG4gICAgICAuZ2V0KGxpbmspXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIGRpc3BhdGNoKHNldEJpbGwocmVzcG9uc2UpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBzZXRBbGVydCh7IGNvbG9yOiBcImRhbmdlclwiLCBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsTGlzdCgpIHtcbiAgY29uc3QgW2l0ZW1QZXJQYWdlLCBzZXRJdGVtUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IGxpbmsgPSBcIi9iaWxsc1wiO1xuICBjb25zdCBiaWxscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYmlsbHMuZGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQmlsbHMobGluayArIFwiP3BhZ2U9MSZpdGVtc1BlclBhZ2U9XCIgKyBpdGVtUGVyUGFnZSkpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGJpbGxzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhcHBfdGFibGVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Nb250YW50PC90aD5cbiAgICAgICAgICAgICAgPHRoPkNsaWVudDwvdGg+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtiaWxsc1tcImh5ZHJhOm1lbWJlclwiXS5tYXAoKGJpbGwpID0+IChcbiAgICAgICAgICAgICAgPEJpbGxMaXN0VW5pdCBiaWxsPXtiaWxsfSBrZXk9e2JpbGwuaWR9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8UGFnaW50YXRpb25cbiAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgIGl0ZW1QZXJQYWdlPXtpdGVtUGVyUGFnZX1cbiAgICAgICAgICB3aGF0VG9EaXNwYXRjaD17ZmV0Y2hCaWxsc31cbiAgICAgICAgICBlbGVtPXtiaWxsc31cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG59XG5cbmZ1bmN0aW9uIEJpbGxMaXN0VW5pdChwcm9wcykge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmRhdGEpO1xuICBjb25zdCBkYXRlRGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgYmlsbGluZ0RhdGUgPSBuZXcgRGF0ZShwcm9wcy5iaWxsLnRvX2F0KTtcblxuICAvL0TDqWZpbml0aW9uIGR1IHR5cGUgZGUgYmFkZ2UgZW4gZm9uY3Rpb24gZHUgc3RhdHV0IGRlIGxhIGZhY3R1cmVcbiAgbGV0IGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0taW5mb1wiO1xuICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XG4gIGlmIChkYXRlRGF5ID4gbmV3IERhdGUoYmlsbGluZ0RhdGUpKSB7XG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1kYW5nZXJcIjtcbiAgICBiYWRnZVRleHQgPSBcIkV4cGlyw6llXCI7XG4gIH1cbiAgaWYgKHByb3BzLmJpbGwuYW1vdW50ID09PSBwcm9wcy5iaWxsLmJpbGxTdGF0dXQuYmFsYW5jZSkge1xuICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tc3VjY2Vzc1wiO1xuICAgIGJhZGdlVGV4dCA9IFwiUGF5w6lcIjtcbiAgfVxuXG4gIC8vTm9tIMOgIGFmZmljaGVyIChjb21wYW55IC0gZmlzdG5hbWUgbGFzdG5hbWUpIG91IChmaXN0bmFtZSBsYXN0bmFtZSlcbiAgbGV0IGRpc3BsYXlOYW1lID1cbiAgICBwcm9wcy5iaWxsLmN1c3RvbWVyLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvcHMuYmlsbC5jdXN0b21lci5sYXN0bmFtZTtcbiAgaWYgKHByb3BzLmJpbGwuY3VzdG9tZXIuY29tcGFueSkge1xuICAgIGRpc3BsYXlOYW1lID0gcHJvcHMuYmlsbC5jdXN0b21lci5jb21wYW55ICsgXCIgLSBcIiArIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dHIga2V5PXtwcm9wcy5iaWxsLmlkfT5cbiAgICAgIDx0aD57cHJvcHMuYmlsbC5iaWxsTnVtYmVyfTwvdGg+XG4gICAgICA8dGQ+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VTdHlsZX0+e2JhZGdlVGV4dH08L3NwYW4+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICB7dXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3kgKyBcIiBcIiArIHByb3BzLmJpbGwuYW1vdW50fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD57ZGlzcGxheU5hbWV9PC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPE5hdkxpbmsgdG89e1wiL2JpbGwvXCIgKyBwcm9wcy5iaWxsLmlkfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgIDxGYUV5ZSAvPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJpbGxMaXN0IH0gZnJvbSAnLi9CaWxsTGlzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJpbGxEZXRhaWxzIH0gZnJvbSAnLi9CaWxsRGV0YWlscyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJpbGxHZW5lcmF0ZSB9IGZyb20gJy4vQmlsbEdlbmVyYXRlJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gXCJkYXRlZm9ybWF0XCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IHNldEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlsbERldGFpbHNGYWN0dXJhdGlvbih7IGJpbGwgfSkge1xuICBjb25zdCBbY3VzdG9tZXJTZXNzaW9ucywgc2V0Q3VzdG9tZXJTZXNzaW9uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgLy9yw6ljdXBlcmF0aW9uIGRlIGwndXRpbGlzYXRldXIgY291cnJhbnRcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcblxuICBsZXQgZGF0ZSA9IGJpbGwuYmlsbGluZ01vbnRoLnNwbGl0KFwiLVwiKTtcblxuICBkYXRlID0gbmV3IERhdGUoZGF0ZVsxXSwgZGF0ZVswXSAtIDEpO1xuICBsZXQgZmlyc3REYXkgPSBkYXRlRm9ybWF0KFxuICAgIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKSxcbiAgICBcImRkLm1tLnl5eXlcIlxuICApO1xuICBsZXQgbGFzdERheSA9IGRhdGVGb3JtYXQoXG4gICAgbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKSxcbiAgICBcImRkLm1tLnl5eXlcIlxuICApO1xuXG4gIGNvbnN0IGxpbmsgPVxuICAgIFwiY3VzdG9tZXJfc2Vzc2lvbnM/cGFnZT0xJml0ZW1zUGVyUGFnZT0xMDAmY3VzdG9tZXIuaWQ9XCIgK1xuICAgIGJpbGwuY3VzdG9tZXIuaWQgK1xuICAgIFwiJnNlc3Npb24uZGF5X2F0JTVCYmVmb3JlJTVEPVwiICtcbiAgICBsYXN0RGF5ICtcbiAgICBcIiZzZXNzaW9uLmRheV9hdCU1QmFmdGVyJTVEPVwiICtcbiAgICBmaXJzdERheTtcblxuICAvL0TDqWZpbml0aW9uIGR1IHR5cGUgZGUgYmFkZ2UgZW4gZm9uY3Rpb24gZHUgc3RhdHV0IGRlIGxhIGZhY3R1cmVcbiAgbGV0IGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0taW5mb1wiO1xuICBsZXQgYmFkZ2VUZXh0ID0gXCJFbiBhdHRlbnRlXCI7XG4gIGlmIChuZXcgRGF0ZSgpID4gbmV3IERhdGUoYmlsbC50b19hdCkpIHtcbiAgICBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWRhbmdlclwiO1xuICAgIGJhZGdlVGV4dCA9IFwiRXhwaXLDqWVcIjtcbiAgfVxuICBpZiAoYmlsbC5hbW91bnQgPT09IGJpbGwuYmlsbFN0YXR1dC5iYWxhbmNlKSB7XG4gICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1zdWNjZXNzXCI7XG4gICAgYmFkZ2VUZXh0ID0gXCJQYXnDqVwiO1xuICB9XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgcG91ciBsZXMgQ3VzdG9tZXJTZXNzaW9ucyBhdmVjIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaUJuaVxuICAgICAgLmdldChsaW5rKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHNldEN1c3RvbWVyU2Vzc2lvbnMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVbmUgZXJyZXVyIGVzciBzdXJ2ZW51ZSAhXCIgKyBlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvL3NpIGNoYXJnZW1lbnQgZGVzIHVzZXJzZXNzaW9uIG9uIG1ldCB1biBsb2FkaW5nXG4gIGlmICghY3VzdG9tZXJTZXNzaW9ucykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW4tLWxnXzVcIj5cbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW4tLWxnXzVcIj5cbiAgICAgIDxoMz5Ew6l0YWlsIGZhY3R1cmF0aW9uPC9oMz5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+U2Vzc2lvbnM8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2N1c3RvbWVyU2Vzc2lvbnNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChjcykgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17Y3MuaWR9PlxuICAgICAgICAgICAgICA8dGQ+e2NzLnNlc3Npb24uc2Vzc2lvbl90eXBlLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntkYXRlRm9ybWF0KGNzLnNlc3Npb24uZGF5X2F0LCBcImRkLm1tLnl5eXlcIil9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHt1c2VyLmFzc29jaWF0aW9uLmJhbmtJbmZvcm1hdGlvbi5jdXJyZW5jeX17XCIgXCJ9XG4gICAgICAgICAgICAgICAge2NzLnNlc3Npb24uc2Vzc2lvbl90eXBlLnByaWNlX29mfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgaXRlbXM9e2JpbGwuaXRlbXN9XG4gICAgICAgICAgICAgIGN1cnJlbmN5PXt1c2VyLmFzc29jaWF0aW9uLmJhbmtJbmZvcm1hdGlvbi5jdXJyZW5jeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5fSB7YmlsbC5hbW91bnR9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtTGlzdCh7IGl0ZW1zLCBjdXJyZW5jeSB9KSB7XG4gIGlmIChpdGVtcyAhPSBudWxsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5MaXN0ZSBkZXMgSXRlbXM8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPHRyIGtleT17aXRlbS5pZCArIGl0ZW0ubmFtZX0+XG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj57aXRlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIHtjdXJyZW5jeX0ge2l0ZW0ucHJpY2Vfb2Z9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlscy9EYXRlRm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpbGxJbmZvKHByb3BzKSB7XG4gIGNvbnN0IGJpbGwgPSBwcm9wcy5iaWxsO1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmRhdGEpO1xuXG4gIC8vRMOpZmluaXRpb24gZHUgdHlwZSBkZSBiYWRnZSBlbiBmb25jdGlvbiBkdSBzdGF0dXQgZGUgbGEgZmFjdHVyZVxuICBsZXQgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1pbmZvXCI7XG4gIGxldCBiYWRnZVRleHQgPSBcIkVuIGF0dGVudGVcIjtcbiAgaWYgKG5ldyBEYXRlKCkgPiBuZXcgRGF0ZShwcm9wcy5iaWxsLnRvX2F0KSkge1xuICAgIGJhZGdlU3R5bGUgPSBcImFwcF9iYWRnZS0tZGFuZ2VyXCI7XG4gICAgYmFkZ2VUZXh0ID0gXCJFeHBpcsOpZVwiO1xuICB9XG4gIGlmIChwcm9wcy5iaWxsLmFtb3VudCA9PT0gcHJvcHMuYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2UpIHtcbiAgICBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLXN1Y2Nlc3NcIjtcbiAgICBiYWRnZVRleHQgPSBcIlBhecOpXCI7XG4gIH1cblxuICAvL2RlZmluaXRpb24gZHUgbW9udGFudCBkZWphIHBhecOpXG4gIGxldCBiYWxhbmNlID0gXCItLVwiO1xuICBpZiAoYmlsbC5iaWxsU3RhdHV0LmJhbGFuY2UpIHtcbiAgICBiYWxhbmNlID1cbiAgICAgIHVzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5ICsgXCIgXCIgKyBiaWxsLmJpbGxTdGF0dXQuYmFsYW5jZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1uLS1sZ18zXCI+XG4gICAgICA8aDM+SW5mbyBGYWN0dXJlPC9oMz5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkZhY3R1cmUgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57cHJvcHMuYmlsbC5iaWxsTnVtYmVyfTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPlN0YXR1cyBmYWN0dXJlIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VTdHlsZX0+e2JhZGdlVGV4dH08L3NwYW4+XG4gICAgICA8L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5Nb250YW50IHRvdGFsOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAge3VzZXIuYXNzb2NpYXRpb24uYmFua0luZm9ybWF0aW9uLmN1cnJlbmN5fSB7YmlsbC5hbW91bnR9XG4gICAgICA8L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5Ew6lqw6AgcGF5w6kgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57YmFsYW5jZX08L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5EYXRlIGZhY3R1cmF0aW9uIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxEYXRlRm9ybWF0IGRhdGU9e2JpbGwuZnJvbV9hdH0gZm9ybWF0PVwiZGQubW0ueXl5eVwiIC8+XG4gICAgICA8L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5QYXlhYmxlIGp1c3F1ZSBhdSA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPlxuICAgICAgICA8RGF0ZUZvcm1hdCBkYXRlPXtiaWxsLnRvX2F0fSBmb3JtYXQ9XCJkZC5tbS55eXl5XCIgLz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlsbExlZnRDb2x1bW4ocHJvcHMpIHtcbiAgY29uc3QgY3VzdG9tZXIgPSBwcm9wcy5jdXN0b21lcjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfM1wiPlxuICAgICAgPGgzPkTDqXRhaWxzIGNsaWVudDwvaDM+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5FbnRyZXByaXNlIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmNvbXBhbnl9PC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+Tm9tIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmxhc3RuYW1lfTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPlByw6lub20gOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIuZmlyc3RuYW1lfTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkFkcmVzc2UgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb24gbWItMFwiPlxuICAgICAgICB7Y3VzdG9tZXIuc3RyZWV0ICsgXCIgXCIgKyBjdXN0b21lci5zdHJlZXRfbnVtYmVyfVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPlxuICAgICAgICB7Y3VzdG9tZXIuemlwX2NvZGUgKyBcIiBcIiArIGN1c3RvbWVyLmNpdHl9XG4gICAgICA8L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5FbWFpbCA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5lbWFpbH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IEN1c3RvbWVyTGVmdENvbHVtbiBmcm9tIFwiLi90ZW1wbGF0ZS9DdXN0b21lckxlZnRDb2x1bW5cIjtcbmltcG9ydCBDdXN0b21lckJpbGxzTGlzdCBmcm9tIFwiLi90ZW1wbGF0ZS9DdXN0b21lckJpbGxzTGlzdFwiO1xuaW1wb3J0IEN1c3RvbWVySW5mbyBmcm9tIFwiLi90ZW1wbGF0ZS9DdXN0b21lckluZm9cIjtcblxuLy8gVE9ETyBSRUZBSVJFIExFIENPTVBPTkVOVFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXJEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgY3VzdG9tZXI6IG51bGwsIGJpbGxzOiBudWxsLCBsb2FkZWQ6IHRydWUgfTtcbiAgfVxuXG4gIC8vIFRPRE8gTU9WRSBUSElTIENPREUgVE8gVEhFIFNMSUNFXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vUsOpY3Vww6hyZSBsZSBpZCBlbiBkw6ljb3VwYW50IGxhIHJvdXRlXG4gICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLnBhdGhbXCIqXCJdO1xuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XG5cbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL2N1c3RvbWVycy9cIiArIGlkLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBjdXN0b21lciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbWVyOiBjdXN0b21lciB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgY3VzdG9tZXIgcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL2JpbGxzP2N1c3RvbWVyLmlkPVwiICsgaWQsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGJpbGxzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmlsbHM6IGJpbGxzLCBsb2FkZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBjdXN0b21lciBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGVkIHx8IHRoaXMuc3RhdGUuY3VzdG9tZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEN1c3RvbWVySW5mbyBjdXN0b21lcj17dGhpcy5zdGF0ZS5jdXN0b21lcn0gLz5cbiAgICAgICAgey8qIDxDdXN0b21lckxlZnRDb2x1bW4gY3VzdG9tZXI9e3RoaXMuc3RhdGUuY3VzdG9tZXJ9IC8+XG4gICAgICAgICAgPEN1c3RvbWVyQmlsbHNMaXN0IGJpbGxzPXt0aGlzLnN0YXRlLmJpbGxzfSAvPiAqL31cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRDdXN0b21lcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IHsgRmFFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gXCJkYXRlZm9ybWF0XCI7XG5pbXBvcnQgUGFnaW50YXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvUGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL0RhdGVGb3JtYXRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy9jcsOpYXRpb24gZGUgbGEgcmVxdWV0ZVxuXG4vLyBUT0RPIEFERCBUTyBSRURVWCBTTElDRVxuY29uc3QgZmV0Y2hDdXN0b21lcnMgPSAobGluaykgPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgYXBpQm5pXG4gICAgICAuZ2V0KGxpbmspXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0Q3VzdG9tZXJzKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgc2V0QWxlcnQoeyBjb2xvcjogXCJkYW5nZXJcIiwgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJMaXN0KCkge1xuICBjb25zdCBbaXRlbVBlclBhZ2UsIHNldEl0ZW1QZXJQYWdlXSA9IHVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW2FkZEZpbHRlciwgc2V0QWRkRmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBsaW5rID0gXCIvY3VzdG9tZXJzXCI7XG4gIGNvbnN0IGN1c3RvbWVycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VzdG9tZXJzLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGZldGNoQ3VzdG9tZXJzKGxpbmsgKyBcIj9wYWdlPTEmaXRlbXNQZXJQYWdlPVwiICsgaXRlbVBlclBhZ2UgKyBhZGRGaWx0ZXIpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGlmIChjdXN0b21lcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJ1dHRvbnNUcmlzXG4gICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICBpdGVtUGVyUGFnZT17aXRlbVBlclBhZ2V9XG4gICAgICAgICAgc2V0QWRkRmlsdGVyPXtzZXRBZGRGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhcHBfdGFibGVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgPHRoPlByw6lub208L3RoPlxuICAgICAgICAgICAgICA8dGg+bm9tPC90aD5cbiAgICAgICAgICAgICAgPHRoPlZpbGxlPC90aD5cbiAgICAgICAgICAgICAgPHRoPkRhdGUgZW50csOpZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EYXRlIHNvcnRpZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtjdXN0b21lcnNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChjdXN0b21lciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEN1c3RvbWVyTGlzdFVuaXQgY3VzdG9tZXI9e2N1c3RvbWVyfSBrZXk9e2N1c3RvbWVyLmlkfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPFBhZ2ludGF0aW9uXG4gICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICBpdGVtUGVyUGFnZT17aXRlbVBlclBhZ2V9XG4gICAgICAgICAgd2hhdFRvRGlzcGF0Y2g9e2ZldGNoQ3VzdG9tZXJzfVxuICAgICAgICAgIGVsZW09e2N1c3RvbWVyc31cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG59XG5cbi8vIFRPRE8gTU9WRSBUTyBBTiBJREVQRURBTlQgQ09NUE9ORU5UXG5mdW5jdGlvbiBDdXN0b21lckxpc3RVbml0KHByb3BzKSB7XG4gIGNvbnN0IGRhdGVEYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtZW1icmVEb25lID0gbmV3IERhdGUocHJvcHMuY3VzdG9tZXIubWVtYmVyc2hpcC5tZW1iZXJzaGlwX2RvbmVfYXQpO1xuXG4gIGxldCB0clN0eWxlID0gXCJhcHBfdGFibGVfX3RyLS1ncmVlblwiO1xuICBpZiAoZGF0ZURheSA+IG1lbWJyZURvbmUpIHtcbiAgICB0clN0eWxlID0gXCJhcHBfdGFibGVfX3RyLS1yZWRcIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRyIGNsYXNzTmFtZT17dHJTdHlsZX0+XG4gICAgICA8dGggc2NvcGU9XCJyb3dcIj57cHJvcHMuY3VzdG9tZXIuaWR9PC90aD5cbiAgICAgIDx0ZD57cHJvcHMuY3VzdG9tZXIuZmlyc3RuYW1lfTwvdGQ+XG4gICAgICA8dGQ+e3Byb3BzLmN1c3RvbWVyLmxhc3RuYW1lfTwvdGQ+XG4gICAgICA8dGQ+e3Byb3BzLmN1c3RvbWVyLnppcF9jb2RlICsgXCIgXCIgKyBwcm9wcy5jdXN0b21lci5jaXR5fTwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxEYXRlRm9ybWF0XG4gICAgICAgICAgZGF0ZT17cHJvcHMuY3VzdG9tZXIubWVtYmVyc2hpcC5tZW1iZXJzaGlwX2F0fVxuICAgICAgICAgIGZvcm1hdD1cImRkLm1tLnl5eXlcIlxuICAgICAgICAvPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPERhdGVGb3JtYXRcbiAgICAgICAgICBkYXRlPXtwcm9wcy5jdXN0b21lci5tZW1iZXJzaGlwLm1lbWJlcnNoaXBfZG9uZV9hdH1cbiAgICAgICAgICBmb3JtYXQ9XCJkZC5tbS55eXl5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgdG89e1wiL2N1c3RvbWVyL1wiICsgcHJvcHMuY3VzdG9tZXIuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgIGtleT17cHJvcHMuY3VzdG9tZXIuaWR9XG4gICAgICAgID5cbiAgICAgICAgICA8RmFFeWUgLz5cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufVxuXG4vLyBUT0RPIE1PVkUgVE8gQU4gQ09NUE9ORU5UXG5mdW5jdGlvbiBCdXR0b25zVHJpcyh7IHNldEFkZEZpbHRlciwgbGluaywgaXRlbVBlclBhZ2UgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgYWRkRmlsdGVyID0gKGUpID0+IHtcbiAgICBsZXQgZmlsdGVyID0gZS50YXJnZXQuZGF0YXNldC5maWx0ZXI7XG4gICAgc2V0QWRkRmlsdGVyKFwiJm1lbWJlcnNoaXAuaXNfYWN0aXZlPXRydWVcIik7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaEN1c3RvbWVycyhsaW5rICsgXCI/cGFnZT0xJml0ZW1zUGVyUGFnZT1cIiArIGl0ZW1QZXJQYWdlICsgZmlsdGVyKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXG4gICAgICAgIG9uQ2xpY2s9e2FkZEZpbHRlcn1cbiAgICAgICAgZGF0YS1maWx0ZXI9XCImbWVtYmVyc2hpcC5pc19hY3RpdmU9dHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIE1lbWJyZSBhY3RpZlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxuICAgICAgICBvbkNsaWNrPXthZGRGaWx0ZXJ9XG4gICAgICAgIGRhdGEtZmlsdGVyPVwiJm1lbWJlcnNoaXAuaXNfYWN0aXZlPWZhbHNlXCJcbiAgICAgID5cbiAgICAgICAgTWVtYnJlIGluYWN0aWZcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIC8vICZtZW1iZXJzaGlwLmlzX2FjdGl2ZT1mYWxzZVxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBhcGlCbmksIHsgYXBpQm5pRmlsZSB9IGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5cbi8vIFRPRE8gRlVOQ1RJT04gQ09NUE9ORU5UXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21lck5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgZmlyc3RuYW1lOiBcIlwiLFxuICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHN0cmVldDogXCJcIixcbiAgICAgIGNpdHk6IFwiXCIsXG4gICAgICB6aXBDb2RlOiBcIlwiLFxuICAgICAgcGhvbmU6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8vY2FjaGUgZWxlbWVudCBwb3B1ciBsZXMgZmljaGllciB2Y2FyZFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVGb3JtXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJkaXNwbGF5Om5vbmUgIWltcG9ydGFudFwiO1xuICB9XG5cbiAgLy9zaSBvdXZlcnR1cmUgVmNhcmQgb24gY2FjaGUgbGUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1ciBldCBvbiBhZmZpY2hlIGxlIGZvcm11bGFpcmUgcG91ciBjaGFyZ2VtZW50IGRlIGxhIFZjYXJkXG4gIG9wZW5WY2FyZCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0N1c3RvbWVyRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwiZGlzcGxheTpub25lICFpbXBvcnRhbnRcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVGb3JtXCIpLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleFwiO1xuICB9XG5cbiAgY2xvc2VWY2FyZCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVGb3JtXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJkaXNwbGF5Om5vbmUgIWltcG9ydGFudFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q3VzdG9tZXJGb3JtXCIpLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleFwiO1xuICB9XG5cbiAgLy9mb25jdGlvbiBlbnZvaSBkZSBsYSB2Y2FyZFxuICBzdWJtaXRGaWxlID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgbGV0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZjYXJkZmlsZVwiKTtcbiAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUuZmlsZXNbMF0pO1xuXG4gICAgLy8gVE9ETyBNT1ZFIFRPIFJFRFVYXG4gICAgYXBpQm5pRmlsZVxuICAgICAgLnBvc3QoXCIvdmNhcmQvcGFyc2VyXCIsIGZvcm1kYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q3VzdG9tZXJGb3JtXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgXCJkaXNwbGF5OmZsZXggIWltcG9ydGFudFwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUZvcm1cIikuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgICBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCI7XG4gICAgICAgICAgLy91cGRhdGUgZHUgc3RhdGUgcG91ciBtZXR0cmUgw6Agam91ciBsZXMgY2hhbnRzIGZvcm11bGFpcmVcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBhbnk6IGRhdGEuY29tcGFueSxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogZGF0YS5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogZGF0YS5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICAgICAgc3RyZWV0OiBkYXRhLnN0cmVldCxcbiAgICAgICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcbiAgICAgICAgICAgIHppcENvZGU6IGRhdGEuemlwQ29kZSxcbiAgICAgICAgICAgIHBob25lOiBkYXRhLnBob25lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9FcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvL2ZvbmN0aW9uIGVucmVnaXN0cmVtZW50IGQndW4gbm91dmVhdSBjdXN0b21lclxuICBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXG4gICAgLy8gVE9ETyBNT1ZFIFRPIFJFRFVYXG4gICAgYXBpQm5pXG4gICAgICAucG9zdChcIi9jdXN0b21lcnNcIiwgdmFsdWVzLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAvLyBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfTtcblxuICAvLyBUT0RPIE1PVkUgVE8gQU4gVVRJTFMgRklMRVxuICAvL3ZhbGlkYXRpb24gZGVzIGRvbm7DqWVzXG4gIGN1c3RvbWVyU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBmaXJzdG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigzLCBcIlByw6lub20gdHJvcCBjb3VydFwiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gcHLDqW5vbVwiKSxcbiAgICBsYXN0bmFtZTogWXVwLnN0cmluZygpXG4gICAgICAubWluKDMsIFwiTm9tIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIG5vbVwiKSxcbiAgICBzdHJlZXQ6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigzLCBcIk5vbSBkZSBydWUgdHJvcCBjb3VydFwiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gbm9tIGRlIHJ1ZVwiKSxcbiAgICBzdHJlZXROdW1iZXI6IFl1cC5zdHJpbmcoKS5taW4oMSwgXCJWZXVpbGxleiBpbmRpcXVlciB1biBudW3DqXJvIGRlIHJ1ZVwiKSxcbiAgICB6aXBDb2RlOiBZdXAubnVtYmVyKClcbiAgICAgIC5taW4oMTAwMCwgXCJMZSBjb2RlIHppcCBkb2l0IMOqdHJlIGRlIG1pbiA0IGNoaWZmcmVzXCIpXG4gICAgICAubWF4KDk5OTksIFwiTGUgY29kZSB6aXAgZG9pdCDDqnRyZSBkZSBtYXggNCBjaGlmZnJlXCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBjb2RlIHBvc3RhbFwiKSxcbiAgICBjaXR5OiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMywgXCJOb20gZGUgdmlsbGUgdHJvcCBjb3VydFwiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW5lIHZpbGxlXCIpLFxuICAgIGNvbXBhbnk6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigzLCBcIk5vbSBlbnRyZXByaXNlIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuZSBlbnRyZXByaXNlXCIpLFxuICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgIC5lbWFpbCgzLCBcIkVtYWlsIG5vbiB2YWxpZGVcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIGVtYWlsXCIpLFxuICAgIG1lbWJlclNoaXBfYXQ6IFl1cC5zdHJpbmcoKS5tYXRjaGVzKFxuICAgICAgL14oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlbLl0oMFsxLTldfDFbMDEyXSlbLl0oMTl8MjApXFxkXFxkJC8sXG4gICAgICBcIkZvcm1hdCBkZC5tbS55eXl5XCJcbiAgICApLFxuICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgLy9BZmZpY2hhZ2UgZHUgZm9ybXVsYWlyZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gZm9ybS0tbGdfOFwiPlxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0fVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdGhpcy5zdGF0ZS5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdGhpcy5zdGF0ZS5sYXN0bmFtZSxcbiAgICAgICAgICAgIHN0cmVldDogdGhpcy5zdGF0ZS5zdHJlZXQsXG4gICAgICAgICAgICBzdHJlZXROdW1iZXI6IFwiXCIsXG4gICAgICAgICAgICB6aXBDb2RlOiB0aGlzLnN0YXRlLnppcENvZGUsXG4gICAgICAgICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHksXG4gICAgICAgICAgICBjb21wYW55OiB0aGlzLnN0YXRlLmNvbXBhbnksXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgIG1lbWJlclNoaXBfYXQ6IFwiXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemUgLy9wZXJtZXQgZGUgbWV0dHJlIMOgIGpvdXIgbGUgZm9ybXVsYWlyZSBhdmVjIGxlIHN0YXRlXG4gICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dGhpcy5jdXN0b21lclNjaGVtYX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoe1xuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fcm93XCJcbiAgICAgICAgICAgICAgaWQ9XCJuZXdDdXN0b21lckZvcm1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QcsOpbm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmZpcnN0bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZmlyc3RuYW1lICYmIHRvdWNoZWQuZmlyc3RuYW1lICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmZpcnN0bmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubGFzdG5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmxhc3RuYW1lICYmIHRvdWNoZWQubGFzdG5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMubGFzdG5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy04XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlJ1ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHJlZXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnN0cmVldCAmJiB0b3VjaGVkLnN0cmVldCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zdHJlZXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk51bcOpcm8gZGUgcnVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN0cmVldE51bWJlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuc3RyZWV0TnVtYmVyICYmIHRvdWNoZWQuc3RyZWV0TnVtYmVyICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnN0cmVldE51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29kZSBwb3N0YWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiemlwQ29kZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuemlwQ29kZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuemlwQ29kZSAmJiB0b3VjaGVkLnppcENvZGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuemlwQ29kZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19jb2x1bW4tLWxnLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+VmlsbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNpdHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNpdHkgJiYgdG91Y2hlZC5jaXR5ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmNpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbnRyZXByaXNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb21wYW55fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5jb21wYW55ICYmIHRvdWNoZWQuY29tcGFueSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5jb21wYW55fTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctOFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2NvbHVtbi0tbGctNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NZW1icmUgZGVwdWlzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW1iZXJTaGlwX2F0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tZW1iZXJTaGlwX2F0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5tZW1iZXJTaGlwX2F0ICYmIHRvdWNoZWQubWVtYmVyU2hpcF9hdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5tZW1iZXJTaGlwX2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5WY2FyZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZjYXJkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuXG4gICAgICAgIHsvKiBhZmZpY2hhZ2UgZnUgZm9ybXVsYWlyZSBwb3VyIGZpY2hpZXIgVmNhcmQgKi99XG4gICAgICAgIDxGb3JtaWtcbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGaWxlfVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZmlsZTogXCJcIiB9fVxuICAgICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7XG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtX19yb3dcIiBpZD1cImZpbGVGb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fY29sdW1uLS1sZy0xMFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJ2Y2FyZGZpbGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmZpbGV9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5maWxlICYmIHRvdWNoZWQuZmlsZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5maWxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICBDaGFyZ2VyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLS1yZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJBbm51bGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsb3NlVmNhcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbWVyTGlzdCB9IGZyb20gJy4vQ3VzdG9tZXJMaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tZXJEZXRhaWxzIH0gZnJvbSAnLi9DdXN0b21lckRldGFpbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21lck5ldyB9IGZyb20gJy4vQ3VzdG9tZXJOZXcnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSBcImRhdGVmb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJCaWxsc0xpc3QocHJvcHMpIHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5kYXRhKTtcblxuICBjb25zdCBbYmlsbHNdID0gdXNlU3RhdGUocHJvcHMuYmlsbHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1uLS1sZ181XCI+XG4gICAgICA8aDM+RmFjdHVyZXM8L2gzPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7YmlsbHNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChiaWxsKSA9PiB7XG4gICAgICAgICAgICAvL0TDqWZpbml0aW9uIGR1IHR5cGUgZGUgYmFkZ2UgZW4gZm9uY3Rpb24gZHUgc3RhdHV0IGRlIGxhIGZhY3R1cmVcbiAgICAgICAgICAgIGxldCBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLWluZm9cIjtcbiAgICAgICAgICAgIGxldCBiYWRnZVRleHQgPSBcIkVuIGF0dGVudGVcIjtcbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpID4gbmV3IERhdGUoYmlsbC50b19hdCkpIHtcbiAgICAgICAgICAgICAgYmFkZ2VTdHlsZSA9IFwiYXBwX2JhZGdlLS1kYW5nZXJcIjtcbiAgICAgICAgICAgICAgYmFkZ2VUZXh0ID0gXCJFeHBpcsOpZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJpbGwuYW1vdW50ID09PSBiaWxsLmJpbGxTdGF0dXQuYmFsYW5jZSkge1xuICAgICAgICAgICAgICBiYWRnZVN0eWxlID0gXCJhcHBfYmFkZ2UtLXN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgYmFkZ2VUZXh0ID0gXCJQYXnDqVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtiaWxsLmlkfT5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17XCIvYmlsbC9cIiArIGJpbGwuaWR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIHtiaWxsLmJpbGxOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICB7dXNlci5hc3NvY2lhdGlvbi5iYW5rSW5mb3JtYXRpb24uY3VycmVuY3l9IHtiaWxsLmFtb3VudH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0ZUZvcm1hdChiaWxsLnRvX2F0LCBcImRkLm1tLnl5eXlcIil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2JhZGdlU3R5bGV9PntiYWRnZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHMvRGF0ZUZvcm1hdFwiO1xuaW1wb3J0IHsgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJJbmZvKHsgY3VzdG9tZXIgfSkge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmRhdGEpO1xuXG4gIGxldCBjdXN0b21lckFjdGl2ZSA9IChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhcHBfYmFkZ2UgYXBwX2JhZGdlLS1zdWNjZXNzXCI+TWVtYnJlIGFjdGlmPC9zcGFuPlxuICApO1xuICBpZiAoIWN1c3RvbWVyLm1lbWJlcnNoaXAuaXNfYWN0aXZlKSB7XG4gICAgY3VzdG9tZXJBY3RpdmUgPSAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcHBfYmFkZ2UgYXBwX2JhZGdlLS1kYW5nZXJcIj5NZW1icmUgaW5hY3RpZjwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dfX2NvbHVtbi0tc20gY3VzdG9tZXJfc2VhcmNoX2JhclwiPlxuICAgICAgICAgIFJlY2hlcmNoZXImbmJzcDtcbiAgICAgICAgICA8RmFTZWFyY2ggLz5cbiAgICAgICAgICAmbmJzcDs8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjb2x1bW5fY2VudGVyX19yb3dcIj5cbiAgICAgICAgICA8cD57Y3VzdG9tZXIuY29tcGFueX08L3A+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLS1yb3VuZGVkXCJcbiAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NFUlZFUl9OQU1FICsgXCIvaW1nL2JnZ3JleS5qcGdcIn1cbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5OwrB7Y3VzdG9tZXIuaWR9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjdXN0b21lci5maXJzdG5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjdXN0b21lci5sYXN0bmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHtjdXN0b21lci5zdHJlZXR9IHtjdXN0b21lci5zdHJlZXRfbnVtYmVyfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y3VzdG9tZXIuemlwX2NvZGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjdXN0b21lci5jaXR5fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lcl9yb3dfX2NvbHVtbi0tc20gY29sdW1uX2JvdHRvbVwiPlxuICAgICAgICAgIHtjdXN0b21lckFjdGl2ZX1cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5EYXRlIGQnZW50csOpZSA6PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkRhdGUgZGUgc29ydGllIDo8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXJfcm93X19jb2x1bW4tLXNtIGNvbHVtbl9ib3R0b21cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxEYXRlRm9ybWF0XG4gICAgICAgICAgICAgIGRhdGU9e2N1c3RvbWVyLm1lbWJlcnNoaXAubWVtYmVyc2hpcF9hdH1cbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQubW0ueXl5eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxEYXRlRm9ybWF0XG4gICAgICAgICAgICAgIGRhdGU9e2N1c3RvbWVyLm1lbWJlcnNoaXAubWVtYmVyc2hpcF9kb25lX2F0fVxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC5tbS55eXl5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyX3Jvd19fY29sdW1uLS1zbSBjdXN0b21lcl9idXR0b25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b21lcl9idXR0b25zLS1zdWNjZXNzXCI+TW9kaWZpZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbWVyX2J1dHRvbnMtLWRhbmdlclwiPlN1cHByaW1lcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lckxlZnRDb2x1bW4ocHJvcHMpIHtcbiAgY29uc3QgY3VzdG9tZXIgPSBwcm9wcy5jdXN0b21lcjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi0tbGdfM1wiPlxuICAgICAgPGgzPk5vbSBkdSBjbGllbnQ8L2gzPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+Y3VzdG9tZXIgTsKwIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmlkfTwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkVudHJlcHJpc2UgOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIuY29tcGFueX08L3A+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj5Ob20gOjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbHVtbl9fZGVzY3JpcHRpb25cIj57Y3VzdG9tZXIubGFzdG5hbWV9PC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+UHLDqW5vbSA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvblwiPntjdXN0b21lci5maXJzdG5hbWV9PC9wPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX3RpdGxlXCI+QWRyZXNzZSA6PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX19kZXNjcmlwdGlvbiBtYi0wXCI+XG4gICAgICAgIHtjdXN0b21lci5zdHJlZXQgKyBcIiBcIiArIGN1c3RvbWVyLnN0cmVldF9udW1iZXJ9XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIHtjdXN0b21lci56aXBfY29kZSArIFwiIFwiICsgY3VzdG9tZXIuY2l0eX1cbiAgICAgIDwvcD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPkVtYWlsIDo8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2x1bW5fX2Rlc2NyaXB0aW9uXCI+e2N1c3RvbWVyLmVtYWlsfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0LCBMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCB7IEhlYWRlciwgU2lkZUJhciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgQXBwUm91dGVzIGZyb20gXCIuLi8uLi9jb25mL0FwcFJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3JlZHV4XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgLy8gVE9ETyBBIFNVUFBSSU1FUiBBUFJFUyBBVk9JUiBDSEFOR0VSIExFIFBSSVZBVEUgUk9VVEVcbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChGZXRjaFVzZXIoKSk7XG4gIH0sIFtdKTtcblxuICAvL1RPRE8gQUpPVVRFUiBTVVIgUkVEVVhcbiAgLy9mb25jdGlvbiBkZSBjaGFyZ2VtZW50IGRlIGwndXRpbGlzYXRldXJcbiAgY29uc3QgRmV0Y2hVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJBUElDT09LSUVcIikpO1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICAgIGF3YWl0IGFwaUJuaVxuICAgICAgICAuZ2V0KFwiL3VzZXJzL1wiICsgY29va2llLmRhdGEudXNlcmlkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIocmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBzZXRBbGVydCh7IGNvbG9yOiBcImRhbmdlclwiLCBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgLy9zaSBsJ3V0aWxpc2F0ZXVyIG4nZXN0IHBhcyBlbmNvcmUgY2hhcmdlciBvbiBhZmZpY2hlIGxlIGxvYWRpbmdcbiAgaWYgKHVzZXIuZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8U2lkZUJhciAvPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29sLW1kLTkgbXMtc20tYXV0byBjb2wtbGctMTAgcHgtbWQtNFwiPlxuICAgICAgICAgICAgICB7LyogYWZmaWNoYWdlIGRlcyBhbGVydHMgKi99XG4gICAgICAgICAgICAgIDxBbGVydCAvPlxuICAgICAgICAgICAgICB7LyogQWZmaWNoYWdlIGRlcyBsaWVucyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxBcHBSb3V0ZXMgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW4gfSBmcm9tICcuL2xvZ2luL0xvZ2luJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9tZSB9IGZyb20gJy4vaG9tZS9Ib21lJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBBbGVydCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLy8gVE9ETyBBZmljY2hlciB1biBsb2FkaW5nIC8vPExvYWRpbmcgLz4geFxuLy8gVE9ETyBEZXN0cnVjdG9yIGpzXG4vLyBUT0RPIFwiXCIgaXRlbXMgZGV0YWlsc1xuLy8gVE9ETyBUYWJsZWF1XG5cbmZ1bmN0aW9uIEl0ZW1EZXRhaWxzKHByb3BzKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoe1xuICAgIGl0ZW1zOiBudWxsLFxuICAgIGxvYWRlZDogdHJ1ZSxcbiAgICBlcnJvck1lc3NhZ2U6IG51bGwsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHBhdGggPSBwcm9wcy5wYXRoW1wiKlwiXTtcbiAgICBsZXQgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL2l0ZW1zL1wiICsgaWQsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldEl0ZW1zKHsgaXRlbXM6IHJlc3BvbnNlLmRhdGEsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICB9KVxuXG4gICAgICAvL3NpIGl0ZW0gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgc2V0SXRlbXMoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgaWYgKGl0ZW1zKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBjb2xvcj1cImRhbmdlclwiIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxoMT57aXRlbXM/Lml0ZW1zPy5uYW1lfTwvaDE+XG4gICAgICAgIDxoMT57aXRlbXM/Lml0ZW1zPy5wcmljZV9vZn08L2gxPlxuICAgICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMil9PC9wcmU+Ki99XG4gICAgICAgIDxOYXZMaW5rIHRvPXtcIi9pdGVtc1wifT5CYWNrPC9OYXZMaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbHM7XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBzZXRBbGVydCwgc2V0SXRlbSB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbi8vY3LDqWF0aW9uIGRlIGxhIHJlcXVldGVcbmV4cG9ydCBjb25zdCBmZXRjaEl0ZW1zID0gKCkgPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGF3YWl0IGFwaUJuaVxuICAgICAgLmdldChcIi9pdGVtcz9wYWdlPTEmaXRlbXNQZXJQYWdlPTMwXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0SXRlbShyZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KCkge1xuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXRlbXMuZGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoSXRlbXMoKSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXRlbXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2l0ZW1zW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TmF2TGluayB0bz17XCIvaXRlbS9cIiArIGl0ZW0uaWR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHtpdGVtLmlkICsgXCIgLSBcIiArIGl0ZW0ubmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbn1cbiIsImltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWRkSXRlbSwgc2V0QWxlcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXhcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbU5ldygpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vY3JlYXRpb24gZGUgbGEgcmVxdWV0ZVxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgYXBpQm5pXG4gICAgICAucG9zdChcIi9pdGVtc1wiLCB2YWx1ZXMsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgICBkaXNwYXRjaChhZGRJdGVtKHJlc3BvbnNlKSk7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0QWxlcnQoeyBjb2xvcjogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwiSXRlbSBham91dMOpLlwiIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhY3Rpb25zLmlzU3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy92YWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICBjb25zdCBpdGVtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMywgXCJQcsOpbm9tIHRyb3AgY291cnRcIilcbiAgICAgIC5yZXF1aXJlZChcIlZldWlsbGV6IGluZGlxdWVyIHVuIHByw6lub21cIiksXG4gICAgcHJpY2VPZjogWXVwLnN0cmluZygpLm1hdGNoZXMoL15cXGQrKC5cXGR7MSwyfSk/JC8sIFwiRm9ybWF0IGludmFsaWRlXCIpLFxuICB9KTtcblxuICAvL29uIGFmZmljaGUgbGUgZm9ybXVsYWlyZVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxGb3JtaWtcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0fVxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogXCJcIiwgcHJpY2VPZjogXCJcIiB9fVxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2l0ZW1TY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICB7KHtcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBwLTUgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5vbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlByaXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlT2ZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlT2Z9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnByaWNlT2YgJiYgdG91Y2hlZC5wcmljZU9mICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnByaWNlT2Z9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlT2Z9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnZveWVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEl0ZW1MaXN0IH0gZnJvbSBcIi4vSXRlbUxpc3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSXRlbURldGFpbHMgfSBmcm9tIFwiLi9JdGVtRGV0YWlsc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJdGVtTmV3IH0gZnJvbSBcIi4vSXRlbU5ld1wiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRBbGVydCB9IGZyb20gXCIuLi8uLi9yZWR1eFwiO1xuaW1wb3J0IHsgRmFVc2VyLCBGYUxvY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvL3ZhbGlkYXRpb24gZHUgbG9naW5cbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgIC8vb24gcGFzc2Ugc2V0TG9hZGVkIMOgIHRydWUgcG91ciBhZmZpY2hlciBsZSBjaGFyZ2VtZW50IGVuIGF0dGVuZGFudCBsYSByw6lwb25zZVxuICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcbiAgICBheGlvc1xuICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NFUlZFUl9OQU1FICsgXCIvYXBpL2xvZ2luXCIsIHZhbHVlcywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIC8vc2kgbGUgbG9naW4gZXN0IGJvbiBvbiBmYWl0IHVuIHJlbG9hZCBjZSBxdWkgbm91cyByZWRpcmlnZXJhIHZlcnMgbGEgcGFnZSBkJ2FjY3VlaWwgZXQgw6l2aXRlIHVuIGJ1ZyBkZSBjb29raWVcbiAgICAgICAgICAvLyBjcsOpYXRpb24gZHUgY29va2llIC8vaW5jbHVzIGxlIHRva2VuIGV0IGxlcyBkYXRhc1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXNEYXRhID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgY29va2llcy5zZXQoXCJBUElDT09LSUVcIiwgY29va2llc0RhdGEsIHtcbiAgICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgICAgICAgZXhwaXJlczogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA1ICogNjAgKiAxMDAwKSxcbiAgICAgICAgICB9KTsgLy81bWludXRlc1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgbG9naW4gcGFzIHZhbGlkZSBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yXCIsIGVycik7XG4gICAgICAgIHNldExvYWRlZChmYWxzZSk7XG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHtcbiAgICAgICAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJNYXV2YWlzIGxvZ2luIG91IG1vdCBkZSBwYXNzZSAhXCIgKyBlcnIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghdmFsdWVzLnVzZXJuYW1lICYmIHZhbHVlcy51c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgICBlcnJvcnMudXNlcm5hbWUgPSBcIk5vbSB0cm9wIGNvdXJ0XCI7XG4gICAgfVxuICAgIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSBcIlZldWlsbGV6IGluc2VyZXIgdW4gbW90IGRlIHBhc3NlXCI7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgLy9BZmZpY2hhZ2UgZHUgZm9ybXVsYWlyZVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGVkID8gKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC01IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHsvKiBhZmZpY2hhZ2UgZGUgbCdhbGVydCAqL31cbiAgICAgICAgICB7YWxlcnQgPyA8QWxlcnQgLz4gOiBudWxsfVxuICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxuICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoe1xuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBwLTUgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiYnRuR3JvdXBBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFVc2VyIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMudXNlcm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiYnRuR3JvdXBBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFMb2NrIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy9jcsOpYXRpb24gZGUgbGEgcmVxdWV0ZSBwb3VyIHLDqWN1cGVyZXIgdXNlclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlciA9IChkYXRhKSA9PiB7XG4gIGF4aW9zLmdldChcbiAgICBSRUFDVF9BUFBfU0VSVkVSX05BTUUgK1xuICAgICAgXCIvYXBpL3VzZXJzL1wiICtcbiAgICAgIGRhdGEuZGF0YS51c2VyaWQgK1xuICAgICAgXCI/and0PVwiICtcbiAgICAgIGRhdGEudG9rZW5cbiAgKTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25QbGFjZU5ldyB9IGZyb20gJy4vc2Vzc2lvbi1wbGFjZS9TZXNzaW9uUGxhY2VOZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uUGxhY2VzTGlzdCB9IGZyb20gJy4vc2Vzc2lvbi1wbGFjZS9TZXNzaW9uUGxhY2VzTGlzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25QbGFjZURldGFpbHMgfSBmcm9tICcuL3Nlc3Npb24tcGxhY2UvU2Vzc2lvblBsYWNlRGV0YWlscyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvblR5cGVOZXcgfSBmcm9tICcuL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZU5ldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlc3Npb25UeXBlc0xpc3QgfSBmcm9tICcuL3Nlc3Npb24tdHlwZS9TZXNzaW9uVHlwZXNMaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvblR5cGVEZXRhaWxzIH0gZnJvbSAnLi9zZXNzaW9uLXR5cGUvU2Vzc2lvblR5cGVEZXRhaWxzJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uTmV3IH0gZnJvbSAnLi9zZXNzaW9uL1Nlc3Npb25OZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uc0xpc3QgfSBmcm9tICcuL3Nlc3Npb24vU2Vzc2lvbnNMaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vzc2lvbkRldGFpbHMgfSBmcm9tICcuL3Nlc3Npb24vU2Vzc2lvbkRldGFpbHMnOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uUGxhY2VEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2Vzc2lvblBsYWNlOiBudWxsLCBlcnJvck1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9Sw6ljdXDDqHJlIGxlIGlkIGVuIGTDqWNvdXBhbnQgbGEgcm91dGVcbiAgICBsZXQgcGF0aCA9IHRoaXMucHJvcHMucGF0aFtcIipcIl07XG4gICAgY29uc3QgaWQgPSBwYXRoLnNwbGl0KFwiL1wiKVsxXTtcblxuICAgIC8vUmVxdWV0ZSBwb3VyIHLDqWN1cGVyZXIgaWRcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbl9wbGFjZXMvXCIgKyBpZCwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgc2Vzc2lvblBsYWNlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Vzc2lvblBsYWNlOiBzZXNzaW9uUGxhY2UsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIHNlc3Npb25QbGFjZSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSwgbG9hZGVkOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7LyogYWZmaWNoYWdlIGR1IG1lc3NhZ2UgZCdlcnJldXIgKi99XG4gICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBjb2xvcj1cImRhbmdlclwiIC8+XG4gICAgICAgICl9XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRlZCB8fCB0aGlzLnN0YXRlLnNlc3Npb25QbGFjZSA9PT0gbnVsbCA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblBsYWNlLnppcF9jb2RlICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlc3Npb25QbGFjZS5jaXR5XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IGFwaUJuaSBmcm9tIFwiLi4vLi4vLi4vY29uZi9heGlvcy9hcGkuYm5pXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uUGxhY2VOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBtZXNzYWdlOiBudWxsLCBtZXNzYWdlQ29sb3I6bnVsbCwgbG9hZGVkOiBmYWxzZX07XG4gIH1cblxuICAvL3ZhbGlkYXRpb24gZHUgZm9ybXVsYWlyZVxuICBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwsIGxvYWRlZDogdHJ1ZSB9KTtcblxuICAgIC8vY3JlYXRpb24gZGUgbGEgcmVxdWV0ZVxuICAgIGFwaUJuaVxuICAgICAgLnBvc3QoXCIvc2Vzc2lvbl9wbGFjZXNcIiwgdmFsdWVzLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxhY2UgZGUgc2Vzc2lvbiBjcsOpZSBhdmVjIHN1Y2PDqHNcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcbiAgU2Vzc2lvblBsYWNlU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBzdHJlZXQ6IFl1cC5zdHJpbmcoKS5taW4oMywgJ05vbSBkZSBydWUgdHJvcCBjb3VydCcpLnJlcXVpcmVkKCdWZXVpbGxleiBpbmRpcXVlciB1biBub20gZGUgcnVlJyksXG4gICAgc3RyZWV0TnVtYmVyOiBZdXAuc3RyaW5nKCkubWluKDEsICdWZXVpbGxleiBpbmRpcXVlciB1biBudW3DqXJvIGRlIHJ1ZScpLFxuICAgIHppcENvZGU6IFl1cC5udW1iZXIoKS5taW4oMTAwMCwgJ0xlIGNvZGUgemlwIGRvaXQgw6p0cmUgZGUgbWluIDQgY2hpZmZyZXMnKS5tYXgoOTk5OSwgJ0xlIGNvZGUgemlwIGRvaXQgw6p0cmUgZGUgbWF4IDQgY2hpZmZyZScpLnJlcXVpcmVkKCdWZXVpbGxleiBpbmRpcXVlciB1biBjb2RlIHBvc3RhbCcpLFxuICAgIGNpdHk6IFl1cC5zdHJpbmcoKS5taW4oMywgJ05vbSBkZSB2aWxsZSB0cm9wIGNvdXJ0JykucmVxdWlyZWQoJ1ZldWlsbGV6IGluZGlxdWVyIHVuZSB2aWxsZScpLFxufSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRlZCA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtNSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBjb2xvcj17dGhpcy5zdGF0ZS5tZXNzYWdlQ29sb3J9IC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBzdHJlZXQ6IFwiXCIsIHN0cmVldE51bWJlcjogXCJcIiwgemlwQ29kZTogXCJcIiwgY2l0eTogXCJcIiB9fVxuICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hID0geyB0aGlzLlNlc3Npb25QbGFjZVNjaGVtYSB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoe1xuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgcC01IGQtZmxleCBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RyZWV0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnN0cmVldCAmJiB0b3VjaGVkLnN0cmVldCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuc3RyZWV0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TnVtw6lybyBkZSBydWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0TnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RyZWV0TnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnN0cmVldE51bWJlciAmJiB0b3VjaGVkLnN0cmVldE51bWJlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuc3RyZWV0TnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2RlIHBvc3RhbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ6aXBDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuemlwQ29kZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy56aXBDb2RlICYmIHRvdWNoZWQuemlwQ29kZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuemlwQ29kZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VmlsbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY2l0eSAmJiB0b3VjaGVkLmNpdHkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmNpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEVudm95ZXJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgc2V0QWxlcnQsIHNldFNlc3Npb25QbGFjZXMgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuXG4vLyBUT0RPIE1PVkUgVE8gUkVEVVhcbi8vY3LDqWF0aW9uIGRlIGxhIHJlcXVldGVcbmNvbnN0IGZldGNoU2Vzc2lvblBsYWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGFwaUJuaVxuICAgICAgLmdldChcIi9zZXNzaW9uX3BsYWNlcz9wYWdlPTEmaXRlbXNQZXJQYWdlPTMwXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgZGlzcGF0Y2goc2V0U2Vzc2lvblBsYWNlcyhyZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlc3Npb25QbGFjZXNMaXN0KCkge1xuICBjb25zdCBzZXNzaW9uUGxhY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uUGxhY2VzLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNlc3Npb25QbGFjZXMoKSk7XG4gIH0sIFtdKTtcblxuICBpZiAoc2Vzc2lvblBsYWNlcykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7c2Vzc2lvblBsYWNlc1tcImh5ZHJhOm1lbWJlclwiXS5tYXAoKHNlc3Npb25QbGFjZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgdG89e1wiL3Nlc3Npb24tcGxhY2UvXCIgKyBzZXNzaW9uUGxhY2UuaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICBrZXk9e3Nlc3Npb25QbGFjZS5pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2Vzc2lvblBsYWNlLnppcF9jb2RlICsgXCIgXCIgKyBzZXNzaW9uUGxhY2UuY2l0eX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9udHlwZURldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzZXNzaW9uVHlwZTogbnVsbCwgZXJyb3JNZXNzYWdlOiBudWxsLCBsb2FkZWQ6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vUsOpY3Vww6hyZSBsZSBpZCBlbiBkw6ljb3VwYW50IGxhIHJvdXRlXG4gICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLnBhdGhbXCIqXCJdO1xuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XG5cbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fdHlwZXMvXCIgKyBpZCwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgc2Vzc2lvblR5cGUgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXNzaW9uVHlwZTogc2Vzc2lvblR5cGUsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIHNlc3Npb25UeXBlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLCBsb2FkZWQ6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IGNvbG9yPVwiZGFuZ2VyXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkIHx8IHRoaXMuc3RhdGUuc2Vzc2lvblR5cGUgPT09IG51bGwgPyAoXG4gICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlc3Npb25UeXBlLm5hbWUgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvblR5cGUuZGVzY3JpcHRpb25cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IExvYWRpbmcsIEFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb250eXBlTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICBtZXNzYWdlQ29sb3I6IG51bGwsXG4gICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICBzZXNzaW9uUGxhY2VMaXN0T3B0aW9uOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgLy92YWxpZGF0aW9uIGR1IGZvcm11bGFpcmVcbiAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsLCBsb2FkZWQ6IHRydWUgfSk7XG5cbiAgICAvL2NyZWF0aW9uIGRlIGxhIHJlcXVldGVcbiAgICBhcGlCbmlcbiAgICAgIC5wb3N0KFwiL3Nlc3Npb25fdHlwZXNcIiwgdmFsdWVzLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVHlwZSBkZSBzZXNzaW9uIGNyw6llIGF2ZWMgc3VjY8Ooc1wiLFxuICAgICAgICAgICAgbWVzc2FnZUNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGxvYWRlZDpmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGFjdGlvbnMucmVzZXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIGVycmV1ciBvbiB1cGRhdGUgbGUgc3RhdGUgcG91ciBtZXR0cmUgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZTogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGlvbnMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL3LDqWN1cMOpcmF0aW9uIGRlcyBzZXNzaW9uUGxhY2VzXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25fcGxhY2VzXCIsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoc2Vzc2lvblBsYWNlKSA9PiAoe1xuICAgICAgICAgICAgdmFsdWU6IHNlc3Npb25QbGFjZS5pZCxcbiAgICAgICAgICAgIG5hbWU6IHNlc3Npb25QbGFjZS56aXBfY29kZStcIiBcIitzZXNzaW9uUGxhY2UuY2l0eStcIiAtIFwiK3Nlc3Npb25QbGFjZS5zdHJlZXQrXCIgXCIrc2Vzc2lvblBsYWNlLnN0cmVldF9udW1iZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlc3Npb25QbGFjZUxpc3RPcHRpb246IG9wdGlvbnMsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIHNlc3Npb25QbGFjZSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UsIGxvYWRlZDogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcbiAgU2Vzc2lvblR5cGVTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigzLCBcIk5vbSB0cm9wIGNvdXJ0XCIpXG4gICAgICAucmVxdWlyZWQoXCJWZXVpbGxleiBpbmRpcXVlciB1biBub21cIiksXG4gICAgZGVzY3JpcHRpb246IFl1cC5zdHJpbmcoKVxuICAgICAgLm1pbigxMCwgXCJWZXVpbGxleiBpbmRpcXVlciB1bmUgZGVzY3JpcHRpb24sIG1pbiAxMCBjYXJhY3TDqHJlc1wiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW5lIGRlc2NyaXB0aW9uXCIpLFxuICAgIHByaWNlT2Y6IFl1cC5udW1iZXIoKVxuICAgICAgLnBvc2l0aXZlKFwiTGUgcHJpeCBuJ2VzdCBwYXMgcG9zaXRpZlwiKVxuICAgICAgLnJlcXVpcmVkKFwiVmV1aWxsZXogaW5kaXF1ZXIgdW4gcHJpeFwiKSxcbiAgICBzZXNzaW9uUGxhY2VfaWQ6IFl1cC5udW1iZXIoKS5taW4oMSlcbiAgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vb24gYWZmaWNoZSBsZSBmb3JtdWxhaXJlXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRlZCA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtNSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgY29sb3I9e3RoaXMuc3RhdGUubWVzc2FnZUNvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgIHByaWNlT2Y6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvblBsYWNlX2lkOiBcIlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt0aGlzLlNlc3Npb25UeXBlU2NoZW1hfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHAtNSBkLWZsZXggZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpeCBkZSBsYSBzZXNzaW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlT2ZcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcmljZU9mfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByaWNlT2YgJiYgdG91Y2hlZC5wcmljZU9mICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5wcmljZU9mfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBsYWNlIGRlIHNlc3Npb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlc3Npb25QbGFjZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiMFwiIHZhbHVlPVwiMFwiPlZldWlsbGV6IHNlbGVjdGlvbm5lcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlc3Npb25QbGFjZUxpc3RPcHRpb24ubWFwKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e3MudmFsdWV9IHZhbHVlPXtzLnZhbHVlfT57cy5uYW1lfTwvb3B0aW9uPjtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zZXNzaW9uUGxhY2VfaWQgJiYgdG91Y2hlZC5zZXNzaW9uUGxhY2VfaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuc2Vzc2lvblBsYWNlX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFbnZveWVyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCB7IHNldEFsZXJ0LCBzZXRTZXNzaW9uVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuXG4vL2Nyw6lhdGlvbiBkZSBsYSByZXF1ZXRlXG5jb25zdCBmZXRjaFNlc3Npb25UeXBlcyA9ICgpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGFwaUJuaVxuICAgICAgLmdldChcIi9zZXNzaW9uX3R5cGVzP3BhZ2U9MSZpdGVtc1BlclBhZ2U9MzBcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBkaXNwYXRjaChzZXRTZXNzaW9uVHlwZXMocmVzcG9uc2UpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgaXRlbSBwYXMgdmFsaWRlIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBzZXRBbGVydCh7XG4gICAgICAgICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiICsgZXJyLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlc3Npb25QbGFjZXNMaXN0KCkge1xuICBjb25zdCBzZXNzaW9uVHlwZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb25UeXBlcy5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vY3LDqWF0aW9uIGRlIG5vdHJlIHJlcXVldGUgQVBJIGF2ZWMgdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hTZXNzaW9uVHlwZXMoKSk7XG4gIH0sIFtdKTtcblxuICBpZiAoc2Vzc2lvblR5cGVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtzZXNzaW9uVHlwZXNbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChzZXNzaW9uVHlwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgdG89e1wiL3Nlc3Npb24tdHlwZS9cIiArIHNlc3Npb25UeXBlLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAga2V5PXtzZXNzaW9uVHlwZS5pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2Vzc2lvblR5cGUubmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSBcImRhdGVmb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbnR5cGVEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2Vzc2lvbjogbnVsbCwgZXJyb3JNZXNzYWdlOiBudWxsLCBsb2FkZWQ6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vUsOpY3Vww6hyZSBsZSBpZCBlbiBkw6ljb3VwYW50IGxhIHJvdXRlXG4gICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLnBhdGhbXCIqXCJdO1xuICAgIGNvbnN0IGlkID0gcGF0aC5zcGxpdChcIi9cIilbMV07XG5cbiAgICAvL1JlcXVldGUgcG91ciByw6ljdXBlcmVyIGlkXG4gICAgYXBpQm5pXG4gICAgICAuZ2V0KFwiL3Nlc3Npb25zL1wiICsgaWQsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXNzaW9uOiBzZXNzaW9uLCBsb2FkZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBzZXNzaW9uIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLCBsb2FkZWQ6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkJ2VycmV1ciAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IGNvbG9yPVwiZGFuZ2VyXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkIHx8IHRoaXMuc3RhdGUuc2Vzc2lvbiA9PT0gbnVsbCA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvbi5zZXNzaW9uX3R5cGUubmFtZSArXG4gICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgIGRhdGVGb3JtYXQodGhpcy5zdGF0ZS5zZXNzaW9uLmRheV9hdCwgXCJkZCBtbW0geXl5eSBISDpNTTpzc1wiKVxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgYXBpQm5pIGZyb20gXCIuLi8uLi8uLi9jb25mL2F4aW9zL2FwaS5ibmlcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlc3Npb250eXBlTmV3KCkge1xuICBjb25zdCBbc3RPcHRpb25zLCBzZXRTdE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgpO1xuICBsZXQgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvL3ZhbGlkYXRpb24gZHUgZm9ybXVsYWlyZVxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgLy9jcmVhdGlvbiBkZSBsYSByZXF1ZXRlXG4gICAgYXBpQm5pXG4gICAgICAucG9zdChcIi9zZXNzaW9uc1wiLCB2YWx1ZXMsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgc2V0QWxlcnQoe1xuICAgICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgc2Vzc2lvbiDDoCBiaWVuIMOpdMOpZSBham91dMOpZSAhXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vc2kgZXJyZXVyIG9uIHVwZGF0ZSBsZSBzdGF0ZSBwb3VyIG1ldHRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBzZXRBbGVydCh7IGNvbG9yOiBcImRhbmdlclwiLCBtZXNzYWdlOiBcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcIiB9KVxuICAgICAgICApO1xuICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgfSk7XG4gICAgYWN0aW9ucy5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgfTtcblxuICAvL2Nyw6lhdGlvbiBkZSBub3RyZSByZXF1ZXRlIEFQSSBhdmVjIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vcsOpY3Vww6lyYXRpb24gZGVzIHNlc3Npb25UeXBlc1xuICAgIGFwaUJuaVxuICAgICAgLmdldChcIi9zZXNzaW9uX3R5cGVzXCIsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoc2Vzc2lvblR5cGUpID0+ICh7XG4gICAgICAgICAgICB2YWx1ZTogc2Vzc2lvblR5cGUuaWQsXG4gICAgICAgICAgICBuYW1lOiBzZXNzaW9uVHlwZS5uYW1lLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBzZXRTdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvL3NpIHNlc3Npb25UeXBlIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHsgY29sb3I6IFwiZGFuZ2VyXCIsIG1lc3NhZ2U6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVwiIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vdmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcbiAgY29uc3QgU2Vzc2lvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZGF5QXQ6IFl1cC5zdHJpbmcoKVxuICAgICAgLm1hdGNoZXMoXG4gICAgICAgIC9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pLigwWzEtOV18MVswMTJdKS4oMTl8MjApXFxkXFxkW1xcc10oMFswLTldfDFbMC05XXwyWzAtNF0pOigwWzAtOV18WzEyMzQ1XVswLTldKSQvLFxuICAgICAgICBcIkZvcm1hdCBkZC5tbS55eXl5IGhoOm1tXCJcbiAgICAgIClcbiAgICAgIC5yZXF1aXJlZChcIkRhdGUgUmVxdWlzZVwiKSxcbiAgICB0b0RvbmU6IFl1cC5udW1iZXIoKS5taW4oMCkubWF4KDEpLFxuICAgIHNlc3Npb25UeXBlX2lkOiBZdXAubnVtYmVyKCkubWluKDEpLFxuICB9KTtcblxuICAvL29uIGFmZmljaGUgbGUgZm9ybXVsYWlyZVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBkYXlBdDogc2VhcmNoUGFyYW1zLmdldChcImRhdGVcIiksXG4gICAgICAgICAgdG9Eb25lOiAxLFxuICAgICAgICAgIHNlc3Npb25UeXBlX2lkOiBcIlwiLFxuICAgICAgICB9fVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTZXNzaW9uU2NoZW1hfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHAtNSBkLWZsZXggZmxleC1jb2x1bW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+Sm91ciBldCBoZXVyZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYXlBdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRheUF0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmRheUF0ICYmIHRvdWNoZWQuZGF5QXQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmRheUF0fTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPkEgbGlldSA/PC9sYWJlbD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0b0RvbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy50b0RvbmV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxfT5PdWk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXswfT5Ob248L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAge2Vycm9ycy50b0RvbmUgJiYgdG91Y2hlZC50b0RvbmUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLnRvRG9uZX08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5UeXBlIGRlIHNlc3Npb248L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlc3Npb25UeXBlX2lkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCIwXCIgdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICBWZXVpbGxleiBzZWxlY3Rpb25uZXJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7c3RPcHRpb25zLm1hcCgocykgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3MudmFsdWV9IHZhbHVlPXtzLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIHtlcnJvcnMuc2Vzc2lvblBsYWNlX2lkICYmIHRvdWNoZWQuc2Vzc2lvblBsYWNlX2lkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5zZXNzaW9uUGxhY2VfaWR9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVudm95ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGlCbmkgZnJvbSBcIi4uLy4uLy4uL2NvbmYvYXhpb3MvYXBpLmJuaVwiO1xuaW1wb3J0IHsgc2V0QWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXhcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91dGlsc1wiO1xuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tIFwiQGZ1bGxjYWxlbmRhci9yZWFjdFwiO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZFwiOyAvLyBhIHBsdWdpbiFcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvblwiOyAvLyBuZWVkZWQgZm9yIGRheUNsaWNrXG5pbXBvcnQgZnJMb2NhbGUgZnJvbSBcIkBmdWxsY2FsZW5kYXIvY29yZS9sb2NhbGVzL2ZyXCI7XG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXRpbHMvRGF0ZUZvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBoYW5kbGVEYXRlQ2xpY2sgPSAoYXJnKSA9PiB7XG4gIC8vIGJpbmQgd2l0aCBhbiBhcnJvdyBmdW5jdGlvblxuICBsZXQgZGF0ZSA9IGFyZy5kYXRlU3RyLnNwbGl0KFwiLVwiKTtcbiAgZGF0ZSA9IGRhdGVbMl0gKyBcIi5cIiArIGRhdGVbMV0gKyBcIi5cIiArIGRhdGVbMF07XG4gIGlmICh3aW5kb3cuY29uZmlybShcIkFqb3V0ZXIgdW5lIHNlc3Npb24gbGUgXCIgKyBkYXRlICsgXCIgP1wiKSA9PT0gdHJ1ZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCIvbmV3LXNlc3Npb24/ZGF0ZT1cIiArIGRhdGUgKyBcIiBcIiArIFwiMTc6MzA6MDBcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlc3Npb25zTGlzdCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9jcsOpYXRpb24gZGUgbm90cmUgcmVxdWV0ZSBBUEkgYXZlYyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGlCbmlcbiAgICAgIC5nZXQoXCIvc2Vzc2lvbnNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgICByZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoc2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBzZXNzaW9uLnNlc3Npb25fdHlwZS5uYW1lLFxuICAgICAgICAgICAgICBkYXRlOiBzZXNzaW9uLmRheV9hdCxcbiAgICAgICAgICAgICAgdXJsOiBcIi9zZXNzaW9uL1wiICsgc2Vzc2lvbi5pZCxcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcImhlbGxvXCIsXG4gICAgICAgICAgICAgIGRhdGU6IHNlc3Npb24uZGF5X2F0LFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhY2tncm91bmRcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInBpbmtcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldExpc3QoYXJyYXkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy9zaSBpdGVtIHBhcyB2YWxpZGUgb24gdXBkYXRlIGxlIHN0YXRlIHBvdXIgbWV0dHJlIHVuIG1lc3NhZ2UgZCdlcnJldXJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHNldEFsZXJ0KHtcbiAgICAgICAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhXCIgKyBlcnIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc29sZS5sb2cobGlzdCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxGdWxsQ2FsZW5kYXJcbiAgICAgICAgICBsb2NhbGU9e2ZyTG9jYWxlfVxuICAgICAgICAgIGZpcnN0RGF5PVwiMVwiXG4gICAgICAgICAgcGx1Z2lucz17W2RheUdyaWRQbHVnaW4sIGludGVyYWN0aW9uUGx1Z2luXX1cbiAgICAgICAgICBpbml0aWFsVmlldz1cImRheUdyaWRNb250aFwiXG4gICAgICAgICAgZXZlbnRzPXtsaXN0fVxuICAgICAgICAgIGRhdGVDbGljaz17aGFuZGxlRGF0ZUNsaWNrfVxuICAgICAgICAgIGV2ZW50QmFja2dyb3VuZENvbG9yPVwiI0NDMDAwMFwiXG4gICAgICAgICAgZXZlbnRDb2xvcj1cIiMzNzgwMDZcIlxuICAgICAgICAgIGFzcGVjdFJhdGlvPVwiMi41XCJcbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICAgIDxkaXY+bm8gc2Vzc2lvbjwvZGl2PjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbi8qIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9hc3NldHMvY3NzL3N0eWxlLnNjc3NcIiAqL1xuaW1wb3J0IFwiLi9jc3MvYXBwLmNzc1wiO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9yZWR1eFwiO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xucm9vdC5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPEFwcCAvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgPC9Qcm92aWRlcj5cbik7XG4iLCJjb25zdCB7IGNyZWF0ZVNsaWNlLCBjb25maWd1cmVTdG9yZSB9ID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBhbGVydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBhbGVydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImFsZXJ0XCIsXG4gIGluaXRpYWxTdGF0ZTogbnVsbCxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRBbGVydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8veyB0eXBlOiBcImFsZXJ0L2FkZEFsZXJ0XCIsIHBheWxvYWQ6eyBcImNvbG9yXCI6XCJkYW5nZXJcIiwgXCJtZXNzYWdlXCI6XCJFcnJldXIgNDA0XCJ9fVxuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vcGV0aXRlcyBmb25jdGlvbiBxdWkgcGVybWV0dGVudCBkZSBwcsOpY2lzZXIgdW5pcXVlbWVudCBsZSBwYXlsb2FkXG5leHBvcnQgY29uc3QgeyBzZXRBbGVydCB9ID0gYWxlcnRTbGljZS5hY3Rpb25zO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gY3VzdG9tZXJzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBjdXN0b21lcnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjdXN0b21lcnNcIixcbiAgaW5pdGlhbFN0YXRlOiBbXSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRDdXN0b21lcnM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0Q3VzdG9tZXJzIH0gPSBjdXN0b21lcnNTbGljZS5hY3Rpb25zO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gaXRlbXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IGl0ZW1zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiaXRlbXNcIixcbiAgaW5pdGlhbFN0YXRlOiBbXSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRJdGVtOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEl0ZW0sIGFkZEl0ZW0gfSA9IGl0ZW1zU2xpY2UuYWN0aW9ucztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHNlc3Npb25zXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBzZXNzaW9uc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInNlc3Npb25zXCIsXG4gIGluaXRpYWxTdGF0ZTogW10sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0U2Vzc2lvbnM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0U2Vzc2lvbnMgfSA9IHNlc3Npb25zU2xpY2UuYWN0aW9ucztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHNlc3Npb25zIFBsYWNlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBzZXNzaW9uUGxhY2VzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwic2Vzc2lvbl9wbGFjZXNcIixcbiAgaW5pdGlhbFN0YXRlOiBbXSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRTZXNzaW9uUGxhY2VzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFNlc3Npb25QbGFjZXMgfSA9IHNlc3Npb25QbGFjZXNTbGljZS5hY3Rpb25zO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gc2Vzc2lvbnMgVHlwZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc2Vzc2lvbnNUeXBlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwic2Vzc2lvbnNfdHlwZVwiLFxuICBpbml0aWFsU3RhdGU6IFtdLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFNlc3Npb25UeXBlczogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRTZXNzaW9uVHlwZXMgfSA9IHNlc3Npb25zVHlwZVNsaWNlLmFjdGlvbnM7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVc2VyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vL1RPRE8gQUpPVVRFUiBMT0FESU5HLCBmZXRjaCB1c2VyXG5jb25zdCBVc2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwidXNlclwiLFxuICBpbml0aWFsU3RhdGU6IFtdLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlciB9ID0gVXNlclNsaWNlLmFjdGlvbnM7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBCaWxsXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBCaWxsU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYmlsbFwiLFxuICBpbml0aWFsU3RhdGU6IFtdLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEJpbGw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0QmlsbCB9ID0gQmlsbFNsaWNlLmFjdGlvbnM7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ3JlYXRlIHN0b3JlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBjdXN0b21lcnM6IGN1c3RvbWVyc1NsaWNlLnJlZHVjZXIsXG4gICAgaXRlbXM6IGl0ZW1zU2xpY2UucmVkdWNlcixcbiAgICBhbGVydDogYWxlcnRTbGljZS5yZWR1Y2VyLFxuICAgIHNlc3Npb25zOiBzZXNzaW9uc1NsaWNlLnJlZHVjZXIsXG4gICAgc2Vzc2lvblBsYWNlczogc2Vzc2lvblBsYWNlc1NsaWNlLnJlZHVjZXIsXG4gICAgc2Vzc2lvblR5cGVzOiBzZXNzaW9uc1R5cGVTbGljZS5yZWR1Y2VyLFxuICAgIHVzZXI6IFVzZXJTbGljZS5yZWR1Y2VyLFxuICAgIGJpbGxzOiBCaWxsU2xpY2UucmVkdWNlcixcbiAgfSxcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcbiAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSxcbiAgICB9KSxcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTG9naW4iLCJIb21lIiwiUHJpdmF0ZVJvdXRlIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsInBhdGgiLCJlbGVtZW50IiwiZGVmYXVsdCIsIkhlYWRlciIsIlNpZGVCYXIiLCJ1c2VOYXZpZ2F0ZSIsImNvb2tpZXMiLCJ1c2VTZWxlY3RvciIsIkZhVXNlckFsdCIsIkJzRmlsbEdlYXJGaWxsIiwiRmlMb2dPdXQiLCJuYXZpZ2F0ZSIsInVzZXIiLCJzdGF0ZSIsImRhdGEiLCJhc3NvY2lhdGlvbiIsImxvZ291dCIsInJlbW92ZSIsInNhbWVTaXRlIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJmaXJzdG5hbWUiLCJvbkNsaWNrIiwiTmF2TGluayIsIkRyb3Bkb3duIiwiVG9nZ2xlIiwidmFyaWFudCIsIk1lbnUiLCJ0byIsInVzZURpc3BhdGNoIiwic2V0QWxlcnQiLCJBbGVydCIsImFsZXJ0IiwiZGlzcGF0Y2giLCJzZXRUaW1lb3V0IiwiY29sb3IiLCJtZXNzYWdlIiwiZGF0ZUZvcm1hdCIsIkRhdGVGb3JtYXQiLCJfcmVmIiwiZGF0ZSIsImZvcm1hdCIsImR0Iiwic3BsaXQiLCJ5ZWFyIiwibW9udGgiLCJkYXRlRGF5YW5kSG91cnMiLCJkYXkiLCJkYXRlSG91cnMiLCJob3VycyIsIm1pbiIsImRhdGVUaW1lIiwiTG9hZGluZyIsInN0eWxlIiwibWluSGVpZ2h0IiwiYWx0Iiwic3JjIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdpbnRhdGlvbiIsInByb3BzIiwiaXRlbVBlclBhZ2UiLCJuYlBhZ2VzIiwiZWxlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjdHVhbFBhZ2UiLCJzZXRBY3R1YWxQYWdlIiwiX3VzZVN0YXRlMyIsImxpbmsiLCJfdXNlU3RhdGU0Iiwic2V0TGluayIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYnRuTmV4dERpc2FibGVkIiwic2V0QnRuTmV4dERpc2FibGVkIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJidG5QcmV2RGlzYWJsZWQiLCJzZXRCdG5QcmV2RGlzYWJsZWQiLCJjaGFuZ2VQYWdlIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJzdWJzdHIiLCJwYWdlIiwiTnVtYmVyIiwid2hhdFRvRGlzcGF0Y2giLCJwYWdlc1JlbmRlciIsInBhZ2VOdW1iZXIiLCJpIiwicGFnZUFjdGl2ZSIsInB1c2giLCJrZXkiLCJOYXZpZ2F0ZSIsInVzZUxvY2F0aW9uIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZ2V0IiwicmVwbGFjZSIsIm1vbnRoRlIiLCJDdXN0b21lckxpc3QiLCJDdXN0b21lckRldGFpbHMiLCJDdXN0b21lck5ldyIsInVzZVBhcmFtcyIsIlNlc3Npb25QbGFjZURldGFpbHMiLCJTZXNzaW9uUGxhY2VzTGlzdCIsIlNlc3Npb25QbGFjZU5ldyIsIlNlc3Npb25UeXBlTmV3IiwiU2Vzc2lvblR5cGVzTGlzdCIsIlNlc3Npb25UeXBlRGV0YWlscyIsIlNlc3Npb25OZXciLCJTZXNzaW9uc0xpc3QiLCJTZXNzaW9uRGV0YWlscyIsIkl0ZW1MaXN0IiwiSXRlbU5ldyIsIkl0ZW1EZXRhaWxzIiwiQmlsbExpc3QiLCJCaWxsRGV0YWlscyIsIkJpbGxHZW5lcmF0ZSIsIkFwcFJvdXRlcyIsImF4aW9zIiwiUkVBQ1RfQVBQX1NFUlZFUl9OQU1FIiwicHJvY2VzcyIsImVudiIsImdldFRva2VuIiwiY29va2llIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJhcGlCbmkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhcGlCbmlGaWxlIiwiQmlsbExlZnRDb2x1bW4iLCJCaWxsRGV0YWlsc0ZhY3R1cmF0aW9uIiwiQmlsbEluZm8iLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiYmlsbCIsImVycm9yTWVzc2FnZSIsImxvYWRlZCIsIl9jcmVhdGVDbGFzcyIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczIiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInNldFN0YXRlIiwiZXJyIiwicmVuZGVyIiwiY3VzdG9tZXIiLCJGb3JtaWsiLCJGaWVsZCIsIll1cCIsImRhdGVZZWFyIiwiRGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiaXRlbXNPcHRpb25zIiwic2V0SXRlbXNPcHRpb25zIiwiZ2V0VVRDTW9udGgiLCJ5ZWFyUGx1cyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsInllYXJNaW51cyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN1Ym1pdCIsInZhbHVlcyIsImFjdGlvbnMiLCJuZXdJdGVtcyIsIml0ZW1MaXN0IiwibWFwIiwiaXRlbSIsIm5ld1ZhbHVlcyIsImJpbGxpbmdfbW9udGgiLCJiaWxsaW5nX3llYXIiLCJmcm9tX2F0IiwicG9zdCIsImlzU3VibWl0dGluZyIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibmFtZSIsIml0ZW1TY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiYXJyYXkiLCJtYXRjaGVzIiwib25TdWJtaXQiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsImhhbmRsZUJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiYXMiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm0iLCJ0eXBlIiwiaHRtbEZvciIsImRpc2FibGVkIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJzZXRCaWxsIiwiRmFFeWUiLCJmZXRjaEJpbGxzIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfeCIsInNldEl0ZW1QZXJQYWdlIiwiYmlsbHMiLCJCaWxsTGlzdFVuaXQiLCJkYXRlRGF5IiwiYmlsbGluZ0RhdGUiLCJ0b19hdCIsImJhZGdlU3R5bGUiLCJiYWRnZVRleHQiLCJhbW91bnQiLCJiaWxsU3RhdHV0IiwiYmFsYW5jZSIsImxhc3RuYW1lIiwiY29tcGFueSIsImJpbGxOdW1iZXIiLCJiYW5rSW5mb3JtYXRpb24iLCJjdXJyZW5jeSIsImN1c3RvbWVyU2Vzc2lvbnMiLCJzZXRDdXN0b21lclNlc3Npb25zIiwiYmlsbGluZ01vbnRoIiwiZmlyc3REYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwibGFzdERheSIsImNvbFNwYW4iLCJjcyIsInNlc3Npb24iLCJzZXNzaW9uX3R5cGUiLCJkYXlfYXQiLCJwcmljZV9vZiIsIml0ZW1zIiwiX3JlZjIiLCJzdHJlZXQiLCJzdHJlZXRfbnVtYmVyIiwiemlwX2NvZGUiLCJjaXR5IiwiZW1haWwiLCJDdXN0b21lckxlZnRDb2x1bW4iLCJDdXN0b21lckJpbGxzTGlzdCIsIkN1c3RvbWVySW5mbyIsInNldEN1c3RvbWVycyIsImZldGNoQ3VzdG9tZXJzIiwiYWRkRmlsdGVyIiwic2V0QWRkRmlsdGVyIiwiY3VzdG9tZXJzIiwiQnV0dG9uc1RyaXMiLCJpbmRleCIsIkN1c3RvbWVyTGlzdFVuaXQiLCJtZW1icmVEb25lIiwibWVtYmVyc2hpcCIsIm1lbWJlcnNoaXBfZG9uZV9hdCIsInRyU3R5bGUiLCJzY29wZSIsIm1lbWJlcnNoaXBfYXQiLCJmaWx0ZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImZpbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmQiLCJmaWxlcyIsImdldEVsZW1lbnRCeUlkIiwiY3NzVGV4dCIsInppcENvZGUiLCJwaG9uZSIsInN0cmVldE51bWJlciIsIm51bWJlciIsIm1heCIsIm1lbWJlclNoaXBfYXQiLCJvcGVuVmNhcmQiLCJjbG9zZVZjYXJkIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiY3VzdG9tZXJTY2hlbWEiLCJzdWJtaXRGaWxlIiwidmFsaWRhdGUiLCJGYVNlYXJjaCIsImN1c3RvbWVyQWN0aXZlIiwiaXNfYWN0aXZlIiwic2V0VXNlciIsIkNvb2tpZXMiLCJGZXRjaFVzZXIiLCJ1c2VyaWQiLCJzZXRJdGVtcyIsIl9pdGVtcyRpdGVtcyIsIl9pdGVtcyRpdGVtczIiLCJzZXRJdGVtIiwiZmV0Y2hJdGVtcyIsImdldFN0YXRlIiwiX3gyIiwiYWRkSXRlbSIsInByaWNlT2YiLCJkZXNjcmlwdGlvbiIsIkZhVXNlciIsIkZhTG9jayIsInNldExvYWRlZCIsImNvb2tpZXNEYXRhIiwic3RyaW5naWZ5Iiwic2V0IiwiZXhwaXJlcyIsImdldFRpbWUiLCJ3aW5kb3ciLCJyZWxvYWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicGxhY2Vob2xkZXIiLCJmZXRjaFVzZXIiLCJzZXNzaW9uUGxhY2UiLCJtZXNzYWdlQ29sb3IiLCJTZXNzaW9uUGxhY2VTY2hlbWEiLCJzZXRTZXNzaW9uUGxhY2VzIiwiZmV0Y2hTZXNzaW9uUGxhY2VzIiwic2Vzc2lvblBsYWNlcyIsIlNlc3Npb250eXBlRGV0YWlscyIsInNlc3Npb25UeXBlIiwiU2Vzc2lvbnR5cGVOZXciLCJwb3NpdGl2ZSIsInNlc3Npb25QbGFjZV9pZCIsInNlc3Npb25QbGFjZUxpc3RPcHRpb24iLCJfdGhpczMiLCJTZXNzaW9uVHlwZVNjaGVtYSIsInMiLCJzZXRTZXNzaW9uVHlwZXMiLCJmZXRjaFNlc3Npb25UeXBlcyIsInNlc3Npb25UeXBlcyIsInVzZVNlYXJjaFBhcmFtcyIsInN0T3B0aW9ucyIsInNldFN0T3B0aW9ucyIsInNldERhdGUiLCJfdXNlU2VhcmNoUGFyYW1zIiwiX3VzZVNlYXJjaFBhcmFtczIiLCJzZWFyY2hQYXJhbXMiLCJzZXRTZWFyY2hQYXJhbXMiLCJTZXNzaW9uU2NoZW1hIiwiZGF5QXQiLCJ0b0RvbmUiLCJzZXNzaW9uVHlwZV9pZCIsIkZ1bGxDYWxlbmRhciIsImRheUdyaWRQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsImZyTG9jYWxlIiwiaGFuZGxlRGF0ZUNsaWNrIiwiZGF0ZVN0ciIsImNvbmZpcm0iLCJhc3NpZ24iLCJsaXN0Iiwic2V0TGlzdCIsInRpdGxlIiwidXJsIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImxvY2FsZSIsInBsdWdpbnMiLCJpbml0aWFsVmlldyIsImV2ZW50cyIsImRhdGVDbGljayIsImV2ZW50QmFja2dyb3VuZENvbG9yIiwiZXZlbnRDb2xvciIsImFzcGVjdFJhdGlvIiwiUmVhY3RET00iLCJQcm92aWRlciIsInN0b3JlIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJTdHJpY3RNb2RlIiwiX3JlcXVpcmUiLCJyZXF1aXJlIiwiY3JlYXRlU2xpY2UiLCJjb25maWd1cmVTdG9yZSIsImFsZXJ0U2xpY2UiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwiY3VzdG9tZXJzU2xpY2UiLCJpdGVtc1NsaWNlIiwiX2l0ZW1zU2xpY2UkYWN0aW9ucyIsInNlc3Npb25zU2xpY2UiLCJzZXRTZXNzaW9ucyIsInNlc3Npb25QbGFjZXNTbGljZSIsInNlc3Npb25zVHlwZVNsaWNlIiwiVXNlclNsaWNlIiwiQmlsbFNsaWNlIiwicmVkdWNlciIsInNlc3Npb25zIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siXSwic291cmNlUm9vdCI6IiJ9