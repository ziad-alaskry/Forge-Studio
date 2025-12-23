import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { shaderMaterial, Plane } from '@react-three/drei';
import * as THREE from 'three';

// --- Shaders ---

// Embers Shader
const EmbersMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color('#B39867'), // Forge Blue (Gold)
    },
    // Vertex Shader
    `
    uniform float uTime;
    attribute float size;
    attribute float speed;
    attribute float offset;
    varying float vOpacity;
    varying float vOffset; // Pass offset to fragment for flicker
    
    void main() {
      vOffset = offset;
      vec3 pos = position;
      
      // Time scaled by speed
      float t = uTime * speed;
      
      // Organic "Curvy" Movement
      float y = mod(pos.y + t * 0.5 + offset, 20.0) - 10.0;
      
      // Horizontal Swirl
      float swirlX = sin(t * 0.5 + offset) * 1.5; 
      float swirlZ = cos(t * 0.3 + offset * 2.0) * 1.0;
      
      // Vertical Bobbing
      float bobY = sin(t * 0.8 + offset * 3.0) * 0.5;
      
      pos.x += swirlX;
      pos.y = y + bobY;
      pos.z += swirlZ;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
      
      // Fade out at top and bottom
      float dist = abs(y);
      vOpacity = 1.0 - smoothstep(6.0, 10.0, dist);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime; // Needed for flicker
    uniform vec3 uColor;
    varying float vOpacity;
    varying float vOffset;
    
    void main() {
      // Circular particle
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // 1. Realistic Color Gradient (Hot Core -> Cool Edge)
      vec3 hotColor = vec3(1.0, 0.9, 0.5); // Bright Yellow-White
      vec3 coolColor = uColor;             // Base Orange-Red
      
      // Mix based on distance from center (0.0 = center, 0.5 = edge)
      // We multiply dist by 2.0 to get 0.0 to 1.0 range
      vec3 finalColor = mix(hotColor, coolColor, smoothstep(0.0, 0.8, dist * 2.0));
      
      // 2. Soft Glow Edge
      float glow = 1.0 - (dist * 2.0);
      glow = pow(glow, 2.0); // Sharper core
      
      // 3. Flickering Effect
      // Sine wave based on time and the particle's unique offset
      float flicker = 0.8 + 0.2 * sin(uTime * 10.0 + vOffset);
      
      gl_FragColor = vec4(finalColor, vOpacity * glow * flicker);
    }
  `
);

