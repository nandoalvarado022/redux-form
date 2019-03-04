import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Item from './Item'
import { Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import Formulario from '../formulario/Formulario'
import './crud.scss'
import { assignParceros, addParcero, deleteParcero } from '../../redux/actions'
import { connect } from "react-redux";

class Crud extends React.Component{
    state = {
        users: []
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(data => {
            let parcerosList = data.data;
            // this.setState({users: parcerosList})
            this.props.actions.assignParceros(parcerosList);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let nuevoParcero = this.props.nuevoParcero;
        this.props.actions.addParcero(nuevoParcero);
    }

    handleAdios = (event, parcero) => {
        this.props.actions.deleteParcero(parcero.idParcero);
    }

    render(){
        return (
            <div id="componentCrud">
                <Formulario handleSubmit={this.handleSubmit} />
                <Grid columns={3} divided>
                    <Grid.Row>
                    {
                        this.props.parcerosList.map((item, ind) => (
                            <Grid.Column key={ind}>
                                <Item handleAdios={this.handleAdios} parcero={item} />
                            </Grid.Column>)
                        )
                    }
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateRoProps = (reducers) => {
    return {
        nuevoParcero: typeof reducers.form.user != "undefined" ? typeof reducers.form.user.values && reducers.form.user.values : [],
        parcerosList: reducers.customReducer.parcerosList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            assignParceros: (listParceros) => dispatch(assignParceros(listParceros)),
            addParcero: (nuevoParcero) => dispatch(addParcero(nuevoParcero)),
            deleteParcero: (nuevoParcero) => dispatch(deleteParcero(nuevoParcero))
        }
    }
}

export default connect(mapStateRoProps, mapDispatchToProps)(Crud);