let selector = 1;
switch(selector){

    case 1:

        break;
    case 2:
        break;
}
const descriptions = ["Papaya fresca", "Description2","Description3","Description4","Description5"]
for(let i=0; i<descriptions.length; i++){
    
    let template = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
      </p>
      <div class="collapse" id="collapseExample${i}">
        <div class="card card-body">
          ${descriptions[i]}
        </div>
      </div>
</div>`
    let grid = document.getElementById('row')
    grid.innerHTML += template
}

const myArray = [4, "Gregorio"];
myArray.push(4);
myArray.push("hola");
//console.log(myArray[1])
myArray[1] = "Gregorio";
//console.log(myArray);
for(let i=0; i<myArray.length; i++){
  console.log(myArray[i]);
}