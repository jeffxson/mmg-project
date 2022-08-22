import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
export const customTheme = extendTheme({
  fonts: {
    heading: `Readex Pro`,
    body: `Readex Pro`,
  },
  config,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          border: "1px solid #01a3a4",
          bgColor: "none",
          size: "md",
          color: "#fff",
          fontWeight: "500",
          _hover: {
            boxShadow: "lg",
            bgColor: "lightMode.pryColor",
          },
          _focus: {
            bgColor: "lightMode.pryColor",
          },
          _active: {
            bgColor: "lightMode.pryColor",
            filter: "brightness(50%)",
          },
        },
        secondary: {
          bgColor: "none",
          size: "md",
          border: "1px solid #01a3a4",
          color: "#01a3a4",
          fontWeight: "500",
          _hover: {
            bgColor: "lightMode.blue",
          },
          _focus: {
            bgColor: "lightMode.blue",
          },
          _active: {
            bgColor: "lightMode.blue",
            filter: "brightness(90%)",
          },
        },
        danger: {
          bgColor: "red.500",
          color: "#f3f3f3",
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    darkGreen: "#002d2d",
    darkMode: {
      pryColor: "#01a3a4",
      mainBgColor: "#223548",
      mainTextColor: "#f3f3f3",
      navItemColor: "#0B526F",
      btnBgColor: "#01a3a4",
      inputBgColor: "#ADB3B8",
      shadowColor: "#08090E",
    },
    lightMode: {
      mainBgColor: "#f1f1f1",
      navBgColor: "#00609C",
      secBgColor: "#D9E3EB",

      // miniBgColor: " #1C2A35",
      inputBgColor: "white",

      dashboardHeader: "#D9D9D9",
      widgetBackground: "#F7F7F7",
      miniBgColor: "#dedede",

      darkTextColor: "#000000",
      mainTextColor: "#000000",
      btnTextColor: "black",
      labelTextColor: "#00000040",
      cardBgColor: "#FFFFFF",
      pryColor: "#01a3a4",
      labelBgColor: "#7BB4E3",
    },
  },
});
