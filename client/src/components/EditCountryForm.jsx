import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_COUNTRY } from "../queries/countryQueries";
import { UPDATE_COUNTRY } from "../mutations/countryMutations";

export default function EditProjectForm({ country }) {
  const [name, setName] = useState(country.name);
  const [description, setDescription] = useState(country.description);

  const [updateProject] = useMutation(UPDATE_COUNTRY, {
    variables: { id: country.id, name, description },
    refetchQueries: [{ query: GET_COUNTRY, variables: { id: country.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description ) {
      return alert("Please fill out all fields");
    }

    updateProject(name, description);
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
