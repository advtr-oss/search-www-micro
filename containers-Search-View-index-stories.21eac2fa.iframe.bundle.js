"use strict";(self.webpackChunksearch_ui=self.webpackChunksearch_ui||[]).push([[945],{"./src/containers/Search/View/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),scope="app.containers.SearchView",messages=(0,__webpack_require__("./node_modules/react-intl/lib/index.js").vU)({placeholder:{id:"".concat(scope,".placeholder"),defaultMessage:"Search for a city"},title:{id:"".concat(scope,".title"),defaultMessage:"Search Results"},"aria-input":{id:"".concat(scope,".aria-input"),defaultMessage:"Search Autocomplete"}}),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),View_Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n"]))),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js"),utils=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function FormattedMessage(props){var intl=(0,useIntl.Z)(),formatMessage=intl.formatMessage,_a=intl.textComponent,Text=void 0===_a?react.Fragment:_a,id=props.id,description=props.description,defaultMessage=props.defaultMessage,values=props.values,children=props.children,_b=props.tagName,Component=void 0===_b?Text:_b,nodes=formatMessage({id:id,description:description,defaultMessage:defaultMessage},values,{ignoreTag:props.ignoreTag});return"function"==typeof children?children(Array.isArray(nodes)?nodes:[nodes]):Component?react.createElement(Component,null,react.Children.toArray(nodes)):react.createElement(react.Fragment,null,nodes)}FormattedMessage.displayName="FormattedMessage";var MemoizedFormattedMessage=react.memo(FormattedMessage,(function areEqual(prevProps,nextProps){var values=prevProps.values,otherProps=(0,tslib_es6._T)(prevProps,["values"]),nextValues=nextProps.values,nextOtherProps=(0,tslib_es6._T)(nextProps,["values"]);return(0,utils.wU)(nextValues,values)&&(0,utils.wU)(otherProps,nextOtherProps)}));MemoizedFormattedMessage.displayName="MemoizedFormattedMessage";var message=MemoizedFormattedMessage,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FormattedView=function FormattedView(_ref){var placeholder=_ref.placeholder,title=_ref.title,aria=_ref["aria-input"],_children=_ref.children;return(0,jsx_runtime.jsx)(message,(0,objectSpread2.Z)((0,objectSpread2.Z)({},aria),{},{children:function children(aria){return(0,jsx_runtime.jsx)(message,(0,objectSpread2.Z)((0,objectSpread2.Z)({},placeholder),{},{children:function children(placeholder){return(0,jsx_runtime.jsx)(message,(0,objectSpread2.Z)((0,objectSpread2.Z)({},title),{},{children:function children(title){return _children({placeholder:placeholder[0],title:title[0],"aria-input":aria[0]})}}))}}))}}))},Card=__webpack_require__("./src/components/Search/Card/index.js"),Input=__webpack_require__("./src/components/Search/Input/index.jsx"),Dropdown=__webpack_require__("./src/components/Search/Dropdown/index.js"),Search={Card:Card.Z,Input:Input.I,Dropdown:Dropdown.L},View=function View(_ref){Object.assign({},_ref);return(0,jsx_runtime.jsx)(View_Container,{children:(0,jsx_runtime.jsx)(FormattedView,{title:messages.title,placeholder:messages.placeholder,"aria-input":messages["aria-input"],children:function children(_ref2){var title=_ref2.title,placeholder=_ref2.placeholder,aria=_ref2["aria-input"];return(0,jsx_runtime.jsx)(Search.Card,{placeholder:placeholder,searchTitle:title,"aria-label":aria})}})})},LanguageSelect=__webpack_require__("./src/components/LanguageSelect/index.jsx"),style={width:"420px",padding:"20px",overflowY:"auto",position:"absolute",left:0,bottom:0,top:0},index_stories={title:"Search/View",component:View,decorators:[function(Story){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:style,children:(0,jsx_runtime.jsx)("div",{style:{position:"relative"},children:(0,jsx_runtime.jsx)(Story,{})})}),(0,jsx_runtime.jsx)("div",{style:{position:"absolute",right:"16px",top:"16px"},children:(0,jsx_runtime.jsx)(LanguageSelect.S,{})})]})}]},Default={render:function render(args){return(0,jsx_runtime.jsx)(View,(0,objectSpread2.Z)({},args))}},__namedExportsOrder=["Default"]},"./src/components/LanguageSelect/index.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return ReduxLanguageSelect}});__webpack_require__("./node_modules/react/index.js");var es=__webpack_require__("./node_modules/react-redux/es/index.js"),reselect_es=__webpack_require__("./node_modules/reselect/es/index.js"),esm=__webpack_require__("./node_modules/@advtr/tidy/dist/esm/index.js"),scope="boilerplate.containers.locale",messages=(0,__webpack_require__("./node_modules/react-intl/lib/index.js").vU)({en:{id:"".concat(scope,".en"),defaultMessage:"English"},fr:{id:"".concat(scope,".fr"),defaultMessage:"French"}}),i18n=__webpack_require__("./src/i18n.js"),constants=__webpack_require__("./src/providers/LanguageProvider/constants.js");var selectors=__webpack_require__("./src/providers/LanguageProvider/selectors.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _LanguageSelect(props){return(0,jsx_runtime.jsx)(esm.LanguageSelect,{"aria-label":"Language Select",locale:props.locale,locales:i18n.Lu,messages:messages,onLocaleToggle:props.onLocaleToggle})}_LanguageSelect.displayName="withI18N(".concat(esm.LanguageSelect.displayName,")");var mapStateToProps=(0,reselect_es.P1)((0,selectors.D)(),(function(locale){return{locale:locale}}));var ReduxLanguageSelect=(0,es.$j)(mapStateToProps,(function mapDispatchToProps(dispatch){return{onLocaleToggle:function onLocaleToggle(selected){return dispatch(function changeLocale(languageLocale){return{type:constants.I,locale:languageLocale}}(selected.key))},dispatch:dispatch}}))(_LanguageSelect)},"./node_modules/react-intl/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{vU:function(){return defineMessages}});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";createFormattedComponent("formatDate"),createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"),createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/useIntl.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useIntl}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__._y);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lq)(intl),intl}}}]);