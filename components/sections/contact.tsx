import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <p className="text-green font-mono text-base mb-4">
          <span className="text-2xl">04.</span> E Agora?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-6">
          Entre em Contato
        </h2>
        <p className="text-slate text-lg mb-12 leading-relaxed">
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Se você tem alguma pergunta ou apenas quer dizer olá, minha caixa de entrada
          está sempre aberta. Vou fazer o meu melhor para responder!
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-green text-green hover:bg-green-tint font-mono"
          asChild
        >
          <a href="mailto:mardson49@gmail.com">Diga Olá</a>
        </Button>
      </div>
    </section>
  )
}
