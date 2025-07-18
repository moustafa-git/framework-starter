import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="py-10">
      <h2 className="text-[#2C3E50] text-[30px] font-bold mb-4 text-center">
        CONTACT SECTION
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
      <form className="p-4 mx-auto md:w-6/12">
        <div className="mb-4">
          <div className="relative ">
            <label
              id="label-name"
              htmlFor="name"
              className={`text-[#1ABC9C] absolute bottom-0 left-0 transition-all duration-500 z-0 ${
                name ? "translate-y-0" : "translate-y-15"
              }`}
            >
              userName :
            </label>
          </div>

          <input
            id="name"
            value={name}
            type="text"
            className=" w-full py-4 px-3 border-0 outline-0 rounded-md border-b-1 border-b-gray-200 my-3 relative z-50 bg-white"
            placeholder="userName"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <div className="relative ">
            <label
              htmlFor="age"
              className={`text-[#1ABC9C] absolute bottom-0 left-0 transition-all duration-500 z-0 ${
                age ? "translate-y-0" : "translate-y-15"
              }`}
            >
              userAge :
            </label>
          </div>

          <input
            id="age"
            value={age}
            type="text"
            className=" w-full py-4 px-3 border-0 outline-0 rounded-md border-b-1 border-b-gray-200 my-3 relative z-50 bg-white"
            placeholder="userAge"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <div className="relative ">
            <label
              htmlFor="age"
              className={`text-[#1ABC9C] absolute bottom-0 left-0 transition-all duration-500 z-0 ${
                email ? "translate-y-0" : "translate-y-15"
              }`}
            >
              userEmail :
            </label>
          </div>

          <input
            id="email"
            value={email}
            type="text"
            className=" w-full py-4 px-3 border-0 outline-0 rounded-md border-b-1 border-b-gray-200 my-3 relative z-50 bg-white"
            placeholder="userEmail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <div className="relative ">
            <label
              htmlFor="age"
              className={`text-[#1ABC9C] absolute bottom-0 left-0 transition-all duration-500 z-0 ${
                password ? "translate-y-0" : "translate-y-15"
              }`}
            >
              userPassword :
            </label>
          </div>

          <input
            id="email"
            value={password}
            type="text"
            className=" w-full py-4 px-3 border-0 outline-0 rounded-md border-b-1 border-b-gray-200 my-3 relative z-50 bg-white"
            placeholder="userPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="text-white bg-[#1ABC9C] py-1.5 px-3 rounded-md cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
