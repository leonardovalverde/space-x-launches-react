export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: "primary" | "secondary";
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
}
