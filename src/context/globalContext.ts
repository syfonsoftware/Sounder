import { Dispatch, SetStateAction, Context, Consumer, Provider, createContext } from "react";

export type GlobalContext = Context<GlobalContextCompleteValues>;
type GlobalContextConsumer = Consumer<GlobalContextCompleteValues>;
type GlobalContextProvider = Provider<GlobalContextCompleteValues>;

export type IsDarkThemeDispatcher = [boolean, Dispatch<SetStateAction<boolean>>];
export type IsMobileDispatcher = [boolean, Dispatch<SetStateAction<boolean>>];

export interface GlobalContextCompleteValues {
    isDarkThemeDispatcher: IsDarkThemeDispatcher;
    isMobileDispatcher: IsMobileDispatcher;
}

export interface GlobalContextValues {
    isDarkTheme: boolean;
    isMobile: boolean;
}

export const initialGlobalStoreValue: GlobalContextValues = {
    isDarkTheme: window.localStorage.getItem("isDarkTheme") === "true" ? true : false,
    isMobile: window.innerWidth < 768 ? true : false,
}

const GlobalContext: GlobalContext = createContext<GlobalContextCompleteValues>(
    (initialGlobalStoreValue as unknown) as GlobalContextCompleteValues
);
export const GlobalContextConsumer: GlobalContextConsumer =
    GlobalContext.Consumer;
export const GlobalContextProvider: GlobalContextProvider =
    GlobalContext.Provider;

export default GlobalContext;