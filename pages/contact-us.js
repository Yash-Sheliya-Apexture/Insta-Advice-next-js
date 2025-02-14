// import React, { useState } from "react";

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Replace this with form submission logic in a real application
//         console.log("Form Data Submitted:", formData);
//         // Reset the form after submission (optional)
//         setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             message: "",
//         });
//     };

//     return (
//         <>
//             <section className="ContactUs py-12 relative">
//                 <div className="container mx-auto px-4">
//                     <div className="bg-gradient-yellow">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <h1 className="text-3xl text-gray-500 md:text-5xl font-gt font-bold mt-6">
//                                 <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
//                                     Contact us
//                                 </span>
//                             </h1>

//                             <div>
//                                 <h6 className="text-xl text-gray-500 md:text-3xl font-gt font-bold mt-6">
//                                     Your thoughts matter! We'd love to hear from you.
//                                 </h6>
//                                 <p className="text-lg md:text-xl text-light-color font-medium mt-6">
//                                     Whether you have a specific question or are ready to accelerate your growth, our team is ready to help you. Send us a message to start your growth journey.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-10">
//                             <form
//                                 onSubmit={handleSubmit}
//                                 className="bg-white p-6 rounded-xl shadow-main-shadow max-w-3xl mx-auto space-y-6"
//                             >
//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     {/* First Name */}
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="firstName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             First name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="firstName"
//                                             name="firstName"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                             placeholder="Enter your name"
//                                             className="mt-1 p-2 pl-4 w-full border border-gray-300 text-gray-500 rounded-md"
//                                             required
//                                         />
//                                     </div>

//                                     {/* Last Name */}
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="lastName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Last name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="lastName"
//                                             name="lastName"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                             placeholder="Enter last name"
//                                             className="mt-1 p-2 pl-4 w-full border border-gray-300 text-gray-500 rounded-md"
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     {/* Email */}
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="email"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Email <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             placeholder="example@domain.com"
//                                             className="mt-1 p-2 pl-4 w-full border border-gray-300 text-gray-500 rounded-md"
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Message */}
//                                 <div className="mt-6">
//                                     <label
//                                         htmlFor="message"
//                                         className="block text-sm font-medium text-light-color"
//                                     >
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         placeholder="Enter your message"
//                                         rows="10"
//                                         className="mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md"
//                                     ></textarea>
//                                 </div>

//                                 <div className="mt-6 text-center">
//                                     <button
//                                         type="submit"
//                                         className="px-4 cursor-pointer py-2 w-36 bg-gray-900 text-white font-medium rounded-md hover:bg-custom-dark"
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ContactUs;

// import React, { useState } from "react";

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//     });

//     // State to track which fields have been touched (focused and then blurred)
//     const [touched, setTouched] = useState({
//         firstName: false,
//         lastName: false,
//         email: false,
//         message: false,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleBlur = (e) => {
//         const { name } = e.target;
//         setTouched((prevTouched) => ({
//             ...prevTouched,
//             [name]: true,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Replace this with form submission logic in a real application
//         console.log("Form Data Submitted:", formData);
//         // Reset the form after submission (optional)
//         setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             message: "",
//         });
//         setTouched({
//             firstName: false,
//             lastName: false,
//             email: false,
//             message: false,
//         });
//     };

//     const getInputStyle = (fieldName) => {
//         return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${
//             formData[fieldName] ? "border-2 border-gray-900" : "border-gray-300"
//         }`;
//     };

//     const getTextAreaStyle = () => {
//       return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${
//         formData.message ? "border-2 border-gray-900" : "border-gray-300"
//       }`;
//     }

//     return (
//         <>
//             <section className="ContactUs py-12 relative">
//                 <div className="container mx-auto px-4">
//                     <div className="bg-gradient-yellow">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <h1 className="text-3xl text-gray-500 lg:text-5xl font-gt font-bold mt-6">
//                                 <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
//                                     Contact us
//                                 </span>
//                             </h1>

