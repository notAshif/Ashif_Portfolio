import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const form = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = () => {
        return currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        const serviceId = "service_sl8qten";
        const templateId = "template_ewsef49";
        const publicKey = "SJIjHgAXY1GhoiDhc";

        // Create template parameters with timestamp
        const templateParams = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value,
            name: form.current.user_name.value, // For your template's {{name}} variable
            time: new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Kolkata'
            })
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setIsLoading(false);
                setMessage("Message sent successfully! 🎉");
                form.current.reset();
            })
            .catch((error) => {
                console.log("Failed.......", error);
                setIsLoading(false);
                setMessage("Failed to send message. Please try again. ❌");
            });
    };

    return (
        <section id="contact" className="contact-section bg-black text-[#B6B09F] min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-6 sm:mb-8 md:mb-12 leading-tight">
                <span>•</span> Contact <span>•</span>
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-20">
                {/* LEFT COLUMN */}
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                        Have an awesome idea?
                        <br />
                        Let's bring it to life.
                    </h2>
                    
                    <input 
                        type="text" 
                        name="user_name"
                        placeholder="Name" 
                        required
                        className="bg-transparent border-b-2 border-[#B6B09F] outline-none p-3 sm:p-4 text-base sm:text-lg placeholder-[#B6B09F] placeholder-opacity-60 focus:border-opacity-100 focus:placeholder-opacity-80 transition-all duration-300" 
                    />
                    
                    <input 
                        type="email" 
                        name="user_email"
                        placeholder="Email" 
                        required
                        className="bg-transparent border-b-2 border-[#B6B09F] outline-none p-3 sm:p-4 text-base sm:text-lg placeholder-[#B6B09F] placeholder-opacity-60 focus:border-opacity-100 focus:placeholder-opacity-80 transition-all duration-300" 
                    />
                    
                    <textarea 
                        name="message"
                        cols="30" 
                        rows="8" 
                        placeholder="Message" 
                        required
                        className="bg-transparent border-b-2 border-[#B6B09F] outline-none p-3 sm:p-4 text-base sm:text-lg placeholder-[#B6B09F] placeholder-opacity-60 focus:border-opacity-100 focus:placeholder-opacity-80 transition-all duration-300 resize-none min-h-[120px] sm:min-h-[150px]"
                    />
                    
                    {/* Success/Error Message */}
                    {message && (
                        <div className={`p-3 sm:p-4 rounded-md text-center font-medium text-sm sm:text-base ${
                            message.includes('successfully') 
                                ? 'bg-green-900 text-green-200 border border-green-700' 
                                : 'bg-red-900 text-red-200 border border-red-700'
                        }`}>
                            {message}
                        </div>
                    )}

                    <div className="flex justify-center sm:justify-start mt-6 sm:mt-8">
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-md border-2 border-[#B6B09F] font-semibold tracking-wide transition-all duration-300 overflow-hidden text-sm sm:text-base w-full sm:w-auto ${
                                isLoading 
                                    ? 'opacity-50 cursor-not-allowed text-[#B6B09F]' 
                                    : 'text-[#B6B09F] hover:bg-[#B6B09F] hover:text-black'
                            }`}
                        >
                            <span className="relative z-10">
                                {isLoading ? 'Sending...' : 'Send message'}
                            </span>
                            {!isLoading && (
                                <div className="absolute inset-0 bg-[#B6B09F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            )}
                        </button>
                    </div>
                </form>
                
                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-2 lg:ml-45">
                    <div className="text-center sm:text-left">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold block mb-3 sm:mb-4">contact details.</span>
                        <a 
                            href="mailto:unoneman666@gmail.com" 
                            className="text-lg sm:text-xl opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block mb-2"
                        >
                            unoneman666@gmail.com
                        </a>
                        <a 
                            href="tel:+919999999999" 
                            className="text-lg sm:text-xl opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block"
                        >
                            +91 9999999999
                        </a>
                    </div>

                    <div className="text-center sm:text-left">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold block mb-3 sm:mb-4">My digital spaces.</span>
                        <a 
                            href="https://github.com/notAshif" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-lg sm:text-xl opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block mb-2"
                        >
                            GitHub Profile
                        </a>
                        <a 
                            href="https://x.com/im_invisible_he" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-lg sm:text-xl opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block"
                        >
                            Twitter/X Profile
                        </a>
                    </div>

                    <div className="text-center sm:text-left">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold block mb-3 sm:mb-4">location</span>
                        <span className="text-lg sm:text-xl opacity-70 block mb-1">Mumbai, Maharashtra</span>
                        <span className="text-base sm:text-lg opacity-60 font-mono block">
                            Local time: {formatTime()}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;