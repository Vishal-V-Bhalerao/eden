import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { stepContext } from '../../context/stepContext'
import { userInfoContext } from '../../context/userInfoContext'
import SubForm from '../subForm/SubForm'

export function FormStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children)
    const { step, setStep } = useContext(stepContext)
    const { setUserInfo } = useContext(userInfoContext)
    const currentChildren = childrenArray[step]
    const isLastStep = function () {
        return step === childrenArray.length - 1
    }
    return (
        <Formik  {...props}
            validationSchema={currentChildren.props.validationSchema}
            onSubmit={(values) => {
                if (isLastStep()) {
                    alert('submission complete !')
                }
                else {
                    setStep(step + 1);
                    setUserInfo(values)
                    console.log(values)
                }
            }}
        >{props => (
            <Form onSubmit={props.handleSubmit}>
                {currentChildren}
                <SubForm><button className='form-button' type="submit">{isLastStep() ? 'Launch Eden' : 'Create Workspace'}</button></SubForm>
            </Form>
        )}
        </Formik>
    )
}