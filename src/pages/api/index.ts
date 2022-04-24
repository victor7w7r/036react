import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    advice: string,
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({
        advice: 'Next.js API Works'
    });
}