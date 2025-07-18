import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    const title = document.getElementById("title");
    title.innerHTML = "About";
  }, []);
  return (
    <section className="bg-[#1ABC9C] px-12 py-28">
      <h2 className="text-white text-[30px] font-bold mb-4 text-center">
        ABOUT COMPONENT
      </h2>
      <div className="flex justify-center items-center mb-4">
        <div className="h-1 bg-white w-28"></div>
        <FontAwesomeIcon
          icon="fa-star"
          size="lg"
          color="white"
          className="mx-4"
        />
        <div className="h-1 bg-white w-28"></div>
      </div>
      <article className="text-white flex flex-wrap sm:w-8/12 mx-auto justify-between">
        <p className="mb-4 md:w-6/12 p-3">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="md:w-6/12 p-3">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </article>
    </section>
  );
}

export default About;
