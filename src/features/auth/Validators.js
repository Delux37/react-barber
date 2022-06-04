
const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email)
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
    }
}