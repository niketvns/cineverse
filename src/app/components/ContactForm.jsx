'use client'

import {useState} from 'react';

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser((prevUser) => ({...prevUser, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {"Content_Type": "application/json"},
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <form onSubmit={handleSubmit} className={'flex flex-col gap-2 p-4 pt-8 shadow border'}>

            <label htmlFor="username" className='flex flex-col gap-1'>
                Enter Your Name
                <input
                    required
                    type="text"
                    id='username'
                    name='username'
                    placeholder='Enter Your Name'
                    className='border p-2'
                    value={user.username}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>

            <label htmlFor="email" className='flex flex-col gap-1'>
                Email
                <input
                    required
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter Your Email'
                    className='border p-2'
                    value={user.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>

            <label htmlFor="phone" className='flex flex-col gap-1'>
                Phone Number
                <input
                    required
                    type="number"
                    id='phone'
                    name='phone'
                    placeholder='Enter Your Phone'
                    className='border p-2 resize-none'
                    value={user.phone}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>

            <label htmlFor="message" className='flex flex-col gap-1'>
                Message
                <textarea
                    required
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder='Enter Your Message'
                    className='border p-2 resize-none'
                    value={user.message}
                    onChange={handleChange}
                    autoComplete="off"
                ></textarea>
            </label>
            <div className="status">
                {
                    status === 'success' &&
                        <div className={'text-green-600'}>Thank you for your message.</div>
                }
                {
                    status === 'error' &&
                    <div className={'text-red-600'}>There was an error submitting your message. Please try again.</div>
                }
            </div>

            <button
                type='submit'
                className={'bg-black text-sm lg:text-lg px-4 py-2 rounded-full text-white border-2 hover:border-2 border-black hover:text-black hover:bg-transparent transition duration-150'}
            >
                Send Message
            </button>

        </form>
    );
};

export default ContactForm;