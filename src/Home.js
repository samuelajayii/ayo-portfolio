import { Canvas } from '@react-three/fiber';
import React from 'react';
import Camera from './ModelComponents/Camera';
import { PerspectiveCamera } from '@react-three/drei';


//CLOUDINARY_URL=cloudinary://144213486566649:cEaQlEkqhFGwEizcW2rFzjkAMRA@dzewzsbby
//https://api.cloudinary.com/v1_1/dzewzsbby/resources/image/folder/compressed-images

const Home = () => {

    return (
        <div className='h-[80vh] w-full flex flex-col relative items-center'>
            <h1 className='text-3xl'>I am Odeleye Ayojesu</h1>
            <h1 className='text-xl'>Photographer Extraordinaire</h1>
            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full '>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <Camera scale={0.1} position={[18, 3, 0]} />
                    <ambientLight intensity={13} />
                    <directionalLight position={[10, 10, 10]} intensity={5} />
                    <directionalLight position={[5, 0, 10]} intensity={1} />
                    <directionalLight position={[-5, 0, 10]} intensity={1} />
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={0.5} intensity={0.7} castShadow />
                    <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={0.5} intensity={7} castShadow />
                </Canvas>
            </div>



        </div>
    );
}

export default Home;