//                             <div>
//                                 <h6 className="text-xl text-gray-500 lg:text-3xl font-gt font-bold lg:mt-6 mt-2">
//                                     Your thoughts matter! We'd love to hear from you.
//                                 </h6>
//                                 <p className="text-lg md:text-xl text-light-color font-medium lg:mt-6 mt-2">
//                                     Whether you have a specific question or are ready to accelerate your growth, our team is ready to help you. Send us a message to start your growth journey.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-10">
//                             <form
//                                 onSubmit={handleSubmit}
//                                 className="bg-white p-8 rounded-xl shadow-main-shadow max-w-4xl mx-auto space-y-6"
//                             >
//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     {/* First Name */}
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="firstName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             First name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="firstName"
//                                             name="firstName"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter your name"
//                                             className={getInputStyle("firstName")}
//                                             required
//                                         />
//                                     </div>

//                                     {/* Last Name */}
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="lastName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Last name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="lastName"
//                                             name="lastName"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter last name"
//                                             className={getInputStyle("lastName")}
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     {/* Email */}
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="email"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Email <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="example@domain.com"
//                                             className={getInputStyle("email")}
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Message */}
//                                 <div className="mt-6">
//                                     <label
//                                         htmlFor="message"
//                                         className="block text-sm font-medium text-light-color"
//                                     >
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         placeholder="Enter your message"
//                                         rows="10"
//                                         className={getTextAreaStyle()}
//                                     ></textarea>
//                                 </div>

//                                 <div className="mt-6 text-center">
//                                     <button
//                                         type="submit"
//                                         className="px-4 cursor-pointer py-2 w-52 bg-gray-900 text-white font-medium rounded-md hover:bg-custom-dark"
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ContactUs;

// import React, { useState } from "react";
// import { db } from "../lib/firebase";
// import { collection, addDoc } from "firebase/firestore";

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//     });

//     const [touched, setTouched] = useState({
//         firstName: false,
//         lastName: false,
//         email: false,
//         message: false,
//     });

//     const [formError, setFormError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleBlur = (e) => {
//         const { name } = e.target;
//         setTouched((prevTouched) => ({
//             ...prevTouched,
//             [name]: true,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setFormError(null);
//         setSuccessMessage(null);
//         setIsSubmitting(true); // Start submission

//         if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
//             setFormError("Please fill out all required fields.");
//             setIsSubmitting(false); // Stop submission
//             return;
//         }

//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(formData.email)) {
//             setFormError("Please enter a valid email address.");
//             setIsSubmitting(false); // Stop submission
//             return;
//         }

//         try {
//             const docRef = await addDoc(collection(db, "contacts"), formData);
//             console.log("Document written with ID: ", docRef.id);

//             setSuccessMessage("Your message has been sent successfully!");

//             // Automatically clear success message after 3 seconds (adjust as needed)
//             setTimeout(() => {
//                 setSuccessMessage(null);
//             }, 3000);

//             setFormData({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 message: "",
//             });
//             setTouched({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 message: "",
//             });
//         } catch (error) {
//             console.error("Error adding document: ", error);
//             setFormError("There was an error submitting the form. Please try again.");
//         } finally {
//             setIsSubmitting(false); // Stop submission in any case
//         }
//     };

//     const getInputStyle = (fieldName) => {
//         return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${
//             formData[fieldName] ? "border-2 border-gray-900" : "border-gray-300"
//         }`;
//     };

//     const getTextAreaStyle = () => {
//         return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${
//             formData.message ? "border-2 border-gray-900" : "border-gray-300"
//         }`;
//     };

//     return (
//         <>
//             <section className="ContactUs py-12 relative">
//                 <div className="container mx-auto px-4">
//                     <div className="bg-gradient-yellow">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <h1 className="text-3xl text-gray-500 lg:text-5xl font-gt font-bold mt-6">
//                                 <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
//                                     Contact us
//                                 </span>
//                             </h1>

//                             <div>
//                                 <h6 className="text-xl text-gray-500 lg:text-3xl font-gt font-bold lg:mt-6 mt-2">
//                                     Your thoughts matter! We'd love to hear from you.
//                                 </h6>
//                                 <p className="text-lg md:text-xl text-light-color font-medium lg:mt-6 mt-2">
//                                     Whether you have a specific question or are ready to accelerate your growth, our team is ready to help you. Send us a message to start your growth journey.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-10">

