function Person(namePerson, employeeNumber, salary, ratingValue){ 
  this.name=namePerson;
  this.employeeNumber=employeeNumber;
  this.salary=salary;
  this.bonusRatingPerson=ratingValue;
  };

arrayAtticus = new Person("Atticus", "2405","47000",3);
arrayJem= new Person("Jem", "62347","635000",4,0);
arrayBoo = new Person("Boo", "11435","54000",3,0);
arrayScout = new Person("Scout", "6243","74750",5,0);

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];


//Create variables used to write to the DOM
//var newEl, newText, position;

//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);  //This is the first one, array needed to be changed to array[i]
  /*console.log(array[i])
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);*/
}

function calculateSTI(person){
  var newArray = [];

  newArray[0] = person.name;

  var employeeNumber = person.employeeNumber;
  var baseSalary = person.salary;
  var reviewScore = person.bonusRatingPerson;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round((baseSalary * (1.0 + bonus))*100)/100; // I just rounded down to the cent value here. 
  newArray[3] = baseSalary * bonus;
  //console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
  console.log(newArray);
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; //I think this is the third mistake, I dont know why one is being subtracted but it seems to make much more sense now

}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}



function displayPerson(name, percentageBonus, totalValueSalary, bonusValue){
  this.name=name;
  this.percentageBonus=percentageBonus;
  this.totalValueSalary=totalValueSalary;
  this.bonusValue=bonusValue
};



Atticus= new displayPerson(array[0][0],array[0][1],array[0][2],array[0][3]);
Jem= new displayPerson(array[1][0],array[1][1],array[1][2],array[1][3]);
Boo= new displayPerson(array[2][0],array[2][1],array[2][2],array[2][3]);
Scout= new displayPerson(array[3][0],array[3][1],array[3][2],array[3][3]);

arrayForDomPosting=[Atticus, Jem, Boo, Scout];

console.log(Atticus)

$(document).ready(function(){
  for(var i = 0; i < arrayForDomPosting.length; i++){
    appendDom(arrayForDomPosting[i]);
  }
});

function appendDom(object){
  $('.container').append('<div class="person"></div>');

  var $el = $('.container').children().last();

  $el.append('<div class = name>' + object.name + ':</div>');
  $el.append('<a class = percentBonus secondary> Bonus Percentage: <a class= colorMoney>' + Math.round(100*object.percentageBonus) +  '%</a></a>');
  $el.append('<a class = totalSalary secondary> Total Salary:  <a class= colorMoney>$' + object.totalValueSalary + ',    </a></a>');
  $el.append('<a class = Bonus secondary> Bonus Amount:  <a class= colorMoney>$' + Math.round(100*object.bonusValue)/100 + '    </a></a>');
}
