import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <h1 className="font-titleFont font-bold text-xl capitalize text-textColor relative z-10 px-6 py-3 border-b-[1px] border-b-zinc-800 group">
      <span className="text-designColor">{title}</span> {subTitle}
    </h1>
  );
};

export default Title;
