
function intializeCanvas() {
    const canvas = document.getElementById("draw");
    const ctx = canvas.getContext("2d");
};

intializeCanvas();

// Camera Setup
const cam = {
    x: 0,
    y: 0,
    z: 0,
    rotx: 0,
    roty: 0,
    FOV: 90
};

const onScreenData = {
    u: 0,
    v: 0,
    resolution: 4
};

var ray = {
    x: 0,
    y: 0,
    z: 0
};

const r = {
    normal: {
        x: 0,
        y: 0,
        z: 0
    },
    center: {
        x: 0,
        y: 0,
        z: 0
    },
    intercept: {
        x: 0,
        y: 0,
        z: 0
    },
    reflect: {
        x: 0,
        y: 0,
        z: 0
    },
    light: {
        x: 100,
        y: 150,
        z: -180
    }
};

const settings = {
    reflCount: 4,
    gamma: 0.2,
    phongVal: 0.8,
    diffuse: 0.5,
    ambient: 0.1,
    mode: "day",
    pSize: 1
};

function distance(x,y,z) {
    return Math.sqrt(x*x+y*y+z*z);
};

function normalize3D(x1,y1,z1) {
    mag = distance(x1,y1,z1);
    return {x:x1/mag,y:y1/mag,z:z1/mag};
};

function dotProduct(a,b) {
    return (a.x*b.x)+(a.y*b.y)+(a.z*b.z);
};

function rotateRay() {
    ray.x = ray.x * Math.cos(Math.radians(cam.rotx)) - ray.z * Math.sin(Math.radians(cam.rotx));
    ray.z = ray.x * Math.sin(Math.radians(cam.rotx)) + ray.z * Math.cos(Math.radians(cam.rotx));

    ray.y = ray.y * Math.cos(Math.radians(cam.roty)) - ray.z * Math.sin(Math.radians(cam.roty));
    ray.z = ray.y * Math.sin(Math.radians(cam.roty)) + ray.z * Math.cos(Math.radians(cam.roty));
};

function yPlane(x,y,z,w,l) {
    const dotdir = ray.y
    const dot = r.center.y
    const dist = (dot-y)/dotdir;
    if (dotdir != 0 && dist < 0 && -dist<renderDist) {
        const planeX = (ray.x*-dist) + r.center.x;
        const planeZ = (ray.z*-dist) + r.center.z;
        if ((x-w) < planeX && (x+w) > planeX && (z-l) < planeZ && (z+l) > planeZ) {
            renderDist = -dist;
            if (r.center.y > y) {
                r.normal.y = 1;
            } else {
                r.normal.y = -1;
            }
            r.normal.x = 0;
            r.normal.z = 0;
            setRGB(220,220,220);
        }
    }
};

function findObjects() {
    yPlane(0,-50,100,50,50);
    plane(0,1,0,100,)
};

var renderDist = 0;
function pixel(u,v) {
    const pu = (u/settings.pSize)*settings.pSize;
    const pv = (v/settings.pSize)*settings.pSize;
    onScreenData.u = pu + canvas.width/2;
    onScreenData.v = -pv + canvas.height/2;
    r.center.x = cam.x;
    r.center.y = cam.y;
    r.center.z = cam.z;
    ray.x = u;
    ray.y = v;
    ray.z = cam.FOV;
    ray = normalize3D(...ray);
    rotateRay();
    renderDist = Infinity;
    findObjects();
    if (Infinity > renderDist) {
        lighting();
        addColors();
        for (let i = 0; i < settings.reflCount; i++) {
            r.center = r.intercept;
            ray = {
                x: -r.intercept.x,
                y: -r.intercept.y,
                z: -r.intercept.z,
            };
            ray = normalize3D(...ray);
            renderDist = Infinity;
            findObjects();
            if (Infinity > renderDist) {
                color.colors.append(0.4);
                lighting();
                addColors(color.r,color.g,color.b);
            }
        }
        mixColors();
        draw();
    } else {
        setRGB(60,180,250);
        draw();
    }
};

function mixColors() {
    // tbd
};

function draw() {
    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
    ctx.fillRect(onScreenData.u,onScreenData.v,onScreenData.resolution);
};

