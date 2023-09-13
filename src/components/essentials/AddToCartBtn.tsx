import { useDispatch } from "react-redux";
import { PlusIcon } from "@radix-ui/react-icons"

import { addToCart, removeFromCart } from "../../Redux Slices/cartSlice";
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";


type Props = {
    className: string,
    props: Products
}

export const AddToCartBtn = ({ className, props }: Props) => {
    const {id}= props

    const dispatch = useDispatch();
    const { toast } = useToast()

    const addItemToCart = () => {
        dispatch(addToCart(props))

        toast({
            title: `Added to cart !!`,
            description: `"${props.title}" added to cart.`,
            action: (
                <ToastAction
                    altText={"Undo"}
                    onClick={removeItemFromCart}
                >
                    Remove from Cart
                </ToastAction>
            )
        })
    }


    const removeItemFromCart = () => {
        dispatch(removeFromCart(id))

        toast({
            title: `Item removed from cart !!`,
            description: `"${props.title}" removed from cart.`,
        })
    }

    return (
        <Button
            variant={"default"}
            className={className}
            onClick={() => addItemToCart()}
        >
            Add to Cart
            <PlusIcon className="scale-110 ml-3" />
        </Button>
    )
}
