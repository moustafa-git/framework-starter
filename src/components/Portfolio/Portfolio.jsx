import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Modal from "./Modal";
function Portfolio() {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const title = document.getElementById("title");
    title.innerHTML = "Portfolio";
  }, []);
  useEffect(() => {
    function handleClick() {
      if (isModal) {
        setIsModal(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isModal]);
  return (
    <section className="py-10">
      {isModal && <Modal />}

      <div className="container">
        <h2 className="text-[#2C3E50] text-[30px] font-bold mb-4 text-center">
          PORTFOLIO COMPONENT
        </h2>
        <div className="flex justify-center items-center mb-12">
          <div className="h-1 bg-[#2C3E50] w-28"></div>
          <FontAwesomeIcon
            icon="fa-star"
            size="lg"
            color="#2C3E50"
            className="mx-4"
          />
          <div className="h-1 bg-[#2C3E50] w-28"></div>
        </div>
        <div className="flex flex-wrap gap-y-15 justify-center">
          <figure
            className="w-full md:w-6/12 lg:w-4/12  group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModal(true);
            }}
          >
            <div className="md:w-10/12 relative">
              <img
                src="/poert1.png"
                alt="img"
                className=" w-full  block rounded-lg mx-auto relative"
              ></img>
              <div className="absolute bg-[rgba(26,188,156,0.8)] top-0 bottom-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                <FontAwesomeIcon
                  icon="fa-plus"
                  size="7x"
                  color="white"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </figure>
          <figure
            className="w-full md:w-6/12 lg:w-4/12  group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModal(true);
            }}
          >
            <div className="md:w-10/12 relative">
              <img
                src="/poert1.png"
                alt="img"
                className=" w-full  block rounded-lg mx-auto relative"
              ></img>
              <div className="absolute bg-[rgba(26,188,156,0.8)] top-0 bottom-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                <FontAwesomeIcon
                  icon="fa-plus"
                  size="7x"
                  color="white"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </figure>
          <figure
            className="w-full md:w-6/12 lg:w-4/12  group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModal(true);
            }}
          >
            <div className="md:w-10/12 relative">
              <img
                src="/poert1.png"
                alt="img"
                className=" w-full  block rounded-lg mx-auto relative"
              ></img>
              <div className="absolute bg-[rgba(26,188,156,0.8)] top-0 bottom-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                <FontAwesomeIcon
                  icon="fa-plus"
                  size="7x"
                  color="white"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </figure>
          <figure
            className="w-full md:w-6/12 lg:w-4/12  group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModal(true);
            }}
          >
            <div className="md:w-10/12 relative">
              <img
                src="/poert1.png"
                alt="img"
                className=" w-full  block rounded-lg mx-auto relative"
              ></img>
              <div className="absolute bg-[rgba(26,188,156,0.8)] top-0 bottom-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                <FontAwesomeIcon
                  icon="fa-plus"
                  size="7x"
                  color="white"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </figure>
          <figure
            className="w-full md:w-6/12 lg:w-4/12  group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModal(true);
            }}
          >
            <div className="md:w-10/12 relative">
              <img
                src="/poert1.png"
                alt="img"
                className=" w-full  block rounded-lg mx-auto relative"
              ></img>
              <div className="absolute bg-[rgba(26,188,156,0.8)] top-0 bottom-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                <FontAwesomeIcon
                  icon="fa-plus"
                  size="7x"
                  color="white"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </figure>
          <figure
            className="w-full md:w-6/12 lg:w-4/12  group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModal(true);
            }}
          >
            <div className="md:w-10/12 relative">
              <img
                src="/poert1.png"
                alt="img"
                className=" w-full  block rounded-lg mx-auto relative"
              ></img>
              <div className="absolute bg-[rgba(26,188,156,0.8)] top-0 bottom-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                <FontAwesomeIcon
                  icon="fa-plus"
                  size="7x"
                  color="white"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
