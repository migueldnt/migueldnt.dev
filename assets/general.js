document.addEventListener('DOMContentLoaded', () => {
    let toggler=Array.prototype.slice.call(document.querySelectorAll('.navbar-toggler'), 0);
    //console.log(toggler[0])

    let target=document.getElementById( toggler[0].dataset.target );
    toggler[0].addEventListener("click", ()=>{
        toggler[0].classList.toggle("is-active")
        target.classList.toggle("show")
    })
});