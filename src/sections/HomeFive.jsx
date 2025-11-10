import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function HomeFive() {
  return (
    <div className="bg-black text-neutral-100 flex flex-col px-12 py-24 gap-8">
      <div className="flex items-center">
        <span className="px-4 py-2 font-thin text-sm bg-white text-neutral-900">
          That's (not) all folks!
        </span>
      </div>
      <p className="mt-8 text-sm leading-8 font-thin tracking-widest">
        Ypu can see more awesome projects on LinkedIn. <br />
        Send me message if you want to chat.
      </p>

      <nav className="flex items-center gap-6">
        <Facebook />
        <Linkedin />
        <Github />
        <Twitter />
      </nav>
    </div>
  );
}
