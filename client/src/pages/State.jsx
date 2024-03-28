import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteStateButton from '../components/DeleteStateButton';
import EditStateForm from '../components/EditStateForm';
import { useQuery } from '@apollo/client';
import { GET_STATE } from '../queries/stateQueries';

export default function State() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_STATE, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h1>{data.state.name}</h1>
          <p>{data.state.description}</p>

          <h5 className='mt-3'>State Status</h5>
          <p className='lead'>{data.state.status}</p>

          <ClientInfo client={data.state.client} />

          <EditStateForm state={data.state} />

          <DeleteStateButton stateId={data.state.id} />
        </div>
      )}
    </>
  );
}
