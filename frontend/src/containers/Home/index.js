import React from 'react';
import video from './video.mp4';
import TeliportmeLogo from './logos/teliportme-logo.png';
import TutorialsforvrLogo from './logos/tutorialsforvr-logo.png';
import Unicefinnovationfund from './logos/unicef2.png';
import styled from 'styled-components';
import RightArrow from './arrow-right2.svg';

const BgObject = styled.div.attrs({
  className: 'left-2-ns top--2'
})`
  position: absolute;
  z-index: -1;
  width: 639px;
  height: 600px;
  border-radius: 30% 70% 30% 100%;
  background-color: #ecf3ff;
  background-image: -webkit-linear-gradient(270deg, #ecf3ff, #fff);
  background-image: linear-gradient(180deg, #ecf3ff, #fff);
  @media screen and (max-width: 30em) {
    width: 300px;
    height: 350px;
  }
`;

const VideoPlayer = styled.video.attrs({
  className: 'w-80 mw-100-ns mt4 mt0-ns',
  autoPlay: true,
  muted: true,
  loop: true,
  src: video
})`
  transform: perspective(3190px) rotateY(-29deg) rotateX(4deg) rotate(1deg);
  box-shadow: 1px 1px 5px 0 rgba(26, 26, 67, 0.05),
    39px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
    23.4px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  border: 3px solid black;
  padding: 2px;
  @media screen and (max-width: 30em) {
    transform: none;
  }
`;

const Home = () => (
  <div className="center w-80-ns w-100">
    <div className="tc">
      <a
        href="http://unicefstories.org/2018/04/04/venturefundteliportme/"
        target="_blank"
        rel="noopener noreferrer"
        className="b b--light-green ba bg-washed-green br-pill center dib f4-ns f5 green link mb3 mt3 mw7 ph3 pv2 tc"
      >
        Proudly supported by UNICEF Innovation Fund
        <img
          src={RightArrow}
          className="w1 h1 ml2 v-mid dn dib-ns"
          alt="right"
        />
      </a>
    </div>
    <div className="cf items-center justify-between ph2">
      <div className="fl w-100 w-50-l pl5-ns">
        <div className="tc tl-ns w-100">
          <button className="b--none bg-yellow black br-pill dib f6 fw6 mb2 no-underline outline-0 ph3 pv2 trackedine">
            Open Source
          </button>
        </div>
        <span className="db f1-ns f2 fw5 lh-title tc tl-ns">
          Collaboratively build customizable
          <br />
          <span style={{ color: '#216ef4' }}>VR experiences</span>
        </span>
        <BgObject />
        <div className="cf flex justify-center mt4 mt5-l ph0-ns ph2 tc tl-ns w-100 justify-start-ns">
          <div className="fl">
            <a
              href="https://github.com/teliportme/remixVR"
              className="b--red ba bg-red br2 bw1 dib dim link mb2 ph3 pv2 tracked white"
            >
              View on Github
            </a>
          </div>
          <div className="fl">
            <a
              className="b--red ba br2 bw1 dib dim fw4 link mb2 ml3 ph3 pv2 red tracked"
              href="https://blog.teliportme.com/remixvr/"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="fl w-100 w-50-l tc mt5-ns">
        <VideoPlayer />
      </div>
    </div>
    <div className="mt4 ph7-l ph5-ns pv4 tc">
      <span className="ttu  tracked-mega relative bottom-1 fw6 light-silver f5">
        Supported By
      </span>
      <div className="mt3">
        <a href="https://unicefinnovationfund.org" className="link">
          <img
            className="w-100 w-25-ns mw5 mw6-ns"
            style={{
              top: '0.5rem',
              position: 'relative'
            }}
            src={Unicefinnovationfund}
            alt="unicef innovation fund logo"
          />
        </a>
        <a href="https://tutorialsforvr.com" className="link">
          <img
            className="w-100 w-20-ns mw5 mw6-ns"
            src={TutorialsforvrLogo}
            alt="tutorials for vr logo"
          />
        </a>
        <a href="https://teliportme.com" className="link">
          <img
            className="w-100 w-20-ns mw5 mw6-ns"
            src={TeliportmeLogo}
            alt="teliportme logo"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Home;
