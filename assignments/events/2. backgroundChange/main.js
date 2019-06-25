let changeBackground = () =>{
  let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let str = "#";
  for(let i = 0; i <= 5; i++){
    str += hexArray[Math.round(Math.random()*(hexArray.length-1))];
  }
  console.log(str);
  document.body.style.backgroundColor = str;
}
window.addEventListener("click", changeBackground);
changeBackground();