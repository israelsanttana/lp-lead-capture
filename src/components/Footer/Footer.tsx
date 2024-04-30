import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import { VerificationMecFaculdadeUnica, VerificationMecFatesp } from "../VerificationPage/VerificationPage";

export function Footer() {
    return (
        <div className="w-full  bg-black border-t text-white">
            <div className="container mx-auto">

                <div className="w-full grid grid-cols-1 justify-items-center gap-4 pt-10 pb-10 text-center lg:grid-cols-3">

                    <div className="flex flex-col gap-2 self-center items-center border-b lg:border-b-0 lg:flex-row">
                        <div className="flex flex-col items-center">
                            <p className="">Consulte o cadastro das Instituições no Sistema e-MEC </p>
                        </div>
                        <div className="flex">
                            <div className="hover:scale-105 duration-300 w-20 lg:w-full">
                                <VerificationMecFaculdadeUnica />
                            </div>
                            <div className="hover:scale-105 duration-300 w-20 md:w-full">
                                <VerificationMecFatesp />
                            </div>
                        </div>
                    </div>

                    <div className="flex self-center items-center">
                        <div className="flex flex-col items-center">
                            <p>Siga nossa faculdade:</p>
                            <div className="flex gap-2 mt-2">
                                <a className="hover:scale-105 duration-300" href="https://www.instagram.com/conectaedu_brasil/" target="_blank"><InstagramLogo size={36} /></a>
                                <a className="hover:scale-105 duration-300" href="https://www.facebook.com/ConectaEdu.Brasil?locale=pt_BR" target="_blank"><FacebookLogo size={36} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col self-center items-center text-center pt-1 border-t lg:border-t-0">
                        <p>disciplinaisolada@conectaedu.com.br</p>
                        <p>Todos os direitos reservados © 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}