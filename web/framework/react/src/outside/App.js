import React, {useEffect} from 'react'
import Ticker from 'react-ticker'
import Marquee from 'jsmarquee'
 import './app.css';

export default () => {  
  useEffect(() => {
    const m = new Marquee({
      element: '#marquee-demo',
      velocity: 1
    });
    m.run();
  }, []);

  return (
    <div class="block">
      <div className="my-marquee" id="marquee-demo">
          <div className="text-block">
              content goes here. you can use any html tag, including imagescontent goes here. you can use any html tag, including images
          </div>
      </div>    
    </div>
  )
 }