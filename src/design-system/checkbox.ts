import { cva } from "class-variance-authority";

export const checkboxConfig = {
  variants: {
    size: {
      sm: "size-2",
      md: "size-4",
      lg: "size-6",
    },
    roundness: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    state: {
      rest: "",
      hover: "",
      focused: "",
      checked: "",
      disabled: "",
    },
    style: {
      outlined: "",
      filled: "",
    },
  },

  compoundVariants: [
    // outlined
    {
      style: "outlined",
      state: "rest",
      className: `border border-border text-text`,
    },
    {
      style: "outlined",
      state: "hover",
      className: `border border-border text-text`,
    },
    {
      style: "outlined",
      state: "focused",
      className: `border border-border text-text outline outline-focus-ring`,
    },
    {
      style: "outlined",
      state: "checked",
      className:
        "border border-accent text-text bg-center bg-contain bg-no-repeat bg-check-outline",
    },
    {
      style: "outlined",
      state: "disabled",
      className: `border border-border-subtle text-text opacity-75 cursor-not-allowed`,
    },

    // filled
    {
      style: "filled",
      state: "rest",
      className: `bg-background text-text border-transparent`,
    },
    {
      style: "filled",
      state: "hover",
      className: `bg-background text-text border-transparent`,
    },
    {
      style: "filled",
      state: "focused",
      className: `bg-background text-text border-transparent outline outline-focus-ring`,
    },
    {
      style: "filled",
      state: "checked",
      className:
        "border border-accent text-text bg-center bg-contain bg-no-repeat bg-check-filled",
    },
    {
      style: "filled",
      state: "disabled",
      className: `bg-background bg-subtle text-text border-transparent opacity-75 cursor-not-allowed`,
    },
  ],

  defaultVariants: {
    size: "md",
    roundness: "none",
  },
};

export const checkboxes = cva(
  [
    // spacing
    "flex",
    "gap-2",
    "items-center",

    // typography
    "text-sm",

    // other
    "outline-offset-0 appearance-none",
  ],
  checkboxConfig
);
