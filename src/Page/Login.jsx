import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
        console.log("Form Data:", data);

        setSuccess(true);
        reset();

        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">

            {success && (
                <div className="absolute top-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    User Login Successfully ✅
                </div>
            )}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-xl shadow-lg w-80 space-y-5"
            >
                <h2 className="text-2xl font-semibold text-center">Login</h2>

                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("username", {
                            required: "Username is required",
                        })}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
