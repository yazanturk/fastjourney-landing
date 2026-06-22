const API_URL = 'http://localhost:8000';

export async function sendEmail({ to, subject, body, html }) {
  const res = await fetch(`${API_URL}/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to, subject, body, html }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Failed to send email');
  }

  return res.json();
}
