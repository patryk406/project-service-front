import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';

// import { DELETE_CLIENT } from '../../composable/mutations/clientMutations';
import { GET_PROJECT } from '../../queries/clientQueries';

export default function ProjectCard({ project }) {
  // const [deleteClient] = useMutation(DELETE_CLIENT, {
  //     variables: { id: project.id },
  //  can update list by refetching
  // refetchQueries: [{ query: GET_CLIENTS }],

  //  update cache
  // update(cache, { data: { deleteClient } }) {
  //     const { clients } = cache.readQuery({ query: GET_CLIENTS });
  //     cache.writeQuery({
  //         query: GET_CLIENTS,
  //         data: { clients: clients.filter(project => project.id !== deleteClient.id) },
  //     });
  // },
  // });

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title mb-0">{project.name}</h5>
            <a href={`/projects/${project.id}`} className="btn btn-light">
              View
            </a>
          </div>
          <p className="small text-center">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
