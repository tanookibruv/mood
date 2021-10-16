import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache"
  });

  const userList = data?.user || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to your Mood Tracker!</h1>
      </div>
      <div className="card-body m-5">
        <h2>How was your day?</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {userList.map((user) => {
              return (
                <li key={user._id}>
                  <Link to={{ pathname: `/user/${user._id}` }}>
                    {user.user1}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new log?</h2>
        <Link to="/newlog">
          <button className="btn btn-lg btn-danger">Create Log</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
