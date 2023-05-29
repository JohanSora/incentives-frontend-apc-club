import React from "react";
import { useTranslation } from "react-i18next";

const TargetInvoice = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="border rounded-2xl h-fit flex flex-col w-2/3 justify-self-center p-6 gap-6 min-w-[72.6%]">
      <div className="w-full flex text-[#333333] text-sm">
        <p className="font-bold !text-base">{t("digipoints.dFactura")}</p>
      </div>
      <div className="flex gap-6">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#FFEEED" />
          <path
            d="M29.5015 53C29.146 53.0018 28.7984 52.8951 28.5052 52.694C28.2119 52.493 27.9871 52.2073 27.8605 51.8751L25.0596 44.5915C25.0029 44.4448 24.9161 44.3115 24.8048 44.2002C24.6936 44.0889 24.5603 44.0022 24.4135 43.9454L17.1278 41.1424C16.796 41.015 16.5105 40.79 16.3091 40.497C16.1078 40.2041 16 39.857 16 39.5015C16 39.146 16.1078 38.7989 16.3091 38.5059C16.5105 38.2129 16.796 37.9879 17.1278 37.8606L24.4114 35.0596C24.5582 35.0029 24.6915 34.9161 24.8027 34.8048C24.914 34.6936 25.0008 34.5603 25.0575 34.4135L27.8605 27.1278C27.9879 26.796 28.2129 26.5105 28.5059 26.3091C28.7988 26.1078 29.146 26 29.5015 26C29.8569 26 30.2041 26.1078 30.497 26.3091C30.79 26.5105 31.015 26.796 31.1424 27.1278L33.9433 34.4114C34 34.5582 34.0868 34.6915 34.1981 34.8027C34.3093 34.914 34.4426 35.0008 34.5894 35.0575L41.8308 37.8437C42.1762 37.9717 42.4737 38.2031 42.6829 38.5062C42.8921 38.8094 43.0028 39.1697 42.9999 39.538C42.9946 39.8873 42.8845 40.227 42.684 40.513C42.4834 40.799 42.2016 41.0183 41.8751 41.1424L34.5915 43.9433C34.4447 44.0001 34.3114 44.0868 34.2002 44.1981C34.0889 44.3094 34.0021 44.4427 33.9454 44.5894L31.1424 51.8751C31.0159 52.2073 30.791 52.493 30.4977 52.694C30.2045 52.8951 29.8569 53.0018 29.5015 53Z"
            fill="#EB1000"
          />
          <path
            d="M44.5 35C44.2545 34.9999 44.0149 34.9255 43.8126 34.7865C43.6103 34.6475 43.4548 34.4504 43.3668 34.2214L41.6332 29.7157C41.6027 29.6363 41.5559 29.5642 41.4957 29.5041C41.4356 29.4439 41.3635 29.3971 41.2841 29.3666L36.7778 27.6333C36.5488 27.5451 36.352 27.3896 36.2131 27.1874C36.0743 26.9851 36 26.7455 36 26.5002C36 26.2549 36.0743 26.0154 36.2131 25.8131C36.352 25.6108 36.5488 25.4554 36.7778 25.3672L41.2841 23.6338C41.3635 23.6033 41.4356 23.5565 41.4957 23.4964C41.5559 23.4362 41.6027 23.3641 41.6332 23.2847L43.3539 18.811C43.4324 18.5994 43.5669 18.4131 43.7429 18.2718C43.9189 18.1306 44.1299 18.0397 44.3535 18.0088C44.6222 17.9763 44.894 18.0344 45.1258 18.174C45.3576 18.3135 45.5362 18.5265 45.6332 18.7791L47.3668 23.2847C47.3973 23.3641 47.4441 23.4362 47.5043 23.4964C47.5644 23.5565 47.6365 23.6033 47.7159 23.6338L52.2222 25.3672C52.4512 25.4554 52.648 25.6108 52.7868 25.8131C52.9257 26.0154 53 26.2549 53 26.5002C53 26.7455 52.9257 26.9851 52.7868 27.1874C52.648 27.3896 52.4512 27.5451 52.2222 27.6333L47.7159 29.3666C47.6365 29.3971 47.5644 29.4439 47.5043 29.5041C47.4441 29.5642 47.3973 29.6363 47.3668 29.7157L45.6332 34.2214C45.5452 34.4504 45.3897 34.6475 45.1874 34.7865C44.9851 34.9255 44.7455 34.9999 44.5 35Z"
            fill="#FFC8C5"
          />
          <path
            d="M21 29C20.7642 29 20.5339 28.9285 20.3395 28.7951C20.1451 28.6616 19.9957 28.4723 19.911 28.2523L18.5698 24.7649C18.5408 24.6887 18.4959 24.6194 18.4382 24.5617C18.3805 24.504 18.3112 24.4591 18.2349 24.43L14.7476 23.0889C14.5275 23.0041 14.3383 22.8547 14.2049 22.6603C14.0714 22.4659 14 22.2357 14 21.9999C14 21.7641 14.0714 21.5338 14.2049 21.3394C14.3383 21.145 14.5275 20.9956 14.7476 20.9109L18.2349 19.5697C18.3111 19.5405 18.3803 19.4956 18.438 19.4379C18.4957 19.3802 18.5406 19.311 18.5698 19.2348L19.8991 15.7785C19.974 15.5751 20.103 15.3959 20.2722 15.2602C20.4414 15.1245 20.6443 15.0375 20.8592 15.0085C21.1172 14.9772 21.3783 15.0328 21.6011 15.1667C21.8239 15.3006 21.9956 15.505 22.089 15.7475L23.4302 19.2348C23.4594 19.311 23.5043 19.3802 23.562 19.4379C23.6197 19.4956 23.6889 19.5405 23.7651 19.5697L27.2524 20.9109C27.4725 20.9956 27.6617 21.145 27.7951 21.3394C27.9286 21.5338 28 21.7641 28 21.9999C28 22.2357 27.9286 22.4659 27.7951 22.6603C27.6617 22.8547 27.4725 23.0041 27.2524 23.0889L23.7651 24.43C23.6888 24.4591 23.6195 24.504 23.5618 24.5617C23.5041 24.6194 23.4592 24.6887 23.4302 24.7649L22.089 28.2523C22.0043 28.4723 21.8549 28.6616 21.6605 28.7951C21.4661 28.9285 21.2358 29 21 29Z"
            fill="#FFC8C5"
          />
        </svg>
        <div className="flex flex-col justify-center gap-1">
          <p className="!text-2xl font-bold">90</p>
          <p className="!text-sm">DigiPoints</p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.31923 0.998047H3.32693C3.06223 0.998047 2.80836 1.1032 2.62119 1.29038C2.43401 1.47755 2.32886 1.73141 2.32886 1.99612V9.64802L5.32308 6.98649L8.3173 9.64802V1.99612C8.3173 1.73141 8.21215 1.47755 8.02497 1.29038C7.83779 1.1032 7.58393 0.998047 7.31923 0.998047Z"
                stroke="#1473E6"
                stroke-width="0.665382"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="!text-xs font-bold">No. de factura</p>
          </div>
          <div className="flex gap-4">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_253_632)">
                <path
                  d="M9.75 1.875H2.25C1.62868 1.875 1.125 2.37868 1.125 3V9.75C1.125 10.3713 1.62868 10.875 2.25 10.875H9.75C10.3713 10.875 10.875 10.3713 10.875 9.75V3C10.875 2.37868 10.3713 1.875 9.75 1.875Z"
                  stroke="#1473E6"
                  stroke-width="0.75"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.9375 6C7.24816 6 7.5 5.74816 7.5 5.4375C7.5 5.12684 7.24816 4.875 6.9375 4.875C6.62684 4.875 6.375 5.12684 6.375 5.4375C6.375 5.74816 6.62684 6 6.9375 6Z"
                  fill="#1473E6"
                />
                <path
                  d="M8.8125 6C9.12316 6 9.375 5.74816 9.375 5.4375C9.375 5.12684 9.12316 4.875 8.8125 4.875C8.50184 4.875 8.25 5.12684 8.25 5.4375C8.25 5.74816 8.50184 6 8.8125 6Z"
                  fill="#1473E6"
                />
                <path
                  d="M6.9375 7.875C7.24816 7.875 7.5 7.62316 7.5 7.3125C7.5 7.00184 7.24816 6.75 6.9375 6.75C6.62684 6.75 6.375 7.00184 6.375 7.3125C6.375 7.62316 6.62684 7.875 6.9375 7.875Z"
                  fill="#1473E6"
                />
                <path
                  d="M8.8125 7.875C9.12316 7.875 9.375 7.62316 9.375 7.3125C9.375 7.00184 9.12316 6.75 8.8125 6.75C8.50184 6.75 8.25 7.00184 8.25 7.3125C8.25 7.62316 8.50184 7.875 8.8125 7.875Z"
                  fill="#1473E6"
                />
                <path
                  d="M3.1875 7.875C3.49816 7.875 3.75 7.62316 3.75 7.3125C3.75 7.00184 3.49816 6.75 3.1875 6.75C2.87684 6.75 2.625 7.00184 2.625 7.3125C2.625 7.62316 2.87684 7.875 3.1875 7.875Z"
                  fill="#1473E6"
                />
                <path
                  d="M5.0625 7.875C5.37316 7.875 5.625 7.62316 5.625 7.3125C5.625 7.00184 5.37316 6.75 5.0625 6.75C4.75184 6.75 4.5 7.00184 4.5 7.3125C4.5 7.62316 4.75184 7.875 5.0625 7.875Z"
                  fill="#1473E6"
                />
                <path
                  d="M3.1875 9.75C3.49816 9.75 3.75 9.49816 3.75 9.1875C3.75 8.87684 3.49816 8.625 3.1875 8.625C2.87684 8.625 2.625 8.87684 2.625 9.1875C2.625 9.49816 2.87684 9.75 3.1875 9.75Z"
                  fill="#1473E6"
                />
                <path
                  d="M5.0625 9.75C5.37316 9.75 5.625 9.49816 5.625 9.1875C5.625 8.87684 5.37316 8.625 5.0625 8.625C4.75184 8.625 4.5 8.87684 4.5 9.1875C4.5 9.49816 4.75184 9.75 5.0625 9.75Z"
                  fill="#1473E6"
                />
                <path
                  d="M6.9375 9.75C7.24816 9.75 7.5 9.49816 7.5 9.1875C7.5 8.87684 7.24816 8.625 6.9375 8.625C6.62684 8.625 6.375 8.87684 6.375 9.1875C6.375 9.49816 6.62684 9.75 6.9375 9.75Z"
                  fill="#1473E6"
                />
                <path
                  d="M3 1.125V1.875M9 1.125V1.875"
                  stroke="#1473E6"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.875 3.75H1.125"
                  stroke="#1473E6"
                  stroke-width="0.75"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_253_632">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="!text-xs font-bold">Fecha</p>
          </div>
          <div className="flex gap-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.07934 1.31254C3.88066 1.26934 1.26934 3.88067 1.31254 7.07934C1.3552 10.147 3.85305 12.6449 6.92074 12.6875C10.12 12.7313 12.7307 10.12 12.687 6.92129C12.6449 3.85305 10.147 1.3552 7.07934 1.31254ZM10.5361 10.2608C10.5252 10.2726 10.5119 10.2818 10.497 10.2878C10.4822 10.2939 10.4662 10.2966 10.4501 10.2958C10.4341 10.2949 10.4185 10.2906 10.4043 10.283C10.3902 10.2755 10.3779 10.2649 10.3682 10.252C10.1237 9.93204 9.82415 9.65808 9.48367 9.44293C8.7875 8.99613 7.90539 8.75004 7.00004 8.75004C6.09469 8.75004 5.21258 8.99613 4.51641 9.44293C4.17594 9.65798 3.87642 9.93185 3.63184 10.2518C3.62223 10.2646 3.60991 10.2752 3.59576 10.2827C3.5816 10.2903 3.56596 10.2946 3.54994 10.2955C3.53392 10.2963 3.51791 10.2936 3.50305 10.2876C3.48819 10.2815 3.47484 10.2723 3.46395 10.2605C2.66159 9.39436 2.20709 8.26258 2.18754 7.08207C2.14297 4.42125 4.32637 2.1941 6.98828 2.18754C9.6502 2.18098 11.8125 4.3425 11.8125 7.00004C11.8135 8.20902 11.3575 9.3737 10.5361 10.2608Z"
                fill="#1473E6"
              />
              <path
                d="M6.99994 3.9375C6.46072 3.9375 5.97318 4.13957 5.62673 4.5068C5.28029 4.87402 5.1072 5.3818 5.1463 5.92676C5.2256 7 6.05712 7.875 6.99994 7.875C7.94275 7.875 8.77263 7 8.85357 5.92703C8.89404 5.38727 8.72232 4.88414 8.37013 4.51008C8.02232 4.14094 7.5356 3.9375 6.99994 3.9375Z"
                fill="#1473E6"
              />
            </svg>

            <p className="!text-xs font-bold">Cliente</p>
          </div>
          <div className="flex gap-4">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_253_648)">
                <path
                  d="M9.53906 3H4.33594C3.59812 3 3 3.59812 3 4.33594V9.53906C3 10.2769 3.59812 10.875 4.33594 10.875H9.53906C10.2769 10.875 10.875 10.2769 10.875 9.53906V4.33594C10.875 3.59812 10.2769 3 9.53906 3Z"
                  stroke="#1473E6"
                  stroke-width="0.75"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.98828 3L9 2.4375C8.99901 2.08971 8.86041 1.75644 8.61448 1.51052C8.36856 1.26459 8.03529 1.12599 7.6875 1.125H2.625C2.22754 1.12617 1.84669 1.28459 1.56564 1.56564C1.28459 1.84669 1.12617 2.22754 1.125 2.625V7.6875C1.12599 8.03529 1.26459 8.36856 1.51052 8.61448C1.75644 8.86041 2.08971 8.99901 2.4375 9H3"
                  stroke="#1473E6"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_253_648">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="!text-xs font-bold">Cantidad de sillas</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="!text-xs">123456</p>
          <p className="!text-xs">11/11/2011</p>
          <p className="!text-xs">Universidad Santo Tomas</p>
          <p className="!text-xs">200</p>
        </div>
      </div>
    </div>
  );
};

export default TargetInvoice;
