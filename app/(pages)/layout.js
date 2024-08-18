"use client";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import RetroGrid from "@/components/magicui/retro-grid";
import Link from "next/link";
import Image from 'next/image';

const Home = ({ children }) => {
  return (
    <>
      {/* navbar */}
      <div className="bg-gray-900 p-4">
        <div className="flex justify-between items-center mx-auto max-w-6xl">
          <div>
            <Link href="/">
              <Image 
                width={500} 
                height={500} 
                src="/logo.png" 
                alt="Logo" 
                className="h-6 w-auto"
              />
            </Link>
          </div>
          <div>
            <span>
              <Image
                src="/menu-icon.svg"
                width={50}
                height={50}
                alt="icon"
                className="h-8 w-8"
              />
            </span>
          </div>
        </div>
      </div>

      {/* body content */}
      <div className="relative">
        {/* Container for the background pattern */}
        <div className="absolute opacity-30 inset-0">
          <div className="h-full w-full bg-white">
            {/* Pseudo-element for the background pattern with opacity */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:90px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 pointer-events-none"></div>
          </div>
        </div>
        {children}
      </div>
      <div className="">
        {/* how it works */}
        <section className="bg-slate-100 my-20 lg:my-40 p-8">
          <div className="mx-auto max-w-6xl">
            <div className="relative flex">
              <div className="min-h-screen lg:w-1/3"></div>
              <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
              <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                <h1 className="text-2xl font-semibold text-gray-600 lg:text-3xl dark:text-white">
                  How API Works <br /> from <span className="text-purple-500">remove.bg</span> to ericktek
                </h1>
                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                  <Image
                   width={500} 
                   height={500} 
                    className="object-contain object-center w-full lg:w-[32rem] rounded-lg h-96"
                    src="/api.png"
                    alt="developer"
                  />
                  <div className="mt-8 lg:px-10 lg:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                      Understanding the Magic Behind the External API
                    </h1>
                    <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                      &quot;This API route is designed to allow users to upload an image, have its background removed using the remove.bg API, and then receive the processed image directly from the server without storing it in a database or file system. The returned image is base64-encoded, making it easy to display in a web application.&quot;
                    </p>
                    <h3 className="mt-6 text-lg font-medium text-purple-500">
                      Erick B. Lema
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Software developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thanks giving */}
        <div className="pb-20 lg:pb-28 opacity-50">
          <VelocityScroll
            text="Thank you for using our service!"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </div>

        {/* footer */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <p className="font-montserrat text-purple-600">© Copyright 2024. All Rights Reserved.</p>
          <RetroGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
