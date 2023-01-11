$('#languages').hover(function() {
    $(this).attr('size', $('.language').length);
}, function() {
    $(this).attr('size', 1);
});

$('#supports').hover(function() {
    $(this).attr('size', $('.support').length);
}, function() {
    $(this).attr('size', 1);
});