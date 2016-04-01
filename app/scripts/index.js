window.jQuery = $ = require('jquery');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models/menu.js');
var collapse = require('./collapse.js');
var tooltip = require('./tooltip.js');
var router = require('./router');
var bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.js');




$(function(){

  Backbone.history.start();
   $('[data-toggle="tooltip"]').tooltip();


   $(window).scroll(function () {
    var y = $(window).scrollTop(),
        x = $('.animated').offset().top - 500;
    if (y > x) {
        $('.animated').addClass('fadeInUp').removeClass('fadeOutDown');
    } else {
        $('.animated').removeClass('fadeInUp').addClass('fadeOutDown');
    }


});
   $('.icon1').hover(function (){
    	$('.icon-show1').toggleClass('hidden');

    });
   $('.icon2').hover(function (){
    	$('.icon-show2').toggleClass('hidden');

    });
   $('.icon3').hover(function (){
    	$('.icon-show3').toggleClass('hidden');

    });
   $('#myModal').modal();

});


