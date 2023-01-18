// index.js


// index.js

let paragraph = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('id');
// index.js


// paragraph.setAttribute('id', 'info-paragraph');



let links = document.getElementsByClassName('link');



let link  = document.getElementById("google-link")

link.setAttribute('href', 'https://www.google.com')




let divs = document.getElementsByTagName('div');



// index.js



// index.js
// ...

let h2Tag = document.createElement('h2');
// index.js
// ...

h2Tag.innerHTML = 'Elephant';
// index.jslet cont
// ...

let content = document.getElementById('content')
let parent = document.getElementsByTagName('body')[0];

// index.js
// ...
let text = document.createTextNode('This text is created dynamically  ');

parent.appendChild(text);



parent.appendChild(h2Tag);
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

// index.js
// ...
let theParagraph = document.getElementById('paragraph');
parent.removeChild(theParagraph);








// index.js
// ...

let button = document.getElementById('add-item-button');

let list = document.getElementById('item-list')

let elementToCreate = document.createElement('li')
let counter = 1

// index.js
// ...

// let input = document.getElementsByTagName('input')[0];
// console.log(input.value); //=> ""

let sendButton = document.getElementById('send-btn');
// move the input inside the function (this step is optional):
sendButton.onclick = function() {
  let input = document.getElementsByTagName('input')[0]; // or leave it as it is, outside
  console.log(input.value);
};




button.onclick = function() {
    let elementToCreate = document.createElement('li')
    elementToCreate.innerHTML = `Item Number ${counter}`
    elementToCreate.onclick = function(e) {
        console.log(e.currentTarget);
      };
    list.appendChild(elementToCreate)
    counter++
    addClick()
  console.log('adding an element to the list');
};

// let addClick = document.getElementById("add-click")

function addClick () {
    let liTags = document.getElementsByTagName('li');
    
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].onclick = function(e) {
        console.log(e);
      };
    }
}
 
// addClick.onclick = function() {
//     let liTags = document.getElementsByTagName('li');
    
//     for (let i = 0; i < liTags.length; i++) {
//       liTags[i].onclick = function(e) {
//         console.log(e.currentTarget.innerHTML);
//       };
//     }

// }






