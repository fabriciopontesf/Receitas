import { ChevronLeft, Link } from "lucide-react";

export default function ReceitaPage() {
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto py-8">
                <Link className="text-orange-500 hover:text-orange-700" href="receitas">
                    <ChevronLeft />
                    Voltar para receitas
                </Link>

                <section>
                    {/* Imagem da capa da receita */}
                    <div className="relative h-96 w-full">
                        <Image 
                            src=""
                            fill
                            alt="Título da Receita"
                        />
                    </div>

                    {/* Descrição da receita */}
                    <div>
                        <h1>Título da receita</h1>
                        <p>Descrição</p>

                        {/* Infos de preparo */}
                        <div>
                            {/* TODO: componentes de info */}

                        </div>

                        {/* colunas */}
                        <div>
                            {/* coluna dos ingredientes */}
                            <div></div>

                            {/* coluna do preparo */}
                            <div>
                                {/* TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}