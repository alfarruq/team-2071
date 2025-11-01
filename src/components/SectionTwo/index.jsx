

import './style.css'
import  one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'

function SectionTwo() {
    return (
        <div>
           <div className="left">
             <h2>BIZ HAQIMIZDA</h2>
            <h1>OFIS VA UYINGIZNI TEZ VA OSON TOZALASH</h1>
            <p>Amet minim mollit non deserunt ullamco  sit aliqua dolor do consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco aliqua dolo ame.</p>
            <h2>MUHAFAZALANGAN KOMPANIYA</h2>
            <p>Amet minim mollit non sit aliqua dolor do consequat sunt nostrud amet. Amet mollit ullamco aliqua dolo ame.</p>
            <button>Bizning Xizmatlarimiz</button>
           </div>
           <div className="right">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
           </div>
        </div>
    );
}

export default SectionTwo;