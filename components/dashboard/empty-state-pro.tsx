import { ArrowUpRightIcon, RocketIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { siteConfig } from "@/lib/config"

export function DashboardProEmptyState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RocketIcon />
        </EmptyMedia>
        <EmptyTitle>Pro Features Available</EmptyTitle>
        <EmptyDescription>
          Activate Pro to access advanced analytics, automation, and
          collaboration workflows across your team.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button asChild>
          <a href={siteConfig.upgrade.href}>
            {siteConfig.upgrade.label}
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </EmptyContent>
    </Empty>
  )
}
