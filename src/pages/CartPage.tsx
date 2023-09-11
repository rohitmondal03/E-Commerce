import { useSelector } from "react-redux"

export default function CartPage() {
    const cart= useSelector((state: any) => state.cart.cart)
    console.log(cart)

    return (
        <div>CartPage</div>
    )
}