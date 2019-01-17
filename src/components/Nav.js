import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['about', 'submission', 'program', 'location', 'organisers', 'i3e'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <a href="#about">About</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="submission">
                    <a href="#submission">Submission</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="program">
                    <a href="#program">Program</a>
                </Scroll>
            </li>                        
            <li>
                <Scroll type="id" element="organizers">
                    <a href="#organisers">Organizers</a>
                </Scroll>
            </li>           
            <li>
                <a href="https://www.i3e2019.com" target="_blank" rel="noopener noreferrer">I3E Conference</a>
            </li>
        </Scrollspy>        
    </nav>
)

export default Nav
