import Navbar from "./Navbar"
import Footer from "./Footer"

interface MyProps {
  // extraClasses: string;
  children?: React.ReactNode;
}

const Layout: React.FC<MyProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col grow">{ children }</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Layout 

// interface Layout {
//   children?: React.ReactNode;
// }  
