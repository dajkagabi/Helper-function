Helper Functions

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary. 



n the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.

Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.

Time to add some code to the function body of costOfMonitors to calculate the total cost.

Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.


We should save the cost to a variable.

Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

o check that the function worked properly, log totalCost to the console.

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors (rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);