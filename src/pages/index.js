import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import trondheim from '../assets/images/trondheim.jpg'
import trondheim2 from '../assets/images/trondheim2.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="1st Workshop on Trust and Privacy Aspects of Smart Information Environments (TPSIE)" />

        <Header />        

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="about" className="main">          
            <header className="major">
              <h2>About the TPSIE workshop</h2>
            </header>            
            <p className="content">
              <h3>Background</h3>
                <p>Personalized support and services, based on data analytics, have been on the rise the last decade. The scale and dimensions of data gathering and shared in smart information environment (SIE) is sometimes hard for users (data subjects) to fathom and leaves them wondering when, why and how data was collected, or information generated. Much of this is due to the combined power of an abundance of data, data analytics methods and machine learning. Machine learning may, for example, be used to support (or automate) repetitive work, warnings of potential errors, and sense non-compliant behavior.</p>
                <p>Despite the many advantages that such smart information environments offer, there are concerns about the responsible use of the data collected. Specifically, the new European regulations on data protection and privacy, GDPR, have raised awareness on privacy issues and causes concerns for designers and developers of smart information systems. In the age of information and digital technology, the focus of privacy has been on the protection of data directly or indirectly pertaining to a person; i.e. protection of personal information and reduction of risks for data subjects. Emphasis has been on data security and several methods, frameworks and techniques have been developed for ensuring appropriate data security. However, in the age of big data, machine learning, ubiquitous computing and social networks, such a data-centric view is inadequate and the need for a more user-centric view of privacy and protection of user data are required. In fact, with increasing availability of data, technology to aggregate and the possibility to conduct sophisticated analyses, the need to protect data and informational privacy is more important than ever before. This is also critical to build smart information environments that users can trust.</p>
                <p>For a user-centric view, research has shown that there is a mismatch between legitimate concerns about privacy and actual behavior when it comes to sharing personal information (the "Privacy Paradox"). For those building systems it is necessary to navigate the (users) needs for personalization and wishes to remain anonymous ("Personalization Paradox"). It is indeed this paradox that SIE designers and organizations are faced with when designing services to support people in the various arenas in their personal or work lives and to enhance and foster knowledge sharing among people. Many appreciate the personalized recommendations on websites or personalized messages and notifications received through social media and other online services but oppose the invasion of their privacy. This in turn requires IT designers and developers of SIE to practice privacy-by-design or privacy-by-architecture within the design of SIE and calls for anonymization and cryptographical data protection techniques for log files.</p>
              <h3>Goals</h3>
                <p>The need to discuss issues related to privacy and trust in smart information environments is an important and highly relevant topic. This workshop's main objective is to start a dialogue and bring together a multi-disciplinary group of researchers, industry and practitioners to share their research, ideas, experiences and concerns in area of organizational and technology privacy and trust in smart information environments. The topics of interest for this workshop, but not limited to, are provided below.</p>
              <h3>Topics</h3>
              <ul>
                <li>Privacy and trust by design in SIE</li>
                <li>Privacy and trust in SIE</li>
                <li>System design for privacy awareness</li>
                <li>Privacy and trust in (big) data analytics</li>
                <li>Privacy-preserving data/process mining</li>
                <li>Privacy engineering for (event) logs</li>
                <li>Privacy and trust in machine learning</li>
                <li>Privacy and trust in data aggregation</li>
                <li>Privacy and trust in personalized services</li>
                <li>Privacy and trust at the workplace</li>
                <li>Privacy and trust and human factors</li>
                <li>Privacy and trust in organizational data collection</li>
                <li>Empirical analysis of GDPR compliance in service repositories</li>
                <li>End-user privacy and trust control/management in SIE</li>
                <li>Techniques for GDPR compliant modeling</li>
                <li>Methods and techniques for privacy and trust management in SIE</li>
              </ul>
            </p>
            <span className="image center"><img src={trondheim} alt="Trondheim (Old Town Bridge)" width="75%"/><figcaption>Trondheim (Old Town Bridge)</figcaption></span>
          </section>


          <section id="submission" className="main">
            <header className="major">
              <h2>Paper submission</h2>
            </header>
            <p className="content">
            <h3>Important dates</h3>
            <p>
            Paper submission deadline: 31 March 2019<br/>
            Notification of acceptance: 30 April 2019<br/>
            Early Bird Registration: 30 May 2019<br/>
            Workshop day: between 18-20 September; exact date to be announced in July 2019<br/>
            <br/> 
            <i>Deadlines correspond to anywhere on earth ('AoE' or 'UTC-12′)</i>
            </p>

            <h3>Submission guidelines</h3>
            <p>Authors should submit original, unpublished research papers. All papers must not simultaneously be submitted to another journal or conference. There are two types of submissions:</p>
            <ul>
            <li>Full Paper submissions have a maximum of <b>12 pages</b>.</li>
            <li>Short Paper submissions have a maximum of <b>6 pages</b>.</li>
            </ul>
              
            <p>Authors should follow the Springer formatting for Lecture Notes on Computer Science as indicated here:
            <br/>
            <a href="http://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
            http://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines
            </a>
            </p>

            <h3>Submission</h3>
            <p>Papers and abstracts should be submitted through the Easy Chair web site in PDF format:
            <br/>
            <a href="https://easychair.org/conferences/?conf=tpsie2019">
            https://easychair.org/conferences/?conf=tpsie2019
            </a></p>

            <p>By submitting a paper, authors implicitly agree that at least one of them will register to the conference and present the paper. It is expected that at least one author will register for each accepted paper. Only papers that have been presented by their authors during the conference will be published in the conference proceedings.</p>
            
            <h3>Proceedings</h3>
            <p>The proceedings of the I3E 2019 workshops are planned to be published as a book with the main conference proceedings by Springer-Verlag in its Lecture Notes in Computer Science (LNCS) series.</p>

            <h3>Journal Special Issue</h3>
            <p>We are planning to invite the authors of the best papers to submit an extended version of the papers for a special issue of the EMISA Journal (https://www.emisa-journal.org/emisa) focused on trust and privacy in combination with conceptual modeling. Further details are to be published soon.</p>
            </p>     
            <span className="image center"><img src={trondheim2} alt="Trondheim (Nidaros Cathedral)" width="75%"/>
              <figcaption>Trondheim (Nidaros Cathedral) -- By Edgar El, <a href="https://creativecommons.org/licenses/by/3.0" title="Creative Commons Attribution 3.0">CC BY 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=52934798">Link</a></figcaption>
            </span>       
          </section>

          <section id="program" className="main">
            <header className="major">
              <h2>Workshop program</h2>
              <p>To be announced.</p>
            </header>
          </section>

          <section id="organisers" className="main">
            <header className="major">
              <h2>Organisers</h2>
              </header>
<h3>Organisation committee</h3>
<p>
<a href="https://www.sintef.no/alle-ansatte/ansatt/?empId=5958">Felix Mannhardt</a>, SINTEF<br/>
<a href="https://www.ntnu.edu/employees/sobah.a.petersen">Sobah Abbas Petersen</a>, Norwegian University of Science and Technology<br/>
<a href="http://www.aifb.kit.edu/web/Agnes_Koschmider">Agnes Koschmider</a>, Karlsruhe Institute of Technology<br/>
</p>

<h3>Program committee</h3>
<p>
Wil M. P. van der Aalst, RWTH Aachen University<br/>
Anne Adams, Open University<br/>
Nathalie Baracaldo, IBM Almaden Research Center<br/>
Andrea Burratin, Technical University of Denmark<br/>
Renate Medeiros de Carvalho, Eindhoven University of Technology<br/>
Mauro Conti, University of Padua<br/>
Martin Degeling, Ruhr-Universität Bochum<br/>
Judith Michael, RWTH Aachen University<br/>
Manuel Oliveira, SINTEF<br/>
Ali Sunyaev, Karlsruhe Institute of Technology<br/>
Pieter J. Toussaint, Norwegian University of Science and Technology<br/>
Hans Torvatn, SINTEF<br/>
Matthias Weidlich, Humboldt University of Berlin
</p>
          </section>          

        </div>

      </Layout>
    )
  }
}

export default Index