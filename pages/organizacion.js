import { useState } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Información from "../components/canal/información";
import Participantes from "../components/canal/participantes";
import Puntos from "../components/canal/puntos";
import Redenciones from "../components/canal/redenciones";
import ContainerContent from "../components/containerContent";
import TableUsersOrganization from "../components/organizacion/TableUsersOrganization";

const organizacion = () => {
  const [oneSection, setOneSection] = useState(0);
  const user = useSelector((state) => state.user.user);
  const [t, i18n] = useTranslation("global");
  const company =
    user.company === null ? user.distributionChannel : user.company;

  const objects = [
    {
      svg: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.44453 4.45832H10.5556C10.5575 4.45832 10.5594 4.45832 10.5613 4.45832C10.5808 4.45833 10.6047 4.45835 10.627 4.45737C11.145 4.43475 11.5598 4.01995 11.5825 3.50194C11.5834 3.47959 11.5834 3.45576 11.5834 3.43618C11.5834 3.43426 11.5834 3.43238 11.5834 3.43055C11.5834 3.4298 11.5834 3.42893 11.5834 3.42796C11.5834 3.41903 11.5835 3.40117 11.5827 3.38394C11.5657 2.99543 11.2546 2.68433 10.8661 2.66737C10.8489 2.66662 10.831 2.66664 10.8221 2.66665C10.8211 2.66666 10.8203 2.66666 10.8195 2.66666H8.18064C8.17989 2.66666 8.17902 2.66666 8.17805 2.66665C8.16912 2.66664 8.15126 2.66662 8.13403 2.66737C7.74553 2.68433 7.43442 2.99543 7.41746 3.38394C7.41671 3.40117 7.41673 3.41903 7.41675 3.42796C7.41675 3.42893 7.41675 3.4298 7.41675 3.43055C7.41675 3.43238 7.41675 3.43426 7.41675 3.43619C7.41674 3.45576 7.41672 3.47959 7.4177 3.50194C7.44032 4.01995 7.85512 4.43475 8.37313 4.45737C8.39548 4.45835 8.41931 4.45833 8.43889 4.45832C8.44081 4.45832 8.44269 4.45832 8.44453 4.45832Z"
            stroke="#1473E6"
          />
          <rect
            x="4.75"
            y="2.375"
            width="9.5"
            height="14.25"
            rx="2"
            stroke="#1473E6"
          />
          <ellipse
            cx="9.49992"
            cy="14.25"
            rx="0.791667"
            ry="0.791667"
            fill="#1473E6"
          />
        </svg>
      ),
      text: user.phoneNumber,
    },
    {
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3017 1.6875H10.981C10.8467 1.6874 10.7177 1.74049 10.6224 1.83516L1.98452 10.473C1.79539 10.6631 1.68921 10.9203 1.68921 11.1885C1.68921 11.4566 1.79539 11.7138 1.98452 11.9039L6.09781 16.0172C6.28787 16.2063 6.5451 16.3125 6.81324 16.3125C7.08137 16.3125 7.3386 16.2063 7.52866 16.0172L16.163 7.38281C16.2577 7.28749 16.3108 7.15857 16.3107 7.02422V2.7C16.3113 2.56715 16.2857 2.43549 16.2353 2.31258C16.1849 2.18967 16.1106 2.07796 16.0168 1.98385C15.9231 1.88975 15.8116 1.81512 15.6889 1.76426C15.5661 1.7134 15.4346 1.68731 15.3017 1.6875Z"
            stroke="#1473E6"
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 5.62497C13.2775 5.62497 13.06 5.55899 12.875 5.43537C12.69 5.31176 12.5458 5.13606 12.4606 4.93049C12.3755 4.72492 12.3532 4.49872 12.3966 4.28049C12.44 4.06226 12.5472 3.86181 12.7045 3.70447C12.8618 3.54714 13.0623 3.43999 13.2805 3.39659C13.4988 3.35318 13.725 3.37546 13.9305 3.46061C14.1361 3.54575 14.3118 3.68995 14.4354 3.87495C14.559 4.05996 14.625 4.27747 14.625 4.49997C14.625 4.79834 14.5065 5.08449 14.2955 5.29547C14.0845 5.50644 13.7984 5.62497 13.5 5.62497Z"
            fill="#1473E6"
          />
        </svg>
      ),
      text: !company.soldToParty ? "Gold" : "Distribuitor",
    },
    {
      svg: (
        <svg
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2 1H2.8C1.80589 1 1 1.81548 1 2.82143V16.1786C1 17.1845 1.80589 18 2.8 18H11.2C12.1941 18 13 17.1845 13 16.1786V2.82143C13 1.81548 12.1941 1 11.2 1Z"
            stroke="#1473E6"
            stroke-width="1.25"
            stroke-linejoin="round"
          />
          <path
            d="M5 3H9"
            stroke="#1473E6"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.1052 10.4977C9.96374 10.3378 9.79237 10.211 9.60207 10.1253C9.41176 10.0396 9.20671 9.99701 9 10.0002C8.56511 10.0002 8.17184 10.1756 7.89253 10.4945C7.61323 10.8135 7.47264 11.255 7.50488 11.7274C7.56899 12.6613 8.23969 13.4205 9 13.4205C9.76031 13.4205 10.4299 12.6613 10.4947 11.7282C10.5277 11.2597 10.389 10.8226 10.1052 10.4977ZM11.5377 16.9999H6.46227C6.3962 17.0011 6.3307 16.9868 6.27039 16.9581C6.21009 16.9295 6.15644 16.8871 6.11324 16.8341C6.06639 16.7746 6.03277 16.7046 6.01486 16.6294C5.99695 16.5543 5.99521 16.4758 6.00976 16.3998C6.13161 15.7014 6.51138 15.1148 7.10823 14.7031C7.63835 14.3376 8.31018 14.1364 9 14.1364C9.68982 14.1364 10.3617 14.3376 10.8918 14.7031C11.4886 15.1148 11.8684 15.7014 11.9902 16.3998C12.0048 16.4758 12.0031 16.5543 11.9851 16.6294C11.9672 16.7046 11.9336 16.7746 11.8868 16.8341C11.8436 16.8871 11.7899 16.9295 11.7296 16.9581C11.6693 16.9868 11.6038 17.0011 11.5377 16.9999Z"
            fill="#1473E6"
          />
        </svg>
      ),
      text: company.soldToParty || company.resellerMasterId,
    },
  ];

  const section = useMemo(() => {
    if (oneSection === 0) {
      return <Participantes />;
    }
    if (oneSection === 1) {
      return <Puntos />;
    }
    if (oneSection === 2) {
      return <Redenciones />;
    }
    if (oneSection === 3) {
      return <Información />;
    }
  }, [oneSection]);

  return (
    <>
      <ContainerContent pageTitle={t("menu.Participantes")} style>
        <div className="flex flex-col">
          <div className="shadow-xl w-full px-6 py-10 flex gap-6 rounded-lg">
            <div>
              <svg
                width="112"
                height="112"
                viewBox="0 0 112 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56Z"
                  fill="#FFEEED"
                />
                <path
                  d="M77.75 48.15H63.4V33.8C63.4 32.1689 62.7521 30.6047 61.5987 29.4513C60.4454 28.298 58.8811 27.65 57.25 27.65H32.65C31.0189 27.65 29.4546 28.298 28.3013 29.4513C27.1479 30.6047 26.5 32.1689 26.5 33.8V87.1C26.5 87.6437 26.716 88.1652 27.1004 88.5496C27.4849 88.9341 28.0063 89.15 28.55 89.15H41.875C42.1468 89.15 42.4076 89.042 42.5998 88.8498C42.792 88.6576 42.9 88.3969 42.9 88.125V78.9577C42.9 77.8545 43.7482 76.9077 44.8513 76.8526C45.1285 76.8392 45.4055 76.8823 45.6656 76.9792C45.9256 77.076 46.1633 77.2247 46.3642 77.4161C46.5651 77.6075 46.725 77.8378 46.8343 78.0928C46.9436 78.3479 47 78.6225 47 78.9V88.125C47 88.3969 47.108 88.6576 47.3002 88.8498C47.4924 89.042 47.7532 89.15 48.025 89.15H81.85C82.3937 89.15 82.9151 88.9341 83.2996 88.5496C83.684 88.1652 83.9 87.6437 83.9 87.1V54.3C83.9 52.6689 83.2521 51.1047 82.0987 49.9513C80.9454 48.798 79.3811 48.15 77.75 48.15ZM34.9665 80.9334C34.5419 80.9889 34.1106 80.9101 33.7331 80.708C33.3556 80.5059 33.0509 80.1907 32.8617 79.8066C32.6725 79.4225 32.6083 78.9888 32.6781 78.5663C32.7479 78.1439 32.9483 77.7539 33.2511 77.4511C33.5539 77.1483 33.9438 76.948 34.3663 76.8781C34.7887 76.8083 35.2225 76.8725 35.6066 77.0617C35.9907 77.2509 36.3059 77.5557 36.508 77.9332C36.7101 78.3107 36.7889 78.742 36.7333 79.1665C36.6747 79.6146 36.4697 80.0307 36.1502 80.3503C35.8307 80.6698 35.4146 80.8748 34.9665 80.9334ZM34.9665 70.6834C34.5419 70.7389 34.1106 70.6601 33.7331 70.458C33.3556 70.2559 33.0509 69.9407 32.8617 69.5566C32.6725 69.1725 32.6083 68.7388 32.6781 68.3163C32.7479 67.8939 32.9483 67.5039 33.2511 67.2011C33.5539 66.8983 33.9438 66.698 34.3663 66.6281C34.7887 66.5583 35.2225 66.6225 35.6066 66.8117C35.9907 67.0009 36.3059 67.3057 36.508 67.6832C36.7101 68.0607 36.7889 68.492 36.7333 68.9165C36.6747 69.3646 36.4697 69.7807 36.1502 70.1003C35.8307 70.4198 35.4146 70.6248 34.9665 70.6834ZM34.9665 60.4334C34.5419 60.4889 34.1106 60.4101 33.7331 60.208C33.3556 60.0059 33.0509 59.6907 32.8617 59.3066C32.6725 58.9225 32.6083 58.4888 32.6781 58.0663C32.7479 57.6439 32.9483 57.2539 33.2511 56.9511C33.5539 56.6483 33.9438 56.448 34.3663 56.3781C34.7887 56.3083 35.2225 56.3725 35.6066 56.5617C35.9907 56.7509 36.3059 57.0557 36.508 57.4332C36.7101 57.8107 36.7889 58.242 36.7333 58.6665C36.6747 59.1146 36.4697 59.5307 36.1502 59.8503C35.8307 60.1698 35.4146 60.3748 34.9665 60.4334ZM34.9665 50.1834C34.5419 50.2389 34.1106 50.1601 33.7331 49.958C33.3556 49.7559 33.0509 49.4407 32.8617 49.0566C32.6725 48.6725 32.6083 48.2388 32.6781 47.8163C32.7479 47.3939 32.9483 47.0039 33.2511 46.7011C33.5539 46.3983 33.9438 46.198 34.3663 46.1281C34.7887 46.0583 35.2225 46.1225 35.6066 46.3117C35.9907 46.5009 36.3059 46.8057 36.508 47.1832C36.7101 47.5607 36.7889 47.992 36.7333 48.4165C36.6747 48.8646 36.4697 49.2807 36.1502 49.6003C35.8307 49.9198 35.4146 50.1248 34.9665 50.1834ZM34.9665 39.9334C34.5419 39.9889 34.1106 39.9101 33.7331 39.708C33.3556 39.5059 33.0509 39.1907 32.8617 38.8066C32.6725 38.4225 32.6083 37.9888 32.6781 37.5663C32.7479 37.1439 32.9483 36.7539 33.2511 36.4511C33.5539 36.1483 33.9438 35.948 34.3663 35.8781C34.7887 35.8083 35.2225 35.8725 35.6066 36.0617C35.9907 36.2509 36.3059 36.5557 36.508 36.9332C36.7101 37.3107 36.7889 37.742 36.7333 38.1665C36.6747 38.6146 36.4697 39.0307 36.1502 39.3502C35.8307 39.6698 35.4146 39.8748 34.9665 39.9334ZM45.2165 70.6834C44.7919 70.7389 44.3606 70.6601 43.9831 70.458C43.6056 70.2559 43.3009 69.9407 43.1117 69.5566C42.9225 69.1725 42.8583 68.7388 42.9281 68.3163C42.9979 67.8939 43.1983 67.5039 43.5011 67.2011C43.8039 66.8983 44.1938 66.698 44.6163 66.6281C45.0387 66.5583 45.4725 66.6225 45.8566 66.8117C46.2407 67.0009 46.5559 67.3057 46.758 67.6832C46.9601 68.0607 47.0389 68.492 46.9833 68.9165C46.9247 69.3646 46.7197 69.7807 46.4002 70.1003C46.0807 70.4198 45.6646 70.6248 45.2165 70.6834ZM45.2165 60.4334C44.7919 60.4889 44.3606 60.4101 43.9831 60.208C43.6056 60.0059 43.3009 59.6907 43.1117 59.3066C42.9225 58.9225 42.8583 58.4888 42.9281 58.0663C42.9979 57.6439 43.1983 57.2539 43.5011 56.9511C43.8039 56.6483 44.1938 56.448 44.6163 56.3781C45.0387 56.3083 45.4725 56.3725 45.8566 56.5617C46.2407 56.7509 46.5559 57.0557 46.758 57.4332C46.9601 57.8107 47.0389 58.242 46.9833 58.6665C46.9247 59.1146 46.7197 59.5307 46.4002 59.8503C46.0807 60.1698 45.6646 60.3748 45.2165 60.4334ZM45.2165 50.1834C44.7919 50.2389 44.3606 50.1601 43.9831 49.958C43.6056 49.7559 43.3009 49.4407 43.1117 49.0566C42.9225 48.6725 42.8583 48.2388 42.9281 47.8163C42.9979 47.3939 43.1983 47.0039 43.5011 46.7011C43.8039 46.3983 44.1938 46.198 44.6163 46.1281C45.0387 46.0583 45.4725 46.1225 45.8566 46.3117C46.2407 46.5009 46.5559 46.8057 46.758 47.1832C46.9601 47.5607 47.0389 47.992 46.9833 48.4165C46.9247 48.8646 46.7197 49.2807 46.4002 49.6003C46.0807 49.9198 45.6646 50.1248 45.2165 50.1834ZM45.2165 39.9334C44.7919 39.9889 44.3606 39.9101 43.9831 39.708C43.6056 39.5059 43.3009 39.1907 43.1117 38.8066C42.9225 38.4225 42.8583 37.9888 42.9281 37.5663C42.9979 37.1439 43.1983 36.7539 43.5011 36.4511C43.8039 36.1483 44.1938 35.948 44.6163 35.8781C45.0387 35.8083 45.4725 35.8725 45.8566 36.0617C46.2407 36.2509 46.5559 36.5557 46.758 36.9332C46.9601 37.3107 47.0389 37.742 46.9833 38.1665C46.9247 38.6146 46.7197 39.0307 46.4002 39.3502C46.0807 39.6698 45.6646 39.8748 45.2165 39.9334ZM55.4665 80.9334C55.0419 80.9889 54.6106 80.9101 54.2331 80.708C53.8556 80.5059 53.5509 80.1907 53.3617 79.8066C53.1725 79.4225 53.1083 78.9888 53.1781 78.5663C53.248 78.1439 53.4483 77.7539 53.7511 77.4511C54.0539 77.1483 54.4438 76.948 54.8663 76.8781C55.2887 76.8083 55.7225 76.8725 56.1066 77.0617C56.4907 77.2509 56.8059 77.5557 57.008 77.9332C57.2101 78.3107 57.2889 78.742 57.2333 79.1665C57.1747 79.6146 56.9698 80.0307 56.6502 80.3503C56.3307 80.6698 55.9146 80.8748 55.4665 80.9334ZM55.4665 70.6834C55.0419 70.7389 54.6106 70.6601 54.2331 70.458C53.8556 70.2559 53.5509 69.9407 53.3617 69.5566C53.1725 69.1725 53.1083 68.7388 53.1781 68.3163C53.248 67.8939 53.4483 67.5039 53.7511 67.2011C54.0539 66.8983 54.4438 66.698 54.8663 66.6281C55.2887 66.5583 55.7225 66.6225 56.1066 66.8117C56.4907 67.0009 56.8059 67.3057 57.008 67.6832C57.2101 68.0607 57.2889 68.492 57.2333 68.9165C57.1747 69.3646 56.9698 69.7807 56.6502 70.1003C56.3307 70.4198 55.9146 70.6248 55.4665 70.6834ZM55.4665 60.4334C55.0419 60.4889 54.6106 60.4101 54.2331 60.208C53.8556 60.0059 53.5509 59.6907 53.3617 59.3066C53.1725 58.9225 53.1083 58.4888 53.1781 58.0663C53.248 57.6439 53.4483 57.2539 53.7511 56.9511C54.0539 56.6483 54.4438 56.448 54.8663 56.3781C55.2887 56.3083 55.7225 56.3725 56.1066 56.5617C56.4907 56.7509 56.8059 57.0557 57.008 57.4332C57.2101 57.8107 57.2889 58.242 57.2333 58.6665C57.1747 59.1146 56.9698 59.5307 56.6502 59.8503C56.3307 60.1698 55.9146 60.3748 55.4665 60.4334ZM55.4665 50.1834C55.0419 50.2389 54.6106 50.1601 54.2331 49.958C53.8556 49.7559 53.5509 49.4407 53.3617 49.0566C53.1725 48.6725 53.1083 48.2388 53.1781 47.8163C53.248 47.3939 53.4483 47.0039 53.7511 46.7011C54.0539 46.3983 54.4438 46.198 54.8663 46.1281C55.2887 46.0583 55.7225 46.1225 56.1066 46.3117C56.4907 46.5009 56.8059 46.8057 57.008 47.1832C57.2101 47.5607 57.2889 47.992 57.2333 48.4165C57.1747 48.8646 56.9698 49.2807 56.6502 49.6003C56.3307 49.9198 55.9146 50.1248 55.4665 50.1834ZM55.4665 39.9334C55.0419 39.9889 54.6106 39.9101 54.2331 39.708C53.8556 39.5059 53.5509 39.1907 53.3617 38.8066C53.1725 38.4225 53.1083 37.9888 53.1781 37.5663C53.248 37.1439 53.4483 36.7539 53.7511 36.4511C54.0539 36.1483 54.4438 35.948 54.8663 35.8781C55.2887 35.8083 55.7225 35.8725 56.1066 36.0617C56.4907 36.2509 56.8059 36.5557 57.008 36.9332C57.2101 37.3107 57.2889 37.742 57.2333 38.1665C57.1747 38.6146 56.9698 39.0307 56.6502 39.3502C56.3307 39.6698 55.9146 39.8748 55.4665 39.9334ZM79.2875 85.05H63.4V52.25H77.75C78.2937 52.25 78.8151 52.466 79.1996 52.8505C79.584 53.2349 79.8 53.7563 79.8 54.3V84.5375C79.8 84.6735 79.746 84.8038 79.6499 84.8999C79.5538 84.996 79.4234 85.05 79.2875 85.05Z"
                  fill="#EB1000"
                />
                <path
                  d="M73.6499 76.85C73.2445 76.85 72.8481 76.9702 72.511 77.1955C72.1739 77.4207 71.9111 77.7409 71.756 78.1155C71.6008 78.4901 71.5602 78.9023 71.6393 79.2999C71.7184 79.6976 71.9136 80.0629 72.2003 80.3496C72.487 80.6363 72.8523 80.8315 73.25 80.9106C73.6476 80.9897 74.0598 80.9491 74.4344 80.794C74.809 80.6388 75.1292 80.376 75.3544 80.0389C75.5797 79.7018 75.6999 79.3055 75.6999 78.9C75.6999 78.3563 75.4839 77.8349 75.0995 77.4504C74.715 77.066 74.1936 76.85 73.6499 76.85ZM73.6499 66.6C73.2445 66.6 72.8481 66.7202 72.511 66.9455C72.1739 67.1707 71.9111 67.4909 71.756 67.8655C71.6008 68.2401 71.5602 68.6523 71.6393 69.0499C71.7184 69.4476 71.9136 69.8129 72.2003 70.0996C72.487 70.3863 72.8523 70.5815 73.25 70.6606C73.6476 70.7397 74.0598 70.6991 74.4344 70.544C74.809 70.3888 75.1292 70.126 75.3544 69.7889C75.5797 69.4518 75.6999 69.0555 75.6999 68.65C75.6999 68.1063 75.4839 67.5849 75.0995 67.2004C74.715 66.816 74.1936 66.6 73.6499 66.6ZM73.6499 56.35C73.2445 56.35 72.8481 56.4702 72.511 56.6955C72.1739 56.9208 71.9111 57.2409 71.756 57.6155C71.6008 57.9901 71.5602 58.4023 71.6393 58.7999C71.7184 59.1976 71.9136 59.5629 72.2003 59.8496C72.487 60.1363 72.8523 60.3315 73.25 60.4106C73.6476 60.4897 74.0598 60.4491 74.4344 60.294C74.809 60.1388 75.1292 59.876 75.3544 59.5389C75.5797 59.2018 75.6999 58.8055 75.6999 58.4C75.6999 57.8563 75.4839 57.3349 75.0995 56.9504C74.715 56.566 74.1936 56.35 73.6499 56.35ZM65.4499 76.85C65.0445 76.85 64.6481 76.9702 64.311 77.1955C63.9739 77.4207 63.7111 77.7409 63.556 78.1155C63.4008 78.4901 63.3602 78.9023 63.4393 79.2999C63.5184 79.6976 63.7136 80.0629 64.0003 80.3496C64.287 80.6363 64.6523 80.8315 65.05 80.9106C65.4476 80.9897 65.8598 80.9491 66.2344 80.794C66.609 80.6388 66.9292 80.376 67.1544 80.0389C67.3797 79.7018 67.4999 79.3055 67.4999 78.9C67.4999 78.3563 67.2839 77.8349 66.8995 77.4504C66.515 77.066 65.9936 76.85 65.4499 76.85ZM65.4499 66.6C65.0445 66.6 64.6481 66.7202 64.311 66.9455C63.9739 67.1707 63.7111 67.4909 63.556 67.8655C63.4008 68.2401 63.3602 68.6523 63.4393 69.0499C63.5184 69.4476 63.7136 69.8129 64.0003 70.0996C64.287 70.3863 64.6523 70.5815 65.05 70.6606C65.4476 70.7397 65.8598 70.6991 66.2344 70.544C66.609 70.3888 66.9292 70.126 67.1544 69.7889C67.3797 69.4518 67.4999 69.0555 67.4999 68.65C67.4999 68.1063 67.2839 67.5849 66.8995 67.2004C66.515 66.816 65.9936 66.6 65.4499 66.6ZM65.4499 56.35C65.0445 56.35 64.6481 56.4702 64.311 56.6955C63.9739 56.9208 63.7111 57.2409 63.556 57.6155C63.4008 57.9901 63.3602 58.4023 63.4393 58.7999C63.5184 59.1976 63.7136 59.5629 64.0003 59.8496C64.287 60.1363 64.6523 60.3315 65.05 60.4106C65.4476 60.4897 65.8598 60.4491 66.2344 60.294C66.609 60.1388 66.9292 59.876 67.1544 59.5389C67.3797 59.2018 67.4999 58.8055 67.4999 58.4C67.4999 57.8563 67.2839 57.3349 66.8995 56.9504C66.515 56.566 65.9936 56.35 65.4499 56.35Z"
                  fill="#FFC8C5"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2 justify-around">
              <div>
                <p className="2xl:!text-3xl font-bold">
                  {company.name || company.nameDist}
                </p>
                <p className="text-base">{user.position}</p>
              </div>
              <div className="flex gap-6">
                {objects
                  .filter(({ text }) => text !== null)
                  .map(({ svg, text }) => (
                    <div className="flex items-center gap-1">
                      {svg}
                      <p className="!text-xs">{text}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <TableUsersOrganization />
        </div>
      </ContainerContent>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: [1, 2, 3],
    },
  };
}

export default organizacion;
