import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
        <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-blue-600">My Buddy</h1>
            </div>
            <nav className="mt-8">
                <Link to="/institute-list" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-building mr-3"></i>
                    Institute Management
                </Link>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-geo-alt mr-3"></i>
                    Location Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-people mr-3"></i>
                    Student Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-person-workspace mr-3"></i>
                    Teachers Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-book mr-3"></i>
                    Course Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-calendar3 mr-3"></i>
                    ClassName Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-clipboard-check mr-3"></i>
                    Attendance
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-graph-up mr-3"></i>
                    Marks Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-cash mr-3"></i>
                    Fee Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-bell mr-3"></i>
                    Notice Management
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <i className="bi bi-question-circle mr-3"></i>
                    Support
                </a>
            </nav>
        </aside>
    </>
  )
}

export default Sidebar