function createShape(elements) {
    const canvas = document.getElementById("shape");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    console.log(canvas.width)
    canvas.height = canvas.clientHeight;
    console.log(canvas.height)
    
    for (i of elements) {
        console.log(i.value)
    }

    // access form input
    const shape_count = elements.quantity.value;
    console.log(shape_count);

    const shape_type = elements.type.value;
    console.log(shape_type);

    // const shape_radius = elements.circle.value;
    // console.log(shape_radius)

    const shape_h = elements.rectangle_h.value;
    const shape_w = elements.rectangle_w.value;



    let center_h = canvas.height / 2;
    let center_w = canvas.width / 2;

    

    let topcorner_x = center_w - (shape_w/2);
    let topcorner_y = center_h - (shape_h/2);

    ctx.fillStyle = 'green';
    ctx.fillRect(topcorner_x, topcorner_y, shape_w, shape_h);
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