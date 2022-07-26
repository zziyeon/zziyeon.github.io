// nav
const nav_home = document.querySelector('.nav_home');
const nav_aboutMe = document.querySelector('.nav_aboutMe');
const nav_skills = document.querySelector('.nav_skills');
const nav_portfolio = document.querySelector('.nav_portfolio');
const nav_contact = document.querySelector('.nav_contact');

//nav 높이
const nav_height = document.querySelector('nav').offsetHeight;

// 페이지 위치
const scroll_aboutMe = document.getElementById('aboutMe').offsetTop;
const scroll_skills = document.getElementById('skills').offsetTop;
const scroll_portfolio = document.getElementById('portfolio').offsetTop;
const scroll_contact = document.getElementById('contact').offsetTop;

nav_home.addEventListener('click', e=>{
    window.scrollTo({top:0, behavior:'smooth'});
});

nav_aboutMe.addEventListener('click', e=>{
    window.scrollTo({top:scroll_aboutMe-nav_height, behavior:'smooth'});
});

nav_skills.addEventListener('click', e=>{
    window.scrollTo({top:scroll_skills-nav_height, behavior:'smooth'});
});

nav_portfolio.addEventListener('click', e=>{
    window.scrollTo({top:scroll_portfolio-nav_height, behavior:'smooth'});
});

nav_contact.addEventListener('click', e=>{
    window.scrollTo({top:scroll_contact-nav_height, behavior:'smooth'});
});

// scroll 아이콘
const scroll = document.querySelector('.home_scroll_wrap');
scroll.addEventListener('click', e=> {
    window.scrollTo({top:scroll_aboutMe-nav_height, behavior:'smooth'});
})

// aboutMe_right 버튼
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');

function prevBtn(e){
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    
    if(one.style.display == 'none'){
        one.style.display = 'block';
        two.style.display = 'none';
    }
}

function nextBtn(e){
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    
    if(two.style.display == 'none'){
        two.style.display = 'block';
        one.style.display = 'none';
    }
}

prev.addEventListener('click',prevBtn);
next.addEventListener('click',nextBtn);

//모달 팝업 열기
const detailBtn = document.querySelector('.detail_btn');

detailBtn.addEventListener('click', e=>{
    document.querySelector('.portfolio_modal').className = "portfolio_modal show";
});

//모달 팝업 닫기
const outer = document.querySelector('.portfolio_modal');
const closeBtn = document.querySelector('.fa-xmark');

function close(){
    document.querySelector('.portfolio_modal').className="portfolio_modal";
}

outer.addEventListener('click', e=>{
    if(e.target.className == e.currentTarget.className) {
        close();
    }
});

closeBtn.addEventListener('click',e=>{
    close();
});

//모달 팝업 nav 버튼
const modalNavBtn = document.querySelector('.modal_btn');

modalNavBtn.addEventListener('click', e=>{
    let sss = e.target.className;
    if(e.target.tagName == 'BUTTON'){
        for(let i=0; i<6; i++){
            document.querySelectorAll('.modal_btn button')[i].classList.remove('click');
            document.querySelectorAll('.modal_img_list img')[i].classList.remove('aaa');
            document.querySelectorAll('.modal_img_list img')[i].style.display='none';
        }
        e.target.classList.add('click');
        document.getElementsByClassName(sss)[1].style.display='block';
    }
});

// 스크롤시 화면 fade in/out
const windowMargin = 300;
const sectionList = document.querySelectorAll("section");

const showFunc=() =>{
    for(const ele of sectionList){
        for(const sss of sectionList){
            if(sss.classList.contains('show')){
                if(window.innerHeight < sss.getBoundingClientRect().top + windowMargin){
                    sss.classList.remove('show');
                }
            }
        }
        if(!ele.classList.contains('show')){
            if( window.innerHeight > ele.getBoundingClientRect().top + windowMargin ){
                ele.classList.add('show');
            }
        }
    }
};

window.addEventListener('load', showFunc);
window.addEventListener('scroll', showFunc);    