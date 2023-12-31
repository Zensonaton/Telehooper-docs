# ВКонтакте

ВКонтакте работает стабильно, однако отсутствует некоторая часть функционала.

```mdx-code-block
import BrowserWindow from "@site/src/components/BrowserWindow";
```

:::warning Предупреждение безопасности

Подключая любой из сервисов к Telehooper (включая ВКонтакте), Вы соглашаетесь с тем, что бот будет хранить специальные данные авторизации (токен) в его базе данных до момента отключения сервиса от бота.

Помимо этого, Вы соглашаетесь с тем, что в случае взлома бота, данные авторизации могут быть украдены злоумышленниками.

Остальные предупреждения можно прочитать в разделе [«безопасность»](../security).

:::

## Подключение

Подключение ВКонтакте ничем непримечательно:

- Обратитесь к [Telehooper](https://t.me/telehooper_bot), пропишите команду `/connect`, и выберите сервис ВКонтакте.
- Бот отправит Вам ссылку на авторизацию через VK ID. То что бот присылает - официальная страница ВКонтакте, которая никак не связана с ботом.
- Перейдя по ссылке, авторизуйтесь, дав приложению «Kate Mobile» доступ к Вашему аккаунту.

  :::info Почему используется Kate Mobile?

  Ввиду ограничений ВКонтакте, наложенных на API сообщений, `messages` ([документация ВК](https://dev.vk.com/ru/method/messages)), доступ к сообщениям возможен лишь некоторым разрешённым приложеням. Среди таких - Kate Mobile.

  Telehooper не имеет никакого отношения к приложению Kate Mobile.

  :::

- На странице, текст которой гласит следующее:

  ```mdx-code-block
  <BrowserWindow url="https://oauth.vk.com/blank.html#access_token=vk1.a.abcdefg&expires_in=0&user_id=12345678" style={{fontFamily: "initial"}}>

  Пожалуйста, **не копируйте** данные из адресной строки для сторонних сайтов. Таким образом Вы можете **потерять доступ** к Вашему аккаунту.

  </BrowserWindow>
  ```

  Скопируйте текст с адресной строки браузера. После копирования, у Вас будет ссылка, которая похожа на следующее:

  ```plain
  https://oauth.vk.com/blank.html#access_token=vk1.a.abcdefg&expires_in=0&user_id=12345678
  ```

  Скопируйте эту ссылку и отправьте боту.

- Дождитесь, пока бот проверит правильность отправленной ссылки. Проследуйте инструкциям бота.
- [Продолжение](../usage/main).

## Поддерживаемый функционал

- [x] Текстовые сообщения:
  - [x] Эмодзи.
  - [x] Ответы на сообщения.
- [x] Редактирование:
  - [x] Редактирование текста.
  - [ ] Редактирование вложений.
- [x] Удаление сообщений.
- [x] Пометка сообщение как «прочитанные»: делается через команду `/read`.
- [x] Медиа:
  - [x] Фото.
  - [x] Видео.
  - [x] Стикеры. Анимированные стикеры не поддерживаются.
  - [x] Голосовые сообщения.
  - [x] Видеосообщения ("кружочки").
  - [x] Файлы (документы).
  - [ ] Музыка. Работает только при пересылки с ВК в Telegram.
- [x] Поддержка бесед:
  - [x] События бесед, синхронизация изменений бесед.
  - [ ] Управление беседами.
- [ ] Поддержка ботов:
  - [ ] Поддержка бот-кнопок: кнопки сейчас отображаются лишь визуально.
- [ ] Статусы пользователей:
  - [ ] Статус «онлайн».
  - [x] Статус «пользователь печатает».
