import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

interface IEarthProps {
   scale: number
}
const Earth = ({scale}: IEarthProps) => {
   const earth = useGLTF('/earth/scene.gltf');
   return <primitive object={earth.scene} scale={scale} position={[0, 0, 0]} />;
};

useGLTF.preload('/earth/scene.gltf');

const EarthComponent = () => {
   const [scale, setScale] = useState<number>(0.0022);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 1260) return setScale(0.0020);
         if (window.innerWidth <= 1024) return setScale(0.0076);
         if (window.innerWidth <= 768) return setScale(0.0035);
         setScale(0.0025)

      }
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener ('resize', handleResize)
      }
   }, [])

   return (
      <Canvas>
         <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1.5} />
            <spotLight position={[-1, 4, -2]} intensity={1} penumbra={1} />
            <Earth scale={scale}/>
         </Suspense>
      </Canvas>
   );
};

export default EarthComponent;


