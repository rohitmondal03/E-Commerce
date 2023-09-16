import { useDispatch } from "react-redux"
import { MinusIcon } from "@radix-ui/react-icons"

import { removeFromCart } from "../../Redux Slices/cartSlice";
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast";


type Props = {
    className: string,
    props: Products
}

function RemoveFromCartBtn({ className, props }: Props) {
    const { id } = props

    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(removeFromCart(id))

        toast({
            title: `Item removed from cart !!`,
            description: `"${props.title}" removed from cart.`,
        })
    }


    return (
        <Button
            variant={"secondary"}
            className={className}
            onClick={removeItemFromCart}
        >
            Remove From Cart
            <MinusIcon className="scale-125 ml-3" />
        </Button>
    )
}

export default RemoveFromCartBtn