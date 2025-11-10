import { animate } from "animejs";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomeOne() {
  const btnRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingref = useRef(null);
  const headingClassName =
    "bg-neutral-950 text-nowrap overflow-hidden py-1 px-4 font-extralight text-xl tracking-widest";

  useEffect(() => {
    animate(headingRef.current, {
      width: [{ from: "-7px", duration: 1000, delay: 100 }, { to: "100%" }],
      opacity: [{ from: 0, delay: 600, duration: 500 }, { to: 100 }],
      ease: "inOutCubic",
    });

    animate(subHeadingref.current, {
      width: [{ from: "-7px", duration: 1000, delay: 100 }, { to: "100%" }],
      opacity: [{ from: 0, delay: 600, duration: 500 }, { to: 100 }],
      ease: "inOutCubic",
    });
    animate(".textHead", {
      x: [
        {
          from: "2rem",
        },
        { to: "0" },
      ],
      duration:2000
    });
  });

  function mouseEnterBtn() {
    animate(btnRef.current, {
      scale: 1.2,
      duration: 500,
    });
  }
  function mouseLeaveBtn() {
    animate(btnRef.current, {
      scale: 1,
      duration: 500,
    });
  }

  return (
    <div className="h-screen relative flex items-center justify-center overflow-x-hidden overflow-y-auto z-50 bg-white">
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
      <button className="absolute flex items-center justify-center bg-black z-20 bottom-5 size-10 rounded-full overflow-visible">
        <span
          onMouseEnter={() => mouseEnterBtn()}
          onMouseLeave={() => mouseLeaveBtn()}
          ref={btnRef}
          className="absolute flex items-center justify-center size-10 rounded-full bg-black/50"
        >
          <ArrowDown size={16} className="text-white" />
        </span>
      </button>
    </div>
  );
}
