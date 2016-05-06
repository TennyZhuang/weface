"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),WECHAT_FACE_MAP=new Map([["/::)","1"],["/::~","2"],["/::B","3"],["/::|","4"],["/:8-)","5"],["/::<","6"],["/::$","7"],["/::X","8"],["/::Z","9"],["/::'(","10"],["/::-|","11"],["/::@","12"],["/::P","13"],["/::D","14"],["/::O","15"],["/::(","16"],["/::+","17"],["/:--b","18"],["/::Q","19"],["/::T","20"],["/:,@P","21"],["/:,@-D","22"],["/::d","23"],["/:,@o","24"],["/::g","25"],["/:|-)","26"],["/::!","27"],["/::L","28"],["/::>","29"],["/::,@","30"],["/:,@f","31"],["/::-S","32"],["/:?","33"],["/:,@x","34"],["/:,@@","35"],["/::8","36"],["/:,@!","37"],["/:!!!","38"],["/:xx","39"],["/:bye","40"],["/:wipe","41"],["/:dig","42"],["/:handclap","43"],["/:&-(","44"],["/:B-)","45"],["/:<@","46"],["/:@>","47"],["/::-O","48"],["/:>-|","49"],["/:P-(","50"],["/::'|","51"],["/:X-)","52"],["/::*","53"],["/:@x","54"],["/:8*","55"],["/:pd","56"],["/:<W>","57"],["/:beer","58"],["/:basketb","59"],["/:oo","60"],["/:coffee","61"],["/:eat","62"],["/:pig","63"],["/:rose","64"],["/:fade","65"],["/:showlove","66"],["/:heart","67"],["/:break","68"],["/:cake","69"],["/:li","70"],["/:bome","71"],["/:kn","72"],["/:footb","73"],["/:ladybug","74"],["/:shit","75"],["/:moon","76"],["/:sun","77"],["/:gift","78"],["/:hug","79"],["/:strong","80"],["/:weak","81"],["/:share","82"],["/:v","83"],["/:@)","84"],["/:jj","85"],["/:@@","86"],["/:bad","87"],["/:lvu","88"],["/:no","89"],["/:ok","90"],["/:love","91"],["/:<L>","92"],["/:jump","93"],["/:shake","94"],["/:<O>","95"],["/:circle","96"],["/:kotow","97"],["/:turn","98"],["/:skip","99"],["/:oY","100"],["/:#-0","101"],["/:hiphot","102"],["/:kiss","103"],["/:<&","104"],["/:&>","105"]]),ENTITY_MAP=new Map([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"],["/","&#x2F;"]]),ESCAPED_WECHAT_FACE_MAP=new Map(Array.from(WECHAT_FACE_MAP).map(function(e){return[e[0].replace(/[&<>"'\/]/g,function(e){return ENTITY_MAP.get(e)}),e[1]]})),Weface=function(){function e(a){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];_classCallCheck(this,e),this.base=a,this.faceMap=t?ESCAPED_WECHAT_FACE_MAP:WECHAT_FACE_MAP}return _createClass(e,[{key:"compile",value:function(e){var a=this;return this.faceMap.forEach(function(t,n){e=e.replace(n,'<img class="wechatface" style="width: 1em; height: 1em;" src="'+a.base+t+'.png" alt="'+n+'"></img>')}),e}}]),e}();window.Weface=Weface;
//# sourceMappingURL=weface.js.map
