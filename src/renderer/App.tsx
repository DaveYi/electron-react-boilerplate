import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import './App.css';

function Hello() {
  return (
    <div>
      <Button className="mgb-10" type="primary">
        合成视频
      </Button>
      <br />
      <Button type="primary">发布视频</Button>
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
