import { Button, Card } from "react-bootstrap";
import ItemCount from "../../main/item/ItemCount";

function CartItem({ product }) {
    return (
        <Card>
            <Card.Img src={product.image}/>
            <Card.Title>{product.title}</Card.Title>
            <ItemCount initial={1} stock={10} />
            <Card.Text>{product.price}</Card.Text>
            <Button>X</Button>
        </Card>
    )
}

export default CartItem;