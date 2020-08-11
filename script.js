let used = document.querySelector(".used")
let footer = document.querySelector("footer")

window.addEventListener("scroll", (e)=>{

    document.querySelectorAll(".project-links").forEach((a)=>{
        if (a.getBoundingClientRect().y <= window.scrollY){
            a.style.opacity = "1";
            a.style.pointerEvents = 'unset'
        }

        else{
            a.style.opacity = "0"
            a.style.pointerEvents = 'none'
        }
    })


    if (footer.getBoundingClientRect().y<=window.scrollY){
        footer.style.opacity = "1";
        footer.style.pointerEvents = "unset"
    }

    else{
        footer.style.opacity = "0";
        footer.style.pointerEvents = "none"
    }

    if(used.getBoundingClientRect().y<=window.scrollY){
        used.style.opacity = "1";
        used.style.pointerEvents = "unset"
    }

    else{
        used.style.opacity = "0";
        used.style.pointerEvents = "none"
    }
    console.log(footer.getBoundingClientRect().y<=window.scrollY)

    
    
    // console.log(window.scrollY);
    
})


document.querySelectorAll(".project-links").forEach((a)=>{
 console.log(a.getBoundingClientRect().y)
       
    
})
