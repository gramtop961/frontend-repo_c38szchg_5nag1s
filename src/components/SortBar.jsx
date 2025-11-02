import { ChevronDown } from 'lucide-react'

export default function SortBar({ total, sortBy, onSortChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-3">
      <p className="text-sm text-gray-600">
        Showing <span className="font-medium text-gray-900">{total}</span> products
      </p>

      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="popular">Most Popular</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Rating: High to Low</option>
          <option value="newest">Newest</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  )
}