//                             <form
//                                 onSubmit={handleSubmit}
//                                 className="bg-white p-8 rounded-xl shadow-main-shadow max-w-4xl mx-auto space-y-6"
//                             >
//                                 {formError && (
//                                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//                                         <strong className="font-bold">Error!</strong>
//                                         <span className="block sm:inline">{formError}</span>
//                                     </div>
//                                 )}

//                                 {successMessage && (
//                                     <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
//                                         <strong className="font-bold">Success! </strong>
//                                         <span className="block sm:inline">{successMessage}</span>
//                                     </div>
//                                 )}

//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="firstName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             First name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="firstName"
//                                             name="firstName"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter your name"
//                                             className={getInputStyle("firstName")}
//                                             required
//                                             disabled={isSubmitting} // Disable the input during submission
//                                         />
//                                     </div>

//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="lastName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Last name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="lastName"
//                                             name="lastName"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter last name"
//                                             className={getInputStyle("lastName")}
//                                             required
//                                             disabled={isSubmitting} // Disable the input during submission
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="email"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Email <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="example@domain.com"
//                                             className={getInputStyle("email")}
//                                             required
//                                             disabled={isSubmitting} // Disable the input during submission
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="mt-6">
//                                     <label
//                                         htmlFor="message"
//                                         className="block text-sm font-medium text-light-color"
//                                     >
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         placeholder="Enter your message"
//                                         rows="10"
//                                         className={getTextAreaStyle()}
//                                         disabled={isSubmitting} // Disable the textarea during submission
//                                     ></textarea>
//                                 </div>

//                                 <div className="mt-6 flex justify-center">
//                                     <button
//                                         type="submit"
//                                         className="px-4 flex justify-center gap-4 cursor-pointer py-2 w-52 bg-gray-900 text-white font-medium rounded-md hover:bg-custom-dark"
//                                         disabled={isSubmitting}
//                                     >
//                                         {isSubmitting ? (
//                                             <>
//                                                 <svg className="size-5 animate-spin" viewBox="0 0 24 24">
//                                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                                 </svg>
//                                                 Processing...
//                                             </>
//                                         ) : (
//                                             "Submit"
//                                         )}
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ContactUs;

// import React, { useState } from "react";
// import { db } from "../lib/firebase";
// import { collection, addDoc } from "firebase/firestore";

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//     });

//     const [touched, setTouched] = useState({
//         firstName: false,
//         lastName: false,
//         email: false,
//         message: false,
//     });

//     const [formError, setFormError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleBlur = (e) => {
//         const { name } = e.target;
//         setTouched((prevTouched) => ({
//             ...prevTouched,
//             [name]: true,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setFormError(null);
//         setSuccessMessage(null);
//         setIsSubmitting(true); // Start submission

//         if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
//             setFormError("Please fill out all required fields.");
//             setIsSubmitting(false); // Stop submission
//             return;
//         }

//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(formData.email)) {
//             setFormError("Please enter a valid email address.");
//             setIsSubmitting(false); // Stop submission
//             return;
//         }

//         try {
//             const docRef = await addDoc(collection(db, "contacts"), formData);
//             console.log("Document written with ID: ", docRef.id);

//             // Send email to admin
//             try {
//                 const response = await fetch("/api/sendEmail", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 });

//                 if (!response.ok) {
//                     console.error("Error sending email:", response.statusText);
//                     setFormError("There was an error sending the email notification."); // Separate error for email failure
//                 } else {
//                     console.log("Email sent successfully!");
//                 }
//             } catch (emailError) {
//                 console.error("Error sending email:", emailError);
//                 setFormError("There was an error sending the email notification."); // Separate error for email failure
//             }

//             setSuccessMessage("Your message has been sent successfully!");

//             // Automatically clear success message after 3 seconds (adjust as needed)
//             setTimeout(() => {
//                 setSuccessMessage(null);
//             }, 3000);

//             setFormData({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 message: "",
//             });
//             setTouched({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 message: "",
//             });
//         } catch (error) {
//             console.error("Error adding document: ", error);
//             setFormError("There was an error submitting the form. Please try again.");
//         } finally {
//             setIsSubmitting(false); // Stop submission in any case
//         }
//     };

