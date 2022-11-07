import { memo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Container } from './style';
import Header from '@components/Header';

function FirstSlide(): JSX.Element {
  useEffect(() => {
    gsap.fromTo('#slogan', { autoAlpha: 0, x: -150 }, { autoAlpha: 1, x: 0, duration: 1 });
    gsap.fromTo('#big_img', { autoAlpha: 0, x: 150 }, { autoAlpha: 1, x: 0, duration: 1 });
  }, []);
  return (
    <Container className="bg-[#1a2239] flex pl-20 pr-20 xl:pl-0 xl:pr-0 pt-50 pb-50 xl:pt-0 xl:pb-0 xl:h-620 justify-between items-center w-full xl:w-1280 m-auto text-[#1a2239] xl:min-h-screen">
      <div id="slogan" className="w-1/2 xl:w-586">
        <div className="w-full xl:text-[3.75rem] leading-[1.2] text-[#fff]">Fcc Spa</div>
        <div className="w-full h-64 xl:text-[1.25rem] text-[#AEB0B4]">
          with <span className="text-[#03AB55]">React/Ts/Webpack/Swc/Tailwind</span>
        </div>
      </div>
      <img id="big_img" className="w-1/2 xl:w-586" src="/public/home_big_img.png" />
    </Container>
  );
}

function Features(): JSX.Element {
  useEffect(() => {
    let count = 0;
    const gsapCallback = () => {
      if (count >= 2) return;
      if (count === 1) {
        gsap.fromTo(
          '#feature-items',
          { autoAlpha: 1, y: 100, opacity: 0 },
          { autoAlpha: 1, y: 0, duration: 1, opacity: 1 }
        );
      }
      count++;
    };
    const options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(gsapCallback, options);
    const target = document.querySelector('#feature-items') as HTMLElement;
    observer.observe(target);
  }, []);

  const features: { icon: string; title: string; desc: string }[] = [
    {
      icon: 'public/feature1.png',
      title: 'Web2 Compatible',
      desc: 'Full Support of L3-L7 network service,  include Native DNS, DoT and DoH.',
    },
    {
      icon: 'public/feature2.png',
      title: 'Web3 Based',
      desc: 'Built-in Web3 Support, Connect your web3 assets via immune DNS system.',
    },
    {
      icon: 'public/feature3.png',
      title: 'Zero Paid',
      desc: 'Free of Charge, for everyone and forever.',
    },
    {
      icon: 'public/feature4.png',
      title: 'Easy Use',
      desc: 'simple setup without wallet required.',
    },
  ];

  return (
    <div className="xl:h-315 xl:w-1280 pb-20 xl:pb-0 xl:m-auto bg-[#212B46] ">
      <div className="uppercase text-[#ffe102] mb-[0.35em] pt-[64px] text-[1rem] bold text-center">
        feature
      </div>
      <div className="xl:flex" id="feature-items">
        {/* {features.map(item => {
          return (
            <div key={item.title} className="flex flex-1 flex-col items-center mb-30 xl:mb-0">
              <div className="w-60 h-60 mb-[1rem] rounded-[30px] bg-[#233847] flex justify-center items-center">
                <img className="w-24 h-24" src={item.icon} />
              </div>
              <div className="text-[1.25rem] text-[#fff] mb-[7px]">{item.title}</div>
              <div className="text-[#aeb0b4] text-[1rem] leading[1.5] text-center pr-[16px]">
                {item.desc}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

function Tech(): JSX.Element {
  const techs: { icon: string; title: string; desc: string }[] = [
    {
      icon: 'public/tech_item1.png',
      title: 'Reliable',
      desc: 'Development base on Substrate with rust.',
    },
    {
      icon: 'public/tech_item2.png',
      title: 'Trust',
      desc: 'DNS records are protected by consensus, no more poisoning.',
    },
    {
      icon: 'public/tech_item3.png',
      title: 'Ductile',
      desc: ' Connect to the whole Polkadot ecosystem, and will support more.',
    },
    {
      icon: 'public/tech_item4.png',
      title: 'Secure',
      desc: 'DNS processing  secure by decentralized network against system level attacks.',
    },
  ];
  return (
    <div className="xl:w-1280 m-auto">
      <div className="uppercase text-[#ffe102] mb-[2em] pt-[64px] text-[1rem] bold text-center">
        tech
      </div>
      <div className="flex items-center justify-center">
        <div id="tech_left" className="flex xl:flex-1 flex-col">
          {/* {techs.slice(0, 2).map(item => {
            return (
              <div key={item.title} className="flex flex-1 flex-col items-center pb-50">
                <div className="w-60 h-60 mb-[1rem] rounded-[30px] bg-[#04AB55] flex justify-center items-center">
                  <img className="w-24 h-24" src={item.icon} />
                </div>
                <div className="text-[1.25rem] text-[#fff] mb-[7px]">{item.title}</div>
                <div className="text-[#aeb0b4] text-[1rem] leading[1.5] text-center">
                  {item.desc}
                </div>
              </div>
            );
          })} */}
        </div>
        <div id="tech_img" className="xl:flex-1">
          <img className="w-456" src="public/tech_center.png" />
        </div>
        <div id="tech_right" className="flex xl:flex-1 flex-col">
          {/* {techs.slice(2).map(item => {
            return (
              <div key={item.title} className="flex flex-1 flex-col items-center pb-50">
                <div className="w-60 h-60 mb-[1rem] rounded-[30px] bg-[#04AB55] flex justify-center items-center">
                  <img className="w-24 h-24" src={item.icon} />
                </div>
                <div className="text-[1.25rem] text-[#fff] mb-[7px]">{item.title}</div>
                <div className="text-[#aeb0b4] text-[1rem] leading[1.5] text-center pr-[16px]">
                  {item.desc}
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

function RoadMap(): JSX.Element {
  return (
    <div className="xl:w-1280 m-auto pb-[3rem]">
      <div className="uppercase text-[#ffe102] mb-[2em] pt-[64px] text-[1rem] bold text-center">
        roadmap
      </div>
      <div className="flex flex-col items-center"></div>
    </div>
  );
}

function Contact(): JSX.Element {
  return <div className="pb-[3rem] pt-[3rem] border-t border-[#000000]"></div>;
}

function Bottom(): JSX.Element {
  return (
    <div className="h-60 leading-[60px] text-[0.875rem] text-[#AEB0B4] text-center">
      © 2022 cutefcc
    </div>
  );
}

const Home = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Header />
      <div className="w-full bg-[#1a2239]">
        <FirstSlide />
      </div>
      <div className="w-full bg-[#212B46]">
        <Features />
      </div>
      <div className="w-full bg-[#1B2238]">
        <Tech />
      </div>
      <div className="w-full bg-[#1B2238]">
        <RoadMap />
      </div>
      <div className="w-full bg-[#1B2238]">
        <Contact />
      </div>
      <div className="w-full bg-[#212B46]">
        <Bottom />
      </div>
    </div>
  );
};
export default memo(Home);
