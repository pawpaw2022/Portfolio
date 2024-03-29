/** @format */

import React from "react";
import Image from "next/image";
import { IoMdRadioButtonOn } from "react-icons/io";
import Link from "next/link";
import Head from "next/head";

function Pokedex() {
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
          src="/showcases/pokedex.png"
          alt="/netflix-showcase"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full translate-y-[-50%] text-white p-4 z-10">
          <h2 className="py-2">Pokedex with Next 13</h2>
          <h3>Next13 / TypeScript / TailwindCSS / React Query </h3>
        </div>
      </div>

      <div className="max-w-[1240px] p-2 grid lg:grid-cols-5 gap-8 pt-8 mx-6">
        <div className="lg:col-span-4">
          <p className="text-xl tracking-wider uppercase text-[#5651e5]">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p className="py-2 text-gray-600">
            In May 2023, Next.js has released its latest stable version, Next
            13. It is also announced that Next.js will be the official React
            framework. Next 13 has a lot of new features and improvements than
            React, such as Image Optimization, Static Site Generation (SSG),
            Server Side Rendering (SSR) etc. I decided to take the advantages
            and build a Pokedex with it since I&apos;m a huge fan of pokemons!
          </p>

          <h2 className="py-2 text-gray-600 text-2xl">Features</h2>
          <ul className="list-disc ml-5">
            <li>Display and Sort Pokemons</li>
            <ul className="list-disc ml-5">
              <li>By Generation</li>
              <li>By Type</li>
            </ul>
            <li>Search Pokemon by name in the search bar</li>
            <li>Dark / Light mode toggle</li>
            <li>Loading Skeleton while fetching the data</li>
            <li>
              Click on the pokemon card to see the details of the pokemon,
              including
            </li>
            <ul className="list-disc ml-5">
              <li>Stats</li>
              <li>Evolution Chain</li>
              <li>Resistance and Weakness</li>
              <li>Abilities</li>
              <li>Moves</li>
            </ul>
          </ul>

          <a
            href="https://pokedex-xi-ruby.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/pawpaw2022/pokedex"
            rel="noreferrer"
            target="_blank"
          >
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
                <IoMdRadioButtonOn className="pr-1" /> Next 13
              </p>

              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> TypeScript
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Tailwind CSS
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> React Query
              </p>
              <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
                <p className="flex text-[#5651e5] py-2 items-center">
                  <IoMdRadioButtonOn className="pr-1" /> PokeAPI
                </p>
              </a>
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

export default Pokedex;
