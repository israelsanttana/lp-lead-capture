import { CaretCircleRight } from '@phosphor-icons/react'
import img from '../../assets/imgHero.png'

export function Hero() {
    return (
        <div className='w-full backHero'>
            <div className="container mx-auto mt-10 mb-10">
                <div className="flex w-full">
                    <div className="flex-1 self-center">
                        <h1 className="text-8xl font-bold text-slate-900">DISCIPLINAS ISOLADAS</h1>
                        <h3 className='text-2xl font-medium'>Conclua sua disciplina com 32 dias!</h3>
                        <div className='pt-6 flex gap-2 flex-col text-lg'>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p>Resolva as dependências da sua Graduação</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p>Certificado de conclusão reconhecido pelo MEC</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p>Aceitação em 90% das Instituições de Ensino do Brasil</p>
                            </div>
                            <div className='flex gap-2'>
                                <CaretCircleRight size={24} color="#FAD035" />
                                <p>Investimento que equivale a somente uma mensalidade presencial</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}