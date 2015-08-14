/*
Problem 2:

jQuery has been imported for you.

A client has contacted you because they've written terrible JavaScript.
Repair their code! There are 10 bugs in the code. Make a short description of what you've fixed.

1.  Added $ before and () around document
2.  Added () after function
3.  added . between .ul and li
4.  added '' around square
5.  removed 'nav'
6.  added () after .text
7.  deleted . before p
8.  made the var words
9.  put words.length in parathesis
10. set words length = 0
*/

$(document).ready(function() {
    $('.ul.li').css('list-style-type','square');
    var words = $('p').text().split('');
    $('.output').text(words.length);
});