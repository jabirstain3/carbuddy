import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LogInPage: React.FC = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const HandelLogIn = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        // console.log(e);
        
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email: string = target.email.value;
        const password = target.password.value;
        const usre = {email, password};
        console.log(usre);

        const userName = "jabirstain3"
        navigate(`/${userName}`, {state: userName})
    }
    return (
        <div className=" w-11/12 xl:w-10/12 mx-auto h-screen flex flex-col justify-center items-center">
            <form className="grid gap-4 w-fit mx-auto my-12 px-20 py-14 rounded-2xl bg-acn shadow-2xl" onSubmit={HandelLogIn}>
                <h1 className="text-4xl text-center font-bold mb-4">Log In</h1>
                <input className="border rounded-md px-2 py-1" type="email" name="email" placeholder="Email..."required />
                <div className="relative">
                    <input className="border rounded-md px-2 py-1 w-full"  type={show ? 'text' : 'password'} name="password" placeholder="password" required />
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