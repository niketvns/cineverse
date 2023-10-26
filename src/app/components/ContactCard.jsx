import React from 'react';
import {MdKeyboardDoubleArrowRight, MdEmail} from 'react-icons/md'

const ContactCard = () => {
    return (
        <div className={'shadow-md border w-full sm:w-[400px] py-8 px-6 flex flex-col gap-3 rounded'}>
            <div className="service flex flex-col items-center">
                <div className="icon text-4xl text-red-500">
                    <MdEmail/>
                </div>
                <h2 className={'font-bold text-lg'}>Email</h2>
            </div>
            <div className="routine flex flex-col items-center">
                <p>Monday to Friday Expected</p>
                <p>Monday to Friday Expected</p>
            </div>
            <div className="link flex items-center gap-2 cursor-pointer hover:underline transition duration-700 flex justify-center">Send Email <MdKeyboardDoubleArrowRight/></div>
        </div>
    );
};

export default ContactCard;