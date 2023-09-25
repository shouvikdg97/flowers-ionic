import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'flowers.ionic',
  appName: 'flowers-ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
