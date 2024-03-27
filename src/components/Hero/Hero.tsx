import { CaretCircleRight } from '@phosphor-icons/react'
import img from '../../assets/imgHero.png'

export function Hero() {
    return (
        <div className='w-full bg-customerSecondary'>
            <div className="container mx-auto mt-4 pt-8 lg:mt-4 mb-4 lg:pt-0">
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex-1 self-center ">
                        <h1 className="text-6xl font-bold text-white lg:text-8xl">DISCIPLINAS ISOLADAS</h1>
                        <h3 className='text-xl font-medium text-white'>Acabe com a sua dependencias em até 7 dias!</h3>
                        <div className='pt-4 flex gap-2 flex-col text-lg text-white'>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p className='text-sm md:text-lg'>Instituição nota Máxima MEC</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p className='text-sm md:text-lg'>+1.200 Disciplinas para todos os cursosC</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p className='text-sm md:text-lg'>Totalmente EAD - Incluindo Avaliações</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p className='text-sm md:text-lg'>100% de Certificados aprovados em mais de 300 faculdades</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p className='text-sm md:text-lg'>Milhares de alunos formados em todo Brasil</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 sm:w-full">
                        <img src={img} alt="foto de uma engenheira e um homem em momento de formação academica" />
                    </div>
                </div>
            </div>
        </div>
    )
}