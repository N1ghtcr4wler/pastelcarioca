import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Hacen pedidos de coxinha para novenas en Bogotá?",
      answer: "Sí, ofrecemos packs para novenas Bogotá con entrega a domicilio. Puedes reservar packs de 9 días con descuento especial y recibir pasabocas frescos cada jornada."
    },
    {
      question: "¿Puedo pedir mini coxinha para fiestas en Bogotá?",
      answer: "Sí, contamos con mini coxinha para fiestas Bogotá perfectas para eventos infantiles y adultos. También ofrecemos combos coxinha y Coca-Cola Bogotá para facilitar tu organización."
    },
    {
      question: "¿Cómo pido por WhatsApp coxinha en Bogotá?",
      answer: "Usa nuestro botón 'Pide por WhatsApp — coxinha a domicilio Bogotá' ubicado en la parte superior e inferior de la página. Te atenderemos de inmediato y coordinaremos tu pedido."
    },
    {
      question: "¿Ofrecen opciones vegetarianas?",
      answer: "Sí, tenemos bolitas de queso vegetarianas Bogotá y otras opciones sin carne. Todos nuestros productos vegetarianos mantienen el mismo sabor y calidad que nuestras recetas tradicionales."
    },
    {
      question: "¿Cuál es el mínimo de pedido para domicilio?",
      answer: "El pedido mínimo varía según la zona de Bogotá. Contáctanos por WhatsApp para consultar disponibilidad en tu sector y conocer nuestras promociones vigentes."
    },
    {
      question: "¿Hacen pasabocas para eventos corporativos?",
      answer: "Sí, ofrecemos pasabocas para eventos Bogotá ideales para reuniones empresariales, coffee breaks y celebraciones corporativas. Solicita tu cotización personalizada por WhatsApp."
    }
  ];

  return (
    <section id="preguntas" className="py-16 subtle-texture">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Preguntas frecuentes</h2>
        <p className="text-muted-foreground mt-2">
          Respuestas sobre pedidos, entregas y nuestros productos
        </p>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
