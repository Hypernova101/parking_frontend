---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /render
title: Render Pipeline Showcase
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Raytracer</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #1e1e1e;
        }
        canvas {
            border: 1px solid black;
            display: block;
        }
    </style>
</head>
<body>
    <canvas id="draw" width="600" height="400"></canvas>
    <script>
        const canvas = document.getElementById("draw");
        const ctx = canvas.getContext("2d");
        // Camera Setup
        const cam = {
            x: -42,
            y: 0,
            z: -200,
            rotx: 22,
            roty: -5,
            FOV: 300
        };
        const onScreenData = {
            u: 0,
            v: 0,
            resolution: 1
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
                y: 300,
                z: -180
            }
        };
        const settings = {
            reflCount: 1,
            gamma: 0.45,
            phongVal: 0.8,
            diffuse: 0.5,
            ambient: 0.1,
            renderLim: 2.5*10**100,
            exposure: 1,
            psize: 1,
            mode: "day",
            shadows: true
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
        function rotateRay(u,v) {
            const radx = (Math.PI * u) / 180;
            const rady = (Math.PI * v) / 180;
            var savedDir = ray.z;
            ray.z = ray.z*Math.cos(rady) - ray.y*Math.sin(rady);
            ray.y = savedDir*Math.sin(rady) + ray.y*Math.cos(rady);
            savedDir = ray.z;
            ray.z = ray.z*Math.cos(radx) - ray.x*Math.sin(radx);
            ray.x = savedDir*Math.sin(radx) + ray.x*Math.cos(radx);
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
                    setRGB(150,150,150);
                }
            }
        };
        function zPlane(x,y,z,w,h) {
            const dotdir = ray.z
            const dot = r.center.z
            const dist = (dot-z)/dotdir;
            if (dotdir != 0 && dist < 0 && -dist<renderDist) {
                const planeX = (ray.x*-dist) + r.center.x;
                const planeY = (ray.y*-dist) + r.center.y;
                if ((x-w) < planeX && (x+w) > planeX && (y-h) < planeY && (y+h) > planeY) {
                    renderDist = -dist;
                    if (r.center.z > z) {
                        r.normal.z = 1;
                    } else {
                        r.normal.z = -1;
                    }
                    r.normal.x = 0;
                    r.normal.y = 0;
                    setRGB(150,150,150);
                }
            }
        };
        function xPlane(x,y,z,h,l) {
            const dotdir = ray.x
            const dot = r.center.x
            const dist = (dot-x)/dotdir;
            if (dotdir != 0 && dist < 0 && -dist<renderDist) {
                const planeY = (ray.y*-dist) + r.center.y;
                const planeZ = (ray.z*-dist) + r.center.z;
                if ((y-h) < planeY && (y+h) > planeY && (z-l) < planeZ && (z+l) > planeZ) {
                    renderDist = -dist;
                    if (r.center.x > x) {
                        r.normal.x = 1;
                    } else {
                        r.normal.x = -1;
                    }
                    r.normal.z = 0;
                    r.normal.y = 0;
                    setRGB(150,150,150);
                }
            }
        };
        function cube(x,y,z,w,h,l) {
            xPlane(x+w,y,z,h,l);
            xPlane(x-w,y,z,h,l);
            yPlane(x,y+h,z,w,l);
            yPlane(x,y-h,z,w,l);
            zPlane(x,y,z+l,h,l);
            zPlane(x,y,z-l,w,h);
        };
        function plane(nx,ny,nz,distance) {
            const dotdir = (nx*ray.x) + (ny*ray.y) + (nz*ray.z);
            const dot = (nx*r.center.x) + (ny*r.center.y) + (nz*r.center.z);
            const dist = (dot+distance)/dotdir;
            if (dotdir != 0 && dist < 0 && -dist<renderDist) {
                renderDist = -dist;
                setRGB(100,150,100);
                r.normal = {x:nx,y:ny,z:nz};
            }
        };
        function findObjects() {
             const spacing = 100;
            const range = 1;
            cube (0,150,200,100,300,100);
            plane(0,1,0,100);
        };
        var renderDist = 0;
        function pixel(u,v) {
            onScreenData.u = u - canvas.width/2;
            onScreenData.v = v + canvas.height/-2;
            r.center.x = cam.x;
            r.center.y = cam.y;
            r.center.z = cam.z;
            ray.x = onScreenData.u;
            ray.y = onScreenData.v;
            ray.z = cam.FOV;
            ray = normalize3D(ray.x,ray.y,ray.z);
            rotateRay(cam.rotx,cam.roty);
            renderDist = settings.renderLim;
            findObjects();
            color.colors = [];
            if (settings.renderLim > renderDist) {
                color.colors.push(0);
                lighting();
                addColors();
                for (let i = 0; i < settings.reflCount; i++) {
                    r.center = r.intercept;
                    ray = {
                        x: -r.intercept.x,
                        y: -r.intercept.y,
                        z: -r.intercept.z
                    };
                    ray = normalize3D(ray.x,ray.y,ray.z);
                    renderDist = settings.renderLim;
                    findObjects();
                    if (settings.renderLim > renderDist) {
                        color.colors.push(0);
                        lighting();
                        addColors(color.r,color.g,color.b);
                    }
                }
                // mixColors();
            } else {
                setRGB(60,180,250);
            }
            // postProcess();
            draw();
            // return [color.r,color.g,color.b];
        };
        function draw() {
            ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`;
            ctx.fillRect(onScreenData.u+canvas.width/2,-onScreenData.v+canvas.height/2,onScreenData.resolution,onScreenData.resolution);
        };
        function addColors() {
            color.colors.push(color.r);
            color.colors.push(color.g);
            color.colors.push(color.b);
        };
        function mixColors() {
            let totalReflectivity = 0;
            for (let i = 0; i < color.colors.length/4; i++) {
                const idx = i * 4
                const reflectivity= color.colors[i];
                const cr = color.colors[i+1];
                const cg = color.colors[i+2];
                const cb = color.colors[i+3];
                totalReflectivity += reflectivity;
                color.r += reflectivity * cr;
                color.g += reflectivity * cg;
                color.b += reflectivity * cb;
            }
            if (totalReflectivity > 0) {
                color.r /= totalReflectivity;
                color.g /= totalReflectivity;
                color.b /= totalReflectivity;
            }
            setRGB(color.r, color.g, color.b);
        };
        function postProcess() {
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
        const color = {
            r: 0,
            g: 0,
            b: 0,
            colors: []
        };
        function setRGB(r,g,b) {
            color.r = Math.min(255, Math.max(0, r));
            color.g = Math.min(255, Math.max(0, g));
            color.b = Math.min(255, Math.max(0, b));
        };
        function lighting() {
            // Shading
            r.intercept.x = (r.center.x + (ray.x*renderDist)) + r.normal.x;
            r.intercept.y = (r.center.y + (ray.y*renderDist)) + r.normal.y;
            r.intercept.z = (r.center.z + (ray.z*renderDist)) + r.normal.z;
            var light = {
                x: r.light.x - r.intercept.x,
                y: r.light.y - r.intercept.y,
                z: r.light.z - r.intercept.z,
            };
            var dist = distance(light.x,light.y,light.z);
            light = normalize3D(light.x,light.y,light.z);
            var dot = dotProduct(r.normal,light);
            var shade = Math.min(0,dot);
            dot = dotProduct(r.normal,ray);
            // Reflections
            r.reflect.x = (2 * r.normal.x * dot) + ray.x;
            r.reflect.y = (2 * r.normal.y * dot) + ray.y;
            r.reflect.z = (2 * r.normal.z * dot) + ray.z;
            dot = -dotProduct(light,r.reflect);
            const phong = Math.min(0,dot**8);
            const lightDist = dist;
            renderDist = dist;
            if (settings.shadows) {
                // Shadows
                ray = light;
                r.center = r.intercept;
                const savedColors = {r: color.r, g: color.g, b: color.b};
                findObjects();
                setRGB(savedColors.r,savedColors.g,savedColors.b);
            }
            // Specular Highlights
            var specular = 0;
            if (Math.abs(lightDist - renderDist) < 0.01) {
                specular = phong * settings.phongVal * 255;
                shade = Math.max(settings.ambient + settings.diffuse*shade,1);
            } else {
                shade = settings.ambient;
            }
            setRGB(specular+(color.r*shade), specular+(color.g*shade), specular+(color.b*shade));
        };
        function display(width, height) {
            for (let v = 0; v < height/onScreenData.resolution; v++) {
                for (let u = 0; u < width/onScreenData.resolution; u++) {
                    pixel(u*onScreenData.resolution,v*onScreenData.resolution);
                }
            }
        };
        function moveCam(speed) {
            const rad = (Math.PI*cam.rotx)/180;
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
            if (keyPressed === "e") {
                cam.y += speed;
            } else if (keyPressed === "q") {
                cam.y += -speed;
            }
            if (keyPressed === "r") {
                console.log(cam);
            }
        };
        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            onScreenData.resolution = 4;
            for (let i = 0; i < 4; i ++) {
                display(canvas.width*2,canvas.height);
                display(canvas.width*2,canvas.height);
            }
            onScreenData.resolution = 1;
            display(canvas.width*2,canvas.height);
            // requestAnimationFrame(render);
        };
        render();
        document.addEventListener('keydown', (event) => {
            controls(4,event.key);
        });
    </script>
</body>
</html>
