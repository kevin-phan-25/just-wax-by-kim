import { credentials } from "./about.data";


export default function Credentials() {
  return (
    <div
      className="
        mt-12
        grid
        gap-7
      "
    >

      {credentials.map((item) => (

        <div
          key={item.title}
          className="
            flex
            gap-5
          "
        >

          <span
            className="
              mt-2
              h-1.5
              w-1.5
              rounded-full
              bg-[#D4A9B6]
              flex-shrink-0
            "
          />

          <div>

            <h3
              className="
                text-sm
                tracking-[0.12em]
                uppercase
                text-[#3B2A26]
              "
            >
              {item.title}
            </h3>


            <p
              className="
                mt-2
                text-sm
                leading-[1.8]
                text-[#8A776E]
              "
            >
              {item.description}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}
