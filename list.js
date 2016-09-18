/**************************************************************/
/* Prepares the cv to be dynamically expandable/collapsible   */
/**************************************************************/
$(function prepareList() {
    $('#expList').find('li:has(ul)').unbind('click').click(function(event) {
        if(this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    }).addClass('collapsed').removeClass('expanded').children('ul').hide();
 
    //i just tried to hack it , but it seems it didn't work
    //i will see it later 
    $('#link1').unbind('click').click(function(event) {
       
      // window.open($(this).attr('href'));

        return false;
    });

});


/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/
$(document).ready( function() {
    prepareList()
    
});
