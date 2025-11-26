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
// import { DocumentEditor } from "@onlyoffice/document-editor-react";
import AppLogo from "./assets/TaylorApp-Logo.png";
import InfoImageOne from "./assets/RandomImage2.png";
import InfoImageTwo from "./assets/Dog.png";
import Cat from "./assets/Cat.png";
import Bunny from "./assets/Bunny.png";
import Calendar from "./assets/TaylorApp-Calendar.png";


function App() {
  const { user } = useUser();
  // const onEditorReady = (_event: any) => {
  //   console.log("Document is loaded");
  //   const documentEditor = window.DocEditor.instances["docxEditor"];
  //   if (documentEditor) {
  //     documentEditor.showMessage(
  //       `Welcome to ONLYOFFICE Editor, ${user?.username}!`
  //     );
  //     console.log(`ONLYOFFICE Editor instance ready for ${user?.username}`);
  //   } else {
  //     console.error("ONLYOFFICE Editor instance not found.");
  //   }
  // };
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
      {/**
       * Top bar for navigation tabs
       */}
      <div
        id="Top-Bar"
        className="hidden md:flex container max-w-full shadow-inner rounded-lg shadow-black  dark:shadow-[#ffd2ea] collapse md:visible"
      >
        <div id="Logo" className="ml-5 w-1/5 ">
          <div>
            <a className="" href="https://maydayz.com">
              <img className="mt-5 w-lg" src={AppLogo}></img>
            </a>
          </div>
        </div>
        <SignedOut>
          <div className="flex ml-auto mt-15 p-3 gap-5 mr-10 collapse md:visible">
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
        </SignedOut>
        <SignedIn>
          <div className="ml-auto mt-10 p-3 gap-5 mr-10 collapse md:visible">
            <div className="mt-10 mb-10 font-[MainFont] flex justify-center gap-5">
              <SignOutButton>
                <button className="hover:bg-white! text-gray-200 hover:text-gray-400! ring-inset! ring-2! ring-black! rounded-md! bg-pink-500! dark:bg-[#ffd2ea]! border-4! border-white! shadow-sm! shadow-black uppercase dark:text-black hover:underline">
                  sign out
                </button>
              </SignOutButton>
              <UserButton></UserButton>
            </div>
          </div>
        </SignedIn>
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
              <div className="md:flex">
                <div className="w-1/1 md:w-1/2">
                  <p className="mt-15 mr-auto font-[SecondFont] text-3xl text-justify">
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
                <div className="flex ml-auto md:w-1/2">
                  <img
                    className="hidden md:flex md:w-3xl lg:w-xl"
                    src={InfoImageOne}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" ml-auto mr-auto">
              <div className=" flex p-4">
                <h4 className="bg-[#ffd2ea] dark:bg-transparent p-4 rounded-full w-fit ml-auto mr-auto text-center font-[MainFont] uppercase text-5xl mt-15 text-black dark:text-white">
                  <span className="lowercase">o</span> Choose Your Pet{" "}
                  <span className="lowercase">o</span>
                </h4>
              </div>
              <div className="flex justify-center gap-3 md:gap-15 mb-10">
                <div className="md:ml-10 hover:grayscale-100 cursor-pointer hover:bg-[#ffd2ea] rounded-[50%] mt-15 p-10 bg-white dark:bg-[#e3e2e2] md:w-1/4 shadow-inner shadow-black">
                  <img src={InfoImageTwo} alt="Doggy!" title="DOGGY!!"></img>
                  <div className="text-black font-[SecondFont]">Doggy</div>
                </div>
                <div className="md:ml-10 hover:grayscale-100 cursor-pointer hover:bg-[#ffd2ea] rounded-[50%] mt-15 p-10 bg-white dark:bg-[#e3e2e2] md:w-1/4 shadow-inner shadow-black">
                  <img src={Cat} alt="Kitty!" title="KITTY!!"></img>
                  <div className="text-black font-[SecondFont]">Kitty</div>
                </div>
                <div className="md:ml-10 hover:grayscale-100 cursor-pointer hover:bg-[#ffd2ea] rounded-[50%] mt-15 p-10 bg-white dark:bg-[#e3e2e2] md:w-1/4 shadow-inner shadow-black">
                  <img src={Bunny} alt="Bunny!" title="BUNNY!!"></img>
                  <div className="text-black font-[SecondFont]">Bunny</div>
                </div>
              </div>
              <div>
                <h4 className=" p-4 rounded-full w-fit ml-auto mr-auto text-center font-[MainFont] uppercase text-5xl mt-15 text-black dark:text-white">
                  <span className="lowercase">o</span> And Many More!!
                  <span className="lowercase">o</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-10 shadow-inner md:rounded-full   shadow-black dark:shadow-[#ffd2ea] bg-white dark:bg-transparent p-10">
            <div className="text-center text-black dark:text-white">
              <h3 className="font-[MainFont] mt-5 text-5xl uppercase">
                Stay Organized!!
              </h3>
              <div className="md:flex">
                <div className="flex mr-auto w-1/1 md:w-1/2 mt-5">
                  <img
                    className="hidden md:flex md:w-3xl lg:w-xl ml-auto mr-auto"
                    src={Calendar}
                  ></img>
                </div>
                <div className="w-1/1 md:w-1/2">
                  <p className="md:mt-15 mr-auto font-[SecondFont] text-3xl text-justify">
                    Trust us when we say we understand how easy it is to forget
                    things. With the Schedule feature, it makes life easy by
                    giving you a custom experience that can be linked to your
                    Phone, Tablet, or whatever machine you have calendar to keep
                    you up to date with all things:
                  </p>
                  <p className="ml-auto text-7xl font-[SecondFont] text-pink-500 dark:text-[#ffd2ea]">
                    YOU!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SignedOut>
      <SignedIn>
        <div>
          <h1 className="text-7xl text-black dark:text-white font-[SecondFont] uppercase">
            HEY {user?.username}
          </h1>
        </div>
        {/* <DocumentEditor
          id="docxEditor"
          documentServerUrl="http://localhost:3000/"
          config={{
            document: {
              fileType: "docx",
              key: "Khirz6zTPdfd7",
              title: "Example Document Title.docx",
              url: DOCUMENT_URL, 
            },
            documentType: "word",
            editorConfig: {
              callbackUrl: CALLBACK_URL, 
            },
          }}
          events_onDocumentReady={onEditorReady}
          onLoadComponentError={onLoadComponentError}
        /> */}
      </SignedIn>
    </body>
  );
}

export default App;
