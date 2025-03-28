---
titleSuffix: "От проблем микрофронтенда к инновациям ESM: путь эволюции фреймворка Esmx"
description: Глубокое погружение в эволюцию фреймворка Esmx от традиционных проблем микрофронтенда к инновационным решениям на основе ESM, с опытом в оптимизации производительности, управлении зависимостями и выборе инструментов сборки.
head:
  - - meta
    - property: keywords
      content: Esmx, микрофронтенд, ESM, Import Maps, Rspack, Module Federation, управление зависимостями, оптимизация производительности, техническая эволюция, серверный рендеринг
sidebar: false
---

# От совместного использования компонентов к нативной модульности: путь эволюции микрофронтенд фреймворка Esmx

## Контекст проекта

В последние годы архитектура микрофронтенда искала правильный путь. Однако мы наблюдали множество сложных технических решений, которые с помощью множества слоев и искусственной изоляции пытались имитировать идеальный мир микрофронтенда. Эти решения приносили значительные потери производительности, усложняли разработку и делали стандартные процессы запутанными.

### Ограничения традиционных решений

В процессе практики микрофронтенд архитектуры мы глубоко осознали множество ограничений традиционных решений:

- **Потери производительности**: инъекция зависимостей в runtime, проксирование JS-песочницы — каждая операция потребляет драгоценную производительность.
- **Хрупкая изоляция**: искусственно созданная среда песочницы никогда не сможет достичь нативной изоляции браузера.
- **Сложность сборки**: для обработки зависимостей приходится модифицировать инструменты сборки, что делает простые проекты сложными в поддержке.
- **Пользовательские правила**: специальные стратегии развертывания, обработка в runtime — каждый шаг отклоняется от стандартных процессов современной разработки.
- **Ограничения экосистемы**: привязка к фреймворкам, пользовательские API — выбор технологий вынужденно ограничивается конкретной экосистемой.

Эти проблемы особенно ярко проявились в нашем корпоративном проекте 2019 года. Тогда крупный продукт был разделен на более чем десять независимых бизнес-подсистем, которые должны были использовать общий набор базовых и бизнес-компонентов. Изначально использованное решение на основе npm-пакетов для совместного использования компонентов выявило серьезные проблемы с эффективностью поддержки: при обновлении общих компонентов все подсистемы, зависящие от них, должны были проходить полный процесс сборки и развертывания.

## Техническая эволюция

### v1.0: Исследование удаленных компонентов

Для решения проблемы эффективности совместного использования компонентов Esmx v1.0 представил механизм RemoteView на основе HTTP-протокола. Это решение реализовало динамическую сборку кода между сервисами по запросу в runtime, успешно решив проблему длинных цепочек зависимостей при сборке. Однако из-за отсутствия стандартизированного механизма коммуникации в runtime, синхронизация состояния и передача событий между сервисами все еще оставались неэффективными.

### v2.0: Попытка с Module Federation

