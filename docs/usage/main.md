# Базовая информация, терминология

## Что такое Telehooper?

Telehooper — Telegram-бот с [открытым исходным ботом](https://github.com/Zensonaton/Telehooper), позволяющий пересылать сообщения из сервисов в Telegram и наоборот.

В Telehooper каждый диалог из **сервиса** (к примеру, ВКонтакте) соответствует отдельной **группе** в Telegram.

## Терминология

- **Сервис** — внешний сервис который подключается к боту Telehooper при помощи команды `/connect`.
- **Группа** — чат в Telegram, в который пересылаются сообщения из сервиса.

## Начало работы с ботом

В данном блоке описана информация о начале использования бота Telehooper.

:::tip

Перед началом работы с ботом рекомендуется изучить список [терминов, используемые при работе с ботом](#терминология), а так же ознакомиться с [списком поддерживаемых сервисов](/usage/supported-services).

:::

Что бы начать пользоваться Telehooper, Вам необходимо:

- Написать боту [@telehooper_bot](https://t.me/telehooper_bot) в Telegram.
- Подключить нужный Вам сервис при помощи команды `/connect`.
- После успешного подключения, создать отдельную группу в Telegram и добавить туда бота.
- В случае, если всё в порядке, Telehooper отправит сообщение в котором Вы можете выбрать нужный Вам сервис и диалог из сервиса.
- Готово! Telehooper будет пересылать сообщения из указанного Вами диалога в группу Telegram.