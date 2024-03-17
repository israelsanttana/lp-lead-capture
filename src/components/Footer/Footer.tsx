import { FacebookLogo, InstagramLogo, QrCode, YoutubeLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
        <div className="w-full  bg-gray-950 text-white">
            <div className="container mx-auto">
                <div className="h-72 w-full grid grid-cols-1 justify-items-center pt-10 pb-10 text-center lg:grid-cols-3">
                    <div className="flex self-center">
                        <div>
                            <p>Siga nossa faculdade:</p>
                            <div className="flex gap-5 mt-2">
                                <a href="#"><InstagramLogo size={36} /></a>
                                <a href="#"><FacebookLogo size={36} /></a>
                                <a href="#"><YoutubeLogo size={36} /></a>
                            </div>
                        </div>

                    </div>
                    <div className="flex-col self-center text-center">
                        <p>Todos os direitos reservados © 2024</p>
                        <p>contato@instituicaomec.com.br</p>
                    </div>
                    <div className="flex self-center">
                        <p className="pt-4">
                            Consulte aqui o cadastro da <br />
                            Instituição no Sistema e-MEC
                        </p>
                        <QrCode size={70} />
                    </div>
                </div>
            </div>
        </div>
    )
}