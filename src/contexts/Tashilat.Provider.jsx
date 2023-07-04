import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const TashilatContext = React.createContext();

export default function TashilatProvider({ children }) {
  const nextPage = useNavigate();

  const [stepOne, setStepOne] = useState({
    user_id: 5,
    type: "facilities",
    title: "test",
    type_f: "leasing",
    places: [
      {
        scope: "workHouse",
        address: "test",
        meterage: "10000",
        ownership: "owner",
        count: "3",
      },
      {
        scope: "factory",
        address: "test",
        meterage: "10000",
        ownership: "owner",
        count: "3",
      },
      {
        scope: "storeHouse",
        address: "test",
        meterage: "10000",
        ownership: "owner",
        count: "3",
      },
    ],
    history: "test",
    is_knowledge: true,
    activity: "test",
    confirmation: "2022-10-10",
    expiration: "2022-10-10",
    area: "test",

    // markaziAddress: "",
    // markaziMetr: "",
    // markaziMelk: "",
    // markaziPersonnel: "",

    // karghahAddress: "",
    // karghahMetr: "",
    // karghahMelk: "",
    // karghahPersonnel: "",

    // anbarAddress: "",
    // anbarMetr: "",
    // anbarMelk: "",
    // anbarPersonnel: "",
    // //

    // tarikhche: "",

    // daneshBonyanDate: { day: "", month: "", year: "" },
    // daneshBonyanDateEnd: { day: "", month: "", year: "" },
  });
  const [stepTwo, setStepTwo] = useState({});
  const [stepThree, setStepThree] = useState({});
  const [stepFour, setStepFour] = useState({});
  const [stepFive, setStepFive] = useState({});

  return (
    <TashilatContext.Provider
      value={{
        stepOne,
        setStepOne,
        stepTwo,
        setStepTwo,
        stepThree,
        setStepThree,
        stepFour,
        setStepFour,
        stepFive,
        setStepFive,
      }}
    >
      {children}
    </TashilatContext.Provider>
  );
}
