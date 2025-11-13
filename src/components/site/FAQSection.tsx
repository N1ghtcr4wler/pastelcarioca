import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Ofrecen coxinha y salgados brasileños a domicilio en Bogotá?",
      answer: "¡Sí! Entregamos coxinha crujiente a domicilio en toda Bogotá. Si tu pedido entra antes de las 8 p.m., llega el mismo día por motero. 🚚"
    },
    {
      question: "¿Cómo hago mi pedido por WhatsApp en Bogotá?",
      answer: "Muy fácil: toca el botón \"Pide por WhatsApp — coxinha a domicilio Bogotá\" en nuestra web o escribe al 324 452 4438. Te atendemos al instante y coordinamos tu delivery."
    },
    {
      question: "¿Qué tipos de salgados brasileños ofrecen?",
      answer: "Nuestras especialidades son:\n- Coxinha de pollo\n- Bolitas de queso 🧀\n- Risoles de jamón‑queso\n- Croquetas de carne\nTodos preparados con masa crujiente y recetas auténticas brasileñas."
    },
    {
      question: "¿Tienen opciones vegetarianas?",
      answer: "Sí. Ofrecemos bolitas de queso y otros pasabocas sin carne, con ingredientes frescos y sabor brasileño auténtico. Consultanos."
    },
    {
      question: "¿Cuál es el pedido mínimo para delivery en Bogotá?",
      answer: "El mínimo varía según tu ubicación. Escríbenos por WhatsApp para confirmar cobertura y conocer promociones exclusivas."
    },
    {
      question: "¿Atienden fiestas y eventos en Bogotá?",
      answer: "¡Claro! Somos especialistas en catering brasileño para cumpleaños, novenas, coffee breaks y celebraciones corporativas. Cotización personalizada por WhatsApp. 🎉"
    },
    {
      question: "¿Aceptan pedidos por caja para compartir?",
      answer: "Sí. Vendemos cajas de coixinha, bolitas de queso y mix de salgados, ideales para reuniones en casa, oficina o eventos."
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
