import { useState, useEffect } from "react";
import { Validators } from './Validators';
import AuthWrapper from "./AuthWrapper";
import { Link } from "react-router-dom";

function SignupBarber() {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        price: ''
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validators.validateBarberSignup(formValues));
        setIsSubmit(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false);
            setFormValues(initialValues);
        }
    }, [formErrors])

    return (
        <AuthWrapper>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h1 className="underline decoration-sky-500">Signup as barber</h1>
          </div>
          <div>
            <label htmlFor="" className="txt-sm font-bold text-gray-600 block">
              Enter first name
            </label>
            <input
              name="firstName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formValues.firstName}
              onChange={handleChange}
            />
            <p className="text-orange-600">{formErrors.firstName}</p>
          </div>
          <div>
            <label htmlFor="" className="txt-sm font-bold text-gray-600 block">
              Enter last name
            </label>
            <input
              name="lastName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formValues.lastName}
              onChange={handleChange}
            />
            <p className="text-orange-600">{formErrors.lastName}</p>
          </div>
          <div>
            <label htmlFor="" className="txt-sm font-bold text-gray-600 block">
              Enter email
            </label>
            <input
              name="email"
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-orange-600">{formErrors.email}</p>
          </div>
          <div>
            <label htmlFor="" className="txt-sm font-bold text-gray-600 block">
              Enter address
            </label>
            <input
              name="address"
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formValues.address}
              onChange={handleChange}
            />
            <p className="text-orange-600">{formErrors.address}</p>
          </div>
          <div>
            <label htmlFor="" className="txt-sm font-bold text-gray-600 block">
              Enter price
            </label>
            <input
              name="price"
              type="number"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formValues.price}
              onChange={handleChange}
            />
            <p className="text-orange-600">{formErrors.price}</p>
          </div>
          <div>
            <button
              className="
                     w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm
                    "
            >
              Signup as barber
            </button>
          </div>
          <p className="text-orange-600">{ formErrors.alreadyExists }</p>
          <p>
            Already have an account ?<span> </span>
            <Link
              to="/auth/login"
              className="underline decoration-sky-500 text-cyan-500 hover:cursor-pointer"
            >
                
            login
            </Link>
            <span> </span>
            or
            <span> </span>
            <Link
              to="/auth/signup"
              className="underline decoration-sky-500 text-cyan-500 hover:cursor-pointer"
            >
              register
            </Link>
            <span> </span>
            as client
          </p>
        </form>
      </AuthWrapper>
    )
}

export default SignupBarber;
