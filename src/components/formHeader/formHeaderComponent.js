import { useContext } from 'react';
import { stepContext } from '../../context/stepContext';
import './index.css'
export default function FormHeaderComponent() {
    const headingsArray = [
        {
            tab: 0,
            main: "Welcome! First things First...",
            sub: "You can always change them later."
        },
        {
            tab: 1,
            main: "Let's set up a home for all your work",
            sub: "You can always create another workspace later."
        },
        {
            tab: 2,
            main: "How are you planning to use Eden?",
            sub: "We'll streamline your setup experience accordingly."
        },
        {
            tab: 3,
            img: './icons/completed.PNG',
            main: "Congratulations, !",
            sub: "You have completed onboarding, you can start using the eden!"
        }
    ];
    const { step } = useContext(stepContext)
    const currentHeading = headingsArray.find(header => {
        return header.tab === step
    })
    return (
        <div className="flex-div flex-column">
            {currentHeading.img ? <img className='complete-image' src={currentHeading.img} alt='onboarding complete'></img> : ''}
            <div className="flex-div flex-row header-main" >
                <span className='form-header-main' >{currentHeading.main}</span>
            </div>
            <div className="flex-div flex-row header-sub" >
                <span>{currentHeading.sub}</span>
            </div>
        </div>
    )
}