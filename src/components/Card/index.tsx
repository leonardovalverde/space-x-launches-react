import Text from "../Text";
import { CardContainer } from "./styles";
import { CardProps } from "./types";

const Card = ({ data }: CardProps) => {
  return (
    <CardContainer>
      {/* Aqui eu utilizei o index como key apenas por se tratar de uma listagem estática, sem filtros */}
      {data.map((item, index) => (
        <Text as="span" key={index}>
          {item.label}: {item.value}
        </Text>
      ))}
    </CardContainer>
  );
};

export default Card;
