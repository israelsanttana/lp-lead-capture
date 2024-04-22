import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function AccordionLayout() {

    return (
        <div className="w-full min-h-[500px] bg-black flex flex-col justify-center">
            <div className="container mx-auto flex mb-2">
                <h2 className="text-3xl font-semibold text-white">
                    PERGUNTAS FREQUENTES
                </h2>
            </div>
            <div className="container mx-auto">
                <Accordion type="single" collapsible className="text-white">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl">O que são disciplinas isoladas?</AccordionTrigger>
                        <AccordionContent>
                            São disciplinas integrantes da matriz curricular dos cursos de graduação oferecidos pela Faculdade Única, disponíveis para estudantes com cursos de graduação em andamento ou concluídos, bem como para aqueles que possuem ensino médio
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl">Onde fazer uma disciplina isolada?</AccordionTrigger>
                        <AccordionContent>
                            Na Faculdade Única, há mais de 800 opções de Disciplinas Isoladas para ajudar a superar pendências na graduação. Com cursos 100% on-line, você estuda conforme sua conveniência e recebe um certificado de conclusão reconhecido pelo MEC.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl">Como fazer uma disciplina isolada?</AccordionTrigger>
                        <AccordionContent>
                            Iniciar e concluir sua Disciplina Isolada, eliminando obstáculos na sua formação, é simples. Basta verificar se a instituição de ensino em que está matriculado aceita disciplinas isoladas, efetuar a matrícula na disciplina desejada, e em 32 dias terá o certificado de conclusão em mãos.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl">Como usar uma disciplina isolada em outra Faculdade?</AccordionTrigger>
                        <AccordionContent>
                            Na Faculdade Única, alunos de qualquer instituição podem cursar Disciplinas Isoladas, pois nosso certificado é reconhecido por diversas instituições de ensino superior. Se não estiver matriculado em nenhum curso superior, também é possível cursar disciplinas isoladas, desde que tenha concluído o ensino médio.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}