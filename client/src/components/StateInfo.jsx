import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export default function StateInfo({ state }) {
  return (
    <>
      <h5 className='mt-5'>State Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {state.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {state.description}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {state.status}
        </li>
      </ul>
    </>
  );
}
