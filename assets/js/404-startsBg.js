
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("starsCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  
    // Scene and Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;
  
    // Variables for multiple layers of stars (depth)
    const layerCount = 5; // Number of layers (depth)
    const particleCount = 1000; // Number of stars per layer
    const particleSize = 2; // Star size
    const layers = [];
  
    // Generate star layers at different distances
    for (let layerIndex = 0; layerIndex < layerCount; layerIndex++) {
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3); // To store color data
  
        // Randomize positions and velocities for each layer
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  
            velocities[i * 3] = Math.random() * 0.1 - 0.05;
            velocities[i * 3 + 1] = Math.random() * 0.1 - 0.05;
            velocities[i * 3 + 2] = Math.random() * 0.1 - 0.05;
  
            // Random star colors: Red, Green, Blue components
            const color = new THREE.Color(Math.random(), Math.random(), Math.random());
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
  
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
        const particleMaterial = new THREE.PointsMaterial({
            size: particleSize, // Star size
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8 + Math.random() * 0.2, // Random opacity for flickering effect
            vertexColors: true, // Use vertex colors for stars
            glow: true
        });
  
        const starsLayer = new THREE.Points(particles, particleMaterial);
        starsLayer.speedFactor = 0.5 + Math.random() * 0.5; // Different speeds for each layer (depth effect)
        layers.push(starsLayer);
        scene.add(starsLayer);
    }
  
    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);
  
    // Mouse Interaction for parallax effect
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  
    // Nebula Effect (Clouds or Glow)
    const nebulaGeometry = new THREE.SphereGeometry(500, 60, 60);
    const nebulaMaterial = new THREE.MeshBasicMaterial({
        color: 0x1e1e1e,
        opacity: 0.1,
        transparent: true,
        wireframe: true,
        blending: THREE.AdditiveBlending
    });
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);
  
    // Flickering stars effect
    function updateStarFlickering() {
        layers.forEach(layer => {
            layer.material.opacity = 0.8 + Math.random() * 0.2; // Random opacity for flickering effect
        });
    }
  
    // Dynamic color shift for stars
    function updateStarColors() {
        layers.forEach(layer => {
            const colors = layer.geometry.attributes.color.array;
            for (let i = 0; i < particleCount; i++) {
                // Shift colors gradually
                colors[i * 3] += (Math.random() - 0.5) * 0.01;
                colors[i * 3 + 1] += (Math.random() - 0.5) * 0.01;
                colors[i * 3 + 2] += (Math.random() - 0.5) * 0.01;
  
                // Clamp the color values between 0 and 1
                colors[i * 3] = Math.max(0, Math.min(1, colors[i * 3]));
                colors[i * 3 + 1] = Math.max(0, Math.min(1, colors[i * 3 + 1]));
                colors[i * 3 + 2] = Math.max(0, Math.min(1, colors[i * 3 + 2]));
            }
            layer.geometry.attributes.color.needsUpdate = true;
        });
    }
  
 // Define color palette (array of hex colors)
const colorPalette = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff", "#ffff00"];

function animate() {
    requestAnimationFrame(animate);

    layers.forEach(layer => {
        const positionsArray = layer.geometry.attributes.position.array;
        const velocitiesArray = layer.geometry.attributes.velocity.array;
        const colorsArray = layer.geometry.attributes.color.array;

        for (let i = 0; i < particleCount; i++) {
            // Extract current position
            const x = positionsArray[i * 3];
            const y = positionsArray[i * 3 + 1];
            const z = positionsArray[i * 3 + 2];

            // Calculate distance to center
            const distance = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

            // Spiral motion (rotational + radial convergence)
            const angle = 0.002 * layer.speedFactor; // Rotation speed
            const cosAngle = Math.cos(angle);
            const sinAngle = Math.sin(angle);

            const radialSpeed = -0.2 * (2000 - distance) / 2000; // Radial convergence
            const newX = cosAngle * x - sinAngle * y + radialSpeed * x / distance;
            const newY = sinAngle * x + cosAngle * y + radialSpeed * y / distance;
            const newZ = z + radialSpeed * z / distance;

            // Update positions
            positionsArray[i * 3] = newX;
            positionsArray[i * 3 + 1] = newY;
            positionsArray[i * 3 + 2] = newZ;

            // Use colors from the palette
            const color = new THREE.Color(colorPalette[i % colorPalette.length]);
            colorsArray[i * 3] = color.r;
            colorsArray[i * 3 + 1] = color.g;
            colorsArray[i * 3 + 2] = color.b;

            // Dynamic size based on distance or user interaction
            layer.material.size = Math.max(0.5, 3 * (distance / 2000));

            // Fade out stars near the center
            if (distance < 50) {
                positionsArray[i * 3] = (Math.random() - 0.5) * 2000;
                positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 2000;
                positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 2000;

                // Assign random color from the palette
                const randomColor = new THREE.Color(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
                colorsArray[i * 3] = randomColor.r;
                colorsArray[i * 3 + 1] = randomColor.g;
                colorsArray[i * 3 + 2] = randomColor.b;
            }
        }

        layer.geometry.attributes.position.needsUpdate = true;
        layer.geometry.attributes.color.needsUpdate = true;
    });

    // Add interactivity: Repel particles when mouse is near
    layers.forEach(layer => {
        const positionsArray = layer.geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
            const x = positionsArray[i * 3];
            const y = positionsArray[i * 3 + 1];

            // Distance from mouse to particle
            const dx = mouseX * 50 - x;
            const dy = mouseY * 50 - y;
            const distance = Math.sqrt(dx ** 2 + dy ** 2);

            // Apply repelling force
            if (distance < 100) {
                positionsArray[i * 3] += dx * 0.05;
                positionsArray[i * 3 + 1] += dy * 0.05;
            }
        }

        layer.geometry.attributes.position.needsUpdate = true;
    });

    // Update nebula rotation for subtle movement
    nebula.rotation.x += 0.0002;
    nebula.rotation.y += 0.0002;

    // Rotate the scene for added effect
    scene.rotation.x += 0.0004;
    scene.rotation.y += 0.0004;

    renderer.render(scene, camera);
}

    
  
    animate();
  
    // Resize handling
    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
  });
    