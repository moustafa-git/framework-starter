import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="bg-[#2C3E50] ">
      <div className="container p-10">
        <div className="text-white grid grid-cols-3">
          <div className="col-span-3 sm:col-span-1 mx-auto p-4 text-center">
            <h2 className="text-[23px] font-medium mb-4 pt-5">LOCATION</h2>
            <p className="text-[16px] font-light mb-4">
              2215 John Daniel Drive
            </p>
            <p className="text-[16px] font-light mb-4">Clark, MO 65243</p>
          </div>
          <div className="col-span-3 sm:col-span-1 mx-auto p-4 text-center">
            <h2 className="text-[23px] font-medium mb-1 pt-5">
              AROUND THE WEB
            </h2>
            <ul className="flex gap-2 justify-center">
              <li className="size-10 rounded-full border flex justify-center items-center">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="lg"
                  color="white"
                />
              </li>
              <li className="size-10 rounded-full border flex justify-center items-center">
                <FontAwesomeIcon
                  icon="fa-brands fa-twitter"
                  size="lg"
                  color="white"
                />
              </li>
              <li className="size-10 rounded-full border flex justify-center items-center">
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  size="lg"
                  color="white"
                />
              </li>
              <li className="size-10 rounded-full border flex justify-center items-center">
                <FontAwesomeIcon icon="fa-globe" size="lg" color="white" />
              </li>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1 mx-auto p-4 text-center">
            <h2 className="text-[23px] font-medium mb-4 pt-5">
              ABOUT FREELANCER
            </h2>
            <p className="text-[16px] font-light mb-4 max-w-96">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0D1217] p-2.5">
        <p className="pt-2.5 mb-4 text-white text-center">
          Copyright © Your Website 2021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
