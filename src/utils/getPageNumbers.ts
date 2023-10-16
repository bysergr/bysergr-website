import { SITE } from "@/config";

export const getPageNumbersPosts = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(SITE.postsPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export const getPageNumbersProjects = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(SITE.projectsPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};
