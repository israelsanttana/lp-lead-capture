
import { Check, GraduationCap, Star, Student, Wallet } from "@phosphor-icons/react";
import logoConectaEdu from "../../assets/logoConectaEdu.png";
import logoFaculdadeUnica from "../../assets/logoFaculdadeUnica.svg";
import logoFatesp from "../../assets/logoFatesp.webp";
import logoMac from "../../assets/soloMAC.png";

export function Hero() {
    return (
        <div className='bg-hero-bg bg-cover w-full'>
            <div className="container mx-auto h-[100vh] flex flex-col justify-between items-center gap-20">
                <div className="w-full pl-3 pr-3 bg-customerSecondary/70 mb-6 pt-3 pb-3 shadow-lg shadow-black-900/50 rounded-lg mt-4">
                    <div className=" text-slate-100 grid grid-cols-3">
                        <div className="flex items-center justify-start">
                            <img src={logoConectaEdu} width={190} />
                        </div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-4xl font-bold">
                                DISCIPLINAS <span className="font-thin text-customerPrimary">ISOLADAS</span>
                            </h1>
                        </div>
                        <div className="flex items-center justify-end text-center gap-2">
                            <p className="text-[14px] font-extralight leading-4">
                                Reconhecido <br />
                                pelo MEC

                            </p>
                            <img src={logoMac} width={70} />
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
                    <button className='bg-customerPrimary text-customerSecondary px-4 py-4 rounded-xl mt-4 font-bold'>
                        MATRICULE-SE AGORA
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-white mb-4">
                    <div className="bg-customerSecondary/70 rounded-xl p-4 grid grid-cols-[1fr_2fr] items-center justify-center">
                        <div className=" text-[13px] flex flex-col gap-1 text-center ">

                            <div className="flex items-center justify-center bg-customerPrimary -mt-16 rounded-full w-20 h-20 ml-4">
                                <GraduationCap size={44} color="#444341" />
                            </div>
                            <p className="text-[14px]">Instituições nota <br /> Máxima MEC</p>
                            <div className="flex gap-1 justify-center">
                                <Star size={15} color="#FDD105" />
                                <Star size={15} color="#FDD105" />
                                <Star size={15} color="#FDD105" />
                                <Star size={15} color="#FDD105" />
                                <Star size={15} color="#FDD105" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <img src={logoFatesp} width={150} />
                            <img src={logoFaculdadeUnica} width={150} />
                        </div>

                    </div>

                    <div className="bg-customerSecondary/70 p-4 rounded-xl grid grid-cols-[1fr_2fr] items-center justify-center">

                        <div className=" text-center flex flex-col justify-normal items-center pr-3 -mt-16">
                            <Student size={44} />
                            <p className="text-[14px] text-center">
                                +2000 Disciplinas <br /> para todos <br /> os cursos
                            </p>

                        </div>
                        <div className="text-[12px] pl-3">
                            <p className="flex gap-1"><Check size={15} color="#FDD105" />Totalmente EAD - Incluindo Avaliações</p>
                            <p className="flex gap-1"><Check size={15} color="#FDD105" /> Milhares de alunos formados <br /> em todo Brasil</p>
                            <p className="flex gap-1"><Check size={15} color="#FDD105" /> 100% de Certificados aprovados em <br /> mais de 300 faculdades</p>
                        </div>
                    </div>

                    <div className="bg-customerSecondary/70 rounded-xl flex justify-center">
                        <div className="p-4 grid grid-cols-[1fr_2fr] items-center justify-center">
                            <div className="text-center flex flex-col justify-normal items-center -mt-16">
                                <Wallet size={44} />
                                <p className="text-[14px]">Pagamento <br /> parcelado e <br />facilitado</p>
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