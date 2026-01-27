import { Request, Response, NextFunction } from 'express';

export default async function per(
  req: Request,
  res: Response,
  next: NextFunction,
  r: any
) {
  try {
    const call = req.body.call;
    if (!call || typeof r[call] !== 'function') {
      return res.status(400).json({ error: 'Call inválida' });
    }

    const result = await r[call](req);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao processar a requisição' });
  }
}
