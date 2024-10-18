import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCalendarCheck } from "react-icons/fa6";
import { FcReading } from "react-icons/fc";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram ,FaRegClock , FaPaperPlane   } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Navbar } from './Navbar/Navbar';
import { UnderlineText } from './UnderlineText';
import { CardOne } from './CardOne';
import { CommonButton } from './CommonButton';
import { StoryCard } from './StoryCard';
import { CardTwo } from './CardTwo';
import { AdButton } from './AdButton';
import { BuyNow } from './BuyNow';
import { VideoCard } from './VideoCard';
import { CommonText } from './commonText';
import { Option } from './Option';
import { AiOutlineLike ,AiFillDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { VideoCompoTwo } from './VideoCompoTwo';
import { CardThree } from './CardThree';
import { CardFour } from './CardFour';
import { IoIosArrowDropleft,IoIosArrowDropright  } from "react-icons/io";
import { CardFive } from './CardFive';
import { CardSix } from './CardSix';
import { IoMdPaperPlane } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
    {/* ==== top header part */}
    <section className="bg-[#000D39] py-2 ">
        <div className="container">
           <div className="flex justify-between items-center">
             <div className="flex items-center gap-5">
                <button className="py-[3px] px-[14px] font-medium bg-white bg-opacity-20 font-work text-[17px] rounded-[3px] leading-7 tracking-[.15%] text-white ">Tranding</button>
                <p className="font-work font-medium text-[17px] text-white leading-7 tracking-[.15%] ">Every success is helped by someone behind the people</p>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="flex items-center font-work font-medium text-[17px] text-white leading-7 tracking-[.15%] gap-[10px] "> <TiWeatherPartlySunny /> Dhaka 360</div>
                <div className="flex items-center gap-[10px] font-work font-medium text-[17px] text-white leading-7 tracking-[.15%] "> <FaCalendarCheck /> Monday - July 2, 2021</div>
              </div>
           </div>
        </div>
    </section>
    {/* ==== header part */}
    <section className="bg-[#F1F4FF] py-[35px] ">
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-[10px] ">
                <div className="bg-[#E12127] text-white w-[60px] h-[60px] rounded-full flex justify-center items-center text-[40px] ">
                  <img src="images/Logo1.png" alt="" />
                </div>
              <div className="font-work font-bold text-[#000D39] text-[40px] tracking-normal leading-10"> News<span className="text-[#E12127] ">Pro</span></div>
            </div>
            <div className="w-[560px] h-[80px] bg-top flex justify-around items-center rounded-[3px] ">
                <div className="text-[35px] font-work font-semibold leading-9 text-white ">560x80</div>
                <div className="w-[1px] h-[36px] bg-white ml-[10px] mr-3 "></div>
                <div className="text-[15px] font-work font-semibold text-white ">Smart & Responsive <br/> ADVERTISEMENT</div>
                <div className="w-[60px] h-[80px] bg-gray-400 ">image</div>
                <button className="py-[9px] px-[26px] bg-white bg-opacity-60 text-white text-[15px] font-work font-semibold leading-[22px] rounded-[3px] ">Buy Now</button>
             </div>
            <div className="flex items-center gap-[13px] ">
                <div className="text-[30px] text-[#000D39] hover:text-[#E12127] "><FaFacebookF /></div>
                <div className="text-[30px] text-[#000D39] hover:text-[#E12127] "><FaTwitter /></div>
                <div className="text-[30px] text-[#000D39] hover:text-[#E12127] "><FaLinkedinIn /></div>
                <div className="text-[30px] text-[#000D39] hover:text-[#E12127] "><FaWhatsapp /></div>
                <div className="text-[30px] text-[#000D39] hover:text-[#E12127] "><FaInstagram /></div>
            </div>
            <div className="bg-[#B4B8C6] w-[50px] h-[50px] rounded-full text-[#000D39] text-[30px] flex justify-center items-center "><IoPerson /></div>
        </div>
    </section>
    {/* ====== Navbar part */}
    <Navbar/>
    {/* ==================================== Banner section ========================================= */}
    <section className="bg-white pt-[70px]  ">
      <div className="container">
        <div className="flex justify-between items-center pb-[57px]">
            <div className="w-[570px] h-[460px] relative ">
                <img className="w-full h-full" src="/images/six.jpg" alt="img" />
                <div className="absolute bottom-9 ml-[30px] w-[466px] ">
                  <UnderlineText size='17px' textSize='25px' color='text-white' textColor='text-white' text="Hedonism and Tailoring: The Women's Spring 2021 Collections Had It All" />
                </div>
                <div className=" absolute top-5 right-5">
                    <CommonButton bg='bg-[#E12127]' buttonText='Fashion' />
                </div>
            </div>
            <div className="div">
                <div className="flex items-center gap-[30px] mb-[30px] ">
                  <div className=" relative w-[270px] h-[215px] ">
                    <CardOne image={ <img src='images/nina.webp' alt='img' /> } />
                    <div className="absolute bottom-9 ml-[30px] w-[226px] ">
                      <UnderlineText size='13px' textSize='18px' color='text-white' textColor='text-white' text="The secret to moving this ancient sphinx" />
                    </div>
                    <div className=" absolute top-5 right-5">
                      <CommonButton bg='bg-[#10D0FA]' buttonText='Technology' />
                    </div>
                  </div>
                  <div className=" relative w-[270px] h-[215px] ">
                    <CardOne image={ <img src='images/two.jpg' alt='img' /> } />
                    <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' textSize='18px' color='text-white' textColor='text-white' text="City of New York on a trip to Arctic Nunavut" />
                    </div>
                    <div className=" absolute top-5 right-5">
                      <CommonButton bg='bg-[#5200FF]' buttonText='Travel' />
                    </div>
                  </div>
                </div>
                <div className="w-[570px] h-[215px] relative ">
                  <img className="w-full h-full" src="/images/one.jpg" alt="img" />
                  <div className="absolute bottom-9 ml-[30px] w-[399px] ">
                    <UnderlineText size='13px' textSize='18px' color='text-white' textColor='text-white' text="Lifestyle brings big changes in people's lives. Are you ready?" />
                  </div>
                  <div className=" absolute top-5 right-5">
                    <CommonButton bg='bg-[#FF005C]' buttonText='Lifestyle' />
                  </div>
                </div>
            </div>
          </div>
          {/* ===================== slider part===== */}
        <div className="div">
           <div className="text-[25px] font-semibold font-work text-[#000D39] flex items-center gap-[15px] mb-[31px] " >
             <p>Todays Top News</p>
             <div className="w-[832px] h-[1px] bg-[#CFD4E4] "></div>
           </div>
           <div className="mb-[70px] flex justify-between items-center ">
            {/* === image one=== */}
                <div className=" relative w-[270px] h-[215px] ">
                    <CardOne image={ <img src='images/two.jpg' alt='img' /> } />
                    <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' color='text-white' textColor='text-white' textSize='18px' text="The secret to moving this ancient sphinx" />
                    </div>
                    <div className=" absolute top-5 right-5">
                    <CommonButton bg='bg-[#10D0FA]' buttonText='Technology' />
                    </div>
                  </div>
                   {/* === image two=== */}
                  <div className=" relative w-[270px] h-[215px] ">
                    <CardOne image={ <img src='images/two.jpg' alt='img' /> } />
                    <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' textSize='18px' color='text-white' textColor='text-white' text="Bestwood death prompts police investigation" />
                    </div>
                    <div className=" absolute top-5 right-5">
                      <CommonButton bg='bg-[#0085FF]' buttonText='Politics' />
                    </div>
                  </div>
                   {/* === image three === */}
                  <div className=" relative w-[270px] h-[215px] ">
                    <CardOne image={ <img src='images/two.jpg' alt='img' /> } />
                    <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' textSize='18px' color='text-white' textColor='text-white' text="Simple tips to keep in mind when buying a Book" />
                    </div>
                    <div className=" absolute top-5 right-5">
                      <CommonButton bg='bg-[#FA1010]' buttonText='Education' />
                    </div>
                  </div>
                   {/* === image four === */}
                  <div className=" relative w-[270px] h-[215px] ">
                    <CardOne image={ <img src='images/two.jpg' alt='img' /> } />
                    <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' color='text-white' textColor='text-white' textSize='18px' text="City of New York on a trip to Arctic Nunavut" />
                    </div>
                    <div className=" absolute top-5 right-5">
                      <CommonButton bg='bg-[#5200FF]' buttonText='Travel' />
                    </div>
                  </div>
               </div>
           </div>
        </div>
      </section>
      {/* =============================== Most popular news section ==================================== */}
      <section className="bg-[#F9FAFF] pt-[57px] relative ">
        <div className="container">

        <div className="flex justify-between items-start">
        <div className="">
          <h2 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">Most Popular News</h2>
          <div className="mt-[17px] ">
             <h3 className="text-[21px] font-work font-medium leading-6 tracking-[.25%] text-[#000D39] mb-[10px] ">Top Stories</h3>
            <div className="flex flex-col gap-5 ">
              {/* ===card one=== */}
              <div className="">
                <StoryCard news={ <UnderlineText iconColor='text-[#E12127] ' size='13px' color='text-[#555555] ' textColor='text-[#000D39]' divSize='w-[298px] ' textSize='18px' text="The secret to moving this ancient sphinx" />} />
              </div>
              {/* === card two=== */}
              <div className="">
                <StoryCard news={ <UnderlineText iconColor='text-[#E12127] ' size='13px' color='text-[#555555] ' textColor='text-[#000D39]' divSize='w-[298px] ' textSize='18px' text="The secret to moving this ancient sphinx" />} />
             </div>
             {/* === card three=== */}
             <div className="">
                <StoryCard news={ <UnderlineText iconColor='text-[#E12127] ' size='13px' color='text-[#555555] ' textColor='text-[#000D39]' divSize='w-[298px] ' textSize='18px' text="The secret to moving this ancient sphinx" />} />
              </div>
              {/* === card four=== */}
              <div className="">
                <StoryCard news={ <UnderlineText iconColor='text-[#E12127] ' size='13px' color='text-[#555555] ' textColor='text-[#000D39]' divSize='w-[298px] ' textSize='18px' text="The secret to moving this ancient sphinx" />} />
              </div>
            </div>
          </div>
        </div>
        {/* ======== button part======= */}
        <div className="div">
          <div className="bg-[#E5E9F6] py-[11px] px-[74px] flex justify-between items-center w-[770px] ">
            <button className=" text-[#000D39] active:text-[#E12127] text-[17px] font-work font-medium leading-7 tracking-[.15%] ">All</button>
            <button className=" text-[#000D39] active:text-[#E12127] text-[17px] font-work font-medium leading-7 tracking-[.15%] ">Travel</button>
            <button className=" text-[#000D39] active:text-[#E12127] text-[17px] font-work font-medium leading-7 tracking-[.15%] ">Lifestyle</button>
            <button className=" text-[#000D39] active:text-[#E12127] text-[17px] font-work font-medium leading-7 tracking-[.15%] ">Fashion</button>
            <button className=" text-[#000D39] active:text-[#E12127] text-[17px] font-work font-medium leading-7 tracking-[.15%] ">Technology</button>
            <button className=" text-[#000D39] active:text-[#E12127] text-[17px] font-work font-medium leading-7 tracking-[.15%] ">Sports</button>
          </div>
          <div className="flex items-start gap-[30px] mt-[34px] mb-[145px] ">
            <div className="mb-[79px] ">
             <div className="w-[270px] ">
               <CardTwo  image={<img src="images/six.jpg" alt='img' />} />
                 <UnderlineText size='13px' textSize='18px' color='text-[#555555] ' textColor='text-[#000D39]' text="Lifestyle brings big changes in people's lives. Are you ready?" /> 
             </div>
             <div className="w-[270px] mt-[34px] ">
               <CardTwo  image={<img src="images/six.jpg" alt='img' />} />
                 <UnderlineText size='13px' textSize='18px' color='text-[#555555] ' textColor='text-[#000D39]' text="Lifestyle brings big changes in people's lives. Are you ready?" /> 
             </div>
            </div>
            <div className="w-[470px] ">
              <img className="w-full h-[430px] mb-[30px] " src="images/three.jpg" alt="img" />
              <UnderlineText size='13px' textSize='18px' color='text-[#555555] ' textColor='text-[#000D39]' text="Lifestyle brings big changes in people's lives. Are you ready?" /> 
            </div>
          </div>
        </div>
        </div>
        </div>
      {/* ======== ad button part ====== */}
       <div className="absolute bottom-[-80px] left-[50%] translate-x-[-50%] ">
         <AdButton/>
       </div>
      </section>

      {/* ======== fashion section part===== */}
      <section className="bg-white pt-[121px] pb-[70px] ">
        <div className="container">
        <div className=" flex gap-[30px] mb-[57px]">
          <div className="">
            <div className="flex items-center gap-[13px] mb-[21px]">
              <h3 className="text-[25px] font-work font-semibold leading-[35px] text-[#000D39] ">Fashion & Lifestyle</h3>
              <div className="w-[447px] h-[1px] bg-[#CFD4E4] "></div>
              <p className="text-[17px] font-medium text-[#E12127] font-work leading-7 tracking-[15%] underline ">View All</p>
            </div>
            <div className="flex items-center gap-[30px] mb-[57px] ">
              <div className="w-[470px] h-[490px] relative ">
                <img className="w-full h-full" src="images/three.jpeg" alt="img" />
                <div className="absolute bottom-9 ml-[30px] w-[392px]">
                      <UnderlineText size='13px' color='text-white' textColor='text-white' textSize='18px' text="The secret to moving this ancient sphinx" />
                    </div>
                    <div className=" absolute top-5 right-5">
                    <CommonButton bg='bg-[#E12127]' buttonText='Fashion' />
                    </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="w-[270px] h-[230px] relative ">
                  <img className="w-full h-full" src="images/six.jpg" alt="img" />
                  <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' color='text-white' textColor='text-white' textSize='18px' text="The secret to moving this ancient sphinx" />
                    </div>
                    <div className=" absolute top-5 right-5">
                    <CommonButton bg='bg-[#FF005C]' buttonText='Lifestyle' />
                    </div>
                </div>
                <div className="w-[270px] h-[230px] relative ">
                  <img className="w-full h-full" src="images/six.jpg" alt="img" />
                  <div className="absolute bottom-9 ml-[30px] w-[226px]">
                      <UnderlineText size='13px' color='text-white' textColor='text-white' textSize='18px' text="The secret to moving this ancient sphinx" />
                    </div>
                    <div className=" absolute top-5 right-5">
                    <CommonButton bg='bg-[#FF005C]' buttonText='Lifestyle' />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[370px]">
            <div className="flex  ">
              <button className="text-[21px] font-lato w-[185px] font-semibold  text-[#000D39] bg-[#E5E9F6] hover:text-white hover:bg-[#000D39] py-[7px] px-8 leading-[30px] ">Recent Post</button>
              <button className="text-[21px] font-lato w-[185px] font-semibold  text-[#000D39] bg-[#E5E9F6] hover:text-white hover:bg-[#000D39] py-[7px] px-8 leading-[30px] ">Popular Post</button>  
            </div>
            <div className=" flex flex-col items-center gap-[10px] border-[#E5E5E5] border-[1px] p-[10px] w-[370px] ">
              <VideoCard type="Fashion" color='text-[#E12127]' videos={<iframe width="110" height="90" src="https://www.youtube.com/embed/fmsI9xXn05A?si=QWBgNi2I5kA8g6_K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} title="Brings big changes in people's lives." />
              <VideoCard type="Lifestyle" color="text-[#FF005C]" videos={<iframe width="110" height="90" src="https://www.youtube.com/embed/fmsI9xXn05A?si=QWBgNi2I5kA8g6_K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} title="Brings big changes in people's lives." />
              <VideoCard type="Technology" color="text-[#10CFFA]" videos={<iframe width="110" height="90" src="https://www.youtube.com/embed/fmsI9xXn05A?si=QWBgNi2I5kA8g6_K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} title="Brings big changes in people's lives." />
              <VideoCard type="Travel" color="text-[#5200FF]" videos={<iframe width="110" height="90" src="https://www.youtube.com/embed/fmsI9xXn05A?si=QWBgNi2I5kA8g6_K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} title="Brings big changes in people's lives." />
            </div>
          </div>
        </div>
        <div className="mb-[70px]">
          <div className="flex items-center gap-[10px] mb-[21px] ">
            <h3 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">Trending News</h3>
            <div className="bg-[#CFD4E4] w-[979px] h-[1px] "></div>
          </div>
          <div className="mb-[40px] flex justify-center gap-[30px]">
            <div className="w-[270px] h-[328px] bg-white shadow-2xl overflow-hidden ">
              <CardOne image={ <img src='images/nina.webp' alt='img' /> } /> 
              <CommonText title="The secret to moving this ancient sphinx" />            
            </div>

            <div className="w-[270px] h-[328px] bg-white shadow-2xl overflow-hidden ">
              <CardOne image={ <img src='images/nina.webp' alt='img' /> } /> 
              <CommonText title="The secret to moving this ancient sphinx" />            
            </div>

            <div className="w-[270px] h-[328px] bg-white shadow-2xl overflow-hidden ">
              <CardOne image={ <img src='images/nina.webp' alt='img' /> } /> 
              <CommonText title="The secret to moving this ancient sphinx" />            
            </div>

            <div className="w-[270px] h-[328px] bg-white shadow-2xl overflow-hidden ">
              <CardOne image={ <img src='images/nina.webp' alt='img' /> } /> 
              <CommonText title="The secret to moving this ancient sphinx" />            
            </div>

          </div>
        </div>
        </div>
      </section>
      {/* ========== video section =============== */}
      <section className="bg-[#00061D] pb-[64px] ">
        <div className="container">
          <div className="div">
            <div className="pt-[56px] pb-[19px] flex gap-[14px] items-center ">
              <h2 className="text-[25px] font-work font-semibold leading-[35px] text-white ">Videos</h2>
              <div className="w-[1073px] h-[1px] bg-white "></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-[670px] h-[546px] ">
                <div className="w-[670px] h-[460px] "><iframe width="670" height="460" src="https://www.youtube.com/embed/2XRaaO-9-_E?si=Fq-iW51OG4uNeaFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="div">
                  <p className="text-[17px] font-work font-semibold text-white mt-[17px] mb-[10px] ">Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All</p>
                  <div className="flex justify-between items-center">
                  <div className="text-[13px] font-medium font-work text-[#fff] flex items-center gap-[6px] "><FaRegClock /> July 02, 2021</div>
                  <div className="flex items-center gap-4">
                    <Option icon={<AiOutlineLike />} text="2.36M" />
                    <Option icon={<AiFillDislike />} text="520K" />
                    <Option icon={<IoIosShareAlt />} text="SHARE" />
                    <Option icon={<HiBars3  />} text="SAVE" />
                    <Option icon={<BsThreeDots   />} />
                  </div>
                  </div>
                </div>
              </div>
              <div className="w-[470px] h-[539px] border-[1px] border-[#fff] py-[30px] pl-[30px] flex flex-col gap-5 ">
                <VideoCompoTwo videoLinks={<iframe width="80" height="80" src="https://www.youtube.com/embed/FyeexjHizIc?si=T7RLHgY9p6YhsrOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} text="Brings big changes in people's lives." time="July 02, 2021" />
                <VideoCompoTwo videoLinks={<iframe width="80" height="80" src="https://www.youtube.com/embed/FyeexjHizIc?si=T7RLHgY9p6YhsrOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} text="Brings big changes in people's lives." time="July 02, 2021" />
                <VideoCompoTwo videoLinks={<iframe width="80" height="80" src="https://www.youtube.com/embed/FyeexjHizIc?si=T7RLHgY9p6YhsrOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} text="Brings big changes in people's lives." time="July 02, 2021" />
                <VideoCompoTwo videoLinks={<iframe width="80" height="80" src="https://www.youtube.com/embed/FyeexjHizIc?si=T7RLHgY9p6YhsrOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} text="Brings big changes in people's lives." time="July 02, 2021" />
                <VideoCompoTwo videoLinks={<iframe width="80" height="80" src="https://www.youtube.com/embed/FyeexjHizIc?si=T7RLHgY9p6YhsrOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} text="Brings big changes in people's lives." time="July 02, 2021" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= ad button part ====== */}
      <div className="container mt-[70px] mb-[57px] flex justify-center items-center ">
        <AdButton />
      </div>
      {/* =================covid 19 part =============== */}
      <section className="pb-[70px] bg-white ">
        <div className="container">
          <div className="flex items-center gap-[6px]">
          <div className="w-[794px] h-[812px] ">
            <div className="flex items-center gap-[10px] ">
              <h2 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">Covid-19 News</h2>
              <div className="w-[602px] h-[1px] bg-[#CFD4E4] "></div>
            </div>
            <div className="w-[704px] h-[276px] mt-5 mb-[30px] flex items-center gap-[30px] ">
              <div className="w-[320px] h-[276px]"><iframe width="320" height="276" src="https://www.youtube.com/embed/FyeexjHizIc?si=T7RLHgY9p6YhsrOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
              <div className="text">
                <button className="text-[15px] bg-[#5200FF] font-work font-semibold px-2 py-[5px] text-white leading-5 rounded-[3px] ">Covid-19</button>
                <div className="text-[17px] mt-5 mb-[11px] font-medium font-work text-[#555555] flex items-center gap-[6px] "><FaRegClock /> July 02, 2021</div>
                <h3 className="text-[19px] text-[#000D39] font-work font-medium leading-7 ">Hedonism and Tailoring: The Women’s
                Spring 2021 Collections Had It All</h3>
                <p className="text-[15px] font-normal font-work text-[#5555] leading-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className=" flex mr-[54px] flex-wrap">
              <CardThree time='July 02, 2021' color='text-[#5200FF]' title='Bangladesh reports record Covid-19 deaths' image={<img className="w-full h-full" src='images/nina.webp' alt='img'/>} />
              <CardThree time='July 02, 2021' color='text-[#E12127]' title='Bangladesh reports record Covid-19 deaths' image={<img className="w-full h-full" src='images/six.jpg' alt='img'/>} />
              <CardThree time='July 02, 2021' color='text-[#0085FF]' title='Bangladesh reports record Covid-19 deaths' image={<img className="w-full h-full" src='images/nina.webp' alt='img'/>} />
              <CardThree time='July 02, 2021' color='text-[#FF005C]' title='Bangladesh reports record Covid-19 deaths' image={<img className="w-full h-full" src='images/nina.webp' alt='img'/>} />
              <CardThree time='July 02, 2021' color='text-[#07B404]' title='Bangladesh reports record Covid-19 deaths' image={<img className="w-full h-full" src='images/nina.webp' alt='img'/>} />
              <CardThree time='July 02, 2021' color='text-[#F85E07]' title='Bangladesh reports record Covid-19 deaths' image={<img className="w-full h-full" src='images/nina.webp' alt='img'/>} />
            </div>
          </div>
          <div className="div2">
             <div className="w-[370px] h-[396px] ">
              <div className="flex items-center gap-2 mb-[21px] ">
                 <h2 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">Follow Us</h2>
                 <div className="w-[242px] h-[1px] bg-[#CFD4E4] "></div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <img src="images/1.png" alt="img" />
                <img src="images/2.png" alt="img" />
                <img src="images/3.png" alt="img" />
                <img src="images/4.png" alt="img" />
                <img src="images/5.png" alt="img" />
              </div>
             </div>
             <div className="w-[370px] h-[386px] gap-4 bg-[#F9F9F9] mt-[30px] flex flex-col justify-center items-center pt-[30px] ">
              <div className="w-[60px] h-[60px] text-center bg-[#FFE2E3] rounded-full flex justify-center items-center text-[#E12127] ">
                < FaPaperPlane  />
              </div>
              <div className="text-[25px] text-[#000D39] text-center leading-[35px] w-[231px] font-work font-semibold ">Subscribe To Our Weekly Newsletter</div>
              <div className="text-[17px] font-normal font-work w-[288px] text-center text-[#555] leading-7 tracking-[.15%] ">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do</div>
              <input className="px-[70px] py-[6px] text-[17px] font-normal font-work text-[#8991AD] border-[1px] border-[#CFD4E4] rounded-[3px] " type="email" placeholder='Enter Email Address' />
              <button className="px-[24px] py-[6px] text-[17px] font-work font-semibold text-white bg-[#E12127] rounded-[3px] " type='submit'>Subscribes</button>
             </div>
          </div>
          </div>
        </div>
      </section>
      {/* ========== editor choice part =========== */}
      <section className="bg-[#F9FAFF] pb-[71px] pt-[57px] ">
        <div className="container">
          <div className="div">
            <div className="flex items-center  mb-[38px] gap-[10px]">
              <h2 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">Editor Choices </h2>
              <div className="w-[882px] h-[1px] bg-[#CFD4E4] "></div>
            <div className="flex items-center gap-[9px] ">
           <div className="w-[35px] h-[35px] active:bg-[#E12127] bg-[#E5E9F6] flex justify-center items-center rounded-full text-lg text-white"><IoIosArrowDropleft /></div>
           <div className="w-[35px] h-[35px] active:bg-[#E12127] bg-[#E5E9F6] flex justify-center items-center rounded-full text-lg text-white"><IoIosArrowDropright /></div>
            </div>
            </div>
            <div className="flex items-center gap-[30px]">
              <CardFour bg='bg-[#E12127]' buttonText='Fashion' title="Scent of to her to eye feedback. Perfected for with" image={<img className="w-full h-full" src='images/two.jpg' alt="img" />} />
              <CardFour bg='bg-[#10CFFA]' buttonText='Technology' title="Scent of to her to eye feedback. Perfected for with" image={<img className="w-full h-full" src='images/two.jpg' alt="img" />} />
              <CardFour bg='bg-[#5200FF]' buttonText='Travel' title="Scent of to her to eye feedback. Perfected for with" image={<img className="w-full h-full" src='images/two.jpg' alt="img" />} />
            </div>
          </div>
        </div>
      </section>
      {/* ========= More news section =============== */}
      <section className="pt-[58px] pb-[70px] ">
        <div className="container flex gap-[30px] ">
          <div className="div">
            <div className="flex items-center gap-[10px] mb-[21px] ">
               <h2 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">More News </h2>
               <div className="w-[619px] h-[1px] bg-[#CFD4E4] "></div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <CardFive buttonSize='w-[80px] ' image={<img className="w-full h-full" src='images/four.webp' alt='img' />} time='July 02, 2021' title="Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All" bg='bg-[#E12127]' buttonText='Fashion' />
              <CardFive buttonSize='w-[80px] ' image={<img className="w-full h-full" src='images/four.webp' alt='img' />} time='July 02, 2021' title="Lifestyle brings big changes inpeople lives. Are you ready?" bg='bg-[#FF005C]' buttonText='Lifestyle' />
              <CardFive buttonSize='w-[70px] ' image={<img className="w-full h-full" src='images/four.webp' alt='img' />} time='July 02, 2021' title="City of New York on a trip to Arctic Nunavut" bg='bg-[#5200FF]' buttonText='Travel' />
              <CardFive buttonSize='w-[100px] ' image={<img className="w-full h-full" src='images/four.webp' alt='img' />} time='July 02, 2021' title="Apple partnership with Microsoft helps them both take on" bg='bg-[#10CFFA]' buttonText='Technology' />
              <CardFive buttonSize='w-[70px] ' image={<img className="w-full h-full" src='images/four.webp' alt='img' />} time='July 02, 2021' title="Nancy multi Chinese business woman trying" bg='bg-[#07B404]' buttonText='Sports' />
            </div>
            <div className="mt-[70px] relative ">
              <div className="w-[770px] h-[1px] bg-[#CFD4E4] "></div>
              <button className="absolute top-[-20px] bg-white left-[50%] translate-x-[-50%]  px-[30px] py-[6px] border-[#CFD4E4] border-[1px] text-[17px] font-work font-semibold text-[#E12127] rounded-[25px] leading-7 tracking-[.15%] ">Load More</button>
            </div>
          </div>
          <div className="div">
            <div className="mb-[50px] ">
              <div className="flex items-center gap-[10px] mb-[21px] ">
                 <h2 className="text-[25px] text-[#000D39] font-work font-semibold leading-[35px] ">Categories </h2>
                 <div className="w-[230px] h-[1px] bg-[#CFD4E4] "></div>
              </div>
              <div className="flex flex-col gap-[10px] ">
                <CardSix img={ <img className="w-full h-full" src='images/nina.webp' alt='img' />} title='Technology' bg='bg-[#10CFFA]' numbers='5' />
                <CardSix img={ <img className="w-full h-full" src='images/nina.webp' alt='img' />} title='Fashion' bg='bg-[#E12127]' numbers='8' />
                <CardSix img={ <img className="w-full h-full" src='images/nina.webp' alt='img' />} title='Travel' bg='bg-[#5200FF]' numbers='4' />
                <CardSix img={ <img className="w-full h-full" src='images/nina.webp' alt='img' />} title='Lifestyle' bg='bg-[#FF005C]' numbers='6' />
                <CardSix img={ <img className="w-full h-full" src='images/nina.webp' alt='img' />} title='Sports' bg='bg-[#07B404]' numbers='4' />
              </div>
            </div>
            <div className="w-[370px] h-[570px] ">
              <img className="w-full h-full" src="images/Ads.png" alt="ad" />
            </div>
          </div>
        </div>
      </section>
      {/* ====================== Footer part ========================= */}
      <section className=" bg-[#000D39]">
        <div className="container">
          {/* ========== Subscribe section start ============ */}
          <div className="w-[608px] m-auto pt-[56px] pb-[65px]">
            <h3 className="font text-center font-semibold text-white text-[35px]">
              Subscribe For Newsletter
            </h3>
            <p className="font text-center text-white pt-[10px] pb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center">
              <input
                className="w-[608px] py-4 pl-[30px]"
                type="email"
                placeholder="Enter your email"
              />
              <button className="text-white py-[10px] px-5 bg-[#E12127] font-black rounded-[3px]">
                <IoMdPaperPlane />
              </button>
            </div>
          </div>
          {/* ========== Subscribe section end ============ */}

          <div className="w-full h-[1px] bg-white"></div>

          {/* ========== Social media section start ============ */}
          <div className="mt-[50px] flex justify-between">
            <div className="w-[270px]">
              <div className="flex gap-[5px]">
                <img src="images/Logo1.png" alt="logo" />
                <h5 className="font font-bold text-[40px] text-white">
                  News<span className="text-[#E12127]">Pro</span>
                </h5>
              </div>
              <p className="font leading-7 text-[17px] font-normal text-white pt-[42px] pb-[33px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex gap-[10px]">
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <FaTwitter />
                  </Link>
                </div>
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <FaInstagram />
                  </Link>
                </div>
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <BsYoutube />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font font-semibold text-[25px] text-white">
                Useful Link
              </h5>
              <div className="font font-normal text-[17px] leading-[35px] text-white pt-[27px]">
                <p className="hover:text-[#E12127]">Contact Us</p>
                <p className="hover:text-[#E12127]">About Us </p>
                <p className="hover:text-[#E12127]">Fox Around the World</p>
                <p className="hover:text-[#E12127]">Advertise With Us</p>
                <p className="hover:text-[#E12127]">Ad Choices</p>
                <p className="hover:text-[#E12127]">Media Relations</p>
                <p className="hover:text-[#E12127]">Compliance</p>
              </div>
            </div>
            <div>
              <h5 className="font font-semibold text-[25px] text-white">
                Top Categories
              </h5>
              <div className="font font-normal text-[17px] leading-[35px] text-white pt-[27px]">
                <p className="hover:text-[#E12127]">Fashion</p>
                <p className="hover:text-[#E12127]">Technology</p>
                <p className="hover:text-[#E12127]">Lifestyle</p>
                <p className="hover:text-[#E12127]">Travel</p>
                <p className="hover:text-[#E12127]">Travel</p>
                <p className="hover:text-[#E12127]">World</p>
                <p className="hover:text-[#E12127]">Health</p>
              </div>
            </div>
            <div>
              <h5 className="font font-semibold text-[25px] text-white">
                Latest News
              </h5>
              <div className="flex gap-[10px] pt-[41px] pb-[30px]">
                <div className="bg-slate-400 w-[100px] h-[100px] rounded-[3px]"></div>
                <div>
                  <h6 className="font font-semibold text-[15px] leading-[20px] text-[#FF005C] underline">
                    Lifestyle
                  </h6>
                  <div className="flex gap-[6px] text-white mt-1 mb-[6px]">
                    <div>
                      <FaRegClock />
                    </div>
                    <div>
                      <p className="font text-[13px] font-medium">
                        July 02, 2021
                      </p>
                    </div>
                  </div>
                  <p className="w-[177px] font font-semibold text-[17px] leading-6 text-white">
                    Brings big changes in people's lives.
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px] pb-[30px]">
                <div className="bg-slate-400 w-[100px] h-[100px] rounded-[3px]"></div>
                <div>
                  <h6 className="font font-semibold text-[15px] leading-[20px] text-[#FF005C] underline">
                    Fashion
                  </h6>
                  <div className="flex gap-[6px] text-white mt-1 mb-[6px]">
                    <div>
                      <FaRegClock />
                    </div>
                    <div>
                      <p className="font text-[13px] font-medium">
                        July 02, 2021
                      </p>
                    </div>
                  </div>
                  <p className="w-[177px] font font-semibold text-[17px] leading-6 text-white">
                    Brings big changes in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ========== Social media section start ============ */}
        </div>
        <div className="bg-[#524b6b] py-[21px] m-auto text-center font font-semibold text-[17px] leading-6 text-white">
          <p>Copyright 2021. All Right Reserved</p>
        </div>
      </section>
    </>
  )
}
