---
titleSuffix: Справочник API конфигурации модулей Gez
description: Подробное описание интерфейса конфигурации ModuleConfig в Gez, включая правила импорта/экспорта модулей, настройку алиасов и управление внешними зависимостями, чтобы помочь разработчикам глубже понять модульную систему фреймворка.
head:
  - - meta
    - property: keywords
      content: Gez, ModuleConfig, конфигурация модулей, импорт/экспорт модулей, внешние зависимости, настройка алиасов, управление зависимостями, фреймворк для веб-приложений
---

# ModuleConfig

ModuleConfig предоставляет функциональность конфигурации модулей в Gez, позволяя определять правила импорта/экспорта модулей, настройку алиасов и внешние зависимости.

## Определение типов

### PathType

- **Определение типа**:
```ts
enum PathType {
  npm = 'npm:', 
  root = 'root:'
}
```

Перечисление типов путей модулей:
- `npm`: указывает на зависимости в node_modules
- `root`: указывает на файлы в корневой директории проекта

### ModuleConfig

- **Определение типа**:
```ts
interface ModuleConfig {
  exports?: string[]
  imports?: Record<string, string>
  externals?: Record<string, string>
}
```

Интерфейс конфигурации модулей, используемый для определения экспорта, импорта и внешних зависимостей сервиса.

#### exports

Список конфигураций экспорта, который позволяет открывать определённые единицы кода (например, компоненты, утилиты и т.д.) в формате ESM.

Поддерживаются два типа:
- `root:*`: экспорт исходных файлов, например: 'root:src/components/button.vue'
- `npm:*`: экспорт сторонних зависимостей, например: 'npm:vue'

#### imports

Карта конфигураций импорта, которая определяет удалённые модули и их локальные пути.

Конфигурация зависит от способа установки:
- Установка из исходников (Workspace, Git): необходимо указывать на директорию dist
- Установка пакетов (Link, статический сервер, приватный репозиторий, File): указывать напрямую на директорию пакета

#### externals

Карта внешних зависимостей, которая определяет используемые внешние зависимости, обычно это зависимости из удалённых модулей.

**Пример**:
```ts title="entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
  modules: {
    // Конфигурация экспорта
    exports: [
      'root:src/components/button.vue',  // Экспорт исходного файла
      'root:src/utils/format.ts',
      'npm:vue',  // Экспорт сторонней зависимости
      'npm:vue-router'
    ],

    // Конфигурация импорта
    imports: {
      // Установка из исходников: необходимо указывать на директорию dist
      'ssr-remote': 'root:./node_modules/ssr-remote/dist',
      // Установка пакетов: указывать напрямую на директорию пакета
      'other-remote': 'root:./node_modules/other-remote'
    },

    // Конфигурация внешних зависимостей
    externals: {
      'vue': 'ssr-remote/npm/vue',
      'vue-router': 'ssr-remote/npm/vue-router'
    }
  }
} satisfies GezOptions;
```

### ParsedModuleConfig

- **Определение типа**:
```ts
interface ParsedModuleConfig {
  name: string
  root: string
  exports: {
    name: string
    type: PathType
    importName: string
    exportName: string
    exportPath: string
    externalName: string
  }[]
  imports: {
    name: string
    localPath: string
  }[]
  externals: Record<string, { match: RegExp; import?: string }>
}
```

Разобранная конфигурация модулей, которая преобразует исходную конфигурацию в стандартизированный внутренний формат:

#### name
Имя текущего сервиса
- Используется для идентификации модулей и генерации путей импорта

#### root
Путь к корневой директории текущего сервиса
- Используется для разрешения относительных путей и хранения артефактов сборки

#### exports
Список конфигураций экспорта
- `name`: исходный путь экспорта, например: 'npm:vue' или 'root:src/components'
- `type`: тип пути (npm или root)
- `importName`: имя импорта, формат: '${serviceName}/${type}/${path}'
- `exportName`: путь экспорта, относительно корневой директории сервиса
- `exportPath`: фактический путь к файлу
- `externalName`: имя внешней зависимости, используемое для идентификации при импорте этого модуля в других сервисах

#### imports
Список конфигураций импорта
- `name`: имя внешнего сервиса
- `localPath`: локальный путь хранения, используемый для хранения артефактов сборки внешних модулей

#### externals
Карта внешних зависимостей
- Сопоставляет пути импорта модулей с фактическими путями модулей
- `match`: регулярное выражение для сопоставления операторов импорта
- `import`: фактический путь к модулю