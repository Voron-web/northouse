/********************** search input hide *******************/

const headerSearchBtn = document.querySelector('#header_search')
const headerSearchInput = document.querySelector('.header__search-input-block')
const headerSearchInputItem = document.querySelector('.header__search-input-block input')
const headerSearchCancelBtn = document.querySelector('.header__search-cancel')
const headerSearchResultBlock = document.querySelector('.header__search-result')



function checkClick(event) {
    console.log(event.target);
    if (event.target == headerSearchCancelBtn) {
        closeHeaderSearch()
    }
    else if (event.target == headerSearchBtn || event.target.closest('.header__search-input-block')) {
        openHeaderSearch()
        contactMenuClose()
    }
    else if (event.target == contactMenuOrderBtn) {
        contactMenuClose()
        openCallOrderModal()
    }
    else if (event.target.closest('.header__call-block')) {
        contactMenuToggle()
        closeHeaderSearch()
    }

    else if (event.target == headerCallOrderBtn) {
        contactMenuClose()
        closeHeaderSearch()
        openCallOrderModal()
    }
    else {

        closeHeaderSearch()
        if (event.target.closest('.contact-menu')) {
        } else {
            contactMenuClose()
        }
    }
}

function openHeaderSearch() {
    headerSearchBtn.classList.add('hide')
    headerSearchInput.classList.remove('hide')
    headerSearchInputItem.addEventListener('input', openSearchResult)
}
function closeHeaderSearch() {
    headerSearchBtn.classList.remove('hide')
    headerSearchInput.classList.add('hide')
    headerSearchResultBlock.classList.remove('hide')
    headerSearchResultBlock.classList.add('hide')
    headerSearchInputItem.removeEventListener('input', openSearchResult)
    headerSearchInputItem.value = ''
}

function openSearchResult() {
    if (headerSearchInputItem.value.length > 0) {
        headerSearchResultBlock.classList.remove('hide')
    }
    else {
        headerSearchResultBlock.classList.remove('hide')
        headerSearchResultBlock.classList.add('hide')
    }
}

/********************** contact-menu *******************/

const phoneNumberBtn = document.querySelector('.header__phone-number')
const contactMenuBlock = document.querySelector('.contact-menu')

function contactMenuToggle() {
    phoneNumberBtn.classList.toggle('open')
    contactMenuBlock.classList.toggle('hide')
}
function contactMenuClose() {
    phoneNumberBtn.classList.remove('open')
    contactMenuBlock.classList.add('hide')
}



/******************* modal call order *******************/
const modalCallBlock = document.querySelector('.modal-call-order')
const modalCallCloseBtn = modalCallBlock.querySelector('.modal-call-order__close-btn')
const contactMenuOrderBtn = document.querySelector('.btn__contact-menu')
const headerCallOrderBtn = document.querySelector('.btn_header')

function openCallOrderModal() {
    modalCallBlock.classList.remove('hide')
    modalCallCloseBtn.addEventListener('click', closeCallOrdermodal)
}
function closeCallOrdermodal() {
    modalCallBlock.classList.add('hide')
    modalCallCloseBtn.removeEventListener('click', closeCallOrdermodal)
}

/******************* burger *******************/

const burgerBtn = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuShadow = document.querySelector('.burger-menu__shadow')
const burgerMenuClose = document.querySelector('.burger-menu__close-btn')

burgerBtn.addEventListener('click', () => {
    burgerOpen()
})

function burgerOpen() {
    burgerMenuShadow.classList.remove('hide')
    burgerMenu.classList.remove('hide')
    burgerMenuClose.addEventListener('click', burgerClose)
}
function burgerClose() {
    burgerMenuShadow.classList.add('hide')
    burgerMenu.classList.add('hide')
    burgerMenuClose.removeEventListener('click', burgerClose)

}

/******************* global *******************/
document.addEventListener('click', checkClick)



class SelectMenu {
    constructor(selectBtnClass, selectListClass) {
        this.btnClassName = selectBtnClass;
        this.btn = document.querySelector(`${selectBtnClass}`);
        this.listClassName = selectListClass;
        this.list = document.querySelector(`${selectListClass}`);
        this.title = this.btn.querySelector('span');
    }
    toggle() {
        this.btn.classList.toggle('open')
    }
    close() {
        this.btn.classList.remove('open')
    }
    changeTitle() {
        // debugger
        const id = this.list.querySelector('input:checked').id
        const text = this.list.querySelector(`label[for = "${id}"]`).textContent
        this.title.textContent = text
    }
}