import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

//need to make changes on home page for it appear once logged in to show user their week log of moods and ability to add a mood and note for the day

const Home = () => {
  const { data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache"
  });
  console.log(data)
  const storedUser = data?.users || [];
  console.log(storedUser)

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to your Mood Tracker!</h1>
      </div>
      <div className="card-body m-5">
        <h2>How was your day?</h2>
        <ul className="moodContainer">
          <li>Sad 😢</li>
          <li>Bad 😶</li>
          <li>Meh 🙃</li>
          <li>Happy 😀</li>
        </ul>
      </div>
      <form>
      <div>
        <h2>Would you like to add a note for today?</h2>
        <div className="form-group">
          <label htmlFor="userNoteTextarea"></label>
          <textarea className="form-control" id="userNotTextarea" rows="3"></textarea>
      </div>
      </div>
      </form>
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
