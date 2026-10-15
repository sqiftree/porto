# ⚡ Cheatsheet Perintah Operasi Cepat (Quick Commands)

Panduan praktis menjalankan, memonitor, dan mengelola portofolio di lingkungan **WSL & Docker**.

---

## 1. Menjalankan Server Portofolio

| Kebutuhan | Perintah Cepat (Script) | Perintah Asli Docker |
|---|---|---|
| **Jalankan dev (Live terminal)** | `./dev.sh up` | `docker compose up` |
| **Jalankan di background (Detached)** | `./dev.sh detached` | `docker compose up -d` |
| **Matikan server** | `./dev.sh stop` | `docker compose down` |
| **Lihat logs real-time** | `./dev.sh logs` | `docker logs -f yashif-portfolio-dev` |
| **Rebuild container (Tanpa cache)** | `./dev.sh build` | `docker compose build --no-cache app` |
| **Tes build produksi (Port 3001)** | `./dev.sh prod` | `docker compose --profile prod up --build prod-preview` |

---

## 2. Menggunakan `make` (Jika terinstal)

Cukup ketik perintah singkat berikut di terminal:

```bash
make dev      # Menjalankan dev server (port 3000)
make up       # Menjalankan di background (detached)
make down     # Menghentikan server
make logs     # Melihat log container secara langsung
make status   # Melihat status container yang aktif
make clean    # Bersihkan container & cache build yang tidak terpakai
```

---

## 3. Cek Status & Debugging Cepat

```bash
# 1. Cek apakah container sedang aktif:
docker ps

# 2. Cek apakah port 3000 sudah merespon:
curl -I http://localhost:3000

# 3. Masuk ke dalam shell container (jika ingin inspeksi file dalam Docker):
docker exec -it yashif-portfolio-dev sh

# 4. Cek penggunaan resource RAM / CPU container:
docker stats yashif-portfolio-dev
```

---

## 4. Alamat Akses di Browser

- **Mode Development:** [http://localhost:3000](http://localhost:3000)
- **Mode Preview Produksi:** [http://localhost:3001](http://localhost:3001)

---

## 5. Lokasi File Data (Untuk Edit Konten)

Jika ingin menambah atau mengubah data portofolio, cukup edit file di bawah ini (otomatis reload tanpa perlu restart Docker):

- **Data Proyek:** `src/data/projects.ts`
- **Data Top Skills (Bar Peringkat):** `src/data/skills.ts`
- **Data Timeline Pengalaman:** `src/data/experience.ts`
- **Data Feed Aktivitas / Commit:** `src/data/activity.ts`
- **Data Test Case QA Lab:** `src/data/qa-report.ts`
- **Token Warna & Desain:** `src/app/globals.css`
