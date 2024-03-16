import logo from "../../assets/logo.png";
import { Button } from "../ui/button";


export function Nav() {
    return (
        <div className="w-full pt-4">
            <div className="container mx-auto">
                <div className="flex w-full justify-between items-center h-20 lg:h-24">
                    <div className="self-end lg:self-center">
                        <h2>
                            <img src={logo} alt="" width={80} className="w-18 lg:w-24" />
                            <p className="text-slate-900 pl-6 font-bold -mt-8">INSTITUIÇÃO</p>
                        </h2>
                    </div>
                    <div className="self-end lg:self-center">
                        <Button className="text-[12px] lg:text-sm">FALAR COM UM CONSULTOR</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}