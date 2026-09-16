import { Bookmark, CheckCircle2, Clock3 } from 'lucide-react'

export type CourseTab = 'Em andamento' | 'Concluídos' | 'Salvos'

type CourseTabsProps = {
  activeTab: CourseTab
  onChange: (tab: CourseTab) => void
}

const tabs: { label: CourseTab; icon: typeof Clock3 }[] = [
  { label: 'Em andamento', icon: Clock3 },
  { label: 'Concluídos', icon: CheckCircle2 },
  { label: 'Salvos', icon: Bookmark },
]

export default function CourseTabs({ activeTab, onChange }: CourseTabsProps) {
  return (
    <div className="flex flex-wrap gap-5 border-b border-ink-200/70">
      {tabs.map(({ label, icon: Icon }) => {
        const isActive = activeTab === label

        return (
          <button
            key={label}
            type="button"
            aria-selected={isActive}
            role="tab"
            onClick={() => onChange(label)}
            className={`flex items-center gap-2 border-b-2 px-1 pb-3 text-sm font-bold transition-colors ${
              isActive
                ? 'border-brand-blue-500 text-brand-blue-400'
                : 'border-transparent text-ink-500 hover:border-ink-200 hover:text-ink-700'
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={2} />
            {label}
          </button>
        )
      })}
    </div>
  )
}
