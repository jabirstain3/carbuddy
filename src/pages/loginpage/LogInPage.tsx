import { useState } from "react";
import { NavLink, useNavigate, } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../../redux/features/auth/authApi";
import tokenVerify from "../../utils/tokenVerify";
import { useAppDispatch } from "../../redux/hooks";
import { setIUser } from "../../redux/features/auth/authSlice";
import { TUser } from "../../types";

interface FormData {
    email: string;
    password: string;
}

const LogInPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)
    const { register, handleSubmit } = useForm<FormData>()
    const navigate = useNavigate();
    const [ login ] = useLoginMutation();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data)
        const userinfo ={
            email: data.email,
            password: data.password,
        }

        const res = await login(userinfo).unwrap();
        console.log(res.data);
        const user = tokenVerify(res.data)as TUser;
        console.log(user);
        dispatch(setIUser({
            user: user,
            token: res.data,
        }))
        navigate(`/${user.email}`);
    }
    return (
        <div className=" w-11/12 xl:w-10/12 mx-auto h-screen flex flex-col justify-center items-center">
            <form className="grid gap-4 w-fit mx-auto my-12 px-20 py-14 rounded-2xl bg-acn shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl text-center font-bold mb-4">Log In</h1>
                <input className="border rounded-md px-2 py-1" type="email" placeholder="Email..." {...register("email", { required: true })} required />
                <div className="relative">
                    <input className="border rounded-md px-2 py-1 w-full"  type={show ? 'text' : 'password'}  placeholder="password" {...register("password", { required: true })} required />
                    <span className='absolute top-1 right-2 cursor-default text-White' onClick={() => setShow(!show)}>{ show ? "Hide" : "Show"}</span>
                </div>
                <p className="text-sm"><NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/resetpassword'} >Forgot password?</NavLink></p>
                <input className="w-fit border rounded-md bg-basel px-4 py-1 my-2 mx-auto hover:bg-scnd text-lg font-medium" type="submit" value={"Log In"} />
                <p className="text-sm">Dont have an account? <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/signup'} >Sign Up Now!</NavLink></p>
            </form>
            <div>
                <p className="text-center">Read the <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/privacypolicy'} >Privacy Policy</NavLink> & <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/termsofservice'} >Terms of Service</NavLink> clearly before any interection.</p>
            </div>
        </div>
    );
};

export default LogInPage;