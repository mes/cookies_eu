//= require jquery.cookie

var initCookie = function(){
  $('.cookies-eu-ok').click(function(e){
    e.preventDefault();
    $.cookie('cookie_eu_consented', true, { path: '/', expires: 365 });
    $('.cookies-eu').remove();
  });
};

$(document).ready(initCookie);
$(document).off('page:load', initCookie).on('page:load', initCookie);
