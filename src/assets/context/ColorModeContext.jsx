import { createContext, useState, useContext } from "react";

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState("default"); // default, light ou dark

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

// Hook para facilitar o uso
export function useColorMode() {
  return useContext(ColorModeContext);
}
