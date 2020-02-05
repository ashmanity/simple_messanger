#  simple messenger for learning

## Backend

### Работа с проектом

Рекомендуется операционная система Linux и связка `pyenv` + `poetry`.
после клонирования проекта необходимо перейти в директорию проекта и в консоли прописать:
```
pyenv install 3.7.3
pyenv local 3.7.3
poetry install
``` 

## Frontend

### Работа с проектом
Для работы с фронтовой частью сайта используется Vue.js.

Для корректной работы необходимо выполнить ряд следжующих действий:
```
npm init
```
Установка `webpack-dev-server`: 
```
npm install webpack webpack-cli webpack-dev-server path --save-dev
Webpack-merge npm i webpack-merge --save-dev
```
Установка `bable 7`:
```
npm install @babel/core @babel/preset-env babel-loader —save-dev
```
Установка `mini-css-extract-plugin`
```
npm install css-loader mini-css-extract-plugin --save-dev
```
SASS. Обработка:
```
npm install style-loader sass-loader node-sass --save-dev
```
Установка postcss плагинов npm:
```
install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
```
Подключаем `file-loader`:
```
npm install --save-dev file-loader
```
Устновка `copy-webpack-plugin`:
```
npm install copy-webpack-plugin --save-dev
```
Установка `html-webpack-plugin`:
```
npm install html-webpack-plugin --save-dev
```
Установка `Vue`:
```
npm i vue --save npm i vue-loader vue-style-loader vue-template-compiler --save-dev
```

### Полезные ссылки
- Для работы с Flask: https://flask.palletsprojects.com/en/1.1.x/
- Для работы с View.js: https://vuejs.org/