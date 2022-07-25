"use strict";(self.webpackChunksearch_ui=self.webpackChunksearch_ui||[]).push([[66],{"./src/components/LanguageSelect/index.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LanguageSelect:function(){return index_stories_LanguageSelect},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js")),reselect_es=__webpack_require__("./node_modules/reselect/es/index.js"),esm=__webpack_require__("./node_modules/@advtr/tidy/dist/esm/index.js"),scope="boilerplate.containers.locale",messages=(0,__webpack_require__("./node_modules/react-intl/lib/index.js").vU)({en:{id:"".concat(scope,".en"),defaultMessage:"English"},fr:{id:"".concat(scope,".fr"),defaultMessage:"French"}}),i18n=__webpack_require__("./src/i18n.js"),constants=__webpack_require__("./src/providers/LanguageProvider/constants.js");var selectors=__webpack_require__("./src/providers/LanguageProvider/selectors.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var mapStateToProps=(0,reselect_es.P1)((0,selectors.D)(),(function(locale){return{locale:locale}}));var components_LanguageSelect=(0,es.$j)(mapStateToProps,(function mapDispatchToProps(dispatch){return{onLocaleToggle:function onLocaleToggle(evt){return dispatch(function changeLocale(languageLocale){return{type:constants.I,locale:languageLocale}}(evt.target.value))},dispatch:dispatch}}))((function LanguageSelect(props){return(0,jsx_runtime.jsx)(esm.LanguageSelect,{"aria-label":"Language Select",locale:props.locale,locales:i18n.Lu,messages:messages,onLocaleToggle:props.onLocaleToggle})})),index_stories={title:"Select/Language",component:components_LanguageSelect},index_stories_LanguageSelect=function Template(){return(0,jsx_runtime.jsx)(components_LanguageSelect,{})}.bind({});index_stories_LanguageSelect.args={},index_stories_LanguageSelect.parameters=(0,objectSpread2.Z)({storySource:{source:"() => {\n  return (\n    <ADVLanguageSelect />\n  )\n}"}},index_stories_LanguageSelect.parameters);var __namedExportsOrder=["LanguageSelect"]},"./node_modules/react-intl/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{vU:function(){return defineMessages}});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";createFormattedComponent("formatDate"),createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"),createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/useIntl.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useIntl}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__._y);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lq)(intl),intl}}}]);