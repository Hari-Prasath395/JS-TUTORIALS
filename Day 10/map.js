const userMap = new Map();

// Add elements to the map
userMap.set("name", "Kumaran");
userMap.set("age", 25);
userMap.set("City", "Salem");
userMap.set("Contact", "921947324");

// Printing Map object
console.log(userMap);
// Output: Map(4) { 'name' => 'Kumaran', 'age' => 25, 'City' => 'Salem', 'Contact' => '921947324' }

// Update the value for age
userMap.set("age", 30);
console.log(userMap);
// Output: Map(4) { 'name' => 'Kumaran', 'age' => 30, 'City' => 'Salem', 'Contact' => '921947324' }

//To find Map size
console.log(userMap.size);

// Delete key
console.log("Map size before delete: " + userMap.size);
// Output: Map size before delete: 4

userMap.delete("age");
console.log("Map size after delete: " + userMap.size);
// Output: Map size after delete: 3

console.log(userMap);
// Output: Map(3) { 'name' => 'Kumaran', 'City' => 'Salem', 'Contact' => '921947324' }

// Get
console.log(userMap.get("name"));
// Output: Kumaran

// Has
console.log(userMap.has("name")); // Output: true
console.log(userMap.has("age")); // Output: false

//Iterating Map with for of loop

// Iterating through the Map using for...of
for (let [key, value] of userMap) {
    console.log(`${key} = ${value}`);
  }
  // Output:
  // name = Kumaran
  // City = Salem
  // Contact = 921947324
  
  // Keys
  for (const key of userMap.keys()) {
    console.log(key);
  }
  // Output:
  // name
  // City
  // Contact
  
  // Values
  for (const value of userMap.values()) {
    console.log(value);
  }
  // Output:
  // Kumaran
  // Salem
  // 921947324
  
  // Entries
  for (const [key, value] of userMap.entries()) {
    console.log(`${key} = ${value}`);
  }
  // Output:
  // name = Kumaran
  // City = Salem
  // Contact = 921947324
  
  // ForEach
  userMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
  // Output:
  // name = Kumaran
  // City = Salem
  // Contact = 921947324
  
  // Relation with Array Objects
  const arr = [
    ["key 1", "value 1"],
    ["key 2", "value 2"],
  ];
  
  const myMap = new Map(arr);
  console.log(myMap);
  // Output: Map(2) { 'key 1' => 'value 1', 'key 2' => 'value 2' }
  