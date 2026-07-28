import { CONTACT_DATA } from "./contact.data";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function ContactInfo() {
  const { businessName, tagline, phone, email, address, instagram } = CONTACT_DATA;

  return (
    <div>
      <div className="mb-10">
        <h3 className="font-serif text-3xl text-brand-espresso">{businessName}</h3>
        <p className="mt-1 text-brand-dusty-pink">{tagline}</p>
      </div>

      <div className="space-y-7">
        <a href={`tel:${phone}`} className="group flex items-center gap-4 hover:text-brand-espresso transition-colors">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-dusty-pink/10 text-brand-dusty-pink transition-colors group-hover:bg-brand-dusty-pink/20">
            <Phone size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-taupe">Phone</div>
            <div className="font-medium text-brand-espresso">{phone}</div>
          </div>
        </a>

        <a href={`mailto:${email}`} className="group flex items-center gap-4 hover:text-brand-espresso transition-colors">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-dusty-pink/10 text-brand-dusty-pink transition-colors group-hover:bg-brand-dusty-pink/20">
            <Mail size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-taupe">Email</div>
            <div className="font-medium text-brand-espresso">{email}</div>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-dusty-pink/10 text-brand-dusty-pink">
            <MapPin size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-taupe">Studio</div>
            <div className="font-medium text-brand-espresso">{address}</div>
            <div className="text-sm text-brand-taupe">Private Studio • By Appointment Only</div>
          </div>
        </div>

        <a
          href={`https://www.instagram.com/${instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 hover:text-brand-espresso transition-colors"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-dusty-pink/10 text-brand-dusty-pink transition-colors group-hover:bg-brand-dusty-pink/20">
            <Instagram size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-taupe">Instagram</div>
            <div className="font-medium text-brand-espresso">{instagram}</div>
          </div>
        </a>
      </div>
    </div>
  );
}
