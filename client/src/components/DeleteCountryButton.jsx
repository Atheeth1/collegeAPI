import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_COUNTRY } from '../mutations/countryMutations';
import { GET_COUNTRYS } from '../queries/countryQueries';
import { useMutation } from '@apollo/client';

export default function DeleteCountryButton({ countryId }) {
  const navigate = useNavigate();

  const [deleteCountry] = useMutation(DELETE_COUNTRY, {
    variables: { id: countryId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_COUNTRYS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteCountry}>
        <FaTrash className='icon' /> Delete Country
      </button>
    </div>
  );
}
