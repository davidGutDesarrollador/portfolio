/* "use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m4fuo0g", "template_gh92qel", form.current, {
        publicKey: "zc1dyZV_maEuOsT7n",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 justify-center items-center">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, animi,
          esse in harum aperiam sequi nobis praesentium, error nostrum possimus
          pariatur.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/davidGutDesarrollador">
            <Image
              src="/images/github-icon.svg"
              alt="Github Icon"
              width={50}
              height={50}
              className="mt-2"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/david-gutierrez-rubio">
            <Image
              src="/images/linkedin-icon.svg"
              alt="Linkedin Icon"
              width={70}
              height={70}
            />
          </Link>
        </div>
      </div>
      
      <form className="flex flex-col mt-10 " ref={form} onSubmit={sendEmail}>
        <label className="text-white block mb-1 text-sm font-medium">Name</label>
        <input
          placeholder="Your Name"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4 "
          type="text"
          name="user_name"
        />
        <label className="text-white block mb-1 text-sm font-medium">Email</label>
        <input
          placeholder="Your Email"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4"
          type="email"
          name="user_email"
        />
        <label className="text-white block mb-1 text-sm font-medium">
          Message
        </label>
        <textarea
          placeholder="Your Message"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4"
          name="message"
        />
        <input
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg py-2.5 px-6 w-full"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
 */

"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null); // Estado para mostrar el mensaje de éxito/error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m4fuo0g", "template_gh92qel", form.current, {
        publicKey: "zc1dyZV_maEuOsT7n",
      })
      .then(
        () => {
          setMessage({ text: "Message sent successfully!", type: "success" });
          form.current.reset();
        },
        (error) => {
          setMessage({ text: "Error sending message. Try again!", type: "error" });
        }
      );
  };

  return (
    <div id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 justify-center items-center">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        I'm always excited to collaborate and explore new opportunities. Feel free to reach out—let's create something amazing together!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/davidGutDesarrollador">
            <Image
              src="/images/github-icon.svg"
              alt="Github Icon"
              width={50}
              height={50}
              className="mt-2"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/david-gutierrez-rubio">
            <Image
              src="/images/linkedin-icon.svg"
              alt="Linkedin Icon"
              width={70}
              height={70}
            />
          </Link>
        </div>
      </div>
      
      <form className="flex flex-col mt-10 " ref={form} onSubmit={sendEmail}>
        <label className="text-white block mb-1 text-sm font-medium">Name</label>
        <input
          placeholder="Your Name"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4"
          type="text"
          name="user_name"
          required
        />
        <label className="text-white block mb-1 text-sm font-medium">Email</label>
        <input
          placeholder="Your Email"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4"
          type="email"
          name="user_email"
          required
        />
        <label className="text-white block mb-1 text-sm font-medium">
          Message
        </label>
        <textarea
          placeholder="Your Message"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4"
          name="message"
          required
        />
        <input
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg py-2.5 px-6 w-full cursor-pointer"
          type="submit"
          value="Send"
        />

        {/* Mensaje de éxito o error */}
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
