import React, { useState } from "react";
import { nanoid } from "nanoid";
import moment from "moment";
import "moment/locale/ru";

import StepsForm from "./StepsForm";
import StepsTable from "./StepsTable";

moment.locale("ru");

const Steps = () => {
  const [steps, setSteps] = useState([]);

  const formSubmitHandle = (item) => {
    const newItem = {
      ...item,
      id: nanoid(8),
    };

    setSteps((prevSteps) => {
      if (
        prevSteps.some((prevItem) => moment(prevItem.date).isSame(item.date))
      ) {
        return prevSteps.map((prevItem) => {
          if (moment(prevItem.date).isSame(item.date)) {
            return {
              ...prevItem,
              distance: prevItem.distance + item.distance,
            };
          }

          return prevItem;
        });
      }

      return [...prevSteps, newItem];
    });
  };

  const itemRemoveHandle = (id) => {
    setSteps((prevSteps) => {
      return prevSteps.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StepsForm onSubmit={formSubmitHandle} />
      <StepsTable items={steps} onRemoveItem={itemRemoveHandle} />
    </>
  );
};

export default Steps;
