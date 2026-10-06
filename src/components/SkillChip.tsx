import React from 'react';
import { Check, Plus } from 'lucide-react';

interface SkillChipProps {
  name: string;
  selected: boolean;
  onToggle: (name: string) => void;
  priority?: 'high' | 'medium' | 'low';
  interactive?: boolean;
}

export const SkillChip: React.FC<SkillChipProps> = ({
  name,
  selected,
  onToggle,
  interactive = true,
}) => {
  return (
    <button
      type="button"
      disabled={!interactive}
      onClick={() => interactive && onToggle(name)}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 ${
        selected
          ? 'bg-burnt text-cream shadow-warm-sm border border-burnt hover:bg-burnt-hover'
          : 'bg-cream-card/70 text-deep border border-brown/30 hover:border-burnt hover:bg-cream-dark'
      } ${!interactive ? 'cursor-default' : 'cursor-pointer active:scale-95'}`}
    >
      {selected ? (
        <Check className="w-3.5 h-3.5 text-cream stroke-[2.5]" />
      ) : (
        interactive && <Plus className="w-3.5 h-3.5 text-brown/70 stroke-[2.5]" />
      )}
      <span>{name}</span>
    </button>
  );
};
