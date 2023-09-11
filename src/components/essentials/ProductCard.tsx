import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "../ui/card"
import { AddToCartBtn } from "./AddToCartBtn";
import RemoveFromCartBtn from "./RemoveFromCartBtn";
// import { Button } from "../ui/button"


type Props = {
    prop: Products
}

export default function ProductsCard({ prop }: Props) {
    const { title, price, image, description, rating } = prop;

    return (
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="text-2xl font-bold mb-3">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
                <img src={image} />

                <p>Rating: {rating.rate}</p>
                <p>Out of: {rating.count}</p>

                <p>Price: {price}$</p>
            </CardContent>

            <CardFooter className="grid grid-rows-2 gap-y-3">
                <AddToCartBtn className="" props={prop} />
                <RemoveFromCartBtn className="" props={prop} />
            </CardFooter>
        </Card>
    )
}
