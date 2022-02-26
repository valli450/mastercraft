
function menu(){
    document.querySelector('.header__open-button').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('active');
}

function save(){
    document.querySelector('.block__bookmark').classList.toggle('bookmark-green');
}

function showMobile(l){
    document.querySelector('.project-mobile').classList.add('show-projects');
    selectAmount(l);
    document.querySelector('.overlay-dark').style.zIndex='11';
    document.querySelector('.overlay-dark').style.opacity = '0.5';
}

function showDesktop(a){
    document.querySelector('.project-desktop').classList.add('show-projects-desk');
    selectAmount(a);
    document.querySelector('.overlay-dark').style.zIndex='11';
    document.querySelector('.overlay-dark').style.opacity = '0.5';
}


function selectAmount(n){
    const list = ['mahogany', 'black-edition', 'bamboo-stand', 'no-reward', 'mahogany-desk', 'black-edition-desk', 'bamboo-stand-desk', 'no-reward-desk'];
    list.forEach(element => {
        if (element !== n){
            document.querySelector(`.${element}`).classList.remove('support')
        }else{
            document.querySelector(`.${n}`).classList.add('support');
            console.log('cdfg')
        }
    })
    
}

function closeElement() {
    document.querySelector('.project-mobile').classList.remove('show-projects');
    document.querySelector('.project-desktop').classList.remove('show-projects-desk');
    document.querySelector('.overlay-dark').style.zIndex='-1';
    document.querySelector('.overlay-dark').style.opacity = '0';
}

function closeE() {
    document.querySelector('.overlay-dark').style.zIndex='-1';
    document.querySelector('.overlay-dark').style.opacity = '0';
    document.querySelector('.message').classList.remove('message-show');
    document.querySelector('.project-mobile').classList.remove('show-projects');    
    document.querySelector('.project-desktop').classList.remove('show-projects-desk');

}

function thanks(){
    closeElement('project-mobile', 'show-projects')
    document.querySelector('.message').classList.add('message-show');
    document.querySelector('.overlay-dark').style.zIndex='11';
    document.querySelector('.overlay-dark').style.opacity = '0.5';
}

function thanksClose() {
    document.querySelector('.message').classList.remove('message-show');
    document.querySelector('.overlay-dark').style.zIndex='-1';
    document.querySelector('.overlay-dark').style.opacity = '0';
}

function countTotal(p, o){
    let inputAmount = document.getElementById(p).value;
    if (inputAmount <= 0 && p === 'no-reward-amount'){
        document.querySelector('.err1').style.visibility = 'visible';
    }else if(inputAmount <= 0 && p === 'no-reward-amount-desk'){
        document.querySelector('.err1-desk').style.visibility = 'visible';
    }else if(inputAmount < 25 && p === 'bamboo-amount'){
        document.querySelector('.err2').style.visibility = 'visible';
    }else if(inputAmount < 25 && p === 'bamboo-amount-desk'){
        document.querySelector('.err2-desk').style.visibility = 'visible';
    }else if(inputAmount < 75 && p === 'black-special-amount'){
        document.querySelector('.err3').style.visibility = 'visible';
    }else if(inputAmount < 75 && p === 'black-special-amount-desk'){
        document.querySelector('.err3-desk').style.visibility = 'visible';
    }else if(inputAmount < 200 && p === 'mahogany-amount'){
        console.log(p)
        document.querySelector('.err4').style.visibility = 'visible';
    }else{
        document.querySelector(`.${o}`).style.visibility = 'hidden';
        thanks();
        total(inputAmount, 1)
        document.getElementById(p).value = '';
    }
       
}

function total(r = 0, z = 0){
    let totalbe = String(Number(37580)+Number(r));
    let finalAmount = [];
    let osdfg=[];
    let greenLine;
    let totaltrans = String(Number(5007) + Number(z));
    while(totalbe.length !== finalAmount.length){
        gh = '';
        t = totalbe.length-1;
        for(let i = totalbe.length-1; i >= 0; i--){
            if((t-3) === i){
                gh+=',';
                t-=3
            }
            gh+=totalbe[i];
        }
        finalAmount.push(gh);   
    }

    if (totalbe>100000){
        greenLine = 100;
    }else{
        greenLine = (Number(totalbe) * 100)/100000;
    }

    osdfg.push(finalAmount[finalAmount.length-1].split("").reverse().join(""));
    document.querySelector('.numbers').innerHTML = `
        <div class="numbers__display">
            <div class="numbers__section" id='first'>
                <p>
                    <span class='numbers__bold'>$${osdfg}</span><br/>
                    of $100,000 backed
                </p>
                <div class="numbers__line-grey"></div>
            </div>
            <div class="numbers__section">
                <p>
                    <span class='numbers__bold'>${totaltrans}</span><br/>
                    total backers
                </p>
                <div class="numbers__line-grey"></div>
            </div>
            <div class="numbers__section">
                <p>
                    <span class='numbers__bold'>56</span><br/>
                    days left
                </p>
            </div>
        </div>
        <div class="numbers__line">
            <div class="numbers__green" style="width:${greenLine}%"></div>
        </div>
    `
}



