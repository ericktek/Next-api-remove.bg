"use client";
import { useState } from "react";
import axios from "axios";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Removebg = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState();
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
      const response = await axios.post("/api/removeBg", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setResultImage(response.data.imageUrl);
        setError("");
      } else {
        setError(
          `Error: server returned ${response.status} status code. Please try again.`
        );
        console.error(response.data);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section className="relative text-gray-600 body-font z-10 py-10 mx-auto max-w-6xl">
      <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Card (Image Display) */}
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-full">
            {resultImage && (
              <div>
                <Image
                width={500}
                height={500}
                  src={resultImage}
                  alt="No background "
                  className="flex justify-center items-center text-center mx-auto "
                />
              </div>
            )}
          </div>
          <div className="mx-auto max-w-[26rem]">
            {/* Conditionally Render Download Button */}
            {resultImage && (
              <a href={resultImage} download="processed-image.png">

              <button className="download-button bg-blue-500 hover:bg-blue-400 text-white px-10 py-3 rounded-lg font-bold tracking-widest w-full">
                <div className="flex justify-center items-center relative">
                  <div className="svg-container">
                    {/* Download Icon */}
                    <svg
                      className="download-icon"
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="download-arrow"
                        d="M13 9L9 13M9 13L5 9M9 13V1"
                        stroke="#F2F2F2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                        stroke="#F2F2F2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="download-loader text-white hidden"></div>
                  </div>
                  <div className="button-copy pl-2 leading-none uppercase">
                    Download
                  </div>
                </div>
              </button>
              </a>
            )}
            <p className="text-center my-2">
              Some magic is going to happen soon...!
            </p>
          </div>
        </div>
        {/* Right Card (Upload Section) */}
        <div className="w-full rounded-lg flex flex-col h-96 justify-center items-center md:ml-auto mt-10 md:mt-0 relative">
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <div className="mx-auto max-w-xs drop-shadow-sm z-50 justify-center items-center flex flex-col">
              {error && (
                <div className="text-red-500 mt-4 text-center py-4 flex justify-center items-center">
                  <div class="py-1">
                    <svg
                      class="fill-current h-6 w-6 text-red-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>

                  <p>{error}</p>
                </div>
              )}
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
                <input
                  accept="image/*"
                  type="file"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
              </label>

              <button
                onClick={removeBackground}
                className="text-slate-700 text-xl border border-purple-500 hover:text-white rounded p-4 px-8 z-50 text-center flex justify-center items-center mt-8 hover:bg-purple-400 font-poppins font-bold tracking-widest "
              >
                Remove Background
              </button>
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
  );
};

export default Removebg;
