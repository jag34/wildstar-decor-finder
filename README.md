Wildstar Decor Finder
=====================

Searches the http://www.wildstar-architecture.com/decor.html site for pictures of decor.

Usage
-----

Simply copy the getItem function along with the four lines below it and paste it to your browser address bar preceeded by "javascript:"

    javascript:function getItem(item){ var itemName = $.trim(item.replace(/ +/g, " ")); console.log(itemName); var regEx = new RegExp(itemName, "i"); var aElems = $('#desktop-230634446').children('a'); $.each(aElems, function(idx, val) { var itemTitle = $(val).attr('title'); if ( itemTitle.match(regEx)){ $(val).click() } }); } var item = window.prompt("Please full enter item name", ""); if (item != null){ getItem(item); }

If you copy from here, ensure that when pasting you prepend "javascript:", as some browsers may ignore it.
