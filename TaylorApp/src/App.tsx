import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";

function App() {
  const { user } = useUser();
  return (
    <>
      <body className="dark:bg-black bg-[#e3e2e2]">
        <SignedOut>
          <nav id="CTA">
            <div className="text-4xl text-black dark:text-white uppercase font-[SecondFont]">
              <p className="text-7xl font-[SoxietyFont]">
                So<span className="text-pink-500 dark:text-[#ffd2ea]">xi</span>
                ety
              </p>
              <p>Technology Solutions</p>
            </div>

            <div>
              <h1 className="text-4xl mt-5 text-white font-bold font-[MainFont] uppercase">
                <span className="text-pink-500 dark:text-[#ffd2ea]">
                  TaylorApp!!
                </span>
              </h1>
              <h2 className="text-4xl text-black dark:text-white font-bold font-[SecondFont] uppercase">
                Where All Creativity is{" "}
                <span className="text-pink-500 dark:text-[#ffd2ea]">Loved</span>
              </h2>
            </div>
            <div className="mt-5 -mb-2 font-[MainFont] flex gap-5 justify-center">
              <SignUpButton>
                <button className="hover:bg-white! hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase text-gray-200 dark:text-black hover:underline">
                  Sign Up
                </button>
              </SignUpButton>

              <SignInButton>
                <button className="hover:bg-white! hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase text-gray-200 dark:text-black hover:underline">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </nav>
        </SignedOut>
        <SignedIn>
          <div className="ml-auto mb-10 font-[MainFont]">
            <SignOutButton>
              <button className="hover:bg-white! text-gray-200 hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase dark:text-white hover:underline">
                sign out
              </button>
            </SignOutButton>
          </div>
          <h1 className="text-7xl text-black dark:text-white font-[SecondFont] uppercase">
            HEY {user?.username}
          </h1>
        </SignedIn>
      </body>
    </>
  );
}

export default App;
