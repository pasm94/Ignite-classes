import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Paulo' },
    { id: 2, name: 'Albert' },
    { id: 3, name: 'SM' },
  ];

  return response.json(users);
};
