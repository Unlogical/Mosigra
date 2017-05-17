window.onload = function(){
  var elements = document.getElementsByClassName('progress');
  for (var i=0; i<elements.length; i++)  {
  	if (elements[i].value > 70) {
	  elements[i].className = elements[i].className.replace('color', 'green');
	}
	if (elements[i].value > 40 && elements[i].value<=70) {
	  elements[i].className = elements[i].className.replace('color', 'yellow');
	}
	else {
	  elements[i].className = elements[i].className.replace('color', 'red');
	}
  }
  var elements = document.getElementsByClassName('progress-block');
  for (var i=0; i<elements.length; i++)  {
  	if (elements[i].firstElementChild.value > 70) {
	  elements[i].className = elements[i].className.replace('color-block', 'green-block');
	}
	if (elements[i].firstElementChild.value > 40 && elements[i].firstElementChild.value<=70) {
	  elements[i].className = elements[i].className.replace('color-block', 'yellow-block');
	}
	else {
	  elements[i].className = elements[i].className.replace('color-block', 'red-block');
	}
  }
}