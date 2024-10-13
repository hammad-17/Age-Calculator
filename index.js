function calculateAge() {
    let userInput = document.getElementById("BirthDate").value;
    let bornDate = new Date (userInput);
    let currentDate = new Date();

    if(!userInput){
        alert("Please Enter Your Date Of Birth")
    }

    let bornYear = bornDate.getFullYear();
    let bornMonth = bornDate.getMonth();
    let bornDay = bornDate.getDate();


 //Age
    let age = currentDate.getFullYear() - bornYear;
    let differenceInMonths = currentDate.getMonth() - bornMonth;
    let differenceInDays = currentDate.getDate() - bornDay;
    if (differenceInMonths < 0 || differenceInMonths === 0) {
        age++;
    
    }

//Coming Birthday     
    let comingBirthday = new Date(currentDate.getFullYear(), bornDate.getMonth(), bornDate.getDate());
    if (comingBirthday < currentDate) {
        comingBirthday.setFullYear(comingBirthday.getFullYear() + 1);
    }

//Remaining Days In Next Birthday
    let daysRemaining = Math.ceil((comingBirthday - currentDate) / (1000 * 60 * 60 * 24));
    let years = age;
    let months = Math.abs(differenceInMonths);
    let days = Math.abs(differenceInDays);

    document.getElementById("result").innerText =
    `Your age is ${years} years, ${months} months and ${days} days` + "\n" +
        `Your next birthday is on ${comingBirthday} and it's ${daysRemaining} days remaining.`;
 }