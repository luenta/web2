$(document).ready(function() {
  
  $("#eredmeny").hide();
  $("<button>").attr("id","torles").text("Törlés").appendTo("#gombok");
  $("#loader").hide();
  
  $(document).bind("ajaxStart", function () {
    $("#loader").show();
  }).bind("ajaxStop", function () {
    $("#loader").hide();
  });
  
  $("#keres").click(function(e) {
    e.preventDefault();
    $.ajax({
      "url": "signlogin.php",
      "type": "get",
      "data": {"ki": $("#login").val()},
      "dataType": "json",
      "success": function(data) {
        $("#csaladi_nev").html(data.csaladi_nev);
        $("#utonev").html(data.utonev);
        $("#login_nev").html(data.login_nev);
        $("#jelszo").html(data.jelszo);
        $("#eredmeny").show(1000);
      },
      "error": function(xhr, status) {
        alert("Hiba az ajax hívás feldolgozásában, státusza: "+status);
      },
      "complete": function(xhr, status) {
        alert("Befejeződött az ajax hívás feldolgozása, státusza: "+status);
      }
    })  
  });
  
  $("#eredmeny span").hover(
    function() {
      $(this).css({"color":"#fff", "background":"#f00"});  
    },
    function() {  
      $(this).css({"color":"#000", "background":"#fff"});  
    }
  );
  
  $("#torles").click(function(e) {
    e.preventDefault();
    $("#login").val("");
    $("#eredmeny span").html("");
    $("#eredmeny").hide(1000);
  });
  
});
