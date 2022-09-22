import "../Style/Nav.scss";
import gsap from "gsap";
import { useEffect } from "react";
function Nav() {
    useEffect(()=>{
        gsap.to('.d',0.5 ,{
            y:0,
            ease: 'power1.inOut',
            opacity:1,
            delay: 0
        })
        gsap.to('.r',0.5 ,{
            y:0,
            ease: 'power1.inOut',
            opacity:1,
            delay: 0.1
        })
        gsap.to('.e',0.5 ,{
            y:0,
            ease: 'power1.inOut',
            opacity:1,
            delay: 0.2
        })
        gsap.to('.x',0.5 ,{
            y:0,
            ease: 'power1.inOut',
            opacity:1,
            delay: 0.3
        })
        gsap.to('.Nav-Middle-Section',1 ,{
            y:0,
            ease: 'power1.inOut',
            opacity:1,
            delay: 0.6
        })
    })

  return (
    <div className="Nav-Container">
      <div className="Nav-Left-Section">
        <svg
          width="100"
          height="28"
          viewBox="0 0 118.08 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#000"
            stroke-width="0.25mm"
            fill="#16161D"
          >
            <path
              d="M 13.8 28 L 0 28 L 0 0 L 13.8 0 A 21.862 21.862 0 0 1 18.071 0.399 A 16.763 16.763 0 0 1 22.04 1.7 A 13.641 13.641 0 0 1 26.12 4.626 A 12.792 12.792 0 0 1 27.6 6.52 A 12.519 12.519 0 0 1 29.405 11.377 A 16.496 16.496 0 0 1 29.6 13.96 A 15.907 15.907 0 0 1 29.175 17.72 A 12.313 12.313 0 0 1 27.6 21.46 A 13.083 13.083 0 0 1 22.261 26.193 A 15.643 15.643 0 0 1 22.04 26.3 A 17.156 17.156 0 0 1 17.186 27.756 A 22.616 22.616 0 0 1 13.8 28 Z M 9.44 7.36 L 9.44 20.64 L 13.4 20.64 Q 15.4 20.64 16.9 19.88 Q 18.4 19.12 19.24 17.62 A 6.333 6.333 0 0 0 19.908 15.782 Q 20.067 15.005 20.079 14.112 A 10.929 10.929 0 0 0 20.08 13.96 Q 20.08 11.958 19.331 10.527 A 5.576 5.576 0 0 0 19.24 10.36 Q 18.4 8.88 16.9 8.12 Q 15.4 7.36 13.4 7.36 L 9.44 7.36 Z"
              id="0"
              className="d"
              vector-effect="non-scaling-stroke"
            />
            <path
              d="M 42.48 28 L 33.04 28 L 33.04 0 L 46.52 0 Q 50.285 0 53.072 1.181 A 12.369 12.369 0 0 1 53.3 1.28 A 10.857 10.857 0 0 1 56.039 3.009 A 9.416 9.416 0 0 1 57.72 4.94 Q 59.28 7.32 59.28 10.56 Q 59.28 13.8 57.72 16.14 A 9.549 9.549 0 0 1 54.327 19.217 A 11.93 11.93 0 0 1 53.3 19.72 Q 50.546 20.914 46.81 20.959 A 24.414 24.414 0 0 1 46.52 20.96 L 38.28 20.96 L 42.48 17.08 L 42.48 28 Z M 42.48 3 L 42.48 18.12 L 38.28 13.84 L 45.92 13.84 Q 47.142 13.84 47.968 13.498 A 2.801 2.801 0 0 0 48.82 12.96 A 2.905 2.905 0 0 0 49.698 11.302 A 4.208 4.208 0 0 0 49.76 10.56 A 3.962 3.962 0 0 0 49.633 9.53 A 2.849 2.849 0 0 0 48.82 8.16 A 2.887 2.887 0 0 0 47.802 7.559 Q 47.364 7.402 46.823 7.334 A 7.196 7.196 0 0 0 45.92 7.28 L 38.28 7.28 L 42.48 3 Z M 59.88 28 L 49.8 28 L 42.92 17.8 L 52.92 17.8 L 59.88 28 Z"
              id="1"
              className="r"
              vector-effect="non-scaling-stroke"
            />
            <path
              d="M 72.12 7.12 L 72.12 20.88 L 86.12 20.88 L 86.12 28 L 62.84 28 L 62.84 0 L 85.6 0 L 85.6 7.12 L 72.12 7.12 Z M 71.48 17.2 L 71.48 10.4 L 83.96 10.4 L 83.96 17.2 L 71.48 17.2 Z"
              id="2"
              className="e"
              vector-effect="non-scaling-stroke"
            />
            <path
              d="M 97.72 28 L 86.96 28 L 99.44 10.56 L 99.4 17.16 L 87.32 0 L 97.92 0 L 104.96 10.4 L 100.44 10.44 L 107.32 0 L 117.48 0 L 105.4 16.8 L 105.4 10.24 L 118.08 28 L 107.28 28 L 100.24 17.12 L 104.6 17.08 L 97.72 28 Z"
              id="3"
              className="x"
              vector-effect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
      <div className="Nav-Middle-Section">
        <a href="/work">
          <span>Work</span>
        </a>
        <a href="/about">
          <span>About</span>
        </a>
        <a href="/journal">
          <span>Journal</span>
        </a>
        <a href="/careers">
          <span>Careers</span>
        </a>
      </div>
      <div className="Nav-Right-Section">
        <a className="Contact-btn">
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}

export default Nav;
