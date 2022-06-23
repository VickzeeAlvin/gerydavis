$( document ).ready(function() {

  $('body').on('mouseenter','.has_subchildrens.parents', function(){
    let target = $(this).data('name');
    $('.desktop-menu-grid').addClass('mousein');
    $('.has_subchildrens.parents').removeClass('active')
    $('.has_subchildrens.child').removeClass('active')
    $('.has_brandslist.parents').removeClass('active')
    $('.has_brands.parents').removeClass('active')
    $(this).addClass('active')
    $('.desktop-menu-grid-item.menu-grid-second-item').removeClass('brad_open')
    $('.desktop-menu-grid').removeClass('brand_grid');
    $('.desktop-menu-grid').removeClass('brand_list_grid');
    $('.desktop-menu-grid-item.menu-grid-second-item').removeClass('brad_list_open')
    $('.desktop-menu-grid-item.menu-grid-second-item').find(`.mega-menu-children`).hide();
    $('.desktop-menu-grid-item.menu-grid-third-item').find(`.mega-menu-grandchildren`).hide();
    $('.desktop-menu-grid-item.menu-grid-second-item').find(`.mega-menu-children[data-name="${target}"]`).show();

    $('.desktop-menu-grid-item.menu-grid-third-item').show();
    $('.mega_menu-childrens').show();
    $('.mega_menu-brands').hide();
    $('.mega_menu-brandslists').hide()
    $('.desktop-menu-grid-item.menu-grid-third-item').find('.mega_menu-grandchildrens').show()
    $('.mega_menu-brandslists_text').hide();
    $('.mega_menu-brandslists_text').find(`.mega_menu-brandlist_text`).hide();
        $('.desktop-menu-grid-item.menu-grid-third-item').find(`.mega-menu-grandchildren`).hide();
    $('.desktop-menu-grid-item.menu-grid-third-item').find(`.mega-menu-grandchildren[data-name="${target}"]`).show();
  });

//   $('body').on('mouseenter','.has_subchildrens.child', function(){
//     let target = $(this).data('name');
//     $('.has_subchildrens.child').removeClass('active');
//     $('.has_brandslist.parents').removeClass('active');
//     $('.has_brands.parents').removeClass('active');
//     $(this).addClass('active')
//     $('.desktop-menu-grid-item.menu-grid-third-item').find(`.mega-menu-grandchildren`).hide();
//     $('.desktop-menu-grid-item.menu-grid-third-item').find(`.mega-menu-grandchildren[data-name="${target}"]`).show();
//   });

  $('body').on('mouseenter','.has_brands.parents', function(){
    let target = $(this).data('name');
    $('.mega_menu-childrens').hide();
    $('.mega_menu-brands').show();
    $('.mega_menu-brandslists').hide()
    $('.desktop-menu-grid').addClass('brand_grid');
    $('.desktop-menu-grid-item.menu-grid-second-item').addClass('brad_open')
    $('.desktop-menu-grid').removeClass('brand_list_grid');
    $('.desktop-menu-grid-item.menu-grid-second-item').removeClass('brad_list_open')
    $('.desktop-menu-grid-item.menu-grid-third-item').hide();
    $('.desktop-menu-grid-item.menu-grid-second-item').find(`.mega_menu-brand`).hide();
    $('.desktop-menu-grid-item.menu-grid-second-item').find(`.mega_menu-brand[data-name="${target}"]`).show();
    $('.desktop-menu-grid-item.menu-grid-third-item').find('.mega_menu-grandchildrens').show()
    $('.mega_menu-brandslists_text').hide();
    $('.mega_menu-brandslists_text').find(`.mega_menu-brandlist_text`).hide();

    
    $('.has_brandslist.parents').removeClass('active')
    $('.has_brands.parents').removeClass('active')
    $('.has_subchildrens.child').removeClass('active');
        $('.has_subchildrens.parents').removeClass('active')
    
    $(this).addClass('active')
  });


  $('body').on('mouseenter','.has_brandslist.parents', function(){
    let target = $(this).data('name');
    $('.mega_menu-childrens').hide();
    $('.mega_menu-brands').hide();
    $('.mega_menu-brandslists').show()

    $('.desktop-menu-grid').removeClass('brand_grid');
    $('.desktop-menu-grid-item.menu-grid-second-item').removeClass('brad_open')
    $('.desktop-menu-grid').addClass('brand_list_grid');
    $('.desktop-menu-grid-item.menu-grid-second-item').addClass('brad_list_open')
    $('.desktop-menu-grid-item.menu-grid-second-item').find(`.mega_menu-brandlist`).hide();
    $('.desktop-menu-grid-item.menu-grid-second-item').find(`.mega_menu-brandlist[data-name="${target}"]`).show();

    $('.desktop-menu-grid-item.menu-grid-third-item').show();
    $('.mega_menu-brandslists_text').show();

    $('.desktop-menu-grid-item.menu-grid-third-item').find('.mega_menu-grandchildrens').hide()
    $('.mega_menu-brandslists_text').find(`.mega_menu-brandlist_text`).hide();
    $('.mega_menu-brandslists_text').find(`.mega_menu-brandlist_text[data-name="${target}"]`).show();
    
    $('.has_brandslist.parents').removeClass('active')
    $('.has_brands.parents').removeClass('active')
    $('.has_subchildrens.child').removeClass('active');
        $('.has_subchildrens.parents').removeClass('active')
    
    $(this).addClass('active')
    
    
  });


});