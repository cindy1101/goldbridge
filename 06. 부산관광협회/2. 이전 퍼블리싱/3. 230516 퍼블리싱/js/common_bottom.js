
//모바일 서브메뉴 체크 시 하나만 오픈
$('.lnb_chk').change(function() {
    if($(this).is(':checked')) {
    $('.lnb_chk').not(this).prop('checked', false);
    }
});

//셀렉트박스  
const label02 = document.querySelector('.label02');
const options02 = document.querySelectorAll('.optionItem02');
const handleSelect02 = function(item) {
label02.innerHTML = item.textContent;
label02.parentNode.classList.remove('active02');
}
options02.forEach(function(option){
option.addEventListener('click', function(){handleSelect(option)})
})

label02.addEventListener('click', function(){
if(label02.parentNode.classList.contains('active02')) {
    label02.parentNode.classList.remove('active02');
} else {
    label02.parentNode.classList.add('active02');
}
});