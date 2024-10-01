import HeaderComponent from "./common/headers"; 
import FooterComponent from "./common/FooterComponent";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from 'next/image'
export default function FirstPost() {
  return (
    <>
      <div className="m-0 space-y-0 w-full h-full">
        <div>
          <HeaderComponent />
        </div>
        <div className=" flex justify-center px-6 sm:px-12 md:px-24 lg:px-48 gap-3  sm:mt-40 md:mt-60 lg:mt-80 flex-col bg-hero-image  w-full min-h-screen  scroll={false} pt-52">
          <h1 className="text-stone-950 text-xl  sm:text-2xl md:text-3xl font-medium text-center md:text-left ">
            Eat Green Be Healthy
          </h1>
          <div className="flex justify-center md:justify-start items-center md:items-start">
            <p className="text-stone-950 text-sm sm:text-base md:text-lg">
              Enables you to acquire a variety of high quality
              <br />
              fruits and vegetables, grown in Bhutan’s rich
              <br />
              soils which is best  in the world.
            </p>
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-20 sm:mt-84 w-full flex-col gap-11"
          id="first-section"
        >
          <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium">
            About us
          </h1>
          <div className="flex justify-center items-center gap-10">
            <div className="flex justify-center items-center gap-4">
              <div className="rounded-b border-b-green-800 w-96 h-96 shadow-2xl relative z-0 top-1">
                <div className="absolute inset-0 flex-col text-center items-center w-80 h-80 bg-white z-10">
                  <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium pt-5">
                    Service
                  </h1>

                  <p className="text-stone-950 text-xl font-medium pt-5 text-center leading-relaxed">
                    We proudly offer a variety <br />
                    of locally sourced vegetables <br />
                    straight from our village, <br />
                    ensuring freshness and quality <br />
                    in every bite.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="rounded-b border-b-green-800 w-96 h-96 shadow-2xl relative z-0 top-1">
                <div className="absolute inset-0 flex   flex-col items-center text-center  w-80 h-80 bg-white z-10 gap-5">
                  <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium pt-5">
                    Contact Details
                  </h1>
                  <div className="flex  justify-start items-center w-full gap-7 mt-4">
                    <MapPin color="#27c439 " size={32} className="ml-5" />
                    <h2 className="text-stone-950 text-xl sm:text-xl md:text-xl font-medium ">
                      Babesa
                    </h2>
                  </div>
                  <div className="flex  justify-start items-center w-full gap-7 mt-4">
                    <Phone color="#27c439 " size={32} className="ml-5" />
                    <h2 className="text-stone-950 text-xl sm:text-xl md:text-xl font-medium ">
                      17800571
                    </h2>
                  </div>
                  <div className="flex  justify-start items-center w-full gap-7 mt-4">
                    <Mail color="#27c439 " size={45} className="ml-5" />
                    <p className="text-stone-950 text-xl sm:text-xl md:text-xl  font-medium ">
                      ranamaya17800@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6">
              <div className="rounded-b border-b-green-800 w-96 h-96 shadow-2xl relative z-0 top-1">
                <div className="absolute inset-0 flex-col text-center items-center w-80 h-80 bg-white z-10 gap-5">
                  <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium pt-5">
                    Social Media
                  </h1>

                  <div className="flex w-full justify-center  mt-16 gap-16 ">
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center gap-8 rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300 ml-5"
                    >
                      <svg
                        className="transition-all duration-300 group-hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                          fill="#337FFF"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300"
                    >
                      <svg
                        className="transition-all duration-300 group-hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 71 72"
                        fill="none"
                      >
                        <path
                          d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
                          fill="#00D95F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
                          fill="#00D95F"
                        />
                      </svg>
                    </a>

                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                      <svg
                        className="transition-all duration-300 group-hover:scale-110"
                        width="28"
                        height="28"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M45.6721 29.4285C48.7387 31.6085 52.4112 32.7733 56.1737 32.7592V25.3024C55.434 25.3045 54.6963 25.2253 53.9739 25.0663V31.0068C50.203 31.0135 46.5252 29.8354 43.4599 27.6389V42.9749C43.4507 45.4914 42.7606 47.9585 41.4628 50.1146C40.165 52.2706 38.3079 54.0353 36.0885 55.2215C33.8691 56.4076 31.37 56.9711 28.8563 56.852C26.3426 56.733 23.9079 55.9359 21.8105 54.5453C23.7506 56.5082 26.2295 57.8513 28.9333 58.4044C31.6372 58.9576 34.4444 58.6959 36.9994 57.6526C39.5545 56.6093 41.7425 54.8312 43.2864 52.5436C44.8302 50.256 45.6605 47.5616 45.6721 44.8018V29.4285ZM48.3938 21.8226C46.8343 20.1323 45.8775 17.9739 45.6721 15.6832V14.7139H43.5842C43.8423 16.1699 44.4039 17.5553 45.2326 18.78C46.0612 20.0048 47.1383 21.0414 48.3938 21.8226ZM26.645 48.642C25.9213 47.6957 25.4779 46.5653 25.365 45.3793C25.2522 44.1934 25.4746 42.9996 26.0068 41.9338C26.5391 40.8681 27.3598 39.9731 28.3757 39.3508C29.3915 38.7285 30.5616 38.4039 31.7529 38.4139C32.4106 38.4137 33.0644 38.5143 33.6916 38.7121V31.0068C32.9584 30.9097 32.2189 30.8682 31.4794 30.8826V36.8728C29.9522 36.39 28.2992 36.4998 26.8492 37.1803C25.3992 37.8608 24.2585 39.0621 23.6539 40.5454C23.0494 42.0286 23.0252 43.6851 23.5864 45.1853C24.1475 46.6855 25.2527 47.9196 26.6823 48.642H26.645Z"
                          fill="#EE1D52"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M43.4589 27.5892C46.5241 29.7857 50.2019 30.9638 53.9729 30.9571V25.0166C51.8243 24.5623 49.8726 23.4452 48.3927 21.8226C47.1372 21.0414 46.0601 20.0048 45.2315 18.78C44.4029 17.5553 43.8412 16.1699 43.5831 14.7139H38.09V44.8018C38.0849 46.1336 37.6629 47.4304 36.8831 48.51C36.1034 49.5897 35.0051 50.3981 33.7425 50.8217C32.4798 51.2453 31.1162 51.2629 29.8431 50.872C28.57 50.4811 27.4512 49.7012 26.6439 48.642C25.3645 47.9965 24.3399 46.9387 23.7354 45.6394C23.1309 44.3401 22.9818 42.875 23.3121 41.4805C23.6424 40.0861 24.4329 38.8435 25.556 37.9535C26.6791 37.0634 28.0693 36.5776 29.5023 36.5745C30.1599 36.5766 30.8134 36.6772 31.4411 36.8728V30.8826C28.7288 30.9477 26.0946 31.8033 23.8617 33.3444C21.6289 34.8855 19.8946 37.0451 18.8717 39.5579C17.8489 42.0708 17.5821 44.8276 18.1039 47.49C18.6258 50.1524 19.9137 52.6045 21.8095 54.5453C23.9073 55.9459 26.3458 56.7512 28.8651 56.8755C31.3845 56.9997 33.8904 56.4383 36.1158 55.2509C38.3413 54.0636 40.2031 52.2948 41.5027 50.133C42.8024 47.9712 43.4913 45.4973 43.4962 42.9749L43.4589 27.5892Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M53.9736 25.0161V23.4129C52.0005 23.4213 50.0655 22.8696 48.3934 21.8221C49.8695 23.4493 51.8229 24.5674 53.9736 25.0161ZM43.5838 14.7134C43.5838 14.4275 43.4968 14.1292 43.4596 13.8434V12.874H35.8785V42.9744C35.872 44.6598 35.197 46.2738 34.0017 47.4621C32.8064 48.6504 31.1885 49.3159 29.503 49.3126C28.5106 49.3176 27.5311 49.0876 26.6446 48.6415C27.4519 49.7007 28.5707 50.4805 29.8438 50.8715C31.1169 51.2624 32.4805 51.2448 33.7432 50.8212C35.0058 50.3976 36.1041 49.5892 36.8838 48.5095C37.6636 47.4298 38.0856 46.1331 38.0907 44.8013V14.7134H43.5838ZM31.4418 30.8696V29.167C28.3222 28.7432 25.1511 29.3885 22.4453 30.9977C19.7394 32.6069 17.6584 35.0851 16.5413 38.0284C15.4242 40.9718 15.337 44.2067 16.2938 47.206C17.2506 50.2053 19.195 52.792 21.8102 54.5448C19.9287 52.5995 18.6545 50.1484 18.1433 47.4908C17.6321 44.8333 17.906 42.0844 18.9315 39.5799C19.957 37.0755 21.6897 34.924 23.918 33.3882C26.1463 31.8524 28.7736 30.9988 31.4791 30.9318L31.4418 30.8696Z"
                          fill="#69C9D0"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
      <div className="flex justify-center items-center flex-col  mt-12 gap-5"  id="second-section">
          <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium ">
            Products
          </h1>
          <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium ">Fruits</h1>
          <div className="grid grid-cols-4 gap-5 gap-x-7 ">
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>

          </div>
          <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium ">Vegetables</h1>
          <div className="grid grid-cols-4 gap-5 gap-x-7 ">
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>

          </div>
          <h1 className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium ">Greens</h1>
          <div className="grid grid-cols-4 gap-5 gap-x-7 ">
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>
            <div className="flex justify-start items-center flex-col mt-6">
            <label className="text-stone-950 text-xl sm:text-2xl md:text-3xl font-medium  "  >Grapes</label>
            <Image  src="/grapes.png" alt="image description" width={384}  height={384} />
            </div>

          </div>
          


        </div>
   
      <div className="w-full h-[250px] mt-14 flex justify-evenly bg-header">
        <FooterComponent/>
      </div>
        

        
    </>
  );
}
