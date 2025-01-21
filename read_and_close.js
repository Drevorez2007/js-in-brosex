const buttonOpen = document.querySelector('.brand__read-more-btn');
const brandList = document.querySelector('.brands__list');
const reName = document.querySelector('.brand__read-more-span');
function toggleButton () {
    brandList.classList.toggle("brands__list--visible")
    reName.classList.toggle('brand__read-more-span--root')
    if (brandList.classList.contains('brands__list--visible')) {

        reName.textContent = 'Скрыть';
    }
    else reName.textContent='Показать все';
    
}

    buttonOpen.addEventListener('click', toggleButton);
        