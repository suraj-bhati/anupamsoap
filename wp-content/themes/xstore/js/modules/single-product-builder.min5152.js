!function(d){"use strict";etTheme.autoinit.singleProductBuilder=etTheme.singleProductBuilder=function(){var t,e,o,i=etConfig.woocommerceSettings.single_product_autoscroll_tabs_mobile&&etTheme.et_global.w_width<992,s=d(".elementor-location-single").length;function a(t){let e=d(t).parent(),o=e.attr("aria-controls");e.hasClass("active")?(e.removeClass("active"),e.parent().parent().find("#"+o).slideToggle(300)):(e.parent().parent().find(".et-woocommerce-tab").removeClass("active"),e.parent().parent().find(".wc-tab").slideUp(300),e.addClass("active"),e.parent().parent().find("#"+o).slideDown(350),i&&setTimeout(function(){d("html, body").animate({scrollTop:e.parent().parent().find("#"+o).offset().top-100},1e3)},500),d(document).trigger("etheme_single_product_builder_tabs_changed"))}function c(t){var t=d(t).parent(),e=t.attr("aria-controls");t.hasClass(".active")||(t.parent().find(".et-woocommerce-tab").removeClass("active"),t.parent().parent().find(".wc-tab").hide(),t.addClass("active"),t.parent().parent().find("#"+e).show(),d(document).trigger("etheme_single_product_builder_tabs_changed"))}function n(l,t=!1){var e;!l||etTheme.et_global.w_width<=992||d(l+"[data-sticky]").length&&(e=function(n=!1){var r="<style>";d.each(d(l+"[data-sticky]"),function(){var t,e,o=d(this).data("settings")??"",i="",s=d(this).data("sticky"),a=d("."+s)[0],c=d(a).offset().top+d(a).outerHeight(!0);o?((i=o).sticky_to_block_offset=c,i.height=d(this).outerHeight(!0),d(".sticky-background-for-"+d(this).data("key")).css({height:i.height})):(t=d(this).outerWidth(!0)-.5,e=d(a).outerHeight(!0)-d(a).outerHeight(),(a=(d(this).offset().top==d(a).offset().top||d(this).offset().top+e==d(a).offset().top)&&d(this).outerHeight(!0)<d(a).outerHeight(!0))&&!n&&d(this).after('<div class="sticky-background sticky-background-for-'+d(this).data("key")+'" style="width:'+t+"px; height: "+d(this).outerHeight(!0)+'px"></div>'),i={top:d(this).offset().top,left:d(this).offset().left,height:d(this).outerHeight(!0),startY:d(this).data("start"),sticky_to_block_offset:c,sticky_to_block_fix_offset:e,makeSticky:a}),d(this).attr("data-settings",JSON.stringify(i)),o||n||(r+=".sticky-block."+d(this).data("key")+l+"[data-sticky="+s+"] {--max-width: "+t+"px;--offset-left:"+d(this).offset().left+"px;}")}),r+="</style>",n||d("body").append(r),d(window).on("scroll",function(){var t=0,a=(d(".header-wrapper .sticky-on").length&&d.each(d(".header-wrapper .sticky-on"),function(){t+=d(this).outerHeight()}),t);d.each(d(l+"[data-sticky]"),function(){var t,e,o,i,s=JSON.parse(d(this).attr("data-settings"));s.makeSticky&&(t=s.top,s.left,e=s.height,o=parseInt(s.startY)+parseInt(a),i=s.sticky_to_block_offset,s=parseInt(s.sticky_to_block_fix_offset),d(window).scrollTop()+o>t?(d(this).addClass("sticky-block pos-fixed"),d(this).css("top",o)):d(window).scrollTop()+o<=t&&(d(this).removeClass("pos-fixed"),d(this).css("top",""),d(this).removeClass("sticky-block")),d(window).scrollTop()+o>t)&&d(this).offset().top+e+s>i&&(d(this).addClass("sticky-block"),d(this).css("top",-(d(this).offset().top+e-o+s-i)))})})},t?e():setTimeout(function(){e()},300))}e=d(".woocommerce-tabs"),o="toggle",d(e).hasClass("type-accordion")&&(o="slide"),d(e).hasClass("closed-first-tab")||(t=(t=e.find(".et-woocommerce-tab").first()).find("> a"),"slide"==o?setTimeout(function(){a(t)},0):setTimeout(function(){c(t)},300)),d(".et-woocommerce-tab > a").on("click",function(t){t.preventDefault(),("slide"==o?a:c)(this,e)}),setTimeout(function(){d(e).addClass("loaded"),d(window).trigger("resize")},300),d(e).hasClass("opened-all-tabs")&&setTimeout(function(){e.find(".et-woocommerce-tab").addClass("active"),e.find(".wc-tab").slideDown(300)},100),s||(n(".et_product-block"),d(document).on("variable_product_found_variation etheme_single_product_builder_tabs_changed",function(){n(".et_product-block",!0),window.scrollTo(window.scrollX,window.scrollY-1),window.scrollTo(window.scrollX,window.scrollY+1)})),d(".woocommerce-review-link").on("click",function(t){return d(".reviews_tab.active a").trigger("click"),d("html, body").animate({scrollTop:d(".reviews_tab").offset().top},300),!0})}}(jQuery);