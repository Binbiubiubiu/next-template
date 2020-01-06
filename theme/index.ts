import theme from "styled-theming";
import Colors from "../theme/colors";

theme.variants("primary", "mode", {
  default: { light: Colors.grayLight, dark: Colors.grayDark },
  primary: { light: Colors.blueLight, dark: Colors.blueDark }
});
