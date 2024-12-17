import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img
          width="200"
          alt="icon"
          src="https://pbs.twimg.com/profile_images/730268134460903424/8WOgriUU_400x400.jpg"
        />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>

        <button
          type="button"
          onClick={() => {
            // calling IPC exposed from preload script
            // window.electron.ipcRenderer.once('ipc-example', (arg) => {
            //   // eslint-disable-next-line no-console
            //   console.log(arg);
            // });

            // window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
            window.electron.ipcRenderer.sendMessage('close', ['close']);
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
