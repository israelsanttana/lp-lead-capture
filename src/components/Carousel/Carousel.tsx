import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import { motion } from "framer-motion";
import imgNota from "../../assets/nota-client.png";
import { Card, CardContent } from "../ui/card";

const testemunhos = [
    {
        id: 1,
        nome: "Flávia Durães",
        imagem: "https://st.depositphotos.com/3538103/5129/i/600/depositphotos_51291903-stock-photo-business-man-icon.jpg",
        texto: "Gostaria de compartilhar a minha gratidão pelo ótimo suporte e consultoria que recebi da empresa. Ao precisar realizar disciplinas isoladas para a conclusão da minha graduação, fui muito feliz pelo atendimento impecável que me foi prestado. Todas as disciplinas foram realizadas de acordo com as diretrizes da minha instituição, possibilitando o aproveitamento necessário para a conclusão do meu curso. Agradeço profundamente pela consultoria precisa, que me orientou exatamente no que eu buscava. Nem sempre o bom é notado, mas quando se destaca, merece ser compartilhado. Obrigada.",
        curso: "Fonoaudiologia",
    },
    {
        id: 2,
        nome: "Rafael Oliveira ",
        imagem: "https://st.depositphotos.com/3538103/5129/i/600/depositphotos_51291903-stock-photo-business-man-icon.jpg",
        texto: "Finalmente consegui concluir minha graduação graças às disciplinas isoladas! No começo, estava preocupado com a quantidade de disciplinas que faltavam, mas o conteúdo foi fácil e consegui entender tudo o que eu precisava e me sair bem nas avaliações. Agora posso dizer que sou um graduado e estou pronto para seguir em frente com minha carreira 😁. Muito obrigado!",
        curso: "Bacharel Direito",
    },
    {
        id: 3,
        nome: "Carolina Silva ",
        imagem: "https://st.depositphotos.com/3538103/5129/i/600/depositphotos_51291903-stock-photo-business-man-icon.jpg",
        texto: "As disciplinas isoladas foram uma verdadeira salvação para mim! 🙏 Como mãe e ainda trabalhando, estava difícil encontrar tempo para me dedicar integralmente à faculdade. Quando descobri essa opção, consegui estudar no meu próprio tempo e conciliar meus compromissos. Consegui finalmente concluir as matérias pendentes e agora estou mais perto do meu diploma. Sinto que tirei um peso das costas",
        curso: "Acadêmica Enfermagem",
    },
    {
        id: 4,
        nome: "Luana Santos",
        imagem: "https://st.depositphotos.com/3538103/5129/i/600/depositphotos_51291903-stock-photo-business-man-icon.jpg",
        texto: "Estou extremamente satisfeita com a experiência das disciplinas isoladas! Apesar de já estar trabalhando na minha área, precisava resolver algumas pendências acadêmicas para progredir na carreira. Como essas disciplinas eram EAD, pude me organizar melhor e focar nos temas que realmente precisava estudar. Matei o que estava me matando rs.",
        curso: "Acadêmica Engenharia Civil",
    },
    {
        id: 5,
        nome: "Pedro Costa",
        imagem: "https://st.depositphotos.com/3538103/5129/i/600/depositphotos_51291903-stock-photo-business-man-icon.jpg",
        texto: "Nunca imaginei que conseguiria finalizar meu curso tão rápido! Minha faculdade só ia liberar as matérias no próximo semestre, Aí as disciplinas foram a melhor alternativa para mim, pq eu já tinha recebido uma proposta de trabalho na minha área e precisava de uma forma mais rápida para terminar a minha graduação, não iam me aceitar sem meu registro de classe, resolvi meu problema. Recomendo para qualquer um que esteja na mesma situação que eu!",
        curso: "Bacharel Nutrição",
    }

];

export function CarouselLayout() {

    return (
        <div className="w-full bg-carousel-bg bg-cover pb-8 bg-left md:bg-right md:pb-0">
            <div className="container mx-auto flex flex-col gap-2 items-center justify-center px-[3rem] md:gap-6 md:min-h-[500px] md:px-0">

                <div className=" pb-4 w-full text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-2xl text-white font-semibold drop-shadow-lg pt-8 md:pt-0 md:text-4xl">
                        O QUE NOSSOS ALUNOS TEM A DIZER
                    </motion.h2>
                </div>
                <Carousel opts={{ align: "start" }} className="w-full max-w-6xl ">
                    <CarouselContent>
                        {testemunhos.map((testemunho) => (
                            <CarouselItem key={testemunho.id} className=" md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, y: 1 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.7 }}
                                    className="p-1">
                                    <Card className="h-[360px] md:h-full">
                                        <CardContent className="flex flex-col items-center justify-between p-6 md:min-h-[300px] drop-shadow-xl ">
                                            <div className="w-full grid grid-cols-[70px_1fr] gap-1">
                                                <div className="flex items-center">
                                                    <img src={testemunho.imagem} alt={testemunho.nome} className="w-16 h-16 rounded-full mb-4" />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h2 className="text-[16px] font-semibold">{testemunho.nome}</h2>
                                                    <p className="text-gray-500">{testemunho.curso}</p>
                                                </div>
                                            </div>
                                            <div className="overflow-auto overflow-x-hidden max-h-[200px] lg:max-h-[110px] md:max-h-[100px] mb-2 p-1">
                                                <p className="text-gray-600 text-center">{testemunho.texto}</p>
                                            </div>
                                            <div>
                                                <img src={imgNota} alt="Nota do Testemunho" width={200} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
