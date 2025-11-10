import SplitText from "../components/splitText";

export default function HomeTwo(props) {
  return (
    <div ref={props.section2Ref} className="flex justify-center items-center h-screen bg-white overflow-hidden ">
      <span class="w-px h-screen bg-neutral-300 absolute left-[50%] right-[50%] z-1"></span>
      <div className="absolute flex flex-col bg-neutral-900 m-8 w-5/6 p-8 z-2">
        <div className="flex flex-col text-xs">
          <h3 className="flex items-center gap-1 text-xs font-semibold text-neutral-200">
            <div className="w-7 bg-neutral-200 h-px"></div>ABOUT
          </h3>
          <p className="mt-5">
            <NewSplitText
              text={`I'm Sahil, an Indian guy living in Haryana. I'm a frontend developer
            skilled in React, Next.js, and TypeScript. I build clean, responsive
            web apps focused on great user experiences.`}
            />
          </p>
        </div>
        <div className="flex flex-col text-xs mt-10">
          <h3 className="flex items-center gap-1 text-xs font-semibold text-neutral-200">
            <div className="w-7 bg-neutral-200 h-px"></div>EXPERIENCE
          </h3>
          <p className="mt-5">
            <NewSplitText
              text={`I have 2 year experience in Ui/Ux designing and ! year experince in
            Frontend Development.`}
            />
          </p>
        </div>
        <div className="flex flex-col text-xs mt-10">
          <h3 className="flex items-center gap-1 text-xs font-semibold text-neutral-200">
            <div className="w-7 bg-neutral-200 h-px"></div>SKILLS
          </h3>
          <p className="mt-5">
            <NewSplitText
              text={`UI/UX Design, Frontend Development, React, Next.js, TypeScript,
            Tailwind CSS, Responsive Design, JavaScript, HTML, CSS.`}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

function NewSplitText({ text }) {
  return (
    <SplitText
      text={text}
      className="para tracking-wider font-light leading-5 text-neutral-100"
      delay={10}
      duration={0.1}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="left"
    />
  );
}
