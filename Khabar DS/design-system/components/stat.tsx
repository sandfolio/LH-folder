import * as React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from './utils';

// ─── Election Result Stat ─────────────────────────────────────────────────────

interface ElectionStatProps {
  partyName: string;
  partyShort: string;
  seats: number;
  totalSeats: number;
  colour: string;       // hex
  leading?: number;
  trend?: 'up' | 'down' | 'same';
  isMajority?: boolean;
}

export function ElectionStat({
  partyName,
  partyShort,
  seats,
  totalSeats,
  colour,
  leading,
  trend,
  isMajority,
}: ElectionStatProps) {
  const pct = Math.round((seats / totalSeats) * 100);
  return (
    <div className="bg-surface rounded-lg border border-line p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: colour }}
          />
          <span className="text-label font-latin font-semibold text-ink-900">{partyShort}</span>
          {isMajority && (
            <span className="text-[10px] font-latin font-bold text-success-600 bg-success-100 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
              बहुमत
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-caption text-ink-500">
          {trend === 'up' && <TrendingUp className="w-3 h-3 text-success-600" strokeWidth={2} />}
          {trend === 'down' && <TrendingDown className="w-3 h-3 text-danger-600" strokeWidth={2} />}
          {trend === 'same' && <Minus className="w-3 h-3 text-ink-300" strokeWidth={2} />}
          {leading !== undefined && (
            <span className="font-latin">{leading > 0 ? `+${leading}` : leading} आगे</span>
          )}
        </div>
      </div>

      <p className="text-display-md font-latin font-bold text-ink-900 leading-none mb-1">
        {seats.toLocaleString('hi-IN')}
        <span className="text-body-sm font-medium text-ink-500 ml-1">सीटें</span>
      </p>
      <p className="text-caption text-ink-500 font-devanagari mb-2">{partyName}</p>

      {/* Bar */}
      <div className="h-1.5 bg-raised rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-lg ease-out"
          style={{ width: `${pct}%`, backgroundColor: colour }}
        />
      </div>
      <p className="text-caption text-ink-500 font-latin mt-1">{pct}% ({seats}/{totalSeats})</p>
    </div>
  );
}

// ─── Big Number Stat ──────────────────────────────────────────────────────────

interface BigStatProps {
  value: string;       // e.g. "₹4.2 लाख करोड़"
  label: string;       // e.g. "रक्षा बजट 2024–25"
  sublabel?: string;   // e.g. "पिछले साल से 13% अधिक"
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function BigStat({ value, label, sublabel, trend = 'neutral', className }: BigStatProps) {
  return (
    <div className={cn('bg-surface rounded-lg border border-line p-5 flex flex-col gap-1', className)}>
      <p className="text-display-lg font-latin font-bold text-ink-900 leading-none">{value}</p>
      <p className="text-body-sm font-devanagari font-medium text-ink-700">{label}</p>
      {sublabel && (
        <p className={cn(
          'text-caption font-devanagari flex items-center gap-1',
          trend === 'up' && 'text-success-600',
          trend === 'down' && 'text-danger-600',
          trend === 'neutral' && 'text-ink-500',
        )}>
          {trend === 'up' && <TrendingUp className="w-3 h-3" strokeWidth={2} />}
          {trend === 'down' && <TrendingDown className="w-3 h-3" strokeWidth={2} />}
          {sublabel}
        </p>
      )}
    </div>
  );
}

// ─── Market Ticker ────────────────────────────────────────────────────────────

interface MarketItemProps {
  name: string;
  value: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

export function MarketItem({ name, value, change, changePercent, isPositive }: MarketItemProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-line last:border-0">
      <span className="text-body-sm font-latin font-semibold text-ink-900">{name}</span>
      <div className="text-right">
        <p className="text-body-sm font-latin font-bold text-ink-900">{value}</p>
        <p className={cn(
          'text-caption font-latin',
          isPositive ? 'text-success-600' : 'text-danger-600',
        )}>
          {isPositive ? '+' : ''}{change} ({isPositive ? '+' : ''}{changePercent}%)
        </p>
      </div>
    </div>
  );
}
