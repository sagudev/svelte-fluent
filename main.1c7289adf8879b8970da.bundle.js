(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{299:function(module,exports,__webpack_require__){__webpack_require__(300),__webpack_require__(447),__webpack_require__(448),__webpack_require__(632),__webpack_require__(644),module.exports=__webpack_require__(647)},30:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return generateBundles}));__webpack_require__(21),__webpack_require__(69),__webpack_require__(77),__webpack_require__(651),__webpack_require__(26),__webpack_require__(116);var _fluent_bundle__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(88),_fluent_langneg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(297),_marked=regeneratorRuntime.mark(generateBundles);function _createForOfIteratorHelper(o,allowArrayLike){var it;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e3){didErr=!0,err=_e3},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function generateBundles(resourceData,defaultLocale,locale){var resources,currentLocales,_iterator,_step,_locale,bundle;return regeneratorRuntime.wrap((function generateBundles$(_context){for(;;)switch(_context.prev=_context.next){case 0:resources=Object.fromEntries(Object.entries(resourceData).map((function(_ref){var _ref2=_slicedToArray(_ref,2),k=_ref2[0],data=_ref2[1];return[k,new _fluent_bundle__WEBPACK_IMPORTED_MODULE_6__.c(data)]}))),currentLocales=Object(_fluent_langneg__WEBPACK_IMPORTED_MODULE_7__.a)([locale],Object.keys(resources),{defaultLocale:defaultLocale}),_iterator=_createForOfIteratorHelper(currentLocales),_context.prev=3,_iterator.s();case 5:if((_step=_iterator.n()).done){_context.next=13;break}return _locale=_step.value,(bundle=new _fluent_bundle__WEBPACK_IMPORTED_MODULE_6__.a(_locale)).addResource(resources[_locale]),_context.next=11,bundle;case 11:_context.next=5;break;case 13:_context.next=18;break;case 15:_context.prev=15,_context.t0=_context.catch(3),_iterator.e(_context.t0);case 18:return _context.prev=18,_iterator.f(),_context.finish(18);case 21:case"end":return _context.stop()}}),_marked,null,[[3,15,18,21]])}},365:function(module,exports){},448:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(238)},647:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(238).configure)([__webpack_require__(648)],module,!1)}).call(this,__webpack_require__(82)(module))},648:function(module,exports,__webpack_require__){var map={"./localized/Localized.stories.js":665,"./overlay/Overlay.stories.js":666};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=648},665:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Localized_stories_Simple})),__webpack_require__.d(__webpack_exports__,"Variables",(function(){return Localized_stories_Variables})),__webpack_require__.d(__webpack_exports__,"Currency",(function(){return Localized_stories_Currency})),__webpack_require__.d(__webpack_exports__,"Attributes",(function(){return Localized_stories_Attributes})),__webpack_require__.d(__webpack_exports__,"AttributesWithArgs",(function(){return Localized_stories_AttributesWithArgs}));var internal=__webpack_require__(0),src=__webpack_require__(9),utils=__webpack_require__(30);function create_default_slot(ctx){let localized,current;return localized=new src.b({props:{id:"hello"}}),{c(){Object(internal.create_component)(localized.$$.fragment)},m(target,anchor){Object(internal.mount_component)(localized,target,anchor),current=!0},p:internal.noop,i(local){current||(Object(internal.transition_in)(localized.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(localized.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(localized,detaching)}}}function create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[0],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};4&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function instance($$self,$$props,$$invalidate){let{locale:locale}=$$props;const bundles=Object(utils.a)({de:"hello = Hallo Welt!",en:"hello = Hello, world!",fr:"hello = Salut le monde !",pl:"hello = Witaj świecie!"},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(1,locale=$$props.locale)},[bundles,locale]}class Simple_svelte_Simple extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,instance,create_fragment,internal.safe_not_equal,{locale:1})}}var Simple_svelte=Simple_svelte_Simple;function Variables_svelte_create_default_slot(ctx){let localized,current;return localized=new src.b({props:{id:"emails",args:{unreadEmails:ctx[0]}}}),{c(){Object(internal.create_component)(localized.$$.fragment)},m(target,anchor){Object(internal.mount_component)(localized,target,anchor),current=!0},p(ctx,dirty){const localized_changes={};1&dirty&&(localized_changes.args={unreadEmails:ctx[0]}),localized.$set(localized_changes)},i(local){current||(Object(internal.transition_in)(localized.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(localized.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(localized,detaching)}}}function Variables_svelte_create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[1],$$slots:{default:[Variables_svelte_create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};9&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function Variables_svelte_instance($$self,$$props,$$invalidate){let{locale:locale}=$$props,{unreadEmails:unreadEmails=0}=$$props;const bundles=Object(utils.a)({de:"\nemails =\n  { $unreadEmails ->\n    [one] Du hast eine ungelesene E-Mail.\n    *[other] Du hast { $unreadEmails } ungelesene E-Mails.\n  }\n",en:"\nemails =\n  { $unreadEmails ->\n    [one] You have one unread email.\n    *[other] You have { $unreadEmails } unread emails.\n  }\n"},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(2,locale=$$props.locale),"unreadEmails"in $$props&&$$invalidate(0,unreadEmails=$$props.unreadEmails)},[unreadEmails,bundles,locale]}class Variables_svelte_Variables extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,Variables_svelte_instance,Variables_svelte_create_fragment,internal.safe_not_equal,{locale:2,unreadEmails:0})}}var Variables_svelte=Variables_svelte_Variables,esm=__webpack_require__(88);function Currency_svelte_create_default_slot(ctx){let localized,current;return localized=new src.b({props:{id:"current-balance",args:{balance:new esm.b(ctx[0],{style:"currency",currency:"EUR"})}}}),{c(){Object(internal.create_component)(localized.$$.fragment)},m(target,anchor){Object(internal.mount_component)(localized,target,anchor),current=!0},p(ctx,dirty){const localized_changes={};1&dirty&&(localized_changes.args={balance:new esm.b(ctx[0],{style:"currency",currency:"EUR"})}),localized.$set(localized_changes)},i(local){current||(Object(internal.transition_in)(localized.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(localized.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(localized,detaching)}}}function Currency_svelte_create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[1],$$slots:{default:[Currency_svelte_create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};9&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function Currency_svelte_instance($$self,$$props,$$invalidate){let{locale:locale}=$$props,{balance:balance=1}=$$props;const bundles=Object(utils.a)({de:'current-balance = Ihr Kontostand beträgt { NUMBER($balance, currencyDisplay: "code", useGrouping: "false") }',en:'current-balance = Your account balance is { NUMBER($balance, currencyDisplay: "code", useGrouping: "false") }'},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(2,locale=$$props.locale),"balance"in $$props&&$$invalidate(0,balance=$$props.balance)},[balance,bundles,locale]}class Currency_svelte_Currency extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,Currency_svelte_instance,Currency_svelte_create_fragment,internal.safe_not_equal,{locale:2,balance:0})}}var Currency_svelte=Currency_svelte_Currency;function create_default_slot_1(ctx){let t0,t1,button0,t2,t3,button1,t4,mounted,dispose,t0_value=ctx[4]+"",t2_value=ctx[5].ok+"",t4_value=ctx[5].cancel+"";return{c(){t0=Object(internal.text)(t0_value),t1=Object(internal.space)(),button0=Object(internal.element)("button"),t2=Object(internal.text)(t2_value),t3=Object(internal.space)(),button1=Object(internal.element)("button"),t4=Object(internal.text)(t4_value)},m(target,anchor){Object(internal.insert)(target,t0,anchor),Object(internal.insert)(target,t1,anchor),Object(internal.insert)(target,button0,anchor),Object(internal.append)(button0,t2),Object(internal.insert)(target,t3,anchor),Object(internal.insert)(target,button1,anchor),Object(internal.append)(button1,t4),mounted||(dispose=[Object(internal.listen)(button0,"click",ctx[2]),Object(internal.listen)(button1,"click",ctx[3])],mounted=!0)},p(ctx,dirty){16&dirty&&t0_value!==(t0_value=ctx[4]+"")&&Object(internal.set_data)(t0,t0_value),32&dirty&&t2_value!==(t2_value=ctx[5].ok+"")&&Object(internal.set_data)(t2,t2_value),32&dirty&&t4_value!==(t4_value=ctx[5].cancel+"")&&Object(internal.set_data)(t4,t4_value)},d(detaching){detaching&&Object(internal.detach)(t0),detaching&&Object(internal.detach)(t1),detaching&&Object(internal.detach)(button0),detaching&&Object(internal.detach)(t3),detaching&&Object(internal.detach)(button1),mounted=!1,Object(internal.run_all)(dispose)}}}function Attributes_svelte_create_default_slot(ctx){let localized,current;return localized=new src.b({props:{id:"confirm",$$slots:{default:[create_default_slot_1,({text:text,attrs:attrs})=>({4:text,5:attrs}),({text:text,attrs:attrs})=>(text?16:0)|(attrs?32:0)]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(localized.$$.fragment)},m(target,anchor){Object(internal.mount_component)(localized,target,anchor),current=!0},p(ctx,dirty){const localized_changes={};112&dirty&&(localized_changes.$$scope={dirty:dirty,ctx:ctx}),localized.$set(localized_changes)},i(local){current||(Object(internal.transition_in)(localized.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(localized.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(localized,detaching)}}}function Attributes_svelte_create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[0],$$slots:{default:[Attributes_svelte_create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};64&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function Attributes_svelte_instance($$self,$$props,$$invalidate){let{locale:locale}=$$props;const bundles=Object(utils.a)({de:"\nconfirm = Möchten Sie alle Ihre E-Mails löschen?\n  .ok     = Ja\n  .cancel = Nein\n",en:"\nconfirm = Do you want to delete all your emails?\n  .ok     = Yes\n  .cancel = No\n"},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(1,locale=$$props.locale)},[bundles,locale,()=>alert("OK clicked"),()=>alert("Cancel clicked")]}class Attributes_svelte_Attributes extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,Attributes_svelte_instance,Attributes_svelte_create_fragment,internal.safe_not_equal,{locale:1})}}var Attributes_svelte=Attributes_svelte_Attributes;function AttributesWithArgs_svelte_create_default_slot_1(ctx){let t0,t1,button0,t2,t3,button1,t4,mounted,dispose,t0_value=ctx[4]+"",t2_value=ctx[5].ok+"",t4_value=ctx[5].cancel+"";return{c(){t0=Object(internal.text)(t0_value),t1=Object(internal.space)(),button0=Object(internal.element)("button"),t2=Object(internal.text)(t2_value),t3=Object(internal.space)(),button1=Object(internal.element)("button"),t4=Object(internal.text)(t4_value)},m(target,anchor){Object(internal.insert)(target,t0,anchor),Object(internal.insert)(target,t1,anchor),Object(internal.insert)(target,button0,anchor),Object(internal.append)(button0,t2),Object(internal.insert)(target,t3,anchor),Object(internal.insert)(target,button1,anchor),Object(internal.append)(button1,t4),mounted||(dispose=[Object(internal.listen)(button0,"click",ctx[2]),Object(internal.listen)(button1,"click",ctx[3])],mounted=!0)},p(ctx,dirty){16&dirty&&t0_value!==(t0_value=ctx[4]+"")&&Object(internal.set_data)(t0,t0_value),32&dirty&&t2_value!==(t2_value=ctx[5].ok+"")&&Object(internal.set_data)(t2,t2_value),32&dirty&&t4_value!==(t4_value=ctx[5].cancel+"")&&Object(internal.set_data)(t4,t4_value)},d(detaching){detaching&&Object(internal.detach)(t0),detaching&&Object(internal.detach)(t1),detaching&&Object(internal.detach)(button0),detaching&&Object(internal.detach)(t3),detaching&&Object(internal.detach)(button1),mounted=!1,Object(internal.run_all)(dispose)}}}function AttributesWithArgs_svelte_create_default_slot(ctx){let localized,current;return localized=new src.b({props:{id:"confirm",args:{count:1e4},$$slots:{default:[AttributesWithArgs_svelte_create_default_slot_1,({text:text,attrs:attrs})=>({4:text,5:attrs}),({text:text,attrs:attrs})=>(text?16:0)|(attrs?32:0)]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(localized.$$.fragment)},m(target,anchor){Object(internal.mount_component)(localized,target,anchor),current=!0},p(ctx,dirty){const localized_changes={};112&dirty&&(localized_changes.$$scope={dirty:dirty,ctx:ctx}),localized.$set(localized_changes)},i(local){current||(Object(internal.transition_in)(localized.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(localized.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(localized,detaching)}}}function AttributesWithArgs_svelte_create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[0],$$slots:{default:[AttributesWithArgs_svelte_create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};64&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function AttributesWithArgs_svelte_instance($$self,$$props,$$invalidate){let{locale:locale}=$$props;const bundles=Object(utils.a)({de:"\nconfirm = Möchten Sie alle Ihre E-Mails löschen?\n  .ok     = Ja, alle { $count } E-Mails löschen\n  .cancel = Nein\n",en:"\nconfirm = Do you want to delete all your emails?\n  .ok     = Yes, delete all { $count } emails\n  .cancel = No\n"},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(1,locale=$$props.locale)},[bundles,locale,()=>alert("OK clicked"),()=>alert("Cancel clicked")]}class AttributesWithArgs_svelte_AttributesWithArgs extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,AttributesWithArgs_svelte_instance,AttributesWithArgs_svelte_create_fragment,internal.safe_not_equal,{locale:1})}}var AttributesWithArgs_svelte=AttributesWithArgs_svelte_AttributesWithArgs,dist=__webpack_require__(31),Localized_stories_Simple=(__webpack_exports__.default={title:"Localized",decorators:[dist.withKnobs]},function Simple(){return{Component:Simple_svelte,props:{locale:Object(dist.select)("Locale",["de","en","fr","pl"],"en")}}}),Localized_stories_Variables=function Variables(){return{Component:Variables_svelte,props:{locale:Object(dist.select)("Locale",["de","en"],"en"),unreadEmails:Object(dist.number)("Unread emails",1,{range:!0,min:1})}}},Localized_stories_Currency=function Currency(){return{Component:Currency_svelte,props:{locale:Object(dist.select)("Locale",["de","en"],"en"),balance:Object(dist.number)("Account balance",24.99,{min:1})}}},Localized_stories_Attributes=function Attributes(){return{Component:Attributes_svelte,props:{locale:Object(dist.select)("Locale",["de","en"],"en")}}},Localized_stories_AttributesWithArgs=function AttributesWithArgs(){return{Component:AttributesWithArgs_svelte,props:{locale:Object(dist.select)("Locale",["de","en"],"en")}}}},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Overlay_stories_Simple})),__webpack_require__.d(__webpack_exports__,"Variables",(function(){return Overlay_stories_Variables}));var internal=__webpack_require__(0),src=__webpack_require__(9),utils=__webpack_require__(30);function create_default_slot_1(ctx){let a;return{c(){a=Object(internal.element)("a"),Object(internal.attr)(a,"data-l10n-name","link"),Object(internal.attr)(a,"href","https://example.com/")},m(target,anchor){Object(internal.insert)(target,a,anchor)},d(detaching){detaching&&Object(internal.detach)(a)}}}function create_default_slot(ctx){let overlay,current;return overlay=new src.c({props:{id:"info",$$slots:{default:[create_default_slot_1]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(overlay.$$.fragment)},m(target,anchor){Object(internal.mount_component)(overlay,target,anchor),current=!0},p(ctx,dirty){const overlay_changes={};4&dirty&&(overlay_changes.$$scope={dirty:dirty,ctx:ctx}),overlay.$set(overlay_changes)},i(local){current||(Object(internal.transition_in)(overlay.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(overlay.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(overlay,detaching)}}}function create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[0],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};4&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function instance($$self,$$props,$$invalidate){let{locale:locale}=$$props;const bundles=Object(utils.a)({de:'info = Weitere Informationen finden Sie in der <a data-l10n-name="link">Dokumentation</a>.',en:'info = Read the <a data-l10n-name="link">documentation</a> for more information.'},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(1,locale=$$props.locale)},[bundles,locale]}class Simple_svelte_Simple extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,instance,create_fragment,internal.safe_not_equal,{locale:1})}}var Simple_svelte=Simple_svelte_Simple;function Variables_svelte_create_default_slot_1(ctx){let a;return{c(){a=Object(internal.element)("a"),Object(internal.attr)(a,"data-l10n-name","release-notes"),Object(internal.attr)(a,"href","https://example.com/"),Object(internal.attr)(a,"target","_blank")},m(target,anchor){Object(internal.insert)(target,a,anchor)},d(detaching){detaching&&Object(internal.detach)(a)}}}function Variables_svelte_create_default_slot(ctx){let overlay,current;return overlay=new src.c({props:{id:"download-info",args:{productName:ctx[0]},$$slots:{default:[Variables_svelte_create_default_slot_1]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(overlay.$$.fragment)},m(target,anchor){Object(internal.mount_component)(overlay,target,anchor),current=!0},p(ctx,dirty){const overlay_changes={};1&dirty&&(overlay_changes.args={productName:ctx[0]}),8&dirty&&(overlay_changes.$$scope={dirty:dirty,ctx:ctx}),overlay.$set(overlay_changes)},i(local){current||(Object(internal.transition_in)(overlay.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(overlay.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(overlay,detaching)}}}function Variables_svelte_create_fragment(ctx){let fluentprovider,current;return fluentprovider=new src.a({props:{bundles:ctx[1],$$slots:{default:[Variables_svelte_create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.create_component)(fluentprovider.$$.fragment)},m(target,anchor){Object(internal.mount_component)(fluentprovider,target,anchor),current=!0},p(ctx,[dirty]){const fluentprovider_changes={};9&dirty&&(fluentprovider_changes.$$scope={dirty:dirty,ctx:ctx}),fluentprovider.$set(fluentprovider_changes)},i(local){current||(Object(internal.transition_in)(fluentprovider.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(fluentprovider.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(fluentprovider,detaching)}}}function Variables_svelte_instance($$self,$$props,$$invalidate){let{locale:locale}=$$props,{productName:productName}=$$props;const bundles=Object(utils.a)({de:"\ndownload-info =\n  Sie können { $productName } herunterladen, indem Sie auf die\n  Schaltfläche Download klicken, oder lesen Sie die\n  <a data-l10n-name='release-notes'>Versionshinweise</a>, um mehr zu erfahren.\n",en:"\ndownload-info =\n  You can download { $productName } by clicking\n  on the <strong>Download</strong> button or read\n  the <a data-l10n-name='release-notes'>release notes</a> to learn more.\n"},"en",locale);return $$self.$$set=$$props=>{"locale"in $$props&&$$invalidate(2,locale=$$props.locale),"productName"in $$props&&$$invalidate(0,productName=$$props.productName)},[productName,bundles,locale]}class Variables_svelte_Variables extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,Variables_svelte_instance,Variables_svelte_create_fragment,internal.safe_not_equal,{locale:2,productName:0})}}var Variables_svelte=Variables_svelte_Variables,dist=__webpack_require__(31),Overlay_stories_Simple=(__webpack_exports__.default={title:"Overlay",decorators:[dist.withKnobs]},function Simple(){return{Component:Simple_svelte,props:{locale:Object(dist.select)("Locale",["de","en"],"en")}}}),Overlay_stories_Variables=function Variables(){return{Component:Variables_svelte,props:{locale:Object(dist.select)("Locale",["de","en"],"en"),productName:Object(dist.text)("Product name","Example Product")}}}},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return src_Overlay})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Localized_svelte})),__webpack_require__.d(__webpack_exports__,"a",(function(){return FluentProvider_svelte}));__webpack_require__(18),__webpack_require__(649),__webpack_require__(15),__webpack_require__(650),__webpack_require__(27);var store=__webpack_require__(114),internal=__webpack_require__(0),svelte=__webpack_require__(115),src=__webpack_require__(198),esm=__webpack_require__(298);function create_fragment(ctx){let current;const default_slot_template=ctx[2].default,default_slot=Object(internal.create_slot)(default_slot_template,ctx,ctx[1],null);return{c(){default_slot&&default_slot.c()},m(target,anchor){default_slot&&default_slot.m(target,anchor),current=!0},p(ctx,[dirty]){default_slot&&default_slot.p&&2&dirty&&Object(internal.update_slot)(default_slot,default_slot_template,ctx,ctx[1],dirty,null,null)},i(local){current||(Object(internal.transition_in)(default_slot,local),current=!0)},o(local){Object(internal.transition_out)(default_slot,local),current=!1},d(detaching){default_slot&&default_slot.d(detaching)}}}const CONTEXT_KEY={};function stores(){const ctx=Object(svelte.a)(CONTEXT_KEY);if(!ctx)return console.error("<FluentProvider/> was not found in component hierarchy."),{getBundle:Object(store.b)(id=>null)};const{bundles:bundles}=ctx;return{getBundle:Object(store.a)(bundles,$bundles=>id=>Object(esm.a)($bundles,id))}}function instance($$self,$$props,$$invalidate){let{$$slots:slots={},$$scope:$$scope}=$$props,{bundles:bundles=[]}=$$props;const{subscribe:subscribe,set:set}=Object(store.c)(src.a.from(bundles));return Object(svelte.c)(CONTEXT_KEY,{bundles:{subscribe:subscribe}}),$$self.$$set=$$props=>{"bundles"in $$props&&$$invalidate(0,bundles=$$props.bundles),"$$scope"in $$props&&$$invalidate(1,$$scope=$$props.$$scope)},$$self.$$.update=()=>{1&$$self.$$.dirty&&set(src.a.from(bundles))},[bundles,$$scope,slots]}class FluentProvider_svelte_FluentProvider extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,instance,create_fragment,internal.safe_not_equal,{bundles:0})}}var FluentProvider_svelte=FluentProvider_svelte_FluentProvider,overlay=__webpack_require__(295);function Overlay_svelte_create_fragment(ctx){let span,current;const default_slot_template=ctx[5].default,default_slot=Object(internal.create_slot)(default_slot_template,ctx,ctx[4],null);return{c(){span=Object(internal.element)("span"),default_slot&&default_slot.c()},m(target,anchor){Object(internal.insert)(target,span,anchor),default_slot&&default_slot.m(span,null),ctx[6](span),current=!0},p(ctx,[dirty]){default_slot&&default_slot.p&&16&dirty&&Object(internal.update_slot)(default_slot,default_slot_template,ctx,ctx[4],dirty,null,null)},i(local){current||(Object(internal.transition_in)(default_slot,local),current=!0)},o(local){Object(internal.transition_out)(default_slot,local),current=!1},d(detaching){detaching&&Object(internal.detach)(span),default_slot&&default_slot.d(detaching),ctx[6](null)}}}function Overlay_svelte_instance($$self,$$props,$$invalidate){let $getBundle,bundle,msg,translation,root,translatedRoot,{$$slots:slots={},$$scope:$$scope}=$$props,{id:id}=$$props,{args:args=null}=$$props;const{getBundle:getBundle}=stores();function update(translation,id,args){if(translation&&root&&translatedRoot){const newRoot=root.cloneNode(!0);Object(overlay.a)(newRoot,translation),translatedRoot.parentNode.replaceChild(newRoot,translatedRoot),translatedRoot=newRoot}}return Object(internal.component_subscribe)($$self,getBundle,value=>$$invalidate(11,$getBundle=value)),Object(svelte.b)(()=>{const observer=new MutationObserver(()=>{update(translation)});return root&&translation&&(translatedRoot=root.cloneNode(!0),Object(overlay.a)(translatedRoot,translation),root.parentNode.replaceChild(translatedRoot,root),observer.observe(root,{attributes:!0,characterData:!0,childList:!0,subtree:!0})),()=>{observer.disconnect(),translatedRoot&&translatedRoot.parentNode.replaceChild(root,translatedRoot)}}),$$self.$$set=$$props=>{"id"in $$props&&$$invalidate(2,id=$$props.id),"args"in $$props&&$$invalidate(3,args=$$props.args),"$$scope"in $$props&&$$invalidate(4,$$scope=$$props.$$scope)},$$self.$$.update=()=>{2052&$$self.$$.dirty&&$$invalidate(7,bundle=id?$getBundle(id):null),132&$$self.$$.dirty&&$$invalidate(8,msg=bundle?bundle.getMessage(id):null),392&$$self.$$.dirty&&$$invalidate(9,translation=msg?function getTranslation(bundle,msg,args){return bundle&&msg?{value:bundle.formatPattern(msg.value,args)}:null}(bundle,msg,args):null),524&$$self.$$.dirty&&update(translation)},[root,getBundle,id,args,$$scope,slots,function span_binding($$value){internal.binding_callbacks[$$value?"unshift":"push"](()=>{root=$$value,$$invalidate(0,root)})}]}class Overlay_svelte_Overlay extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,Overlay_svelte_instance,Overlay_svelte_create_fragment,internal.safe_not_equal,{id:2,args:3})}}var src_Overlay=Overlay_svelte_Overlay;const get_default_slot_changes=dirty=>({text:1&dirty,attrs:2&dirty}),get_default_slot_context=ctx=>({text:ctx[0],attrs:ctx[1]});function Localized_svelte_create_fragment(ctx){let current;const default_slot_template=ctx[6].default,default_slot=Object(internal.create_slot)(default_slot_template,ctx,ctx[5],get_default_slot_context),default_slot_or_fallback=default_slot||function fallback_block(ctx){let t;return{c(){t=Object(internal.text)(ctx[0])},m(target,anchor){Object(internal.insert)(target,t,anchor)},p(ctx,dirty){1&dirty&&Object(internal.set_data)(t,ctx[0])},d(detaching){detaching&&Object(internal.detach)(t)}}}(ctx);return{c(){default_slot_or_fallback&&default_slot_or_fallback.c()},m(target,anchor){default_slot_or_fallback&&default_slot_or_fallback.m(target,anchor),current=!0},p(ctx,[dirty]){default_slot?default_slot.p&&35&dirty&&Object(internal.update_slot)(default_slot,default_slot_template,ctx,ctx[5],dirty,get_default_slot_changes,get_default_slot_context):default_slot_or_fallback&&default_slot_or_fallback.p&&1&dirty&&default_slot_or_fallback.p(ctx,dirty)},i(local){current||(Object(internal.transition_in)(default_slot_or_fallback,local),current=!0)},o(local){Object(internal.transition_out)(default_slot_or_fallback,local),current=!1},d(detaching){default_slot_or_fallback&&default_slot_or_fallback.d(detaching)}}}function Localized_svelte_instance($$self,$$props,$$invalidate){let $getBundle,bundle,msg,{$$slots:slots={},$$scope:$$scope}=$$props,{id:id}=$$props,{args:args=null}=$$props,text="";const{getBundle:getBundle}=stores();let attrs;return Object(internal.component_subscribe)($$self,getBundle,value=>$$invalidate(9,$getBundle=value)),$$self.$$set=$$props=>{"id"in $$props&&$$invalidate(3,id=$$props.id),"args"in $$props&&$$invalidate(4,args=$$props.args),"$$scope"in $$props&&$$invalidate(5,$$scope=$$props.$$scope)},$$self.$$.update=()=>{520&$$self.$$.dirty&&$$invalidate(7,bundle=id?$getBundle(id):null),136&$$self.$$.dirty&&$$invalidate(8,msg=bundle?bundle.getMessage(id):null),400&$$self.$$.dirty&&$$invalidate(0,text=msg?bundle.formatPattern(msg.value,args):""),400&$$self.$$.dirty&&$$invalidate(1,attrs=msg&&msg.attributes?Object.fromEntries(Object.entries(msg.attributes||{}).map(([name,pattern])=>[name,bundle.formatPattern(pattern,args)])):null),8&$$self.$$.dirty&&(id||console.error("missing id prop in <Localized/>"))},[text,attrs,getBundle,id,args,$$scope,slots]}class Localized_svelte_Localized extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,Localized_svelte_instance,Localized_svelte_create_fragment,internal.safe_not_equal,{id:3,args:4})}}var Localized_svelte=Localized_svelte_Localized}},[[299,1,2]]]);
//# sourceMappingURL=main.1c7289adf8879b8970da.bundle.js.map