getData('https://catfact.ninja/facts');
let facts = [];
async function getData(url) {
    try {
      const response = await axios.get(url);
      facts = response.data.data
    } catch (error) {
      console.error('error!bad wesite or bad code! (its your code)');
    }
  }

  let x = 0;
async function newFact() {
    document.getElementById("hello").innerHTML = facts[x].fact;
    x++
    return x;
};

button.addEventListener('click', newFact)


//const test = new Promise((resolve) => {
//});


const test = new Promise((resolve) => {
    setTimeout(() => {
        resolve(newFact());
    }, 500);
});