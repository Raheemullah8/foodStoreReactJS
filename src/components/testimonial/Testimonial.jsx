import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="">
        <div className="container mx-auto px-5 py-10">
          <h1
            className="text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonials
          </h1>
          <h2
            className="text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className="text-[#d39e4e]">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap w-full justify-between gap-x-1">
            {/* Testimonial 1 */}
            <div className="lg:w-1/4 bg-[#ddb925] lg:mb-0 mb-6 p-4"> {/* Changed background color */}
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "I tried the new pasta recipe from this site, and it was a hit! The flavors were incredible, and my family loved it. Highly recommend!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#d39e4e] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#d39e4e" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Aisha
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Recipe Enthusiast
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/4 bg-[#ddb925] lg:mb-0 mb-6 p-4"> {/* Changed background color */}
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "The dessert recipes are to die for! I made the chocolate cake, and it was the best I've ever had. My friends couldn't get enough!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#d39e4e] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#d39e4e" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Salman
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Home Baker
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/4 bg-[#ddb925] lg:mb-0 p-4"> {/* Changed background color */}
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "This website has transformed my cooking! The step-by-step guides make everything so easy to follow. I've tried so many new dishes!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#d39e4e] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#d39e4e" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Fatima
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Food Blogger
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
