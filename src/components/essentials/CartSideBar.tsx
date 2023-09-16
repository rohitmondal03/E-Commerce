import { useDispatch, useSelector } from "react-redux"

import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Button } from "../ui/button"
import { SheetContent, SheetHeader, SheetDescription, SheetTitle } from "../ui/sheet"
import { removeAllItems } from "../../Redux Slices/cartSlice"
import RemoveFromCartBtn from "./RemoveFromCartBtn"


export default function CartSideBar() {
    const cart: Products[] = useSelector((state: any) => state.cart.cart)

    const dispatch = useDispatch();

    const emptyCartFunction = () => {
        dispatch(removeAllItems())
    }


    return (
        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-4xl">Cart Items</SheetTitle>
                <SheetDescription className="text-lg">
                    Your cart items...
                    {cart.length > 0 ? (
                        <h1 className="text-black text-2xl underline">Total Items: {cart.length}</h1>
                    ) : (
                        null
                    )}
                </SheetDescription>
            </SheetHeader>

            {cart.length > 0 ? (
                <div className="mt-12 space-y-4">
                    {cart.map((items: Products) => (
                        <Alert key={items.title} className="border-zinc-700">
                            <img
                                src={items.image}
                                className="h-52 mx-auto"
                            />
                            <AlertTitle className="text-2xl">{items.title}</AlertTitle>
                            <AlertDescription className="text-zinc-500">
                                {items.description.slice(0, 100) + "......."}

                                <p className="text-lg text-black mt-3">Price: ${items.price * 1}</p>

                                <div className="flex flex-row items-center justify-between mt-6">
                                    <RemoveFromCartBtn className={""} props={items} />
                                </div>
                            </AlertDescription>
                        </Alert>
                    ))}

                    <div className="grid grid-cols-2 gap-x-2">
                        <Button
                            variant={"destructive"}
                            onClick={emptyCartFunction}
                        >
                            Empty Cart
                        </Button>

                        <Button variant={"default"}>
                            Checkout
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="h-[70vh] flex justify-center items-center">
                    <h1 className="text-4xl font-bold">Your cart has no items...🥺🥺</h1>
                </div>
            )}
        </SheetContent>
    )
}

