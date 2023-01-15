console.log("Sucessfully loaded!");

var programCode = function(processingInstance) {
    with(processingInstance) {
        size(400, 400);
        noSmooth();
    }
};

var canvas = document.createElement("canvas");
canvas.id = "thedark_superfastsprites";
document.body.appendChild(canvas);

var processingInstance = new Processing(canvas, programCode); 

var createSprite = function(data, scale) { 
    // @OnlyTheDark
    // https://www.khanacademy.org/computer-programming/super-fast-sprites/6098556280160256
    background(255, 255, 255, 0);
    noStroke();
    var px = data.data;
    var w = px[0].length;
    var h = px.length;
    scale = scale || floor(min(width / w, height / h));
    for(var y = 0; y < h; y++) {
        for(var x = 0; x < w; x++) {
            var c = px[y][x];
            if(c !== " ") {
                fill(data[c]);
                rect(x * scale, y * scale, scale + 0.5, scale + 0.5);
            }
        }
    }
    var sprite = get(0, 0, w * scale, h * scale);
    return sprite;
};

window.createSprite = createSprite;

console.log(window);
