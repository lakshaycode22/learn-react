import React from "react";

const List = ({ meeting }) => {
  return (
    <>
      {meeting.map((meet) => {
        const { id, name, time, image } = meet;
        return (
          <article key={id} className="meet">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{time}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
