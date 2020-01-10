import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    quote: 'Write tests, not too many, mostly integration',
    author: 'Guillermo Rauch',
  });
};
