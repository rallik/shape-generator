function createShape(elements) {
    
}

function onSubmit(event) {
    event.preventDefault()
    console.log(event.target.elements)
    let forminput = event.target.elements;
    let typecheck = forminput.type.value;
    
    createShape(forminput)
}


//listeners
const form = document.getElementById('shapeselect');
form.addEventListener('submit', onSubmit);

//