import { useDispatch } from "react-redux";
import { PlusIcon} from "@radix-ui/react-icons"

import { Button } from "../ui/button"
import { addToCart } from "../../Redux Slices/cartSlice";


type Props = {
    className: string,
    props: Products
}

export const AddToCartBtn = ({ className, props }: Props) => {
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(props))
    }

    return (
        <Button
            variant={"default"}
            className={className}
            onClick={addItemToCart}
        >
            Add to Cart 
            <PlusIcon className="scale-110 ml-3" />
        </Button>
    )
}
