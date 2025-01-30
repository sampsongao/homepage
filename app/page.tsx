'use client';

import NavBar from "./components/NavBar";

export default function Home() {
  return (
      <div className="bg-white dark:bg-black">
        <div className="" style={{
          backgroundImage: `
            radial-gradient(circle at 60% 200px, rgb(76 94 255 / 30%) 0px, rgb(0 0 0 / 0%) 600px),
            radial-gradient(circle at 80% 50%, rgb(76 94 255 / 25%) 0px, rgb(0 0 0 / 0%) 400px),
            radial-gradient(circle at 40% 110%, rgb(76 94 255 / 50%) 0px, rgb(0 0 0 / 0%) 1000px)
          `,
        }}>

          <NavBar />

          <section className="h-[80vh]">
            <div className="h-full w-screen">
              <div className="h-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                  Welcome to my home page!
                </h1>
                {/* section with floating texts */}
              </div>
            </div>
          </section>

          <section className="h-[80vh]">
            <div className="h-full w-screen">
              <div className="h-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                  Explore my personal projects.
                </h1>
                {/* section with two columns. */}
              </div>
            </div>
          </section>

          <section className="h-[80vh]">
            <div className="h-full w-screen">
              <div className="h-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                  Read my posts.
                </h1>
              </div>
            </div>
          </section>

          <section className="h-[80vh] container py-16">
            <div className="w-full grid gap-4">
              <div className="col-span-2">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                  Shoot me a message!
                </h1>
              </div>

              <div className="h-[300px] col-span-1 bg-gray-300">
                left
              </div>

              <div className="h-[300px] col-span-1 bg-gray-400">
                right
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
