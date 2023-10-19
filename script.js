window.addEventListener('scroll',()=>{
    if(window.scrollY > window.innerHeight/3){
        document.querySelector("nav").classList.add("bg-black");
        document.querySelector("nav").classList.add("bg-opacity-60");
    }
    else{
        document.querySelector("nav").classList.remove("bg-black");
        document.querySelector("nav").classList.remove("bg-opacity-60");
    }
})