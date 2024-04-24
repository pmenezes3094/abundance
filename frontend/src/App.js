
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';

import AddText from './components/pages/AddText';
import AddLink from './components/pages/AddLink';
import AddImage from './components/pages/AddImage';
import AddVideo from './components/pages/AddVideo';
import AddAudio from './components/pages/AddAudio';
import AddFile from './components/pages/AddFile';
import AddRss from './components/pages/AddRss';
// import AddApi from './components/pages/AddApi';

import UpdateText from './components/pages/UpdateText';
import UpdateLink from './components/pages/UpdateLink';
import UpdateImage from './components/pages/UpdateImage';
import UpdateVideo from './components/pages/UpdateVideo';
import UpdateAudio from './components/pages/UpdateAudio';
import UpdateFile from './components/pages/UpdateFile';
import UpdateRss from './components/pages/UpdateRss';
import UpdateApi from './components/pages/UpdateApi';

import Settings from './components/pages/Settings';
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>} />

            <Route path="/addText" element={<AddText/>} />
            <Route path="/addLink" element={<AddLink/>} />
            <Route path="/addImage" element={<AddImage/>} />
            <Route path="/addVideo" element={<AddVideo/>} />
            <Route path="/addAudio" element={<AddAudio/>} />
            <Route path="/addFile" element={<AddFile/>} />
            <Route path="/addRss" element={<AddRss/>} />
            {/* <Route path="/addApi" element={<AddApi/>} /> */}

            <Route path="/updateText/:id" element={<UpdateText/>} />
            <Route path="/updateLink/:id" element={<UpdateLink/>} />
            <Route path="/updateImage/:id" element={<UpdateImage/>} />
            <Route path="/updateVideo/:id" element={<UpdateVideo/>} />
            <Route path="/updateAudio/:id" element={<UpdateAudio/>} />
            <Route path="/updateFile/:id" element={<UpdateFile/>} />
            <Route path="/updateRss/:id" element={<UpdateRss/>} />
            <Route path="/updateApi/:id" element={<UpdateApi/>} />

            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
