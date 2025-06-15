# Тестовое задание Live Products Dashboard

### Установка
```
git clone <repo-url>
cd LiveProductsDashboard
npm install 
```

### Команды
```
npm run dev //запуск dev сервера
npm run build //сборка для production
npm run test  //запуск тестов
node ws-server.js // запуск websocket сервера
```
### Структура проекта
```
LiveProductsDashboard/  
├──tests/                   # Тесты  
│  └── HomePage.test.tsx  
│  
├──public                   # Статические файлы   
│    
├──src/  
│   ├── components/         # Компоненты UI  
│   │   ├── CardItem.tsx    # Карточка товара  
│   │   ├── Footer.tsx       
│   │   ├── Header.tsx        
│   │   └── Layout.tsx        
│   │  
│   ├── hooks/              # Кастомные хуки  
│   │   └── useLivePrice.tsx  
│   │  
│   ├── pages/              # Страницы приложения  
│   │   ├── AboutPage.tsx  
│   │   ├── ErrorPage.tsx  
│   │   └── HomePage.tsx  
│   │  
│   ├── services/           # API 
|   |   ├── priceUpdate.ts  # Работа с websocket  
│   │   └── products.ts     # Работа с товарами **Redux Toolkit Query**  
|   | 
│   │  
│   ├── theme/              # Тема приложения  
│   │   └── theme.ts  
│   │  
│   ├── App.tsx             # Корневой компонент    
│   ├── main.tsx            # Точка входа  
│   ├──store.ts             # Redux store  
│   └──vite-env.d.ts        # Типы для переменных окружения Vite  
│   
├── .gitignore              # Список не отслеживаемых git файлов 
├── index.html              # Основной HTML-шаблон приложения (точка входа)  
├── jest-setup.ts           # Глобальная настройка тестовой среды Jest  
├── jest.config.ts          # Конфигурация тестов  
├── package-lock.json       # Автоматически генерируемый файл блокировки версий зависимостей  
├── package.json            # Метаданные проекта и список зависимостей  
├── README.md               # Документация проекта   
├── tsconfig.json           # Настройки TypeScript  
├── vite.config.ts          # Конфигурация Vite  
└── ws-server.js            # WebSocket сервер  
```

### Основные технологии
 - React (v19) - ядро приложения
 - TypeScript - статическая типизация
 - Vite - сборка и dev-сервер
 - Redux Toolkit - управление состоянием
 - Material-UI (MUI) - UI компоненты
 - React Router - навигация

### Тестирование
 - Jest + Testing Library - тесты

### Маршруты:

- / - Главная страница с товарами
- product/:id - Информационная страница
- \* - Страница ошибки
