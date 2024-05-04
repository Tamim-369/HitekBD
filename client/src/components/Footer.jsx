import React from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation().pathname;

  return (
    <>
      {location == "/checkout" ||
      location == "/product" ||
      location == "/combo" ||
      location == "/signin" ||
      location == "/signup" ||
      location == "/adminAuth" ||
      location == "/admin" ? (
        ""
      ) : (
        <footer class="w-full max-h-[500px]  bg-gradient-to-tl from-gray-100  to-gray-200 p-5 py-8 flex items-center justify-center">
          <div class="max-w-screen-xl w-full mx-auto text-black flex flex-col justify-center gap-4">
            <div class="flex justify-between border-b pb-3 flex-col lg:flex-row gap-6">
              <div class="text-sm font-medium space-y-3 lg:max-w-[30%] w-full">
                <h2 class="font-bold text-xl">Follow Us</h2>
                <div class="flex items-center gap-x-4 flex-wrap gap-y-2">
                  <a
                    target="_blank"
                    class="flex items-center gap-1"
                    href="https://www.facebook.com/gadgetsworld06"
                  >
                    <img
                      src="https://www.facebook.com/images/fb_icon_325x325.png"
                      alt=""
                      className="h-[1.2rem]"
                      srcset=""
                    />
                    <span class="block lowercase first-letter:uppercase">
                      facebook
                    </span>
                  </a>
                  <a
                    target="_blank"
                    class="flex items-center gap-1"
                    href="https://www.youtube.com/@gadgetsworld06"
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                      alt=""
                      className="h-[1.8rem] "
                    />
                    <span class="block lowercase first-letter:uppercase">
                      youtube
                    </span>
                  </a>
                  <a
                    target="_blank"
                    class="flex items-center gap-1"
                    href="https://www.instagram.com/gadgetsworld06"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                      className="h-[1.18rem]"
                      alt=""
                    />
                    <span class="block lowercase first-letter:uppercase">
                      instagram
                    </span>
                  </a>
                  <a
                    target="_blank"
                    class="flex items-center gap-1"
                    href="https://www.tiktok.com/@gadgetsworld06"
                  >
                    <img
                      src="https://pngimg.com/d/tiktok_PNG9.png"
                      className="h-5"
                      alt=""
                    />
                    <span class="block lowercase first-letter:uppercase">
                      tiktok
                    </span>
                  </a>
                </div>
              </div>
              <div class="text-sm font-medium space-y-3 w-full flex flex-col lg:max-w-[50%] lg:items-end">
                <h2 class="font-bold text-xl">Contact Us</h2>
                <div class="flex items-center gap-x-4 flex-wrap gap-y-2 lg:justify-end">
                  <div class="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-map-pin w-4 h-4"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>{" "}
                    Dhaka bashaboo
                  </div>
                  <div class="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-phone w-4 h-4"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>{" "}
                    <a href="tel:01324482384">01324482384</a>
                  </div>
                  <div class="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-mail w-4 h-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>{" "}
                    <a href="mailto:gadgetsworldstore27@gmail.com">
                      gadgetsworldstore27@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-sm font-medium flex items-center flex-col md:flex-row justify-between">
              <p>© Hitekbd 2024. All rights reserved</p>
              <span class="block" target="_blank">
                Developed by{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61553982567839"
                  target="_blank"
                  className="text-red-500"
                >
                  Tamim Ahmed
                </a>
              </span>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
