import React from 'react';

import Posts from './Posts.js'
import NavBar from './NavBar.js'
import Profile from './Profile.js'
import Stories from './Stories.js'
import Suggestions from './Suggestions.js'

class App extends React.Component {

    render () {
        return (
            <div>

            <NavBar title="Photo App" />

            <aside>
                <Profile/>
                <Suggestions/>
            </aside>

            <main className="content">
                <Stories />
                <Posts />
            </main>

            </div>
        );
    }
}

export default App;
