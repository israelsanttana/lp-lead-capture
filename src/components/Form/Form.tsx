
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
        <div className="w-full pt-4 pb-1 bg-customerSecondary lg:pt-8 lg:pb-8">
            <div className="container mx-auto mt-6 mb-6">
                <div className="flex flex-col gap-10 lg:flex-row">
                    <Card className="w-full flex-1">
                        <CardHeader>
                            <CardTitle>Faça sua inscrição</CardTitle>
                            <CardDescription>Preencha os dados abaixo.</CardDescription>
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
                    <div className="flex-1 self-center">
                        <h2 className="text-4xl text-center font-bold text-white">
                            CONCLUA SUA GRADUAÇÃO MAIS RÁPIDO!
                        </h2>
                        <p className="pt-4 text-lg text-center text-white">
                            As  Disciplinas Isoladas são destinadas à universitários que possuem dependências em suas instituições de ensino e <span className="font-bold">NÃO</span> querem aguardar um semestre inteiro ou mais para cumpri-las, Através das Disciplinas Isoladas em apenas 7 dias, um aluno pode cumprir sua dependência de forma on-line em outra instituição de ensino sem transferir o seu curso ou alterar a sua modalidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
