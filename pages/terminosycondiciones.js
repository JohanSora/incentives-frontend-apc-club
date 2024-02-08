import { Modal } from "@mantine/core";
import axios, { Axios } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { userLogin } from "../store/reducers/users.reducer";

const terminosycondiciones = () => {
  const [checked, setChecked] = useState(false);
  const route = useRouter();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("global");
  const [modal, setModal] = useState(0);
  const [imageSign, setImageSign] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleIframeLoad = () => {
      const iframeDocument = iframeRef.current.contentDocument;
  
      if (iframeDocument) {
        console.log('iframe cargado');
  
        const companyInput = iframeDocument.querySelector('input[name="echosign_company"]');
        const emailInput = iframeDocument.querySelector('input[name="echosign_email"]');
        const signatureInput = iframeDocument.querySelector('input[name="echosign_signature"]');
        const clickToEsignButton = iframeDocument.querySelector('.click-to-esign');
  
        console.log('Company Input:', companyInput);
        console.log('Email Input:', emailInput);
        console.log('Signature Input:', signatureInput);
        console.log('Click to Esign Button:', clickToEsignButton);
  
        const areElementsAvailable =
          companyInput && emailInput && signatureInput && clickToEsignButton;
  
        if (areElementsAvailable) {
          console.log('Elementos disponibles:', companyInput, emailInput, signatureInput, clickToEsignButton);
  
          // Agregar un listener de eventos al documento dentro del iframe
          iframeDocument.addEventListener('iframeAction', (event) => {
            console.log('Evento personalizado dentro del iframe:', event.detail);
  
            // Realizar acciones adicionales según el evento personalizado
          });
          // Agregar un listener de eventos al documento dentro del iframe
          const customEvent = new CustomEvent('iframeAction', { detail: 'Información adicional' });
          document.dispatchEvent(customEvent);
        }
      }
    };
  
    const iframeElement = iframeRef.current;
    iframeElement.addEventListener('load', handleIframeLoad);
  
    return () => {
      iframeElement.removeEventListener('load', handleIframeLoad);
    };
  }, []);
  

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (user?.cpf.split(" ")[0] === "active") {
      return setOpened(true);
    }
  }, []);

  const handleSubmit = () => {
    Swal.fire({
      title: t("terminosycondiciones.deseas"),
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: t("terminosycondiciones.aceptarBtn"),
      confirmButtonColor: "#eb1000",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${user?.id}`,
            {
              cpf: "active colTC",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            dispatch(userLogin({ ...user, cpf: "active" }));
            return setOpened(true);
          });
      }
    });
  };

  const isMobile = window.innerWidth <= 768;

  const modalSize = isMobile
    ? { initialWidth: "90%", initialHeight: "auto" }
    : { initialWidth: "40%", initialHeight: "auto" };

  return (
    <>
      <Head>
        <title>Terminos y Condiciones</title>
        <link rel="icon" href="/favicon.png"></link>
      </Head>
      <main
        className="flex justify-center relative h-screen bg-white"
        style={{ maxWidth: "100%", zIndex: 50, marginTop: "5vh" }}
      >
        <Modal
          opened={opened}
          centered
          size={"80%"}
          onClose={() => {
            window.sessionStorage.removeItem("infoDt");
            route.push("/");
          }}
          id="modalterminos"
        >
          <div className="w-full p-10 flex flex-col justify-center gap-10">
            <h2 className="font-medium text-center text-xl">
              <strong>
                {t("tyc.title1")} <br /> {t("tyc.title12")}
              </strong>
            </h2>
            <h2 className="font-medium text-center text-md">
              {t("tyc.title2")} <br /> <strong>{t("tyc.title21")}</strong>{" "}
              <br />
              {t("tyc.title22")}
            </h2>
            <hr className="border-gray-300" />
            <h2 className="font-medium text-center text-sm">
              {t("tyc.title3")}
              <a
                href="mailto:info@adobepcclub.com"
                className="underline decoration-solid"
              >
                {" "}
                info@adobepcclub.com
              </a>
            </h2>
          </div>
        </Modal>
        {user?.cpf.split(" ")[0] !== "active" && (
          <div className="flex flex-col items-center w-full gap-5">
            {/* <div className="m-6 flex flex-col gap-16">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">
                {t("terminosycondiciones.TerminosyCondiciones")}
              </h1>
            </div>
          </div> */}
            <div className="flex gap-5 items-center">
              <div className="rounded-full bg-primary p-2 w-[30px] h-[30px] flex justify-center items-center">
                <p className="text-white">1</p>
              </div>
              <p>{t("terminosycondiciones.aceptar")}</p>
            </div>

            {user?.languageId === 1 ? (
              <iframe
                ref={iframeRef}
                title="TermsAndContidionsAdobeSign"
                src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhClfu6ib2RkR49yOgA7LX5pIQCOvI0naofEbv47wRmLL-TBFFMcs9GK5QUnNY51xFw*"
                className="iframeTandC"
              ></iframe>
            ) : (
              <iframe
                ref={iframeRef}
                title="TermsAndContidionsAdobeSign"
                src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCspkEYh8cL0ffVkee8dCS3gswOg-2w_X1m608sMsQf8vB-FEgLt_qgnJPSD0PCXKQ*"
                className="iframeTandC"
              ></iframe>
            )}
            

            {/* <div className="flex flex-col gap-10 items-center">
            <div className="flex gap-5">
              <input
                type="checkbox"
                class="checkbox checkbox-lg"
                onChange={(e) => {
                  setChecked(e.target.checked);
                  setOpened(e.target.checked);
                }}
              />
              <p className="text-3xl">{t("terminosycondiciones.aceptar")}</p>
            </div>
            {checked && imageSign !== null && (
              <div>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  {t("terminosycondiciones.bienvenido")}
                </button>
              </div>
            )}
          </div> */}
            <div className="flex gap-5 items-center">
              <div className="rounded-full bg-primary p-2 w-[30px] h-[30px] flex justify-center items-center">
                <p className="text-white">2</p>
              </div>
              <p>{t("terminosycondiciones.click")}</p>
            </div>

            <button
              className="btn btn-primary btn-lg mb-5"
              onClick={handleSubmit}
            >
              {t("terminosycondiciones.bienvenido")}
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default terminosycondiciones;
