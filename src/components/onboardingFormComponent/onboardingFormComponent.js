import React, { useState } from 'react'
import FormHeaderComponent from '../formHeaderComponent/formHeaderComponent'
import { Field, Form, Formik } from 'formik'
import SubForm from '../subFormComponent/SubForm'
import './index.css'
export default function OnboardingFormComponent() {
    const nameValidation = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }
        return
    }

    const workValidation = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
        return errors
    }
    const planValidation = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
        return errors
    }
    return (
        <div className="form-parent">
            <div className='form-div flex-column' >
                <div>
                    <img src='./icons/eden.PNG' alt="logo" ></img>
                </div>
                <div className='flex-div flex-row justify-center mt80' >
                    <div className='flex-div flex-row progress-bar' >
                        <div className='step-container' ><div className='progress-step step' >1</div></div>
                        <div className='step-container' ><div className='progress-step step' >2</div></div>
                        <div className='step-container' ><div className='progress-step step' >3</div></div>
                        <div className='step-container' ><div className='progress-step step' >4</div></div>
                    </div>
                </div>
                <div className='mt80' >
                    <FormHeaderComponent></FormHeaderComponent>
                </div>
                <div className='mt80'>
                    <StepForm initialValues={{
                        fullName: '',
                        displayName: '',
                        workspaceName: ''
                    }}
                    >
                        {/* form 1 */}
                        <SubForm validate={nameValidation} >
                            <div className='field-div'>
                                <label htmlFor="fullName">Full Name</label>
                                <Field name="fullName" className="input-primary" label="Full Name" ></Field>
                                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                            </div>
                            <div className='field-div'>
                                <label htmlFor="displayName">Display Name</label>
                                <Field name="displayName" className="input-primary" label="Display Name" ></Field>
                            </div>
                        </SubForm>
                        {/* form 2 */}
                        <SubForm validate={workValidation} >
                            <div className='field-div'>
                                <label htmlFor="workspaceName">Workspace Name</label>
                                <Field name="workspaceName" className="input-primary" label="Workspace Name" ></Field>
                            </div>
                            <div className='field-div'>
                                <label htmlFor="workspaceUrl">Workspace Url</label>
                                <div className='flex-div flex-row'>
                                    <div className='fixed-url'> www.eden.com </div>
                                    <Field name="workspaceUrl" className="input-primary url-input" label="Workspace Url" ></Field>
                                </div>
                            </div>
                        </SubForm>
                        {/* form 3 */}
                        <SubForm validate={planValidation} >
                            <div role="group" className='flex-div flex-row'>
                                <div className='field-div'>
                                    <label htmlFor="plan">
                                        <Field className='plan-radio' type="radio" name="plan" value="mySelf" ></Field>
                                        <div className='plan-option'>
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
                                        <div className='plan-option'>
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
                    </StepForm>
                </div>
            </div>
        </div>
    )
}


export function StepForm({ children, ...props }) {
    const childrenArray = React.Children.toArray(children)
    const [step, setStep] = useState(0)
    const currentChildren = childrenArray[step]
    const isLastStep = function () {
        return step === childrenArray.length - 1
    }
    console.log(currentChildren);
    return (
        <Formik  {...props}
            validationSchema={currentChildren.props.validationSchema}
            onSubmit={(values) => {
                if (isLastStep()) {
                    alert('submission complete !')
                }
                else {
                    setStep(step + 1);
                }
            }}
        >{props => (
            <Form onSubmit={props.handleSubmit}>
                {currentChildren}
                <button className='form-button' type="submit">{isLastStep() ? 'Launch Eden' : 'Create Workspace'}</button>
            </Form>
        )}
        </Formik>
    )
}