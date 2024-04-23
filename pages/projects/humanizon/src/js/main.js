
//탭메뉴
(function(){

    const tabSelectList = document.querySelectorAll('.tab-list-wrap .mobile li');
    const tabSelectListpc = document.querySelectorAll('.tab-list-wrap .pc li');
    const tabSelectedElem = document.querySelectorAll('.icon-wrap ul .item-result');
    const tabSelectListText =document.querySelectorAll('.tab-list-wrap ul li a');
    let activeConts;

    console.log(tabSelectList);
    console.log(tabSelectedElem);
    console.log(tabSelectListText);
    console.log(tabSelectListpc);

    /*mobile for문*/
    for(var i = 0; i<tabSelectList.length; i++){
        tabSelectList[i].querySelector('a').addEventListener('click',function(e){
            e.preventDefault();
            
            for(var j = 0; j<tabSelectList.length; j++){
                tabSelectList[j].classList.remove('active');
                tabSelectedElem[j].style.display = "none";
            }

            for(var h = 0; h<tabSelectListText.length; h++){
                tabSelectListText[h].classList.remove('font-title');
            }

            this.parentNode.classList.add('active');
            this.classList.add('font-title');

            activeConts = this.getAttribute('href');
            document.querySelector(activeConts).style.display = 'flex';
            document.querySelector(activeConts).style.animation = 'ani-up .6s cubic-bezier(0.51, 0.09, 0.56, 0.89)';
        });

    }
    /*pc for문*/
    for(var i = 0; i<tabSelectListpc.length; i++){
        tabSelectListpc[i].querySelector('a').addEventListener('click',function(e){
            e.preventDefault();
            
            for(var j = 0; j<tabSelectListpc.length; j++){
                tabSelectListpc[j].classList.remove('active');
                tabSelectedElem[j].style.display = "none";
            }

            for(var h = 0; h<tabSelectListText.length; h++){
                tabSelectListText[h].classList.remove('font-title');
            }

            this.parentNode.classList.add('active');
            this.classList.add('font-title');

            activeConts = this.getAttribute('href');
            document.querySelector(activeConts).style.display = 'block';
            document.querySelector(activeConts).style.animation = 'ani-up .8s cubic-bezier(0.51, 0.09, 0.56, 0.89)';
        });

    }

    document.querySelector('.icon-wrap .item:nth-child(1)').style.display = 'block';
            

})();


/*--------click event--------*/




