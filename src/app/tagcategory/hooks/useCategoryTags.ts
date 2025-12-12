import { useMemo } from "react";

type CategoryKey = "AI" | "개발" | "디자인" | "서비스";

interface TagGroup {
  title: string;
  tags: string[];
}

interface CategoryData {
  groups: TagGroup[];
}

const categories: Record<CategoryKey, CategoryData> = {
  AI: {
    groups: [
      {
        title: "AI 전체",
        tags: [
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
      },
    ],
  },

  개발: {
    groups: [
      {
        title: "개발 전체",
        tags: [
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
      },
    ],
  },

  디자인: {
    groups: [
      {
        title: "디자인 전체",
        tags: [
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
      },
    ],
  },

  서비스: {
    groups: [
      {
        title: "서비스 전체",
        tags: [
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
      },
    ],
  },
};
export function useCategoryTags(active: string) {
  const result = useMemo(() => {
    if (active in categories) {
      return categories[active as CategoryKey];
    }
    return { groups: [] };
  }, [active]);

  return result;
}
