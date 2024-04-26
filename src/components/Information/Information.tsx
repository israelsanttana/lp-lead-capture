import { motion } from "framer-motion"
import imgAmparo from "../../assets/imgAmparo.png"
import imgAlunosOut from "../../assets/outrasInst.png"
import imgAlunosOuv from "../../assets/ouvintes.png"
import { VideoPlayer } from "../Hooks/VideoPlayer"
import { Button } from "../ui/button"
export function Information() {
    return (
        <div className="w-full pt-8 pb-8">
            <div className="container mx-auto">

                <div className="w-full border-b flex flex-col items-center gap-8 md:border-b md:flex-row md:pb-8">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12, duration: 1.8 }}
                        className="w-full text-slate-900 text-center md:text-start">

                        <h2 className="text-xl md:text-4xl font-semibold">QUEM PODE FAZER?</h2>
                        <p className="text-xs mt-2 md:text-lg md:mt-4">
                            Todo aluno ativo (regular) de qualquer curso de graduação ou pós-graduação <br /> com matérias pendentes em suas universidades podem <br /> cumprir sua dependência em até 7 dias!
                        </p>
                        <Button className='bg-customerPrimary text-customerSecondary px-10 py-4 rounded-md mt-4 font-bold drop-shadow-xl'>TENHO INTERESSE</Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.16, duration: 1.0 }}
                        className="flex justify-center items-center mb-6 md:mb-0">
                        <div

                            className="border border-customerPrimary drop-shadow-xl p-2 hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="-mb-2">
                                <VideoPlayer />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:gap-6 w-full py-6">

                    <div className="grid md:grid-cols-[300px_2fr] items-center border-b pb-6 md:pt-0">

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.18, duration: 1.0 }}
                            className="drop-shadow-xl w-[180px] md:w-[300px]">
                            <img className="rounded-xl" src={imgAlunosOut} width={250} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: -100, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1.0 }}
                            className="pt-2 md:pt-0">
                            <h2 className="text-sm font-semibold mb-1 md:text-xl md:mb-2">ALUNOS DE OUTRAS INSTITÚIÇÕES</h2>
                            <p className="text-xs md:text-lg text-customerSecondary">
                                Qualquer aluno regular (ativo) de universidades presenciais ou EAD podem se matricular como aluno não regular e realizar a sua disciplina de forma isolada de forma 100% EAD sem transferir o seu curso ou mudar sua modalidade.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-[300px_2fr] items-center border-b pb-6 pt-6 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.18, duration: 1.0 }}
                            className="drop-shadow-xl w-[180px] md:w-[300px]">
                            <img className="rounded-xl" src={imgAlunosOuv} width={250} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: -100, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1.0 }}
                            className="pt-2 md:pt-0">
                            <h2 className="text-sm font-semibold mb-1 md:text-xl md:mb-2">QUEM CERTIFICA</h2>
                            <p className="text-xs md:text-lg text-customerSecondary">
                                As disciplinas são oferecidas por instituições de ensino de alto nível de excelência MEC. Todas as certificações são emitidas seguindo os parâmetros legais com publicação no diário oficial da união e garantia de reconhecimento.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-[300px_2fr] items-center border-b pb-6 pt-6 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.18, duration: 1.0 }}
                            className="drop-shadow-xl w-[180px] md:w-[300px]">
                            <img className="rounded-xl" src={imgAmparo} width={250} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: -100, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1.0 }}
                            className="pt-2 md:pt-0">
                            <h2 className="text-sm font-semibold mb-1 md:text-xl md:mb-2">AMPARO LEGAL</h2>
                            <p className="text-xs md:text-lg text-customerSecondary">
                                Esse recurso é legal e amparado pelo art. 50 da Lei de Diretrizes e Bases da Educação (Lei n° 9.394/1996) que autoriza as Instituições de Ensino o oferecimento de disciplinas de cursos superiores, mediante a existência de vagas, a alunos não regulares, que comprovem capacidade de cursá-las
                            </p>
                        </motion.div>
                    </div>


                </div>
            </div>
        </div>
    )
}
