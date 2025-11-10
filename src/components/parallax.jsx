import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxEle() {
  return (
    <div className="">
      <Parallax pages={4}>
        <ParallaxLayer offset={0}>
          <div className="h-screen bg-black z-50 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-white"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5}>
          <div className="h-screen bg-blue-500 z-40 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-white"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div className="h-screen bg-orange-500 z-30 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-white"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <div className="h-screen bg-indigo-500 z-20 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-white"></div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
