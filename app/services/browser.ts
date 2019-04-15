import { INewTab, ISession, ITab, IWindow } from "../types";

function delay<T>(result: T) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, Math.floor(Math.random() * 400))
  })
}

let DEBUG_WINDOWS: IWindow[] = [
  {
    id: 1,
    focused: true,
    tabs: [
      {
        id: 3,
        windowId: 1,
        active: false,
        discarded: false,
        pinned: true,
        title: "bq | Latest",
        url: "https://bazqux.com/",
        favIconUrl: "https://bazqux.com/favicon.ico"
      },
      {
        id: 4,
        windowId: 1,
        active: false,
        discarded: true,
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
        discarded: false,
        pinned: true,
        title: "Диалоги",
        url: "https://vk.com/im?sel=-45728460",
        favIconUrl: "https://vk.com/images/icons/favicons/fav_im_2x.ico?6"
      },
      {
        id: 2,
        windowId: 1,
        active: false,
        discarded: true,
        pinned: true,
        title: "лекарства - Google Sheets",
        url:
          "https://docs.google.com/spreadsheets/d/1zJfc1q4VptJJLs5EDr4zHfYvPJes_r6qmR3vzj40bLU/edit#gid=1092909149",
        favIconUrl: "https://ssl.gstatic.com/docs/spreadsheets/favicon_jfk2.png"
      },
      {
        id: 325,
        windowId: 1,
        active: false,
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Network Dependencies · he-he-org/he-he-2",
        url: "https://github.com/he-he-org/he-he-2/network/dependencies",
        favIconUrl: "https://assets-cdn.github.com/favicon.ico"
      },
      {
        id: 300,
        windowId: 1,
        active: false,
        discarded: false,
        pinned: false,
        title: "NVD - CVE-2018-3809",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2018-3809",
        favIconUrl: "https://nvd.nist.gov/App_Themes/Default/Images/favicon.ico"
      },
      {
        id: 277,
        windowId: 1,
        active: false,
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Хорошо прорисованные женщины: shakko_kitsune",
        url: "https://shakko-kitsune.livejournal.com/1280049.html",
        favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
      },
      {
        id: 9,
        windowId: 1,
        active: false,
        discarded: false,
        pinned: false,
        title: 'Живопись из фильма "Титаник": shakko_kitsune - Page 3',
        url: "https://shakko-kitsune.livejournal.com/1278640.html?page=3",
        favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
      },
      {
        id: 11,
        windowId: 1,
        active: false,
        discarded: false,
        pinned: false,
        title: "Чем круты «Авиньонские девицы» Пикассо? | Шакко | Яндекс Дзен",
        url:
          "https://zen.yandex.ru/media/shakko/chem-kruty-avinonskie-devicy-pikasso-5af6ffb67425f5fcbcde7db7",
        favIconUrl: "https://yastatic.net/zen-logos/files/favicons/icon.svg"
      },
      {
        id: 12,
        windowId: 1,
        active: false,
        discarded: false,
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
        discarded: false,
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
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Зав. игровым салоном: ksoftware",
        url: "https://ksoftware.livejournal.com/383517.html",
        favIconUrl: "https://l-stat.livejournal.net/img/userinfo.ico"
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
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Артемий Лебедев - Городской дизайн.",
        url: "https://www.facebook.com/temalebedev/videos/10156571532046095/",
        favIconUrl: "https://www.facebook.com/rsrc.php/yo/r/iRmz9lCMBD2.ico"
      },
      {
        id: 152,
        windowId: 2,
        active: false,
        discarded: false,
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
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Что почитать Чехова?: chto_chitat",
        url: "https://chto-chitat.livejournal.com/4259351.html",
        favIconUrl: "https://www.livejournal.com/favicon.ico?v=2"
      },
      {
        id: 155,
        windowId: 2,
        active: false,
        discarded: false,
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
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Кому на самом деле нужно плацебо: scinquisitor",
        url: "https://scinquisitor.livejournal.com/94919.html",
        favIconUrl: "https://www.livejournal.com/img/userinfo.ico"
      },
      {
        id: 158,
        windowId: 2,
        active: false,
        discarded: false,
        pinned: false,
        title: "Illusion mindfulness improves cancer survival | Mind the Brain",
        url:
          "http://blogs.plos.org/mindthebrain/2016/06/29/creating-the-illusion-that-mindfulness-improves-the-survival-of-cancer-patients/",
        favIconUrl:
          "http://blogs.plos.org/mindthebrain/wp-content/themes/genesis-plos/images/favicon.ico"
      },
      {
        id: 159,
        windowId: 2,
        active: false,
        discarded: false,
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
        discarded: false,
        pinned: false,
        title: "Нейротеология: scinquisitor",
        url: "https://scinquisitor.livejournal.com/1922.html",
        favIconUrl: "https://www.livejournal.com/img/userinfo_v8.svg?v=17080"
      },
      {
        id: 161,
        windowId: 2,
        active: false,
        discarded: false,
        pinned: false,
        title: "Стэнфордский тюремный эксперимент — Википедия",
        url:
          "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%8D%D0%BD%D1%84%D0%BE%D1%80%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%8E%D1%80%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%82#cite_ref-7",
        favIconUrl: "https://ru.wikipedia.org/static/favicon/wikipedia.ico"
      }
    ]
  }
];

interface IBrowser {
  getCurrentSession: () => Promise<ISession>;
  activateTab: (tabId: number) => Promise<void>;
  activateWindow: (windowId: number) => Promise<void>;
  closeTabs: (tabIds: number[]) => Promise<void>;
  discardTabs: (tabIds: number[]) => Promise<void>;
  closeWindow: (windowId: number) => Promise<void>;
  openWindow: (tabs: INewTab[]) => Promise<void>;
  openTabs: (tabs: INewTab[]) => Promise<void>;
}

const DebugBrowser: IBrowser = {
  getCurrentSession: () => Promise.resolve({ windows: DEBUG_WINDOWS }),
  activateTab: (id: number) => {
    DEBUG_WINDOWS.forEach((window: IWindow) => {
      window.tabs.forEach((tab: ITab) => {
        const isActive = tab.id === id;
        tab.active = isActive;
      });
    });
    return Promise.resolve(undefined);
  },
  activateWindow: (windowId: number) => {
    DEBUG_WINDOWS.forEach((window: IWindow) => {
      window.focused = window.id === windowId;
    });
    return Promise.resolve(undefined);
  },
  closeTabs: (ids: number[]) => {
    DEBUG_WINDOWS = DEBUG_WINDOWS.map(window => {
      return {
        ...window,
        tabs: window.tabs.filter(tab => ids.indexOf(tab.id) !== -1)
      };
    });
    DEBUG_WINDOWS = DEBUG_WINDOWS.filter(({ tabs }) => tabs.length > 0);
    return Promise.resolve(undefined).then(delay);
  },
  discardTabs: (ids: number[]) => {
    DEBUG_WINDOWS = DEBUG_WINDOWS.map(window => {
      return {
        ...window,
        tabs: window.tabs.map(tab => {
          if (ids.indexOf(tab.id) !== -1) {
            return {
              ...tab,
              discarded: true,
            }
          }
          return tab;
        })
      };
    });
    return Promise.resolve(undefined).then(delay);
  },
  closeWindow: (windowId: number) => {
    DEBUG_WINDOWS = DEBUG_WINDOWS.filter(({ id }) => id !== windowId);
    return Promise.resolve(undefined).then(delay);
  },
  openWindow: (tabs: INewTab[]) => {
    const maxTabId = Math.max(
      0,
      ...DEBUG_WINDOWS.map(
        ({ tabs }) => Math.max(...tabs.map(({ id }) => id)) || 0
      )
    );
    const windowId =
      DEBUG_WINDOWS.reduce((acc, x) => Math.max(acc, x.id), 0) + 1;
    DEBUG_WINDOWS.push({
      id: windowId,
      focused: false,
      tabs: tabs.map((tab, i) => ({
        ...tab,
        id: maxTabId + i + 1,
        windowId
      }))
    });
    return Promise.resolve(undefined);
  },
  openTabs: (tabs: INewTab[]) => {
    const activeWindow = DEBUG_WINDOWS.find(({ focused }) => focused);
    if (activeWindow) {
      const maxTabId = Math.max(
        0,
        ...DEBUG_WINDOWS.map(
          ({ tabs }) => Math.max(0, ...tabs.map(({ id }) => id)) || 0
        )
      );
      activeWindow.tabs.push(
        ...tabs.map((tab, i) => ({
          ...tab,
          id: maxTabId + i + 1,
          windowId: activeWindow.id
        }))
      );
      if (tabs.length > 0) {
        DebugBrowser.activateTab(
          activeWindow.tabs[activeWindow.tabs.length - 1].id
        );
      }
    } else {
      console.warn("Unable to find focused window");
    }
    return Promise.resolve(undefined);
  }
};

