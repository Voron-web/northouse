const materialSelect = new SelectMenu('.product__material-select', '.product__material-list')
let quantity = 1;
const quantityBlock = document.querySelector('.product__quantity-display')
const buyModal = document.querySelector('.modal-cart')

changeQuantity()
document.addEventListener('click', checkClick)

materialSelect.list.addEventListener('change', () => {
    materialSelect.changeTitle()
    materialSelect.close()
})

function checkClick(event) {
    // console.log(event.target);
    if (materialSelect.btn.classList.contains('open')) {
        if (!event.target.closest(materialSelect.btnClassName)) {
            materialSelect.close()
        }
    }
    if (event.target.closest(materialSelect.btnClassName)) {
        materialSelect.toggle()
    }
    else if (event.target.closest('.product__quantity-btn-minus') || event.target.closest('.product__quantity-btn-plus')) {
        changeQuantity(event.target)
    }
    else if (event.target.closest('.properties__btn')) {
        changePropertiesPage(event.target)
    }
    else if (event.target.closest('.product__btn')) {
        openBuyModal()
    }
}

function changeQuantity(btn) {
    if (btn == document.querySelector('.product__quantity-btn-minus')) {
        if (quantity > 1) {
            quantity--
        }
    } else if (btn == document.querySelector('.product__quantity-btn-plus')) {
        quantity++
    }
    quantityBlock.textContent = quantity
}


function changePropertiesPage(btn) {
    Array.from(document.querySelectorAll('.properties__btn')).forEach((element) => {
        element.classList.remove('active')
    })
    Array.from(document.querySelectorAll('.properties__page')).forEach((element) => {
        element.classList.remove('active')
    })
    btn.classList.add('active')
    document.querySelector(`.properties__page[data-property="${btn.dataset.property}"]`).classList.add('active')
}

function openBuyModal() {
    buyModal.classList.add('open');
    buyModal.addEventListener('click', checkBuyModalClick)
}
function checkBuyModalClick(event) {
    if (event.target.closest('.modal-cart__close') || event.target.closest('.modal-cart__btn_close')) {
        closeBuyModal()
    }
}
function closeBuyModal() {
    buyModal.classList.remove('open');
    buyModal.removeEventListener('click', checkBuyModalClick)
}