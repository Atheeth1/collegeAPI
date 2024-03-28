import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_COLLEGE } from '../mutations/collegeMutations';
import { GET_COLLEGES } from '../queries/collegeQueries';
import { useMutation } from '@apollo/client';

export default function DeleteCollegeButton({collegeId }) {
  const navigate = useNavigate();

  const [deleteCollege] = useMutation(DELETE_COLLEGE, {
    variables: { id:collegeId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_COLLEGES }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteCollege}>
        <FaTrash className='icon' /> Delete College
      </button>
    </div>
  );
}
