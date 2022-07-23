var Navigation = document.querySelector(".navigation")
var Menu = document.querySelector(".menu")

Navigation.onclick = function(){
    if(Menu.style.display == "block") {
        Menu.style.display = "none"
        this.style.display = "block"
    }else{
        Menu.style.display = "block"
        
    }
}