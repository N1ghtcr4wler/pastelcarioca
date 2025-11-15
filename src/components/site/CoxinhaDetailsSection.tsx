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
          La coxinha es un salgadinho brasileño icónico: una croqueta en forma de colombina de pollo, con masa ligera y crujiente, rellena de pollo desmenuzado sazonado.
        </p>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <h3 className="text-2xl font-semibold mb-4">La Auténtica Coxinha Brasileña en Bogotá</h3>
          <p className="text-muted-foreground mb-4">
            La coxinha brasileña es mucho más que un simple pasabocas. Es una experiencia culinaria que combina tradición, sabor y textura en cada bocado.



La coxinha, un aperitivo brasileño adorado que significa "muslito" en portugués, remonta sus orígenes a finales del siglo XIX durante la era del Imperio Brasileño en la región de São Paulo. Según una leyenda popular, frecuentemente relatada en el libro "Stories & Recipes" de Nadir Cavazin, fue inventada en la Fazenda Morro Azul para complacer al hijo de la princesa Isabel, un joven príncipe caprichoso que se negaba a comer cualquier cosa que no fueran muslos de pollo. Cuando se agotaron las existencias, un cocinero ingenioso improvisó deshuesando carne de pollo, envolviéndola en masa, dándole forma de muslo, empanándola y friéndola hasta obtener un dorado perfecto; el príncipe la amó tanto que pronto se extendió más allá del hogar real.

Con el tiempo, la coxinha se convirtió en un alimento callejero emblemático en todo Brasil, con variaciones en rellenos y tamaños, simbolizando la herencia culinaria creativa del país que fusiona influencias indígenas, europeas y africanas.



 <strong>coxinha brasileña</strong> es mucho más que un simple pasabocas. Es una experiencia culinaria que combina tradición, sabor y textura en cada bocado. 
            Nuestra <strong>coxinha de frango</strong> (coxinha de pollo) se elabora con una masa especial a base de harina de trigo, caldo de pollo y mantequilla, que le da esa textura 
            suave por dentro y crujiente por fuera que tanto caracteriza a este snack brasileño.
          </p>
          <p className="text-muted-foreground mb-4">
               Nuestra coxinha de frango (coxinha de pollo) se elabora con una masa especial a base de harina de trigo, caldo de pollo y mantequilla, que le da esa textura suave por dentro y crujiente por fuera que tanto caracteriza a este snack brasileño.


El relleno de nuestra coxinha es pollo desmenuzado finamente sazonado con una mezcla secreta de especias. Cada coxinha se moldea a mano en su característica forma de "colombina de pollo" (de ahí su nombre), se empaniza con pan rallado fino y se fríe hasta alcanzar el punto perfecto de dorado. El resultado: una capa exterior crujiente que protege un interior cremoso y lleno de sabor.
          </p>
          <p className="text-muted-foreground mb-4">
            Lo mejor de nuestra <strong>coxinha para catering en Bogotá</strong> es su versatilidad. Perfecta para eventos corporativos, cumpleaños, novenas o simplemente 
            para disfrutar en casa con la familia. Además, ofrecemos opciones vegetarianas y de queso para todos los gustos. Nuestras coxinhas son preparadas al momento 
            con ingredientes frescos, sin conservantes ni aditivos artificiales.
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

        {/* Video */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">Cómo se hace una Coxinha en Pastel Carioca</h3>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Cómo se hace una coxinha en Pastel Carioca" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Mira el proceso artesanal de elaboración de nuestras coxinhas brasileñas frescas en Bogotá
          </p>
        </div>

        {/* Varieties Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Nuestras Variedades de Coxinha</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Variedad</th>
                  <th className="text-left p-4 font-semibold">Descripción</th>
                  <th className="text-right p-4 font-semibold">Precio</th>
                </tr>
              </thead>
              <tbody>
                {varieties.map((variety, index) => <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{variety.name}</td>
                    <td className="p-4 text-muted-foreground">{variety.description}</td>
                    <td className="p-4 text-right font-semibold">{variety.price}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            *Precios por unidad. Packs especiales disponibles para eventos y catering
          </p>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Galería de Nuestras Coxinhas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img src="/lovable-uploads/9d24aac6-1463-401e-8ee8-9b18d458ebce.png" alt="Coxinha de pollo clásica en Bogotá - dorada y crujiente" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="/lovable-uploads/c494832f-4efe-4520-8cf3-b25bbe1813fe.png" alt="Coxinha de queso derretido para eventos Bogotá" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="/lovable-uploads/9d23cdb3-0a9f-4a98-aa17-69eef09f7c25.png" alt="Mini coxinha vegetariana para catering corporativo Bogotá" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="/lovable-uploads/d11d43e2-fb65-46d9-9217-db466fb3b4b0.png" alt="Pack de coxinhas brasileñas para fiestas en Bogotá" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
          </div>
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
                "La coxinha vegetariana es deliciosa. Crujiente por fuera, suave por dentro. Perfectas para mi cumpleaños. ¡Volveré a pedir!"
              </p>
              <p className="font-semibold">- Laura Pérez</p>
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