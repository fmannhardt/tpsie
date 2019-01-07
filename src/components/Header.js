import React from 'react'

const Header = (props) => (
    <header id="header">
        <h1>1<sup>st</sup> Workshop on <br/> Trust and Privacy Aspects of Smart Information Environments (TPSIE)</h1>

        <p>
            <i>Organised in conjunction with the 18th IFIP Conference on e-Business, e-Services and e-Society</i><br/>
            <i><a href="https://www.i3e2019.com/">I3E 2019</a> on the 18-20 September 2019 in Trondheim, Norway</i>
        </p>
        <ul className="icons">
            <li><a href="https://twitter.com/search?src=typd&q=%23tpsie19" target="_blank" className="icon fa-twitter alt" title="Share on Twitter"><span className="label">Twitter</span></a></li>
            <li><a href="mailto:felix.mannhardt@sintef.no" className="icon fa-envelope alt" title="Contact Organiser"><span className="label">Mail</span></a></li>
            <li><a href="#submission" className="icon fa-calendar alt" title="Submission deadline"><span className="label">Submit</span></a></li>
            <li><a href="https://easychair.org/conferences/?conf=tpsie2019" target="_blank" className="icon fa-paper-plane alt" title="Submit Paper"><span className="label">Submit</span></a></li>
        </ul>        
    </header>
)

export default Header
