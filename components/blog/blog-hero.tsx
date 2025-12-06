'use client'

import { cn } from '@/lib/utils'
import { getBlogCategoryDescription, BLOG_CATEGORIES } from '@/lib/blog/content'
import { useMemo } from 'react'

type Category = 'company' | 'marketing' | 'newsroom' | 'partners' | 'engineering' | 'press'

type Filter = 'all' | Category

interface BlogHeroProps {
  activeFilter: Filter
  setActiveFilter: (filter: Filter) => void
  categoryCounts: Record<Filter, number>
  filters: Filter[]
}

export function BlogHero({ activeFilter, setActiveFilter, categoryCounts, filters }: BlogHeroProps) {
  const currentDescription = useMemo(() => {
    if (activeFilter === 'all') {
      return 'Explore all our latest articles, insights, and updates across all categories.'
    }
    return getBlogCategoryDescription(activeFilter)
  }, [activeFilter])

  const currentTitle = useMemo(() => {
    if (activeFilter === 'all') {
      return 'All Articles'
    }
    const category = BLOG_CATEGORIES.find((cat) => cat.slug === activeFilter)
    return category?.title || activeFilter
  }, [activeFilter])

  const articleCount = categoryCounts[activeFilter] || 0

  return (
    <div className="bg-muted @container py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <span className="text-muted-foreground">Blog</span>
          <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
            {activeFilter === 'all' ? (
              <>
                News, insights and more from <strong className="text-foreground font-semibold">APLIKASIKITA</strong>
              </>
            ) : (
              <>
                <strong className="text-foreground font-semibold">{currentTitle}</strong> Articles
              </>
            )}
          </h1>
          <p className="text-muted-foreground mt-4 text-base">
            {currentDescription}
          </p>
          {articleCount > 0 && (
            <p className="text-muted-foreground mt-2 text-sm">
              {articleCount} {articleCount === 1 ? 'article' : 'articles'} available
            </p>
          )}
        </div>

        <div className="-ml-0.5 mb-6 mt-12 flex justify-between gap-4 max-md:-mx-6 md:mt-16">
          <div
            className="-ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:px-6"
            role="tablist"
            aria-label="Blog categories">
            {filters.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                disabled={categoryCounts[category] === 0}
                role="tab"
                aria-selected={activeFilter === category}
                className="text-muted-foreground group snap-center px-1 disabled:pointer-events-none disabled:opacity-50">
                <span className={cn('flex w-fit items-center gap-2 rounded-md px-3 py-1 text-sm transition-colors [&>svg]:size-4', activeFilter === category ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                  <span className="capitalize">{category}</span>
                  {categoryCounts[category] > 0 && (
                    <span className="text-xs opacity-60">({categoryCounts[category]})</span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
