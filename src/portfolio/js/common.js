let resizeFunc = () => {
    let header = document.querySelector('.header');
    let nav = document.querySelector('.navi');
    let container = document.querySelector('.content');
    let listItem = document.querySelectorAll('.navi ul li span');
    let headerHeight = header.clientHeight;
    let navHeight = nav.clientHeight + 40;
    let windowWidth = window.innerWidth;

    if(windowWidth < 769) {
        listItem.forEach(element => {
            element.classList.add('blind');
        })
    } else {
        listItem.forEach(element => {
            element.classList.remove('blind');
        })
    }
}

window.onload = resizeFunc;
window.addEventListener('resize', resizeFunc);

// list

const tabList = document.querySelectorAll('.navi ul li');

for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_active');
    }
    this.parentNode.classList.add('is_active');
    });
}

function listSelect(selectList){
    let divList1 = document.getElementById('divList1');
    let divList2 = document.getElementById('divList2');
    let divList3 = document.getElementById('divList3');
    let divList4 = document.getElementById('divList4');
    let widthCheck = window.innerWidth;

    if(selectList == "0") {
        divList1.style.display = "block"
        divList2.style.display = "block";
        divList3.style.display = "none";
    } else if(selectList == "1") {
        divList1.style.display = "none";
        divList2.style.display = "none";
        divList3.style.display = "block";
    } else if(selectList == "2") {
        divList1.style.display = "none";
        divList2.style.display = "block";
        divList3.style.display = "none";
    }
}

let asideButton = document.querySelector('.button_close');
let divAside = document.querySelector('.aside');

asideButton.addEventListener('click', function() {
    divAside.style.display = "none";
})