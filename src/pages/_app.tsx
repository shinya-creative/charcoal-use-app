import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { light, CharcoalTheme } from "@charcoal-ui/theme";

// styled-componentsのDefaultThemeをCharcoalThemeで拡張
import "styled-components";
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends CharcoalTheme {}
}

export default function App({ Component }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component />
    </ThemeProvider>
  );
}
