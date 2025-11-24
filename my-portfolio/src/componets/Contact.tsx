import { ContactForm } from "./contact/ContactForm";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactInfoCards } from "./contact/ContactInfoCards";
import { SocialLinks } from "./contact/SocialLinks";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <ContactHeader />
        <ContactInfoCards />
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
}

export { Contact };
