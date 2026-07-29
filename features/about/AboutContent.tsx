import { aboutContent } from "./about.data";
import Credentials from "./Credentials";


export default function AboutContent() {
  return (
    <div className="max-w-xl">


      <p
        className="
          mb-6
          text-[0.65rem]
          uppercase
          tracking-[0.35em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>


      <h2
        className="
          font-serif
          text-4xl
          md:text-[3.25rem]
          leading-[1.15]
          tracking-[-0.03em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>


      <div
        className="
          my-8
          h-px
          w-16
          bg-[#D4A9B6]
        "
      />


      <p
        className="
          text-[1rem]
          leading-[1.9]
          text-[#7E6B63]
        "
      >
        {aboutContent.description}
      </p>


      <Credentials />

    </div>
  );
}
