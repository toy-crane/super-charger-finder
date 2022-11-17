export interface SuperCharger {
  id: number
  region: "서울" | "경기" | "강원" | "충청" | "경북" | "경남" | "전라" | "제주"
  name: string
  freeParkingChargeTime: number
  chargingSpeed: "120W" | "250W"
  DcCount?: number
  locationId: string
  stallCount: number
  address: {
    street: string
    city: "서울"
    locationDetail: string
    state: string | null
  }
  gps: {
    latitude: number
    longitude: number
  }
}

const superChargerInfo: SuperCharger[] = [
  {
    id: 1,
    region: "서울",
    name: "여의도 IFC 몰",
    locationId: "seoulyeouidosupercharger",
    freeParkingChargeTime: 30,
    chargingSpeed: "120W",
    stallCount: 5,
    address: {
      street: "서울특별시 영등포구 국제금융로 10",
      locationDetail: "지하 7층 #64 기둥",
      city: "서울",
      state: null,
    },
    gps: {
      latitude: 37.52526,
      longitude: 126.925714,
    },
  },
  {
    id: 2,
    region: "서울",
    name: "강남 그랜드 인터컨티넨탈 호텔",
    locationId: "seoulgangnamsupercharger",
    freeParkingChargeTime: 20,
    chargingSpeed: "120W",
    stallCount: 5,
    address: {
      street: "서울특별시 강남구 테헤란로 521",
      city: "서울",
      locationDetail: "지하 4층",
      state: null,
    },
    gps: {
      latitude: 37.509215,
      longitude: 127.06079,
    },
  },
  {
    id: 3,
    region: "서울",
    locationId: "gangnnamsupercharger",
    name: "강남 압구정 안다르 호텔",
    freeParkingChargeTime: 15,
    chargingSpeed: "120W",
    address: {
      street: "서울특별시 강남구 논현로 854",
      city: "서울",
      locationDetail: "지하 4층",
      state: null,
    },
    gps: {
      latitude: 37.52541809,
      longitude: 127.02887026,
    },
    stallCount: 4,
  },
  {
    id: 4,
    region: "서울",
    name: "잠실 롯데 월드 타워",
    locationId: "seouljamsilsupercharger",
    freeParkingChargeTime: 0,
    chargingSpeed: "120W",
    address: {
      street: "서울특별시 올림픽로 300",
      city: "서울",
      state: null,
      locationDetail: "지하 3층",
    },
    gps: {
      latitude: 37.513395,
      longitude: 127.102238,
    },
    stallCount: 5,
  },
  {
    id: 5,
    region: "서울",
    name: "잠실 롯데 백화점",
    locationId: "seoulsongpaolympicparksupercharger",
    freeParkingChargeTime: 0,
    chargingSpeed: "250W",
    address: {
      street: "송파구 올림픽로 240",
      city: "서울",
      locationDetail: "지하 3층 D3999",
      state: null,
    },
    gps: {
      latitude: 37.511499,
      longitude: 127.098247,
    },
    stallCount: 6,
  },
  {
    id: 6,
    region: "서울",
    name: "송파 소피텔 엠배세더",
    locationId: "songpasupercharger",
    address: {
      street: "서울특별시 잠실로 209",
      locationDetail: "지하 4층",
      city: "서울",
      state: null,
    },
    gps: {
      latitude: 37.513534,
      longitude: 127.106174,
    },
    stallCount: 6,
    freeParkingChargeTime: 25,
    chargingSpeed: "250W",
  },
  {
    id: 7,
    region: "서울",
    name: "용산 그랜드 하얏트 호텔",
    freeParkingChargeTime: 15,
    chargingSpeed: "250W",
    locationId: "seoulyongsansupercharger",
    address: {
      street: "용산구 소월로 322",
      locationDetail: "지하 2층",
      city: "서울",
      state: null,
    },
    gps: {
      latitude: 37.539341,
      longitude: 126.997137,
    },
    stallCount: 5,
  },
  {
    id: 8,
    region: "서울",
    name: "종각 그랑서울",
    locationId: "seouljongnosupercharger",
    freeParkingChargeTime: 10,
    chargingSpeed: "120W",
    DcCount: 3,
    address: {
      street: "서울특별시 종로구 종로 33",
      city: "서울",
      locationDetail: "지하 6층",
      state: null,
    },
    gps: {
      latitude: 37.570693,
      longitude: 126.981511,
    },
    stallCount: 6,
  },
  {
    id: 22,
    region: "서울",
    name: "성수 D타워",
    locationId: "seongsudtowerq322",
    freeParkingChargeTime: 20,
    chargingSpeed: "250W",
    DcCount: 3,
    address: {
      street: "왕십리로 83-21",
      city: "서울",
      state: null,
      locationDetail: "지하 5층",
    },
    gps: {
      latitude: 37.544332,
      longitude: 127.04416,
    },
    stallCount: 9,
  },
  {
    id: 10,
    region: "서울",
    name: "테헤란 강남 N타워",
    locationId: "seoulteheransupercharger",
    freeParkingChargeTime: 0,
    chargingSpeed: "120W",
    address: {
      street: "서울특별시 강남구 테헤란로 129",
      city: "서울",
      locationDetail: "지하 4층",
      state: null,
    },
    gps: {
      latitude: 37.499873,
      longitude: 127.032354,
    },
    stallCount: 4,
  },
  {
    id: 11,
    region: "서울",
    name: "역삼 센터필드",
    locationId: "seolleungsupercharger",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    DcCount: 12,
    address: {
      street: "테헤란로 231",
      city: "서울",
      state: null,
      locationDetail: "지하 5층",
    },
    gps: {
      latitude: 37.503216,
      longitude: 127.04162,
    },
    stallCount: 6,
  },
  {
    id: 12,
    region: "서울",
    locationId: "seongdongsupercharger",
    name: "왕십리 비트플렉스",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    DcCount: 3,
    address: {
      street: "성동구 왕십리광장로 17",
      city: "서울",
      state: null,
      locationDetail: "지하 5층",
    },
    gps: {
      latitude: 37.5604,
      longitude: 127.0386,
    },
    stallCount: 6,
  },
  {
    id: 13,
    region: "서울",
    name: "구로 넷마블",
    locationId: "gurosupercharger",
    freeParkingChargeTime: 15,
    chargingSpeed: "250W",
    DcCount: 3,
    address: {
      street: "디지털로26길 38",
      city: "서울",
      state: null,
      locationDetail: "지하 4층",
    },
    gps: {
      latitude: 37.47984,
      longitude: 126.8953,
    },
    stallCount: 9,
  },
  {
    id: 14,
    region: "서울",
    name: "서초 쌍용 플레티넘",
    locationId: "seoulseochosupercharger",
    address: {
      street: "서초중앙로, 서초구 18",
      city: "서울",
      state: null,
      locationDetail: "지하 2층",
    },
    gps: {
      latitude: 37.48406,
      longitude: 127.01732,
    },
    stallCount: 6,
    freeParkingChargeTime: 5,
    chargingSpeed: "250W",
    DcCount: 8,
  },
  {
    id: 15,
    region: "서울",
    name: "강북 파라스파라",
    locationId: "gangbuksupercharger",
    address: {
      locationDetail: "지상 1,2층",
      street: "삼양 689",
      city: "서울",
      state: null,
    },
    gps: {
      latitude: 37.66375,
      longitude: 127.00871,
    },
    stallCount: 6,
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
  },
  {
    id: 16,
    locationId: "gangnamsinsasupercharger",
    region: "서울",
    name: "신사 스퀘어",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    address: {
      street: "강남대로 652 신사 스퀘어",
      city: "서울",
      locationDetail: "지하 4층",
      state: null,
    },
    gps: {
      latitude: 37.519982,
      longitude: 127.018977,
    },
    stallCount: 3,
  },
  {
    id: 17,
    region: "서울",
    name: "청량리 롯데백화점",
    locationId: "seoulcheongnyangrisupercharger",
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
    DcCount: 6,
    address: {
      street: "서울특별시 왕산로 214",
      city: "서울",
      state: null,
      locationDetail: "M5F",
    },
    gps: {
      latitude: 37.579635,
      longitude: 127.046048,
    },
    stallCount: 3,
  },
  {
    id: 18,
    region: "서울",
    name: "여의도 CCMM",
    locationId: "seoulccmmsupercharger",
    freeParkingChargeTime: 10,
    chargingSpeed: "250W",
    address: {
      street: "Seoul 여의공원로 101",
      locationDetail: "지하 6층",
      city: "서울",
      state: null,
    },
    gps: {
      latitude: 37.529396,
      longitude: 126.924755,
    },
    stallCount: 6,
  },
  {
    id: 19,
    region: "서울",
    name: "수유 에피소드 수유838",
    locationId: "suyusupercharger",
    freeParkingChargeTime: 10,
    chargingSpeed: "250W",
    DcCount: 2,
    address: {
      street: "도봉로 315",
      city: "서울",
      state: "Gangbuk",
      locationDetail: "지하 4층",
    },
    gps: {
      latitude: 37.637192,
      longitude: 127.023378,
    },
    stallCount: 6,
  },
  {
    id: 20,
    region: "서울",
    name: "신림 타임스트림",
    locationId: "seoultimesstreamsupercharger",
    freeParkingChargeTime: 20,
    chargingSpeed: "250W",
    DcCount: 2,
    address: {
      street: "신림로 330",
      city: "서울",
      locationDetail: "지하 6층",
      state: null,
    },
    gps: {
      latitude: 37.4838519,
      longitude: 126.930193,
    },
    stallCount: 6,
  },
  {
    id: 21,
    region: "서울",
    locationId: "geumcheonsupercharger",
    name: "금천 마리오아울렛",
    address: {
      street: "디지털로9 23 마리오 아울렛",
      city: "서울",
      state: null,
      locationDetail: "1관 지하 3층",
    },
    gps: {
      latitude: 37.478,
      longitude: 126.8872,
    },
    stallCount: 9,
    freeParkingChargeTime: 30,
    chargingSpeed: "250W",
  },
]

export { superChargerInfo }
