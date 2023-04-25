import { FC, useState } from 'react'
import Button from './ui/Button'
import { signIn, signOut } from 'next-auth/react'

interface signOutButtonProps {
  
}

const SignOutButton: FC<signOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading]=useState<boolean>(false)
    const signOutUser=async()=>{
        setIsLoading(true)
        try{
            await signOut();
        }catch(error){
            // toast({
            //     title:"Error siging out",
            //     message:"please try again later",
            //     type:"error"
            // })
        }
    }
  return (
  <Button onClick={signOutUser} isLoading={isLoading}>Sign in</Button>
  )
}

export default SignOutButton