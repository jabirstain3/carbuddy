import { NavLink } from "react-router-dom";

const SignUpPage = () => {

    const HandelSignUp= ( e: React.FormEvent<HTMLFormElement> ) =>{
        e.preventDefault();
        // console.log(e);

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
            name: { value: string };
            phonenumber: { value: string };
        };

        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;
        const phone = target.phonenumber?.value;
        const user = {name, email, password, phone};
        console.log(user);
    }

    return (
        <div className=" w-11/12 xl:w-10/12 h-screen mx-auto flex flex-col justify-center items-center">
            <form className="grid gap-4 w-fit mx-auto my-12 px-20 lg:px-28 py-14 rounded-2xl bg-acn shadow-2xl"onSubmit={HandelSignUp}>
                <h1 className="text-4xl text-center font-bold mb-4">Sign Up</h1>
                <input className="border rounded-md px-2 py-1" type="text" name="name" placeholder="User Name..." required />
                <input className="border rounded-md px-2 py-1" type="email" name="email" placeholder="Email..."required />
                <input className="border rounded-md px-2 py-1" type="password" name="password" placeholder="Password"required />
                <input className="border rounded-md px-2 py-1" type="password" name="confirm-password" placeholder="Confirm Password" required />
                <input className="border rounded-md px-2 py-1" type="text" name="phonenumber" placeholder="Number" />
                <div className="flex gap-2 text-sm">
                    <input type="checkbox" name="terms"id="terms" />
                    <p>I accept the <NavLink to={'/termcandcondition'} className={'font-medium hover:text-[#4f4f4f]'}>terms and condation</NavLink></p>
                </div>
                <input className="w-fit border rounded-md bg-basel px-4 py-1 my-2 mx-auto hover:bg-scnd text-lg font-medium" type="submit" value={"Sign Up"} />
                <p className="text-sm">Have an account? <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/login'} >Log In Now!</NavLink></p>
            </form>

            <div>
                <p className="text-center">Read the <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/privacypolicy'} >Privacy Policy</NavLink> & <NavLink className={'font-medium hover:text-[#4f4f4f]'} to={'/termsofservice'} >Terms of Service</NavLink> clearly before any interection.</p>
            </div>
        </div>
    );
};

export default SignUpPage;