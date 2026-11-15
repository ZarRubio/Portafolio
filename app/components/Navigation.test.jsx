import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('preserves the equivalent route in the language switcher', () => {
    render(
      <MemoryRouter initialEntries={['/proyectos/cotizador-movil']}>
        <Navigation locale='es' />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/mobile-quoting-app');
  });

  it('opens an accessible mobile dialog, traps focus and closes on Escape', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navigation locale='es' />
      </MemoryRouter>,
    );

    const trigger = screen.getByRole('button', { name: 'Abrir menú' });
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('dialog', { name: 'Navegación principal' })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('hidden');

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
