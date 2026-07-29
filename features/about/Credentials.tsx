import { credentials } from "./about.data";


export default function Credentials() {
  return (
    <div className="mt-10 space-y-6">

      {credentials.map((item) => (

        <div key={item.title}>

          <h3
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              mt-2
              text-sm
              leading-[1.75]
              text-[#8A776E]
            "
          >
            {item.description}
          </p>

        </div>

      ))}

    </div>
  );
}
