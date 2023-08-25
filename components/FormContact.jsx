import React from "react";
import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import Link from 'next/link';


function FormContact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const [alert, setAlert] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ijr1bmb", "template_akwer7k", toSend, "eif9fAisD6xQWjpg5")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setAlert(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setAlert(true);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-12 md:basis-1/2 flex flex-col px-0 w-full">
      <div className="">
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            className="mb-4  border-black focus:ring-gray-400 focus:border-none"
            id="name"
            onChange={handleChange}
            name="from_name"
            value={toSend.from_name}
            type="text"
            autoComplete="name"
            required
          />
          <label htmlFor="email" className="mb-2">
            E-mail Address
          </label>
          <input
            className="mb-4 border-black focus:ring-gray-400 focus:border-none"
            id="email"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
            type="text"
            autoComplete="email"
            required
          />
          <label htmlFor="inquiry" className="mb-2">
            Inquiry
          </label>
          <textarea
            className="mb-4 border-black min-h-[100px] focus:ring-gray-400 focus:border-none"
            id="inquiry"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            type="text"
            autoComplete="inquiry"
            placeholder="Your message..."
            required
          />
          <div className="flex justify-center items-center gap-x-10 my-2">
            <button
              type="submit"
              className="h-min w-min px-4 py-1 font-bold text-black border border-black  focus:outline-gray-400"
            >
              Send
            </button>
          </div>
        </form>
        {alert && (
          <div
            className="p-4 my-4 text-sm text-green-700 border border-green-700"
            role="alert"
          >
            Thank you! We will be in touch :)
          </div>
        )}
      </div>
      <h5 className="flex flex-col focus:outline-gray-400 mt-6">
              also via e-mail
              <span className="underline focus:outline-gray-400">
                <Link
                  className="focus:outline-gray-400"
                  href="mailto:c7studio.www@gmail.com"
                >
                  c7studio.www@gmail.com
                </Link>
              </span>
            </h5>
    </div>
    
  );
}

export default FormContact;
