import logo from "../../assets/logo.png";
import { Button } from "../ui/button";


export function Nav() {
    return (
        <div className="w-full pt-4">
            <div className="container mx-auto">
                <div className="flex w-full justify-between h-24 ">
                    <div className="self-center">
                        <h2>
                            <img src={logo} alt="" width={80} />
                            <p className="text-slate-900 pl-6 font-bold -mt-8">INSTITUIÇÃO</p>
                        </h2>
                    </div>
                    <div className="self-center">
                        <Button className="text-slate-900">FALAR COM O CONSULTOR</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}