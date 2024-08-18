"use client"
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { useRouter } from "next/navigation";


const Hero = () => {
const router = useRouter();

  const handleClick = () => {
    router.push('/removebg');
  }

  return (
    <div>
         {/* body content */}
       

        {/* <!-- Main Content Section --> */}
        <section className="relative text-gray-600 body-font z-10 py-10 mx-auto max-w-6xl">
          <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* <!-- Left Card (Image Display) --> */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex justify-center items-center">
                <img
                  alt="ecommerce"
                  className="w-full h-64 object-contain object-center mx-auto "
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
                    <input accept="image/*" type="file" className="sr-only" onClick={handleClick} />
                    
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
  )
}

export default Hero