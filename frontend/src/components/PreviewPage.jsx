import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';

const DataGrid = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newRecord, setNewRecord] = useState({ name: '', email: '', role: '' });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = sortColumn
    ? [...filteredData].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredData;

  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, updatedItem) => {
    setData(data.map((item) => (item.id === id ? updatedItem : item)));
    setEditingId(null);
  };

  const handleAddNew = () => {
    const newId = Math.max(...data.map((item) => item.id)) + 1;
    setData([...data, { id: newId, ...newRecord }]);
    setNewRecord({ name: '', email: '', role: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Data Grid</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-2 py-1"
            value={newRecord.name}
            onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            className="border rounded px-2 py-1"
            value={newRecord.email}
            onChange={(e) => setNewRecord({ ...newRecord, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="border rounded px-2 py-1"
            value={newRecord.role}
            onChange={(e) => setNewRecord({ ...newRecord, role: e.target.value })}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleAddNew}
          >
            Add New
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <button onClick={() => handleSort('name')} className="flex items-center">
                Name
                <FontAwesomeIcon icon={faSort} className="ml-1" />
              </button>
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <button onClick={() => handleSort('email')} className="flex items-center">
                Email
                <FontAwesomeIcon icon={faSort} className="ml-1" />
              </button>
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <button onClick={() => handleSort('role')} className="flex items-center">
                Role
                <FontAwesomeIcon icon={faSort} className="ml-1" />
              </button>
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleSave(item.id, { ...item, name: e.target.value })}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.email}
                    onChange={(e) => handleSave(item.id, { ...item, email: e.target.value })}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => handleSave(item.id, { ...item, role: e.target.value })}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.role
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <button
                    className="text-green-600 hover:text-green-900"
                    onClick={() => handleSave(item.id, item)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="text-blue-600 hover:text-blue-900 mr-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;