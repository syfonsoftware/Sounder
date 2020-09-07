import React, { useState, FC } from 'react';
import GlobalStyle from './components/GlobalStyle';
import { GlobalContextProvider, IsDarkThemeDispatcher, IsMobileDispatcher, GlobalContextValues, initialGlobalStoreValue } from './context/globalContext';
import { BrowserRouter } from 'react-router-dom';

interface AppProps {}

const {
  isDarkTheme,
  isMobile,
}: GlobalContextValues = initialGlobalStoreValue;

const App: FC<AppProps> = (): JSX.Element => {
  const [
    isDarkThemeLocal,
    setIsDarkThemeLocal,
  ]: IsDarkThemeDispatcher = useState(isDarkTheme);
  const [isMobileLocal, setIsMobileLocal]: IsMobileDispatcher = useState(
    isMobile
  );
  return (
    <GlobalContextProvider value={{
      isDarkThemeDispatcher: [isDarkThemeLocal, setIsDarkThemeLocal],
      isMobileDispatcher: [isMobileLocal, setIsMobileLocal],
    }}>
      <BrowserRouter>
        <GlobalStyle />
        TEST
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
