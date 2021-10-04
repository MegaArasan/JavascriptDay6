// Find the culprit and invoke the alert
    alert("I’m invoked!");
    // the error in the src="scripts.js" name error

// Explain the below how it works
    alert("I'm JavaScript!");  //semicolon is not a matter 
    alert('Hello') // this line is not having semicolon 
    alert(`Wor
    ld`)   //using backtiks we can write mulitiple line input
    alert(3 +
        1+
        2);     // this is multiple line code and its working

//  Fix the below to alert Guvi geek
    let admin=9, fname=10.5; 
    fname = "Guvi";
    lname = "geek"
    admin = fname+lname;
    console.log(admin)
    // alert( admin ); // "Guvi geek"

// Fix the below to alert hello Guvi geek
    let fname=10.5; 
    fname = "Guvi";
    lname = "geek"
    let name = fname+lname;
    alert( `hello ${name}` )   //use backtiks instead of using '' (quotion)

// Fix the below to alert sum of two numbers
    let a = prompt("First number?");
    let b = prompt("Second number?");
    alert(a+b)  //removes the semicolon it terminates the line before get the value

// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
    var a = "2" > "12";
    //Don't touch below this
    if (a) {
        console.log("Code is Blasted")
    }
    else
    {
        console.log("Diffused") 
    } //If the first character from the first string is greater (or less) than the other string’s,
    //  then the first string is greater (or less) than the second. We’re done
    //in this way code is Blasted get executed ,if we put 32 in 12 iis diffused

// How to get the success in console.
    let a = prompt("Enter a number?");
    if (a) {
    console.log( 'OMG it works for any number inc 0' );
    }
    else
    {
    console.log( "Success" );
    } //to print success click enter without enter any number

//How to get the correct score in console.
    let value = prompt('How many runs you scored in this ball');
    if (value == 4) {
        console.log("You hit a Four");
    } else if (value == 6) {
        console.log("You hit a Six");
    } else {
        console.log("I couldn't figure out");
    } //using "==" instead of using "===" it matches exactly only 

// Fix the code to welcome the Employee
    let login = 'Employee';
   let message = (login == 'Employee') ||(login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :'';
  let message = (login == 'Employee') ||(login == 'Director') ? 'Greetings':'No login';
    console.log(message);
    // using clear the ternary operator

// Fix the code to welcome the boss
    let message;
    if (null || 2 || undefined )
    {
    let message = "welcome boss";
    console.log(message);
    }
    else
    {
    let message = "Go away";
    console.log(message);
    } //to put console.log(message) inside the if loop

// Fix the code to welcome the boss
    let message;
    let lock ;
    //Dont change any code below this 
    if (null || lock || undefined )
    {
    message = "Go away";
    }
    else
    {
    message = "welcome";
    }
    console.log(message); //remove the value declared for lock

// Fix the code to welcome the boss
    let message;
    let lock ;
    //Dont change any code below this
    if (lock && " " || undefined )
    {
    message = "Go away";
    }
    else
    {
    message = "welcome";
    }
    console.log(message); //remove the value declared for lock

// Change the code to print
    let i = 3;
    while (i) {
    console.log( i-- );
    } //change the increment

// Change the code to print 1 to 10 in 4 lines
    let num = 1
    for(i=num;i<=10;i++)
    {
        console.log(i)
    }

// Change the code to print even numbers
      for (let num = 2; num <= 20; num += 2) {
        console.log(num)
      } //change the increment value to 2

//Change the code to print all the gifts
    let gifts = ["teddy bear", "drone", "doll"];
    for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }  //change the ' into `(backtiks)

// Fix the code to disarm the bomb.
    let countdown = 100;
    while (countdown > 0) {
    countdown++;
    if(countdown == 0)
    {
    console.log("bomb triggered");
    }
    }  //change the while condition countown increased

// Whats the msg printed and why?
    var lemein ="0";
    var lemeout = 0;
    var msg = "";
    if (lemein) {
    msg += "hi";
    }
    if (lemeout) {
    msg += 'Hello';
    }
    console.log(msg);
    // in if loop string pass it returns true & 0 passit returns false so it print hi