import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';

const Dashboard = ({children }) => {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{ padding: '20px', flex: 1, overflow: 'auto' }}>
             {children }
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
