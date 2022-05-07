import { Field } from 'formik'
export default function PlanCard({ plan, setPlan }) {
    return (
        <div className='field-div'>
            <label htmlFor="plan">
                <Field className='plan-radio' type="radio" name="plan" value="team" ></Field>
                <div className={plan === 'team' ? 'selected-plan' : 'plan-option'} onClick={() => setPlan('team')}>
                    <img className='user-icon' src="./icons/user-group-solid.svg" alt='single user' />
                    <h4>For myself</h4>
                    <span>
                        Write better. Think more clearly. Stay organized.
                    </span>
                </div>
            </label>
        </div>
    )
}