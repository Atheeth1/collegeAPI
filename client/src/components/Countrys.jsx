import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_COUNTRYS } from '../queries/countryQueries';

export default function Clients() {
    const { loading, error, data } = useQuery(GET_COUNTRYS);

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.countrys.map((country) => (
                            <ClientRow key={country.id} country={country} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
