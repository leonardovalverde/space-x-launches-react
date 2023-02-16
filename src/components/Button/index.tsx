import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  children,
  onClick,
  disabled,
  variant,
  mt,
  mb,
  ml,
  mr,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      mb={mb}
      ml={ml}
      mr={mr}
      mt={mt}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
