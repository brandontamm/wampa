"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();!function(t){var i=function(){function i(e,s){_classCallCheck(this,i),this.$element=e,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),Foundation.registerPlugin(this,"Orbit"),Foundation.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}return _createClass(i,[{key:"_init",value:function(){this._reset(),this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var t=this.$element.find("img"),i=this.$slides.filter(".is-active"),e=this.$element[0].id||Foundation.GetYoDigits(6,"orbit");this.$element.attr({"data-resize":e,id:e}),i.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Foundation.onImagesLoaded(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.$slides.length>1&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")}},{key:"geoSync",value:function(){var t=this;this.timer=new Foundation.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function(){this._setWrapperHeight()}},{key:"_setWrapperHeight",value:function(i){var e,s=0,n=0,o=this;this.$slides.each(function(){e=this.getBoundingClientRect().height,t(this).attr("data-slide",n),o.$slides.filter(".is-active")[0]!==o.$slides.eq(n)[0]&&t(this).css({position:"relative",display:"none"}),s=e>s?e:s,n++}),n===this.$slides.length&&(this.$wrapper.css({height:s}),i&&i(s))}},{key:"_setSlideHeight",value:function(i){this.$slides.each(function(){t(this).css("max-height",i)})}},{key:"_events",value:function(){var i=this;if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),this.$slides.length>1){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons){var e=this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass);e.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(e){e.preventDefault(),i.changeSlide(t(this).hasClass(i.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var e=t(this).data("slide"),s=e>i.$slides.filter(".is-active").data("slide"),n=i.$slides.eq(e);i.changeSlide(s,n,e)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(e){Foundation.Keyboard.handleKey(e,"Orbit",{next:function(){i.changeSlide(!0)},previous:function(){i.changeSlide(!1)},handled:function(){t(e.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}},{key:"_reset",value:function(){"undefined"!=typeof this.$slides&&this.$slides.length>1&&(this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),this.options.autoPlay&&this.timer.restart(),this.$slides.each(function(i){t(i).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),this.$slides.first().addClass("is-active").show(),this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),this.options.bullets&&this._updateBullets(0))}},{key:"changeSlide",value:function(t,i,e){if(this.$slides){var s=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(s[0].className))return!1;var n,o=this.$slides.first(),a=this.$slides.last(),l=t?"Right":"Left",r=t?"Left":"Right",h=this;n=i?i:t?this.options.infiniteWrap?s.next("."+this.options.slideClass).length?s.next("."+this.options.slideClass):o:s.next("."+this.options.slideClass):this.options.infiniteWrap?s.prev("."+this.options.slideClass).length?s.prev("."+this.options.slideClass):a:s.prev("."+this.options.slideClass),n.length&&(this.$element.trigger("beforeslidechange.zf.orbit",[s,n]),this.options.bullets&&(e=e||this.$slides.index(n),this._updateBullets(e)),this.options.useMUI&&!this.$element.is(":hidden")?(Foundation.Motion.animateIn(n.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+l],function(){n.css({position:"relative",display:"block"}).attr("aria-live","polite")}),Foundation.Motion.animateOut(s.removeClass("is-active"),this.options["animOutTo"+r],function(){s.removeAttr("aria-live"),h.options.autoPlay&&!h.timer.isPaused&&h.timer.restart()})):(s.removeClass("is-active is-in").removeAttr("aria-live").hide(),n.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[n]))}}},{key:"_updateBullets",value:function(t){var i=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),e=i.find("span:last").detach();this.$bullets.eq(t).addClass("is-active").append(e)}},{key:"destroy",value:function(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),Foundation.unregisterPlugin(this)}}]),i}();i.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0},Foundation.plugin(i,"Orbit")}(jQuery);