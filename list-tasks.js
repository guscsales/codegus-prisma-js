const { PrismaClient } = require('@prisma/client');

(async () => {
  const prisma = new PrismaClient();

  const tasks = await prisma.task.findMany({
    // where: {
    //   dueDate: {
    //     not: null
    //   }
    // },
    orderBy: {
      dueDate: 'asc'
    },
    select: {
      id: true,
      title: true,
      taskMilestones: {
        select: {
          description: true,
        }
      }
    }
  });

  console.log(JSON.stringify(tasks, null, 2));
})()