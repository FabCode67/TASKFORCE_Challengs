# TASKFORCE_Challengs 

## Challenge #0 UI Challenge: Interactive Photo Gallery

#### File structure

`|-----UI-Challenge--|--Assests(folder for images)
|                   |--style.css
|
|-index.html
|-array_manipulation_challeng.js
|-string_transformation_challenge.js`

#### Implimentations:

- I  used index.html to create an interface of Photo Garellery
- I used style.cc to style all of those Photo Garelly and making all Photos to be responsive in small devices as it is in Large divices
- I used media queries to make responsivness of my interface

#### How can be mannualy tested

- git clone from repo
- cd int repo folder
- Type code .
- If you are using vscode editor, run live server
- If you are using other editor, please flow a commands to run html file on that editor
- If you want to use a live link, here it is: https://taskforcech.netlify.app

## Challenge #1 Array Manipulation

-- It is located in array_manipulation_challeng.js file
#### Implimentation
- I initialized currSum to keep track of the running sum and start to mark the beginning of the current subarray.
- I iterated through the array using end and add each element to currSum.
- If currSum becomes greater than the target, I subtracted elements from the start of the subarray until currSum is less than or equal to the target. This is done by 
 subtracting arr[start] from currSum and incrementing start.
- If currSum becomes equal to the target, I returned true since I have found a subarray with the target sum.
- If I reached the end of the array without finding a subarray with the target sum, I returned false.

## Challenge #2 String Transformation

-- It is located in string_transformation_challenge.js file

#### Implimentation

- I first get the length of the string using str.length.
- I check if the length of the string is divisible by 3. If it is, I use str.split('') to convert the string into an array of characters, then reverse() to reverse the order of the characters, and finally join('') to convert it back to a string.
- Next, I checked if the length of the string is divisible by 5. If it is, I used str.split('') to convert the string into an array of characters, then map(char => char.charCodeAt(0)) to replace each character with its ASCII code using the charCodeAt() method, and finally join(' ') to convert the array back to a string with spaces separating the ASCII codes.

  

