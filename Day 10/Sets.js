// Sets introduced as ES6

/**
 * In JavaScript, a Set is a collection of unique values. When you add values to a Set,
 * duplicates are automatically removed. Here, you first create an array users, then
 * convert it into a Set to eliminate duplicates. Finally, you use the spread
 * operator (...) to convert the Set back to an array.
 */
const users = ["ram", "sam", "ram", "rajesh"];
console.log(users); // Output: [ 'ram', 'sam', 'ram', 'rajesh' ]

const uniqueUsers = new Set(users);
console.log(uniqueUsers); // Output: Set(3) { 'ram', 'sam', 'rajesh' }

const uniqueUsersArray = [...new Set(users)];
console.log(uniqueUsersArray); // Output: [ 'ram', 'sam', 'rajesh' ]

const mySet = new Set([1, 2, 3]);
mySet.add(6); // Adds 6 to the Set
mySet.add(87).add(90); // Adds 87 and 90 to the Set
console.log(mySet.delete(85)); // Output: false (85 is not in the Set)
console.log(mySet.delete(85)); // Output: false (still not in the Set)
console.log(mySet.size); // Output: 5 (there are 5 elements in the Set)
console.log(mySet.has(85)); // Output: false (85 is not in the Set)

mySet.forEach((val) => {
  console.log(val);
});
/**
 * 1
   2
   3
   6
   87
   90

 */
const set = new Set(["Apple", "Mango", "Banana"]);
console.log(set);
// Output: Set(3) { 'Apple', 'Mango', 'Banana' }

const iterator = set.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
// Output: [ 'Apple', 'Apple' ] (entries return key-value pairs, here both are the same for Sets)

const iteratekeys = set.keys();
console.log(iteratekeys.next().value);
console.log(iteratekeys.next().value);
console.log(iteratekeys.next().value);
// Output: 'Apple' (keys() returns the elements themselves in a Set)

/**
 * 1.Subset
 *    A = 1,2,3
 *    B = 5,6,1,2,3,4
 *    C = 1,3,4,5
 * 2.union
 * 3.Interection
 * 4.Difference
 */
/*
Set.prototype.subset:
1.This method first checks if the size of the current set (this) is greater than the size 
of otherSet. If it is, it returns false because a larger set can't be a subset of a smaller set.
2.It then iterates over all elements in the current set and checks if each element 
exists in otherSet using the .has() method.
3.If any element is missing in otherSet, it returns false; otherwise, it returns true 
after checking all elements.
*/
Set.prototype.subset = function (otherSet) {
  if (this.size > otherSet.size) {
    return false;
  } else {
    for (var element of this) {
      if (!otherSet.has(element)) return false;
    }
    return true;
  }
};

const setA = new Set([1, 2, 3]);
const setB = new Set([5, 6, 1, 2, 3, 4]);
const setC = new Set([1, 3, 4, 5]);

console.log(setA.subset(setB));
// Output: true (setA is a subset of setB)

console.log(setB.subset(setC));
// Output: false (setB contains elements not in setC)

console.log(setC.subset(setA));
// Output: false (setC contains elements not in setA)

/**
 * Set.prototype.union:
A new Set named unionSet is created to store the result.
It first iterates over all elements of the current set (this) and adds each element 
to unionSet.
Then, it iterates over all elements of otherSet and adds each element to unionSet.
The Set automatically handles duplicates, so elements that exist in both sets are 
only added once.
 */

Set.prototype.union = function (otherSet) {
    const unionSet = new Set();
    for (let element of this) {
      unionSet.add(element);
    }
    for (let element of otherSet) {
      unionSet.add(element);
    }
    return unionSet;
  };
  
  console.log(setA.union(setB)); 
  // Output: Set(6) { 1, 2, 3, 5, 6, 4 } (elements from both setA and setB combined)
  
  console.log(setB.union(setC)); 
  // Output: Set(6) { 5, 6, 1, 2, 3, 4 } (elements from both setB and setC combined)
  
  console.log(setC.union(setA)); 
  // Output: Set(5) { 1, 3, 4, 5, 2 } (elements from both setC and setA combined)

  /**
  setA.union(setB):

Combines elements from setA ([1, 2, 3]) and setB ([5, 6, 1, 2, 3, 4]), 
resulting in {1, 2, 3, 5, 6, 4}.

setB.union(setC):
Combines elements from setB ([5, 6, 1, 2, 3, 4]) and setC ([1, 3, 4, 5]), 
resulting in {5, 6, 1, 2, 3, 4}.

setC.union(setA):
Combines elements from setC ([1, 3, 4, 5]) and setA ([1, 2, 3]), 
resulting in {1, 3, 4, 5, 2}.
   */