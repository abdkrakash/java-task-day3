var range = 20; 

for (var num = 2; num <= 20; num++) {
    var prime =true ; 

   
    for (var x = 2; x < num; x++) {
        if (num % x === 0) {
            prime =false ; 
            break; 
        }
    }

    if (prime) {
       document.writeln(num); 
    }
}


// -----If we want to write non-prime numbers other than 20,
// ----- it is preferable to just change the word true to the word false.
// ----- for the sake of change, Coach *_*


// var range = 20; 

// for (var num = 2; num <= 20; num++) {
//     var prime =false ; 

   
//     for (var x = 2; x < num; x++) {
//         if (num % x === 0) {
//             prime = true; 
//             break; 
//         }
//     }

//     if (prime) {
//        document.writeln(num); 
//     }
// }
