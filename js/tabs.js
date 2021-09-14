const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents =  document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
    
})

const ts = document.querySelectorAll('[data-t-target]')
const tContents = document.querySelectorAll('[data-t-content]')
ts.forEach(t => {
    t.addEventListener('click', () => {
        const target = document.querySelector(t.dataset.tTarget)
        tContents.forEach(tcontent =>{
            tcontent.classList.remove('active')
        })
        target.classList.add('active')
    })
})