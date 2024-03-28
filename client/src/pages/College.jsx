import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
// import StateInfo from '../components/StateInfo';
import DeleteCollegeButton from '../components/DeleteCollegeButton';
import EditCollegeForm from '../components/EditCollegeForm';
import { useQuery } from '@apollo/client';
import { GET_COLLEGE } from '../queries/collegeQueries';

export default function College() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_COLLEGE, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h1>{data.college.name}</h1>
          <p>{data.college.description}</p>
          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.college.status}</p>

          <ClientInfo client={data.college.client} />
          {/* <StateInfo client={data.college.state} /> */}


          <EditCollegeForm college={data.college} />

          <DeleteCollegeButton collegeId={data.college.id} />
        </div>
      )}
    </>
  );
}
