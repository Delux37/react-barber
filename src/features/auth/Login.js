import AuthWrapper from "./AuthWrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login({addActiveUser}) {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false);
            addActiveUser(formValues);
            setFormValues(initialValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = { };
        const emailRegex = /\S+@\S+\.\S+/;

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(values.email && !emailRegex.test(values.email)) {
            errors.email = "Wrong format of email (example@gmail.com)"
        }

        if(!values.password) {
            errors.password = "Password is required"
        }

        if(values.password && values.password.length < 8) {
            errors.password = "Minimum lenght of password is 8"
        }

        return errors;
    }

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h1 className="underline decoration-sky-500">Login as user</h1>
                </div>
                <div>
                    <label htmlFor="" className="txt-sm font-bold text-gray-600 block">Enter email</label>
                    <input
                        
                        name="email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={ formValues.email }
                        onChange={ handleChange }
                    />
                    <p className="text-orange-600">{ formErrors.email }</p>
                </div>
                <div>
                    <label htmlFor="" className="txt-sm font-bold text-gray-600 block">Enter password</label>
                    <input
                        value={ formValues.password }
                        onChange={ handleChange }
                        name="password" type="password" className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    <p className="text-orange-600">{ formErrors.password }</p>
                </div>
                <div>
                    <button
                        className="
                         w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm
                        "
                    >
                        Login
                    </button>
                </div>

                <p>Don't have an account ? <Link to='/auth/signup' className="underline decoration-sky-500 text-cyan-500 hover:cursor-pointer">click here</ Link></p>
            </form>
        </AuthWrapper>
    )
}

export default Login;