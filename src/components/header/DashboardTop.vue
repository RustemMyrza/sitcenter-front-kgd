
<script setup>
// import { ref } from "vue";
// @ is an alias to /src

import BlockElement from "@/components/blocks/dashboard/top/BlockElement.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

// const ServerModalBlock = ref({
//   component: ServerModal,
//   serverModalInfo: {
//     title:"asds",
//     text: "Number of servers",
//     number: 15,
//     color: "green",
//     icon: "fas fa-server",
//     // modalWidth:"1000px"
//   },
//   rows: [
//     {
//       "id": 1,
//       "F_ID": "3001",
//       "F_NAME": "Карагандинская область",
//       "F_IP_ADDRESS": "10",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 46,
//           "F_ID": "3019",
//           "F_NAME": "Район Алихан Бокейхана",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 48,
//           "F_ID": "3025",
//           "F_NAME": "г.Балхаш",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 59,
//           "F_ID": "3010",
//           "F_NAME": "г.Сарань",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 62,
//           "F_ID": "3014",
//           "F_NAME": "г.Шахтинск",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 70,
//           "F_ID": "3012",
//           "F_NAME": "г.Темир-Тау",
//           "F_IP_ADDRESS": "10.60.51.40",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 71,
//           "F_ID": "3002",
//           "F_NAME": "Абайский район Караганда",
//           "F_IP_ADDRESS": "10.60.8.53",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 72,
//           "F_ID": "3020",
//           "F_NAME": "Район Қазыбек би",
//           "F_IP_ADDRESS": "10.60.80.96",
//           "F_PARENT_ID": "3001",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 82,
//       "F_ID": "4501",
//       "F_NAME": "Павлодарская область",
//       "F_IP_ADDRESS": "11",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 30,
//           "F_ID": "4599",
//           "F_NAME": "Управление администрирования НДС в рамках ЕАЭС",
//           "F_IP_ADDRESS": "10.208.77.15",
//           "F_PARENT_ID": "4501",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 45,
//           "F_ID": "4514",
//           "F_NAME": "г. Аксу",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "4501",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 51,
//           "F_ID": "4516",
//           "F_NAME": "г. Экибастуз",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "4501",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 57,
//           "F_ID": "4515",
//           "F_NAME": "г. Павлодар",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "4501",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 83,
//       "F_ID": "301",
//       "F_NAME": "Акмолинская область",
//       "F_IP_ADDRESS": "12",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 38,
//           "F_ID": "327",
//           "F_NAME": "г.Косши",
//           "F_IP_ADDRESS": "10.32.108.5",
//           "F_PARENT_ID": "301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 50,
//           "F_ID": "324",
//           "F_NAME": "Бурабайский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 53,
//           "F_ID": "326",
//           "F_NAME": "г.Кокшетау",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 63,
//           "F_ID": "316",
//           "F_NAME": "г. Степногорску",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 65,
//           "F_ID": "312",
//           "F_NAME": "Целиноградский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "301",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 84,
//       "F_ID": "5901",
//       "F_NAME": "г. Шымкент",
//       "F_IP_ADDRESS": "13",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 3,
//           "F_ID": "5905",
//           "F_NAME": "Енбекшинский район",
//           "F_IP_ADDRESS": "10.116.100.12",
//           "F_PARENT_ID": "5901",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 12,
//           "F_ID": "5904",
//           "F_NAME": "Абайский район Шымкент",
//           "F_IP_ADDRESS": "10.116.94.5",
//           "F_PARENT_ID": "5901",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 13,
//           "F_ID": "5903",
//           "F_NAME": "Аль-Фарабийский район",
//           "F_IP_ADDRESS": "10.116.96.223",
//           "F_PARENT_ID": "5901",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 31,
//           "F_ID": "5906",
//           "F_NAME": "Каратауский район",
//           "F_IP_ADDRESS": "10.247.111.12",
//           "F_PARENT_ID": "5901",
//           "ONN": 0,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 85,
//       "F_ID": "1501",
//       "F_NAME": "Атырауская область",
//       "F_IP_ADDRESS": "14",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 33,
//           "F_ID": "1503",
//           "F_NAME": "Курмангазинский район",
//           "F_IP_ADDRESS": "10.30.15.1",
//           "F_PARENT_ID": "1501",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 34,
//           "F_ID": "1504",
//           "F_NAME": "Индерский район",
//           "F_IP_ADDRESS": "10.30.16.60",
//           "F_PARENT_ID": "1501",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 35,
//           "F_ID": "1508",
//           "F_NAME": "Махамбетский район",
//           "F_IP_ADDRESS": "10.30.32.45",
//           "F_PARENT_ID": "1501",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 36,
//           "F_ID": "1509",
//           "F_NAME": "Жылойский район",
//           "F_IP_ADDRESS": "10.30.39.1",
//           "F_PARENT_ID": "1501",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 37,
//           "F_ID": "1510",
//           "F_NAME": "г. Атырау",
//           "F_IP_ADDRESS": "10.30.40.208",
//           "F_PARENT_ID": "1501",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 86,
//       "F_ID": "3901",
//       "F_NAME": "Костанайская область",
//       "F_IP_ADDRESS": "15",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 74,
//           "F_ID": "3908",
//           "F_NAME": "Костанайский район",
//           "F_IP_ADDRESS": "10.78.32.8",
//           "F_PARENT_ID": "3901",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 75,
//           "F_ID": "3917",
//           "F_NAME": "г.Костанай",
//           "F_IP_ADDRESS": "10.78.69.70",
//           "F_PARENT_ID": "3901",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 76,
//           "F_ID": "3918",
//           "F_NAME": "г.Лисаковск",
//           "F_IP_ADDRESS": "10.78.75.42",
//           "F_PARENT_ID": "3901",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 77,
//           "F_ID": "3919",
//           "F_NAME": "г.Рудный",
//           "F_IP_ADDRESS": "10.78.78.163",
//           "F_PARENT_ID": "3901",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 87,
//       "F_ID": "6001",
//       "F_NAME": "г.Алматы",
//       "F_IP_ADDRESS": "16",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 16,
//           "F_ID": "6003",
//           "F_NAME": "Ауэзовский район",
//           "F_IP_ADDRESS": "10.120.15.202",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 17,
//           "F_ID": "6004",
//           "F_NAME": "Бостандыкский район",
//           "F_IP_ADDRESS": "10.120.16.18",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 18,
//           "F_ID": "6005",
//           "F_NAME": "Жетысуский район",
//           "F_IP_ADDRESS": "10.120.21.154",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 19,
//           "F_ID": "6007",
//           "F_NAME": "Алмалинский район",
//           "F_IP_ADDRESS": "10.120.28.250",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 20,
//           "F_ID": "6008",
//           "F_NAME": "Турксибский район",
//           "F_IP_ADDRESS": "10.120.34.197",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 21,
//           "F_ID": "6009",
//           "F_NAME": "Медеуский  район",
//           "F_IP_ADDRESS": "10.120.38.56",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 22,
//           "F_ID": "6010",
//           "F_NAME": "Алатауский район",
//           "F_IP_ADDRESS": "10.120.48.206",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 23,
//           "F_ID": "6011",
//           "F_NAME": "Наурызбайский район",
//           "F_IP_ADDRESS": "10.17.104.90",
//           "F_PARENT_ID": "6001",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 24,
//           "F_ID": "64006",
//           "F_NAME": "Алмалы ЦТО",
//           "F_IP_ADDRESS": "10.17.92.100",
//           "F_PARENT_ID": "6001",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 91,
//           "F_ID": "64008",
//           "F_NAME": "Алматы ЦТО",
//           "F_IP_ADDRESS": "192.168.83.220",
//           "F_PARENT_ID": "6001",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 92,
//           "F_ID": "64007",
//           "F_NAME": "Жетысу ЦТО",
//           "F_IP_ADDRESS": "192.168.92.147",
//           "F_PARENT_ID": "6001",
//           "ONN": 0,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 88,
//       "F_ID": "5801",
//       "F_NAME": "Туркестанская область",
//       "F_IP_ADDRESS": "17",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 4,
//           "F_ID": "5803",
//           "F_NAME": "Ордабасинский район",
//           "F_IP_ADDRESS": "10.116.12.5",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 5,
//           "F_ID": "5808",
//           "F_NAME": "Казгуртский район",
//           "F_IP_ADDRESS": "10.116.32.5",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 6,
//           "F_ID": "5809",
//           "F_NAME": "Толебийский район",
//           "F_IP_ADDRESS": "10.116.37.99",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 7,
//           "F_ID": "5826",
//           "F_NAME": "Жетысайский район",
//           "F_IP_ADDRESS": "10.116.40.3",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 8,
//           "F_ID": "5811",
//           "F_NAME": "Сайрамский район",
//           "F_IP_ADDRESS": "10.116.44.11",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 9,
//           "F_ID": "5812",
//           "F_NAME": "Сарыагашский район",
//           "F_IP_ADDRESS": "10.116.48.16",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 10,
//           "F_ID": "5815",
//           "F_NAME": "Тюлькубасский район",
//           "F_IP_ADDRESS": "10.116.60.20",
//           "F_PARENT_ID": "5801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 11,
//           "F_ID": "5820",
//           "F_NAME": "г.Туркестан",
//           "F_IP_ADDRESS": "10.116.83.201",
//           "F_PARENT_ID": "5801",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 32,
//           "F_ID": "5828",
//           "F_NAME": "Сауранский район",
//           "F_IP_ADDRESS": "10.247.132.132",
//           "F_PARENT_ID": "5801",
//           "ONN": 0,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 89,
//       "F_ID": "7101",
//       "F_NAME": "Абайская область",
//       "F_IP_ADDRESS": "18",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 61,
//           "F_ID": "7111",
//           "F_NAME": "г. Семей",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "7101",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 90,
//       "F_ID": "7001",
//       "F_NAME": "Жетысуйская область",
//       "F_IP_ADDRESS": "19",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 64,
//           "F_ID": "7010",
//           "F_NAME": "г.Талдыкорган",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "7001",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 93,
//       "F_ID": "901",
//       "F_NAME": "Алматинская область",
//       "F_IP_ADDRESS": "2",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 2,
//           "F_ID": "913",
//           "F_NAME": "г. Капчагай",
//           "F_IP_ADDRESS": "10.0.136.40",
//           "F_PARENT_ID": "901",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 25,
//           "F_ID": "903",
//           "F_NAME": "Жамбылский район",
//           "F_IP_ADDRESS": "10.18.12.10",
//           "F_PARENT_ID": "901",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 26,
//           "F_ID": "904",
//           "F_NAME": "Илийский район",
//           "F_IP_ADDRESS": "10.18.16.14",
//           "F_PARENT_ID": "901",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 27,
//           "F_ID": "905",
//           "F_NAME": "Карасайский район",
//           "F_IP_ADDRESS": "10.18.20.20",
//           "F_PARENT_ID": "901",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 28,
//           "F_ID": "909",
//           "F_NAME": "Талгарский район",
//           "F_IP_ADDRESS": "10.18.36.220",
//           "F_PARENT_ID": "901",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 29,
//           "F_ID": "912",
//           "F_NAME": "Енбекшиказахский район",
//           "F_IP_ADDRESS": "10.18.48.230",
//           "F_PARENT_ID": "901",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 94,
//       "F_ID": "7201",
//       "F_NAME": "Улытауская область",
//       "F_IP_ADDRESS": "20",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 69,
//           "F_ID": "7204",
//           "F_NAME": "г.Жезказган",
//           "F_IP_ADDRESS": "10.60.104.220",
//           "F_PARENT_ID": "7201",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 95,
//       "F_ID": "601",
//       "F_NAME": "Актюбинская область",
//       "F_IP_ADDRESS": "3",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 14,
//           "F_ID": "612",
//           "F_NAME": "Мугалжарский район",
//           "F_IP_ADDRESS": "10.12.49.10",
//           "F_PARENT_ID": "601",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 15,
//           "F_ID": "618",
//           "F_NAME": "г. Актобе",
//           "F_IP_ADDRESS": "10.12.74.40",
//           "F_PARENT_ID": "601",
//           "ONN": 0,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 96,
//       "F_ID": "1801",
//       "F_NAME": "Восточно-Казахстанская область",
//       "F_IP_ADDRESS": "4",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 66,
//           "F_ID": "1816",
//           "F_NAME": "г.Усть-Каменогорск",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "1801",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 97,
//       "F_ID": "2101",
//       "F_NAME": "Жамбылская область",
//       "F_IP_ADDRESS": "5",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 39,
//           "F_ID": "2104",
//           "F_NAME": "Кордайский район",
//           "F_IP_ADDRESS": "10.42.16.22",
//           "F_PARENT_ID": "2101",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 40,
//           "F_ID": "2111",
//           "F_NAME": "Шуский район",
//           "F_IP_ADDRESS": "10.42.47.10",
//           "F_PARENT_ID": "2101",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 41,
//           "F_ID": "2115",
//           "F_NAME": "г.Тараз",
//           "F_IP_ADDRESS": "10.42.60.10",
//           "F_PARENT_ID": "2101",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 98,
//       "F_ID": "2701",
//       "F_NAME": "Западно-Казахстанская область",
//       "F_IP_ADDRESS": "6",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 42,
//           "F_ID": "2703",
//           "F_NAME": "Бурлинский район",
//           "F_IP_ADDRESS": "10.54.15.71",
//           "F_PARENT_ID": "2701",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 43,
//           "F_ID": "2718",
//           "F_NAME": "г. Уральск",
//           "F_IP_ADDRESS": "10.54.72.134",
//           "F_PARENT_ID": "2701",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 99,
//       "F_ID": "6201",
//       "F_NAME": "г.Астана",
//       "F_IP_ADDRESS": "6200",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 44,
//           "F_ID": "64004",
//           "F_NAME": "ЦТО Астана",
//           "F_IP_ADDRESS": "10.59.241.5",
//           "F_PARENT_ID": "6201",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 47,
//           "F_ID": "6202",
//           "F_NAME": "Алматинский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "6201",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 49,
//           "F_ID": "6207",
//           "F_NAME": "Байконурский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "6201",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 52,
//           "F_ID": "6205",
//           "F_NAME": "Есильский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "6201",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 56,
//           "F_ID": "6208",
//           "F_NAME": "Район Нұра",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "6201",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 60,
//           "F_ID": "6203",
//           "F_NAME": "Сарыаркинский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "6201",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 68,
//           "F_ID": "982003",
//           "F_NAME": "ТП Ауежай - Астана",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "6201",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 100,
//       "F_ID": "3301",
//       "F_NAME": "Кызылординская область",
//       "F_IP_ADDRESS": "7",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 54,
//           "F_ID": "3310",
//           "F_NAME": "г. Кызылорда",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "3301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 73,
//           "F_ID": "3308",
//           "F_NAME": "Шиелийский район",
//           "F_IP_ADDRESS": "10.66.35.101",
//           "F_PARENT_ID": "3301",
//           "ONN": 0,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 101,
//       "F_ID": "4301",
//       "F_NAME": "Мангистауская область",
//       "F_IP_ADDRESS": "8",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 78,
//           "F_ID": "4307",
//           "F_NAME": "г. Жанаозен",
//           "F_IP_ADDRESS": "10.86.29.155",
//           "F_PARENT_ID": "4301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 79,
//           "F_ID": "4308",
//           "F_NAME": "Мунайлинский район",
//           "F_IP_ADDRESS": "10.86.33.102",
//           "F_PARENT_ID": "4301",
//           "ONN": 0,
//           "children": []
//         },
//         {
//           "id": 80,
//           "F_ID": "4306",
//           "F_NAME": "г. Актау",
//           "F_IP_ADDRESS": "10.86.36.50",
//           "F_PARENT_ID": "4301",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 81,
//           "F_ID": "4302",
//           "F_NAME": "Бейнеуский район",
//           "F_IP_ADDRESS": "10.86.9.200",
//           "F_PARENT_ID": "4301",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": 102,
//       "F_ID": "4801",
//       "F_NAME": "Северо-Казахстанская область",
//       "F_IP_ADDRESS": "9",
//       "F_PARENT_ID": "101",
//       "ONN": 0,
//       "children": [
//         {
//           "id": 55,
//           "F_ID": "4802",
//           "F_NAME": "Кызылжарский район",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "4801",
//           "ONN": 1,
//           "children": []
//         },
//         {
//           "id": 58,
//           "F_ID": "4814",
//           "F_NAME": "г.Петропавловск",
//           "F_IP_ADDRESS": "10.59.64.50",
//           "F_PARENT_ID": "4801",
//           "ONN": 1,
//           "children": []
//         }
//       ]
//     }
//   ]
// });

