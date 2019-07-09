/*
検索機能の追加
*/ 


/*
検索機能の追加　ここまで
*/


/*
新規買い物リストモーダル
*/

$("#newlist").click(function() {
    $('#overlay, #modal_newlist').delay(100).fadeIn();
});

$("#modal_newlist img, #modal_newlist #backlist").click(function() {
    $('#overlay, #modal_newlist').delay(100).fadeOut();
});

//ここに買い物リストを追加した時の処理を追加

/*
新規買い物リストモーダルここまで
*/


/*
新規商品リンクモーダル
*/

//モーダルの表示
$("#newlink").click(function() {
    $('#overlay, #modal_newlink').delay(100).fadeIn();
});

//モーダルの非表示
$("#modal_newlink img, #modal_newlink #backlink").click(function() {
    $('#overlay, #modal_newlink').delay(100).fadeOut();
});

//リンクを追加するボタンを押した際の処理
$("#submitlink").on("click", function(){

  // リンクを表に追加
    $('#linkarea').append(
      '<div id="linkcell"><p>' + $('#title').val() + '</p>' 
      + '<button type="button" class="btnDel" id="btnDel">削除</button>'
      + '<a id="goodslink" href="' + $('#url').val() + '">' + $('#url').val() + '</a>'
      + '<p id="date_contents">' + $('#date').val() + '</p></div>');

  // 入力欄をブランクに
    $('#title').val('');
    $('#url').val('');
    $('#date').val('');

  //モーダルを消す
    $('#overlay, #modal_newlink').fadeOut();

  // tableが動的な要素のため静的な親要素documentに対し、削除ボタンを押した際にリンクを削除する処理を追加
    $(document).on("click", ".btnDel", function () {
      $(this).closest("div").remove();
    });

});

/*
新規商品リンクモーダルここまで
*/



  /*以下みほんコード

  $(function() {
    $('#open').on('click', function() {
      $('#overlay, #modalWindow').fadeIn();
    });
    
    $('#close').on('click', function() {
      $('#overlay, #modalWindow').fadeOut();
    });
    
    locateCenter();
    $(window).resize(locateCenter);
  
    function locateCenter() {
      let w = $(window).width();
      let h = $(window).height();
      
      let cw = $('#modalWindow').outerWidth();
      let ch = $('#modalWindow').outerHeight();
     
      $('#modalWindow').css({
        'left': ((w - cw) / 2) + 'px',
        'top': ((h - ch) / 2) + 'px'
      });
    }
  });
  */