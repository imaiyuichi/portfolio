

$(function() {

    // wow

    new WOW().init();

    // drawer

    const $jsHeaderNav = $('.js-headerNav');
    const $hamburger = $('.js-hamburger');
    const $overlay = $('.js-overlay');

    $hamburger.on('click', function() {  
      $(this).toggleClass('active');
      $jsHeaderNav.toggleClass('headerNav__list--active');
      $overlay.toggleClass('header__overlay--open');
    })


    //  スムーススクロール

   // 移動速度指定
   const speed =500;
   
   $('a[href^="#"]').on('click', function() {
  
     // hrefで指定されたidを取得 ここでは、# or #about or #voice or #service
     const id =$(this).attr("href");
     // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻る
     const target = $("#" === id ? "html" : id);
     // ページのトップを基準にターゲットの位置を取得
     const position = $(target).offset().top;
  
     $("html, body").animate(
       {
         scrollTop: position
       },
       speed
     );
     return false;
   });

// トップに戻る

  const $window = $(window);
  const $topButton = $('.toTopButton');
  const $topButtonFadeInPosition = 300;

  $window.scroll(function() {
        if ($(this).scrollTop() > $topButtonFadeInPosition) {
           $topButton.fadeIn();
        } else {
           $topButton.fadeOut();
        }
  });

  $topButton.click(function() {
        $('html, body').animate({scrollTop:0}, '300');
        return false;
  })

    // form
    const $form = $('#js-form')

    $form.submit(function(e) {   //formの送信処理をするメソッド     (e)イベントオブジェクトのこと
        $.ajax({   //コードの実行をブロックする事なく、外部データを要求する事を実行する。htmlファイルの中の一部だけ表示更新する操作。 ajax機能を呼び出し
         url: $form.attr('action'),  // attr 属性の取得
         data: $form.serialize(), //form要素内に配置されたinput要素などをデータ入力要素のデートを取りまとめてurlに添付する
         type: "POST", //処理で利用するタイプをPOST送信タイプで利用することを指定。
         dataType: "xml", 
         statusCode: { 
            0: function() { 
              //送信に成功したときの処理 
              // $form.slideUp()
              $('.js__successMessage').slideDown()
            }, 
            400: function() { 
              //送信に失敗したときの処理 
              // $form.slideUp()
              $('.js__errorMessage').slideDown()
            }
          } 
        });
      return false; 
    }); 
});