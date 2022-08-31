document.addEventListener('DOMContentLoaded', () => {
    let toggler=Array.prototype.slice.call(document.querySelectorAll('.navbar-toggler'), 0);
    //console.log(toggler[0])

    let target=document.getElementById( toggler[0].dataset.target );
    toggler[0].addEventListener("click", ()=>{
        toggler[0].classList.toggle("is-active")
        target.classList.toggle("show")
    })

    //que las imagenes del post se puedan abrir

    let images = document.querySelectorAll(".post-content p img")
    //console.log(images)
    images.forEach(element => {
        element.addEventListener('click',function(){
            zoomImage(this)
        })    
    });
});


function zoomImage(imgElement){
    const overlay = document.createElement('div')
    overlay.classList.add('image-view-overlay')
    const container = document.createElement('div')
    container.classList.add('image-view-container')
    

    const image = imgElement.cloneNode(false)
    container.appendChild(image)
    overlay.appendChild(container)


    let body = document.querySelector('body')
    body.appendChild(overlay)
    const closeImage= function(){
        
        document.querySelectorAll('.image-view-overlay').forEach(function(item){
            item.remove()
        });
    }
    overlay.addEventListener('click',closeImage)
}
