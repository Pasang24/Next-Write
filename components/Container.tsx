import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl p-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
