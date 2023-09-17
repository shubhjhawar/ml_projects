import React,{useState, useContext} from 'react';
import { Header, Footer } from '@/components'

export const Context = React.createContext();

const Layout = ({children}) => {

  const [isNight, setIsNight] = useState(false);

 
  // const [isNight, setIsNight] = useContext(Context)
  
  console.log("new page context- ", Context);
  console.log("layout is night-", isNight);
  
  return (
    <Context.Provider value={[isNight, setIsNight]}>
    <div className={`min-h-screen text-black md:px-20 lg:py-2 ${isNight ? "bg-gradient-to-br from-black to-zinc-600" : "bg-white"}`}>
        <Header />
        {children}
        <Footer />
    </div> 
    </Context.Provider>
  )
}

export default Layout