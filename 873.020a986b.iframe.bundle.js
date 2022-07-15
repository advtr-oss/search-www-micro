/*! For license information please see 873.020a986b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksearch_ui=self.webpackChunksearch_ui||[]).push([[873],{"./node_modules/@advtr/tidy-core/dist/js/colors.js":function(module,exports,__webpack_require__){const color=__webpack_require__("./node_modules/color2k/dist/index.exports.require.cjs.js"),get=__webpack_require__("./node_modules/lodash.get/index.js"),logger=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/logger.js"),{colorWrapper:colorWrapper}=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/utils.js"),{ExpressionError:ExpressionError,resolve:resolve}=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/expression.js"),thisArg=method=>Object.freeze({self:"generated-expression",logger:logger(method),resolve:resolve});exports.alpha=module.exports.alpha=function evaluate(...args){return context=>{const[value,amount=1,...rest]=args;return colorWrapper.call(this,"transparentize",[value,1-amount,...rest],context)}}.bind(thisArg("alpha")),exports.darken=module.exports.darken=function evaluate(...args){return context=>colorWrapper.call(this,"darken",args,context)}.bind(thisArg("darken")),exports.desaturate=module.exports.desaturate=function evaluate(...args){return context=>colorWrapper.call(this,"desaturate",args,context)}.bind(thisArg("desaturate")),exports.get=module.exports.get=function evaluate(...args){return context=>{const[path,...rest]=args;if(!path)throw new ExpressionError("Missing path",this,[...args],context);return this.logger.verbose("looking up object with path - `%s`",path),rest.length>0&&this.logger.notice("extraneous arguments passed - %s",rest),get(context,path)}}.bind(thisArg("get")),exports.lighten=module.exports.lighten=function evaluate(...args){return context=>colorWrapper.call(this,"desaturate",args,context)}.bind(thisArg("lighten")),exports.mix=module.exports.mix=function evaluate(...args){return context=>{const[value,mit,amount=.5,...rest]=args;if(!value||!mit)throw new ExpressionError("Missing color value",this,[...args],context);rest.length>0&&this.logger.notice("extraneous arguments passed - %s",rest);try{const v=this.resolve(value)(context),m=this.resolve(mit)(context);return this.logger.verbose("mixing `%s` with %s by %s",v,m,amount),color.mix(v,m,amount).replace(/ /g,"")}catch(err){throw new ExpressionError(err.module,this,[...args],context)}}}.bind(thisArg("mix"))},"./node_modules/@advtr/tidy-core/dist/js/dark.theme.js":function(module,__unused_webpack_exports,__webpack_require__){const mixin=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/mixin.js");module.exports={scheme:{black:"#1c2128",white:"#cdd9e5",gray:["#cdd9e5","#adbac7","#909dab","#768390","#636e7b","#545d68","#444c56","#373e47","#2d333b","#22272e"],red:["#ffd8d3","#ffb8b0","#ff938a","#f47067","#e5534b","#c93c37","#ad2e2c","#922323","#78191b","#5D0F12"],green:["#b4f1b4","#8ddb8c","#6bc46d","#57ab5a","#46954a","#347d39","#2b6a30","#245829","#1b4721","#113417"],blue:["#c6e6ff","#96d0ff","#6cb6ff","#539bf5","#4184e4","#316dca","#255ab2","#1b4b91","#143d79","#0f2d5c"],yellow:["#fbe090","#eac55f","#daaa3f","#c69026","#ae7c14","#966600","#805400","#6c4400","#593600","#452700"],orange:["#ffddb0","#ffbc6f","#f69d50","#e0823d","#cc6b2c","#ae5622","#94471b","#7f3913","#682d0f","#4d210c"],purple:["#eedcff","#dcbdfb","#dcbdfb","#b083f0","#986ee2","#8256d0","#6b44bc","#5936a2","#472c82","#352160"],pink:["#ffd7eb","#ffb3d8","#fc8dc7","#e275ad","#c96198","#ae4c82","#983b6e","#7e325a","#69264a","#551639"],coral:["#FFDACF","#FFB9A5","#F79981","#EC775C","#DE5B41","#C2442D","#A93524","#8D291B","#771D13","#5D1008"]},elements:{foreground:{default:"#adbac7",muted:"#768390",subtle:"#636e7b",inverse:"#cdd9e5"},canvas:{default:"#22272e",overlay:"#2d333b",inset:"#1c2128",subtle:"#2d333b"},inverseCanvas:{default:"#636e7b",muted:"rgba(99,110,123,0.4)",subtle:"rgba(99,110,123,0.1)"},border:{default:"#444c56",muted:"#373e47",subtle:"rgba(205,217,229,0.1)"},shadow:{small:"0 0 transparent",medium:"0 3px 6px #1c2128",large:"0 8px 24px #1c2128",extraLarge:"0 12px 48px #1c2128"},levels:{active:{foreground:"#539bf5",canvas:{emphasis:"#316dca",muted:"rgba(65,132,228,0.4)",subtle:"rgba(65,132,228,0.15)"}},success:{foreground:"#57ab5a",canvas:{emphasis:"#347d39",muted:"rgba(70,149,74,0.4)",subtle:"rgba(70,149,74,0.15)"}},warning:{foreground:"#cc6b2c",canvas:{emphasis:"#ae5622",muted:"rgba(204,107,44,0.4)",subtle:"rgba(204,107,44,0.15)"}},error:{foreground:"#e5534b",canvas:{emphasis:"#c93c37",muted:"rgba(229,83,75,0.4)",subtle:"rgba(229,83,75,0.15)"}}}},layout:{spacing:["0px","4px","8px","16px","24px","32px","40px","48px","64px","96px","112px","128px"],border:{radius:["0px","4px","6px","8px","50%"]}},typography:{fontFamily:{...mixin.typography.fontFamily},fontSize:["12px","14px","16px","20px","24px","32px","40px","48px"],lineHeight:{...mixin.typography.lineHeight},fontWeight:{...mixin.typography.fontWeight}}}},"./node_modules/@advtr/tidy-core/dist/js/expression.js":function(module){const weakContextMap=new WeakMap([]);function HiddenProxy(ctx){weakContextMap.set(this,ctx),this.keys=Object.keys(ctx),this.keys.forEach((key=>{Object.defineProperty(this,key,{get(){return weakContextMap.get(this)[key]}})}))}const resolve=value=>context=>"function"==typeof value?resolve(value(context))(context):value;class ExpressionError extends Error{constructor(message,exp,args,ctx={}){super(message),this.expression=exp,this.args=args,this.context=new HiddenProxy(ctx)}}module.exports={ExpressionError:ExpressionError,resolve:resolve}},"./node_modules/@advtr/tidy-core/dist/js/light.theme.js":function(module,__unused_webpack_exports,__webpack_require__){const mixin=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/mixin.js");module.exports={scheme:{black:"#1b1f24",white:"#ffffff",gray:["#f6f8fa","#eaeef2","#d0d7de","#afb8c1","#8c959f","#6e7781","#57606a","#424a53","#32383f","#24292f"],red:["#FFEBE9","#ffcecb","#ffaba8","#ff8182","#fa4549","#cf222e","#a40e26","#82071e","#660018","#4c0014"],green:["#dafbe1","#aceebb","#6fdd8b","#4ac26b","#2da44e","#1a7f37","#116329","#044f1e","#003d16","#002d11"],blue:["#ddf4ff","#b6e3ff","#80ccff","#54aeff","#218bff","#0969da","#0550ae","#033d8b","#0a3069","#002155"],yellow:["#fff8c5","#fae17d","#eac54f","#d4a72c","#bf8700","#9a6700","#7d4e00","#633c01","#4d2d00","#3b2300"],orange:["#fff1e5","#ffd8b5","#ffb77c","#fb8f44","#e16f24","#bc4c00","#953800","#762c00","#5c2200","#471700"],purple:["#fbefff","#ecd8ff","#d8b9ff","#c297ff","#a475f9","#8250df","#6639ba","#512a97","#3e1f79","#2e1461"],pink:["#ffeff7","#ffd3eb","#ffadda","#ff80c8","#e85aad","#bf3989","#99286e","#772057","#611347","#4d0336"],coral:["#FFF0EB","#FFD6CC","#FFB4A1","#FD8C73","#EC6547","#C4432B","#9E2F1C","#801F0F","#691105","#510901"]},elements:{foreground:{default:"#24292f",muted:"#57606a",subtle:"#6e7781",inverse:"#ffffff"},canvas:{default:"#ffffff",overlay:"#ffffff",inset:"#f6f8fa",subtle:"#f6f8fa"},inverseCanvas:{default:"#6e7781",muted:"rgba(175,184,193,0.2)",subtle:"rgba(234,238,242,0.5)"},border:{default:"#d0d7de",muted:"hsla(210,15%,84%,1)",subtle:"rgba(27,31,36,0.15)"},shadow:{small:"0 1px 0 rgba(27,31,36,0.04)",medium:"0 3px 6px rgba(140,149,159,0.15)",large:"0 8px 24px rgba(140,149,159,0.2)",extraLarge:"0 12px 48px rgba(140,149,159,0.3)"},levels:{active:{foreground:"#0969da",canvas:{emphasis:"#0969da",muted:"rgba(84,174,255,0.4)",subtle:"#ddf4ff"}},success:{foreground:"#1a7f37",canvas:{emphasis:"#2da44e",muted:"rgba(74,194,107,0.4)",subtle:"#dafbe1"}},warning:{foreground:"#bc4c00",canvas:{emphasis:"#bc4c00",muted:"rgba(251,143,68,0.4)",subtle:"#fff1e5"}},error:{foreground:"#cf222e",canvas:{emphasis:"#cf222e",muted:"rgba(255,129,130,0.4)",subtle:"#FFEBE9"}}}},layout:{spacing:["0px","4px","8px","16px","24px","32px","40px","48px","64px","96px","112px","128px"],border:{radius:["0px","4px","6px","8px","50%"]}},typography:{fontFamily:{...mixin.typography.fontFamily},fontSize:["12px","14px","16px","20px","24px","32px","40px","48px"],lineHeight:{...mixin.typography.lineHeight},fontWeight:{...mixin.typography.fontWeight}}}},"./node_modules/@advtr/tidy-core/dist/js/logger.js":function(module,__unused_webpack_exports,__webpack_require__){var process=__webpack_require__("./node_modules/process/browser.js");"object"==typeof window&&Object.defineProperty(window,"onlog",{value:()=>{},writable:!0});let log,logger={};log="object"==typeof window?level=>(...args)=>window.onlog&&window.onlog(level,...args):level=>(...args)=>process.emit("log",level,...args);for(const level of["silly","verbose","info","warn","error","notice"])logger[level]=log(level);module.exports=method=>{const namespace=`expression:${method}`;return{verbose(...args){logger.verbose(namespace,...args)},info(...args){logger.info(namespace,...args)},notice(...args){logger.notice(namespace,...args)},error(...args){logger.error(namespace,...args)}}}},"./node_modules/@advtr/tidy-core/dist/js/mixin.js":function(module){const defaultSpacing=8,spacing=[...[0,defaultSpacing/2,defaultSpacing,2*defaultSpacing,3*defaultSpacing,4*defaultSpacing,5*defaultSpacing,6*defaultSpacing].map((el=>`${el}px`)),...[8*defaultSpacing,12*defaultSpacing,14*defaultSpacing,16*defaultSpacing].map((el=>`${el}px`))],border={};border.radius=["0px","4px","6px","8px","50%"];const layout={spacing:spacing,border:border},typography={fontFamily:{body:["-apple-system","BlinkMacSystemFont","Segoe UI","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji"].join(", "),mono:["ui-monospace","SFMono-Regular","SF Mono","Menlo","Consolas","Liberation Mono","monospace"].join(", ")},fontSize:["12px","14px","16px","20px","24px","32px","40px","48px"],lineHeight:{condensedUltra:1,condensed:1.25,default:1.5},fontWeight:{thin:100,extraLight:200,light:300,regular:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900,extraBlack:950}};module.exports={layout:layout,typography:typography}},"./node_modules/@advtr/tidy-core/dist/js/utils.js":function(module,__unused_webpack_exports,__webpack_require__){const color=__webpack_require__("./node_modules/color2k/dist/index.exports.require.cjs.js"),{ExpressionError:ExpressionError}=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/expression.js");module.exports={colorWrapper:function colorWrapper(method,args,context){if(obj=color,property=method,!Object.prototype.hasOwnProperty.call(obj,property))throw new Error(`color2k does not contain method - '${method}'`);var obj,property;const[value,amount=1,...rest]=args;if(!value)throw new ExpressionError("Missing color value",this,[...args],context);rest.length>0&&this.logger.notice("extraneous arguments passed - %s",rest);try{const v=this.resolve(value)(context);return this.logger.verbose("%s `%s` by %s",method,v,amount),color[method](v,amount).replace(/ /g,"")}catch(err){throw new ExpressionError(err.message,this,[...args],context)}}}},"./node_modules/@advtr/tidy-core/index.js":function(module,__unused_webpack_exports,__webpack_require__){const themes={dark:__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/dark.theme.js"),light:__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/light.theme.js")};module.exports={...__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/colors.js"),mixin:__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/mixin.js"),themes:themes}},"./node_modules/@advtr/tidy/dist/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{GlobalStyle:function(){return GlobalStyle_GlobalStyle},Input:function(){return Input},LanguageProvider:function(){return LanguageProvider},LanguageSelect:function(){return LanguageSelect},ThemeProvider:function(){return ThemeProvider_ThemeProvider},ThemeSwitch:function(){return ThemeSwitch},get:function(){return get}});var tidy_core=__webpack_require__("./node_modules/@advtr/tidy-core/index.js");const get=path=>Array.isArray(path)?(0,tidy_core.get)(["theme",...path]):(0,tidy_core.get)("theme."+path);var react=__webpack_require__("./node_modules/react/index.js");const ThemeContext=react.createContext({setColorScheme:()=>{}});function useTheme(){const ctx=react.useContext(ThemeContext);return ctx||console.warn("Missing context"),ctx}var hooks_useKeyboardListener=function useKeyboardListener(input,handler){const savedHandler=(0,react.useRef)();(0,react.useEffect)((()=>{null!=handler&&(savedHandler.current=handler)}),[handler]),(0,react.useEffect)((()=>{const listener=event=>{(Array.isArray(input)&&input.includes(event.code)||event.code===input)&&null!=savedHandler.current&&savedHandler.current(event)};return document.addEventListener("keydown",listener),()=>{document.removeEventListener("keydown",listener)}}),[input])};var lodash_kebabcase=__webpack_require__("./node_modules/lodash.kebabcase/index.js"),lodash_kebabcase_default=__webpack_require__.n(lodash_kebabcase),dist=__webpack_require__("./node_modules/styled-normalize/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const resolve=fn=>ctx=>"function"==typeof fn?fn(ctx):fn,breakpoints={small:"544px",medium:"768px",large:"1012px",extraLarge:"1280px"};const headers={...{"h00-mobile":get("typography.fontSize.6"),"h0-mobile":get("typography.fontSize.5"),"h1-mobile":"26px","h2-mobile":"22px","h3-mobile":"18px"},h000:"64px",h00:get("typography.fontSize.7"),h0:get("typography.fontSize.6"),h1:get("typography.fontSize.5"),h2:get("typography.fontSize.4"),h3:get("typography.fontSize.3"),h4:get("typography.fontSize.2"),h5:get("typography.fontSize.1"),h6:get("typography.fontSize.0")},border_default=get("layout.border.radius.1"),border_style=ctx=>`1px solid ${get("elements.border.default")(ctx)}`,BP=(get("layout.border.radius.4"),Object.entries(breakpoints).map((([key,value])=>((key,value)=>styled_components_browser_esm.css`
	.container-${lodash_kebabcase_default()(key)} {
	  max-width: ${resolve(value)};
	  margin-right: auto;
	  margin-left: auto;
	  // Overwrite the bootstrap padding
	  padding: 0;
	}
`)(key,value)))),GlobalStyle_elements=["h1","h2","h3","h4","h5","h6"],GlobalStyle_mobileHeaders=Object.keys(headers).filter((el=>el.includes("-mobile"))),GlobalStyle_GlobalStyle=styled_components_browser_esm.createGlobalStyle`
	${dist.Fv}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: ${get("typography.fontFamily.body")};
    font-size: ${get("typography.fontSize.1")};
    line-height: ${get("typography.lineHeight.default")};
    font-weight: ${get("typography.fontWeight.regular")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: ${get("elements.foreground.default")};
  }
  
  .mono {
    font-family: ${get("typography.fontFamily.mono")};
    color: ${get("elements.foreground.subtle")};
  }
  
  code, kbd, samp {
    font-family: ${get("typography.fontFamily.mono")};
	  font-size: ${get("typography.fontSize.0")};
  }
  
	${BP}

    // Have these here so can be used anywhere without a component
  ${Object.entries(headers).filter((([key,_])=>!GlobalStyle_mobileHeaders.includes(key))).map((bp=>{return styled_components_browser_esm.css`
    ${header=bp[0],GlobalStyle_elements.includes(header)?`${header}, .${header}`:`.${header}`} {
      font-size: ${resolve(bp[1])};
      font-weight: ${get("typography.fontWeight.semiBold")};
      line-height: 1.2;
      
      // If their is a mobile version of the header force it here
      ${(header=>GlobalStyle_mobileHeaders.includes(`${header}-mobile`))(bp[0])?styled_components_browser_esm.css`
          @media (max-width: ${resolve(breakpoints.small)}) {
            font-size: ${resolve((header=>headers[`${header}-mobile`])(bp[0]))};
          }
        `:null}
    }
  `;var header}))}
`;var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemeProvider_ThemeProvider=({children:children,...props})=>{const{theme:fallbackTheme,colorScheme:fallbackColorScheme}=useTheme()||{},[colorScheme,setColorScheme]=(0,react.useState)(getCookieColorScheme()??props.colorScheme??fallbackColorScheme??"light"),systemColorScheme=function useSystemColorScheme(){const[systemColorMode,setSystemColorMode]=react.useState(getSystemColorScheme);return react.useEffect((()=>{const media=window?.matchMedia?.("(prefers-color-scheme: dark)");function handleChange(event){const isDark=event.matches;setSystemColorMode(isDark?"dark":"light")}if(media){if(void 0!==media.addEventListener)return media.addEventListener("change",handleChange),function cleanup(){media.removeEventListener("change",handleChange)};if(void 0!==media.addListener)return media.addListener(handleChange),function cleanup(){media.removeListener(handleChange)}}}),[]),systemColorMode}(),resolvedColorScheme="auto"===colorScheme?systemColorScheme:colorScheme,resolvedTheme=props.theme??fallbackTheme??tidy_core.themes[resolvedColorScheme],handleColorSchemeChange=(0,react.useCallback)((value=>{let newValue;newValue="function"==typeof value?value(colorScheme):value,newValue!==colorScheme&&(setColorScheme(newValue),function setCookie(cName,cValue,expDays){const date=new Date;date.setTime(date.getTime()+24*expDays*60*60*1e3);const expires="expires="+date.toUTCString();document.cookie=cName+"="+cValue+"; "+expires+"; path=/"}("advtr-theme",newValue.toString(),7))}),[colorScheme,setColorScheme]);return(0,react.useEffect)((()=>{setColorScheme(getCookieColorScheme()??props.colorScheme??fallbackColorScheme??"light")}),[props.colorScheme]),(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:{theme:resolvedTheme,colorScheme:resolvedColorScheme,setColorScheme:props.useCookie?handleColorSchemeChange:setColorScheme},children:(0,jsx_runtime.jsx)(styled_components_browser_esm.ThemeProvider,{theme:resolvedTheme,children:children})})};function getSystemColorScheme(){return"undefined"!=typeof window&&window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}function getCookieColorScheme(){return function getCookie(cName){const name=cName+"=",cArr=decodeURIComponent(document.cookie).split("; ");let res=null;return cArr.forEach((val=>{0===val.indexOf(name)&&(res=val.substring(name.length))})),res}("advtr-theme")}ThemeProvider_ThemeProvider.propTypes={theme:prop_types_default().object,useCookie:prop_types_default().bool,colorScheme:prop_types_default().oneOf(["auto","dark","light"]),children:prop_types_default().element.isRequired},ThemeProvider_ThemeProvider.defaultProps={useCookie:!0};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var clsx_m=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};styled_components_browser_esm.default.div``;prop_types_default().oneOf(["sm","md","lg","xl"]).isRequired,prop_types_default().element.isRequired;var Header_Wrapper=styled_components_browser_esm.default.div``;function conditionalPropType(condition,message){if("function"!=typeof condition)throw"Wrong argument type 'condition' supplied to 'conditionalPropType'";return function(props,propName,componentName){if(condition(props,propName,componentName))return new Error(`Invalid prop '${propName}' '${props[propName]}' supplied to '${componentName}'. ${message}`)}}const Header_elements=["h1","h2","h3","h4","h5","h6","div"],createClassName=props=>clsx_m("div"===props.as?"h1":props.as,props.className),Header=props=>{const attribute=(0,react.useMemo)((()=>{return level=props.as,Header_elements.includes(level)&&level||"div";var level}),[props.as]),body=(0,react.useMemo)((()=>props.children&&props.children||props.title||"Header"),[props]);return(0,jsx_runtime.jsx)(Header_Wrapper,{as:attribute,className:createClassName(props),children:body})};Header.propTypes={as:prop_types_default().oneOf(["h1","h2","h3","h4","h5","h6","div","h0","h00","h000"]).isRequired,className:prop_types_default().string,title:conditionalPropType((props=>"string"!=typeof props.title&&"object"!=typeof props.children),"Requires either title or children"),children:conditionalPropType((props=>"string"!=typeof props.title&&"object"!=typeof props.children),"Requires either title or children")},Header.defaultProps={as:"h1"};var ThemeSwitch_Wrapper=styled_components_browser_esm.default.div`
	box-sizing: content-box;
	
	& > * {
    box-sizing: content-box !important;
	}
`;const toggle=styled_components_browser_esm.keyframes`
  0% {
    left: 4px;
  }

  60% {
    left: 4px;
    width: 112px;
  }

  100% {
    left: 104px;
    width: 82px;
  }
`,reverse=styled_components_browser_esm.keyframes`
  0% {
    left: 104px;
    width: 82px;
  }

  60% {
    left: 72px;
    width: 112px;
  }

  100% {
    left: 4px;
  }
`,ToggleLabel=styled_components_browser_esm.default.label`
  display: flex;
  position: relative;
	
  width: 200px;
  height: 100px;
	
  border-radius: 100px;
  border: 5px solid ${get("elements.border.subtle")};
	
  background: ${get("elements.canvas.overlay")};

  transition: all 350ms ease-in;
	
	// Create the yellow on side of the switch
	&::before {
    animation-name: ${reverse};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    transition: all 350ms ease-in;
    content: "";
    width: 82px;
    height: 82px;
    border: 5px solid ${get("scheme.yellow.1")};
    top: 4px;
    left: 4px;
    position: absolute;
    border-radius: 82px;
    background: ${get("scheme.yellow.2")};
	}
	
	&::after {
    transition-delay: 0ms;
    transition: all 250ms ease-in;
    position: absolute;
    content: "";
    left: 143px;
    top: 23px;
    width: 10px;
    height: 10px;
    background: transparent;
    border-radius: ${get("layout.border.radius.4")};
    opacity: 0;
	}
`,ToggleCheckbox=styled_components_browser_esm.default.input`
	display: none;
	
	&:checked { }

  &:checked +${ToggleLabel}::before {
    background: ${get("scheme.white")};
    border-color: ${(0,tidy_core.alpha)(get("elements.border.muted"),.5)};
    animation-name: ${toggle};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
  }

  &:checked +${ToggleLabel}::after {
    transition-delay: 350ms;
    opacity: 1;
    box-shadow: ${(0,tidy_core.alpha)(get("elements.border.muted"),.5)} -13px 0 0 2px, ${(0,tidy_core.alpha)(get("elements.border.muted"),.5)} -24px 14px 0 -2px;
  }
`,ThemeSwitch=({onClick:onClick})=>{const theme=useTheme();if(!theme)throw new Error("ThemeSwitch must be inside a <ThemeProvider> block");const isChecked=(0,react.useMemo)((()=>"dark"===theme.colorScheme),[theme]),handleClick=(0,react.useCallback)((e=>{theme.setColorScheme((prevState=>"light"==prevState?"dark":"light")),null!=onClick&&onClick(e)}),[onClick,theme]);return(0,jsx_runtime.jsxs)(ThemeSwitch_Wrapper,{children:[(0,jsx_runtime.jsx)(ToggleCheckbox,{"aria-label":"theme-toggle",type:"checkbox",id:"theme-toggle",checked:isChecked,onChange:handleClick}),(0,jsx_runtime.jsx)(ToggleLabel,{htmlFor:"theme-toggle"})]})};ThemeSwitch.propTypes={onClick:prop_types_default().func};var Select_Wrapper=styled_components_browser_esm.default.select`
  background-color: ${get("elements.canvas.inset")};
	border-radius: ${get("layout.border.radius.1")};
	color: ${get("elements.foreground.default")};
  border-style: none;
	
	padding: ${get("layout.spacing.1")} ${get("layout.spacing.2")};
`;class Option extends react.Component{static propTypes={id:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)]),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)]).isRequired};render(){return(0,jsx_runtime.jsx)("option",{value:this.props.id||this.props.value,children:this.props.value})}}const Select=({values:values,defaultValue:defaultValue,Option:Option,onToggle:onToggle,...rest})=>{if(0===values.length)return(0,jsx_runtime.jsx)(Select_Wrapper,{onChange:onToggle,children:(0,jsx_runtime.jsx)(Option,{value:"---",...rest})});const content=values.map(((value,idx)=>(0,jsx_runtime.jsx)(Option,{value:value,...rest},idx)));return(0,jsx_runtime.jsx)(Select_Wrapper,{value:defaultValue,onChange:onToggle,children:content})};Select.propTypes={values:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)])).isRequired,defaultValue:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)]).isRequired,Option:prop_types_default().elementType.isRequired,onToggle:prop_types_default().func.isRequired},Select.defaultProps={Option:Option};var LanguageSelect_Wrapper=styled_components_browser_esm.default.div`
  padding: 2px;
`,injectIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js");var LanguageSelect_Option=(0,injectIntl.ZP)((props=>(0,jsx_runtime.jsx)(Option,{id:props.value,value:props.intl.formatMessage(props.messages[props.value])})));const LanguageSelect=({onLocaleToggle:onLocaleToggle,locale:locale,locales:locales,messages:messages})=>(0,jsx_runtime.jsx)(LanguageSelect_Wrapper,{children:(0,jsx_runtime.jsx)(Select,{onToggle:onLocaleToggle,defaultValue:locale,values:locales,Option:LanguageSelect_Option,messages:messages})});LanguageSelect.propTypes={locale:prop_types_default().string.isRequired,locales:prop_types_default().arrayOf(prop_types_default().string).isRequired,messages:prop_types_default().any.isRequired,onLocaleToggle:prop_types_default().func.isRequired};var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),utils=__webpack_require__("./node_modules/react-intl/lib/src/utils.js"),lib_utils=__webpack_require__("./node_modules/@formatjs/ecma402-abstract/lib/utils.js"),core=__webpack_require__("./node_modules/intl-messageformat/lib/src/core.js"),error=__webpack_require__("./node_modules/@formatjs/intl/lib/src/error.js"),lib=__webpack_require__("./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");function setTimeZoneInOptions(opts,timeZone){return Object.keys(opts).reduce((function(all,k){return all[k]=(0,tslib_es6.pi)({timeZone:timeZone},opts[k]),all}),{})}function deepMergeOptions(opts1,opts2){return Object.keys((0,tslib_es6.pi)((0,tslib_es6.pi)({},opts1),opts2)).reduce((function(all,k){return all[k]=(0,tslib_es6.pi)((0,tslib_es6.pi)({},opts1[k]||{}),opts2[k]||{}),all}),{})}function deepMergeFormatsAndSetTimeZone(f1,timeZone){if(!timeZone)return f1;var mfFormats=core.C.formats;return(0,tslib_es6.pi)((0,tslib_es6.pi)((0,tslib_es6.pi)({},mfFormats),f1),{date:deepMergeOptions(setTimeZoneInOptions(mfFormats.date,timeZone),setTimeZoneInOptions(f1.date||{},timeZone)),time:deepMergeOptions(setTimeZoneInOptions(mfFormats.time,timeZone),setTimeZoneInOptions(f1.time||{},timeZone))})}var formatMessage=function(_a,state,messageDescriptor,values,opts){var locale=_a.locale,formats=_a.formats,messages=_a.messages,defaultLocale=_a.defaultLocale,defaultFormats=_a.defaultFormats,fallbackOnEmptyString=_a.fallbackOnEmptyString,onError=_a.onError,timeZone=_a.timeZone,defaultRichTextElements=_a.defaultRichTextElements;void 0===messageDescriptor&&(messageDescriptor={id:""});var msgId=messageDescriptor.id,defaultMessage=messageDescriptor.defaultMessage;(0,lib_utils.kG)(!!msgId,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var id=String(msgId),message=messages&&Object.prototype.hasOwnProperty.call(messages,id)&&messages[id];if(Array.isArray(message)&&1===message.length&&message[0].type===lib.wD.literal)return message[0].value;if(!values&&message&&"string"==typeof message&&!defaultRichTextElements)return message.replace(/'\{(.*?)\}'/gi,"{$1}");if(values=(0,tslib_es6.pi)((0,tslib_es6.pi)({},defaultRichTextElements),values||{}),formats=deepMergeFormatsAndSetTimeZone(formats,timeZone),defaultFormats=deepMergeFormatsAndSetTimeZone(defaultFormats,timeZone),!message){if(!1===fallbackOnEmptyString&&""===message)return message;if((!defaultMessage||locale&&locale.toLowerCase()!==defaultLocale.toLowerCase())&&onError(new error.$6(messageDescriptor,locale)),defaultMessage)try{return state.getMessageFormat(defaultMessage,defaultLocale,defaultFormats,opts).format(values)}catch(e){return onError(new error.X9('Error formatting default message for: "'.concat(id,'", rendering default message verbatim'),locale,messageDescriptor,e)),"string"==typeof defaultMessage?defaultMessage:id}return id}try{return state.getMessageFormat(message,locale,formats,(0,tslib_es6.pi)({formatters:state},opts||{})).format(values)}catch(e){onError(new error.X9('Error formatting message: "'.concat(id,'", using ').concat(defaultMessage?"default message":"id"," as fallback."),locale,messageDescriptor,e))}if(defaultMessage)try{return state.getMessageFormat(defaultMessage,defaultLocale,defaultFormats,opts).format(values)}catch(e){onError(new error.X9('Error formatting the default message for: "'.concat(id,'", rendering message verbatim'),locale,messageDescriptor,e))}return"string"==typeof message?message:"string"==typeof defaultMessage?defaultMessage:id},src_utils=__webpack_require__("./node_modules/@formatjs/intl/lib/src/utils.js"),NUMBER_FORMAT_OPTIONS=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function getFormatter(_a,getNumberFormat,options){var locale=_a.locale,formats=_a.formats,onError=_a.onError;void 0===options&&(options={});var format=options.format,defaults=format&&(0,src_utils.TB)(formats,"number",format,onError)||{};return getNumberFormat(locale,(0,src_utils.L6)(options,NUMBER_FORMAT_OPTIONS,defaults))}function formatNumber(config,getNumberFormat,value,options){void 0===options&&(options={});try{return getFormatter(config,getNumberFormat,options).format(value)}catch(e){config.onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting number.",e))}return String(value)}function formatNumberToParts(config,getNumberFormat,value,options){void 0===options&&(options={});try{return getFormatter(config,getNumberFormat,options).formatToParts(value)}catch(e){config.onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting number.",e))}return[]}var src_error=__webpack_require__("./node_modules/intl-messageformat/lib/src/error.js"),RELATIVE_TIME_FORMAT_OPTIONS=["numeric","style"];function formatRelativeTime(config,getRelativeTimeFormat,value,unit,options){void 0===options&&(options={}),unit||(unit="second"),Intl.RelativeTimeFormat||config.onError(new src_error.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',src_error.jK.MISSING_INTL_API));try{return function relativeTime_getFormatter(_a,getRelativeTimeFormat,options){var locale=_a.locale,formats=_a.formats,onError=_a.onError;void 0===options&&(options={});var format=options.format,defaults=!!format&&(0,src_utils.TB)(formats,"relative",format,onError)||{};return getRelativeTimeFormat(locale,(0,src_utils.L6)(options,RELATIVE_TIME_FORMAT_OPTIONS,defaults))}(config,getRelativeTimeFormat,options).format(value,unit)}catch(e){config.onError(new error.Qe("Error formatting relative time.",config.locale,e))}return String(value)}var DATE_TIME_FORMAT_OPTIONS=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function dateTime_getFormatter(_a,type,getDateTimeFormat,options){var locale=_a.locale,formats=_a.formats,onError=_a.onError,timeZone=_a.timeZone;void 0===options&&(options={});var format=options.format,defaults=(0,tslib_es6.pi)((0,tslib_es6.pi)({},timeZone&&{timeZone:timeZone}),format&&(0,src_utils.TB)(formats,type,format,onError)),filteredOptions=(0,src_utils.L6)(options,DATE_TIME_FORMAT_OPTIONS,defaults);return"time"!==type||filteredOptions.hour||filteredOptions.minute||filteredOptions.second||filteredOptions.timeStyle||filteredOptions.dateStyle||(filteredOptions=(0,tslib_es6.pi)((0,tslib_es6.pi)({},filteredOptions),{hour:"numeric",minute:"numeric"})),getDateTimeFormat(locale,filteredOptions)}function formatDate(config,getDateTimeFormat){for(var _a=[],_i=2;_i<arguments.length;_i++)_a[_i-2]=arguments[_i];var value=_a[0],_b=_a[1],options=void 0===_b?{}:_b,date="string"==typeof value?new Date(value||0):value;try{return dateTime_getFormatter(config,"date",getDateTimeFormat,options).format(date)}catch(e){config.onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting date.",e))}return String(date)}function formatTime(config,getDateTimeFormat){for(var _a=[],_i=2;_i<arguments.length;_i++)_a[_i-2]=arguments[_i];var value=_a[0],_b=_a[1],options=void 0===_b?{}:_b,date="string"==typeof value?new Date(value||0):value;try{return dateTime_getFormatter(config,"time",getDateTimeFormat,options).format(date)}catch(e){config.onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting time.",e))}return String(date)}function formatDateTimeRange(config,getDateTimeFormat){for(var _a=[],_i=2;_i<arguments.length;_i++)_a[_i-2]=arguments[_i];var from=_a[0],to=_a[1],_b=_a[2],options=void 0===_b?{}:_b,timeZone=config.timeZone,locale=config.locale,onError=config.onError,filteredOptions=(0,src_utils.L6)(options,DATE_TIME_FORMAT_OPTIONS,timeZone?{timeZone:timeZone}:{});try{return getDateTimeFormat(locale,filteredOptions).formatRange(from,to)}catch(e){onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting date time range.",e))}return String(from)}function formatDateToParts(config,getDateTimeFormat){for(var _a=[],_i=2;_i<arguments.length;_i++)_a[_i-2]=arguments[_i];var value=_a[0],_b=_a[1],options=void 0===_b?{}:_b,date="string"==typeof value?new Date(value||0):value;try{return dateTime_getFormatter(config,"date",getDateTimeFormat,options).formatToParts(date)}catch(e){config.onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting date.",e))}return[]}function formatTimeToParts(config,getDateTimeFormat){for(var _a=[],_i=2;_i<arguments.length;_i++)_a[_i-2]=arguments[_i];var value=_a[0],_b=_a[1],options=void 0===_b?{}:_b,date="string"==typeof value?new Date(value||0):value;try{return dateTime_getFormatter(config,"time",getDateTimeFormat,options).formatToParts(date)}catch(e){config.onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting time.",e))}return[]}var PLURAL_FORMAT_OPTIONS=["type"];function formatPlural(_a,getPluralRules,value,options){var locale=_a.locale,onError=_a.onError;void 0===options&&(options={}),Intl.PluralRules||onError(new src_error.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',src_error.jK.MISSING_INTL_API));var filteredOptions=(0,src_utils.L6)(options,PLURAL_FORMAT_OPTIONS);try{return getPluralRules(locale,filteredOptions).select(value)}catch(e){onError(new error.Qe("Error formatting plural.",locale,e))}return"other"}var LIST_FORMAT_OPTIONS=["type","style"],now=Date.now();function formatList(opts,getListFormat,values,options){void 0===options&&(options={});var results=formatListToParts(opts,getListFormat,values,options).reduce((function(all,el){var val=el.value;return"string"!=typeof val?all.push(val):"string"==typeof all[all.length-1]?all[all.length-1]+=val:all.push(val),all}),[]);return 1===results.length?results[0]:results}function formatListToParts(_a,getListFormat,values,options){var locale=_a.locale,onError=_a.onError;void 0===options&&(options={}),Intl.ListFormat||onError(new src_error.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',src_error.jK.MISSING_INTL_API));var filteredOptions=(0,src_utils.L6)(options,LIST_FORMAT_OPTIONS);try{var richValues_1={},serializedValues=values.map((function(v,i){if("object"==typeof v){var id=function generateToken(i){return"".concat(now,"_").concat(i,"_").concat(now)}(i);return richValues_1[id]=v,id}return String(v)}));return getListFormat(locale,filteredOptions).formatToParts(serializedValues).map((function(part){return"literal"===part.type?part:(0,tslib_es6.pi)((0,tslib_es6.pi)({},part),{value:richValues_1[part.value]||part.value})}))}catch(e){onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting list.",e))}return values}var DISPLAY_NAMES_OPTONS=["style","type","fallback"];function formatDisplayName(_a,getDisplayNames,value,options){var locale=_a.locale,onError=_a.onError;Intl.DisplayNames||onError(new src_error.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',src_error.jK.MISSING_INTL_API));var filteredOptions=(0,src_utils.L6)(options,DISPLAY_NAMES_OPTONS);try{return getDisplayNames(locale,filteredOptions).of(value)}catch(e){onError(new error.Rw(error.bc.FORMAT_ERROR,"Error formatting display name.",e))}}function verifyConfigMessages(config){config.onWarn&&config.defaultRichTextElements&&function messagesContainString(messages){return"string"==typeof(messages?messages[Object.keys(messages)[0]]:void 0)}(config.messages||{})&&config.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}var formatters=__webpack_require__("./node_modules/intl-messageformat/lib/src/formatters.js");function processIntlConfig(config){return{locale:config.locale,timeZone:config.timeZone,fallbackOnEmptyString:config.fallbackOnEmptyString,formats:config.formats,textComponent:config.textComponent,messages:config.messages,defaultLocale:config.defaultLocale,defaultFormats:config.defaultFormats,onError:config.onError,onWarn:config.onWarn,wrapRichTextChunksInFragment:config.wrapRichTextChunksInFragment,defaultRichTextElements:config.defaultRichTextElements}}function assignUniqueKeysToFormatXMLElementFnArgument(values){return values?Object.keys(values).reduce((function(acc,k){var v=values[k];return acc[k]=(0,formatters.Gt)(v)?(0,utils.dt)(v):v,acc}),{}):values}var provider_formatMessage=function(config,formatters,descriptor,rawValues){for(var rest=[],_i=4;_i<arguments.length;_i++)rest[_i-4]=arguments[_i];var values=assignUniqueKeysToFormatXMLElementFnArgument(rawValues),chunks=formatMessage.apply(void 0,(0,tslib_es6.ev)([config,formatters,descriptor,values],rest,!1));return Array.isArray(chunks)?react.Children.toArray(chunks):chunks},provider_createIntl=function(_a,cache){var rawDefaultRichTextElements=_a.defaultRichTextElements,config=(0,tslib_es6._T)(_a,["defaultRichTextElements"]),defaultRichTextElements=assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements),coreIntl=function createIntl(config,cache){var formatters=(0,src_utils.ax)(cache),resolvedConfig=(0,tslib_es6.pi)((0,tslib_es6.pi)({},src_utils.Z0),config),locale=resolvedConfig.locale,defaultLocale=resolvedConfig.defaultLocale,onError=resolvedConfig.onError;return locale?!Intl.NumberFormat.supportedLocalesOf(locale).length&&onError?onError(new error.gb('Missing locale data for locale: "'.concat(locale,'" in Intl.NumberFormat. Using default locale: "').concat(defaultLocale,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(locale).length&&onError&&onError(new error.gb('Missing locale data for locale: "'.concat(locale,'" in Intl.DateTimeFormat. Using default locale: "').concat(defaultLocale,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(onError&&onError(new error.OV('"locale" was not configured, using "'.concat(defaultLocale,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),resolvedConfig.locale=resolvedConfig.defaultLocale||"en"),verifyConfigMessages(resolvedConfig),(0,tslib_es6.pi)((0,tslib_es6.pi)({},resolvedConfig),{formatters:formatters,formatNumber:formatNumber.bind(null,resolvedConfig,formatters.getNumberFormat),formatNumberToParts:formatNumberToParts.bind(null,resolvedConfig,formatters.getNumberFormat),formatRelativeTime:formatRelativeTime.bind(null,resolvedConfig,formatters.getRelativeTimeFormat),formatDate:formatDate.bind(null,resolvedConfig,formatters.getDateTimeFormat),formatDateToParts:formatDateToParts.bind(null,resolvedConfig,formatters.getDateTimeFormat),formatTime:formatTime.bind(null,resolvedConfig,formatters.getDateTimeFormat),formatDateTimeRange:formatDateTimeRange.bind(null,resolvedConfig,formatters.getDateTimeFormat),formatTimeToParts:formatTimeToParts.bind(null,resolvedConfig,formatters.getDateTimeFormat),formatPlural:formatPlural.bind(null,resolvedConfig,formatters.getPluralRules),formatMessage:formatMessage.bind(null,resolvedConfig,formatters),$t:formatMessage.bind(null,resolvedConfig,formatters),formatList:formatList.bind(null,resolvedConfig,formatters.getListFormat),formatListToParts:formatListToParts.bind(null,resolvedConfig,formatters.getListFormat),formatDisplayName:formatDisplayName.bind(null,resolvedConfig,formatters.getDisplayNames)})}((0,tslib_es6.pi)((0,tslib_es6.pi)((0,tslib_es6.pi)({},utils.Z0),config),{defaultRichTextElements:defaultRichTextElements}),cache),resolvedConfig={locale:coreIntl.locale,timeZone:coreIntl.timeZone,fallbackOnEmptyString:coreIntl.fallbackOnEmptyString,formats:coreIntl.formats,defaultLocale:coreIntl.defaultLocale,defaultFormats:coreIntl.defaultFormats,messages:coreIntl.messages,onError:coreIntl.onError,defaultRichTextElements:defaultRichTextElements};return(0,tslib_es6.pi)((0,tslib_es6.pi)({},coreIntl),{formatMessage:provider_formatMessage.bind(null,resolvedConfig,coreIntl.formatters),$t:provider_formatMessage.bind(null,resolvedConfig,coreIntl.formatters)})},IntlProvider=function(_super){function IntlProvider(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.cache=(0,src_utils.Sn)(),_this.state={cache:_this.cache,intl:provider_createIntl(processIntlConfig(_this.props),_this.cache),prevConfig:processIntlConfig(_this.props)},_this}return(0,tslib_es6.ZT)(IntlProvider,_super),IntlProvider.getDerivedStateFromProps=function(props,_a){var prevConfig=_a.prevConfig,cache=_a.cache,config=processIntlConfig(props);return(0,utils.wU)(prevConfig,config)?null:{intl:provider_createIntl(config,cache),prevConfig:config}},IntlProvider.prototype.render=function(){return(0,utils.lq)(this.state.intl),react.createElement(injectIntl.zt,{value:this.state.intl},this.props.children)},IntlProvider.displayName="IntlProvider",IntlProvider.defaultProps=utils.Z0,IntlProvider}(react.PureComponent),provider=IntlProvider;const LanguageProvider=({locale:locale,messages:messages,children:children})=>(0,jsx_runtime.jsx)(provider,{locale:locale,messages:messages[locale],children:react.Children.only(children)},locale);LanguageProvider.propTypes={locale:prop_types_default().string.isRequired,messages:prop_types_default().object.isRequired,children:prop_types_default().element.isRequired};var _Input_Wrapper=styled_components_browser_esm.default.input`
  width: 100%;

  border-style: none;
  color: ${get("elements.foreground.default")};
	background-color: ${get("elements.canvas.default")};
	
	// This could be adjusted to be a little nicer, maybe even using inherit,
	// but as a default input it will do
	&::placeholder {
    color: ${get("elements.foreground.muted")};
	}
	
	&:disabled {
    color: ${get("elements.foreground.muted")};
    background-color: ${get("elements.canvas.subtle")};
	}

  &:focus {
    outline: none;
  }
`;function reducer(state,action){switch(action.type){case"input":return{...state,isEmpty:!1};case"blur":return{...state,isFocussed:!1};case"focus":return{...state,isFocussed:!0};default:throw new Error("Invalid Action "+action)}}const _Input=(0,react.forwardRef)(((props,ref)=>{const[{isEmpty:isEmpty,isFocussed:isFocussed},dispatch]=(0,react.useReducer)(reducer,{isEmpty:!props.value,isFocussed:!1}),handleInput=(0,react.useCallback)((event=>{null!=props.onInput&&props.onInput(event),dispatch({type:"input"})}),[props.onInput]),handleBlur=(0,react.useCallback)((event=>{null!=props.onBlur&&props.onBlur(event),dispatch({type:"blur"})}),[props.onBlur]),handleFocus=(0,react.useCallback)((event=>{null!=props.onFocus&&props.onFocus(event),dispatch({type:"focus"})}),[props.onFocus]),klass=clsx_m(props.className,props.disabled&&"input--disabled",isFocussed&&"input--focus",isEmpty&&"input--empty");return(0,jsx_runtime.jsx)(_Input_Wrapper,{className:klass,"aria-label":props["aria-label"],type:"text",ref:ref,disabled:props.disabled,placeholder:props.placeholder,autoComplete:"off",onInput:handleInput,onBlur:handleBlur,onFocus:handleFocus,defaultValue:props.value})}));_Input.propTypes={disabled:prop_types_default().bool,onInput:prop_types_default().func,onFocus:prop_types_default().func,onBlur:prop_types_default().func,className:prop_types_default().string,value:prop_types_default().string,placeholder:prop_types_default().string,"aria-label":prop_types_default().string},_Input.defaultProps={disabled:!1,placeholder:"Input..."};var Input_Wrapper=styled_components_browser_esm.default.div`
  position: relative;
  width: 100%;
	
	display: flex;
  align-content: center;
  align-items: center;
	
  height: ${get("layout.spacing.7")};

  color: ${get("elements.foreground.default")};
  background-color: ${get("elements.canvas.inset")};
  border: ${border_style};
	border-radius: ${get("layout.border.radius.2")};
	
	padding: 0 8px;
	
	${_Input_Wrapper} {
		padding: 0 8px 0 8px;
    background-color: inherit;

    font-weight: ${get("typography.fontWeight.medium")};
    line-height: 40px;
	}
	
	&:disabled {
    color: ${get("elements.foreground.muted")};
    background-color: ${get("elements.canvas.subtle")};
	}
`;const right=styled_components_browser_esm.css`
  padding-left: 8px;
`,left=styled_components_browser_esm.css`
  padding-right: 8px;
`,IconContainer=styled_components_browser_esm.default.button`
	// Have to align is this way compared to how it was before
  display: ${({hide:hide})=>hide?"none":"flex"};
  align-items: center;
	
  cursor: pointer;
  height: ${get("layout.spacing.6")};
  
  // Pin it to the side
	${({side:side})=>"left"===side?left:right};
  
  color: ${get("elements.foreground.default")};
	background-color: inherit;
	border-style: none;
  border-radius: 10px;
  
  & > svg {
    width: ${get("layout.spacing.3")};
    height: ${get("layout.spacing.3")};
  }
	
	&:disabled {
		cursor: default;
	}

  &:enabled > svg:hover {
    color: ${get("elements.levels.active.foreground")};
  }

  &:disabled > svg {
    cursor: default;
    color: ${get("elements.foreground.muted")};
  }
`,components_Listener=styled_components_browser_esm.default.kbd`
	// Have to align is this way compared to how it was before
  display: ${({hide:hide})=>hide?"none":"flex"};
  align-items: center;
	
	padding: 2px;
	
	// For all larger screens make it slightly chunkier
	${function media(breakpoint){return`@media (min-width: ${breakpoints[breakpoint]})`}("small")} {
		padding: 4px;
	}
  
	// These can change
  color: ${get("elements.foreground.default")};
	background-color: ${get("elements.canvas.overlay")};
	border: ${border_style};
  border-radius: ${border_default}
//# sourceMappingURL=873.020a986b.iframe.bundle.js.map