import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StepsForm = (props) => {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const dateChange = (date) => {
    setForm((prevForm) => ({
      ...prevForm,
      date,
    }));
  };

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitHandle = (event) => {
    if (form.date !== null && form.distance !== "") {
      props.onSubmit({
        ...form,
        distance: parseInt(form.distance),
      });
      setForm({
        date: "",
        distance: "",
      });
    }

    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={submitHandle}>
      <div className="div">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={form.date}
          onSelect={dateChange}
        />
      </div>
      <div className="div">
        <label htmlFor="distance">Пройдено км</label>
        <input
          id="distance"
          name="distance"
          value={form.distance}
          onChange={inputChange}
        />
      </div>
      <div className="div submitDiv">
        <button className="submitButton">Ок</button>
      </div>
    </form>
  );
};

export default StepsForm;
