// SystemFooter.jsx
export default function SystemFooter() {
  return (
    <div className="bg-dark text-white small p-2 d-flex justify-content-between mt-auto">
      <div>SYSTEM_LATENCY: 12MS</div>
      <div>ENCRYPTION: AES-256-GCM</div>
      <div className="text-danger fw-bold">CRITICAL_ALERTS: 0</div>
      <div>TIME_UTC: {new Date().toISOString()}</div>
    </div>
  );
}