
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/tokyo.jpg'){
    myImage.setAttribute('src','images/tokyo1.jpg');
  }else{
    myImage.setAttribute('src','images/tokyo.jpg');
  }
}

function setUserName(){
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  }else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Tokyo is cool,'+ myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Tokyo is the best,'+storedName;
}
myButton.onclick = function(){
  setUserName();
}
