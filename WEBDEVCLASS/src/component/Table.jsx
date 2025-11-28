import React from "react";

const Table = ({ num }) => {
  // Simulating a delay loop (though it's not recommended in React for performance reasons)
  let i = 0;
  while (i < 2000) i++;

  return (
    <div>
      <h3>Table of {num}</h3>
      {Array.from({ length: 10 }, (_, i) => (
        <p key={i}>
          {num} x {i + 1} = {num * (i + 1)}
        </p>
      ))}
    </div>
  );
};

export default React.memo(Table);
