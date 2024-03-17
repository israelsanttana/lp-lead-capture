

export function Information() {
    return (
        <div className="w-full">
            <div className="container mx-auto pb-10 lg:mb-10 lg:mt-8">
                <div className=" w-full text-center text-slate-900 ">
                    <h2 className="text-5xl font-bold ">Quem pode fazer?</h2>
                    <p className="pt-4 text-lg">
                        Nossas Disciplinas Isoladas são aceitas em várias instituições de ensino
                        superior do Brasil <br />
                        e você não precisa estar matriculado em um curso superior para fazê-la. <br />
                        Preste bastante atenção:
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-3">
                    <div className="bg-blue-500 rounded-lg p-10">
                        <h2 className="text-2xl mb-4 text-white">Alunos do Grupo Prominas</h2>
                        <p className="text-white">
                            É possível adiantar disciplinas do seu curso, resolver pendências, ou se preferir, adaptar sua grade curricular, rapidamente e de forma facilitada.</p>
                    </div>
                    <div className="bg-indigo-300 rounded-lg p-10">
                        <h2 className="text-2xl mb-4 text-white">Alunos de outras instituições</h2>
                        <p className="text-white">
                            Alunos de outras instituições também podem realizar nossas disciplinas isoladas, pois elas são aceitas em outras instituições de ensino superior de todo o Brasil.
                        </p>
                    </div>
                    <div className="bg-purple-300 rounded-lg p-10">
                        <h2 className="text-2xl mb-4 text-white">Alunos ouvintes</h2>
                        <p className="text-white">
                            Não é preciso estar matriculado em um curso de ensino superior para fazer as disciplinas isoladas. Você participa das aulas, recebe um certificado de conclusão e pode usá-lo para eliminar a disciplina quando estiver na graduação.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
