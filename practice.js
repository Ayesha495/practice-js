function upper(){
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;  // Return inner, don't call iit, return it!!!!!!!!!
    // const fn = upper();  // Now fn is assigned the inner function
fn(); // 1
fn(); // 2
