"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProgress, TopicProgress } from "@/types";

interface ProgressState {
  progress: UserProgress;
  completeLesson: (topicSlug: string, lessonId: string) => void;
  uncompleteLesson: (topicSlug: string, lessonId: string) => void;
  toggleBookmark: (topicSlug: string, lessonId: string) => void;
  getTopicProgress: (topicSlug: string) => TopicProgress;
  getTopicCompletionPercentage: (
    topicSlug: string,
    totalLessons: number
  ) => number;
  getTotalProgress: (totalLessons: number) => number;
}

const defaultProgress: UserProgress = {
  topics: {},
  totalLessonsCompleted: 0,
  streakDays: 0,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: defaultProgress,

      completeLesson: (topicSlug: string, lessonId: string) => {
        set((state) => {
          const topicProgress = state.progress.topics[topicSlug] || {
            completedLessons: [],
            bookmarkedLessons: [],
          };

          if (topicProgress.completedLessons.includes(lessonId)) {
            return state;
          }

          const updatedTopicProgress: TopicProgress = {
            ...topicProgress,
            completedLessons: [...topicProgress.completedLessons, lessonId],
            lastAccessedAt: new Date().toISOString(),
            startedAt: topicProgress.startedAt || new Date().toISOString(),
          };

          return {
            progress: {
              ...state.progress,
              topics: {
                ...state.progress.topics,
                [topicSlug]: updatedTopicProgress,
              },
              totalLessonsCompleted:
                state.progress.totalLessonsCompleted + 1,
              lastActiveDate: new Date().toISOString(),
            },
          };
        });
      },

      uncompleteLesson: (topicSlug: string, lessonId: string) => {
        set((state) => {
          const topicProgress = state.progress.topics[topicSlug];
          if (!topicProgress) return state;

          return {
            progress: {
              ...state.progress,
              topics: {
                ...state.progress.topics,
                [topicSlug]: {
                  ...topicProgress,
                  completedLessons: topicProgress.completedLessons.filter(
                    (id) => id !== lessonId
                  ),
                  lastAccessedAt: new Date().toISOString(),
                },
              },
              totalLessonsCompleted: Math.max(
                0,
                state.progress.totalLessonsCompleted - 1
              ),
            },
          };
        });
      },

      toggleBookmark: (topicSlug: string, lessonId: string) => {
        set((state) => {
          const topicProgress = state.progress.topics[topicSlug] || {
            completedLessons: [],
            bookmarkedLessons: [],
          };

          const isBookmarked =
            topicProgress.bookmarkedLessons.includes(lessonId);

          const updatedBookmarkedLessons = isBookmarked
            ? topicProgress.bookmarkedLessons.filter((id) => id !== lessonId)
            : [...topicProgress.bookmarkedLessons, lessonId];

          return {
            progress: {
              ...state.progress,
              topics: {
                ...state.progress.topics,
                [topicSlug]: {
                  ...topicProgress,
                  bookmarkedLessons: updatedBookmarkedLessons,
                },
              },
            },
          };
        });
      },

      getTopicProgress: (topicSlug: string) => {
        const state = get();
        return (
          state.progress.topics[topicSlug] || {
            completedLessons: [],
            bookmarkedLessons: [],
          }
        );
      },

      getTopicCompletionPercentage: (
        topicSlug: string,
        totalLessons: number
      ) => {
        const state = get();
        const topicProgress = state.progress.topics[topicSlug];
        if (!topicProgress || totalLessons === 0) return 0;
        return Math.round(
          (topicProgress.completedLessons.length / totalLessons) * 100
        );
      },

      getTotalProgress: (totalLessons: number) => {
        const state = get();
        if (totalLessons === 0) return 0;
        return Math.round(
          (state.progress.totalLessonsCompleted / totalLessons) * 100
        );
      },
    }),
    {
      name: "dsa-mastery-progress",
    }
  )
);
