# 🛒 E-Commerce Website

A containerized **E-Commerce Website** built with **HTML, CSS, and JS (frontend)** and deployed using **Docker**.  
CI/CD is automated with **GitHub Actions** to build & push Docker images to **Docker Hub**.  
Deployment can be done on **Vercel**, or other container platforms like AWS Elastic Beanstalk or ECS.

---

## 🚀 Features
- Responsive static frontend (HTML, CSS, JS).
- Smooth animations with **GSAP**.
- Optimized image hosting using **Picsum.photos**.
- Dockerized using **Nginx** for fast static hosting.
- CI/CD pipeline with GitHub Actions → Docker Hub.
- Can be deployed on **Vercel** for free hosting.

---

## 🏗️ Architecture

```text
                        +----------------------+
                        |   Developer Laptop   |
                        | (HTML, CSS, JS code) |
                        +----------+-----------+
                                   |
                                   v
                        +----------------------+
                        |     GitHub Repo      |
                        +----------+-----------+
                                   |
                         GitHub Actions (CI/CD)
                         Build & Push Docker Image
                                   |
                                   v
                        +----------------------+
                        |     Docker Hub       |
                        | (oluwaloseye/ecommerce-site) |
                        +----------+-----------+
                                   |
                        Deploy using Vercel / AWS
                                   |
                                   v
                        +----------------------+
                        |   End User Browser   |
                        |  (www.myecommercesite.com) |
                        +----------------------+
