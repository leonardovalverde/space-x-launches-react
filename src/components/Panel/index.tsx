import { spacings } from "../../ui-tokens/spacings";
import Button from "../Button";
import Text from "../Text";
import { Container, PanelImage } from "./styles";
import { PanelProps } from "./types";

const Panel = ({
  imageSrc,
  roundedImage,
  title,
  titleColor,
  description,
  descriptionColor,
  onClick,
  buttonVariant,
  buttonDescription,
}: PanelProps) => {
  return (
    <Container>
      {imageSrc && <PanelImage src={imageSrc} roundedImage={roundedImage} />}
      {title && (
        <Text as="h2" mb={spacings.x2} mt={spacings.x2} color={titleColor}>
          {title}
        </Text>
      )}
      {description && (
        <Text as="span" color={descriptionColor}>
          {description}
        </Text>
      )}
      <Button onClick={onClick} variant={buttonVariant} mt={spacings.x6}>
        {buttonDescription}
      </Button>
    </Container>
  );
};

export default Panel;
