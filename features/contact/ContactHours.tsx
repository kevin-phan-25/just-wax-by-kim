import { CONTACT_DATA } from "./contact.data";

export default function ContactHours() {
  return (
    <div>
      <h3 className="font-serif text-2xl text-brand-espresso">Studio Hours</h3>

      <div className="mt-6 space-y-4">
        {CONTACT_DATA.hours.map((item) => (
          <div key={item.day} className="flex justify-between text-sm">
            <span className="text-brand-taupe">{item.day}</span>
            <span className="font-medium text-brand-espresso">{item.time}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-brand-taupe/80">
        By appointment only. Appointments are highly recommended to ensure your 
        preferred date and time.
      </p>
    </div>
  );
}
