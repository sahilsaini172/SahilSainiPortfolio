import { Parallax } from "@react-spring/parallax";

export default function HomeThree() {
  return (
    <div className="h-screen relative bg-linear-to-r from-[#0047ab] to-[#1ca9c9] flex items-center justify-center z-30">
      <div className="absolute w-4/5 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl z-1">
        <img src="/project1.png" alt="" />
      </div>
      <span className="text-[20rem] font-black absolute right-0 text-white z-0">
        T
      </span>
    </div>
  );
}
