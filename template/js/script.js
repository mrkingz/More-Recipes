$(document).ready(function(){
    $('input').on('focus', function(){
      $(this).siblings('label').addClass('active')
    })

    $('input').on('blur', function(){
      if($(this).val() === '')
      $(this).siblings('label').removeClass('active')
    })
})