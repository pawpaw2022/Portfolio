/** @format */

import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";
import ContactIcons from "./ContactIcons";

function Contact() {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5  gap-8">
          {/* left */}
          <div className="relative lg:col-span-2 p-8 h-full w-full shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-100 ease-in">
            <Image
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="business"
              layout="responsive"
              objectFit="cover"
              width="488px"
              height="326px"
            />
            <h2 className="py-2">Paul Lu</h2>
            <p className="pb-8">Full Stack Developer</p>
            <p>I am available for freelance or full-time positions.</p>
            <p className="pb-40">Contact me and let&apos;s talk.</p>
            <p className="py-4 uppercase">Connect with me</p>

            <ContactIcons
              size="p-5 md:p-6"
              extraFeatures="m-auto max-w-[420px] py-4 "
            />
          </div>
          {/* Right */}
          <div className="lg:col-span-3 p-8 h-full w-full shadow-xl relative shadow-gray-400 rounded-xl hover:scale-105 duration-100 ease-in">
            <ContactForm />
          </div>
        </div>
        <div className="flex justify-center pt-24">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 md:p-5 cursor-pointer hover:scale-110 duration-300 ">
              <BsChevronDoubleUp size="25px" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
