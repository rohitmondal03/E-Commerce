import { useSelector, useDispatch } from "react-redux"

import { removeAllItems } from "../../Redux Slices/cartSlice";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import RemoveFromCartBtn from "./RemoveFromCartBtn";


function Navbar() {
    const cart: Products[] = useSelector((state: any) => state.cart.cart)
    // console.log(cart);

    const dispatch = useDispatch();

    const emptyCartFunction = () => {
        dispatch(removeAllItems())
    }

    const checkOut = () => {
        // CHECKOUT FUNCTION
    }


    return (
        <nav className="py-6 border-b-2 border-b-black mb-10 flex flex-row items-center justify-around">
            <h1 className='text-4xl font-bold'>E-Shop</h1>

            <Sheet>
                <SheetTrigger asChild className="cursor-pointer">
                    <Button
                        variant={"outline"}
                        className="border-zinc-500 border-2 text-lg"
                    >
                        Cart
                    </Button>
                </SheetTrigger>

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
                                    <img src={items.image} className="h-52 mx-auto" />
                                    <AlertTitle className="text-2xl">{items.title}</AlertTitle>
                                    <AlertDescription className="text-zinc-500">
                                        {items.description.slice(0, 100) + "......."}
                                        <p className="text-lg text-black mt-3">Price: ${items.price}</p>
                                        <RemoveFromCartBtn className={"mt-6"} props={items} />
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

                                <Button
                                    variant={"default"}
                                    onClick={checkOut}
                                >
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
            </Sheet>
        </nav>
    )
}

export default Navbar