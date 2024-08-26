import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Tester' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Developer' },
];

const DataGrid = () => {
  const [data, setData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newRecord, setNewRecord] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    setData(mockData);
  }, []);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
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

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Grid</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
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
            <th
              className="px-6 py-3 border-b cursor-pointer"
              onClick={() => handleSort('name')}
            >
              Name
              {sortColumn === 'name' && (
                <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
            <th
              className="px-6 py-3 border-b cursor-pointer"
              onClick={() => handleSort('email')}
            >
              Email
              {sortColumn === 'email' && (
                <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
            <th
              className="px-6 py-3 border-b cursor-pointer"
              onClick={() => handleSort('role')}
            >
              Role
              {sortColumn === 'role' && (
                <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
            <th className="px-6 py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 border-b">
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
              <td className="px-6 py-4 border-b">
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
              <td className="px-6 py-4 border-b">
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
              <td className="px-6 py-4 border-b">
                {editingId === item.id ? (
                  <button
                    className="text-green-600 hover:text-green-800 mr-2"
                    onClick={() => handleSave(item.id, item)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-blue-600 hover:text-blue-800 mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                )}
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(item.id)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <div>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedData.length)} of{' '}
          {sortedData.length} entries
        </div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 border rounded-md"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          {Array.from({ length: Math.ceil(sortedData.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded-md ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 border rounded-md"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;