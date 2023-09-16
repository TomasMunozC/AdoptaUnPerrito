import Badge from 'react-bootstrap/Badge'


function Tags(props) {
    return (
        <div>
            <Badge bg={props.tag}>{props.tagText}</Badge>
        </div>
    );
}

export default Tags;