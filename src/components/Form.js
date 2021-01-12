import React from 'react';
import './Form.css';

import Input from './Input';



const Form = ({inputObjectList, submitHandler, btnLabel, isLoading, errors}) => {

    return(
        <form className="form-form" onSubmit={submitHandler}>
            {
                inputObjectList.map(
                    (inputObj, index) => <Input {...inputObj} errors={errors} key={index}/>
                )
            }
            <div className="form-group">
                <button disabled={isLoading ? true : false} className="btn" type="submit">{btnLabel}</button>
            </div>
        </form>
    );
};


export default Form;