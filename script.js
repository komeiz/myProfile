
let allAboutTexts = [...document.querySelectorAll(".abt-t")];
let allAboutBtns = [...document.querySelectorAll(".abt-btns")];
let parentbtns =document.querySelector('.texts-btns');

const para = document.querySelector(".info");
para.innerHTML = allAboutTexts[0].innerHTML;




function AboutMeClicks(num) {
  let demo = document.querySelector(".info");
  if ((num >= 0 && allAboutTexts.length)) {
    demo.innerHTML = allAboutTexts[num].innerHTML;
     parentbtns.querySelector('.active').classList.remove('active');
     allAboutBtns[num].classList.add('active');
  } else {
    return  
  }

}
// let defaultImage = document.querySelector('.default-image');


// let images = ['imageofme2.png','imageofme3.png','imageofme4.png']
// let i =0


// function prev(){
// if (i<=0) i=images.length;
// i--;
// return setImg();
// }


// function next(){
// if(i>=images.length -1) i=-1;
// i++;
// return setImg();
// }

// function setImg(){

//   return defaultImage.setAttribute('src',`./images/${images[i]}`)

// }














