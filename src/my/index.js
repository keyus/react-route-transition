import { useNavigate } from 'react-router-dom'
import './style.css';

export default function My() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1)
  }

  return (
    <div className="my page">
      我的主页:

      <div>
        <button onClick={onClick}>返回</button>
      </div>
    </div>
  );
}

