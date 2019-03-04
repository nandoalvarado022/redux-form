// Formulario con react redux form
import React from 'react'
import { Form, Control, Errors, actions } from 'react-redux-form';
import { addParcero } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import './formulario.scss'

class Formulario extends React.Component{
    handleSubmit = (user) => {
        // Do whatever you like in here.
        // If you connect the UserForm to the Redux store,
        // you can dispatch actions such as:
        // dispatch(actions.submit('user', somePromise));
        debugger;
        this.props.dispatch(actions.push('users', user))
        /*
        this.props.dispatch(actions.addParcero, () => {
            alert("Se agrego");
        })*/
        // etc.
    }

    render(){
        return(
            <Form
            id="componentFormulario"
            model="user"
            onSubmit={(val) => this.handleSubmit(val)}>
                <div>
                    <label>Nombre del parcero</label>
                    <Control.text 
                        model="user.name"
                        validators={{
                            required: (val) => (val) && !!val.length,
                            // minLength: (val) => val.length > 8,
                        }}
                    />
                </div>

                <div>
                    <label>URL de la foto del parcero</label>
                    <Control.text 
                        model="user.photo"
                        validators={{
                            // required: (val) => (val) && !!val.length,
                            // minLength: (val) => val.length > 8,
                        }}
                    />
                </div>

                <div className="listError">
                    <Errors
                        model="user.name"
                        messages={{
                            required: 'El nombre es requerido 😅.',
                        }}
                        wrapper="span"
                    />
                </div>

                <div>
                    <Button primary>
                        <Icon disabled name='add user' />
                        Agregar
                    </Button>                    
                </div>
            </Form>
        )
    }
}

export default connect(
    ({user}) => ({user})
)(Formulario);
// export default Formulario;