const accordeon = document.querySelector('[data-accordeon="main"]')

accordeon.addEventListener('click', checkAccordeonClick)

function checkAccordeonClick(event) {
    if (event.target.closest('[data-accordeon="btn"]')) {
        event.target.closest('[data-accordeon="btn"]').classList.toggle('hide')
        event.target.closest('[data-accordeon="btn"]').parentNode.querySelector('[data-accordeon="hiddenContent"]').classList.toggle('hide')
        event.target.closest('[data-accordeon="btn"]').parentNode.querySelector('[data-accordeon="indicator"]').classList.toggle('hide')
    }
}