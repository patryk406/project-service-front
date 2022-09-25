import AddClientModal from '../components/client/AddClientModal';
import Clients from '../components/client/Clients';
import Projects from '../components/projects/Projects';
import AddProjectModal from '../components/projects/AddProjectModal';

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Clients />
      <hr />
      <Projects />
    </>
  );
}
