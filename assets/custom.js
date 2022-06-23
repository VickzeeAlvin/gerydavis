$(window).on("load resize",function(){

  //Footer accordian
  if ($(window).width() <= 500) {
    $('.footer__title').unbind('click').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      if ($this.next().hasClass('active')) {
        $this.next().removeClass('active');
        $this.next().slideUp(350);
        $this.removeClass('active');
      } else {
        $this.parent().parent().find('.footer__block .footer__menu').removeClass('active');
        $this.parent().parent().find('.footer__block .footer__title').removeClass('active');
        $this.parent().parent().find('.footer__block .footer__menu').slideUp(350);
        $this.next().toggleClass('active');
        $this.toggleClass('active');
        $this.next().slideToggle(350);
      }
    });
  }else{
    $('.footer__title').off();
  }

  $(".cutom_popup_close").click(function(){
    $(this).parents('.custom_pop').fadeOut(150)
    $('body').removeClass('modle_open')
  });

  $(document.body).on('click', '.cutom_popup_open' ,function(e){
    e.preventDefault();
    var id = $(this).attr('popup_id'); 
    $('#'+id).fadeIn(150) ;    
    $('body').addClass('modle_open');
    if( id == 'bold__popup_img' ){
      var img_url = $(this).attr('href'); 
      $('#'+id).find('.number-img').attr('src', img_url);
      //       console.log(img_url);
    }else{
      var title_prod = $(this).parents('.product-grid__content').find('h1.h2.product-single__title').text().trim();
      //       console.log(title_prod,'title_prod');
      setTimeout(function(){
        $('input[name="contact[productName]"]').attr('value',title_prod)
      },500);
    }
  });

  $('.pop_product #product_list').on('change', function() {
    $(this).parents('.custom_pop').find(".popup_go_button").attr("href", this.value)
  });
  $('.side_bar_action').click(function(event){
    event.preventDefault();
    var _ = this;
    $(this).removeClass('side_bar_action')
    var url = $(this).attr('href')

    $.ajax({
      type: 'GET',
      url: url,
      beforeSend: function() {
        $('.content_sidedrawer .slide_loader').show();
        $('body').addClass('modle_open is_sidebar')
        $('.content_sidedrawer').addClass('side_open')
      },
      success: function(data) {
        $(".content_sidedrawer .side_bar_content").empty();
        $(".content_sidedrawer .content_sidedrawer_title").empty() ;
        var filteredData = $(data).find(".page_content");
        var section_header__title =  $(data).find('.section-header__title').text()
        $(".content_sidedrawer .side_bar_content").append(filteredData); 
        $(".content_sidedrawer .content_sidedrawer_title").text(section_header__title)  
        $('.content_sidedrawer .slide_loader').hide();
        $(_).addClass('side_bar_action');
      },
      dataType: "html"
    });
  });

  $('.closebtn').click(function(){
    $('.content_sidedrawer').removeClass('side_open')
    $('body').removeClass('modle_open')
    $(".content_sidedrawer .side_bar_content").empty();
    $('.content_sidedrawer .slide_loader').hide();
  });

  $("body").delegate(".side_bar_content .collapsible-trigger", "click", function(){
    let id =  $(this).attr('aria-controls')
    $(this).toggleClass('is-open');
    $('#'+id).toggleClass('is-open');
  });

  window.addEventListener('mouseup',function(event){
    var pol = $('.content_sidedrawer.side_open');
    if(!$(event.target).hasClass('content_sidedrawer')  && $(event.target).parents('.content_sidedrawer').length == 0 ){
      $('.content_sidedrawer').removeClass('side_open')
      $('body.is_sidebar').removeClass('modle_open is_sidebar')
      $(".content_sidedrawer .side_bar_content").empty();
      $('.content_sidedrawer .slide_loader').hide();
    }
  }); 
  
  if ($(window).width() <= 980) {
    $('.toogle_shipping').unbind('click').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('active');
      $this.next().slideToggle(350);
      $this.next().next().slideToggle(350);
    });
  }else{
    $('.toogle_shipping').off();
  }

});

