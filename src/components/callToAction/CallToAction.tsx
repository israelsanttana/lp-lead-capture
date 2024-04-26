import { SealQuestion } from "@phosphor-icons/react";
import Counter from "../Hooks/Counter";
import { Button } from "../ui/button";


export function CallToAction() {
    return (
        <div className="">
            <div className="bg-callToAction-bg h-[250px] bg-center  flex items-center justify-center md:h-[300px]">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="flex items-center">
                        <h2 className="text-2xl text-center font-bold text-customerPrimary drop-shadow-xl shadow-white md:text-5xl">
                            CHEGA, VOCÊ PRECISA SEGUIR EM FRENTE!
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-white grid grid-cols-1 md:grid-cols-2">

                <div className="flex items-center ">
                    <div className="bg-white -mt-12 rounded-xl drop-shadow-xl p-4 md:mb-20">
                        <div className="flex items-center justify-center bg-customerPrimary -mt-12 rounded-full w-20 h-20 drop-shadow-xl ml-6">
                            <SealQuestion size={44} color="#444341" />
                        </div>
                        <div className="flex flex-col gap-2 font-semibold text-customerSecondary p-2 text-sm md:p-4 md:text-lg">
                            <p>Está precisando eliminar dependência na Faculdade?</p>
                            <p>Precisa adiantar alguma disciplina do seu curso?</p>
                            <p>Quer fazer uma adaptação curricular em seu curso?</p>
                            <p>Quer fazer uma disciplina teste para decidir qual curso fazer?</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center pb-8 md:pb-16">
                    <div className="text-center">
                        <Counter />
                        <h2 className="text-xl text-customerSecondary -mt-6 md:-mt-8 md:text-4xl ">
                            Disciplinas para todos os cursos
                        </h2>
                    </div>
                    <div>
                        <Button className='bg-customerPrimary text-customerSecondary px-12 py-4 rounded-md mt-4 font-bold drop-shadow-xl'>SAIBA MAIS</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}