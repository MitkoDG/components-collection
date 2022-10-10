import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { useMultiStepForm } from "./useMultiStepForm"
import { UserForm } from "./UserForm"
import {FormEvent} from 'react'


function App() {
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultiStepForm([
    <UserForm />, <AddressForm />, <AccountForm />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
   <div style={{
    position: 'relative',
    background: 'white',
    border: '1px solid black',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '.5rem',
    fontFamily: 'Arial',
   }}>
    <form onSubmit={onSubmit}>
      <div style={{
        position: 'absolute',
        top: '.5rem',
        right: '.5rem'
      }}>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '.5rem',
        justifyContent: 'flex-end',
      }}>
        {!isFirstStep && <button type="button" onClick={back}>Back</button>}
        <button type="submit">{!isLastStep ? "Next" : "Finish"}</button>

      </div>
    </form>
   </div>
  )
}

export default App
