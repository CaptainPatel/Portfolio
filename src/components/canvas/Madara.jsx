import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const MadaraModel = () => {
    const madaraGltf = useGLTF("./madara/scene.gltf");

    return (
        <primitive
            object={madaraGltf.scene}
            scale={[0.067, 0.067, 0.067]}
            rotation={[0, -Math.PI / 2, 0]}
        />
    );
};

const Madara = () => {
    const [showCredits, setShowCredits] = useState(false);

    const toggleCredits = () => {
        setShowCredits(!showCredits);
    };

    return (
        <div onClick={toggleCredits}>
            <Canvas
                style={{ height: "90vh", width: "25vw" }}
                shadows
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 10,
                    near: 0.4,
                    far: 100,
                    position: [1, 0, 0],
                }}
            >
                <Suspense>
                    <OrbitControls
                        autoRotate
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        autoRotateSpeed={10}
                    />
                    <MadaraModel />
                    <Preload all />
                </Suspense>
            </Canvas>

            {showCredits && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="text-white text-center">
                        <p>Credits:</p>
                        <p>This work is based on "Madara Uchiha (Uchiwa) - Non - edo tensei"<br /> (https://sketchfab.com/3d-models/madara-uchiha-uchiwa-non-edo-tensei-6ae9d16b88b84c769c83059b22a17159) by Romélus 3D (https://sketchfab.com/Romelus) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Madara;
