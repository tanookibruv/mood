import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import 'react-bootstrap'
import happy from '../assets/happy.png';
import meh from '../assets/meh.png';
import sad from '../assets/sad.png';
import angry from '../assets/angry.png';

//need to make changes on home page for it appear once logged in to show user their week log of moods and ability to add a mood and note for the day

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache"
  });
  console.log(data)
  const storedUser = data?.users || [];
  console.log(storedUser)

  return (
    <main>
      <div className="card bg-white card rounded w-80">
        <div className="card-header bg-dark text-center">
          <h1>Here's Your Mood</h1>
        </div>
          <div className="card-body m-5">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="square">
                {storedUser.map((userId) => {
                  return (
                    <ul key={userId}>
                      <li>
                        <p>{userId.name}</p>
                        <p>{userId.mood}</p>
                        <p>{userId.note}</p>
                      </li>
                    </ul>
                  );
                })}
              </div>
            )}
          </div>
      </div>

      <div className="card bg-white card-rounded w-80">
        <div className="card-header bg-dark text-center">
          <h2>Welcome to your Mood Tracker!</h2>
        </div>
        <div className="card-body m-5">
          <h3>How was your day?</h3>
          <div className='mood-images'>
            <img src={happy} alt="happy" width='100px' />
            <img src={meh} alt="meh" width='100px' />
            <img src={sad} alt="sad" width='100px' />
            <img src={angry} alt="happy" width='100px' />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">What is your mood?</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Happy</option>
                <option>Meh</option>
                <option>Sad</option>
                <option>Angry</option>
              </select>
            </div>
            <div className="form-group">

              <textarea className="form=control col-12" id="noteTextArea" rows="5"></textarea>
            </div>
          </form>
        </div>
        <div className="card-footer text-center m-3">
          <h2>Ready to create a new log?</h2>
          <Link to="/login">
            <button className="btn btn-lg btn-danger">Create Log</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
