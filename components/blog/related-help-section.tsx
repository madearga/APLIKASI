'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { getRelatedHelpArticlesForCategory, getRelatedHelpCategories } from '@/lib/blog/content'
import { useMemo } from 'react'

type Category = 'company' | 'marketing' | 'newsroom' | 'partners' | 'engineering' | 'press'

interface RelatedHelpSectionProps {
    activeCategory: Category | 'all'
}

export default function RelatedHelpSection({ activeCategory }: RelatedHelpSectionProps) {
    const relatedArticles = useMemo(() => {
        if (activeCategory === 'all') return []
        return getRelatedHelpArticlesForCategory(activeCategory, 3)
    }, [activeCategory])

    const relatedCategories = useMemo(() => {
        if (activeCategory === 'all') return []
        return getRelatedHelpCategories(activeCategory)
    }, [activeCategory])

    // Don't show section if no related content
    if (activeCategory === 'all' || (relatedArticles.length === 0 && relatedCategories.length === 0)) {
        return null
    }

    return (
        <div className="my-12 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8 md:my-16">
            <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Related Help Resources
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Explore guides and documentation related to {activeCategory}
                    </p>
                </div>
            </div>

            {relatedArticles.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Articles</h3>
                    <div className="space-y-2">
                        {relatedArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/help/article/${article.slug}`}
                                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all hover:border-blue-300 hover:shadow-sm"
                            >
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                        {article.title}
                                    </h4>
                                    <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                                        {article.summary}
                                    </p>
                                </div>
                                <ArrowRight className="ml-3 h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {relatedCategories.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Help Categories</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {relatedCategories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/help/category/${category.slug}`}
                                className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-sm"
                            >
                                <div className="mt-0.5">{category.icon}</div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                        {category.title}
                                    </h4>
                                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                        {category.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                    href="/help"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    Visit Help Center
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}
