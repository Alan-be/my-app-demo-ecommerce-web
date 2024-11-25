"use client"
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { useState } from "react";
import { handleSubmit } from "@/app/signup/actions";
import { motion } from "framer-motion";


export const SlideInAuth = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px] bg-background min-h-screen">
      <Logo />
      <Form />
      <SupplementalContent />
    </section>
  );
};

const Form = () => {

    const [error, setError] = useState<string | null>(null);

    return (
        <motion.div
          initial="initial"
          whileInView="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          viewport={{ once: true }}
          className="flex justify-center items-center bg-background md:py-20 pt-20 pb-4"
        >
          <div className="bg-foreground mx-auto my-auto px-4 p-8 rounded-lg max-w-lg">
            <motion.h1
              variants={primaryVariants}
              className="mb-2 font-semibold text-4xl text-center"
            >
              Create your account
            </motion.h1>
            <motion.p variants={primaryVariants} className="mb-8 text-center">
              Try it free for 30 days, no CC required
            </motion.p>
    
            <form action={handleSubmit} className="w-full">
              <motion.div variants={primaryVariants} className="mb-2 w-full">
                <label
                  htmlFor="email-input"
                  className="inline-block mb-1 font-medium text-sm"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  className="border-[1px] border-slate-300 px-2.5 py-1.5 rounded w-full focus:outline-indigo-600"
                  required
                />
              </motion.div>
    
              <motion.div variants={primaryVariants} className="mb-2 w-full">
                <label
                  htmlFor="password-input"
                  className="inline-block mb-1 font-medium text-sm"
                >
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  id="password-input"
                  type="password"
                  placeholder="Enter your password"
                  className="border-[1px] border-slate-300 px-2.5 py-1.5 rounded w-full focus:outline-indigo-600"
                  required
                />
              </motion.div>
    
              <motion.div variants={primaryVariants} className="mb-4 w-full">
                <label
                  htmlFor="rt-password-input"
                  className="inline-block mb-1 font-medium text-sm"
                >
                  Re-type Password<span className="text-red-600">*</span>
                </label>
                <input
                  id="rt-password-input"
                  type="password"
                  placeholder="Re-type your password"
                  className="border-[1px] border-slate-300 px-2.5 py-1.5 rounded w-full focus:outline-indigo-600"
                  required
                />
              </motion.div>
    
              <motion.div
                variants={primaryVariants}
                className="flex items-start gap-1.5 mb-4 w-full"
              >
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className="w-4 h-4 accent-indigo-600"
                  required
                />
                <label htmlFor="terms-checkbox" className="text-xs">
                  By signing up, I agree to the terms and conditions, privacy
                  policy, and cookie policy
                </label>
              </motion.div>
    
              <motion.button
                variants={primaryVariants}
                whileTap={{
                  scale: 0.985,
                }}
                type="submit"
                className="bg-primary-dark hover:bg-secondary-dark mb-1.5 px-4 py-2 rounded w-full font-medium text-center text-white transition-colors 0"
              >
                Sign up
              </motion.button>
              <motion.p variants={primaryVariants} className="text-xs">
                Already have an account?{" "}
                <a className="text-indigo-600 underline" href="#">
                  Sign in
                </a>
              </motion.p>
            </form>
          </div>
        </motion.div>
      );
  };

  const SupplementalContent = () => {
    return (
      <div className="top-4 sticky bg-slate-950 m-4 rounded-3xl rounded-tl-[4rem] h-80 md:h-[calc(100vh_-_2rem)] overflow-hidden group">
        <img
          alt="An example image"
          src="/imgs/abstract/18.jpg"
          className="group-hover:scale-105 bg-white group-hover:opacity-50 w-full h-full transition-all duration-500 object-cover"
        />
  
        <div className="top-4 right-2 z-10 absolute">
          <FiArrowUpRight className="group-hover:rotate-0 opacity-0 group-hover:opacity-100 text-6xl text-indigo-200 transition-all duration-500 rotate-45" />
        </div>
  
        <motion.div
          initial="initial"
          whileInView="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
        >
          <motion.h2
            className="mb-2 font-semibold text-3xl text-white lg:text-4xl leading-[1.25]"
            variants={primaryVariants}
          >
            Connecting Designers
            <br />
            with Opportunities
          </motion.h2>
          <motion.p
            variants={primaryVariants}
            className="mb-6 max-w-md text-slate-300 text-sm"
          >
            Bloop is the home of makers, making amazing things, and getting paid.
            Find your dream job with us.
          </motion.p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <motion.img
                variants={avatarVariants}
                className="border-[1px] border-slate-100 shadow-inner rounded-full w-8 h-8 object-cover"
                alt="A placeholder testimonial image"
                src="/imgs/head-shots/1.jpg"
              />
              <motion.img
                variants={avatarVariants}
                className="border-[1px] border-slate-100 shadow-inner -ml-4 rounded-full w-8 h-8 object-cover"
                alt="A placeholder testimonial image"
                src="/imgs/head-shots/2.jpg"
              />
              <motion.img
                variants={avatarVariants}
                className="border-[1px] border-slate-100 shadow-inner -ml-4 rounded-full w-8 h-8 object-cover"
                alt="A placeholder testimonial image"
                src="/imgs/head-shots/3.jpg"
              />
              <motion.img
                variants={avatarVariants}
                className="border-[1px] border-slate-100 shadow-inner -ml-4 rounded-full w-8 h-8 object-cover"
                alt="A placeholder testimonial image"
                src="/imgs/head-shots/4.jpg"
              />
              <motion.img
                variants={avatarVariants}
                className="border-[1px] border-slate-100 shadow-inner -ml-4 rounded-full w-8 h-8 object-cover"
                alt="A placeholder testimonial image"
                src="/imgs/head-shots/6.jpg"
              />
            </div>
            <div>
              <motion.div variants={primaryVariants} className="flex gap-0.5">
                <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
                <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
                <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
                <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
                <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
                <span className="ml-2 text-sm text-white">5.0</span>
              </motion.div>
              <motion.p
                variants={primaryVariants}
                className="text-slate-300 text-xs"
              >
                from over 100,000 reviews
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };
  
  const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="top-4 left-[50%] md:left-4 absolute -translate-x-[50%] md:-translate-x-0 fill-slate-950"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    );
  };
  
  const primaryVariants = {
    initial: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  
  const avatarVariants = {
    initial: {
      x: 10,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };