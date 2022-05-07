import { useState } from "react";

export default function useUserInfoHook(initialValues) {
    const [userInfo, setUserInfo] = useState(initialValues)
    return {
        userInfo,
        setUserInfo
    }
}