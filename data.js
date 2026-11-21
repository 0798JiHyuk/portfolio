window.PROFILE = {
  name: "김지혁",
  hanja: "金知弈",
  role: "Backend Developer",
  intro:
    "컴퓨터공학의 기본기를 바탕으로 문제의 본질을 이해하고, AI를 효율적으로 활용해 숲을 보며 개발하는 개발자입니다.",
  email: "kimjihyuk5935@gmail.com",
  github: "https://github.com/0798JiHyuk",
  velog: "https://velog.io/@0798_hyuk/posts",
};

// 배포 후 각 프로젝트의 link를 Vercel 주소로 바꾸세요.
window.PROJECTS = [
  {
    title: "Spudway",
    period: "2026.08",
    badge: "팀 프로젝트 · 교통 데이터 연동",
    summary:
      "사용자가 돌아와야 하는 시각에 맞춰 왕복 버스편과 여행지 출발 마감 시각을 계산하는 여행 계획 서비스입니다. TAGO 시간표 연동과 귀환편 역산 로직을 구현했습니다.",
    tags: ["TypeScript", "Next.js", "TAGO API"],
    troubleshooting: {
      title: "귀가 마감 시각을 만족하는 마지막 버스편 계산",
      problem: "시간표에서 단순히 가장 늦게 출발하는 버스를 고르면 사용자의 귀가 마감 시각을 넘길 수 있습니다. 터미널까지 이동할 시간도 일정에 포함해야 합니다.",
      solution: "이용 가능한 첫 출발편을 고른 뒤, 그 편이 도착한 이후에 출발하고 귀가 마감까지 도착하는 귀환편만 남겨 가장 늦은 편을 선택했습니다. 귀환편 출발 시각에서 기본 15분을 빼 여행지 출발 마감을 계산합니다. TAGO에서 왕복편을 구하지 못할 때 사용할 데모 시간표를 마련하고, 응답의 데이터 출처와 경고로 실제 조회 결과와 구분했습니다.",
      source: "https://github.com/A-major-hot-potato/squdway-b/commit/428a41569e22d6896ee06f27afcfe0b897cb25d9",
    },
    link: "#",
  },
  {
    title: "Class Photo → Notion",
    period: "2026.03",
    badge: "개인 프로젝트",
    summary:
      "아이폰으로 찍은 수업 사진을 Windows 노트북에 저장하고, 선택한 Notion 페이지나 데이터베이스에 자동으로 정리하는 업로드 도구입니다.",
    tags: ["Node.js", "Express", "Multer", "Notion API"],
    troubleshooting: {
      title: "업로드 기능을 유지하며 정적 파일 제공 범위 축소",
      problem: "초기 Express 서버는 프로젝트 루트 전체를 정적 경로로 제공했습니다. 앱 화면을 열어주는 설정 하나로 서버 소스와 로컬에 저장된 수업 사진도 직접 조회될 수 있는 구조였습니다.",
      solution: "프로젝트 루트를 대상으로 하는 정적 파일 미들웨어를 제거하고, 화면에 필요한 index.html만 두 개의 명시적인 GET 경로에서 제공하도록 변경했습니다. 파일 업로드와 Notion 전송은 기존 API 흐름으로 처리합니다.",
      source: "https://github.com/0798JiHyuk/class-photo-notion/commit/99d49258085641cd2431e4df4e12946715581e40",
    },
    link: "#",
  },
  {
    title: "LabPick",
    period: "2026.05.16 – 05.17",
    badge: "교내 해커톤 최우수상",
    summary:
      "학생이 교수별 연구실을 탐색하고 AI 상담을 통해 연구 주제나 지원 조건을 확인하는 가천대 컴퓨터공학과 해커톤 MVP입니다. 교수 프로필, FAQ, 논문 목록, 학생 프로필을 상담 답변의 맥락으로 활용합니다.",
    tags: ["Next.js", "Supabase", "OpenAI API", "Semantic Scholar"],
    troubleshooting: {
      title: "교수별 논문 조회를 재사용하고 조회 실패에도 상담 유지",
      problem: "한 교수에게 여러 학생이 상담을 요청하면 같은 논문 목록을 매번 외부 API에서 가져오게 됩니다. 논문 조회에 실패해도 교수 프로필과 FAQ만으로 답할 수 있는 질문은 처리할 수 있습니다.",
      solution: "Semantic Scholar에서 가져온 논문을 프롬프트용 텍스트로 변환해 교수 ID를 키로 서버 프로세스의 Map에 저장했습니다. 같은 인스턴스에서 다른 학생이 같은 교수에게 질문하면 논문 텍스트를 재사용하고, 학생 정보는 요청마다 넣어 새 답변을 생성합니다. 논문 조회 중 예외가 발생하면 논문 컨텍스트 없이 교수 프로필과 FAQ를 바탕으로 답변 생성을 계속합니다.",
      source: "https://github.com/GCHackathon/LabPick/blob/19d37035b666d61ee64a16396a207a5010cb9eae/app/api/bot/chat/route.js",
    },
    link: "#",
  },
  {
    title: "Nalleum (낼름)",
    period: "2026.02.06 – 02.07",
    badge: "GDGoC ONE:Wave 장려상(3등)",
    summary:
      "희망 기업·직무·관심 산업 등 지원자 정보를 받아 한국어 면접 예상 질문을 최대 3개 생성하는 백엔드 API입니다. GDGoC ONE:Wave 해커톤에서 프로토타입을 개발했습니다.",
    tags: ["JavaScript", "Node.js", "Express", "OpenAI API"],
    troubleshooting: {
      title: "외부 AI 설정 오류와 API 서버 상태를 구분",
      problem: "서버 시작 시 OpenAI 클라이언트를 바로 만들면 API 키가 없는 환경에서 서버가 시작되지 않아 헬스체크도 할 수 없었습니다. 공백이나 잘못된 타입의 입력을 외부 모델에 보내기 전 검증할 필요도 있었습니다.",
      solution: "해커톤 이후 개선에서 API 키가 있을 때만 OpenAI 클라이언트를 생성해 키 없이도 서버가 시작되고 GET /health가 응답하도록 했습니다. 질문 생성 API는 필수 문자열의 타입·공백·길이를 검사해 잘못된 요청에 400을, 키 미설정 시에는 503을 반환합니다. 헬스체크는 서버 응답 여부를 나타내고, AI 기능 설정 상태는 질문 생성 API에서 확인할 수 있습니다.",
      source: "https://github.com/0798JiHyuk/nalleum_backend/commit/a2236dc1444b577065d57f9b28527b2347ef3a77",
    },
    link: "#",
  },
  {
    title: "자투리 (Jaturi)",
    period: "2025.09.01 – 12.19",
    badge: "졸업필수 수업 장려상(3등)",
    summary:
      "AI 질문에 답하며 일기와 독후감을 완성하는 P-실무프로젝트 팀 서비스입니다. 백엔드 인증·인가와 소셜 로그인 연동을 담당했습니다.",
    tags: ["Java", "Spring Boot", "Spring Security", "OAuth 2.0", "JWT", "MariaDB"],
    troubleshooting: {
      title: "Google·Naver·Kakao의 사용자 응답을 공통 로그인 흐름으로 연결",
      problem: "소셜 로그인 제공자마다 고유 사용자 ID와 이메일을 반환하는 필드 구조가 달랐습니다. 제공자별 응답을 기존 서비스 회원에 연결하고 내부 토큰을 발급하려면 공통으로 사용할 사용자 정보가 필요했습니다.",
      solution: "제공자별 응답 클래스에서 사용자 ID와 이메일을 추출해 공통 인터페이스로 전달했습니다. 서버는 필수 값이 있는지 검사하고 이메일로 기존 회원을 조회한 뒤, 제공자와 제공자 사용자 ID를 기준으로 소셜 계정 연동 기록을 조회하거나 생성합니다. 로그인에 성공하면 공통 성공 핸들러에서 서비스용 액세스 JWT와 리프레시 JWT를 발급합니다.",
      source: "https://github.com/0798JiHyuk/jatulee/tree/b4ac6ef8621cff9e94e128f76524a74b64867b8f/back/src/main/java/com/p_project",
    },
    link: "#",
  },
];

