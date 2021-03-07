function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function createShape(elements) {
    const canvas = document.getElementById("shape");
    const ctx = canvas.getContext("2d");
    // canvas.width = canvas.clientWidth;
    canvas.width = 1916;
    // console.log(canvas.width)
    // canvas.height = canvas.clientHeight;
    canvas.height = 1112;
    // console.log(canvas.height)
    
    for (let x of elements) {
        console.log(x.value)
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

    const is_random = elements.random.value == 'yes' ? true : false;
    let shape_color = is_random ? getRandomColor() : elements.color_hex.value;

    


    let center_h = canvas.height / 2;
    let center_w = canvas.width / 2;

    

    let topcorner_x = center_w - (shape_w/2);
    let topcorner_y = center_h - (shape_h/2);

    ctx.fillStyle = shape_color;
    ctx.fillRect(topcorner_x, topcorner_y, shape_w, shape_h);

    for (let i; i > shape_count; i++) {

        ctx.fillStyle = shape_color;
        ctx.fillRect(topcorner_x, topcorner_y, shape_w, shape_h);
    }
        


}

function onSubmit(event) {
    
    console.log(event.target.elements)
    let forminput = event.target.elements;
    let typecheck = forminput.type.value;
    
    createShape(forminput)
    event.preventDefault()
}


//listeners
const form = document.getElementById('shapeselect');
form.addEventListener('submit', onSubmit);

//