# Deployment Guide - Coastal Café Demo

This guide walks through deploying the Coastal Café demo to Vercel with Supabase PostgreSQL.

## 🗄️ Step 1: Set Up Supabase Database

### Create Supabase Project

1. Visit [supabase.com](https://supabase.com)
2. Create a new account or sign in
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - **Name**: `coastal-cafe-cms`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users
6. Click "Create new project"

### Get Database URL

Once your project is ready:

1. Go to Settings > Database
2. Copy the Connection string (URI format)
3. Replace `[YOUR-PASSWORD]` with your actual database password
4. Save this URL - you'll need it for environment variables

Example format:
```
postgresql://postgres.xyz:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:5432/postgres
```

## 🚀 Step 2: Deploy to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Coastal Café demo"
   git remote add origin https://github.com/yourusername/coastal-cafe-demo.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `coastal-cafe-demo` repository
   - Click "Deploy"

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

## ⚙️ Step 3: Configure Environment Variables

In your Vercel dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add the following variables:

### Required Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `DATABASE_URL` | `your-supabase-connection-string` | PostgreSQL connection |
| `PAYLOAD_SECRET` | `generate-random-32-char-string` | PayloadCMS secret key |
| `NEXT_PUBLIC_SERVER_URL` | `https://your-project.vercel.app` | Your Vercel URL |

### Optional Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Environment type |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xyz.supabase.co` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your-anon-key` | Supabase anonymous key |

### Generate Secret Key

For `PAYLOAD_SECRET`, generate a secure random string:

```bash
# Option 1: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Using OpenSSL
openssl rand -hex 32
```

## 🔄 Step 4: Redeploy with Environment Variables

After adding environment variables:

1. Go to your Vercel project dashboard
2. Click "Deployments"
3. Click "Redeploy" on the latest deployment
4. Or push a new commit to trigger automatic deployment

## 🎯 Step 5: Verify Deployment

### Test the Deployment

1. **Frontend**: Visit `https://your-project.vercel.app`
   - Should show the Coastal Café homepage
   - Navigation and components should work
   - Default content should be visible

2. **CMS Admin**: Visit `https://your-project.vercel.app/admin`
   - Should show PayloadCMS login screen
   - If there's a database connection issue, check your `DATABASE_URL`

### First-Time Setup

When you first visit `/admin`:

1. **Create Admin Account:**
   - Fill in email and password for the admin user
   - Click "Create Account"

2. **Add Content:**
   - Navigate through the collections (Hero, Menu, Features, Contact)
   - Add your content or import the provided seed data
   - Changes will appear immediately on the frontend

## 📊 Step 6: Database Schema Initialization

The database schema will be automatically created on the first run. If you need to manually initialize:

1. **Via Vercel Functions:**
   The schema creates itself when PayloadCMS first connects

2. **Via Local Development:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/admin
   # Schema will be created automatically
   ```

## 🛠️ Troubleshooting

### Common Issues

**Database Connection Errors:**
- Verify `DATABASE_URL` is correct
- Check Supabase project is active
- Ensure password in URL is correctly URL-encoded

**Build Failures:**
- Check all environment variables are set
- Verify Next.js and PayloadCMS versions are compatible
- Review Vercel build logs for specific errors

**CMS Admin Not Loading:**
- Confirm `PAYLOAD_SECRET` is set
- Check `NEXT_PUBLIC_SERVER_URL` matches your domain
- Verify database connection is working

**Missing Content:**
- Admin needs to create content first
- Fallback content should display if CMS is empty
- Check API routes are working: `/api/collections`

### Performance Optimization

**Vercel Function Timeout:**
- The `vercel.json` sets max duration to 30 seconds for API routes
- Adjust if needed for large data operations

**Database Connection Pooling:**
- Supabase provides connection pooling by default
- Monitor connection usage in Supabase dashboard

## 🔒 Security Notes

1. **Environment Variables:**
   - Never commit `.env` files to git
   - Use strong passwords for database and PayloadCMS secret

2. **Supabase Security:**
   - Review Row Level Security (RLS) policies if needed
   - PayloadCMS handles authentication and authorization

3. **Vercel Security:**
   - Environment variables are encrypted at rest
   - Functions run in isolated environments

## 📈 Monitoring

### Vercel Analytics
- Enable analytics in project settings
- Monitor deployment frequency and performance

### Supabase Monitoring
- Track database usage and performance
- Set up alerts for connection limits

### PayloadCMS Logs
- Check Vercel function logs for CMS errors
- Monitor admin user activity

## 🔄 Updates and Maintenance

### Updating Content
- Use the `/admin` interface to update content
- Changes reflect immediately on the frontend

### Code Updates
```bash
git add .
git commit -m "Update: description"
git push
# Vercel auto-deploys from GitHub
```

### Database Migrations
- PayloadCMS handles schema changes automatically
- Monitor Supabase for any migration issues

---

## 🎉 Success!

Your Coastal Café demo should now be live with:

✅ Working frontend at `https://your-project.vercel.app`  
✅ CMS admin at `https://your-project.vercel.app/admin`  
✅ Real-time content management  
✅ Production-ready deployment  

The site now demonstrates the complete AI Theme Generator workflow with live content management!