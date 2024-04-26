import imgAmparo from "../../assets/imgAmparo.png"
import imgAlunosOut from "../../assets/outrasInst.png"
import imgAlunosOuv from "../../assets/ouvintes.png"
import { VideoPlayer } from "../Hooks/VideoPlayer"
import { Button } from "../ui/button"
export function Information() {
    return (
        <div className="w-full pt-8 pb-8">
            <div className="container mx-auto grid grid-rows-[1fr_2fr]">
                <div className="flex items-center border-b">
                    <div className="w-full text-slate-900">
                        <h2 className="text-4xl font-semibold">QUEM PODE FAZER?</h2>
                        <p className="text-md mt-4">
                            Todo aluno ativo (regular) de qualquer curso de graduação ou pós-graduação <br /> com matérias pendentes em suas universidades podem <br /> cumprir sua dependência em até 7 dias!
                        </p>
                        <Button className='bg-customerPrimary text-customerSecondary px-10 py-4 rounded-md mt-4 font-bold drop-shadow-xl'>TENHO INTERESSE</Button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border border-customerPrimary drop-shadow-xl p-2 hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="-mb-2">
                                <VideoPlayer />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full py-6">

                    <div className="grid grid-cols-[300px_2fr] items-center border-b pb-6">
                        <div className="drop-shadow-xl">
                            <img className="rounded-xl" src={imgAlunosOut} width={250} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">ALUNOS DE OUTRAS INSTITÚIÇÕES</h2>
                            <p className="text-md text-customerSecondary">
                                Qualquer aluno regular (ativo) de universidades presenciais ou EAD podem se matricular como aluno não regular e realizar a sua disciplina de forma isolada de forma 100% EAD sem transferir o seu curso ou mudar sua modalidade.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[300px_2fr] items-center border-b pb-6">
                        <div className="drop-shadow-xl">
                            <img className="rounded-xl" src={imgAlunosOuv} width={250} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">QUEM CERTIFICA</h2>
                            <p className="text-md text-customerSecondary">
                                As disciplinas são oferecidas por instituições de ensino de alto nível de excelência MEC. Todas as certificações são emitidas seguindo os parâmetros legais com publicação no diário oficial da união e garantia de reconhecimento.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[300px_2fr] items-center">
                        <div className="drop-shadow-xl">
                            <img className="rounded-xl" src={imgAmparo} width={250} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">AMPARO LEGAL</h2>
                            <p className="text-md text-customerSecondary">
                                Esse recurso é legal e amparado pelo art. 50 da Lei de Diretrizes e Bases da Educação (Lei n° 9.394/1996) que autoriza as Instituições de Ensino o oferecimento de disciplinas de cursos superiores, mediante a existência de vagas, a alunos não regulares, que comprovem capacidade de cursá-las
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
