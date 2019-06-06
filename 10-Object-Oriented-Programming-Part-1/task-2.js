function CoffeeMachine(power, capacity) {
    let pw = power;
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive.");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function () {
        return pw;
    }
}
const n = new CoffeeMachine(100, 200);
console.log(n.getPower());