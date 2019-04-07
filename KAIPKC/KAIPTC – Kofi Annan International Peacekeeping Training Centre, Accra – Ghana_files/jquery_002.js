/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a){a.fn.appear=function(b,c){var d=a.extend({//arbitrary data to pass to fn
data:void 0,//call fn only on the first appear?
one:!0,// X & Y accuracy
accX:0,accY:0},c);return this.each(function(){var c=a(this);if(//whether the element is currently visible
c.appeared=!1,!b)//trigger the custom event
return void c.trigger("appear",d.data);var e=a(window),f=function(){//is the element hidden?
if(!c.is(":visible"))//it became hidden
return void(c.appeared=!1);//is the element inside the visible window?
var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&b+l+j>=h&&g+m+i>=a&&a+n+i>=g?//trigger the custom event
c.appeared||c.trigger("appear",d.data)://it scrolled out of view
c.appeared=!1},g=function(){//is this supposed to happen only once?
if(//mark the element as visible
c.appeared=!0,d.one){//remove the check
e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}//trigger the original fn
b.apply(this,arguments)};//bind the modified fn to the element
d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),//check whenever the window scrolls
e.scroll(f),//check whenever the dom changes
a.fn.appear.checks.push(f),//check now
f()})},//keep a queue of appearance checks
a.extend(a.fn.appear,{checks:[],timeout:null,//process the queue
checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)while(b--)a.fn.appear.checks[b]()},//check the queue asynchronously
run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),//run checks when these methods are called
a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery);