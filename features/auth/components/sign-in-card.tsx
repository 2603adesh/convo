import { Card, CardDescription, CardHeader , CardContent, CardTitle} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { signInFlow } from "../types";
import {useState} from "react"
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert} from "lucide-react";


interface signInCardProps {
    setState : ( state : signInFlow ) => void;
};
export const SignInCard = ({setState} : signInCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const { signIn } = useAuthActions();

    const handleProviderSignIn = (value: "github" | "google") => {
        setPending(true);
        signIn(value)
        .finally(() => {
            setPending(false);

        })
    }; 
   

    return (
    <Card className = "full-w full-h p-8">

        <CardHeader className = "px-0 pt-0">
        <CardTitle>
            Login To Continue
        </CardTitle>
        <CardDescription>
            use your email or another service to Continue
        </CardDescription>
        </CardHeader>
        {error && 
        (
            <div className = "bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm">
                <TriangleAlert className="size-4" />
                <p>{error}</p>
            </div>
        )}
        
        <CardContent className = "space-y-5">
            <form className = "space-y-2.5"
            onSubmit= {(event) => {
                event.preventDefault();
                setPending(true);
                
                const formData = new FormData(event.currentTarget);
                signIn("password", formData)
                .catch(() => {
                    setError("inavlid email or password");
                })
                .finally(() => {
                    setPending(false);
                })
            }}>
                <Input
                name = "email"
                disabled = {pending}
                value = {email}
                onChange= {(e) =>{ setEmail(e.target.value)}}
                placeholder = "email"
                type = "email"
                required>
                </Input>
                <Input
                name = "password"
                disabled = {pending}
                value = {password}
                onChange= {(e) =>{ setPassowrd(e.target.value)}}
                placeholder = "password"
                type = "password"
                required>
                </Input>
                <Button type = "submit" className = "w-full" size = "lg" disabled={false}>
                    Login
                </Button>
            </form>
            <Separator />
            <div className = "flex flex-col gap-y-2.5">
                <Button
                disabled = {pending}
                onClick={() => handleProviderSignIn("google")}
                variant = "outline"
                size="lg"
                className="w-full relative">
                    <FcGoogle className = "size-5 absolute left-2.5 top-2.5" />
                    Continue with Google
                </Button>
                <Button
                disabled = {pending}
                onClick={() => handleProviderSignIn("github")}
                variant = "outline"
                size="lg"
                className="w-full relative">
                    <FaGithub className = "size-5 absolute left-2.5 top-2.5" />
                    Continue with Github
                </Button>
                <p className = "text-sm text-muted-foreground">
                    Don&apos;t have an account? <span onClick={() => {setState("signUp")}} className="text-sky-800 hover:underline">click here</span>
                </p>


            </div>
    
        </CardContent>
        
        </Card>
    );
};