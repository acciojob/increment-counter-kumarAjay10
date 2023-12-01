//your JS code here. If required.

let count = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

 let counterValue = 0;
 count.textContent = counterValue;
funtion myFun(){
	alert( "un-incremented value: " + counterValue );
	counterValue++;
	count.textContent = counterValue;
}
incrementBtn.addEventListener("click",myFun);
