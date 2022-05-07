import { useContext } from "react"
import { stepContext } from "../../context/stepContext"
import './index.css'
export default function ProgressBarComponent() {
    const { step } = useContext(stepContext)
    return (
        <div className='flex-div flex-row progress-bar' >
            <div className='step-container-filled' ><div className='progress-step steps' >1</div></div>
            <div className={step >= 1 ? 'step-container-filled' : 'step-container-empty'} >
                <div className={step >= 1 ? 'progress-step color-animation steps' : 'progress-empty color-animation steps'} >2</div>
            </div>
            <div className={step >= 2 ? 'step-container-filled' : 'step-container-empty'} >
                <div className={step >= 2 ? 'progress-step color-animation steps' : 'progress-empty color-animation steps'}  >3</div>
            </div>
            <div className={step >= 3 ? 'step-container-filled' : 'step-container-empty'} >
                <div className={step >= 3 ? 'progress-step color-animation steps' : 'progress-empty color-animation steps'} >4</div>
            </div>
        </div>
    )
}