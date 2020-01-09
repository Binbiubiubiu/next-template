/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "tailwind.macro";

declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.png";
declare module "*.jpg";
