const snb_menu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#sub .btn_menu");

snbBtn.addEventListener("click",function(){
    if(snb_menu.classList.contains("hide")){
        snb_menu.classList.remove("hide");
    }else{
        snb_menu.classList.remove("hide");
    }
})