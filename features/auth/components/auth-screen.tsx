"use client";
import { signInFlow } from "../types";
import {useState} from "react"
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";



export const AuthScreen = () => {
    const [state, setState] = useState<signInFlow>("signIn");
    return (
        <div className = "min-h-screen flex items-center justify-center bg-purple-950">
            <div className = "md:h-auto md:w-[420px] text-5xl text-center">
                {state == "signIn"? < SignInCard setState = {setState} /> : <SignUpCard setState = {setState}/>}
            </div>            
            </div>

    );
}