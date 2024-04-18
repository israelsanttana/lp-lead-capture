import logoMec from "../../assets/MEC.png";
import logoConectaEdu from "../../assets/logoConectaEdu.png";
import logoFaculdadeUnica from "../../assets/logoFaculdadeUnica.svg";
import logoFatesp from "../../assets/logoFatesp.webp";


export function Nav() {
    return (
        <div className="w-full md:bg-bottom">
            <div className="container mx-auto hidden">
                <div className="flex w-full justify-between items-center h-20 lg:h-24">
                    <div>
                        <img src={logoConectaEdu} alt="" width={200} className="w-18 lg:w-24" />
                    </div>
                    <div className="">
                        <h2 className="text-customerPrimary">
                            Disciplinas Isoladas
                        </h2>
                    </div>
                    <div>
                        <img src={logoMec} alt="" width={200} className="w-18 lg:w-24" />
                    </div>
                    <div>
                        <img src={logoFatesp} alt="" width={200} className="w-18 lg:w-24" />
                    </div>
                    <div>
                        <img src={logoFaculdadeUnica} alt="" width={200} className="w-18 lg:w-24" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto md:hidden lg:hidden">
                <div className="flex flex-col items-center pt-3 pb-3 gap-2">
                    <div className="flex w-full justify-between">
                        <img src={logoFaculdadeUnica} alt="" width={140} className="w-18 lg:w-24" />
                        <img src={logoFatesp} alt="" width={140} />
                    </div>
                    <div className="flex w-full justify-center">
                        <img src={logoConectaEdu} alt="" width={200} />
                    </div>
                </div>
            </div>
        </div>

    )
}