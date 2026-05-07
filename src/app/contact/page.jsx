"use client"
import ContactInfoBlock from "@/components/ContactInfoBlock";
import ContactAndMapBlock from "@/components/ContactAndMapBlock";
import SectionHero from "@/components/SectionHero";
import { contactHero } from "@/data/contactData";
const ContactPage = () => {
    return (

        <div className="">
            <SectionHero title={contactHero.title} backgroundImage={contactHero.backgroundImage} />
            <div></div>

            <div className=" min-h-screen w-[90%] mx-auto pb-30 justify-center items-center">
                <ContactAndMapBlock/>
            <ContactInfoBlock/>


                </div>
            

            
            
            
        </div>
    )

}

export default ContactPage;

