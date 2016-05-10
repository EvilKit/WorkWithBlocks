var ball = document.getElementById('ball');
var a1= document.getElementById('a1');
var ax=500;
var ay=400;
var c=0;
ball.onmousedown = function move(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  ball.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(ball);
  ball.style.zIndex = 1000; // показывать мяч над другими элементами
  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    bx=e.pageX - ball.offsetWidth / 2 ;
	ball.style.left = bx+ 'px';
    by=e.pageY - ball.offsetHeight / 2 ;
	ball.style.top = by+ 'px';
  }
  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e); 
	non();
	 console.log(bx);
  console.log(by)
  }
  // 4. отследить окончание переноса
  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
	if(c==1){
		ball.style="left:500px;top:400px";
		ball.style.width="150px";
		ball.style.height="150px";
	}
  }

 
}
ball.ondragstart = function() {
  return false;
};
// прописываю координаты для a1


function non(){
if(Math.abs(bx-ax)<=80 && Math.abs(by-ay)<=80 ){
		
		ball.style.background="blue";
		ball.style.width="150px";
		ball.style.height="150px";
		c=1;
		}
    if(Math.abs(bx-ax)>=80 && Math.abs(by-ay)>=80){
    ball.style.background="red";
		ball.style.width="100px";
		ball.style.height="100px";
        c=0;
    }
}
