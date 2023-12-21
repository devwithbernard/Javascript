// TODO -> Walking the DOM

/**
 *
 * @type {HTMLElement}
 */
let htmlElement = document.documentElement;

console.log(htmlElement);

// Head element
let head = document.head;
console.log(head)

// Body element
let body = document.body;
console.log(body);

// TODO -> Children : childNodes, firstChild, lastChild
let childNodes = document.body.childNodes;

for(let i = 0; i < childNodes.length; i++) {
    let childNode = childNodes[i];
    console.log(`Node ${i}`, childNode);
}

console.log('First child: ',document.body.firstChild);
console.log('Last child:', document.body.lastChild);

// TODO -> DOM Collection

for (let child of childNodes) {
    console.log(child)
}

// TODO -> Siblings and Parent

const child1 = document.querySelector('.child-1');
const child2 = document.querySelector('.child-2');

child1.addEventListener('click', () => {
    child1.nextElementSibling.style.background = 'red';
})

child1.addEventListener('mouseenter', () => {
    child1.parentElement.style.background = 'lightgreen';
})

child1.addEventListener('mouseleave', () => {
    child1.parentElement.style.background = 'inherit';
})


child2?.addEventListener('mouseenter', () => {
    child2.previousElementSibling.remove()
} )

child2?.addEventListener('mouseleave', () => {
    let sibling = document.createElement('div');
    sibling.setAttribute('class', 'child-1');

    child2.parentElement.append(sibling)
})

let allElementsOfBodyNode = document.body.children;

let intervalId = setInterval(() => {
    allElementsOfBodyNode = document.body.childNodes;
    let i = 0;
    if(allElementsOfBodyNode.length > 0) {
        if(allElementsOfBodyNode[i].hasChildNodes()) {
            allElementsOfBodyNode = allElementsOfBodyNode[i].childNodes;
            allElementsOfBodyNode[i].remove()
            i++
        }
        allElementsOfBodyNode[i].remove()
    }

    if(allElementsOfBodyNode.length === 0) {
        clearInterval(intervalId)
    }
}, 1000)
