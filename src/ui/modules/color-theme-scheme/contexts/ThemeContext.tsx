import React, { createContext, useState } from 'react';

type ThemeContextProps = {
  colorSchema: string
  changeTheme: (theme: string) =>  void,
}

type ThemeProviderProps = {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>(undefined!);

const getInitialState = (): string => {
  const userPrefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userPrefersLight: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  if(userPrefersDark){
    return "dark"
  } else if(userPrefersLight) {
    return "light"
  }
  return "light"
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorSchema, setColorSchema] = useState<string>(getInitialState())

  const defaultTheme = 'dark';

  React.useEffect(() => { 
    changeTheme(colorSchema)
    const preferDarkQuery: string = `(prefers-color-scheme: ${defaultTheme})`
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const handleChange = () => {
      setColorSchema(mediaQuery.matches ? 'dark' : 'light')
      changeTheme(mediaQuery.matches ? 'dark' : 'light')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
 
  const changeTheme = (theme: string) => {
    const body = document.body;
    if(theme === "dark") {
      body.classList.remove("lighted")
      body.classList.add("darked");
     
    }
    else {
      body.classList.remove("darked")
      body.classList.add("lighted");
    }
    setColorSchema(theme);
  }
  return (
    <ThemeContext.Provider
      value={{
        colorSchema,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;