const ProductionBrowser: IBrowser = {
  getCurrentSession: (): Promise<ISession> => {
    return browser.windows.getAll({ populate: true }).then(windows => {
      const sessionWindows: IWindow[] = windows.map(window => {
        let tabs: ITab[] = [];

        const { id } = window;
        if (id === null || id === undefined) {
          throw new Error(`Window id should never be null`);
        }

        if (window.tabs !== null && window.tabs !== undefined) {
          console.log("window.tabs", window.tabs)
          tabs = window.tabs.map(
            ({
              id,
              windowId,
              active,
              url,
              title,
              favIconUrl,
              pinned,
              discarded,
            }): ITab => {
              if (id === null || id === undefined) {
                throw new Error(
                  `This extension doesn't support tabs with null id's. This should actually never happen`
                );
              }
              if (url === null || url === undefined) {
                throw new Error(
                  `URL should not be null, since we require 'tabs' permission`
                );
              }
              return {
                id,
                windowId,
                active,
                url,
                title: title || null,
                favIconUrl: favIconUrl || null,
                discarded: discarded || false,
                pinned
              };
            }
          );
        } else {
          console.error(
            `windows.tabs should never be null, since we use "populate: true" option`
          );
        }

        return {
          id,
          focused: window.focused,
          tabs,
        };
      });

      return {
        windows: sessionWindows
      };
    });
  },
  activateTab: (id: number) => {
    return browser.tabs.update(id, { active: true }).then(() => undefined);
  },
  activateWindow: (id: number) => {
    return browser.windows.update(id, { focused: true }).then(() => undefined);
  },
  closeTabs: (ids: number[]) => {
    return browser.tabs.remove(ids).then(() => undefined);
  },
  discardTabs: (ids: number[]) => {
    // todo: why discard function is not supported by web-ext-types package?
    // eslint-disable-next-line
    // @ts-ignore
    return browser.tabs.discard(ids).then(() => undefined);
  },
  closeWindow: (windowId: number) => {
    return browser.windows.remove(windowId).then(() => undefined);
  },
  openWindow: (tabs: INewTab[]) => {
    // todo: focused is unsupported. Need it, because when new window created in focused mode, popup will be closed
    // todo: and tabs will not be added. Use alternative strategy
    // return browser.windows
    //   .create({
    //     focused: false,
    //   })
    //   .then((window) => {
    //     return Promise.all(tabs.map((tab) => (
    //       browser.tabs.create({
    //         pinned: tab.pinned,
    //         url: tab.url,
    //         windowId: window.id,
    //       })
    //     )));
    //   })
    //   .then(() => undefined)
    return browser.windows
      .create({
        url: tabs.map(({ url }) => url)
      })
      .then(() => undefined);
  },
  openTabs: (tabs: INewTab[]) => {
    return Promise.all(
      tabs.map(tab =>
        browser.tabs.create({
          pinned: tab.pinned,
          url: tab.url
        })
      )
    ).then(() => undefined);
  }
};

const Browser =
  process.env.NODE_ENV === "production" ? ProductionBrowser : DebugBrowser;

export default Browser;
