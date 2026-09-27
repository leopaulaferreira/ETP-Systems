import type { AssessmentStatus } from '../../../types/assessment'
import { statusLabels } from '../assessment'
const colors: Record<AssessmentStatus, string> = {
  pending: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  in_progress: 'border-blue-400/20 bg-blue-400/10 text-blue-300',
  completed: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  scheduled: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
}
export default function AssessmentBadge({ status }: { status: AssessmentStatus }) {
  return (
    <span
      className={`inline-flex w-fit whitespace-nowrap rounded-md border px-2 py-1 text-[10px] font-bold ${colors[status]}`}
    >
      {statusLabels[status]}
    </span>
  )
}
