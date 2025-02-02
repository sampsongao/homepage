'use client';

import Image from "next/image";
import NavBar from "./components/NavBar";
import SectionHeader from "./components/SectionHeader";
import StylishButton, { ButtonType } from "./components/StylishButton";

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
          <div className="h-full w-screen relative">
            <div className="h-full">
              {/* <Image
                className="block dark:hidden absolute z-0 top-0 left-0 w-full h-full object-cover opacity-10 blur-md"
                src={"/Toronto_skyline_light.jpg"} alt="Toronto skyline" width={2000} height={2000}
              />
              <Image
                className="hidden dark:block absolute z-0 top-0 left-0 w-full h-full object-cover opacity-10 blur-md"
                src={"/Toronto_skyline_dark.jpg"} alt="Toronto skyline" width={2000} height={2000}
              /> */}

              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-16">
                  Welcome to my home page!
                </h1>

                <StylishButton
                  type={ButtonType.PRIMARY}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Checkout projects
                </StylishButton>
              </div>
            </div>
          </div>
        </section>

        <section className="my-32">
          <div className="container grid grid-cols-2 gap-y-12">
            <div className="col-span-2 md:w-2/3 mb-16">
              <SectionHeader
                id="projects"
                title="Explore my personal projects."
                description={`
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                `}
                tag="Projects"
              />
            </div>

            <div className="h-[300px] col-span-1 bg-gray-400">
              <Image className="w-full h-full object-cover" src="/project1.jpg" alt="project 1" width={300} height={300} />
            </div>
            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-zinc-100 dark:bg-zinc-900">
              <h1 className="text-2xl">
                What is Lorem Ipsum?
              </h1>
              <p className="text-sm">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-zinc-100 dark:bg-zinc-900">
              <h1 className="text-2xl">
                How to Lorem Ipsum?
              </h1>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="h-[300px] col-span-1 bg-gray-400">
              <Image className="w-full h-full object-cover" src="/project2.jpg" alt="project 1" width={300} height={300} />
            </div>

            <div className="h-[300px] col-span-1 bg-gray-300">
              <Image className="w-full h-full object-cover" src="/project3.jpg" alt="project 1" width={300} height={300} />
            </div>
            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-zinc-100 dark:bg-zinc-900">
              <h1 className="text-2xl">
                Lorem Ipsum
              </h1>
              <p className="text-sm">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
            </div>

            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-zinc-100 dark:bg-zinc-900">
              <h1 className="text-2xl">
                Lorem Ipsum
              </h1>
              <p className="text-sm">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              </p>
            </div>
            <div className="h-[300px] col-span-1 bg-gray-300">
              <Image className="w-full h-full object-cover" src="/project4.jpg" alt="project 1" width={300} height={300} />
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
          <div id="contact" className="w-full grid gap-4">
            <div className="col-span-2">
              <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                Shoot me a message!
              </h1>
            </div>
          </div>
        </section>
      </div >
    </div >
  );
}
