function hasTargetSum(array, target) {
  // Write your algorithm here
  
  for(let i = 0; i < array.length; i++){
    
    const x = target - array[i];
    for(let y = i+1; y < array.length; y++){
    if(array[y] === x)
      return true;
    }
  }
  return false;
}
hasTargetSum([3,8,6,4,1,9], 10);
/* 
  Write the Big O time complexity of your function here

  Given an input array of n elements, worst case scenario is that the algorithm needs
  make (n*n) iterations
*/

/* 
  Add your pseudocode here

  Iterate through each number in the array
  loop through the rest of the array
  If sum of two numbers in the array match with the target, return true
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
