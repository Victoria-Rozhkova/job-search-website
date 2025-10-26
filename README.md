# Job Search Website

* В проекте используется [json-server](https://www.npmjs.com/package/json-server) для собственного сервера
* Написаны кастомные компоненты
* Настроен [eslint](https://eslint.org/)
* Для стилей используется [tailwindcss](https://tailwindcss.com/) и [clsx](https://www.npmjs.com/package/clsx)
* Настроены аллиасы при помощи [craco](https://craco.js.org/)
* Использован стейт менеджер [redux-toolkit](https://redux-toolkit.js.org/)
* Проект типизирован с [Typescript](https://www.typescriptlang.org/)
* Используется [router](https://reactrouter.com/)
* Для форм используется [react-hook-form](https://react-hook-form.com/)
* Настроен запуск проекта и сервера одновременно одной командой
* Проект еще не дописан, пока есть страницы Вход, Главная, Профиль и Пользователи.

Есть страница авторизации и регистрации, настроена валидация полей

На главной странице реализован слайдер с пользователями, работает как по клику на стрелки, так и по скроллу.
Можно обновить свой аватар, а также удалить его. Добавить пост, отредактировать его или удалить. Также есть блок с рекомендациями, там находятся пользователи, на которых можно подписаться.

![preview](https://raw.githubusercontent.com/Victoria-Rozhkova/job-search-website/refs/heads/preview/preview.png)

На странице профиля можно изменить свой email, пароль, имя, фамилию, а также описать свои скиллы.

На странице пользователей можно сортировать пользователей, отображать всех, на которых подписаны или не подписаны.
Реализована пагинация и общий layout.

![preview](https://raw.githubusercontent.com/Victoria-Rozhkova/job-search-website/refs/heads/preview/preview2.png)


## Первый запуск

```
npm install
```

```
npm start
```

### Стек: React 18, Typescript, Redux-toolkit, Router, Tailwind, Eslint, React-hook-form, json-server, craco



