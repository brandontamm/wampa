"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();!function(t){function i(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}var e=function(){function e(i,s){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),s),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(e,[{key:"_init",value:function(){var i=this.$element.parent("[data-sticky-container]"),e=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),s=this;i.length||(this.wasWrapped=!0),this.$container=i.length?i:t(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":e}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,t(window).one("load.zf.sticky",function(){s.containerHeight="none"==s.$element.css("display")?0:s.$element[0].getBoundingClientRect().height,s.$container.css("height",s.containerHeight),s.elemHeight=s.containerHeight,""!==s.options.anchor?s.$anchor=t("#"+s.options.anchor):s._parsePoints(),s._setSizes(function(){var t=window.pageYOffset;s._calc(!1,t),s.isStuck||s._removeSticky(!(t>=s.topPoint))}),s._events(e.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var i=""==this.options.topAnchor?1:this.options.topAnchor,e=""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor,s=[i,e],n={},o=0,c=s.length;o<c&&s[o];o++){var a;if("number"==typeof s[o])a=s[o];else{var h=s[o].split(":"),r=t("#"+h[0]);a=r.offset().top,h[1]&&"bottom"===h[1].toLowerCase()&&(a+=r[0].getBoundingClientRect().height)}n[o]=a}this.points=n}},{key:"_events",value:function(i){var e=this,s=this.scrollListener="scroll.zf."+i;this.isOn||(this.canStick&&(this.isOn=!0,t(window).off(s).on(s,function(t){0===e.scrollCount?(e.scrollCount=e.options.checkEvery,e._setSizes(function(){e._calc(!1,window.pageYOffset)})):(e.scrollCount--,e._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,n){e._setSizes(function(){e._calc(!1),e.canStick?e.isOn||e._events(i):e.isOn&&e._pauseListeners(s)})}))}},{key:"_pauseListeners",value:function(i){this.isOn=!1,t(window).off(i),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,i){return t&&this._setSizes(),this.canStick?(i||(i=window.pageYOffset),void(i>=this.topPoint?i<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)}},{key:"_setSticky",value:function(){var t=this,i=this.options.stickTo,e="top"===i?"marginTop":"marginBottom",s="top"===i?"bottom":"top",n={};n[e]=this.options[e]+"em",n[i]=0,n[s]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+s).addClass("is-stuck is-at-"+i).css(n).trigger("sticky.zf.stuckto:"+i),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}},{key:"_removeSticky",value:function(t){var i=this.options.stickTo,e="top"===i,s={},n=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,o=e?"marginTop":"marginBottom",c=t?"top":"bottom";s[o]=0,s.bottom="auto",t?s.top=0:s.top=n,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+i).addClass("is-anchored is-at-"+c).css(s).trigger("sticky.zf.unstuckfrom:"+c)}},{key:"_setSizes",value:function(t){this.canStick=Foundation.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var i=this.$container[0].getBoundingClientRect().width,e=window.getComputedStyle(this.$container[0]),s=parseInt(e["padding-left"],10),n=parseInt(e["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":i-s-n+"px"});var o=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(o=0),this.containerHeight=o,this.$container.css({height:o}),this.elemHeight=o,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var c=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",c)}this._setBreakPoints(o,function(){t&&"function"==typeof t&&t()})}},{key:"_setBreakPoints",value:function(t,e){if(!this.canStick){if(!e||"function"!=typeof e)return!1;e()}var s=i(this.options.marginTop),n=i(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,c=this.points?this.points[1]:o+this.anchorHeight,a=window.innerHeight;"top"===this.options.stickTo?(o-=s,c-=t+s):"bottom"===this.options.stickTo&&(o-=a-(t+n),c-=a-n),this.topPoint=o,this.bottomPoint=c,e&&"function"==typeof e&&e()}},{key:"destroy",value:function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),t(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(e,"Sticky")}(jQuery);