import * as React from 'react';
import {Link} from 'react-router';

function AppRoot({children}) {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/sample-route-1'>Page 1</Link></li>
                <li><Link to='/sample-route-2'>Page 2</Link></li>
            </ul>
            <hr />
            <div>
                {children}
            </div>

            <footer>
                &copy; {new Date().getFullYear() } - Hermes Corp
            </footer>
        </div>
    );
}

export default AppRoot;