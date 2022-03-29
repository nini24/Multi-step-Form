import './App.css';
import React, {useState} from 'react'
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';
import * as Yup from 'yup'




function App() {
  const [data, setData] = useState({
    name:'',
    description:'',
    services:'',
    budget: '12500hit',
    email:''
  
  })
  const [currentStep, setCurrentStep] = useState(0)

  const makeRequest = (formData) => {
    console.log('Form submitted', formData)
  }

  const nextStep = (newData, final=false) => {
    setData(prev => ({...prev, ...newData}))
    if(final) {
      makeRequest(newData)
      return
    }
    setCurrentStep(prev => prev + 1)
  }
  
  const prevStep = (newData) => {
    setData(prev => ({...prev, ...newData}))
    setCurrentStep(prev => prev - 1)
  }

  const form1Validation = Yup.object({
    name:Yup.string().max(30, 'Must be 30 characters or less').required('Please type your name')
  })

  const form2Validation = Yup.object({
    description:Yup.string().required('An option is required')
  })
  const form3Validation = Yup.object({
    services:Yup.string().required('An option is required')
  })
  const form5Validation = Yup.object({
    email:Yup.string().email('Invalid email address').required('Please enter your email')
  })

  const steps = [<Form1 data={data} next={nextStep} validation={form1Validation} />, <Form2 data={data} next={nextStep} prev={prevStep} validation={form2Validation}/>, <Form3 data={data} next={nextStep} prev={prevStep} validation={form3Validation} />, <Form4 data={data} next={nextStep} prev={prevStep} />, <Form5 data={data} next={nextStep} prev={prevStep} validation={form5Validation}/>]

 

  
  



  return (
    <div className="App">
      {steps[currentStep]}
    </div>
  );
}

export default App;
