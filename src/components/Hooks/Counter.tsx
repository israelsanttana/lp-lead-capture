
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

const Counter: React.FC = () => {

    const [ref, inView] = useInView();

    // Define a animação
    const { number } = useSpring({
        number: 2000,
        from: { number: 0 },
        config: { duration: 2000 }, // Duração da animação em milissegundos
        reset: inView, // Reinicia a animação quando o elemento estiver fora da visão
    });

    return (
        <div ref={ref} className='text-black text-[7rem] font-bold drop-shadow-xl'>
            +<animated.span>{number.interpolate(value => Math.floor(value))}</animated.span>
        </div>
    );
};

export default Counter;
