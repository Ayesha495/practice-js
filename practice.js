// function upper(){
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     return inner;  // Return inner, don't call iit, return it!!!!!!!!!
// }
//     const fn = upper();  // Now fn is assigned the inner function
// fn(); // 1
// fn(); // 2

// /*
// in JS, when we return a function from another function, we are effectivey returning a combination of the function along with the function's scope. This would let
// the function definition have an associated memory which could hold onto live data between executions. That combination of the function and it's scope is called closure in JS.    
// */

function createCount() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },

        decrement: function() {
            count--;
            console.log(count);
        },

        getCount: function() {
            return count;
        }, 
    }
}

const counter = createCount();
counter.increment();
counter.increment();
counter.decrement();
const cont = counter.getCount();
console.log(cont);