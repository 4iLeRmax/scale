let block1 = document.querySelector('.block-1');
let block2 = document.querySelector('.block-2');
let circle = document.querySelector('.circle');

let out = document.querySelector('.out-1');

block1.addEventListener('touchstart', myTouch);
function myTouch(e){
  console.log(e);
  console.log(e.touches.length);
  // out.innerHTML+= 'work ';
  console.log('start');
}
block1.ontouchend = (e)=>{
  console.log('end');
}


let y1;
let y11;

let y2;
let y22;

block2.ontouchstart = (e)=>{
  y1=e.touches[0].clientY;
  y11=e.touches[1].clientY;
  console.log(y1);
  // console.log(y1,y11);
}
block2.ontouchmove = (e)=>{
  e.preventDefault();
  y2 = e.touches[0].clientY;
  y22 = e.touches[1].clientY;
  console.log(y2);
  // console.log(y2,y22);
  // if(y1 > y2){
  //   console.log("big  " + (y1-y2));
  // }
  // else if(y1<y2){
  //   console.log('small  ' + (y1-y2));
  // }
  if(y1 > y2 || y11 < y22){
    console.log('увеличение  ' + (y1-y2));
    out.innerHTML+= 'увеличение' + '<br>';
  }
  else if(y1 < y2 || y11 > y22){
    console.log('уменьшение  ' + (y1-y2));
    out.innerHTML+= 'уменьшение' + '<br>';
  }
  return false;
}

