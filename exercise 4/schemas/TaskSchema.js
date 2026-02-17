import {z} from "zod";

export const CreateTaskSchema = z.object({
    title: z.string().min(1, 'title is required'),
    description: z.string().min(1, 'description is required').optional(),
    status: z.enum(["pending", "in progress", "completed"]).default("pending").optional(),
    dueDate: z.date().optional(),
})