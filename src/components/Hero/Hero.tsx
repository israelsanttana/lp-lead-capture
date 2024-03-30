import img from '../../assets/hero.png'
import { Form } from '../Form/Form'

export function Hero() {
    return (
        <div className='w-full bg-customerSecondary'>
            <div className="container mx-auto mt-4 pt-8 pb-8 lg:mt-4 mb-4 lg:pt-0 lg:pb-0">

                <div className="flex flex-col lg:flex-row">
                    <div className='flex-1'>
                        <div className=" sm:w-full hidden lg:block">
                            <img src={img} alt="foto de uma engenheira e um homem em momento de formação academica" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-1 justify-center lg:items-end">
                        <h1 className="text-5xl font-bold text-white text-center lg:text-7xl lg:text-right">
                            DISCIPLINAS ISOLADAS
                        </h1>
                        <h3 className="text-2xl  text-white text-center lg:text-2xl lg:text-left">
                            Acabe com suas pendências
                            em até 7 dias!
                        </h3>
                        <div className='lg:w-[500px]'>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}