export default function EcommerceMockup() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-ink-600 bg-ink-900">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <div className="ml-3 flex-1 rounded-md bg-ink-700 px-3 py-1">
          <span className="font-mono text-[10px] text-paper-400">shopwave.store</span>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between border-b border-ink-700 px-4 py-3">
        <span className="font-display text-sm font-bold text-accent-400">ShopWave</span>
        <div className="flex gap-4">
          <span className="font-mono text-[10px] text-paper-400">Shop</span>
          <span className="font-mono text-[10px] text-paper-400">Deals</span>
          <span className="font-mono text-[10px] text-accent-400">Cart (3)</span>
        </div>
        <span className="rounded-md bg-ink-700 px-2.5 py-1 font-mono text-[10px] text-paper-300">Account</span>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {[
          { name: 'Headphones', price: '₹2,499', tag: 'New' },
          { name: 'Sneakers', price: '₹3,999', tag: 'Sale' },
          { name: 'Watch', price: '₹1,299', tag: '' },
          { name: 'Backpack', price: '₹899', tag: 'Sale' },
          { name: 'Sunglasses', price: '₹1,599', tag: '' },
          { name: 'Camera', price: '₹12,999', tag: 'New' },
        ].map((p) => (
          <div
            key={p.name}
            className="group/card rounded-lg border border-ink-700 bg-ink-800 p-2 transition-colors duration-300 hover:border-accent-400/40"
          >
            {/* Image placeholder */}
            <div className="mb-2 flex h-16 items-center justify-center rounded-md bg-ink-700">
              <div className="h-8 w-8 rounded-full bg-ink-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-paper-200">{p.name}</span>
              {p.tag && (
                <span className="rounded bg-accent-400/10 px-1 py-0.5 font-mono text-[8px] text-accent-400">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold text-accent-400">{p.price}</span>
              <span className="font-mono text-[9px] text-paper-400 transition-colors group-hover/card:text-accent-400">+ Cart</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cart bar */}
      <div className="flex items-center justify-between border-t border-ink-700 bg-ink-800 px-4 py-2.5">
        <span className="font-mono text-[10px] text-paper-400">3 items · ₹5,797</span>
        <span className="rounded-md bg-accent-400 px-3 py-1 font-mono text-[10px] font-medium text-ink-950">
          Checkout →
        </span>
      </div>
    </div>
  );
}