// Molten Line Shader
const MoltenMaterial = shaderMaterial(
    {
        uTime: 0,
        uProgress: 0, // 0 to 1 (drawing)
        uCooling: 0,  // 0 to 1 (cooling)
        uOpacity: 1,  // 0 to 1 (fading)
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform float uProgress;
    uniform float uCooling;
    uniform float uOpacity;
    varying vec2 vUv;
    varying vec3 vNormal;

    // Noise function for texture
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      // Draw progress mask (along U coordinate)
      float drawMask = step(vUv.x, uProgress);
      if (drawMask < 0.5) discard;
      
      // Molten Texture
      float n = noise(vUv * 20.0 + uTime * 0.5);
      
      // Colors
      vec3 hotMagma = vec3(1.0, 0.8, 0.2); // Bright Orange/Yellow (Keep hot for contrast)
      vec3 coolCrust = vec3(0.047, 0.086, 0.078); // Forge Dark
      vec3 coldMetal = vec3(0.227, 0.251, 0.239); // Forge Metal
      
      
      // Heat Intensity
      // Starts very hot (1.0), cools down based on uCooling
      float heat = smoothstep(0.3, 0.7, n); // Texture contrast
      float coolingFactor = uCooling; 
      
      // Mix based on cooling
      // If cooling is 0, we see mostly hotMagma mixed with coolCrust
      // If cooling is 1, we see mostly coldMetal
      
      vec3 moltenState = mix(coolCrust, hotMagma, heat);
      vec3 finalColor = mix(moltenState, coldMetal, coolingFactor);
      
      // Add emissive glow when hot
      float glow = (1.0 - coolingFactor) * heat * 2.0;
      
      gl_FragColor = vec4(finalColor + vec3(glow * 0.5, glow * 0.2, 0.0), 1.0 * uOpacity);
    }
  `
);

// Heat Haze Shader
// const HeatHazeMaterial = shaderMaterial(
//     {
//         uTime: 0,
//         uResolution: new THREE.Vector2(0, 0),
//         uMouse: new THREE.Vector2(0, 0),
//     },
//     // Vertex Shader
//     `
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//     // Fragment Shader
//     `
//     uniform float uTime;
//     uniform vec2 uResolution;
//     uniform vec2 uMouse;
//     varying vec2 vUv;

//     // Simple noise function
//     float random(vec2 st) {
//         return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
//     }

//     float noise(vec2 st) {
//         vec2 i = floor(st);
//         vec2 f = fract(st);
//         float a = random(i);
//         float b = random(i + vec2(1.0, 0.0));
//         float c = random(i + vec2(0.0, 1.0));
//         float d = random(i + vec2(1.0, 1.0));
//         vec2 u = f * f * (3.0 - 2.0 * f);
//         return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
//     }

//     void main() {
//       vec2 uv = vUv;

//       // Heat distortion at the bottom
//       float distortion = noise(uv * 10.0 + vec2(0.0, uTime * 0.5)) * 0.005;

//       // Stronger distortion at bottom, fading up
//       float heatMask = smoothstep(0.4, 0.0, uv.y); 

//       // Mouse interaction glow
//       float mouseDist = distance(uv, uMouse);
//       float mouseGlow = smoothstep(0.4, 0.0, mouseDist) * 0.15;

//       // Background Color: Forge Dark
//       vec3 bgColor = vec3(0.047, 0.086, 0.078); 

//       // Warm Glow Gradient from bottom (Forge Glow/Blue)
//       // Scaled down to be a glow, not solid color
//       vec3 warmGlow = vec3(0.702, 0.596, 0.404) * 0.5; 
//       vec3 finalColor = mix(bgColor, warmGlow, heatMask + mouseGlow);

//       gl_FragColor = vec4(finalColor, 1.0);
//     }
//   `
// );

extend({ EmbersMaterial, MoltenMaterial });

// --- Components ---

const MoltenLine = () => {
    const materialRef = useRef<any>(null);

    // Create a curvy path
    const path = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, -5, 0),
            new THREE.Vector3(-5, 0, 2),
            new THREE.Vector3(0, 2, -1),
            new THREE.Vector3(5, -2, 1),
            new THREE.Vector3(10, 5, 0),
        ]);
        return curve;
    }, []);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.elapsedTime;

            // Animate Progress (Draw the line)
            // Starts at 0, goes to 1 over 3 seconds
            const drawDuration = 3.0;
            const progress = Math.min(state.clock.elapsedTime / drawDuration, 1.0);
            materialRef.current.uProgress = progress;

            // Animate Cooling (Start cooling after drawing is mostly done)
            // Starts at 2.5s, finishes at 5.0s
            const coolingStart = 2.5;
            const coolingDuration = 2.5;
            if (state.clock.elapsedTime > coolingStart) {
                const cooling = Math.min((state.clock.elapsedTime - coolingStart) / coolingDuration, 1.0);
                materialRef.current.uCooling = cooling;
            }

            // Animate Fade Out (After cooling is done)
            // Starts at 5.0s, finishes at 5.8s
            const fadeStart = 5.0;
            const fadeDuration = 0.8;
            if (state.clock.elapsedTime > fadeStart) {
                const opacity = 1.0 - Math.min((state.clock.elapsedTime - fadeStart) / fadeDuration, 1.0);
                materialRef.current.uOpacity = opacity;
            }
        }
    });

    return (
        <mesh position={[0, 0, 0]}>
            <tubeGeometry args={[path, 64, 0.2, 8, false]} />
            {/* @ts-ignore */}
            <moltenMaterial ref={materialRef} transparent />
        </mesh>
    );
};

const Embers = () => {
    const materialRef = useRef<any>(null);
    const count = 100;

    const [positions, sizes, speeds, offsets] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const speeds = new Float32Array(count);
        const offsets = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

            sizes[i] = Math.random() * 2 + 0.5;
            speeds[i] = Math.random() * 0.5 + 0.2;
            offsets[i] = Math.random() * 100;
        }

        return [positions, sizes, speeds, offsets];
    }, []);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.elapsedTime;
        }
    });

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    args={[sizes, 1]}
                />
                <bufferAttribute
                    attach="attributes-speed"
                    count={count}
                    args={[speeds, 1]}
                />
                <bufferAttribute
                    attach="attributes-offset"
                    count={count}
                    args={[offsets, 1]}
                />
            </bufferGeometry>
            {/* @ts-ignore */}
            <embersMaterial ref={materialRef} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
    );
};

// const BackgroundPlane = () => {
//     const materialRef = useRef<any>(null);
//     const { viewport, camera } = useThree();

//     // Calculate the scale factor to fill the screen at z = -5
//     // Camera is at z = 10 (default from Canvas prop)
//     // Distance from camera to plane = 10 - (-5) = 15
//     // Distance from camera to origin (viewport reference) = 10
//     // Factor = 15 / 10 = 1.5
//     const scaleFactor = 1.5;

//     useFrame((state) => {
//         if (materialRef.current) {
//             materialRef.current.uTime = state.clock.elapsedTime;
//             // Map mouse from [-1, 1] to [0, 1] for UV space
//             materialRef.current.uMouse = new THREE.Vector2(
//                 (state.mouse.x + 1) / 2,
//                 (state.mouse.y + 1) / 2
//             );
//         }
//     });

//     // return (
//     //     // <Plane args={[viewport.width * scaleFactor, viewport.height * scaleFactor]} position={[0, 0, -5]}>
//     //     //     {/* @ts-ignore */}
//     //     //     <heatHazeMaterial ref={materialRef} />
//     //     // </Plane>
//     // );
// };

const ForgeBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                {/* <BackgroundPlane /> */}
                {/* <MoltenLine /> */}
                <Embers />
            </Canvas>
        </div>
    );
};

export default ForgeBackground;
