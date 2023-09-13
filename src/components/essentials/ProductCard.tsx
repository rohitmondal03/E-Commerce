import { useSelector } from "react-redux";
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "../ui/card"
import { AddToCartBtn } from "./AddToCartBtn";
import RemoveFromCartBtn from "./RemoveFromCartBtn";


type Props = {
    prop: Products
}

export default function ProductsCard({ prop }: Props) {
    const { title, price, image, description, rating } = prop;
    const cart: Products[] = useSelector((state: any) => state.cart.cart)

    return (
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-3 underline decoration-gray-400">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
                <img src={image} className="h-[50vh] mx-auto my-10" />

                <div className="text-xl">
                    <p>Rating: {rating.rate}</p>
                    <p>Out of: {rating.count}</p>
                    <p>Price: ${price}</p>
                </div>
            </CardContent>

            <CardFooter className="grid grid-rows-2 gap-y-3">
                {cart.includes(prop) ? (
                    <RemoveFromCartBtn className="" props={prop} />
                ) : (
                    <AddToCartBtn className="" props={prop} />
                )}
            </CardFooter>
        </Card>
    )
}
