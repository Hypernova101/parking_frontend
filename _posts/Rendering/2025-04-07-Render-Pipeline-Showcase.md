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
            x: 0,
            y: 0,
            z: 0,
            rotx: 0,
            roty: 0,
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
            renderLim: 2.5*10**100
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
            const radx = (Math.PI*cam.rotx)/180;
            const rady = (Math.PI*cam.roty)/180;
            ray.x = ray.x * Math.cos(radx) + ray.z * Math.sin(radx);
            ray.z = ray.x * Math.sin(radx) - ray.z * Math.cos(radx);
            ray.y = ray.y * Math.cos(rady) + ray.z * Math.sin(rady);
            ray.z = ray.y * Math.sin(rady) - ray.z * Math.cos(rady);
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
        function plane(nx,ny,nz,distance) {
            const dotdir = (nx*ray.x) + (ny*ray.y) + (nz*ray.z);
            const dot = (nx*r.center.x) + (ny*r.center.y) + (nz*r.center.z);
            const dist = (dot+distance)/dotdir;
            if (dotdir != 0 && dist < 0 && -dist<renderDist) {
                renderDist = -dist;
                setRGB(150,150,150);
                r.normal = {x:nx,y:ny,z:nz};
                console.log("Hit Plane");
            }
        };
        function findObjects() {
            plane(0,1,0,100);
            yPlane(0,50,100,50,50);
        };
        var renderDist = 0;
        function pixel(u,v) {
            onScreenData.u = u + canvas.width/-2;
            onScreenData.v = v + canvas.height/-2;
            r.center.x = cam.x;
            r.center.y = cam.y;
            r.center.z = cam.z;
            ray.x = u;
            ray.y = v;
            ray.z = cam.FOV;
            ray = normalize3D(ray.x,ray.y,ray.z);
            rotateRay();
            renderDist = settings.renderLim;
            findObjects();
            color.colors = []
            if (settings.renderLim > renderDist) {
                color.colors.push(0.4)
                lighting();
                addColors();
                for (let i = 0; i < settings.reflCount; i++) {
                    r.center = r.intercept;
                    ray = {
                        x: -r.intercept.x,
                        y: -r.intercept.y,
                        z: -r.intercept.z,
                    };
                    ray = normalize3D(ray.x,ray.y,ray.z);
                    renderDist = settings.renderLim;
                    findObjects();
                    if (settings.renderLim > renderDist) {
                        color.colors.push(0.4);
                        lighting();
                        addColors(color.r,color.g,color.b);
                    }
                }
                mixColors();
            } else {
                setRGB(60,180,250);
            }
            draw();
        };
        function mixColors() {
            setRGB()
        };
        function draw() {
            ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
            ctx.fillRect(onScreenData.u,onScreenData.v,onScreenData.resolution,onScreenData.resolution);
        };
        function postProcess() {
            // Gamma
            color.r = Math.pow(color.r/255,settings.gamma)*255;
            color.g = Math.pow(color.g/255,settings.gamma)*255;
            color.b = Math.pow(color.b/255,settings.gamma)*255;
            // Tone Mapping
            color.r *= color.r/(color.r+1);
            color.g *= color.g/(color.g+1);
            color.b *= color.b/(color.b+1);
            // Exposure
            color.r = color.r * settings.exposure;
            color.g = color.g * settings.exposure;
            color.b = color.b * settings.exposure;
        };
        function addColors() {
            color.colors.push(color.r);
            color.colors.push(color.g);
            color.colors.push(color.b);
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
            var light = {
                x: r.light.x - r.intercept.x,
                y: r.light.y - r.intercept.y,
                z: r.light.z - r.intercept.z,
            };
            var dist = distance(light.x,light.y,light.z);
            light = normalize3D(light.x,light.y,light.z);
            var dot = dotProduct(r.normal,light);
            var shade = Math.max(0,dot);
            dot = dotProduct(r.normal,ray);
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
            setRGB(savedColors.r,savedColors.g,savedColors.b);
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
            } else if (keyPressed === "a") {
                cam.y += -speed;
            }
            console.log("Camera: " + cam);
        };
        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            display(canvas.width*2,canvas.height*2);
            requestAnimationFrame(render);
        };
        render();
        document.addEventListener('keydown', (event) => {
            controls(4,event.key);
        });
    </script>
</body>
</html>
