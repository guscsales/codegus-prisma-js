const { PrismaClient } = require('@prisma/client');

(async () => {
  const prisma = new PrismaClient();

  const task = await prisma.task.create({
    data: {
      title: 'Task 2',
      description: 'This is my second task',
      dueDate: new Date('2024-12-30'),
    }
  });

  console.log(task);
})()