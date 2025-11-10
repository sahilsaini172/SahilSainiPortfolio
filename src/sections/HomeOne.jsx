import { animate } from "animejs";
import { useEffect, useRef } from "react";

export default function HomeOne() {
  const headingRef = useRef(null);
  const subHeadingref = useRef(null);
  const headingClassName =
    "bg-neutral-900 ‰ text-nowrap overflow-hidden py-1 px-4 font-extralight text-xl tracking-widest";

  useEffect(() => {
    animate(headingRef.current, {
      width: [{ from: "-7px", duration: 1000, delay: 200 }, { to: "100%" }],
      opacity: [{ from: 0, delay: 700, duration: 500 }, { to: 100 }],
      ease: "inOutCubic",
    });

    animate(subHeadingref.current, {
      width: [{ from: "-7px", duration: 1000, delay: 200 }, { to: "100%" }],
      opacity: [{ from: 0, delay: 700, duration: 500 }, { to: 100 }],
      ease: "inOutCubic",
    });
  });

  return (
    <div className="h-screen relative flex items-center justify-center bg-white">
      <span class="w-px h-screen bg-neutral-300 absolute left-[50%] right-[50%] z-1"></span>
      <div className="absolute z-20 text-center flex flex-col gap-1 text-neutral-100">
        <h1 ref={headingRef} className={headingClassName}>
          <span className="textHead">SAHIL SAINI</span>
        </h1>
        <h2 ref={subHeadingref} className={headingClassName}>
          <span className="textHead">FRONTEND DEVELOPER</span>
        </h2>
      </div>
      <div className="absolute flex flex-col rotate-90">
        <p className="text-[16rem] z-10 font-bold text-neutral-800">Hello</p>
        <p className="text-[16rem] absolute left-4 top-4 font-bold text-black/20">
          Hello
        </p>
      </div>
    </div>
  );
}
