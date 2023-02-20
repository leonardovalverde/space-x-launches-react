export interface TextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  padding?: number;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
}
