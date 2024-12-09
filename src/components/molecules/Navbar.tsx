"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useAnimate, motion, AnimationScope } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { logoutUser } from "@/app/actions/bridgeFunctions";
import Link from "next/link";
import { toast } from "react-toastify";
import { logoutUserRedux, selectUser, setUser } from "@/app/lib/features/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";

interface DataUserActive {
  email: string;
  user_id: string;
  auth: boolean;
}

export const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const navRef = useRef<HTMLDivElement | null>(null);
  let userActive = useSelector(selectUser)


  const handleMouseMove = ({ offsetX, offsetY, target }: MouseEvent) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="top-0 md:top-6 right-0 md:right-6 left-0 md:left-6 z-20 fixed border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur mx-auto md:rounded-2xl max-w-6xl overflow-hidden glass-nav"
    >
      <div className="flex justify-between items-center px-5 py-5 glass-nav">
        <Cursor hovered={hovered} scope={scope} />
        <Links />
        <Logo />
        <Buttons setMenuOpen={setMenuOpen} user_status={userActive} />
      </div>
      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({
  hovered,
  scope,
}: {
  hovered: boolean;
  scope: AnimationScope<any>;
}) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="z-0 absolute place-content-center grid bg-gradient-to-br from-40% from-indigo-600 to-indigo-400 rounded-full w-[50px] h-[50px] text-2xl origin-[0px_0px] pointer-events-none"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
  <span className="relative top-[50%] left-0 md:left-[50%] z-10 md:absolute font-black text-4xl text-white md:-translate-x-[50%] md:-translate-y-[50%] pointer-events-none mix-blend-overlay">
    E-Commerce
  </span>
);

const Links = () => (
  <div className="md:flex items-center gap-2 hidden">
    <GlassLink text="Products" />
    <GlassLink text="History" />
    <GlassLink text="Contact" />
  </div>
);

const GlassLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="relative px-4 py-2 rounded-lg transition-transform overflow-hidden group scale-100 hover:scale-105 active:scale-95"
    >
      <span className="group-hover:text-white relative z-10 text-white/90 transition-colors">
        {text}
      </span>
      <span className="z-0 absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

const TextLink = ({ text }: { text: string }) => {
  return (
    <a href="#" className="text-white/90 hover:text-white transition-colors">
      {text}
    </a>
  );
};

const Buttons = ({
  setMenuOpen,
  user_status,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  user_status: DataUserActive;
}) => (
  <div className="flex items-center gap-4">
    <div className="md:block hidden">
      {user_status.auth ? <LogoutButton /> : <SignUpButton />}
    </div>

    {user_status.auth ? (
      <p className="relative bg-gradient-to-br from-40% from-primary-light to-secondary-light px-4 py-2 rounded-lg font-medium text-white transition-transform overflow-hidden scale-100 hover:scale-105 active:scale-95">
        {user_status.email}
      </p>
    ) : (
      <button className="relativbg-gradient-to-br from-40% from-primary-light to-secondary-light px-4 py-2 rounded-lg font-medium text-white transition-transform overflow-hidden scale-100 hover:scale-105 active:scale-95">
        Try free
      </button>
    )}

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="block md:hidden ml-2 text-3xl text-white/90 hover:text-white transition-all scale-100 hover:scale-105 active:scale-95"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => {
  return (
    <button className="relative px-4 py-2 rounded-lg transition-transform overflow-hidden group scale-100 hover:scale-105 active:scale-95">
      <span className="group-hover:text-white relative z-10 text-white/90 transition-colors">
        Sign in
      </span>
      <span className="z-0 absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};
const SignUpButton = () => {
  return (
    <Link href="/signup">
      <button className="relative px-4 py-2 rounded-lg transition-transform overflow-hidden group scale-100 hover:scale-105 active:scale-95">
        <span className="group-hover:text-white relative z-10 text-white/90 transition-colors">
          Sign Up
        </span>
        <span className="z-0 absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </Link>
  );
};

const LogoutButton = () => {
  const dispatch = useDispatch()
  const handleOut = async () => {
    try {
      const response = await logoutUser();

      if (response) {
        dispatch(logoutUserRedux());
        toast.success("Logout successfully");
      } else {
        toast.error("Error in logout");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred.");
    }
  };

  return (
    <button
      className="relative px-4 py-2 rounded-lg transition-transform overflow-hidden group scale-100 hover:scale-105 active:scale-95"
      onClick={handleOut}
    >
      <span className="group-hover:text-white relative z-10 text-white/90 transition-colors">
        Logout
      </span>
      <span className="z-0 absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block md:hidden overflow-hidden"
    >
      <div ref={ref} className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Products" />
          <TextLink text="History" />
          <TextLink text="Contact" />
        </div>
        <SignInButton />
      </div>
    </motion.div>
  );
};
