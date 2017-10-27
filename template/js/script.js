$(function(){
  const thisTag = $('a.account');
  let actionStr = '';
  const action = {
    isSignin: [1, 'Signin'], 
    isSignup: [2, 'Signup'], 
    isResetPassword: [3, 'Reset password']
  };

  let query = location.search.substr(1).split('=');

  switch(query[1])
  {
    case 'signin':
                actionStr = action.isSignup[1];
                $('div.action'+action.isResetPassword[0]).removeClass('hide');
                $('a.recovery').html('Forgot password?')
                thisTag.html('<label>Don\'t have account?</label> '+actionStr+' here')
                thisTag.attr({"href":"account.html?action="+actionStr.toLowerCase()})
                break;
    case 'signup':
                actionStr = action.isSignin[1];
                $('label.action'+action.isSignup[0]).removeClass('hide');
                $('div.action'+action.isResetPassword[0]).removeClass('hide');
                thisTag.html('<label>Already have account?</label> '+actionStr+' here')
                thisTag.attr({"href":"account.html?action="+actionStr.toLowerCase()})
                break;
    case 'recovery':
                $('label.action').html('Recover password')
                $('button.action').html('Submit')
                thisTag.attr({"href":"account.html?action=signup"})
                $('label.action'+action.isResetPassword[0]).removeClass('hide');
                thisTag.html('<label>Don\'t have account?</label> Signup here')
                return;
    default:   // Set  signin as default for invalid s invalid
                actionStr = query[1] = 'Signin'
                $('a.recovery').html('Forgot password?')
                $('div.action'+action.isResetPassword[0]).removeClass('hide');
                thisTag.html('<label>Don\'t have account?</label> '+actionStr+' here')
                thisTag.attr({"href":"account.html?action="+actionStr.toLowerCase()})
  }
  $('label.action').html(query[1]).css({'text-transform': 'Capitalize'});
  $('button.action').html(query[1]).toUpperCase()
})