export type TagState = "ACTIVE" | "INACTIVE";

export interface Tag {
  tagId: number;
  content: string;
  color: string;
  variant: string;
  state: TagState;
}

export interface TagCategory {
  tagCategoryId: number;
  name: string;
  state: TagState;
  tags: Tag[];
}

export const categorySource: Record<string, string[]> = {
  AI: [
    "LLM",
    "ChatGPT",
    "StableDiffusion",
    "Midjourney",
    "GenerativeAI",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "MachineLearning",
    "DeepLearning",
    "Python",
    "데이터분석",
    "DataScience",
    "NLP",
    "R",
    "MLOps",
    "AI윤리",
    "컴퓨터비전",
    "자율주행",
  ],
  개발: [
    "React",
    "VueJS",
    "Angular",
    "NextJS",
    "TypeScript",
    "JavaScript",
    "NodeJS",
    "Spring",
    "Django",
    "GoLang",
    "Java",
    "Python",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Cloud",
    "SQL",
    "NoSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Git",
    "Testing",
    "Security",
    "Microservice",
    "MSA",
  ],
  디자인: [
    "Figma",
    "Sketch",
    "AdobeXD",
    "Illustrator",
    "Photoshop",
    "UI/UX",
    "ProductDesign",
    "그래픽디자인",
    "브랜딩",
    "InteractionDesign",
    "디자인시스템",
    "DesignThinking",
    "프로토타이핑",
    "와이어프레임",
    "GUI",
    "HTML/CSS",
    "반응형웹",
    "접근성",
    "모션그래픽",
    "웹표준",
    "디자인툴팁",
    "포트폴리오",
    "타이포그래피",
    "색채론",
    "사용성테스트",
  ],
  서비스: [
    "프로덕트매니저",
    "PM",
    "서비스기획",
    "MVP",
    "비즈니스모델",
    "Agile",
    "Scrum",
    "Jira",
    "노션",
    "팀워크",
    "그로스해킹",
    "SEO",
    "A/B테스트",
    "게이터기반의사결정",
    "CRM",
    "스타트업",
    "창업",
    "IT법률",
    "특허",
    "투자",
    "채용/면접",
    "개발문화",
    "커리어",
    "회고록",
    "외주/프리랜서",
  ],
};

export function getTagCategories(): TagCategory[] {
  return Object.entries(categorySource).map(([name, tags], categoryIndex) => ({
    tagCategoryId: categoryIndex + 1,
    name,
    state: "ACTIVE" as const,
    tags: tags.map((content, tagIndex) => ({
      tagId: categoryIndex * 1000 + tagIndex + 1,
      content,
      color: "indigo-500",
      variant: "solid",
      state: "ACTIVE" as const,
    })),
  }));
}

export function getContentToIdMap(): Map<string, number> {
  const map = new Map<string, number>();
  getTagCategories().forEach((cat) => {
    cat.tags.forEach((t) => map.set(t.content, t.tagId));
  });
  return map;
}
