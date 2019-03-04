import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import './formulario.scss'

const validate = values => {
  	const errors = {}
	if (!values.name) {
		errors.name = 'Requerido'
	} else if (values.name.length > 15) {
		errors.name = 'Muy extenso 😰'
	}
	if (!values.email) {
		errors.email = 'Requerido'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Debe ser un correo valido 🧐'
	}
	return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
        {/* <label>{label}</label> */}
        <div>
        <Input {...input} placeholder={label} type={type} />
        {touched &&
            ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
  </div>
)

const Formulario = props => {
  	const { handleSubmit, pristine, reset, submitting } = props
	return (
        <div id="componentFormulario">
            <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    type="text"
                    component={renderField}
                    label="Nombre"
                />
                <Field name="email" type="email" component={renderField} label="Correo" />
                <Field name="photo" type="text" component={renderField} label="URL foto" />
                <div>
                    <Button primary type="submit" disabled={submitting}>
                        <Icon disabled name='add user' />
                        Agregar
                    </Button>                    
                    {/* <button type="submit" disabled={submitting}>
                    Submit
                    </button> */}
                </div>
            </form>
        </div>
	)
}

export default reduxForm({
  	form: 'user', // a unique identifier for this form
  	validate, // <--- validation function given to redux-form
})(Formulario)