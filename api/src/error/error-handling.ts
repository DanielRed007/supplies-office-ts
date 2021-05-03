import { HttpException } from '@nestjs/common';

export const sendErrorStatus = (message: string, status: number) => {
  // TODO: find a way to implement nest httpstatus enum codes

  throw new HttpException(
    {
      status: status,
      error: message,
    },
    status,
  );
};
