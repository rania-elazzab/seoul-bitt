import { toast } from "sonner";
import { useState } from "react";

import { About } from "./components/about";
import { CartSheet } from "./components/cart-sheet";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { MenuSection } from "./components/menu-section";
import { Navbar } from "./components/navbar";
import { OrderConfirmationCard } from "./components/order-confirmation-card";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = (item) => {
    setCart((current) => {
      const found = current.find((product) => product.id === item.id);
      if (found) {
        return current.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });

    toast.success("Added to cart", {
      description: `${item.name} · stacked`,
      action: {
        label: "View cart",
        onClick: () => setCartOpen(true),
      },
    });
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (!cart.length) return;

    setCartOpen(false);
    setCart([]);
    setOrderConfirmed(true);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "There";
    toast.success(`감사합니다, ${name}!`, {
      description: "Message sent successfully. We'll get back to you soon.",
    });
    event.currentTarget.reset();
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-cream text-ink">
      <Navbar totalItems={totalItems} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <MenuSection onAdd={addToCart} />
        <About />
        <ContactSection onSubmit={handleContactSubmit} />
      </main>

      <Footer />

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        onChangeQuantity={changeQuantity}
        onPlaceOrder={placeOrder}
      />

      <OrderConfirmationCard
        open={orderConfirmed}
        onClose={() => setOrderConfirmed(false)}
      />

      <Toaster richColors={false} closeButton />
    </div>
  );
}

export default App;