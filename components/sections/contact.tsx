import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <p className="text-green font-mono text-base mb-4">
          <span className="text-2xl">04.</span> What&apos;s Next?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-6">
          Get In Touch
        </h2>
        <p className="text-slate text-lg mb-12 leading-relaxed">
          I&apos;m currently looking for new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open. I&apos;ll try my best to get
          back to you!
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-green text-green hover:bg-green-tint font-mono"
          asChild
        >
          <a href="mailto:email@example.com">Say Hello</a>
        </Button>
      </div>
    </section>
  )
}
