import { useState } from "react";
import Card from "../../components/Card";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import { Launche } from "../../hooks/types";
import { useLaunches } from "../../hooks/useLaunches";
import { colors } from "../../ui-tokens/colors";
import { spacings } from "../../ui-tokens/spacings";
import {
  Container,
  HeaderContainer,
  LaunchesContainer,
  PanelContainer,
} from "./styles";

const Launches = (): JSX.Element => {
  const [launchesToShow, setLaunchesToShow] = useState<Launche[]>([]);
  const { pastLaunches, nextLaunch, latestLaunch, upcomingLaunches } =
    useLaunches(["past", "next", "latest", "upcoming"]);

  // Caso você queira testar visualmente uma condição que não haja lançamentos, basta deletar algum valor do array de useLaunches

  const handleLaunchesToShow = (launches: Launche[] | Launche) => {
    if (!Array.isArray(launches) && Object.keys(launches).length > 0)
      setLaunchesToShow([launches]);
    else if (Array.isArray(launches) && Object.keys(launches[0]).length > 0) {
      setLaunchesToShow(launches);
    } else {
      setLaunchesToShow([]);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Text as="h1" mb={spacings.x4}>
          Histórico de lançamentos da SpaceX
        </Text>
        <Text as="span" mb={spacings.x15}>
          Confira abaixo todos os lançamentos da SpaceX 🚀
        </Text>
      </HeaderContainer>
      <PanelContainer>
        <Panel
          title="Úiltimos lançamentos"
          description="todos os últimos lançamentos da SpaceX."
          imageSrc="/assets/star-astronaut.jpg"
          roundedImage
          buttonVariant="primary"
          buttonDescription="Buscar Informações"
          onClick={() => handleLaunchesToShow(pastLaunches)}
        />
        <Panel
          title="Lançamento mais recente"
          description="Perdeu o lançamento? Aqui estão as informações!"
          buttonVariant="primary"
          buttonDescription="Buscar Informações"
          onClick={() => handleLaunchesToShow(latestLaunch)}
        />
        <Panel
          title="Próximo lançamento"
          description="Fique ligado nas informações mais quentinhas!"
          buttonVariant="primary"
          buttonDescription="Buscar Informações"
          onClick={() => handleLaunchesToShow(nextLaunch)}
        />
        <Panel
          title="Lançamentos que estão por vir"
          titleColor={colors.green}
          description="Fique por dentro das informações de lançamentos futuros."
          imageSrc="/assets/moon-astronaut.jpg"
          roundedImage
          buttonVariant="secondary"
          buttonDescription="Buscar Informações"
          onClick={() => handleLaunchesToShow(upcomingLaunches)}
        />
      </PanelContainer>
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
                    ? launch.failures
                        .map((failure) => failure.reason)
                        .join(", ")
                    : "Não há informações de falhas",
                },
              ]}
            />
          ))
        ) : (
          <Text>Não existem lançamentos para o período selecionado</Text>
        )}
      </LaunchesContainer>
    </Container>
  );
};

export default Launches;
