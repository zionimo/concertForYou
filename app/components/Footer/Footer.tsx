import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-neutral-200 text-black px-16 py-10">
      <div className="flex md:flex-row flex-col justify-between">
        {/* 소개글 */}
        <div className="sm:mb-10">
          <Image
            className=" pb-5"
            src="/logo2.png"
            width={196}
            height={20}
            alt="Logo"
          />
          <h1>
            The biggest, extraordinary and spread <br />
            out kpop music festival all around the world
          </h1>
        </div>

        {/* 메뉴 */}
        <div className="flex flex-row space-x-12 s">
          <ul>
            <li className="text-xl font-semibold pb-5">Menu</li>
            <li>Home</li>
            <li>Performance</li>
            <li>Booking</li>
            <li>Store</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li className="text-xl font-semibold pb-5">Help</li>
            <li>Privacy & Policy</li>
            <li>Term of Use</li>
          </ul>
          <ul>
            <li className="text-xl font-semibold pb-5">Social</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
