import { ISavedSession, ISession, ISavedSessionHeader } from "../types";
import StorageObject = browser.storage.StorageObject;

interface ISessionStorage {
  getList: () => Promise<ISavedSessionHeader[]>;
  create: (session: ISession) => Promise<ISavedSession>;
  get: (sessionId: number) => Promise<ISavedSession | null>;
  update: (
    sessionId: number,
    updater: (session: ISession) => ISession
  ) => Promise<void>;
  delete: (sessionId: number) => Promise<void>;
}

let DEBUG_SESSIONS: ISavedSession[] = [
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          },
          {
            id: 2,
            windowId: 1,
            active: false,
            pinned: true,
            title: "лекарства - Google Sheets",
            url:
              "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
            favIconUrl:
              "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
          },
          {
            id: 325,
            windowId: 1,
            active: false,
            pinned: false,
            title: "судьба ужина по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3132384.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=262"
          },
          {
            id: 296,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Network Dependencies · he-he-org/he-he-2",
            url: "https://github.com/he-he-org/he-he-2/network/dependencies",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 300,
            windowId: 1,
            active: false,
            pinned: false,
            title: "NVD - CVE-2018-3809",
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-3809",
            favIconUrl:
              "https://nvd.nist.gov/App_Themes/Default/Images/favicon.ico"
          },
          {
            id: 277,
            windowId: 1,
            active: false,
            pinned: false,
            title: "(32) Новости",
            url:
              "https://vk.com/feed?z=photo-48872313_456242438%2Fwall-48872313_11365",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 8,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Хорошо прорисованные женщины: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1280049.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 9,
            windowId: 1,
            active: false,
            pinned: false,
            title: 'Живопись из фильма "Титаник": shakko_kitsune - Page 3',
            url: "https://shakko-kitsune.livejournal.com/1278640.html?page=3",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 11,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем круты «Авиньонские девицы» Пикассо? | Шакко | Яндекс Дзен",
            url:
              "https://zen.yandex.ru/media/shakko/chem-kruty-avinonskie-devicy-pikasso-5af6ffb67425f5fcbcde7db7",
            favIconUrl: "https://yastatic.net/zen-logos/files/favicons/icon.svg"
          },
          {
            id: 12,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пабло Руис Пикассо - NeWestMuseum",
            url:
              "http://www.newestmuseum.ru/data/authors/p/picasso_pablo/index.php",
            favIconUrl: "http://www.newestmuseum.ru/favicon.ico"
          },
          {
            id: 13,
            windowId: 1,
            active: false,
            pinned: false,
            title: "кельтский камень - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130586.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 14,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шаламов по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130308.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 15,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Зав. игровым салоном: ksoftware",
            url: "https://ksoftware.livejournal.com/383517.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 16,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Музей истории техники в Ростове. Кайф: ksoftware",
            url: "https://ksoftware.livejournal.com/397536.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 18,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Using achievement stats to estimate sales on steam – Tyler Glaiel – Medium",
            url:
              "https://medium.com/@tglaiel/using-achievement-stats-to-estimate-sales-on-steam-d18b4b635d23",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 20,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Печали: akuklev",
            url: "https://akuklev.livejournal.com/1282902.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 21,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fabrice Bellard - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Fabrice_Bellard",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 22,
            windowId: 1,
            active: false,
            pinned: false,
            title: "открытая запись - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3129950.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 23,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ну вот, maxim умучали и в твиторе. И чего вы его так все не любите,…: sorhed",
            url: "https://sorhed.livejournal.com/619253.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 24,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Почему я удалил все посты в ЖЖ и Твиттере: maxim",
            url: "https://maxim.livejournal.com/531021.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 25,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Заголовок: lambdaterm1",
            url: "https://lambdaterm1.livejournal.com/730.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 26,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-99523325_4368",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 27,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ПитерФотоФест - 2018",
            url: "http://piterfotofest.ru/#rec16367493",
            favIconUrl:
              "https://static.tildacdn.com/tild6234-6131-4436-a561-376363656563/favicon.ico"
          },
          {
            id: 28,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Об Байеса - 2 - Не кинокритик. Не палеонтолог.",
            url: "https://plakhov.livejournal.com/227597.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 29,
            windowId: 1,
            active: false,
            pinned: false,
            title: "другая америка - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3129470.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 30,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Course | DSE200x | edX",
            url:
              "https://courses.edx.org/courses/course-v1:UCSanDiegoX+DSE200x+1T2018/course/",
            favIconUrl:
              "https://prod-edxapp.edx-cdn.org/static/edx.org/images/favicon.9028de6ff678.ico"
          },
          {
            id: 31,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | шо за Шноль",
            url: "https://juan-gandhi.dreamwidth.org/4264984.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 32,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пятое издание «Ководства» Лебедева",
            url: "https://www.artlebedev.ru/izdal/kovodstvo5/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 33,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Measure Performance with the RAIL Model  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/rail",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 34,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Update on Async Rendering - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 35,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Duran - Публикации",
            url:
              "https://www.facebook.com/ArtByDuran/photos/a.2159449564069966.1073741829.318130841535190/2159452500736339/?type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 36,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 37,
            windowId: 1,
            active: false,
            pinned: false,
            title: "афиша клуба",
            url: "https://vk.com/page-63477485_52138480",
            favIconUrl:
              "https://vk.com/images/icons/favicons/fav_pause_2x.ico?6"
          },
          {
            id: 38,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Сергей Мардан",
            url: "https://www.facebook.com/sergeynudol?fref=jewel",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 39,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fredegund: Assassination-obsessed Queen",
            url: "https://www.rejectedprincesses.com/princesses/fredegund",
            favIconUrl:
              "https://www.rejectedprincesses.com/wp-content/uploads/2014/10/rp.png"
          },
          {
            id: 40,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 41,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "ШЛЮХА (рассказ) Приятель позвал в бар смотреть... - Максим Матковский",
            url:
              "https://www.facebook.com/nelson.junior.54379/posts/10155404512656576",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 42,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Великие споры - InLiberty",
            url: "https://www.inliberty.ru/public/spory/",
            favIconUrl: "https://www.inliberty.ru/i/favicon/favicon-32x32.png"
          },
          {
            id: 43,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | TIL from Duolingo",
            url: "https://juan-gandhi.dreamwidth.org/4260093.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 44,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Слои пользы: ksoftware",
            url: "https://ksoftware.livejournal.com/396031.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 45,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пикник «Афиши» 4 августа 2018 — официальный сайт фестиваля",
            url: "https://picnic.afisha.ru/faq",
            favIconUrl:
              "https://picnic.afisha.ru/static/images/A-Picnic-2018-FavIcon-64.png"
          },
          {
            id: 46,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Вышел новый альбом Gorillaz. Послушайте его прямо сейчас — Meduza",
            url:
              "https://meduza.io/shapito/2018/06/29/vyshel-novyy-albom-gorillaz-poslushayte-ego-pryamo-seychas?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-29",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 47,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3578",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 48,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ВИЗУАЛЬНАЯ МЕДИТАЦИЯ",
            url: "https://outcinema.ru/visual-meditation",
            favIconUrl:
              "https://static.tildacdn.com/tild6265-3539-4131-b566-373465353165/favicon.ico"
          },
          {
            id: 49,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Миротворец. Портрет Апхичатпхонга Вирасетакуна - Искусство кино",
            url: "http://kinoart.ru/archive/2010/11/n11-article12",
            favIconUrl: "http://kinoart.ru/favicon.ico"
          },
          {
            id: 50,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall2064116_418",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 51,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Почему в России не надо повышать налоги? Экономический обозреватель Борис Грозовский отвечает заместителю главреда «Медузы» Александру Поливанову — Meduza",
            url:
              "https://meduza.io/feature/2018/06/26/pochemu-v-rossii-ne-nado-povyshat-nalogi?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-26",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 52,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Новая газета»: в Пскове поставили памятники на могилах десантников, погибших летом 2014 года — Meduza",
            url:
              "https://meduza.io/news/2018/06/25/novaya-gazeta-v-pskove-postavili-pamyatniki-na-mogilah-desantnikov-pogibshih-letom-2014-goda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-25",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 53,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Андрей Ерёменко. Генерал против всех",
            url: "https://kartaistorii.ru/eremenko/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 54,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шарик и кисет - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124708.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 55,
            windowId: 1,
            active: false,
            pinned: false,
            title: "мимоза - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124074.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 56,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "» Scoperto il primo dipinto firmato e autografato da Leonardo Da Vinci",
            url:
              "http://www.art-news.it/scoperto-il-primo-dipinto-firmato-e-autografato-da-leonardo-da-vinci/",
            favIconUrl:
              "http://www.art-news.it/wp-content/uploads/Loghetto-Art-News.png"
          },
          {
            id: 57,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3509",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 58,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Сеанс кинотерапии. «Арарат», режиссер Атом Эгоян - Искусство кино",
            url: "http://www.kinoart.ru/archive/2002/12/n12-article7",
            favIconUrl: "http://www.kinoart.ru/favicon.ico"
          },
          {
            id: 59,
            windowId: 1,
            active: false,
            pinned: false,
            title: "panda-grammar - npm",
            url: "https://www.npmjs.com/package/panda-grammar",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 60,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-3818033_17029",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 61,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как приукрашивали портреты маслом после распространения фотографии: shakko_kitsune - Page 2",
            url: "https://shakko-kitsune.livejournal.com/1268839.html?page=2",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 62,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Насильник, грабитель, поп-звезда: Убит XXXTentacion. Он был самым парадоксальным молодым рэпером Америки — Meduza",
            url:
              "https://meduza.io/feature/2018/06/19/nasilnik-grabitel-pop-zvezda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-19",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 63,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Recursive descent parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Recursive_descent_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 64,
            windowId: 1,
            active: false,
            pinned: false,
            title: "LR parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/LR_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 65,
            windowId: 1,
            active: false,
            pinned: false,
            title: "parsimmon/API.md at master · jneen/parsimmon · GitHub",
            url:
              "https://github.com/jneen/parsimmon/blob/master/API.md#terminology",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 66,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как в России будут повышать пенсионный возраст? И зачем? — Meduza",
            url:
              "https://meduza.io/cards/kak-v-rossii-budut-povyshat-pensionnyy-vozrast-i-zachem",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 67,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Они хотят сделать дестабилизацию обстановки». СБУ показала «переговоры организаторов покушения на Бабченко»: Пытаемся это пересказать — Meduza",
            url:
              "https://meduza.io/feature/2018/06/15/oni-hotyat-sdelat-destabilizatsiyu-obstanovki-sbu-pokazalo-peregovory-organizatorov-pokusheniya-na-babchenko?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-15",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 68,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-112289703_13361",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 69,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-55155418_165878",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 70,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-110501497_16688",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 71,
            windowId: 1,
            active: false,
            pinned: false,
            title: "нет законов - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3119801.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 72,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Official page for Language Server Protocol",
            url: "https://microsoft.github.io/language-server-protocol/",
            favIconUrl:
              "https://microsoft.github.io/language-server-protocol/img/favicon.png"
          },
          {
            id: 73,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            url:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 74,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем целлюлит Рубенса отличается от целлюлита Ван Дейка и целлюлита Йорданса?: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1264148.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 75,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о конкурсах красоты - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3120316.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 76,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Бренда «Евросеть» больше не будет. Чем нам запомнится эта компания — Meduza",
            url:
              "https://meduza.io/slides/legendarnyy-brend-evroset-budet-likvidirovan-chem-nam-zapomnitsya-eta-kompaniya?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-06",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 77,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Abstrakte Kunst Poster bei AllPosters.de",
            url:
              "https://www.allposters.de/-st/Abstrakte-Kunst-Poster_c86168_.htm",
            favIconUrl: "https://www.allposters.de/favicon.ico"
          },
          {
            id: 78,
            windowId: 1,
            active: false,
            pinned: false,
            title: "‎NimbusMind: Meditation & Calm on the App Store",
            url:
              "https://itunes.apple.com/us/app/nimbusmind-meditation-calm/id1278663918?mt=8",
            favIconUrl: "https://itunes.apple.com/favicon.ico"
          },
          {
            id: 79,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Генрих Ягода. Грязная работа",
            url: "https://kartaistorii.ru/yagoda/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 80,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, design systems will replace design jobs — DesignSystems.com",
            url:
              "https://www.designsystems.com/stories/will-design-systems-replace-designers/",
            favIconUrl: "https://www.designsystems.com/favicon-32x32.png"
          },
          {
            id: 81,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как изучать негодяев • Arzamas",
            url: "https://arzamas.academy/radio/announcements/hlevniuk",
            favIconUrl: "https://arzamas.academy/favicon-32x32.png"
          },
          {
            id: 82,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Считают своим моральным долгом потушить пожар»: как добровольные пожарные спасают огромные территории от огня — Такие Дела",
            url: "https://takiedela.ru/news/2018/04/22/firefighters/",
            favIconUrl:
              "https://takiedela.ru/wp-content/themes/takiedela/assets/image/icons/favicon-32x32.png"
          },
          {
            id: 83,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Error Boundaries - React",
            url:
              "https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 84,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - hlaueriksson/jamstack-cms: A JAMstack experiment with a Headless CMS",
            url: "https://github.com/hlaueriksson/jamstack-cms",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 85,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-72326580_646949",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 86,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - Несравненный Эгон Шиле. 100 лет со дня... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215045413584993",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 87,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/arhstoyanie-2018",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 88,
            windowId: 1,
            active: false,
            pinned: false,
            title: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            url: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            favIconUrl: "https://solosale.ru/favicon.ico"
          },
          {
            id: 89,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Гитлер пришел к власти | История | DW | 29.01.2013",
            url:
              "https://www.dw.com/ru/%D0%BA%D0%B0%D0%BA-%D0%B3%D0%B8%D1%82%D0%BB%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D1%88%D0%B5%D0%BB-%D0%BA-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8/a-1581471",
            favIconUrl: "https://www.dw.com/favicon.png"
          },
          {
            id: 90,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Фотограф, которого никто не знал",
            url:
              "https://www.adme.ru/tvorchestvo-fotografy/fotograf-kotorogo-nikto-ne-znal-480205/",
            favIconUrl: "https://www.adme.ru/favicon.ico"
          },
          {
            id: 91,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ФАКУЛЬТЕТЫ ИСКУССТВ - LES",
            url: "https://les.media/articles/584226-fakulbtety-iskusstv",
            favIconUrl: "https://les.media/favicon-32x32.png"
          },
          {
            id: 92,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Александр Введенский — «В ленинградское отделение...»",
            url: "http://slova.org.ru/vvedenskiy/v_leningradskoe_otdelenie/",
            favIconUrl: "http://slova.org.ru/favicon.ico"
          },
          {
            id: 93,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Побочные эффекты осознанности 1. У вас... - Sergey Shalashenko | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=2309388555741540&set=a.328232067190542.95483.100000112538277&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      },
      {
        id: 2,
        focused: false,
        tabs: [
          {
            id: 150,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга: "Омерзительное искусство. Юмор и хоррор шедевров живописи" - Софья Багдасарова. Купить книгу, читать рецензии | ISBN 978-5-04-088717-0 | Лабиринт',
            url: "https://www.labirint.ru/books/630406/",
            favIconUrl: "https://img.labirint.ru/favicon.ico?20130611"
          },
          {
            id: 151,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Артемий Лебедев - Городской дизайн.",
            url:
              "https://www.facebook.com/temalebedev/videos/10156571532046095/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 152,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Режим работы - Глазной диагностический центр №7 (Санкт-Петербург, Моховая 38)",
            url: "http://mohovaya38.ru/rezhim_raboty/",
            favIconUrl: "http://mohovaya38.ru/favicon.ico"
          },
          {
            id: 153,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Чехов А.П. (Author of Скучная история)",
            url:
              "https://www.goodreads.com/author/show/17920932._?from_search=true",
            favIconUrl: "https://www.goodreads.com/favicon.ico"
          },
          {
            id: 154,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Что почитать Чехова?: chto_chitat",
            url: "https://chto-chitat.livejournal.com/4259351.html",
            favIconUrl: "https://www.livejournal.com/favicon.ico?v=2"
          },
          {
            id: 155,
            windowId: 2,
            active: false,
            pinned: false,
            title: "QW Confluence",
            url: "https://qworld.atlassian.net/wiki/spaces/TW/pages/461963265",
            favIconUrl:
              "https://cpfs-cdn.atlassian.com/assets/shared/id-summit/id-summit-aa-favicon.ico"
          },
          {
            id: 156,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Mindful - healthy mind, healthy life",
            url: "https://www.mindful.org/",
            favIconUrl:
              "https://www.mindful.org/wp-content/uploads/mindfl-logo-dark-blue-32x32.jpg"
          },
          {
            id: 157,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Кому на самом деле нужно плацебо: scinquisitor",
            url: "https://scinquisitor.livejournal.com/94919.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 158,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Illusion mindfulness improves cancer survival | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/29/creating-the-illusion-that-mindfulness-improves-the-survival-of-cancer-patients/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 159,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mindfulness research's uninformative control groups | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/23/mindfulness-researchs-huge-problem-with-uninformative-control-groups/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 160,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Нейротеология: scinquisitor",
            url: "https://scinquisitor.livejournal.com/1922.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080"
          },
          {
            id: 161,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Стэнфордский тюремный эксперимент — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%8D%D0%BD%D1%84%D0%BE%D1%80%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D1%80%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82#cite_ref-7",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 162,
            windowId: 2,
            active: false,
            pinned: false,
            title: "The Lifespan of a Lie – Trust Issues – Medium",
            url:
              "https://medium.com/s/trustissues/the-lifespan-of-a-lie-d869212b1f62",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 163,
            windowId: 2,
            active: false,
            pinned: false,
            title: "How I Wait Years to Get My Photos",
            url:
              "https://petapixel.com/2018/06/18/how-i-wait-years-to-get-my-photos/",
            favIconUrl: "https://petapixel.com/favicon.ico"
          },
          {
            id: 164,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "What is the best approach to design state? · Issue #1825 · reduxjs/redux · GitHub",
            url: "https://github.com/reduxjs/redux/issues/1825",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 165,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "10 Tips for Better Redux Architecture – JavaScript Scene – Medium",
            url:
              "https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 166,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Falcor: One Model Everywhere",
            url: "https://netflix.github.io/falcor/",
            favIconUrl:
              "https://netflix.github.io/falcor/images/favicons/favicons-32x32.png"
          },
          {
            id: 167,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Five Tips for Working with Redux in Large Applications",
            url:
              "https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb",
            favIconUrl:
              "https://cdn-images-1.medium.com/fit/c/256/256/1*ljvUZzmjFTZHP4OBrWHRWg.png"
          },
          {
            id: 168,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "reactjs - What is the core difference of redux & reflux in using react based application? - Stack Overflow",
            url:
              "https://stackoverflow.com/questions/36326210/what-is-the-core-difference-of-redux-reflux-in-using-react-based-application",
            favIconUrl:
              "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"
          },
          {
            id: 169,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Митинги против повышения пенсионного возраста — Meduza",
            url:
              "https://meduza.io/video/2018/07/01/protestnye-aktsii-protiv-povysheniya-pensionnogo-vozrasta",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 170,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Сериал «Незнакомцы» от Facebook: реалистично, как «Девочки», смешно, как «Друзья» — Meduza",
            url:
              "https://meduza.io/feature/2018/07/01/serial-neznakomtsy-ot-facebook-realistichno-kak-devochki-smeshno-kak-druzya",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 171,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга Журнал "Искусство кино" №5-6/2018 - купить в книжном интернет-магазине по цене 300 руб | Podpisnie.ru',
            url:
              "https://www.podpisnie.ru/books/zhurnal-iskusstvo-kino-5-6-2018",
            favIconUrl: "https://www.podpisnie.ru/favicon.ico"
          },
          {
            id: 172,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Лена Грачёва - редко что-то шарю, но это всё же хочу... | Facebook",
            url: "https://www.facebook.com/almamorenaya/posts/881811982007203",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 173,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 174,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - А вообще, спасибо безвестному стукачу, из-за... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1328391260577544&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 175,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Stranger Things - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Stranger_Things",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 177,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Creating Library Definitions | Flow",
            url: "https://flow.org/en/docs/libdefs/creation/",
            favIconUrl:
              "https://flow.org/static/favicon.png?t=2018-07-05T22:22:49+00:00"
          },
          {
            id: 178,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "flow-typed/definitions/npm at master · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/tree/master/definitions/npm",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 179,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Roadmap to a v3.0.0 of flow-typed · Issue #1494 · flow-typed/flow-typed · GitHub",
            url: "https://github.com/flow-typed/flow-typed/issues/1494",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 180,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Which interfaces are already written? · Issue #13 · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 181,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Intersection doesn't work for exact object types · Issue #2626 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/2626",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 183,
            windowId: 2,
            active: false,
            pinned: false,
            title: "That's so fetch! - JakeArchibald.com",
            url: "https://jakearchibald.com/2015/thats-so-fetch/",
            favIconUrl: "https://jakearchibald.com/favicon.ico"
          },
          {
            id: 184,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "react-static/static.config.js at master · nozzle/react-static · GitHub",
            url:
              "https://github.com/nozzle/react-static/blob/master/examples/sass/static.config.js",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 185,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "React Static - A progressive static-site framework for React @ OgdenJS - YouTube",
            url: "https://www.youtube.com/watch?v=OqbJ5swVpDQ",
            favIconUrl: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
          },
          {
            id: 187,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Setting up CSS Modules with React and Webpack",
            url: "https://javascriptplayground.com/css-modules-webpack-react/",
            favIconUrl: "https://javascriptplayground.com/favicon.ico"
          },
          {
            id: 188,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - css-modules/css-modules: Documentation about css-modules",
            url: "https://github.com/css-modules/css-modules",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 189,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Ася Федотова",
            url: "https://vk.com/afedotova72",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 190,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Коррекция на множественное тестирование — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 192,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Мандрагора — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%B0#%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%BD%D1%8B%D0%B5_%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 193,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Text Fields · An Introduction to Elm",
            url:
              "https://guide.elm-lang.org/architecture/user_input/text_fields.html",
            favIconUrl: "https://guide.elm-lang.org/gitbook/images/favicon.ico"
          },
          {
            id: 194,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Redux",
            url: "https://redux.js.org/introduction/prior-art",
            favIconUrl: null
          },
          {
            id: 195,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Cycle.js",
            url: "https://cycle.js.org/",
            favIconUrl: null
          },
          {
            id: 196,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - minedeljkovic/redux-elmish: The Elm Architecture in Redux, statically checked using flow",
            url: "https://github.com/minedeljkovic/redux-elmish",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 197,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - brabadu/tanok: Elm Architecture-inspired wrapper for Rx.js+React",
            url: "https://github.com/brabadu/tanok",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 198,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - didierfranc/react-waterfall: React store built on top of the new context API",
            url: "https://github.com/didierfranc/react-waterfall",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 199,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у Apple iPad mini 3 16Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-3-16gb-wi-fi-cellular-0618d196",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 257,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Trade-in и продажа техники в Санкт-Петербурге. REFRESH your tech",
            url: "http://www.refreshyourtech.ru/",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 200,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у iPad mini 4 128Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-4-128gb-lte-0618d172",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 265,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad mini 4 128Gb Wi-Fi в интернет-магазинах — Планшеты — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/product/12859392/offers?local-offers-first=0&how=rorp",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 307,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Apple iPad mini 4 128Gb Wi-Fi Silver",
            url:
              "http://www.pitergsm.ru/e-store/tablets/index.php?ELEMENT_ID=995&r1=&r2=&ymclid=319492699825359651400004",
            favIconUrl: "http://www.pitergsm.ru/favicon.ico"
          },
          {
            id: 303,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319489462975119837300000",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 302,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Apple iPad mini 4 Wi-Fi 128GB (серебристый) характеристики, техническое описание планшета - интернет-магазин Связной",
            url:
              "https://www.svyaznoy.ru/catalog/notebook/7063/2752367/specs#mainContent",
            favIconUrl: "https://www.svyaznoy.ru/favicons/favicon-32x32.png?v=1"
          },
          {
            id: 301,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Планшеты Apple iPad – купить iPad по отличной цене",
            url: "https://www.tehnikalux.ru/spb/category/apple/ipad/",
            favIconUrl: "https://www.tehnikalux.ru/favicon.ico"
          },
          {
            id: 275,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319166515579151714600001",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 245,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=12859395&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 246,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 261,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad (2018) 32Gb Wi-Fi + Cellular — Планшеты — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/30015180?nid=54545&track=fr_compare",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 242,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Compare Apple iPad mini 3 vs. Apple iPad mini 4 - GSMArena.com",
            url:
              "https://www.gsmarena.com/compare.php3?idPhone1=6741&idPhone2=7561",
            favIconUrl: "https://www.gsmarena.com/i/favicon.ico"
          },
          {
            id: 202,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Платформы для сборки ПК - Компьютерные комплектующие",
            url: "https://www.ulmart.ru/catalog/assembly_bases",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 204,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Антон Долин - (Опять странный вопрос) А существует же наверняка...",
            url: "https://www.facebook.com/adolin3/posts/10215523587299037",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 205,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Умер Клод Ланцман — режиссер «Шоа», важнейшего документального фильма про Холокост — Meduza",
            url:
              "https://meduza.io/feature/2018/07/05/umer-klod-lantsman-rezhisser-shoa-vazhneyshego-dokumentalnogo-filma-pro-holokost",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 206,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Sourcetree | Free Git GUI for Mac and Windows",
            url: "https://www.sourcetreeapp.com/",
            favIconUrl:
              "https://www.sourcetreeapp.com/assets/img/favicons/sourcetree/favicon-32x32.png"
          },
          {
            id: 207,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Зои / Родина",
            url: "http://rodinakino.ru/films/soon/2018/06/20/02/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 209,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mirrors Yamaha Y80 Y50 Y75 Y80 V50 V75 Japan Mint 689127704338 | eBay",
            url:
              "https://www.ebay.com/itm/Mirrors-Yamaha-Y80-Y50-Y75-Y80-V50-V75-Japan-Mint/292190471095?epid=9009865854&hash=item4407e8c3b7:g:gmkAAOSwstJZR-Pw#shpCntId",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 213,
            windowId: 2,
            active: false,
            pinned: false,
            title: "windows 10 key | eBay",
            url:
              "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050430.m570.l1311.R1.TR12.TRC2.A0.H0.Xwindows+10+key.TRS0&_nkw=windows+10+key&_sacat=0",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 214,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "WINDOWS 7 Ultimate 32/64 Bit Activation key INSTANT DELIVERY 5MINT+DOWNLOAD Link | eBay",
            url:
              "https://www.ebay.com/itm/WINDOWS-7-Ultimate-32-64-Bit-Activation-key-INSTANT-DELIVERY-5MINT-DOWNLOAD-Link/113020363939?hash=item1a5089e4a3:g:1dkAAOSwSatbCmhX",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 215,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Watch Out For These Dirty Tricks From Discounted Software Resellers",
            url:
              "https://www.howtogeek.com/345412/watch-out-for-these-dirty-tricks-from-discounted-software-resellers/",
            favIconUrl: "https://www.howtogeek.com/public/favicon.ico"
          },
          {
            id: 216,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Microsoft Windows 7 Ultimate 32/64 bit MS Activation Key Full Version Win 7 Ult 885370258851 | eBay",
            url:
              "https://www.ebay.com/itm/Microsoft-Windows-7-Ultimate-32-64-bit-MS-Activation-Key-Full-Version-Win-7-Ult/283006856392?hash=item41e485ecc8:g:QIIAAOSwQN1bIQEb",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 219,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Бизнес-линч за 14.09.2017",
            url:
              "https://www.artlebedev.ru/kovodstvo/business-lynch/2017/09/14/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 220,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Новый органон — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%BE%D0%BD",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 221,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Пылающий",
            url: "http://www.avrora.spb.ru/films/pilayushchiy",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 222,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Список вопросов - дизайн - Miscellaneous - QW Confluence",
            url:
              "https://qworld.atlassian.net/wiki/spaces/TW/pages/347504649/-",
            favIconUrl:
              "https://qworld.atlassian.net/wiki/s/294714687/6452/6b50395b11a0f44cf166d43fcbc12cb41379fd84/10/_/favicon-update.ico"
          },
          {
            id: 223,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Осознанный хип-хоп — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D0%B8%D0%BF-%D1%85%D0%BE%D0%BF",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 225,
            windowId: 2,
            active: false,
            pinned: false,
            title: "И я в моем теплом теле (Введенский) — Wikilivres.ru",
            url:
              "http://wikilivres.ru/%D0%98_%D1%8F_%D0%B2_%D0%BC%D0%BE%D0%B5%D0%BC_%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BC_%D1%82%D0%B5%D0%BB%D0%B5_(%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9)",
            favIconUrl: "http://wikilivres.ru/favicon.ico"
          },
          {
            id: 231,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Киноцентр Родина",
            url: "http://rodinakino.ru/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 251,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Отзывы о торгово-сервисной компании Refresh your tech - Магазины - Санкт-Петербург",
            url:
              "https://spb.zoon.ru/shops/torgovo-servisnaya_kompaniya_refresh_your_tech/reviews/",
            favIconUrl: "https://spb.zoon.ru/favicon-32x32.png"
          },
          {
            id: 298,
            windowId: 2,
            active: false,
            pinned: false,
            title: "serve - npm",
            url: "https://www.npmjs.com/package/serve",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 306,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Смартфон Digma VOX FIRE 4G — Мобильные телефоны — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/1842968920?show-uid=319491229320339655916001&nid=54726&glfilter=7808633%3A1&filter-discount-only=1&context=search",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 352,
            windowId: 2,
            active: false,
            pinned: false,
            title: "tabs.remove() - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/remove",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 349,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Your second extension - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 347,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging",
            favIconUrl: null
          },
          {
            id: 348,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Firefox Is Back. It’s Time to Give It a Try. - The New York Times",
            url:
              "https://www.nytimes.com/2018/06/20/technology/personaltech/firefox-chrome-browser-privacy.html",
            favIconUrl:
              "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico"
          },
          {
            id: 350,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Владик on Twitter: "Короче, один лайк - один факт о реальной травматологии"',
            url: "https://twitter.com/glazzzvlad/status/1019490333158240257",
            favIconUrl: "https://abs.twimg.com/favicons/favicon.ico"
          },
          {
            id: 354,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Introducing FilterBubbler: A WebExtension built using React/Redux – Mozilla Hacks – the Web developer blog",
            url:
              "https://hacks.mozilla.org/2017/06/introducing-filterbubbler-a-webextension-built-using-reactredux/",
            favIconUrl:
              "https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/wp-content/themes/Hax/favicon.ico"
          },
          {
            id: 358,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Close icons - Download 4829 free & premium icons on Iconfinder",
            url: "https://www.iconfinder.com/search/?q=close&price=free",
            favIconUrl:
              "https://cdn0.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa"
          },
          {
            id: 363,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "lusakasa/saka-extension-boilerplate: Opinionated boilerplate for building extensions for Chrome and Firefox",
            url: "https://github.com/lusakasa/saka-extension-boilerplate",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 367,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Создание и вызов событий - Руководство Web-разработчика | MDN",
            url:
              "https://developer.mozilla.org/ru/docs/Web/Guide/Events/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 368,
            windowId: 2,
            active: false,
            pinned: false,
            title: "medium.com | 502: Bad gateway",
            url:
              "https://medium.com/@LeoAref/simple-event-dispatcher-implementation-using-javascript-36d0eadf5a11",
            favIconUrl: "https://medium.com/favicon.ico"
          },
          {
            id: 369,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Manager – Figma",
            url:
              "https://www.figma.com/file/TBPgVBHpN0yEZqoPRjDUXasM/Tabs-Manager?node-id=1%3A5",
            favIconUrl: "https://static.figma.com/app/icon/1/favicon.svg"
          },
          {
            id: 395,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "developit/preact: ⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
            url: "https://github.com/developit/preact",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 397,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Brunch: Commands — Brunch",
            url: "http://brunch.io/docs/commands",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 401,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Plugins — Brunch",
            url: "http://brunch.io/plugins",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 404,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Node Security Platform | Advisory",
            url: "https://nodesecurity.io/advisories/146",
            favIconUrl: "https://nodesecurity.io/img/nodesecurity.png"
          },
          {
            id: 408,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Keeper",
            url: "http://localhost:3333/",
            favIconUrl: null
          },
          {
            id: 415,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Add-ons Manager",
            url: "about:addons",
            favIconUrl:
              "chrome://mozapps/skin/extensions/extensionGeneric-16.svg"
          },
          {
            id: 416,
            windowId: 2,
            active: true,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging#addons",
            favIconUrl: null
          }
        ]
      }
    ],
    header: {
      id: 1,
      date: 552277690511,
      windowsCount: 2,
      tabsCount: 240
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          },
          {
            id: 2,
            windowId: 1,
            active: false,
            pinned: true,
            title: "лекарства - Google Sheets",
            url:
              "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
            favIconUrl:
              "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
          },
          {
            id: 325,
            windowId: 1,
            active: false,
            pinned: false,
            title: "судьба ужина по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3132384.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=262"
          },
          {
            id: 296,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Network Dependencies · he-he-org/he-he-2",
            url: "https://github.com/he-he-org/he-he-2/network/dependencies",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 300,
            windowId: 1,
            active: false,
            pinned: false,
            title: "NVD - CVE-2018-3809",
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-3809",
            favIconUrl:
              "https://nvd.nist.gov/App_Themes/Default/Images/favicon.ico"
          },
          {
            id: 277,
            windowId: 1,
            active: false,
            pinned: false,
            title: "(32) Новости",
            url:
              "https://vk.com/feed?z=photo-48872313_456242438%2Fwall-48872313_11365",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 8,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Хорошо прорисованные женщины: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1280049.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 9,
            windowId: 1,
            active: false,
            pinned: false,
            title: 'Живопись из фильма "Титаник": shakko_kitsune - Page 3',
            url: "https://shakko-kitsune.livejournal.com/1278640.html?page=3",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 11,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем круты «Авиньонские девицы» Пикассо? | Шакко | Яндекс Дзен",
            url:
              "https://zen.yandex.ru/media/shakko/chem-kruty-avinonskie-devicy-pikasso-5af6ffb67425f5fcbcde7db7",
            favIconUrl: "https://yastatic.net/zen-logos/files/favicons/icon.svg"
          },
          {
            id: 12,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пабло Руис Пикассо - NeWestMuseum",
            url:
              "http://www.newestmuseum.ru/data/authors/p/picasso_pablo/index.php",
            favIconUrl: "http://www.newestmuseum.ru/favicon.ico"
          },
          {
            id: 13,
            windowId: 1,
            active: false,
            pinned: false,
            title: "кельтский камень - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130586.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 14,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шаламов по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130308.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 15,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Зав. игровым салоном: ksoftware",
            url: "https://ksoftware.livejournal.com/383517.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 16,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Музей истории техники в Ростове. Кайф: ksoftware",
            url: "https://ksoftware.livejournal.com/397536.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 18,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Using achievement stats to estimate sales on steam – Tyler Glaiel – Medium",
            url:
              "https://medium.com/@tglaiel/using-achievement-stats-to-estimate-sales-on-steam-d18b4b635d23",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 20,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Печали: akuklev",
            url: "https://akuklev.livejournal.com/1282902.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 21,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fabrice Bellard - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Fabrice_Bellard",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 22,
            windowId: 1,
            active: false,
            pinned: false,
            title: "открытая запись - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3129950.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 23,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ну вот, maxim умучали и в твиторе. И чего вы его так все не любите,…: sorhed",
            url: "https://sorhed.livejournal.com/619253.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 24,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Почему я удалил все посты в ЖЖ и Твиттере: maxim",
            url: "https://maxim.livejournal.com/531021.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 25,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Заголовок: lambdaterm1",
            url: "https://lambdaterm1.livejournal.com/730.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 26,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-99523325_4368",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 27,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ПитерФотоФест - 2018",
            url: "http://piterfotofest.ru/#rec16367493",
            favIconUrl:
              "https://static.tildacdn.com/tild6234-6131-4436-a561-376363656563/favicon.ico"
          },
          {
            id: 28,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Об Байеса - 2 - Не кинокритик. Не палеонтолог.",
            url: "https://plakhov.livejournal.com/227597.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 29,
            windowId: 1,
            active: false,
            pinned: false,
            title: "другая америка - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3129470.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 30,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Course | DSE200x | edX",
            url:
              "https://courses.edx.org/courses/course-v1:UCSanDiegoX+DSE200x+1T2018/course/",
            favIconUrl:
              "https://prod-edxapp.edx-cdn.org/static/edx.org/images/favicon.9028de6ff678.ico"
          },
          {
            id: 31,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | шо за Шноль",
            url: "https://juan-gandhi.dreamwidth.org/4264984.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 32,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пятое издание «Ководства» Лебедева",
            url: "https://www.artlebedev.ru/izdal/kovodstvo5/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 33,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Measure Performance with the RAIL Model  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/rail",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 34,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Update on Async Rendering - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 35,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Duran - Публикации",
            url:
              "https://www.facebook.com/ArtByDuran/photos/a.2159449564069966.1073741829.318130841535190/2159452500736339/?type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 36,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 37,
            windowId: 1,
            active: false,
            pinned: false,
            title: "афиша клуба",
            url: "https://vk.com/page-63477485_52138480",
            favIconUrl:
              "https://vk.com/images/icons/favicons/fav_pause_2x.ico?6"
          },
          {
            id: 38,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Сергей Мардан",
            url: "https://www.facebook.com/sergeynudol?fref=jewel",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 39,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fredegund: Assassination-obsessed Queen",
            url: "https://www.rejectedprincesses.com/princesses/fredegund",
            favIconUrl:
              "https://www.rejectedprincesses.com/wp-content/uploads/2014/10/rp.png"
          },
          {
            id: 40,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 41,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "ШЛЮХА (рассказ) Приятель позвал в бар смотреть... - Максим Матковский",
            url:
              "https://www.facebook.com/nelson.junior.54379/posts/10155404512656576",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 42,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Великие споры - InLiberty",
            url: "https://www.inliberty.ru/public/spory/",
            favIconUrl: "https://www.inliberty.ru/i/favicon/favicon-32x32.png"
          },
          {
            id: 43,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | TIL from Duolingo",
            url: "https://juan-gandhi.dreamwidth.org/4260093.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 44,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Слои пользы: ksoftware",
            url: "https://ksoftware.livejournal.com/396031.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 45,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пикник «Афиши» 4 августа 2018 — официальный сайт фестиваля",
            url: "https://picnic.afisha.ru/faq",
            favIconUrl:
              "https://picnic.afisha.ru/static/images/A-Picnic-2018-FavIcon-64.png"
          },
          {
            id: 46,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Вышел новый альбом Gorillaz. Послушайте его прямо сейчас — Meduza",
            url:
              "https://meduza.io/shapito/2018/06/29/vyshel-novyy-albom-gorillaz-poslushayte-ego-pryamo-seychas?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-29",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 47,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3578",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 48,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ВИЗУАЛЬНАЯ МЕДИТАЦИЯ",
            url: "https://outcinema.ru/visual-meditation",
            favIconUrl:
              "https://static.tildacdn.com/tild6265-3539-4131-b566-373465353165/favicon.ico"
          },
          {
            id: 49,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Миротворец. Портрет Апхичатпхонга Вирасетакуна - Искусство кино",
            url: "http://kinoart.ru/archive/2010/11/n11-article12",
            favIconUrl: "http://kinoart.ru/favicon.ico"
          },
          {
            id: 50,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall2064116_418",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 51,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Почему в России не надо повышать налоги? Экономический обозреватель Борис Грозовский отвечает заместителю главреда «Медузы» Александру Поливанову — Meduza",
            url:
              "https://meduza.io/feature/2018/06/26/pochemu-v-rossii-ne-nado-povyshat-nalogi?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-26",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 52,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Новая газета»: в Пскове поставили памятники на могилах десантников, погибших летом 2014 года — Meduza",
            url:
              "https://meduza.io/news/2018/06/25/novaya-gazeta-v-pskove-postavili-pamyatniki-na-mogilah-desantnikov-pogibshih-letom-2014-goda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-25",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 53,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Андрей Ерёменко. Генерал против всех",
            url: "https://kartaistorii.ru/eremenko/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 54,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шарик и кисет - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124708.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 55,
            windowId: 1,
            active: false,
            pinned: false,
            title: "мимоза - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124074.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 56,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "» Scoperto il primo dipinto firmato e autografato da Leonardo Da Vinci",
            url:
              "http://www.art-news.it/scoperto-il-primo-dipinto-firmato-e-autografato-da-leonardo-da-vinci/",
            favIconUrl:
              "http://www.art-news.it/wp-content/uploads/Loghetto-Art-News.png"
          },
          {
            id: 57,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3509",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 58,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Сеанс кинотерапии. «Арарат», режиссер Атом Эгоян - Искусство кино",
            url: "http://www.kinoart.ru/archive/2002/12/n12-article7",
            favIconUrl: "http://www.kinoart.ru/favicon.ico"
          },
          {
            id: 59,
            windowId: 1,
            active: false,
            pinned: false,
            title: "panda-grammar - npm",
            url: "https://www.npmjs.com/package/panda-grammar",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 60,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-3818033_17029",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 61,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как приукрашивали портреты маслом после распространения фотографии: shakko_kitsune - Page 2",
            url: "https://shakko-kitsune.livejournal.com/1268839.html?page=2",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 62,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Насильник, грабитель, поп-звезда: Убит XXXTentacion. Он был самым парадоксальным молодым рэпером Америки — Meduza",
            url:
              "https://meduza.io/feature/2018/06/19/nasilnik-grabitel-pop-zvezda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-19",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 63,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Recursive descent parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Recursive_descent_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 64,
            windowId: 1,
            active: false,
            pinned: false,
            title: "LR parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/LR_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 65,
            windowId: 1,
            active: false,
            pinned: false,
            title: "parsimmon/API.md at master · jneen/parsimmon · GitHub",
            url:
              "https://github.com/jneen/parsimmon/blob/master/API.md#terminology",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 66,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как в России будут повышать пенсионный возраст? И зачем? — Meduza",
            url:
              "https://meduza.io/cards/kak-v-rossii-budut-povyshat-pensionnyy-vozrast-i-zachem",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 67,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Они хотят сделать дестабилизацию обстановки». СБУ показала «переговоры организаторов покушения на Бабченко»: Пытаемся это пересказать — Meduza",
            url:
              "https://meduza.io/feature/2018/06/15/oni-hotyat-sdelat-destabilizatsiyu-obstanovki-sbu-pokazalo-peregovory-organizatorov-pokusheniya-na-babchenko?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-15",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 68,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-112289703_13361",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 69,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-55155418_165878",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 70,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-110501497_16688",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 71,
            windowId: 1,
            active: false,
            pinned: false,
            title: "нет законов - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3119801.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 72,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Official page for Language Server Protocol",
            url: "https://microsoft.github.io/language-server-protocol/",
            favIconUrl:
              "https://microsoft.github.io/language-server-protocol/img/favicon.png"
          },
          {
            id: 73,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            url:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 74,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем целлюлит Рубенса отличается от целлюлита Ван Дейка и целлюлита Йорданса?: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1264148.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 75,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о конкурсах красоты - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3120316.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 76,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Бренда «Евросеть» больше не будет. Чем нам запомнится эта компания — Meduza",
            url:
              "https://meduza.io/slides/legendarnyy-brend-evroset-budet-likvidirovan-chem-nam-zapomnitsya-eta-kompaniya?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-06",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 77,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Abstrakte Kunst Poster bei AllPosters.de",
            url:
              "https://www.allposters.de/-st/Abstrakte-Kunst-Poster_c86168_.htm",
            favIconUrl: "https://www.allposters.de/favicon.ico"
          },
          {
            id: 78,
            windowId: 1,
            active: false,
            pinned: false,
            title: "‎NimbusMind: Meditation & Calm on the App Store",
            url:
              "https://itunes.apple.com/us/app/nimbusmind-meditation-calm/id1278663918?mt=8",
            favIconUrl: "https://itunes.apple.com/favicon.ico"
          },
          {
            id: 79,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Генрих Ягода. Грязная работа",
            url: "https://kartaistorii.ru/yagoda/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 80,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, design systems will replace design jobs — DesignSystems.com",
            url:
              "https://www.designsystems.com/stories/will-design-systems-replace-designers/",
            favIconUrl: "https://www.designsystems.com/favicon-32x32.png"
          },
          {
            id: 81,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как изучать негодяев • Arzamas",
            url: "https://arzamas.academy/radio/announcements/hlevniuk",
            favIconUrl: "https://arzamas.academy/favicon-32x32.png"
          },
          {
            id: 82,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Считают своим моральным долгом потушить пожар»: как добровольные пожарные спасают огромные территории от огня — Такие Дела",
            url: "https://takiedela.ru/news/2018/04/22/firefighters/",
            favIconUrl:
              "https://takiedela.ru/wp-content/themes/takiedela/assets/image/icons/favicon-32x32.png"
          },
          {
            id: 83,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Error Boundaries - React",
            url:
              "https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 84,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - hlaueriksson/jamstack-cms: A JAMstack experiment with a Headless CMS",
            url: "https://github.com/hlaueriksson/jamstack-cms",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 85,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-72326580_646949",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 86,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - Несравненный Эгон Шиле. 100 лет со дня... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215045413584993",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 87,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/arhstoyanie-2018",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 88,
            windowId: 1,
            active: false,
            pinned: false,
            title: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            url: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            favIconUrl: "https://solosale.ru/favicon.ico"
          },
          {
            id: 89,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Гитлер пришел к власти | История | DW | 29.01.2013",
            url:
              "https://www.dw.com/ru/%D0%BA%D0%B0%D0%BA-%D0%B3%D0%B8%D1%82%D0%BB%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D1%88%D0%B5%D0%BB-%D0%BA-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8/a-1581471",
            favIconUrl: "https://www.dw.com/favicon.png"
          },
          {
            id: 90,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Фотограф, которого никто не знал",
            url:
              "https://www.adme.ru/tvorchestvo-fotografy/fotograf-kotorogo-nikto-ne-znal-480205/",
            favIconUrl: "https://www.adme.ru/favicon.ico"
          },
          {
            id: 91,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ФАКУЛЬТЕТЫ ИСКУССТВ - LES",
            url: "https://les.media/articles/584226-fakulbtety-iskusstv",
            favIconUrl: "https://les.media/favicon-32x32.png"
          },
          {
            id: 92,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Александр Введенский — «В ленинградское отделение...»",
            url: "http://slova.org.ru/vvedenskiy/v_leningradskoe_otdelenie/",
            favIconUrl: "http://slova.org.ru/favicon.ico"
          },
          {
            id: 93,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Побочные эффекты осознанности 1. У вас... - Sergey Shalashenko | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=2309388555741540&set=a.328232067190542.95483.100000112538277&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      },
      {
        id: 2,
        focused: false,
        tabs: [
          {
            id: 150,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга: "Омерзительное искусство. Юмор и хоррор шедевров живописи" - Софья Багдасарова. Купить книгу, читать рецензии | ISBN 978-5-04-088717-0 | Лабиринт',
            url: "https://www.labirint.ru/books/630406/",
            favIconUrl: "https://img.labirint.ru/favicon.ico?20130611"
          },
          {
            id: 151,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Артемий Лебедев - Городской дизайн.",
            url:
              "https://www.facebook.com/temalebedev/videos/10156571532046095/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 152,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Режим работы - Глазной диагностический центр №7 (Санкт-Петербург, Моховая 38)",
            url: "http://mohovaya38.ru/rezhim_raboty/",
            favIconUrl: "http://mohovaya38.ru/favicon.ico"
          },
          {
            id: 153,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Чехов А.П. (Author of Скучная история)",
            url:
              "https://www.goodreads.com/author/show/17920932._?from_search=true",
            favIconUrl: "https://www.goodreads.com/favicon.ico"
          },
          {
            id: 154,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Что почитать Чехова?: chto_chitat",
            url: "https://chto-chitat.livejournal.com/4259351.html",
            favIconUrl: "https://www.livejournal.com/favicon.ico?v=2"
          },
          {
            id: 155,
            windowId: 2,
            active: false,
            pinned: false,
            title: "QW Confluence",
            url: "https://qworld.atlassian.net/wiki/spaces/TW/pages/461963265",
            favIconUrl:
              "https://cpfs-cdn.atlassian.com/assets/shared/id-summit/id-summit-aa-favicon.ico"
          },
          {
            id: 156,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Mindful - healthy mind, healthy life",
            url: "https://www.mindful.org/",
            favIconUrl:
              "https://www.mindful.org/wp-content/uploads/mindfl-logo-dark-blue-32x32.jpg"
          },
          {
            id: 157,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Кому на самом деле нужно плацебо: scinquisitor",
            url: "https://scinquisitor.livejournal.com/94919.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 158,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Illusion mindfulness improves cancer survival | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/29/creating-the-illusion-that-mindfulness-improves-the-survival-of-cancer-patients/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 159,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mindfulness research's uninformative control groups | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/23/mindfulness-researchs-huge-problem-with-uninformative-control-groups/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 160,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Нейротеология: scinquisitor",
            url: "https://scinquisitor.livejournal.com/1922.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080"
          },
          {
            id: 161,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Стэнфордский тюремный эксперимент — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%8D%D0%BD%D1%84%D0%BE%D1%80%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D1%80%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82#cite_ref-7",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 162,
            windowId: 2,
            active: false,
            pinned: false,
            title: "The Lifespan of a Lie – Trust Issues – Medium",
            url:
              "https://medium.com/s/trustissues/the-lifespan-of-a-lie-d869212b1f62",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 163,
            windowId: 2,
            active: false,
            pinned: false,
            title: "How I Wait Years to Get My Photos",
            url:
              "https://petapixel.com/2018/06/18/how-i-wait-years-to-get-my-photos/",
            favIconUrl: "https://petapixel.com/favicon.ico"
          },
          {
            id: 164,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "What is the best approach to design state? · Issue #1825 · reduxjs/redux · GitHub",
            url: "https://github.com/reduxjs/redux/issues/1825",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 165,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "10 Tips for Better Redux Architecture – JavaScript Scene – Medium",
            url:
              "https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 166,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Falcor: One Model Everywhere",
            url: "https://netflix.github.io/falcor/",
            favIconUrl:
              "https://netflix.github.io/falcor/images/favicons/favicons-32x32.png"
          },
          {
            id: 167,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Five Tips for Working with Redux in Large Applications",
            url:
              "https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb",
            favIconUrl:
              "https://cdn-images-1.medium.com/fit/c/256/256/1*ljvUZzmjFTZHP4OBrWHRWg.png"
          },
          {
            id: 168,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "reactjs - What is the core difference of redux & reflux in using react based application? - Stack Overflow",
            url:
              "https://stackoverflow.com/questions/36326210/what-is-the-core-difference-of-redux-reflux-in-using-react-based-application",
            favIconUrl:
              "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"
          },
          {
            id: 169,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Митинги против повышения пенсионного возраста — Meduza",
            url:
              "https://meduza.io/video/2018/07/01/protestnye-aktsii-protiv-povysheniya-pensionnogo-vozrasta",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 170,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Сериал «Незнакомцы» от Facebook: реалистично, как «Девочки», смешно, как «Друзья» — Meduza",
            url:
              "https://meduza.io/feature/2018/07/01/serial-neznakomtsy-ot-facebook-realistichno-kak-devochki-smeshno-kak-druzya",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 171,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга Журнал "Искусство кино" №5-6/2018 - купить в книжном интернет-магазине по цене 300 руб | Podpisnie.ru',
            url:
              "https://www.podpisnie.ru/books/zhurnal-iskusstvo-kino-5-6-2018",
            favIconUrl: "https://www.podpisnie.ru/favicon.ico"
          },
          {
            id: 172,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Лена Грачёва - редко что-то шарю, но это всё же хочу... | Facebook",
            url: "https://www.facebook.com/almamorenaya/posts/881811982007203",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 173,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 174,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - А вообще, спасибо безвестному стукачу, из-за... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1328391260577544&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 175,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Stranger Things - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Stranger_Things",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 177,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Creating Library Definitions | Flow",
            url: "https://flow.org/en/docs/libdefs/creation/",
            favIconUrl:
              "https://flow.org/static/favicon.png?t=2018-07-05T22:22:49+00:00"
          },
          {
            id: 178,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "flow-typed/definitions/npm at master · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/tree/master/definitions/npm",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 179,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Roadmap to a v3.0.0 of flow-typed · Issue #1494 · flow-typed/flow-typed · GitHub",
            url: "https://github.com/flow-typed/flow-typed/issues/1494",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 180,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Which interfaces are already written? · Issue #13 · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 181,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Intersection doesn't work for exact object types · Issue #2626 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/2626",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 183,
            windowId: 2,
            active: false,
            pinned: false,
            title: "That's so fetch! - JakeArchibald.com",
            url: "https://jakearchibald.com/2015/thats-so-fetch/",
            favIconUrl: "https://jakearchibald.com/favicon.ico"
          },
          {
            id: 184,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "react-static/static.config.js at master · nozzle/react-static · GitHub",
            url:
              "https://github.com/nozzle/react-static/blob/master/examples/sass/static.config.js",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 185,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "React Static - A progressive static-site framework for React @ OgdenJS - YouTube",
            url: "https://www.youtube.com/watch?v=OqbJ5swVpDQ",
            favIconUrl: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
          },
          {
            id: 187,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Setting up CSS Modules with React and Webpack",
            url: "https://javascriptplayground.com/css-modules-webpack-react/",
            favIconUrl: "https://javascriptplayground.com/favicon.ico"
          },
          {
            id: 188,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - css-modules/css-modules: Documentation about css-modules",
            url: "https://github.com/css-modules/css-modules",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 189,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Ася Федотова",
            url: "https://vk.com/afedotova72",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 190,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Коррекция на множественное тестирование — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 192,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Мандрагора — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%B0#%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%BD%D1%8B%D0%B5_%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 193,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Text Fields · An Introduction to Elm",
            url:
              "https://guide.elm-lang.org/architecture/user_input/text_fields.html",
            favIconUrl: "https://guide.elm-lang.org/gitbook/images/favicon.ico"
          },
          {
            id: 194,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Redux",
            url: "https://redux.js.org/introduction/prior-art",
            favIconUrl: null
          },
          {
            id: 195,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Cycle.js",
            url: "https://cycle.js.org/",
            favIconUrl: null
          },
          {
            id: 196,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - minedeljkovic/redux-elmish: The Elm Architecture in Redux, statically checked using flow",
            url: "https://github.com/minedeljkovic/redux-elmish",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 197,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - brabadu/tanok: Elm Architecture-inspired wrapper for Rx.js+React",
            url: "https://github.com/brabadu/tanok",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 198,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - didierfranc/react-waterfall: React store built on top of the new context API",
            url: "https://github.com/didierfranc/react-waterfall",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 199,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у Apple iPad mini 3 16Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-3-16gb-wi-fi-cellular-0618d196",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 257,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Trade-in и продажа техники в Санкт-Петербурге. REFRESH your tech",
            url: "http://www.refreshyourtech.ru/",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 200,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у iPad mini 4 128Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-4-128gb-lte-0618d172",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 265,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad mini 4 128Gb Wi-Fi в интернет-магазинах — Планшеты — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/product/12859392/offers?local-offers-first=0&how=rorp",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 307,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Apple iPad mini 4 128Gb Wi-Fi Silver",
            url:
              "http://www.pitergsm.ru/e-store/tablets/index.php?ELEMENT_ID=995&r1=&r2=&ymclid=319492699825359651400004",
            favIconUrl: "http://www.pitergsm.ru/favicon.ico"
          },
          {
            id: 303,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319489462975119837300000",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 302,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Apple iPad mini 4 Wi-Fi 128GB (серебристый) характеристики, техническое описание планшета - интернет-магазин Связной",
            url:
              "https://www.svyaznoy.ru/catalog/notebook/7063/2752367/specs#mainContent",
            favIconUrl: "https://www.svyaznoy.ru/favicons/favicon-32x32.png?v=1"
          },
          {
            id: 301,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Планшеты Apple iPad – купить iPad по отличной цене",
            url: "https://www.tehnikalux.ru/spb/category/apple/ipad/",
            favIconUrl: "https://www.tehnikalux.ru/favicon.ico"
          },
          {
            id: 275,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319166515579151714600001",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 245,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=12859395&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 246,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 261,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad (2018) 32Gb Wi-Fi + Cellular — Планшеты — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/30015180?nid=54545&track=fr_compare",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 242,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Compare Apple iPad mini 3 vs. Apple iPad mini 4 - GSMArena.com",
            url:
              "https://www.gsmarena.com/compare.php3?idPhone1=6741&idPhone2=7561",
            favIconUrl: "https://www.gsmarena.com/i/favicon.ico"
          },
          {
            id: 202,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Платформы для сборки ПК - Компьютерные комплектующие",
            url: "https://www.ulmart.ru/catalog/assembly_bases",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 204,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Антон Долин - (Опять странный вопрос) А существует же наверняка...",
            url: "https://www.facebook.com/adolin3/posts/10215523587299037",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 205,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Умер Клод Ланцман — режиссер «Шоа», важнейшего документального фильма про Холокост — Meduza",
            url:
              "https://meduza.io/feature/2018/07/05/umer-klod-lantsman-rezhisser-shoa-vazhneyshego-dokumentalnogo-filma-pro-holokost",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 206,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Sourcetree | Free Git GUI for Mac and Windows",
            url: "https://www.sourcetreeapp.com/",
            favIconUrl:
              "https://www.sourcetreeapp.com/assets/img/favicons/sourcetree/favicon-32x32.png"
          },
          {
            id: 207,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Зои / Родина",
            url: "http://rodinakino.ru/films/soon/2018/06/20/02/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 209,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mirrors Yamaha Y80 Y50 Y75 Y80 V50 V75 Japan Mint 689127704338 | eBay",
            url:
              "https://www.ebay.com/itm/Mirrors-Yamaha-Y80-Y50-Y75-Y80-V50-V75-Japan-Mint/292190471095?epid=9009865854&hash=item4407e8c3b7:g:gmkAAOSwstJZR-Pw#shpCntId",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 213,
            windowId: 2,
            active: false,
            pinned: false,
            title: "windows 10 key | eBay",
            url:
              "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050430.m570.l1311.R1.TR12.TRC2.A0.H0.Xwindows+10+key.TRS0&_nkw=windows+10+key&_sacat=0",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 214,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "WINDOWS 7 Ultimate 32/64 Bit Activation key INSTANT DELIVERY 5MINT+DOWNLOAD Link | eBay",
            url:
              "https://www.ebay.com/itm/WINDOWS-7-Ultimate-32-64-Bit-Activation-key-INSTANT-DELIVERY-5MINT-DOWNLOAD-Link/113020363939?hash=item1a5089e4a3:g:1dkAAOSwSatbCmhX",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 215,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Watch Out For These Dirty Tricks From Discounted Software Resellers",
            url:
              "https://www.howtogeek.com/345412/watch-out-for-these-dirty-tricks-from-discounted-software-resellers/",
            favIconUrl: "https://www.howtogeek.com/public/favicon.ico"
          },
          {
            id: 216,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Microsoft Windows 7 Ultimate 32/64 bit MS Activation Key Full Version Win 7 Ult 885370258851 | eBay",
            url:
              "https://www.ebay.com/itm/Microsoft-Windows-7-Ultimate-32-64-bit-MS-Activation-Key-Full-Version-Win-7-Ult/283006856392?hash=item41e485ecc8:g:QIIAAOSwQN1bIQEb",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 219,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Бизнес-линч за 14.09.2017",
            url:
              "https://www.artlebedev.ru/kovodstvo/business-lynch/2017/09/14/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 220,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Новый органон — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%BE%D0%BD",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 221,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Пылающий",
            url: "http://www.avrora.spb.ru/films/pilayushchiy",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 222,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Список вопросов - дизайн - Miscellaneous - QW Confluence",
            url:
              "https://qworld.atlassian.net/wiki/spaces/TW/pages/347504649/-",
            favIconUrl:
              "https://qworld.atlassian.net/wiki/s/294714687/6452/6b50395b11a0f44cf166d43fcbc12cb41379fd84/10/_/favicon-update.ico"
          },
          {
            id: 223,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Осознанный хип-хоп — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D0%B8%D0%BF-%D1%85%D0%BE%D0%BF",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 225,
            windowId: 2,
            active: false,
            pinned: false,
            title: "И я в моем теплом теле (Введенский) — Wikilivres.ru",
            url:
              "http://wikilivres.ru/%D0%98_%D1%8F_%D0%B2_%D0%BC%D0%BE%D0%B5%D0%BC_%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BC_%D1%82%D0%B5%D0%BB%D0%B5_(%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9)",
            favIconUrl: "http://wikilivres.ru/favicon.ico"
          },
          {
            id: 231,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Киноцентр Родина",
            url: "http://rodinakino.ru/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 251,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Отзывы о торгово-сервисной компании Refresh your tech - Магазины - Санкт-Петербург",
            url:
              "https://spb.zoon.ru/shops/torgovo-servisnaya_kompaniya_refresh_your_tech/reviews/",
            favIconUrl: "https://spb.zoon.ru/favicon-32x32.png"
          },
          {
            id: 298,
            windowId: 2,
            active: false,
            pinned: false,
            title: "serve - npm",
            url: "https://www.npmjs.com/package/serve",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 306,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Смартфон Digma VOX FIRE 4G — Мобильные телефоны — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/1842968920?show-uid=319491229320339655916001&nid=54726&glfilter=7808633%3A1&filter-discount-only=1&context=search",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 352,
            windowId: 2,
            active: false,
            pinned: false,
            title: "tabs.remove() - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/remove",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 349,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Your second extension - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 347,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging",
            favIconUrl: null
          },
          {
            id: 348,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Firefox Is Back. It’s Time to Give It a Try. - The New York Times",
            url:
              "https://www.nytimes.com/2018/06/20/technology/personaltech/firefox-chrome-browser-privacy.html",
            favIconUrl:
              "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico"
          },
          {
            id: 350,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Владик on Twitter: "Короче, один лайк - один факт о реальной травматологии"',
            url: "https://twitter.com/glazzzvlad/status/1019490333158240257",
            favIconUrl: "https://abs.twimg.com/favicons/favicon.ico"
          },
          {
            id: 354,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Introducing FilterBubbler: A WebExtension built using React/Redux – Mozilla Hacks – the Web developer blog",
            url:
              "https://hacks.mozilla.org/2017/06/introducing-filterbubbler-a-webextension-built-using-reactredux/",
            favIconUrl:
              "https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/wp-content/themes/Hax/favicon.ico"
          },
          {
            id: 358,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Close icons - Download 4829 free & premium icons on Iconfinder",
            url: "https://www.iconfinder.com/search/?q=close&price=free",
            favIconUrl:
              "https://cdn0.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa"
          },
          {
            id: 363,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "lusakasa/saka-extension-boilerplate: Opinionated boilerplate for building extensions for Chrome and Firefox",
            url: "https://github.com/lusakasa/saka-extension-boilerplate",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 367,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Создание и вызов событий - Руководство Web-разработчика | MDN",
            url:
              "https://developer.mozilla.org/ru/docs/Web/Guide/Events/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 368,
            windowId: 2,
            active: false,
            pinned: false,
            title: "medium.com | 502: Bad gateway",
            url:
              "https://medium.com/@LeoAref/simple-event-dispatcher-implementation-using-javascript-36d0eadf5a11",
            favIconUrl: "https://medium.com/favicon.ico"
          },
          {
            id: 369,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Manager – Figma",
            url:
              "https://www.figma.com/file/TBPgVBHpN0yEZqoPRjDUXasM/Tabs-Manager?node-id=1%3A5",
            favIconUrl: "https://static.figma.com/app/icon/1/favicon.svg"
          },
          {
            id: 395,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "developit/preact: ⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
            url: "https://github.com/developit/preact",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 397,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Brunch: Commands — Brunch",
            url: "http://brunch.io/docs/commands",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 401,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Plugins — Brunch",
            url: "http://brunch.io/plugins",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 404,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Node Security Platform | Advisory",
            url: "https://nodesecurity.io/advisories/146",
            favIconUrl: "https://nodesecurity.io/img/nodesecurity.png"
          },
          {
            id: 408,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Keeper",
            url: "http://localhost:3333/",
            favIconUrl: null
          },
          {
            id: 415,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Add-ons Manager",
            url: "about:addons",
            favIconUrl:
              "chrome://mozapps/skin/extensions/extensionGeneric-16.svg"
          },
          {
            id: 416,
            windowId: 2,
            active: true,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging#addons",
            favIconUrl: null
          }
        ]
      }
    ],
    header: {
      id: 2,
      date: 1432277691141,
      windowsCount: 2,
      tabsCount: 240
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          },
          {
            id: 2,
            windowId: 1,
            active: false,
            pinned: true,
            title: "лекарства - Google Sheets",
            url:
              "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
            favIconUrl:
              "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
          },
          {
            id: 325,
            windowId: 1,
            active: false,
            pinned: false,
            title: "судьба ужина по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3132384.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=262"
          },
          {
            id: 296,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Network Dependencies · he-he-org/he-he-2",
            url: "https://github.com/he-he-org/he-he-2/network/dependencies",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 300,
            windowId: 1,
            active: false,
            pinned: false,
            title: "NVD - CVE-2018-3809",
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-3809",
            favIconUrl:
              "https://nvd.nist.gov/App_Themes/Default/Images/favicon.ico"
          },
          {
            id: 277,
            windowId: 1,
            active: false,
            pinned: false,
            title: "(32) Новости",
            url:
              "https://vk.com/feed?z=photo-48872313_456242438%2Fwall-48872313_11365",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 8,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Хорошо прорисованные женщины: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1280049.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 9,
            windowId: 1,
            active: false,
            pinned: false,
            title: 'Живопись из фильма "Титаник": shakko_kitsune - Page 3',
            url: "https://shakko-kitsune.livejournal.com/1278640.html?page=3",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 11,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем круты «Авиньонские девицы» Пикассо? | Шакко | Яндекс Дзен",
            url:
              "https://zen.yandex.ru/media/shakko/chem-kruty-avinonskie-devicy-pikasso-5af6ffb67425f5fcbcde7db7",
            favIconUrl: "https://yastatic.net/zen-logos/files/favicons/icon.svg"
          },
          {
            id: 12,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пабло Руис Пикассо - NeWestMuseum",
            url:
              "http://www.newestmuseum.ru/data/authors/p/picasso_pablo/index.php",
            favIconUrl: "http://www.newestmuseum.ru/favicon.ico"
          },
          {
            id: 13,
            windowId: 1,
            active: false,
            pinned: false,
            title: "кельтский камень - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130586.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 14,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шаламов по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130308.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 15,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Зав. игровым салоном: ksoftware",
            url: "https://ksoftware.livejournal.com/383517.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 16,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Музей истории техники в Ростове. Кайф: ksoftware",
            url: "https://ksoftware.livejournal.com/397536.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 18,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Using achievement stats to estimate sales on steam – Tyler Glaiel – Medium",
            url:
              "https://medium.com/@tglaiel/using-achievement-stats-to-estimate-sales-on-steam-d18b4b635d23",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 20,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Печали: akuklev",
            url: "https://akuklev.livejournal.com/1282902.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 21,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fabrice Bellard - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Fabrice_Bellard",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 22,
            windowId: 1,
            active: false,
            pinned: false,
            title: "открытая запись - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3129950.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 23,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ну вот, maxim умучали и в твиторе. И чего вы его так все не любите,…: sorhed",
            url: "https://sorhed.livejournal.com/619253.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 24,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Почему я удалил все посты в ЖЖ и Твиттере: maxim",
            url: "https://maxim.livejournal.com/531021.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 25,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Заголовок: lambdaterm1",
            url: "https://lambdaterm1.livejournal.com/730.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 26,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-99523325_4368",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 27,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ПитерФотоФест - 2018",
            url: "http://piterfotofest.ru/#rec16367493",
            favIconUrl:
              "https://static.tildacdn.com/tild6234-6131-4436-a561-376363656563/favicon.ico"
          },
          {
            id: 28,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Об Байеса - 2 - Не кинокритик. Не палеонтолог.",
            url: "https://plakhov.livejournal.com/227597.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 29,
            windowId: 1,
            active: false,
            pinned: false,
            title: "другая америка - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3129470.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 30,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Course | DSE200x | edX",
            url:
              "https://courses.edx.org/courses/course-v1:UCSanDiegoX+DSE200x+1T2018/course/",
            favIconUrl:
              "https://prod-edxapp.edx-cdn.org/static/edx.org/images/favicon.9028de6ff678.ico"
          },
          {
            id: 31,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | шо за Шноль",
            url: "https://juan-gandhi.dreamwidth.org/4264984.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 32,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пятое издание «Ководства» Лебедева",
            url: "https://www.artlebedev.ru/izdal/kovodstvo5/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 33,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Measure Performance with the RAIL Model  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/rail",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 34,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Update on Async Rendering - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 35,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Duran - Публикации",
            url:
              "https://www.facebook.com/ArtByDuran/photos/a.2159449564069966.1073741829.318130841535190/2159452500736339/?type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 36,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 37,
            windowId: 1,
            active: false,
            pinned: false,
            title: "афиша клуба",
            url: "https://vk.com/page-63477485_52138480",
            favIconUrl:
              "https://vk.com/images/icons/favicons/fav_pause_2x.ico?6"
          },
          {
            id: 38,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Сергей Мардан",
            url: "https://www.facebook.com/sergeynudol?fref=jewel",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 39,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fredegund: Assassination-obsessed Queen",
            url: "https://www.rejectedprincesses.com/princesses/fredegund",
            favIconUrl:
              "https://www.rejectedprincesses.com/wp-content/uploads/2014/10/rp.png"
          },
          {
            id: 40,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 41,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "ШЛЮХА (рассказ) Приятель позвал в бар смотреть... - Максим Матковский",
            url:
              "https://www.facebook.com/nelson.junior.54379/posts/10155404512656576",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 42,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Великие споры - InLiberty",
            url: "https://www.inliberty.ru/public/spory/",
            favIconUrl: "https://www.inliberty.ru/i/favicon/favicon-32x32.png"
          },
          {
            id: 43,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | TIL from Duolingo",
            url: "https://juan-gandhi.dreamwidth.org/4260093.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 44,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Слои пользы: ksoftware",
            url: "https://ksoftware.livejournal.com/396031.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 45,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пикник «Афиши» 4 августа 2018 — официальный сайт фестиваля",
            url: "https://picnic.afisha.ru/faq",
            favIconUrl:
              "https://picnic.afisha.ru/static/images/A-Picnic-2018-FavIcon-64.png"
          },
          {
            id: 46,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Вышел новый альбом Gorillaz. Послушайте его прямо сейчас — Meduza",
            url:
              "https://meduza.io/shapito/2018/06/29/vyshel-novyy-albom-gorillaz-poslushayte-ego-pryamo-seychas?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-29",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 47,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3578",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 48,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ВИЗУАЛЬНАЯ МЕДИТАЦИЯ",
            url: "https://outcinema.ru/visual-meditation",
            favIconUrl:
              "https://static.tildacdn.com/tild6265-3539-4131-b566-373465353165/favicon.ico"
          },
          {
            id: 49,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Миротворец. Портрет Апхичатпхонга Вирасетакуна - Искусство кино",
            url: "http://kinoart.ru/archive/2010/11/n11-article12",
            favIconUrl: "http://kinoart.ru/favicon.ico"
          },
          {
            id: 50,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall2064116_418",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 51,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Почему в России не надо повышать налоги? Экономический обозреватель Борис Грозовский отвечает заместителю главреда «Медузы» Александру Поливанову — Meduza",
            url:
              "https://meduza.io/feature/2018/06/26/pochemu-v-rossii-ne-nado-povyshat-nalogi?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-26",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 52,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Новая газета»: в Пскове поставили памятники на могилах десантников, погибших летом 2014 года — Meduza",
            url:
              "https://meduza.io/news/2018/06/25/novaya-gazeta-v-pskove-postavili-pamyatniki-na-mogilah-desantnikov-pogibshih-letom-2014-goda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-25",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 53,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Андрей Ерёменко. Генерал против всех",
            url: "https://kartaistorii.ru/eremenko/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 54,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шарик и кисет - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124708.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 55,
            windowId: 1,
            active: false,
            pinned: false,
            title: "мимоза - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124074.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 56,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "» Scoperto il primo dipinto firmato e autografato da Leonardo Da Vinci",
            url:
              "http://www.art-news.it/scoperto-il-primo-dipinto-firmato-e-autografato-da-leonardo-da-vinci/",
            favIconUrl:
              "http://www.art-news.it/wp-content/uploads/Loghetto-Art-News.png"
          },
          {
            id: 57,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3509",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 58,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Сеанс кинотерапии. «Арарат», режиссер Атом Эгоян - Искусство кино",
            url: "http://www.kinoart.ru/archive/2002/12/n12-article7",
            favIconUrl: "http://www.kinoart.ru/favicon.ico"
          },
          {
            id: 59,
            windowId: 1,
            active: false,
            pinned: false,
            title: "panda-grammar - npm",
            url: "https://www.npmjs.com/package/panda-grammar",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 60,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-3818033_17029",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 61,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как приукрашивали портреты маслом после распространения фотографии: shakko_kitsune - Page 2",
            url: "https://shakko-kitsune.livejournal.com/1268839.html?page=2",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 62,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Насильник, грабитель, поп-звезда: Убит XXXTentacion. Он был самым парадоксальным молодым рэпером Америки — Meduza",
            url:
              "https://meduza.io/feature/2018/06/19/nasilnik-grabitel-pop-zvezda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-19",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 63,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Recursive descent parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Recursive_descent_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 64,
            windowId: 1,
            active: false,
            pinned: false,
            title: "LR parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/LR_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 65,
            windowId: 1,
            active: false,
            pinned: false,
            title: "parsimmon/API.md at master · jneen/parsimmon · GitHub",
            url:
              "https://github.com/jneen/parsimmon/blob/master/API.md#terminology",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 66,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как в России будут повышать пенсионный возраст? И зачем? — Meduza",
            url:
              "https://meduza.io/cards/kak-v-rossii-budut-povyshat-pensionnyy-vozrast-i-zachem",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 67,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Они хотят сделать дестабилизацию обстановки». СБУ показала «переговоры организаторов покушения на Бабченко»: Пытаемся это пересказать — Meduza",
            url:
              "https://meduza.io/feature/2018/06/15/oni-hotyat-sdelat-destabilizatsiyu-obstanovki-sbu-pokazalo-peregovory-organizatorov-pokusheniya-na-babchenko?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-15",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 68,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-112289703_13361",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 69,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-55155418_165878",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 70,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-110501497_16688",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 71,
            windowId: 1,
            active: false,
            pinned: false,
            title: "нет законов - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3119801.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 72,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Official page for Language Server Protocol",
            url: "https://microsoft.github.io/language-server-protocol/",
            favIconUrl:
              "https://microsoft.github.io/language-server-protocol/img/favicon.png"
          },
          {
            id: 73,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            url:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 74,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем целлюлит Рубенса отличается от целлюлита Ван Дейка и целлюлита Йорданса?: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1264148.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 75,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о конкурсах красоты - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3120316.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 76,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Бренда «Евросеть» больше не будет. Чем нам запомнится эта компания — Meduza",
            url:
              "https://meduza.io/slides/legendarnyy-brend-evroset-budet-likvidirovan-chem-nam-zapomnitsya-eta-kompaniya?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-06",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 77,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Abstrakte Kunst Poster bei AllPosters.de",
            url:
              "https://www.allposters.de/-st/Abstrakte-Kunst-Poster_c86168_.htm",
            favIconUrl: "https://www.allposters.de/favicon.ico"
          },
          {
            id: 78,
            windowId: 1,
            active: false,
            pinned: false,
            title: "‎NimbusMind: Meditation & Calm on the App Store",
            url:
              "https://itunes.apple.com/us/app/nimbusmind-meditation-calm/id1278663918?mt=8",
            favIconUrl: "https://itunes.apple.com/favicon.ico"
          },
          {
            id: 79,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Генрих Ягода. Грязная работа",
            url: "https://kartaistorii.ru/yagoda/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 80,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, design systems will replace design jobs — DesignSystems.com",
            url:
              "https://www.designsystems.com/stories/will-design-systems-replace-designers/",
            favIconUrl: "https://www.designsystems.com/favicon-32x32.png"
          },
          {
            id: 81,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как изучать негодяев • Arzamas",
            url: "https://arzamas.academy/radio/announcements/hlevniuk",
            favIconUrl: "https://arzamas.academy/favicon-32x32.png"
          },
          {
            id: 82,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Считают своим моральным долгом потушить пожар»: как добровольные пожарные спасают огромные территории от огня — Такие Дела",
            url: "https://takiedela.ru/news/2018/04/22/firefighters/",
            favIconUrl:
              "https://takiedela.ru/wp-content/themes/takiedela/assets/image/icons/favicon-32x32.png"
          },
          {
            id: 83,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Error Boundaries - React",
            url:
              "https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 84,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - hlaueriksson/jamstack-cms: A JAMstack experiment with a Headless CMS",
            url: "https://github.com/hlaueriksson/jamstack-cms",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 85,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-72326580_646949",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 86,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - Несравненный Эгон Шиле. 100 лет со дня... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215045413584993",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 87,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/arhstoyanie-2018",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 88,
            windowId: 1,
            active: false,
            pinned: false,
            title: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            url: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            favIconUrl: "https://solosale.ru/favicon.ico"
          },
          {
            id: 89,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Гитлер пришел к власти | История | DW | 29.01.2013",
            url:
              "https://www.dw.com/ru/%D0%BA%D0%B0%D0%BA-%D0%B3%D0%B8%D1%82%D0%BB%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D1%88%D0%B5%D0%BB-%D0%BA-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8/a-1581471",
            favIconUrl: "https://www.dw.com/favicon.png"
          },
          {
            id: 90,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Фотограф, которого никто не знал",
            url:
              "https://www.adme.ru/tvorchestvo-fotografy/fotograf-kotorogo-nikto-ne-znal-480205/",
            favIconUrl: "https://www.adme.ru/favicon.ico"
          },
          {
            id: 91,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ФАКУЛЬТЕТЫ ИСКУССТВ - LES",
            url: "https://les.media/articles/584226-fakulbtety-iskusstv",
            favIconUrl: "https://les.media/favicon-32x32.png"
          },
          {
            id: 92,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Александр Введенский — «В ленинградское отделение...»",
            url: "http://slova.org.ru/vvedenskiy/v_leningradskoe_otdelenie/",
            favIconUrl: "http://slova.org.ru/favicon.ico"
          },
          {
            id: 93,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Побочные эффекты осознанности 1. У вас... - Sergey Shalashenko | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=2309388555741540&set=a.328232067190542.95483.100000112538277&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      },
      {
        id: 2,
        focused: false,
        tabs: [
          {
            id: 150,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга: "Омерзительное искусство. Юмор и хоррор шедевров живописи" - Софья Багдасарова. Купить книгу, читать рецензии | ISBN 978-5-04-088717-0 | Лабиринт',
            url: "https://www.labirint.ru/books/630406/",
            favIconUrl: "https://img.labirint.ru/favicon.ico?20130611"
          },
          {
            id: 151,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Артемий Лебедев - Городской дизайн.",
            url:
              "https://www.facebook.com/temalebedev/videos/10156571532046095/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 152,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Режим работы - Глазной диагностический центр №7 (Санкт-Петербург, Моховая 38)",
            url: "http://mohovaya38.ru/rezhim_raboty/",
            favIconUrl: "http://mohovaya38.ru/favicon.ico"
          },
          {
            id: 153,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Чехов А.П. (Author of Скучная история)",
            url:
              "https://www.goodreads.com/author/show/17920932._?from_search=true",
            favIconUrl: "https://www.goodreads.com/favicon.ico"
          },
          {
            id: 154,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Что почитать Чехова?: chto_chitat",
            url: "https://chto-chitat.livejournal.com/4259351.html",
            favIconUrl: "https://www.livejournal.com/favicon.ico?v=2"
          },
          {
            id: 155,
            windowId: 2,
            active: false,
            pinned: false,
            title: "QW Confluence",
            url: "https://qworld.atlassian.net/wiki/spaces/TW/pages/461963265",
            favIconUrl:
              "https://cpfs-cdn.atlassian.com/assets/shared/id-summit/id-summit-aa-favicon.ico"
          },
          {
            id: 156,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Mindful - healthy mind, healthy life",
            url: "https://www.mindful.org/",
            favIconUrl:
              "https://www.mindful.org/wp-content/uploads/mindfl-logo-dark-blue-32x32.jpg"
          },
          {
            id: 157,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Кому на самом деле нужно плацебо: scinquisitor",
            url: "https://scinquisitor.livejournal.com/94919.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 158,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Illusion mindfulness improves cancer survival | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/29/creating-the-illusion-that-mindfulness-improves-the-survival-of-cancer-patients/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 159,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mindfulness research's uninformative control groups | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/23/mindfulness-researchs-huge-problem-with-uninformative-control-groups/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 160,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Нейротеология: scinquisitor",
            url: "https://scinquisitor.livejournal.com/1922.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080"
          },
          {
            id: 161,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Стэнфордский тюремный эксперимент — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%8D%D0%BD%D1%84%D0%BE%D1%80%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D1%80%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82#cite_ref-7",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 162,
            windowId: 2,
            active: false,
            pinned: false,
            title: "The Lifespan of a Lie – Trust Issues – Medium",
            url:
              "https://medium.com/s/trustissues/the-lifespan-of-a-lie-d869212b1f62",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 163,
            windowId: 2,
            active: false,
            pinned: false,
            title: "How I Wait Years to Get My Photos",
            url:
              "https://petapixel.com/2018/06/18/how-i-wait-years-to-get-my-photos/",
            favIconUrl: "https://petapixel.com/favicon.ico"
          },
          {
            id: 164,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "What is the best approach to design state? · Issue #1825 · reduxjs/redux · GitHub",
            url: "https://github.com/reduxjs/redux/issues/1825",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 165,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "10 Tips for Better Redux Architecture – JavaScript Scene – Medium",
            url:
              "https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 166,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Falcor: One Model Everywhere",
            url: "https://netflix.github.io/falcor/",
            favIconUrl:
              "https://netflix.github.io/falcor/images/favicons/favicons-32x32.png"
          },
          {
            id: 167,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Five Tips for Working with Redux in Large Applications",
            url:
              "https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb",
            favIconUrl:
              "https://cdn-images-1.medium.com/fit/c/256/256/1*ljvUZzmjFTZHP4OBrWHRWg.png"
          },
          {
            id: 168,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "reactjs - What is the core difference of redux & reflux in using react based application? - Stack Overflow",
            url:
              "https://stackoverflow.com/questions/36326210/what-is-the-core-difference-of-redux-reflux-in-using-react-based-application",
            favIconUrl:
              "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"
          },
          {
            id: 169,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Митинги против повышения пенсионного возраста — Meduza",
            url:
              "https://meduza.io/video/2018/07/01/protestnye-aktsii-protiv-povysheniya-pensionnogo-vozrasta",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 170,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Сериал «Незнакомцы» от Facebook: реалистично, как «Девочки», смешно, как «Друзья» — Meduza",
            url:
              "https://meduza.io/feature/2018/07/01/serial-neznakomtsy-ot-facebook-realistichno-kak-devochki-smeshno-kak-druzya",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 171,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга Журнал "Искусство кино" №5-6/2018 - купить в книжном интернет-магазине по цене 300 руб | Podpisnie.ru',
            url:
              "https://www.podpisnie.ru/books/zhurnal-iskusstvo-kino-5-6-2018",
            favIconUrl: "https://www.podpisnie.ru/favicon.ico"
          },
          {
            id: 172,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Лена Грачёва - редко что-то шарю, но это всё же хочу... | Facebook",
            url: "https://www.facebook.com/almamorenaya/posts/881811982007203",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 173,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 174,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - А вообще, спасибо безвестному стукачу, из-за... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1328391260577544&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 175,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Stranger Things - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Stranger_Things",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 177,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Creating Library Definitions | Flow",
            url: "https://flow.org/en/docs/libdefs/creation/",
            favIconUrl:
              "https://flow.org/static/favicon.png?t=2018-07-05T22:22:49+00:00"
          },
          {
            id: 178,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "flow-typed/definitions/npm at master · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/tree/master/definitions/npm",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 179,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Roadmap to a v3.0.0 of flow-typed · Issue #1494 · flow-typed/flow-typed · GitHub",
            url: "https://github.com/flow-typed/flow-typed/issues/1494",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 180,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Which interfaces are already written? · Issue #13 · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 181,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Intersection doesn't work for exact object types · Issue #2626 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/2626",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 183,
            windowId: 2,
            active: false,
            pinned: false,
            title: "That's so fetch! - JakeArchibald.com",
            url: "https://jakearchibald.com/2015/thats-so-fetch/",
            favIconUrl: "https://jakearchibald.com/favicon.ico"
          },
          {
            id: 184,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "react-static/static.config.js at master · nozzle/react-static · GitHub",
            url:
              "https://github.com/nozzle/react-static/blob/master/examples/sass/static.config.js",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 185,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "React Static - A progressive static-site framework for React @ OgdenJS - YouTube",
            url: "https://www.youtube.com/watch?v=OqbJ5swVpDQ",
            favIconUrl: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
          },
          {
            id: 187,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Setting up CSS Modules with React and Webpack",
            url: "https://javascriptplayground.com/css-modules-webpack-react/",
            favIconUrl: "https://javascriptplayground.com/favicon.ico"
          },
          {
            id: 188,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - css-modules/css-modules: Documentation about css-modules",
            url: "https://github.com/css-modules/css-modules",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 189,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Ася Федотова",
            url: "https://vk.com/afedotova72",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 190,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Коррекция на множественное тестирование — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 192,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Мандрагора — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%B0#%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%BD%D1%8B%D0%B5_%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 193,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Text Fields · An Introduction to Elm",
            url:
              "https://guide.elm-lang.org/architecture/user_input/text_fields.html",
            favIconUrl: "https://guide.elm-lang.org/gitbook/images/favicon.ico"
          },
          {
            id: 194,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Redux",
            url: "https://redux.js.org/introduction/prior-art",
            favIconUrl: null
          },
          {
            id: 195,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Cycle.js",
            url: "https://cycle.js.org/",
            favIconUrl: null
          },
          {
            id: 196,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - minedeljkovic/redux-elmish: The Elm Architecture in Redux, statically checked using flow",
            url: "https://github.com/minedeljkovic/redux-elmish",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 197,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - brabadu/tanok: Elm Architecture-inspired wrapper for Rx.js+React",
            url: "https://github.com/brabadu/tanok",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 198,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - didierfranc/react-waterfall: React store built on top of the new context API",
            url: "https://github.com/didierfranc/react-waterfall",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 199,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у Apple iPad mini 3 16Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-3-16gb-wi-fi-cellular-0618d196",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 257,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Trade-in и продажа техники в Санкт-Петербурге. REFRESH your tech",
            url: "http://www.refreshyourtech.ru/",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 200,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у iPad mini 4 128Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-4-128gb-lte-0618d172",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 265,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad mini 4 128Gb Wi-Fi в интернет-магазинах — Планшеты — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/product/12859392/offers?local-offers-first=0&how=rorp",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 307,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Apple iPad mini 4 128Gb Wi-Fi Silver",
            url:
              "http://www.pitergsm.ru/e-store/tablets/index.php?ELEMENT_ID=995&r1=&r2=&ymclid=319492699825359651400004",
            favIconUrl: "http://www.pitergsm.ru/favicon.ico"
          },
          {
            id: 303,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319489462975119837300000",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 302,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Apple iPad mini 4 Wi-Fi 128GB (серебристый) характеристики, техническое описание планшета - интернет-магазин Связной",
            url:
              "https://www.svyaznoy.ru/catalog/notebook/7063/2752367/specs#mainContent",
            favIconUrl: "https://www.svyaznoy.ru/favicons/favicon-32x32.png?v=1"
          },
          {
            id: 301,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Планшеты Apple iPad – купить iPad по отличной цене",
            url: "https://www.tehnikalux.ru/spb/category/apple/ipad/",
            favIconUrl: "https://www.tehnikalux.ru/favicon.ico"
          },
          {
            id: 275,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319166515579151714600001",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 245,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=12859395&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 246,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 261,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad (2018) 32Gb Wi-Fi + Cellular — Планшеты — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/30015180?nid=54545&track=fr_compare",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 242,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Compare Apple iPad mini 3 vs. Apple iPad mini 4 - GSMArena.com",
            url:
              "https://www.gsmarena.com/compare.php3?idPhone1=6741&idPhone2=7561",
            favIconUrl: "https://www.gsmarena.com/i/favicon.ico"
          },
          {
            id: 202,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Платформы для сборки ПК - Компьютерные комплектующие",
            url: "https://www.ulmart.ru/catalog/assembly_bases",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 204,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Антон Долин - (Опять странный вопрос) А существует же наверняка...",
            url: "https://www.facebook.com/adolin3/posts/10215523587299037",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 205,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Умер Клод Ланцман — режиссер «Шоа», важнейшего документального фильма про Холокост — Meduza",
            url:
              "https://meduza.io/feature/2018/07/05/umer-klod-lantsman-rezhisser-shoa-vazhneyshego-dokumentalnogo-filma-pro-holokost",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 206,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Sourcetree | Free Git GUI for Mac and Windows",
            url: "https://www.sourcetreeapp.com/",
            favIconUrl:
              "https://www.sourcetreeapp.com/assets/img/favicons/sourcetree/favicon-32x32.png"
          },
          {
            id: 207,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Зои / Родина",
            url: "http://rodinakino.ru/films/soon/2018/06/20/02/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 209,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mirrors Yamaha Y80 Y50 Y75 Y80 V50 V75 Japan Mint 689127704338 | eBay",
            url:
              "https://www.ebay.com/itm/Mirrors-Yamaha-Y80-Y50-Y75-Y80-V50-V75-Japan-Mint/292190471095?epid=9009865854&hash=item4407e8c3b7:g:gmkAAOSwstJZR-Pw#shpCntId",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 213,
            windowId: 2,
            active: false,
            pinned: false,
            title: "windows 10 key | eBay",
            url:
              "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050430.m570.l1311.R1.TR12.TRC2.A0.H0.Xwindows+10+key.TRS0&_nkw=windows+10+key&_sacat=0",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 214,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "WINDOWS 7 Ultimate 32/64 Bit Activation key INSTANT DELIVERY 5MINT+DOWNLOAD Link | eBay",
            url:
              "https://www.ebay.com/itm/WINDOWS-7-Ultimate-32-64-Bit-Activation-key-INSTANT-DELIVERY-5MINT-DOWNLOAD-Link/113020363939?hash=item1a5089e4a3:g:1dkAAOSwSatbCmhX",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 215,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Watch Out For These Dirty Tricks From Discounted Software Resellers",
            url:
              "https://www.howtogeek.com/345412/watch-out-for-these-dirty-tricks-from-discounted-software-resellers/",
            favIconUrl: "https://www.howtogeek.com/public/favicon.ico"
          },
          {
            id: 216,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Microsoft Windows 7 Ultimate 32/64 bit MS Activation Key Full Version Win 7 Ult 885370258851 | eBay",
            url:
              "https://www.ebay.com/itm/Microsoft-Windows-7-Ultimate-32-64-bit-MS-Activation-Key-Full-Version-Win-7-Ult/283006856392?hash=item41e485ecc8:g:QIIAAOSwQN1bIQEb",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 219,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Бизнес-линч за 14.09.2017",
            url:
              "https://www.artlebedev.ru/kovodstvo/business-lynch/2017/09/14/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 220,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Новый органон — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%BE%D0%BD",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 221,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Пылающий",
            url: "http://www.avrora.spb.ru/films/pilayushchiy",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 222,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Список вопросов - дизайн - Miscellaneous - QW Confluence",
            url:
              "https://qworld.atlassian.net/wiki/spaces/TW/pages/347504649/-",
            favIconUrl:
              "https://qworld.atlassian.net/wiki/s/294714687/6452/6b50395b11a0f44cf166d43fcbc12cb41379fd84/10/_/favicon-update.ico"
          },
          {
            id: 223,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Осознанный хип-хоп — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D0%B8%D0%BF-%D1%85%D0%BE%D0%BF",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 225,
            windowId: 2,
            active: false,
            pinned: false,
            title: "И я в моем теплом теле (Введенский) — Wikilivres.ru",
            url:
              "http://wikilivres.ru/%D0%98_%D1%8F_%D0%B2_%D0%BC%D0%BE%D0%B5%D0%BC_%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BC_%D1%82%D0%B5%D0%BB%D0%B5_(%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9)",
            favIconUrl: "http://wikilivres.ru/favicon.ico"
          },
          {
            id: 231,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Киноцентр Родина",
            url: "http://rodinakino.ru/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 251,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Отзывы о торгово-сервисной компании Refresh your tech - Магазины - Санкт-Петербург",
            url:
              "https://spb.zoon.ru/shops/torgovo-servisnaya_kompaniya_refresh_your_tech/reviews/",
            favIconUrl: "https://spb.zoon.ru/favicon-32x32.png"
          },
          {
            id: 298,
            windowId: 2,
            active: false,
            pinned: false,
            title: "serve - npm",
            url: "https://www.npmjs.com/package/serve",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 306,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Смартфон Digma VOX FIRE 4G — Мобильные телефоны — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/1842968920?show-uid=319491229320339655916001&nid=54726&glfilter=7808633%3A1&filter-discount-only=1&context=search",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 352,
            windowId: 2,
            active: false,
            pinned: false,
            title: "tabs.remove() - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/remove",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 349,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Your second extension - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 347,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging",
            favIconUrl: null
          },
          {
            id: 348,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Firefox Is Back. It’s Time to Give It a Try. - The New York Times",
            url:
              "https://www.nytimes.com/2018/06/20/technology/personaltech/firefox-chrome-browser-privacy.html",
            favIconUrl:
              "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico"
          },
          {
            id: 350,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Владик on Twitter: "Короче, один лайк - один факт о реальной травматологии"',
            url: "https://twitter.com/glazzzvlad/status/1019490333158240257",
            favIconUrl: "https://abs.twimg.com/favicons/favicon.ico"
          },
          {
            id: 354,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Introducing FilterBubbler: A WebExtension built using React/Redux – Mozilla Hacks – the Web developer blog",
            url:
              "https://hacks.mozilla.org/2017/06/introducing-filterbubbler-a-webextension-built-using-reactredux/",
            favIconUrl:
              "https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/wp-content/themes/Hax/favicon.ico"
          },
          {
            id: 358,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Close icons - Download 4829 free & premium icons on Iconfinder",
            url: "https://www.iconfinder.com/search/?q=close&price=free",
            favIconUrl:
              "https://cdn0.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa"
          },
          {
            id: 363,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "lusakasa/saka-extension-boilerplate: Opinionated boilerplate for building extensions for Chrome and Firefox",
            url: "https://github.com/lusakasa/saka-extension-boilerplate",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 367,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Создание и вызов событий - Руководство Web-разработчика | MDN",
            url:
              "https://developer.mozilla.org/ru/docs/Web/Guide/Events/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 368,
            windowId: 2,
            active: false,
            pinned: false,
            title: "medium.com | 502: Bad gateway",
            url:
              "https://medium.com/@LeoAref/simple-event-dispatcher-implementation-using-javascript-36d0eadf5a11",
            favIconUrl: "https://medium.com/favicon.ico"
          },
          {
            id: 369,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Manager – Figma",
            url:
              "https://www.figma.com/file/TBPgVBHpN0yEZqoPRjDUXasM/Tabs-Manager?node-id=1%3A5",
            favIconUrl: "https://static.figma.com/app/icon/1/favicon.svg"
          },
          {
            id: 395,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "developit/preact: ⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
            url: "https://github.com/developit/preact",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 397,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Brunch: Commands — Brunch",
            url: "http://brunch.io/docs/commands",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 401,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Plugins — Brunch",
            url: "http://brunch.io/plugins",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 404,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Node Security Platform | Advisory",
            url: "https://nodesecurity.io/advisories/146",
            favIconUrl: "https://nodesecurity.io/img/nodesecurity.png"
          },
          {
            id: 408,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Keeper",
            url: "http://localhost:3333/",
            favIconUrl: null
          },
          {
            id: 415,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Add-ons Manager",
            url: "about:addons",
            favIconUrl:
              "chrome://mozapps/skin/extensions/extensionGeneric-16.svg"
          },
          {
            id: 416,
            windowId: 2,
            active: true,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging#addons",
            favIconUrl: null
          }
        ]
      }
    ],
    header: {
      id: 3,
      date: 1532277693106,
      windowsCount: 2,
      tabsCount: 240
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          },
          {
            id: 2,
            windowId: 1,
            active: false,
            pinned: true,
            title: "лекарства - Google Sheets",
            url:
              "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
            favIconUrl:
              "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
          },
          {
            id: 52,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Новая газета»: в Пскове поставили памятники на могилах десантников, погибших летом 2014 года — Meduza",
            url:
              "https://meduza.io/news/2018/06/25/novaya-gazeta-v-pskove-postavili-pamyatniki-na-mogilah-desantnikov-pogibshih-letom-2014-goda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-25",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 53,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Андрей Ерёменко. Генерал против всех",
            url: "https://kartaistorii.ru/eremenko/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 54,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шарик и кисет - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124708.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 55,
            windowId: 1,
            active: false,
            pinned: false,
            title: "мимоза - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124074.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 56,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "» Scoperto il primo dipinto firmato e autografato da Leonardo Da Vinci",
            url:
              "http://www.art-news.it/scoperto-il-primo-dipinto-firmato-e-autografato-da-leonardo-da-vinci/",
            favIconUrl:
              "http://www.art-news.it/wp-content/uploads/Loghetto-Art-News.png"
          },
          {
            id: 57,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3509",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 58,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Сеанс кинотерапии. «Арарат», режиссер Атом Эгоян - Искусство кино",
            url: "http://www.kinoart.ru/archive/2002/12/n12-article7",
            favIconUrl: "http://www.kinoart.ru/favicon.ico"
          },
          {
            id: 59,
            windowId: 1,
            active: false,
            pinned: false,
            title: "panda-grammar - npm",
            url: "https://www.npmjs.com/package/panda-grammar",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 60,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-3818033_17029",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 61,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как приукрашивали портреты маслом после распространения фотографии: shakko_kitsune - Page 2",
            url: "https://shakko-kitsune.livejournal.com/1268839.html?page=2",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 62,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Насильник, грабитель, поп-звезда: Убит XXXTentacion. Он был самым парадоксальным молодым рэпером Америки — Meduza",
            url:
              "https://meduza.io/feature/2018/06/19/nasilnik-grabitel-pop-zvezda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-19",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 63,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Recursive descent parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Recursive_descent_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 64,
            windowId: 1,
            active: false,
            pinned: false,
            title: "LR parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/LR_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 65,
            windowId: 1,
            active: false,
            pinned: false,
            title: "parsimmon/API.md at master · jneen/parsimmon · GitHub",
            url:
              "https://github.com/jneen/parsimmon/blob/master/API.md#terminology",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 66,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как в России будут повышать пенсионный возраст? И зачем? — Meduza",
            url:
              "https://meduza.io/cards/kak-v-rossii-budut-povyshat-pensionnyy-vozrast-i-zachem",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 67,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Они хотят сделать дестабилизацию обстановки». СБУ показала «переговоры организаторов покушения на Бабченко»: Пытаемся это пересказать — Meduza",
            url:
              "https://meduza.io/feature/2018/06/15/oni-hotyat-sdelat-destabilizatsiyu-obstanovki-sbu-pokazalo-peregovory-organizatorov-pokusheniya-na-babchenko?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-15",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 68,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-112289703_13361",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 69,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-55155418_165878",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 70,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-110501497_16688",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 71,
            windowId: 1,
            active: false,
            pinned: false,
            title: "нет законов - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3119801.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 72,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Official page for Language Server Protocol",
            url: "https://microsoft.github.io/language-server-protocol/",
            favIconUrl:
              "https://microsoft.github.io/language-server-protocol/img/favicon.png"
          },
          {
            id: 73,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            url:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 74,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем целлюлит Рубенса отличается от целлюлита Ван Дейка и целлюлита Йорданса?: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1264148.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 75,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о конкурсах красоты - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3120316.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 76,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Бренда «Евросеть» больше не будет. Чем нам запомнится эта компания — Meduza",
            url:
              "https://meduza.io/slides/legendarnyy-brend-evroset-budet-likvidirovan-chem-nam-zapomnitsya-eta-kompaniya?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-06",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 77,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Abstrakte Kunst Poster bei AllPosters.de",
            url:
              "https://www.allposters.de/-st/Abstrakte-Kunst-Poster_c86168_.htm",
            favIconUrl: "https://www.allposters.de/favicon.ico"
          },
          {
            id: 78,
            windowId: 1,
            active: false,
            pinned: false,
            title: "‎NimbusMind: Meditation & Calm on the App Store",
            url:
              "https://itunes.apple.com/us/app/nimbusmind-meditation-calm/id1278663918?mt=8",
            favIconUrl: "https://itunes.apple.com/favicon.ico"
          },
          {
            id: 79,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Генрих Ягода. Грязная работа",
            url: "https://kartaistorii.ru/yagoda/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 80,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, design systems will replace design jobs — DesignSystems.com",
            url:
              "https://www.designsystems.com/stories/will-design-systems-replace-designers/",
            favIconUrl: "https://www.designsystems.com/favicon-32x32.png"
          },
          {
            id: 81,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как изучать негодяев • Arzamas",
            url: "https://arzamas.academy/radio/announcements/hlevniuk",
            favIconUrl: "https://arzamas.academy/favicon-32x32.png"
          },
          {
            id: 82,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Считают своим моральным долгом потушить пожар»: как добровольные пожарные спасают огромные территории от огня — Такие Дела",
            url: "https://takiedela.ru/news/2018/04/22/firefighters/",
            favIconUrl:
              "https://takiedela.ru/wp-content/themes/takiedela/assets/image/icons/favicon-32x32.png"
          },
          {
            id: 83,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Error Boundaries - React",
            url:
              "https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 84,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - hlaueriksson/jamstack-cms: A JAMstack experiment with a Headless CMS",
            url: "https://github.com/hlaueriksson/jamstack-cms",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 85,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-72326580_646949",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 86,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - Несравненный Эгон Шиле. 100 лет со дня... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215045413584993",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 87,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/arhstoyanie-2018",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 88,
            windowId: 1,
            active: false,
            pinned: false,
            title: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            url: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            favIconUrl: "https://solosale.ru/favicon.ico"
          },
          {
            id: 89,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Гитлер пришел к власти | История | DW | 29.01.2013",
            url:
              "https://www.dw.com/ru/%D0%BA%D0%B0%D0%BA-%D0%B3%D0%B8%D1%82%D0%BB%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D1%88%D0%B5%D0%BB-%D0%BA-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8/a-1581471",
            favIconUrl: "https://www.dw.com/favicon.png"
          },
          {
            id: 90,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Фотограф, которого никто не знал",
            url:
              "https://www.adme.ru/tvorchestvo-fotografy/fotograf-kotorogo-nikto-ne-znal-480205/",
            favIconUrl: "https://www.adme.ru/favicon.ico"
          },
          {
            id: 91,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ФАКУЛЬТЕТЫ ИСКУССТВ - LES",
            url: "https://les.media/articles/584226-fakulbtety-iskusstv",
            favIconUrl: "https://les.media/favicon-32x32.png"
          },
          {
            id: 92,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Александр Введенский — «В ленинградское отделение...»",
            url: "http://slova.org.ru/vvedenskiy/v_leningradskoe_otdelenie/",
            favIconUrl: "http://slova.org.ru/favicon.ico"
          },
          {
            id: 93,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Побочные эффекты осознанности 1. У вас... - Sergey Shalashenko | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=2309388555741540&set=a.328232067190542.95483.100000112538277&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      },
      {
        id: 2,
        focused: false,
        tabs: [
          {
            id: 150,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга: "Омерзительное искусство. Юмор и хоррор шедевров живописи" - Софья Багдасарова. Купить книгу, читать рецензии | ISBN 978-5-04-088717-0 | Лабиринт',
            url: "https://www.labirint.ru/books/630406/",
            favIconUrl: "https://img.labirint.ru/favicon.ico?20130611"
          },
          {
            id: 151,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Артемий Лебедев - Городской дизайн.",
            url:
              "https://www.facebook.com/temalebedev/videos/10156571532046095/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 152,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Режим работы - Глазной диагностический центр №7 (Санкт-Петербург, Моховая 38)",
            url: "http://mohovaya38.ru/rezhim_raboty/",
            favIconUrl: "http://mohovaya38.ru/favicon.ico"
          },
          {
            id: 153,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Чехов А.П. (Author of Скучная история)",
            url:
              "https://www.goodreads.com/author/show/17920932._?from_search=true",
            favIconUrl: "https://www.goodreads.com/favicon.ico"
          },
          {
            id: 154,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Что почитать Чехова?: chto_chitat",
            url: "https://chto-chitat.livejournal.com/4259351.html",
            favIconUrl: "https://www.livejournal.com/favicon.ico?v=2"
          },
          {
            id: 155,
            windowId: 2,
            active: false,
            pinned: false,
            title: "QW Confluence",
            url: "https://qworld.atlassian.net/wiki/spaces/TW/pages/461963265",
            favIconUrl:
              "https://cpfs-cdn.atlassian.com/assets/shared/id-summit/id-summit-aa-favicon.ico"
          },
          {
            id: 156,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Mindful - healthy mind, healthy life",
            url: "https://www.mindful.org/",
            favIconUrl:
              "https://www.mindful.org/wp-content/uploads/mindfl-logo-dark-blue-32x32.jpg"
          },
          {
            id: 157,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Кому на самом деле нужно плацебо: scinquisitor",
            url: "https://scinquisitor.livejournal.com/94919.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 158,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Illusion mindfulness improves cancer survival | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/29/creating-the-illusion-that-mindfulness-improves-the-survival-of-cancer-patients/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 159,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mindfulness research's uninformative control groups | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/23/mindfulness-researchs-huge-problem-with-uninformative-control-groups/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 160,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Нейротеология: scinquisitor",
            url: "https://scinquisitor.livejournal.com/1922.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080"
          },
          {
            id: 161,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Стэнфордский тюремный эксперимент — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%8D%D0%BD%D1%84%D0%BE%D1%80%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D1%80%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82#cite_ref-7",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 162,
            windowId: 2,
            active: false,
            pinned: false,
            title: "The Lifespan of a Lie – Trust Issues – Medium",
            url:
              "https://medium.com/s/trustissues/the-lifespan-of-a-lie-d869212b1f62",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 163,
            windowId: 2,
            active: false,
            pinned: false,
            title: "How I Wait Years to Get My Photos",
            url:
              "https://petapixel.com/2018/06/18/how-i-wait-years-to-get-my-photos/",
            favIconUrl: "https://petapixel.com/favicon.ico"
          },
          {
            id: 164,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "What is the best approach to design state? · Issue #1825 · reduxjs/redux · GitHub",
            url: "https://github.com/reduxjs/redux/issues/1825",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 165,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "10 Tips for Better Redux Architecture – JavaScript Scene – Medium",
            url:
              "https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 166,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Falcor: One Model Everywhere",
            url: "https://netflix.github.io/falcor/",
            favIconUrl:
              "https://netflix.github.io/falcor/images/favicons/favicons-32x32.png"
          },
          {
            id: 167,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Five Tips for Working with Redux in Large Applications",
            url:
              "https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb",
            favIconUrl:
              "https://cdn-images-1.medium.com/fit/c/256/256/1*ljvUZzmjFTZHP4OBrWHRWg.png"
          },
          {
            id: 168,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "reactjs - What is the core difference of redux & reflux in using react based application? - Stack Overflow",
            url:
              "https://stackoverflow.com/questions/36326210/what-is-the-core-difference-of-redux-reflux-in-using-react-based-application",
            favIconUrl:
              "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"
          },
          {
            id: 169,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Митинги против повышения пенсионного возраста — Meduza",
            url:
              "https://meduza.io/video/2018/07/01/protestnye-aktsii-protiv-povysheniya-pensionnogo-vozrasta",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 170,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Сериал «Незнакомцы» от Facebook: реалистично, как «Девочки», смешно, как «Друзья» — Meduza",
            url:
              "https://meduza.io/feature/2018/07/01/serial-neznakomtsy-ot-facebook-realistichno-kak-devochki-smeshno-kak-druzya",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 171,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга Журнал "Искусство кино" №5-6/2018 - купить в книжном интернет-магазине по цене 300 руб | Podpisnie.ru',
            url:
              "https://www.podpisnie.ru/books/zhurnal-iskusstvo-kino-5-6-2018",
            favIconUrl: "https://www.podpisnie.ru/favicon.ico"
          },
          {
            id: 172,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Лена Грачёва - редко что-то шарю, но это всё же хочу... | Facebook",
            url: "https://www.facebook.com/almamorenaya/posts/881811982007203",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 173,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 174,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - А вообще, спасибо безвестному стукачу, из-за... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1328391260577544&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 175,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Stranger Things - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Stranger_Things",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 177,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Creating Library Definitions | Flow",
            url: "https://flow.org/en/docs/libdefs/creation/",
            favIconUrl:
              "https://flow.org/static/favicon.png?t=2018-07-05T22:22:49+00:00"
          },
          {
            id: 178,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "flow-typed/definitions/npm at master · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/tree/master/definitions/npm",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 179,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Roadmap to a v3.0.0 of flow-typed · Issue #1494 · flow-typed/flow-typed · GitHub",
            url: "https://github.com/flow-typed/flow-typed/issues/1494",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 180,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Which interfaces are already written? · Issue #13 · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 181,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Intersection doesn't work for exact object types · Issue #2626 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/2626",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 183,
            windowId: 2,
            active: false,
            pinned: false,
            title: "That's so fetch! - JakeArchibald.com",
            url: "https://jakearchibald.com/2015/thats-so-fetch/",
            favIconUrl: "https://jakearchibald.com/favicon.ico"
          },
          {
            id: 184,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "react-static/static.config.js at master · nozzle/react-static · GitHub",
            url:
              "https://github.com/nozzle/react-static/blob/master/examples/sass/static.config.js",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 185,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "React Static - A progressive static-site framework for React @ OgdenJS - YouTube",
            url: "https://www.youtube.com/watch?v=OqbJ5swVpDQ",
            favIconUrl: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
          },
          {
            id: 187,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Setting up CSS Modules with React and Webpack",
            url: "https://javascriptplayground.com/css-modules-webpack-react/",
            favIconUrl: "https://javascriptplayground.com/favicon.ico"
          },
          {
            id: 188,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - css-modules/css-modules: Documentation about css-modules",
            url: "https://github.com/css-modules/css-modules",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 189,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Ася Федотова",
            url: "https://vk.com/afedotova72",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 190,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Коррекция на множественное тестирование — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 192,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Мандрагора — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%B0#%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%BD%D1%8B%D0%B5_%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 193,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Text Fields · An Introduction to Elm",
            url:
              "https://guide.elm-lang.org/architecture/user_input/text_fields.html",
            favIconUrl: "https://guide.elm-lang.org/gitbook/images/favicon.ico"
          },
          {
            id: 194,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Redux",
            url: "https://redux.js.org/introduction/prior-art",
            favIconUrl: null
          },
          {
            id: 195,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Cycle.js",
            url: "https://cycle.js.org/",
            favIconUrl: null
          },
          {
            id: 196,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - minedeljkovic/redux-elmish: The Elm Architecture in Redux, statically checked using flow",
            url: "https://github.com/minedeljkovic/redux-elmish",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 197,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - brabadu/tanok: Elm Architecture-inspired wrapper for Rx.js+React",
            url: "https://github.com/brabadu/tanok",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 198,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - didierfranc/react-waterfall: React store built on top of the new context API",
            url: "https://github.com/didierfranc/react-waterfall",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 199,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у Apple iPad mini 3 16Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-3-16gb-wi-fi-cellular-0618d196",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 257,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Trade-in и продажа техники в Санкт-Петербурге. REFRESH your tech",
            url: "http://www.refreshyourtech.ru/",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 200,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у iPad mini 4 128Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-4-128gb-lte-0618d172",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 265,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad mini 4 128Gb Wi-Fi в интернет-магазинах — Планшеты — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/product/12859392/offers?local-offers-first=0&how=rorp",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 307,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Apple iPad mini 4 128Gb Wi-Fi Silver",
            url:
              "http://www.pitergsm.ru/e-store/tablets/index.php?ELEMENT_ID=995&r1=&r2=&ymclid=319492699825359651400004",
            favIconUrl: "http://www.pitergsm.ru/favicon.ico"
          },
          {
            id: 303,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319489462975119837300000",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 302,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Apple iPad mini 4 Wi-Fi 128GB (серебристый) характеристики, техническое описание планшета - интернет-магазин Связной",
            url:
              "https://www.svyaznoy.ru/catalog/notebook/7063/2752367/specs#mainContent",
            favIconUrl: "https://www.svyaznoy.ru/favicons/favicon-32x32.png?v=1"
          },
          {
            id: 301,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Планшеты Apple iPad – купить iPad по отличной цене",
            url: "https://www.tehnikalux.ru/spb/category/apple/ipad/",
            favIconUrl: "https://www.tehnikalux.ru/favicon.ico"
          },
          {
            id: 275,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319166515579151714600001",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 245,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=12859395&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 246,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 261,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad (2018) 32Gb Wi-Fi + Cellular — Планшеты — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/30015180?nid=54545&track=fr_compare",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 242,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Compare Apple iPad mini 3 vs. Apple iPad mini 4 - GSMArena.com",
            url:
              "https://www.gsmarena.com/compare.php3?idPhone1=6741&idPhone2=7561",
            favIconUrl: "https://www.gsmarena.com/i/favicon.ico"
          },
          {
            id: 202,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Платформы для сборки ПК - Компьютерные комплектующие",
            url: "https://www.ulmart.ru/catalog/assembly_bases",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 204,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Антон Долин - (Опять странный вопрос) А существует же наверняка...",
            url: "https://www.facebook.com/adolin3/posts/10215523587299037",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 205,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Умер Клод Ланцман — режиссер «Шоа», важнейшего документального фильма про Холокост — Meduza",
            url:
              "https://meduza.io/feature/2018/07/05/umer-klod-lantsman-rezhisser-shoa-vazhneyshego-dokumentalnogo-filma-pro-holokost",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 206,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Sourcetree | Free Git GUI for Mac and Windows",
            url: "https://www.sourcetreeapp.com/",
            favIconUrl:
              "https://www.sourcetreeapp.com/assets/img/favicons/sourcetree/favicon-32x32.png"
          },
          {
            id: 207,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Зои / Родина",
            url: "http://rodinakino.ru/films/soon/2018/06/20/02/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 209,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mirrors Yamaha Y80 Y50 Y75 Y80 V50 V75 Japan Mint 689127704338 | eBay",
            url:
              "https://www.ebay.com/itm/Mirrors-Yamaha-Y80-Y50-Y75-Y80-V50-V75-Japan-Mint/292190471095?epid=9009865854&hash=item4407e8c3b7:g:gmkAAOSwstJZR-Pw#shpCntId",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 213,
            windowId: 2,
            active: false,
            pinned: false,
            title: "windows 10 key | eBay",
            url:
              "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050430.m570.l1311.R1.TR12.TRC2.A0.H0.Xwindows+10+key.TRS0&_nkw=windows+10+key&_sacat=0",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 214,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "WINDOWS 7 Ultimate 32/64 Bit Activation key INSTANT DELIVERY 5MINT+DOWNLOAD Link | eBay",
            url:
              "https://www.ebay.com/itm/WINDOWS-7-Ultimate-32-64-Bit-Activation-key-INSTANT-DELIVERY-5MINT-DOWNLOAD-Link/113020363939?hash=item1a5089e4a3:g:1dkAAOSwSatbCmhX",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 215,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Watch Out For These Dirty Tricks From Discounted Software Resellers",
            url:
              "https://www.howtogeek.com/345412/watch-out-for-these-dirty-tricks-from-discounted-software-resellers/",
            favIconUrl: "https://www.howtogeek.com/public/favicon.ico"
          },
          {
            id: 216,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Microsoft Windows 7 Ultimate 32/64 bit MS Activation Key Full Version Win 7 Ult 885370258851 | eBay",
            url:
              "https://www.ebay.com/itm/Microsoft-Windows-7-Ultimate-32-64-bit-MS-Activation-Key-Full-Version-Win-7-Ult/283006856392?hash=item41e485ecc8:g:QIIAAOSwQN1bIQEb",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 219,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Бизнес-линч за 14.09.2017",
            url:
              "https://www.artlebedev.ru/kovodstvo/business-lynch/2017/09/14/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 220,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Новый органон — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%BE%D0%BD",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 221,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Пылающий",
            url: "http://www.avrora.spb.ru/films/pilayushchiy",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 222,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Список вопросов - дизайн - Miscellaneous - QW Confluence",
            url:
              "https://qworld.atlassian.net/wiki/spaces/TW/pages/347504649/-",
            favIconUrl:
              "https://qworld.atlassian.net/wiki/s/294714687/6452/6b50395b11a0f44cf166d43fcbc12cb41379fd84/10/_/favicon-update.ico"
          },
          {
            id: 223,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Осознанный хип-хоп — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D0%B8%D0%BF-%D1%85%D0%BE%D0%BF",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 225,
            windowId: 2,
            active: false,
            pinned: false,
            title: "И я в моем теплом теле (Введенский) — Wikilivres.ru",
            url:
              "http://wikilivres.ru/%D0%98_%D1%8F_%D0%B2_%D0%BC%D0%BE%D0%B5%D0%BC_%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BC_%D1%82%D0%B5%D0%BB%D0%B5_(%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9)",
            favIconUrl: "http://wikilivres.ru/favicon.ico"
          },
          {
            id: 231,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Киноцентр Родина",
            url: "http://rodinakino.ru/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 251,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Отзывы о торгово-сервисной компании Refresh your tech - Магазины - Санкт-Петербург",
            url:
              "https://spb.zoon.ru/shops/torgovo-servisnaya_kompaniya_refresh_your_tech/reviews/",
            favIconUrl: "https://spb.zoon.ru/favicon-32x32.png"
          },
          {
            id: 298,
            windowId: 2,
            active: false,
            pinned: false,
            title: "serve - npm",
            url: "https://www.npmjs.com/package/serve",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 306,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Смартфон Digma VOX FIRE 4G — Мобильные телефоны — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/1842968920?show-uid=319491229320339655916001&nid=54726&glfilter=7808633%3A1&filter-discount-only=1&context=search",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 352,
            windowId: 2,
            active: false,
            pinned: false,
            title: "tabs.remove() - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/remove",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 349,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Your second extension - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 347,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging",
            favIconUrl: null
          },
          {
            id: 348,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Firefox Is Back. It’s Time to Give It a Try. - The New York Times",
            url:
              "https://www.nytimes.com/2018/06/20/technology/personaltech/firefox-chrome-browser-privacy.html",
            favIconUrl:
              "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico"
          },
          {
            id: 350,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Владик on Twitter: "Короче, один лайк - один факт о реальной травматологии"',
            url: "https://twitter.com/glazzzvlad/status/1019490333158240257",
            favIconUrl: "https://abs.twimg.com/favicons/favicon.ico"
          },
          {
            id: 354,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Introducing FilterBubbler: A WebExtension built using React/Redux – Mozilla Hacks – the Web developer blog",
            url:
              "https://hacks.mozilla.org/2017/06/introducing-filterbubbler-a-webextension-built-using-reactredux/",
            favIconUrl:
              "https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/wp-content/themes/Hax/favicon.ico"
          },
          {
            id: 358,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Close icons - Download 4829 free & premium icons on Iconfinder",
            url: "https://www.iconfinder.com/search/?q=close&price=free",
            favIconUrl:
              "https://cdn0.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa"
          },
          {
            id: 363,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "lusakasa/saka-extension-boilerplate: Opinionated boilerplate for building extensions for Chrome and Firefox",
            url: "https://github.com/lusakasa/saka-extension-boilerplate",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 367,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Создание и вызов событий - Руководство Web-разработчика | MDN",
            url:
              "https://developer.mozilla.org/ru/docs/Web/Guide/Events/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 368,
            windowId: 2,
            active: false,
            pinned: false,
            title: "medium.com | 502: Bad gateway",
            url:
              "https://medium.com/@LeoAref/simple-event-dispatcher-implementation-using-javascript-36d0eadf5a11",
            favIconUrl: "https://medium.com/favicon.ico"
          },
          {
            id: 369,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Manager – Figma",
            url:
              "https://www.figma.com/file/TBPgVBHpN0yEZqoPRjDUXasM/Tabs-Manager?node-id=1%3A5",
            favIconUrl: "https://static.figma.com/app/icon/1/favicon.svg"
          },
          {
            id: 395,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "developit/preact: ⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
            url: "https://github.com/developit/preact",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 397,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Brunch: Commands — Brunch",
            url: "http://brunch.io/docs/commands",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 401,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Plugins — Brunch",
            url: "http://brunch.io/plugins",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 404,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Node Security Platform | Advisory",
            url: "https://nodesecurity.io/advisories/146",
            favIconUrl: "https://nodesecurity.io/img/nodesecurity.png"
          },
          {
            id: 408,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Keeper",
            url: "http://localhost:3333/",
            favIconUrl: null
          },
          {
            id: 415,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Add-ons Manager",
            url: "about:addons",
            favIconUrl:
              "chrome://mozapps/skin/extensions/extensionGeneric-16.svg"
          },
          {
            id: 416,
            windowId: 2,
            active: true,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging#addons",
            favIconUrl: null
          }
        ]
      }
    ],
    header: {
      id: 4,
      date: 1532277693312,
      windowsCount: 2,
      tabsCount: 195
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      },
      {
        id: 2,
        focused: false,
        tabs: [
          {
            id: 150,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга: "Омерзительное искусство. Юмор и хоррор шедевров живописи" - Софья Багдасарова. Купить книгу, читать рецензии | ISBN 978-5-04-088717-0 | Лабиринт',
            url: "https://www.labirint.ru/books/630406/",
            favIconUrl: "https://img.labirint.ru/favicon.ico?20130611"
          },
          {
            id: 151,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Артемий Лебедев - Городской дизайн.",
            url:
              "https://www.facebook.com/temalebedev/videos/10156571532046095/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 152,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Режим работы - Глазной диагностический центр №7 (Санкт-Петербург, Моховая 38)",
            url: "http://mohovaya38.ru/rezhim_raboty/",
            favIconUrl: "http://mohovaya38.ru/favicon.ico"
          },
          {
            id: 153,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Чехов А.П. (Author of Скучная история)",
            url:
              "https://www.goodreads.com/author/show/17920932._?from_search=true",
            favIconUrl: "https://www.goodreads.com/favicon.ico"
          },
          {
            id: 154,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Что почитать Чехова?: chto_chitat",
            url: "https://chto-chitat.livejournal.com/4259351.html",
            favIconUrl: "https://www.livejournal.com/favicon.ico?v=2"
          },
          {
            id: 155,
            windowId: 2,
            active: false,
            pinned: false,
            title: "QW Confluence",
            url: "https://qworld.atlassian.net/wiki/spaces/TW/pages/461963265",
            favIconUrl:
              "https://cpfs-cdn.atlassian.com/assets/shared/id-summit/id-summit-aa-favicon.ico"
          },
          {
            id: 156,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Mindful - healthy mind, healthy life",
            url: "https://www.mindful.org/",
            favIconUrl:
              "https://www.mindful.org/wp-content/uploads/mindfl-logo-dark-blue-32x32.jpg"
          },
          {
            id: 157,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Кому на самом деле нужно плацебо: scinquisitor",
            url: "https://scinquisitor.livejournal.com/94919.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 158,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Illusion mindfulness improves cancer survival | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/29/creating-the-illusion-that-mindfulness-improves-the-survival-of-cancer-patients/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 159,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mindfulness research's uninformative control groups | Mind the Brain",
            url:
              "http://blogs.plos.org/mindthebrain/2016/06/23/mindfulness-researchs-huge-problem-with-uninformative-control-groups/",
            favIconUrl:
              "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
          },
          {
            id: 160,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Нейротеология: scinquisitor",
            url: "https://scinquisitor.livejournal.com/1922.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080"
          },
          {
            id: 161,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Стэнфордский тюремный эксперимент — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%8D%D0%BD%D1%84%D0%BE%D1%80%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D1%80%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82#cite_ref-7",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 162,
            windowId: 2,
            active: false,
            pinned: false,
            title: "The Lifespan of a Lie – Trust Issues – Medium",
            url:
              "https://medium.com/s/trustissues/the-lifespan-of-a-lie-d869212b1f62",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 163,
            windowId: 2,
            active: false,
            pinned: false,
            title: "How I Wait Years to Get My Photos",
            url:
              "https://petapixel.com/2018/06/18/how-i-wait-years-to-get-my-photos/",
            favIconUrl: "https://petapixel.com/favicon.ico"
          },
          {
            id: 164,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "What is the best approach to design state? · Issue #1825 · reduxjs/redux · GitHub",
            url: "https://github.com/reduxjs/redux/issues/1825",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 165,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "10 Tips for Better Redux Architecture – JavaScript Scene – Medium",
            url:
              "https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 166,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Falcor: One Model Everywhere",
            url: "https://netflix.github.io/falcor/",
            favIconUrl:
              "https://netflix.github.io/falcor/images/favicons/favicons-32x32.png"
          },
          {
            id: 167,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Five Tips for Working with Redux in Large Applications",
            url:
              "https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb",
            favIconUrl:
              "https://cdn-images-1.medium.com/fit/c/256/256/1*ljvUZzmjFTZHP4OBrWHRWg.png"
          },
          {
            id: 168,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "reactjs - What is the core difference of redux & reflux in using react based application? - Stack Overflow",
            url:
              "https://stackoverflow.com/questions/36326210/what-is-the-core-difference-of-redux-reflux-in-using-react-based-application",
            favIconUrl:
              "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"
          },
          {
            id: 169,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Митинги против повышения пенсионного возраста — Meduza",
            url:
              "https://meduza.io/video/2018/07/01/protestnye-aktsii-protiv-povysheniya-pensionnogo-vozrasta",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 170,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Сериал «Незнакомцы» от Facebook: реалистично, как «Девочки», смешно, как «Друзья» — Meduza",
            url:
              "https://meduza.io/feature/2018/07/01/serial-neznakomtsy-ot-facebook-realistichno-kak-devochki-smeshno-kak-druzya",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 171,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга Журнал "Искусство кино" №5-6/2018 - купить в книжном интернет-магазине по цене 300 руб | Podpisnie.ru',
            url:
              "https://www.podpisnie.ru/books/zhurnal-iskusstvo-kino-5-6-2018",
            favIconUrl: "https://www.podpisnie.ru/favicon.ico"
          },
          {
            id: 172,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Лена Грачёва - редко что-то шарю, но это всё же хочу... | Facebook",
            url: "https://www.facebook.com/almamorenaya/posts/881811982007203",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 173,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 174,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - А вообще, спасибо безвестному стукачу, из-за... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1328391260577544&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 175,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Stranger Things - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Stranger_Things",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 177,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Creating Library Definitions | Flow",
            url: "https://flow.org/en/docs/libdefs/creation/",
            favIconUrl:
              "https://flow.org/static/favicon.png?t=2018-07-05T22:22:49+00:00"
          },
          {
            id: 178,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "flow-typed/definitions/npm at master · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/tree/master/definitions/npm",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 179,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Roadmap to a v3.0.0 of flow-typed · Issue #1494 · flow-typed/flow-typed · GitHub",
            url: "https://github.com/flow-typed/flow-typed/issues/1494",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 180,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Which interfaces are already written? · Issue #13 · flow-typed/flow-typed · GitHub",
            url:
              "https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 181,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Intersection doesn't work for exact object types · Issue #2626 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/2626",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 183,
            windowId: 2,
            active: false,
            pinned: false,
            title: "That's so fetch! - JakeArchibald.com",
            url: "https://jakearchibald.com/2015/thats-so-fetch/",
            favIconUrl: "https://jakearchibald.com/favicon.ico"
          },
          {
            id: 184,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "react-static/static.config.js at master · nozzle/react-static · GitHub",
            url:
              "https://github.com/nozzle/react-static/blob/master/examples/sass/static.config.js",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 185,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "React Static - A progressive static-site framework for React @ OgdenJS - YouTube",
            url: "https://www.youtube.com/watch?v=OqbJ5swVpDQ",
            favIconUrl: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
          },
          {
            id: 187,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Setting up CSS Modules with React and Webpack",
            url: "https://javascriptplayground.com/css-modules-webpack-react/",
            favIconUrl: "https://javascriptplayground.com/favicon.ico"
          },
          {
            id: 188,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - css-modules/css-modules: Documentation about css-modules",
            url: "https://github.com/css-modules/css-modules",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 189,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Ася Федотова",
            url: "https://vk.com/afedotova72",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 190,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Коррекция на множественное тестирование — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 192,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Мандрагора — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%B0#%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%BD%D1%8B%D0%B5_%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 193,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Text Fields · An Introduction to Elm",
            url:
              "https://guide.elm-lang.org/architecture/user_input/text_fields.html",
            favIconUrl: "https://guide.elm-lang.org/gitbook/images/favicon.ico"
          },
          {
            id: 194,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Redux",
            url: "https://redux.js.org/introduction/prior-art",
            favIconUrl: null
          },
          {
            id: 195,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Cycle.js",
            url: "https://cycle.js.org/",
            favIconUrl: null
          },
          {
            id: 196,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - minedeljkovic/redux-elmish: The Elm Architecture in Redux, statically checked using flow",
            url: "https://github.com/minedeljkovic/redux-elmish",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 197,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - brabadu/tanok: Elm Architecture-inspired wrapper for Rx.js+React",
            url: "https://github.com/brabadu/tanok",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 198,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "GitHub - didierfranc/react-waterfall: React store built on top of the new context API",
            url: "https://github.com/didierfranc/react-waterfall",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 199,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у Apple iPad mini 3 16Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-3-16gb-wi-fi-cellular-0618d196",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 257,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Trade-in и продажа техники в Санкт-Петербурге. REFRESH your tech",
            url: "http://www.refreshyourtech.ru/",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 200,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Купить б/у iPad mini 4 128Gb Wi-Fi + Cellular. Цена.",
            url:
              "http://www.refreshyourtech.ru/planshety/ipad-mini-4-128gb-lte-0618d172",
            favIconUrl: "http://www.refreshyourtech.ru/images/favicon.ico"
          },
          {
            id: 265,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad mini 4 128Gb Wi-Fi в интернет-магазинах — Планшеты — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/product/12859392/offers?local-offers-first=0&how=rorp",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 307,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Apple iPad mini 4 128Gb Wi-Fi Silver",
            url:
              "http://www.pitergsm.ru/e-store/tablets/index.php?ELEMENT_ID=995&r1=&r2=&ymclid=319492699825359651400004",
            favIconUrl: "http://www.pitergsm.ru/favicon.ico"
          },
          {
            id: 303,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319489462975119837300000",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 302,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Apple iPad mini 4 Wi-Fi 128GB (серебристый) характеристики, техническое описание планшета - интернет-магазин Связной",
            url:
              "https://www.svyaznoy.ru/catalog/notebook/7063/2752367/specs#mainContent",
            favIconUrl: "https://www.svyaznoy.ru/favicons/favicon-32x32.png?v=1"
          },
          {
            id: 301,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Планшеты Apple iPad – купить iPad по отличной цене",
            url: "https://www.tehnikalux.ru/spb/category/apple/ipad/",
            favIconUrl: "https://www.tehnikalux.ru/favicon.ico"
          },
          {
            id: 275,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Купить iPad mini 4 Wi-Fi 128gb Space Gray в фирменном магазине savensale.ru",
            url:
              "https://savensale.ru/appletechnika/ipad_mini_4_MK9N2?ymclid=319166515579151714600001",
            favIconUrl: "https://savensale.ru/image/data/hero/fav.png"
          },
          {
            id: 245,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=12859395&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 246,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Сравнение товаров — Яндекс.Маркет",
            url:
              "https://market.yandex.ru/compare/aFtjUT7JtMeu1sLMhgKM6FdEwNK?hid=6427100&id=30015180&id=11153507",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 261,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Планшет Apple iPad (2018) 32Gb Wi-Fi + Cellular — Планшеты — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/30015180?nid=54545&track=fr_compare",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 242,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Compare Apple iPad mini 3 vs. Apple iPad mini 4 - GSMArena.com",
            url:
              "https://www.gsmarena.com/compare.php3?idPhone1=6741&idPhone2=7561",
            favIconUrl: "https://www.gsmarena.com/i/favicon.ico"
          },
          {
            id: 202,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Платформы для сборки ПК - Компьютерные комплектующие",
            url: "https://www.ulmart.ru/catalog/assembly_bases",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 204,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Антон Долин - (Опять странный вопрос) А существует же наверняка...",
            url: "https://www.facebook.com/adolin3/posts/10215523587299037",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 205,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Умер Клод Ланцман — режиссер «Шоа», важнейшего документального фильма про Холокост — Meduza",
            url:
              "https://meduza.io/feature/2018/07/05/umer-klod-lantsman-rezhisser-shoa-vazhneyshego-dokumentalnogo-filma-pro-holokost",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 206,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Sourcetree | Free Git GUI for Mac and Windows",
            url: "https://www.sourcetreeapp.com/",
            favIconUrl:
              "https://www.sourcetreeapp.com/assets/img/favicons/sourcetree/favicon-32x32.png"
          },
          {
            id: 207,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Зои / Родина",
            url: "http://rodinakino.ru/films/soon/2018/06/20/02/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 209,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Mirrors Yamaha Y80 Y50 Y75 Y80 V50 V75 Japan Mint 689127704338 | eBay",
            url:
              "https://www.ebay.com/itm/Mirrors-Yamaha-Y80-Y50-Y75-Y80-V50-V75-Japan-Mint/292190471095?epid=9009865854&hash=item4407e8c3b7:g:gmkAAOSwstJZR-Pw#shpCntId",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 213,
            windowId: 2,
            active: false,
            pinned: false,
            title: "windows 10 key | eBay",
            url:
              "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050430.m570.l1311.R1.TR12.TRC2.A0.H0.Xwindows+10+key.TRS0&_nkw=windows+10+key&_sacat=0",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 214,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "WINDOWS 7 Ultimate 32/64 Bit Activation key INSTANT DELIVERY 5MINT+DOWNLOAD Link | eBay",
            url:
              "https://www.ebay.com/itm/WINDOWS-7-Ultimate-32-64-Bit-Activation-key-INSTANT-DELIVERY-5MINT-DOWNLOAD-Link/113020363939?hash=item1a5089e4a3:g:1dkAAOSwSatbCmhX",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 215,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Watch Out For These Dirty Tricks From Discounted Software Resellers",
            url:
              "https://www.howtogeek.com/345412/watch-out-for-these-dirty-tricks-from-discounted-software-resellers/",
            favIconUrl: "https://www.howtogeek.com/public/favicon.ico"
          },
          {
            id: 216,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Microsoft Windows 7 Ultimate 32/64 bit MS Activation Key Full Version Win 7 Ult 885370258851 | eBay",
            url:
              "https://www.ebay.com/itm/Microsoft-Windows-7-Ultimate-32-64-bit-MS-Activation-Key-Full-Version-Win-7-Ult/283006856392?hash=item41e485ecc8:g:QIIAAOSwQN1bIQEb",
            favIconUrl: "https://www.ebay.com/favicon.ico"
          },
          {
            id: 219,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Бизнес-линч за 14.09.2017",
            url:
              "https://www.artlebedev.ru/kovodstvo/business-lynch/2017/09/14/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 220,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Новый органон — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%BE%D0%BD",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 221,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Пылающий",
            url: "http://www.avrora.spb.ru/films/pilayushchiy",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 222,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Список вопросов - дизайн - Miscellaneous - QW Confluence",
            url:
              "https://qworld.atlassian.net/wiki/spaces/TW/pages/347504649/-",
            favIconUrl:
              "https://qworld.atlassian.net/wiki/s/294714687/6452/6b50395b11a0f44cf166d43fcbc12cb41379fd84/10/_/favicon-update.ico"
          },
          {
            id: 223,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Осознанный хип-хоп — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D0%B8%D0%BF-%D1%85%D0%BE%D0%BF",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 225,
            windowId: 2,
            active: false,
            pinned: false,
            title: "И я в моем теплом теле (Введенский) — Wikilivres.ru",
            url:
              "http://wikilivres.ru/%D0%98_%D1%8F_%D0%B2_%D0%BC%D0%BE%D0%B5%D0%BC_%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BC_%D1%82%D0%B5%D0%BB%D0%B5_(%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9)",
            favIconUrl: "http://wikilivres.ru/favicon.ico"
          },
          {
            id: 231,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Киноцентр Родина",
            url: "http://rodinakino.ru/",
            favIconUrl: "http://rodinakino.ru/favicon.ico"
          },
          {
            id: 251,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Отзывы о торгово-сервисной компании Refresh your tech - Магазины - Санкт-Петербург",
            url:
              "https://spb.zoon.ru/shops/torgovo-servisnaya_kompaniya_refresh_your_tech/reviews/",
            favIconUrl: "https://spb.zoon.ru/favicon-32x32.png"
          },
          {
            id: 298,
            windowId: 2,
            active: false,
            pinned: false,
            title: "serve - npm",
            url: "https://www.npmjs.com/package/serve",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 306,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Смартфон Digma VOX FIRE 4G — Мобильные телефоны — купить по выгодной цене на Яндекс.Маркете",
            url:
              "https://market.yandex.ru/product/1842968920?show-uid=319491229320339655916001&nid=54726&glfilter=7808633%3A1&filter-discount-only=1&context=search",
            favIconUrl: "https://yastatic.net/market-export/_/i/favicon-32.png"
          },
          {
            id: 352,
            windowId: 2,
            active: false,
            pinned: false,
            title: "tabs.remove() - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/remove",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 349,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Your second extension - Mozilla | MDN",
            url:
              "https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 347,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging",
            favIconUrl: null
          },
          {
            id: 348,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Firefox Is Back. It’s Time to Give It a Try. - The New York Times",
            url:
              "https://www.nytimes.com/2018/06/20/technology/personaltech/firefox-chrome-browser-privacy.html",
            favIconUrl:
              "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico"
          },
          {
            id: 350,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Владик on Twitter: "Короче, один лайк - один факт о реальной травматологии"',
            url: "https://twitter.com/glazzzvlad/status/1019490333158240257",
            favIconUrl: "https://abs.twimg.com/favicons/favicon.ico"
          },
          {
            id: 354,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Introducing FilterBubbler: A WebExtension built using React/Redux – Mozilla Hacks – the Web developer blog",
            url:
              "https://hacks.mozilla.org/2017/06/introducing-filterbubbler-a-webextension-built-using-reactredux/",
            favIconUrl:
              "https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/wp-content/themes/Hax/favicon.ico"
          },
          {
            id: 358,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Close icons - Download 4829 free & premium icons on Iconfinder",
            url: "https://www.iconfinder.com/search/?q=close&price=free",
            favIconUrl:
              "https://cdn0.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa"
          },
          {
            id: 363,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "lusakasa/saka-extension-boilerplate: Opinionated boilerplate for building extensions for Chrome and Firefox",
            url: "https://github.com/lusakasa/saka-extension-boilerplate",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 367,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "Создание и вызов событий - Руководство Web-разработчика | MDN",
            url:
              "https://developer.mozilla.org/ru/docs/Web/Guide/Events/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9",
            favIconUrl:
              "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png"
          },
          {
            id: 368,
            windowId: 2,
            active: false,
            pinned: false,
            title: "medium.com | 502: Bad gateway",
            url:
              "https://medium.com/@LeoAref/simple-event-dispatcher-implementation-using-javascript-36d0eadf5a11",
            favIconUrl: "https://medium.com/favicon.ico"
          },
          {
            id: 369,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Manager – Figma",
            url:
              "https://www.figma.com/file/TBPgVBHpN0yEZqoPRjDUXasM/Tabs-Manager?node-id=1%3A5",
            favIconUrl: "https://static.figma.com/app/icon/1/favicon.svg"
          },
          {
            id: 395,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              "developit/preact: ⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
            url: "https://github.com/developit/preact",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 397,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Brunch: Commands — Brunch",
            url: "http://brunch.io/docs/commands",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 401,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Plugins — Brunch",
            url: "http://brunch.io/plugins",
            favIconUrl: "http://brunch.io/favicon.ico"
          },
          {
            id: 404,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Node Security Platform | Advisory",
            url: "https://nodesecurity.io/advisories/146",
            favIconUrl: "https://nodesecurity.io/img/nodesecurity.png"
          },
          {
            id: 408,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Tabs Keeper",
            url: "http://localhost:3333/",
            favIconUrl: null
          },
          {
            id: 415,
            windowId: 2,
            active: false,
            pinned: false,
            title: "Add-ons Manager",
            url: "about:addons",
            favIconUrl:
              "chrome://mozapps/skin/extensions/extensionGeneric-16.svg"
          },
          {
            id: 416,
            windowId: 2,
            active: true,
            pinned: false,
            title: "Debugging with Firefox Developer Tools",
            url: "about:debugging#addons",
            favIconUrl: null
          }
        ]
      }
    ],
    header: {
      id: 5,
      date: 1532277193541,
      windowsCount: 2,
      tabsCount: 150
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          },
          {
            id: 2,
            windowId: 1,
            active: false,
            pinned: true,
            title: "лекарства - Google Sheets",
            url:
              "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
            favIconUrl:
              "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
          },
          {
            id: 325,
            windowId: 1,
            active: false,
            pinned: false,
            title: "судьба ужина по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3132384.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=262"
          },
          {
            id: 296,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Network Dependencies · he-he-org/he-he-2",
            url: "https://github.com/he-he-org/he-he-2/network/dependencies",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 300,
            windowId: 1,
            active: false,
            pinned: false,
            title: "NVD - CVE-2018-3809",
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-3809",
            favIconUrl:
              "https://nvd.nist.gov/App_Themes/Default/Images/favicon.ico"
          },
          {
            id: 277,
            windowId: 1,
            active: false,
            pinned: false,
            title: "(32) Новости",
            url:
              "https://vk.com/feed?z=photo-48872313_456242438%2Fwall-48872313_11365",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 8,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Хорошо прорисованные женщины: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1280049.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 9,
            windowId: 1,
            active: false,
            pinned: false,
            title: 'Живопись из фильма "Титаник": shakko_kitsune - Page 3',
            url: "https://shakko-kitsune.livejournal.com/1278640.html?page=3",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 11,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем круты «Авиньонские девицы» Пикассо? | Шакко | Яндекс Дзен",
            url:
              "https://zen.yandex.ru/media/shakko/chem-kruty-avinonskie-devicy-pikasso-5af6ffb67425f5fcbcde7db7",
            favIconUrl: "https://yastatic.net/zen-logos/files/favicons/icon.svg"
          },
          {
            id: 12,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пабло Руис Пикассо - NeWestMuseum",
            url:
              "http://www.newestmuseum.ru/data/authors/p/picasso_pablo/index.php",
            favIconUrl: "http://www.newestmuseum.ru/favicon.ico"
          },
          {
            id: 13,
            windowId: 1,
            active: false,
            pinned: false,
            title: "кельтский камень - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130586.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 14,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шаламов по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130308.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 15,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Зав. игровым салоном: ksoftware",
            url: "https://ksoftware.livejournal.com/383517.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 16,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Музей истории техники в Ростове. Кайф: ksoftware",
            url: "https://ksoftware.livejournal.com/397536.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 18,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Using achievement stats to estimate sales on steam – Tyler Glaiel – Medium",
            url:
              "https://medium.com/@tglaiel/using-achievement-stats-to-estimate-sales-on-steam-d18b4b635d23",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 20,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Печали: akuklev",
            url: "https://akuklev.livejournal.com/1282902.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 21,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fabrice Bellard - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Fabrice_Bellard",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 22,
            windowId: 1,
            active: false,
            pinned: false,
            title: "открытая запись - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3129950.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 23,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ну вот, maxim умучали и в твиторе. И чего вы его так все не любите,…: sorhed",
            url: "https://sorhed.livejournal.com/619253.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 24,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Почему я удалил все посты в ЖЖ и Твиттере: maxim",
            url: "https://maxim.livejournal.com/531021.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 25,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Заголовок: lambdaterm1",
            url: "https://lambdaterm1.livejournal.com/730.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 26,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-99523325_4368",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 27,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ПитерФотоФест - 2018",
            url: "http://piterfotofest.ru/#rec16367493",
            favIconUrl:
              "https://static.tildacdn.com/tild6234-6131-4436-a561-376363656563/favicon.ico"
          },
          {
            id: 28,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Об Байеса - 2 - Не кинокритик. Не палеонтолог.",
            url: "https://plakhov.livejournal.com/227597.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 29,
            windowId: 1,
            active: false,
            pinned: false,
            title: "другая америка - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3129470.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 30,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Course | DSE200x | edX",
            url:
              "https://courses.edx.org/courses/course-v1:UCSanDiegoX+DSE200x+1T2018/course/",
            favIconUrl:
              "https://prod-edxapp.edx-cdn.org/static/edx.org/images/favicon.9028de6ff678.ico"
          },
          {
            id: 31,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | шо за Шноль",
            url: "https://juan-gandhi.dreamwidth.org/4264984.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 32,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пятое издание «Ководства» Лебедева",
            url: "https://www.artlebedev.ru/izdal/kovodstvo5/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 33,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Measure Performance with the RAIL Model  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/rail",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 34,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Update on Async Rendering - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 35,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Duran - Публикации",
            url:
              "https://www.facebook.com/ArtByDuran/photos/a.2159449564069966.1073741829.318130841535190/2159452500736339/?type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 36,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 37,
            windowId: 1,
            active: false,
            pinned: false,
            title: "афиша клуба",
            url: "https://vk.com/page-63477485_52138480",
            favIconUrl:
              "https://vk.com/images/icons/favicons/fav_pause_2x.ico?6"
          },
          {
            id: 38,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Сергей Мардан",
            url: "https://www.facebook.com/sergeynudol?fref=jewel",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 39,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fredegund: Assassination-obsessed Queen",
            url: "https://www.rejectedprincesses.com/princesses/fredegund",
            favIconUrl:
              "https://www.rejectedprincesses.com/wp-content/uploads/2014/10/rp.png"
          },
          {
            id: 40,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 41,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "ШЛЮХА (рассказ) Приятель позвал в бар смотреть... - Максим Матковский",
            url:
              "https://www.facebook.com/nelson.junior.54379/posts/10155404512656576",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 42,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Великие споры - InLiberty",
            url: "https://www.inliberty.ru/public/spory/",
            favIconUrl: "https://www.inliberty.ru/i/favicon/favicon-32x32.png"
          },
          {
            id: 43,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | TIL from Duolingo",
            url: "https://juan-gandhi.dreamwidth.org/4260093.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 44,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Слои пользы: ksoftware",
            url: "https://ksoftware.livejournal.com/396031.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 45,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пикник «Афиши» 4 августа 2018 — официальный сайт фестиваля",
            url: "https://picnic.afisha.ru/faq",
            favIconUrl:
              "https://picnic.afisha.ru/static/images/A-Picnic-2018-FavIcon-64.png"
          },
          {
            id: 46,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Вышел новый альбом Gorillaz. Послушайте его прямо сейчас — Meduza",
            url:
              "https://meduza.io/shapito/2018/06/29/vyshel-novyy-albom-gorillaz-poslushayte-ego-pryamo-seychas?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-29",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 47,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3578",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 48,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ВИЗУАЛЬНАЯ МЕДИТАЦИЯ",
            url: "https://outcinema.ru/visual-meditation",
            favIconUrl:
              "https://static.tildacdn.com/tild6265-3539-4131-b566-373465353165/favicon.ico"
          },
          {
            id: 49,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Миротворец. Портрет Апхичатпхонга Вирасетакуна - Искусство кино",
            url: "http://kinoart.ru/archive/2010/11/n11-article12",
            favIconUrl: "http://kinoart.ru/favicon.ico"
          },
          {
            id: 50,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall2064116_418",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 51,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Почему в России не надо повышать налоги? Экономический обозреватель Борис Грозовский отвечает заместителю главреда «Медузы» Александру Поливанову — Meduza",
            url:
              "https://meduza.io/feature/2018/06/26/pochemu-v-rossii-ne-nado-povyshat-nalogi?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-26",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 52,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Новая газета»: в Пскове поставили памятники на могилах десантников, погибших летом 2014 года — Meduza",
            url:
              "https://meduza.io/news/2018/06/25/novaya-gazeta-v-pskove-postavili-pamyatniki-na-mogilah-desantnikov-pogibshih-letom-2014-goda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-25",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 53,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Андрей Ерёменко. Генерал против всех",
            url: "https://kartaistorii.ru/eremenko/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 54,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шарик и кисет - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124708.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 55,
            windowId: 1,
            active: false,
            pinned: false,
            title: "мимоза - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124074.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 56,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "» Scoperto il primo dipinto firmato e autografato da Leonardo Da Vinci",
            url:
              "http://www.art-news.it/scoperto-il-primo-dipinto-firmato-e-autografato-da-leonardo-da-vinci/",
            favIconUrl:
              "http://www.art-news.it/wp-content/uploads/Loghetto-Art-News.png"
          },
          {
            id: 57,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3509",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 58,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Сеанс кинотерапии. «Арарат», режиссер Атом Эгоян - Искусство кино",
            url: "http://www.kinoart.ru/archive/2002/12/n12-article7",
            favIconUrl: "http://www.kinoart.ru/favicon.ico"
          },
          {
            id: 59,
            windowId: 1,
            active: false,
            pinned: false,
            title: "panda-grammar - npm",
            url: "https://www.npmjs.com/package/panda-grammar",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 60,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-3818033_17029",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 61,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как приукрашивали портреты маслом после распространения фотографии: shakko_kitsune - Page 2",
            url: "https://shakko-kitsune.livejournal.com/1268839.html?page=2",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 62,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Насильник, грабитель, поп-звезда: Убит XXXTentacion. Он был самым парадоксальным молодым рэпером Америки — Meduza",
            url:
              "https://meduza.io/feature/2018/06/19/nasilnik-grabitel-pop-zvezda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-19",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 63,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Recursive descent parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Recursive_descent_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 64,
            windowId: 1,
            active: false,
            pinned: false,
            title: "LR parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/LR_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 65,
            windowId: 1,
            active: false,
            pinned: false,
            title: "parsimmon/API.md at master · jneen/parsimmon · GitHub",
            url:
              "https://github.com/jneen/parsimmon/blob/master/API.md#terminology",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 66,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как в России будут повышать пенсионный возраст? И зачем? — Meduza",
            url:
              "https://meduza.io/cards/kak-v-rossii-budut-povyshat-pensionnyy-vozrast-i-zachem",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 67,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Они хотят сделать дестабилизацию обстановки». СБУ показала «переговоры организаторов покушения на Бабченко»: Пытаемся это пересказать — Meduza",
            url:
              "https://meduza.io/feature/2018/06/15/oni-hotyat-sdelat-destabilizatsiyu-obstanovki-sbu-pokazalo-peregovory-organizatorov-pokusheniya-na-babchenko?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-15",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 68,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-112289703_13361",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 69,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-55155418_165878",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 70,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-110501497_16688",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 71,
            windowId: 1,
            active: false,
            pinned: false,
            title: "нет законов - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3119801.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 72,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Official page for Language Server Protocol",
            url: "https://microsoft.github.io/language-server-protocol/",
            favIconUrl:
              "https://microsoft.github.io/language-server-protocol/img/favicon.png"
          },
          {
            id: 73,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            url:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 74,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем целлюлит Рубенса отличается от целлюлита Ван Дейка и целлюлита Йорданса?: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1264148.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 75,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о конкурсах красоты - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3120316.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 76,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Бренда «Евросеть» больше не будет. Чем нам запомнится эта компания — Meduza",
            url:
              "https://meduza.io/slides/legendarnyy-brend-evroset-budet-likvidirovan-chem-nam-zapomnitsya-eta-kompaniya?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-06",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 77,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Abstrakte Kunst Poster bei AllPosters.de",
            url:
              "https://www.allposters.de/-st/Abstrakte-Kunst-Poster_c86168_.htm",
            favIconUrl: "https://www.allposters.de/favicon.ico"
          },
          {
            id: 78,
            windowId: 1,
            active: false,
            pinned: false,
            title: "‎NimbusMind: Meditation & Calm on the App Store",
            url:
              "https://itunes.apple.com/us/app/nimbusmind-meditation-calm/id1278663918?mt=8",
            favIconUrl: "https://itunes.apple.com/favicon.ico"
          },
          {
            id: 79,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Генрих Ягода. Грязная работа",
            url: "https://kartaistorii.ru/yagoda/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 80,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, design systems will replace design jobs — DesignSystems.com",
            url:
              "https://www.designsystems.com/stories/will-design-systems-replace-designers/",
            favIconUrl: "https://www.designsystems.com/favicon-32x32.png"
          },
          {
            id: 81,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как изучать негодяев • Arzamas",
            url: "https://arzamas.academy/radio/announcements/hlevniuk",
            favIconUrl: "https://arzamas.academy/favicon-32x32.png"
          },
          {
            id: 82,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Считают своим моральным долгом потушить пожар»: как добровольные пожарные спасают огромные территории от огня — Такие Дела",
            url: "https://takiedela.ru/news/2018/04/22/firefighters/",
            favIconUrl:
              "https://takiedela.ru/wp-content/themes/takiedela/assets/image/icons/favicon-32x32.png"
          },
          {
            id: 83,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Error Boundaries - React",
            url:
              "https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 84,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - hlaueriksson/jamstack-cms: A JAMstack experiment with a Headless CMS",
            url: "https://github.com/hlaueriksson/jamstack-cms",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 85,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-72326580_646949",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 86,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - Несравненный Эгон Шиле. 100 лет со дня... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215045413584993",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 87,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/arhstoyanie-2018",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 88,
            windowId: 1,
            active: false,
            pinned: false,
            title: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            url: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            favIconUrl: "https://solosale.ru/favicon.ico"
          },
          {
            id: 89,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Гитлер пришел к власти | История | DW | 29.01.2013",
            url:
              "https://www.dw.com/ru/%D0%BA%D0%B0%D0%BA-%D0%B3%D0%B8%D1%82%D0%BB%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D1%88%D0%B5%D0%BB-%D0%BA-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8/a-1581471",
            favIconUrl: "https://www.dw.com/favicon.png"
          },
          {
            id: 90,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Фотограф, которого никто не знал",
            url:
              "https://www.adme.ru/tvorchestvo-fotografy/fotograf-kotorogo-nikto-ne-znal-480205/",
            favIconUrl: "https://www.adme.ru/favicon.ico"
          },
          {
            id: 91,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ФАКУЛЬТЕТЫ ИСКУССТВ - LES",
            url: "https://les.media/articles/584226-fakulbtety-iskusstv",
            favIconUrl: "https://les.media/favicon-32x32.png"
          },
          {
            id: 92,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Александр Введенский — «В ленинградское отделение...»",
            url: "http://slova.org.ru/vvedenskiy/v_leningradskoe_otdelenie/",
            favIconUrl: "http://slova.org.ru/favicon.ico"
          },
          {
            id: 93,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Побочные эффекты осознанности 1. У вас... - Sergey Shalashenko | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=2309388555741540&set=a.328232067190542.95483.100000112538277&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      }
    ],
    header: {
      id: 6,
      date: 1532271693737,
      windowsCount: 1,
      tabsCount: 144
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          },
          {
            id: 2,
            windowId: 1,
            active: false,
            pinned: true,
            title: "лекарства - Google Sheets",
            url:
              "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
            favIconUrl:
              "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
          },
          {
            id: 325,
            windowId: 1,
            active: false,
            pinned: false,
            title: "судьба ужина по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3132384.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=262"
          },
          {
            id: 296,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Network Dependencies · he-he-org/he-he-2",
            url: "https://github.com/he-he-org/he-he-2/network/dependencies",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 300,
            windowId: 1,
            active: false,
            pinned: false,
            title: "NVD - CVE-2018-3809",
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-3809",
            favIconUrl:
              "https://nvd.nist.gov/App_Themes/Default/Images/favicon.ico"
          },
          {
            id: 277,
            windowId: 1,
            active: false,
            pinned: false,
            title: "(32) Новости",
            url:
              "https://vk.com/feed?z=photo-48872313_456242438%2Fwall-48872313_11365",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 8,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Хорошо прорисованные женщины: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1280049.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 9,
            windowId: 1,
            active: false,
            pinned: false,
            title: 'Живопись из фильма "Титаник": shakko_kitsune - Page 3',
            url: "https://shakko-kitsune.livejournal.com/1278640.html?page=3",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 11,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем круты «Авиньонские девицы» Пикассо? | Шакко | Яндекс Дзен",
            url:
              "https://zen.yandex.ru/media/shakko/chem-kruty-avinonskie-devicy-pikasso-5af6ffb67425f5fcbcde7db7",
            favIconUrl: "https://yastatic.net/zen-logos/files/favicons/icon.svg"
          },
          {
            id: 12,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пабло Руис Пикассо - NeWestMuseum",
            url:
              "http://www.newestmuseum.ru/data/authors/p/picasso_pablo/index.php",
            favIconUrl: "http://www.newestmuseum.ru/favicon.ico"
          },
          {
            id: 13,
            windowId: 1,
            active: false,
            pinned: false,
            title: "кельтский камень - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130586.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 14,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шаламов по-английски - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3130308.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 15,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Зав. игровым салоном: ksoftware",
            url: "https://ksoftware.livejournal.com/383517.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 16,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Музей истории техники в Ростове. Кайф: ksoftware",
            url: "https://ksoftware.livejournal.com/397536.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 18,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Using achievement stats to estimate sales on steam – Tyler Glaiel – Medium",
            url:
              "https://medium.com/@tglaiel/using-achievement-stats-to-estimate-sales-on-steam-d18b4b635d23",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 20,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Печали: akuklev",
            url: "https://akuklev.livejournal.com/1282902.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 21,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fabrice Bellard - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Fabrice_Bellard",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 22,
            windowId: 1,
            active: false,
            pinned: false,
            title: "открытая запись - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3129950.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=260"
          },
          {
            id: 23,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ну вот, maxim умучали и в твиторе. И чего вы его так все не любите,…: sorhed",
            url: "https://sorhed.livejournal.com/619253.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 24,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Почему я удалил все посты в ЖЖ и Твиттере: maxim",
            url: "https://maxim.livejournal.com/531021.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 25,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Заголовок: lambdaterm1",
            url: "https://lambdaterm1.livejournal.com/730.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 26,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-99523325_4368",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 27,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ПитерФотоФест - 2018",
            url: "http://piterfotofest.ru/#rec16367493",
            favIconUrl:
              "https://static.tildacdn.com/tild6234-6131-4436-a561-376363656563/favicon.ico"
          },
          {
            id: 28,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Об Байеса - 2 - Не кинокритик. Не палеонтолог.",
            url: "https://plakhov.livejournal.com/227597.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 29,
            windowId: 1,
            active: false,
            pinned: false,
            title: "другая америка - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3129470.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=259.1"
          },
          {
            id: 30,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Course | DSE200x | edX",
            url:
              "https://courses.edx.org/courses/course-v1:UCSanDiegoX+DSE200x+1T2018/course/",
            favIconUrl:
              "https://prod-edxapp.edx-cdn.org/static/edx.org/images/favicon.9028de6ff678.ico"
          },
          {
            id: 31,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | шо за Шноль",
            url: "https://juan-gandhi.dreamwidth.org/4264984.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 32,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пятое издание «Ководства» Лебедева",
            url: "https://www.artlebedev.ru/izdal/kovodstvo5/",
            favIconUrl: "https://img.artlebedev.ru/icons/favicon-set.ico"
          },
          {
            id: 33,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Measure Performance with the RAIL Model  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/rail",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 34,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Update on Async Rendering - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 35,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Duran - Публикации",
            url:
              "https://www.facebook.com/ArtByDuran/photos/a.2159449564069966.1073741829.318130841535190/2159452500736339/?type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 36,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 37,
            windowId: 1,
            active: false,
            pinned: false,
            title: "афиша клуба",
            url: "https://vk.com/page-63477485_52138480",
            favIconUrl:
              "https://vk.com/images/icons/favicons/fav_pause_2x.ico?6"
          },
          {
            id: 38,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Сергей Мардан",
            url: "https://www.facebook.com/sergeynudol?fref=jewel",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 39,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Fredegund: Assassination-obsessed Queen",
            url: "https://www.rejectedprincesses.com/princesses/fredegund",
            favIconUrl:
              "https://www.rejectedprincesses.com/wp-content/uploads/2014/10/rp.png"
          },
          {
            id: 40,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Facebook",
            url: "https://www.facebook.com/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 41,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "ШЛЮХА (рассказ) Приятель позвал в бар смотреть... - Максим Матковский",
            url:
              "https://www.facebook.com/nelson.junior.54379/posts/10155404512656576",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 42,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Великие споры - InLiberty",
            url: "https://www.inliberty.ru/public/spory/",
            favIconUrl: "https://www.inliberty.ru/i/favicon/favicon-32x32.png"
          },
          {
            id: 43,
            windowId: 1,
            active: false,
            pinned: false,
            title: "juan_gandhi | TIL from Duolingo",
            url: "https://juan-gandhi.dreamwidth.org/4260093.html",
            favIconUrl: "https://juan-gandhi.dreamwidth.org/favicon.ico"
          },
          {
            id: 44,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Слои пользы: ksoftware",
            url: "https://ksoftware.livejournal.com/396031.html",
            favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
          },
          {
            id: 45,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Пикник «Афиши» 4 августа 2018 — официальный сайт фестиваля",
            url: "https://picnic.afisha.ru/faq",
            favIconUrl:
              "https://picnic.afisha.ru/static/images/A-Picnic-2018-FavIcon-64.png"
          },
          {
            id: 46,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Вышел новый альбом Gorillaz. Послушайте его прямо сейчас — Meduza",
            url:
              "https://meduza.io/shapito/2018/06/29/vyshel-novyy-albom-gorillaz-poslushayte-ego-pryamo-seychas?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-29",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 47,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3578",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 48,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ВИЗУАЛЬНАЯ МЕДИТАЦИЯ",
            url: "https://outcinema.ru/visual-meditation",
            favIconUrl:
              "https://static.tildacdn.com/tild6265-3539-4131-b566-373465353165/favicon.ico"
          },
          {
            id: 49,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Миротворец. Портрет Апхичатпхонга Вирасетакуна - Искусство кино",
            url: "http://kinoart.ru/archive/2010/11/n11-article12",
            favIconUrl: "http://kinoart.ru/favicon.ico"
          },
          {
            id: 50,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall2064116_418",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 51,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Почему в России не надо повышать налоги? Экономический обозреватель Борис Грозовский отвечает заместителю главреда «Медузы» Александру Поливанову — Meduza",
            url:
              "https://meduza.io/feature/2018/06/26/pochemu-v-rossii-ne-nado-povyshat-nalogi?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-26",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 52,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Новая газета»: в Пскове поставили памятники на могилах десантников, погибших летом 2014 года — Meduza",
            url:
              "https://meduza.io/news/2018/06/25/novaya-gazeta-v-pskove-postavili-pamyatniki-na-mogilah-desantnikov-pogibshih-letom-2014-goda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-25",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 53,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Андрей Ерёменко. Генерал против всех",
            url: "https://kartaistorii.ru/eremenko/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 54,
            windowId: 1,
            active: false,
            pinned: false,
            title: "шарик и кисет - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124708.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 55,
            windowId: 1,
            active: false,
            pinned: false,
            title: "мимоза - Поклонник деепричастий",
            url: "https://avva.livejournal.com/3124074.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 56,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "» Scoperto il primo dipinto firmato e autografato da Leonardo Da Vinci",
            url:
              "http://www.art-news.it/scoperto-il-primo-dipinto-firmato-e-autografato-da-leonardo-da-vinci/",
            favIconUrl:
              "http://www.art-news.it/wp-content/uploads/Loghetto-Art-News.png"
          },
          {
            id: 57,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-109629378_3509",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 58,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Сеанс кинотерапии. «Арарат», режиссер Атом Эгоян - Искусство кино",
            url: "http://www.kinoart.ru/archive/2002/12/n12-article7",
            favIconUrl: "http://www.kinoart.ru/favicon.ico"
          },
          {
            id: 59,
            windowId: 1,
            active: false,
            pinned: false,
            title: "panda-grammar - npm",
            url: "https://www.npmjs.com/package/panda-grammar",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 60,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-3818033_17029",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 61,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как приукрашивали портреты маслом после распространения фотографии: shakko_kitsune - Page 2",
            url: "https://shakko-kitsune.livejournal.com/1268839.html?page=2",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 62,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Насильник, грабитель, поп-звезда: Убит XXXTentacion. Он был самым парадоксальным молодым рэпером Америки — Meduza",
            url:
              "https://meduza.io/feature/2018/06/19/nasilnik-grabitel-pop-zvezda?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-19",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 63,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Recursive descent parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Recursive_descent_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 64,
            windowId: 1,
            active: false,
            pinned: false,
            title: "LR parser - Wikipedia",
            url: "https://en.wikipedia.org/wiki/LR_parser",
            favIconUrl: "https://en.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 65,
            windowId: 1,
            active: false,
            pinned: false,
            title: "parsimmon/API.md at master · jneen/parsimmon · GitHub",
            url:
              "https://github.com/jneen/parsimmon/blob/master/API.md#terminology",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 66,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Как в России будут повышать пенсионный возраст? И зачем? — Meduza",
            url:
              "https://meduza.io/cards/kak-v-rossii-budut-povyshat-pensionnyy-vozrast-i-zachem",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 67,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Они хотят сделать дестабилизацию обстановки». СБУ показала «переговоры организаторов покушения на Бабченко»: Пытаемся это пересказать — Meduza",
            url:
              "https://meduza.io/feature/2018/06/15/oni-hotyat-sdelat-destabilizatsiyu-obstanovki-sbu-pokazalo-peregovory-organizatorov-pokusheniya-na-babchenko?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-15",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 68,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-112289703_13361",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 69,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-55155418_165878",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 70,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-110501497_16688",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 71,
            windowId: 1,
            active: false,
            pinned: false,
            title: "нет законов - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3119801.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 72,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Official page for Language Server Protocol",
            url: "https://microsoft.github.io/language-server-protocol/",
            favIconUrl:
              "https://microsoft.github.io/language-server-protocol/img/favicon.png"
          },
          {
            id: 73,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            url:
              "https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6410472941942767616/sharedKey/dlv2StPe/?midToken=AQHzSA83YkIhgg&trk=eml-email_m2m_invite_single_01-null-0-accept%7Ecta&trkEmail=eml-email_m2m_invite_single_01-null-0-accept%7Ecta-null-2yk8nm%7Eji4kturi%7Exc-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_single_01%3BDrAIZne2QOC0D%2BxJlH6RoA%3D%3D",
            favIconUrl: "chrome://global/skin/icons/warning-16.png"
          },
          {
            id: 74,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Чем целлюлит Рубенса отличается от целлюлита Ван Дейка и целлюлита Йорданса?: shakko_kitsune",
            url: "https://shakko-kitsune.livejournal.com/1264148.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 75,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о конкурсах красоты - Поклонник деепричастий Page 2",
            url: "https://avva.livejournal.com/3120316.html?page=2#comments",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 76,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Бренда «Евросеть» больше не будет. Чем нам запомнится эта компания — Meduza",
            url:
              "https://meduza.io/slides/legendarnyy-brend-evroset-budet-likvidirovan-chem-nam-zapomnitsya-eta-kompaniya?utm_source=email&utm_medium=vecherka&utm_campaign=2018-06-06",
            favIconUrl: "https://meduza.io/favicon.ico"
          },
          {
            id: 77,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Abstrakte Kunst Poster bei AllPosters.de",
            url:
              "https://www.allposters.de/-st/Abstrakte-Kunst-Poster_c86168_.htm",
            favIconUrl: "https://www.allposters.de/favicon.ico"
          },
          {
            id: 78,
            windowId: 1,
            active: false,
            pinned: false,
            title: "‎NimbusMind: Meditation & Calm on the App Store",
            url:
              "https://itunes.apple.com/us/app/nimbusmind-meditation-calm/id1278663918?mt=8",
            favIconUrl: "https://itunes.apple.com/favicon.ico"
          },
          {
            id: 79,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Генрих Ягода. Грязная работа",
            url: "https://kartaistorii.ru/yagoda/history-map",
            favIconUrl:
              "https://kartaistorii.ru/static/build/images/common/favicon/32x32.png"
          },
          {
            id: 80,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, design systems will replace design jobs — DesignSystems.com",
            url:
              "https://www.designsystems.com/stories/will-design-systems-replace-designers/",
            favIconUrl: "https://www.designsystems.com/favicon-32x32.png"
          },
          {
            id: 81,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как изучать негодяев • Arzamas",
            url: "https://arzamas.academy/radio/announcements/hlevniuk",
            favIconUrl: "https://arzamas.academy/favicon-32x32.png"
          },
          {
            id: 82,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«Считают своим моральным долгом потушить пожар»: как добровольные пожарные спасают огромные территории от огня — Такие Дела",
            url: "https://takiedela.ru/news/2018/04/22/firefighters/",
            favIconUrl:
              "https://takiedela.ru/wp-content/themes/takiedela/assets/image/icons/favicon-32x32.png"
          },
          {
            id: 83,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Error Boundaries - React",
            url:
              "https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 84,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - hlaueriksson/jamstack-cms: A JAMstack experiment with a Headless CMS",
            url: "https://github.com/hlaueriksson/jamstack-cms",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 85,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Стена",
            url: "https://vk.com/wall-72326580_646949",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 86,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - Несравненный Эгон Шиле. 100 лет со дня... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215045413584993",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 87,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/arhstoyanie-2018",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 88,
            windowId: 1,
            active: false,
            pinned: false,
            title: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            url: "https://solosale.ru/page/arch.stoyanie.tickets/p145/",
            favIconUrl: "https://solosale.ru/favicon.ico"
          },
          {
            id: 89,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Гитлер пришел к власти | История | DW | 29.01.2013",
            url:
              "https://www.dw.com/ru/%D0%BA%D0%B0%D0%BA-%D0%B3%D0%B8%D1%82%D0%BB%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D1%88%D0%B5%D0%BB-%D0%BA-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8/a-1581471",
            favIconUrl: "https://www.dw.com/favicon.png"
          },
          {
            id: 90,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Фотограф, которого никто не знал",
            url:
              "https://www.adme.ru/tvorchestvo-fotografy/fotograf-kotorogo-nikto-ne-znal-480205/",
            favIconUrl: "https://www.adme.ru/favicon.ico"
          },
          {
            id: 91,
            windowId: 1,
            active: false,
            pinned: false,
            title: "ФАКУЛЬТЕТЫ ИСКУССТВ - LES",
            url: "https://les.media/articles/584226-fakulbtety-iskusstv",
            favIconUrl: "https://les.media/favicon-32x32.png"
          },
          {
            id: 92,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Александр Введенский — «В ленинградское отделение...»",
            url: "http://slova.org.ru/vvedenskiy/v_leningradskoe_otdelenie/",
            favIconUrl: "http://slova.org.ru/favicon.ico"
          },
          {
            id: 93,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Побочные эффекты осознанности 1. У вас... - Sergey Shalashenko | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=2309388555741540&set=a.328232067190542.95483.100000112538277&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 94,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Introducing GitFlow",
            url: "https://datasift.github.io/gitflow/IntroducingGitFlow.html",
            favIconUrl: "https://datasift.github.io/favicon.ico"
          },
          {
            id: 95,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React Application Performance Analysis — Part 1 – Chingu – Medium",
            url:
              "https://medium.com/chingu/react-application-performance-analysis-part-1-611976a54de7",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 96,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "How to Benchmark React Components: The Quick and Dirty Guide",
            url:
              "https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 97,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Yes, Toilet Spray After You Flush Includes Poop Particles | SELF",
            url: "https://www.self.com/story/toilet-plume-poop-spray",
            favIconUrl: "https://www.self.com/favicon.ico"
          },
          {
            id: 98,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 99,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Forwarding Refs - React",
            url: "https://reactjs.org/docs/forwarding-refs.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 100,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Gatsby + Apollo + GraphCool + Netlify: The Web’s Promised Land",
            url:
              "https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72",
            favIconUrl:
              "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
          },
          {
            id: 101,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Björk's Vault of Dank Memes public group | Facebook",
            url:
              "https://www.facebook.com/groups/bvdom/permalink/613012339032202/",
            favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 102,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Getting started - i18next documentation",
            url: "https://www.i18next.com/overview/getting-started",
            favIconUrl:
              "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
          },
          {
            id: 103,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "The PRPL Pattern  |  Web Fundamentals  |  Google Developers",
            url:
              "https://developers.google.com/web/fundamentals/performance/prpl-pattern/",
            favIconUrl:
              "https://developers.google.com/_static/6d893b1b39/images/favicon.png"
          },
          {
            id: 104,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Our insights into Technology and Business | Castle Digital Partners",
            url: "https://blog.castle.co/",
            favIconUrl:
              "https://static.tildacdn.com/tild3734-6139-4332-b963-303733313033/favicon.ico"
          },
          {
            id: 105,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Не знаю, кому сказать спасибо, но маленькая... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1701631736586826&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 106,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Поздравляю всех причастных с Днём... - Владимир Манилов | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=1834547359930646&set=a.203765449675520.65879.100001261989111&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 107,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Synchronize with the Server's Clock in the Browser",
            url: "https://www.nodeguy.com/serverdate/",
            favIconUrl: "https://www.nodeguy.com/favicon.ico"
          },
          {
            id: 108,
            windowId: 1,
            active: false,
            pinned: false,
            title: "о жизни и литературе - Поклонник деепричастий",
            url: "https://avva.livejournal.com/1921476.html",
            favIconUrl:
              "https://www.livejournal.com/img/userinfo_v8.svg?v=17080?v=258"
          },
          {
            id: 109,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«АукцЫон». Единственный Летний Концерт в Aurora Concert Hall",
            url:
              "https://www.facebook.com/events/216603019130017/?notif_t=event_calendar_create&notif_id=1528455621447847",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 110,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Как Юрий Осинин спас Питер: tema",
            url: "https://tema.livejournal.com/2775878.html",
            favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
          },
          {
            id: 111,
            windowId: 1,
            active: false,
            pinned: false,
            title: "78 Новости - Петербуржец Юрий Осинин по своему желанию...",
            url:
              "https://www.facebook.com/78channel/videos/1872484333047698/UzpfSTEwMDAwMjA1NDg5NDg5MDoxNjgzMTM5OTg4NDMxMTQ4/",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 112,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "«100 лет дизайна» — кінопоказ у Москві — розклад на Яндекс.Афіші",
            url:
              "https://afisha.yandex.ua/moscow/cinema_show/100-let-dizaina-2018",
            favIconUrl: "https://afisha.yandex.ua/favicon.ico"
          },
          {
            id: 113,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Архитектурная Керамика.",
            url: "https://vk.com/arhceramik",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 114,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Экспонат без названия",
            url: "http://collectionerus.ru/collections/ceramicplate/31/",
            favIconUrl: "http://collectionerus.ru/static/favicon.ico"
          },
          {
            id: 115,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Безумные миры Дэвида Линча — Кино на DTF",
            url: "https://dtf.ru/cinema/18427-bezumnye-miry-devida-lincha",
            favIconUrl:
              "https://dtf.ru/static/build/dtf.ru/favicons/favicon.ico"
          },
          {
            id: 116,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Видеозаписи Поэмание",
            url: "https://vk.com/video-148655127_456239031",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_logo_2x.ico?6"
          },
          {
            id: 117,
            windowId: 1,
            active: false,
            pinned: false,
            title: "«О восприятии и выявлении псевдо-интеллектуальной чуши»",
            url:
              "http://newochem.ru/nauka/o-vospriyatii-i-vyyavlenii-psevdo-intellektualnoj-chushi/",
            favIconUrl:
              "http://newochem.ru/wp-content/uploads/2015/11/favicon.jpg"
          },
          {
            id: 118,
            windowId: 1,
            active: false,
            pinned: false,
            title: "АРХСТОЯНИЕ 2018",
            url: "https://www.stoyanie.com/",
            favIconUrl: "https://static.parastorage.com/client/pfavico.ico"
          },
          {
            id: 119,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Sneak Peek: Beyond React 16 - React Blog",
            url:
              "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 120,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Антон Долин - КИНОТАВР: МОИ ИТОГИ 1. Самый важный итог -... | Facebook",
            url: "https://www.facebook.com/adolin3/posts/10215335520797492",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 121,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Home / The Art of Pants",
            url: "https://theartofpants.bigcartel.com/",
            favIconUrl: "https://theartofpants.bigcartel.com/favicon.ico"
          },
          {
            id: 122,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Трудно быть богом (фильм, 2013) — Википедия",
            url:
              "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2013)",
            favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
          },
          {
            id: 123,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - sindresorhus/query-string: Parse and stringify URL query strings",
            url: "https://github.com/sindresorhus/query-string",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 124,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Better exhaustiveness checking for variant type conditions · Issue #1374 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/1374",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 125,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Вода для чая",
            url: "https://cha-shop.ru/stuff/water/#",
            favIconUrl:
              "https://cha-shop.ru/wp-content/uploads/2018/02/cropped-favicon512_2-32x32.png"
          },
          {
            id: 126,
            windowId: 1,
            active: false,
            pinned: false,
            title: "react-jsx-parser - npm",
            url: "https://www.npmjs.com/package/react-jsx-parser",
            favIconUrl:
              "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
          },
          {
            id: 127,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - ai/size-limit: Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.",
            url: "https://github.com/ai/size-limit#applications",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 128,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog",
            url:
              "https://evilmartians.com/chronicles/size-limit-make-the-web-lighter",
            favIconUrl:
              "https://cdn.evilmartians.com/front/blocks/common/images/favicon-1e00adc.ico"
          },
          {
            id: 129,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Introducing MDXC: A new way to write Markdown for React - James K Nelson",
            url: "http://jamesknelson.com/introducing-mdxc/",
            favIconUrl: "http://jamesknelson.com/favicon-32x32.png"
          },
          {
            id: 130,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - Мне кажется, в ближайшее время у каждого... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606870769634",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 131,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Искусство для пацанчиков: Эдвард Мунк | Батенька, да вы трансформер",
            url: "https://batenka.ru/aesthetics/artshock/art4fellas-munk/",
            favIconUrl: "https://batenka.ru/static/favicon.05d2126ac225.ico"
          },
          {
            id: 132,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Artem Chernov - А вот и Питерфотофест. Конец августа.... | Facebook",
            url: "https://www.facebook.com/chernovv/posts/10204606494360224",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 133,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Födor Katasonov - Виленский был одним из самых крутых и... | Facebook",
            url:
              "https://www.facebook.com/photo.php?fbid=10209706475376949&set=a.1599771052480.67589.1782156755&type=3&theater",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 134,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Семимостье в Санкт-Петербурге",
            url: "https://kudago.com/spb/place/semimoste/",
            favIconUrl: "https://static-42149e88.kudago.com/img/favicon.png"
          },
          {
            id: 135,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Книжный клуб",
            url: "http://www.avrora.spb.ru/films/knigniy-klub",
            favIconUrl: "http://www.avrora.spb.ru/favicon.ico"
          },
          {
            id: 136,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - jneen/parsimmon: A monadic LL(infinity) parser combinator library for javascript",
            url: "https://github.com/jneen/parsimmon",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 137,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "React.Element type is incompatible with object type · Issue #5547 · facebook/flow · GitHub",
            url: "https://github.com/facebook/flow/issues/5547",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 141,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "(3) Антон Долин - Большая удача – «Три сестры» Константин Богомолов...",
            url: "https://www.facebook.com/adolin3/posts/10215396076031335",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 142,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Кому выгодно повышение пенсионного возраста - РИА Новости, 19.06.2018",
            url: "https://ria.ru/analytics/20180619/1522873347.html",
            favIconUrl: "https://ria.ru/i/favicons/favicon-32x32.png"
          },
          {
            id: 143,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Татьяна Мэй - Варлам Шаламов последние три года жизни... | Facebook",
            url:
              "https://www.facebook.com/permalink.php?story_fbid=1730012407082092&id=100002200475958",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 144,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "Ребята, last call for a trip to North... - Larisa Melnikova | Facebook",
            url:
              "https://www.facebook.com/LaraMelnikova/posts/1353918998041331",
            favIconUrl:
              "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico"
          },
          {
            id: 145,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - pandastrike/panda-grammar: Recursive descent parser combinators in JavaScript",
            url: "https://github.com/pandastrike/panda-grammar",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 146,
            windowId: 1,
            active: false,
            pinned: false,
            title:
              "GitHub - reduxjs/react-redux: Official React bindings for Redux",
            url: "https://github.com/reduxjs/react-redux",
            favIconUrl: "https://assets-cdn.github.com/favicon.ico"
          },
          {
            id: 147,
            windowId: 1,
            active: false,
            pinned: false,
            title: "You Probably Don't Need Derived State - React Blog",
            url:
              "https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization",
            favIconUrl: "https://reactjs.org/favicon.ico"
          },
          {
            id: 148,
            windowId: 1,
            active: false,
            pinned: false,
            title: "A deep dive into children in React - Max Stoibers Blog",
            url: "https://mxstbr.blog/2017/02/react-children-deepdive/",
            favIconUrl: "https://mxstbr.blog/favicon.png"
          },
          {
            id: 149,
            windowId: 1,
            active: false,
            pinned: false,
            title: "Купить билеты",
            url: "http://www.teatrvo.ru/kupit-bilety/",
            favIconUrl: "http://www.teatrvo.ru/static/favicon.ico"
          }
        ]
      }
    ],
    header: {
      id: 7,
      date: 1532217694324,
      windowsCount: 1,
      tabsCount: 144
    }
  },
  {
    windows: [
      {
        id: 1,
        focused: true,
        tabs: [
          {
            id: 3,
            windowId: 1,
            active: false,
            pinned: true,
            title: "bq | Latest",
            url: "https://bazqux.com/",
            favIconUrl: "https://bazqux.com/favicon.ico"
          },
          {
            id: 4,
            windowId: 1,
            active: false,
            pinned: true,
            title:
              "Письмо «Nikolay, please add me to your LinkedIn network» — Женя Софронов — Яндекс.Почта",
            url:
              "https://mail.yandex.ru/?addMultiUserFromDropdownButton=true&uid=1130000000917687&login=koluch#message/166351711236025579",
            favIconUrl:
              "https://mail.yandex.ru/u2709/favicon/png/main-favicon/32/0.png?nocacheIcon=9614889728933"
          },
          {
            id: 5,
            windowId: 1,
            active: false,
            pinned: true,
            title: "Диалоги",
            url: "https://vk.com/im?sel=-45728460",
            favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
          }
        ]
      },
      {
        id: 2,
        focused: false,
        tabs: [
          {
            id: 150,
            windowId: 2,
            active: false,
            pinned: false,
            title:
              'Книга: "Омерзительное искусство. Юмор и хоррор шедевров живописи" - Софья Багдасарова. Купить книгу, читать рецензии | ISBN 978-5-04-088717-0 | Лабиринт',
            url: "https://www.labirint.ru/books/630406/",
            favIconUrl: "https://img.labirint.ru/favicon.ico?20130611"
          }
        ]
      }
    ],
    header: {
      id: 8,
      date: 552277690511,
      windowsCount: 2,
      tabsCount: 4
    }
  }
];

