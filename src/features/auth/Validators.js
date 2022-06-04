import { loginUser } from '../../db/users';

const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email)
}

const validatePrice = (price) => {
    const priceREgex = /^[0-9]*$/;
    return priceREgex.test(price);
}

export const Validators = {
    validateLogin: (values) => {
        const errors = { };

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(values.email && !validateEmail(values.email)) {
            errors.email = "Wrong format of email (example@gmail.com)"
        }

        if(!values.password) {
            errors.password = "Password is required"
        }

        if(values.password && values.password.length < 8) {
            errors.password = "Minimum lenght of password is 8"
        }
        
        if(!loginUser(values)) {
            errors.wrongEmailOrPassword = "Wrong email or password"
        }

        return errors;
    },

    validateSignup: (values) => {
        const errors = { };

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(values.email && !validateEmail(values.email)) {
            errors.email = "Wrong format of email (example@gmail.com)"
        }

        if(!values.password) {
            errors.password = "Password is required"
        }

        if(values.password && values.password.length < 8) {
            errors.password = "Minimum lenght of password is 8"
        }

        if(values.password.length >= 8 && values.password !== values.cpassword) {
            errors.cpassword = "Passwords doesn't match";
        }

        return errors;
    },

    validateBarberSignup: (values) => {
        const errors = { };

        if(!values.email) {
            errors.email = "Email is required";
        }  

        if(values.email && !validateEmail(values.email)) {
            errors.email = "Wrong format of email (example@gmail.com)"
        }

        if(!values.firstName) {
            errors.firstName = "Firstname is required"
        }

        if(!values.lastName) {
            errors.lastName = "Lastname is required"
        }

        if(!values.address) {
            errors.address = "Address is required"
        }

        if(!values.price) {
            errors.price = "Price is required"
        }

        if(values.price && !validatePrice(values.price)) {
            errors.price = "Invalid price, make sure to use digits only"
        }
       
        return errors;
    }
}