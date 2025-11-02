import { Search, ShoppingCart } from 'lucide-react'

export default function Header({ query, onQueryChange, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded bg-gradient-to-br from-blue-500 to-indigo-600" />
          <span className="text-xl font-bold tracking-tight">Vibe Shop</span>
        </div>

        <div className="flex-1" />

        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Search products, brands, categories..."
            />
          </div>
        </div>

        <button className="ml-2 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-medium text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
