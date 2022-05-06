import { createContext } from "react"
import useSteps from "../hooks/useStepHook"

export const stepContext = createContext()
export function StepContext({ initialState, children }) {
    const { step, setStep } = useSteps(initialState)
    return (
        <stepContext.Provider value={{
            step,
            setStep
        }} >
            {children}
        </stepContext.Provider>
    )
}