function postProcess() {
    // Normalize Colors
    setRGB(color.r/255,color.g/255,color.b/255)
    // Gamma
    setRGB(Math.pow(color.r,settings.gamma),Math.pow(color.g,settings.gamma),Math.pow(color.b,settings.gamma));
    // Tone Mapping
    setRGB(color.r/(color.r+1),color.g/(color.g+1),color.b/(color.b+1));
    // Exposure
    setRGB(color.r * settings.exposure,color.g * settings.exposure,color.b * settings.exposure);
    // Color Blind Adjustments
    if (settings.mode === "color blind") {
        setRGB(color.r, color.g * 0.8 + color.b * 0.2, color.b * 1.1);
    } else if (settings.mode === "retro") {
        setRGB(color.r,color.g,color.b);
    }
    // Colors
    setRGB(color.r*255,color.g*255,color.b*255);
};

function addColors() {
    color.colors.append(color.r);
    color.colors.append(color.g);
    color.colors.append(color.b);
};

const color = {
    r: 0,
    g: 0,
    b: 0,
    colors: []
};

function setRGB(r,g,b) {
    color.r = r;
    color.g = g;
    color.b = b;
    if (color.r > 255) {
        color.r = 255;
    } else if (color.r < 0) {
        color.r = 0;
    }
    if (color.g > 255) {
        color.g = 255;
    } else if (color.g < 0) {
        color.g = 0;
    }
    if (color.b > 255) {
        color.b = 255;
    } else if (color.b < 0) {
        color.b = 0;
    }
};

function lighting() {
    // Shading
    r.intercept.x = (r.center.x + (ray.x*renderDist)) + r.normal.x;
    r.intercept.y = (r.center.y + (ray.y*renderDist)) + r.normal.y;
    r.intercept.z = (r.center.z + (ray.z*renderDist)) + r.normal.z;
    const light = {
        x: r.light.x - r.intercept.x,
        y: r.light.y - r.intercept.y,
        z: r.light.z - r.intercept.z,
    };
    var dist = distance(...light);
    light = normalize3D(...light);
    var dot = dotProduct(r.normal,light);
    var shade = Math.max(0,dot);
    dot = dotProdict(r.normal,ray);
    // Reflections
    r.reflect.x = (2 * r.normal.x * dot) + ray.x;
    r.reflect.y = (2 * r.normal.y * dot) + ray.y;
    r.reflect.z = (2 * r.normal.z * dot) + ray.z;
    dot = -dotProduct(light,r.reflect);
    const phong = Math.max(0,dot**8);
    const lightDist = dist;
    renderDist = dist;
    // Shadows
    ray = light;
    r.center = r.intercept;
    const savedColors = {r: color.r, g: color.g, b: color.b};
    findObjects();
    setRGB(...savedColors);
    // Specular Highlights
    var specular = 0;
    if (lightDist === renderDist) {
        specular = phong * settings.phongVal * 255;
        shade = Math.max(settings.ambient + settings.diffuse*shade,1);
    } else {
        shade = settings.ambient;
    }
    setRGB(specular+(color.r*shade), specular+(color.g*shade), specular+(color.b*shade));
};

function display(width, height) {
    for (let v = 0; v < height; v++) {
        for (let u; u < width; u++) {

            pixel(u,v);
        }
    }
};

function moveCam(speed) {
    const rad = Math.radians(cam.rotx);
    cam.x += speed * Math.sin(rad);
    cam.z += speed * Math.cos(rad);
};

function controls(speed, keyPressed) {
    if (keyPressed === "ArrowRight") {
        cam.rotx += speed;
    } else if (keyPressed === "ArrowLeft") {
        cam.rotx -= speed;
    } else if (keyPressed === "ArrowUp") {
        cam.roty += speed;
    } else if (keyPressed === "ArrowDown") {
        cam.roty -= speed;
    }
    if (keyPressed === "w") {
        moveCam(speed);
    } else if (keyPressed === "s") {
        moveCam(-speed);
    }
    cam.rotx += 90;
    if (keyPressed === "d") {
        moveCam(speed);
    } else if (keyPressed === "a") {
        moveCam(-speed);
    }
    cam.rotx -= 90;
};

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    display(50,50);
    requestAnimationFrame(render);
};

render();

document.addEventListener('keydown', (event) => {
    controls(4,event.key);
});

