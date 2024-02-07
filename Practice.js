// let day = "Monday";
    
//     switch (day){
//     case "Monday":
//         console.log("there are 6 day(s) untill the weekend")
//         break;
//         case " Tuesday":
//         console.log("there are 5 day(s) untill the weekend")
//         break;
//         case "Wednseday":
//             console.log("there are 4 day(s) untill the weekend")
//             break;
//         case "Thursday":
//             console.log("there are 3 day(S) until the weekend")
//             break;
//         case "Friday":
//             console.log("there are 2 day(s) untill the weekend") 
//             break;
//         case "sturday":
//             console.log("there are 1 day(S) untill the weekend")
//             break;
//         case ("Sunday"):
//             console.log("Sunday is Funnday") 
//             break;
//             default:
//                 console.log("invaild input")                  
//    } 

        let student = {
            Rishu : 98,
            Harendra : 100,
            Vikku : 87,
            Shivam : 90,
            Gaurav :60
        }

        let keys = Object.keys(student)
        console.log(keys)

        for (let i = 0; i<keys.length; i++){
            let key  = keys[i];
            let value = student[key];
            console.log(key +":"+ value);
        }

        for (const key in student) {
                const element = student[key];
            console.log(key +":" + element)
        }

        for (let i = 0 ; i<10 ; i++){
            console.log("try again")
        }

















//    let num = 2
//    let num1 = 3
//    num1 == num ? console.log("Both the number are equal") : num1>num
//    ? console.log(`the larger number among the two number is ${num1}`)
//    :console.log(`the larger number among the two number is ${num}`)

//    let tot = 4
//    for(let i = 1; i<=10; i++){
//         console.log(`${tot} * ${i} = ${tot*i}`)
//    }


//    let x = 20;
//    for (i=0; i<=20; i++){
//     if (i%2 == 0){
//         console.log(i)
//     }


    // let students = {
    //     Rishu: 90,
    //     Harendra : 95,
    //     Shivam: 86, 
    //     Vikku : 78,
    //     Gaurav : 82
    // }
    // let keys = Object.keys(students);
    // console.log(keys)
  
    //   // Using a for loop to iterate over the keys and print the corresponding values
    //   for (let i = 0; i < keys.length; i++) {
    //     let key = keys[i];
    //          console.log(key)
    //     let value = students[key];
    //     console.log(value)
    //     console.log(key + ': ' + value);
    //   }
   
   
    
        
    
//    }







// let myObject = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
//   };
  
//   // Get an array of object keys
//   let keys = Object.keys(myObject);
  
//   // Using a for loop to iterate over the keys and print the corresponding values
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     let value = myObject[key];
//     console.log(key + ': ' + value);
//   }
  