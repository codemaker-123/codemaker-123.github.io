'use client';

import { useEffect, useState } from 'react';

const COUNTER_ENDPOINT = 'https://api.counterapi.dev/v1/codemaker-123-personal-website/visits/up';

export default function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch(COUNTER_ENDPOINT)
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Unable to record visit')))
      .then((data: { count: number }) => setVisits(data.count))
      .catch(() => undefined);
  }, []);

  if (visits === null) return null;

  return <span>Visits: {visits.toLocaleString()}</span>;
}
