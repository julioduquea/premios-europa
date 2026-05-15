import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  asChild = false,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition disabled:pointer-events-none disabled:opacity-50";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${base} ${className} ${children.props.className || ""}`,
      ...props,
    });
  }

  return (
    <button type={type} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
