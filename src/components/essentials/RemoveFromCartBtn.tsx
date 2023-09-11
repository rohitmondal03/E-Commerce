import { useDispatch } from "react-redux"
import { MinusIcon } from "@radix-ui/react-icons"

import { Button } from "../ui/button"
import { removeFromCart } from "../../Redux Slices/cartSlice";


type Props = {
    className: string,
    props: Products
}

function RemoveFromCartBtn({ className, props }: Props) {
    const { title } = props

    const dispatch = useDispatch();

    const removeItemCart = () => {
        dispatch(removeFromCart(title))
    }


    return (
        <Button
            variant={"secondary"}
            className={className}
            onClick={removeItemCart}
        >
            Remove From Cart
            <MinusIcon className="scale-125 ml-3" />
        </Button>
    )
}

export default RemoveFromCartBtn