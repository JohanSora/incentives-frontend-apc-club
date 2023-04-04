import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesBySegment } from "../../store/reducers/sales.reducer";

const TableStats = () => {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const company = useSelector((state) => state.user.company);
  const [totalSales, setTotalSales] = useState([]);
  const [percentageTotal, setpercentageTotal] = useState(0);
  const [goalSales, setGoalSales] = useState(0);
  const [percentageCC, setpercentageCC] = useState([]);
  const [percentageDC, setpercentageDC] = useState([]);
  const dataFromAxios = useSelector((state) => state.sales.salesgement);

  useEffect(() => {
    if (token && dataFromAxios.length === 0) {
      dispatch(getSalesBySegment(token, company.resellerMasterId));
    }
  }, [token]);

  useEffect(() => {
    setTotalSales(dataFromAxios);
    const totalSalesReduce = Math.round(
      dataFromAxios.reduce(
        (acc, { total_sales_amount }) => acc + Number(total_sales_amount),
        0
      )
    );

    const percentageTotal = parseInt(
      (totalSalesReduce * 100) / Number(company.goalsPerQuarter)
    );
    setpercentageTotal(
      Number(company.goalsPerQuarter) === 0 ? 100 : percentageTotal
    );

    const goalSales = dataFromAxios
      .reduce(
        (previous, { total_sales_amount }) =>
          previous + Number(total_sales_amount),
        0
      )
      .toLocaleString();

    setGoalSales(goalSales);
    infoPercentages(
      dataFromAxios.filter(
        ({ business_unit }) => business_unit === "Creative Cloud"
      ),
      dataFromAxios.filter(
        ({ business_unit }) => business_unit === "Document Cloud"
      )
    );
  }, [dataFromAxios]);

  //This Function calculates the percentage of all CC business type and DC business type
  const infoPercentages = (ccInfoFilter, dcInfoFilter) => {
    const arrayPercentageCC = ccInfoFilter.map((data) => {
      const allSalesCC = dataFromAxios
        .filter(({ business_unit }) => business_unit === "Creative Cloud")
        .map(({ total_sales_amount }) => Number(total_sales_amount))
        .reduce((previous, currently) => previous + currently);

      const percentage = (data.total_sales_amount * 100) / allSalesCC;

      return {
        typeCC: data.sub_bu,
        tablePercentage: percentage,
        sales: Number(data.total_sales_amount),
      };
    });

    const arrayPercentageDC = dcInfoFilter.map((data) => {
      const allSalesCC = dataFromAxios
        .filter(({ business_unit }) => business_unit === "Document Cloud")
        .map(({ total_sales_amount }) => Number(total_sales_amount))
        .reduce((previous, currently) => previous + currently);

      const percentage = (data.total_sales_amount * 100) / allSalesCC;

      return {
        typeDC: data.sub_bu,
        tablePercentage: percentage,
        sales: Number(data.total_sales_amount),
      };
    });

    setpercentageCC(arrayPercentageCC);
    setpercentageDC(arrayPercentageDC);
  };

  return (
    <div className="container w-full h-full bg-base-100 flex flex-col sm:flex-row justify-between max-sm:justify-center">
      <div className="w-8/12 max-sm:mx-auto flex flex-col gap-5 progressiveBar justify-center">
        <div className="w-full h-16 flex items-center gap-10 gapBar">
          <div className="flex items-center h-full cct max-sm:w-64 w-32 text-center">
            <img src="/assets/dashboard/cc.webp" width={100}></img>
          </div>
          <div className="w-10/12 flex flex-col items-center justify-around h-full">
            <div className="w-full flex justify-around">
              <p className="text-sm font-semibold border-b-2 border-b-orange-500">
                Teams
              </p>
              <p className="text-sm font-semibold border-b-sky-600 border-b-2 ">
                Enterprise
              </p>
              <p className="text-sm font-semibold border-b-2 border-b-green-600">
                Education
              </p>
            </div>
            <div className="w-full bg-base-200 h-4 flex">
              {percentageCC.map((data) => (
                <div
                  className={`tooltip ${
                    data.typeCC === "Teams"
                      ? "tooltip-primary bg-primary"
                      : data.typeCC === "Enterprise"
                      ? "tooltip-secondary bg-secondary"
                      : "tooltip-success bg-success"
                  } h-full`}
                  data-tip={`$${new Intl.NumberFormat().format(
                    parseInt(data.sales)
                  )}`}
                  style={{ width: `${data.tablePercentage}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-16 flex items-center gap-10 gapBar">
          <div className="flex items-center h-full cci max-sm:w-64 w-32 text-center">
            <img src="/assets/dashboard/DC.webp" width={100}></img>
          </div>
          <div className="w-10/12 flex flex-col items-center justify-around h-full">
            <div className="w-full flex justify-around">
              <p className="text-sm font-semibold border-b-2 border-b-orange-500">
                Teams
              </p>
              <p className="text-sm font-semibold border-b-sky-600 border-b-2">
                Enterprise
              </p>
              <p className="text-sm font-semibold border-b-2 border-b-red-600">
                Education
              </p>
            </div>
            <div className="w-full bg-base-200 h-4 flex">
              {percentageDC.map((data) => (
                <div
                  className={`tooltip ${
                    data.typeDC === "Teams"
                      ? "tooltip-primary bg-primary"
                      : data.typeDC === "Enterprise"
                      ? "tooltip-secondary bg-secondary"
                      : "tooltip-success bg-success"
                  } h-full`}
                  data-tip={`$${new Intl.NumberFormat().format(
                    parseInt(data.sales)
                  )}`}
                  style={{
                    width: `${data.tablePercentage}%`,
                    color: "#ffffff",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-4/12 max-sm:w-full justify-center gap-10">
        {/* <div className="flex flex-col gap-5">
          <p className="font-semibold text-center">Partner Goal:</p>
          <p className="text-center font-bold text-2xl">{`$${new Intl.NumberFormat().format(
            parseInt(Number(company.goalsPerQuarter))
          )}`}</p>
        </div> */}
        <div className="h-full w-min">
          <div
            className="radial-progress flex justify-center items-center text-primary"
            style={{
              "--value": percentageTotal,
              "--size": "9rem",
              "--thickness": "2px",
            }}
          >
            <div className="w-5/6 h-5/6 bg-primary text-center p-5 flex flex-col items-center justify-center rounded-full text-white">
              <p className="font-bold text-md">${goalSales}</p>
              <p className="text-sm">{percentageTotal}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableStats;
