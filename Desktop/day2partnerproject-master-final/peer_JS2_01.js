/*
1. Start with the number 35 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 58
2-1. If true, add 7 to 'value'
2-2. If false, subtract 2 from 'value'

3. Create a string that is set to 78, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

9. If the new value of 'value' is greater than 3451, set 'value' equal to 24. If not, check to see if it is equal to 7923, if it is, set 'value' equal to 67. 
If neither of these are true, set the value to 19.

10. Create a while loop that counts down from 17 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 6. Is that what you got?
*/
var value = 35;

if(value >= 58){
	value += 7;
} else {
	value -= 2;
}

var string = "78";

value = value + string;

var array = [];

for(i=0; i<value.length; i++){
	array[i]= value[i]
}

array.pop();

array.shift();

var tom="";

for(i=1; i>=0; i--){
	tom+=array[i]
}
console.log(tom)

value=parseInt(value);
tom=parseInt(tom);

value=tom+value;
if(value>3451){
	value=24;
}else if(value=7923){
	value=67;
}else{
	value=19;
}

i=17
while(i>0){
	value++;
	i--;
}
console.log(tom)
console.log(value)