const butt = document.querySelector('.btn');

butt.addEventListener('click',e=>{console.log('클릭됨');});

function nextBtn(){
    console.log('클릭됨');
    const b_block = document.querySelector('.two');

    if(b_block.style.display != 'none'){
        b_block.style.display = 'none';
    }else {
        b_block.style.display ='block';
    }
}

