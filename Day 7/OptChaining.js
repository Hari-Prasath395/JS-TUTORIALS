//optional Chaining

/**
 * Optional chaining (?.) is a feature in JavaScript that allows you to safely access 
 * deeply nested properties without having to manually check if each reference in the 
 * chain is valid. If any part of the chain is null or undefined, the entire expression 
 * will return undefined instead of throwing an error.
 */

/*
const user = {
  name: "Hari",
  address: {
    city: "DPI",
  },
};

console.log(user);
console.log(user.address);
console.log(user.address.city);

*/

const user = {
  name: "Hari",
  address: {
    city: "DPI",
  },
};

console.log(user);
// Output: { name: 'Hari', address: { city: 'DPI' } }

console.log(user.address);
// Output: { city: 'DPI' }

console.log(user.address.city);
// Output: 'DPI'

// Before Optional Chaining:

// Option 1: Using a ternary operator to check if 'address' exists
console.log(user.address ? user.address.city : undefined);
// Output: 'DPI'

// Option 2: Using a logical AND operator to safely access 'city'
console.log(user.address && user.address.city);
// Output: 'DPI'

// Option 3: Optional chaining with dot notation
console.log(user.address?.city);
// Output: 'DPI'

// Option 4: Optional chaining with bracket notation and dynamic key
let key = "city";
console.log(user.address?.[key]);
// Output: 'DPI'

const user_details = {
  userID: "456",
  account: {
    accountNumber: "AE75457",
    holder: {
      profile: {
        firstName: "Ram",
        lastName: "Prasath",
        birthDate: "1997-10-12",
      },
    },

    contact: {
      address: {
        city: "Salem",
        state: "Tamil nadu",
        country: "India",
      },
      phone: [
        {
          type: "Home",
          phoneNumber: "04343212322",
        },
        {
          type: "office",
          phoneNumber: "98732643223",
        },
      ],
    },
  },
};



//Find the user birthday and send him a greeting message

console.log(user_details.account?.holder?.profile?.birthDate); 
// Output: '1997-10-12'


