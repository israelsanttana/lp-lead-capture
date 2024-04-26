
import { Certificate, CheckCircle, GraduationCap, Star, Wallet } from "@phosphor-icons/react";
import logoConectaEdu from "../../assets/logoConectaEdu.png";
import logoFaculdadeUnica from "../../assets/logoFaculdadeUnica.svg";
import logoFatesp from "../../assets/logoFatesp.png";
import logoMac from "../../assets/seloMec.png";


export function Hero() {
    return (
        <div className='bg-hero-bg bg-cover w-full'>
            <div className="container mx-auto h-[100vh] flex flex-col justify-between items-center gap-20">
                <div className="w-full bg-customerSecondary/70 mb-6 py-2 px-3 shadow-lg shadow-black-900/50 rounded-lg mt-4">
                    <div className=" text-slate-100 grid grid-cols-3">
                        <div className="flex items-center justify-start">
                            <img src={logoConectaEdu} width={190} />
                        </div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-3xl font-bold">
                                DISCIPLINAS <span className=" text-customerPrimary">ISOLADAS</span>
                            </h1>
                        </div>
                        <div className="flex items-center justify-end text-center gap-2">
                            <img src={logoMac} width={100} />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold leading-14 shadow-text">
                        SUA TURMA NÃO IRÁ SE
                        <br />
                        FORMAR SEM VOCÊ!
                    </h1>
                    <h2 className="text-2xl text-white  mt-4">
                        Acabe com suas dependências em até 7 dias


                    </h2>
                    <button className='bg-customerPrimary text-customerSecondary px-10 py-2 rounded-md mt-4 font-bold drop-shadow-xl'>
                        FALE CONOSCO
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-white mb-4">
                    <div className="bg-customerSecondary/70 rounded-xl p-4 grid grid-cols-[1fr_2fr] items-center justify-center">

                        <div className=" text-[13px] flex flex-col items-center text-center gap-6">

                            <div className="flex items-center justify-center bg-customerPrimary -mt-10 rounded-full w-20 h-20 drop-shadow-xl">
                                <GraduationCap size={44} color="#444341" />
                            </div>

                            <div>
                                <p className="text-[14px]">Instituições nota <br /> Máxima MEC</p>
                                <div className="flex gap-1 justify-center">
                                    <Star size={15} color="#FDD105" />
                                    <Star size={15} color="#FDD105" />
                                    <Star size={15} color="#FDD105" />
                                    <Star size={15} color="#FDD105" />
                                    <Star size={15} color="#FDD105" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <div className="border-b pb-2">
                                <img src={logoFatesp} width={170} />
                            </div>
                            <img src={logoFaculdadeUnica} width={160} />
                        </div>
                    </div>

                    <div className="bg-customerSecondary/70 p-4 rounded-xl grid grid-cols-[1fr_2fr] items-center justify-center">

                        <div className=" text-center flex flex-col items-center gap-6">
                            <div className="flex items-center justify-center bg-customerPrimary -mt-10 rounded-full w-20 h-20
                            drop-shadow-xl">
                                <Certificate size={44} color="#444341" />
                            </div>
                            <p className="text-[14px] text-center">
                                Milhares de alunos formados em<br /> todo Brasil
                            </p>
                        </div>
                        <div className="text-[15px] pl-3 flex flex-col gap-3">
                            <p className="flex gap-1"><CheckCircle size={26} color="#FDD105" />Totalmente EAD - Incluindo Avaliações</p>
                            <p className="flex gap-1"><CheckCircle size={20} color="#FDD105" /> 100% de Certificados aprovados
                                <br /> em mais de 300 faculdades</p>
                        </div>
                    </div>

                    <div className="bg-customerSecondary/70 rounded-xl flex justify-center">
                        <div className="p-4 grid grid-cols-[1fr_2fr] items-center justify-center">

                            <div className="text-center flex flex-col items-center gap-6">
                                <div className="flex items-center justify-center bg-customerPrimary -mt-10 rounded-full w-20 h-20 drop-shadow-xl">
                                    <Wallet size={44} color="#444341" />
                                </div>
                                <p className="text-[14px]">Pagamento parcelado e facilitado</p>
                            </div>
                            <div className="w-full flex flex-col justify-center ">
                                <p className="text-left pl-3 mb-[-6px]" >R$</p>
                                <div className="flex items-end pl-6">
                                    <span className="text-6xl text-customerPrimary font-bold text-center">64,99</span>
                                    <p className="text-right">/ Mensal</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}