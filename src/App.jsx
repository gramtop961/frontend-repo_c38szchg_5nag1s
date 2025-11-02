import { useMemo, useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import SortBar from './components/SortBar'
import ProductList from './components/ProductList'

const MOCK_PRODUCTS = [
  { id: 1, name: 'Noise-Cancelling Headphones', price: 199, rating: 4.6, category: 'Audio' },
  { id: 2, name: 'Wireless Earbuds', price: 99, rating: 4.3, category: 'Audio' },
  { id: 3, name: 'Smartwatch Pro', price: 249, rating: 4.1, category: 'Wearables' },
  { id: 4, name: 'Fitness Band 2', price: 59, rating: 3.9, category: 'Wearables' },
  { id: 5, name: '4K Action Camera', price: 299, rating: 4.5, category: 'Cameras' },
  { id: 6, name: 'Compact Mirrorless Camera', price: 899, rating: 4.8, category: 'Cameras' },
  { id: 7, name: 'Mechanical Keyboard', price: 129, rating: 4.4, category: 'Accessories' },
  { id: 8, name: 'Ergonomic Mouse', price: 49, rating: 4.0, category: 'Accessories' },
  { id: 9, name: '27" 144Hz Monitor', price: 329, rating: 4.7, category: 'Monitors' },
  { id: 10, name: '34" UltraWide Monitor', price: 699, rating: 4.6, category: 'Monitors' },
  { id: 11, name: 'Portable SSD 1TB', price: 139, rating: 4.5, category: 'Storage' },
  { id: 12, name: 'USB-C Hub 8-in-1', price: 79, rating: 4.2, category: 'Accessories' },
]

export default function App() {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState('popular')

  const categories = useMemo(() => {
    return Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category)))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const inCat = (p) =>
      selectedCategories.length === 0 || selectedCategories.includes(p.category)

    let list = MOCK_PRODUCTS.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)

      const matchesCategory = inCat(p)
      const matchesPrice = p.price >= priceRange.min && p.price <= priceRange.max
      const matchesRating = p.rating >= minRating
      return matchesQuery && matchesCategory && matchesPrice && matchesRating
    })

    switch (sortBy) {
      case 'price_asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating_desc':
        list.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        list.sort((a, b) => b.id - a.id)
        break
      default:
        list.sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [query, selectedCategories, priceRange, minRating, sortBy])

  const handleToggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange({ min: 0, max: 1000 })
    setMinRating(0)
    setSortBy('popular')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header query={query} onQueryChange={setQuery} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[16rem_1fr]">
          <Filters
            categories={categories}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            priceMin={priceRange.min}
            priceMax={priceRange.max}
            onPriceChange={setPriceRange}
            minRating={minRating}
            onRatingChange={setMinRating}
            onClear={clearFilters}
          />

          <section className="space-y-4">
            <SortBar total={filtered.length} sortBy={sortBy} onSortChange={setSortBy} />
            <ProductList products={filtered} />
          </section>
        </div>
      </main>
    </div>
  )
}
