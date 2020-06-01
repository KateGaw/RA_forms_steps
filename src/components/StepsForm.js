import React, { useState } from "react";

const StepsForm = (props) => {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const submitHandle = (event) => {
    if (form.date !== "" && form.distance !== "") {
      event.preventDefault();
      props.onSubmit({
        ...form,
        distance: parseFloat(form.distance),
        date: form.date,
      });
      setForm({
        date: "",
        distance: "",
      });
    }
  };

  return (
    <form className="form" onSubmit={submitHandle}>
      <div className="div">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          id="date"
          name="date"
          value={form.date}
          onChange={inputChange}
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
