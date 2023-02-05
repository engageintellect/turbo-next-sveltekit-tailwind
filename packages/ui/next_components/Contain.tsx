import * as React from "react";

// create a container component that wraps a child component using typescript
export const Contain = (props: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto p-2 lx:p-4">
      <div className="">{props.children}</div>
    </div>
  );
};
