document.addEventListener("DOMContentLoaded", () => {
    var menu = document.getElementById("toggle");
    var menuList = document.querySelector('.nav-small');
    menu.addEventListener("click", () => {
        menuList.classList.add('show-nav');
    });



    var x=document.getElementById('x');
    x.addEventListener('click',()=>{
        menuList.classList.remove('show-nav');
    })
});

