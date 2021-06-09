const usernameProperties = {
  label: 'Username',
  minLength: 5,
  maxLength: 10
}

const passwordProperties = {
  label: 'Password',
  minLength: 8,
  maxLength: 16
}

function requiredMessage(property : string) : string {
  return `${property} is required`;
}

function minLengthMessage(property : string, minLength : number) : string {
  return `${property} must be at least ${minLength} characters long`;
}

function maxLengthMessage(property : string, maxLength : number) : string {
  return `${property} must not be more than ${maxLength} characters long`;
}

export const appProperties = {
  username: {
    properties: usernameProperties,
    messages: {
      required: requiredMessage(usernameProperties.label),
      minLength: minLengthMessage(usernameProperties.label, usernameProperties.minLength),
      maxLength: maxLengthMessage(usernameProperties.label, usernameProperties.maxLength)
    }
  },
  password: {
    properties: passwordProperties,
    messages: {
      required: requiredMessage(passwordProperties.label),
      minLength: minLengthMessage(passwordProperties.label, passwordProperties.minLength),
      maxLength: maxLengthMessage(passwordProperties.label, passwordProperties.maxLength)
    }
  },
  buttons: {
    logIn: {
      label: 'Log In'
    },
    rememberMe: {
      label: 'Remember Me'
    },
    forgotPassword: {
      label: 'Forgot Password'
    }
  }
};
