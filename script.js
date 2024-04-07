const btn = document.getElementById('button')
const btn_lower = document.getElementById('button_2')
const modal = document.querySelector('.modal-overlay')
const kmodal = document.querySelector('.modal-window') 


btn.addEventListener('click',() => {
    modal.classList.add('active')
})
modal.addEventListener('click',(e) => {
        if (e.target == modal) {
            modal.classList.remove('active')
        }
      })
btn_lower.addEventListener('click',() => {
        modal.classList.add('active')
})
modal.addEventListener('click',(e) => {
    if (e.target == modal) {
        modal.classList.remove('active')
}
})
 

    
  

    





