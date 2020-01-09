module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["emotion"],
    [
      "macros",
      {
        tailwind: {
          config: "./tailwind.config.js",
          format: "auto"
        }
      }
    ],
    ["inline-react-svg"],
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@": "./src"
        }
      }
    ]
  ]
};
