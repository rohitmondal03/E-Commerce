import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";
import CartSideBar from "./CartSideBar";


export default function Navbar() {
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

                <CartSideBar />
            </Sheet>
        </nav>
    )
}

