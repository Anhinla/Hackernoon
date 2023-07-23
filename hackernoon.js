// JavaScript
const menuItems = document.querySelectorAll('.menu-bars .item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', function(e) {
    const dataId = e.target.getAttribute('data-id');
    console.log(dataId)
    const show = document.getElementById(dataId);
    const toggles = document.querySelectorAll('.toggle-js');
    toggles.forEach(function(toggle){
      toggle.classList.remove('show');
    })
    show.classList.add('show');
  });
});
menuItems.forEach(item => {
  item.addEventListener('mouseleave', function(e) {
    const dataId = e.target.getAttribute('data-id');
    console.log(dataId)
    const show = document.getElementById(dataId);
    
    show.addEventListener('mouseleave',function(){
      show.classList.remove('show');
    })
  });
});

const header = document.querySelector('.header');
const menu = document.querySelector('.menu-bars');
const news = document.querySelector('.news');
const colors = document.querySelector('.color');
window.addEventListener('scroll',function(){
  const screenHeight = window.pageYOffset;
  const height = news.getBoundingClientRect().top;
  if(screenHeight>height){
    header.classList.add('hide');
    menu.classList.add('hide');
    colors.style.top = 0;
    colors.style.backgroundColor = 'rgba(66, 243, 27, 0.96)';

  }else{
    header.classList.remove('hide');
    menu.classList.remove('hide');
    colors.style.top = '100px';
    colors.style.backgroundColor ='rgba(224, 243, 27, 0.96)';
  }
});


// toggle year

const yearBtns = document.querySelectorAll('.year-btn');
const years = document.querySelectorAll('.year');
yearBtns.forEach(function(btn){
  btn.addEventListener('click',function(){
    years.forEach((year)=>{
      year.classList.remove('active');
    });
    yearBtns.forEach((yearBtn)=>{
      yearBtn.classList.remove('active');
    });
    btn.classList.add('active');
    btn.parentElement.classList.add('active');
  })
})


const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content1');
tabBtns.forEach((btn)=>{
  btn.addEventListener('click',function(e){
    tabBtns.forEach((btn1)=>{
      btn1.classList.remove('activate');
    });
    btn.classList.add('activate');
    const id = e.target.dataset.id;
    contents.forEach((content)=>{
      content.classList.remove('show-content');
    });
    const content = document.getElementById(id);
    content.classList.add('show-content');
  });
});


const noti = document.querySelector('.notify-btn');
const notification = document.querySelector('.notification');
noti.addEventListener('click',function(){
  notification.classList.toggle('show-noti');
});

