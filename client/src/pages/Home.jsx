import Clients from '../components/Clients';
import Projects from '../components/Projects';
import Colleges from '../components/Colleges';
import Countrys from '../components/Countrys';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import AddCollegeModal from '../components/AddCollegeModal';
import AddStateModal from '../components/AddStateModal';
import AddCountryModal from '../components/AddCountryModal';
import States from '../components/States';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
        <AddCollegeModal />
        <AddStateModal />
        <AddCountryModal />
      </div>
      <hr />
      <h1 >List of State Governments</h1>
      <Projects />
      <hr />
      <h1>College List</h1>
      <hr />
      <Colleges />
      <hr />
      <h1>State List</h1>
      <hr />
      <States />
      <hr />
      <h1>User List</h1>
      <hr />
      <Clients />
      <hr />
      <h1>Country List</h1>
      <Countrys />
      <hr />
    </>
  );
}
