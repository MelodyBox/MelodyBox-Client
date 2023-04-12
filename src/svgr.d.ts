declare module "*.svg" {
  const svgPath: string;
  export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default svgPath;
}
