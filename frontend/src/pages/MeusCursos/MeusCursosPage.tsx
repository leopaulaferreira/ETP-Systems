import { useState } from 'react'
import { completedCourses, exploreCourses, ongoingCourses, savedCourses } from '../../mocks/meus-cursos.mock'
import CourseListCard from './components/CourseListCard'
import ContinueCourseCard from './components/ContinueCourseCard'
import CourseTabs, { type CourseTab } from './components/CourseTabs'
import SideCourseCard from './components/SideCourseCard'
import MeusCursosHero from './components/MeusCursosHero'

export default function MeusCursosPage() {
  const [activeTab, setActiveTab] = useState<CourseTab>('ongoing')

  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <MeusCursosHero />
      <div>
        <CourseTabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div id="my-courses-panel" role="tabpanel" aria-labelledby={`course-tab-${activeTab}`} tabIndex={0} className="flex flex-col gap-5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400">
      {activeTab === 'ongoing' && (
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

      {activeTab === 'completed' && (
        <CourseListCard title="Cursos concluídos" courses={completedCourses} completed />
      )}

      {activeTab === 'saved' && (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(300px,1fr)]">
          <CourseListCard title="Cursos salvos" courses={savedCourses} />
          <SideCourseCard title="Continue explorando" actionLabel="Explorar mais cursos" courses={exploreCourses} />
        </div>
      )}
      </div>
    </div>
  )
}
