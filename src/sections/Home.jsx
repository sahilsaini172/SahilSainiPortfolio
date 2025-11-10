import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import HomeFour from "./HomeFour";

export default function Home() {
  return (
    <div className="">
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
    </div>
  );
}
