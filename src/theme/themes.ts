export interface Theme {
  colors: {
    background: string;
    primary: string;
    black: string;
    textDark: string;
    textSemiDark: string;
    textSoft: string;
    textLight: string;
    white: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: "#FAFAFA",
    primary: "#BE4C4C",
    black: "#000000",
    textDark: "#101010",
    textSemiDark: "#3A3A3A",
    textSoft: "#BABABA",
    textLight: "#FAFAFA",
    white: "#FFFFFF",
  },
  // outras propriedades de estilo...
};
// export const darkTheme: Theme = {
//   colors: {
//     background: "#FAFAFA",
//     primary: "#BE4C4C",
//     black: "#000000",
//     textDark: "#101010",
//     textSemiDark: "#3A3A3A",
//     textSoft: "#BABABA",
//     textLight: "#FAFAFA",
//     white: "#FFFFFF",
//   },
//   // outras propriedades de estilo...
// };
