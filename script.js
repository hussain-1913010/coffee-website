let navbar = document.querySelector('.navbar');

document.querySelector('#menuBtn').onclick = () => {
    navbar.classList.toggle('active');
    
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}




let searchForm = document.querySelector('.searchForm');

document.querySelector('#searchBtn').onclick = () => {
    searchForm.classList.toggle('active');

    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}





let cartItem = document.querySelector('.cartItemsContainer');

document.querySelector('#cartBtn').onclick = () => {
    cartItem.classList.toggle('active');

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}






window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}



























