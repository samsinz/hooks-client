import "./../../styles/Forms/addhook.css";
import useForm from "../../hooks/useForm";
import { useState, useEffect } from "react";
import apiHandler from "../../api/apiHandler";
import FileUploader from "./FileUploader";
import React from "react";
import service from "../../api/apiHandler";

const AddHookForm = ({ closeAddHook }) => {
  const [stage, setStage] = useState("");


  const [orgasm, setOrgasm] = useState(false);
  const [protection, setProtection] = useState(false);
  const [sexIsActive, setSexIsActive] = useState(false);
  const [foreplayIsActive, setForeplayIsActive] = useState(false);
  const [kissingIsActive, setKissingIsActive] = useState(false);

  const [partnersName, setPartnersName] = useState([]);

  const current = new Date().toISOString().split("T")[0];

  const minimumDate = new Date("1970-01-01").toISOString();

  const [values, handleChange, setValues] = useForm({
    name: "",
    age: "",
    nationality: "",
    comment: "",
    location: "",
    date: "",
    type: "",
    rating: "",
    duration: 0,
    orgasm: orgasm,
    protection: protection,
  });

  const [selectedFile, setSelectedFile] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    service.get("/api/user").then((res) => {
      const partners = res.data.partners;
      // const partnersInfo = partners.map((info) => {
      //   return info
      // });
      setPartnersName(partners);
    });
  }, []);

  const handlePartnersList = (e) => {
    const name = e.target.value;
    const partner = partnersName.find((partner) => partner.name === name);
    setValues({
      ...values,
      name: partner.name,
      age: partner.age,
      nationality: partner.nationality,
      image: partner.image,
    });
  };

  const handleSubmit = (e) => {

    
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", values.name);
    fd.append("age", values.age);
    fd.append("image", selectedFile);
    fd.append("nationality", values.nationality);
    fd.append("comment", values.comment);
    fd.append("location", values.location);
    fd.append("date", values.date);
    fd.append("type", stage);
    fd.append("rating", values.rating);
    fd.append("duration", values.duration);
    fd.append("orgasm", orgasm);
    fd.append("protection", protection);

    apiHandler
      .addHook(fd)
      .then(() => {
        closeAddHook();
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <>
      <div className="addhook">
        <span onClick={closeAddHook} className="svgButton">
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
          <h2>Find a hook</h2>

          <input type="text" list="partners" onChange={handlePartnersList} />
          <datalist id="partners">
            {partnersName.map((partner) => {
              return <option key={partner.id} value={partner.name} />;
            })}
          </datalist>

          <h2 className="bold">Or add a new one</h2>

          <label htmlFor="name">What is your partner's name?</label>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="age">How old is he/she?</label>
          <input
            onChange={handleChange}
            value={values.age}
            type="number"
            id="age"
            name="age"
          />

          <div className="sameLine">
            <div className="left">
              <label htmlFor="location">Where</label>
              <input
                onChange={handleChange}
                value={values.location}
                type="text"
                id="location"
                name="location"
              />
            </div>
            <div className="right">
              <label htmlFor="date">When</label>
              <input
                onChange={handleChange}
                value={values.date}
                max={current}
                min={minimumDate}
                type="date"
                id="date"
                name="date"
              />
            </div>
          </div>

          <label htmlFor="type">Stage</label>
          <div className="stage">
            <p
              className={kissingIsActive ? "activeStage" : "stageItem"}
              onClick={() => {
                // setScore(score += 10)
                setStage("Kissing");
                setKissingIsActive((current) => !current);
                setForeplayIsActive(false);
                setSexIsActive(false);
              }}
            >
              Kissing
            </p>
            <p
              className={foreplayIsActive ? "activeStage" : "stageItem"}
              onClick={() => {
                // setScore(score += 20)
                setStage("Foreplay");
                setForeplayIsActive((current) => !current);
                setKissingIsActive(false);
                setSexIsActive(false);
              }}
            >
              Foreplay
            </p>
            <p
              className={sexIsActive ? "activeStage" : "stageItem"}
              onClick={() => {
                // setScore(score += 50)
                setStage("Sex");
                setSexIsActive((current) => !current);
                setKissingIsActive(false);
                setForeplayIsActive(false);
              }}
            >
              Sex
            </p>
          </div>

          <div className="newHookDuration">
            <label htmlFor="duration">Timing</label>
            <input
              onChange={handleChange}
              value={values.duration}
              defaultValue={null}
              min="0"
              max="2"
              type="range"
              id="duration"
              name="duration"
            />
            <div className="legendTiming">
              <p>Too short</p>
              <p>Perfect</p>
              <p>Too long</p>
            </div>
          </div>

          <p
            className={orgasm ? "activeTag" : "tag"}
            onClick={() => {
              setOrgasm(!orgasm) 
              // setScore(score += 50)
            }
              }
          >
            + You had an orgasm
          </p>

          <p
            className={protection ? "activeTag" : "tag"}
            onClick={() => {
              // setScore(score += 50)
              setProtection(!protection)}
            }
          >
            + You used protection
          </p>

          <label htmlFor="rating">Rating</label>
          <input
            onChange={handleChange}
            value={values.rating}
            type="number"
            id="rating"
            name="rating"
          />

          <label htmlFor="nationality">Nationality</label>
          <input
            onChange={handleChange}
            value={values.nationality}
            type="search"
            id="nationality"
            name="nationality"
          />

          <label htmlFor="comment">Comments</label>
          <input
            onChange={handleChange}
            value={values.comment}
            type="textarea"
            id="comment"
            name="comment"
          />

          <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} />

          <button type="submit" className="svgButton arrowButton">
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3177 20L11.6771 18.3807L18.4314 11.6264H0.938477V9.28267H18.4314L11.6771 2.54972L13.3177 0.909091L22.8632 10.4545L13.3177 20Z"
                fill="#11161B"
              />
            </svg>
          </button>

          {error && <h3 className="error">{error.message}</h3>}
        </form>
      </div>
    </>
  );
};

export default AddHookForm;
