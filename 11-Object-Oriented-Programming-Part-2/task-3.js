function Hamster() {

   this.food = []; // empty "stomach"

    this.found = function (something) {
        this.food.push(something);
    };
}

// Create two hamsters and feed the first
let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)