function makeSessionHeader(session: ISession): ISavedSessionHeader {
  const date = new Date().getTime();
  return {
    id: date,
    date,
    windowsCount: session.windows.length,
    tabsCount: session.windows
      .map(({ tabs }) => tabs.length)
      .reduce((acc, x) => acc + x, 0)
  };
}

function updateSessionHeader(
  sessionHeader: ISavedSessionHeader,
  session: ISession
): ISavedSessionHeader {
  return {
    ...sessionHeader,
    windowsCount: session.windows.length,
    tabsCount: session.windows
      .map(({ tabs }) => tabs.length)
      .reduce((acc, x) => acc + x, 0)
  };
}

const DebugStorage: ISessionStorage = {
  getList: () => {
    return Promise.resolve(DEBUG_SESSIONS.map(({ header }) => header));
  },
  create: (session: ISession) => {
    const date = new Date().getTime();
    const header: ISavedSessionHeader = makeSessionHeader(session);
    const newSession: ISavedSession = {
      ...session,
      header
    };

    DEBUG_SESSIONS.push(newSession);
    return Promise.resolve(newSession);
  },
  get: (sessionId: number) => {
    const session = DEBUG_SESSIONS.find(
      ({ header }) => header.id === sessionId
    );
    return session ? Promise.resolve(session) : Promise.resolve(null);
  },
  update: (sessionId: number, updater: (session: ISession) => ISession) => {
    for (let i = 0; i < DEBUG_SESSIONS.length; i += 1) {
      const nextSession = DEBUG_SESSIONS[i];
      if (nextSession.header.id === sessionId) {
        const updatedSession = updater(nextSession);
        const updatedHeader = updateSessionHeader(
          nextSession.header,
          updatedSession
        );
        DEBUG_SESSIONS[i] = {
          ...updatedSession,
          header: updatedHeader
        };
        return Promise.resolve();
      }
    }
    throw new Error(
      `Unable to update session with id ${sessionId}, since it's not found`
    );
  },
  delete: (sessionId: number) => {
    DEBUG_SESSIONS = DEBUG_SESSIONS.filter(
      ({ header }) => header.id !== sessionId
    );
    return Promise.resolve();
  }
};

