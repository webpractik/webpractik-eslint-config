<h1>Подключение ESLint к проекту.</h1>

<h2>Установка пакета</h2>
В корневой папке или в папке /local/static/ (в зависимости от проекта) устанавливаем
пакет с нашей конфигурацией eslint.

```
npm i eslint-config-webpractik --save-dev
```

Далее нужно создать в этой же директории файл с именем **.eslintrc** и внутри него прописать строки:

```
{
   "extends": ["webpractik"]
}
```

Если нужно дописать свои правила, следует добавить секцию rules ниже. Например:

```
"rules": {
    "no-mixed-operators": "error"
}
```

Полный список правил и документацию по настройке можно найти на сайте <a href="https://eslint.org/">https://eslint.org/</a>

<h2>Интеграция с PhpStorm</h2>

Eslint по-умолчанию уже установлен в PhpStorm, остается лишь его включить и настроить.

Заходим в: 
```
Settings -> Language & Frameworks -> JavaSctipt -> Code Quality Tools -> Eslint
```

- Ставим настройку **Manual ESLint configuration**<br>
- Выбираем **Node Interpreter** и **ESLint package** (если до этого все сделали правильно, то Storm подскажет варианты)
- В **Configuration file** указываем путь к файлу .eslint


<h2>Пакеты правил</h2>
- **"eslint:recommended"** - рекомендуемые правила. Здесь сборка просто хороших практик написания кода на JS.
- **"google"** - настройки линтера, которыми пользуются в компании Google.
- **"plugin:react/recommended"** - правила линтинга для react-приложений.
<br>

**Дополнительные правила, которые подстраивают под наш код-стиль, плюс те, которые показались полезными для внедрения:**

**indent: 4** - Отступ выставлен в 4 пробела.<br>Подробнее: https://eslint.org/docs/rules/indent#enforce-consistent-indentation-indent<br><br>
**no-var: off** - выключен запрет на var (сейчас у нас много легаси на es5). <br>Подробнее: https://eslint.org/docs/rules/no-var#require-let-or-const-instead-of-var-no-var<br><br>
**no-duplicate-imports** - держим код в чистоте, не дублируем импорты. <br>Подробнее: https://eslint.org/docs/rules/no-duplicate-imports#disallow-duplicate-imports-no-duplicate-imports<br><br>
**max-len** - допускается 120 символов в строке, размер таба - 4 пробела. <br>Подробнее: https://eslint.org/docs/rules/max-len#enforce-a-maximum-line-length-max-len<br><br>
**lines-between-class-members**Ы - улучшаем читаемость, ставим отступ между членами класса. <br>Подробнее: https://eslint.org/docs/rules/lines-between-class-members#require-or-disallow-an-empty-line-between-class-members-lines-between-class-members<br><br>
**yoda** - пишем условия так, чтобы не было затруднений в чтении (без 24 == a). <br>Подробнее: https://eslint.org/docs/rules/yoda#require-or-disallow-yoda-conditions-yoda<br><br>
**comma-dangle** - не оставляем "висящих" запятых в аргументах функций и при объявлении объектов. <br>Подробнее: https://eslint.org/docs/rules/comma-dangle#require-or-disallow-trailing-commas-comma-dangle<br><br>
**block-scoped-var** - проверка на то не выходит ли var за пределы блока. <br>Подробнее: https://eslint.org/docs/rules/block-scoped-var#treat-var-as-block-scoped-block-scoped-var<br><br>
**no-empty-pattern** - не деструктурируем по типу var {} = foo; <br>Подробнее: https://eslint.org/docs/rules/no-empty-pattern <br><br>
**no-inner-declarations** - декларируем функции и переменные на вернем уровне. <br>Подробнее: https://eslint.org/docs/rules/no-inner-declarations#disallow-variable-or-function-declarations-in-nested-blocks--no-inner-declarations<br><br>
**use-isnan** - используем isNaN, когда проверяем является ли что-либо числом. <br>Подробнее: https://eslint.org/docs/rules/use-isnan#require-calls-to-isnan-when-checking-for-nan-use-isnan<br><br>
**no-dupe-class-members** - следим за дублированием в классах. <br>Подробнее: https://eslint.org/docs/rules/no-dupe-class-members#disallow-duplicate-name-in-class-members-no-dupe-class-members<br><br>
**no-unused-vars** - держим код в чистоте, удаляем неиспользуемые переменные. <br>Подробнее: https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars<br><br>
**no-magic-numbers** - избавляемся от литералов, выносим в константу. Исключение: индексы массива и числа -1, 0, 1, 2. <br>Подробнее: https://eslint.org/docs/rules/no-magic-numbers#disallow-magic-numbers-no-magic-numbers<br><br>
**no-use-before-define** - читаемость лучше, если объявления переменной происходит до ее использования. <br>Подробнее: https://eslint.org/docs/rules/no-use-before-define#disallow-early-use-no-use-before-define<br><br>
**padded-blocks** - выключена проверка на отступы в блоках. <br>Подробнее: https://eslint.org/docs/rules/padded-blocks#require-or-disallow-padding-within-blocks-padded-blocks<br><br>
**arrow-parens** - Разрешаем объявлять стрелочные функции с одним аргументом без скобок. <br>Подробнее: https://eslint.org/docs/rules/arrow-parens#require-parens-in-arrow-function-arguments-arrow-parens<br><br>
**no-trailing-spaces** - Выключена ошибка "лишних пробелов". <br>Подробнее: https://eslint.org/docs/rules/no-trailing-spaces#disallow-trailing-whitespace-at-the-end-of-lines-no-trailing-spaces<br><br>
<br>
В глобальных переменных обозначены:
- Переменные браузера
- Jquery
- BX (на проектах без битрикса можно отключать)


