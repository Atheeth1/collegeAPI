import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_STATE } from '../mutations/stateMutations';
import { GET_STATES } from '../queries/stateQueries';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function AddStateModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('new');

  const [addState] = useMutation(ADD_STATE, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addState } }) {
      const { states } = cache.readQuery({ query: GET_STATES });
      cache.writeQuery({
        query: GET_STATES,
        data: { states: [...states, addState] },
      });
    },
  });

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    addState(name, description, clientId, status);

    setName('');
    setDescription('');
    setStatus('new');
    setClientId('');
  };

  if (loading) return null;
  if (error) return 'Something Went Wrong';

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#addStateModal'
          >
            <div className='d-flex align-items-center'>
              <FaList className='icon' />
              <div>New State</div>
            </div>
          </button>

          <div
            className='modal fade'
            id='addStateModal'
            aria-labelledby='addStateModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='addStateModalLabel'>
                    New State to Add
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                      <label className='form-label'>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Description</label>
                      <textarea
                        className='form-control'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Status</label>
                      <select
                        id='status'
                        className='form-select'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                      </select>
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Client</label>
                      <select
                        id='clientId'
                        className='form-select'
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value=''>Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type='submit'
                      data-bs-dismiss='modal'
                      className='btn btn-primary'
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
