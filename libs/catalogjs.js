// trading-input

$(".trading__line").slider({
    min: 50,
    max: 50000,
    values: [10000, 40000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".trading__input-left_main").val(ui.values[ 0 ]);
        $(".trading__input-left_main").parent().attr('data-value', numberWithSpaces(ui.values[ 0 ]));
        $(".trading__input-right_main").val(ui.values[ 1 ]);
        $(".trading__input-right_main").parent().attr('data-value', numberWithSpaces(ui.values[ 1 ]));
    }
});
$(".trading__input-left_main").val($(".trading__line_main").slider("values", 0));
$(".trading__input-right_main").val($(".trading__line_main").slider("values", 1));
$(".trading__wrapper_main input").change(function() {
    var input_left = $(".trading__input-left_main").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".trading__line_main").slider("option", "min"),
    where_right = $(".trading__line_main").slider("values", 1),
    input_right = $(".trading__input-right_main").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".trading__line_main").slider("option", "max"),
    where_left = $(".trading__line_main").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".trading__input-left_main").val(input_left); 
    $(".trading__input-right_main").val(input_right); 
    if (input_left != where_left) {
        $(".trading__line_main").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".trading__line_main").slider("values", 1, input_right);
    }
});

$('.trading__input input').on('focus', function(){
    $(this).parent().addClass('trading__input_focus');
}).on('mouseout', function(){
    $(this).parent().removeClass('trading__input_focus');
})

update = function(el) {
    el.parentElement.setAttribute('data-value', numberWithSpaces(el.value));
}

updateStart = function() {
    let inputOne = document.querySelector('.trading__input-left_main');
    inputOne.parentElement.setAttribute('data-value', numberWithSpaces(inputOne.value));
    let inputTwo = document.querySelector('.trading__input-right_main');
    inputTwo.parentElement.setAttribute('data-value', numberWithSpaces(inputTwo.value));
}
updateStart();

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}