import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import { LaunchesContainer } from "./styles";
import { LaunchesDataProps } from "./types";

const LaunchesData = ({ launchesToShow }: LaunchesDataProps): JSX.Element => {
  return (
    <LaunchesContainer>
      {launchesToShow.length > 0 ? (
        launchesToShow.map((launch) => (
          <Card
            data={[
              {
                label: "Nome",
                value: launch.name,
              },
              {
                label: "Data Local",
                value: launch.date_local,
              },
              {
                label: "Número do vôo",
                value: launch.flight_number,
              },
              {
                label: "Falhas",
                value: launch.failures?.length
                  ? launch.failures.map((failure) => failure.reason).join(", ")
                  : "Não há informações de falhas",
              },
            ]}
          />
        ))
      ) : (
        <Text as="span">
          Não existem lançamentos para o período selecionado
        </Text>
      )}
    </LaunchesContainer>
  );
};

export default LaunchesData;
