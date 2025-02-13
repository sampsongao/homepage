'use client';

import Image from "next/image";
import NavBar from "./components/NavBar";
import SectionHeader from "./components/SectionHeader";
import StylishButton, { ButtonType } from "./components/StylishButton";
import Link from "next/link";
import PostPreviewTile from "./components/PostPreviewTile";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-[100vh]" style={{
      overflowX: "hidden",
      overflowY: "scroll",
      perspective: "400px",
      WebkitPerspective: "400px",
    }}>
      <section
        className="relative h-[100vh] min-h-[600px]"
        style={{
          zIndex: -1,
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/hero-background.jpeg')] bg-center bg-cover opacity-30"
          style={{
            WebkitTransform: "translateZ(-400px) scale(2)",
            transform: "translateZ(-400px) scale(2)",
          }}
        />
      </section>

      <section className="absolute top-0 bottom-0 left-0 right-0 h-[100vh] min-h-[600px]">
        <NavBar />

        <div className="h-full w-screen">
          <div className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
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

      <div className="bg-white dark:bg-black" style={{
        backgroundImage: `
          radial-gradient(circle at 60% 200px, rgb(76 94 255 / 30%) 0px, rgb(0 0 0 / 0%) 600px),
          radial-gradient(circle at 80% 47%, rgb(76 94 255 / 15%) 0px, rgb(0 0 0 / 0%) 500px),
          radial-gradient(circle at 10% 60%, rgb(76 94 255 / 15%) 0px, rgb(0 0 0 / 0%) 900px),
          radial-gradient(circle at 63% 78%, rgb(76 94 255 / 15%) 0px, rgb(0 0 0 / 0%) 700px),
          radial-gradient(circle at 40% 110%, rgb(76 94 255 / 20%) 0px, rgb(0 0 0 / 0%) 1000px)
        `,
      }}>

        <section className="py-16">
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

            <div className="h-[300px] col-span-1 shadow-xl">
              <Image className="w-full h-full object-cover" src="/project1.jpg" alt="project 1" width={300} height={300} />
            </div>
            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-white shadow-xl dark:bg-zinc-900">
              <h1 className="text-2xl">
                What is Lorem Ipsum?
              </h1>
              <p className="text-sm">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-white shadow-xl dark:bg-zinc-900">
              <h1 className="text-2xl">
                {"How to Lorem Ipsum?"}
              </h1>
              <p className="text-sm">
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              </p>
            </div>
            <div className="h-[300px] col-span-1 shadow-xl">
              <Image className="w-full h-full object-cover" src="/project2.jpg" alt="project 1" width={300} height={300} />
            </div>

            <div className="h-[300px] col-span-1 shadow-xl">
              <Image className="w-full h-full object-cover" src="/project3.jpg" alt="project 1" width={300} height={300} />
            </div>
            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-white shadow-xl dark:bg-zinc-900">
              <h1 className="text-2xl">
                {"Lorem Ipsum"}
              </h1>
              <p className="text-sm">
                {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
              </p>
            </div>

            <div className="h-[300px] col-span-1 flex flex-col justify-center p-4 text-gray-700 dark:text-gray-300 bg-white shadow-xl dark:bg-zinc-900">
              <h1 className="text-2xl">
                {"Lorem Ipsum"}
              </h1>
              <p className="text-sm">
                {"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}
              </p>
            </div>
            <div className="h-[300px] col-span-1 shadow-xl">
              <Image className="w-full h-full object-cover" src="/project4.jpg" alt="project 1" width={300} height={300} />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-1 md:col-span-2 md:w-2/3 lg:col-span-3 mb-16">
              <SectionHeader
                id="posts"
                title="Read my posts."
                description={`
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                `}
                tag="Posts"
              />
            </div>

            <PostPreviewTile
              title="Lorem Ipsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              previewImageUrl="/project1.jpg"
            />

            <PostPreviewTile
              title="Lorem Ipsum"
              description="A short description for the post."
              previewImageUrl="/project2.jpg"
            />

            <PostPreviewTile
              title="Lorem Ipsum"
              description={`"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."`}
              previewImageUrl="/project3.jpg"
            />

            <PostPreviewTile
              title="Lorem Ipsum"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
              previewImageUrl="/project4.jpg"
            />

            <PostPreviewTile
              title="Lorem Ipsum"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              previewImageUrl="/Toronto_skyline_dark.jpg"
            />

            <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 my-16">
              <div className="flex flex-row items-center justify-center">
                <StylishButton
                  type={ButtonType.TERTIARY}
                  href='/posts'
                  rounded
                >
                  See all posts
                  <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z" /></svg>
                </StylishButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="dark bg-black">
        <div className="container py-16">
          <div id="contact" className="h-full w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <SectionHeader
                id="contact"
                title="Contact me"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                tag="Contact"
              />

              <div className="flex flex-row align-center *:me-2">
                {/* Linkedin icon */}
                <Link href="https://linkedin.com">
                  <svg
                    className="fill-gray-400 dark:fill-gray-500 hover:fill-gray-800 dark:hover:fill-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50" width="32px" height="32px">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
                </Link>

                {/* Github icon */}
                <Link href="https://github.com">
                  <svg
                    className="fill-gray-400 dark:fill-gray-500 hover:fill-gray-800 dark:hover:fill-gray-300"
                    height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true"
                  >
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </Link>

                {/* Instagram icon */}
                <Link href="https://instagram.com">
                  <svg
                    className="fill-gray-400 dark:fill-gray-500 hover:fill-gray-800 dark:hover:fill-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50" width="32px" height="32px"
                  >
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="col-span-1 h-full py-4">
              <form
                id="contact_form"
                className="grid grid-cols-2 gap-x-4 gap-y-4 py-12"
                onSubmit={(e) => { e.preventDefault(); }}
              >
                <label className="col-span-2 text-lg font-bold text-gray-800 dark:text-gray-200" htmlFor="contact_form">
                  Please leave a message!
                </label>
                <div className="col-span-1">
                  {/* <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="first_name_input">
                      First Name *
                    </label> */}
                  <input
                    id="first_name_input"
                    type="string"
                    placeholder="First name"
                    className="w-full bg-transparent text-gray-800 dark:text-gray-200 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>
                <div className="col-span-1">
                  {/* <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="last_name_input">
                      Last Name *
                    </label> */}
                  <input
                    id="last_name_input"
                    type="string"
                    placeholder="Last name"
                    className="w-full bg-transparent text-gray-800 dark:text-gray-200 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>

                <div className="col-span-2">
                  {/* <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="email_input">
                      Email *
                    </label> */}
                  <input
                    id="email_input"
                    type="string"
                    placeholder="Email"
                    className="w-full bg-transparent text-gray-800 dark:text-gray-200 px-2 border border-solid p-1 border-zinc-400 rounded-md"
                  />
                </div>

                <div className="col-span-2">
                  {/* <label className="text-sm font-semibold text-gray-800 dark:text-gray-200" htmlFor="message_input">
                      Message
                    </label> */}
                  <textarea
                    id="message_input"
                    placeholder="Love to hear your message!"
                    className="w-full min-h-[100px] bg-transparent text-gray-800 dark:text-gray-200 px-2 border border-solid p-1 border-zinc-400 rounded-md"
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
        </div>

        <Footer>
          © {new Date().getFullYear()} Sampson Gao. All rights reserved.
        </Footer>
      </section>
    </div>
  );
}
