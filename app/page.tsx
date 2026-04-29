export default function Home() {
  return (
    <main className="ui-container" style={{ paddingBlock: "var(--space-16)" }}>
      <h1 style={{ margin: 0, fontSize: "var(--text-h1)" }}>Проект запущен</h1>
      <p style={{ margin: "0.75rem 0 0", color: "var(--color-text-muted)" }}>
        Текущая итерация сфокусирована на визуальной системе и базовых UI-компонентах.
      </p>
      <p style={{ margin: "0.75rem 0 0", color: "var(--color-text-muted)" }}>
        Откройте <a href="/style-guide">/style-guide</a>, чтобы посмотреть reference-страницу.
      </p>
    </main>
  );
}
