# GestureClimb – Project Showcase Website

A modern, responsive, gaming-inspired project showcase website for **GestureClimb** (Real-Time Hand Gesture Controller for Hill Climb Racing on Windows PC).

Built with **React**, **Vite**, and customized cyber-gaming **CSS**.

---

## 🚀 Features

- **Gaming-Inspired Dark Aesthetic**: Deep space dark backgrounds with neon emerald (`#10B981`), racing red (`#EF4444`), and electric cyan (`#38BDF8`) accents.
- **Authentic Gameplay Media**: Features real footage from the Windows Microsoft Store Hill Climb Racing application with the MediaPipe vision window.
- **Interactive Sections**:
  1. **Hero**: Headline, live metrics, and HUD preview.
  2. **About**: Explains the zero-imitation external controller architecture.
  3. **Pipeline**: 5-step interactive diagram (Webcam → Hand Tracking → Gesture Geometry & Stabilization → SendInput → Game).
  4. **Gesture Controls**: Visual cards for Open Palm (Gas / Right Arrow), Closed Fist (Brake / Left Arrow), and No Hand (Neutral release).
  5. **Tech Stack**: Python 3.12, OpenCV, MediaPipe, Windows SendInput, NumPy, PyAutoGUI, Tkinter.
  6. **Live Showcase & Video Demo**: Authentic gameplay screenshot and interactive player breakdown.
  7. **Installation Guide**: PowerShell quickstart, automated test runner, in-game hotkeys, and copyable terminal snippets.
  8. **GitHub Repository Card**: Open source repository link placeholder.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile screens.
- **Zero Fake Functionality**: Accurately clarifies that this web showcase is an informative frontend, while the Python vision controller runs natively on Windows.

---

## 🛠️ Local Development

### 1. Navigate to the website directory
```bash
cd website
```

### 2. Install dependencies (if not already installed)
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized static build will be placed in the `dist/` directory.

---

## 🌐 Deploy to Vercel

### Method 1: Deploy using Vercel CLI (Recommended & Fastest)

1. Install the Vercel CLI globally (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. Inside the `website` directory, run:
   ```bash
   cd website
   vercel
   ```

3. Follow the quick prompts in your terminal:
   - **Set up and deploy?**: `y`
   - **Which scope?**: Select your Vercel account
   - **Link to existing project?**: `n`
   - **Project name?**: `gestureclimb-showcase` (or press Enter)
   - **Directory located?**: `./` (press Enter)
   - **Want to modify settings?**: `n`

4. For production deployment:
   ```bash
   vercel --prod
   ```

---

### Method 2: Deploy via Vercel Dashboard & GitHub

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Add GestureClimb showcase website"
   git push origin main
   ```

2. Go to [https://vercel.com/new](https://vercel.com/new) and log in with GitHub.
3. Import your `GestureClimb` repository.
4. Under **Root Directory**, click **Edit** and select:
   ```
   website
   ```
5. Framework Preset will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Vercel will build and assign you a live production URL (e.g. `https://gestureclimb-showcase.vercel.app`).

