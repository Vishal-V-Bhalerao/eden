import { createContext } from "react";
import useUserInfoHook from "../hooks/useUserInfoHook";
export const userInfoContext = createContext();

export function UserInfoContext({ children }) {
    const { userInfo, setUserInfo } = useUserInfoHook({})
    return (
        <userInfoContext.Provider value={{
            userInfo,
            setUserInfo
        }} >
            {children}
        </userInfoContext.Provider>
    )
}
