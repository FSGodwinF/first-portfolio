import React from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/fsgodwinf635/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/fsGodwinF",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:fadengodwin@outlook.com",
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/ResumeIT.pdf",
      download: true,
    },
    {
      id:5,
      child: (
          <>
          Codepen <FaCodepen size={20}/>
          </>
      ),
      href: "https://codepen.io/F_GEE",
      style: "rounded-br-md",

  },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
