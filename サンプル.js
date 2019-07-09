//リンクを追加するボタンを押した際の処理⇨結局使わなかった
$("#submitlink").on("click", function(){

  // リンクを表に追加
    $('#tablearea').append(
      '<table><tbody><tr><td><button type="button" class="btnDel" id="btnDel">削除</button></td>' 
      + '<td>' + $('#title').val() + '</td>'
      + '<td>' + $('#url').val() + '</td></tr></tbody></table>');

  // 入力欄をブランクに
    $('#title').val('');
    $('#url').val('');

  //モーダルを消す
    $('#overlay, #modal_newlink').fadeOut();

  // tableが動的な要素のため静的な親要素documentに対し、削除ボタンを押した際にリンクを削除する処理を追加
    $(document).on("click", ".btnDel", function () {
      $(this).closest("tr").remove();
    });

});

/*サムネイル付きリンクを追加するブックマークレット。ここからhtml上で使えるようにする？できるのかな？*/
[js] javascript:(function(){
  var w = 120, h = 90, u = location.href, t = document.title;
  var a = '<a href="'+u+'" title="'+t+'" target="_blank">', ca = '</a>';
  var img = '<img src="http://capture.heartrails.com/' +w+'x'+h+'/shadow?'+u+'" width="'+w+'" height="'+h+'" style="float: left;">';
  var tag = '<div class="sharelink" style="padding: 6px; border: 1px solid #aaaaaa;">' + a + img + ca + a + t + ca + '<br style="clear: both;" /></div>';
  prompt('ShareLink', tag);})(); 
[/js]


/*上をhtml上で使えるようにしようとしたもの*/
function　() {

  var w = 120, h = 90, u = location.href, t = document.title;
  var a = '<a href="'+u+'" title="'+t+'" target="_blank">', ca = '</a>';
  var img = '<img src="http://capture.heartrails.com/' +w+'x'+h+'/shadow?'+u+'" width="'+w+'" height="'+h+'" style="float: left;">';
  var tag = '<div class="sharelink" style="padding: 6px; border: 1px solid #aaaaaa;">' + a + img + ca + a + t + ca + '<br style="clear: both;" /></div>';
  prompt('ShareLink', tag);

}


/*jqueryで検索機能の実装*/
$(function () {
  searchWord = function(){
    var searchResult,
        searchText = $(this).val(), // 検索ボックスに入力された値
        targetText,
        hitNum;

    // 検索結果を格納するための配列を用意
    searchResult = [];

    // 検索結果エリアの表示を空にする
    $('#search-result__list').empty();
    $('.search-result__hit-num').empty();

    // 検索ボックスに値が入ってる場合
    if (searchText != '') {
      $('.target-area li').each(function() {
        targetText = $(this).text();

        // 検索対象となるリストに入力された文字列が存在するかどうかを判断
        if (targetText.indexOf(searchText) != -1) {
          // 存在する場合はそのリストのテキストを用意した配列に格納
          searchResult.push(targetText);
        }
      });

      // 検索結果をページに出力
      for (var i = 0; i < searchResult.length; i ++) {
        $('<span>').text(searchResult[i]).appendTo('#search-result__list');
      }

      // ヒットの件数をページに出力
      hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
      $('.search-result__hit-num').append(hitNum);
    }
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});
