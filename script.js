function createDiv1(num) {
    // var i = 0
    for (i = 0; i < num; i++) {
      if (i % 2 === 0){
        var newDiv = document.createElement('div');
        newDiv.className = 'div' + i;
        newDiv.style.width = '11.1%';
        newDiv.style.float = 'left';
        newDiv.style.paddingBottom = '11.1%';
        newDiv.innerHTML = 'hello';
        document.body.appendChild(newDiv);
        newDiv.style.backgroundColor = 'black';
      }
      else {
        var newDiv = document.createElement('div');
        newDiv.className = 'div' + i;
        newDiv.style.width = '11.1%';
        newDiv.style.float = 'left';
        newDiv.style.paddingBottom = '11.1%';
        newDiv.innerHTML = 'hello';
        document.body.appendChild(newDiv);
         newDiv.style.backgroundColor =  getRandomColor();
        // newDiv.style.backgroundImage = 'url(https://68.media.tumblr.com/2176d3adcc664b0c61dbfa4ec8b4b060/tumblr_n65sxotE9N1ttcngfo1_400.gif)'
        newDiv.style.color = 'white';
      }
    }
}

createDiv1(63)


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
