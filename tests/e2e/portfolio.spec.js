import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 768, 1440]) {
  test(`home remains navigable and stable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Soy Adrián');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);

    if (width < 820) {
      await page.getByRole('button', { name: 'Abrir menú' }).click();
      await expect(page.getByRole('dialog', { name: 'Navegación principal' })).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(page.getByRole('dialog')).toHaveCount(0);
    } else {
      await expect(page.getByRole('navigation', { name: 'Navegación principal' })).toBeVisible();
    }
  });
}

test('deep links, reloads and locale equivalents use prerendered routes', async ({ page }) => {
  await page.goto('/proyectos/cotizador-movil');
  await expect(page.getByRole('heading', { level: 1, name: 'Cotizador móvil' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'Cotizador móvil' })).toBeVisible();

  await page.getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/projects\/mobile-quoting-app$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1, name: 'Mobile quoting app' })).toBeVisible();
});

test('unknown routes render an indexable-safe 404 experience', async ({ page }) => {
  await page.goto('/ruta-inexistente');
  await expect(page.getByRole('heading', { level: 1, name: /Esta ruta/ })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});

test('legacy public routes redirect to their equivalent sections', async ({ page }) => {
  await page.goto('/about');
  await expect(page).toHaveURL(/\/#profile$/);
  await expect(page.getByRole('heading', { name: 'Me interesa que el software sea fácil de continuar.' })).toBeVisible();
});

test('Formspree success and error responses are announced', async ({ page }) => {
  let shouldFail = false;
  await page.route('https://formspree.io/f/**', async (route) => {
    await route.fulfill({ status: shouldFail ? 500 : 200, contentType: 'application/json', body: '{}' });
  });
  await page.goto('/#contact');

  const fillForm = async (suffix) => {
    await page.getByLabel('Nombre').fill(`Ada ${suffix}`);
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill(`ada${suffix}@example.com`);
    await page.getByLabel('Asunto').fill('Proyecto backend');
    await page.getByLabel('Mensaje').fill('Necesito una API documentada para un producto nuevo.');
  };

  await fillForm('ok');
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.getByText('Mensaje enviado')).toBeVisible();

  await page.reload();
  shouldFail = true;
  await fillForm('error');
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.getByText('No se pudo enviar')).toBeVisible();
});

test('home has no automatically detectable serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact))).toEqual([]);
});
