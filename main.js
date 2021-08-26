vegmenu_list_array = ["Peppy Paneer Pizza", "Deluxe Veggie Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza", "Veg Supreme Pizza", "Veg Margherita Pizza", "Mexican Green Wave"];

function get_veg_menu() {
    var htmldata;
    htmldata = "<ol class='menulist'>";
    vegmenu_list_array.sort();
    for (var i = 0; i < vegmenu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + vegmenu_list_array[i] + '</li>';
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_veg_menu").innerHTML = htmldata;
}

function add_vegitem() {
    var htmldata;
    var item = document.getElementById("add_veg_item").value;
    vegmenu_list_array.sort();
    htmldata = "<section class='cards'>";
    for (var i = 0; i < vegmenu_list_array.length; i++) {
        htmldata = htmldata + '<div class="card">' + '<img src="pizzaImg.png" style="width: 100px; height:80px;"/>' + vegmenu_list_array[i] + '</div>';
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}


function add_top() {
    var item = document.getElementById("add_veg_item").value;
    vegmenu_list_array.push(item);
    add_vegitem();
}