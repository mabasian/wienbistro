import { ImageResponse } from 'next/og'

// Link-Vorschau ("Visitenkarte") für WhatsApp, Instagram, Facebook, LinkedIn, X …
export const alt = 'WienBistro – Frühstück, Brunch & Specialty Coffee in Wien-Neubau'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(135deg, #1C130D 0%, #2E2018 55%, #5A3A22 100%)',
          color: '#FAF4EC',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Akzent-Ecke */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -160,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,97,47,0.55) 0%, rgba(200,97,47,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#E08A55',
            fontWeight: 600,
          }}
        >
          Café · Brunch · Bistro · Wien-Neubau
        </div>

        {/* Mitte: Marke + Claim */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 132, fontWeight: 800, lineHeight: 1 }}>
            WienBistro
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 44,
              color: 'rgba(250,244,236,0.85)',
              fontWeight: 500,
            }}
          >
            Wiener Frühstückskultur, neu aufgebrüht.
          </div>
        </div>

        {/* Unten: Adresse + URL-Pille */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(250,244,236,0.18)',
            paddingTop: 28,
            fontSize: 28,
          }}
        >
          <div style={{ display: 'flex', color: 'rgba(250,244,236,0.75)' }}>
            Lindengasse 24 · 1070 Wien
          </div>
          <div
            style={{
              display: 'flex',
              background: '#C8612F',
              color: '#FAF4EC',
              padding: '14px 28px',
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            wienbistro.mabasian.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
