

function filterSelection(choose) {
  var element = document.getElementsByClassName("menuCard");
  for(var i=0, j=element.length; i<j; i++){
    if(element.classList.contains(choose)){
      console.log(choose);
    }
  }
}
