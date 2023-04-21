import { Request, Response } from 'express';

const getNotices = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: 'You received 14 new weekly newspapers',
        datetime: '2017-08-09',
        type: 'notification',
      },
      {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: 'Your recommended Qu Nini has passed the third round of interviews',
        datetime: '2017-08-08',
        type: 'notification',
      },
      {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: 'This template can distinguish multiple notification types',
        datetime: '2017-08-07',
        read: true,
        type: 'notification',
      },
      {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: 'The icon on the left is used to distinguish different types',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000005',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title:
          'The content should not exceed two lines, it will be automatically truncated when it exceeds',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'Lili Qu commented on you',
        description: 'Description information description information description information',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'Zhu Pianyou replied to you',
        description:
          'This template is used to remind who has interacted with you, and put the avatar of "who" on the left',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'Title',
        description:
          'This template is used to remind who has interacted with you, and put the avatar of "who" on the left',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000009',
        title: 'Task name',
        description: 'The task needs to be started before 2017-01-12 20:00',
        extra: 'Not started',
        status: 'todo',
        type: 'event',
      },
      {
        id: '000000010',
        title: 'Third Party Emergency Code Change',
        description:
          'Kuanlin was submitted on 2017-01-06, the code change task needs to be completed before 2017-01-07',
        extra: 'expiring soon',
        status: 'urgent',
        type: 'event',
      },
      {
        id: '000000011',
        title: 'Information Security Exam',
        description: 'Assign Zhuer to complete the update and release before 2017-01-09',
        extra: 'elapsed 8 days',
        status: 'doing',
        type: 'event',
      },
      {
        id: '000000012',
        title: 'ABCD Version Release',
        description:
          'Kuanlin was submitted on 2017-01-06, the code change task needs to be completed before 2017-01-07',
        extra: 'in progress',
        status: 'processing',
        type: 'event',
      },
    ],
  });
};

export default {
  'GET /api/notices': getNotices,
};
