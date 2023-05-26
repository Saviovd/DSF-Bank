import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';

useGLTF.preload('/credit_card_white/scene.gltf');

const CreditCard = () => {

   const creditCard = useGLTF('/credit_card_white/scene.gltf');

   return <primitive object={creditCard.scene}
      scale={1.6}
      position={[0, -1.5, 0]}
      rotation={[0, 2.8, 0]}
   />
}


const CreditCardComponent = () => {
   return (
      <Canvas>
         <Suspense fallback={null}>
            <OrbitControls enableZoom={false} enablePan={true} enableDamping={true} enabled={true}/>
            <ambientLight intensity={0.8} />
            <spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1}/>
            <CreditCard />
         </Suspense>
      </Canvas>
   )
}

export default CreditCardComponent;
