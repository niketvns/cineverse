import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";

const Page = () => {
    return (
        <>
            <div className="contact-main py-6 flex flex-col justify-center items-center gap-5">
                <h1 className={'text-4xl font-bold'}>Contact Us</h1>
                <div className="all-cards flex flex-wrap items-center justify-center gap-5 px-2">
                    {
                        [1,2,3].map(()=>(
                            <ContactCard/>
                        ))
                    }
                </div>
                <section className={'pt-5 flex flex-col gap-6'}>
                    <h1 className={'text-3xl font-bold'}>We'd love to hear <span className={'text-red-600'}>from you</span></h1>
                    <ContactForm/>
                </section>
            </div>
        </>
    );
};

export default Page;