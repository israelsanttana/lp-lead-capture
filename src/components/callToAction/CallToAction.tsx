import { SealQuestion } from "@phosphor-icons/react";
import Counter from "../Hooks/Counter";
import { Button } from "../ui/button";


export function CallToAction() {
    return (
        <div className="">
            <div className="bg-callToAction-bg bg-center h-[300px] flex items-center justify-center">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="flex items-center">
                        <h2 className="text-5xl font-bold text-customerPrimary drop-shadow-xl shadow-white mt-4">
                            CHEGA, VOCÊ PRECISA SEGUIR EM FRENTE!
                        </h2>
                    </div>
                </div>
            </div>
            <div className="bg-white grid grid-cols-2 container mx-auto">
                <div className="flex">

                    <div className="bg-white -mt-12 rounded-xl mb-20 drop-shadow-xl p-4">
                        <div className="flex items-center justify-center bg-customerPrimary -mt-12 rounded-full w-20 h-20 drop-shadow-xl ml-6">
                            <SealQuestion size={44} color="#444341" />
                        </div>
                        <div className="flex flex-col gap-2 font-semibold text-customerSecondary p-4 text-[18px]">
                            <p>Está precisando eliminar dependência na Faculdade?</p>
                            <p>Precisa adiantar alguma disciplina do seu curso?</p>
                            <p>Quer fazer uma adaptação curricular em seu curso?</p>
                            <p>Quer fazer uma disciplina teste para decidir qual curso fazer?</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-16">
                    <div className="text-center">
                        <Counter />
                        <h2 className="text-4xl  text-customerSecondary -mt-8">
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