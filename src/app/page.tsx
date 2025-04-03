import ThemeSwitch from '@/components/ThemeSwitch'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen max-w-screen-lg mx-auto px-4">
      <div className="flex justify-center"><ThemeSwitch/></div>
      <h1 className="text-4xl mt-2 text-cyan-300 text-center">Resource Management System</h1>
      <p className="text-lg mt-4 mx-5 text-center"> The Resource Management System (RMS) is a web-based platform designed to streamline resource allocation and scheduling within the Arts
        Faculty. It provides an intuitive interface for managing lab allocations, creating and organizing timetables, and handling exam payment claims for lecturers. The system ensures
        efficient coordination between students, lecturers, and administrators, improving accessibility and reducing administrative workload.</p>
    </main>

  );
}
