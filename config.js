/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이우진",
    nameEn: "LEE WOO JIN",
    father: "이명구",
    mother: "김정희",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김가희",
    nameEn: "KIM GA HEE",
    father: "김민우",
    mother: "정영자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "11:00",
    venue: "부산 센텀사이언스파크 웨딩홀 ",
    hall: "1층 라움홀",
    address: "부산 해운대구 센텀중앙로 79",
    tel: "051-711-7755",
    mapLinks: {
      kakao: "https://place.map.kakao.com/14525753",
      naver: "https://naver.me/xk1n8I1H"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "두 사람의 행복한 순간",
    content: ""
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "이우진", name: "이우진", bank: "우리은행", number: "1002-352-198743" },
      { role: "이명구", name: "이명구", bank: "농협은행", number: "821089-52-068854" },
      { role: "김정희", name: "김정희", bank: "농협은행", number: "821089-52-018752" }
    ],
    bride: [
      { role: "김가희", name: "김가희", bank: "부산은행", number: "112-2105-4160-02" },
      { role: "김민우", name: "김민우", bank: "부산은행", number: "10-1120-7330-64" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이우진 ♥ 김가희 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};
