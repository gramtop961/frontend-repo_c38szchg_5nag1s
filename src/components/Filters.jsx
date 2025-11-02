import { Star, Filter } from 'lucide-react'

export default function Filters({
  categories,
  selectedCategories,
  onToggleCategory,
  priceMin,
  priceMax,
  onPriceChange,
  minRating,
  onRatingChange,
  onClear,
}) {
  return (
    <aside className="w-full sm:w-64 shrink-0">
      <div className="sticky top-[72px] space-y-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Filters</h3>
          <button onClick={onClear} className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Clear
          </button>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium text-gray-700">Categories</h4>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => onToggleCategory(cat)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium text-gray-700">Price</h4>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              value={priceMin}
              onChange={(e) => onPriceChange({ min: Number(e.target.value), max: priceMax })}
              className="w-24 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="Min"
            />
            <span className="text-gray-400">—</span>
            <input
              type="number"
              min={0}
              value={priceMax}
              onChange={(e) => onPriceChange({ min: priceMin, max: Number(e.target.value) })}
              className="w-24 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium text-gray-700">Rating</h4>
          <div className="flex flex-wrap gap-2">
            {[4, 3, 2, 1].map((r) => (
              <button
                key={r}
                onClick={() => onRatingChange(minRating === r ? 0 : r)}
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-sm transition ${
                  minRating === r
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Star className={`h-4 w-4 ${minRating === r ? 'fill-blue-600 text-blue-600' : 'text-gray-400'}`} />
                {r}+
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
