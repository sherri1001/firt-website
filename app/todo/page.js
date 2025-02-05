'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const PRIORITY_COLORS = {
  緊急: 'text-red-600 bg-red-50',
  重要: 'text-purple-600 bg-purple-50',
  普通: 'text-blue-600 bg-blue-50'
};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('普通');
  const [isClient, setIsClient] = useState(false);

  // 設定 isClient 狀態
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 載入儲存的代辦事項
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedTodos = window.localStorage.getItem('my-todos');
        if (savedTodos) {
          // 處理舊資料，為沒有優先級的項目添加預設值
          const parsedTodos = JSON.parse(savedTodos).map(todo => ({
            ...todo,
            priority: todo.priority || '普通'
          }));
          setTodos(parsedTodos);
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  // 當代辦事項變更時儲存到 localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && isClient) {
      try {
        window.localStorage.setItem('my-todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    }
  }, [todos, isClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
        priority: priority
      }
    ]);
    setNewTodo('');
    setPriority('普通'); // 重置為預設值
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-12">代辦事項</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="輸入新的代辦事項..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="緊急">緊急</option>
            <option value="重要">重要</option>
            <option value="普通">普通</option>
          </select>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
            新增
          </button>
        </div>
      </form>

      {/* Todo List */}
      <div className="space-y-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">目前沒有代辦事項</p>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                />
                <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'} flex-1`}>
                  {todo.text}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${PRIORITY_COLORS[todo.priority]}`}>
                  {todo.priority}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faTrashCan} className="w-4 h-4" />
                  刪除
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 