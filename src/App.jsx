import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-rangeslider/lib/index.css';

import '../src/assets/css/animate.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/flaticon-set.css';
import '../src/assets/css/nice-select.css';
import '../src/assets/css/validnavs.css';
import '../src/assets/css/helper.css';
import '../src/assets/css/unit-test.css';
import '../src/assets/css/style.css';

import Routers from "./Routers";
import Dependency from './components/utilities/Dependency';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Dependency />
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
