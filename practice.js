function upper(){
    let counter = 0;
     function inner() {
        counter++;
        console.log(counter)
     }
     inner();
} 
upper();
