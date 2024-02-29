import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import SideBar from './index.jsx';

import useStateContext from './Context/ContextProvider.jsx'

const Dashboard = () => {

    const {setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themSettings, setThemeSettings} = useContext(useStateContext); 

    useEffect(() => {
        const currentThemColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if(currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    return (
        <div className={currentMode === 'Dark' ? 'dard' : ''}>
           <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zINdex:'1000'}}>
                    <button type='button' onClick={() => setThemeSettings(true)}
                        style={{background: currentColor, borderRadius:'50%'}}
                        className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
                    >
                        <FiSettings/>
                    </button>  
                </div>
                 
            </div>

            { activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <SideBar />
                </div>
            ) : (
                <div className='w-0 dark:bg-secondary-dark-bg bg-white'>
                    <SideBar/>
                </div>
            )
            }

            <div 
                className={
                    activeMenu 
                    ? 'dark: bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' 
                    : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
                }>

                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    {/* <Navbar/> */}
                </div> 

                <div>
                    {setThemeSettings && (<setThemeSettings/>)}
                    <Routes>
                        <Routes>
                            <Route path="/" elements={(<Ecommerce/>)}/>
                            <Route path="/partner" elements={<Partner/>}/>
                            <Route path="/customers" element={<Customers/>}/>
                        </Routes>
                    </Routes>
                </div>

            </div>
            </BrowserRouter> 
        </div>
    );
}

export default Dashboard;
