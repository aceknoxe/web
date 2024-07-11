import React from 'react';
import Typed from 'typed.js';
import Link from 'next/link';

const words = [
  'Unlock Your Potential!',
  'Join Our Community!',
  'Discover New Opportunities!',
  'Enhance Your Skills!',
  'Achieve Your Goals!',
];

class Typing extends React.Component {
  private el: HTMLElement | null = null;
  private typed: Typed | null = null;

  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 65,
      backSpeed: 65,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed?.destroy();
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-emerald-50 bg-opacity-50">
        <div className="mb-4 text-2xl font-semibold text-green-600">
          <span
            ref={(el) => {
              this.el = el;
            }}
            style={{ whiteSpace: 'pre' }}
          />
        </div>        
          <Link href="/comingsoon" className="px-4 py-2 bg-gradient-to-r from-[#1D972C] to-[#38ef7d] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-80 transition">
            Register
          </Link>
        
      </div>
    );
  }
}

export default Typing;
