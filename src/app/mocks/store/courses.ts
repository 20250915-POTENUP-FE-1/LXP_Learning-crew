import { BadgeColor, BadgeVariant } from "@/shared/components/Badge/Badge.type";
import type { CourseDto } from "@/shared/dtos";

export type CourseTag = {
  content: string;
  color?: BadgeColor;
  variant?: BadgeVariant;
};

export type CourseLecture = {
  index?: number;
  lectureTitle: string;
  duration: number;
};

export type CourseSection = {
  index?: number;
  sectionTitle: string;
  lectures: CourseLecture[];
};

export type StoreCourse = {
  instructorUserId: any;
  courseId: string;
  title: string;
  description: string;
  tags?: CourseTag[];
  thumbnailImageUrl: string | null;
  sections: CourseSection[];
};

export const COURSES_STORE: CourseDto[] = [
  {
    courseId: "course-1",
    title: "리액트 완전 정복",
    description: "리액트 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "JavaScript", color: "orange" },
      { content: "React", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "리액트 기초",
        lectures: [
          {
            index: 0,
            lectureTitle: "리액트 소개",
            duration: 1012,
          },
          {
            index: 1,
            lectureTitle: "JSX 문법",
            duration: 11555,
          },
          {
            index: 2,
            lectureTitle: "컴포넌트와 Props",
            duration: 9500,
          },
          {
            index: 3,
            lectureTitle: "상태 관리",
            duration: 8500,
          },
          {
            index: 4,
            lectureTitle: "이벤트 처리",
            duration: 12000,
          },
        ],
      },
      {
        index: 1,
        sectionTitle: "리액트 심화",
        lectures: [
          {
            index: 0,
            lectureTitle: "훅(Hooks)",
            duration: 7022,
          },
          {
            index: 1,
            lectureTitle: "컨텍스트 API",
            duration: 11555,
          },
          {
            index: 2,
            lectureTitle: "고급 패턴",
            duration: 9500,
          },
        ],
      },
      {
        index: 2,
        sectionTitle: "리액트 라우터",
        lectures: [
          {
            index: 0,
            lectureTitle: "리액트 라우터 소개",
            duration: 6022,
          },
          {
            index: 1,
            lectureTitle: "동적 라우팅",
            duration: 11555,
          },
        ],
      },
      {
        index: 3,
        sectionTitle: "상태 관리 라이브러리",
        lectures: [
          {
            index: 0,
            lectureTitle: "리덕스 소개",
            duration: 8022,
          },
          {
            index: 1,
            lectureTitle: "리덕스 툴킷",
            duration: 11555,
          },
          {
            index: 2,
            lectureTitle: "MobX 소개",
            duration: 9500,
          },
          {
            index: 3,
            lectureTitle: "Recoil 소개",
            duration: 8500,
          },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-2",
    title: "타입스크립트 완전 정복",
    description: "타입스크립트 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "JavaScript", color: "orange" },
      { content: "TypeScript", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "타입스크립트 기초",
        lectures: [
          {
            index: 0,
            lectureTitle: "타입스크립트 소개",
            duration: 2022,
          },
          {
            index: 1,
            lectureTitle: "기본 타입",
            duration: 12555,
          },
          {
            index: 2,
            lectureTitle: "인터페이스",
            duration: 9500,
          },
        ],
      },
      {
        index: 1,
        sectionTitle: "타입스크립트 심화",
        lectures: [
          {
            index: 0,
            lectureTitle: "제네릭",
            duration: 7022,
          },
          {
            index: 1,
            lectureTitle: "데코레이터",
            duration: 11555,
          },
          {
            index: 2,
            lectureTitle: "모듈",
            duration: 9500,
          },
          {
            index: 3,
            lectureTitle: "네임스페이스",
            duration: 8500,
          },
          {
            index: 4,
            lectureTitle: "유틸리티 타입",
            duration: 12000,
          },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-3",
    title: "노드JS 완전 정복",
    description: "노드JS 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "JavaScript", color: "orange" },
      { content: "NodeJS", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "노드JS 기초",
        lectures: [
          {
            index: 0,
            lectureTitle: "노드JS 소개",
            duration: 3033,
          },
          {
            index: 1,
            lectureTitle: "비동기 프로그래밍",
            duration: 13555,
          },
        ],
      },
      {
        index: 1,
        sectionTitle: "노드JS 심화",
        lectures: [
          {
            index: 0,
            lectureTitle: "파일 시스템",
            duration: 8033,
          },
          {
            index: 1,
            lectureTitle: "네트워킹",
            duration: 11555,
          },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-4",
    title: "데이터베이스 완전 정복",
    description: "데이터베이스 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "Database", color: "purple" },
      { content: "SQL", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "데이터베이스 기초",
        lectures: [
          {
            index: 0,
            lectureTitle: "데이터베이스 소개",
            duration: 4044,
          },
          {
            index: 1,
            lectureTitle: "SQL 기본 문법",
            duration: 14555,
          },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-5",
    title: "파이썬 완전 정복",
    description: "파이썬 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "Python", color: "orange" },
      { content: "Programming", color: "purple" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "파이썬 기초",
        lectures: [
          {
            index: 0,
            lectureTitle: "파이썬 소개",
            duration: 5055,
          },
          {
            index: 1,
            lectureTitle: "기본 문법",
            duration: 15555,
          },
        ],
      },
      {
        index: 1,
        sectionTitle: "파이썬 심화",
        lectures: [
          {
            index: 0,
            lectureTitle: "객체 지향 프로그래밍",
            duration: 9055,
          },
          {
            index: 1,
            lectureTitle: "모듈과 패키지",
            duration: 11555,
          },
          {
            index: 2,
            lectureTitle: "예외 처리",
            duration: 9500,
          },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-6",
    title: "알고리즘 완전 정복",
    description: "알고리즘 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Algorithm", color: "purple" },
      { content: "Data Structure", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "기초 알고리즘",
        lectures: [
          { index: 0, lectureTitle: "시간 복잡도", duration: 642 },
          { index: 1, lectureTitle: "공간 복잡도", duration: 711 },
          { index: 2, lectureTitle: "빅오 표기", duration: 845 },
          { index: 3, lectureTitle: "분석 예제", duration: 903 },
        ],
      },
      {
        index: 1,
        sectionTitle: "정렬",
        lectures: [
          { index: 0, lectureTitle: "버블 정렬", duration: 754 },
          { index: 1, lectureTitle: "퀵 정렬", duration: 1090 },
          { index: 2, lectureTitle: "병합 정렬", duration: 988 },
        ],
      },
      {
        index: 2,
        sectionTitle: "탐색",
        lectures: [
          { index: 0, lectureTitle: "이진 탐색", duration: 725 },
          { index: 1, lectureTitle: "해시 탐색", duration: 830 },
          { index: 2, lectureTitle: "트리 탐색", duration: 1164 },
          { index: 3, lectureTitle: "그래프 탐색", duration: 1122 },
        ],
      },
      {
        index: 3,
        sectionTitle: "그래프",
        lectures: [
          { index: 0, lectureTitle: "그래프 표현", duration: 780 },
          { index: 1, lectureTitle: "DFS/BFS", duration: 1075 },
          { index: 2, lectureTitle: "최단 경로", duration: 1188 },
        ],
      },
      {
        index: 4,
        sectionTitle: "고급 알고리즘",
        lectures: [
          { index: 0, lectureTitle: "동적 계획법", duration: 944 },
          { index: 1, lectureTitle: "분할 정복", duration: 1032 },
          { index: 2, lectureTitle: "그리디", duration: 826 },
          { index: 3, lectureTitle: "백트래킹", duration: 910 },
        ],
      },
    ],
  },
  {
    courseId: "course-7",
    title: "컴퓨터 구조 완전 정복",
    description: "컴퓨터 구조 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Computer Architecture", color: "green" },
      { content: "Hardware", color: "orange" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "기초 개념",
        lectures: [
          { index: 0, lectureTitle: "컴퓨터 구성", duration: 780 },
          { index: 1, lectureTitle: "명령어 사이클", duration: 955 },
          { index: 2, lectureTitle: "레지스터", duration: 640 },
        ],
      },
      {
        index: 1,
        sectionTitle: "연산",
        lectures: [
          { index: 0, lectureTitle: "ALU와 제어장치", duration: 900 },
          { index: 1, lectureTitle: "산술 연산", duration: 840 },
          { index: 2, lectureTitle: "논리 연산", duration: 720 },
          { index: 3, lectureTitle: "부동소수점", duration: 1185 },
        ],
      },
      {
        index: 2,
        sectionTitle: "메모리",
        lectures: [
          { index: 0, lectureTitle: "계층 구조", duration: 1035 },
          { index: 1, lectureTitle: "캐시 메모리", duration: 960 },
          { index: 2, lectureTitle: "가상 메모리", duration: 1102 },
        ],
      },
      {
        index: 3,
        sectionTitle: "입출력",
        lectures: [
          { index: 0, lectureTitle: "I/O 인터럽트", duration: 785 },
          { index: 1, lectureTitle: "DMA", duration: 680 },
          { index: 2, lectureTitle: "버스 구조", duration: 820 },
          { index: 3, lectureTitle: "장치 관리", duration: 730 },
        ],
      },
      {
        index: 4,
        sectionTitle: "병렬성",
        lectures: [
          { index: 0, lectureTitle: "파이프라이닝", duration: 870 },
          { index: 1, lectureTitle: "슈퍼스칼라", duration: 1120 },
          { index: 2, lectureTitle: "멀티코어", duration: 980 },
        ],
      },
    ],
  },
  {
    courseId: "course-8",
    title: "운영체제 완전 정복",
    description: "운영체제 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Operating System", color: "blue" },
      { content: "System", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "OS 개요",
        lectures: [
          { index: 0, lectureTitle: "역할과 기능", duration: 720 },
          { index: 1, lectureTitle: "커널 구조", duration: 980 },
          { index: 2, lectureTitle: "시스템 콜", duration: 860 },
        ],
      },
      {
        index: 1,
        sectionTitle: "프로세스",
        lectures: [
          { index: 0, lectureTitle: "프로세스 관리", duration: 930 },
          { index: 1, lectureTitle: "스레드", duration: 825 },
          { index: 2, lectureTitle: "컨텍스트 스위칭", duration: 1005 },
        ],
      },
      {
        index: 2,
        sectionTitle: "CPU 스케줄링",
        lectures: [
          { index: 0, lectureTitle: "선점/비선점", duration: 650 },
          { index: 1, lectureTitle: "스케줄링 알고리즘", duration: 1110 },
          { index: 2, lectureTitle: "멀티레벨 큐", duration: 890 },
          { index: 3, lectureTitle: "실시간 스케줄링", duration: 1080 },
        ],
      },
      {
        index: 3,
        sectionTitle: "메모리 관리",
        lectures: [
          { index: 0, lectureTitle: "페이징", duration: 915 },
          { index: 1, lectureTitle: "세그먼테이션", duration: 760 },
          { index: 2, lectureTitle: "페이지 교체", duration: 1040 },
        ],
      },
      {
        index: 4,
        sectionTitle: "파일 시스템",
        lectures: [
          { index: 0, lectureTitle: "파일 관리", duration: 840 },
          { index: 1, lectureTitle: "저널링", duration: 975 },
          { index: 2, lectureTitle: "디스크 스케줄링", duration: 1105 },
        ],
      },
      {
        index: 5,
        sectionTitle: "동기화와 병행성",
        lectures: [
          { index: 0, lectureTitle: "임계영역", duration: 780 },
          { index: 1, lectureTitle: "뮤텍스와 세마포어", duration: 1020 },
          { index: 2, lectureTitle: "교착상태", duration: 1150 },
          { index: 3, lectureTitle: "모니터", duration: 955 },
        ],
      },
    ],
  },
  {
    courseId: "course-9",
    title: "데이터 사이언스 완전 정복",
    description: "데이터 사이언스 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Data Science", color: "orange" },
      { content: "Machine Learning", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "데이터 사이언스 소개",
        lectures: [
          { index: 0, lectureTitle: "워크플로우", duration: 720 },
          { index: 1, lectureTitle: "데이터 파이프라인", duration: 1120 },
          { index: 2, lectureTitle: "환경 설정", duration: 655 },
        ],
      },
      {
        index: 1,
        sectionTitle: "데이터 전처리",
        lectures: [
          { index: 0, lectureTitle: "결측치 처리", duration: 875 },
          { index: 1, lectureTitle: "이상치 처리", duration: 990 },
          { index: 2, lectureTitle: "정규화", duration: 880 },
          { index: 3, lectureTitle: "인코딩", duration: 760 },
        ],
      },
      {
        index: 2,
        sectionTitle: "통계 기초",
        lectures: [
          { index: 0, lectureTitle: "기술 통계", duration: 815 },
          { index: 1, lectureTitle: "확률 분포", duration: 1085 },
          { index: 2, lectureTitle: "추론 통계", duration: 950 },
        ],
      },
      {
        index: 3,
        sectionTitle: "머신러닝",
        lectures: [
          { index: 0, lectureTitle: "지도학습", duration: 1040 },
          { index: 1, lectureTitle: "비지도학습", duration: 990 },
          { index: 2, lectureTitle: "모델 평가", duration: 820 },
        ],
      },
      {
        index: 4,
        sectionTitle: "시각화",
        lectures: [
          { index: 0, lectureTitle: "기초 차트", duration: 730 },
          { index: 1, lectureTitle: "대시보드", duration: 1180 },
          { index: 2, lectureTitle: "인터랙티브", duration: 905 },
        ],
      },
    ],
  },
  {
    courseId: "course-10",
    title: "DevOps 완전 정복",
    description: "DevOps 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "DevOps", color: "green" },
      { content: "CI/CD", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "DevOps 개요",
        lectures: [
          { index: 0, lectureTitle: "문화와 원칙", duration: 780 },
          { index: 1, lectureTitle: "툴체인", duration: 840 },
          { index: 2, lectureTitle: "파이프라인", duration: 930 },
        ],
      },
      {
        index: 1,
        sectionTitle: "버전 관리",
        lectures: [
          { index: 0, lectureTitle: "Git 기본", duration: 720 },
          { index: 1, lectureTitle: "브랜칭 전략", duration: 990 },
          { index: 2, lectureTitle: "코드 리뷰", duration: 810 },
        ],
      },
      {
        index: 2,
        sectionTitle: "CI",
        lectures: [
          { index: 0, lectureTitle: "빌드 자동화", duration: 865 },
          { index: 1, lectureTitle: "테스트 자동화", duration: 1105 },
          { index: 2, lectureTitle: "품질 게이트", duration: 760 },
          { index: 3, lectureTitle: "아티팩트 관리", duration: 955 },
        ],
      },
      {
        index: 3,
        sectionTitle: "CD",
        lectures: [
          { index: 0, lectureTitle: "배포 전략", duration: 1030 },
          { index: 1, lectureTitle: "블루/그린", duration: 820 },
          { index: 2, lectureTitle: "카나리", duration: 910 },
        ],
      },
      {
        index: 4,
        sectionTitle: "모니터링",
        lectures: [
          { index: 0, lectureTitle: "로깅", duration: 780 },
          { index: 1, lectureTitle: "메트릭", duration: 830 },
          { index: 2, lectureTitle: "알림", duration: 740 },
        ],
      },
    ],
  },
  {
    courseId: "course-11",
    title: "클라우드 완전 정복",
    description: "클라우드 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Cloud", color: "blue" },
      { content: "Infrastructure", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "클라우드 기초",
        lectures: [
          { index: 0, lectureTitle: "IaaS/PaaS/SaaS", duration: 890 },
          { index: 1, lectureTitle: "리전과 AZ", duration: 700 },
          { index: 2, lectureTitle: "과금 모델", duration: 760 },
        ],
      },
      {
        index: 1,
        sectionTitle: "컴퓨트",
        lectures: [
          { index: 0, lectureTitle: "VM과 컨테이너", duration: 1080 },
          { index: 1, lectureTitle: "스케일링", duration: 820 },
          { index: 2, lectureTitle: "서버리스", duration: 975 },
        ],
      },
      {
        index: 2,
        sectionTitle: "스토리지",
        lectures: [
          { index: 0, lectureTitle: "오브젝트 스토리지", duration: 840 },
          { index: 1, lectureTitle: "블록 스토리지", duration: 910 },
          { index: 2, lectureTitle: "백업과 DR", duration: 1105 },
        ],
      },
      {
        index: 3,
        sectionTitle: "네트워킹",
        lectures: [
          { index: 0, lectureTitle: "VPC 설계", duration: 1040 },
          { index: 1, lectureTitle: "로드밸런서", duration: 930 },
          { index: 2, lectureTitle: "보안 그룹", duration: 820 },
          { index: 3, lectureTitle: "피어링", duration: 780 },
        ],
      },
      {
        index: 4,
        sectionTitle: "보안",
        lectures: [
          { index: 0, lectureTitle: "IAM", duration: 1120 },
          { index: 1, lectureTitle: "키 관리", duration: 880 },
          { index: 2, lectureTitle: "네트워크 보안", duration: 970 },
        ],
      },
    ],
  },
  {
    courseId: "course-12",
    title: "Docker 완전 정복",
    description: "Docker 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Docker", color: "orange" },
      { content: "Container", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "도커 기초",
        lectures: [
          { index: 0, lectureTitle: "컨테이너 개념", duration: 740 },
          { index: 1, lectureTitle: "이미지와 레지스트리", duration: 890 },
          { index: 2, lectureTitle: "도커 명령어", duration: 810 },
        ],
      },
      {
        index: 1,
        sectionTitle: "도커파일",
        lectures: [
          { index: 0, lectureTitle: "베이스 이미지", duration: 720 },
          { index: 1, lectureTitle: "레이어 최적화", duration: 990 },
          { index: 2, lectureTitle: "빌드 캐시", duration: 835 },
          { index: 3, lectureTitle: "멀티스테이지", duration: 1085 },
        ],
      },
      {
        index: 2,
        sectionTitle: "네트워킹",
        lectures: [
          { index: 0, lectureTitle: "브리지 네트워크", duration: 760 },
          { index: 1, lectureTitle: "포트 매핑", duration: 640 },
          { index: 2, lectureTitle: "DNS 설정", duration: 705 },
        ],
      },
      {
        index: 3,
        sectionTitle: "스토리지",
        lectures: [
          { index: 0, lectureTitle: "볼륨", duration: 825 },
          { index: 1, lectureTitle: "바인드 마운트", duration: 780 },
          { index: 2, lectureTitle: "데이터 관리", duration: 915 },
        ],
      },
      {
        index: 4,
        sectionTitle: "배포",
        lectures: [
          { index: 0, lectureTitle: "도커 컴포즈", duration: 1020 },
          { index: 1, lectureTitle: "스웜", duration: 1100 },
          { index: 2, lectureTitle: "레지스트리 운영", duration: 860 },
        ],
      },
    ],
  },
  {
    courseId: "course-13",
    title: "쿠버네티스 완전 정복",
    description: "쿠버네티스 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Kubernetes", color: "blue" },
      { content: "Orchestration", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "K8s 기초",
        lectures: [
          { index: 0, lectureTitle: "클러스터 구성", duration: 960 },
          { index: 1, lectureTitle: "노드와 파드", duration: 820 },
          { index: 2, lectureTitle: "네임스페이스", duration: 700 },
        ],
      },
      {
        index: 1,
        sectionTitle: "워크로드",
        lectures: [
          { index: 0, lectureTitle: "디플로이먼트", duration: 1045 },
          { index: 1, lectureTitle: "스테이트풀셋", duration: 1080 },
          { index: 2, lectureTitle: "잡과 크론잡", duration: 780 },
        ],
      },
      {
        index: 2,
        sectionTitle: "서비스와 인그레스",
        lectures: [
          { index: 0, lectureTitle: "서비스 타입", duration: 870 },
          { index: 1, lectureTitle: "인그레스", duration: 940 },
          { index: 2, lectureTitle: "로드밸런싱", duration: 1025 },
        ],
      },
      {
        index: 3,
        sectionTitle: "스토리지",
        lectures: [
          { index: 0, lectureTitle: "PV/PVC", duration: 915 },
          { index: 1, lectureTitle: "스토리지 클래스", duration: 820 },
          { index: 2, lectureTitle: "데이터 백업", duration: 980 },
        ],
      },
      {
        index: 4,
        sectionTitle: "보안과 운영",
        lectures: [
          { index: 0, lectureTitle: "RBAC", duration: 865 },
          { index: 1, lectureTitle: "네트워크 폴리시", duration: 900 },
          { index: 2, lectureTitle: "모니터링", duration: 1100 },
          { index: 3, lectureTitle: "오토스케일링", duration: 995 },
        ],
      },
      {
        index: 5,
        sectionTitle: "CI/CD 연동",
        lectures: [
          { index: 0, lectureTitle: "GitOps", duration: 840 },
          { index: 1, lectureTitle: "ArgoCD", duration: 1050 },
          { index: 2, lectureTitle: "Flux", duration: 930 },
        ],
      },
    ],
  },
  {
    courseId: "course-14",
    title: "Git 완전 정복",
    description: "Git 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Git", color: "orange" },
      { content: "Version Control", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "Git 기초",
        lectures: [
          { index: 0, lectureTitle: "리포지토리 생성", duration: 650 },
          { index: 1, lectureTitle: "커밋과 로그", duration: 720 },
          { index: 2, lectureTitle: "브랜치", duration: 840 },
        ],
      },
      {
        index: 1,
        sectionTitle: "협업",
        lectures: [
          { index: 0, lectureTitle: "리모트 연동", duration: 905 },
          { index: 1, lectureTitle: "PR과 코드 리뷰", duration: 990 },
          { index: 2, lectureTitle: "컨벤션", duration: 780 },
        ],
      },
      {
        index: 2,
        sectionTitle: "고급 기능",
        lectures: [
          { index: 0, lectureTitle: "리베이스", duration: 870 },
          { index: 1, lectureTitle: "체리픽", duration: 805 },
          { index: 2, lectureTitle: "스태시", duration: 680 },
          { index: 3, lectureTitle: "서브모듈", duration: 1085 },
        ],
      },
      {
        index: 3,
        sectionTitle: "브랜치 전략",
        lectures: [
          { index: 0, lectureTitle: "Git Flow", duration: 1020 },
          { index: 1, lectureTitle: "GitHub Flow", duration: 760 },
          { index: 2, lectureTitle: "Trunk-Based", duration: 880 },
        ],
      },
      {
        index: 4,
        sectionTitle: "문제 해결",
        lectures: [
          { index: 0, lectureTitle: "충돌 해결", duration: 930 },
          { index: 1, lectureTitle: "리커버리", duration: 970 },
          { index: 2, lectureTitle: "로그 분석", duration: 820 },
        ],
      },
    ],
  },
  {
    courseId: "course-15",
    title: "테스팅 완전 정복",
    description: "테스팅 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Testing", color: "purple" },
      { content: "QA", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "테스팅 개요",
        lectures: [
          { index: 0, lectureTitle: "테스트 피라미드", duration: 740 },
          { index: 1, lectureTitle: "전략 수립", duration: 820 },
          { index: 2, lectureTitle: "품질 메트릭", duration: 905 },
        ],
      },
      {
        index: 1,
        sectionTitle: "단위 테스트",
        lectures: [
          { index: 0, lectureTitle: "단위 테스트 원칙", duration: 780 },
          { index: 1, lectureTitle: "목/스텁", duration: 960 },
          { index: 2, lectureTitle: "커버리지", duration: 880 },
        ],
      },
      {
        index: 2,
        sectionTitle: "통합 테스트",
        lectures: [
          { index: 0, lectureTitle: "계약 테스트", duration: 1020 },
          { index: 1, lectureTitle: "API 테스트", duration: 945 },
          { index: 2, lectureTitle: "컨슈머 주도", duration: 1080 },
        ],
      },
      {
        index: 3,
        sectionTitle: "E2E 테스트",
        lectures: [
          { index: 0, lectureTitle: "시나리오 설계", duration: 930 },
          { index: 1, lectureTitle: "플레이wright/사이프레스", duration: 990 },
          { index: 2, lectureTitle: "안정성 향상", duration: 860 },
        ],
      },
      {
        index: 4,
        sectionTitle: "CI/CD 연동",
        lectures: [
          { index: 0, lectureTitle: "파이프라인에 테스트 넣기", duration: 870 },
          { index: 1, lectureTitle: "병렬 실행", duration: 780 },
          { index: 2, lectureTitle: "플레이크 관리", duration: 820 },
        ],
      },
    ],
  },
  {
    courseId: "course-16",
    title: "리액트 네이티브 완전 정복",
    description: "리액트 네이티브 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "React Native", color: "blue" },
      { content: "Mobile", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "RN 기초",
        lectures: [
          { index: 0, lectureTitle: "프로젝트 설정", duration: 840 },
          { index: 1, lectureTitle: "컴포넌트 기본", duration: 705 },
          { index: 2, lectureTitle: "스타일링", duration: 915 },
        ],
      },
      {
        index: 1,
        sectionTitle: "네비게이션",
        lectures: [
          { index: 0, lectureTitle: "Stack 네비게이션", duration: 990 },
          { index: 1, lectureTitle: "Tab 네비게이션", duration: 880 },
          { index: 2, lectureTitle: "딥 링크", duration: 770 },
        ],
      },
      {
        index: 2,
        sectionTitle: "상태 관리",
        lectures: [
          { index: 0, lectureTitle: "Context 활용", duration: 830 },
          { index: 1, lectureTitle: "Redux 연동", duration: 1080 },
          { index: 2, lectureTitle: "서드파티 상태", duration: 945 },
        ],
      },
      {
        index: 3,
        sectionTitle: "네이티브 연동",
        lectures: [
          { index: 0, lectureTitle: "네이티브 모듈", duration: 1120 },
          { index: 1, lectureTitle: "플랫폼 API", duration: 860 },
          { index: 2, lectureTitle: "퍼포먼스", duration: 1035 },
        ],
      },
      {
        index: 4,
        sectionTitle: "배포",
        lectures: [
          { index: 0, lectureTitle: "빌드와 서명", duration: 940 },
          { index: 1, lectureTitle: "스토어 릴리스", duration: 990 },
          { index: 2, lectureTitle: "OTA 업데이트", duration: 820 },
        ],
      },
    ],
  },
  {
    courseId: "course-17",
    title: "SwiftUI 완전 정복",
    description: "SwiftUI 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "SwiftUI", color: "blue" },
      { content: "iOS", color: "purple" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "SwiftUI 기초",
        lectures: [
          { index: 0, lectureTitle: "뷰와 모디파이어", duration: 780 },
          { index: 1, lectureTitle: "레이아웃", duration: 920 },
          { index: 2, lectureTitle: "상태 관리", duration: 845 },
        ],
      },
      {
        index: 1,
        sectionTitle: "리스트와 네비게이션",
        lectures: [
          { index: 0, lectureTitle: "List 사용법", duration: 705 },
          { index: 1, lectureTitle: "NavigationStack", duration: 880 },
          { index: 2, lectureTitle: "탭뷰", duration: 820 },
        ],
      },
      {
        index: 2,
        sectionTitle: "데이터 흐름",
        lectures: [
          { index: 0, lectureTitle: "State/Binding", duration: 760 },
          { index: 1, lectureTitle: "ObservableObject", duration: 975 },
          { index: 2, lectureTitle: "Environment", duration: 890 },
        ],
      },
      {
        index: 3,
        sectionTitle: "네트워킹",
        lectures: [
          { index: 0, lectureTitle: "Async/await", duration: 930 },
          { index: 1, lectureTitle: "URLSession", duration: 820 },
          { index: 2, lectureTitle: "JSON 파싱", duration: 780 },
        ],
      },
      {
        index: 4,
        sectionTitle: "테스팅과 배포",
        lectures: [
          { index: 0, lectureTitle: "스냅샷 테스트", duration: 870 },
          { index: 1, lectureTitle: "프리뷰 활용", duration: 640 },
          { index: 2, lectureTitle: "App Store 배포", duration: 1120 },
        ],
      },
    ],
  },
  {
    courseId: "course-18",
    title: "안드로이드 완전 정복",
    description: "안드로이드 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Android", color: "green" },
      { content: "Kotlin", color: "orange" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "안드로이드 기초",
        lectures: [
          { index: 0, lectureTitle: "프로젝트 구조", duration: 780 },
          { index: 1, lectureTitle: "액티비티/프래그먼트", duration: 1020 },
          { index: 2, lectureTitle: "뷰와 레이아웃", duration: 810 },
        ],
      },
      {
        index: 1,
        sectionTitle: "네트워킹",
        lectures: [
          { index: 0, lectureTitle: "Retrofit", duration: 930 },
          { index: 1, lectureTitle: "코루틴", duration: 870 },
          { index: 2, lectureTitle: "에러 처리", duration: 780 },
          { index: 3, lectureTitle: "JSON 파싱", duration: 705 },
        ],
      },
      {
        index: 2,
        sectionTitle: "데이터 관리",
        lectures: [
          { index: 0, lectureTitle: "Room", duration: 960 },
          { index: 1, lectureTitle: "DataStore", duration: 835 },
          { index: 2, lectureTitle: "캐싱 전략", duration: 880 },
        ],
      },
      {
        index: 3,
        sectionTitle: "아키텍처",
        lectures: [
          { index: 0, lectureTitle: "MVVM", duration: 1040 },
          { index: 1, lectureTitle: "DI와 Hilt", duration: 1120 },
          { index: 2, lectureTitle: "테스트 가능성", duration: 905 },
        ],
      },
      {
        index: 4,
        sectionTitle: "배포와 최적화",
        lectures: [
          { index: 0, lectureTitle: "빌드 변형", duration: 820 },
          { index: 1, lectureTitle: "성능 분석", duration: 980 },
          { index: 2, lectureTitle: "스토어 출시", duration: 940 },
        ],
      },
    ],
  },
  {
    courseId: "course-19",
    title: "Go 언어 완전 정복",
    description: "Go 언어 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Go", color: "blue" },
      { content: "Backend", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "Go 기초",
        lectures: [
          { index: 0, lectureTitle: "문법과 타입", duration: 810 },
          { index: 1, lectureTitle: "패키지 구조", duration: 760 },
          { index: 2, lectureTitle: "인터페이스", duration: 930 },
        ],
      },
      {
        index: 1,
        sectionTitle: "동시성",
        lectures: [
          { index: 0, lectureTitle: "고루틴", duration: 820 },
          { index: 1, lectureTitle: "채널", duration: 915 },
          { index: 2, lectureTitle: "컨텍스트", duration: 870 },
        ],
      },
      {
        index: 2,
        sectionTitle: "웹 개발",
        lectures: [
          { index: 0, lectureTitle: "net/http", duration: 780 },
          { index: 1, lectureTitle: "라우팅", duration: 705 },
          { index: 2, lectureTitle: "미들웨어", duration: 880 },
          { index: 3, lectureTitle: "템플릿", duration: 760 },
        ],
      },
      {
        index: 3,
        sectionTitle: "데이터베이스",
        lectures: [
          { index: 0, lectureTitle: "sql 패키지", duration: 1040 },
          { index: 1, lectureTitle: "ORM 사용", duration: 1085 },
          { index: 2, lectureTitle: "마이그레이션", duration: 945 },
        ],
      },
      {
        index: 4,
        sectionTitle: "테스팅과 배포",
        lectures: [
          { index: 0, lectureTitle: "testing 패키지", duration: 720 },
          { index: 1, lectureTitle: "벤치마크", duration: 780 },
          { index: 2, lectureTitle: "빌드/릴리스", duration: 905 },
        ],
      },
    ],
  },
  {
    courseId: "course-20",
    title: "Rust 완전 정복",
    description: "Rust 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "Rust", color: "orange" },
      { content: "Systems", color: "purple" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "Rust 기초",
        lectures: [
          { index: 0, lectureTitle: "소유권", duration: 1120 },
          { index: 1, lectureTitle: "빌림 규칙", duration: 980 },
          { index: 2, lectureTitle: "기본 문법", duration: 760 },
        ],
      },
      {
        index: 1,
        sectionTitle: "컬렉션과 에러 처리",
        lectures: [
          { index: 0, lectureTitle: "Vec와 HashMap", duration: 820 },
          { index: 1, lectureTitle: "Result/Option", duration: 905 },
          { index: 2, lectureTitle: "에러 핸들링", duration: 870 },
        ],
      },
      {
        index: 2,
        sectionTitle: "동시성",
        lectures: [
          { index: 0, lectureTitle: "스레드", duration: 830 },
          { index: 1, lectureTitle: "채널", duration: 760 },
          { index: 2, lectureTitle: "async/await", duration: 1045 },
        ],
      },
      {
        index: 3,
        sectionTitle: "웹 개발",
        lectures: [
          { index: 0, lectureTitle: "Actix 소개", duration: 975 },
          { index: 1, lectureTitle: "라우팅", duration: 780 },
          { index: 2, lectureTitle: "미들웨어", duration: 820 },
        ],
      },
      {
        index: 4,
        sectionTitle: "테스팅과 배포",
        lectures: [
          { index: 0, lectureTitle: "유닛 테스트", duration: 720 },
          { index: 1, lectureTitle: "통합 테스트", duration: 880 },
          { index: 2, lectureTitle: "릴리스 빌드", duration: 905 },
        ],
      },
    ],
  },
  {
    courseId: "course-21",
    title: "C++ 완전 정복",
    description: "C++ 완전 정복하려면 이 강의를 들어보세요!",
    instructorUserId: "instructor@example.com",
    tags: [
      { content: "C++", color: "blue" },
      { content: "Systems", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "C++ 기초",
        lectures: [
          { index: 0, lectureTitle: "기본 문법", duration: 760 },
          { index: 1, lectureTitle: "메모리 모델", duration: 920 },
          { index: 2, lectureTitle: "참조와 포인터", duration: 980 },
        ],
      },
      {
        index: 1,
        sectionTitle: "객체지향",
        lectures: [
          { index: 0, lectureTitle: "클래스와 객체", duration: 880 },
          { index: 1, lectureTitle: "상속과 다형성", duration: 1040 },
          { index: 2, lectureTitle: "캡슐화", duration: 820 },
        ],
      },
      {
        index: 2,
        sectionTitle: "템플릿",
        lectures: [
          { index: 0, lectureTitle: "함수 템플릿", duration: 780 },
          { index: 1, lectureTitle: "클래스 템플릿", duration: 920 },
          { index: 2, lectureTitle: "메타프로그래밍", duration: 1085 },
        ],
      },
      {
        index: 3,
        sectionTitle: "표준 라이브러리",
        lectures: [
          { index: 0, lectureTitle: "STL 컨테이너", duration: 840 },
          { index: 1, lectureTitle: "알고리즘", duration: 805 },
          { index: 2, lectureTitle: "스마트 포인터", duration: 975 },
          { index: 3, lectureTitle: "filesystem", duration: 720 },
        ],
      },
      {
        index: 4,
        sectionTitle: "동시성",
        lectures: [
          { index: 0, lectureTitle: "std::thread", duration: 880 },
          { index: 1, lectureTitle: "락과 뮤텍스", duration: 930 },
          { index: 2, lectureTitle: "원자 연산", duration: 760 },
        ],
      },
    ],
  },
  {
    courseId: "course-22",
    title: "컴퓨터 네트워크 완전 정복",
    description: "컴퓨터 네트워크 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "Networking", color: "purple" },
      { content: "TCP/IP", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "네트워크 기본",
        lectures: [
          { index: 0, lectureTitle: "OSI 7계층", duration: 920 },
          { index: 1, lectureTitle: "TCP/IP 모델", duration: 840 },
          { index: 2, lectureTitle: "전송 매체", duration: 700 },
        ],
      },
      {
        index: 1,
        sectionTitle: "링크 계층",
        lectures: [
          { index: 0, lectureTitle: "MAC과 스위칭", duration: 880 },
          { index: 1, lectureTitle: "ARP", duration: 760 },
          { index: 2, lectureTitle: "VLAN", duration: 930 },
        ],
      },
      {
        index: 2,
        sectionTitle: "네트워크 계층",
        lectures: [
          { index: 0, lectureTitle: "IP 주소", duration: 820 },
          { index: 1, lectureTitle: "라우팅", duration: 1045 },
          { index: 2, lectureTitle: "ICMP", duration: 640 },
          { index: 3, lectureTitle: "NAT", duration: 780 },
        ],
      },
      {
        index: 3,
        sectionTitle: "전송 계층",
        lectures: [
          { index: 0, lectureTitle: "TCP와 UDP", duration: 990 },
          { index: 1, lectureTitle: "흐름 제어", duration: 905 },
          { index: 2, lectureTitle: "혼잡 제어", duration: 1020 },
        ],
      },
      {
        index: 4,
        sectionTitle: "응용 계층",
        lectures: [
          { index: 0, lectureTitle: "HTTP", duration: 820 },
          { index: 1, lectureTitle: "DNS", duration: 780 },
          { index: 2, lectureTitle: "SMTP", duration: 705 },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-23",
    title: "정보 보안 완전 정복",
    description: "정보 보안 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "Security", color: "purple" },
      { content: "Cyber", color: "orange" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "보안 기초",
        lectures: [
          { index: 0, lectureTitle: "CIA 트라이어드", duration: 760 },
          { index: 1, lectureTitle: "위협 모델링", duration: 840 },
          { index: 2, lectureTitle: "정책과 거버넌스", duration: 920 },
        ],
      },
      {
        index: 1,
        sectionTitle: "암호학",
        lectures: [
          { index: 0, lectureTitle: "대칭키", duration: 880 },
          { index: 1, lectureTitle: "비대칭키", duration: 1040 },
          { index: 2, lectureTitle: "해시", duration: 760 },
        ],
      },
      {
        index: 2,
        sectionTitle: "네트워크 보안",
        lectures: [
          { index: 0, lectureTitle: "TLS/SSL", duration: 990 },
          { index: 1, lectureTitle: "VPN", duration: 870 },
          { index: 2, lectureTitle: "방화벽", duration: 780 },
        ],
      },
      {
        index: 3,
        sectionTitle: "애플리케이션 보안",
        lectures: [
          { index: 0, lectureTitle: "OWASP Top 10", duration: 1120 },
          { index: 1, lectureTitle: "인풋 밸리데이션", duration: 760 },
          { index: 2, lectureTitle: "시큐어 코딩", duration: 880 },
        ],
      },
      {
        index: 4,
        sectionTitle: "운영 보안",
        lectures: [
          { index: 0, lectureTitle: "로깅과 SIEM", duration: 990 },
          { index: 1, lectureTitle: "사고 대응", duration: 1045 },
          { index: 2, lectureTitle: "취약점 관리", duration: 905 },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-24",
    title: "프론트엔드 성능 최적화 완전 정복",
    description: "프론트엔드 성능 최적화 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "Performance", color: "green" },
      { content: "Frontend", color: "blue" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "측정과 진단",
        lectures: [
          { index: 0, lectureTitle: "Lighthouse", duration: 820 },
          { index: 1, lectureTitle: "Web Vitals", duration: 760 },
          { index: 2, lectureTitle: "프로파일링", duration: 900 },
        ],
      },
      {
        index: 1,
        sectionTitle: "번들 최적화",
        lectures: [
          { index: 0, lectureTitle: "코드 스플리팅", duration: 980 },
          { index: 1, lectureTitle: "트리 셰이킹", duration: 870 },
          { index: 2, lectureTitle: "이미지 최적화", duration: 760 },
        ],
      },
      {
        index: 2,
        sectionTitle: "렌더링 최적화",
        lectures: [
          { index: 0, lectureTitle: "리렌더 최소화", duration: 905 },
          { index: 1, lectureTitle: "메모이제이션", duration: 780 },
          { index: 2, lectureTitle: "가상화", duration: 1020 },
        ],
      },
      {
        index: 3,
        sectionTitle: "네트워크 최적화",
        lectures: [
          { index: 0, lectureTitle: "캐싱 전략", duration: 890 },
          { index: 1, lectureTitle: "프리로딩/프리패칭", duration: 820 },
          { index: 2, lectureTitle: "HTTP/2,3", duration: 705 },
        ],
      },
      {
        index: 4,
        sectionTitle: "모바일 성능",
        lectures: [
          { index: 0, lectureTitle: "터치 최적화", duration: 760 },
          { index: 1, lectureTitle: "저사양 대응", duration: 840 },
          { index: 2, lectureTitle: "PWA", duration: 930 },
        ],
      },
    ],
    instructorUserId: "",
  },
  {
    courseId: "course-25",
    title: "백엔드 아키텍처 완전 정복",
    description: "백엔드 아키텍처 완전 정복하려면 이 강의를 들어보세요!",
    tags: [
      { content: "Architecture", color: "purple" },
      { content: "Backend", color: "green" },
    ],
    thumbnailImageUrl: null,
    sections: [
      {
        index: 0,
        sectionTitle: "아키텍처 패턴",
        lectures: [
          {
            index: 0,
            lectureTitle: "모놀리식 vs 마이크로서비스",
            duration: 1080,
          },
          { index: 1, lectureTitle: "헥사고날", duration: 980 },
          { index: 2, lectureTitle: "CQRS", duration: 905 },
        ],
      },
      {
        index: 1,
        sectionTitle: "데이터 관리",
        lectures: [
          { index: 0, lectureTitle: "트랜잭션", duration: 840 },
          { index: 1, lectureTitle: "샤딩", duration: 1120 },
          { index: 2, lectureTitle: "리플리케이션", duration: 960 },
        ],
      },
      {
        index: 2,
        sectionTitle: "메시징",
        lectures: [
          { index: 0, lectureTitle: "이벤트 기반", duration: 870 },
          { index: 1, lectureTitle: "큐와 토픽", duration: 760 },
          { index: 2, lectureTitle: "정확히 한 번", duration: 1040 },
        ],
      },
      {
        index: 3,
        sectionTitle: "확장성과 안정성",
        lectures: [
          { index: 0, lectureTitle: "오토스케일링", duration: 905 },
          { index: 1, lectureTitle: "서킷 브레이커", duration: 780 },
          { index: 2, lectureTitle: "백프레셔", duration: 820 },
        ],
      },
      {
        index: 4,
        sectionTitle: "관측 가능성",
        lectures: [
          { index: 0, lectureTitle: "로그 수집", duration: 900 },
          { index: 1, lectureTitle: "메트릭/트레이싱", duration: 1020 },
          { index: 2, lectureTitle: "알림 운영", duration: 760 },
        ],
      },
    ],
    instructorUserId: "",
  },
];

export default COURSES_STORE;
