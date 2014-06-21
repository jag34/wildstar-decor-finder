//
//Gets all the items and places it in two
//Different arrays, for future use maybe?
function getAllItems(){
    var aElems = $('#desktop-230634446').children('a');
    var names = [];
    var images = [];
    $.each(aElems, function(a_idx, a_val) {
        names[a_idx] = $(a_val).attr('title');
        $.each($(a_val).children('img'), function(idx, val){
            images[a_idx] = $(val).attr('src');
        });
    });
};

//Gets the specified item and clicks on it
//to bring it to focus.
function getItem(item){
    var itemName = $.trim(item.replace(/ +/g, " "));
    console.log(itemName);
    var regEx = new RegExp(itemName, "i");
    var aElems = $('#desktop-230634446').children('a');
    $.each(aElems, function(idx, val) {
        var itemTitle = $(val).attr('title');
        if ( itemTitle.match(regEx)){
            $(val).click()
        }
    });
}

var item = window.prompt("Please full enter item name", "");
if (item != null){
    getItem(item);
}