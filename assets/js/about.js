var specialBtn = function(os, link){
  var anchor = $('<a></a>').text('Download ' + os).attr('class', 'button special icon fa-download').attr('href', link);
  $('#btns').append($('<li></li>').append(anchor));
}
$(document).ready(function(){
  var androidLink = 'https://play.google.com';
  var iosLink = 'https://itunes.apple.com';
  if(skel.vars.os === 'android'){
    specialBtn('Android', androidLink);
  }else if(skel.vars.os === 'ios'){
    specialBtn('iOS', iosLink);
  }
});
