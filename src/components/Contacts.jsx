import { CONTACT } from "../Constants";
import { motion } from "framer-motion";
import phone from "../assets/phone.png"; // Phone image
import instagram from "../assets/instagram.png"; // Instagram image
import emailIcon from "../assets/gmail.png"; // Email image

const Contacts = () => {
  return (
    <div className="pb-10 text-neutral-100 px-4">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get In Touch
      </motion.h1>

      {/* Contact Information */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        {/* Address */}
        <p className="mb-8 text-lg text-neutral-400">{CONTACT.address}</p>

        {/* Contact Details */}
        <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:gap-12">
          {/* Phone Number */}
          <div className="flex items-center gap-4">
            <img src={phone} alt="Phone" className="w-5" />
            <p className="text-lg">{CONTACT.phoneNo}</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <img src={emailIcon} alt="Email" className="w-5" />
            <a
              href={`mailto:${CONTACT.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-400 "
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4">
            <img
              src={instagram}
              alt="Instagram"
              className="w-5"
              style={{ cursor: "pointer" }}
            />
            <a
              href={import.meta.env.VITE_REACT_APP_INSTA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-400"
            >
              @rakhisingh2400
            </a>
          </div>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default Contacts;