//     const getInputStyle = (fieldName) => {
//         return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${
//             formData[fieldName] ? "border-2 border-gray-900" : "border-gray-300"
//         }`;
//     };

//     const getTextAreaStyle = () => {
//         return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${
//             formData.message ? "border-2 border-gray-900" : "border-gray-300"
//         }`;
//     };

//     return (
//         <>
//             <section className="ContactUs py-12 relative">
//                 <div className="container mx-auto px-4">
//                     <div className="bg-gradient-yellow">
//                         <div className="max-w-3xl mx-auto text-center">
//                             {/* new heding  */}
//                             <h1 className="text-3xl text-gray-500 lg:text-5xl font-gt font-bold mt-6">
//                                 <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
//                                     Contact us
//                                 </span>
//                             </h1>

//                             <div>
//                                 <h6 className="text-xl text-gray-500 lg:text-3xl font-gt font-bold lg:mt-6 mt-2">
//                                     Your thoughts matter! We'd love to hear from you.
//                                 </h6>
//                                 <p className="text-lg md:text-xl text-light-color font-medium lg:mt-6 mt-2">
//                                     Whether you have a specific question or are ready to accelerate your growth, our team is ready to help you. Send us a message to start your growth journey.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-10">
//                             <form
//                                 onSubmit={handleSubmit}
//                                 className="bg-white p-8 rounded-xl shadow-main-shadow max-w-4xl mx-auto space-y-6"
//                             >
//                                 {formError && (
//                                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//                                         <strong className="font-bold">Error!</strong>
//                                         <span className="block sm:inline">{formError}</span>
//                                     </div>
//                                 )}

//                                 {successMessage && (
//                                     <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
//                                         <strong className="font-bold">Success! </strong>
//                                         <span className="block sm:inline">{successMessage}</span>
//                                     </div>
//                                 )}

//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="firstName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             First name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="firstName"
//                                             name="firstName"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter your name"
//                                             className={getInputStyle("firstName")}
//                                             required
//                                             disabled={isSubmitting} // Disable the input during submission
//                                         />
//                                     </div>

//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="lastName"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Last name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="lastName"
//                                             name="lastName"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter last name"
//                                             className={getInputStyle("lastName")}
//                                             required
//                                             disabled={isSubmitting} // Disable the input during submission
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                                     <div className="w-full">
//                                         <label
//                                             htmlFor="email"
//                                             className="block text-sm font-medium text-light-color"
//                                         >
//                                             Email <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder="example@domain.com"
//                                             className={getInputStyle("email")}
//                                             required
//                                             disabled={isSubmitting} // Disable the input during submission
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="mt-6">
//                                     <label
//                                         htmlFor="message"
//                                         className="block text-sm font-medium text-light-color"
//                                     >
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         placeholder="Enter your message"
//                                         rows="10"
//                                         className={getTextAreaStyle()}
//                                         disabled={isSubmitting} // Disable the textarea during submission
//                                     ></textarea>
//                                 </div>

//                                 <div className="mt-6 flex justify-center">
//                                     <button
//                                         type="submit"
//                                         className="px-4 flex justify-center gap-4 cursor-pointer py-2 w-52 bg-gray-900 text-white font-medium rounded-md hover:bg-custom-dark"
//                                         disabled={isSubmitting}
//                                     >
//                                         {isSubmitting ? (
//                                             <>
//                                                 <svg className="size-5 animate-spin" viewBox="0 0 24 24">
//                                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                                 </svg>
//                                                 Processing...
//                                             </>
//                                         ) : (
//                                             "Submit"
//                                         )}
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ContactUs;

