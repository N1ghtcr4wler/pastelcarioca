import { Button } from "@/components/ui/button";
const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20brasile%C3%B1a%20a%20domicilio%20en%20Bogot%C3%A1";
const varieties = [{
  name: "Coxinha Clásica de Pollo",
  description: "Relleno de pollo desmenuzado sazonado con especias brasileñas",
  price: "5.000 COP"
}, {
  name: "Coxinha de Queso",
  description: "Relleno cremoso de queso derretido para los amantes del queso",
  price: "5.500 COP"
}, {
  name: "Coxinha Vegetariana",
  description: "Relleno de vegetales y queso, perfecta para vegetarianos",
  price: "5.000 COP"
}];
const CoxinhaDetailsSection = () => {
  return <section id="coxinha" className="py-16 subtle-texture">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ¿Qué es una Coxinha? Descubre Nuestro Producto Estrella
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          La coxinha [Co-shi-ña] es un salgadinho (bocadito) brasileño icónico: una croqueta en forma de colombina de pollo, con masa ligera y crujiente, rellena de pollo desmenuzado sazonado.
        </p>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <h3 className="text-2xl font-semibold mb-4">La Auténtica Coxinha Brasileña en Bogotá</h3>
          <p className="text-muted-foreground mb-4">
            La coxinha brasileña es mucho más que un simple pasabocas. Es una experiencia culinaria que combina tradición, sabor y textura en cada bocado.
          </p>
          <p className="text-muted-foreground mb-4">
            La coxinha, un aperitivo brasileño adorado que significa "muslito" en portugués, remonta sus orígenes a finales del siglo XIX durante la era del Imperio Brasileño en la región de São Paulo. Según una leyenda popular, frecuentemente relatada en el libro "Stories & Recipes" de Nadir Cavazin, fue inventada en la Fazenda Morro Azul para complacer al hijo de la princesa Isabel, un joven príncipe caprichoso que se negaba a comer cualquier cosa que no fueran muslos de pollo.
          </p>
          <p className="text-muted-foreground mb-4">
            Cuando se agotaron las existencias, un cocinero ingenioso improvisó deshuesando carne de pollo, envolviéndola en masa, dándole forma de muslo, empanándola y friéndola hasta obtener un dorado perfecto; el príncipe la amó tanto que pronto se extendió más allá del hogar real.
          </p>
          <p className="text-muted-foreground mb-4">
            Con el tiempo, la coxinha se convirtió en un alimento callejero emblemático en todo Brasil, con variaciones en rellenos y tamaños, simbolizando la herencia culinaria creativa del país que fusiona influencias indígenas, europeas y africanas.
          </p>
          <p className="text-muted-foreground mb-4">
            Nuestra <strong>coxinha de frango</strong> (coxinha de pollo) se elabora con una masa especial a base de harina de trigo, que le da esa textura suave por dentro y crujiente por fuera que tanto caracteriza a este snack brasileño. El relleno de nuestra coxinha es pollo desmenuzado finamente sazonado con una mezcla secreta de especias. Cada coxinha se moldea individualmente en su característica forma de "colombina de pollo", se empaniza y se fríe hasta alcanzar el punto perfecto de dorado. El resultado: una capa exterior crujiente que protege un interior cremoso y lleno de sabor.
          </p>
          <p className="text-muted-foreground mb-4">
            Lo mejor de nuestra <strong>coxinha para catering en Bogotá</strong> es su versatilidad. Perfecta para eventos corporativos, cumpleaños, novenas o simplemente para disfrutar en casa con la familia.
          </p>
          <p className="text-muted-foreground mb-4">
            Además, ofrecemos opciones vegetarianas y para todos los gustos. Nuestras coxinhas son fritas al momento con ingredientes frescos, sin conservantes ni aditivos artificiales.
          </p>
          
          <h4 className="text-xl font-semibold mt-8 mb-3">Beneficios de Nuestras Coxinhas:</h4>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Masa ligera y baja en grasa comparada con otros fritos</li>
            <li>Opciones vegetarianas disponibles para eventos inclusivos</li>
            <li>Preparación fresca al momento del pedido</li>
            <li>Tamaños mini ideales para fiestas y catering</li>
            <li>Perfectas para servir calientes o a temperatura ambiente</li>
            <li>Auténtico sabor brasileño en Bogotá</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Lo que Dicen Nuestros Clientes sobre Nuestra Coxinha</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Las mejores coxinhas que he probado en Bogotá. El sabor es auténtico, me recuerda a las que comía en Brasil. ¡Súper recomendadas!"
              </p>
              <p className="font-semibold">- María González</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Pedimos coxinhas para nuestro evento corporativo y fueron un éxito total. Todos preguntaron de dónde eran. Excelente servicio y calidad."
              </p>
              <p className="font-semibold">- Carlos Ramírez</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Esas coxinhas desaparecieron en 5 minutos. Deliciosas! Muchas gracias."
              </p>
              <p className="font-semibold">- Wandy Moreno</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="whatsapp">
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pedir coxinha brasileña por WhatsApp">
              Pedir Coxinha por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default CoxinhaDetailsSection;