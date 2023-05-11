let myTable;
let row1;
let data;

fetch('sentences.json')
    .then((response) => response.json())
    .then((json) => {
      data = json;
      let num = Math.floor(Math.random()*50);
      console.log(data.responses[num]);
      document.getElementById("answer").innerHTML = data.responses[num];  
    });



    

