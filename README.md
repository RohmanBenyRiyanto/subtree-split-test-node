# Monorepo with Auto Subtree Split

Monorepo yang otomatis split ke sub-repository terpisah untuk PHP dan Node packages.

## Packages

- **PHP Package**: [subtree-split-test-php](https://github.com/RohmanBenyRiyanto/subtree-split-test-php)
- **Node Package**: [subtree-split-test-node](https://github.com/RohmanBenyRiyanto/subtree-split-test-node)

## How It Works

Setiap push ke `main` branch akan otomatis:
1. Check apakah sub-repository sudah ada
2. Buat sub-repository baru jika belum ada
3. Split folder `php/` dan `node/` ke repository masing-masing
4. Push changes ke sub-repository

## Releasing

Untuk publish package:

```bash
# Buat tag
git tag v1.0.0
git push origin v1.0.0
```

Workflow akan otomatis:
- Split code ke sub-repository
- Publish ke NPM (jika `NPM_TOKEN` configured)
- Packagist akan auto-detect tag baru

## Adding New Language/Package

Tambahkan entry baru di `.github/workflows/subtree-split.yml`:

```yaml
- name: python
  path: python
  repo: subtree-split-test-python
```

## Development

```bash
# Clone repository
git clone https://github.com/RohmanBenyRiyanto/subtree-split-test.git

# Work on packages
cd php/
# or
cd node/

# Commit and push
git add .
git commit -m "Update package"
git push origin main
```

## License

MIT