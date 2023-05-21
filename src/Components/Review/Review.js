import React from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'animate.css';
import "./Review.css"

import SVG from "../SVG/SVG";
const Review = () => {
  return (
    <div>
      <div className="py-10">
       
        <section class="bg-gradient-to-r from-[rgb(146,70,142)] to-[#38235D]  text-white ">
          <div class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16 ">
              <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                  Don't just take our word for it...
                  <br class="hidden sm:block lg:hidden" />
                  Read reviews from our customers
                </h2>

                <p class="mt-4 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas veritatis illo placeat harum porro optio fugit a
                  culpa sunt id!
                </p>

                <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                  <button class="prev-button rounded-full border border-white-600 p-3 text-white hover:bg-[#92468E] hover:text-white">
                    <span class="sr-only">Previous Slide</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button class="next-button rounded-full border border-white-600 p-3 text-white hover:bg-[#92468E] hover:text-white">
                    <span class="sr-only">Next Slide</span>
                    <svg
                      class="h-5 w-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                class="-mx-6 lg:col-span-2 lg:mx-0 "
                // data-aos="fade-left"
                // data-aos-anchor="#example-anchor"
                // data-aos-offset="500"
                // data-aos-duration="500"
              >
                <div class="swiper-container zoom-in-on-scroll !overflow-hidden  " data-aos="zoom-in">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide bg-gradient-to-r from-[#38235D] to-[#ab4059] shadow-3xl     bg-base-100     rounded-2xl">
                      <blockquote class="flex h-full flex-col justify-between   p-12 ">
                        <div className=" ">
                          <div class="flex gap-0.5 text-white">
                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div class="mt-4">
                            <p class="text-2xl font-bold text-white sm:text-3xl transition duration-300 ease-in-out delay-150">
                              Rohim udinin{" "}
                            </p>

                            <p class="mt-4 leading-relaxed text-white">
                              No, Rose, they are not breathing. And they have no
                              arms or legs … Where are they? You know what? If
                              we come across somebody with no arms or legs, do
                              we bother resuscitating them? I mean, what quality
                              of life do we have there?
                            </p>
                          </div>
                        </div>

                        <footer class="mt-8 text-sm text-white">
                          &mdash; Michael Scott
                        </footer>
                        {/* <SVG></SVG> */}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                class="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                <svg
                  class="h-5 w-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                class="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
