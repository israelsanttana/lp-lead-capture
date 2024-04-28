
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
import { CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
interface FormData {
    nome: string;
    email: string;
    telefone: string;
}

export function Form({ modalController }: { modalController: (value: boolean) => void }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

        try {
            const response = await fetch('https://conectaedu.com.br/lead/disciplinas-isoladas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            });
            if (!response.ok) {
                throw new Error('Erro ao enviar o formulário');
            }

            setTimeout(() => {
                window.open('https://api.whatsapp.com/send?phone=5538988415006&text=Ol%C3%A1+quero+saber+mais+sobre+as+disciplinas+isoladas', '_blank'); // Abre uma nova janela
                setIsLoading(false); // Esconde a tela de loading
                reset();
                modalController(false);
            }, 2000); // Ajuste o tempo de atraso conforme necessário

        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }

    };

    function LoadingScreen() {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
                <div>
                    <p className="text-2xl font-bold">Cadastro realizado com sucesso <CheckCircle size={32} /></p>
                </div>
                <div className="animate-spin h-10 w-10 border-t-2 border-b-2 border-purple-500 rounded-full"></div>
            </div>
        );
    }

    return (
        <div>
            <Card className="w-full flex-1">
                {isLoading && <LoadingScreen />}
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
                                <div className="text-red-500 text-xs">
                                    {errors.nome && <p>{errors.nome.message}!</p>}
                                </div>
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
                                <div className="text-red-500 text-xs">
                                    {errors.email && <p>{errors.email.message}!</p>}
                                </div>

                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Celular:</Label>
                                <Input
                                    id="celular"
                                    type="text"
                                    {...register('telefone', {
                                        required: 'Celular é obrigatório',
                                        pattern: {
                                            value: /^\(?\d{2}\)?[-. ]?\d{5}[-. ]?\d{4}$/,
                                            message: 'Celular inválido',
                                        },
                                    })}
                                />
                                <div className="text-red-500 text-xs">
                                    {errors.telefone && <p>{errors.telefone.message}!</p>}
                                </div>
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
