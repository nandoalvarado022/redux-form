import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Item = ({parcero, handleAdios}) => {
    return (
        <Card>
            <Button idParcero={parcero.id} className="adiosParcero" color='google plus' onClick={handleAdios}>
                <Icon name='user delete' />
                Adiós parcero
            </Button>                    
            
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
            <Card.Header>
                { parcero.name }
            </Card.Header>
            <Card.Meta>
                <span className='date'>
                    { parcero.email && parcero.email }
                </span>
            </Card.Meta>
            </Card.Content>
        </Card>
    )
    
}

export default Item;