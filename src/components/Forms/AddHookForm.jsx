import "./../../styles/Forms/addhook.css";
import useForm from "../../hooks/useForm";
import { useState, useEffect } from "react";
import apiHandler from "../../api/apiHandler";
import FileUploader from "./FileUploader";
import React from "react";
import service from "../../api/apiHandler";
import Part1 from "./addHookForm/Part1";
import Part2 from "./addHookForm/Part2";
import Part3 from "./addHookForm/Part3";

const AddHookForm = ({ closeAddHook }) => {
  const [step, setStep] = useState(1);
  const [stage, setStage] = useState("");

  const [orgasm, setOrgasm] = useState(false);
  const [protection, setProtection] = useState(false);
  const [partnersName, setPartnersName] = useState([]);

  const [values, handleChange, setValues, reset] = useForm({
    _id: "",
    name: "",
    age: "",
    comment: "",
    location: "",
    date: "",
    type: "",
    rating: "",
    notes: "",
    duration: 0,
    orgasm: orgasm,
    protection: protection,
  });

  const [selectedFile, setSelectedFile] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    service.get("/api/user").then((res) => {
      const partners = res.data.partners;
      setPartnersName(partners);
    });
  }, []);

  const handleClose = (e) => {
    closeAddHook();
    setStep(1);
    reset();
  };
  const handlePartnersList = (e) => {
    const name = e.target.value;
    const partner = partnersName.find((partner) => partner.name === name);
    setValues({
      ...values,
      _id: partner._id,
      name: partner.name,
      age: partner.age,
      image: partner.image,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("_id", values._id);
    fd.append("name", values.name);
    fd.append("age", values.age);
    fd.append("image", selectedFile);
    fd.append("comment", values.comment);
    fd.append("location", values.location);
    fd.append("date", values.date);
    fd.append("type", stage);
    fd.append("rating", values.rating);
    fd.append("duration", values.duration);
    fd.append("orgasm", orgasm);
    fd.append("protection", protection);
    fd.append("notes", values.notes);

    apiHandler
      .addHook(fd)
      .then(() => {
        reset();
        setSelectedFile(null);
        closeAddHook();
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <div className="addhook">
      <span onClick={handleClose} className="svgButton">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.13184 2.13184L10.2636 10.2636M10.2636 10.2636L18.3953 18.3953M10.2636 10.2636L2.13184 18.3953M10.2636 10.2636L18.3953 2.13184"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Part1
            {...{
              handlePartnersList,
              partnersName,
              handleChange,
              values,
              setStep,
            }}
          />
        )}
        {step === 2 && (
          <Part2
            {...{
              handleChange,
              values,
              setStage,
              orgasm,
              protection,
              setOrgasm,
              setProtection,
              setStep,
            }}
          />
        )}
        {step === 3 && <Part3 {...{ values, handleChange }} />}

        {error && <h3 className="error">{error.message}</h3>}
      </form>
    </div>
  );
};

export default AddHookForm;
