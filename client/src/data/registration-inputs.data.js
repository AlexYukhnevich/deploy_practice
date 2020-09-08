export const registrationInputsData = [ 
  { 
    label: "First name", 
    type: "text", 
    name: "first_name",
    placeholder: "First name",
    autoComplete: "off",
    required: true,
    id: "first-name",
  },
  { 
    label: "Last name", 
    type: "text", 
    name: "last_name", 
    placeholder: "Last name",
    autoComplete: "off",
    required: true,
    id: "last-name", 
  },
  { label: "Email", 
    type: "email", 
    name: "email",
    placeholder: "Email",
    autoComplete: "off", 
    required: true,
    id: "email", 
  },
  { 
    label: "Reenter email", 
    type: "email", 
    name: "re_email", 
    placeholder: "Reenter email",
    autoComplete: "off",
    required: true,
    id: "re-email", 
  },
  { 
    label: "Password", 
    type: "password", 
    name: "password",
    placeholder: "Password",
    autoComplete: "none",
    required: true,
    id: "password",
  },
  { 
    label: "Reenter the password", 
    type: "password", 
    name: "re_password", 
    placeholder: "Reenter the password",
    required: true,
    id: "re-password", 
  },
  { 
    label: "Date of birth", 
    type: "date", 
    name: "date_of_birth",
    placeholder: "Date of birth",
    autoComplete: "none",
    required: true,
    value: "12-12-2012",
    id: "date-of-birth", 
  },
];

export const checkboxFormData = {
  label: "Accepted terms and policies", 
  className: "form-inp-accept",
  id: "checkbox"
};