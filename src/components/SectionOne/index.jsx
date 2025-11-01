

import './style.css'

import img from '../../assets/opa.png'


function SectionOne() {
    return ( 
        <div className='container' >
            <div class="hero">

                <div class="leftt"> 
                  <p style={{marginTop: "150px"}}>YUQORI DARAJALI PROFESSIONAL TOZALASH</p>
                  <br />
                  <h1> <span>OSON TOZALANADIGAN</span> UY VA OFIS</h1>
                  <br />
                    
                  <p> Amet minim mollit non deserunt ullamco  sit aliqua dolor do amet sint. Velit officia enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                  <br />
                  <br />
                    <button>Narx  oling</button>
                </div>

                <div class="rightt">
                    <img src={img} alt="" />
                </div>
              </div>

       
        </div>   
        
        
       
     );
}

export default SectionOne;