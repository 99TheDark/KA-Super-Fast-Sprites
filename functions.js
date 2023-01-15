(() => {
    let programCode = function(processingInstance) {
        with(processingInstance) {
            size(400, 400);
            noSmooth();
        }
    };

    let canvas = document.createElement("canvas");
    canvas.id = "thedark_superfastsprites";
    document.body.appendChild(canvas);

    let processingInstance = new Processing(canvas, programCode); 

    let createSprite = function(data, scale) { 
        // @OnlyTheDark
        // https://www.khanacademy.org/computer-programming/super-fast-sprites/6098556280160256
        background(255, 255, 255, 0);
        noStroke();
        let px = data.data;
        const w = px[0].length;
        const h = px.length;
        scale = scale || floor(min(width / w, height / h));
        for(let y = 0; y < h; y++) {
            for(let x = 0; x < w; x++) {
                const c = px[y][x];
                if(c !== " ") {
                    fill(data[c]);
                    rect(x * scale, y * scale, scale + 0.5, scale + 0.5);
                }
            }
        }
        let sprite = get(0, 0, w * scale, h * scale);
        return sprite;
    };

    var exports = {};
    exports.createSprite = createSprite;
    
    Object.defineProperty(exports, "__esModule", { "value": true });
})();
