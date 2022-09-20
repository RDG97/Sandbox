const atm = {
    ones: 10,
    fives: 10,
    tens: 10,
    twenties: 10,
    fifties: 10,
    hundos: 10,
    allMoney: function() {
        return this.ones + this.fives + this.tens + this.twenties + this.fifties + this.hundos;
    }
    
};
let inUse = atm;

function breakFive() {
    inUse.fives = inUse.fives + 1;
    inUse.ones = inUse.ones - 5;
};

function breakTen() {
    inUse.tens = inUse.tens + 1;
    inUse.fives = inUse.fives - 2;
};

function breakTwenty() {
    inUse.twenties = inUse.twenties + 1;
    inUse.tens = inUse.tens - 2;
};

function resupply() {
    inUse.ones = inUse.ones + 10;
    inUse.fives = inUse.fives + 10;
    inUse.tens = inUse.tens + 10;
    inUse.twenties = inUse.twenties + 10;
    inUse.fifties = inUse.fifties + 10;
    inUse.hundos = inUse.hundos + 10;
    console.log(inUse);
};
