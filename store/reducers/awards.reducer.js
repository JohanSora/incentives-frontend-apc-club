import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  awards: [],
  shoopingCar: [],
  rules: [],
  menuMarket: false,
};

export const awardsAction = createSlice({
  name: "awards",
  initialState,
  reducers: {
    awardsPush: (state, action) => {
      state.awards = [...state.awards, ...action.payload];
    },
    awardsDelete: (state, action) => {
      state.awards = [];
    },
    productsPush: (state, action) => {
      state.shoopingCar = [...state.shoopingCar, ...action.payload];
    },
    shoopingCarPush: (state, action) => {
      state.shoopingCar = action.payload;
    },
    rulesGetAll: (state, action) => {
      state.rules = [...state.rules, ...action.payload];
    },
    rulesPush: (state, action) => {
      state.rules = action.payload;
    },
    setMenuMarket: (state, action) => {
      state.menuMarket = action.payload;
    },

    setInitialStateAwards: (state, action) => {
      return initialState;
    },
  },
});

export const {
  shoopingCarPush,
  awardsPush,
  awardsDelete,
  productsPush,
  rulesGetAll,
  rulesPush,
  setInitialStateAwards,
  setMenuMarket,
} = awardsAction.actions;

export default awardsAction.reducer;

export const pushReward = (token, data) => async (dispatch) => {
  try {
    axios
      .post(`${process.env.BACKURL}/awards`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => dispatch(awardsPush([res.data])));
  } catch (err) {
    console.log(err);
  }
};

export const getDataAwards = (token, user) => async (dispatch) => {
  try {
    axios
      .get(`${process.env.BACKURL}/awards`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let obj = res.data
          .filter((e) => {
            if (user.roleId === 1) {
              return e;
            }

            if (user.companyId !== null) {
              if (user.company.country === "Colombia") {
                return e.description === "COLOMBIA";
              }
            }

            if (user.distributionChannelId !== null) {
              if (user.distributionChannel.country === "Colombia") {
                return e.description === "COLOMBIA";
              }
            }

            if (user.countryId === "Chile") {
              return e.description !== "BRASIL";
            }
            if (user.region === "BRAZIL") {
              return e.description === "BRASIL";
            }

            if (["SOLA", "NOLA", "MEXICO"].includes(user.region)) {
              return e.description === "NOLA - SOLA - MEX";
            }
          })
          .sort(function (a, b) {
            // Comparar por nombre
            const nameComparison = a.name
              .split(" ")[0]
              .localeCompare(b.name.split(" ")[0]);

            if (nameComparison !== 0) {
              // Si los nombres son diferentes, retorna la comparación alfabética
              return nameComparison;
            } else {
              // Si los nombres son iguales, comparar por precio
              return a.digipoints - b.digipoints;
            }
          });

        dispatch(awardsPush(obj));
      });
  } catch (err) {
    console.log(err);
  }
};

export const getDataRules = (token) => async (dispatch) => {
  try {
    axios
      .get(`${process.env.BACKURL}/rules`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(rulesGetAll(res.data));
      });
  } catch (err) {
    console.log(err);
  }
};
