import {Chrono} from 'react-chrono'

import './index.css'

const items = [
  {title: 'Aug/2022-till now'},
  {title: '2018-2021'},
  {title: '2013-2017'},
  {title: '2012-2013'},
  {title: '2010-2011'},
]

const Education = () => (
  <div className="chrono-container">
    <Chrono mode="VERTICAL_ALTERNATING" items={items}>
      <div>
        <h1 className="edu-heading">MERN Stack Development</h1>
        <p className="institution">Nextwave Disruptive Technologies.</p>
        <p className="edu-description">
          I am currently enrolled in NxtWave's CCBP 4.0 Intensive program, where
          I am mastering full-stack development with a specialization in 4.0
          technologies. I am highly passionate about front-end development and
          am eager to take on new challenges in the tech industry.
        </p>
      </div>

      <div>
        <h1 className="edu-heading">Technical Operations Associate</h1>
        <p className="institution">
          Demeter Systems Private Limited,Bengaluru.
        </p>
        <p className="edu-description">
          Worked as Technical Operations Associate in Demeter Systems private
          limited,Bengaluru.and During my work period, I consistently deliver my
          best efforts to ensure seamless production.
        </p>
      </div>

      <div>
        <h1 className="edu-heading">
          BACHELOR OF TECHNOLOGY IN CHEMICAL ENGINEERING
        </h1>
        <p className="institution">Adhiparasakthi Engineering College.</p>
        <p className="edu-description">
          I am delighted to announce the successful completion of my Bachelor's
          degree in Chemical Engineering from a distinguished college affiliated
          to Anna University in Tamil Nadu. My academic performance reflects my
          unwavering commitment and dedication to my studies, culminating in an
          outstanding CGPA of 8.12.
        </p>
      </div>

      <div>
        <h1 className="edu-heading">HIGHER SECONDARY COURSE</h1>
        <p className="institution">
          Palaniyappa Memorial Higher Secondary School,Theni.
        </p>
        <p className="edu-description">
          I completed my higher secondary education with majors in Computer
          Science, Mathematics, and Science. I achieved an outstanding score of
          86% in the Tamil Nadu State Board in the Tamil medium.
        </p>
      </div>

      <div>
        <h1 className="edu-heading">SECONDARY SCHOOL LEAVING CERTIFICATE</h1>
        <p className="institution">
          Palaniyappa Memorial Higher Secondary School,Theni.
        </p>
        <p className="edu-description">
          During my educational journey, I successfully completed my SSLC
          education with an exceptional score of 96%. I achieved this score in
          the Tamil Nadu State Board, studying in the Tamil medium.
        </p>
      </div>
    </Chrono>
  </div>
)

export default Education
