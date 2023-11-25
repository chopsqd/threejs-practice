import React from 'react';
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'
import Shirt from "./Shirt.jsx";
import Backdrop from "./Backdrop.jsx";
import CameraRig from "./CameraRig.jsx";

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{position: [0, 0, 0], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
            className={"w-full max-w-full h-full transition-all ease-in"}
        >
            <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[0, 0, 15]} castShadow />
            <Environment preset={"city"} />

            <CameraRig>
                <Backdrop />
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    );
};

export default CanvasModel;
