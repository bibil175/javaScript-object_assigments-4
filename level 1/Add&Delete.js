const user= {
    username: "bibil",
    email: "yeojabil@gmail.com"
};

user.isActive = true;
delete user.email;

console.log(user);