В версии v2.0 мы использовали технологию [Module Federation](https://webpack.js.org/concepts/module-federation/) из [Webpack 5.0](https://webpack.js.org/). Эта технология значительно повысила эффективность взаимодействия между сервисами благодаря унифицированному механизму загрузки модулей и контейнеру в runtime. Однако в крупномасштабной практике закрытая реализация Module Federation принесла новые вызовы: стало сложно управлять точными версиями зависимостей, особенно при унификации общих зависимостей между несколькими сервисами, часто возникали конфликты версий и ошибки в runtime.

## Вступление в новую эру ESM

При планировании версии v3.0 мы глубоко изучили тенденции развития фронтенд экосистемы и обнаружили, что прогресс нативных возможностей браузера открывает новые возможности для архитектуры микрофронтенда:

### Стандартизированная модульная система

С полной поддержкой [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) в основных браузерах и зрелостью спецификации [Import Maps](https://github.com/WICG/import-maps), фронтенд разработка вступила в настоящую эру модульности. Согласно данным [Can I Use](https://caniuse.com/?search=importmap), поддержка ESM в основных браузерах (Chrome >= 89, Edge >= 89, Firefox >= 108, Safari >= 16.4) достигла 93.5%, что предоставило нам следующие преимущества:

- **Стандартизация управления зависимостями**: Import Maps предоставляет возможность разрешения зависимостей модулей на уровне браузера, без сложной инъекции в runtime.
- **Оптимизация загрузки ресурсов**: Нативный механизм кэширования модулей в браузере значительно повышает эффективность загрузки ресурсов.
- **Упрощение процесса сборки**: Разработка на основе ESM делает процессы сборки в разработке и производстве более согласованными.

Кроме того, благодаря поддержке режима совместимости (Chrome >= 87, Edge >= 88, Firefox >= 78, Safari >= 14), мы можем увеличить покрытие браузеров до 96.81%, что позволяет нам сохранять высокую производительность, не жертвуя поддержкой старых браузеров.

### Прорыв в производительности и изоляции

Нативная модульная система приносит не только стандартизацию, но и значительное улучшение производительности и изоляции:

- **Нулевые накладные расходы в runtime**: Прощание с проксированием JS-песочницы и инъекцией в runtime в традиционных решениях микрофронтенда.
- **Надежная изоляция**: Строгая область видимости модулей ESM естественным образом обеспечивает наиболее надежную изоляцию.
- **Точное управление зависимостями**: Статический анализ импорта делает зависимости более прозрачными, а управление версиями — более точным.

### Выбор инструментов сборки

В процессе реализации технических решений выбор инструментов сборки был ключевым решением. После почти года исследований и практики наш выбор прошел следующие этапы:

1. **Исследование Vite**
   - Преимущества: Сервер разработки на основе ESM, обеспечивающий превосходный опыт разработки.
   - Проблемы: Различия в сборке между средой разработки и производственной средой создавали некоторую неопределенность.

2. **Утверждение [Rspack](https://www.rspack.dev/)**
   - Преимущества производительности: Высокая скорость компиляции благодаря [Rust](https://www.rust-lang.org/).
   - Поддержка экосистемы: Высокая совместимость с экосистемой Webpack, что снижает затраты на миграцию.
   - Поддержка ESM: Практика проекта Rslib подтвердила надежность Rspack в сборке ESM.

Это решение позволило нам сохранить опыт разработки, одновременно получив более стабильную поддержку производственной среды. На основе комбинации ESM и Rspack мы в итоге создали высокопроизводительное и малоинвазивное решение для микрофронтенда.

## Перспективы на будущее

В планах развития фреймворка Esmx основное внимание будет уделено следующим трем направлениям:

### Глубокая оптимизация Import Maps

- **Динамическое управление зависимостями**: Реализация интеллектуального планирования версий зависимостей в runtime для решения конфликтов между несколькими приложениями.
- **Стратегия предзагрузки**: Интеллектуальная предзагрузка на основе анализа маршрутов для повышения эффективности загрузки ресурсов.
- **Оптимизация сборки**: Автоматическая генерация оптимальной конфигурации Import Maps для снижения затрат на ручную настройку разработчиками.

### Независимая от фреймворка маршрутизация

- **Унифицированная абстракция маршрутизации**: Разработка независимого от фреймворка интерфейса маршрутизации, поддерживающего Vue, React и другие популярные фреймворки.
- **Маршрутизация микро-приложений**: Реализация взаимодействия маршрутов между приложениями для поддержания согласованности URL и состояния приложения.
- **Промежуточное ПО маршрутизации**: Предоставление расширяемого механизма промежуточного ПО для поддержки контроля доступа, переходов между страницами и других функций.

### Лучшие практики межфреймворковой коммуникации

- **Примеры приложений**: Предоставление полных примеров межфреймворковой коммуникации, охватывающих Vue, React, Preact и другие популярные фреймворки.
- **Синхронизация состояния**: Легковесное решение для совместного использования состояния на основе ESM.
- **Шина событий**: Стандартизированный механизм коммуникации событий для поддержки развязанной коммуникации между приложениями.

С помощью этих оптимизаций и расширений мы надеемся сделать Esmx более совершенным и удобным решением для микрофронтенда, предоставляя разработчикам лучший опыт разработки и более высокую эффективность.