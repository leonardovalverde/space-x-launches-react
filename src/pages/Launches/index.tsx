import { useState } from "react";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import { Launche } from "../../hooks/types";
import { useGetGoogleOptimizeVariant } from "../../hooks/useGoogleOptimze";
import { useLaunches } from "../../hooks/useLaunches";
import { colors } from "../../ui-tokens/colors";
import { spacings } from "../../ui-tokens/spacings";
import LaunchesData from "./components/LaunchesData";
import { colorSchema, launchesMainPageExperimentId } from "./constants";
import { Container, HeaderContainer, PanelContainer } from "./styles";

const Launches = (): JSX.Element => {
  const [launchesToShow, setLaunchesToShow] = useState<Launche[]>([]);
  const { variant } = useGetGoogleOptimizeVariant(launchesMainPageExperimentId);
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
          titleColor={(variant && colorSchema[variant][1]) || colors.primary}
          description="todos os últimos lançamentos da SpaceX."
          imageSrc="/assets/star-astronaut.jpg"
          roundedImage
          buttonVariant="primary"
          buttonDescription="Buscar Informações"
          buttonTestId="past-launches-button"
          onClick={() => handleLaunchesToShow(pastLaunches)}
        />
        <Panel
          title="Lançamento mais recente"
          titleColor={(variant && colorSchema[variant][2]) || colors.primary}
          description="Perdeu o lançamento? Aqui estão as informações!"
          buttonVariant="primary"
          buttonDescription="Buscar Informações"
          buttonTestId="latest-launches-button"
          onClick={() => handleLaunchesToShow(latestLaunch)}
        />
        <Panel
          title="Próximo lançamento"
          titleColor={(variant && colorSchema[variant][3]) || colors.primary}
          description="Fique ligado nas informações mais quentinhas!"
          buttonVariant="primary"
          buttonDescription="Buscar Informações"
          buttonTestId="next-launches-button"
          onClick={() => handleLaunchesToShow(nextLaunch)}
        />
        <Panel
          title="Lançamentos que estão por vir"
          titleColor={(variant && colorSchema[variant][4]) || colors.primary}
          description="Fique por dentro das informações de lançamentos futuros."
          imageSrc="/assets/moon-astronaut.jpg"
          roundedImage
          buttonVariant="secondary"
          buttonDescription="Buscar Informações"
          buttonTestId="upcoming-launches-button"
          onClick={() => handleLaunchesToShow(upcomingLaunches)}
        />
      </PanelContainer>
      <LaunchesData launchesToShow={launchesToShow} />
    </Container>
  );
};

export default Launches;
