
import { useToRoute } from "../../hooks/useToRoute";

interface ButtonProps {
    btnText: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({btnText, link}) => {
    const goToRoute = useToRoute()

    const handleClick = () => {
        goToRoute(link);
    };
    
    return (
        <button className="border btn  mx-auto rounded-full py- px-8 text-xl font-bold bg-scnd" onClick={handleClick}>{btnText}</button>
    );
};

export default Button;