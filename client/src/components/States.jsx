import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import StateCard from './StateCard';
import { GET_STATES } from '../queries/stateQueries';

export default function States() {
  const { loading, error, data } = useQuery(GET_STATES);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.states.length > 0 ? (
        <div className='row mt-4'>
          {data.states.map((state) => (
            <StateCard key={state.id} state={state} />
          ))}
        </div>
      ) : (
        <p>No States</p>
      )}
    </>
  );
}
