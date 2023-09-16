import Card from 'react-bootstrap/Card'
import Tags from './Tags'

function Cards(props) {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.cardImg}/>
        <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        <Tags tag = {props.tagColor} tagText={props.tagTxt}/>
        </Card.Body>
    </Card>
    )
}

export default Cards
