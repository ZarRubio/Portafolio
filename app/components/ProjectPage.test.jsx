import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import { ProjectPage } from './ProjectPage';

describe('ProjectPage evidence controls', () => {
  it('hides repository and demo actions when no verified URL exists', () => {
    render(
      <MemoryRouter initialEntries={['/proyectos/pumpyia']}>
        <Routes>
          <Route path='/proyectos/:slug' element={<ProjectPage locale='es' />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.queryByRole('link', { name: /ver código/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /abrir demo/i })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'PumpyIA' })).toBeInTheDocument();
  });
});
