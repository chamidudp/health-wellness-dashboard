import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      {/* Add widgets and data visualization here */}
    </div>
  );
};

export default Dashboard;
