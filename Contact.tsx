@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-primary: #030712;
    --bg-secondary: #080c18;
    --bg-card: #0d1220;
    --cyan: #00e5e0;
    --green: #00d084;
    --purple: #8b5cf6;
    --red: #f43f5e;
    --text-primary: #e8ecf1;
    --text-muted: #64748b;
    --text-dim: #3d4f6a;
    --border-color: rgba(0, 229, 224, 0.12);
    --glow-cyan: 0 0 30px rgba(0, 229, 224, 0.25), 0 0 60px rgba(0, 229, 224, 0.08);
    --glow-green: 0 0 30px rgba(0, 208, 132, 0.25), 0 0 60px rgba(0, 208, 132, 0.08);

    --background: 222 47% 3%;
    --foreground: 214 20% 93%;
    --card: 222 38% 7%;
    --card-foreground: 214 20% 93%;
    --popover: 222 38% 7%;
    --popover-foreground: 214 20% 93%;
    --primary: 177 100% 45%;
    --primary-foreground: 222 47% 3%;
    --secondary: 222 38% 7%;
    --secondary-foreground: 214 20% 93%;
    --muted: 222 38% 7%;
    --muted-foreground: 215 16% 47%;
    --accent: 222 38% 7%;
    --accent-foreground: 214 20% 93%;
    --destructive: 347 77% 50%;
    --destructive-foreground: 214 20% 93%;
    --border: 177 100% 45% / 0.12;
    --input: 222 38% 15%;
    --ring: 177 100% 45%;
    --radius: 0.625rem;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    line-height: 1.6;
  }

  * {
    @apply border-border;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--cyan);
    border-radius: 3px;
  }
}
