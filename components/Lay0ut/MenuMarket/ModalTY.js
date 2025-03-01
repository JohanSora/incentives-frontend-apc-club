import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setMenuMarket } from "../../../store/reducers/awards.reducer";
import { useTranslation } from "react-i18next";

const ModalTY = ({ setOpened }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("global");

  return (
    <div className="flex flex-col p-6 gap-6 justify-center">
      <div className="w-full justify-center flex">
        <svg
          width="185"
          height="180"
          viewBox="0 0 185 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.74"
            x="43.3159"
            y="30.6746"
            width="31.1048"
            height="16.5893"
            transform="rotate(91.9895 43.3159 30.6746)"
            fill="#009C3B"
          />
          <rect
            opacity="0.97"
            x="131.281"
            y="169.527"
            width="47.5783"
            height="20.8155"
            transform="rotate(-70 131.281 169.527)"
            fill="#FFCE2E"
          />
          <rect
            opacity="0.74"
            x="153.267"
            y="38.9593"
            width="37.9185"
            height="16.5893"
            transform="rotate(-169.804 153.267 38.9593)"
            fill="#21A5A2"
          />
          <rect
            opacity="0.98"
            x="156.358"
            y="26.2727"
            width="35.9836"
            height="15.7428"
            transform="rotate(104.275 156.358 26.2727)"
            fill="#EB1000"
          />
          <rect
            opacity="0.83"
            x="172.807"
            y="156.841"
            width="45.979"
            height="20.1158"
            transform="rotate(159.38 172.807 156.841)"
            fill="#1473E6"
          />
          <rect
            opacity="0.74"
            x="24.3042"
            y="87.7996"
            width="47.5783"
            height="20.8155"
            transform="rotate(68.0852 24.3042 87.7996)"
            fill="#FFCE2E"
          />
          <rect
            opacity="0.96"
            x="69.9199"
            y="154.773"
            width="9.94397"
            height="7.85904"
            transform="rotate(-28.4901 69.9199 154.773)"
            fill="#FFCE2E"
          />
          <rect
            opacity="0.96"
            x="8.13623"
            y="49.8842"
            width="9.94397"
            height="7.85904"
            transform="rotate(82.9344 8.13623 49.8842)"
            fill="#1473E6"
          />
          <rect
            opacity="0.96"
            x="110.436"
            y="124.92"
            width="9.94397"
            height="7.85904"
            transform="rotate(53.5155 110.436 124.92)"
            fill="#21A5A2"
          />
          <rect
            opacity="0.96"
            x="63.3765"
            width="9.94397"
            height="7.85904"
            transform="rotate(18.4617 63.3765 0)"
            fill="#FFCE2E"
          />
          <rect
            opacity="0.96"
            x="74.1641"
            y="33.7766"
            width="9.94397"
            height="7.85904"
            transform="rotate(-28.4901 74.1641 33.7766)"
            fill="#21A5A2"
          />
          <rect
            opacity="0.96"
            x="172.174"
            y="40.8885"
            width="9.94397"
            height="7.85904"
            transform="rotate(-28.4901 172.174 40.8885)"
            fill="#FFCE2E"
          />
          <path
            d="M146.117 98.9196C146.117 130.4 120.597 155.92 89.1167 155.92C57.6365 155.92 32.1167 130.4 32.1167 98.9196C32.1167 67.4394 57.6365 41.9196 89.1167 41.9196C120.597 41.9196 146.117 67.4394 146.117 98.9196Z"
            fill="#FFEEED"
          />
          <path
            d="M65.5164 119.838C65.5164 122.087 66.4098 124.244 68 125.834C69.5903 127.425 71.7472 128.318 73.9962 128.318H86.1859C86.3264 128.318 86.4612 128.262 86.5606 128.163C86.66 128.063 86.7158 127.929 86.7158 127.788V103.409C86.7158 103.268 86.66 103.133 86.5606 103.034C86.4612 102.934 86.3264 102.879 86.1859 102.879H66.5763C66.2952 102.879 66.0256 102.99 65.8268 103.189C65.6281 103.388 65.5164 103.658 65.5164 103.939V119.838ZM91.4857 128.318H103.675C105.924 128.318 108.081 127.425 109.672 125.834C111.262 124.244 112.155 122.087 112.155 119.838V103.939C112.155 103.658 112.044 103.388 111.845 103.189C111.646 102.99 111.376 102.879 111.095 102.879H91.4857C91.3452 102.879 91.2104 102.934 91.111 103.034C91.0116 103.133 90.9557 103.268 90.9557 103.409V127.788C90.9557 127.929 91.0116 128.063 91.111 128.163C91.2104 128.262 91.3452 128.318 91.4857 128.318Z"
            fill="#FFC8C5"
          />
          <path
            d="M86.5888 98.8304V84.0624H90.9645V98.8304C90.9645 98.9755 91.0222 99.1146 91.1248 99.2172C91.2273 99.3198 91.3665 99.3774 91.5115 99.3774H110.655C111.401 99.3774 112.141 99.2502 112.843 99.0014C114.122 98.5474 115.229 97.7091 116.012 96.6013C116.795 95.4935 117.217 94.1706 117.219 92.8138V90.6259C117.219 88.8852 116.527 87.2157 115.296 85.9848C114.066 84.7539 112.396 84.0624 110.655 84.0624H105.112C105.064 84.0616 105.018 84.0484 104.977 84.0241C104.936 83.9998 104.902 83.9652 104.878 83.9237C104.855 83.8823 104.843 83.8354 104.843 83.7878C104.843 83.7401 104.856 83.6934 104.879 83.6521C106.145 81.5147 106.557 78.9777 106.03 76.5498C105.504 74.1219 104.08 71.9827 102.043 70.561C100.006 69.1393 97.5062 68.5403 95.0459 68.8841C92.5856 69.2279 90.3461 70.4891 88.7767 72.4147C87.2072 70.4891 84.9678 69.2279 82.5075 68.8841C80.0472 68.5403 77.5478 69.1393 75.5106 70.561C73.4734 71.9827 72.049 74.1219 71.5229 76.5498C70.9968 78.9777 71.408 81.5147 72.674 83.6521C72.6978 83.6934 72.7105 83.7401 72.7107 83.7878C72.7109 83.8354 72.6986 83.8823 72.6751 83.9237C72.6516 83.9652 72.6177 83.9998 72.5768 84.0241C72.5358 84.0484 72.4892 84.0616 72.4416 84.0624H66.8981C65.1573 84.0624 63.4878 84.7539 62.2569 85.9848C61.026 87.2157 60.3345 88.8852 60.3345 90.6259V92.8138C60.3364 94.1706 60.758 95.4935 61.5414 96.6013C62.3247 97.7091 63.4316 98.5474 64.7102 99.0014C65.4128 99.2502 66.1527 99.3774 66.8981 99.3774H86.0419C86.1869 99.3774 86.326 99.3198 86.4286 99.2172C86.5312 99.1146 86.5888 98.9755 86.5888 98.8304ZM90.9645 78.5927C90.9645 77.5109 91.2853 76.4534 91.8864 75.5539C92.4874 74.6544 93.3416 73.9534 94.3411 73.5394C95.3405 73.1254 96.4403 73.0171 97.5013 73.2281C98.5623 73.4392 99.5369 73.9601 100.302 74.7251C101.067 75.49 101.588 76.4646 101.799 77.5256C102.01 78.5866 101.901 79.6864 101.488 80.6858C101.074 81.6853 100.372 82.5395 99.473 83.1406C98.5735 83.7416 97.516 84.0624 96.4342 84.0624H90.9645V78.5927ZM80.7281 73.1367C81.4774 73.083 82.2298 73.1842 82.9383 73.4341C83.6468 73.6839 84.2962 74.0771 84.8461 74.589C85.396 75.1009 85.8345 75.7206 86.1343 76.4094C86.4341 77.0982 86.5889 77.8414 86.5888 78.5927V84.0624H81.1192C79.7048 84.0587 78.3469 83.5074 77.3303 82.524C76.3138 81.5407 75.7176 80.2018 75.667 78.7884C75.6164 77.375 76.1153 75.9969 77.059 74.9434C78.0026 73.8899 79.3176 73.2428 80.7281 73.1381V73.1367Z"
            fill="#EB1000"
          />
          <rect
            opacity="0.96"
            x="55.0571"
            y="99.5627"
            width="7.7522"
            height="6.12682"
            transform="rotate(18.4617 55.0571 99.5627)"
            fill="#FFCE2E"
          />
          <rect
            opacity="0.96"
            x="107.436"
            y="120.92"
            width="9.94397"
            height="7.85904"
            transform="rotate(53.5155 107.436 120.92)"
            fill="#21A5A2"
          />
          <rect
            opacity="0.98"
            x="72.2129"
            y="37.0137"
            width="27.7669"
            height="15.7428"
            transform="rotate(104.275 72.2129 37.0137)"
            fill="#E9740A"
          />
          <rect
            opacity="0.96"
            x="109.4"
            y="34.9004"
            width="27.4033"
            height="11.9889"
            transform="rotate(40 109.4 34.9004)"
            fill="#FFCE2E"
          />
          <rect
            opacity="0.88"
            x="52.0469"
            y="170.138"
            width="27.4174"
            height="16.2676"
            transform="rotate(159 52.0469 170.138)"
            fill="#EB1000"
          />
          <rect
            opacity="0.76"
            x="164.544"
            y="71.6876"
            width="37.8998"
            height="18.7165"
            transform="rotate(91 164.544 71.6876)"
            fill="#21A5A2"
          />
        </svg>
      </div>
      <div className="w-full">
        <p className="!text-2xl font-bold text-center">
          {t("adobeMarket.felicitaciones")}
        </p>
      </div>
      <div className="w-full">
        <p className="!text-xs text-center">
          {t("adobeMarket.descFelicitaciones")}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="btn btn-info w-1/2"
          onClick={() => {
            router.push("/estadoProducto");
            setOpened(false);
            dispatch(setMenuMarket(false));
          }}
        >
          {t("shoopingcar.ir")}
        </button>
      </div>
    </div>
  );
};

export default ModalTY;
