$(document).ready(function(){
  $(".editor-header a").click(function(e){
    e.preventDefault();

    var _val = $(this).data("role"),
        _sizeValIn = parseInt($(this).data("size-val") + 1),
        _sizeValRe = parseInt($(this).data("size-val") - 1),
        _size = $(this).data("size");
    if(_size == "in-size"){
      document.execCommand(_val, false, _sizeValIn + "px");
    } else{
      document.execCommand(_val, false, _sizeValRe + "px");
    }
  });
});

$.ajax({
    url: "https://formspree.io/you@email.com", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});

$(document).ready(function(){
  var $text = $("#text"),
      $submit = $("input[type='submit']"),
      $listComment = $(".list-comments"),
      $loading = $(".loading"),
      _data,
      $totalCom = $(".total-comment");

  $totalCom.text($(".list-comments > div").length);

  $($submit).click(function(){
    if($text.html() == ""){
      alert("Please write a comment!");
      $text.focus();
    } else{
      _data = $text.html();
      $.ajax({
        type: "POST",
        url: window.local,
        data: _data,
        cache: false,
        success: function(html){
          $loading.show().fadeOut(300);
          $listComment.append("<div>"+_data+"</div>");
          $text.html("");
          $totalCom.text($(".list-comments > div").length);
        }
      });
      return false;
    }
  });
});