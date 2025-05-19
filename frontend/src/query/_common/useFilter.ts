import { PROBLEM_STATUSES } from '@/config/options';
import { useState } from 'react';

export interface FilterQueryParams {
  status: (typeof PROBLEM_STATUSES)[number];
  tags: Set<string>;
  categories: Set<string>;
}

function useFilter() {
  const [status, setStatus] = useState<(typeof PROBLEM_STATUSES)[number]>('all');
  const [tags, setSelectedTags] = useState<Set<string>>(new Set());
  const [categories, setSelectedCategories] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const setSingleCategory = (category: string) => {
    setSelectedCategories(new Set([category]));
  };

  return { status, setStatus, tags, categories, toggleTag, toggleCategory, setSingleCategory };
}

export default useFilter;
