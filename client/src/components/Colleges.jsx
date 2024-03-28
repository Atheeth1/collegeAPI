import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import CollegeCard from './CollegeCard';
import { GET_COLLEGES } from '../queries/collegeQueries';

export default function Colleges() {
  const { loading, error, data } = useQuery(GET_COLLEGES);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.colleges.length > 0 ? (
        <div className='row mt-4'>
          {data.colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      ) : (
        <p>No Colleges</p>
      )}
    </>
  );
}
