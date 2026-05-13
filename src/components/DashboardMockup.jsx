function ProgressBar({ label, value, color }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-emphasis">{label}</span>
        <span className="text-[13px] font-semibold text-foreground">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-subtle">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

function MetricCard({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-surface-muted p-3">
      <div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${color}18` }}
      >
        <span style={{ color }}>{icon}</span>
      </div>
      <div className="min-w-0">
        <p className="mb-0.5 text-[11px] font-medium leading-none text-tertiary">{label}</p>
        <p className="truncate text-[13px] font-semibold text-foreground">{value}</p>
      </div>
    </div>
  )
}

export default function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div
        className="w-full rounded-3xl border border-border bg-paper p-6"
        style={{ boxShadow: '0 8px 32px rgba(2, 2, 2, 0.10)' }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-tertiary">Relatório ESG</p>
            <h3 className="text-[15px] font-semibold text-foreground">Performance ESG</h3>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-positive" />
            <span className="text-[12px] font-medium text-muted">Atualizado agora</span>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-end gap-1">
              <span className="text-[52px] font-bold leading-none text-foreground">72</span>
              <span className="mb-1 text-[24px] font-semibold leading-none text-tertiary">/100</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[12px] font-semibold text-primary">Nível Silver</span>
            </div>
          </div>

          <div className="relative h-20 w-20">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90 text-primary">
              <circle cx="40" cy="40" r="30" fill="none" className="stroke-surface-subtle" strokeWidth="8" />
              <circle
                cx="40"
                cy="40"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 30 * 0.72} ${2 * Math.PI * 30 * 0.28}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[13px] font-bold text-foreground">72%</span>
            </div>
          </div>
        </div>

        <div className="mb-5 space-y-3">
          <ProgressBar label="Ambiental" value={80} color="#12B76A" />
          <ProgressBar label="Social" value={65} color="#FEC84B" />
          <ProgressBar label="Governança" value={35} color="#F04438" />
        </div>

        <div className="mb-4 border-t border-border" />

        <div className="grid grid-cols-3 gap-2">
          <MetricCard
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M7 5V9M5 7H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
            label="Risco"
            value="Reduzido"
            color="#12B76A"
          />
          <MetricCard
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 10L5 7L7.5 9.5L12 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            label="Maturidade"
            value="Intermediária"
            color="#538A95"
          />
          <MetricCard
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 4.5V7L8.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
            label="Ações"
            value="14 pendentes"
            color="#FEC84B"
          />
        </div>
      </div>

      <div
        className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-border bg-paper px-4 py-3 lg:block"
        style={{ boxShadow: '0 4px 16px rgba(2, 2, 2, 0.10)' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-positive/10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-positive">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-medium leading-none text-tertiary">Avaliação</p>
            <p className="text-[12px] font-semibold text-foreground">Concluída</p>
          </div>
        </div>
      </div>
    </div>
  )
}