const ProductionStorage: ISessionStorage = {
  getList: () => {
    return browser.storage.local.get("LIST").then(results => {
      if (results["LIST"]) {
        const listStr = <string>results["LIST"];
        return JSON.parse(listStr);
      }
      return [];
    });
  },
  create: (session: ISession) => {
    return ProductionStorage.getList().then(list => {
      const header: ISavedSessionHeader = makeSessionHeader(session);
      const newSession: ISavedSession = {
        ...session,
        header
      };

      return browser.storage.local
        .set({
          LIST: JSON.stringify([...list, header]),
          [`SESSION_${header.id}`]: JSON.stringify(newSession)
        })
        .then(() => {
          return newSession;
        });
    });
  },
  get: (sessionId: number) => {
    return browser.storage.local.get(`SESSION_${sessionId}`).then(
      results => {
        const listStr = <string>results[`SESSION_${sessionId}`];
        return JSON.parse(listStr);
      },
      () => {
        return null;
      }
    );
  },
  update: (sessionId: number, updater: (session: ISession) => ISession) => {
    return ProductionStorage.get(sessionId).then(savedSession => {
      if (savedSession) {
        const updatedSession = updater(savedSession);
        const updatedHeader = updateSessionHeader(
          savedSession.header,
          updatedSession
        );
        const updatedSavedSessionSession = {
          ...updatedSession,
          header: updatedHeader
        };

        return ProductionStorage.getList().then(headerList => {
          const updatedHeaderList = headerList.map(header =>
            header.id === updatedHeader.id ? updatedHeader : header
          );
          return browser.storage.local.set({
            LIST: JSON.stringify(updatedHeaderList),
            [`SESSION_${savedSession.header.id}`]: JSON.stringify(
              updatedSavedSessionSession
            )
          });
        });
      }
      throw new Error(
        `Unable to update session with id ${sessionId}, since it's not found`
      );
    });
  },
  delete: (sessionId: number) => {
    return ProductionStorage.getList()
      .then(list => {
        return browser.storage.local.set({
          LIST: JSON.stringify(list.filter(({ id }) => id !== sessionId)),
          [`SESSION_${sessionId}`]: null
        });
      })
      .then(() => {
        return browser.storage.local.remove(`SESSION_${sessionId}`);
      })
      .then(() => {
        return Promise.resolve();
      });
  }
};

const SessionStorage =
  process.env.NODE_ENV === "production" ? ProductionStorage : DebugStorage;

export default SessionStorage;
