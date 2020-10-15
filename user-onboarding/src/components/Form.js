import React from 'react'

export default function Form(props) {

const { values, disabled } = props;

const change = (evt) => {

}


return (

<form>

<label> Name:
<input 
    name='name'
    type='text'
    value={values.name}
    onChange={change}
    placeholder='Name here'
/>
</label>

<label> Email:
<input 
    name='email'
    type='email'
    value={values.email}
    onChange={change}
    placeholder='Email address here'
/>
</label>

<label> Password:
<input 
    name='Password'
    type='password'
    value={values.password}
    onChange={change}
    placeholder='Password here'
/>
</label>

<label> Terms of Service:
<input 
    name='tos'
    type='chackbox'
    checked={values.terms}
    onChange={change}
/>
</label>

<button disabled={disabled}>Submit</button>

</form>

    )
}