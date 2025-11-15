import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Header />
      <main className="py-16">
        <article className="container max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Receta Simple de Coxinha en Casa
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime="2025-01-15">15 de enero, 2025</time>
              <span>•</span>
              <span>Por Pastel Carioca</span>
            </div>
          </header>

          <img
            src="/lovable-uploads/9d24aac6-1463-401e-8ee8-9b18d458ebce.png"
            alt="Coxinhas brasileñas doradas y crujientes listas para servir"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-6">
              ¿Quieres hacer coxinhas brasileñas auténticas en casa? Esta receta simple te guiará paso a paso 
              para crear el snack brasileño más amado: crujiente por fuera, cremoso por dentro y lleno de sabor.
            </p>

            <h2>¿Qué es una Coxinha?</h2>
            <p>
              La coxinha (que significa "muslito" en portugués) es una croqueta brasileña en forma de muslo de pollo, 
              rellena tradicionalmente con pollo desmenuzado sazonado. Su masa especial, hecha con caldo de pollo, 
              le da una textura única que la diferencia de otras croquetas.
            </p>

            <h2>Ingredientes para la Masa</h2>
            <ul>
              <li>2 tazas de caldo de pollo casero</li>
              <li>2 cucharadas de mantequilla</li>
              <li>2 tazas de harina de trigo</li>
              <li>1 cucharadita de sal</li>
              <li>1 pizca de pimienta blanca</li>
            </ul>

            <h2>Ingredientes para el Relleno</h2>
            <ul>
              <li>2 pechugas de pollo cocidas y desmenuzadas</li>
              <li>1 cebolla mediana picada finamente</li>
              <li>2 dientes de ajo picados</li>
              <li>2 cucharadas de aceite de oliva</li>
              <li>1 cucharadita de comino</li>
              <li>Cilantro fresco picado</li>
              <li>Sal y pimienta al gusto</li>
              <li>2 cucharadas de crema de leche (opcional)</li>
            </ul>

            <h2>Para el Empanizado</h2>
            <ul>
              <li>2 huevos batidos</li>
              <li>2 tazas de pan rallado fino</li>
              <li>Aceite para freír</li>
            </ul>

            <h2>Paso 1: Preparar el Relleno</h2>
            <ol>
              <li>En una sartén, calienta el aceite de oliva y sofríe la cebolla y el ajo hasta que estén transparentes</li>
              <li>Añade el pollo desmenuzado, comino, sal y pimienta</li>
              <li>Cocina por 5 minutos, revolviendo constantemente</li>
              <li>Agrega el cilantro y la crema de leche (si usas), mezcla bien</li>
              <li>Deja enfriar completamente antes de usar</li>
            </ol>

            <h2>Paso 2: Hacer la Masa</h2>
            <ol>
              <li>En una olla, hierve el caldo de pollo con la mantequilla y la sal</li>
              <li>Cuando hierva, baja el fuego y añade toda la harina de golpe</li>
              <li>Revuelve vigorosamente con una cuchara de madera hasta formar una masa homogénea</li>
              <li>Cocina por 2-3 minutos más, sin dejar de revolver</li>
              <li>Retira del fuego y deja enfriar hasta que puedas manipular con las manos</li>
            </ol>

            <h2>Paso 3: Moldear las Coxinhas</h2>
            <ol>
              <li>Con las manos ligeramente húmedas, toma una porción de masa del tamaño de una pelota de golf</li>
              <li>Aplasta la masa en tu palma formando un disco</li>
              <li>Coloca una cucharada de relleno en el centro</li>
              <li>Cierra la masa alrededor del relleno y moldea en forma de gota o muslo</li>
              <li>Asegúrate de sellar bien para que no se salga el relleno</li>
            </ol>

            <h2>Paso 4: Empanizar y Freír</h2>
            <ol>
              <li>Pasa cada coxinha por huevo batido</li>
              <li>Luego, cubre completamente con pan rallado</li>
              <li>Calienta abundante aceite a 180°C (temperatura media-alta)</li>
              <li>Fríe las coxinhas hasta que estén doradas, aproximadamente 3-4 minutos</li>
              <li>Retira y coloca sobre papel absorbente</li>
            </ol>

            <h2>Consejos de Chef</h2>
            <div className="bg-muted p-6 rounded-lg my-6">
              <ul className="space-y-2">
                <li><strong>Masa perfecta:</strong> La clave está en agregar la harina de golpe al caldo hirviendo y revolver rápido</li>
                <li><strong>Relleno frío:</strong> Asegúrate de que el relleno esté completamente frío antes de rellenar</li>
                <li><strong>Temperatura del aceite:</strong> Usa un termómetro de cocina; si está muy caliente se queman, si está tibio absorben aceite</li>
                <li><strong>Forma tradicional:</strong> La forma de gota o lágrima es la clásica, pero no te preocupes si no te sale perfecta al principio</li>
                <li><strong>Congela antes de freír:</strong> Puedes congelar las coxinhas ya empanizadas y freírlas directamente congeladas</li>
              </ul>
            </div>

            <h2>Variaciones Populares</h2>
            <p>
              Aunque la coxinha tradicional es de pollo, puedes experimentar con otros rellenos:
            </p>
            <ul>
              <li><strong>Coxinha de queso:</strong> Usa queso mozzarella o catupiry (queso crema brasileño)</li>
              <li><strong>Coxinha vegetariana:</strong> Relleno de palmito, champiñones o mix de vegetales</li>
              <li><strong>Coxinha de carne:</strong> Carne molida sazonada estilo brasileño</li>
              <li><strong>Mini coxinhas:</strong> Perfectas para fiestas, del tamaño de un bocado</li>
            </ul>

            <h2>¿Por qué Hacer Coxinhas en Casa?</h2>
            <p>
              Hacer coxinhas caseras es una experiencia gratificante que te conecta con la cultura brasileña. 
              Aunque la receta requiere tiempo y práctica, el resultado es incomparable: coxinhas frescas, 
              con ingredientes de calidad y el sabor exacto que prefieres.
            </p>
            <p>
              Sin embargo, si buscas la auténtica experiencia sin el trabajo, en Pastel Carioca preparamos 
              coxinhas frescas todos los días con nuestra receta tradicional brasileña. Cada coxinha se hace 
              al momento con ingredientes premium, asegurando ese sabor y textura que solo un especialista 
              puede lograr.
            </p>

            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Prefieres Dejar que los Expertos lo Hagan?</h3>
              <p className="text-muted-foreground mb-6">
                Pide nuestras coxinhas brasileñas auténticas, hechas con amor y años de experiencia. 
                Delivery en toda Bogotá.
              </p>
              <Button asChild size="lg" variant="whatsapp">
                <a 
                  href="https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20brasile%C3%B1a%20a%20domicilio%20en%20Bogot%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir Coxinhas por WhatsApp
                </a>
              </Button>
            </div>

            <h2>Preguntas Frecuentes</h2>
            
            <h3>¿Puedo hacer la masa con anticipación?</h3>
            <p>
              Sí, puedes preparar la masa un día antes y refrigerarla cubierta con film transparente. 
              Deja que alcance temperatura ambiente antes de usarla.
            </p>

            <h3>¿Cuánto tiempo duran las coxinhas?</h3>
            <p>
              Las coxinhas fritas se conservan 2-3 días en refrigeración. Puedes recalentarlas en el horno 
              a 180°C por 10 minutos para que recuperen su textura crujiente.
            </p>

            <h3>¿Puedo hornearlas en lugar de freírlas?</h3>
            <p>
              Sí, aunque no quedarán tan crujientes. Rocía con aceite en spray y hornea a 200°C por 25-30 minutos, 
              girando a mitad de cocción.
            </p>

            <h3>¿Qué caldo de pollo usar?</h3>
            <p>
              Lo ideal es caldo casero hecho con huesos de pollo, vegetales y hierbas. Si usas caldo en cubo, 
              reduce la sal en la receta.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-4">¿Te gustó esta receta?</h3>
            <p className="text-muted-foreground mb-6">
              Comparte tu experiencia con nosotros en redes sociales usando el hashtag #CoxinhasPastelCarioca
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <a href="https://instagram.com/PastelCariocaCol" target="_blank" rel="noopener noreferrer">
                  Síguenos en Instagram
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://facebook.com/PastelCariocaCol" target="_blank" rel="noopener noreferrer">
                  Síguenos en Facebook
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Blog;
