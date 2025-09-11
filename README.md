# 🛒 ShopLite — Simple E-commerce (Static)

A compact, beautiful static e-commerce demo built with plain **HTML / CSS / JS** (no framework).  
This repo contains the site files (`index.html`, `site.css`, `site.js`), a `Dockerfile` (to run with **nginx**), and deployment examples (Vercel, Docker Hub, EC2).  

---

## 📑 Table of Contents
1. Features & Goals  
2. Tech Stack  
3. Architecture (Diagram)  
4. Repo Structure  
5. Run Locally  
6. Docker Usage  
7. CI/CD (GitHub Actions → Docker Hub)  
8. Deploy to Vercel (Recommended)  
9. Optional: Deploy to EC2  
10. Troubleshooting  
11. Security Notes  
12. Credits & License  

---

## ✨ Features & Goals
- Minimal static shop UI (hero, products, navbar, footer).  
- Responsive layout + lightweight chatbot.  
- Smooth animations using **GSAP**.  
- Images from **Picsum Photos** (no API key).  
- Dockerfile for containerization with **nginx**.  
- GitHub Actions pipeline to build/push Docker images.  
- Hosting options: **Vercel** (recommended), or EC2 with Docker.  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (vanilla)  
- **Animations:** GSAP (CDN)  
- **Images:** Picsum Photos (placeholder images)  
- **Container:** nginx:alpine  
- **CI/CD:** GitHub Actions  
- **Hosting:** Vercel (static) | AWS EC2 (optional)  

---

## 🏗️ Architecture

```mermaid
flowchart LR
  Dev[Developer]
  GitHub[GitHub Repo]
  Actions[GitHub Actions CI]
  DockerHub[Docker Hub]
  Vercel[Vercel (Static Hosting)]
  EC2[EC2 (optional)]
  Browser[End User Browser]

  Dev --> GitHub
  GitHub --> Actions
  Actions --> DockerHub
  DockerHub --> EC2
  GitHub --> Vercel
  Browser --> Vercel
  Browser --> EC2
