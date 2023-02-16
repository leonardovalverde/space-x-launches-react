export interface PanelProps {
  imageSrc?: string;
  roundedImage?: boolean;
  title?: string;
  titleColor?: string;
  description?: string;
  descriptionColor?: string;
  onClick?: () => void;
  buttonVariant: "primary" | "secondary";
  buttonDescription?: string;
}
