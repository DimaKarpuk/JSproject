const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false, // Запуск в видимом браузере
    viewport: { width: 1280, height: 720 }, // Размер экрана
    ignoreHTTPSErrors: true, // Игнорирование ошибок HTTPS
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Генерация HTML-отчета
});
