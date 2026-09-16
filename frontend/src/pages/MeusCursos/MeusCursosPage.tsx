import { useState } from 'react'
import { completedCourses, exploreCourses, ongoingCourses, savedCourses } from '../../mocks/meus-cursos.mock'
import CourseListCard from './components/CourseListCard'
import ContinueCourseCard from './components/ContinueCourseCard'
import CourseTabs, { type CourseTab } from './components/CourseTabs'
import SideCourseCard from './components/SideCourseCard'

export default function MeusCursosPage() {
  const [activeTab, setActiveTab] = useState<CourseTab>('Em andamento')

  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="flex flex-col gap-5 rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6">
        <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-ink-900 sm:text-4xl">Meus Cursos</h1>
        <CourseTabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 'Em andamento' && (
        <>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(300px,1fr)]">
            <ContinueCourseCard />
            <SideCourseCard title="Cursos salvos" actionLabel="Ver todos os salvos" courses={savedCourses} />
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(300px,1fr)]">
            <CourseListCard title="Cursos em andamento" courses={ongoingCourses} />
            <SideCourseCard title="Continue explorando" actionLabel="Explorar mais cursos" courses={exploreCourses} />
          </div>
        </>
      )}

      {activeTab === 'Concluídos' && (
        <CourseListCard title="Cursos concluídos" courses={completedCourses} completed />
      )}

      {activeTab === 'Salvos' && (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(300px,1fr)]">
          <CourseListCard title="Cursos salvos" courses={savedCourses} />
          <SideCourseCard title="Continue explorando" actionLabel="Explorar mais cursos" courses={exploreCourses} />
        </div>
      )}
    </div>
  )
}
