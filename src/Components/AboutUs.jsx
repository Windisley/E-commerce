const AboutUs = ()=>{
    return(
        
            <div className="w-full min-h-screen bg-colorWhite flex flex-col items-center  py-8 px-4">
                <h1 className="text-4xl font-bold text-[#0b0b0d] mb-6">Sobre Nós</h1>
                <p className="text-lg text-[#0b0b0d] mb-4 max-w-2xl text-center">
                    Bem-vindo à nossa loja de relógios! Nós somos uma equipe apaixonada por acessórios que combinam estilo e funcionalidade.
                    Desde o nosso início, temos nos dedicado a trazer as melhores marcas e modelos de relógios para você.
                </p>
                <p className="text-lg text-[#0b0b0d] mb-6 max-w-2xl text-center">
                    Cada relógio em nossa coleção foi cuidadosamente selecionado, garantindo qualidade e design inovador. 
                    Queremos que nossos clientes encontrem o relógio perfeito que complemente seu estilo pessoal e atenda suas necessidades diárias.
                </p>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-button mb-4">Nossa Missão</h2>
                    <p className="text-lg text-[#0b0b0d] mb-4 text-center max-w-2xl">
                        Oferecer uma experiência de compra excepcional e relógios de alta qualidade que ajudem você a marcar cada momento da sua vida.
                    </p>
                    <h2 className="text-2xl font-semibold text-button mb-4">Nossos Valores</h2>
                    <ul className="list-disc text-lg text-[#0b0b0d] max-w-2xl">
                        <li>Qualidade: Apenas os melhores relógios para nossos clientes.</li>
                        <li>Estilo: Acessórios que refletem sua personalidade.</li>
                        <li>Confiança: Transparência em todas as nossas transações.</li>
                        <li>Atendimento ao Cliente: Estamos sempre prontos para ajudar.</li>
                    </ul>
                </div>
                <div className="mt-8 max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold text-button mb-4">Por Que Escolher Nossos Relógios?</h2>
                    <p className="text-lg text-[#0b0b0d] mb-4">
                        Compre conosco e descubra a diferença de qualidade e atendimento. Cada relógio que vendemos é um testemunho da nossa paixão 
                        por acessórios atemporais. Agradecemos por confiar em nós para suas compras de relógios.
                    </p>
                </div>
            </div>
    )
}

export default AboutUs