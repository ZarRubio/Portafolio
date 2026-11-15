import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ContactForm } from './ContactForm';

async function completeForm(user) {
  await user.type(screen.getByLabelText('Nombre'), 'Ada Lovelace');
  await user.type(screen.getByLabelText('Email'), 'ada@example.com');
  await user.type(screen.getByLabelText('Asunto'), 'Proyecto backend');
  await user.type(screen.getByLabelText('Mensaje'), 'Necesito una API documentada para un nuevo producto.');
}

describe('ContactForm', () => {
  it('submits once and announces success', async () => {
    const user = userEvent.setup();
    const request = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', request);
    render(<ContactForm locale='es' formId='abc123' />);
    await completeForm(user);

    const submit = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submit);
    fireEvent.click(submit);

    expect(submit).toBeDisabled();
    await waitFor(() => expect(screen.getByText('Mensaje enviado')).toBeInTheDocument());
    expect(request).toHaveBeenCalledTimes(1);
    expect(request.mock.calls[0][0]).toBe('https://formspree.io/f/abc123');
  });

  it('announces an API error and preserves a direct contact path', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    render(<ContactForm locale='es' formId='abc123' />);
    await completeForm(user);
    await user.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    await waitFor(() => expect(screen.getByText('No se pudo enviar')).toBeInTheDocument());
    expect(screen.getByRole('link', { name: /arubiocalixto@gmail.com/i })).toHaveAttribute('href', 'mailto:arubiocalixto@gmail.com');
  });

  it('shows a mail fallback when Formspree is not configured', () => {
    render(<ContactForm locale='en' formId='' />);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(screen.getByText(/form will be enabled/i)).toBeInTheDocument();
  });
});
