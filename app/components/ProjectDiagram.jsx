import { ArrowRight } from '@phosphor-icons/react';

export function ProjectDiagram({ nodes, title, accent = 'cyan', compact = false, statusLabel = 'System map' }) {
  return (
    <div className={`system-diagram system-diagram--${accent} ${compact ? 'system-diagram--compact' : ''}`}>
      <div className='system-diagram-head'>
        <span>{title}</span>
        <span className='system-live'><i /> {statusLabel}</span>
      </div>
      <div className='system-flow' role='img' aria-label={nodes.join(' → ')}>
        {nodes.map((node, index) => (
          <div className='system-flow-item' key={node}>
            <span className='system-node'>{node}</span>
            {index < nodes.length - 1 && (
              <span className='system-arrow' aria-hidden='true'>
                <ArrowRight size={16} weight='light' />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
