document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("starsCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 1000;

    const colorPalette = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0x00ffff, 0xffff00];
    const starCount = 60000;
    const starField = createStarField();
    scene.add(starField);

    const nebula = createNebula();
    scene.add(nebula);

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function createStarField() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 2000;
            positions[i3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i3 + 2] = (Math.random() - 0.5) * 2000;

            const color = new THREE.Color(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = Math.random() * 2 + 1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 2,
            sizeAttenuation: true,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8
        });

        return new THREE.Points(geometry, material);
    }

    function createNebula() {
        const geometry = new THREE.SphereGeometry(500, 60, 60);
        const material = new THREE.MeshBasicMaterial({
            color: 0x1e1e1e,
            opacity: 0.1,
            transparent: true,
            wireframe: true,
            blending: THREE.AdditiveBlending
        });
        return new THREE.Mesh(geometry, material);
    }

    function animate() {
        requestAnimationFrame(animate);

        const positions = starField.geometry.attributes.position.array;
        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            const y = positions[i3 + 1];
            const z = positions[i3 + 2];

            const distance = Math.sqrt(x * x + y * y + z * z);
            const angle = 0.002;
            const cosAngle = Math.cos(angle);
            const sinAngle = Math.sin(angle);

            const radialSpeed = -0.2 * (2000 - distance) / 2000;

            positions[i3] = cosAngle * x - sinAngle * y + radialSpeed * x / distance;
            positions[i3 + 1] = sinAngle * x + cosAngle * y + radialSpeed * y / distance;
            positions[i3 + 2] = z + radialSpeed * z / distance;

            if (distance < 50) {
                positions[i3] = (Math.random() - 0.5) * 2000;
                positions[i3 + 1] = (Math.random() - 0.5) * 2000;
                positions[i3 + 2] = (Math.random() - 0.5) * 2000;
            }

            // Mouse interaction
            const dx = mouseX * 500 - x;
            const dy = mouseY * 500 - y;
            const mouseDistance = Math.sqrt(dx * dx + dy * dy);
            if (mouseDistance < 150) {
                const attractionFactor = (150 - mouseDistance) * 0.0002;
                positions[i3] += dx * attractionFactor;
                positions[i3 + 1] += dy * attractionFactor;
            }
        }
        starField.geometry.attributes.position.needsUpdate = true;

        starField.rotation.x += 0.0004;
        starField.rotation.y += 0.0004;

        nebula.rotation.x += 0.0002;
        nebula.rotation.y += 0.0002;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});