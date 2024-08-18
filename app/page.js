"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import RetroGrid from "@/components/magicui/retro-grid";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const removeBackground = async () => {
    if (!selectedImage) {
      setError("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post("/api/removeBg", formData);

      if (response.status === 200) {
        setResultImage(response.data.imageUrl);
      } else {
        setError(
          `Error: server returned ${response.status} status code. Please try again. `
        );
        console.error(response.data);
      }
    } catch (error) {
      setError("something went wrong. Please try again later.");
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <>
    {/*  navbar  */}
      <div className="bg-gray-900 p-4">
        <div className="flex justify-between items-center mx-auto max-w-6xl">
          <div>
            <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
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
        {/* <!-- Container for the background pattern --> */}
        <div className="absolute opacity-30 inset-0">
          <div className="h-full w-full bg-white">
            {/* <!-- Pseudo-element for the background pattern with opacity --> */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:90px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 pointer-events-none"></div>
          </div>
        </div>

        {/* <!-- Main Content Section --> */}
        <section className="relative text-gray-600 body-font z-10 py-10 mx-auto max-w-6xl">
          <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* <!-- Left Card (Image Display) --> */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full">
                <img
                  alt="ecommerce"
                  className="w-full h-64 object-contain object-center"
                  src="/demo.png"
                />
              </div>
              <div className="mx-auto max-w-[26rem]">
                <h2 className="font-poppins flex-wrap text-5xl xl:text-6xl lg:text-6xl font-extrabold text-gray-600">
                  Background <span className="text-purple-500">image</span> remove
                </h2>
                <p className="mt-2 text-base underline underline-offset-8 text-gray-500 font-light">
                  Remove image background with one click
                </p>
              </div>
            </div>
            {/* <!-- Right Card (Upload Section) --> */}
            <div className="w-full rounded-lg flex flex-col h-96 justify-center items-center md:ml-auto mt-10 md:mt-0 relative">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="mx-auto max-w-xs drop-shadow-sm">
                  <label
                    htmlFor="example5"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Upload Image
                  </label>
                  <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                    <div className="space-y-1 text-center">
                      <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </div>
                      <div className="text-gray-600">
                        <a
                          href="#"
                          className="font-medium text-primary-500 hover:text-primary-700"
                        >
                          Click to upload
                        </a>{" "}
                        or drag and drop
                      </div>
                      <p className="text-sm text-gray-500">
                        PNG or JPG (max. 800x400px)
                      </p>
                    </div>
                    <input id="example5" type="file" className="sr-only" />
                  </label>
                </div>
                <GridPattern
                  squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                    [10, 10],
                    [12, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                  ]}
                  className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                  )}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="">

      {/* how is work */}

      <section className="bg-slate-100 my-20 lg:my-40 p-8">
       <div className="mx-auto max-w-6xl">
       <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-600 lg:text-3xl dark:text-white">
              How api work <br/> from <span className="text-purple-500">remove.bg</span> to
              ericktek 
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-contain object-center w-full lg:w-[32rem] rounded-lg h-96"
                src="/api.png"
                alt="developer"
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                Understanding the Magic Behind the External API
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                "This API route is designed to allow users to upload an image, have its background removed using the remove.bg API, and then receive the processed image directly from the server without storing it in a database or file system. The returned image is base64-encoded, making it easy to display in a web application."
                </p>

                <h3 className="mt-6 text-lg font-medium text-purple-500">
                  Erick B. Lema
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Software developer
                </p>
              </div>
            </div>

         
          </div>
        </div>
       </div>
      </section>

      {/* Thanks giving */}
     <div className=" pb-20 lg:pb-28  opacity-50">
     <VelocityScroll
      text="Thank you for using our service! "
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
     </div>

{/* footer */}

<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <p className="font-montserrat text-purple-600"> © Copyright 2024. All Rights Reserved. </p>
 
      <RetroGrid />
    </div>

{/* <div className="relative flex h-full w-full  items-center justify-center overflow-hidden  bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl lg:text-8xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Thanks
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div> */}

</div>

 </>
  
  );
};

export default Home;
