import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/list_projects/');
      setProjects(response.data.projects);
      console.log(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

 
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Project Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            URL
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {projects.map((project) => (
          <tr key={project.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{project.name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{project.url}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListProjects;
