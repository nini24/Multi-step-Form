import React from "react";
import Stepper1 from "../Steppers.js/Stepper1";
import Header from "../Headers";


const Form5 = () => {
    return (
        <div className="mt-20 ml-40">
            <Header />
            <div className="grid grid-cols-3 w-2/3 mt-16">
                <div className= 'border-r border-slate-700/25' >
                <Stepper1 />
                </div>
                <div className="ml-16 col-span-2">
                    <p className="text-white/50 font-light text-sm mb-3">Step 5/5</p> 
                    <h2 className="text-white font-bold text-xl mb-3">Complete Submission</h2>
                    <p className="text-white/50 font-light text-sm mb-3">Thanks for taking the time to complete this form. Please enter your email below <br/> and we will be in contact within 24 hours.</p> 
            <div className="border-b border-slate-700/25 mt-8"></div>
                   
                    <form className="mt-8">
                        <label htmlFor="name" className="text-white font-light text-sm">Enter your name</label><br/>
                        <input type='text' name='name'className="mt-1 mb-4 px-3 py-3 w-full bg-transparent text-white font-light border shadow-sm border-slate-400 rounded-md focus:outline-none focus:border-green-400 focus:border-green-400" />
                        <div className="grid justify-items-end">
                        <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-2/3">Complete Submission</button>
                        </div>
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default Form5