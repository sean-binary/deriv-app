(window.webpackJsonp=window.webpackJsonp||[]).push([["account-signup-modal"],{659:function(e,t,n){"use strict";var r=n(21),o=n(6),a=n.n(o),i=n(0),c=n(7),s=n(4);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.class_prefix,n=void 0===t?"set-residence":t,o=e.children,a=e.header_text,u=e.errors,p=e.touched,d=e.setFieldTouched,f=e.setFieldValue,b=e.residence_list;return i.createElement("div",{className:"".concat(n,"__residence-selection")},!!a&&i.createElement("p",{className:"".concat(n,"__heading")},a),i.createElement("p",{className:"".concat(n,"__").concat(a?"text":"heading")},Object(s.localize)("Where do you live?")),i.createElement(r.a,{name:"residence"},(function(e){var t=e.field;return i.createElement(i.Fragment,null,i.createElement(c.DesktopWrapper,null,i.createElement(c.Autocomplete,l({},t,{autoComplete:"off",className:"".concat(n,"__residence-field"),dropdown_offset:"3.2rem",type:"text",label:Object(s.localize)("Choose country"),error:p.residence&&u.residence,required:!0,list_items:b,onItemSelection:function(e){var t=e.value,n=e.text;return f("residence",t?n:"",!0)}}))),i.createElement(c.MobileWrapper,null,i.createElement(c.SelectNative,{placeholder:Object(s.localize)("Please select"),label:Object(s.localize)("Choose country"),value:t.value,list_items:b,error:p.residence&&u.residence,required:!0,use_text:!0,onChange:function(e){d("residence",!0),f("residence",e.target.value,!0)}})))})),o)};u.propTypes={children:a.a.node,class_prefix:a.a.string,header_text:a.a.string,residence_list:a.a.arrayOf(a.a.object)},t.a=u},702:function(e,t,n){},715:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(10),o=n.n(r),a=n(21),i=n(6),c=n.n(i),s=n(0),l=n(7),u=n(4),p=n(11),d=n(92),f=n(55),b=n(659);n(702);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x={password:"",residence:""},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,e);var t,n,r,i=j(c);function c(){var e;w(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).state={has_valid_residence:!1,pw_input:""},e.updatePassword=function(t){e.setState({pw_input:t})},e.onResidenceSelection=function(){e.setState({has_valid_residence:!0})},e.onSignupComplete=function(t){if(e.props.isModalVisible(!1),e.props.enableApp(),t)throw Error(t)},e}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.onSignup,r=t.residence_list;return s.createElement("div",{className:"account-signup"},s.createElement(a.c,{initialValues:x,validate:function(e){return function(e,t){var n={};if(e.password&&(e.password.length<6||!Object(d.d)(e.password))&&(n.password=!0),e.residence){var r=t.findIndex((function(t){return t.text.toLowerCase()===e.residence.toLowerCase()}));-1!==r&&"DISABLED"!==t[r].disabled||(n.residence=Object(u.localize)("Unfortunately, {{website_name}} is not available in your country.",{website_name:f.website_name}))}else n.residence=!0;return n}(e,r)},onSubmit:function(t){var o=r.findIndex((function(e){return e.text.toLowerCase()===t.residence.toLowerCase()})),a=y(y({},t),{},{residence:r[o].value});n(a,e.onSignupComplete)}},(function(t){var n=t.isSubmitting,i=t.handleBlur,c=t.errors,p=t.handleChange,d=t.values,f=t.setFieldValue,_=t.setFieldTouched,m=t.touched;return s.createElement(a.b,null,s.createElement(s.Fragment,null,e.state.has_valid_residence?s.createElement("div",{className:"account-signup__password-selection"},s.createElement("p",{className:"account-signup__heading"},s.createElement(u.Localize,{i18n_default_text:"Keep your account secure with a password"})),s.createElement(a.a,{name:"password"},(function(t){var n=t.field;return s.createElement(l.PasswordMeter,{input:e.state.pw_input,has_error:!(!m.password||!c.password)},s.createElement(l.PasswordInput,g({},n,{className:"account-signup__password-field",label:Object(u.localize)("Create a password"),error:m.password&&c.password,required:!0,value:d.password,onBlur:i,onChange:function(t){var n=t.target;_("password",!0),n&&e.updatePassword(n.value),p(t)}})))})),s.createElement("p",{className:"account-signup__subtext"},s.createElement(u.Localize,{i18n_default_text:"Strong passwords contain at least 6 characters, combine uppercase and lowercase letters, numbers, and symbols."})),s.createElement(l.Button,{className:o()("account-signup__btn",{"account-signup__btn--disabled":!d.password||c.password||n}),type:"submit",is_disabled:!d.password||!!c.password||n,text:Object(u.localize)("Start trading"),primary:!0})):s.createElement(b.a,{header_text:Object(u.localize)("Thanks for verifying your email"),class_prefix:"account-signup",errors:c,touched:m,setFieldTouched:_,setFieldValue:f,residence_list:r},s.createElement(l.Button,{className:o()("account-signup__btn",{"account-signup__btn--disabled":!d.residence||c.residence}),type:"button",is_disabled:!d.residence||!!c.residence,onClick:e.onResidenceSelection,primary:!0,text:Object(u.localize)("Next")}))))})))}}])&&h(t.prototype,n),r&&h(t,r),c}(s.Component);P.propTypes={onSignup:c.a.func,residence_list:c.a.array};var A=function(e){var t=e.enableApp,n=e.disableApp,r=e.is_loading,o=e.is_visible,a=e.is_logged_in,i=e.logout,c=e.onSignup,u=e.residence_list,p=e.toggleAccountSignupModal;return s.useEffect((function(){o&&a&&i()}),[o,a,i]),s.createElement(l.Dialog,{is_visible:o,disableApp:n,enableApp:t,is_loading:r||!u.length,is_mobile_full_width:!1,is_content_centered:!0},s.createElement(P,{onSignup:c,residence_list:u,isModalVisible:p,enableApp:t}))};A.propTypes={disableApp:c.a.func,enableApp:c.a.func,is_loading:c.a.bool,is_visible:c.a.bool,onSignup:c.a.func,residence_list:c.a.arrayOf(c.a.object)};var C=Object(p.b)((function(e){var t=e.ui,n=e.client;return{is_visible:t.is_account_signup_modal_visible,toggleAccountSignupModal:t.toggleAccountSignupModal,enableApp:t.enableApp,disableApp:t.disableApp,is_loading:t.is_loading,onSignup:n.onSignup,is_logged_in:n.is_logged_in,residence_list:n.residence_list,logout:n.logout}}))(A)}}]);
//# sourceMappingURL=core.account-signup-modal.ff9d494bb44bc758f537.js.map