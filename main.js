/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").replaceChildren("I used the getElementById(“node1”) method to access this");

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].replaceChildren("I used the getElementsByClassName method to access this");

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3 = document.getElementsByTagName("h3");

for (let i = 0; i < h3.length; i++) {
    h3[i].replaceChildren("I used the getElementByTagName method to access all of these");
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement("p")
p.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementById("parent")
parent.appendChild(p);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
let a = document.createElement("a");
a.textContent = "I am a <p> tag";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(a, p);

// BONUS: Add a link href to the <a>
a.href = "index.html";

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let child1 = document.getElementById("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
child1.replaceWith(newChild);

// TODO: Remove the "New Child Node"
newChild.remove();

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
let box = document.getElementById("box");
box.style.left = ("150px");


// BONUS - Make the red box go all the way around the perimeter of the green box */
function doLaps() {
    setTimeout(left(), 1000);
    setTimeout(left(), 1000);
    setTimeout(top(), 1000);
    setTimeout(left(), 1000);
    setTimeout(top(), 1000);
    
    function top() {
        if(box.style.top == "150px") {
            box.style.top = "0px"
        } else {
            box.style.top = "150px"
        }
    }

    function left() {
        if(box.style.left == "150px") {
            box.style.left = "0px"
        } else {
            box.style.left = "150px"
        }
    }
}

doLaps();


/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
function show() {
    let div = document.createElement("div");
    div.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    
    let button = document.getElementById("btn");
    button.parentNode.insertBefore(div, button);
}

// This div should be a 'modal' that covers the main content on the screen


// BONUS: The modal popup should be able to be closed. Refactor for this functionality
