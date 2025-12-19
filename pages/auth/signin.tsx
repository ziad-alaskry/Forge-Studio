import { signIn } from "next-auth/react";
import ForgeContainer from "@/components/ui/ForgeContainer";
import ForgeButton from "@/components/ui/ForgeButton";

const SignInPage = () => {
    return (
        <section className="py-32">
            <ForgeContainer>
                <h1 className="text-4xl text-forgeBlue font-bold mb-12 text-center">
                    Sign in to Forge Studio 
                </h1>

                <div className="flex flex-col gap-4 items-center">
                    <ForgeButton
                    label="Sign in with Google"
                    onClick={() => signIn("google", {
                        callbackUrl:"/"
                    })}
                    />
                    {/* <ForgeButton
                    label="Sign in with GitHub"
                    onClick={() => signIn('github')}
                    /> */}
                </div>
            </ForgeContainer>
        </section>
    )
}

export default SignInPage;