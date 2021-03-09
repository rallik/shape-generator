function canvasInit() { 
    const canvas = document.getElementById("shape");
    const ctx = canvas.getContext("2d");

    canvas.width = 1916;
    canvas.height = 1112;

    return {canvas, ctx};
} 

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function getColor(random) {
    const is_random = random == 'yes' ? true : false;
    let color = is_random ? getRandomColor() : inputs_rect.color_hex.value;
    return color;
}

function getCanvasCenter(height, width) {
    let y = height / 2;
    let x = width / 2;
    return {y, x};
}

function createRectangle(count_rect = 1, inputs_rect) {
    console.log("inputs_rect",inputs_rect)
    const canvas_init_r = canvasInit();
    const canvas_rect = canvas_init_r.canvas;
    const ctx_rect = canvas_init_r.ctx;

    const rect_h = inputs_rect.rectangle_h.value;
    const rect_w = inputs_rect.rectangle_w.value;

    let rect_center = getCanvasCenter(canvas_rect.height, canvas_rect.width);

    let rect_center_h = rect_center.y;
    let rect_center_w = rect_center.x;
    
    let topcorner_y = rect_center_h - (rect_h/2);
    let topcorner_x = rect_center_w - (rect_w/2);

    let rect_color_random = inputs_rect.random.value;
    let rect_color = getColor(rect_color_random);

    ctx_rect.fillStyle = rect_color;
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
    const canvas_init_c = canvasInit();
    const canvas_cir = canvas_init_c.canvas;
    const ctx_cir = canvas_init_c.ctx;

    let cir_center = getCanvasCenter(canvas_cir.height, canvas_cir.width);
    let cir_center_h = cir_center.y;
    let cir_center_w = cir_center.x;

    let radius = inputs_cir.circle_r.value;

    let cir_color_random = inputs_cir.random.value;
    let cir_color = getColor(cir_color_random);

    ctx_cir.fillStyle = cir_color;
    ctx_cir.beginPath();
    ctx_cir.arc(cir_center_w, cir_center_h, radius, 0, 2 * Math.PI, false)
    ctx_cir.fill()
}


function whichShape(elements) {
    const shape_count = 1;
    console.log(shape_count);

    const shape_type = elements.type.value;
    console.log(shape_type);

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