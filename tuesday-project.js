// Arr=[1,1,2,2,3,3,4,4,5,6,6]
// Arr1=[3,3,6,6,7,7,9,9,45]
// const findNonRepeatingNumber=(arr)=>{
//   let i=1;
//  for (i=1 ;i< arr.length; i+=2){
//    if (arr[i-1]!==arr[i]){
   
      
//      break;
//    }
//  }return(arr[i-1])
    
//   }
// console.log(findNonRepeatingNumber(Arr1))
// const isPalindrome=(word)=>{
//   const reversed=word.split('').reverse().join('')
//   //O(n)
//   return word===reversed
// }
// console.log(isPalindrome('eyedipadanadapideye'))

// const isPalindrome2=(word)=>{
// let i=0;
// const len=word.length //O(1)
// const mid=Math.floor(len/2) //O(1)
// while( i<mid){
//   if (word[i]!==word[len-i-1]){    //O(1)
 
//   return false
// }i++; //O(1)
// }return true //O(n/2)*3~o(n)
// }
// console.log(isPalindrome2('eyedipadanadapideye'))

// Write a function to print a sum of numbers for each number before that
// Ex:5
//Ans 1,3,6,10,15
// const printSumOfNumbersForEachNumber=(num)=>{
// const ans=[];
//   for (i=1; i<=num; i++){ //O(n)
//     let sum=0;
//      for (j=1; j<=i; j++){
//        sum+=j //O(i)

//      }
//      ans.push(sum)
//   }return ans; //O(n)*O(n)~(n^2)
// }
// const printSumOfNumbersForEachNumber = num => {
//   const result = [];
//   let sum = 0;
//   for(let i=1; i<=num; i++) {
//     sum += i;
//     result.push(sum)
//   }
//   return result;
// }

// Recursion
// const sumOfNumbersForEachNumberRecursion = (num) => {
// 	// Base case
// 	if (num === 1) {
// 		return [1]
// 	}
// 	const ans = sumOfNumbersForEachNumberRecursion(num - 1); // [1]
// 	ans.push(ans[ans.length - 1] + num);
// 	return ans;
// }
// console.log(printSumOfNumbersForEachNumberRecursion(30))

const calculateFactorial=(num)=>{
  let result=1;
  for (i=1; i<=num; i++){
    result=result*i
  }return result;
}
console.log(calculateFactorial(5))