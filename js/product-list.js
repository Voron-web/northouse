const sortSelect = new SelectMenu('.product-list__sort-select', '.product-list__sort-list')
const menu = document.querySelector('.filter__filters')
const menuCaregory = document.querySelector('.filter__categories')
const closeBtnCategory = menuCaregory.querySelector('.filter__close-btn')
const backBtnCategory = menuCaregory.querySelector('.filter__back-btn')
const closeBtnMenu = menu.querySelector('.filter__close-btn')
const categoryBtn = menu.querySelector('.filter__category-btn')
const sortMenu = document.querySelector('.filter__sort')
const closeSortMenu = sortMenu.querySelector('.filter__close-btn')
const shadow = document.querySelector('.page-shadow')
const calcModal = document.querySelector('.modal-recall')
const calcModalBtnClose = calcModal.querySelector('.modal-recall__close-btn')
const calcModalBtn = calcModal.querySelector('.btn_return')
let calcMaterialSelect = {}


sortSelect.list.addEventListener('change', () => {
    sortSelect.changeTitle()
    sortSelect.close()
})

if (document.querySelector('.product-list__calc')) {
    calcMaterialSelect = new SelectMenu('.product-list__material-calc-select', '.product-list__material-calc-list')

    calcMaterialSelect.list.addEventListener('change', () => {
        calcMaterialSelect.changeTitle()
        calcMaterialSelect.close()
    })

    $(".range_door").ionRangeSlider({
        skin: "round",
        min: 1,
        max: 10,
        from: 3,
        grid: false,
        onStart: (data) => {
            document.querySelector('input[data-calc = "door"]').value = data.from
        },
        onChange: (data) => {
            document.querySelector('input[data-calc = "door"]').value = data.from
        }
    });
    $(".range_apartment").ionRangeSlider({
        skin: "round",
        min: 1,
        max: 10,
        from: 1,
        grid: false,
        onStart: (data) => {
            document.querySelector('input[data-calc = "apartment"]').value = data.from
        },
        onChange: (data) => {
            document.querySelector('input[data-calc = "apartment"]').value = data.from
        }
    });

    let rangeDoor = $(".range_door").data('ionRangeSlider')
    let rangeApartment = $(".range_apartment").data('ionRangeSlider')

    document.querySelector('input[data-calc = "door"]').addEventListener('change', (event) => {
        let val = event.target.value
        rangeDoor.update({
            from: val,
        })
    })

    document.querySelector('input[data-calc = "apartment"]').addEventListener('change', (event) => {
        let val = event.target.value
        rangeApartment.update({
            from: val,
        })
    })
}


document.addEventListener('click', checkProductListPageClick)

function checkProductListPageClick(event) {
    if (sortSelect.btn.classList.contains('open')) {
        if (!event.target.closest(sortSelect.btnClassName)) {
            sortSelect.close()
        }
    }
    if (event.target.closest(sortSelect.btnClassName)) {
        sortSelect.toggle()
    }

    else if (event.target.closest('.product-list__filter-btn')) {
        filterSelectOpen()
    }
    else if (event.target.closest('.product-list__sort-btn')) {
        sortSelectOpen()
    }
    else if (event.target.closest('.product-list__calc-btn')) {
        calcModalOpen()
    }
    else if (document.querySelector('.product-list__calc')) {
        if (event.target.closest(calcMaterialSelect.btnClassName)) {
            calcMaterialSelect.toggle()
        }
    }


}

function filterSelectOpen() {
    shadow.classList.remove('hidden')
    menu.classList.add('open')
    closeBtnMenu.addEventListener('click', filterSelectClose)
    categoryBtn.addEventListener('click', categorySelectOpen)
}
function filterSelectClose() {
    shadow.classList.add('hidden')
    menu.classList.remove('open')
    closeBtnMenu.removeEventListener('click', filterSelectClose)
    categoryBtn.removeEventListener('click', categorySelectOpen)
}
function categorySelectOpen() {
    filterSelectClose()
    shadow.classList.remove('hidden')
    menuCaregory.classList.add('open')
    closeBtnCategory.addEventListener('click', categorySelectClose)
    backBtnCategory.addEventListener('click', categorySelectBack)

}
function categorySelectClose() {
    shadow.classList.add('hidden')
    menuCaregory.classList.remove('open')
    closeBtnCategory.removeEventListener('click', categorySelectClose)
    backBtnCategory.removeEventListener('click', categorySelectBack)

}
function categorySelectBack() {
    categorySelectClose()
    filterSelectOpen()
}

function sortSelectOpen() {
    shadow.classList.remove('hidden')
    sortMenu.classList.add('open')
    closeSortMenu.addEventListener('click', sortSelectClose)
}
function sortSelectClose() {
    shadow.classList.add('hidden')
    sortMenu.classList.remove('open')
    closeBtnMenu.removeEventListener('click', sortSelectClose)
}

function calcModalOpen() {
    calcModal.classList.remove('hide')
    calcModalBtn.addEventListener('click', calcModalClose)
    calcModalBtnClose.addEventListener('click', calcModalClose)
}

function calcModalClose() {
    calcModal.classList.add('hide')
    calcModalBtn.removeEventListener('click', calcModalClose)
    calcModalBtnClose.removeEventListener('click', calcModalClose)
}



