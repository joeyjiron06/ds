import { cva } from "class-variance-authority";

export const inputConfig = {
  variants: {
    size: {
      sm: "px-2 py-0.5",
      md: "px-4 py-1",
      lg: "px-6 py-3",
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
      pressed: "",
      disabled: "",
    },
    style: {
      outlined: "",
      filled: "",
      underlined: "",
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
      state: "pressed",
      className: `border border-border text-text`,
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
      state: "pressed",
      className: `bg-background text-text border-transparent`,
    },
    {
      style: "filled",
      state: "disabled",
      className: `bg-background bg-subtle text-text border-transparent opacity-75 cursor-not-allowed`,
    },

    // underlined
    {
      style: "underlined",
      state: "rest",
      className: `border-b border-b-border text-text`,
    },
    {
      style: "underlined",
      state: "hover",
      className: `border-b border-b-border text-text`,
    },
    {
      style: "underlined",
      state: "focused",
      className: `border-b border-b-focus-ring text-text`,
    },
    {
      style: "underlined",
      state: "pressed",
      className: `border-b border-b-border text-text`,
    },
    {
      style: "underlined",
      state: "disabled",
      className: `border-b border-b-border-subtle text-text opacity-75 cursor-not-allowed`,
    },
  ],

  defaultVariants: {
    size: "md",
    roundness: "none",
  },
};

// const formElements = {
//   defaults: [
//     // spacing
//     "px-4 py-2",
//     "flex",
//     "gap-2",

//     // typography
//     typography.body,
//   ],

//   variants: {
//     size: {
//       sm: "px-2 py-1",
//       md: "px-4 py-2",
//       lg: "px-6 py-3",
//     },
//     roundness: {
//       none: "rounded-none",
//       sm: "rounded-sm",
//       md: "rounded-md",
//       lg: "rounded-lg",
//       full: "rounded-full",
//     },
//     // style: {
//     //   primary: '',
//     //   secondary: '',
//     //   accent: '',
//     //   outline: `border border-${colors.background[2]}`,
//     //   underline: "border-b border-gray-300",
//     // },
//     state: {
//       rest: "",
//       hover: "",
//       focused: "",
//       pressed: "",
//       disabled: "",
//     },
//   },
// };

export const inputs = cva(
  [
    // spacing
    "flex",
    "gap-2",
    "items-center",

    // typography
    "text-sm",

    "outline-offset-0",
  ],
  inputConfig
);
