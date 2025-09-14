"use strict";

// Map data structure for key-value pairs
const userRoles = new Map();

// Setting values
userRoles.set("john", "admin");
userRoles.set("jane", "user");

// Getting values
console.log(userRoles.get("john")); // ✅ 'admin'
console.log(userRoles.has("jane")); // ✅ true

// Iterating over Map
for (const [user, role] of userRoles) {
  console.log(`${user} is a ${role}`);
}
