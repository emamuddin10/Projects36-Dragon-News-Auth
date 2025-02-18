
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
    return (
        <div className="*:w-full space-y-3 ">
            <h1>Login With</h1>
            <button className="btn btn-info rounded-none" ><FaGoogle></FaGoogle> Login With Google</button >
            <button className="btn btn-neutral rounded-none"><FaGithub /> Login With Github</button>
        </div>
    );
};

export default Login;