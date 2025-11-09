import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "C'est quoi le Smart Money Concept (SMC) ?",
      answer: "Le Smart Money Concept est une approche de trading qui consiste à comprendre et suivre les mouvements des grandes institutions financières (les 'smart money'). Cette méthode permet d'identifier où les banques et hedge funds placent leurs ordres, afin de trader dans la même direction qu'eux. Cela inclut l'analyse des zones de liquidité, des order blocks, et des break of structure.",
    },
    {
      question: "Quelle est la durée des formations ?",
      answer: "La durée varie selon le programme choisi. La formation Forex complète dure généralement 3 à 6 mois selon votre rythme d'apprentissage. Le coaching 1:1 est flexible et s'adapte à vos besoins. Les masterclass SMC sont des sessions intensives de 2 à 4 semaines. Chaque programme inclut un suivi continu même après la fin officielle.",
    },
    {
      question: "Comment se passe le coaching personnalisé ?",
      answer: "Le coaching 1:1 se déroule via des sessions en visioconférence privées. Nous analysons ensemble vos trades, établissons un plan de trading personnalisé selon votre profil de risque, et vous avez un accès direct à votre formateur via WhatsApp pour un suivi continu. Les sessions sont enregistrées pour que vous puissiez les revoir.",
    },
    {
      question: "Ai-je besoin d'expérience préalable en trading ?",
      answer: "Non, nos formations sont conçues pour tous les niveaux. Si vous êtes débutant, nous commençons par les bases (qu'est-ce qu'un pip, comment lire un graphique, etc.). Si vous avez déjà de l'expérience, nous nous concentrons sur l'amélioration de vos stratégies et l'introduction aux concepts institutionnels comme le SMC.",
    },
    {
      question: "Comment puis-je rejoindre l'institution ?",
      answer: "Pour rejoindre l'Institution of Lionel Cameron, contactez-nous directement via WhatsApp au +225 07 77 51 94 77. Nous discuterons de vos objectifs, de votre niveau actuel et vous orienterons vers le programme le plus adapté à votre profil. Un entretien préalable est requis pour personnaliser votre parcours.",
    },
    {
      question: "Quels sont les modes de paiement disponibles ?",
      answer: "Nous acceptons plusieurs modes de paiement pour faciliter votre inscription : virement bancaire local (Côte d'Ivoire), Mobile Money (Orange Money, MTN Money, Moov Money), et transferts internationaux. Des facilités de paiement peuvent être discutées selon votre situation. Contactez-nous pour plus de détails.",
    },
    {
      question: "Y a-t-il un support après la formation ?",
      answer: "Oui, absolument ! Tous nos élèves bénéficient d'un support continu via notre communauté privée et l'accès direct à Lionel Cameron sur WhatsApp. Nous organisons également des sessions de révision mensuelles et partageons régulièrement des analyses de marché. Vous faites partie de la famille IOLC à vie.",
    },
    {
      question: "Puis-je vraiment vivre du trading ?",
      answer: "Oui, c'est possible, mais cela demande du temps, de la discipline et une formation sérieuse. Le trading n'est pas un moyen de devenir riche rapidement. Notre approche met l'accent sur la gestion du risque, la patience et la constance. Avec une formation adéquate et de la pratique, le trading peut devenir une source de revenus viable. Nous préparons nos élèves à cette réalité avec honnêteté et transparence.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Questions
            <span className="block text-gold mt-2">Fréquentes</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos formations
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-gold/20 px-6 data-[state=open]:border-gold/40 transition-all"
              >
                <AccordionTrigger className="text-left hover:text-gold transition-colors py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter
          </p>
          <a
            href="https://wa.me/+2250777519477"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Contactez-nous sur WhatsApp
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