// const markBlock = ref({
//   component: ChartComponent,
//   markBlockInfo: {
//     text: "Number of servers",
//     number: 545,
//     color: "red",
//     icon: "fas fa-vote-yea",
//     title: "asdaw",
//   },
//   markBlockChart: {

//     series: [44, 55, 41, 17, 15],
//     options: {
//       chart: {
//         type: "donut",
//       },
//       responsive: [
//         {
//           breakpoint: 280,
//           options: {
//             chart: {
//               width: 100,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   },
// });

// const avgWait = ref({
//   component: ChartComponent,
//   avgWaitInfo: {
//     text: "Number of servers",
//     number: 15,
//     color: "green",
//     icon: "fas fa-user-clock",
//     title: "Average service waiting",
//     // modalWidth:"1000px"
//   },
//   avgWaitChart: {

//     series: [
//       {
//         name: "PRODUCT A",
//         data: [44, 55, 41, 67, 22, 43, 21, 49],
//       },
//       {
//         name: "PRODUCT B",
//         data: [13, 23, 20, 8, 13, 27, 33, 12],
//       },
//       {
//         name: "PRODUCT C",
//         data: [11, 17, 15, 15, 21, 14, 15, 13],
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         stacked: true,
//         stackType: "100%",
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             legend: {
//               position: "bottom",
//               offsetX: -10,
//               offsetY: 0,
//             },
//           },
//         },
//       ],
//       xaxis: {
//         categories: [
//           "2011 Q1",
//           "2011 Q2",
//           "2011 Q3",
//           "2011 Q4",
//           "2012 Q1",
//           "2012 Q2",
//           "2012 Q3",
//           "2012 Q4",
//         ],
//       },
//       fill: {
//         opacity: 1,
//       },
//       legend: {
//         position: "right",
//         offsetX: 0,
//         offsetY: 50,
//       },
//     },
//   },
// });

// const avgServe = ref({
//   component: ChartComponent,
//   avgWaitInfo: {
//     text: "Number of servers",
//     number: 15,
//     color: "green",
//     icon: "fas fa-user-friends",
//     title: "Average serving time",
//     // modalWidth:"1000px"
//   },
//   avgWaitChart: {

//     series: [
//       {
//         name: "PRODUCT A",
//         data: [44, 55, 41, 67, 22, 43, 21, 49],
//       },
//       {
//         name: "PRODUCT B",
//         data: [13, 23, 20, 8, 13, 27, 33, 12],
//       },
//       {
//         name: "PRODUCT C",
//         data: [11, 17, 15, 15, 21, 14, 15, 13],
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         stacked: true,
//         stackType: "100%",
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             legend: {
//               position: "bottom",
//               offsetX: -10,
//               offsetY: 0,
//             },
//           },
//         },
//       ],
//       xaxis: {
//         categories: [
//           "2011 Q1",
//           "2011 Q2",
//           "2011 Q3",
//           "2011 Q4",
//           "2012 Q1",
//           "2012 Q2",
//           "2012 Q3",
//           "2012 Q4",
//         ],
//       },
//       fill: {
//         opacity: 1,
//       },
//       legend: {
//         position: "right",
//         offsetX: 0,
//         offsetY: 50,
//       },
//     },
//   },
// });
const offline = ref(0);

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const serverInfo = ref({
    color: "red",
    icon: "fas fa-server",
    text: "Количество неработающих УГД",
    
    link: "/server",
  });
const rateInfo = ref({
  color: "#10877A",
  icon: "fas fa-vote-yea",
  text: "Средняя оценка",
  number: 31,
  link: "/tickets",
});
const badRate = {
  color: "red",
  icon: "fas fa-exclamation-circle",
  text: "Количество плохих оценок",
  number: 55,
  link: "/tickets?tickets=bad",
};
const maxWaitTime = {
  color: "#F38E1B",
  icon: "fas fa-clock",
  text: "Максимальное время ожидания",
  number: 41,
  link: "/time-dash",
};
const maxServTime = {
  color: "#6C1895",
  icon: "fas fa-people-arrows",
  text: "Максимальное время обслуживания",
  number: 12,
  link: "/time-dash",
};

const fetchData = async () => {
  const result = await axios.get(`http://${host}:${port}/api/v1/tickets/map`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  // console.log(result);
  const total = result.data.data.total;
  const online = result.data.data.onlineServers;
  offline.value = total - online;
  serverInfo.value.number = offline.value;
  rateInfo.value.number = result.data.data.averageRate;
 
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="mainBlocks flex justify-around">
    <div class="serverInfo block w-64">
      <BlockElement :info="serverInfo" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="rateInfo" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="badRate" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="maxWaitTime" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="maxServTime" />
    </div>
  </div>
</template>