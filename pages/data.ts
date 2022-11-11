export interface SuperCharger {
  region: "서울" | "경기" | "강원" | "충청" | "경북" | "경남" | "전라" | "제주"
  name: string
  location: string
  freeParkingChargeTime: number
  chargingSpeed: "120W" | "250W"
  DcCount?: number
}

const superChargerInfo: SuperCharger[] = [
  {
    region: "서울",
    name: "여의도 IFC 몰",
    location: "지하 7층 #64 기둥",
    freeParkingChargeTime: 30,
    chargingSpeed: "120W",
  },
  {
    region: "서울",
    name: "강남 그랜드 인터컨티넨탈 호텔",
    location: "지하 4층",
    freeParkingChargeTime: 20,
    chargingSpeed: "120W",
  },
  {
    region: "서울",
    name: "강남 압구정 안다르 호텔",
    location: "지하 4층",
    freeParkingChargeTime: 15,
    chargingSpeed: "120W",
  },
  {
    region: "서울",
    name: "잠실 롯데 월드 타워",
    location: "지하 3층",
    freeParkingChargeTime: 0,
    chargingSpeed: "120W",
  },
  {
    region: "서울",
    name: "잠실 롯데 백화점",
    location: "지하 3층 D3999",
    freeParkingChargeTime: 0,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "송파 소피텔 엠배세더",
    location: "지하 4층",
    freeParkingChargeTime: 25,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "용산 그랜드 하얏트 호텔",
    location: "지하 2층",
    freeParkingChargeTime: 15,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "종각 그랑서울",
    location: "지하 6층",
    freeParkingChargeTime: 10,
    chargingSpeed: "120W",
    DcCount: 3,
  },
  {
    region: "서울",
    name: "김포공항 롯데몰",
    location: "지하 1층 B15",
    freeParkingChargeTime: 30,
    chargingSpeed: "120W",
  },
  {
    region: "서울",
    name: "테헤란 강남 N타워",
    location: "지하 4층",
    freeParkingChargeTime: 0,
    chargingSpeed: "120W",
  },
  {
    region: "서울",
    name: "역삼 센터필드",
    location: "지하 5층",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    DcCount: 12,
  },
  {
    region: "서울",
    name: "왕십리 비트플렉스",
    location: "지하 5층",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    DcCount: 3,
  },
  {
    region: "서울",
    name: "구로 넷마블",
    location: "지하 4층",
    freeParkingChargeTime: 15,
    chargingSpeed: "250W",
    DcCount: 3,
  },
  {
    region: "서울",
    name: "서초 쌍용 플레티넘",
    location: "지하 2층",
    freeParkingChargeTime: 5,
    chargingSpeed: "250W",
    DcCount: 8,
  },
  {
    region: "서울",
    name: "강북 파라스파라",
    location: "지상 1,2층",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "신사 스퀘어",
    location: "지하 4층",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "청량리 롯데백화점",
    location: "M5F",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    DcCount: 6,
  },
  {
    region: "서울",
    name: "여의도 CCMM",
    location: "지하 6층",
    freeParkingChargeTime: 10,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "수유 에피소드 수유838",
    location: "지하 4층",
    freeParkingChargeTime: 10,
    chargingSpeed: "250W",
    DcCount: 2,
  },
  {
    region: "서울",
    name: "신림 타임스트림",
    location: "지하 6층",
    freeParkingChargeTime: 20,
    chargingSpeed: "250W",
    DcCount: 2,
  },
  {
    region: "서울",
    name: "금천 마리오아울렛",
    location: "1관 지하 3층",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
  },
  {
    region: "서울",
    name: "성수 D타워",
    location: "지하 5층",
    freeParkingChargeTime: 20,
    chargingSpeed: "250W",
    DcCount: 3,
  },
]

export { superChargerInfo }
