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
    console.log('클릭1');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    
    if(one.style.display == 'none'){
        one.style.display = 'block';
        two.style.display = 'none';
    }
}

function nextBtn(e){
    console.log('클릭2');
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
function close(){
    document.querySelector('.portfolio_modal').className="portfolio_modal";
}