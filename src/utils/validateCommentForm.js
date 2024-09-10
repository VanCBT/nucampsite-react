export const validateCommentForm = (values) => {
    const errors = {};

    // Check if the rating exists
    if (!values.rating) {
        errors.rating = 'Required';
    }

    // Check if author has at least 2 characters
    if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } 
    // Check if author is no more than 15 characters
    else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less.';
    }

    // Return the errors object
    return errors;
};