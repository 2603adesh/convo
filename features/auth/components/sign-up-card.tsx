import { Card, CardDescription, CardHeader , CardContent, CardTitle} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { signInFlow } from "../types";
import {useState} from "react"


interface signUpCardProps {
    setState : ( state : signInFlow ) => void;
};
export const SignUpCard = ({setState} : signUpCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
    <Card className = "full-w full-h p-8">

        <CardHeader className = "px-0 pt-0">
        <CardTitle>
            Sign up To Continue
        </CardTitle>
        <CardDescription>
            use your email or another service to Continue
        </CardDescription>
        </CardHeader>
        
        <CardContent className = "space-y-5">
            <form className = "space-y-2.5">
                <Input
                disabled = {false}
                value = {email}
                onChange= {(e) =>{ setEmail(e.target.value)}}
                placeholder = "email"
                type = "email"
                required>
                </Input>
                <Input
                disabled = {false}
                value = {password}
                onChange= {(e) =>{ setPassword(e.target.value)}}
                placeholder = "password"
                type = "password"
                required>
                </Input>
                <Input
                disabled = {false}
                value = {confirmPassword}
                onChange= {(e) =>{ setConfirmPassword(e.target.value)}}
                placeholder = "Confirm password"
                type = "password"
                required>
                </Input>
                <Button type = "submit" className = "w-full" size = "lg" disabled={false}>
                    Sign Up
                </Button>
            </form>
            <Separator />
            <div className = "flex flex-col gap-y-2.5">
                <Button
                disabled = {false}
                onClick={() => {}}
                variant = "outline"
                size="lg"
                className="w-full relative">
                    <FcGoogle className = "size-5 absolute left-2.5 top-2.5" />
                    Continue with Google
                </Button>
                <Button
                disabled = {false}
                onClick={() => {}}
                variant = "outline"
                size="lg"
                className="w-full relative">
                    <FaGithub className = "size-5 absolute left-2.5 top-2.5" />
                    Continue with Github
                </Button>
                <p className = "text-sm text-muted-foreground">
                    Already have an account? <span onClick={() => {setState("signIn")}} className="text-sky-800 hover:underline">click here</span>
                </p>


            </div>
    
        </CardContent>
        
        </Card>
    );
};