import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  useUser,
  UserButton,
} from "@clerk/clerk-react";
import AppLogo from "./assets/TaylorApp-Logo.png";
import InfoImageOne from "./assets/RandomImage2.png";
import InfoImageTwo from "./assets/Dog.png";
import Cat from "./assets/Cat.png";
import Bunny from "./assets/Bunny.png";

function App() {
  const { user } = useUser();
  return (
    <body className="dark:bg-black bg-[#e3e2e2]">
      <div
        id="mobile-notice"
        className="md:hidden mb-10 uppercase font-[MainFont] p-6 bg-black dark:bg-white"
      >
        <p className="text-2xl text-white dark:text-black">
          For the best mobile experience download the app!!
        </p>
      </div>
      <div className="flex container max-w-full shadow-inner rounded-lg shadow-black dark:shadow-[#ffd2ea] collapse md:visible">
        <div className="ml-5 w-1/2">
          <div>
            <a className="" href="https://maydayz.com">
              <img
                className="mt-10 w-md"
                src={AppLogo}
              ></img>
            </a>
          </div>
        </div>
        <div className="flex ml-auto mt-20 p-3 gap-5 mr-10 collapse md:visible">
          <div>
            <button className="font-[MainFont]! hover:bg-white! hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase text-gray-200 dark:text-black hover:underline">
              <span className="lowercase">o</span> About Us{" "}
              <span className="lowercase">o</span>
            </button>
          </div>
          <div>
            <button className="font-[MainFont]! hover:bg-white! hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase text-gray-200 dark:text-black hover:underline">
              <span className="lowercase">o</span> Learn!{" "}
              <span className="lowercase">o</span>
            </button>
          </div>
          <div>
            <button className="font-[MainFont]! hover:bg-white! hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase text-gray-200 dark:text-black hover:underline">
              <span className="lowercase">o</span> Support!{" "}
              <span className="lowercase">o</span>
            </button>
          </div>
          <div>
            <button className="font-[MainFont]! hover:bg-white! hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase text-gray-200 dark:text-black hover:underline">
              <span className="lowercase">o</span> Questions?{" "}
              <span className="lowercase">o</span>
            </button>
          </div>
        </div>
      </div>
      <SignedOut>
        <nav className="mb-20" id="CTA">
          <div className="text-4xl mt-0 md:mt-15 text-black dark:text-white uppercase font-[SecondFont]">
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
          <div className="mt-5 mb-15 font-[MainFont] flex gap-5 justify-center">
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
        <main id=" info-page">
          <div className="mt-15 shadow-inner md:rounded-full   shadow-black dark:shadow-[#ffd2ea] bg-white dark:bg-transparent p-10">
            <div className="text-center text-black dark:text-white">
              <h3 className="font-[MainFont] mt-5 text-5xl uppercase">
                YOU'RE SUCH A MESS
              </h3>
              <div className="flex">
                <div className="ml-10 w-1/1 md:w-1/2">
                  <p className="mt-5 font-[SecondFont] text-3xl text-justify">
                    Ok that was mean, but don't worry because that's what this
                    is for. We understand that not everyone have this magic
                    called memories. And we especially understand more than most
                    that this stuff is hard!! TaylorApp focuses on YOU! and
                    Tailoring your space to the best person out there:<br></br>
                  </p>
                  <p className="ml-auto text-7xl font-[SecondFont] text-pink-500 dark:text-[#ffd2ea]">
                    YOU!!
                  </p>
                </div>
                <div className="flex ml-20 w-1/1 md:w-1/2">
                  <img
                    className="opacity-0 md:opacity-100 md:w-3xl lg:w-xl"
                    src={InfoImageOne}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <h4 className="bg-[#ffd2ea] dark:bg-transparent p-4 rounded-full w-fit ml-auto mr-auto text-center font-[MainFont] uppercase text-5xl mt-15 text-black dark:text-white">
              <span className="lowercase">o</span> Choose Your Pet{" "}
              <span className="lowercase">o</span>
            </h4>
          </div>
          <div className="flex justify-center gap-15 mb-10">
            <div className="collapse-title ml-10 hover:grayscale-100 cursor-pointer hover:bg-[#ffd2ea] rounded-[50%] mt-15 p-10 bg-white dark:bg-[#e3e2e2] w-1/4 shadow-inner shadow-black">
              <img src={InfoImageTwo} alt="Doggy!" title="DOGGY!!"></img>
              <div className="text-black font-[SecondFont]">Doggy</div>
            </div>
            <div className="ml-10 hover:grayscale-100 cursor-pointer hover:bg-[#ffd2ea] rounded-[50%] mt-15 p-10 bg-white dark:bg-[#e3e2e2] w-1/4 shadow-inner shadow-black">
              <img src={Cat} alt="Kitty!" title="KITTY!!"></img>
              <div className="text-black font-[SecondFont]">Kitty</div>
            </div>
            <div className="ml-10 hover:grayscale-100 cursor-pointer hover:bg-[#ffd2ea] rounded-[50%] mt-15 p-10 bg-white dark:bg-[#e3e2e2] w-1/4 shadow-inner shadow-black">
              <img src={Bunny} alt="Bunny!" title="BUNNY!!"></img>
              <div className="text-black font-[SecondFont]">Bunny</div>
            </div>
          </div>
        </main>
      </SignedOut>
      <SignedIn>
        <div className="mb-10 font-[MainFont] flex justify-center gap-5">
          <UserButton></UserButton>
          <SignOutButton>
            <button className="hover:bg-white! text-gray-200 hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase dark:text-black hover:underline">
              sign out
            </button>
          </SignOutButton>
        </div>
        <h1 className="text-7xl text-black dark:text-white font-[SecondFont] uppercase">
          HEY {user?.username}
        </h1>
      </SignedIn>
    </body>
  );
}

export default App;
