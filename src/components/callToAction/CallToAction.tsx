import { CaretCircleRight } from "@phosphor-icons/react";

export function CallToAction() {
    return (
        <div className="container mx-auto pb-8 lg:pt-8 lg:pb-8">
            <div className="flex flex-col self-center gap-6 lg:flex-row">
                <div className="flex-1">
                    <div className='flex gap-2 flex-col text-lg'>
                        <div className='flex gap-2'>
                            <CaretCircleRight size={24} color="#4A5AAB" />
                            <p className='text-sm md:text-lg'>Instituição nota Máxima MEC</p>
                        </div>
                        <div className='flex gap-2'>
                            <CaretCircleRight size={24} color="#4A5AAB" />
                            <p className='text-sm md:text-lg'>+1.200 Disciplinas para todos os cursos</p>
                        </div>
                        <div className='flex gap-2'>
                            <CaretCircleRight size={24} color="#4A5AAB" />
                            <p className='text-sm md:text-lg'>Totalmente EAD - Incluindo Avaliações</p>
                        </div>
                        <div className='flex gap-2'>
                            <CaretCircleRight size={24} color="#4A5AAB" />
                            <p className='text-sm md:text-lg'>Milhares de alunos formados em todo Brasil</p>
                        </div>
                        <div className='flex gap-2'>
                            <CaretCircleRight size={24} color="#4A5AAB" />
                            <p className='text-sm md:text-lg'>100% de Certificados aprovados em mais de 300 faculdades</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 self-center border-solid border-2 border-customerSecondary rounded-lg">

                    <p className="p-6 text-sm text-center lg:text-lg">
                        Esse recurso é legal e amparado pelo
                        art. 50 da Lei de Diretrizes e Bases da Educação <span className='font-light text-[#FAD035]'>(Lei n° 9.394/1996)</span> que autoriza as Instituições de Ensino o oferecimento de disciplinas de cursos superiores, mediante a existência de vagas, a alunos não regulares, que comprovem capacidade de cursá-las.
                    </p>
                </div>
            </div>
        </div>
    )
}