"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Typed from "typed.js";
import Link from "next/link";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const skillsData = [
    { name: "Web Design", progress: 85, color: "#CA56F2" },
    { name: "UX/UI Design", progress: 80, color: "#9272D4" },
    { name: "Database", progress: 90, color: "#5185D4" },
    { name: "Ms office", progress: 80, color: "#9272D4" },
    { name: "Java,Spring", progress: 70, color: " #FF6464" },
    { name: "Version Control Git", progress: 80, color: "#9272D4" },
  ];

  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (bodyClassList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    const options = {
      strings: ["Web Developer,", "Frontend Developer,", "Backend Developer,"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(".typing", options);

    // Cleanup Typed.js instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div className="w-full h-full bg-gray-900 dark:bg-gray-200">
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg dark:bg-gray-200 sticky top-0">
          <div className="flex-1 flex justify-between items-center">
            <img className="sm:w-[10rem] xs:w-[7rem]" src="logo.png" alt="Logo" />
          </div>
          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden md:flex md:items-center md:w-auto" id="menu">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                <li>
                  <a className="md:p-4 py-3 px-0 block text-rose-500" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-3 px-0 block" href="#aboutme">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-3 px-0 block" href="#education">
                    Education
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-3 px-0 block" href="#skill">
                    Skill
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-3 px-0 block" href="#project">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button onClick={toggleDarkMode} className="ml-auto h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className={`fill-current ${isDarkMode ? "hidden" : "block"} text-violet-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg className={`fill-current ${isDarkMode ? "block" : "hidden"} text-yellow-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
        </header>

        <div className="h-screen w-full  mx-auto xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4">
          <div>
            <img className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto transition-transform duration-300 ease-in-out transform hover:scale-90 scale-75" src="/girl.png" alt="img of myself" />
          </div>
          <div className="w-full flex flex-col justify-center gap-4 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
            <h1 className="text-4xl font-semibold font-serif ">Hello, I'm Kosal Sreyka</h1>
            <h3 className="capitalize text-rose-400">
              I'm <span className="typing text-green-500 dark:text-green-700"></span>
            </h3>
            <p className="mt-4">
              I am currently seeking opportunities to gain professional experience in the tech industry. I have worked on various personal and academic projects using technologies such as Java, Spring, React.js, Next.js, Web Design, SQL, PHP, and MySQL. I am eager to apply my skills in a professional setting and contribute to meaningful projects.
            </p>
            <div className="sm:mt-4 xs:mt-2">
              <button className="px-6 py-2 bg-rose-500 text-white hover:bg-rose-600 rounded-md transition-all ease-in-out duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative mt-52  text-center">
        <p className="text-5xl inline-block relative group">
          About Me
          <span className="absolute left-0 h-1 bg-violet-700 w-0 group-hover:w-full transition-all duration-500 -bottom-2"></span>
        </p>
      </div>
      <section className="pt-10 overflow-hidden md:pt-0 text-black  sm:pt-16 2xl:pt-16" id="aboutme">
        <div className="px-4 mx-auto sm:px-6 shadow-lg lg:px-8 max-w-5xl rounded-xl bg-gray-50 ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
            <div>
              <h2 className="text-xl font-bold leading-tight  text-black sm:text-4xl lg:text-5xl">
                Hello 👋 I am <br className="block sm:hidden" /> Sreyka
              </h2>
              <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                I recently graduated from the Royal University of Phnom Penh with a bachelor’s degree in computer science. I am currently seeking opportunities to gain professional experience in the tech industry. I have worked on various personal and academic projects using technologies such as Java, Spring, React.js, Next.js, Web Design, SQL, PHP, and MySQL. I am eager to apply my skills in a professional setting and contribute to meaningful projects. I am excited to start my career and look forward to discussing this exciting opportunity.
              </p>
            </div>
            <div className="relative">
              <div className="mr-10">
                <img className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto transition-transform duration-300 ease-in-out transform hover:scale-75 scale-50" src="/mypic.jpg" alt="img of myself" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <div id="education" className="mt-24">
        <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
          <div data-theme="teal" className="mx-auto max-w-6xl">
            <h2 className="sr-only">Featured case study</h2>
            <section className="font-sans text-black">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full">
                        <img className="h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-90" src="/education.jpg" width="733" height="412" alt='""' typeof="foaf:img" />
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-3 bg-grey">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-4xl ml-4 font-bold">
                      Education
                    </h2>
                    <p className="mt-4 ml-4 text-xl">Bachelor of Computer Science</p>
                    <li className="mx-7">Royal University of Phnom Penh</li>
                    <li className="mx-7">2020-2024</li>
                    <p className="mt-4 ml-4 text-xl">Scholarship Basic Course at Korea Software HRD Center</p>
                    <li className="mx-7">( January - present 2024 )</li>
                    <p className="mt-4 ml-4 text-xl">Short Course of Web Design at Instinct Institute</p>
                    <li className="mx-7">( January - March 2023)</li>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skill">
        <div className="relative mt-24 mb-24 text-center">
          <p className="text-5xl inline-block relative group">
            My Skills
            <span className="absolute left-0 h-1 bg-violet-700 w-0 group-hover:w-full transition-all duration-500 -bottom-2"></span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:p-5 mt-0">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col space-y-4 transition-all duration-150 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-5 lg:flex-row lg:space-y-0 lg:space-x-6">
              <div className="flex-1">
                <div className="mb-7">
                  <div className="flex justify-between py-1">
                    <span className="text-lg text-gray-900 dark:text-[#A6A6A6] mb-3">
                      {skill.name}
                    </span>
                    <span className="text-base font-semibold text-gray-900 pr-5 dark:text-[#A6A6A6]">
                      {skill.progress}%
                    </span>
                  </div>
                  <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0" />
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke={skill.color}
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${skill.progress * 0.99}px, 100px`,
                        strokeDashoffset: "0px",
                        transition: "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                      }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="project" >
        <div className="relative mt-24  text-center">
          <p className="text-5xl inline-block relative group">
            My projects
            <span className="absolute left-0 h-1 bg-violet-700 w-0 group-hover:w-full transition-all duration-500 -bottom-2"></span>
          </p>
        </div>
        <section className="container mx-auto p-5 md:p-20 antialiased">
          <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer rounded-md transform duration-500 hover:-translate-y-1">
            <img className="max-h-[350px] object-cover md:w-96" src="/langNet.png" alt="" />
            <div className="">
              <div className="p-5 pb-20">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  Multi-Languages Translation
                </h1>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Developed a multi-language translation with feature including user register and login, role, permission, notifications, file upload, and download. The application enables users to upload the file by manually or upload in excel file and get it translated to different file such as JSON, XML and String make it easy for Project Leader and Developer to work on their project.
                </p>
              </div>
              <a className="ml-[350px] sm:mt-0 py-2 px-5 md:py-3 md:px-4 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md" href="https://langnet.info/" target="_blank">
                Visit website
              </a>
            </div>
          </article>
        </section>
        <section className="container mx-auto p-10 md:p-20 antialiased">
          <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer rounded-md transform duration-500 hover:-translate-y-1">
            <img className="max-h-[350px] object-center md:w-72" src="/vgrow.png" alt="" />
            <div className="">
              <div className="p-5 pb-28">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  Website Course study
                </h1>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  VGROW is a responsive webpage with dynamic content connect database phpAdmin with PHP that develop by my teams
                </p>
              </div>
              <a className="ml-[340px] sm:mt-0 py-16 px-5 md:py-3 md:px-4 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md" href="https://github.com/KosalSreyka/VGROWphp" target="_blank">
                Github link
              </a>
            </div>
          </article>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-8 bg-gray-900 pt-5">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px] mt-10">
              <h1 className="text-white font-extrabold mb-8 ml-5">
                 Contact us via
              </h1>
             
              <div className="mt-[18px] flex gap-4">
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sreyka.kosal?mibextid=ZbWKwL">
                  <img alt="facebook icon" width="36" height="36" src="/fb.svg" />
                </a>
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="https://t.me/Karatta22">
                  <img alt="telegram icon" width="36" height="36" src="/telegram.svg" />
                </a>
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sreykakosal?igsh=aHJkMTR0dzBvcHNi">
                  <img alt="instagram icon" width="36" height="36" src="/instagram.svg" />
                </a>
               
              </div>
            </div>
            <div className="md:w-[316px]">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <p className="font-Inter text-[12px] font-medium text-white">Phone Number</p>
                  <p className="font-Inter text-[14px] font-medium text-white"> +855 978766072</p>
                  
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <p className="font-Inter text-[12px] font-medium text-[#fff]">Email</p>
                  <a href="mailto:kosalsreyka3@gmail.com" className="font-Inter text-[14px] font-medium text-[#fff]">
                    kosalsreyka3@gmail.com
                  </a>
                  
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <p className="font-Inter text-[12px] font-medium text-white">Address</p>
                  <a href="#" className="font-Inter text-[14px] font-medium text-[#fff]">
                  Sangkat Stueng Mean Chey  , Khan Mean Chey Phnom Penh
                  </a>
                  
                </div>
              </div>
            </div>
            {/* <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div>
                <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
                <ul>
                  <li className="mt-[15px]">
                    <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">Home</a>
                  </li>
                  <li className="mt-[15px]">
                    <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">News</a>
                  </li>
                  <li className="mt-[15px]">
                    <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">Contact</a>
                  </li>
                  <li className="mt-[15px]">
                    <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">Plans and pricing</a>
                  </li>
                  <li className="mt-[15px]">
                    <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">Terms and conditions</a>
                  </li>
                  <li className="mt-[15px]">
                    <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <hr className="mt-[30px] text-white" />
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[10px] font-normal text-white md:text-[12px]">
              © Copyright 2024, All Rights Reserved by me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
