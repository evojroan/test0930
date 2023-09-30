//test0930
import { useEffect } from 'react';
import { Ripple, initTE } from 'tw-elements';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Allimages = {
  image0: new URL('images/img0.png', import.meta.url).href,
  image1: new URL('images/img1.png', import.meta.url).href,
  image2: new URL('images/img2.png', import.meta.url).href,
  image3: new URL('images/img3.png', import.meta.url).href
};

function App() {
  useEffect(() => {
    AOS.init({ startEvent: 'load' });
    initTE({ Ripple });
  }, []);

  return (
    <div className='w-2/4'>
      <button
        type='button'
        data-te-ripple-init
        data-te-ripple-color='light'
        className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
        Click me
      </button>

      <div
        className=' border-2 border-black flex'
        data-aos='fade-right'>
        <p className='text-lg'>
          1
          <br />
          Lorem ipsum olor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo re ma1gn1a aliqua.
        </p>
        <img
          className='w-2/4'
          src={Allimages.image0}
          alt='image'
        />
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          2
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitatio5n ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
        <img
          className='w-2/4'
          src={Allimages.image1}
          alt='image'
        />
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          3
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
        <img
          className='w-2/4'
          src={Allimages.image2}
          alt='image'
        />
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          4
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
        <img
          className='w-2/4'
          src={Allimages.image3}
          alt='image'
        />
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <img
          className='w-2/4'
          src={Allimages.image3}
          alt='image'
        />
        <p>
          5
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          6
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div>
      {/* <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          7
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div> */}
      {/* <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          8
          <br />
          Lorem ipsu1m dolor sit am1et, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <img
          className='w-2/4'
          src={Allimages.image0}
          alt='image'
        />
        <p>
          9
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          10
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div>
      <div
        className='border-2 border-black flex'
        data-aos='fade-right'>
        <p>
          11
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo re magna aliqua.
        </p>
      </div>
      <div id ="HI"
        className='border-2 border-black flex m-1'
        data-aos='fade-right'>
        <p>
          12
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip1 ex ea commodo r11e magna aliua1.
        </p>
      </div> */}
    </div>
  );
}

export default App;
