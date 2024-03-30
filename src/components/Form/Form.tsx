
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from 'react-hook-form';

interface FormData {
    nome: string;
    email: string;
    phone: number;
}

export function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <Card className="w-full flex-1">
                <CardHeader>
                    <CardTitle>Faça sua inscrição</CardTitle>
                    <CardDescription>
                        Preencha seus dados.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="nome">Nome:</Label>
                                <Input
                                    id="nome"
                                    type="text"
                                    {...register('nome', { required: 'Nome é obrigatório' })}
                                />
                                {errors.nome && <p>{errors.nome.message}</p>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">E-mail:</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register('email', {
                                        required: 'E-mail é obrigatório',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'E-mail inválido',
                                        },
                                    })}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Celular:</Label>
                                <Input
                                    id="celular"
                                    type="number"
                                    {...register('phone', {
                                        required: 'E-mail é obrigatório',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Celular inválido',
                                        },
                                    })}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                        </div>
                        <CardFooter className="mt-6 p-0">
                            <Button className="w-full" type="submit">Enviar</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
