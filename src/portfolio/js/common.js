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
    let careerContent = document.getElementById('careerContent');
    let desContent = document.getElementById('desContent');
    let profileContent = document.getElementById('profileContent');
    let widthCheck = window.innerWidth;

    if(selectList == "0") {
        careerContent.style.display = "block"
        desContent.style.display = "block";
        profileContent.style.display = "none";
        if(window.matchMedia('(orientation: landscape)').matches && widthCheck < 769) {
            careerContent.style.display = "none";
        }
    } else if(selectList == "1") {
        careerContent.style.display = "none";
        desContent.style.display = "none";
        profileContent.style.display = "block";
    } else if(selectList == "2") {
        careerContent.style.display = "none";
        desContent.style.display = "block";
        profileContent.style.display = "none";
    }
}

let asideButton = document.querySelector('.button_close');
let divAside = document.querySelector('.aside');

asideButton.addEventListener('click', function() {
    divAside.style.display = "none";
})