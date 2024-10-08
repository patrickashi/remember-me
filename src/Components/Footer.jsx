import React from "react"
import logo from "../Assets/logo.jpg";
import '@fontsource/luckiest-guy';

const Footer = () => {
    return (
        <div className="px-4 md:px-20 py-10 bg-[#3b82f6]  duration-200 text-white">
            <div className="flex gap-16 flex-col md:flex-row justify-between border-b border-gray-300 pb-4">
                <div>
                    <img className="w-20 rounded-sm" src={logo}  size={20} alt="logo" />
                </div>
                <div>
                    <h1 className="font-luckiest mb-4">Menu</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Services</li>
                        <li>About</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-luckiest mb-4">Contact</h1>
                    <ul className="flex flex-col gap-2">
                        <li>08085001287</li>
                        <li>oguzimichael@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-luckiest mb-4">Address</h1>
                    <ul className="flex flex-col gap-2">
                        <li>22 Ibijoke, Oregun Ikeja</li>
                        <li>Lagos Nigeria</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-luckiest mb-4">Social</h1>
                    <ul className="flex flex-col gap-2">
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <a href="https://wa.me/message/C5O2TUPGTPXRP1"> <li>whatsapp</li> </a>
                        <a href="https://chat.whatsapp.com/GTlJGzUq62B7jo6OkhD2P8"> <li>whatsapp community</li> </a>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between mt-4 text-xs">
                <div>Pricacy Policy</div>
                <div>© 2024 remember-me</div>
            </div>
        </div>
    )
}

export default Footer;