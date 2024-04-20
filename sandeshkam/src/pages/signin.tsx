import { useEffect, useState } from "react";
import { auth, googleProvider } from "../components/firebase";
import { signInWithPopup, User } from "firebase/auth";

import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

const Signin = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/home"; // Redirect to the homepage
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Sign in with google.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            To experience the NEWZ.
          </div>
          <button
            onClick={signIn}
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          >
            Enter Now
          </button>
        </motion.div>
      </AuroraBackground>
    </center>
  );
};

export default Signin;