$(window).ready(function(){
  if(window.combination){
    $.each(combination,function(key,value){
      $("select#product_list option").each(function(){
        var title = $(this).text();
        var short = "("+key+")";
        if(title.indexOf(short) > -1){
          var newTitle = value+' '+short;
          $(this).text(newTitle);
        }
      });
    });
  }


  setTimeout(function(){
    $('.variant-input-wrap[name="width"] input:checked').trigger('change');
    //     $('.bold-options-container input,.bold-options-container select').attr('disabled','disabled');
    $('[name="properties[_LPROP]"]').attr('disabled','disabled');
  },300);

  //   $(document).on('change','.variant-input-wrap[name="width"] input',function(){
  //     let width = $(this).val();
  //     console.log('name="properties[Return Policy]"')
  //     if(width == 'EE - Wide'){
  //       $('.variant-input[data-index="option1"]').each(function(){
  //         let dataValue = $(this).attr('data-value');
  //         if(dataValue.indexOf('EE') > -1){
  //           $(this).addClass('ee-variant')
  //           $(this).css('display','inline-block');
  //         }else{
  //           $(this).hide();
  //         }
  //       });
  //       var redElements = document.querySelectorAll('.ee-variant');
  //       var first = redElements[0];
  //       $(first).find('label').trigger('click');
  //     }else{
  //       $('.variant-input[data-index="option1"]').each(function(){
  //         let dataValue = $(this).attr('data-value');
  //         if(dataValue.indexOf('EE') > -1){
  //           $(this).hide(); 
  //         }else{
  //           $(this).addClass('not-ee-variant')
  //           $(this).css('display','inline-block');
  //         }
  //       });
  //       var redElements = document.querySelectorAll('.not-ee-variant');
  //       var first = redElements[0];
  //       $(first).find('label').trigger('click');
  //     }
  //   });


  //   $(document).on('DOMNodeInserted', function(e) {
  //     if ( $(e.target).hasClass('bold_option_radio') )
  //     {
  //       $('[name="properties[Return Policy]"]').attr('disabled','disabled');
  //     }
  //   });




  $(".cstm-yes-no-options input").on('click',function(){

    $('.bold_option_displaytext').hide();

    let val = $(this).val();
    let lprop = $(this).data('value');

    console.log(val)

    $("#lprop").val(lprop);

    if(val == 'Returnable'){

      $('.bold_option_set input[value="Returnable"]').removeAttr('disabled')
      $('[name="properties[Return Policy]"][value="'+val+'"]').trigger('click');
      $('[name="properties[Return Policy]"]:checked').trigger('click');

      $('.bold-options-container [value="Returnable"]').trigger('click');

      $('[name="properties[Return Policy]"]').attr('disabled','disabled');
      $('[name="properties[_LPROP]"]').attr('disabled','disabled');
      if($(".variant-input[data-index='option1'] input[type=radio][name='Color']:checked").length > 0){
        $('.bold-options-container input,.bold-options-container select').attr('disabled','disabled');
      }
      $('.is-current').hide();

    }else{

      $('.bold-options-container [value="Final Sale"]').trigger('click');

      $('.bold_option_set:not(:hidden) [name="properties[Return Policy]"]').removeAttr('disabled');
      $('#lprop[name="properties[_LPROP]"]').removeAttr('disabled');

      $('.bold_option_set:not(:hidden) [name="properties[Return Policy]"][value="'+val+'"]').trigger('click');
      $('.bold_option_set:not(:hidden) [name="properties[Return Policy]"]:checked').trigger('click');
      $('.is-current').show();
      $('#lprop[name="properties[_LPROP]"]').removeAttr('disabled');
      setTimeout(function(){
        $('.bold-options-container input,.bold-options-container select').removeAttr('disabled');
        $('.bold_option_set input[value="Returnable"]').attr('disabled','disabled')
        $('.bold_option_set.is-current input[value="Returnable"]').removeAttr('disabled')
      },500);
    }

    show_related_option();

  });

  //   $('body').one('DOMNodeInserted','.bold_options.bold_options_loaded', function(e) {
  //     console.log('------------------------------============================')
  //     if($('body').find('.bold_options.bold_options_loaded').length > 0){
  //       $('.bold-options-container').append($('.bold_options.bold_options_loaded'));
  //     }
  //   });




  $("body").on("change",".variant-input.color_swatch[data-index='option1'] input[type=radio]",function(){
    $('#c-no[name="cstm-yes-no"]').trigger('click')
    show_related_option();
  });
  function show_related_option(){
    if($(".variant-input[data-index='option1'] input[type=radio][name='Color']:checked").length > 0){
      var color = $(".variant-input[data-index='option1'] input[type=radio]:checked").next().next().text();
      if($('.logic-color-bold-option[data-color="'+color+'"]').length > 0){
        $('.bold-options-container input,.bold-options-container select').attr('disabled','disabled');
        let option = $('.logic-color-bold-option[data-color="'+color+'"]').attr('data-option');
        //         $('.bold_option_set input').attr('disabled','disabled');
        setTimeout(function(){
          $('.bold_option_set').each(function(){
            if($(this).find('.bold_option_displaytext').find('.bold_option_element').find('span').length > 0){
              let option_check = $(this).find('.bold_option_displaytext').find('.bold_option_element').find('span').text();
              if(option_check.includes(option)){
                $(this).find('.bold_option_displaytext').hide();
                $(this).addClass('is-current');
                if(  $(".cstm-yes-no-options input:checked").val() == 'Final Sale' ){
                  $(".bold-options-container").show();
                  $(this).show();
                  $('.bold-options-container [value="Returnable"]').trigger('click');
                  $(this).find('[value="Final Sale"]').trigger('click');
                  $(this).find('input,select').removeAttr('disabled');
                  $(this).children().first().find('input[value="Final Sale"]').trigger('click');

                }else{

                  $('.bold-options-container input,.bold-options-container select').attr('disabled','disabled');
                  $(".bold-options-container").hide();

                }



              }else {

                $(this).hide();
                $(this).removeClass('is-current');

              }  
            }

          });

        },300);

      }
    }
  }

  show_related_option();  

//   setTimeout(function(){
//     $('[data-index="option1"] input:checked').trigger('change');
//     //     $('[name="properties[Return Policy]"]').attr('disabled','disabled');
//     $('.bold_option_displaytext').hide();
//   },3000);

  $('[data-index="option1"] input').on('change',function(){
    let val = $('[data-index="option1"] input:checked').val();
    $('.variant-input[data-index="option2"]').hide();
    $('.product-single__variants option').each(function(i,v){
      let label = $(this).text();
      let option_one = label.split(' / ')[0].trim();
      if(val == option_one){
        let option_two = label.split(' / ')[1].split(' - ')[0].trim();
        $('.variant-input[data-value="'+option_two+'"][data-index="option2"]').show();
      }
    });
    $('.variant-input[data-index="option2"]:not(:hidden) input:checked').prop('checked',true);
  });


  $(document).on('change','.bold-options-container input,.bold-options-container select,.cstm-yes-no-options input',function(){
    $(".bold_option_set .bold_option_title").css('opacity',0);
    setTimeout(function(){
      $(".bold_option_set .bold_option_title").each(function(){
        let count = $(".bold_option_set").length;
        for(let i= 1; i<=count; i++){
          $(this).text( $(this).text().replace(' '+i,'') );
        }
        $(this).css('opacity',1);
      });
    },10);
  });
  

  //Open Gorgias chat widget
  $("#self-service-help-center, .live-chat, .self-service-help-center").click(function(e){
    e.preventDefault();
    GorgiasChat.open();
  });

  //Open klaviyo email sign up popup
  const openPopup = document.querySelectorAll(".sign-up-for-email-sms");
  for (let i = 0; i < openPopup.length; i++) {
    openPopup[i].addEventListener("click", function(e) {
      e.preventDefault();
      var _klOnsite = window._klOnsite || []; 
      _klOnsite.push(['openForm', 'UP7ghd']);
    });
  }

  //Open klaviyo sms sign up popup
  const openSMSPopup = document.querySelectorAll(".signup-for-sms");
  for (let i = 0; i < openSMSPopup.length; i++) {
    openSMSPopup[i].addEventListener("click", function(e) {
      e.preventDefault();
      var _klOnsite = window._klOnsite || []; 
      _klOnsite.push(['openForm', 'SspQfq']);
    });
  }

});

