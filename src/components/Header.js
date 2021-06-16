import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div>
        <header>
            <h1><Fade bottom cascade>Amazing CSS Gradients.</Fade></h1>
            <nav>
                <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anuja-more-6b481a154/">Linkedin</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Anuja-More">Github</a></li>
                        <li><a href="mailto:anujamore2017@gmail.com"><button>Contact</button></a></li>

                </ul>
            </nav>
        </header>
            <p className='header-title'>
            Handpicked amazing gradient <br/>
                for your real life projects ✌</p>
                
        </div> );
    }
}
 
export default Header;