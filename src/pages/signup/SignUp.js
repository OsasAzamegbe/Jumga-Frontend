import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

import Form from '../../components/Form';
import Card from '../../components/Card';

import validateInput from '../../utils/Validation';


const SignUpForm = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [organization, setOrganization] = useState("");
    const [profession, setProfession] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);


    const redirect = (route) => <Redirect to={route}/>;

    
    const firstNameHandler = (e) => {
        setfirstName(e.target.value);

    };

    
    const lastNameHandler = (e) => {
        setLastName(e.target.value);

    };

    
    const organizationHandler = (e) => {
        setOrganization(e.target.value);

    };

    
    const professionHandler = (e) => {
        setProfession(e.target.value);

    };

    
    const ageHandler = (e) => {
        setAge(e.target.value);

    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        
    };

    const passwordConfirmHandler = (e) => {
        setPasswordConfirm(e.target.value);
        
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErrors(null);
        
        const {status} = validateInput({email, password, passwordConfirm}, setErrors);

        if(status && !errors){
            //SIGNUP FUNC 
            redirect("/dashboard/");     
        };
        
        setLoading(false);
    };

    const formComponentData = [
        {
            label: "First Name",
            onChange: firstNameHandler,
            value: firstName,
            name: 'firstName',
            id: 'firstName',
            type: "text",
            isRequired: true,
            placeholder: 'Your First Name'
        },
        {
            label: "Last Name",
            onChange: lastNameHandler,
            value: lastName,
            name: 'lastName',
            id: 'lastName',
            type: "text",
            isRequired: true,
            placeholder: 'Your Last Name'
        },
        {
            label: "Organization",
            onChange: organizationHandler,
            value: organization,
            name: 'organization',
            id: 'organization',
            type: "text",
            isRequired: true,
            placeholder: 'Your Organization or school'
        },
        {
            label: "Profession",
            onChange: professionHandler,
            value: profession,
            name: 'profession',
            id: 'profession',
            type: "text",
            isRequired: true,
            placeholder: 'Your Profession'
        },
        {
            label: "Age",
            onChange: ageHandler,
            value: age,
            name: 'age',
            id: 'age',
            type: "number",
            isRequired: true,
            placeholder: 'Your Age'
        },
        {
            label: "Email",
            onChange: emailHandler,
            value: email,
            name: 'email',
            id: 'email',
            type: "email",
            isRequired: true,
            placeholder: 'Your Email'
        },
        {
            label: "Password",
            onChange: passwordHandler,
            value: password,
            name: 'password',
            id: 'password',
            type: "password",
            isRequired: true,
            placeholder: 'Your Password'
        },
        {
            label: "Password Confirmation",
            onChange: passwordConfirmHandler,
            value: passwordConfirm,
            name: 'passwordConfirm',
            id: 'passwordConfirm',
            type: "password",
            isRequired: true,
            placeholder: 'Confirm Password'
        }
    ];

    return (
        <div className="form">
            <header>Sign Up</header>            
            <div className="auth-form-wrapper">
                <Form                
                inputObjectList={formComponentData}
                submitHandler={submitHandler}
                btnLabel="Sign Up"
                isLoading={loading}
                errors={errors} />
            </div>
            <small>Already have an account? <Link to="/signin"><mark>Sign In</mark></Link> </small>
        </div>
    );
};

const SignUp = () => {
    return (
        <div className="wellcontrol" >
            <header>CREATE AN ACCOUNT TODAY</header>            
            <div className="wellcontrol-cards-container" >
                <Card childComponent={<SignUpForm/>} />
            </div> 
        </div>               
    );
};

export default SignUp;