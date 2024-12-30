-- CreateTable
CREATE TABLE "TaskMilestone" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "TaskMilestone_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TaskMilestone" ADD CONSTRAINT "TaskMilestone_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
