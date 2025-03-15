import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/user/userApi";
import { useToRoute } from "../../hooks/useToRoute";

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber?: string;
    termsAndCondition?: boolean;
}

const SignUpPage = () => {
    const { register, handleSubmit, control } = useForm<FormData>()
    const [ registerUser ] = useRegisterUserMutation();
    const goToRoute = useToRoute()

    const password = useWatch({ control, name: 'password' });
    const confirmPassword = useWatch({ control, name: 'confirmPassword' });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data)


        const userinfo ={
            username: data.name,
            role: 'User',
            email: data.email,
            password: data.password,
            number: data.phoneNumber, 
        }

        await registerUser(userinfo);
        goToRoute('/login');
    }
    // const HandelSignUp= ( e: React.FormEvent<HTMLFormElement> ) =>{
    //     e.preventDefault();
    //     // console.log(e);

    //     const target = e.target as typeof e.target & {
    //         email: { value: string };
    //         password: { value: string };
    //         name: { value: string };
    //         phonenumber: { value: string };
    //     };

    //     const name = target.name.value;
    //     const email = target.email.value;
    //     const password = target.password.value;
    //     const phone = target.phonenumber?.value;
    //     const user = {name, email, password, phone};
    //     console.log(user);
    // }

    return (
        <div className=" w-11/12 xl:w-10/12 h-screen mx-auto flex flex-col justify-center items-center">
            <form className="grid gap-4 w-fit mx-auto my-12 px-20 lg:px-28 py-14 rounded-2xl bg-acn shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl text-center font-bold mb-4">Sign Up</h1>
                <input className="border rounded-md px-2 py-1" type="text" {...register("name", { required: true })} placeholder="User Name..." required />
                <input className="border rounded-md px-2 py-1" type="email" {...register("email", { required: true })} placeholder="Email..." required />
                <input className="border rounded-md px-2 py-1" type="password" {...register("password", { required: true })} placeholder="Password"required />
                <label>
                    <input className="border w-full rounded-md px-2 py-1" type="password" {...register("confirmPassword",{ required: true})} placeholder="Confirm Password" required />
                    {   
                        password !== confirmPassword && ( <p className="px-1 text-[#fd3333] text-sm">Password dosen't match!</p> )
                    }
                </label>
                <input className="border rounded-md px-2 py-1" type="text" {...register("phoneNumber")} placeholder="Number" />
                <div className="flex gap-2 text-sm">
                    <input type="checkbox" id="terms" {...register("termsAndCondition",{ required: true})} required/>
                    <p>I accept the <NavLink to={'/termcandcondition'} className={'font-medium hover:text-[#4f4f4f]'}>terms and condation</NavLink></p>
                </div>
                <input className="w-fit border rounded-md bg-basel px-4 py-1 my-2 mx-auto hover:bg-scnd text-lg font-medium" type="submit" value={"Sign Up"} disabled={password !== confirmPassword}/>
                <p className="text-sm">Have an account? <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/login'} >Log In Now!</NavLink></p>
            </form>

            <div>
                <p className="text-center">Read the <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/privacypolicy'} >Privacy Policy</NavLink> & <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/termsofservice'} >Terms of Service</NavLink> clearly before any interection.</p>
            </div>
        </div>
    );
};

export default SignUpPage;