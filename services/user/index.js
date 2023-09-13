import request from '@/services';

const loginUser = async (user) => {
  const { data, status } = await request(
    'POST',
    `${process.env.NEXT_PUBLIC_URL}users/login?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    '',
    user,
  );

  return { data, status };
};

const logoutUser = async (token) => {
  const { data, status } = await request(
    'POST',
    `${process.env.NEXT_PUBLIC_URL}users/logout?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    token,
    '',
  );

  return { data, status };
};

const registerUser = async (user) => {
  const { data, status } = await request(
    'POST',
    `${process.env.NEXT_PUBLIC_URL}users/register?apikey=${process.env.NEXT_PUBLIC_APKEY}`,
    '',
    user,
  );

  return { data, status };
};

export { loginUser, logoutUser, registerUser };
