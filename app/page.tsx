'use client';

import Image from "next/image";
import NavBar from "./components/NavBar";
import SectionHeader from "./components/SectionHeader";
import StylishButton, { ButtonType } from "./components/StylishButton";
import Link from "next/link";

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

        <section className="container py-16 mt-20">
          <div id="contact" className="h-full w-full grid md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <SectionHeader
                id="contact"
                title="Contact me"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                tag="Contact"
              />

              <div className="flex flex-row align-center">
                {/* Linkedin icon */}
                <Link href="https://linkedin.com">
                  <svg className="fill-gray-400 dark:fill-gray-500 hover:fill-gray-800 dark:hover:fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg>
                </Link>

                {/* Instagram icon */}
                <Link href="https://instagram.com">
                  <svg className="fill-gray-400 dark:fill-gray-500 hover:fill-gray-800 dark:hover:fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" /></svg>
                </Link>

                {/* Github icon */}
                {/* <Link href="https://github.com">
                  <svg className="fill-gray-400 dark:fill-gray-500 hover:fill-gray-800 dark:hover:fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg>
                </Link> */}
              </div>
            </div>

            <div className="col-span-1 h-full p-4">
              <form
                id="contact_form"
                className="grid grid-cols-2 gap-x-4 gap-y-4 py-12"
                onSubmit={(e) => { e.preventDefault(); }}
              >
                <label className="col-span-2 text-lg font-bold text-gray-800 dark:text-gray-200" htmlFor="contact_form">
                  Please leave a message!
                </label>
                <div className="col-span-1">
                  <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="first_name_input">
                    First Name *
                  </label>
                  <input
                    id="first_name_input"
                    type="string"
                    placeholder="First name"
                    className="w-full bg-transparent mt-2 text-gray-800 dark:text-zinc-400 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>
                <div className="col-span-1">
                  <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="last_name_input">
                    Last Name *
                  </label>
                  <input
                    id="last_name_input"
                    type="string"
                    placeholder="Last Name"
                    className="w-full bg-transparent mt-2 text-gray-800 dark:text-zinc-400 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="email_input">
                    Email *
                  </label>
                  <br />
                  <input
                    id="email_input"
                    type="string"
                    placeholder="Email"
                    className="w-full bg-transparent mt-2 text-gray-800 dark:text-zinc-400 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="message_input">
                    Message
                  </label>
                  <br />
                  <textarea
                    id="message_input"
                    placeholder="Love to hear that!"
                    className="w-full min-h-[100px] bg-transparent mt-2 text-gray-800 dark:text-zinc-400 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>

                <div className="col-span-2 text-right">
                  <StylishButton
                    type={ButtonType.PRIMARY}
                    rounded
                    // TODO: implement submit function
                    onClick={() => { console.log("submitted") }}
                  >
                    Submit
                  </StylishButton>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div >
    </div >
  );
}
