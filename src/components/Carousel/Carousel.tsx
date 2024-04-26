import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import imgNota from "../../assets/nota-client.png";
import { Card, CardContent } from "../ui/card";

const testemunhos = [
    {
        id: 1,
        nome: "Flávia Durães",
        imagem: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        texto: "Gostaria de compartilhar a minha gratidão pelo ótimo suporte e consultoria que recebi da empresa. Ao precisar realizar disciplinas isoladas para a conclusão da minha graduação, fui muito feliz pelo atendimento impecável que me foi prestado. Todas as disciplinas foram realizadas de acordo com as diretrizes da minha instituição, possibilitando o aproveitamento necessário para a conclusão do meu curso. Agradeço profundamente pela consultoria precisa, que me orientou exatamente no que eu buscava. Nem sempre o bom é notado, mas quando se destaca, merece ser compartilhado. Obrigada.",
        curso: "Nome do Curso 1",
    },
    {
        id: 2,
        nome: "Nome do Testemunho 2",
        imagem: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua fefef fefe fefef efefef fefefe fefefe fefef efefefefef efef frfergg rgregreg ergregerggregergregregregergregerg.",
        curso: "Nome do Curso 2",
    },
    {
        id: 3,
        nome: "Nome do Testemunho 3",
        imagem: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        curso: "Nome do Curso 3",
    },
    {
        id: 4,
        nome: "Nome do Testemunho 4",
        imagem: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        curso: "Nome do Curso 4",
    },
    {
        id: 5,
        nome: "Nome do Testemunho 5",
        imagem: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        curso: "Nome do Curso 5",
    },
];

export function CarouselLayout() {
    return (
        <div className="w-full bg-carousel-bg bg-cover pb-8 bg-left md:bg-right md:pb-0">
            <div className="container mx-auto flex flex-col gap-2 items-center justify-center  md:gap-6 md:min-h-[500px]">

                <div className=" pb-4 w-full text-center">
                    <h2 className="text-2xl text-white font-semibold drop-shadow-lg pt-8 md:pt-0 md:text-4xl">
                        O QUE NOSSOS ALUNOS TEM A DIZER
                    </h2>
                </div>
                <Carousel opts={{ align: "start" }} className="w-full max-w-6xl ">
                    <CarouselContent>
                        {testemunhos.map((testemunho) => (
                            <CarouselItem key={testemunho.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-between p-6 md:min-h-[300px] drop-shadow-xl ">
                                            <div className="grid grid-cols-[100px_2fr]">
                                                <div className="flex items-center">
                                                    <img src={testemunho.imagem} alt={testemunho.nome} className="w-16 h-16 rounded-full mb-4" />
                                                </div>
                                                <div>
                                                    <h2 className="text-[16px] font-semibold">{testemunho.nome}</h2>
                                                    <p className="text-gray-500">{testemunho.curso}</p>
                                                </div>
                                            </div>
                                            <div className="overflow-auto overflow-x-hidden max-h-[100px] lg:max-h-[110px] md:max-h-[100px] mb-2 p-1">
                                                <p className="text-gray-600 text-center">{testemunho.texto}</p>
                                            </div>
                                            <div>
                                                <img src={imgNota} alt="Nota do Testemunho" width={200} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
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
