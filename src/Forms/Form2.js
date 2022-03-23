import React from "react";
import Stepper1 from "../Steppers.js/Stepper1";
import Header from "../Headers";


const Form2 = () => {
    return (
        <div className="mt-20 ml-40">
            <Header />
            <div className="grid grid-cols-3 w-2/3 mt-16">
                <div className= 'border-r border-slate-700/25' >
                <Stepper1 />
                </div>
                <div className="ml-16 col-span-2">
                    <p className="text-white/50 font-light text-sm mb-3">Step 2/5</p> 
                    <h2 className="text-white font-bold text-xl mb-3">What best describes you?</h2>
                    <p className="text-white/50 font-light text-sm mb-4">Please let us know what type of business describes you</p> 
            <div className="border-b border-slate-700/25 mt-8"></div>
                   
                    <form className="mt-8">
                   <div className="relative mb-4">
                       <input type='radio' name='business' id="bus1" className="hidden peer"/>
                       <label for='bus1' className="grid border border-slate-400 rounded-md bg-transparent px-3 py-4 peer-checked:border-green-400 transition">
                           <div className="grid grid-cols-6">
                               <div className="w-16"> 
                                   <div className="flex ml-4 items-center justify-center bg-white/25 rounded-full w-12 h-12">
                                   🥳
                                   </div>
                               </div>
                               <div className="col-span-5">
                                   <p className="text-white">New Business</p>
                                   <p className="text-white/50 font-light">Started training within the last 12 months</p>
                               </div>
                           </div>
                       </label>
                   </div>
                   <div className="relative mb-5">
                       <input type='radio' name='business' id="bus2" className="hidden peer"/>
                       <label for='bus2' className="grid border border-slate-400 rounded-md bg-transparent px-3 py-4 peer-checked:border-green-400 transition">
                           <div className="grid grid-cols-6">
                               <div className="w-16"> 
                                   <div className="flex ml-4 items-center justify-center bg-white/25 rounded-full w-12 h-12">
                                   😎
                                   </div>
                               </div>
                               <div className="col-span-5">
                                   <p className="text-white">Existing Business</p>
                                   <p className="text-white/50 font-light"> I've been operating beyond 12 months</p>
                               </div>
                           </div>
                       </label>
                   </div>
            
                   <div className="flex ml-80">
                   <p className="text-white mt-2 mr-2 grid font-light">Back</p>

                    <button type="submit" className="bg-green-400 px-7 py-3 text-xs text-white font-medium rounded-3xl ml-16">Next Step</button>
                        
                        </div>
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default Form2