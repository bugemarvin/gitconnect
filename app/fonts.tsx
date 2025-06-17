import localFont from "next/font/local";

const lora = localFont({
  src: [
    {
      path: "./fonts/lora/static/Lora-Regular.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/lora/static/Lora-Bold.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/lora/static/Lora-BoldItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "./fonts/lora/static/Lora-Italic.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/lora/static/Lora-Medium.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/lora/static/Lora-MediumItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/lora/static/Lora-SemiBold.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/lora/static/Lora-SemiBoldItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
});

export const fonts = {
  lora,
};
