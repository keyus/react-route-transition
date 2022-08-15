import { useNavigate } from 'react-router-dom'
import './style.css';

export default function About() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1)
  }
  return (
    <div className="about page">
      关于我们:

      <div>
        <button onClick={onClick}>返回</button>
      </div>
    </div>
  );
}

