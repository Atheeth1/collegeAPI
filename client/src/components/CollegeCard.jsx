export default function CollegeCard({ college }) {
    return (
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{college.name}</h5>
  
              <a className='btn btn-light' href={`/colleges/${college.id}`}>
                View
              </a>
            </div>
            <p className='small'>
              State: <strong>{college.status}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
  