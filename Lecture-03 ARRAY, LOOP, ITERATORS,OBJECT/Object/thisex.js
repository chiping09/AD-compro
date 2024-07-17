const cat = {
    name: "Popey",
    age: 8,
    whatName() {
        return this.name;
    },
};

console.log(cat.whatName());

cat.name = "Nezzar";
console.log(cat.whatName());