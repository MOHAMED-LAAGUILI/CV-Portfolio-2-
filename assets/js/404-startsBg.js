
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
  
    // Main Animation Loop
    function animate() {
        requestAnimationFrame(animate);
  
        // Update particles positions with velocities
        layers.forEach(layer => {
            const positionsArray = layer.geometry.attributes.position.array;
            const velocitiesArray = layer.geometry.attributes.velocity.array;
  
            for (let i = 0; i < particleCount; i++) {
                positionsArray[i * 3] += velocitiesArray[i * 3] * layer.speedFactor;
                positionsArray[i * 3 + 1] += velocitiesArray[i * 3 + 1] * layer.speedFactor;
                positionsArray[i * 3 + 2] += velocitiesArray[i * 3 + 2] * layer.speedFactor;
  
                // Reset particle position if it goes off-screen (loop effect)
                if (positionsArray[i * 3] > 1000) positionsArray[i * 3] = -1000;
                if (positionsArray[i * 3 + 1] > 1000) positionsArray[i * 3 + 1] = -1000;
                if (positionsArray[i * 3 + 2] > 1000) positionsArray[i * 3 + 2] = -1000;
            }
  
            layer.geometry.attributes.position.needsUpdate = true;
        });
  
        // Update nebula rotation for subtle movement
        nebula.rotation.x += 0.0001;
        nebula.rotation.y += 0.0001;
  
        // Add mouse interaction for camera movement
        camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 50 - camera.position.y) * 0.05;
  
        // Rotate the scene for added effect
        scene.rotation.x += 0.0002;
        scene.rotation.y += 0.0002;
  
        // Update flickering effect every few frames
        if (Math.random() < 0.1) {
            updateStarFlickering();
        }
  
        // Update star colors every few frames for a dynamic effect
        if (Math.random() < 0.1) {
            updateStarColors();
        }
  
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
    