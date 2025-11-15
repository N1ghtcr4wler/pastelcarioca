import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Nombre muy largo"),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20, "Teléfono muy largo"),
  quantity: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num > 0 && num <= 1000;
  }, "Cantidad debe ser entre 1 y 1000"),
  address: z.string().trim().min(5, "Dirección muy corta").max(200, "Dirección muy larga"),
});

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      orderSchema.parse(formData);
      
      // Encode data for WhatsApp
      const message = encodeURIComponent(
        `Hola Pastel Carioca, quiero hacer un pedido:\n\n` +
        `Nombre: ${formData.name}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Cantidad de coxinhas: ${formData.quantity}\n` +
        `Dirección de entrega: ${formData.address}`
      );
      
      window.open(`https://wa.me/573244524438?text=${message}`, '_blank');
      
      toast({
        title: "Redirigiendo a WhatsApp",
        description: "Te estamos conectando para confirmar tu pedido",
      });
      
      // Reset form
      setFormData({ name: "", phone: "", quantity: "", address: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Error en el formulario",
          description: "Por favor corrige los campos marcados",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border">
      <h3 className="text-xl font-semibold mb-4">Pedido Rápido</h3>
      
      <div>
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={errors.name ? "border-destructive" : ""}
          maxLength={100}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="300 123 4567"
          className={errors.phone ? "border-destructive" : ""}
          maxLength={20}
        />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>

      <div>
        <Label htmlFor="quantity">Cantidad de coxinhas</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          max="1000"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="25"
          className={errors.quantity ? "border-destructive" : ""}
        />
        {errors.quantity && <p className="text-sm text-destructive mt-1">{errors.quantity}</p>}
      </div>

      <div>
        <Label htmlFor="address">Dirección de entrega</Label>
        <Input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="Calle 123 #45-67, Bogotá"
          className={errors.address ? "border-destructive" : ""}
          maxLength={200}
        />
        {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
      </div>

      <Button type="submit" className="w-full" size="lg" variant="whatsapp">
        Enviar Pedido por WhatsApp
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Te redirigiremos a WhatsApp para confirmar tu pedido
      </p>
    </form>
  );
};

export default OrderForm;
