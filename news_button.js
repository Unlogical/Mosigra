function press(elem){
  if (elem["pressed"] == undefined){
  	elem.pressed = false;
  } 
  elem.pressed = !elem.pressed;
  if (elem.pressed) push(elem);
  else unpush(elem);
}

function push(elem){
  elem.style.backgroundColor = "#c33";
  elem.style.color = "#fff";
  elem.innerHTML = "Вы пойдёте";
}

function unpush(elem){
  elem.style.backgroundColor = "#fff";
  elem.style.color = "#c33";
  elem.innerHTML = "Я пойду!";
}

function hover(elem){
  if (elem.pressed) {
  	elem.style.backgroundColor = "#d44";
    elem.style.color = "#fff";
    elem.innerHTML = "Не пойду";
  } else {
  	  elem.style.backgroundColor = "#b11";
      elem.style.color = "#fff";
      elem.innerHTML = "Я пойду!";
  }
}

function unhover(elem){
if (elem.pressed) {
  elem.style.backgroundColor = "#b11";
  elem.style.color = "#fff";
  elem.innerHTML = "Вы пойдёте";
  } else {
  	 elem.style.backgroundColor = "#fff";
     elem.style.color = "#b22";
     elem.innerHTML = "Я пойду!";
  }
}

