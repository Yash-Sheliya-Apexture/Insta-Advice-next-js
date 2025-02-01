import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Replace this with form submission logic in a real application
        console.log("Form Data Submitted:", formData);
        // Reset the form after submission (optional)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <section className="ContactUs py-12 relative">
                <div className="container max-w-full mx-auto">
                    <div className="bg-gradient-yellow">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-3xl text-gray-500 md:text-5xl font-gt font-bold mt-6">
                                <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
                                    Contact us
                                </span>
                            </h1>

                            <div>
                                <h6 className="text-xl text-gray-500 md:text-3xl font-gt font-bold mt-6">
                                    Your thoughts matter! We'd love to hear from you.
                                </h6>
                                <p className="text-lg md:text-xl text-light-color font-medium mt-6">
                                    Whether you have a specific question or are ready to accelerate your growth, our team is ready to help you. Send us a message to start your growth journey.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white p-6 rounded-xl shadow-main-shadow max-w-3xl mx-auto space-y-6"
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    {/* First Name */}
                                    <div className="w-full">
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium text-light-color"
                                        >
                                            First name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
                                            required
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="w-full">
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium text-light-color"
                                        >
                                            Last name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter last name"
                                            className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    {/* Email */}
                                    <div className="w-full">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-light-color"
                                        >
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@domain.com"
                                            className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-light-color"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                        rows="10"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    ></textarea>
                                </div>

                                <div className="mt-6 text-center">
                                    <button
                                        type="submit"
                                        className="px-4 cursor-pointer py-2 w-36 bg-gray-900 text-white font-medium rounded-md hover:bg-custom-dark"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
