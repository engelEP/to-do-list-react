import request from '@/services';

const getTodo = async (userId, token) => {
  const { data, status } = await request(
    'GET',
    `${process.env.NEXT_PUBLIC_URL}users/${userId}/todos?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    token,
    '',
  );

  return { data, status };
};

const createTodo = async (userId, todo, token) => {
  const { data, status } = await request(
    'POST',
    `${process.env.NEXT_PUBLIC_URL}users/${userId}/todos?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    token,
    todo,
  );

  return { data, status };
};

const deleteTodo = async (todoId, userId, token) => {
  const { data, status } = await request(
    'DELETE',
    `${process.env.NEXT_PUBLIC_URL}users/${userId}/todos/${todoId}?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    token,
    '',
  );

  return { data, status };
};

const updateTodo = async (todoId, userId, todo, token) => {
  const { data, status } = await request(
    'PUT',
    `${process.env.NEXT_PUBLIC_URL}users/${userId}/todos/${todoId}?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    token,
    todo,
  );

  return { data, status };
};

export { getTodo, createTodo, deleteTodo, updateTodo };
