<script setup>
const branchTickets = [
  {
    branchName: "Карагандинская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 132,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Район Алихан Бокейхана",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 15,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Балхаш",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 5,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Сарань",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 15,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Шахтинск",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 23,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Темир-Тау",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 22,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Абайский район Караганда",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 21,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Район Қазыбек би",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 31,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Павлодарская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 91,
      DELAYED: 0,
      ALARM: 1,
    },
    children: [
      {
        branchName: "Управление администрирования НДС в рамках ЕАЭС",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Аксу",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 7,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Экибастуз",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 56,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Павлодар",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 28,
          DELAYED: 0,
          ALARM: 1,
        },
      },
    ],
  },
  {
    branchName: "Акмолинская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 36,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Бурабайский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Кокшетау",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 23,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Косши",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Степногорску",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 9,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Целиноградский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "г. Шымкент",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 21,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Енбекшинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 3,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Абайский район Шымкент",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 7,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Аль-Фарабийский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Каратауский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 6,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Район Туран",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 3,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Атырауская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 7,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Курмангазинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Индерский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Махамбетский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Жылойский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Атырау",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 7,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Костанайская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 7,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Костанайский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Костанай",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 3,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Лисаковск",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Рудный",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "г.Алматы",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 136,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Ауэзовский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 20,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Бостандыкский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 23,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Жетысуский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 10,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Алмалинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 33,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Турксибский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 19,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Медеуский  район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 13,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Алатауский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 13,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Наурызбайский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 5,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Алмалы ЦТО",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Алматы ЦТО",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Жетысу ЦТО",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Туркестанская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 1,
      MISSED: 0,
      COMPLETED: 7,
      DELAYED: 0,
      ALARM: 1,
    },
    children: [
      {
        branchName: "Ордабасинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Казгуртский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 1,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 1,
        },
      },
      {
        branchName: "Толебийский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 1,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Жетысайский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Сайрамский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 3,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Сарыагашский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Тюлькубасский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 1,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Туркестан",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Сауранский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Абайская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 8,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "г. Семей",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 8,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Жетысуйская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 15,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "г.Талдыкорган",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 15,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Алматинская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 124,
      DELAYED: 0,
      ALARM: 1,
    },
    children: [
      {
        branchName: "г. Капчагай",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Жамбылский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 12,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Илийский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 17,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Карасайский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 33,
          DELAYED: 0,
          ALARM: 1,
        },
      },
      {
        branchName: "Талгарский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 25,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Енбекшиказахский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 37,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Улытауская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 12,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "г.Жезказган",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 12,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Актюбинская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 6,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Мугалжарский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Актобе",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 6,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Восточно-Казахстанская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 19,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "г.Усть-Каменогорск",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 19,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Жамбылская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 27,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Кордайский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 5,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Шуский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Тараз",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 22,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Западно-Казахстанская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 7,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Бурлинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Уральск",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 7,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "г.Астана",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 163,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "ЦТО Астана",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Алматинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 59,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Байконурский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 26,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Есильский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Район Нұра",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 19,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Сарыаркинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 59,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "ТП Ауежай - Астана",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Кызылординская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 0,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "г. Кызылорда",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Шиелийский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Мангистауская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 25,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "г. Жанаозен",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 0,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Мунайлинский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 20,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г. Актау",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 4,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "Бейнеуский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 1,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
  {
    branchName: "Северо-Казахстанская область",
    stateTickets: {
      INSERVICE: 0,
      NEW: 0,
      MISSED: 0,
      COMPLETED: 11,
      DELAYED: 0,
      ALARM: 0,
    },
    children: [
      {
        branchName: "Кызылжарский район",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 2,
          DELAYED: 0,
          ALARM: 0,
        },
      },
      {
        branchName: "г.Петропавловск",
        stateTickets: {
          INSERVICE: 0,
          NEW: 0,
          MISSED: 0,
          COMPLETED: 9,
          DELAYED: 0,
          ALARM: 0,
        },
      },
    ],
  },
];

const series = [
  {
    name: "Обслуженные",
    data: branchTickets.map((item) => item.stateTickets.COMPLETED),
  },
  {
    name: "Обслуживающиеся",
    data: branchTickets.map((item) => item.stateTickets.INSERVICE),
  },
  {
    name: "Ожидающие",
    data: branchTickets.map((item) => item.stateTickets.NEW),
  },
  {
    name: "Не подошедшие",
    data: branchTickets.map((item) => item.stateTickets.MISSED),
  },
  {
    name: "Alarm",
    data: branchTickets.map((item) => item.stateTickets.ALARM),
  },
];
const chartOptions = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
    events: {
    dataPointSelection: (event, chartContext, config) => {
      console.log("chart",chartContext, config);
    }
  }
    // events: {
    //   dataPointSelection: function(event, chartContext, config) {
    //     console.log(event,chartContext,config)
    //   },
    //   legendClick: function(chartContext, seriesIndex, config) {
    //     console.log(seriesIndex,chartContext,config)
    //   }
    // },
  },

  colors: ["#2ecc71", "#3498db", "#f39c12", "#d35400", "#c0392b"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "top",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: "string",
    categories: branchTickets.map((e) => e.branchName),

  },
  legend: {
    position: "top",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
};

const handleBarClick = (event, chartContext, config) => {
    console.log("Bar clicked!", event, chartContext, config);
 
  // Add your custom logic here for handling bar clicks
};
const handleXClick = (event, chartContext, config)=>{
    console.log(event, chartContext, config);
}
// const selectScrollHandler = (e,charts,opts)=>{
//     console.log(e,charts,opts)
// }
</script>

<template>
  <div class="amount-container">
    <div class="amount-title p-4">
      <h3>Количественные показатели</h3>
    </div>
    <div id="chart">
      <apexchart
        type="bar"
        height="500"
        :options="chartOptions"
        :series="series"
       
        @dataPointSelection = "handleBarClick"
        @xAxisLabelClick = "handleXClick"
      ></apexchart>
    </div>
    <div class="tickets"></div>
  </div>
</template>

<style lang="scss" scoped>
#chart {
  width: 100%;
}
</style>
