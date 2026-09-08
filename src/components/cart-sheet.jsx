import { Minus, Plus, ShoppingBag } from "lucide-react";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { formatPrice } from "../data/menu";

function CartSheet({ open, onOpenChange, cart, totalItems, totalPrice, onChangeQuantity, onPlaceOrder }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full max-w-md flex-col gap-0 p-0">
        <SheetHeader className="border-b border-line-soft px-6 py-6 pr-16">
          <p className="font-mono text-[0.6rem] font-bold tracking-[0.2em] text-red uppercase">
            Your order
          </p>
          <SheetTitle className="flex items-baseline gap-2">
            Your Cart
            <span className="font-sans text-sm font-semibold text-muted">({totalItems})</span>
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="grid size-20 place-items-center rounded-full bg-cream-deep">
              <ShoppingBag size={28} className="text-red" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">Your cart is empty</h3>
              <p className="mt-1.5 text-sm text-muted">Go find something delicious — the wok is hot.</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
              Browse the menu
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-5 last:pb-0">
                  <div className="relative size-[72px] shrink-0 overflow-hidden rounded-lg bg-ink">
                    <img src={item.image} alt={item.name} className="size-full object-cover" />
                    <span className="absolute bottom-0 left-0 bg-ink/80 px-1.5 py-0.5 font-mono text-[0.55rem] font-bold text-cream">
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="truncate font-display text-sm font-semibold text-ink">{item.name}</h4>
                      <span className="shrink-0 font-mono text-sm font-bold text-red">{formatPrice(item.price)}</span>
                    </div>
                    <p className="mt-0.5 font-mono text-[0.6rem] tracking-widest text-muted uppercase">each</p>

                    <div className="mt-auto flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => onChangeQuantity(item.id, -1)}
                        aria-label={`Remove one ${item.name}`}
                        className="grid size-7 cursor-pointer place-items-center rounded-md border border-line-soft text-ink transition-colors hover:border-red hover:bg-red hover:text-white"
                      >
                        <Minus size={12} strokeWidth={2.5} />
                      </button>
                      <span className="w-6 text-center font-mono text-sm font-bold text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onChangeQuantity(item.id, 1)}
                        aria-label={`Add one ${item.name}`}
                        className="grid size-7 cursor-pointer place-items-center rounded-md border border-line-soft text-ink transition-colors hover:border-red hover:bg-red hover:text-white"
                      >
                        <Plus size={12} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line-soft bg-cream-deep/50 px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[0.62rem] font-bold tracking-[0.16em] text-muted uppercase">Total</span>
                <span className="font-display text-2xl font-semibold text-ink">{formatPrice(totalPrice)}</span>
              </div>
              <Separator className="my-4" />
              <Button onClick={onPlaceOrder} className="group w-full gap-2 px-6 py-6 text-xs tracking-[0.12em]">
                Place order
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export { CartSheet };