import { Star } from 'lucide-react'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  )
}

export default function ProductList({ products }) {
  if (!products.length) {
    return (
      <div className="grid place-items-center rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
        No products match your filters.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div key={p.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="aspect-square w-full bg-gradient-to-br from-gray-100 to-gray-200" />
          <div className="space-y-2 p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium leading-tight group-hover:underline">
                {p.name}
              </h3>
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{p.category}</span>
            </div>
            <div className="flex items-center justify-between">
              <Stars rating={p.rating} />
              <span className="text-lg font-semibold">${p.price.toFixed(2)}</span>
            </div>
            <button className="mt-2 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
