let day = "Monday";
    
    switch (day){
    case "Monday":
        console.log("there are 6 day(s) untill the weekend")
        break;
        case " Tuesday":
        console.log("there are 5 day(s) untill the weekend")
        break;
        case "Wednseday":
            console.log("there are 4 day(s) untill the weekend")
            break;
        case "Thursday":
            console.log("there are 3 day(S) until the weekend")
            break;
        case "Friday":
            console.log("there are 2 day(s) untill the weekend") 
            break;
        case "sturday":
            console.log("there are 1 day(S) untill the weekend")
            break;
        case ("Sunday"):
            console.log("Sunday is Funnday") 
            break;
            default:
                console.log("invaild input")                  
   } 

   let num = 2
   let num1 = 3
   num1 == num ? console.log("Both the number are equal") : num1>num
   ? console.log(`the larger number among the two number is ${num1}`)
   :console.log(`the larger number among the two number is ${num}`)

   let tot = 4
   for(let i = 1; i<=10; i++){
        console.log(`${tot} * ${i} = ${tot*i}`)
   }


   let x = 20;
   for (i=0; i<=20; i++){
    if (i%2 == 0){
        console.log(i)
    }
   }