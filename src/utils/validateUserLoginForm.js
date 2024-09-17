export const validateUserLoginForm = (values) => {
    const errors = {};

    // Validate the username

    if (!values.username) {
        errors.username = 'Username is required';
    } else if (values.username.length < 6) {
        errors.username = 'Your username must be at least 6 characters';
    } else if (values.username.length > 15) {
        errors.username = 'Your username is more than 15 characters';
    }

    // Validate the password

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Your password must be at least 8 characters';
    }

    return errors;
}