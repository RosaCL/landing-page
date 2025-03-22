header=document.querySelector('.header');
navbar=document.querySelector('.header .navbar');
menuBtn=document.querySelector('#menu-btn');

menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menuBtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    if(window.scrollY>0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}