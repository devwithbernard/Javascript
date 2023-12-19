// Error handling, "try ... catch"
try{
    console.log('Number reversed:');
    let calculus = 10 / Infinity;
    console.log('Result: ', calculus);
}catch(error) {
    console.log(error);
}

// try ... catch works synchronously
try{
    setTimeout(()=>{
        console.log(logger);
    }, 1000)
}catch (error) {
    console.log('won\'t work!', error);
}

// Place try ... catch inside the function that schedules operation
setTimeout(()=>{
    try{
        console.log(logger);
    }catch (error) {
        console.log("won't work!");
    }
}, 1000);


// Error object
try{
    console.log(lalala);
}catch (error) {
    console.log(error?.name, error?.message, error?.stack);
}