import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";


export function AccordionLayout() {

    return (
        <div className="w-full pt-8 pb-8 md:pt-0 md:pb-0 md:min-h-[500px] bg-black flex flex-col justify-center">
            <div className="container mx-auto flex items-center justify-center mb-2 md:justify-start">
                <motion.h2
                    initial={{ opacity: 0, y: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-xl font-semibold text-customerPrimary md:text-3xl">
                    PERGUNTAS FREQUENTES
                </motion.h2>
            </div>
            <div className="container mx-auto">
                <Accordion type="single" collapsible className="text-white">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="md:text-xl">O que são disciplinas isoladas?</AccordionTrigger>
                            <AccordionContent>
                                São disciplinas integrantes da matriz curricular dos cursos de graduação oferecidos pela Faculdade Única, disponíveis para estudantes com cursos de graduação em andamento ou concluídos, bem como para aqueles que possuem ensino médio
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="md:text-xl">Onde fazer uma disciplina isolada?</AccordionTrigger>
                            <AccordionContent>
                                Na Faculdade Única, há mais de 800 opções de Disciplinas Isoladas para ajudar a superar pendências na graduação. Com cursos 100% on-line, você estuda conforme sua conveniência e recebe um certificado de conclusão reconhecido pelo MEC.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                    >
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="md:text-xl">Como fazer uma disciplina isolada?</AccordionTrigger>
                            <AccordionContent>
                                Iniciar e concluir sua Disciplina Isolada, eliminando obstáculos na sua formação, é simples. Basta verificar se a instituição de ensino em que está matriculado aceita disciplinas isoladas, efetuar a matrícula na disciplina desejada, e em 32 dias terá o certificado de conclusão em mãos.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                    >
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="md:text-xl">Como usar uma disciplina isolada em outra Faculdade?</AccordionTrigger>
                            <AccordionContent>
                                Na Faculdade Única, alunos de qualquer instituição podem cursar Disciplinas Isoladas, pois nosso certificado é reconhecido por diversas instituições de ensino superior. Se não estiver matriculado em nenhum curso superior, também é possível cursar disciplinas isoladas, desde que tenha concluído o ensino médio.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                </Accordion>
            </div>
        </div>
    )
}