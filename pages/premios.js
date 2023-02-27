import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import ContainerContent from "../components/containerContent";
import { getDataAwards, pushReward } from "../store/reducers/awards.reducer";
import * as XLSX from "xlsx";
import { Modal } from "@mantine/core";

const premios = () => {
  const [formData, setFormData] = useState({
    name: "",
    digipoints: "",
    price: "",
    imagePath: "",
    status: true,
    description: "",
  });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const awards = useSelector((state) => state.awards.awards);
  const [t, i18n] = useTranslation("global");
  const itemsPerPage = 7;
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (token && awards.length === 0) {
      dispatch(getDataAwards(token));
    }
  }, [token]);

  const handleChange = (e) => {
    if (["digipoints", "price"].includes(e.target.name)) {
      return setFormData({
        ...formData,
        [e.target.name]: Number(e.target.value),
      });
    }

    return setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (data) => {
    data.preventDefault();

    dispatch(pushReward(token, formData));
    setFormData({
      name: "",
      digipoints: "",
      price: "",
      imagePath: "",
      status: true,
      description: "",
    });
  };

  function Table({ currentItems }) {
    return (
      <>
        <table className="w-full text-sm text-left text-black-500">
          <thead className="text-xs text-black-500 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                {t("tabla.nombre")}
              </th>
              <th scope="col" className="py-3 px-6">
                Digipoints
              </th>
              <th scope="col" className="py-3 px-6">
                {t("tabla.precio")}
              </th>
              <th scope="col" className="py-3 px-6">
                {t("tabla.imagen")}
              </th>
            </tr>
          </thead>
          <tbody>
            {[...currentItems]
              .reverse()
              .map(({ id, name, digipoints, price, imagePath, status }) => (
                <tr className="bg-white border-b dark:border-gray-500" key={id}>
                  <td className="py-4 px-6">{name}</td>
                  <td className="py-4 px-6">{digipoints}</td>
                  <td className="py-4 px-6">{price}</td>
                  <td className="py-4 px-6 w-32">
                    <figure>
                      <img src={imagePath} />
                    </figure>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = useMemo(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    return awards.slice(itemOffset, endOffset);
  }, [itemOffset, awards]);
  const pageCount = useMemo(
    () => Math.ceil(awards.length / itemsPerPage),
    [awards, itemsPerPage]
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % awards.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const importFile = (data) => {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");
    XLSX.writeFile(workbook, "Liste_De_Premios.xlsx");
  };

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} size={"50%"}>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-red-500">Agregar Premio</h3>
          <p className="py-4">Indica la información del premio</p>
          <form
            onSubmit={(info) => {
              handleSubmit(info);
            }}
            className="w-full"
          >
            <div className="w-full flex flex-col items-center gap-5">
              <div className="form-control w-9/12">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  placeholder="Nombre del premio"
                  className="input input-bordered w-full"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
                <label className="label">
                  <span className="label-text">Valor en Digipoints</span>
                </label>
                <input
                  type="number"
                  placeholder="Ingrese el numero del valor"
                  className="input input-bordered w-full"
                  name="digipoints"
                  onChange={handleChange}
                  value={formData.digipoints}
                />
                <label className="label">
                  <span className="label-text">Valor en Dolares / Reales</span>
                </label>
                <div className="flex reverse">
                  <select
                    className="input input-bordered w-1/4"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                  >
                    <option value="">Moneda</option>
                    <option value="R$">Reales</option>
                    <option value="$">Dolares</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Ingrese el numero del valor"
                    className="input input-bordered w-full 3/4"
                    name="price"
                    onChange={handleChange}
                    value={formData.price}
                  />
                </div>

                <label className="label">
                  <span className="label-text">
                    Agrega la imagen del premio
                  </span>
                </label>
                <div className="flex w-full justify-center gap-8 none">
                  <div>
                    <strong className="text-sm">Subir imagen (jpg,png)</strong>
                    <p className="text-xs">Peso máximo 5MB</p>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-error w-full max-w-xs"
                    name="imagePath"
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  placeholder="O ingrese el link del archivo"
                  className="input input-bordered w-full 3/4"
                  name="imagePath"
                  onChange={handleChange}
                  value={formData.imagePath}
                />
              </div>

              <button
                htmlFor="my-modal-4"
                className="btn btn-outline btn-error w-2/4"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ContainerContent pageTitle={"Premios"}>
        <div className="m-6 flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl">{t("menu.Premios")}</h1>
          </div>
          <div className="w-full md:w-2/2 shadow p-5 rounded-lg bg-white">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-4 mt-4 place-items-end">
                <div className="w-full flex justify-end gap-10">
                  {user.roleId === 1 && (
                    <button
                      className="btn btn-primary w-max"
                      onClick={() => setOpened(true)}
                    >
                      {t("premios.agregar")}
                    </button>
                  )}

                  <button
                    className="btn btn-primary w-max"
                    onClick={() => importFile(awards)}
                  >
                    Exportar
                  </button>
                </div>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="overflow-x-auto relative">
                {loading && <div className="lds-dual-ring"></div>}
                {!loading && <Table currentItems={currentItems} />}
                {!loading && (
                  <ReactPaginate
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    nextClassName={"item next "}
                    previousClassName={"item previous"}
                    activeClassName={"item active "}
                    breakClassName={"item break-me "}
                    breakLabel={"..."}
                    disabledClassName={"disabled-page"}
                    pageClassName={"item pagination-page "}
                    nextLabel={
                      <FaChevronRight
                        style={{ color: "#000", fontSize: "20" }}
                      />
                    }
                    previousLabel={
                      <FaChevronLeft
                        style={{ color: "#000", fontSize: "20" }}
                      />
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: [1, 3],
    },
  };
}

export default premios;
