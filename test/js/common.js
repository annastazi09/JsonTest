$(document).ready(function () {
    var activeBtn = $("#activeBtn");
    var check = $("#agree");
    var load = $("#loadBtn");
    var block = $("#mainBlock");
    var refresh = $("#refresh");
    var loadJson = $("#items");
  
    activeBtn.prop("disabled", true);

    check.change(function () {
        activeBtn.prop("disabled", function (i, val) {
            activeBtn.val("Activate Scroll");
            return !val;
        });
     });

    activeBtn.click(function () {
        activeBtn.prop("disabled", true);
              $(check.attr("disabled", true));
              refresh.css("background", "lightpink");
              load.hide();
              loadJson.hide();
        $(window).scroll( function() {
        var windowScroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if ((windowScroll + windowHeight) == documentHeight) {
            getData();
        }
    });
    });

    load.click(function () {
            getData();
    });

        refresh.click(function () {
              location.reload();
        });

    function getData() {
        $.each(items, function (key, value) {
            block.append('<div class="block">' + '<img src="' + value.image + '"' + '>' + '</img>'
                + '<p style="text-align:center"><img src="' + value.sprite + '"' + '>' + '</img></p>' + '<h5>'
                + value.title + '</h5>' + '<p style="text-align:left">' + value.paragraph + '</p>' + '</div>');
        });
    }

    loadJson.click(function () {
        $.getJSON("items.json", function (obj) {
            $.each(obj, function (key, value) {
                block.append('<div class="block">' + '<img src="' + value.image + '"' + '>' + '</img>'
                    + '<p style="text-align:center"><img src="' + value.sprite + '"' + '>' + '</img></p>' + '<h5>'
                    + value.title + '</h5>' + '<p style="text-align:left">' + value.paragraph + '</p>' + '</div>');
            });
        });
    });

});

$import("path/to/items.js");
function $import(path) {
    document.write("<" + "script src=\"" + path + "\"></" + "script>");
}







