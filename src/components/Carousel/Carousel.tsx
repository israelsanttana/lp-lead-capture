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
        nome: "Nome do Testemunho 1",
        imagem: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        <div className="w-full bg-carousel-bg bg-cover bg-right">
            <div className="container mx-auto flex flex-col gap-6 items-center justify-center  min-h-[500px]">

                <div className=" pb-4 w-full text-center">
                    <h2 className="text-4xl text-white font-bold drop-shadow-lg">
                        O QUE NOSSOS ALUNOS TEM A DIZER
                    </h2>
                </div>
                <Carousel opts={{ align: "start" }} className="w-full max-w-6xl ">
                    <CarouselContent>
                        {testemunhos.map((testemunho) => (
                            <CarouselItem key={testemunho.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-between p-6 min-h-[300px] drop-shadow-xl ">
                                            <div className="grid grid-cols-[1fr_2fr] items-center">
                                                <div className="">
                                                    <img src={testemunho.imagem} alt={testemunho.nome} className="w-16 h-16 rounded-full mb-4" />
                                                </div>
                                                <div>
                                                    <h2 className="text-[16px] font-semibold">{testemunho.nome}</h2>
                                                    <p className="text-gray-500">{testemunho.curso}</p>
                                                </div>
                                            </div>
                                            <div className="overflow-auto overflow-x-hidden lg:max-h-[110px] md:max-h-[100px] mb-2 p-1">
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
