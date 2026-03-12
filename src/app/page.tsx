import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </>
  );
}