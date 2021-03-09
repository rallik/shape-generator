function canvasInit() { 
    const canvas = document.getElementById("shape");
    const ctx = canvas.getContext("2d");

    canvas.width = 1916;
    canvas.height = 1112;

    return canvas, ctx;
} 

function getCanvasCenter(height, width) {
    let y = height / 2;
    let x = width / 2;
    return {y, x};
}

function createRectangle(count_rect = 1, inputs_rect) {
    console.log("inputs_rect",inputs_rect)
    const canvas_rect = document.getElementById("shape");
    const ctx_rect = canvas_rect.getContext("2d");

    canvas_rect.width = 1916;
    canvas_rect.height = 1112;

    const rect_h = inputs_rect.rectangle_h.value;
    const rect_w = inputs_rect.rectangle_w.value;

    let rect_center = getCanvasCenter(rect_h, rect_w);
    console.log(rect_center)

    let rect_center_h = rect_center.y;
    let rect_center_w = rect_center.x;
    console.log(rect_center_h, rect_center_w)

    
    let topcorner_y = rect_center_h - (rect_h/2);
    let topcorner_x = rect_center_w - (rect_w/2);

    console.log(topcorner_x, topcorner_y)

    const is_random = inputs_rect.random.value == 'yes' ? true : false;
    let shape_color = is_random ? getRandomColor() : inputs_rect.color_hex.value;

    ctx_rect.fillStyle = shape_color;
    ctx_rect.fillRect(topcorner_x, topcorner_y, rect_w, rect_h);
}

function createTriangle(count_tri = 1, inputs_tri) {
    console.log("inputs_tri",inputs_tri)
    const canvas_tri = document.getElementById("shape");
    const ctx_tri = canvas_tri.getContext("2d");
    
    canvas_tri.width = 1916;
    canvas_tri.height = 1112;

}

function createCircle(count_cir = 1, inputs_cir) {
    console.log("inputs_cir",inputs_cir)
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function whichShape(elements) {
    
    // console.log(canvas.height)
    
    // for (let x of elements) {
    //     console.log(x.value)
    // }

    // access form input
    // const shape_count = elements.quantity.value;
    const shape_count = 1;
    console.log(shape_count);

    const shape_type = elements.type.value;
    console.log(shape_type);

    // const shape_radius = elements.circle.value;
    // console.log(shape_radius)

    switch (shape_type.toLowerCase()) {
        case "rectangle":
            createRectangle(shape_count, elements);
            break;
        case "triangle":
            createTriangle(shape_count, elements);
            break;
        case "circle":
            createCircle(shape_count, elements);
            break;
    }





    

    // for (let i; i < shape_count; i++) {

    //     ctx.fillStyle = shape_color;
    //     ctx.fillRect(topcorner_x, topcorner_y + (shape_h*1.5), shape_w, shape_h);
    // }
        


}

function onSubmit(event) {
    event.preventDefault()
    console.log(event.target.elements)
    let forminput = event.target.elements;
    let typecheck = forminput.type.value;
    
    whichShape(forminput)
    
}


//listeners
const form = document.getElementById('shapeselect');
form.addEventListener('submit', onSubmit);

//