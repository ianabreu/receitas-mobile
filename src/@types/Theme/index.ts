export interface Icolors {
  background: string;
  primary: string;
  card: string;
  text: string;
  textSemiDark: string;
  textSoft: string;
  textLight: string;
  border: string;
  notification: string;
}

export interface Imetrics {
  padding_small: number;
  padding_default: number;
  padding_large: number;
  margin_small: number;
  margin_default: number;
  margin_large: number;
  screenWidth: number;
  screenHeight: number;
  tabBarHeight: number;
  navBarHeight: number;
  statusBarHeight: number;
  radius_small: number;
  radius_default: number;
  radius_large: number;
  radius_xlarge: number;
}
export interface Ifonts {
  family: {
    regular: string;
    bold: string;
  };
  size: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
}
