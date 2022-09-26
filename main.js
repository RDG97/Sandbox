function showFacts() {
    console.log(catFacts)
document.getElementById("hello").innerHTML = catFacts[1].fact;
};


let catFacts = [];

function getCatFacts() {
        fetch('https://catfact.ninja/facts')
        .then((resp) => resp.json())
        .then((data) => {
            catFacts = data.data
            console.log(catFacts);
        }
        
        );
}
getCatFacts();
console.log(catFacts)

setTimeout(showFacts, 500)
let x = 0;
async function showFacts() {
    console.log(catFacts)
    document.getElementById("hello").innerHTML = catFacts[x].fact;
    x++
    return x;
};

function failed() {
    console.log('you suck');
}

// if promise = true ( or fufilled) then *function*

showFacts().then(
    function(value) {showFacts(value);},
    function(error) {showFacts(error);}
  );

button.addEventListener('click', showFacts)