
$(document).ready(function(){

  // footer 하단 고정
  var $footer = $('footer');
  var $section = $('section');

  var h_html = $('html').height();
  var h_body = $('body').height();

  console.log(h_html);
  console.log(h_body);

  var h_diff = h_html - h_body ;
  var mb_sec = parseInt( $section.css('margin-bottom') );
  var mb_footer = h_diff + mb_sec ;

  if(h_html > h_body){
    $footer.css('margin-top', h_diff + mb_sec);
  }


  // iframe height setting
  var $iframe = $('iframe');

  var w_iframe = $iframe.width();
  var h_iframe = w_iframe * 9 / 16 ;

  $iframe.height(h_iframe);

});

// email transfer
function sendMail(){

  String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  }

  var to = $("#to");
  var email = $('#user_email');
  var name = $('#user_name');
  var content = $('#user_content');
  var subject = "contact from " + name.val() ;

  // email validation check
  var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i ;

  // validation checking
  if(!regExp.test(email.val())){
    alert('Please check your email!');
    email.focus();
    return false ;
  }
  if(!name.val()){
    alert('Please check your name!');
    name.focus();
    return false ;
  }
  if(!content.val()){
    alert('Please check your content!');
    content.focus();
    return false ;
  }

  var new_line =  escape("\n");

  var _email = to.val();
  var _subject = subject ;
  var _content = content.val() + "\n\nfrom : " + email.val();

  // generate new line for mail
  var __content = _content.replace(/(?:\r\n|\r|\n)/g, new_line);

  window.location = 'mailto:' + _email + '?subject=' + _subject + '&body=' + __content ;

}
