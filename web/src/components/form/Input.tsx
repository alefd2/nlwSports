import { InputHTMLAttributes } from "react"

interface ImputProps extends InputHTMLAttributes<HTMLInputElement> {

}


export const Input = (props: ImputProps) => {
    return (

        <input 
            {...props}
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        />

    )
}