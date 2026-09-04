import { z } from "zod";

export const DifficultySchema = z.enum(["beginner", "intermediate", "advanced"]);
export type Difficulty = z.infer<typeof DifficultySchema>;

export const LessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  content: z.string(),
  codeExample: z.string().optional(),
  language: z.string().default("javascript"),
  timeComplexity: z.string().optional(),
  spaceComplexity: z.string().optional(),
  keyInsights: z.array(z.string()).default([]),
});
export type Lesson = z.infer<typeof LessonSchema>;

export const TopicSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  difficulty: DifficultySchema,
  color: z.string(),
  lessons: z.array(LessonSchema),
  totalProblems: z.number().default(0),
});
export type Topic = z.infer<typeof TopicSchema>;

export const LessonProgressSchema = z.object({
  completed: z.boolean().default(false),
  bookmarked: z.boolean().default(false),
  lastAccessed: z.string().datetime().optional(),
});
export type LessonProgress = z.infer<typeof LessonProgressSchema>;

export const TopicProgressSchema = z.object({
  completedLessons: z.array(z.string()).default([]),
  bookmarkedLessons: z.array(z.string()).default([]),
  startedAt: z.string().datetime().optional(),
  lastAccessedAt: z.string().datetime().optional(),
});
export type TopicProgress = z.infer<typeof TopicProgressSchema>;

export const UserProgressSchema = z.object({
  topics: z.record(z.string(), TopicProgressSchema).default({}),
  totalLessonsCompleted: z.number().default(0),
  streakDays: z.number().default(0),
  lastActiveDate: z.string().datetime().optional(),
});
export type UserProgress = z.infer<typeof UserProgressSchema>;
