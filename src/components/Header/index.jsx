

import './style.css'
import rasm from '../../assets/kall.png'

function Header() {
   return (
      <div className='kka' >
         <div className='RRR container' >
            <div className='surqash'>
               <img src={rasm} alt="" />
            </div>

            <ul>
               <li><a href="#">HOME</a></li>
            </ul>
            <ul>
               <li><a href="#">ABOUT US</a></li>
            </ul>
            <ul>
               <li><a href="#">SERVICES</a></li>
            </ul>
            <ul>
               <li><a href="#">BLOG</a></li>
            </ul>
            <ul>
               <li><a href="#">CONTACT</a></li>
            </ul>
            <ul>
               <li><a href="#">CONTACT</a></li>
            </ul>
            <button>.....   📅Book Schedule......  .</button>
         </div>
      </div>
   );
}

export default Header;