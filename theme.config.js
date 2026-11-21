// ============================================================
//  테마 설정 파일 — 여기만 수정하면 포트폴리오 전체 색상이 바뀝니다.
//  - DEFAULT_THEME : 처음 열릴 때 적용될 기업 (아래 THEMES의 키)
//  - 링크 뒤에 ?company=lg 처럼 붙이면 그 기업 색으로 열립니다.
//    예) https://내도메인.vercel.app/?company=naver
//  - accent   : 메인 포인트 색 (기업 대표색)
//  - accent2  : 보조 그라데이션 색
//  - onAccent : accent 위에 올라가는 글자색 (노란색처럼 밝으면 어두운 색)
//  - label    : 히어로 문구에 표시될 지원 기업 이름
// ============================================================
window.DEFAULT_THEME = "samsung";

window.THEMES = {
  default: { label: "기본", accent: "#1428A0", accent2: "#4F7CFF", onAccent: "#ffffff" },
  samsung: { label: "삼성전자", accent: "#1428A0", accent2: "#4F7CFF", onAccent: "#ffffff" },
  skhynix: { label: "SK하이닉스", accent: "#EA002C", accent2: "#FF8A3D", onAccent: "#ffffff" },
  lg:      { label: "LG",       accent: "#C8003C", accent2: "#FF6B8B", onAccent: "#ffffff" },
  hyundai: { label: "현대자동차", accent: "#2A5FA8", accent2: "#00AAD2", onAccent: "#ffffff" },
  naver:   { label: "네이버",    accent: "#03C75A", accent2: "#7CFFB2", onAccent: "#04210f" },
  kakao:   { label: "카카오",    accent: "#FEE500", accent2: "#FFB800", onAccent: "#2b2400" },
  coupang: { label: "쿠팡",     accent: "#E4002B", accent2: "#00A8E1", onAccent: "#ffffff" },
  toss:    { label: "토스",     accent: "#3182F6", accent2: "#6EC1FF", onAccent: "#ffffff" },
  line:    { label: "라인",     accent: "#06C755", accent2: "#B6FF5C", onAccent: "#04210f" },
  // 새 기업 추가 예시 ↓ (복사해서 값만 바꾸세요)
  // posco: { label: "포스코", accent: "#0B3D91", accent2: "#7FB2FF", onAccent: "#ffffff" },
};
