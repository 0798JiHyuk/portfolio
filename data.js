// 포트폴리오 내용 — 텍스트만 고치면 화면에 반영됩니다.
// (학번·비밀번호·군번·자격 등록번호 등 개인정보는 일부러 넣지 않았습니다.)
window.PROFILE = {
  name: "김지혁",
  hanja: "金知弈",
  role: "Backend Developer",
  intro: "컴퓨터공학의 기본기를 바탕으로 문제의 본질을 이해하고, AI를 효율적으로 활용해 숲을 보며 개발하는 개발자입니다.",
  email: "your@email.com",
  github: "https://github.com/your-id",
};

window.PROJECTS = [
  {
    title: "LabPick",
    period: "2026.05.16 – 05.17",
    badge: "교내 해커톤 최우수상",
    summary: "교수님의 논문·연구 철학·랩실 FAQ를 학습한 AI 봇이 학생의 궁금증을 24시간 실시간으로 해결해주는 연구실 매칭 플랫폼. 가천대 컴퓨터공학과 해커톤에서 MVP를 개발했습니다.",
    tags: ["AI Bot", "Spring Boot", "Redis"],
    link: "",
  },
  {
    title: "Nalleum (낼름)",
    period: "2026.02.06 – 02.07",
    badge: "GDGoC ONE:Wave 장려상(3등)",
    summary: "시간 없는 취준생을 위해 관심 기업의 최신 이슈를 면접 예상 질문으로 변환해 떠먹여 주는 개인 맞춤형 기업 분석 & 면접 대비 서비스. 연합동아리 GDGoC 해커톤 MVP.",
    tags: ["기업 분석", "면접 대비", "MVP"],
    link: "",
  },
  {
    title: "P-실무프로젝트",
    period: "2025.09.01 – 12.19",
    badge: "졸업필수 수업 장려상(3등)",
    summary: "교내 졸업필수 수업 P-실무프로젝트에서 팀 프로젝트를 수행해 3등 장려상을 수상했습니다. (프로젝트 이름과 상세 설명을 여기에 추가하세요)",
    tags: ["Team Project", "Java"],
    link: "",
  },
];

// type: edu(학력) / award(수상) / train(교육) / army(병역) / cert(자격)
window.TIMELINE = [
  { d: "2026.05", type: "award", t: "가천대 컴퓨터공학과 해커톤 최우수상", s: "LabPick MVP 개발" },
  { d: "2026.02", type: "award", t: "GDGoC ONE:Wave 해커톤 장려상", s: "Nalleum(낼름) MVP 개발" },
  { d: "2025.12", type: "award", t: "P-실무프로젝트 3등 장려상", s: "졸업필수 수업 · 2025.09 – 12" },
  { d: "2025.03", type: "edu",   t: "가천대학교 컴퓨터공학과 편입", s: "2027.02 졸업 예정" },
  { d: "2023.12", type: "train", t: "한국ICT인재개발원 수료", s: "웹서비스 Java 백엔드 개발자 과정 · 1,120시간" },
  { d: "2023.04", type: "army",  t: "병역 의무 이행 완료", s: "2021.10 입영 – 2023.04 전역" },
  { d: "2021.07", type: "train", t: "그린컴퓨터아카데미 수료", s: "웹퍼블리셔 · 반응형 웹앱 프론트 과정 · 760시간" },
  { d: "2021.02", type: "edu",   t: "여주대학교 졸업", s: "2019.03 입학" },
  { d: "2019.03", type: "edu",   t: "태장고등학교 졸업 (2019.01)", s: "여주대학교 입학" },
];

window.CERTS = [
  { n: "GTQ 플래시 1급", o: "한국생산성본부", d: "2021.04.16" },
  { n: "항공기체정비기능사", o: "한국산업인력공단", d: "2019.12.20" },
  { n: "문서실무사 2급", o: "한국정보관리협회", d: "2019.07.18" },
  { n: "한자어능력 3급", o: "한국정보관리협회", d: "2019.06.12" },
];

window.SKILLS = {
  "Language": ["Java", "C", "XML"],
  "Framework": ["Spring Boot", "OpenAPI"],
  "Infra": ["AWS", "Docker", "Redis"],
  "Tools & Security": ["Git", "JWT"],
};
