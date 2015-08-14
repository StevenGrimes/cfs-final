/*
Problem 2:

jQuery has been imported for you.

A client has contacted you because they've written terrible JavaScript.
Repair their code! There are 10 bugs in the code. Make a short description of what you've fixed.

1.  Added $ before document
2.  Added () after function
3.  added . between .ul and li
4.  added '' around square
5.  removed 'nav'
6.  added () after .text
7.  deleted . before p
8.  
9.  
10. 
*/

$document.ready(function() {
    $('.ul.li').css('list-style-type','square');

    $('.output').text('p'.text().split( ).length());
});