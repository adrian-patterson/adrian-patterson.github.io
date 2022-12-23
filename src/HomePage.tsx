import { Button, grommet, Grommet, Header, HeaderExtendedProps, Page, PageContent, PageHeader, Text } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import { useState } from 'react';

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "neutral-4",
      pageBackground: {
        dark: "dark-1",
        light: "light-1"
      }
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
    dark: "#9B59B6",
    light: "#C39BD3"
  },
});

const AppBar = (props: HeaderExtendedProps) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

function HomePage() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <Grommet theme={theme} full themeMode={darkTheme ? "dark" : "light"}>
      <Page height="100%" background="pageBackground">
        <AppBar>
          <Text weight="bold" size="large">Adrian Patterson</Text>
          <Button
            icon={darkTheme ? <Moon /> : <Sun />}
            onClick={() => setDarkTheme((darkTheme) => !darkTheme)}
          />
        </AppBar>
        <PageContent align='center'>
          <PageHeader title="Welcome to my home page!" />
          <Text size="large">🚧 Under construction... 🚧</Text>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default HomePage;
