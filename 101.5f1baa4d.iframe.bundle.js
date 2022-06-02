/*! For license information please see 101.5f1baa4d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksearch_ui=self.webpackChunksearch_ui||[]).push([[101],{"./node_modules/@advtr/tidy-core/dist/js/colors.js":function(module,exports,__webpack_require__){const color=__webpack_require__("./node_modules/color2k/dist/index.exports.require.cjs.js"),get=__webpack_require__("./node_modules/lodash.get/index.js"),logger=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/logger.js"),{colorWrapper:colorWrapper}=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/utils.js"),{ExpressionError:ExpressionError,resolve:resolve}=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/expression.js"),thisArg=Object.freeze({self:"generated-expression",logger:logger,resolve:resolve});exports.alpha=module.exports.alpha=function evaluate(...args){return context=>colorWrapper.call(this,"transparentize",args,context)}.bind(thisArg),exports.darken=module.exports.darken=function evaluate(...args){return context=>colorWrapper.call(this,"darken",args,context)}.bind(thisArg),exports.desaturate=module.exports.desaturate=function evaluate(...args){return context=>colorWrapper.call(this,"desaturate",args,context)}.bind(thisArg),exports.get=module.exports.get=function evaluate(...args){return context=>{const[path,...rest]=args;if(!path)throw new ExpressionError("Missing path",this,[...args],context);return this.logger.verbose("looking up object with path - `%s`",path),rest.length>0&&this.logger.notice("extraneous arguments passed - %s",rest),get(context,path)}}.bind(thisArg),exports.lighten=module.exports.lighten=function evaluate(...args){return context=>colorWrapper.call(this,"desaturate",args,context)}.bind(thisArg),exports.mix=module.exports.mix=function evaluate(...args){return context=>{const[value,mit,amount=.5,...rest]=args;if(!value||!mit)throw new ExpressionError("Missing color value",this,[...args],context);rest.length>0&&this.logger.notice("extraneous arguments passed - %s",rest);try{const v=this.resolve(value)(context),m=this.resolve(mit)(context);return this.logger.verbose("mixing `%s` with %s by %s",v,m,amount),color.mix(v,m,amount).replace(/ /g,"")}catch(err){throw new ExpressionError(err.module,this,[...args],context)}}}.bind(thisArg)},"./node_modules/@advtr/tidy-core/dist/js/dark.theme.js":function(module,__unused_webpack_exports,__webpack_require__){const mixin=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/mixin.js");module.exports={scheme:{black:"#010409",white:"#ffffff",gray:["#f0f6fc","#c9d1d9","#b1bac4","#8b949e","#6e7681","#484f58","#30363d","#21262d","#161b22","#0d1117"],red:["#ffdcd7","#ffc1ba","#ffa198","#ff7b72","#f85149","#da3633","#b62324","#8e1519","#67060c","#490202"],green:["#aff5b4","#7ee787","#56d364","#3fb950","#2ea043","#238636","#196c2e","#0f5323","#033a16","#04260f"],blue:["#cae8ff","#a5d6ff","#79c0ff","#58a6ff","#388bfd","#1f6feb","#1158c7","#0d419d","#0c2d6b","#051d4d"],yellow:["#f8e3a1","#f2cc60","#e3b341","#d29922","#bb8009","#9e6a03","#845306","#693e00","#4b2900","#341a00"],orange:["#ffdfb6","#ffc680","#ffa657","#f0883e","#db6d28","#bd561d","#9b4215","#762d0a","#5a1e02","#3d1300"],purple:["#eddeff","#e2c5ff","#d2a8ff","#bc8cff","#a371f7","#8957e5","#6e40c9","#553098","#3c1e70","#271052"],pink:["#ffdaec","#ffbedd","#ff9bce","#f778ba","#db61a2","#bf4b8a","#9e3670","#7d2457","#5e103e","#42062a"],coral:["#FFDDD2","#FFC2B2","#FFA28B","#F78166","#EA6045","#CF462D","#AC3220","#872012","#640D04","#460701"]},elements:{foreground:{default:"#c9d1d9",muted:"#8b949e",subtle:"#6e7681",inverse:"#ffffff"},canvas:{default:"#0d1117",overlay:"#161b22",inset:"#010409",subtle:"#161b22"},inverseCanvas:{default:"#6e7681",muted:"rgba(110,118,129,0.6)",subtle:"rgba(110,118,129,0.9)"},border:{default:"#30363d",muted:"#21262d",subtle:"rgba(240,246,252,0.9)"},shadow:{small:"0 0 transparent",medium:"0 3px 6px #010409",large:"0 8px 24px #010409",extraLarge:"0 12px 48px #010409"},levels:{active:{foreground:"#58a6ff",canvas:{emphasis:"#1f6feb",muted:"rgba(56,139,253,0.6)",subtle:"rgba(56,139,253,0.85)"}},success:{foreground:"#3fb950",canvas:{emphasis:"#238636",muted:"rgba(46,160,67,0.6)",subtle:"rgba(46,160,67,0.85)"}},warning:{foreground:"#db6d28",canvas:{emphasis:"#bd561d",muted:"rgba(219,109,40,0.6)",subtle:"rgba(219,109,40,0.85)"}},error:{foreground:"#f85149",canvas:{emphasis:"#da3633",muted:"rgba(248,81,73,0.6)",subtle:"rgba(248,81,73,0.85)"}}}},layout:{spacing:["0px","4px","8px","16px","24px","32px","40px","48px","64px","96px","112px","128px"],border:{radius:["0px","4px","6px","8px","50%"]}},typography:{fontFamily:{...mixin.typography.fontFamily},fontSize:["12px","14px","16px","20px","24px","32px","40px","48px"],lineHeight:{...mixin.typography.lineHeight},fontWeight:{...mixin.typography.fontWeight}}}},"./node_modules/@advtr/tidy-core/dist/js/expression.js":function(module){const weakContextMap=new WeakMap([]);function HiddenProxy(ctx){weakContextMap.set(this,ctx),this.keys=Object.keys(ctx),this.keys.forEach((key=>{Object.defineProperty(this,key,{get(){return weakContextMap.get(this)[key]}})}))}const resolve=value=>context=>"function"==typeof value?resolve(value(context))(context):value;class ExpressionError extends Error{constructor(message,exp,args,ctx={}){super(message),this.expression=exp,this.args=args,this.context=new HiddenProxy(ctx)}}module.exports={ExpressionError:ExpressionError,resolve:resolve}},"./node_modules/@advtr/tidy-core/dist/js/light.theme.js":function(module,__unused_webpack_exports,__webpack_require__){const mixin=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/mixin.js");module.exports={scheme:{black:"#1b1f24",white:"#ffffff",gray:["#f6f8fa","#eaeef2","#d0d7de","#afb8c1","#8c959f","#6e7781","#57606a","#424a53","#32383f","#24292f"],red:["#FFEBE9","#ffcecb","#ffaba8","#ff8182","#fa4549","#cf222e","#a40e26","#82071e","#660018","#4c0014"],green:["#dafbe1","#aceebb","#6fdd8b","#4ac26b","#2da44e","#1a7f37","#116329","#044f1e","#003d16","#002d11"],blue:["#ddf4ff","#b6e3ff","#80ccff","#54aeff","#218bff","#0969da","#0550ae","#033d8b","#0a3069","#002155"],yellow:["#fff8c5","#fae17d","#eac54f","#d4a72c","#bf8700","#9a6700","#7d4e00","#633c01","#4d2d00","#3b2300"],orange:["#fff1e5","#ffd8b5","#ffb77c","#fb8f44","#e16f24","#bc4c00","#953800","#762c00","#5c2200","#471700"],purple:["#fbefff","#ecd8ff","#d8b9ff","#c297ff","#a475f9","#8250df","#6639ba","#512a97","#3e1f79","#2e1461"],pink:["#ffeff7","#ffd3eb","#ffadda","#ff80c8","#e85aad","#bf3989","#99286e","#772057","#611347","#4d0336"],coral:["#FFF0EB","#FFD6CC","#FFB4A1","#FD8C73","#EC6547","#C4432B","#9E2F1C","#801F0F","#691105","#510901"]},elements:{foreground:{default:"#24292f",muted:"#57606a",subtle:"#6e7781",inverse:"#ffffff"},canvas:{default:"#ffffff",overlay:"#ffffff",inset:"#f6f8fa",subtle:"#f6f8fa"},inverseCanvas:{default:"#6e7781",muted:"rgba(175,184,193,0.8)",subtle:"rgba(234,238,242,0.5)"},border:{default:"#d0d7de",muted:"hsla(210,15%,84%,1)",subtle:"rgba(27,31,36,0.85)"},shadow:{small:"0 1px 0 rgba(27,31,36,0.96)",medium:"0 3px 6px rgba(140,149,159,0.85)",large:"0 8px 24px rgba(140,149,159,0.8)",extraLarge:"0 12px 48px rgba(140,149,159,0.7)"},levels:{active:{foreground:"#0969da",canvas:{emphasis:"#0969da",muted:"rgba(84,174,255,0.6)",subtle:"#ddf4ff"}},success:{foreground:"#1a7f37",canvas:{emphasis:"#2da44e",muted:"rgba(74,194,107,0.6)",subtle:"#dafbe1"}},warning:{foreground:"#bc4c00",canvas:{emphasis:"#bc4c00",muted:"rgba(251,143,68,0.6)",subtle:"#fff1e5"}},error:{foreground:"#cf222e",canvas:{emphasis:"#cf222e",muted:"rgba(255,129,130,0.6)",subtle:"#FFEBE9"}}}},layout:{spacing:["0px","4px","8px","16px","24px","32px","40px","48px","64px","96px","112px","128px"],border:{radius:["0px","4px","6px","8px","50%"]}},typography:{fontFamily:{...mixin.typography.fontFamily},fontSize:["12px","14px","16px","20px","24px","32px","40px","48px"],lineHeight:{...mixin.typography.lineHeight},fontWeight:{...mixin.typography.fontWeight}}}},"./node_modules/@advtr/tidy-core/dist/js/logger.js":function(module,exports,__webpack_require__){var process=__webpack_require__("./node_modules/process/browser.js");const log=level=>(...args)=>process.emit("log",level,...args);for(const level of["silly","verbose","info","warn","error","notice"])exports[level]=module.exports[level]=log(level)},"./node_modules/@advtr/tidy-core/dist/js/mixin.js":function(module){const defaultSpacing=8,spacing=[...[0,defaultSpacing/2,defaultSpacing,2*defaultSpacing,3*defaultSpacing,4*defaultSpacing,5*defaultSpacing,6*defaultSpacing].map((el=>`${el}px`)),...[8*defaultSpacing,12*defaultSpacing,14*defaultSpacing,16*defaultSpacing].map((el=>`${el}px`))],border={};border.radius=["0px","4px","6px","8px","50%"];const layout={spacing:spacing,border:border},typography={fontFamily:{body:["-apple-system","BlinkMacSystemFont","Segoe UI","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji"].join(", "),mono:["ui-monospace","SFMono-Regular","SF Mono","Menlo","Consolas","Liberation Mono","monospace"].join(", ")},fontSize:["12px","14px","16px","20px","24px","32px","40px","48px"],lineHeight:{condensedUltra:1,condensed:1.25,default:1.5},fontWeight:{thin:100,extraLight:200,light:300,regular:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900,extraBlack:950}};module.exports={layout:layout,typography:typography}},"./node_modules/@advtr/tidy-core/dist/js/utils.js":function(module,__unused_webpack_exports,__webpack_require__){const color=__webpack_require__("./node_modules/color2k/dist/index.exports.require.cjs.js"),{ExpressionError:ExpressionError}=__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/expression.js");module.exports={colorWrapper:function colorWrapper(method,args,context){if(obj=color,property=method,!Object.prototype.hasOwnProperty.call(obj,property))throw new Error(`color2k does not contain method - '${method}'`);var obj,property;const[value,amount=1,...rest]=args;if(!value)throw new ExpressionError("Missing color value",this,[...args],context);rest.length>0&&this.logger.notice("extraneous arguments passed - %s",rest);try{const v=this.resolve(value)(context);return this.logger.verbose("%s `%s` by %s",method,v,amount),color[method](v,amount).replace(/ /g,"")}catch(err){throw new ExpressionError(err.message,this,[...args],context)}}}},"./node_modules/@advtr/tidy-core/index.js":function(module,__unused_webpack_exports,__webpack_require__){const themes={dark:__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/dark.theme.js"),light:__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/light.theme.js")};module.exports={...__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/colors.js"),mixin:__webpack_require__("./node_modules/@advtr/tidy-core/dist/js/mixin.js"),themes:themes}},"./node_modules/@advtr/tidy/dist/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{GlobalStyle:function(){return GlobalStyle_GlobalStyle},LanguageProvider:function(){return LanguageProvider},LanguageSelect:function(){return LanguageSelect},ThemeProvider:function(){return ThemeProvider_ThemeProvider},ThemeSwitch:function(){return ThemeSwitch},get:function(){return get}});var tidy_core=__webpack_require__("./node_modules/@advtr/tidy-core/index.js");const get=path=>Array.isArray(path)?(0,tidy_core.get)(["theme",...path]):(0,tidy_core.get)("theme."+path);var react=__webpack_require__("./node_modules/react/index.js");const ThemeContext=react.createContext({setColorScheme:()=>{}});function useTheme(){const ctx=react.useContext(ThemeContext);return ctx||console.warn("Missing context"),ctx}var lodash_kebabcase=__webpack_require__("./node_modules/lodash.kebabcase/index.js"),lodash_kebabcase_default=__webpack_require__.n(lodash_kebabcase),dist=__webpack_require__("./node_modules/styled-normalize/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const resolve=fn=>ctx=>"function"==typeof fn?fn(ctx):fn,breakpoints={small:"544px",medium:"768px",large:"1012px",extraLarge:"1280px"},headers={...{"h00-mobile":get("typography.fontSize.6"),"h0-mobile":get("typography.fontSize.5"),"h1-mobile":"26px","h2-mobile":"22px","h3-mobile":"18px"},h000:"64px",h00:get("typography.fontSize.7"),h0:get("typography.fontSize.6"),h1:get("typography.fontSize.5"),h2:get("typography.fontSize.4"),h3:get("typography.fontSize.3"),h4:get("typography.fontSize.2"),h5:get("typography.fontSize.1"),h6:get("typography.fontSize.0")},BP=(get("layout.border.radius.1"),get("layout.border.radius.4"),Object.entries(breakpoints).map((([key,value])=>((key,value)=>styled_components_browser_esm.css`
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
    font-size: ${get("typography.fontSize.0")};
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
`;var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemeProvider_ThemeProvider=({children:children,...props})=>{const{theme:fallbackTheme,colorScheme:fallbackColorScheme}=useTheme()||{},[colorScheme,setColorScheme]=(0,react.useState)(props.colorScheme??fallbackColorScheme??"light"),systemColorScheme=function useSystemColorScheme(){const[systemColorMode,setSystemColorMode]=react.useState(getSystemColorScheme);return react.useEffect((()=>{const media=window?.matchMedia?.("(prefers-color-scheme: dark)");function handleChange(event){const isDark=event.matches;setSystemColorMode(isDark?"dark":"light")}if(media){if(void 0!==media.addEventListener)return media.addEventListener("change",handleChange),function cleanup(){media.removeEventListener("change",handleChange)};if(void 0!==media.addListener)return media.addListener(handleChange),function cleanup(){media.removeListener(handleChange)}}}),[]),systemColorMode}(),resolvedColorScheme="auto"===colorScheme?systemColorScheme:colorScheme,resolvedTheme=props.theme??fallbackTheme??tidy_core.themes[resolvedColorScheme];return(0,react.useEffect)((()=>{setColorScheme(props.colorScheme??"light")}),[props.colorScheme]),(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:{theme:resolvedTheme,colorScheme:resolvedColorScheme,setColorScheme:setColorScheme},children:(0,jsx_runtime.jsx)(styled_components_browser_esm.ThemeProvider,{theme:resolvedTheme,children:children})})};function getSystemColorScheme(){return"undefined"!=typeof window&&window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}ThemeProvider_ThemeProvider.propTypes={theme:prop_types_default().object,colorScheme:prop_types_default().oneOf(["auto","dark","light"]),children:prop_types_default().element.isRequired};function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function clsx_m(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}styled_components_browser_esm.default.div``;prop_types_default().oneOf(["sm","md","lg","xl"]).isRequired,prop_types_default().element.isRequired;var Header_Wrapper=styled_components_browser_esm.default.div``;function conditionalPropType(condition,message){if("function"!=typeof condition)throw"Wrong argument type 'condition' supplied to 'conditionalPropType'";return function(props,propName,componentName){if(condition(props,propName,componentName))return new Error(`Invalid prop '${propName}' '${props[propName]}' supplied to '${componentName}'. ${message}`)}}const Header_elements=["h1","h2","h3","h4","h5","h6","div"],createClassName=props=>clsx_m("div"===props.as?"h1":props.as,props.className),Header=props=>{const attribute=(0,react.useMemo)((()=>{return level=props.as,Header_elements.includes(level)&&level||"div";var level}),[props.as]),body=(0,react.useMemo)((()=>props.children&&props.children||props.title||"Header"),[props]);return(0,jsx_runtime.jsx)(Header_Wrapper,{as:attribute,className:createClassName(props),children:body})};Header.propTypes={as:prop_types_default().oneOf(["h1","h2","h3","h4","h5","h6","div","h0","h00","h000"]).isRequired,className:prop_types_default().string,title:conditionalPropType((props=>"string"!=typeof props.title||"function"!=typeof props.children),"Requires either title or children"),children:conditionalPropType((props=>"string"!=typeof props.title||"function"!=typeof props.children),"Requires either title or children")},Header.defaultProps={as:"h1"};var ThemeSwitch_Wrapper=styled_components_browser_esm.default.div`
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
`,ThemeSwitch=({onClick:onClick})=>{const theme=useTheme();if(!theme)throw new Error("ThemeSwitch must be inside a <ThemeProvider> block");const isChecked=(0,react.useMemo)((()=>"dark"===theme.colorScheme),[theme]),handleClick=(0,react.useCallback)((e=>{theme.setColorScheme((prevState=>"light"==prevState?"dark":"light")),onClick&&onClick(e)}),[onClick,theme]);return(0,jsx_runtime.jsxs)(ThemeSwitch_Wrapper,{children:[(0,jsx_runtime.jsx)(ToggleCheckbox,{"aria-label":"theme-toggle",type:"checkbox",id:"theme-toggle",checked:isChecked,onChange:handleClick}),(0,jsx_runtime.jsx)(ToggleLabel,{htmlFor:"theme-toggle"})]})};ThemeSwitch.propTypes={onClick:prop_types_default().func};var Select_Wrapper=styled_components_browser_esm.default.select`
  background-color: ${get("elements.canvas.inset")};
	border-radius: ${get("layout.border.radius.1")};
	color: ${get("elements.foreground.default")};
  border-style: none;
	
	padding: ${get("layout.spacing.1")} ${get("layout.spacing.2")};
`;class Option extends react.Component{static propTypes={id:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)]),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)]).isRequired};render(){return(0,jsx_runtime.jsx)("option",{value:this.props.id||this.props.value,children:this.props.value})}}const Select=({values:values,defaultValue:defaultValue,Option:Option,onToggle:onToggle,...rest})=>{if(0===values.length)return(0,jsx_runtime.jsx)(Select_Wrapper,{onChange:onToggle,children:(0,jsx_runtime.jsx)(Option,{value:"---",...rest})});const content=values.map(((value,idx)=>(0,jsx_runtime.jsx)(Option,{value:value,...rest},idx)));return(0,jsx_runtime.jsx)(Select_Wrapper,{value:defaultValue,onChange:onToggle,children:content})};Select.propTypes={values:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)])).isRequired,defaultValue:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().arrayOf(prop_types_default().string)]).isRequired,Option:prop_types_default().elementType.isRequired,onToggle:prop_types_default().func.isRequired},Select.defaultProps={Option:Option};var LanguageSelect_Wrapper=styled_components_browser_esm.default.div`
  padding: 2px;
//# sourceMappingURL=101.5f1baa4d.iframe.bundle.js.map