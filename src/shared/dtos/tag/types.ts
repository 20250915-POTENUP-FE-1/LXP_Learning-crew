export type TagState = "ACTIVE" | "INACTIVE";
export type TagCategoryState = "ACTIVE" | "INACTIVE";

export type TagResponse = {
  tagId: number;
  content: string;
  color: string;
  variant: string;
  state: TagState;
};

export type TagCategoryResponse = {
  tagCategoryId: number;
  name: string;
  state: TagCategoryState;
  tags: TagResponse[];
};

export interface ResponseGetAllCategories {
  content: TagCategoryResponse[];
}
