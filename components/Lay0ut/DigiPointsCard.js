import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { userBlockCatalogo } from "../../block/UsersBlockCatalogo";

const DigiPointsCard = ({ digipoints }) => {
  const user = useSelector((state) => state.user.user);
  const [t, i18n] = useTranslation("global");
  const router = useRouter();
  const whiteListDist = [
    "1472188",
    "1654070",
    "13595",
    "901502",
    "19472",
    "1454183",
    "1471126",
  ];

  console.log(user);

  return (
    <div className="flex px-3 py-3.5 bg-base-100 border-[1px] border-[#E0E0E0] rounded-[10px] w-full">
      <div className="flex flex-col w-full gap-6">
        <div className="flex gap-3 items-center">
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="21.5" cy="21.5" r="21.5" fill="#FFEEED" />
            <path
              d="M20.001 36C19.764 36.0012 19.5323 35.93 19.3368 35.796C19.1413 35.662 18.9914 35.4716 18.907 35.2501L17.0397 30.3944C17.0019 30.2965 16.9441 30.2076 16.8699 30.1335C16.7957 30.0593 16.7068 30.0014 16.609 29.9636L11.7519 28.0949C11.5306 28.01 11.3403 27.86 11.2061 27.6647C11.0719 27.4694 11 27.238 11 27.001C11 26.764 11.0719 26.5326 11.2061 26.3373C11.3403 26.142 11.5306 25.992 11.7519 25.907L16.6076 24.0397C16.7054 24.0019 16.7943 23.9441 16.8685 23.8699C16.9427 23.7957 17.0005 23.7069 17.0383 23.609L18.907 18.7519C18.9919 18.5306 19.142 18.3403 19.3373 18.2061C19.5326 18.0719 19.764 18 20.001 18C20.238 18 20.4694 18.0719 20.6647 18.2061C20.86 18.3403 21.01 18.5306 21.0949 18.7519L22.9622 23.6076C23 23.7055 23.0579 23.7943 23.132 23.8685C23.2062 23.9427 23.2951 24.0005 23.3929 24.0383L28.2205 25.8958C28.4508 25.9811 28.6491 26.1354 28.7886 26.3375C28.9281 26.5396 29.0019 26.7798 29 27.0254C28.9964 27.2582 28.923 27.4846 28.7893 27.6753C28.6556 27.866 28.4677 28.0122 28.25 28.0949L23.3943 29.9622C23.2965 30 23.2076 30.0579 23.1335 30.1321C23.0593 30.2062 23.0014 30.2951 22.9636 30.3929L21.0949 35.2501C21.0106 35.4716 20.8606 35.662 20.6652 35.796C20.4697 35.93 20.238 36.0012 20.001 36Z"
              fill="#EB1000"
            />
            <path
              d="M30 24C29.8267 23.9999 29.6576 23.9474 29.5148 23.8493C29.372 23.7512 29.2622 23.6121 29.2001 23.4504L27.9764 20.2699C27.9548 20.2139 27.9218 20.163 27.8793 20.1205C27.8369 20.0781 27.786 20.045 27.7299 20.0235L24.549 18.8C24.3874 18.7377 24.2485 18.628 24.1505 18.4852C24.0525 18.3424 24 18.1733 24 18.0002C24 17.827 24.0525 17.6579 24.1505 17.5151C24.2485 17.3724 24.3874 17.2626 24.549 17.2004L27.7299 15.9768C27.786 15.9553 27.8369 15.9222 27.8793 15.8798C27.9218 15.8373 27.9548 15.7864 27.9764 15.7304L29.191 12.5724C29.2464 12.4231 29.3413 12.2916 29.4656 12.1919C29.5898 12.0922 29.7388 12.028 29.8966 12.0062C30.0862 11.9833 30.2781 12.0243 30.4417 12.1228C30.6054 12.2213 30.7315 12.3716 30.7999 12.5499L32.0236 15.7304C32.0452 15.7864 32.0782 15.8373 32.1207 15.8798C32.1631 15.9222 32.214 15.9553 32.2701 15.9768L35.451 17.2004C35.6126 17.2626 35.7515 17.3724 35.8495 17.5151C35.9475 17.6579 36 17.827 36 18.0002C36 18.1733 35.9475 18.3424 35.8495 18.4852C35.7515 18.628 35.6126 18.7377 35.451 18.8L32.2701 20.0235C32.214 20.045 32.1631 20.0781 32.1207 20.1205C32.0782 20.163 32.0452 20.2139 32.0236 20.2699L30.7999 23.4504C30.7378 23.6121 30.628 23.7512 30.4852 23.8493C30.3424 23.9474 30.1733 23.9999 30 24Z"
              fill="#FFC8C5"
            />
            <path
              d="M14.5 19C14.3484 19 14.2004 18.9541 14.0754 18.8682C13.9504 18.7824 13.8544 18.6608 13.7999 18.5193L12.9378 16.2775C12.9191 16.2284 12.8902 16.1839 12.8531 16.1468C12.816 16.1097 12.7715 16.0809 12.7225 16.0622L10.4806 15.2C10.3391 15.1455 10.2175 15.0495 10.1317 14.9245C10.0459 14.7995 10 14.6515 10 14.4999C10 14.3483 10.0459 14.2003 10.1317 14.0754C10.2175 13.9504 10.3391 13.8543 10.4806 13.7999L12.7225 12.9377C12.7714 12.9189 12.8159 12.89 12.853 12.853C12.8901 12.8159 12.919 12.7714 12.9378 12.7224L13.7923 10.5005C13.8404 10.3697 13.9234 10.2545 14.0321 10.1673C14.1409 10.0801 14.2713 10.0241 14.4095 10.0055C14.5754 9.98532 14.7432 10.0211 14.8864 10.1072C15.0296 10.1932 15.14 10.3246 15.2001 10.4805L16.0623 12.7224C16.081 12.7714 16.1099 12.8159 16.147 12.853C16.1841 12.89 16.2286 12.9189 16.2775 12.9377L18.5194 13.7999C18.6609 13.8543 18.7825 13.9504 18.8683 14.0754C18.9541 14.2003 19 14.3483 19 14.4999C19 14.6515 18.9541 14.7995 18.8683 14.9245C18.7825 15.0495 18.6609 15.1455 18.5194 15.2L16.2775 16.0622C16.2285 16.0809 16.184 16.1097 16.1469 16.1468C16.1098 16.1839 16.0809 16.2284 16.0623 16.2775L15.2001 18.5193C15.1456 18.6608 15.0496 18.7824 14.9246 18.8682C14.7996 18.9541 14.6516 19 14.5 19Z"
              fill="#FFC8C5"
            />
          </svg>
          <div>
            <p className="!text-xl font-bold">
              {typeof digipoints?.assigned_points !== "undefined" &&
              typeof digipoints?.cart_points !== "undefined"
                ? digipoints?.assigned_points - digipoints?.cart_points
                : typeof digipoints?.assigned_points !== "undefined"
                ? digipoints?.assigned_points
                : 0}
            </p>
            <p className="text-[9.5px] 2xl:text-xs whitespace-nowrap">
              {t("dashboard.dpObtenidos")}
            </p>
          </div>
        </div>
        {user?.distributionChannelId === null ||
          whiteListDist.includes(user?.distributionChannel?.soldToParty) ||
          (!userBlockCatalogo.includes(user.email) && (
            <button
              className="btn btn-info !btn-outline w-full whitespace-nowrap min-h-[2.563rem] h-[2.563rem]"
              onClick={() => {
                router.push("/catalogo");
              }}
            >
              {t("menu.vercatalogo")}
            </button>
          ))}
      </div>
    </div>
  );
};

export default DigiPointsCard;
