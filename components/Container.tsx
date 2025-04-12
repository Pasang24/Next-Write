import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-5xl p-2 xs:p-4 sm:p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
