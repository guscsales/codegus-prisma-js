const { PrismaClient } = require('@prisma/client');

(async () => {
  const prisma = new PrismaClient();

  const task = await prisma.task.findUnique({
    where: {
      id: '453b5079-b73c-4985-aae8-791ee632e3c3'
    }
  })

  const taskMilestone = await prisma.taskMilestone.create({
    data: {
      description: 'This is my first task milestone',
      taskId: task.id
    }
  });

  console.log(taskMilestone);
})()