// type: edu(학력) / award(수상) / train(교육) / army(병역) / cert(자격)
window.TIMELINE = [
  {
    d: "2026.05",
    type: "award",
    t: "가천대 컴퓨터공학과 해커톤 최우수상",
    s: "LabPick MVP 개발",
  },
  {
    d: "2026.02",
    type: "award",
    t: "GDGoC ONE:Wave 해커톤 장려상",
    s: "Nalleum(낼름) MVP 개발",
  },
  {
    d: "2025.12",
    type: "award",
    t: "P-실무프로젝트 3등 장려상",
    s: "자투리(Jaturi) · 백엔드 인증·인가 및 소셜 로그인",
  },
  {
    d: "2025.03",
    type: "edu",
    t: "가천대학교 컴퓨터공학과 편입",
    s: "2027.02 졸업 예정",
  },
  {
    d: "2023.12",
    type: "train",
    t: "한국ICT인재개발원 수료",
    s: "웹서비스 Java 백엔드 개발자 과정 · 1,120시간",
  },
  {
    d: "2023.04",
    type: "army",
    t: "병역 의무 이행 완료",
    s: "2021.10 입영 – 2023.04 전역",
  },
  {
    d: "2021.07",
    type: "train",
    t: "그린컴퓨터아카데미 수료",
    s: "웹퍼블리셔 · 반응형 웹앱 프론트 과정 · 760시간",
  },
  { d: "2021.02", type: "edu", t: "여주대학교 졸업", s: "2019.03 입학" },
  {
    d: "2019.03",
    type: "edu",
    t: "태장고등학교 졸업 (2019.01)",
    s: "여주대학교 입학",
  },
];

window.CERTS = [
  { n: "GTQ 플래시 1급", o: "한국생산성본부", d: "2021.04.16" },
  { n: "항공기체정비기능사", o: "한국산업인력공단", d: "2019.12.20" },
  { n: "문서실무사 2급", o: "한국정보관리협회", d: "2019.07.18" },
  { n: "한자어능력 3급", o: "한국정보관리협회", d: "2019.06.12" },
];

window.SKILLS = {
  Language: ["Java", "C", "XML"],
  Framework: ["Spring Boot", "OpenAPI"],
  Infra: ["AWS", "Docker", "Redis"],
  "Tools & Security": ["Git", "JWT"],
};
