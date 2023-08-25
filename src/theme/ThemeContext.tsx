import React, { createContext, useContext, useState, ReactNode } from "react";
import { lightTheme, Theme } from "./themes";

//Types
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const toggleTheme = () => {
    setTheme(
      //theme ===
      lightTheme
      //? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
