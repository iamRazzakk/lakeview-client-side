import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const Singup = () => {
    const { createUser, googleSingIn } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // const handleSingUp = e => {
    //     e.preventDefault();
    //     const form = e.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     console.log(name, email, password);
    //     createUser()
    //         .then()
    //         .then()
    // }
    const handleSingUpWithGoogle = () => {
        googleSingIn()
            .then(() => {
                Swal.fire("Login successfully");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-1/2 m-auto md:mt-5 font-Poppins">
            <div>
                <h1 className="text-5xl text-center font-bold">SingUp now!</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">This name field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">This email field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-500">This password field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider"></div>
                    <div className="text-2xl flex justify-center items-center">
                        <button onClick={handleSingUpWithGoogle} className="btn btn-outline rounded-full"><FcGoogle></FcGoogle></button>
                    </div>
                    <p className="text-center">Already Have an account? please <Link className="text-blue-600" to={'/login'}>Login</Link></p>
                    <div className="divider"></div>
                </form>
            </div>
        </div>
    );
};

export default Singup;