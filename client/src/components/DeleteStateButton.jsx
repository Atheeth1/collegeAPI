import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_STATE } from '../mutations/stateMutations';
import { GET_STATES } from '../queries/stateQueries';
import { useMutation } from '@apollo/client';

export default function DeleteStateButton({ stateId }) {
  const navigate = useNavigate();

  const [deleteState] = useMutation(DELETE_STATE, {
    variables: { id: stateId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_STATES }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteState}>
        <FaTrash className='icon' /> Delete State
      </button>
    </div>
  );
}
