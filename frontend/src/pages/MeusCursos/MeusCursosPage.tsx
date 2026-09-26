import { useState } from 'react'
import { completedCourses, continueCourse, exploreCourses, ongoingCourses, savedCourses, type CourseItem } from '../../mocks/meus-cursos.mock'
import CourseListCard from './components/CourseListCard'
import ContinueCourseCard from './components/ContinueCourseCard'
import CourseTabs, { type CourseTab } from './components/CourseTabs'
import SideCourseCard from './components/SideCourseCard'
import MeusCursosHero from './components/MeusCursosHero'
import CourseDetailsDialog from './components/CourseDetailsDialog'
import './meus-cursos.css'

export default function MeusCursosPage() {
  const [activeTab, setActiveTab] = useState<CourseTab>('ongoing')
  const [saved, setSaved] = useState(savedCourses)
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null)
  const [announcement, setAnnouncement] = useState('')
  const savedIds = new Set(saved.map((course) => course.id))

  function toggleSave(course: CourseItem) {
    const alreadySaved = savedIds.has(course.id)
    setSaved((current) => alreadySaved ? current.filter((item) => item.id !== course.id) : [...current, course])
    setAnnouncement(`${course.title}: ${alreadySaved ? 'removido dos salvos' : 'adicionado aos salvos'}.`)
  }

  function showSaved() {
    setActiveTab('saved')
    document.getElementById('course-tab-saved')?.focus()
  }

  const listProps = { savedIds, onOpen: setSelectedCourse, onToggleSave: toggleSave }
  return (
    <div className="flex min-w-0 flex-col gap-5 lg:gap-6">
      <MeusCursosHero />
      <CourseTabs activeTab={activeTab} onChange={setActiveTab} />
      <p role="status" className="sr-only">{announcement}</p>
      <div id="my-courses-panel" role="tabpanel" aria-labelledby={`course-tab-${activeTab}`} tabIndex={0} className="min-w-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400">
        {activeTab === 'ongoing' && (
          <div className="grid min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="flex min-w-0 flex-col gap-5">
              <ContinueCourseCard isSaved={savedIds.has(continueCourse.id)} onOpen={setSelectedCourse} onToggleSave={toggleSave} />
              <CourseListCard title="Cursos em andamento" courses={ongoingCourses} {...listProps} />
            </div>
            <aside className="flex min-w-0 flex-col gap-5" aria-label="Cursos salvos e sugestões">
              <SideCourseCard title="Cursos salvos" actionLabel="Ver todos os salvos" courses={saved} onOpen={setSelectedCourse} onAction={showSaved} />
              <SideCourseCard title="Continue explorando" actionLabel="Explorar mais cursos" courses={exploreCourses} onOpen={setSelectedCourse} to="/cursos" />
            </aside>
          </div>
        )}
        {activeTab === 'completed' && <CourseListCard title="Cursos concluídos" courses={completedCourses} {...listProps} />}
        {activeTab === 'saved' && (
          <div className="grid min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <CourseListCard title="Cursos salvos" courses={saved} {...listProps} />
            <SideCourseCard title="Continue explorando" actionLabel="Explorar mais cursos" courses={exploreCourses} onOpen={setSelectedCourse} to="/cursos" />
          </div>
        )}
      </div>
      {selectedCourse && <CourseDetailsDialog course={selectedCourse} isSaved={savedIds.has(selectedCourse.id)} onClose={() => setSelectedCourse(null)} onToggleSave={toggleSave} />}
    </div>
  )
}
