import { CONTACT_DATA } from "./contact.data";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function ContactInfo() {
  const { businessName, tagline, phone, email, address, instagram } = CONTACT_DATA;

  return (
    <div>
      <div className="mb-10">
        <h3 className="font-serif text-3xl text-[#3B2A26]">{businessName}</h3>
        <p className="mt-1 text-[#8C5A6B]">{tagline}</p>
      </div>

      <div className="space-y-7">
        <a href={`tel:${phone}`} className="group flex items-center gap-4 hover:text-[#3B2A26] transition-colors">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A9B6]/10 text-[#8C5A6B] transition-colors group-hover:bg-[#D4A9B6]/20">
            <Phone size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7468]">Phone</div>
            <div className="font-medium text-[#3B2A26]">{phone}</div>
          </div>
        </a>

        <a href={`mailto:${email}`} className="group flex items-center gap-4 hover:text-[#3B2A26] transition-colors">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A9B6]/10 text-[#8C5A6B] transition-colors group-hover:bg-[#D4A9B6]/20">
            <Mail size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7468]">Email</div>
            <div className="font-medium text-[#3B2A26]">{email}</div>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A9B6]/10 text-[#8C5A6B]">
            <MapPin size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7468]">Studio</div>
            <div className="font-medium text-[#3B2A26]">{address}</div>
            <div className="text-sm text-[#8C7468]">Private Studio • By Appointment Only</div>
          </div>
        </div>

        <a
          href={`https://www.instagram.com/${instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 hover:text-[#3B2A26] transition-colors"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A9B6]/10 text-[#8C5A6B] transition-colors group-hover:bg-[#D4A9B6]/20">
            <Instagram size={22} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7468]">Instagram</div>
            <div className="font-medium text-[#3B2A26]">{instagram}</div>
          </div>
        </a>
      </div>
    </div>
  );
}
