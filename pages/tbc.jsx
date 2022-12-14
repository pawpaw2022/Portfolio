/** @format */

import React from "react";
import Image from "next/image";
import { IoMdRadioButtonOn } from "react-icons/io";
import Link from "next/link";
import Head from "next/head";

function tbc() {
  return (
    <div className="w-full">
      <Head>
        <title>Paul | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://toppng.com/uploads/preview/alien-11569184369mxcbuyahny.png"
        />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-[-1]"
          layout="fill"
          ƒ
          objectFit="cover"
          src="/showcases/tbc.jpg"
          alt="/netflix-showcase"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full translate-y-[-50%] text-white p-4 z-10">
          <h2 className="py-2">Project name...</h2>
          <h3>Technologies...</h3>
        </div>
      </div>

      <div className="max-w-[1240px] p-2 grid lg:grid-cols-5 gap-8 pt-8 mx-2">
        <div className="lg:col-span-4">
          <p className="text-xl tracking-wider uppercase text-[#5651e5]">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p className="py-2 text-gray-600">Description...</p>
          <a href="" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-300">
              Demo
            </button>
          </a>
          <a href="" target="_blank">
            <button className="px-8 py-2 mt-4 hover:scale-105 duration-300">
              Code
            </button>
          </a>
        </div>

        <div className="lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-200 mx-4 lg:mx-0">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Mike
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Lucas
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Will
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Dustin
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> El
              </p>
            </div>
          </div>
        </div>

        <div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default tbc;
