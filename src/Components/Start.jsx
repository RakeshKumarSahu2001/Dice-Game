import React, { useState } from "react"
import Button from "./Button"

export default function Start({changePage}){


    const obj={
        1:"./images/dice_1.png",
        2:"./images/dice_2.png",
        3:"./images/dice_3.png",
        4:"./images/dice_4.png",
        5:"./images/dice_5.png",
        6:"./images/dice_6.png",

    }

    const [mark,setMark]=useState()
    const [image,setImage]=useState(obj[1])
    const keyArr=Object.keys(obj)

    let [count,setCount]=useState(0)
    const rollDice=()=>{
        if(!mark){
            return
        }
        const t=Math.floor(Math.random()*6)+1
        // console.log(t)
        setImage(obj[t])
        if(t==Number(mark)){
            // console.log("matched")
            setCount((pre)=>pre+t)
            // console.log(count)
            
        }else{
            setCount((pre)=>pre-3)
            // console.log(count)

        }
        setMark(undefined)
    }
    

    
    return (<>
        <div className="h-screen space-y-5">
            <div className="flex md:flex-row sm:justify-between m-5  ">
                <span className="mx-3 grid place-content-center text-3xl font-extrabold"><button onClick={changePage}>Back</button></span>
                <span>
                    <ul className="flex flex-row md:space-x-3">
                    {
                        keyArr.map((e,i)=>{
                        return <li key={i} className={`px-5 py-4 rounded-md border-solid border-b-2 font-abc ${mark==e? "bg-blue-400 text-black":" bg-gray-700 text-white"}`}><Button btnvalue={Number(e)} btnclick={(e)=>{setMark(e.target.value)
                        }} /></li>
                    })
                    }
                    </ul>
                </span>
            </div>

            <div className=" grid place-content-center">
            <h1 className="font-bold text-center text-5xl font-abc">{count}</h1><h1 className=" text-5xl font-abc">Score</h1></div>

            <div className="grid place-content-center">
                <span className="flex flex-col space-y-5">
                    <button onClick={rollDice}><img src={image} alt="dice image"/></button>

                    <button onClick={()=>{setMark(undefined)
                    setImage(obj[1]) 
                    setCount(0)}} className="bg-black text-white px-5 py-3 rounded-md font-abc">Reset</button>
                </span>
            </div>
        </div>
    </>)
}