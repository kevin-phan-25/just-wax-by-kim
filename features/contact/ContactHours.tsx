import { CONTACT_DATA } from "./contact.data";

export default function ContactHours() {
  return (
    <div>
      <h3 className="font-serif text-2xl text-[#3B2A26]">Studio Hours</h3>

      <div className="mt-6 space-y-4">
        {CONTACT_DATA.hours.map((item) => (
          <div key={item.day} className="flex justify-between text-base">
            <span className="text-[#8C7468]">{item.day}</span>
            <span className="font-medium text-[#3B2A26]">{item.time}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-[#8C7468]">
        By appointment only. Appointments are highly recommended to ensure your 
        preferred date and time.
      </p>
    </div>
  );
}
