import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    const title = document.getElementById("title");
    title.innerHTML = "Home";
  }, []);
  return (
    <section className="bg-[#1ABC9C] p-20">
      <div className="flex flex-wrap justify-center items-center flex-col">
        <figure className="w-62 mb-5">
          <img
            src="src\assets\avatar.svg"
            alt="avatar"
            className="w-full block"
          />
        </figure>
        <figcaption>
          <h2 className="text-white text-[30px] font-bold mb-4">
            START FRAMEWORK
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 bg-white w-4/12"></div>
            <FontAwesomeIcon
              icon="fa-star"
              size="lg"
              color="white"
              className="mx-4"
            />
            <div className="h-1 bg-white w-4/12"></div>
          </div>
          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </figcaption>
      </div>
    </section>
  );
}

export default Home;
