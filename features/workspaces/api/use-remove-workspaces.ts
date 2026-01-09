import { useMutation } from "convex/react";

import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";
import { use, useCallback, useMemo, useState} from "react";
import { error } from "console";
import { useSetAtom } from "jotai";

type RequestType = {id : Id<"workspaces">};
type ResponseType = any;
type Options = {
    onSuccess? : (data : ResponseType) => void;
    onError? : (error : Error) => void;
    onSettled?: () => void;
}

export const useRemoveWorkspace = () => {

    const [data, setData] = useState<ResponseType>(null);
    const [error, setError] = useState< Error | null>(null);

    const [status, setStatus] = useState < "success" | "error" | "settled" | "pending" | null >(null)
 
    // const [isPending, setIsPending] = useState(false);
    // const[isSuccess, setIsSuccess] = useState(false);
    // const [isError, setIsError] = useState(false);
    // const[ isSettled, setIsSettled] = useState(false);
    const isPending = useMemo( () => status == "pending", [status] )
    const isSuccess = useMemo( () => status == "success", [status] )
    const isError = useMemo( () => status == "error", [status] )
    const isSettled = useMemo( () => status == "settled", [status] )

    const mutation = useMutation(api.workspaces.remove)
    const mutate = useCallback( async (values : RequestType, options?: Options) => {
        try{
            setData(null);
            setError(null);

            setStatus("pending");

            // setIsPending(true);

            // setIsSuccess(false);
            // setIsSettled(false);
            // setIsError(false)

            const response = await mutation(values);
            options?.onSuccess?.(response);

            
            // setIsSuccess(true);

            return response;
            
        } catch(error) {
            options?.onError?.(error as Error);
            setStatus("error");

        } finally {
            // setIsPending(false);
            // setIsSettled(true);
            options?.onSettled?.();
            setStatus("settled");

        }
    } , [mutation])
    return {mutate,
         data, 
         error,
         isError,
         isPending,
         isSettled,
         isSuccess,
        };
}