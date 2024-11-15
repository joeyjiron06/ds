import { cva } from "class-variance-authority";

export const buttonConfig = {
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
      primary: "",
      secondary: "",
      outline: "",
      ghost: "",
      link: "",
    },
  },

  compoundVariants: [
    // primary
    {
      style: "primary",
      state: "rest",
      className: `bg-accent text-accent-foreground`,
    },
    {
      style: "primary",
      state: "hover",
      className: `bg-accent-2 text-accent-foreground`,
    },
    {
      style: "primary",
      state: "focused",
      className: `bg-accent text-accent-foreground outline outline-focus-ring`,
    },
    {
      style: "primary",
      state: "pressed",
      className: `bg-accent-3 text-accent-foreground `,
    },
    {
      style: "primary",
      state: "disabled",
      className: `bg-accent-3 text-accent-foreground opacity-75 cursor-not-allowed`,
    },

    // secondary
    {
      style: "secondary",
      state: "rest",
      className: `bg-background-2 text-text`,
    },
    {
      style: "secondary",
      state: "hover",
      className: `bg-background-3 text-text`,
    },
    {
      style: "secondary",
      state: "focused",
      className: `bg-background text-text outline outline-focus-ring`,
    },
    {
      style: "secondary",
      state: "pressed",
      className: `bg-background-3 text-text `,
    },
    {
      style: "secondary",
      state: "disabled",
      className: `bg-background-3 text-text opacity-75 cursor-not-allowed`,
    },

    // outline
    {
      style: "outline",
      state: "rest",
      className: `border border-border text-text`,
    },
    {
      style: "outline",
      state: "hover",
      className: `border border-border-2 bg-background text-text`,
    },
    {
      style: "outline",
      state: "focused",
      className: `border border-border text-text outline outline-focus-ring`,
    },
    {
      style: "outline",
      state: "pressed",
      className: `border border-accent-3 text-text bg-background-2`,
    },
    {
      style: "outline",
      state: "disabled",
      className: `border border-border-subtle text-text opacity-75 cursor-not-allowed`,
    },

    // ghost
    {
      style: "ghost",
      state: "rest",
      className: `bg-transparent text-text`,
    },
    {
      style: "ghost",
      state: "hover",
      className: `bg-background text-text`,
    },
    {
      style: "ghost",
      state: "focused",
      className: `bg-transparent text-text outline outline-focus-ring`,
    },
    {
      style: "ghost",
      state: "pressed",
      className: `bg-background-2 text-text `,
    },
    {
      style: "ghost",
      state: "disabled",
      className: `bg-transparent text-text opacity-75 cursor-not-allowed`,
    },

    // link
    {
      style: "link",
      state: "rest",
      className: `bg-transparent text-text underline`,
    },
    {
      style: "link",
      state: "hover",
      className: `bg-background text-text underline`,
    },
    {
      style: "link",
      state: "focused",
      className: `bg-transparent text-text underline outline outline-focus-ring`,
    },
    {
      style: "link",
      state: "pressed",
      className: `bg-transparent text-text underline font-medium`,
    },
    {
      style: "link",
      state: "disabled",
      className: `bg-transparent text-text underline opacity-75 cursor-not-allowed`,
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

export const buttons = cva(
  [
    // spacing
    "flex",
    "gap-2",
    "items-center",

    // typography
    "text-sm",
    // typography.body,

    "outline-offset-0",
  ],
  buttonConfig
);
