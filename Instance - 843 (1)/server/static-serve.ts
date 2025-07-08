import path from 'path';
import express from 'express';

/**
 * Sets up static file serving for the Express app
 * @param app Express application instance
 */
export function setupStaticServing(app: express.Application) {
  // Serve static files from the dist/public directory in production
  const publicPath = process.env.NODE_ENV === 'production' 
    ? path.join(process.cwd(), 'public')
    : path.join(process.cwd(), 'dist/public');
    
  app.use(express.static(publicPath));

  // For any other routes that don't start with /api, serve the index.html file
  // This ensures client-side routing works properly
  app.get('/*splat', (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    // Serve index.html for all other routes to support client-side routing
    res.sendFile(path.join(publicPath, 'index.html'));
    return;
  });
}
