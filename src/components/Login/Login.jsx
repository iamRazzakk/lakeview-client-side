import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../../public/login.jpg';
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Swal } from 'sweetalert2';

const Login = () => {
    const location = useNavigate()
    const { logIn, googleSingIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                location('/')
                Swal.fire("Login successfully");
            })
            .catch(error => {
                console.log(error);
                if (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    const handleSingUpWithGoogle = () => {
        googleSingIn()
            .then(() => {
                location('/')
                Swal.fire("Login successfully");
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(error);
            })
    }
    return (
        <div className=" m-auto md:mt-5 font-Poppins max-h-full">
            <div>
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
            </div>
            <div className="flex">
                <div className="flex-1 px-6  rounded">
                    <img className="h-[90vh] p-10 w-full rounded-full border-4 border-pink-400 object-cover" src={loginImg} alt="" />
                </div>

                <div className="flex-1">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <input
                            type="submit"
                            value="Login"
                            className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer"
                        />
                        <div className="divider"></div>
                        <div className="text-2xl flex justify-center items-center">
                            <button onClick={handleSingUpWithGoogle} className="btn btn-outline rounded-full"><FcGoogle></FcGoogle></button>
                        </div>
                        <p className="text-center">New hear please <Link className="text-blue-600" to={'/singup'}>Sing Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;