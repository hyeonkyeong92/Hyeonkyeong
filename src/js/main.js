

//===================== Nav Button Click Event=====================//

(function(){
    const headerBtn = document.querySelector('.toggler');

    const navWrap = document.querySelector('.nav-wrap');
    // const headerBtnWrap = document.querySelector('.h-menu');
    
    const navList = document.querySelectorAll('.nav-lists .list');
    
    function closeNavHandler(){
        navWrap.classList.remove('active');
        headerBtn.classList.remove('active');
    }

    for(let i = 0; i<navList.length; i++){
        navList[i].addEventListener('click',closeNavHandler);
    }

    function menuBtnHandler(){
        navWrap.classList.toggle('active');
        // headerBtnWrap.classList.toggle('active');
        headerBtn.classList.toggle('active');
    }


    headerBtn.addEventListener('click', menuBtnHandler);
    
})();





//==========================Scroll Event===========================//

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
} //높이값 확인



  function handleScroll() {
    //공통함수1
    const elems = document.querySelectorAll('.obj-ani');
    const elems2 = document.querySelectorAll('.obj-vertical-ani');
    const elems3 = document.querySelectorAll('.obj-horizontal-ani');
    
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
            elem.style.transitionDuration = '.4s'
  
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
  
        }
    })
    // event1

    elems2.forEach(elem => {
        // var topMove = 0;
        if (isElementUnderBottom(elem, -20)) {
            // elem.style.transform = `translate3d(${+ -topMove}px,0px, 0px)`;
            elem.style.transform = `translate3d(200px,0px, 0px)`;
       

        } else {
            elem.style.transform = `translate3d(-50px,0px, 0px)`;
            // elem.style.transform = 'translate3d(' + -topMove + ' px, 0px,  0px)';
  
        }

    })
    // event2

    elems3.forEach(elem =>{
        if (isElementUnderBottom(elem, -80)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateX(70px)';
            elem.style.transitionDuration = '.8s'
    
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateX(0px)';
    
        }
    })
    // event3

    //Header Background Change




    const burgerElem = document.querySelector('.hamburger');

    const posY = this.window.pageYOffset;
    const sectionAbout = this.document.querySelector('#section-about-wrap').getBoundingClientRect().top;
    const sectionAnimation = this.document.querySelector('#section-animation-wrap').getBoundingClientRect().top;

    const sectionAboutTop = posY + sectionAbout;
    const sectionAnimationTop = posY + sectionAnimation;

    if(posY >= sectionAboutTop && posY < sectionAnimationTop) {
        // console.log('hello');
        burgerElem.classList.add('changeWhite');
    } else if(posY >= sectionAnimationTop && posY) {
        // console.log('bye');
        burgerElem.classList.remove('changeWhite');
    } else if(posY <= sectionAboutTop ) {
        // console.log('bye');
        burgerElem.classList.remove('changeWhite');
    }



  }

  
  window.addEventListener('scroll', handleScroll);

//Scroll Event 끝




// ===================Mouse Over Event=====================//











/*======== ETC toggle ========*/

//탭메뉴
(function(){

    const tabSelectList = document.querySelectorAll('.etc-tab li');
    const tabSelectedElem = document.querySelectorAll('.cont-wrap .list');
    const tabSelectListText =document.querySelectorAll('.tab-wrap li');
    let activeConts;

    console.log(tabSelectList);
    console.log(tabSelectedElem);
    console.log(tabSelectListText);

    for(var i = 0; i<tabSelectList.length; i++){
        tabSelectList[i].querySelector('a').addEventListener('click',function(e){
            e.preventDefault();
            
            for(var j = 0; j<tabSelectList.length; j++){
                tabSelectList[j].classList.remove('active');
                tabSelectedElem[j].style.display = "none";
            }

            for(var h = 0; h<tabSelectListText.length; h++){
                tabSelectListText[h].classList.remove('active');
            }

            this.parentNode.classList.add('active');
            this.classList.add('active');

            activeConts = this.getAttribute('href');
            document.querySelector(activeConts).style.display = 'flex';
            document.querySelector(activeConts).style.animation = 'ani-up .8s cubic-bezier(0.51, 0.09, 0.56, 0.89)';
        });
    }

    document.querySelector('.etc-tab li:nth-child(1)').style.display = 'flex';
            

})();



