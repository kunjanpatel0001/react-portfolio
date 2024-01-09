import Sidebar from '../Sidebar'
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        // Main wrapper- App
        <div className="App">        
        <Sidebar /> 
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            {/* setting up the outlet to render all the pages */}
            <Outlet />
            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
        </div>
    )
}

export default Layout