import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X"
import GitHubIcon from "@mui/icons-material/GitHub";
import MediumIcon from "@mui/icons-material/Edit";

const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 flex px-4 md:px-20 py-6 md:py-12 mx-auto bg-gray-900 text-gray-300 w-full justify-between items-center shadow-md">
            <a href="#" className="hidden md:block">Muhammad Atiq</a>
            <div className="flex-row space-x-6 justify-center hidden md:block">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="flex gap-4 w-full md:w-fit justify-end">
                <a href="mailto:atiqqq0@gmail.com" className="md:block hidden">
                    <EmailRoundedIcon style={{ fontSize: 20 }}/>
                </a>
                <a href="https://github.com/maybeatiq" target="_blank">
                    <GitHubIcon style={{ fontSize: 20 }}/>
                </a>
                {/* <a href="https://www.linkedin.com/in/" target="_blank">
                    <LinkedInIcon style={{ fontSize: 21 }}/>
                </a> */}
                <a href="https://medium.com/@defineAtiq" target="_blank">
                    <MediumIcon style={{ fontSize: 20 }}/>
                </a>
                <a href="https://x.com/maybeAtiq" target="_blank">
                    <X style={{ fontSize: 20 }}/>
                </a>
            </div>
        </div>
    );
}

export default NavBar;