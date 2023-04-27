//Creating a Element

document.body.innerHTML = `
<div class="container-fluid">
<h1>NATIONALITY</h1>
<label id="label">TYPE YOUR NAME</label><br>
<input type="text" placeholder="Enter your Name" id="inputbox"><br><br>
<button id="searchbtn" class="btn btn-primary" onclick=searchData()>Search</button>
<butTon id="resetbtn" class="btn btn-danger" >Reset</button> 
</div>

<div class="container-fluid">
<h2>Displayed the Top Two Countries and Probabilities</h2>
<h5 id="receivedData"></h5>
</div>`

let received = document.querySelector('#inputbox');
let resetButton = document.querySelector('#resetbtn');
let outDisplay = document.querySelector('#receivedData')


//fetch_api
async function searchData(){
    let inputData = document.getElementById("inputbox").value;
    if(inputData.length  === 0 || inputData.includes(" ")){
        alert("Enter the Name !!!")
    }else{
    
    try {
    let response = await fetch (`https://api.nationalize.io?name=${inputData}`);
    let data = await response.json();
    //console.log(data);
    for(let i=0; i<2; i++){
        outDisplay.innerHTML += `
        <div class="container">
        <h3>Country = ${data.country[i].country_id}</h3>
        <h3>Probability = ${data.country[i].probability}<h3><hr>
        </div>`
    }
    
} catch (error) {
    console.log(error)
}
    }
}


//reset button
resetButton.addEventListener('click',()=>{
    outDisplay.innerHTML = "";
    received.value = "";
})