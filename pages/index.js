/** @format */

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Paul | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://toppng.com/uploads/preview/alien-11569184369mxcbuyahny.png"
        />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}
