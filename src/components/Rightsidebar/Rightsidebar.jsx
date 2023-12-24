import React from 'react'
import "./Rightsidebar.css"
import Widget from './Widget'
import WidgetTags from './WidgetTags'

export default function Rightsidebar() {
    return (
        <div>
            <aside className='right-sidebar'>
                <Widget />
                <WidgetTags />
            </aside>
        </div>
    )
}
