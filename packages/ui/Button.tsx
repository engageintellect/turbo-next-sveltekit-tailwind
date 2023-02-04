import * as React from "react";

// create button that takes props for the label and the click handler
export const Button = (props: { label: string; url?: string }) => {
  return (
    <a href={props.url}>
      <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded hover:scale-[102%] transition-all duration-200">
        {props.label}
      </button>
    </a>
  );
};