import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import Seo from "@/components/Seo";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remainingChars, setRemainingChars] = useState(1000);

  const MAX_CHARS = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      if (value.length <= MAX_CHARS) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setRemainingChars(MAX_CHARS - value.length);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Clear the error message when the user starts typing
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    let isValid = true;
    const newFieldErrors = {};

    if (!formData.firstName) {
      newFieldErrors.firstName = "First name is required.";
      isValid = false;
    }

    if (!formData.lastName) {
      newFieldErrors.lastName = "Last name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newFieldErrors.email = "Email is required.";
      isValid = false;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newFieldErrors.email = "Please enter a valid email address.";
        isValid = false;
      }
    }

    if (!formData.message) {
      newFieldErrors.message = "Message is required.";
      isValid = false;
    }

    setFieldErrors(newFieldErrors);

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Send email to admin
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          console.error("Error sending email:", response.statusText);
          setFormError("There was an error sending the email notification."); // Separate error for email failure
        } else {
          console.log("Email sent successfully!");
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        setFormError("There was an error sending the email notification."); // Separate error for email failure
      }

      setSuccessMessage("Your message has been sent successfully!");

      // Automatically clear success message after 3 seconds (adjust as needed)
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setFieldErrors({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setRemainingChars(MAX_CHARS); // Reset remaining chars after submit
    } catch (error) {
      console.error("Error adding document: ", error);
      setFormError("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputStyle = (fieldName) => {
    return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${fieldErrors[fieldName]
        ? "border-2 border-red-500"
        : formData[fieldName]
          ? "border-2 border-gray-900"
          : "border-gray-300"
      }`;
  };

  const getTextAreaStyle = () => {
    return `mt-1 p-2 pl-4 w-full border rounded-md text-gray-700 ${fieldErrors.message
        ? "border-2 border-red-500"
        : formData.message
          ? "border-2 border-gray-900"
          : "border-gray-300"
      } relative`; // Added relative positioning
  };

  return (
    <>
      <Seo
        title="Contact InstaAdvice - We're Here to Help!"
        description="Need help? Contact InstaAdvice! Reach our support team via phone, email, or form. We're here to answer your questions. Contact us today!"
        ogType="website"
        path="/contact-us"
      />
      <section className="ContactUs py-12 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-yellow">
            <div className="max-w-3xl mx-auto text-center">
              {/* new heding  */}
              <h1 className="text-3xl text-gray-500 lg:text-5xl font-gt font-bold mt-6">
                <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
                  Contact us
                </span>
              </h1>

              <div>
                <h6 className="text-xl text-gray-500 lg:text-3xl font-gt font-bold lg:mt-6 mt-2">
                  Your thoughts matter! We'd love to hear from you.
                </h6>
                <p className="text-lg md:text-xl text-light-color font-medium lg:mt-6 mt-2">
                  Whether you have a specific question or are ready to
                  accelerate your growth, our team is ready to help you. Send us
                  a message to start your growth journey.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-main-shadow max-w-4xl mx-auto space-y-6"
              >
                {formError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{formError}</span>
                  </div>
                )}

                {successMessage && (
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Success! </strong>
                    <span className="block sm:inline">{successMessage}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-6">
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
                      className={getInputStyle("firstName")}
                      disabled={isSubmitting} // Disable the input during submission
                    />
                    {fieldErrors.firstName && (
                      <p className="text-red-500 text-sm italic">
                        {fieldErrors.firstName}
                      </p>
                    )}
                  </div>

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
                      className={getInputStyle("lastName")}
                      disabled={isSubmitting} // Disable the input during submission
                    />
                    {fieldErrors.lastName && (
                      <p className="text-red-500 text-sm italic">
                        {fieldErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
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
                      className={getInputStyle("email")}
                      disabled={isSubmitting} // Disable the input during submission
                    />
                    {fieldErrors.email && (
                      <p className="text-red-500 text-sm italic">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <div className=" relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-light-color"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows="10"
                      className={getTextAreaStyle()}
                      disabled={isSubmitting} // Disable the textarea during submission
                    ></textarea>
                    <p className="text-gray-500 text-sm absolute right-2 bottom-2">
                      ({MAX_CHARS - remainingChars} / {MAX_CHARS})
                    </p>
                  </div>
                  {fieldErrors.message && (
                    <p className="text-red-500 text-sm italic">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-4 flex justify-center gap-4 cursor-pointer py-2 w-52 bg-gray-900 text-white font-medium rounded-md hover:bg-custom-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="size-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit"
                    )}
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
