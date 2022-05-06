import OnboardingFormComponent from './components/onboardingForm/onboardingFormComponent';
import './App.css';
import { StepContext } from './context/stepContext';

function App() {
  return (
    <div className="App">
      <StepContext initialState={0} >
        <OnboardingFormComponent></OnboardingFormComponent>
      </StepContext>
    </div>
  );
}

export default App;
