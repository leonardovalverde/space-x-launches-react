import { StyledText } from "./styles";
import { TextProps } from "./types";

const Text = ({
  children,
  as = "p",
  mt,
  mb,
  ml,
  mr,
  padding,
  color,
}: TextProps): JSX.Element => {
  return (
    <StyledText
      as={as}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      padding={padding}
      color={color}
    >
      {children}
    </StyledText>
  );
};

export default Text;
