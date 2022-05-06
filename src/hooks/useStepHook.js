import { useState } from "react";

export default function useSteps(initialState) {
    const [step, setStep] = useState(initialState)
    return {
        step,
        setStep
    }
}