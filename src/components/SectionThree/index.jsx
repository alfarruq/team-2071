
import home from"../../assets/home.png"
import table from"../../assets/table.png"
import clean from "../../assets/clean.png"
import clean2 from"../../assets/clean2.png"
import brat1 from "../../assets/brat1.png"
import brat2 from "../../assets/brat2.png"
import opa1 from"../../assets/opa1.png"
import opa2 from"../../assets/opa2.png"

import './style.css'

function SectionThree() {
    return ( 
        <div>



           <div className="sectionone">
            <div className="text1">
                 <h3>BIZNING XIZMATLAR</h3>
            <h1>BIZ NIMALARNI TAKLIF QILYAPMIZ</h1>
            </div>
<div className="cards">
    <div className="card">
        <div className="card-rasm">
            <button><img src={home} alt="" /></button>
        </div>
        <h3 >House Cleaning</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

    </div>
    <div className="card">
         <div className="card-rasm">
            <button><img src={table} alt="" /></button>
        </div>
        <h3 >Office Cleaning</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
    </div>
    <div className="card">
         <div className="card-rasm">
            <button><img src={clean} alt="" /></button>
        </div>
        <h3  >Floor Cleaning</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
    </div>
    <div className="card">
          <div className="card-rasm">
            <button><img src={clean2} alt="" /></button>
        </div>
        <h3  >Window Cleaning</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
    </div>
</div>
           </div>


<div className="sectiontwo">
<div className="text1">
    <h3>BIZNING JAMOE</h3>
    <h1>BIZNING  MAXSULOTLARIMIZ</h1>
</div>



<div className="carts">
    <div className="cart">
       <div className="cart-rasm">
         <img src={brat1} alt="" />
       </div>
        <div className="text2">
<h2>Devon Lane</h2>
<h3>Window Cleaner</h3>
        </div>
    </div>
    <div className="cart">
        <div className="cart-rasm">
            <img src={opa1} alt="" />

        </div>
         <div className="text2">
<h2>Cody Fisher</h2>
<h3>House Cleaner</h3>
        </div>
    </div>
    <div className="cart">
        <div className="cart-rasm">
            <img src={opa2} alt="" />

        </div>
         <div className="text2">
<h2>Ralph Edwards</h2>
<h3>Commercial Cleaner</h3>
        </div>
    </div>
    <div className="cart">
          <div className="cart-rasm">
            <img src={brat2} alt="" />

        </div>
         <div className="text2">
<h2>Bessie Cooper</h2>
<h3>Floor Cleaner</h3>
        </div>
    </div>
</div>
</div>


        </div>
     );
}

export default SectionThree;