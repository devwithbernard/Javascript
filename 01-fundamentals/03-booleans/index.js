/* Booleans in javascript */

// Primitive type
let isPending = false;
let isDone = true;

if(isDone){
    console.log("Processing is over");
}else{
    isPending = true;
    console.log("Processing continue ...");
}

// typeof primitive type
console.log(typeof isPending); // boolean
console.log(typeof isDone); // boolean

// Javascript boolean object

let str = "Hello";
let str_to_bool = Boolean(str);

console.log(str_to_bool); // true
console.log(typeof str_to_bool);// boolean

console.log(Boolean("")); // false

let isConnected = new Boolean(false);
console.log(typeof isConnected); // object
console.log(isConnected instanceof Boolean); // true

// Exercise
let completed = false;
document.addEventListener("DOMContentLoaded", async() =>{
    const posts = await getPosts();
    console.table(posts);
})
function getPosts(){
    return new Promise(async (resolve, reject)=>{
        if(!completed){
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const posts = await response.json();
                resolve(posts);
            }catch (error){
                reject(error?.message || 'Processing failed!');
            }
        }
    })
}