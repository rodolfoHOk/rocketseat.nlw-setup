import { FastifyInstance } from 'fastify';
import WebPush from 'web-push';
import { z } from 'zod';

// console.log(WebPush.generateVAPIDKeys());

export async function notificationRoutes(app: FastifyInstance) {
  const publicKey = process.env.NOTIFICATION_PUBLIC_KEY;
  const privateKey = process.env.NOTIFICATION_PRIVATE_KEY;

  if (!publicKey || !privateKey) {
    return new Error(
      `Não foi possível acessar uma ou mais das variáveis de ambiente referentes 
      as chaves do Web Push`
    );
  }

  WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey);

  app.get('/push/public-key', () => {
    return {
      publicKey,
    };
  });

  app.post('/push/register', (request, reply) => {
    console.log(request.body);
    // persistir no banco de dados = ex: prisma UserNotificationSubscriptions

    return reply.status(201).send();
  });

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, '!!!Hello do Back-End!!!');
    }, 5000);

    return reply.status(201).send();
  });
}
