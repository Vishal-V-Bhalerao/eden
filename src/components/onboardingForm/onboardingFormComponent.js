import React, { useState } from 'react'
import FormHeaderComponent from '../formHeader/formHeaderComponent'
import ProgressBarComponent from '../progressBar/progressBarComponent'
import { Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { FormStepper } from '../formStepper/formStepper'
import { UserInfoContext } from '../../context/userInfoContext'
import SubForm from '../subForm/SubForm'
import './index.css'

export default function OnboardingFormComponent() {
    const nameSchema = object({
        fullName: string()
            .max(200, 'Too Long!')
            .required('Full name is Required'),
        displayName: string()
            .max(200, 'Too Long!')
            .required('Display name is Required'),
    })
    const workPlaceSchema = object({
        workspaceName: string()
            .max(200, 'Too Long!')
            .required('Workspace name is Required'),
    })
    const planSchema = object().shape({
    })
    const [plan, setPlan] = useState('self')
    return (
        <div className="form-parent">
            <UserInfoContext>
                <div className='form-div flex-column' >
                    <div className='flex-column-center' >
                        <img src='./icons/eden.PNG' alt="logo" ></img>
                    </div>
                    <div className='flex-div flex-row justify-center mt80' >
                        <ProgressBarComponent></ProgressBarComponent>
                    </div>
                    <div className='mt80' >
                        <FormHeaderComponent></FormHeaderComponent>
                    </div>
                    <div className=''>
                        <FormStepper initialValues={{
                            fullName: '',
                            displayName: '',
                            workspaceName: '',
                            workspaceUrl: '',
                            plan: ''
                        }}
                        >
                            {/* form 1 */}
                            <SubForm validationSchema={nameSchema} >
                                <div className='field-div'>
                                    <label htmlFor="fullName">Full Name</label>
                                    <Field name="fullName" className="input-primary" label="Full Name" placeholder="Steve Jobs"></Field>
                                    <ErrorMessage className="error-message" name="fullName" component="span" ></ErrorMessage>
                                </div>
                                <div className='field-div'>
                                    <label htmlFor="displayName">Display Name</label>
                                    <Field name="displayName" className="input-primary" label="Display Name" placeholder="Steve"></Field>
                                    <ErrorMessage className="error-message" name="displayName" component="span"  ></ErrorMessage>
                                </div>
                            </SubForm>
                            {/* form 2 */}
                            <SubForm validationSchema={workPlaceSchema} >
                                <div className='field-div'>
                                    <label htmlFor="workspaceName">Workspace Name</label>
                                    <Field name="workspaceName" className="input-primary" label="Workspace Name" ></Field>
                                    <ErrorMessage className="error-message" name="workspaceName" component="span" ></ErrorMessage>
                                </div>
                                <div className='field-div'>
                                    <label htmlFor="workspaceUrl">Workspace Url <span className='optional'>(optional)</span> </label>
                                    <div className='flex-div flex-row'>
                                        <div className='fixed-url'> www.eden.com </div>
                                        <Field name="workspaceUrl" className="input-primary url-input" label="Workspace Url" ></Field>
                                    </div>
                                </div>
                            </SubForm>
                            {/* form 3 */}
                            <SubForm validationSchema={planSchema} >
                                <div role="group" className='flex-div flex-row radio-container'>
                                    <div className='field-div'>
                                        <label htmlFor="plan">
                                            <Field className='plan-radio' type="radio" name="plan" value="mySelf" ></Field>
                                            <div className={plan === 'self' ? 'selected-plan' : 'plan-option'} onClick={() => setPlan('self')} >
                                                <img className='user-icon' src="./icons/user-solid.svg" alt='single user' />
                                                <h4>For myself</h4>
                                                <span>
                                                    Write better. Think more clearly. Stay organized.
                                                </span>
                                            </div>
                                        </label>
                                    </div>
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
                                </div>
                            </SubForm>
                            {/* form 4 */}
                            <SubForm>
                                <div></div>
                            </SubForm>
                        </FormStepper>
                    </div>
                </div>
            </UserInfoContext>
        </div>
    )
}
