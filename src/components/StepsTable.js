import React from "react";

const StepsTable = (props) => {
  const sorting = [...props.items];
  sorting.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    sorting.length > 0 && (
      <table className="table">
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {sorting.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.distance}</td>
              <td>
                <button
                  className="removeButton"
                  type="button"
                  onClick={() => props.onRemoveItem(item.id)}
                >
                  ✘
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default StepsTable;
