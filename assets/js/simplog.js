
// email transfer
function sendMail(){

  var to = $("#to");
  var email = $('#user_email');
  var name = $('#user_name');
  var content = $('#user_content');
  var subject = "Contact from " + name.val() ;

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
  var _content = content.val() + new_line + new_line + "from : " + email.val() ;

  window.location = 'mailto:' + _email + '?subject=' + _subject + '&body=' + _content ;

  

}