$(window).on("load resize",function(e){
  if($(window).innerWidth() < 959){
    if($('.sub_collect_hedr .new-grid.scrollable-grid--small').length > 0){
      $('.sub_collect_hedr .new-grid.scrollable-grid--small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows:false
      });
    }
  }else{
    if($('.sub_collect_hedr .new-grid.scrollable-grid--small').hasClass( "slick-initialized" )){
      $('.sub_collect_hedr .new-grid.scrollable-grid--small').slick('unslick');
    }
  }
});

//Mobile sticky cart button
$(document).on('click','.cart_mobile_sticky_right .cart__checkout.custon_checkout',function(){
  $('.checkout_bttn button.btn.cart__checkout').click();    
});

$(document).ready(function(){
  $('.cart_mobile_tab').click(function(){  
    $(".tabs_details").removeClass('tab-active');
    $(".tabs_details[id='"+$(this).attr('tab-id')+"']").addClass("tab-active");
    $(".cart_mobile_tab").removeClass('active');
    $(this).addClass('active');
  });
  
  $('body').on('click', '.close-cart', function(e){
    if(window.location.href == document.referrer ) {
      window.location.href = '/' ;
    } 
    else {
      window.location.href = document.referrer ;
    }
  });
});

$(document).ready(function(){
  var isLoaded=false;
  var _intv = setInterval(function(){
    if($('.bold_options').hasClass('bold_options_loaded') && isLoaded==false){
      isLoaded=true;
      setTimeout(function(){
        $('[data-index="option1"] input:checked').trigger('change');
        $('.bold_option_displaytext').hide();
      },1200)
    }
    else if(!$('.bold_options').hasClass('bold_options_loaded') && isLoaded==true){
      isLoaded=false;
    }
  },500)
});
