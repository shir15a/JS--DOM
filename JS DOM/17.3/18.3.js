// const myFirstDiv = document.querySelector("#myFirstDiv");
// const mySecondDiv = document.querySelector("#mySecondDiv");
// const myThirdDiv = document.querySelector("#myThirdDiv");
// const myFourthDiv = document.querySelector("#myFourthDiv");


const divArr = document.querySelectorAll('div');

const divArr2 = document.querySelectorAll("body > *")

for(let i = 0; i < divArr.length; i++){
    divArr[i].textContent = i;
    divArr[i].style.background = 'red';
};

