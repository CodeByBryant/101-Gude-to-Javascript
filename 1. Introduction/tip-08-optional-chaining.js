// Optional chaining to avoid errors

const user = { profile: { email: "a@b.com" } };

console.log(user?.profile?.email);   // "a@b.com"
console.log(user?.settings?.theme);  // undefined
