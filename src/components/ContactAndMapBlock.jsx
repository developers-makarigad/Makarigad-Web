import GoogleMapBlock from "@/components/GoogleMapBlock";
import ContactForm from "@/components/ContactForm";

const ContactAndMapBlock = () => {
    return (

    <section className={"max-w-7xl mx-auto px-6 pb-6 pt-10 mt-3"}>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <ContactForm />
            <GoogleMapBlock/>
        </div>

    </section>
    );
}


export default ContactAndMapBlock;